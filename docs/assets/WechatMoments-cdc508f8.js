import{d as q,r as m,k as z,l as O,c as n,b as s,u as e,m as R,t as y,w as f,v as _,q as g,o as a,p as j,i as A,_ as F}from"./index-a26a229b.js";import{a as k,b as h}from"./index-e5dd0308.js";const G=u=>(j("data-v-966ec35c"),u=u(),A(),u),H={class:"moments"},J={class:"video-container"},K=["src"],Q={class:"header-box"},X=G(()=>s("div",{class:"name-box"},[s("span",{class:"name"},"晓枫残月")],-1)),Y=["src"],Z={class:"content-box"},$={class:"people-box"},ee=["src"],te={class:"name-info"},oe={style:{width:"100%",height:"200px"}},se=["src"],le=q({__name:"WechatMoments",setup(u){const[M,x]=k(),[N,C]=k("other"),[p,E]=k(),[U,c,S,I]=h("Mandy"),[L,r,b,w]=h("世界那么大我想去看看"),[W,v,V,B]=h("长剑在黑夜呤唱悲歌，岁月如斑驳铜镜经年"),l=m(),d=m();let i=m("play");z(()=>{l.value.addEventListener("play",function(){console.log("开始播放"),i.value=""}),l.value.addEventListener("pause",function(){console.log("播放暂停"),i.value="pause"}),l.value.addEventListener("ended",function(){console.log("播放结束"),i.value="play"})}),O(p,()=>{i.value="play"});const D=()=>{l.value.paused?(l.value.play(),d.value.play()):(l.value.pause(),d.value.pause())},P=()=>{p.value&&(l.value.play(),d.value.play())},T=()=>{l.value.play(),d.value.play()};return(ne,t)=>(a(),n("div",H,[s("div",J,[s("video",{ref_key:"video",ref:l,width:"100%",height:"300",class:"video",src:e(p),preload:"auto",onClick:D},null,8,K),e(i)==="play"?(a(),n("i",{key:0,class:"iconfont icon-bofang",onClick:P})):e(i)==="pause"?(a(),n("i",{key:1,class:"iconfont icon-zanting",onClick:T})):R("",!0)]),s("div",Q,[s("input",{type:"file",name:"",class:"video_uplaod",onChange:t[0]||(t[0]=(...o)=>e(E)&&e(E)(...o))},null,32),X,s("img",{class:"header-img",src:e(M),alt:""},null,8,Y),s("input",{type:"file",name:"",class:"header-img_upload",onChange:t[1]||(t[1]=(...o)=>e(x)&&e(x)(...o))},null,32)]),e(W)?(a(),n("p",{key:0,class:"desc",onClick:t[2]||(t[2]=(...o)=>e(V)&&e(V)(...o))},y(e(v)),1)):f((a(),n("input",{key:1,style:{width:"100%"},class:"desc",type:"text","onUpdate:modelValue":t[3]||(t[3]=o=>g(v)?v.value=o:null),onBlur:t[4]||(t[4]=(...o)=>e(B)&&e(B)(...o))},null,544)),[[_,e(v)]]),s("div",Z,[s("div",$,[s("div",null,[s("img",{class:"other-header-img",src:e(N),alt:""},null,8,ee),s("input",{type:"file",name:"",class:"other-header-img_upload",onChange:t[5]||(t[5]=(...o)=>e(C)&&e(C)(...o))},null,32)]),s("p",te,[e(U)?(a(),n("span",{key:0,class:"other-name",onClick:t[6]||(t[6]=(...o)=>e(S)&&e(S)(...o))},y(e(c)),1)):f((a(),n("input",{key:1,type:"text","onUpdate:modelValue":t[7]||(t[7]=o=>g(c)?c.value=o:null),onBlur:t[8]||(t[8]=(...o)=>e(I)&&e(I)(...o))},null,544)),[[_,e(c)]]),e(L)?(a(),n("span",{key:2,class:"text",onClick:t[9]||(t[9]=(...o)=>e(b)&&e(b)(...o))},y(e(r)),1)):f((a(),n("input",{key:3,type:"text","onUpdate:modelValue":t[10]||(t[10]=o=>g(r)?r.value=o:null),onBlur:t[11]||(t[11]=(...o)=>e(w)&&e(w)(...o))},null,544)),[[_,e(r)]]),s("div",oe,[s("video",{ref_key:"video1",ref:d,class:"video",src:e(p),preload:"auto"},null,8,se)])])])])]))}});const de=F(le,[["__scopeId","data-v-966ec35c"]]);export{de as default};