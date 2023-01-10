"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[5630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"json",title:"10. JSON \u9759\u6001\u7c7b",sidebar_label:"10. JSON \u9759\u6001\u7c7b"},l=void 0,i={unversionedId:"global/json",id:"global/json",title:"10. JSON \u9759\u6001\u7c7b",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 TouchSocket 1.16.0 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/global/json.mdx",sourceDirName:"global",slug:"/global/json",permalink:"/touchsocket/docs/global/json",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/v4/handbook/docs/global/json.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"json",title:"10. JSON \u9759\u6001\u7c7b",sidebar_label:"10. JSON \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"9. MessageCenter \u9759\u6001\u7c7b",permalink:"/touchsocket/docs/global/messagecenter"},next:{title:"11. Scoped \u9759\u6001\u7c7b",permalink:"/touchsocket/docs/global/scoped"}},s={},c=[{value:"10.1 \u83b7\u53d6\u5e8f\u5217\u5316\u63d0\u4f9b\u5668",id:"101-\u83b7\u53d6\u5e8f\u5217\u5316\u63d0\u4f9b\u5668",level:2},{value:"10.2 \u5e8f\u5217\u5316",id:"102-\u5e8f\u5217\u5316",level:2},{value:"10.3 \u53cd\u5e8f\u5217\u5316",id:"103-\u53cd\u5e8f\u5217\u5316",level:2},{value:"10.4 \u83b7\u53d6\u5168\u5c40\u914d\u7f6e",id:"104-\u83b7\u53d6\u5168\u5c40\u914d\u7f6e",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,o.kt)("inlineCode",{parentName:"p"},"TouchSocket 1.16.0 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,o.kt)("h2",{id:"101-\u83b7\u53d6\u5e8f\u5217\u5316\u63d0\u4f9b\u5668"},"10.1 \u83b7\u53d6\u5e8f\u5217\u5316\u63d0\u4f9b\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var serializer = JSON.GetJsonSerializer();\n")),(0,o.kt)("h2",{id:"102-\u5e8f\u5217\u5316"},"10.2 \u5e8f\u5217\u5316"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var str = JSON.Serialize(obj, [options]);\n")),(0,o.kt)("h2",{id:"103-\u53cd\u5e8f\u5217\u5316"},"10.3 \u53cd\u5e8f\u5217\u5316"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var obj = JSON.Deserialize<T>(str, [options]);\n")),(0,o.kt)("h2",{id:"104-\u83b7\u53d6\u5168\u5c40\u914d\u7f6e"},"10.4 \u83b7\u53d6\u5168\u5c40\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var options = JSON.GetSerializerOptions<TOption>();\n")))}u.isMDXComponent=!0}}]);