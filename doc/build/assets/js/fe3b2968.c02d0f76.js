"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[3723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={id:"audit",title:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",sidebar_label:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7 (Audit)"},a=void 0,c={unversionedId:"audit",id:"audit",title:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",description:"TouchSocket \u63d0\u4f9b\u4e86\u975e\u5e38\u5f3a\u5927\u7684 LoggingMonitor \u5ba1\u8ba1\u65e5\u5fd7\u529f\u80fd\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\uff1aLoggingMonitor \u6587\u6863",source:"@site/docs/audit.mdx",sourceDirName:".",slug:"/audit",permalink:"/touchsocket/docs/audit",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/v4/handbook/docs/audit.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"audit",title:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",sidebar_label:"5.4 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7 (Audit)"},sidebar:"docs",previous:{title:"5.3 \u7b5b\u9009\u5668/\u62e6\u622a\u5668/\u8fc7\u6ee4\u5668/AOP",permalink:"/touchsocket/docs/filter"},next:{title:"5.5 \u4e2d\u95f4\u4ef6 (Middleware)",permalink:"/touchsocket/docs/middleware"}},s={},l=[{value:"5.4.1 \u5ba1\u8ba1\u65e5\u5fd7",id:"541-\u5ba1\u8ba1\u65e5\u5fd7",level:2},{value:"5.4.2 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",id:"542-\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7",level:2},{value:"5.4.3 <code>LoggingMonitor</code> \u5ba1\u8ba1\u65e5\u5fd7",id:"543-loggingmonitor-\u5ba1\u8ba1\u65e5\u5fd7",level:2},{value:"5.4.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"544-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u63d0\u4f9b\u4e86\u975e\u5e38\u5f3a\u5927\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggingMonitor")," \u5ba1\u8ba1\u65e5\u5fd7\u529f\u80fd\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\uff1a",(0,r.kt)("a",{parentName:"p",href:"/touchsocket/docs/logging#186-loggingmonitor-%E7%9B%91%E5%90%AC%E6%97%A5%E5%BF%97"},"LoggingMonitor \u6587\u6863"))),(0,r.kt)("h2",{id:"541-\u5ba1\u8ba1\u65e5\u5fd7"},"5.4.1 \u5ba1\u8ba1\u65e5\u5fd7"),(0,r.kt)("p",null,"\u5728\u4e00\u4e2a\u4f01\u4e1a\u5e94\u7528\u7cfb\u7edf\u4e2d\uff0c\u7528\u6237\u5bf9\u7cfb\u7edf\u6240\u6709\u7684\u64cd\u4f5c\u5305\u62ec\u8bf7\u6c42\u3001\u6570\u636e\u5e93\u64cd\u4f5c\u7b49\u7b49\u90fd\u5e94\u8be5\u8bb0\u5f55\u8d77\u6765\uff0c\u90a3\u4e48\u8fd9\u4e9b\u65e5\u5fd7\u6211\u4eec\u79f0\u4e3a\u64cd\u4f5c\u65e5\u5fd7\uff0c\u4e5f\u53ef\u4ee5\u8bf4\u5ba1\u8ba1\u65e5\u5fd7\u3002"),(0,r.kt)("admonition",{title:"\u5173\u4e8e\u6570\u636e\u5e93\u64cd\u4f5c\u5ba1\u8ba1\u65e5\u5fd7",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u9700\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," \u64cd\u4f5c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u64cd\u4f5c")," \u7684\u5ba1\u8ba1\u65e5\u5fd7\u53ef\u67e5\u9605 \u3010",(0,r.kt)("a",{parentName:"p",href:"/touchsocket/docs/dbcontext-audit"},"9.22 \u5ba1\u8ba1\u65e5\u5fd7\u7ae0\u8282"),"\u3011")),(0,r.kt)("h2",{id:"542-\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7"},"5.4.2 \u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7"),(0,r.kt)("admonition",{title:"\u5b9e\u73b0\u539f\u7406",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u8fd9\u91cc\uff0c\u7ed3\u5408 \u3010",(0,r.kt)("a",{parentName:"p",href:"/touchsocket/docs/filter"},"5.3 \u7b5b\u9009\u5668"),"\u3011 \u5b9e\u73b0\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7\u529f\u80fd\u3002")),(0,r.kt)("p",null,"\u8bf7\u6c42\u5ba1\u8ba1\u65e5\u5fd7\u901a\u5e38\u6307\u7684\u662f\u8bb0\u5f55\u8bf7\u6c42\u5730\u5740\uff0c\u6765\u6e90\u5730\u5740\uff0c\u64cd\u4f5c\u4eba\uff0c\u4f20\u9012\u53c2\u6570\u7b49\u3002\u8fd9\u4e2a\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"IAsyncActionFilter")," \u7b5b\u9009\u5668\u5b9e\u73b0\uff0c\u5982\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestAuditFilter")," \u5e76\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"IAsyncActionFilter"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {9,45}",showLineNumbers:!0,"":!0,"{9,45}":!0},'using Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc.Filters;\nusing System;\nusing System.Security.Claims;\nusing System.Threading.Tasks;\n\nnamespace TouchSocket.Web.Core\n{\n    public class RequestAuditFilter : IAsyncActionFilter\n    {\n        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)\n        {\n            //============== \u8fd9\u91cc\u662f\u6267\u884c\u65b9\u6cd5\u4e4b\u524d\u83b7\u53d6\u6570\u636e ====================\n\n            // \u83b7\u53d6\u63a7\u5236\u5668\u3001\u8def\u7531\u4fe1\u606f\n            var actionDescriptor = context.ActionDescriptor as ControllerActionDescriptor;\n\n            // \u83b7\u53d6\u8bf7\u6c42\u7684\u65b9\u6cd5\n            var method = actionDescriptor.MethodInfo;\n\n            // \u83b7\u53d6 HttpContext \u548c HttpRequest \u5bf9\u8c61\n            var httpContext = context.HttpContext;\n            var httpRequest = httpContext.Request;\n\n            // \u83b7\u53d6\u5ba2\u6237\u7aef Ipv4 \u5730\u5740\n            var remoteIPv4 = httpContext.GetRemoteIpAddressToIPv4();\n\n            // \u83b7\u53d6\u8bf7\u6c42\u7684 Url \u5730\u5740\n            var requestUrl = httpRequest.GetRequestUrlAddress();\n\n            // \u83b7\u53d6\u6765\u6e90 Url \u5730\u5740\n            var refererUrl = httpRequest.GetRefererUrlAddress();\n\n            // \u83b7\u53d6\u8bf7\u6c42\u53c2\u6570\uff08\u5199\u5165\u65e5\u5fd7\uff0c\u9700\u5e8f\u5217\u5316\u6210\u5b57\u7b26\u4e32\u540e\u5b58\u50a8\uff09\n            var parameters = context.ActionArguments;\n\n            // \u83b7\u53d6\u64cd\u4f5c\u4eba\uff08\u5fc5\u987b\u6388\u6743\u8bbf\u95ee\u624d\u6709\u503c\uff09"userId" \u4e3a\u4f60\u5b58\u50a8\u7684 claims type\uff0cjwt \u6388\u6743\u5bf9\u5e94\u7684\u662f payload \u4e2d\u5b58\u50a8\u7684\u952e\u540d\n            var userId = httpContext.User?.FindFirstValue("userId");\n\n            // \u8bf7\u6c42\u65f6\u95f4\n            var requestedTime = DateTimeOffset.Now;\n\n\n            //============== \u8fd9\u91cc\u662f\u6267\u884c\u65b9\u6cd5\u4e4b\u540e\u83b7\u53d6\u6570\u636e ====================\n            var actionContext = await next();\n\n            // \u83b7\u53d6\u8fd4\u56de\u7684\u7ed3\u679c\n            var returnResult = actionContext.Result;\n\n            // \u5224\u65ad\u662f\u5426\u8bf7\u6c42\u6210\u529f\uff0c\u6ca1\u6709\u5f02\u5e38\u5c31\u662f\u8bf7\u6c42\u6210\u529f\n            var isRequestSucceed = actionContext.Exception == null;\n\n            // \u83b7\u53d6\u8c03\u7528\u5806\u6808\u4fe1\u606f\uff0c\u63d0\u4f9b\u66f4\u52a0\u7b80\u5355\u660e\u4e86\u7684\u8c03\u7528\u548c\u5f02\u5e38\u5806\u6808\n            var stackTrace = EnhancedStackTrace.Current();\n\n            // \u8fd9\u91cc\u5199\u5165\u65e5\u5fd7\uff0c\u6216\u5b58\u50a8\u5230\u6570\u636e\u5e93\u4e2d\uff01\uff01\uff01~~~~~~~~~~~~~~~~~~~~\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6ce8\u518c ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestAuditFilter")," \u7b5b\u9009\u5668")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddMvcFilter<RequestAuditFilter>();\n")),(0,r.kt)("h2",{id:"543-loggingmonitor-\u5ba1\u8ba1\u65e5\u5fd7"},"5.4.3 ",(0,r.kt)("inlineCode",{parentName:"h2"},"LoggingMonitor")," \u5ba1\u8ba1\u65e5\u5fd7"),(0,r.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u63d0\u4f9b\u4e86\u975e\u5e38\u5f3a\u5927\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggingMonitor")," \u5ba1\u8ba1\u65e5\u5fd7\u529f\u80fd\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\uff1a",(0,r.kt)("a",{parentName:"p",href:"/touchsocket/docs/logging#186-loggingmonitor-%E7%9B%91%E5%90%AC%E6%97%A5%E5%BF%97"},"LoggingMonitor \u6587\u6863"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501  Logging Monitor \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2523 TouchSocket.Application.TestLoggerServices.GetPerson (TouchSocket.Application)\n\u2523\n\u2523 \u63a7\u5236\u5668\u540d\u79f0\uff1a              TestLoggerServices\n\u2523 \u64cd\u4f5c\u540d\u79f0\uff1a                GetPerson\n\u2523 \u8def\u7531\u4fe1\u606f\uff1a                [area]: ; [controller]: test-logger; [action]: person\n\u2523 \u8bf7\u6c42\u65b9\u5f0f\uff1a                POST\n\u2523 \u8bf7\u6c42\u5730\u5740\uff1a                https://localhost:44316/api/test-logger/person/11\n\u2523 \u6765\u6e90\u5730\u5740\uff1a                https://localhost:44316/api/index.html\n\u2523 \u6d4f\u89c8\u5668\u6807\u8bc6\uff1a              Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36 Edg/103.0.1264.62\n\u2523 \u5ba2\u6237\u7aef IP \u5730\u5740\uff1a          0.0.0.1\n\u2523 \u670d\u52a1\u7aef IP \u5730\u5740\uff1a          0.0.0.1\n\u2523 \u670d\u52a1\u7aef\u8fd0\u884c\u73af\u5883\uff1a          Development\n\u2523 \u6267\u884c\u8017\u65f6\uff1a                31ms\n\u2523 \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501  \u6388\u6743\u4fe1\u606f \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2523 JWT Token\uff1a               Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjEsIkFjY291bnQiOiJhZG1pbiIsImlhdCI6MTY1ODcxNjc5NywibmJmIjoxNjU4NzE2Nzk3LCJleHAiOjE2NTg3MTc5OTcsImlzcyI6ImRvdG5ldGNoaW5hIiwiYXVkIjoicG93ZXJieSBGdXJpb24ifQ.VYZkwwqCwlUy3aJjuL-og62I0rkxNQ96kSjEm3VgXtg\n\u2523\n\u2523 UserId (integer)\uff1a        1\n\u2523 Account (string)\uff1a        admin\n\u2523 iat (integer)\uff1a           1658716797\n\u2523 nbf (integer)\uff1a           1658716797\n\u2523 exp (integer)\uff1a           1658717997\n\u2523 iss (string)\uff1a            dotnetchina\n\u2523 aud (string)\uff1a            powerby TouchSocket\n\u2523 \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501  \u53c2\u6570\u5217\u8868 \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2523 Content-Type\uff1a\n\u2523\n\u2523 id (Int32)\uff1a              11\n\u2523 \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501  \u8fd4\u56de\u4fe1\u606f \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2523 \u7c7b\u578b\uff1a                    TouchSocket.Application.Persons.PersonDto\n\u2523 \u8fd4\u56de\u503c\uff1a                  {"Id":11,"Name":null,"Age":0,"Address":null,"PhoneNumber":null,"QQ":null,"CreatedTime":"0001-01-01T00:00:00+00:00","Childrens":null,"Posts":null}\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501  Logging Monitor \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n')),(0,r.kt)("h2",{id:"544-\u53cd\u9988\u4e0e\u5efa\u8bae"},"5.4.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed9 TouchSocket \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/issues/new?issue"},"Issue"),"\u3002")))}u.isMDXComponent=!0}}]);