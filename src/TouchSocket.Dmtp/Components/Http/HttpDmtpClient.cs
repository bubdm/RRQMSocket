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
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using TouchSocket.Core;
using TouchSocket.Http;
using TouchSocket.Sockets;

namespace TouchSocket.Dmtp
{
    /// <summary>
    /// HttpDmtpClient
    /// </summary>
    public partial class HttpDmtpClient : HttpClientBase, IHttpDmtpClient
    {
        #region 字段

        private bool m_allowRoute;
        private Func<string, IDmtpActor> m_findDmtpActor;
        private DmtpActor m_smtpActor;
        private readonly SemaphoreSlim m_semaphore = new SemaphoreSlim(1, 1);
        #endregion 字段

        /// <inheritdoc cref="IDmtpActor.Id"/>
        public string Id => this.DmtpActor.Id;

        /// <inheritdoc cref="IDmtpActor.IsHandshaked"/>
        public bool IsHandshaked => this.DmtpActor != null && this.DmtpActor.IsHandshaked;

        /// <inheritdoc/>
        public IDmtpActor DmtpActor { get => this.m_smtpActor; }

        #region 连接

        /// <summary>
        /// 建立Tcp连接，并且执行握手。
        /// </summary>
        /// <param name="timeout"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public override ITcpClient Connect(int timeout = 5000)
        {
            lock (this.SyncRoot)
            {
                if (this.IsHandshaked)
                {
                    return this;
                }
                if (!this.Online)
                {
                    base.Connect(timeout);
                }

                var request = new HttpRequest()
                    .SetHost(this.RemoteIPHost.Host);
                request.Headers.Add(HttpHeaders.Connection, "upgrade");
                request.Headers.Add(HttpHeaders.Upgrade, DmtpUtility.Dmtp.ToLower());

                request.AsMethod(DmtpUtility.Dmtp);
                var response = this.RequestContent(request);
                if (response.StatusCode == 101)
                {
                    this.SwitchProtocolToDmtp();
                    this.m_smtpActor.Handshake(this.Config.GetValue(DmtpConfigExtension.VerifyTokenProperty),
                        this.Config.GetValue(DmtpConfigExtension.DefaultIdProperty),
                        timeout, this.Config.GetValue(DmtpConfigExtension.MetadataProperty), CancellationToken.None);
                    return this;
                }
                else
                {
                    throw new Exception(response.StatusMessage);
                }
            }
        }

        /// <inheritdoc/>
        public virtual IHttpDmtpClient Connect(CancellationToken token, int timeout = 5000)
        {
            lock (this.SyncRoot)
            {
                if (this.IsHandshaked)
                {
                    return this;
                }
                if (!this.Online)
                {
                    base.Connect(timeout);
                }

                var request = new HttpRequest()
                    .SetHost(this.RemoteIPHost.Host);
                request.Headers.Add(HttpHeaders.Connection, "upgrade");
                request.Headers.Add(HttpHeaders.Upgrade, DmtpUtility.Dmtp.ToLower());

                request.AsMethod(DmtpUtility.Dmtp);
                var response = this.RequestContent(request, timeout: timeout, token: token);
                if (response.StatusCode == 101)
                {
                    this.SwitchProtocolToDmtp();
                    this.m_smtpActor.Handshake(this.Config.GetValue(DmtpConfigExtension.VerifyTokenProperty),
                        this.Config.GetValue(DmtpConfigExtension.DefaultIdProperty),
                        timeout, this.Config.GetValue(DmtpConfigExtension.MetadataProperty), token);
                    return this;
                }
                else
                {
                    throw new Exception(response.StatusMessage);
                }
            }
        }

        /// <summary>
        /// 建立Tcp连接，并且执行握手。
        /// </summary>
        /// <param name="timeout"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public override async Task<ITcpClient> ConnectAsync(int timeout = 5000)
        {
            try
            {
                await this.m_semaphore.WaitAsync();
                if (this.IsHandshaked)
                {
                    return this;
                }
                if (!this.Online)
                {
                    await base.ConnectAsync(timeout);
                }

                var request = new HttpRequest()
                    .SetHost(this.RemoteIPHost.Host);
                request.Headers.Add(HttpHeaders.Connection, "upgrade");
                request.Headers.Add(HttpHeaders.Upgrade, DmtpUtility.Dmtp.ToLower());

                request.AsMethod(DmtpUtility.Dmtp);
                var response = this.RequestContent(request);
                if (response.StatusCode == 101)
                {
                    this.SwitchProtocolToDmtp();
                    await this.m_smtpActor.HandshakeAsync(this.Config.GetValue(DmtpConfigExtension.VerifyTokenProperty),
                         this.Config.GetValue(DmtpConfigExtension.DefaultIdProperty),
                         timeout, this.Config.GetValue(DmtpConfigExtension.MetadataProperty), CancellationToken.None);
                    return this;
                }
                else
                {
                    throw new Exception(response.StatusMessage);
                }
            }
            finally
            {
                this.m_semaphore.Release();
            }
        }

        /// <inheritdoc/>
        public virtual async Task<IHttpDmtpClient> ConnectAsync(CancellationToken token, int timeout = 5000)
        {
            try
            {
                await this.m_semaphore.WaitAsync();
                if (this.IsHandshaked)
                {
                    return this;
                }
                if (!this.Online)
                {
                    await base.ConnectAsync(timeout);
                }

                var request = new HttpRequest()
                    .SetHost(this.RemoteIPHost.Host);
                request.Headers.Add(HttpHeaders.Connection, "upgrade");
                request.Headers.Add(HttpHeaders.Upgrade, DmtpUtility.Dmtp.ToLower());

                request.AsMethod(DmtpUtility.Dmtp);
                var response = this.RequestContent(request, timeout: timeout, token: token);
                if (response.StatusCode == 101)
                {
                    this.SwitchProtocolToDmtp();
                    await this.m_smtpActor.HandshakeAsync(this.Config.GetValue(DmtpConfigExtension.VerifyTokenProperty),
                         this.Config.GetValue(DmtpConfigExtension.DefaultIdProperty),
                         timeout, this.Config.GetValue(DmtpConfigExtension.MetadataProperty), token);
                    return this;
                }
                else
                {
                    throw new Exception(response.StatusMessage);
                }
            }
            finally
            {
                this.m_semaphore.Release();
            }
        }

        #endregion 连接

        /// <inheritdoc/>
        protected override void Dispose(bool disposing)
        {
            this.DmtpActor.SafeDispose();
            base.Dispose(disposing);
        }

        /// <inheritdoc/>
        protected override async Task ReceivedData(ReceivedDataEventArgs e)
        {
            if (this.Protocol == DmtpUtility.DmtpProtocol && e.RequestInfo is DmtpMessage message)
            {
                if (!this.m_smtpActor.InputReceivedData(message))
                {
                    if (this.PluginsManager.Enable)
                    {
                       await this.PluginsManager.RaiseAsync(nameof(IDmtpReceivedPlugin.OnDmtpReceived), this, new DmtpMessageEventArgs(message));
                    }
                }
                return;
            }
            await base.ReceivedData(e);
        }

        /// <inheritdoc/>
        protected override void LoadConfig(TouchSocketConfig config)
        {
            base.LoadConfig(config);
            if (this.Container.IsRegistered(typeof(IDmtpRouteService)))
            {
                this.m_allowRoute = true;
                this.m_findDmtpActor = this.Container.Resolve<IDmtpRouteService>().FindDmtpActor;
            }
        }

        /// <inheritdoc/>
        protected override async Task OnDisconnected(DisconnectEventArgs e)
        {
            await base.OnDisconnected(e);
            this.DmtpActor.Close(false, e.Message);
        }

        #region ResetId

        ///<inheritdoc cref="IDmtpActor.ResetId(string)"/>
        public void ResetId(string id)
        {
            this.m_smtpActor.ResetId(id);
        }

        ///<inheritdoc cref="IDmtpActor.ResetIdAsync(string)"/>
        public Task ResetIdAsync(string newId)
        {
            return this.m_smtpActor.ResetIdAsync(newId);
        }

        #endregion ResetId

        private void SwitchProtocolToDmtp()
        {
            this.Protocol = DmtpUtility.DmtpProtocol;
            this.SetDataHandlingAdapter(new TcpDmtpAdapter());
            this.m_smtpActor = new SealedDmtpActor(this.m_allowRoute)
            {
                OutputSend = DmtpActorSend,
                OnRouting = OnDmtpActorRouting,
                OnHandshaking = this.OnDmtpActorHandshaking,
                OnHandshaked = OnDmtpActorHandshaked,
                OnClose = OnDmtpActorClose,
                OnCreateChannel = this.OnDmtpActorCreateChannel,
                Logger = this.Logger,
                Client = this,
                OnFindDmtpActor = this.m_findDmtpActor
            };
        }

        #region 内部委托绑定

        private void OnDmtpActorClose(DmtpActor actor, string msg)
        {
            base.Close(msg);
        }

        private void OnDmtpActorCreateChannel(DmtpActor actor, CreateChannelEventArgs e)
        {
            this.OnCreateChannel(e);
            if (e.Handled)
            {
                return;
            }

            this.PluginsManager.Raise(nameof(IDmtpCreateChannelPlugin.OnCreateChannel), this, e);
        }

        private void OnDmtpActorHandshaked(DmtpActor actor, DmtpVerifyEventArgs e)
        {
            this.OnHandshaked(e);
            if (e.Handled)
            {
                return;
            }
            if (this.PluginsManager.Enable && this.PluginsManager.Raise(nameof(IDmtpHandshakedPlugin.OnDmtpHandshaked), this, e))
            {
                return;
            }
        }

        private void OnDmtpActorHandshaking(DmtpActor actor, DmtpVerifyEventArgs e)
        {
            this.OnHandshaking(e);
            if (e.Handled)
            {
                return;
            }
            this.PluginsManager.Raise(nameof(IDmtpHandshakingPlugin.OnDmtpHandshaking), this, e);
        }

        private void OnDmtpActorRouting(DmtpActor actor, PackageRouterEventArgs e)
        {
            this.OnRouting(e);
            if (e.Handled)
            {
                return;
            }
            if (this.PluginsManager.Enable && this.PluginsManager.Raise(nameof(IDmtpRoutingPlugin.OnDmtpRouting), this, e))
            {
                return;
            }
        }

        private void DmtpActorSend(DmtpActor actor, ArraySegment<byte>[] transferBytes)
        {
            base.Send(transferBytes);
        }

        #endregion 内部委托绑定

        #region 事件触发

        /// <summary>
        /// 当创建通道
        /// </summary>
        /// <param name="e"></param>
        protected virtual void OnCreateChannel(CreateChannelEventArgs e)
        {
        }

        /// <summary>
        /// 在完成握手连接时
        /// </summary>
        /// <param name="e"></param>
        protected virtual void OnHandshaked(DmtpVerifyEventArgs e)
        {
        }

        /// <summary>
        /// 即将握手连接时
        /// </summary>
        /// <param name="e">参数</param>
        protected virtual void OnHandshaking(DmtpVerifyEventArgs e)
        {
        }

        /// <summary>
        /// 当需要转发路由包时
        /// </summary>
        /// <param name="e"></param>
        protected virtual void OnRouting(PackageRouterEventArgs e)
        {
        }

        #endregion 事件触发
    }
}