"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[9138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905)),a=n(4996);const o={id:"sensitive-detection",title:"30. \u8131\u654f\u5904\u7406",sidebar_label:"30. \u8131\u654f\u5904\u7406"},s=void 0,l={unversionedId:"sensitive-detection",id:"sensitive-detection",title:"30. \u8131\u654f\u5904\u7406",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 TouchSocket 2.4.4 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/sensitive-detection.mdx",sourceDirName:".",slug:"/sensitive-detection",permalink:"/touchsocket/docs/sensitive-detection",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/v4/handbook/docs/sensitive-detection.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"sensitive-detection",title:"30. \u8131\u654f\u5904\u7406",sidebar_label:"30. \u8131\u654f\u5904\u7406"},sidebar:"docs",previous:{title:"29. \u7c98\u571f\u5bf9\u8c61",permalink:"/touchsocket/docs/clayobj"},next:{title:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff08\u4e0a\u4f20\u4e0b\u8f7d\uff09",permalink:"/touchsocket/docs/file-provider"}},c={},p=[{value:"30.1 \u5173\u4e8e\u8131\u654f",id:"301-\u5173\u4e8e\u8131\u654f",level:2},{value:"30.2 \u5982\u4f55\u4f7f\u7528",id:"302-\u5982\u4f55\u4f7f\u7528",level:2},{value:"30.2.1 \u6ce8\u518c <code>\u8131\u654f\u8bcd\u6c47\u68c0\u6d4b</code> \u670d\u52a1",id:"3021-\u6ce8\u518c-\u8131\u654f\u8bcd\u6c47\u68c0\u6d4b-\u670d\u52a1",level:3},{value:"30.2.2 \u521b\u5efa <code>sensitive-words.txt</code> \u6587\u4ef6",id:"3022-\u521b\u5efa-sensitive-wordstxt-\u6587\u4ef6",level:3},{value:"30.2.3 \u4f7f\u7528\u8131\u654f\u68c0\u6d4b",id:"3023-\u4f7f\u7528\u8131\u654f\u68c0\u6d4b",level:3},{value:"30.2.4 \u8131\u654f\u8bcd\u6c47\u66ff\u6362",id:"3024-\u8131\u654f\u8bcd\u6c47\u66ff\u6362",level:3},{value:"30.3 \u81ea\u5b9a\u4e49\u8131\u654f\u8bcd\u6c47\u5904\u7406",id:"303-\u81ea\u5b9a\u4e49\u8131\u654f\u8bcd\u6c47\u5904\u7406",level:2},{value:"30.3.1 \u81ea\u5b9a\u4e49 <code>ISensitiveDetectionProvider</code> \u7a0b\u5e8f\uff0c\u5982\uff1a",id:"3031-\u81ea\u5b9a\u4e49-isensitivedetectionprovider-\u7a0b\u5e8f\u5982",level:3},{value:"30.3.2 \u6ce8\u518c\u81ea\u5b9a\u4e49\u8131\u654f\u63d0\u4f9b\u5668",id:"3032-\u6ce8\u518c\u81ea\u5b9a\u4e49\u8131\u654f\u63d0\u4f9b\u5668",level:3},{value:"30.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"304-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket 2.4.4 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"301-\u5173\u4e8e\u8131\u654f"},"30.1 \u5173\u4e8e\u8131\u654f"),(0,r.kt)("p",null,"\u5f15\u7528\u767e\u5ea6\u767e\u79d1\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6570\u636e\u8131\u654f\u662f\u6307\u5bf9\u67d0\u4e9b\u654f\u611f\u4fe1\u606f\u901a\u8fc7\u8131\u654f\u89c4\u5219\u8fdb\u884c\u6570\u636e\u7684\u53d8\u5f62\uff0c\u5b9e\u73b0\u654f\u611f\u9690\u79c1\u6570\u636e\u7684\u53ef\u9760\u4fdd\u62a4\u3002\u5728\u6d89\u53ca\u5ba2\u6237\u5b89\u5168\u6570\u636e\u6216\u8005\u4e00\u4e9b\u5546\u4e1a\u6027\u654f\u611f\u6570\u636e\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u4e0d\u8fdd\u53cd\u7cfb\u7edf\u89c4\u5219\u6761\u4ef6\u4e0b\uff0c\u5bf9\u771f\u5b9e\u6570\u636e\u8fdb\u884c\u6539\u9020\u5e76\u63d0\u4f9b\u6d4b\u8bd5\u4f7f\u7528\uff0c\u5982\u8eab\u4efd\u8bc1\u53f7\u3001\u624b\u673a\u53f7\u3001\u5361\u53f7\u3001\u5ba2\u6237\u53f7\u7b49\u4e2a\u4eba\u4fe1\u606f\u90fd\u9700\u8981\u8fdb\u884c\u6570\u636e\u8131\u654f\u3002\u6570\u636e\u5b89\u5168\u6280\u672f\u4e4b\u4e00\uff0c\u6570\u636e\u5e93\u5b89\u5168\u6280\u672f\u4e3b\u8981\u5305\u62ec\uff1a\u6570\u636e\u5e93\u6f0f\u626b\u3001\u6570\u636e\u5e93\u52a0\u5bc6\u3001\u6570\u636e\u5e93\u9632\u706b\u5899\u3001\u6570\u636e\u8131\u654f\u3001\u6570\u636e\u5e93\u5b89\u5168\u5ba1\u8ba1\u7cfb\u7edf\u3002")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u7cfb\u7edf\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u8131\u654f\u5904\u7406")," \u6307\u7684\u662f\u5bf9\u4e0d\u7b26\u5408\u7cfb\u7edf\u5408\u6cd5\u8bcd\u6c47\u68c0\u6d4b\u9a8c\u8bc1\u3002"),(0,r.kt)("h2",{id:"302-\u5982\u4f55\u4f7f\u7528"},"30.2 \u5982\u4f55\u4f7f\u7528"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u5185\u7f6e\u4e86\u4e00\u5957\u9ed8\u8ba4\u7684\u8131\u654f\u8bcd\u6c47\u8131\u654f\u5904\u7406\u673a\u5236\uff0c\u5e76\u4e14\u63d0\u4f9b\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002"),(0,r.kt)("h3",{id:"3021-\u6ce8\u518c-\u8131\u654f\u8bcd\u6c47\u68c0\u6d4b-\u670d\u52a1"},"30.2.1 \u6ce8\u518c ",(0,r.kt)("inlineCode",{parentName:"h3"},"\u8131\u654f\u8bcd\u6c47\u68c0\u6d4b")," \u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3}",showLineNumbers:!0,"":!0,"{3}":!0},"public void ConfigureServices(IServiceCollection services)\n{\n    services.AddSensitiveDetection();\n}\n")),(0,r.kt)("h3",{id:"3022-\u521b\u5efa-sensitive-wordstxt-\u6587\u4ef6"},"30.2.2 \u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"h3"},"sensitive-words.txt")," \u6587\u4ef6"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web")," \u542f\u52a8\u5c42\u9879\u76ee\u4e2d\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"sensitive-words.txt")," \u6587\u4ef6\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u786e\u4fdd\u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"strong"},"UTF-8")," \u7f16\u7801\u683c\u5f0f\u4e14\u4e0d\u80fd\u5e26 ",(0,r.kt)("inlineCode",{parentName:"strong"},"BOM \u7b7e\u540d")," \u4e14\u8bbe\u7f6e\u4e3a\u5d4c\u5165\u5f0f\u8d44\u6e90\uff01"),"\ud83c\udf83"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sensitive-words.txt")," \u5185\u5bb9\u683c\u5f0f\u4e3a\u6bcf\u4e00\u884c\u6807\u8bc6\u4e00\u4e2a\u8131\u654f\u8bcd\u6c47\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-showLineNumbers"},"\u574f\u4eba\n\u65e0\u8bed\n\u6eda\u5f00\n\u516b\u560e\n")),(0,r.kt)("admonition",{title:"3.8.9+ \u7248\u672c",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket 3.8.9+")," \u7248\u672c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," \u5206\u9694\u7b26\u8fdb\u884c\u5206\u5272\uff0c\u4e5f\u540c\u65f6\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6362\u884c")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," \u6df7\u7528\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-showLineNumbers"},"\u574f\u4eba|\u65e0\u8bed|\u6eda\u5f00\n\u516b\u560e\n")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"strong"},"|")," \u65b9\u5f0f\uff0c\u53ef\u4ee5\u8282\u7701\u8bcd\u5e93\u5360\u7528\u5b58\u50a8\u7a7a\u95f4\u3002"))),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u8bbe\u7f6e\u4e3a\u5d4c\u5165\u5f0f\u8d44\u6e90\uff1a"),(0,r.kt)("img",{src:(0,a.Z)("img/tm.png")}),(0,r.kt)("h3",{id:"3023-\u4f7f\u7528\u8131\u654f\u68c0\u6d4b"},"30.2.3 \u4f7f\u7528\u8131\u654f\u68c0\u6d4b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5b9e\u73b0\u6570\u636e\u9a8c\u8bc1\u8131\u654f\u68c0\u6d4b ",(0,r.kt)("inlineCode",{parentName:"strong"},"[SensitiveDetection]")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"[SensitiveDetection]")," \u9a8c\u8bc1\u7279\u6027\uff0c\u53ef\u4ee5\u5bf9\u53c2\u6570\u3001\u5c5e\u6027\u8fdb\u884c\u8131\u654f\u9a8c\u8bc1\uff0c\u7528\u6cd5\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"[DataValidation]")," \u4e00\u81f4\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4,9}",showLineNumbers:!0,"":!0,"{4,9}":!0},"// \u5728\u5c5e\u6027\u4e2d\u4f7f\u7528\npublic class Content\n{\n    [SensitiveDetection]\n    public string Text { get; set; }\n}\n\n// \u5728 \u52a8\u6001API/Controller \u4e2d\u4f7f\u7528\npublic void Test([SensitiveDetection] string text)\n{\n\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"strong"},"ISensitiveDetectionProvider")," \u670d\u52a1\u4f7f\u7528"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"ISensitiveDetectionProvider")," \u670d\u52a1\u8fdb\u884c\u624b\u52a8\u8131\u654f\u9a8c\u8bc1\u5904\u7406\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4,15,25,35}",showLineNumbers:!0,"":!0,"{4,15,25,35}":!0},'public class TouchSocketService\n{\n    private readonly ISensitiveDetectionProvider _sensitiveDetectionProvider;\n    public TouchSocketService(ISensitiveDetectionProvider sensitiveDetectionProvider)\n    {\n        _sensitiveDetectionProvider = sensitiveDetectionProvider;\n    }\n\n    /// <summary>\n    /// \u83b7\u53d6\u6240\u6709\u8131\u654f\u8bcd\u6c47\n    /// </summary>\n    /// <returns></returns>\n    public async Task<IEnumerable<string>> GetWordsAsync()\n    {\n        return await _sensitiveDetectionProvider.GetWordsAsync();\n    }\n\n    /// <summary>\n    /// \u5224\u65ad\u662f\u5426\u662f\u6b63\u5e38\u7684\u8bcd\u6c47\n    /// </summary>\n    /// <param name="text"></param>\n    /// <returns></returns>\n    public async Task<bool> VaildedAsync(string text)\n    {\n        return await _sensitiveDetectionProvider.VaildedAsync(text);\n    }\n\n    /// <summary>\n    /// \u66ff\u6362\u975e\u6b63\u5e38\u8bcd\u6c47\n    /// </summary>\n    /// <param name="text"></param>\n    /// <returns></returns>\n    public async Task<string> ReplaceAsync(string text)\n    {\n        return await _sensitiveDetectionProvider.ReplaceAsync(text, \'*\');\n    }\n}\n')),(0,r.kt)("h3",{id:"3024-\u8131\u654f\u8bcd\u6c47\u66ff\u6362"},"30.2.4 \u8131\u654f\u8bcd\u6c47\u66ff\u6362"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u66ff\u6362\u8131\u654f\u8bcd\u6c47\u7684\u7279\u6027\u652f\u6301\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4}",showLineNumbers:!0,"":!0,"{4}":!0},"// \u5728\u5c5e\u6027\u4e2d\u4f7f\u7528\npublic class Content\n{\n    [SensitiveDetection('*')]\n    public string Text { get; set; }\n}\n")),(0,r.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket 3.8.8+")," \u7248\u672c\u540e\u652f\u6301\u65b9\u6cd5\u7279\u6027\u76f4\u63a5\u66ff\u6362"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1}",showLineNumbers:!0,"":!0,"{1}":!0},"public void Test([SensitiveDetection('*')] string text)\n{\n}\n"))),(0,r.kt)("h2",{id:"303-\u81ea\u5b9a\u4e49\u8131\u654f\u8bcd\u6c47\u5904\u7406"},"30.3 \u81ea\u5b9a\u4e49\u8131\u654f\u8bcd\u6c47\u5904\u7406"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u9664\u4e86\u5185\u7f6e\u4e86\u4e00\u5957\u9ed8\u8ba4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u8131\u654f\u5904\u7406")," \u7a0b\u5e8f\uff0c\u4e5f\u652f\u6301\u81ea\u5b9a\u4e49\u8131\u654f\u5904\u7406\u7a0b\u5e8f\u3002"),(0,r.kt)("h3",{id:"3031-\u81ea\u5b9a\u4e49-isensitivedetectionprovider-\u7a0b\u5e8f\u5982"},"30.3.1 \u81ea\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"h3"},"ISensitiveDetectionProvider")," \u7a0b\u5e8f\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4,15,25,36}",showLineNumbers:!0,"":!0,"{4,15,25,36}":!0},'/// <summary>\n/// \u81ea\u5b9a\u4e49\u8131\u654f\u8bcd\u6c47\u68c0\u6d4b\u5668\n/// </summary>\npublic class YourSensitiveDetectionProvider : ISensitiveDetectionProvider\n{\n    // \u652f\u6301\u6784\u9020\u51fd\u6570\u6ce8\u5165\n    public YourSensitiveDetectionProvider()\n    {\n    }\n\n    /// <summary>\n    /// \u8fd4\u56de\u6240\u6709\u8131\u654f\u8bcd\u6c47\n    /// </summary>\n    /// <returns></returns>\n    public async Task<IEnumerable<string>> GetWordsAsync()\n    {\n        // \u8fd9\u91cc\u5199\u4f60\u8131\u654f\u8bcd\u6c47\u6570\u636e\u7684\u6765\u6e90\uff08\u5982\u4ece\u6570\u636e\u5e93\u8bfb\u53d6\uff09\uff0c\u5efa\u8bae\u505a\u597d\u7f13\u5b58\u64cd\u4f5c\n    }\n\n    /// <summary>\n    /// \u5224\u65ad\u8131\u654f\u8bcd\u6c47\u662f\u5426\u6709\u6548\n    /// </summary>\n    /// <param name="text"></param>\n    /// <returns></returns>\n    public async Task<bool> VaildedAsync(string text)\n    {\n        // \u8fd9\u91cc\u5199\u4f60\u5982\u4f55\u5224\u65ad\u662f\u6b63\u5e38\u7684\u5b57\u7b26\uff0c\u8fd4\u56de true \u6b63\u5e38\uff0c\u8fd4\u56de false \u8868\u793a\u662f\u4e2a\u8131\u654f\u8bcd\u6c47\n    }\n\n    /// <summary>\n    /// \u66ff\u6362\u8131\u654f\u8bcd\u6c47\n    /// </summary>\n    /// <param name="text"></param>\n    /// <param name="transfer"></param>\n    /// <returns></returns>\n    public async Task<string> ReplaceAsync(string text, char transfer = \'*\')\n    {\n        // \u8fd9\u91cc\u5199\u4f60\u66ff\u6362\u975e\u6b63\u5e38\u5b57\u7b26\u4e3a\u6307\u5b9a\u5b57\u7b26\n    }\n}\n')),(0,r.kt)("h3",{id:"3032-\u6ce8\u518c\u81ea\u5b9a\u4e49\u8131\u654f\u63d0\u4f9b\u5668"},"30.3.2 \u6ce8\u518c\u81ea\u5b9a\u4e49\u8131\u654f\u63d0\u4f9b\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3}",showLineNumbers:!0,"":!0,"{3}":!0},"public void ConfigureServices(IServiceCollection services)\n{\n    services.AddSensitiveDetection<YourSensitiveDetectionProvider>();\n}\n")),(0,r.kt)("p",null,"\u4e4b\u540e\u7cfb\u7edf\u5c06\u81ea\u52a8\u91c7\u7528\u81ea\u5b9a\u4e49\u7684\u65b9\u5f0f\u8fdb\u884c\u8131\u654f\u5904\u7406\u3002"),(0,r.kt)("h2",{id:"304-\u53cd\u9988\u4e0e\u5efa\u8bae"},"30.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed9 TouchSocket \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/issues/new?issue"},"Issue"),"\u3002")),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);