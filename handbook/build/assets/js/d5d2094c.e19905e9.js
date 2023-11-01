"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=p(n),y=a,m=s["".concat(c,".").concat(y)]||s[y]||u[y]||l;return n?o.createElement(m,r(r({ref:t},k),{},{components:n})):o.createElement(m,r({ref:t},k))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const l={id:"bytepool",title:"\u5185\u5b58\u6c60"},r=void 0,i={unversionedId:"bytepool",id:"bytepool",title:"\u5185\u5b58\u6c60",description:"\u5b9a\u4e49",source:"@site/docs/bytepool.mdx",sourceDirName:".",slug:"/bytepool",permalink:"/touchsocket/docs/current/bytepool",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/bytepool.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"bytepool",title:"\u5185\u5b58\u6c60"},sidebar:"docs",previous:{title:"Unity3D\u76f8\u5173",permalink:"/touchsocket/docs/current/troubleshootunity3d"},next:{title:"\u63a7\u5236\u53f0\u884c\u4e3a",permalink:"/touchsocket/docs/current/consoleaction"}},c={},p=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:3},{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u529f\u80fd",id:"\u4e8c\u529f\u80fd",level:2},{value:"\u4e09\u3001\u4f7f\u7528",id:"\u4e09\u4f7f\u7528",level:2},{value:"3.1 \u521b\u5efa\u3001\u56de\u6536",id:"31-\u521b\u5efa\u56de\u6536",level:3},{value:"3.2 \u57fa\u672c\u6570\u7ec4\u7684\u5199\u5165\u548c\u8bfb\u53d6",id:"32-\u57fa\u672c\u6570\u7ec4\u7684\u5199\u5165\u548c\u8bfb\u53d6",level:3},{value:"3.3 \u57fa\u7840\u7c7b\u578b\u7684\u5199\u5165\u548c\u8bfb\u53d6",id:"33-\u57fa\u7840\u7c7b\u578b\u7684\u5199\u5165\u548c\u8bfb\u53d6",level:3},{value:"3.4 \u6570\u636e\u5bf9\u8c61\u7684\u5199\u5165\u7684\u8bfb\u53d6",id:"34-\u6570\u636e\u5bf9\u8c61\u7684\u5199\u5165\u7684\u8bfb\u53d6",level:3},{value:"3.5 \u6570\u7ec4\u5305\u7684\u5199\u5165\u548c\u8bfb\u53d6",id:"35-\u6570\u7ec4\u5305\u7684\u5199\u5165\u548c\u8bfb\u53d6",level:3},{value:"3.6 \u5305\u7c7b\u578b\u7684\u5199\u5165\u548c\u8bfb\u53d6",id:"36-\u5305\u7c7b\u578b\u7684\u5199\u5165\u548c\u8bfb\u53d6",level:3},{value:"3.7 \u591a\u7ebf\u7a0b\u540c\u6b65\u534f\u4f5c\uff08Hold\uff09",id:"37-\u591a\u7ebf\u7a0b\u540c\u6b65\u534f\u4f5chold",level:3},{value:"3.8 \u5176\u4ed6\u7528\u6cd5",id:"38-\u5176\u4ed6\u7528\u6cd5",level:3}],k={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,a.kt)("p",null,"\u547d\u540d\u7a7a\u95f4\uff1aTouchSocket.Core ",(0,a.kt)("br",null),"\n\u7a0b\u5e8f\u96c6\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Core"},"TouchSocket.Core.dll")),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"\u5185\u5b58\u6c60\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"TouchSocket"),"\u7cfb\u5217\u7684\u6700\u91cd\u8981\u7684\u7ec4\u6210\u90e8\u5206\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"TouchSocket"),"\u4ea7\u54c1\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"BytePool"),"\u8d2f\u7a7f\u59cb\u7ec8\u3002\u6240\u4ee5\u719f\u7ec3\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"BytePool"),"\uff0c\u4e5f\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u529f\u80fd"},"\u4e8c\u3001\u529f\u80fd"),(0,a.kt)("p",null,"\u5185\u5b58\u6c60\uff08BytePool\uff09\u662f\u89e3\u51b3\u521b\u5efa\u5927\u91cf\u5b57\u8282\u6570\u7ec4\u6d88\u8017\u7684\u6700\u6709\u529b\u624b\u6bb5\uff0c\u5176\u5b9e\u8d28\u5b8c\u5168\u501f\u9274\u4e86\u5fae\u8f6f\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ArrayPool"),"\u3002\u800c\u4e14\u5728\u6b64\u57fa\u7840\u4e0a\u505a\u4e86\u66f4\u591a\u7684\u4f18\u5316\u3002"),(0,a.kt)("p",null,"\u5185\u5b58\u6c60\u7684\u6700\u5c0f\u5b9e\u73b0\u5355\u4f53\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"\u5185\u5b58\u5757\uff08ByteBlock\uff09"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u503c\u5185\u5b58\u5757\uff08ValueByteBlock\uff09"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"ByteBlock"),"\u662f\u7ee7\u627f\u81ea",(0,a.kt)("inlineCode",{parentName:"p"},"Stream"),"\u7684\u7c7b\uff0c\u62e5\u6709\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"MemoryStream"),"\u4e00\u6837\u7684\u529f\u80fd\u548c\u5185\u5b58\u56de\u6536\u7ba1\u7406\u7684\u589e\u5f3a\u529f\u80fd\u3002\u6240\u4ee5\u5982\u679c\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"MemoryStream"),"\u7684\u4f7f\u7528\u9700\u6c42\u7684\u8bdd\uff0c\u5c31\u53ef\u4ee5\u5b8c\u5168\u8ba9",(0,a.kt)("inlineCode",{parentName:"p"},"ByteBlock"),"\u66ff\u4ee3\u3002\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"ValueByteBlock"),"\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"ByteBlock"),"\u7684\u503c\u7c7b\u578b\uff08ref struct\uff09\uff0c\u5176\u529f\u80fd\u9664\u4e86\u4e0d\u7ee7\u627fStream\u4ee5\u5916\uff0c\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"ByteBlock"),"\u4e00\u6a21\u4e00\u6837\u3002\u4e14\u4e3a\u503c\u7c7b\u578b\uff0c\u521b\u5efa\u5f00\u9500\u66f4\u5c0f\u3002"),(0,a.kt)("h2",{id:"\u4e09\u4f7f\u7528"},"\u4e09\u3001\u4f7f\u7528"),(0,a.kt)("h3",{id:"31-\u521b\u5efa\u56de\u6536"},"3.1 \u521b\u5efa\u3001\u56de\u6536"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BytePool"),"\u5728\u9ed8\u8ba4\u60c5\u51b5\u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Default"),"\u7684\u9ed8\u8ba4\u5b9e\u4f8b\uff0c\u5f53\u7136\u60a8\u53ef\u4ee5\u65b0\u5efa\u53ea\u5c5e\u4e8e\u81ea\u5df1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"BytePool"),"\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"maxArrayLength\uff0c\u662f\u5185\u5b58\u6c60\u7684\u6700\u5927\u5b57\u8282\u6570\u7ec4\u5c3a\u5bf8\u3002"),(0,a.kt)("li",{parentName:"ul"},"maxArraysPerBucket\u662f\u6bcf\u4e2a\u5185\u5b58\u5757\u6876\u7684\u6700\u5927\u6570\u7ec4\u6570\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"AutoZero\u5c5e\u6027\uff0c\u5728\u56de\u6536\u5185\u5b58\u65f6\uff0c\u662f\u5426\u6e05\u7a7a\u5185\u5b58\u3002"),(0,a.kt)("li",{parentName:"ul"},"MaxBucketsToTry\u662f\u6700\u5927\u68af\u5ea6\u8de8\u5ea6\u3002\u4f8b\u5982\uff1a\u5f53\u68af\u5ea6\u4e3a16\u300132\u300164\u3001128\u3001512\u30011024\u65f6\uff0cMaxBucketsToTry\u4e3a2\uff0c\u5219\u5f53\u8bf7\u6c42\u7684\u957f\u5ea6\u662f16\u65f6\uff0c\u4e1416\u7684\u5185\u5b58\u5757\u5747\u5df2\u6d3e\u51fa\uff0c\u5219\u4f1a\u8bf7\u6c4232\uff0c\u6700\u5927\u4f1a\u8bf7\u6c42\u523064\uff0c\u5982\u679c\u5747\u5df2\u6d3e\u51fa\uff0c\u5219\u76f4\u63a5\u65b0\u5efa\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"BytePool bytePool = new BytePool(maxArrayLength: 1024 * 1024, maxArraysPerBucket: 50)\n{\n    AutoZero = false,//\u5728\u56de\u6536\u5185\u5b58\u65f6\uff0c\u662f\u5426\u6e05\u7a7a\u5185\u5b58\n    MaxBucketsToTry = 5//\u6700\u5927\u68af\u5ea6\u8de8\u5ea6\n};\n\nBytePool defaultBytePool = BytePool.Default;//\u4f7f\u7528\u9ed8\u8ba4\u7684\n")),(0,a.kt)("p",null,"\u5728\u5185\u5b58\u6c60\u521b\u5efa\u4ee5\u540e\uff0c\u53ef\u4ee5\u76f4\u89c2\u7684\u67e5\u770b\u5b83\u7684\u5404\u4e2a\u5c5e\u6027\u3002\u5305\u62ec\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'Console.WriteLine($"\u5185\u5b58\u6c60\u5bb9\u91cf={bytePool.Capacity}");\nConsole.WriteLine($"\u5185\u5b58\u6c60\u5b9e\u9645\u5c3a\u5bf8={bytePool.GetPoolSize()}");\n')),(0,a.kt)("p",null,"\u4f7f\u7528\u5185\u5b58\u5757"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ByteBlock"),"\u53ef\u901a\u8fc7BytePool\u5b9e\u4f8b\u521b\u5efa\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5new\u5bf9\u8c61\uff0c\u540e\u8005\u4f7f\u7528\u7684\u662f\u9ed8\u8ba4\u5185\u5b58\u6c60\u5b9e\u4f8b\u63d0\u4f9b\u652f\u6301\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"byteSize\uff1a\u7528\u4e8e\u7533\u8bf7\u7684\u6700\u5c0f\u5b57\u8282\u5c3a\u5bf8\u3002\u4f8b\u5982\uff1a\u5f53\u7533\u8bf7100\u957f\u5ea6\u65f6\uff0c\u53ef\u80fd\u4f1a\u5f97\u5230100\uff0c1000\uff0c\u751a\u81f3\u66f4\u5927\u5c3a\u5bf8\u7684\u5185\u5b58\uff0c\u4f46\u7edd\u4e0d\u4f1a\u5c0f\u4e8e100.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"ByteBlock byteBlock1 = new ByteBlock(byteSize: 1024 * 1024);//\u4ece\u9ed8\u8ba4\u5185\u5b58\u6c60\u83b7\u5f97\nbyteBlock1.Dispose();\n\nBytePool bytePool = new BytePool();\nByteBlock byteBlock2 = bytePool.GetByteBlock(byteSize: 1024 * 1024);//\u4ece\u6307\u5b9a\u5185\u5b58\u6c60\u83b7\u5f97\n\nusing (ByteBlock byteBlock3 = new ByteBlock())//\u901a\u8fc7using\u521b\u5efa\u53ca\u91ca\u653e\u65f6\uff0c\u5747\u5728\u9ed8\u8ba4\u5185\u5b58\u6c60\n{\n}\n")),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u521b\u5efa\u7684",(0,a.kt)("strong",{parentName:"p"},"ByteBlock\uff08ValueByteBlock\uff09"),"\u5fc5\u987b\u663e\u793a\u91ca\u653e\uff08Dispose\uff09\uff0c\u53ef\u7528using\uff0c\u5982\u679c\u4e0d\u91ca\u653e\uff0c\u867d\u7136\u4e0d\u4f1a\u5185\u5b58\u6cc4\u9732\uff0c\u4f46\u662f\u4f1a\u5f71\u54cd\u6027\u80fd\u3002")),(0,a.kt)("admonition",{title:"\u5371\u9669",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u4f55\u65f6\u4f55\u5730\uff0c\u90fd\u4e0d\u8981\u76f4\u63a5\u5f15\u7528ByteBlock.Buffer\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002\u5982\u679c\u9700\u8981\u5f15\u7528\u5b9e\u9645\u6570\u636e\uff0c\u8bf7\u4f7f\u7528Read\u3001ToArray\u7b49\u65b9\u6cd5\u53ef\u590d\u5236\u5bfc\u51fa\u65b0\u7684\u6570\u636e\u5185\u5b58\u3002")),(0,a.kt)("h3",{id:"32-\u57fa\u672c\u6570\u7ec4\u7684\u5199\u5165\u548c\u8bfb\u53d6"},"3.2 \u57fa\u672c\u6570\u7ec4\u7684\u5199\u5165\u548c\u8bfb\u53d6"),(0,a.kt)("p",null,"\u57fa\u672c\u4f7f\u7528\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"MemoryStream"),"\u4e00\u81f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"using (var byteBlock = new ByteBlock())\n{\n    byteBlock.Write(new byte[] { 0, 1, 2, 3 });//\u5c06\u5b57\u8282\u6570\u7ec4\u5199\u5165\n\n    byteBlock.SeekToStart();//\u5c06\u6e38\u6807\u91cd\u7f6e\n\n    var buffer = new byte[byteBlock.Len];//\u5b9a\u4e49\u4e00\u4e2a\u6570\u7ec4\u5bb9\u5668\n    var r = byteBlock.Read(buffer);//\u8bfb\u53d6\u6570\u636e\u5230\u5bb9\u5668\uff0c\u5e76\u8fd4\u56de\u8bfb\u53d6\u7684\u957f\u5ea6r\n}\n")),(0,a.kt)("h3",{id:"33-\u57fa\u7840\u7c7b\u578b\u7684\u5199\u5165\u548c\u8bfb\u53d6"},"3.3 \u57fa\u7840\u7c7b\u578b\u7684\u5199\u5165\u548c\u8bfb\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'using (var byteBlock = new ByteBlock())\n{\n    byteBlock.Write(byte.MaxValue);//\u5199\u5165byte\u7c7b\u578b\n    byteBlock.Write(int.MaxValue);//\u5199\u5165int\u7c7b\u578b\n    byteBlock.Write(long.MaxValue);//\u5199\u5165long\u7c7b\u578b\n    byteBlock.Write("RRQM");//\u5199\u5165\u5b57\u7b26\u4e32\u7c7b\u578b\n    \n    byteBlock.SeekToStart();//\u8bfb\u53d6\u65f6\uff0c\u5148\u5c06\u6e38\u6807\u79fb\u52a8\u5230\u521d\u59cb\u5199\u5165\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u6309\u5199\u5165\u987a\u5e8f\uff0c\u4f9d\u6b21\u8bfb\u53d6\n\n    byte byteValue = (byte)byteBlock.ReadByte();\n    int intValue = byteBlock.ReadInt32();\n    long longValue = byteBlock.ReadInt64();\n    string stringValue = byteBlock.ReadString();\n}\n')),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u5199\u5165\u5b57\u7b26\u4e32\u65f6\uff0c\u5982\u679c\u60f3\u8981\u6309\u5e8f\u5199\u5165\u5e76\u8bfb\u53d6\uff0c\u5e94\u8be5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"byteBlock.Write"),"\uff0c\u800c\u975e",(0,a.kt)("inlineCode",{parentName:"p"},"byteBlock.WriteString"),"\u3002\u56e0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"byteBlock.WriteString"),"\u662f\u76f4\u63a5\u628a\u5b57\u7b26\u4e32\u8f6c\u4e3autf-8\u7f16\u7801\uff0c\u7136\u540e\u5199\u5165\u3002")),(0,a.kt)("h3",{id:"34-\u6570\u636e\u5bf9\u8c61\u7684\u5199\u5165\u7684\u8bfb\u53d6"},"3.4 \u6570\u636e\u5bf9\u8c61\u7684\u5199\u5165\u7684\u8bfb\u53d6"),(0,a.kt)("p",null,"\u6570\u636e\u5bf9\u8c61\u7684\u5199\u5165\u548c\u8bfb\u53d6\uff0c\u9700\u8981\u6307\u5b9a\u5e8f\u5217\u5316\u7c7b\u578b\u3002\u56e0\u4e3a\u4ed6\u7684\u5b9e\u8d28\u662f\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"using (var byteBlock = new ByteBlock())\n{\n    //\u5c06\u5b9e\u4f8b\u5199\u5165\uff0c\u5b9e\u9645\u4e0a\u662f\u5e8f\u5217\u5316\n    byteBlock.WriteObject(new MyClass(), SerializationType.FastBinary);\n\n    byteBlock.SeekToStart();\n\n    //\u8bfb\u53d6\u5b9e\u4f8b\uff0c\u5b9e\u9645\u4e0a\u662f\u53cd\u5e8f\u5217\u5316\n    var myClass = byteBlock.ReadObject<MyClass>();\n}\n")),(0,a.kt)("h3",{id:"35-\u6570\u7ec4\u5305\u7684\u5199\u5165\u548c\u8bfb\u53d6"},"3.5 \u6570\u7ec4\u5305\u7684\u5199\u5165\u548c\u8bfb\u53d6"),(0,a.kt)("p",null,"\u6570\u7ec4\u5305\u7684\u5199\u5165\u548c\u8bfb\u53d6\uff0c\u4e5f\u662f\u53ef\u4ee5\u6309\u5e8f\u6392\u5165\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'using (var byteBlock = new ByteBlock())\n{\n    byteBlock.WriteBytesPackage(Encoding.UTF8.GetBytes("TouchSocket"));\n\n    byteBlock.SeekToStart();\n\n    byte[] bytes = byteBlock.ReadBytesPackage();\n}\n')),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u5728\u6027\u80fd\u6781\u81f4\u8981\u6c42\u7684\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"ReadBytesPackage"),"\uff0c\u5b9e\u9645\u4e0a\u4f1a\u521b\u5efa\u989d\u5916\u7684\u5185\u5b58\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'using (var byteBlock = new ByteBlock())\n{\n    byteBlock.WriteBytesPackage(Encoding.UTF8.GetBytes("TouchSocket"));\n\n    byteBlock.SeekToStart();\n\n    //\u4f7f\u7528\u4e0b\u5217\u65b9\u5f0f\u5373\u53ef\u9ad8\u6548\u5b8c\u6210\u8bfb\u53d6\n    if (byteBlock.TryReadBytesPackageInfo(out int pos,out int len))\n    {\n        var str=Encoding.UTF8.GetString(byteBlock.Buffer,pos,len);\n    }\n}\n')),(0,a.kt)("h3",{id:"36-\u5305\u7c7b\u578b\u7684\u5199\u5165\u548c\u8bfb\u53d6"},"3.6 \u5305\u7c7b\u578b\u7684\u5199\u5165\u548c\u8bfb\u53d6"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/touchsocket/docs/current/ipackage"},"\u5305\u7c7b\u578b"),"\u662f\u6700\u9ad8\u6548\u7684\u6570\u636e\u7ed3\u6784\u8f6c\u6362\u65b9\u6848\u3002\u6240\u4ee5\u5185\u5b58\u6c60\u4e5f\u652f\u6301\u6309\u5e8f\u6392\u5165\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"using (var byteBlock = new ByteBlock())\n{\n    byteBlock.WritePackage(new MyPackage()\n    {\n        Property = 10\n    });\n\n    byteBlock.SeekToStart();\n\n    var myPackage = byteBlock.ReadPackage<MyPackage>();\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},"class MyPackage : PackageBase\n{\n    public int Property { get; set; }\n\n    public override void Package(in ByteBlock byteBlock)\n    {\n       byteBlock.Write(this.Property);\n    }\n\n    public override void Unpackage(in ByteBlock byteBlock)\n    {\n       this.Property=byteBlock.ReadInt32();\n    }\n}\n")),(0,a.kt)("h3",{id:"37-\u591a\u7ebf\u7a0b\u540c\u6b65\u534f\u4f5chold"},"3.7 \u591a\u7ebf\u7a0b\u540c\u6b65\u534f\u4f5c\uff08Hold\uff09"),(0,a.kt)("p",null,"\u5728\u591a\u7ebf\u7a0b\u5f02\u6b65\u65f6\uff0c\u8bbe\u8ba1\u67b6\u6784\u5e94\u5f53\u9075\u5b88\u8c01\uff08Thread\uff09\u521b\u5efa\u7684ByteBlock\uff0c\u7531\u8c01\u91ca\u653e\uff0c\u8fd9\u6837\u5c31\u80fd\u5f88\u597d\u7684\u907f\u514d\u672a\u91ca\u653e\u7684\u60c5\u51b5\u53d1\u751f\u3002\u5b9e\u9645\u4e0aTouchSocket\u4e2d\uff0c\u5c31\u662f\u79c9\u627f\u8fd9\u6837\u7684\u8bbe\u8ba1\uff0c\u4efb\u4f55\u975e\u7528\u6237\u521b\u5efa\u7684ByteBlock\uff0c\u90fd\u4f1a\u7531\u521b\u5efa\u7684\u7ebf\u7a0b\u6700\u540e\u91ca\u653e\u3002\u4f46\u662f\u5728\u4f7f\u7528\u4e2d\uff0c\u7ecf\u5e38\u51fa\u73b0\u5f02\u6b65\u591a\u7ebf\u7a0b\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u4ee5TouchSocket\u7684TcpClient\u4e3a\u4f8b\u3002\u5982\u679c\u76f4\u63a5\u5728\u6536\u5230\u6570\u636e\u65f6\uff0c\u4f7f\u7528Task\u5f02\u6b65\uff0c\u5219\u5fc5\u5b9a\u4f1a\u53d1\u751f\u5173\u4e8eByteBlock\u7684\u5404\u79cd\u5404\u6837\u7684\u5f02\u5e38\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u539f\u56e0\u975e\u5e38\u7b80\u5355\uff0cbyteBlock\u5bf9\u8c61\u5728\u5230\u8fbeHandleReceivedData\u65f6\uff0c\u89e6\u53d1Task\u5f02\u6b65\uff0c\u6b64\u65f6\u89e6\u53d1\u7ebf\u7a0b\u4f1a\u7acb\u5373\u8fd4\u56de\uff0c\u5e76\u91ca\u653ebyteBlock\uff0c\u800cTask\u5f02\u6b65\u7ebf\u7a0b\u4f1a\u6ede\u540e\uff0c\u7136\u540e\u8bd5\u56fe\u4ece\u5df2\u91ca\u653e\u7684byteBlock\u4e2d\u83b7\u53d6\u6570\u636e\uff0c\u6240\u4ee5\uff0c\u5fc5\u5b9a\u53d1\u751f\u5f02\u5e38\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'public class MyTClient : TcpClient\n{\n    protected override bool HandleReceivedData(ByteBlock byteBlock, IRequestInfo requestInfo)\n    {\n        Task.Run(()=> \n        {\n            string mes = Encoding.UTF8.GetString(byteBlock.Buffer, 0, byteBlock.Len);\n            Console.WriteLine($"\u5df2\u63a5\u6536\u5230\u4fe1\u606f\uff1a{mes}");\n        });\n        return true;\n    }\n}\n')),(0,a.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u5f02\u6b65\u524d\u9501\u5b9a\uff0c\u7136\u540e\u4f7f\u7528\u5b8c\u6210\u540e\u53d6\u6d88\u9501\u5b9a\uff0c\u4e14\u4e0d\u7528\u518d\u8c03\u7528Dispose\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"showLineNumbers",showLineNumbers:!0},'public class MyTClient : TcpClient\n{\n    protected override bool HandleReceivedData(ByteBlock byteBlock, IRequestInfo requestInfo)\n    {\n        byteBlock.SetHolding(true);//\u5f02\u6b65\u524d\u9501\u5b9a\n        Task.Run(()=> \n        {\n            string mes = Encoding.UTF8.GetString(byteBlock.Buffer, 0, byteBlock.Len);\n            byteBlock.SetHolding(false);//\u4f7f\u7528\u5b8c\u6210\u540e\u53d6\u6d88\u9501\u5b9a\uff0c\u4e14\u4e0d\u7528\u518d\u8c03\u7528Dispose\n            Console.WriteLine($"\u5df2\u63a5\u6536\u5230\u4fe1\u606f\uff1a{mes}");\n        });\n        return true;\n    }\n}\n')),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"ByteBlock\u5728\u8bbe\u7f6eSetHolding(false)\u540e\uff0c\u4e0d\u9700\u8981\u518d\u8c03\u7528Dispose\u3002")),(0,a.kt)("h3",{id:"38-\u5176\u4ed6\u7528\u6cd5"},"3.8 \u5176\u4ed6\u7528\u6cd5"),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"ByteBlock\uff08ValueByteBlock\uff09"),"\u7684\u5b9e\u9645\u6570\u636e\u6709\u6548\u957f\u5ea6\u5e94\u8be5\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"ByteBlock.Length"),"\u5c5e\u6027\uff0c\u800c\u4e0d\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"ByteBlock.Buffer.Length"),"\u3002")),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u7531\u4e8e",(0,a.kt)("strong",{parentName:"p"},"ByteBlock\uff08ValueByteBlock\uff09"),"\u7684\u90e8\u5206\u5c5e\u6027\u662flong\u7c7b\u578b\uff0c\u4f46\u662f\u5728\u4f7f\u7528\u65f6\u6709\u65f6\u5019\u9700\u8981int\u7c7b\u578b\uff0c\u6240\u4ee5\u4e5f\u63d0\u4f9b\u4e86int\u7684\u5c01\u88c5\u8f6c\u6362\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"ByteBlock.Length"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"ByteBlock.Len"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/RRQM_Home/TouchSocket/tree/master/examples/Core/BytePoolConsoleApp"},"\u672c\u6587\u793a\u4f8bDemo")))}u.isMDXComponent=!0}}]);