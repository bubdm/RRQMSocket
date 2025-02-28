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
using System.Threading.Tasks;

namespace TouchSocket.Core
{
    /// <summary>
    /// 具有释放的对象。内部实现了GC.SuppressFinalize，但不包括析构函数相关。
    /// </summary>
    public partial class DisposableObject : IDisposableObject
    {
        /// <summary>
        /// 判断是否已释放。
        /// </summary>
        private volatile bool m_disposedValue;

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        public bool DisposedValue { get => this.m_disposedValue; }

        /// <summary>
        /// 判断是否已经被释放，如果是，则抛出异常。
        /// </summary>
        /// <exception cref="ObjectDisposedException"></exception>
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        protected void ThrowIfDisposed()
        {
            if (this.m_disposedValue)
            {
                throw new ObjectDisposedException(this.GetType().Name);
            }
        }

        /// <summary>
        /// 调用释放，切换释放状态。
        /// </summary>
        /// <param name="disposing"></param>
        protected virtual void Dispose(bool disposing)
        {
            this.m_disposedValue = true;
        }

        /// <summary>
        /// 释放资源。内部已经处理了<see cref="GC.SuppressFinalize(object)"/>
        /// </summary>
        public void Dispose()
        {
            this.Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }
    }

#if NET6_0_OR_GREATER
    public partial class DisposableObject
    {
        /// <summary>
        /// 异步释放资源。内部已经处理了<see cref="GC.SuppressFinalize(object)"/>
        /// </summary>
        /// <returns></returns>
        public async ValueTask DisposeAsync()
        {
            await this.DisposeAsyncCore().ConfigureAwait(false);
            this.Dispose(disposing: false);
            GC.SuppressFinalize(this);
        }

        /// <summary>
        /// 异步释放资源。注意：此方法仅在调用<see cref="IAsyncDisposable.DisposeAsync"/>时有效。
        /// </summary>
        /// <returns></returns>
        protected virtual ValueTask DisposeAsyncCore()
        {
            return ValueTask.CompletedTask;
        }
    }
#endif
}