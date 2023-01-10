"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[3009],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,y=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return t?a.createElement(y,i(i({ref:n},m),{},{components:t})):a.createElement(y,i({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},606:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={id:"clayobj",title:"29. \u7c98\u571f\u5bf9\u8c61",sidebar_label:"29. \u7c98\u571f\u5bf9\u8c61"},i=void 0,l={unversionedId:"clayobj",id:"clayobj",title:"29. \u7c98\u571f\u5bf9\u8c61",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 TouchSocket 2.1.12 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/clayobj.mdx",sourceDirName:".",slug:"/clayobj",permalink:"/touchsocket/docs/clayobj",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/v4/handbook/docs/clayobj.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"clayobj",title:"29. \u7c98\u571f\u5bf9\u8c61",sidebar_label:"29. \u7c98\u571f\u5bf9\u8c61"},sidebar:"docs",previous:{title:"28. \u6a21\u5757\u5316\u5f00\u53d1",permalink:"/touchsocket/docs/module-dev"},next:{title:"30. \u8131\u654f\u5904\u7406",permalink:"/touchsocket/docs/sensitive-detection"}},c={},s=[{value:"29.1 \u5173\u4e8e\u7c98\u571f\u5bf9\u8c61",id:"291-\u5173\u4e8e\u7c98\u571f\u5bf9\u8c61",level:2},{value:"29.1.1 \u4f7f\u7528\u573a\u666f",id:"2911-\u4f7f\u7528\u573a\u666f",level:3},{value:"29.1.2 \u5173\u4e8e\u6027\u80fd",id:"2912-\u5173\u4e8e\u6027\u80fd",level:3},{value:"29.2 <code>Clay</code> \u5bf9\u8c61",id:"292-clay-\u5bf9\u8c61",level:2},{value:"29.3 \u5982\u4f55\u4f7f\u7528",id:"293-\u5982\u4f55\u4f7f\u7528",level:2},{value:"29.3.1 \u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61",id:"2931-\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61",level:3},{value:"29.3.2 \u8bfb\u53d6/\u83b7\u53d6\u5c5e\u6027",id:"2932-\u8bfb\u53d6\u83b7\u53d6\u5c5e\u6027",level:3},{value:"29.3.3 \u65b0\u589e\u5c5e\u6027",id:"2933-\u65b0\u589e\u5c5e\u6027",level:3},{value:"29.3.4 \u66f4\u65b0\u5c5e\u6027\u503c",id:"2934-\u66f4\u65b0\u5c5e\u6027\u503c",level:3},{value:"29.3.5 \u5220\u9664\u5c5e\u6027",id:"2935-\u5220\u9664\u5c5e\u6027",level:3},{value:"29.3.6 \u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728",id:"2936-\u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728",level:3},{value:"29.3.7 \u904d\u5386\u5bf9\u8c61",id:"2937-\u904d\u5386\u5bf9\u8c61",level:3},{value:"29.3.8 \u8f6c\u6362\u6210\u5177\u4f53\u5bf9\u8c61",id:"2938-\u8f6c\u6362\u6210\u5177\u4f53\u5bf9\u8c61",level:3},{value:"29.3.9 \u56fa\u5316\u7c98\u571f",id:"2939-\u56fa\u5316\u7c98\u571f",level:3},{value:"29.3.10 \u8f93\u51fa <code>JSON</code>",id:"29310-\u8f93\u51fa-json",level:3},{value:"29.3.11 \u8f93\u51fa <code>XML</code> \u5bf9\u8c61",id:"29311-\u8f93\u51fa-xml-\u5bf9\u8c61",level:3},{value:"29.3.12 \u5173\u952e\u5b57\u5904\u7406",id:"29312-\u5173\u952e\u5b57\u5904\u7406",level:3},{value:"29.3.13 \u8f6c\u6362\u6210\u5b57\u5178\u7c7b\u578b",id:"29313-\u8f6c\u6362\u6210\u5b57\u5178\u7c7b\u578b",level:3},{value:"29.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"294-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],m={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket 2.1.12 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"291-\u5173\u4e8e\u7c98\u571f\u5bf9\u8c61"},"29.1 \u5173\u4e8e\u7c98\u571f\u5bf9\u8c61"),(0,r.kt)("p",null,"\u7c98\u571f\u5bf9\u8c61\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u81ea\u521b\u7684\u4e00\u79cd\u6982\u5ff5\uff0c\u662f\u4e00\u79cd\u53ef\u4ee5\u6a21\u62df\u5f31\u8bed\u8a00\u7279\u6027\u7684\u5bf9\u8c61\uff0c\u7c7b\u4f3c ",(0,r.kt)("inlineCode",{parentName:"p"},"Javascript")," \u4e00\u6837\u64cd\u4f5c\u5bf9\u8c61\u3002\u53ea\u9700\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Clay")," \u7c7b\u521d\u59cb\u5316\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u8d77\u540d\u4e3a \u201c\u7c98\u571f\u201d \u5462\uff1f\u56e0\u4e3a\u8fd9\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u81ea\u7531\u7684\u6dfb\u52a0\u5c5e\u6027\uff0c\u79fb\u9664\u5c5e\u6027\uff0c\u53c8\u53ef\u4ee5\u56fa\u5316\u6210\u4efb\u4f55\u5bf9\u8c61\uff0c\u5177\u6709\u53ef\u62d3\u5c55\u3001\u53ef\u5851\u9020\u7684\u7279\u70b9\u3002")),(0,r.kt)("h3",{id:"2911-\u4f7f\u7528\u573a\u666f"},"29.1.1 \u4f7f\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u7c98\u571f\u5bf9\u8c61\u5e38\u7528\u4e8e\u9700\u8981\u52a8\u6001\u6784\u5efa\u5bf9\u8c61\u7684\u5730\u65b9\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"CMS")," \u7cfb\u7edf\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewModel"),"\uff0c\u6216\u8005\u8fd0\u884c\u65f6\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\uff0c\u6216\u8005\u8bf7\u6c42\u7b2c\u4e09\u65b9 ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," \u60c5\u51b5\u3002"),(0,r.kt)("h3",{id:"2912-\u5173\u4e8e\u6027\u80fd"},"29.1.2 \u5173\u4e8e\u6027\u80fd"),(0,r.kt)("p",null,"\u7c98\u571f\u6027\u80fd\u5b9e\u9645\u4e0a\u5e76\u4e0d\u9ad8\u6548\uff0c\u4f46\u662f\u6027\u80fd\u4e5f\u5e76\u4e0d\u4f4e\u4e0b\uff0c\u53ea\u4e0d\u8fc7\u7565\u8f93\u4e8e\u5f3a\u7c7b\u578b\u8c03\u7528\u3002\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u53ef\u4ee5\u770b\u4ee5\u4e0a\u7684\u3010\u4f7f\u7528\u573a\u666f\u3011\u3002"),(0,r.kt)("h2",{id:"292-clay-\u5bf9\u8c61"},"29.2 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Clay")," \u5bf9\u8c61"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Clay")," \u5bf9\u8c61\u662f\u7ee7\u627f\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"DynamicObject")," \u7684\u4e00\u4e2a\u7279\u6b8a\u5bf9\u8c61\uff0c\u63d0\u4f9b\u4e86\u50cf\u5f31\u8bed\u8a00\u4e00\u6837\u64cd\u4f5c\u5bf9\u8c61\u7684\u65b9\u6cd5\u53ca\u7d22\u5f15\u3002"),(0,r.kt)("h2",{id:"293-\u5982\u4f55\u4f7f\u7528"},"29.3 \u5982\u4f55\u4f7f\u7528"),(0,r.kt)("h3",{id:"2931-\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61"},"29.3.1 \u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u7c98\u571f\u5bf9\u8c61\ndynamic clay = new Clay();\n\n// \u4ece\u73b0\u6709\u7684\u5bf9\u8c61\u521b\u5efa\ndynamic clay2 = Clay.Object(new {});\n\n// \u4ece json \u5b57\u7b26\u4e32\u521b\u5efa\uff0c\u53ef\u7528\u4e8e\u7b2c\u4e09\u65b9 API \u5bf9\u63a5\uff0c\u975e\u5e38\u6709\u7528\ndynamic clay3 = Clay.Parse(@"{""foo"":""json"", ""bar"":100, ""nest"":{ ""foobar"":true } }");\n')),(0,r.kt)("h3",{id:"2932-\u8bfb\u53d6\u83b7\u53d6\u5c5e\u6027"},"29.3.2 \u8bfb\u53d6/\u83b7\u53d6\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    }\n});\n\nvar r1 = clay.Foo; // "json" - string\u7c7b\u578b\nvar r2 = clay.Bar; // 100 - double\u7c7b\u578b\nvar r3 = clay.Nest.Foobar; // true - bool\u7c7b\u578b\nvar r4 = clay["Nest"]["Foobar"]; // \u8fd8\u53ef\u4ee5\u548c Javascript \u4e00\u6837\u901a\u8fc7\u7d22\u5f15\u5668\u83b7\u53d6\n')),(0,r.kt)("h3",{id:"2933-\u65b0\u589e\u5c5e\u6027"},"29.3.3 \u65b0\u589e\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    }\n});\n\n// \u65b0\u589e\nclay.Arr = new string[] { "NOR", "XOR" }; // \u6dfb\u52a0\u4e00\u4e2a\u6570\u7ec4\nclay.Obj1 = new City { }; // \u65b0\u589e\u4e00\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\nclay.Obj2 = new { Foo = "abc", Bar = 100 }; // \u65b0\u589e\u4e00\u4e2a\u533f\u540d\u7c7b\n')),(0,r.kt)("h3",{id:"2934-\u66f4\u65b0\u5c5e\u6027\u503c"},"29.3.4 \u66f4\u65b0\u5c5e\u6027\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    }\n});\n\n// \u66f4\u65b0\nclay.Foo = "TouchSocket";\nclay["Nest"].Foobar = false;\nclay.Nest["Foobar"] = true;\n')),(0,r.kt)("h3",{id:"2935-\u5220\u9664\u5c5e\u6027"},"29.3.5 \u5220\u9664\u5c5e\u6027"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    },\n    Arr = new string[] { "NOR", "XOR" }\n});\n\n// \u5220\u9664\u64cd\u4f5c\nclay.Delete("Foo"); // \u901a\u8fc7 Delete \u65b9\u6cd5\u5220\u9664\nclay.Arr.Delete(0); // \u652f\u6301\u6570\u7ec4 Delete \u7d22\u5f15\u5220\u9664\nclay("Bar");    // \u652f\u6301\u76f4\u63a5\u901a\u8fc7\u5bf9\u8c61\u4f5c\u4e3a\u65b9\u6cd5\u5220\u9664\nclay.Arr(1);    // \u652f\u6301\u6570\u7ec4\u4f5c\u4e3a\u65b9\u6cd5\u5220\u9664\n')),(0,r.kt)("h3",{id:"2936-\u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728"},"29.3.6 \u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    },\n    Arr = new string[] { "NOR", "XOR" }\n});\n\n// \u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728\nvar a = clay.IsDefined("Foo"); // true\nvar b = clay.IsDefined("Foooo"); // false\nvar c = clay.Foo(); // true\nvar d = clay.Foooo(); // false;\n')),(0,r.kt)("h3",{id:"2937-\u904d\u5386\u5bf9\u8c61"},"29.3.7 \u904d\u5386\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    },\n    Arr = new string[] { "NOR", "XOR" }\n});\n\n// \u904d\u5386\u6570\u7ec4\nforeach (string item in clay.Arr)\n{\n    Console.WriteLine(item); // NOR, XOR\n}\n\n// \u904d\u5386\u6574\u4e2a\u5bf9\u8c61\u5c5e\u6027\u53ca\u503c\uff0c\u7c7b\u4f3c JavaScript \u7684 for (var p in obj)\nforeach (KeyValuePair<string, dynamic> item in clay)\n{\n    Console.WriteLine(item.Key + ":" + item.Value); // Foo:json, Bar: 100, Nest: { "Foobar":true}, Arr:["NOR","XOR"]\n}\n')),(0,r.kt)("h3",{id:"2938-\u8f6c\u6362\u6210\u5177\u4f53\u5bf9\u8c61"},"29.3.8 \u8f6c\u6362\u6210\u5177\u4f53\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'dynamic clay = new Clay();\nclay.Arr = new string[] { "TouchSocket", "Fur" };\n\n// \u6570\u7ec4\u8f6c\u6362\u793a\u4f8b\nvar a1 = clay.Arr.Deserialize<string[]>(); // \u901a\u8fc7 Deserialize \u65b9\u6cd5\nvar a2 = (string[])clay.Arr;    // \u5f3a\u5236\u8f6c\u6362\nstring[] a3 = clay.Arr; // \u58f0\u660e\u65b9\u5f0f\n\n// \u5bf9\u8c61\u8f6c\u6362\u793a\u4f8b\nclay.City = new City { Id = 1, Name = "\u4e2d\u5c71\u5e02" };\nvar c1 = clay.City.Deserialize<City>(); // \u901a\u8fc7 Deserialize \u65b9\u6cd5\nvar c2 = (City)clay.City;    // \u5f3a\u5236\u8f6c\u6362\nCity c3 = clay.City; // \u58f0\u660e\u65b9\u5f0f\n')),(0,r.kt)("h3",{id:"2939-\u56fa\u5316\u7c98\u571f"},"29.3.9 \u56fa\u5316\u7c98\u571f"),(0,r.kt)("p",null,"\u56fa\u5316\u7c98\u571f\u5728\u5f88\u591a\u65f6\u5019\u548c\u5e8f\u5217\u5316\u5f88\u50cf\uff0c\u4f46\u662f\u5982\u679c\u76f4\u63a5\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Deserialize<object>")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"Deserialize<dynamic>")," \u65e0\u6cd5\u8fd4\u56de\u5b9e\u9645\u7c7b\u578b\uff0c\u6240\u4ee5\u5c31\u6709\u4e86\u56fa\u5316\u7c7b\u578b\u7684\u529f\u80fd\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// \u8fd4\u56de object\nvar obj = clay.Solidify();\n\n// \u8fd4\u56de dynamic\nvar obj1 = clay.Solidify<dynamic>();\n\n// \u8fd4\u56de\u5176\u4ed6\u4efb\u610f\u7c7b\u578b\nvar obj2 = clay.Solidify<City>();\n")),(0,r.kt)("h3",{id:"29310-\u8f93\u51fa-json"},"29.3.10 \u8f93\u51fa ",(0,r.kt)("inlineCode",{parentName:"h3"},"JSON")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    },\n    Arr = new string[] { "NOR", "XOR" }\n});\n\n// \u8f93\u51fa JSON\nvar json = clay.ToString(); // "{\\"Foo\\":\\"json\\",\\"Bar\\":100,\\"Nest\\":{\\"Foobar\\":true},\\"Arr\\":[\\"NOR\\",\\"XOR\\"]}"\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Clay")," \u5e8f\u5217\u5316\u6210 ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"JSON")," \u952e\u5927\u5c0f\u5199\u63a7\u5236"),(0,r.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Clay")," \u8f93\u51fa\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," \u540e\u5c06\u4fdd\u6301\u539f\u6837\u8f93\u51fa\uff0c\u5982\u679c\u9700\u8981\u5b9e\u73b0\u952e\u547d\u540d\u63a7\u5236\uff0c\u5219\u9700\u8981\u5148\u8f6c\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary")," \u7136\u540e\u518d\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"AddJsonOptions")," \u670d\u52a1\uff0c\u5982\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {8-9}",showLineNumbers:!0,"{8-9}":!0},"public IActionResult OutputClay()\n{\n    dynamic clay = Clay.Object(new\n    {\n       // ....\n    });\n\n    // \u8f6c\u6362\u6210 dictionary\n    var dic = clay.ToDictionary();\n\n    return new JsonResult(dic);\n}\n")),(0,r.kt)("p",{parentName:"admonition"},"\u914d\u7f6e\u5e8f\u5217\u5316 ",(0,r.kt)("inlineCode",{parentName:"p"},"Dictionary")," \u952e\u547d\u540d\u7b56\u7565\u652f\u6301\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {2,4}",showLineNumbers:!0,"{2,4}":!0},"services.AddControllers()\n        .AddJsonOptions(options =>\n         {\n            options.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;    // \u914d\u7f6e Dictionary \u7c7b\u578b\u5e8f\u5217\u5316\u8f93\u51fa\n         });\n"))),(0,r.kt)("h3",{id:"29311-\u8f93\u51fa-xml-\u5bf9\u8c61"},"29.3.11 \u8f93\u51fa ",(0,r.kt)("inlineCode",{parentName:"h3"},"XML")," \u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    },\n    Arr = new string[] { "NOR", "XOR" }\n});\n\n// \u8f93\u51fa XElement\nvar xml = clay.XmlElement;\n')),(0,r.kt)("h3",{id:"29312-\u5173\u952e\u5b57\u5904\u7406"},"29.3.12 \u5173\u952e\u5b57\u5904\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'dynamic clay = new Clay();\nclay.@int = 1;\nclay.@event = "\u4e8b\u4ef6";\n')),(0,r.kt)("h3",{id:"29313-\u8f6c\u6362\u6210\u5b57\u5178\u7c7b\u578b"},"29.3.13 \u8f6c\u6362\u6210\u5b57\u5178\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'dynamic clay = Clay.Object(new { name = "\u5f20\u4e09" });\nclay.name = "\u767e\u5c0f\u50e7";\nDictionary<string, object> parms = clay.ToDictionary();\n')),(0,r.kt)("h2",{id:"294-\u53cd\u9988\u4e0e\u5efa\u8bae"},"29.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed9 TouchSocket \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/issues/new?issue"},"Issue"),"\u3002")))}d.isMDXComponent=!0}}]);