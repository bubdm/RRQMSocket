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
using System.Threading.Tasks;
using TouchSocket.Core;

namespace TouchSocket.Http
{
    /// <summary>
    /// Http静态内容插件
    /// </summary>
    [PluginOption(Singleton = false, NotRegister = true)]
    public class HttpStaticPagePlugin : PluginBase, IHttpPlugin
    {
        /// <summary>
        /// 构造函数
        /// </summary>
        public HttpStaticPagePlugin()
        {
            this.FileCache = new FileCachePool();
            this.SetNavigateAction(request =>
            {
                return request.RelativeURL;
            });
        }

        /// <summary>
        /// 静态文件缓存。
        /// </summary>
        public FileCachePool FileCache { get; private set; }

        /// <summary>
        /// 提供文件扩展名和MIME类型之间的映射。
        /// </summary>
        public IContentTypeProvider ContentTypeProvider { get; set; }

        /// <summary>
        /// 设置提供文件扩展名和MIME类型之间的映射。
        /// </summary>
        /// <param name="provider"></param>
        /// <returns></returns>
        public HttpStaticPagePlugin SetContentTypeProvider(IContentTypeProvider provider)
        {
            this.ContentTypeProvider = provider ?? throw new ArgumentNullException(nameof(provider));
            return this;
        }

        /// <summary>
        /// 添加静态
        /// </summary>
        /// <param name="path">Static content path</param>
        /// <param name="prefix">Cache prefix (default is "/")</param>
        /// <param name="filter">Cache filter (default is "*.*")</param>
        /// <param name="timeout">Refresh cache timeout (default is 1 hour)</param>
        public void AddFolder(string path, string prefix = "/", string filter = "*.*", TimeSpan? timeout = null)
        {
            timeout ??= TimeSpan.FromHours(1);
            this.FileCache.InsertPath(path, prefix, filter, timeout.Value, null);
        }

        /// <summary>
        /// Clear static content cache
        /// </summary>
        public void ClearFolder()
        {
            this.FileCache.Clear();
        }

        /// <summary>
        /// 重新导航
        /// </summary>
        public Func<HttpRequest, Task<string>> NavigateAction { get; set; }

        /// <summary>
        /// 设定重新导航
        /// </summary>
        /// <param name="func"></param>
        /// <returns></returns>
        public HttpStaticPagePlugin SetNavigateAction(Func<HttpRequest, Task<string>> func)
        {
            this.NavigateAction = func;
            return this;
        }

        /// <summary>
        /// 设定重新导航
        /// </summary>
        /// <param name="func"></param>
        /// <returns></returns>
        public HttpStaticPagePlugin SetNavigateAction(Func<HttpRequest, string> func)
        {
            this.NavigateAction = (request) =>
            {
                return Task.FromResult(func(request));
            };
            return this;
        }

        /// <inheritdoc/>
        public async Task OnHttpRequest(IHttpSocketClient client, HttpContextEventArgs e)
        {
            var url = await this.NavigateAction.Invoke(e.Context.Request);
            if (this.FileCache.Find(url, out var data))
            {
                e.Context.Response.SetStatus();
                if (this.ContentTypeProvider?.TryGetContentType(url, out var result) != true)
                {
                    result = HttpTools.GetContentTypeFromExtension(url);
                }
                e.Context.Response.ContentType = result;
                e.Context.Response.SetContentLength(data.Length)
                    .WriteContent(data);
                e.Handled = true;
            }
            else
            {
                await e.InvokeNext();
            }
        }

        /// <summary>
        /// Remove static content cache
        /// </summary>
        /// <param name="path">Static content path</param>
        public void RemoveFolder(string path)
        {
            this.FileCache.RemovePath(path);
        }
    }
}