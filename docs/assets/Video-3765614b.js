import{d as L,r as _,k as N,c as l,b as s,u as e,t as g,w as k,v as x,q as C,m as U,o as a,_ as D}from"./index-78717be3.js";import{a as E,b as V}from"./index-3f8b4e9c.js";const M={class:"content-box"},S={class:"people-box"},T=["src"],q={class:"name-info"},z={style:{width:"100%"}},O=["src"],P=L({__name:"Video",setup(R){const[b,p]=E(),[h,d,r,c]=V(),[v,f]=E(),[B,u,y,m]=V("世界那么大我想去看看"),i=_("play"),n=_();N(()=>{n.value.addEventListener("play",function(){console.log("开始播放"),i.value=""}),n.value.addEventListener("pause",function(){console.log("播放暂停"),i.value="pause"}),n.value.addEventListener("ended",function(){console.log("播放结束"),i.value="play"})});const w=()=>{v.value&&(n.value.play(),n.value.play())},I=()=>{n.value.play(),n.value.play()};return(j,o)=>(a(),l("div",M,[s("div",S,[s("div",null,[s("img",{class:"other-header-img",src:e(b),alt:""},null,8,T),s("input",{type:"file",name:"",class:"other-header-img_upload",onChange:o[0]||(o[0]=(...t)=>e(p)&&e(p)(...t))},null,32)]),s("p",q,[e(h)?(a(),l("span",{key:0,class:"other-name",onClick:o[1]||(o[1]=(...t)=>e(r)&&e(r)(...t))},g(e(d)),1)):k((a(),l("input",{key:1,type:"text","onUpdate:modelValue":o[2]||(o[2]=t=>C(d)?d.value=t:null),onBlur:o[3]||(o[3]=(...t)=>e(c)&&e(c)(...t))},null,544)),[[x,e(d)]]),e(B)?(a(),l("span",{key:2,class:"text",onClick:o[4]||(o[4]=(...t)=>e(y)&&e(y)(...t))},g(e(u)),1)):k((a(),l("input",{key:3,type:"text","onUpdate:modelValue":o[5]||(o[5]=t=>C(u)?u.value=t:null),onBlur:o[6]||(o[6]=(...t)=>e(m)&&e(m)(...t))},null,544)),[[x,e(u)]]),s("div",z,[s("video",{ref_key:"video",ref:n,class:"video",src:e(v),preload:"auto"},null,8,O),i.value==="play"?(a(),l("i",{key:0,class:"iconfont icon-bofang",onClick:w})):i.value==="pause"?(a(),l("i",{key:1,class:"iconfont icon-zanting",onClick:I})):U("",!0),s("input",{type:"file",name:"",class:"other-header-img_upload",onChange:o[7]||(o[7]=(...t)=>e(f)&&e(f)(...t))},null,32)])])])]))}});const G=D(P,[["__scopeId","data-v-47f6f1cd"]]);export{G as default};