import{d as M,r as B,k as S,c as n,b as l,u as e,t as v,w as c,v as m,q as y,m as q,o as s,_ as z}from"./index-2786b15c.js";import{a as T,b as f}from"./index-2b087774.js";const O={class:"content-box"},P={class:"people-box"},R=["src"],j={class:"name-info"},A={style:{width:"100%"}},F={key:0},G=["src"],H=["src"],J={class:"desc-box"},K=M({__name:"Video",setup(Q){const[U,_]=T(),[h,d,g,k]=f(),[w,u,x,E]=f("5分钟"),[r,C,I]=T(),[L,p,V,b]=f("世界那么大我想去看看"),a=B("play"),i=B();S(()=>{i.value.addEventListener("play",function(){console.log("开始播放"),a.value=""}),i.value.addEventListener("pause",function(){console.log("播放暂停"),a.value="pause"}),i.value.addEventListener("ended",function(){console.log("播放结束"),a.value="play"})});const N=()=>{r.value&&(i.value.play(),i.value.play())},D=()=>{i.value.play(),i.value.play()};return(W,t)=>(s(),n("div",O,[l("div",P,[l("div",null,[l("img",{class:"other-header-img",src:e(U),alt:""},null,8,R),l("input",{type:"file",name:"",class:"other-header-img_upload",onChange:t[0]||(t[0]=(...o)=>e(_)&&e(_)(...o))},null,32)]),l("div",j,[e(h)?(s(),n("span",{key:0,class:"other-name",onClick:t[1]||(t[1]=(...o)=>e(g)&&e(g)(...o))},v(e(d)),1)):c((s(),n("input",{key:1,type:"text","onUpdate:modelValue":t[2]||(t[2]=o=>y(d)?d.value=o:null),onBlur:t[3]||(t[3]=(...o)=>e(k)&&e(k)(...o))},null,544)),[[m,e(d)]]),e(L)?(s(),n("span",{key:2,class:"text",onClick:t[4]||(t[4]=(...o)=>e(V)&&e(V)(...o))},v(e(p)),1)):c((s(),n("input",{key:3,type:"text","onUpdate:modelValue":t[5]||(t[5]=o=>y(p)?p.value=o:null),onBlur:t[6]||(t[6]=(...o)=>e(b)&&e(b)(...o))},null,544)),[[m,e(p)]]),l("div",A,[e(I)==="video"?(s(),n("div",F,[l("video",{ref_key:"video",ref:i,class:"video",src:e(r),preload:"auto"},null,8,G),a.value==="play"?(s(),n("i",{key:0,class:"iconfont icon-bofang",onClick:N})):a.value==="pause"?(s(),n("i",{key:1,class:"iconfont icon-zanting",onClick:D})):q("",!0)])):(s(),n("img",{key:1,class:"content-img",src:e(r),alt:""},null,8,H)),l("input",{type:"file",name:"",class:"other-header-img_upload",onChange:t[7]||(t[7]=(...o)=>e(C)&&e(C)(...o))},null,32)]),l("div",J,[e(w)?(s(),n("span",{key:0,class:"other-name",onClick:t[8]||(t[8]=(...o)=>e(x)&&e(x)(...o))},v(e(u)),1)):c((s(),n("input",{key:1,type:"text","onUpdate:modelValue":t[9]||(t[9]=o=>y(u)?u.value=o:null),onBlur:t[10]||(t[10]=(...o)=>e(E)&&e(E)(...o))},null,544)),[[m,e(u)]])])])])]))}});const Z=z(K,[["__scopeId","data-v-614ab944"]]);export{Z as default};
