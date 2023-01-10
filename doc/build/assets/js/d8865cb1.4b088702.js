"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[6594],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3725:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={id:"mongodb",title:"10.3 MongoDB \u64cd\u4f5c",sidebar_label:"10.3 MongoDB \u64cd\u4f5c"},i=void 0,l={unversionedId:"mongodb",id:"mongodb",title:"10.3 MongoDB \u64cd\u4f5c",description:"\u5728 TouchSocket \u5305\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 EFCore\uff0c\u5982\u679c\u4e0d\u4f7f\u7528 EFCore\uff0c\u53ef\u5b89\u88c5\u7eaf\u51c0\u7248 TouchSocket.Pure \u4ee3\u66ff TouchSocket\u3002",source:"@site/docs/mongodb.mdx",sourceDirName:".",slug:"/mongodb",permalink:"/touchsocket/docs/mongodb",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/v4/handbook/docs/mongodb.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"mongodb",title:"10.3 MongoDB \u64cd\u4f5c",sidebar_label:"10.3 MongoDB \u64cd\u4f5c"},sidebar:"docs",previous:{title:"10.2 Dapper \u96c6\u6210",permalink:"/touchsocket/docs/dapper"},next:{title:"11. SaaS \u591a\u79df\u6237",permalink:"/touchsocket/docs/saas"}},c={},s=[{value:"10.3.1 \u5173\u4e8e MongoDB",id:"1031-\u5173\u4e8e-mongodb",level:2},{value:"10.3.2 \u5982\u4f55\u96c6\u6210",id:"1032-\u5982\u4f55\u96c6\u6210",level:2},{value:"10.3.2.1 \u6ce8\u518c <code>MongoDB</code> \u670d\u52a1",id:"10321-\u6ce8\u518c-mongodb-\u670d\u52a1",level:3},{value:"10.3.3 \u57fa\u672c\u4f7f\u7528",id:"1033-\u57fa\u672c\u4f7f\u7528",level:2},{value:"10.3.3.1 \u5e38\u89c1\u4f8b\u5b50",id:"10331-\u5e38\u89c1\u4f8b\u5b50",level:3},{value:"10.3.3.2 \u83b7\u53d6 <code>MongoClient</code> \u5bf9\u8c61",id:"10332-\u83b7\u53d6-mongoclient-\u5bf9\u8c61",level:3},{value:"10.3.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"1034-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],p={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u6e29\u99a8\u63d0\u9192",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u5305\u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"EFCore"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u4e0d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"strong"},"EFCore"),"\uff0c\u53ef\u5b89\u88c5\u7eaf\u51c0\u7248 ",(0,r.kt)("inlineCode",{parentName:"strong"},"TouchSocket.Pure")," \u4ee3\u66ff ",(0,r.kt)("inlineCode",{parentName:"strong"},"TouchSocket")),"\u3002")),(0,r.kt)("admonition",{title:"\u67e5\u770b\u6700\u65b0\u62d3\u5c55\u6587\u6863",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/pulls/423"},"https://gitee.com/rrqm_home/TouchSocket/pulls/423"))),(0,r.kt)("h2",{id:"1031-\u5173\u4e8e-mongodb"},"10.3.1 \u5173\u4e8e MongoDB"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u662f\u4e00\u4e2a\u57fa\u4e8e\u5206\u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8\u7684\u6570\u636e\u5e93\u3002\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"C++")," \u8bed\u8a00\u7f16\u5199\u3002\u65e8\u5728\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"WEB")," \u5e94\u7528\u63d0\u4f9b\u53ef\u6269\u5c55\u7684\u9ad8\u6027\u80fd\u6570\u636e\u5b58\u50a8\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u662f\u4e00\u4e2a\u4ecb\u4e8e\u5173\u7cfb\u6570\u636e\u5e93\u548c\u975e\u5173\u7cfb\u6570\u636e\u5e93\u4e4b\u95f4\u7684\u4ea7\u54c1\uff0c\u662f\u975e\u5173\u7cfb\u6570\u636e\u5e93\u5f53\u4e2d\u529f\u80fd\u6700\u4e30\u5bcc\uff0c\u6700\u50cf\u5173\u7cfb\u6570\u636e\u5e93\u7684\u3002"),(0,r.kt)("h2",{id:"1032-\u5982\u4f55\u96c6\u6210"},"10.3.2 \u5982\u4f55\u96c6\u6210"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u4e2d\uff0c\u5df2\u7ecf\u63a8\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u62d3\u5c55\u5305 ",(0,r.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/TouchSocket.Extras.DatabaseAccessor.MongoDB"},"TouchSocket.Extras.DatabaseAccessor.MongoDB"),"\u3002"),(0,r.kt)("h3",{id:"10321-\u6ce8\u518c-mongodb-\u670d\u52a1"},"10.3.2.1 \u6ce8\u518c ",(0,r.kt)("inlineCode",{parentName:"h3"},"MongoDB")," \u670d\u52a1"),(0,r.kt)("p",null,"\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"services.AddMongoDB(connectionString)")," \u5373\u53ef\u3002\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u65b9\u5f0f\u4e00\nservices.AddMongoDB("mongodb://localhost:27017");\n\n// \u65b9\u5f0f\u4e8c\nservices.AddMongoDB(new MongoClientSettings {});\n\n// \u65b9\u5f0f\u4e09\nservices.AddMongoDB(new MongoUrl {});\n')),(0,r.kt)("h2",{id:"1033-\u57fa\u672c\u4f7f\u7528"},"10.3.3 \u57fa\u672c\u4f7f\u7528"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528\u4e4b\u524d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"IMongoDBRepository")," \u63a5\u53e3\uff0c\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u975e\u6cdb\u578b\u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"private readonly IMongoDBRepository _mongoRepository;\npublic PersonService(IMongoDBRepository mongoRepository)\n{\n    _mongoRepository = mongoRepository;\n}\n")),(0,r.kt)("h3",{id:"10331-\u5e38\u89c1\u4f8b\u5b50"},"10.3.3.1 \u5e38\u89c1\u4f8b\u5b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var database = _mongoRepository.Context.GetDatabase("foo");\nvar collection = database.GetCollection<BsonDocument>("bar");\n\nawait collection.InsertOneAsync(new BsonDocument("Name", "Jack"));\n\nvar list = await collection.Find(new BsonDocument("Name", "Jack"))\n    .ToListAsync();\n\nforeach(var document in list)\n{\n    Console.WriteLine(document["Name"]);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'public class Person\n{\n    public ObjectId Id { get; set; }\n    public string Name { get; set; }\n}\n\nvar database = _mongoRepository.Context.GetDatabase("foo");\nvar collection = database.GetCollection<Person>("bar");\n\nawait collection.InsertOneAsync(new Person { Name = "Jack" });\n\nvar list = await collection.Find(x => x.Name == "Jack")\n                           .ToListAsync();\n\nforeach(var person in list)\n{\n    Console.WriteLine(person.Name);\n}\n')),(0,r.kt)("h3",{id:"10332-\u83b7\u53d6-mongoclient-\u5bf9\u8c61"},"10.3.3.2 \u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"h3"},"MongoClient")," \u5bf9\u8c61"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IMongoDBRepository")," \u53ea\u5c01\u88c5\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u57fa\u7840\u529f\u80fd\uff0c\u5982\u9700\u83b7\u53d6\u66f4\u591a\u64cd\u4f5c\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},".Context")," \u5c5e\u6027\u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoClient")," \u5bf9\u8c61\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var client = _mongoRepository.Context;\n")),(0,r.kt)("h2",{id:"1034-\u53cd\u9988\u4e0e\u5efa\u8bae"},"10.3.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7ed9 TouchSocket \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/issues/new?issue"},"Issue"),"\u3002")),(0,r.kt)("hr",null),(0,r.kt)("admonition",{title:"\u4e86\u89e3\u66f4\u591a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoDB")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://hub.fastgit.org/mongodb/mongo-csharp-driver"},"MongoDB \u4ed3\u5e93"),"\u3002")))}m.isMDXComponent=!0}}]);