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
using TouchSocket.Rpc;

namespace TouchSocket.XmlRpc
{
    /// <summary>
    /// 适用于XmlRpc的标记
    /// </summary>
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false)]
    public class XmlRpcAttribute : RpcAttribute
    {
        /// <summary>
        ///  适用于XmlRpc的标记.
        ///  <para>是否仅以函数名调用，当为True是，调用时仅需要传入方法名即可。</para>
        /// </summary>
        /// <param name="methodInvoke"></param>
        public XmlRpcAttribute(bool methodInvoke)
        {
            this.MethodInvoke = methodInvoke;
        }

        /// <summary>
        /// 适用于XmlRpc的标记
        /// </summary>
        public XmlRpcAttribute()
        {

        }

        /// <summary>
        /// 适用于XmlRpc的标记.
        /// </summary>
        /// <param name="invokenKey"></param>
        public XmlRpcAttribute(string invokenKey)
        {
            this.InvokeKey = invokenKey;
        }

        /// <summary>
        /// <inheritdoc/>
        /// </summary>
        /// <returns></returns>
        public override Type[] GetGenericConstraintTypes()
        {
            return new Type[] { typeof(IXmlRpcClient) };
        }
    }
}