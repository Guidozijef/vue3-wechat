import{d as k,r as l,k as L,c as r,b as e,u as v,l as b,o as u,p as R,i as x,_ as C}from"./index-bc808f89.js";const f=t=>(R("data-v-fbd11441"),t=t(),x(),t),U={class:"moments"},I={class:"video-container"},E=["src"],M={class:"header-box"},S=f(()=>e("span",{class:"name"},"枫桥夜泊",-1)),V=["src"],j=f(()=>e("div",{class:"content-box"},[e("div",{class:""},[e("span",{class:"name"}),e("p",{class:"content-text"})])],-1)),B=k({__name:"WechatMoments",setup(t){const p=l(new URL("/assets/role-d27677f5.png",self.location).href),c=l(""),a=l();let s=l("play");L(()=>{a.value.addEventListener("play",function(){console.log("开始播放"),s.value=""}),a.value.addEventListener("pause",function(){console.log("播放暂停"),s.value="pause"}),a.value.addEventListener("ended",function(){console.log("播放结束"),s.value="play"})});const g=()=>{a.value.paused?a.value.play():a.value.pause()},m=n=>{let o=n.target.files[0];if(o.type!=="image/png"&&o.type!=="image/jpg"&&o.type!=="image/jpeg")return;const d=(window.URL||window.webkitURL).createObjectURL(o);console.log(o),p.value=d},h=n=>{let o=n.target.files[0];const i=new FileReader;i.onload=d=>{var _;c.value=(_=d.target)==null?void 0:_.result},i.readAsDataURL(o),console.log(o)},y=()=>{c.value&&a.value.play()},w=()=>{a.value.play()};return(n,o)=>(u(),r("div",U,[e("div",I,[e("video",{ref_key:"video",ref:a,width:"100%",height:"300",class:"video",src:c.value,preload:"auto",onClick:g},null,8,E),v(s)==="play"?(u(),r("i",{key:0,class:"iconfont icon-bofang",onClick:y})):v(s)==="pause"?(u(),r("i",{key:1,class:"iconfont icon-zanting",onClick:w})):b("",!0)]),e("div",M,[e("input",{type:"file",name:"",class:"video_uplaod",onChange:h},null,32),S,e("img",{class:"header-img",src:p.value,alt:""},null,8,V),e("input",{type:"file",name:"",class:"header-img_upload",onChange:m},null,32)]),j]))}});const N=C(B,[["__scopeId","data-v-fbd11441"]]);export{N as default};