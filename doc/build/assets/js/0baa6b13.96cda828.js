"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[657],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(k,o(o({ref:n},s),{},{components:t})):i.createElement(k,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4973:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=t(7462),a=(t(7294),t(3905));t(4996);const r={id:"inject",title:"2.4 \u795e\u5947\u7684 Inject",sidebar_label:"2.4 \u795e\u5947\u7684 Inject"},o=void 0,l={unversionedId:"inject",id:"inject",title:"2.4 \u795e\u5947\u7684 Inject",description:"\u6240\u6709 .AddInject() \u65b9\u6cd5\u4e0d\u80fd\u540c\u65f6\u6ce8\u518c\uff0c\u53ea\u80fd\u53d6\u5176\u4e00\u3002",source:"@site/docs/inject.mdx",sourceDirName:".",slug:"/inject",permalink:"/touchsocket/docs/inject",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/v4/handbook/docs/inject.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"inject",title:"2.4 \u795e\u5947\u7684 Inject",sidebar_label:"2.4 \u795e\u5947\u7684 Inject"},sidebar:"docs",previous:{title:"2.3 \u624b\u52a8\u642d\u5efa\u5206\u5c42",permalink:"/touchsocket/docs/reference"},next:{title:"2.5 .NET5 \u5347\u7ea7 .NET6",permalink:"/touchsocket/docs/net5-to-net6"}},c={},p=[{value:"2.4.1 <code>Inject</code> \u8bbe\u8ba1",id:"241-inject-\u8bbe\u8ba1",level:2},{value:"2.4.2 <code>Inject</code> \u65b9\u6cd5\u6709\u54ea\u4e9b",id:"242-inject-\u65b9\u6cd5\u6709\u54ea\u4e9b",level:2},{value:"2.4.3 \u5728 <code>Program.cs</code> \u4e2d\u4f7f\u7528",id:"243-\u5728-programcs-\u4e2d\u4f7f\u7528",level:2},{value:"2.4.3.1 <code>Inject()</code> \u65b9\u6cd5",id:"2431-inject-\u65b9\u6cd5",level:3},{value:"2.4.4 <code>Startup.ConfigureServices</code> \u4f7f\u7528",id:"244-startupconfigureservices-\u4f7f\u7528",level:2},{value:"2.4.4.1 <code>AddInject()</code> \u65b9\u6cd5",id:"2441-addinject-\u65b9\u6cd5",level:3},{value:"2.4.4.2 <code>AddInjectBase()</code> \u65b9\u6cd5",id:"2442-addinjectbase-\u65b9\u6cd5",level:3},{value:"2.4.4.3 <code>AddInjectMini()</code> \u65b9\u6cd5",id:"2443-addinjectmini-\u65b9\u6cd5",level:3},{value:"2.4.4.4 <code>AddInjectWithUnifyResult()</code> \u65b9\u6cd5",id:"2444-addinjectwithunifyresult-\u65b9\u6cd5",level:3},{value:"2.4.5 <code>Startup.Configure</code> \u4f7f\u7528",id:"245-startupconfigure-\u4f7f\u7528",level:2},{value:"2.4.5.1 <code>UseInject()</code> \u65b9\u6cd5",id:"2451-useinject-\u65b9\u6cd5",level:3},{value:"2.4.5.2 <code>UseInjectBase()</code> \u65b9\u6cd5",id:"2452-useinjectbase-\u65b9\u6cd5",level:3},{value:"2.4.6 \u914d\u7f6e <code>Inject()</code> \u9ed8\u8ba4\u6ce8\u518c\u670d\u52a1",id:"246-\u914d\u7f6e-inject-\u9ed8\u8ba4\u6ce8\u518c\u670d\u52a1",level:2},{value:"2.4.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"247-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],s={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},".AddInject****()")," \u65b9\u6cd5\u4e0d\u80fd\u540c\u65f6\u6ce8\u518c\uff0c\u53ea\u80fd\u53d6\u5176\u4e00\u3002")),(0,a.kt)("h2",{id:"241-inject-\u8bbe\u8ba1"},"2.4.1 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Inject")," \u8bbe\u8ba1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Inject [\u026an\u02c8d\u0292ekt]")," \u610f\u601d\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6ce8\u5165\uff0c\u6ce8\u5c04")," \u7684\u610f\u601d\uff0c\u5728\u8fd9\u91cc\u610f\u4e3a\u4f7f\u7528\u6700\u5c0f\u7684\u4fb5\u5165\u5f0f\u5bf9\u5e94\u7528\u8fdb\u884c\u673a\u80fd\u6539\u9020\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Inject()")," \u65b9\u6cd5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u63d0\u4f9b\u7684\u6700\u5c0f\u4fb5\u5165\u5f0f\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8ba9\u4efb\u4f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," Web \u540e\u7aef\u9879\u76ee\u77ac\u95f4\u652f\u6301\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u7279\u6027\u3002"),(0,a.kt)("h2",{id:"242-inject-\u65b9\u6cd5\u6709\u54ea\u4e9b"},"2.4.2 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Inject")," \u65b9\u6cd5\u6709\u54ea\u4e9b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Inject()"),"\uff1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Program.cs")," \u4e2d\u6ce8\u518c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AddInject()"),"\uff1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigureServices")," \u4e2d\u6ce8\u518c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AddInjectBase()"),"\uff1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigureServices")," \u4e2d\u6ce8\u518c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AddInjectWithUnifyResult()/ AddInjectWithUnifyResult<T>()"),"\uff1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"ConfigureServices")," \u4e2d\u6ce8\u518c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AddInjectMini()"),"\uff1a\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"Minimal API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UseInject()"),"\uff1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Configure")," \u4e2d\u6ce8\u518c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"UseInjectBase()"),"\uff1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Configure")," \u4e2d\u6ce8\u518c")),(0,a.kt)("h2",{id:"243-\u5728-programcs-\u4e2d\u4f7f\u7528"},"2.4.3 \u5728 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Program.cs")," \u4e2d\u4f7f\u7528"),(0,a.kt)("h3",{id:"2431-inject-\u65b9\u6cd5"},"2.4.3.1 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Inject()")," \u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Inject()")," \u662f\u5728\u542f\u52a8\u7a0b\u5e8f ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," \u4e2d\u4f7f\u7528\u7684\uff0c\u96c6\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u552f\u4e00\u65b9\u6cd5\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers  {6,18} title="TouchSocket.Web.Entry\\Program.cs"',showLineNumbers:!0,"":!0,"{6,18}":!0,title:'"TouchSocket.Web.Entry\\Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\nnamespace TouchSocket.Web.Entry\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args)\n        {\n            return Host.CreateDefaultBuilder(args)\n                .ConfigureWebHostDefaults(webBuilder =>\n                {\n                    webBuilder.Inject()\n                              .UseStartup<Startup>();\n                });\n        }\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".Inject()")," \u65b9\u6cd5\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u914d\u7f6e\u7684\u9009\u9879 ",(0,a.kt)("inlineCode",{parentName:"p"},"InjectOptions"),"\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u914d\u7f6e\u914d\u7f6e\u6846\u67b6\u521d\u59cb\u5316\u7684\u4e00\u4e9b\u914d\u7f6e\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1}",showLineNumbers:!0,"{1}":!0},'.Inject((builder, options) =>\n{\n    options.AssemblyName = "TouchSocket";    // \u914d\u7f6e\u5916\u90e8\u7a0b\u5e8f\u96c6\u540d\u79f0\n    options.AutoRegisterBackgroundService = true;   // \u662f\u5426\u81ea\u52a8\u6ce8\u518c BackgroundService\n\n    options.ConfigurationScanDirectories("\u76ee\u5f551", "\u76ee\u5f552", ...); // \u914d\u7f6e\u914d\u7f6e\u6587\u4ef6\u626b\u63cf\u76ee\u5f55\n    options.IgnoreConfigurationFiles("\u6587\u4ef61", "\u6587\u4ef62", ...);    // \u914d\u7f6e\u5ffd\u7565\u914d\u7f6e\u6587\u4ef6\n\n    // \u914d\u7f6e\u914d\u7f6e\u5bf9\u8c61\n    options.ConfigureAppConfiguration((context, config) =>\n    {\n    });\n\n    // \u914d\u7f6e\u914d\u7f6e\u5bf9\u8c61\uff08Web\uff09\n    options.ConfigureWebAppConfiguration((context, config) =>\n    {\n    });\n\n    // \u914d\u7f6e ConfigureServices\n    options.ConfigureServices((context, services) =>\n    {\n    });\n\n    // \u914d\u7f6e ConfigureServices\uff08Web\uff09\n    options.ConfigureWebServices((context, services) =>\n    {\n    });\n});\n')),(0,a.kt)("h2",{id:"244-startupconfigureservices-\u4f7f\u7528"},"2.4.4 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Startup.ConfigureServices")," \u4f7f\u7528"),(0,a.kt)("h3",{id:"2441-addinject-\u65b9\u6cd5"},"2.4.4.1 ",(0,a.kt)("inlineCode",{parentName:"h3"},"AddInject()")," \u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AddInject()")," \u65b9\u6cd5\u662f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," \u4e2d\u63d0\u4f9b\u6700\u57fa\u7840\u529f\u80fd\u7684\u6ce8\u518c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AddInject()")," \u5305\u542b\u4ee5\u4e0b\u57fa\u7840\u529f\u80fd\u6ce8\u518c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddSpecificationDocuments([options])\n        .AddDynamicApiControllers()\n        .AddDataValidation()\n        .AddFriendlyException();\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3,5,7,10}",showLineNumbers:!0,"":!0,"{3,5,7,10}":!0},"namespace TouchSocket.Web.Entry\n{\n    public class Startup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddInject();   // \u652f\u6301\u76f4\u63a5\u6ce8\u518c\uff08\u548c\u4e0b\u9762\u4ee3\u7801\u4e8c\u9009\u4e00\uff0c\u4e0d\u80fd\u540c\u65f6\u6ce8\u518c\u4e24\u6b21\uff09\n\n            services.AddControllers()\n                    .AddInject();   // \u652f\u6301\u94fe\u5f0f\u6ce8\u518c\uff08\u548c\u4e0a\u9762\u4ee3\u7801\u4e8c\u9009\u4e00\uff0c\u4e0d\u80fd\u540c\u65f6\u6ce8\u518c\u4e24\u6b21\uff09\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            // \u5176\u4ed6\u4ee3\u7801\n        }\n    }\n}\n")),(0,a.kt)("h3",{id:"2442-addinjectbase-\u65b9\u6cd5"},"2.4.4.2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"AddInjectBase()")," \u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AddInjectBase()")," \u65b9\u6cd5\u662f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," \u4e2d\u63d0\u4f9b\u6700\u57fa\u7840\u529f\u80fd\u7684\u6ce8\u518c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AddInjectBase()")," \u5305\u542b\u4ee5\u4e0b\u57fa\u7840\u529f\u80fd\u6ce8\u518c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddDataValidation()\n        .AddFriendlyException();\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u540c\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"AddInject()"),"\u3002"),(0,a.kt)("h3",{id:"2443-addinjectmini-\u65b9\u6cd5"},"2.4.4.3 ",(0,a.kt)("inlineCode",{parentName:"h3"},"AddInjectMini()")," \u65b9\u6cd5"),(0,a.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchSocket 3.7.6 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,a.kt)("p",null,"\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},".NET6")," \u6700\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Minimal API")," \u6a21\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"builder.Services.AddInjectMini();\n")),(0,a.kt)("h3",{id:"2444-addinjectwithunifyresult-\u65b9\u6cd5"},"2.4.4.4 ",(0,a.kt)("inlineCode",{parentName:"h3"},"AddInjectWithUnifyResult()")," \u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AddInjectWithUnifyResult()")," \u65b9\u6cd5\u5b9e\u9645\u4e0a\u7b49\u540c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddInject([swaggerGen])\n        .AddUnifyResult();\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u540c\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"AddInject()"),"\u3002"),(0,a.kt)("h2",{id:"245-startupconfigure-\u4f7f\u7528"},"2.4.5 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Startup.Configure")," \u4f7f\u7528"),(0,a.kt)("h3",{id:"2451-useinject-\u65b9\u6cd5"},"2.4.5.1 ",(0,a.kt)("inlineCode",{parentName:"h3"},"UseInject()")," \u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UseInject()")," \u65b9\u6cd5\u662f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Configure")," \u4e2d\u63d0\u4f9b\u6700\u57fa\u7840\u529f\u80fd\u7684\u6ce8\u518c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UseInject()")," \u5305\u542b\u4ee5\u4e0b\u57fa\u7840\u529f\u80fd\u6ce8\u518c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"app.UseSpecificationDocuments();\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3,5,12}",showLineNumbers:!0,"":!0,"{3,5,12}":!0},"namespace TouchSocket.Web.Entry\n{\n    public class Startup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            // \u5176\u4ed6\u4ee3\u7801\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            app.UseInject();    // \u5305\u542b\u6700\u5c0f Swagger \u6ce8\u518c\n        }\n    }\n}\n")),(0,a.kt)("h3",{id:"2452-useinjectbase-\u65b9\u6cd5"},"2.4.5.2 ",(0,a.kt)("inlineCode",{parentName:"h3"},"UseInjectBase()")," \u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UseInjectBase()")," \u65b9\u6cd5\u662f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Configure")," \u4e2d\u63d0\u4f9b\u6700\u57fa\u7840\u529f\u80fd\u7684\u6ce8\u518c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UseInjectBase()")," \u5b9e\u9645\u4e0a\u662f\u4e2a\u7a7a\u65b9\u6cd5\uff0c\u4e3a\u4e86\u89c4\u8303\u5316\u4ee3\u7801\u7279\u610f\u5efa\u7acb\u7684\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u540c\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"UseInject()"),"\u3002"),(0,a.kt)("h2",{id:"246-\u914d\u7f6e-inject-\u9ed8\u8ba4\u6ce8\u518c\u670d\u52a1"},"2.4.6 \u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"h2"},"Inject()")," \u9ed8\u8ba4\u6ce8\u518c\u670d\u52a1"),(0,a.kt)("p",null,"\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},".Inject")," \u65b9\u6cd5\u90fd\u53ef\u4ee5\u4f20\u5165\u59d4\u6258\uff0c\u901a\u8fc7\u59d4\u6258\u53ef\u4ee5\u8fdb\u4e00\u6b65\u53bb\u914d\u7f6e\u9ed8\u8ba4\u884c\u4e3a\u3002\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1}",showLineNumbers:!0,"{1}":!0},".AddInject(options =>\n{\n    options.ConfigureDataValidation(vail =>\n    {\n        vail.GlobalEnabled = false;\n    });\n\n    // ....\n});\n")),(0,a.kt)("h2",{id:"247-\u53cd\u9988\u4e0e\u5efa\u8bae"},"2.4.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 TouchSocket \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/issues/new?issue"},"Issue"),"\u3002")))}d.isMDXComponent=!0}}]);