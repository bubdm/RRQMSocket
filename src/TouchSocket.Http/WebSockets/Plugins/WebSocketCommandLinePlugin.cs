//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在XREF结尾的命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：http://rrqm_home.gitee.io/touchsocket/
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using TouchSocket.Core;
using TouchSocket.Sockets;

namespace TouchSocket.Http.WebSockets
{
    /// <summary>
    /// WS命令行插件。
    /// </summary>
    public abstract class WebSocketCommandLinePlugin : PluginBase, IWebSocketReceivedPlugin
    {
        private readonly ILog m_logger;
        private readonly Dictionary<string, Method> m_pairs = new Dictionary<string, Method>();

        /// <summary>
        /// WSCommandLinePlugin
        /// </summary>
        /// <param name="logger"></param>
        /// <exception cref="ArgumentNullException"></exception>
        protected WebSocketCommandLinePlugin(ILog logger)
        {
            this.m_logger = logger ?? throw new ArgumentNullException(nameof(logger));
            this.Converter = new StringConverter();
            var ms = this.GetType().GetMethods(BindingFlags.Public | BindingFlags.Instance).Where(a => a.Name.EndsWith("Command"));
            foreach (var item in ms)
            {
                this.m_pairs.Add(item.Name.Replace("Command", string.Empty), new Method(item));
            }
        }

        /// <summary>
        /// 字符串转换器，默认支持基础类型和Json。可以自定义。
        /// </summary>
        public StringConverter Converter { get; }

        /// <summary>
        /// 是否返回执行异常。
        /// </summary>
        public bool ReturnException { get; set; } = true;

        /// <summary>
        /// 当有执行异常时，不返回异常。
        /// </summary>
        /// <returns></returns>
        public WebSocketCommandLinePlugin NoReturnException()
        {
            this.ReturnException = false;
            return this;
        }

        /// <inheritdoc/>
        public async Task OnWebSocketReceived(IHttpClientBase client, WSDataFrameEventArgs e)
        {
            if (e.DataFrame.Opcode == WSDataType.Text)
            {
                try
                {
                    var strs = e.DataFrame.ToText().Split(' ');
                    if (strs.Length > 0 && this.m_pairs.TryGetValue(strs[0], out var method))
                    {
                        var ps = method.Info.GetParameters();
                        var os = new object[ps.Length];
                        var index = 0;
                        for (var i = 0; i < ps.Length; i++)
                        {
                            if (ps[i].ParameterType.IsInterface && typeof(ITcpClientBase).IsAssignableFrom(ps[i].ParameterType))
                            {
                                os[i] = client;
                            }
                            else
                            {
                                os[i] = this.Converter.ConvertFrom(strs[index + 1], ps[i].ParameterType);
                                index++;
                            }
                        }

                        e.Handled = true;

                        try
                        {
                            object result;
                            switch (method.TaskType)
                            {
                                case TaskReturnType.Task:
                                    await method.InvokeAsync(this, os);
                                    result = default;
                                    break;

                                case TaskReturnType.TaskObject:
                                    result = await method.InvokeObjectAsync(this, os);
                                    break;

                                case TaskReturnType.None:
                                default:
                                    result = method.Invoke(this, os);
                                    break;
                            }

                            if (method.HasReturn)
                            {
                                if (client is HttpClient httpClient)
                                {
                                    httpClient.SendWithWS(this.Converter.ConvertTo(result));
                                }
                                else if (client is HttpSocketClient httpSocketClient)
                                {
                                    httpSocketClient.SendWithWS(this.Converter.ConvertTo(result));
                                }
                            }
                        }
                        catch (Exception ex)
                        {
                            if (this.ReturnException)
                            {
                                if (client is HttpClient httpClient)
                                {
                                    httpClient.SendWithWS(this.Converter.ConvertTo(ex.Message));
                                }
                                else if (client is HttpSocketClient httpSocketClient)
                                {
                                    httpSocketClient.SendWithWS(this.Converter.ConvertTo(ex.Message));
                                }
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    this.m_logger.Exception(this, ex);
                }
            }
            else
            {
                await e.InvokeNext();
            }
        }
    }
}