//------------------------------------------------------------------------------
//  此代码版权归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using RRQMCore.Exceptions;

namespace RRQMSocket.RPC.RRQMRPC
{
    /// <summary>
    /// RPC无注册异常
    /// </summary>
    public class RRQMRPCNoRegisterException : RRQMException
    {
        /// <summary>
        ///
        /// </summary>
        public RRQMRPCNoRegisterException() : base() { }

        /// <summary>
        ///
        /// </summary>
        /// <param name="message"></param>
        public RRQMRPCNoRegisterException(string message) : base(message) { }

        /// <summary>
        ///
        /// </summary>
        /// <param name="message"></param>
        /// <param name="inner"></param>
        public RRQMRPCNoRegisterException(string message, System.Exception inner) : base(message, inner) { }

        /// <summary>
        ///
        /// </summary>
        /// <param name="info"></param>
        /// <param name="context"></param>
        protected RRQMRPCNoRegisterException(System.Runtime.Serialization.SerializationInfo info,
            System.Runtime.Serialization.StreamingContext context) : base(info, context) { }
    }
}