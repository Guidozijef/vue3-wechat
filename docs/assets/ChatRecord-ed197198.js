import{r as f,d as D,a as k,c as _,b as e,u as s,F as O,e as L,w,v as U,f as I,g as S,o as p,n as b,h as j,t as K,p as T,i as B,j as M,_ as V}from"./index-fb78c062.js";import{u as $}from"./index-857e381b.js";const r=f([{id:new Date().valueOf()+1,content:"验证码直接验证码直接登录就行了嘛验证码直接登录就行了嘛验证码直接登录就行了嘛验证码直接登录就行了嘛验证码直接登录就行了嘛验证码直接登录就行了嘛登录就行了嘛?",type:"left"},{id:new Date().valueOf()+2,content:"验证码直接验证码直接登录就行了嘛?",type:"right"},{id:new Date().valueOf()+3,content:"验证码直接验证码直接登录就行了嘛?",type:"left"},{id:new Date().valueOf()+4,content:"验证码直接验证码直接登录就行了嘛?",type:"right"},{id:new Date().valueOf()+5,content:"验证码直接验证码直接登录就行了嘛?",type:"left"},{id:new Date().valueOf()+6,content:"验证码直接验证码直接登录就行了嘛验证码直接登录就行了嘛验证码直接登录就行了嘛验证码直接登录就行了嘛验证码直接登录就行了嘛验证码直接登录就行了嘛登录就行了嘛?",type:"left"},{id:new Date().valueOf()+7,content:"验证码直接验证码直接登录就行了嘛?",type:"right"}]),n=a=>(T("data-v-f5137c47"),a=a(),B(),a),z={class:"main-container"},F={class:"header-container"},N=n(()=>e("h2",{class:"title"},"TKey.",-1)),E=n(()=>e("i",{class:"iconfont icon-icon_more"},null,-1)),q={class:"content-container"},A={class:"text-container"},G=["src"],H=["onChange"],J={class:"people-content"},P=["onClick"],Q={class:"footer-container"},W={class:"curr-role"},X=["src"],Y={class:"control-box"},Z=n(()=>e("i",{class:"icon-locat icon-yuyin1"},null,-1)),ee=["onKeyup"],te=n(()=>e("i",{class:"icon-locat icon-xiaolian mr-10"},null,-1)),oe={class:"more-control"},ne=n(()=>e("div",null,"发红包",-1)),se=n(()=>e("div",null,"收红包",-1)),ae=n(()=>e("div",null,"发语音",-1)),ce=[ne,se,ae],le=n(()=>e("span",{class:"control-bar"},null,-1)),ie=D({__name:"ChatRecord",setup(a){const y=M(),d=k({left:new URL("../assets/img/logo.svg",self.location).href,right:new URL("/vue3-wechat/assets/role-d27677f5.png",self.location).href}),[h,v]=$(),c=f(""),u=f(!1),m=(l,o)=>{let t=l.target.files[0];if(t.type!=="image/png"&&t.type!=="image/jpg")return;const i=(window.URL||window.webkitURL).createObjectURL(t);d[o]=i},C=()=>{r.value.push({type:h.value,content:c.value,id:new Date().valueOf()}),c.value=""},R=l=>{const o=r.value.findIndex(t=>t.id===l);r.value.splice(o,1)},x=()=>{u.value=!u.value};return(l,o)=>(p(),_("main",z,[e("header",F,[e("i",{class:"iconfont icon-zuojiantou",onClick:o[0]||(o[0]=t=>s(y).push("/"))}),N,E]),e("div",q,[(p(!0),_(O,null,L(s(r),(t,g)=>(p(),_("div",{class:b(`${t.type}-people`),key:g},[e("div",A,[e("img",{class:"head-portrait",src:d[t.type],alt:""},null,8,G),e("input",{ref_for:!0,ref:"file",type:"file",class:"upload",name:"",onChange:i=>m(i,t.type)},null,40,H),e("div",J,[j(K(t.content)+" ",1),e("i",{class:"delete-content",onClick:i=>R(t.id)},"×",8,P)])])],2))),128))]),e("footer",Q,[e("div",W,[e("img",{class:"curr-portrait",src:d[s(h)],alt:"",onClick:o[1]||(o[1]=(...t)=>s(v)&&s(v)(...t))},null,8,X)]),e("div",Y,[Z,w(e("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>c.value=t),class:"input-content",type:"text",onKeyup:I(C,["enter"])},null,40,ee),[[U,c.value]]),e("span",null,[te,e("i",{class:"icon-locat icon-jia",onClick:x})])]),w(e("div",oe,ce,512),[[S,u.value]]),le])]))}});const ue=V(ie,[["__scopeId","data-v-f5137c47"]]);export{ue as default};