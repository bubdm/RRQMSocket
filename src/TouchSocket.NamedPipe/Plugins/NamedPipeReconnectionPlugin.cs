﻿using System;
using System.Threading.Tasks;
using TouchSocket.Core;
using TouchSocket.Sockets;

namespace TouchSocket.NamedPipe
{
    /// <summary>
    /// 重连插件
    /// </summary>
    [PluginOption(Singleton = true, NotRegister = true)]
    public sealed class NamedPipeReconnectionPlugin<TClient> : PluginBase where TClient : class, INamedPipeClient
    {
        private bool m_polling;

        /// <summary>
        /// 重连插件
        /// </summary>
        public NamedPipeReconnectionPlugin()
        {
            this.ActionForConnect = async (c) =>
            {
                try
                {
                    await c.ConnectAsync();
                    return true;
                }
                catch
                {
                    return false;
                }
            };

            this.ActionForCheck = (c, i) =>
            {
                return Task.FromResult<bool?>(c.Online);
            };
        }

        /// <summary>
        /// 每个周期可执行的委托。用于检验客户端活性。返回true表示存活，返回
        /// </summary>
        public Func<TClient, int, Task<bool?>> ActionForCheck { get; set; }

        /// <summary>
        /// ActionForConnect
        /// </summary>
        public Func<TClient, Task<bool>> ActionForConnect { get; set; }

        /// <summary>
        /// 检验时间间隔
        /// </summary>
        public TimeSpan Tick { get; set; } = TimeSpan.FromSeconds(1);

        /// <summary>
        /// 每个周期可执行的委托。返回值为True标识客户端存活。返回False，表示失活，立即重连。返回null时，表示跳过此次检验。
        /// </summary>
        /// <param name="actionForCheck"></param>
        /// <returns></returns>
        public NamedPipeReconnectionPlugin<TClient> SetActionForCheck(Func<TClient, int, Task<bool?>> actionForCheck)
        {
            this.ActionForCheck = actionForCheck;
            return this;
        }

        /// <summary>
        /// 每个周期可执行的委托。返回值为True标识客户端存活。返回False，表示失活，立即重连。返回null时，表示跳过此次检验。
        /// </summary>
        /// <param name="actionForCheck"></param>
        /// <returns></returns>
        public NamedPipeReconnectionPlugin<TClient> SetActionForCheck(Func<TClient, int, bool?> actionForCheck)
        {
            this.ActionForCheck = async (c, i) =>
            {
                await EasyTask.CompletedTask;
                return actionForCheck.Invoke(c, i);
            };
            return this;
        }

        /// <summary>
        /// 设置连接动作
        /// </summary>
        /// <param name="tryConnect"></param>
        /// <returns>无论如何，只要返回True，则结束本轮尝试</returns>
        public NamedPipeReconnectionPlugin<TClient> SetConnectAction(Func<TClient, Task<bool>> tryConnect)
        {
            this.ActionForConnect = tryConnect;
            return this;
        }

        /// <summary>
        /// 设置连接动作
        /// </summary>
        /// <param name="tryConnect"></param>
        /// <returns>无论如何，只要返回True，则结束本轮尝试</returns>
        public NamedPipeReconnectionPlugin<TClient> SetConnectAction(Func<TClient, bool> tryConnect)
        {
            this.ActionForConnect = (c) =>
            {
                return Task.FromResult(tryConnect.Invoke(c));
            };
            return this;
        }

        /// <summary>
        /// 检验时间间隔
        /// </summary>
        /// <param name="tick"></param>
        /// <returns></returns>
        public NamedPipeReconnectionPlugin<TClient> SetTick(TimeSpan tick)
        {
            this.Tick = tick;
            return this;
        }

        /// <summary>
        /// 使用轮询保持活性。
        /// </summary>
        public NamedPipeReconnectionPlugin<TClient> UsePolling()
        {
            this.m_polling = true;
            return this;
        }

        /// <inheritdoc/>
        protected override void Loaded(IPluginsManager pluginsManager)
        {
            base.Loaded(pluginsManager);
            pluginsManager.Add<object, ConfigEventArgs>(nameof(ILoadedConfigPlugin.OnLoadedConfig), this.OnLoadedConfig);
            pluginsManager.Add<TClient, DisconnectEventArgs>(nameof(INamedPipeDisconnectedPlugin), this.OnNamedPipeDisconnected);
        }

        private Task OnLoadedConfig(object sender, ConfigEventArgs e)
        {
            Task.Run(async () =>
            {
                if (!this.m_polling)
                {
                    return;
                }
                if (sender is TClient client)
                {
                    var failCount = 0;
                    while (true)
                    {
                        if (this.DisposedValue)
                        {
                            return;
                        }
                        await Task.Delay(this.Tick);
                        try
                        {
                            var b = await this.ActionForCheck.Invoke(client, failCount);
                            if (b == null)
                            {
                                continue;
                            }
                            else if (b == false)
                            {
                                if (await this.ActionForConnect.Invoke(client))
                                {
                                    failCount = 0;
                                }
                            }
                            else
                            {
                                failCount = 0;
                            }
                        }
                        catch
                        {
                        }
                    }
                }
            });

            return e.InvokeNext();
        }

        private async Task OnNamedPipeDisconnected(TClient client, DisconnectEventArgs e)
        {
            await e.InvokeNext();
            _ = Task.Run(async () =>
            {
                if (e.Manual)
                {
                    return;
                }

                while (true)
                {
                    if (await this.ActionForConnect.Invoke(client))
                    {
                        return;
                    }
                }
            });
        }
    }
}
