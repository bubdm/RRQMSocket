"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[2994],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(t),g=r,u=c["".concat(l,".").concat(g)]||c[g]||d[g]||i;return t?a.createElement(u,o(o({ref:n},m),{},{components:t})):a.createElement(u,o({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2970:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=t(7462),r=(t(7294),t(3905)),i=t(4996);const o={id:"clientapi",title:"5.6 Vue/React/Angular \u63a5\u53e3\u4ee3\u7406",sidebar_label:"5.6 Vue/React/Angular \u8bf7\u6c42\u4ee3\u7406"},p=void 0,l={unversionedId:"clientapi",id:"clientapi",title:"5.6 Vue/React/Angular \u63a5\u53e3\u4ee3\u7406",description:"https://www.bilibili.com/video/BV1EW4y1C71D",source:"@site/docs/clientapi.mdx",sourceDirName:".",slug:"/clientapi",permalink:"/touchsocket/docs/clientapi",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/v4/handbook/docs/clientapi.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"clientapi",title:"5.6 Vue/React/Angular \u63a5\u53e3\u4ee3\u7406",sidebar_label:"5.6 Vue/React/Angular \u8bf7\u6c42\u4ee3\u7406"},sidebar:"docs",previous:{title:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",permalink:"/touchsocket/docs/middleware"},next:{title:"6. \u89c4\u8303\u5316\u63a5\u53e3\u6587\u6863 (Swagger)",permalink:"/touchsocket/docs/specification-document"}},s={},m=[{value:"5.6.1 \u5386\u53f2\u80cc\u666f",id:"561-\u5386\u53f2\u80cc\u666f",level:2},{value:"5.6.2 \u5982\u4f55\u89e3\u51b3\uff1f",id:"562-\u5982\u4f55\u89e3\u51b3",level:2},{value:"5.6.3 \u751f\u6210\u5ba2\u6237\u7aef\u8bf7\u6c42\u4ee3\u7801",id:"563-\u751f\u6210\u5ba2\u6237\u7aef\u8bf7\u6c42\u4ee3\u7801",level:2},{value:"5.3.3.1 \u751f\u6210\u5ba2\u6237\u7aef\u4ee3\u7801",id:"5331-\u751f\u6210\u5ba2\u6237\u7aef\u4ee3\u7801",level:3},{value:"5.6.3.2 <code>Vue/React</code> \u914d\u7f6e",id:"5632-vuereact-\u914d\u7f6e",level:3},{value:"5.6.3.3 <code>Angular</code> \u914d\u7f6e",id:"5633-angular-\u914d\u7f6e",level:3},{value:"5.6.4 \u521d\u59cb\u914d\u7f6e",id:"564-\u521d\u59cb\u914d\u7f6e",level:2},{value:"5.6.4.1 <code>Vue/React</code> \u914d\u7f6e",id:"5641-vuereact-\u914d\u7f6e",level:3},{value:"5.6.4.2 <code>Angular</code> \u914d\u7f6e",id:"5642-angular-\u914d\u7f6e",level:3},{value:"5.6.5 \u57fa\u672c\u4f7f\u7528",id:"565-\u57fa\u672c\u4f7f\u7528",level:2},{value:"5.6.5.1 <code>Vue/React</code> \u4e2d\u4f7f\u7528",id:"5651-vuereact-\u4e2d\u4f7f\u7528",level:3},{value:"5.6.5.2 <code>Angular</code> \u4e2d\u4f7f\u7528",id:"5652-angular-\u4e2d\u4f7f\u7528",level:3},{value:"5.6.6 \u91cd\u65b0\u751f\u6210\u4ee3\u7801",id:"566-\u91cd\u65b0\u751f\u6210\u4ee3\u7801",level:2},{value:"5.6.7 <code>Swagger</code> \u591a\u5206\u7ec4\u751f\u6210",id:"567-swagger-\u591a\u5206\u7ec4\u751f\u6210",level:2},{value:"5.6.8 \u81ea\u5b9a\u4e49\u751f\u6210\u524d\u7aef\u65b9\u6cd5\u540d",id:"568-\u81ea\u5b9a\u4e49\u751f\u6210\u524d\u7aef\u65b9\u6cd5\u540d",level:2},{value:"5.6.9 \u6846\u67b6\u5ba2\u6237\u7aef\u5de5\u5177\u5e93\u4ecb\u7ecd",id:"569-\u6846\u67b6\u5ba2\u6237\u7aef\u5de5\u5177\u5e93\u4ecb\u7ecd",level:2},{value:"5.6.10 \u65e0\u6cd5\u8fde\u63a5\u5916\u7f51/\u5185\u7f51\u60c5\u51b5/\u79bb\u7ebf\u5305",id:"5610-\u65e0\u6cd5\u8fde\u63a5\u5916\u7f51\u5185\u7f51\u60c5\u51b5\u79bb\u7ebf\u5305",level:2},{value:"5.6.11 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"5611-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:m};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u89c6\u9891\u6559\u7a0b",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1EW4y1C71D"},"https://www.bilibili.com/video/BV1EW4y1C71D"))),(0,r.kt)("h2",{id:"561-\u5386\u53f2\u80cc\u666f"},"5.6.1 \u5386\u53f2\u80cc\u666f"),(0,r.kt)("p",null,"\u5728\u73b0\u5728\u4e3b\u6d41\u7684 Web \u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u5f00\u53d1\u8005\u9009\u62e9\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Vue/React/Angular")," \u4e09\u5927\u6846\u67b6\u8fdb\u884c\u5f00\u53d1\uff0c\u8fd9\u4e09\u5927\u6846\u67b6\u548c\u4f20\u7edf\u5f00\u53d1\u6a21\u5f0f\u6700\u5927\u7684\u4e0d\u540c\u662f\u524d\u8005\u91c7\u7528\u524d\u540e\u7aef\u5206\u79bb\u7684\u65b9\u5f0f\uff0c\u800c\u540e\u8005\u7edf\u4e00\u7531\u540e\u7aef\u7a0b\u5e8f\u5458\u7f16\u5199\u3002"),(0,r.kt)("p",null,"\u5728\u524d\u540e\u7aef\u5206\u79bb\u7684\u6a21\u5f0f\u4e2d\uff0c\u524d\u540e\u7aef\u7a0b\u5e8f\u5458\u5404\u53f8\u5176\u804c\uff0c\u540e\u7aef\u7a0b\u5e8f\u8d1f\u8d23\u7f16\u5199\u63a5\u53e3\uff08API\uff09\uff0c\u524d\u7aef\u7a0b\u5e8f\u5458\u8d1f\u8d23\u7f16\u5199\u5ba2\u6237\u7aef\u8bf7\u6c42\u540e\u7aef\u63a5\u53e3\uff08API\uff09\u5e76\u8fdb\u884c\u6570\u636e\u7ed1\u5b9a\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f46\u8fd9\u91cc\u66b4\u9732\u51fa\u4e86\u4e00\u4e2a\u5de5\u4f5c\u6548\u7387\u6781\u4f4e\u4e14\u6613\u51fa\u9519\u7684\u95ee\u9898\uff0c\u90a3\u5c31\u662f\u524d\u7aef\u7a0b\u5e8f\u9700\u8981\u5c06\u540e\u7aef\u51e0\u767e\u4e2a\u751a\u81f3\u4e0a\u5343\u4e2a\u63a5\u53e3\u8fdb\u884c\u4e00\u4e00\u5bf9\u5e94\u7f16\u5199\uff0c\u5927\u591a\u90fd\u662f\u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"strong"},"$.ajax")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"strong"},"axios")," \u7684\u65b9\u5f0f\u3002")),(0,r.kt)("p",null,"\u4e00\u65e6\u540e\u7aef\u63a5\u53e3\u53c2\u6570\u6216\u8fd4\u56de\u503c\u53d1\u751f\u6539\u53d8\uff0c\u524d\u7aef\u7a0b\u5e8f\u5458\u9700\u8981\u4e00\u4e00\u8fdb\u884c\u52d8\u6b63\uff0c\u4e00\u65e6\u51fa\u73b0\u7ea0\u6b63\u4e0d\u5b8c\u5168\u5c31\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u65e0\u6cd5\u54cd\u5e94\u6216\u63a5\u6536\u9519\u8bef\u7684\u7528\u6237\u6d88\u606f\u4ece\u800c\u9020\u6210\u4e0d\u5fc5\u8981\u7684\u7ef4\u62a4\u5de5\u4f5c\u548c\u6210\u672c\u6d6a\u8d39\u3002"),(0,r.kt)("h2",{id:"562-\u5982\u4f55\u89e3\u51b3"},"5.6.2 \u5982\u4f55\u89e3\u51b3\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u7f16\u5199\u7684\u6240\u6709\u540e\u7aef\u63a5\u53e3\u90fd\u4f1a\u751f\u6210\u89c4\u8303\u5316\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"swagger.json")," \u6587\u4ef6\uff0c\u4f7f\u7528\u8be5\u6587\u4ef6\u53ef\u4ee5\u5728 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://editor.swagger.io"},"https://editor.swagger.io"))," \u751f\u6210\u4efb\u4f55\u652f\u6301\u6807\u51c6 ",(0,r.kt)("inlineCode",{parentName:"p"},"swagger")," \u7684\u754c\u9762\u6216\u5ba2\u6237\u7aef\u4ee3\u7801\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u81ea\u6b64\uff0c\u524d\u7aef\u7a0b\u5e8f\u5458\u518d\u4e5f\u65e0\u9700\u81ea\u5df1\u624b\u5199 ",(0,r.kt)("inlineCode",{parentName:"strong"},"$.ajax")," \u548c ",(0,r.kt)("inlineCode",{parentName:"strong"},"axios")," \u4ee3\u7801\uff0c\u8fd9\u90e8\u5206\u4ee3\u7801\u5168\u90e8\u81ea\u52a8\u751f\u6210\uff0c\u4ee5\u540e\u5f00\u53d1\u6548\u7387\u81f3\u5c11\u63d0\u9ad8\u4e00\u534a\u4ee5\u4e0a\u3002")),(0,r.kt)("h2",{id:"563-\u751f\u6210\u5ba2\u6237\u7aef\u8bf7\u6c42\u4ee3\u7801"},"5.6.3 \u751f\u6210\u5ba2\u6237\u7aef\u8bf7\u6c42\u4ee3\u7801"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"TypeScript")," \u548c ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"JavaScript")),(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u6559\u7a0b\u4ec5\u9002\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Vue/React/Angular")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u7c7b\u578b\u9879\u76ee\uff0c\u6682\u4e0d\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u9879\u76ee\u826f\u597d\u7684\u53d1\u5c55\u548c\u7ef4\u62a4\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u8fdb\u884c\u7f16\u5199\u3002")),(0,r.kt)("h3",{id:"5331-\u751f\u6210\u5ba2\u6237\u7aef\u4ee3\u7801"},"5.3.3.1 \u751f\u6210\u5ba2\u6237\u7aef\u4ee3\u7801"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u6253\u5f00\u89c4\u8303\u5316\u6587\u6863\uff08Swagger\uff09\u9996\u9875\uff0c\u5e76\u70b9\u51fb\u9876\u90e8 ",(0,r.kt)("inlineCode",{parentName:"strong"},"/swagger/xxxx/swagger.json")," \u5230\u65b0\u7a97\u53e3\u6253\u5f00\u3002"))),(0,r.kt)("img",{src:(0,i.Z)("img/sg1.png")}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u63a5\u7740\u5168\u9009\u5e76\u590d\u5236\u5168\u90e8\u5185\u5bb9"))),(0,r.kt)("img",{src:(0,i.Z)("img/sg2.png")}),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u6253\u5f00 ",(0,r.kt)("a",{parentName:"strong",href:"https://editor.swagger.io/"},"https://editor.swagger.io")," \u5b98\u7f51\u5e76\u7c98\u8d34\u8fdb\u53bb"))),(0,r.kt)("admonition",{title:"\u65e0\u6cd5\u8054\u7f51",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u4e5f\u63d0\u4f9b\u4e86 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://gitee.com/rrqm_home/TouchSocket/blob/v4/clients/Swagger-Editor.rar"},"Swagger-Editor.rar"))," \u79bb\u7ebf\u5305\uff0c\u53ef\u76f4\u63a5\u4e0b\u8f7d\u89e3\u538b\u5e76\u53cc\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," \u5373\u53ef\u3002")),(0,r.kt)("img",{src:(0,i.Z)("img/sg3.png")}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u6700\u540e\u70b9\u51fb\u9876\u90e8\u7684 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Generate Client")," \u9009\u62e9\u5bf9\u5e94\u7684\u8bed\u8a00/\u6846\u67b6\u8fdb\u884c\u751f\u6210\u5373\u53ef\u3002"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"5632-vuereact-\u914d\u7f6e"},"5.6.3.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Vue/React")," \u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"strong"},"Generate Client")," \u9876\u90e8\u83dc\u5355\u5e76\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"strong"},"typescript-axios")," \u8fdb\u884c\u4e0b\u8f7d\u3002")),(0,r.kt)("img",{src:(0,i.Z)("img/sg4.png")}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d\u6210\u529f\u4e4b\u540e\u62f7\u8d1d\u4e0b\u56fe\u9009\u62e9\u7684\u76ee\u5f55\u548c\u6587\u4ef6\uff1a")),(0,r.kt)("img",{src:(0,i.Z)("img/sg5.png")}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u7740\u6253\u5f00\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Vue")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"strong"},"React")," \u9879\u76ee\uff0c\u5e76\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"src")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"strong"},"api-services")," \u76ee\u5f55\u5e76\u5c06\u521a\u521a\u590d\u5236\u7684\u76ee\u5f55\u6587\u4ef6\u653e\u5728\u91cc\u9762\u3002")),(0,r.kt)("img",{src:(0,i.Z)("img/sg6.png")}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u4e0b\u6765\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"strong"},"yarn")," \u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"strong"},"axios")," \u5305")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"# npm \u65b9\u5f0f\nnpm i axios@0.21.4\n\n# yarn \u65b9\u5f0f\nyarn add axios@0.21.4\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"axios")," \u7248\u672c\u8bf4\u660e"),(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," \u7248\u672c\u5fc5\u987b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"0.21.4")," \u7248\u672c\uff0c\u5982\u679c\u5b89\u88c5\u5176\u4ed6\u7248\u672c\u53ef\u80fd\u4f1a\u51fa\u73b0\u65e0\u6cd5\u7f16\u8bd1\u7684\u60c5\u51b5\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u7740\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"strong"},"TouchSocket")," \u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Vue/React")," \u5de5\u5177\u5e93 ",(0,r.kt)("inlineCode",{parentName:"strong"},"axios-utils.ts")," \u5e76\u62f7\u8d1d\u5230\u548c ",(0,r.kt)("inlineCode",{parentName:"strong"},"api-services")," \u540c\u7ea7\u76ee\u5f55\u4e0b\uff1a")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/blob/v4/clients/axios_vue_react/axios-utils.ts"},"axios-utils.ts \u4e0b\u8f7d\u5730\u5740")),(0,r.kt)("img",{src:(0,i.Z)("img/sg7.png")}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Vue3")," \u9879\u76ee\u4e0d\u80fd\u7f16\u8bd1\u95ee\u9898"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Vue3")," \u9879\u76ee\u4e2d\u65e0\u6cd5\u7f16\u8bd1\u901a\u8fc7\uff0c\u5219\u9700\u8981\u4fee\u6539\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.app.json")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.vite-config.json")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.vitest.json")," \u6587\u4ef6\u5e76\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers {1-3}",showLineNumbers:!0,"{1-3}":!0},'"compilerOptions": {\n    "importsNotUsedAsValues": "remove",\n    "preserveValueImports": false\n}\n')),(0,r.kt)("img",{src:(0,i.Z)("img/sg8.png")})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"5633-angular-\u914d\u7f6e"},"5.6.3.3 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Angular")," \u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"strong"},"Generate Client")," \u9876\u90e8\u83dc\u5355\u5e76\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"strong"},"typescript-angular")," \u8fdb\u884c\u4e0b\u8f7d\u3002")),(0,r.kt)("img",{src:(0,i.Z)("img/sg9.png")}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d\u6210\u529f\u4e4b\u540e\u62f7\u8d1d\u4e0b\u56fe\u9009\u62e9\u7684\u76ee\u5f55\u548c\u6587\u4ef6\uff1a")),(0,r.kt)("img",{src:(0,i.Z)("img/sg10.png")}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u7740\u6253\u5f00\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Angular")," \u9879\u76ee\uff0c\u5e76\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"src")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"strong"},"api-services")," \u76ee\u5f55\u5e76\u5c06\u521a\u521a\u590d\u5236\u7684\u76ee\u5f55\u6587\u4ef6\u653e\u5728\u91cc\u9762\u3002")),(0,r.kt)("img",{src:(0,i.Z)("img/sg11.png")}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u7740\u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"strong"},"TouchSocket")," \u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Angular")," \u5de5\u5177\u5e93 ",(0,r.kt)("inlineCode",{parentName:"strong"},"angular-utils.ts")," \u5e76\u62f7\u8d1d\u5230\u548c ",(0,r.kt)("inlineCode",{parentName:"strong"},"api-services")," \u540c\u7ea7\u76ee\u5f55\u4e0b\uff1a")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/blob/v4/clients/angular/angular-utils.ts"},"angular-utils.ts \u4e0b\u8f7d\u5730\u5740")),(0,r.kt)("img",{src:(0,i.Z)("img/sg12.png")}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Angular")," \u9879\u76ee\u4e0d\u80fd\u7f16\u8bd1\u95ee\u9898"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Angular")," \u9879\u76ee\u4e2d\u65e0\u6cd5\u7f16\u8bd1\u901a\u8fc7\uff0c\u5219\u9700\u8981\u4fee\u6539\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"api-services/encoder.ts")," \u6587\u4ef6\uff0c\u5e76\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"encodeKey")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"encodeValue")," \u524d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"override")," \u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'showLineNumbers {2,6} title="api-services/encoder.ts"',showLineNumbers:!0,"{2,6}":!0,title:'"api-services/encoder.ts"'},'export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {\n  override encodeKey(k: string): string {\n    k = super.encodeKey(k);\n    return k.replace(/\\+/gi, "%2B");\n  }\n  override encodeValue(v: string): string {\n    v = super.encodeValue(v);\n    return v.replace(/\\+/gi, "%2B");\n  }\n}\n')),(0,r.kt)("img",{src:(0,i.Z)("img/sg13.png")})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6700\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"strong"},"src/app/app.module.ts")," \u4e2d\u6ce8\u518c ",(0,r.kt)("inlineCode",{parentName:"strong"},"ServeModule"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'showLineNumbers {7,14} title="src/app/app.module.ts"',showLineNumbers:!0,"{7,14}":!0,title:'"src/app/app.module.ts"'},'import { NgModule } from "@angular/core";\nimport { BrowserModule } from "@angular/platform-browser";\n\nimport { AppRoutingModule } from "./app-routing.module";\nimport { AppComponent } from "./app.component";\n\nimport { ServeModule } from "src/angular-utils";\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [\n    BrowserModule,\n    AppRoutingModule,\n    ServeModule, // \u6ce8\u518c\u4ee3\u7406\u670d\u52a1\u6a21\u5757\n  ],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n')),(0,r.kt)("img",{src:(0,i.Z)("img/sg14.png")}),(0,r.kt)("h2",{id:"564-\u521d\u59cb\u914d\u7f6e"},"5.6.4 \u521d\u59cb\u914d\u7f6e"),(0,r.kt)("p",null,"\u5b8c\u6210\u4e0a\u9762\u6b65\u9aa4\u4e4b\u540e\u8fd8\u9700\u8981\u6700\u540e\u4e00\u6b65\uff0c\u90a3\u5c31\u4fee\u6539\u670d\u52a1\u7aef\uff08\u540e\u7aef\uff09\u63a5\u53e3\uff08API\uff09\u5730\u5740\u3002"),(0,r.kt)("h3",{id:"5641-vuereact-\u914d\u7f6e"},"5.6.4.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Vue/React")," \u914d\u7f6e"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Vue/React")," \u9879\u76ee\u4e2d\u7f16\u8f91 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"axios-utils.ts")," \u6587\u4ef6\uff0c\u5e76\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"serveConfig")," \u4fee\u6539\u4e3a\u5bf9\u5e94\u7684\u540e\u7aef\u5730\u5740\u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers {21-24}",showLineNumbers:!0,"{21-24}":!0},'/**\n * \u5f53\u524d\u7248\u672c\uff1av1.0.3\n * \u4f7f\u7528\u63cf\u8ff0\uff1ahttps://editor.swagger.io \u4ee3\u7801\u751f\u6210 typescript-axios \u8f85\u7ec4\u5de5\u5177\u5e93\n * \u4f9d\u8d56\u8bf4\u660e\uff1a\u9002\u914d axios \u7248\u672c\uff1av0.21.1\n * \u89c6\u9891\u6559\u7a0b\uff1ahttps://www.bilibili.com/video/BV1EW4y1C71D\n */\n\nimport globalAxios, { AxiosInstance } from "axios";\nimport { Configuration } from "./api-services";\nimport { BaseAPI, BASE_PATH } from "./api-services/base";\n\n// \u5982\u679c\u662f Angular \u9879\u76ee\uff0c\u5219\u53d6\u6d88\u4e0b\u9762\u6ce8\u91ca\u5373\u53ef\n// import { environment } from \'./environments/environment\';\n\n/**\n * \u63a5\u53e3\u670d\u52a1\u5668\u914d\u7f6e\n */\nexport const serveConfig = new Configuration({\n  // \u5982\u679c\u662f Angular \u9879\u76ee\uff0c\u5219\u53d6\u6d88\u4e0b\u9762\u6ce8\u91ca\uff0c\u5e76\u5220\u9664 process.env.NODE_ENV !== "production"\n  // basePath: !environment.production\n  basePath:\n    process.env.NODE_ENV !== "production"\n      ? "https://localhost:44342" // \u5f00\u53d1\u73af\u5883\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740\n      : "https://TouchSocket.icu", // \u751f\u4ea7\u73af\u5883\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740\n});\n\n// ......\n')),(0,r.kt)("img",{src:(0,i.Z)("img/sg15.png")}),(0,r.kt)("h3",{id:"5642-angular-\u914d\u7f6e"},"5.6.4.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Angular")," \u914d\u7f6e"),(0,r.kt)("p",null,"\u5982\u679c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Angular")," \u9879\u76ee\u5219\u7f16\u8f91 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u63d0\u4f9b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"angular-utils.ts")," \u6587\u4ef6\uff0c\u5e76\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"serveConfig")," \u4fee\u6539\u4e3a\u5bf9\u5e94\u7684\u540e\u7aef\u5730\u5740\u5373\u53ef\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers {25-27}",showLineNumbers:!0,"{25-27}":!0},'/**\n * \u5f53\u524d\u7248\u672c\uff1av1.0.3\n * \u4f7f\u7528\u63cf\u8ff0\uff1ahttps://editor.swagger.io \u4ee3\u7801\u751f\u6210 typescript-angular \u8f85\u7ec4\u5de5\u5177\u5e93\n */\n\nimport {\n  HttpClientModule,\n  HttpEvent,\n  HttpHandler,\n  HttpHeaders,\n  HttpInterceptor,\n  HttpRequest,\n  HttpResponse,\n  HTTP_INTERCEPTORS,\n} from "@angular/common/http";\nimport { Injectable, NgModule } from "@angular/core";\nimport { finalize, Observable, tap } from "rxjs";\nimport { ApiModule, Configuration } from "./api-services";\nimport { environment } from "./environments/environment";\n\n/**\n * \u63a5\u53e3\u670d\u52a1\u5668\u914d\u7f6e\n */\nexport const serveConfig = new Configuration({\n  basePath: !environment.production\n    ? "https://localhost:44316" // \u5f00\u53d1\u73af\u5883\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740\n    : "https://TouchSocket.icu", // \u751f\u4ea7\u73af\u5883\u670d\u52a1\u5668\u63a5\u53e3\u5730\u5740\n});\n\n// ......\n')),(0,r.kt)("img",{src:(0,i.Z)("img/sg16.png")}),(0,r.kt)("h2",{id:"565-\u57fa\u672c\u4f7f\u7528"},"5.6.5 \u57fa\u672c\u4f7f\u7528"),(0,r.kt)("h3",{id:"5651-vuereact-\u4e2d\u4f7f\u7528"},"5.6.5.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Vue/React")," \u4e2d\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Vue/React")," \u4e2d\u4f7f\u7528\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\uff0c\u53e6\u5916\u4e00\u79cd\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"async/await"),"\uff0c\u63a8\u8350\u4f7f\u7528\u540e\u8005\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers {1,3}",showLineNumbers:!0,"{1,3}":!0},'import { getAPI } from "../axios-utils"; // \u6ce8\u610f\u9879\u76ee\u7684\u8def\u5f84\n\ngetAPI(SystemAPI) // SystemAPI \u5bf9\u5e94\u7684\u662f Swagger \u5206\u7ec4\u6807\u7b7e\u540d\u79f0 + API\n  .apiGetXXXX()\n  .then((res) => {\n    var data = res.data.data!;\n  })\n  .catch((err) => {\n    console.log(err);\n  })\n  .finally(() => {\n    console.log("api request completed.");\n  });\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"async/await")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers {1,3}",showLineNumbers:!0,"{1,3}":!0},'import { getAPI, feature } from "../axios-utils"; // \u6ce8\u610f\u9879\u76ee\u7684\u8def\u5f84\n\nconst [err, res] = await feature(getAPI(SystemAPI).apiGetXXX());\n\nif (err) {\n  console.log(err);\n} else {\n  var data = res.data.data!;\n}\n\nconsole.log("api request completed.");\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"\u5173\u4e8e\u6587\u4ef6\u6d41\u4e0b\u8f7d")),(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u6587\u4ef6\u6d41\u4e0b\u8f7d\u53ef\u80fd\u5b58\u5728\u4e0b\u8f7d\u6587\u4ef6\u8fc7\u5927\u7684\u60c5\u51b5\uff0c\u8fd9\u65f6\u5019\u9700\u8981\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},'responseType: "blob"')," \u89e3\u51b3\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers {1}",showLineNumbers:!0,"{1}":!0},'getAPI(SystemAPI, { responseType: "blob" }).apiGetXXX();\n'))),(0,r.kt)("h3",{id:"5652-angular-\u4e2d\u4f7f\u7528"},"5.6.5.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Angular")," \u4e2d\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Angular")," \u9879\u76ee\u4e2d\uff0c\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165\u5bf9\u5e94\u7684\u670d\u52a1\u5373\u53ef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"showLineNumbers {2,12-13,16-28}",showLineNumbers:!0,"{2,12-13,16-28}":!0},'import { Component } from "@angular/core";\nimport { PersonService } from "src/api-services"; // \u6ce8\u610f\u9879\u76ee\u7684\u8def\u5f84\n\n@Component({\n  selector: "app-root",\n  templateUrl: "./app.component.html",\n  styleUrls: ["./app.component.css"],\n})\nexport class AppComponent {\n  title = "angulars";\n\n  // \u6ce8\u5165 PersonService\n  constructor(private personService: PersonService) {}\n\n  ngOnInit(): void {\n    // \u4f7f\u7528 personService\n    this.personService.apiPersonAllGet().subscribe({\n      next: (res) => {\n        // \u8bf7\u6c42\u6210\u529f\n        console.log(res);\n      },\n      error: (err) => {\n        // \u8bf7\u6c42\u5931\u8d25\n      },\n      complete: () => {\n        // \u8bf7\u6c42\u5b8c\u6210\n      },\n    });\n  }\n}\n')),(0,r.kt)("h2",{id:"566-\u91cd\u65b0\u751f\u6210\u4ee3\u7801"},"5.6.6 \u91cd\u65b0\u751f\u6210\u4ee3\u7801"),(0,r.kt)("p",null,"\u5982\u679c\u540e\u7aef\u63a5\u53e3\uff08API\uff09\u53d1\u751f\u6539\u53d8\uff0c\u53ea\u9700\u8981\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"api-services")," \u4e0b\u6240\u6709\u76ee\u5f55\u6587\u4ef6\u5e76\u91cd\u65b0\u751f\u6210\u590d\u5236\u8fdb\u53bb\u5373\u53ef\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u5173\u4e8e ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Angular")," \u9879\u76ee"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Angular")," \u9879\u76ee\uff0c\u53ef\u4ee5\u4fdd\u7559 ",(0,r.kt)("inlineCode",{parentName:"p"},"api-services/encoder.ts")," \u6587\u4ef6\u5e76\u5220\u9664\u5176\u4ed6\u76ee\u5f55\u6587\u4ef6\uff0c\u65b0\u751f\u6210\u7684\u76ee\u5f55\u6587\u4ef6\u65e0\u9700\u590d\u5236 ",(0,r.kt)("inlineCode",{parentName:"p"},"encoder.ts"),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u6bcf\u6b21\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"encoder.ts")," \u6587\u4ef6\u3002")),(0,r.kt)("h2",{id:"567-swagger-\u591a\u5206\u7ec4\u751f\u6210"},"5.6.7 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Swagger")," \u591a\u5206\u7ec4\u751f\u6210"),(0,r.kt)("p",null,"\u5728\u5f88\u591a\u5927\u578b\u7cfb\u7edf\u4e2d\uff0c\u4e3a\u4e86\u65b9\u4fbf\u5bf9\u63a5\u53e3\u8fdb\u884c\u5f52\u7c7b\uff0c\u5f80\u5f80\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Swagger")," \u591a\u5206\u7ec4\u529f\u80fd\uff0c\u8fd9\u6837\u4f1a\u4f7f\u7cfb\u7edf\u7684\u63a5\u53e3\u6563\u843d\u5728\u591a\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"swagger.json")," \u4e2d\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\uff0c\u9700\u8981\u5728\u540e\u7aef\u89c4\u8303\u5316\u6587\u6863\u4e2d\u542f\u7528\u591a\u5206\u7ec4\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers {2,3}",showLineNumbers:!0,"{2,3}":!0},'{\n  "SpecificationDocumentSettings": {\n    "EnableAllGroups": true\n  }\n}\n')),(0,r.kt)("p",null,"\u542f\u7528\u914d\u7f6e\u4e4b\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Swagger")," \u5bfc\u822a\u680f\u9876\u90e8\u4e0b\u62c9\u5206\u7ec4\u5c06\u51fa\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"All Groups")," \u9009\u9879\uff0c\u8fd9\u65f6\u5019\u4f7f\u7528\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"All Groups")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"swagger.json")," \u8fdb\u884c\u751f\u6210\u3002"),(0,r.kt)("h2",{id:"568-\u81ea\u5b9a\u4e49\u751f\u6210\u524d\u7aef\u65b9\u6cd5\u540d"},"5.6.8 \u81ea\u5b9a\u4e49\u751f\u6210\u524d\u7aef\u65b9\u6cd5\u540d"),(0,r.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket 4.1.7+")," \u7248\u672c\u4f7f\u7528\u3002")),(0,r.kt)("p",null,"\u901a\u8fc7\u6211\u4eec\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"swagger.json")," \u751f\u6210\u524d\u7aef\u4ee3\u7801\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Swagger")," \u4f1a\u81ea\u52a8\u6839\u636e\u8def\u7531\u5730\u5740\u751f\u6210\u8c03\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," \u540d\u79f0\uff0c\u4f46\u8fd9\u6837\u7684\u540d\u79f0\u5f80\u5f80\u4e0d\u6613\u8bfb\uff0c\u8fd9\u65f6\u5019\u53ef\u81ea\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"[OperationId]")," \u6765\u914d\u7f6e\u751f\u6210\u7684\u524d\u7aef\u540d\u79f0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {5}",showLineNumbers:!0,"{5}":!0},'using TouchSocket.SpecificationDocument;\n\npublic class PersonDto\n{\n  [OperationId("MyClientMethodName")]\n  public string TestMethod()\n  {\n    // ...\n  }\n}\n')),(0,r.kt)("h2",{id:"569-\u6846\u67b6\u5ba2\u6237\u7aef\u5de5\u5177\u5e93\u4ecb\u7ecd"},"5.6.9 \u6846\u67b6\u5ba2\u6237\u7aef\u5de5\u5177\u5e93\u4ecb\u7ecd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"axios-utils.ts")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"angular-utils.ts")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u4e13\u95e8\u9488\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u5f00\u53d1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WebAPI")," \u9879\u76ee\u7f16\u5199\u7684\u5ba2\u6237\u7aef\u4ee3\u7406\u5e93\uff0c\u5728\u8fd9\u4e2a\u4ee3\u7406\u5e93\u4e2d\u5df2\u7ecf\u5904\u7406\u4e86\u8de8\u57df\uff0c\u6388\u6743\uff0c\u81ea\u52a8\u5237\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," \u4ee5\u53ca\u89e3\u5bc6\u5ba2\u6237\u7aef ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT token")," \u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\u63d0\u4f9b\u4e86\u975e\u5e38\u65b9\u4fbf\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"feature")," \u65b9\u6cd5\uff0c\u53ef\u5c06\u5f02\u6b65\u65b9\u6cd5\u8fdb\u884c\u540c\u6b65\u5316\u5904\u7406\u3002"),(0,r.kt)("h2",{id:"5610-\u65e0\u6cd5\u8fde\u63a5\u5916\u7f51\u5185\u7f51\u60c5\u51b5\u79bb\u7ebf\u5305"},"5.6.10 \u65e0\u6cd5\u8fde\u63a5\u5916\u7f51/\u5185\u7f51\u60c5\u51b5/\u79bb\u7ebf\u5305"),(0,r.kt)("p",null,"\u5728\u4e00\u4e9b\u6bd4\u8f83\u6ce8\u91cd\u4ee3\u7801\u5b89\u5168\u7684\u7ec4\u7ec7\u6216\u516c\u53f8\u4e2d\uff0c\u53ef\u80fd\u4e0d\u80fd\u8fde\u63a5\u5916\u7f51\u8fdb\u884c\u751f\u6210\uff0c\u8fd9\u4e2a\u65f6\u5019\u53ea\u9700\u8981\u4e0b\u8f7d ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/swagger-api/swagger-editor"},"https://github.com/swagger-api/swagger-editor")," \u4ee3\u7801\u5728\u672c\u5730\u90e8\u7f72\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u5b98\u7f51\u4e5f\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Swagger-Editor.rar")," \u79bb\u7ebf\u5305\u4e0b\u8f7d\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/blob/v4/clients/Swagger-Editor.rar"},"https://gitee.com/rrqm_home/TouchSocket/blob/v4/clients/Swagger-Editor.rar")),(0,r.kt)("p",null,"\u4e0b\u8f7d\u79bb\u7ebf\u5305\u540e\u76f4\u63a5\u53cc\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," \u542f\u52a8\u5373\u53ef"),(0,r.kt)("img",{src:(0,i.Z)("img/sg17.png")}),(0,r.kt)("h2",{id:"5611-\u53cd\u9988\u4e0e\u5efa\u8bae"},"5.6.11 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed9 TouchSocket \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/issues/new?issue"},"Issue"),"\u3002")))}c.isMDXComponent=!0}}]);