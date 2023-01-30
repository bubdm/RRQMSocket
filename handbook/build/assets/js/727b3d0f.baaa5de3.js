"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[6440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,s(s({ref:t},l),{},{components:r})):n.createElement(g,s({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"appmessenger",sidebar_position:6,title:"\u5e94\u7528\u4fe1\u4f7f",sidebar_label:"4.6 \u5e94\u7528\u4fe1\u4f7f"},s=void 0,p={unversionedId:"04\u3001Core/appmessenger",id:"04\u3001Core/appmessenger",title:"\u5e94\u7528\u4fe1\u4f7f",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/04\u3001Core/4.6 \u5e94\u7528\u4fe1\u4f7f.mdx",sourceDirName:"04\u3001Core",slug:"/04\u3001Core/appmessenger",permalink:"/touchsocket/docs/04\u3001Core/appmessenger",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/04\u3001Core/4.6 \u5e94\u7528\u4fe1\u4f7f.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673587377,formattedLastUpdatedAt:"Jan 13, 2023",sidebarPosition:6,frontMatter:{id:"appmessenger",sidebar_position:6,title:"\u5e94\u7528\u4fe1\u4f7f",sidebar_label:"4.6 \u5e94\u7528\u4fe1\u4f7f"},sidebar:"tutorialSidebar",previous:{title:"4.5 \u65e5\u5fd7\u8bb0\u5f55\u5668",permalink:"/touchsocket/docs/04\u3001Core/ilog"},next:{title:"4.7 \u9ad8\u6027\u80fd\u5e8f\u5217\u5316",permalink:"/touchsocket/docs/04\u3001Core/fastbinaryformatter"}},i={},c=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u4f7f\u7528",id:"\u4e8c\u4f7f\u7528",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"\u5e94\u7528\u4fe1\u4f7f\u662f\u5728\u8fdb\u7a0b\u5185\u7684\uff0c\u884c\u4f7f\u6ce8\u518c\u548c\u89e6\u53d1\u529f\u80fd\u7684\u7ec4\u4ef6\u3002\u53ef",(0,a.kt)("strong",{parentName:"p"},"\u4ee3\u66ff\u4e8b\u4ef6"),"\uff0c\u53ef",(0,a.kt)("strong",{parentName:"p"},"\u8de8\u8d8a\u7a0b\u5e8f\u96c6"),"\uff0c\u53ef",(0,a.kt)("strong",{parentName:"p"},"\u4f9d\u8d56\u5012\u7f6e"),"\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u4f7f\u7528"},"\u4e8c\u3001\u4f7f\u7528"),(0,a.kt)("p",null,"\u3010\u58f0\u660e\u4e3b\u4f53\u3011\n\u5b9e\u73b0IMessage\u63a5\u53e3\uff0c\u7136\u540e\u589e\u52a0AppMessage\u6807\u8bb0\u7684\u516c\u5171\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MessageObject : IMessage\n{\n\n    [AppMessage]\n    public int Add(int a, int b)\n    {\n        return a + b;\n    }\n\n    [AppMessage]\n    public int Sub(int a, int b)\n    {\n        return a - b;\n    }\n}\n\n")),(0,a.kt)("p",null,"\u3010\u6ce8\u518c\u3011\n\u4e0b\u5217\u6f14\u793a\u65f6\uff0c\u662f\u65b0\u5b9e\u4f8b\u5316\u7684AppMessenger\uff0c\u5b9e\u9645\u4e0a\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528AppMessenger.Default\u9ed8\u8ba4\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"AppMessenger appMessenger = new AppMessenger();\nappMessenger.Register<MessageObject>();\n")),(0,a.kt)("p",null,"\u3010\u89e6\u53d1\u3011\n\u89e6\u53d1\u65f6\uff0c\u6cdb\u578b\u7c7b\u578b\uff0c\u5373\u65f6\u8fd4\u56de\u503c\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'int add = appMessenger.Send<int>("Add", 20, 10);\nAssert.Equal(30,add);\n\nint sub = appMessenger.Send<int>("Sub", 20, 10);\nAssert.Equal(10, sub);\n')))}u.isMDXComponent=!0}}]);