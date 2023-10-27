"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[330],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,a(a({ref:e},s),{},{components:n})):r.createElement(k,a({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5435:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={id:"tcpintroduction",title:"Tcp\u5165\u95e8\u57fa\u7840"},a=void 0,l={unversionedId:"tcpintroduction",id:"version-1.3.9/tcpintroduction",title:"Tcp\u5165\u95e8\u57fa\u7840",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/versioned_docs/version-1.3.9/tcpintroduction.mdx",sourceDirName:".",slug:"/tcpintroduction",permalink:"/touchsocket/docs/1.3.9/tcpintroduction",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/versioned_docs/version-1.3.9/tcpintroduction.mdx",tags:[],version:"1.3.9",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1697553075,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{id:"tcpintroduction",title:"Tcp\u5165\u95e8\u57fa\u7840"},sidebar:"docs",previous:{title:"\u5176\u4ed6\u76f8\u5173\u529f\u80fd\u7c7b",permalink:"/touchsocket/docs/1.3.9/othercore"},next:{title:"\u521b\u5efaTcpService",permalink:"/touchsocket/docs/1.3.9/createtcpservice"}},c={},p=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u5efa\u7acb\u8fde\u63a5",id:"\u4e8c\u5efa\u7acb\u8fde\u63a5",level:2},{value:"\u4e09\u3001\u65ad\u5f00\u8fde\u63a5",id:"\u4e09\u65ad\u5f00\u8fde\u63a5",level:2},{value:"\u56db\u3001\u53d1\u9001",id:"\u56db\u53d1\u9001",level:2}],s={toc:p};function d(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,o.kt)("p",null,"\u4f20\u8f93\u63a7\u5236\u534f\u8bae\uff08TCP\uff0cTransmission Control Protocol\uff09\u662f\u4e00\u79cd\u9762\u5411\u8fde\u63a5\u7684\u3001\u53ef\u9760\u7684\u3001\u57fa\u4e8e\u5b57\u8282\u6d41\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"\u4f20\u8f93\u5c42"),"\u901a\u4fe1\u534f\u8bae\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7279\u70b9\uff1a")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u6d41\u7684\u65b9\u5f0f\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u9762\u5411\u8fde\u63a5\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u9760\u901a\u4fe1\u65b9\u5f0f\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u7f51\u7edc\u72b6\u51b5\u4e0d\u4f73\u7684\u65f6\u5019\u5c3d\u91cf\u964d\u4f4e\u7cfb\u7edf\u7531\u4e8e\u91cd\u4f20\u5e26\u6765\u7684\u5e26\u5bbd\u5f00\u9500\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u4fe1\u8fde\u63a5\u7ef4\u62a4\u662f\u9762\u5411\u901a\u4fe1\u7684\u4e24\u4e2a\u7aef\u70b9\u7684\uff0c\u800c\u4e0d\u8003\u8651\u4e2d\u95f4\u7f51\u6bb5\u548c\u8282\u70b9\u3002")),(0,o.kt)("h2",{id:"\u4e8c\u5efa\u7acb\u8fde\u63a5"},"\u4e8c\u3001\u5efa\u7acb\u8fde\u63a5"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"TCP\u4e09\u6b21\u63e1\u624b\u7684\u8fc7\u7a0b\u5982\u4e0b\uff1a")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u53d1\u9001SYN\uff08SEQ=x\uff09\u62a5\u6587\u7ed9\u670d\u52a1\u5668\u7aef\uff0c\u8fdb\u5165SYN_SEND\u72b6\u6001\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u7aef\u6536\u5230SYN\u62a5\u6587\uff0c\u56de\u5e94\u4e00\u4e2aSYN \uff08SEQ=y\uff09ACK\uff08ACK=x+1\uff09\u62a5\u6587\uff0c\u8fdb\u5165SYN_RECV\u72b6\u6001\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u6536\u5230\u670d\u52a1\u5668\u7aef\u7684SYN\u62a5\u6587\uff0c\u56de\u5e94\u4e00\u4e2aACK\uff08ACK=y+1\uff09\u62a5\u6587\uff0c\u8fdb\u5165Established\u72b6\u6001\u3002")),(0,o.kt)("p",null,"\u4e09\u6b21\u63e1\u624b\u5b8c\u6210\uff0cTCP\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u7aef\u6210\u529f\u5730\u5efa\u7acb\u8fde\u63a5\uff0c\u53ef\u4ee5\u5f00\u59cb\u4f20\u8f93\u6570\u636e\u4e86\u3002"),(0,o.kt)("img",{src:n(8221).Z,width:"500"}),(0,o.kt)("h2",{id:"\u4e09\u65ad\u5f00\u8fde\u63a5"},"\u4e09\u3001\u65ad\u5f00\u8fde\u63a5"),(0,o.kt)("p",null,"\u5efa\u7acb\u4e00\u4e2a\u8fde\u63a5\u9700\u8981\u4e09\u6b21\u63e1\u624b\uff0c\u800c\u7ec8\u6b62\u4e00\u4e2a\u8fde\u63a5\u8981\u7ecf\u8fc7\u56db\u6b21\u63e1\u624b\uff0c\u8fd9\u662f\u7531TCP\u7684\u534a\u5173\u95ed\uff08half-close\uff09\u9020\u6210\u7684\u3002\u5177\u4f53\u8fc7\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u67d0\u4e2a\u5e94\u7528\u8fdb\u7a0b\u9996\u5148\u8c03\u7528close\uff0c\u79f0\u8be5\u7aef\u6267\u884c\u201c\u4e3b\u52a8\u5173\u95ed\u201d\uff08active close\uff09\u3002\u8be5\u7aef\u7684TCP\u4e8e\u662f\u53d1\u9001\u4e00\u4e2aFIN\u5206\u8282\uff0c\u8868\u793a\u6570\u636e\u53d1\u9001\u5b8c\u6bd5\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u63a5\u6536\u5230\u8fd9\u4e2aFIN\u7684\u5bf9\u7aef\u6267\u884c \u201c\u88ab\u52a8\u5173\u95ed\u201d\uff08passive close\uff09\uff0c\u8fd9\u4e2aFIN\u7531TCP\u786e\u8ba4\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u63a5\u6536\u5230\u8fd9\u4e2a\u6587\u4ef6\u7ed3\u675f\u7b26\u7684\u5e94\u7528\u8fdb\u7a0b\u5c06\u8c03\u7528close\u5173\u95ed\u5b83\u7684\u5957\u63a5\u5b57\u3002\u8fd9\u5bfc\u81f4\u5b83\u7684TCP\u4e5f\u53d1\u9001\u4e00\u4e2aFIN\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u63a5\u6536\u8fd9\u4e2a\u6700\u7ec8FIN\u7684\u539f\u53d1\u9001\u7aefTCP\uff08\u5373\u6267\u884c\u4e3b\u52a8\u5173\u95ed\u7684\u90a3\u4e00\u7aef\uff09\u786e\u8ba4\u8fd9\u4e2aFIN\u3002")),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"FIN\u7684\u63a5\u6536\u4e5f\u4f5c\u4e3a\u4e00\u4e2a\u6587\u4ef6\u7ed3\u675f\u7b26\uff08end-of-file\uff09\u4f20\u9012\u7ed9\u63a5\u6536\u7aef\u5e94\u7528\u8fdb\u7a0b\uff0c\u653e\u5728\u5df2\u6392\u961f\u7b49\u5019\u8be5\u5e94\u7528\u8fdb\u7a0b\u63a5\u6536\u7684\u4efb\u4f55\u5176\u4ed6\u6570\u636e\u4e4b\u540e\uff0c\u56e0\u4e3a\uff0cFIN\u7684\u63a5\u6536\u610f\u5473\u7740\u63a5\u6536\u7aef\u5e94\u7528\u8fdb\u7a0b\u5728\u76f8\u5e94\u8fde\u63a5\u4e0a\u518d\u65e0\u989d\u5916\u6570\u636e\u53ef\u63a5\u6536\u3002")),(0,o.kt)("p",null,"\u65e2\u7136\u6bcf\u4e2a\u65b9\u5411\u90fd\u9700\u8981\u4e00\u4e2aFIN\u548c\u4e00\u4e2aACK\uff0c\u56e0\u6b64\u901a\u5e38\u9700\u89814\u4e2a\u5206\u8282\u3002"),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u201c\u901a\u5e38\u201d\u662f\u6307\uff0c\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6b65\u9aa41\u7684FIN\u968f\u6570\u636e\u4e00\u8d77\u53d1\u9001\uff0c\u53e6\u5916\uff0c\u6b65\u9aa42\u548c\u6b65\u9aa43\u53d1\u9001\u7684\u5206\u8282\u90fd\u51fa\u81ea\u6267\u884c\u88ab\u52a8\u5173\u95ed\u90a3\u4e00\u7aef\uff0c\u6709\u53ef\u80fd\u88ab\u5408\u5e76\u6210\u4e00\u4e2a\u5206\u8282\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u6b65\u9aa42\u4e0e\u6b65\u9aa43\u4e4b\u95f4\uff0c\u4ece\u6267\u884c\u88ab\u52a8\u5173\u95ed\u4e00\u7aef\u5230\u6267\u884c\u4e3b\u52a8\u5173\u95ed\u4e00\u7aef\u6d41\u52a8\u6570\u636e\u662f\u53ef\u80fd\u7684\uff0c\u8fd9\u79f0\u4e3a\u201c\u534a\u5173\u95ed\u201d\uff08half-close\uff09\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5f53\u4e00\u4e2aUnix\u8fdb\u7a0b\u65e0\u8bba\u81ea\u613f\u5730\uff08\u8c03\u7528exit\u6216\u4ecemain\u51fd\u6570\u8fd4\u56de\uff09\u8fd8\u662f\u975e\u81ea\u613f\u5730\uff08\u6536\u5230\u4e00\u4e2a\u7ec8\u6b62\u672c\u8fdb\u7a0b\u7684\u4fe1\u53f7\uff09\u7ec8\u6b62\u65f6\uff0c\u6240\u6709\u6253\u5f00\u7684\u63cf\u8ff0\u7b26\u90fd\u88ab\u5173\u95ed\uff0c\u8fd9\u4e5f\u5bfc\u81f4\u4ecd\u7136\u6253\u5f00\u7684\u4efb\u4f55TCP\u8fde\u63a5\u4e0a\u4e5f\u53d1\u51fa\u4e00\u4e2aFIN\u3002")),(0,o.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u662f\u5ba2\u6237\u8fd8\u662f\u670d\u52a1\u5668\uff0c\u4efb\u4f55\u4e00\u7aef\u90fd\u53ef\u4ee5\u6267\u884c\u4e3b\u52a8\u5173\u95ed\u3002\u901a\u5e38\u60c5\u51b5\u662f\uff0c\u5ba2\u6237\u6267\u884c\u4e3b\u52a8\u5173\u95ed\u3002")),(0,o.kt)("img",{src:n(545).Z,width:"500"}),(0,o.kt)("h2",{id:"\u56db\u53d1\u9001"},"\u56db\u3001\u53d1\u9001"),(0,o.kt)("p",null,"\u5f53\u8c03\u7528Send\u51fd\u6570\u65f6\uff0c\u5b9e\u9645\u4e0a\u5728Socket\u5185\u90e8\u4f1a\u505a\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u68c0\u67e5Send\u6570\u636e\u7684\u6709\u6548\u6027\u3002\u4f8b\u5982\u662f\u5426\u4e3anull\uff0c\u957f\u5ea6\u662f\u5426\u4e3a0\u7b49\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u53d1\u9001\u7f13\u5b58\u533a\u662f\u5426\u6709\u7a7a\u95f2\uff0c\u5982\u679c\u6709\uff0c\u5c06\u9700\u8981\u53d1\u9001\u7684\u6570\u636e",(0,o.kt)("inlineCode",{parentName:"li"},"\u590d\u5236"),"\u5230\u7f13\u5b58\u533a\uff0c\u5e76\u4e14\u8fd4\u56de\u5df2\u590d\u5236\u7684\u5b57\u8282\u6570\u3002\u5982\u679c\u6ca1\u6709\u7a7a\u95f2\uff0c\u5219\u4f1a\u4e00\u76f4\u7b49\u5f85\u3002")),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u4e24\u4e2a\u6b65\u9aa4\uff0c\u6211\u4eec\u4f1a\u660e\u767d\uff0cSend\u51fd\u6570\u7684\u8fd4\u56de\uff0c\u4ec5\u4ec5\u662f\u4fdd\u8bc1\u6570\u636e\u88ab\u590d\u5236\u5230\u4e86\u53d1\u9001\u7f13\u5b58\u533a\uff0c\u800c\u4e0d\u662f\u5df2\u88ab\u63a5\u6536\u65b9\u6536\u5230\u3002"),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u7531\u4e8eTcp\u534f\u8bae\u7684\u53ef\u9760\u6027\u8bbe\u8ba1\uff0c\u5982\u679c\u6210\u529f\u5c06\u6570\u636e\u590d\u5236\u5230\u7f13\u5b58\u533a\uff0c\u4e14\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"\u6ca1\u6709\u65ad\u5f00"),"\u7684\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u5c31\u4e00\u5b9a\u4f1a\u88ab\u6210\u529f\u53d1\u9001\u3002")),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u8c03\u7528\u5b8cSend\u540e\uff0c\u8fd4\u56de\u7684\u5b57\u8282\u6570\u53ef\u80fd\u4f1a\u5c0f\u4e8e\u9700\u8981\u53d1\u9001\u7684\u5b57\u8282\u6570\uff0c\u6240\u4ee5\u4e00\u822c\u9700\u8981\u5faa\u73af\u53d1\u9001\u3002\u4f46\u662f\u5728TouchSocket\u4e2d\uff0c\u5df2\u7ecf\u505a\u4e86\u5c01\u88c5\uff0c\u6240\u6709\u8c03\u7528Send\u7684\u5b57\u8282\uff0c\u90fd\u662f\u5b8c\u6574\u6570\u636e\u53d1\u9001\u3002")))}d.isMDXComponent=!0},8221:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/tcpintroduction-1-6c44f6ba3c610fb21ff8bf22695be71d.gif"},545:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/tcpintroduction-2-6e5c8e256f20ef5d40baa6ed7919bc12.gif"}}]);