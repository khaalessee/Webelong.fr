"use strict";(()=>{var e={};e.id=433,e.ids=[433],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},9523:e=>{e.exports=require("dns")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},1808:e=>{e.exports=require("net")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},4404:e=>{e.exports=require("tls")},7310:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},9796:e=>{e.exports=require("zlib")},9853:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>m,originalPathname:()=>q,requestAsyncStorage:()=>l,routeModule:()=>n,serverHooks:()=>x,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>d});var s={};t.r(s),t.d(s,{POST:()=>POST}),t(5655);var o=t(3323),a=t(4647),i=t(6886),p=t(3330);async function POST(e){let{email:r,name:t,message:s,phone:o,company:a}=await e.json(),u=p.createTransport({service:"gmail",auth:{user:process.env.MY_EMAIL,pass:process.env.MY_PASSWORD}}),n={from:process.env.MY_EMAIL,to:process.env.MY_EMAIL,subject:`Message from ${t} (${r})`,text:`Name: ${t}
Email: ${r}
Phone: ${o}
Company: ${a}
Message: ${s}`};try{return await new Promise((e,r)=>{u.sendMail(n,function(t){t?r(t.message):e("Email sent")})}),i.Z.json({message:"Email sent"})}catch(e){return i.Z.json({error:e},{status:500})}}let u=o.AppRouteRouteModule,n=new u({definition:{kind:a.x.APP_ROUTE,page:"/api/email/route",pathname:"/api/email",filename:"route",bundlePath:"app/api/email/route"},resolvedPagePath:"C:\\Users\\Chlo\xe9\\OneDrive\\Bureau\\webelong\\app\\api\\email\\route.ts",nextConfigOutput:"export",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:c,serverHooks:x,headerHooks:m,staticGenerationBailout:d}=n,q="/api/email/route"}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[405,506,279],()=>__webpack_exec__(9853));module.exports=t})();