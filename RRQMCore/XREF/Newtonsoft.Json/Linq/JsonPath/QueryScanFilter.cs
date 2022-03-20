//------------------------------------------------------------------------------
//  此代码版权（除特别声明或在RRQMCore.XREF命名空间的代码）归作者本人若汝棋茗所有
//  源代码使用协议遵循本仓库的开源协议及附加协议，若本仓库没有设置，则按MIT开源协议授权
//  CSDN博客：https://blog.csdn.net/qq_40374647
//  哔哩哔哩视频：https://space.bilibili.com/94253567
//  Gitee源代码仓库：https://gitee.com/RRQM_Home
//  Github源代码仓库：https://github.com/RRQM
//  API首页：https://www.yuque.com/eo2w71/rrqm
//  交流QQ群：234762506
//  感谢您的下载和使用
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
using System.Collections.Generic;

namespace RRQMCore.XREF.Newtonsoft.Json.Linq.JsonPath
{
    internal class QueryScanFilter : PathFilter
    {
        public QueryExpression Expression { get; set; }

        public override IEnumerable<JToken> ExecuteFilter(JToken root, IEnumerable<JToken> current, bool errorWhenNoMatch)
        {
            foreach (JToken t in current)
            {
                if (t is JContainer c)
                {
                    foreach (JToken d in c.DescendantsAndSelf())
                    {
                        if (this.Expression.IsMatch(root, d))
                        {
                            yield return d;
                        }
                    }
                }
                else
                {
                    if (this.Expression.IsMatch(root, t))
                    {
                        yield return t;
                    }
                }
            }
        }
    }
}