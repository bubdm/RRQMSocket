"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[1327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const s={id:"dbcontext-add",title:"9.5 \u65b0\u589e\u64cd\u4f5c",sidebar_label:"9.5 \u65b0\u589e\u64cd\u4f5c"},a=void 0,i={unversionedId:"dbcontext-add",id:"dbcontext-add",title:"9.5 \u65b0\u589e\u64cd\u4f5c",description:"TouchSocket \u6846\u67b6\u63d0\u4f9b\u975e\u5e38\u591a\u7684\u8bed\u6cd5\u7cd6\u8fdb\u884c\u6570\u636e\u5e93\u64cd\u4f5c\u3002",source:"@site/docs/dbcontext-add.mdx",sourceDirName:".",slug:"/dbcontext-add",permalink:"/touchsocket/docs/dbcontext-add",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/v4/handbook/docs/dbcontext-add.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1673249119,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"dbcontext-add",title:"9.5 \u65b0\u589e\u64cd\u4f5c",sidebar_label:"9.5 \u65b0\u589e\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.4 \u4ed3\u50a8\u6a21\u5f0f (Repository)",permalink:"/touchsocket/docs/dbcontext-repository"},next:{title:"9.6 \u66f4\u65b0\u64cd\u4f5c",permalink:"/touchsocket/docs/dbcontext-update"}},u={},l=[{value:"9.5.1 \u65b0\u589e\u4e00\u6761\uff0c\u65e0\u8fd4\u56de\u503c",id:"951-\u65b0\u589e\u4e00\u6761\u65e0\u8fd4\u56de\u503c",level:2},{value:"9.5.2 \u65b0\u589e\u4e00\u6761\uff0c\u8fd4\u56de\u6700\u65b0\u6570\u636e",id:"952-\u65b0\u589e\u4e00\u6761\u8fd4\u56de\u6700\u65b0\u6570\u636e",level:2},{value:"9.5.3 \u65b0\u589e\u591a\u6761\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"953-\u65b0\u589e\u591a\u6761\u4e0d\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.5.4 \u65b0\u589e\u591a\u6761\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"954-\u65b0\u589e\u591a\u6761\u7acb\u5373\u63d0\u4ea4",level:2},{value:"9.5.5 \u5ffd\u7565\u7a7a\u503c\u65b0\u589e",id:"955-\u5ffd\u7565\u7a7a\u503c\u65b0\u589e",level:2},{value:"9.5.6 \u8868\u5e26\u89e6\u53d1\u5668\u5f02\u5e38\u89e3\u51b3",id:"956-\u8868\u5e26\u89e6\u53d1\u5668\u5f02\u5e38\u89e3\u51b3",level:2},{value:"9.5.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"957-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TouchSocket")," \u6846\u67b6\u63d0\u4f9b\u975e\u5e38\u591a\u7684\u8bed\u6cd5\u7cd6\u8fdb\u884c\u6570\u636e\u5e93\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"951-\u65b0\u589e\u4e00\u6761\u65e0\u8fd4\u56de\u503c"},"9.5.1 \u65b0\u589e\u4e00\u6761\uff0c\u65e0\u8fd4\u56de\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var user = new User { Name = "\u767e\u5c0f\u50e7", Age = 27 };\n\n// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Insert(user);\n\n// \u793a\u4f8b\u4e8c\nuser.Insert();\n\n// \u793a\u4f8b\u4e09\nrepository.Entities.Add(user);\n\n// \u793a\u4f8b\u56db\nrepository.ChangeEntityState(user, EntityState.Added);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.InsertAsync();\n\n// \u793a\u4f8b\u4e09\nawait repository.Entities.AddAsync(user);\n\n')),(0,o.kt)("h2",{id:"952-\u65b0\u589e\u4e00\u6761\u8fd4\u56de\u6700\u65b0\u6570\u636e"},"9.5.2 \u65b0\u589e\u4e00\u6761\uff0c\u8fd4\u56de\u6700\u65b0\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar newEntity = repository.InsertNow(user);\n\n// \u793a\u4f8b\u4e09\nvar newEntity = user.InsertNow();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e8c\nvar newEntity = await repository.InsertNowAsync(user); // \u6709\u4e09\u4e2a\u91cd\u8f7d\n\n// \u793a\u4f8b\u56db\nvar newEntity = await user.InsertNowAsync();  // \u6709\u4e09\u4e2a\u91cd\u8f7d\n")),(0,o.kt)("h2",{id:"953-\u65b0\u589e\u591a\u6761\u4e0d\u7acb\u5373\u63d0\u4ea4"},"9.5.3 \u65b0\u589e\u591a\u6761\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Insert(user, user2);\n\n// \u793a\u4f8b\u4e8c\nrepository.Insert(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nrepository.Insert(new[] {user, user2 });\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertAsync(user, user2);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertAsync(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertAsync(new[] {user, user2 });\n")),(0,o.kt)("h2",{id:"954-\u65b0\u589e\u591a\u6761\u7acb\u5373\u63d0\u4ea4"},"9.5.4 \u65b0\u589e\u591a\u6761\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.InsertNow(user, user2);\n\n// \u793a\u4f8b\u4e8c\nrepository.InsertNow(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nrepository.InsertNow(new[] {user, user2 });\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.InsertNowAsync(user, user2);\n\n// \u793a\u4f8b\u4e8c\nawait repository.InsertNowAsync(new List<User> { user, user2 });\n\n// \u793a\u4f8b\u4e09\nawait repository.InsertNowAsync(new[] {user, user2 });\n")),(0,o.kt)("admonition",{title:"\u5c0f\u77e5\u8bc6",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u6240\u6709\u5e26 ",(0,o.kt)("inlineCode",{parentName:"p"},"Now")," \u7ed3\u5c3e\u7684\u8868\u793a\u7acb\u5373\u63d0\u4ea4\u5230\u6570\u636e\u5e93\uff0c\u4e5f\u5c31\u662f\u7acb\u5373\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"SaveChanges")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"SaveChangesAsync"),"\u3002")),(0,o.kt)("h2",{id:"955-\u5ffd\u7565\u7a7a\u503c\u65b0\u589e"},"9.5.5 \u5ffd\u7565\u7a7a\u503c\u65b0\u589e"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"EFCore")," \u65b0\u589e\u4f1a\u63d2\u5165\u5168\u90e8\u5217\uff08\u9664\u5b9e\u4f53\u8ddf\u8e2a\u65b9\u5f0f\u4ee5\u5916\uff09\uff0c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u5e0c\u671b ",(0,o.kt)("inlineCode",{parentName:"p"},"Null")," \u503c\u65e0\u9700\u63d2\u5165\uff0c\u8fd9\u662f\u6211\u4eec\u53ea\u9700\u8981\u5728\u66f4\u65b0\u65f6\u5019\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreNullValues")," \u53c2\u6570\u5373\u53ef\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"repository.Insert(entity, ignoreNullValues: true);\n")),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"EFCore")," \u8fd8\u662f\u4f1a\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"NULL")," \u503c\u5217\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"SQL")," \u8bed\u53e5\u3002"),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5168\u5c40\u914d\u7f6e\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDbContext")," \u7684\u6d3e\u751f\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e2d\u542f\u7528\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {11}",showLineNumbers:!0,"":!0,"{11}":!0},'using TouchSocket.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace TouchSocket.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString", DbProvider.Sqlite)]\n    public class DefaultDbContext : AppDbContext<DefaultDbContext>\n    {\n        public DefaultDbContext(DbContextOptions<DefaultDbContext> options) : base(options)\n        {\n            InsertOrUpdateIgnoreNullValues = true;\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"956-\u8868\u5e26\u89e6\u53d1\u5668\u5f02\u5e38\u89e3\u51b3"},"9.5.6 \u8868\u5e26\u89e6\u53d1\u5668\u5f02\u5e38\u89e3\u51b3"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u5e93\u8868\u5b58\u5728\u89e6\u53d1\u5668\uff0c\u8fd9\u65f6\u5019\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e0b\u5217\u5f02\u5e38\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt",metastring:"showLineNumbers",showLineNumbers:!0},"Microsoft.EntityFrameworkCore.DbUpdateException:\n    Could not save changes because the target table has database triggers.\n    Please configure your entity type accordingly,\n    see https://aka.ms/efcore-docs-sqlserver-save-changes-and-triggers for more information.\n")),(0,o.kt)("p",null,"\u8fd9\u65f6\u6211\u4eec\u53ea\u9700\u8981\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"HasTrigger")," \u5373\u53ef\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {3}",showLineNumbers:!0,"{3}":!0},'public void Configure(EntityTypeBuilder<YourEntity> entityBuilder, DbContext dbContext, Type dbContextLocator)\n{\n    entityBuilder.ToTable(tb => tb.HasTrigger("TriggerName")); // \u6807\u8bb0\u6570\u636e\u5e93\u8868\u5b58\u5728\u89e6\u53d1\u5668\uff0c\u89e6\u53d1\u5668\u540d\u79f0\u53ef\u968f\u610f\n}\n')),(0,o.kt)("p",null,"\u76f8\u5173 Issue ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/issues/I5S4EC"},"https://gitee.com/rrqm_home/TouchSocket/issues/I5S4EC")),(0,o.kt)("h2",{id:"957-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.5.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ed9 TouchSocket \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/rrqm_home/TouchSocket/issues/new?issue"},"Issue"),"\u3002")))}c.isMDXComponent=!0}}]);