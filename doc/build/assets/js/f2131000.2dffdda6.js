"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[7990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));n(4996);const o={id:"deploy-docker",title:"34.2 \u5728 Docker \u90e8\u7f72",sidebar_label:"34.2 \u5728 Docker \u90e8\u7f72"},i=void 0,l={unversionedId:"deploy-docker",id:"deploy-docker",title:"34.2 \u5728 Docker \u90e8\u7f72",description:"\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 .csproj \u5e76\u6dfb\u52a0 en-US\uff0c\u5982\uff1a",source:"@site/docs/deploy-docker.mdx",sourceDirName:".",slug:"/deploy-docker",permalink:"/touchsocket/docs/deploy-docker",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/v4/handbook/docs/deploy-docker.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"deploy-docker",title:"34.2 \u5728 Docker \u90e8\u7f72",sidebar_label:"34.2 \u5728 Docker \u90e8\u7f72"},sidebar:"docs",previous:{title:"34.1 \u5728 IIS \u90e8\u7f72",permalink:"/touchsocket/docs/deploy-iis"},next:{title:"34.3 \u5728 Nginx \u90e8\u7f72",permalink:"/touchsocket/docs/deploy-nginx"}},p={},m=[{value:"34.2.1 \u5173\u4e8e <code>Docker</code> \u90e8\u7f72",id:"3421-\u5173\u4e8e-docker-\u90e8\u7f72",level:2},{value:"34.2.2 \u4e24\u79cd\u65b9\u5f0f\u6784\u5efa",id:"3422-\u4e24\u79cd\u65b9\u5f0f\u6784\u5efa",level:2},{value:"34.2.2.1 \u53d1\u5e03\u540e\u6784\u5efa",id:"34221-\u53d1\u5e03\u540e\u6784\u5efa",level:3},{value:"34.2.2.2 \u7f16\u8bd1+\u6784\u5efa+\u53d1\u5e03",id:"34222-\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03",level:3},{value:"34.2.3 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3423-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],c={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u7cbe\u7b80\u53d1\u5e03\u6587\u4ef6",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u7cbe\u7b80\u53d1\u5e03\u540e\u7684\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u5220\u9664\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u5939\uff0c\u53ef\u4ee5\u7f16\u8f91 Web \u9879\u76ee\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," \u5e76\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"<SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>"),"\uff0c\u5982\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {3}",showLineNumbers:!0,"":!0,"{3}":!0},"<PropertyGroup>\n  <TargetFramework>net6.0</TargetFramework>\n  <SatelliteResourceLanguages>en-US</SatelliteResourceLanguages>\n</PropertyGroup>\n"))),(0,a.kt)("h2",{id:"3421-\u5173\u4e8e-docker-\u90e8\u7f72"},"34.2.1 \u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"h2"},"Docker")," \u90e8\u7f72"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker")," \u4e2d\u90e8\u7f72\u7f51\u7ad9\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u53d1\u5e03\u540e\u6784\u5efa"),"\uff1a\u6b64\u65b9\u5f0f\u662f\u5148\u53d1\u5e03\u7f51\u7ad9\u540e\u5728\u518d\u6784\u5efa\u955c\u50cf\uff0c\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6784\u5efa\u5c42\uff0c\u800c\u4e14\u8fd8\u80fd\u7f29\u51cf\u955c\u50cf\u5927\u5c0f\u3002",(0,a.kt)("strong",{parentName:"li"},"\uff08\u63a8\u8350\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u7f16\u8bd1+\u6784\u5efa+\u53d1\u5e03"),"\uff1a\u4e5f\u5c31\u662f\u8bf4\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u4e2d\u914d\u7f6e\u7f51\u7ad9\u4ece\u6784\u5efa\u5230\u53d1\u5e03\u7684\u5b8c\u6574\u8fc7\u7a0b\uff0c\u6b64\u65b9\u5f0f\u4f1a\u901f\u5ea6\u6162\uff0c\u800c\u4e14\u4f1a\u4ea7\u751f\u5197\u4f59\u5c42\uff0c\u589e\u52a0\u955c\u50cf\u5927\u5c0f\u3002")),(0,a.kt)("h2",{id:"3422-\u4e24\u79cd\u65b9\u5f0f\u6784\u5efa"},"34.2.2 \u4e24\u79cd\u65b9\u5f0f\u6784\u5efa"),(0,a.kt)("h3",{id:"34221-\u53d1\u5e03\u540e\u6784\u5efa"},"34.2.2.1 \u53d1\u5e03\u540e\u6784\u5efa"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u53d1\u5e03\u7f51\u7ad9")),(0,a.kt)("p",null,"\u9996\u5148\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet cli")," \u4e2d\u53d1\u5e03\u7f51\u7ad9\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"deploy-iis#3411-%E5%8F%91%E5%B8%83%E7%BD%91%E7%AB%99"},"\u5728 IIS \u90e8\u7f72-\u53d1\u5e03\u7f51\u7ad9")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u7f16\u5199 ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'FROM mcr.microsoft.com/dotnet/aspnet:5.0.9\nWORKDIR /app\nEXPOSE 80\nEXPOSE 443\n\nCOPY . .\nENTRYPOINT ["dotnet", "TouchSocket.Web.Entry.dll"]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u6587\u4ef6\u62f7\u8d1d\u5230\u53d1\u5e03\u6839\u76ee\u5f55")),(0,a.kt)("p",null,"\u5c06\u7f16\u5199\u597d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u6587\u4ef6\uff08\u6ce8\u610f ",(0,a.kt)("inlineCode",{parentName:"p"},"D")," \u5927\u5199\uff09\u62f7\u8d1d\u5230\u53d1\u5e03\u7f51\u7ad9\u7684\u6839\u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u6784\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"Docker")," \u955c\u50cf")),(0,a.kt)("p",null,"\u5728\u7f51\u7ad9\u53d1\u5e03\u540e\u7684\u8def\u5f84\u6839\u76ee\u5f55\u4e0b\uff08\u5fc5\u987b\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\uff09\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD/PowerShell")," \u53ea\u9700\u6784\u5efa\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker build -t \u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7 .\n")),(0,a.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u540e\u7aef\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".")," \u4e0d\u80fd\u7701\u7565")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u542f\u52a8\u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker run --name \u5bb9\u5668\u540d\u79f0 -p 5000:80 --restart=always -d \u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u53d1\u5e03\u5230 ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"hub.docker.com")),(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u5c06\u8be5\u7f51\u7ad9\u7684\u955c\u50cf\u516c\u5f00\u51fa\u53bb\uff0c\u90a3\u4e48\u53ef\u4ee5\u53d1\u5e03\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"hub.docker.com")," \u4e2d\u3002\u53d1\u5e03\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u4e3a\u955c\u50cf\u6253 ",(0,a.kt)("inlineCode",{parentName:"li"},"tag")," \u6807\u7b7e")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker tag \u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7 docker\u8d26\u53f7\u540d/\u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7\n")),(0,a.kt)("p",{parentName:"admonition"},"\u5982\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker tag TouchSocket:v2.20 monksoul/TouchSocket:v2.20\n")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u767b\u5f55 ",(0,a.kt)("inlineCode",{parentName:"li"},"docker"))),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker login\n")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u63a8\u9001\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"hub.docker.com"))),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker push docker\u8d26\u53f7\u540d/\u7f51\u7ad9\u540d\u79f0:\u7f51\u7ad9\u7248\u672c\u53f7\n")),(0,a.kt)("p",{parentName:"admonition"},"\u5982\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker push monksoul/TouchSocket:v2.20\n"))),(0,a.kt)("h3",{id:"34222-\u7f16\u8bd1\u6784\u5efa\u53d1\u5e03"},"34.2.2.2 \u7f16\u8bd1+\u6784\u5efa+\u53d1\u5e03"),(0,a.kt)("p",null,"\u6b64\u65b9\u5f0f\u53ef\u4ee5\u5077\u61d2\uff0c\u4f46\u662f\u4e0d\u592a\u63a8\u8350\uff0c\u4e0d\u8fc7\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u975e\u5e38\u6709\u7528\uff0c\u5c31\u662f\u96c6\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"Devops")," \u5de5\u5177\u94fe\u53ef\u4ee5\u505a\u5230\u4e00\u6b65\u5230\u4f4d\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u7f16\u5199 ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"))),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u53ea\u9700\u8981\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u5185\u5bb9\u66ff\u6362\u6210\u4ee5\u4e0b\u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers  {6}",showLineNumbers:!0,"":!0,"{6}":!0},'FROM mcr.microsoft.com/dotnet/sdk:5.0.9 AS build\nWORKDIR /source\n\n# Download Source\nRUN git init\nRUN git remote add -t master -m master origin \u4f60\u7684\u6e90\u7801Git\u5730\u5740\nRUN git config core.sparseCheckout true\nRUN echo samples >> .git/info/sparse-checkout\nRUN git pull --depth 1 origin main\n\n# Restore And Publish\nWORKDIR /source/samples\nRUN dotnet restore\nRUN dotnet publish -c release -o /app --no-restore\n\n# Run\nFROM mcr.microsoft.com/dotnet/aspnet:5.0.9\nWORKDIR /app\nCOPY --from=build /app ./\nEXPOSE 80\nEXPOSE 443\nENTRYPOINT ["dotnet", "TouchSocket.Web.Entry.dll"]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile")," \u6240\u5728\u8def\u5f84\u6784\u5efa")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u548c\u4e0a\u8ff0\u6b65\u9aa4\u4e00\u81f4\uff0c\u4e0d\u518d\u91cd\u590d\u7f16\u5199\u3002"),(0,a.kt)("h2",{id:"3423-\u53cd\u9988\u4e0e\u5efa\u8bae"},"34.2.3 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 TouchSocket \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/issues/new?issue"},"Issue"),"\u3002")))}s.isMDXComponent=!0}}]);