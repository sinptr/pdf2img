(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t){},1:function(e,t){},2:function(e,t){},"2CjP":function(e,t,a){e.exports=function(){return new Worker(a.p+"static/workers/87855e84a8accf6858bc.worker.js")}},"2YZa":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("qWSy"),c=a.n(o),i=(a("XMab"),a("wSuE")),l=a("5CWz"),s=a("hlFM"),m=a("tRbT"),u=a("Z3vd"),p=a("xOOu"),f=a.n(p),d=a("Iab2"),g=a("R/WZ");function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const b=Object(g.a)({input:{display:"none"}});var E=r.a.forwardRef((e,t)=>{const{onChange:a,id:n,...o}=e,c=b();return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:n},r.a.createElement("input",{ref:t,onChange:a,accept:"application/pdf",className:c.input,id:n,multiple:!0,type:"file"}),r.a.createElement(u.a,w({component:"span"},o))))});function h(e){return new Promise(t=>{const a=new FileReader;a.onload=e=>t(e.target.result),a.readAsArrayBuffer(e)})}async function v(e,t=2){const a=document.createElement("canvas").transferControlToOffscreen(),n=a.getContext("2d"),r=[];for await(const o of function*(e){for(let t=1;t<=e.numPages;t+=1)yield e.getPage(t)}(e)){const e=o.getViewport({scale:t});a.height=e.height,a.width=e.width;const c={canvasContext:n,viewport:e};await o.render(c).promise,r.push(n.getImageData(0,0,a.width,a.height))}return o=r,new Promise(e=>{const t=document.createElement("canvas").transferControlToOffscreen(),a=new O.a;a.postMessage({canvas:t,images:o},[t]),a.addEventListener("message",({data:t})=>{e(t),a.terminate()})});var o}var y=a("2CjP"),O=a.n(y);function j(e,t){return e.split(".").slice(0,-1).concat(t).join(".")}var C=a("30+C"),k=a("lFIR"),W=a("oa/T"),x=a("ofer"),P=a("o4QW"),R=a("Xt1q");const T=Object(g.a)({root:{display:"flex",flexWrap:"wrap"},actions:{marginTop:"auto"},preview:{maxHeight:"100%",overflow:"auto",maxWidth:"80%",margin:"0 auto"},img:{maxWidth:"100%"}});var F=function({blob:e,name:t}){const[a,o]=Object(n.useState)(!1),[c,i]=Object(n.useState)(""),l=T(),s=Object(n.useCallback)(()=>{Object(d.saveAs)(e,t)},[e,t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{className:l.root},r.a.createElement(k.a,{onClick:()=>{c||function(e){return new Promise(t=>{const a=new FileReader;a.onload=({target:e})=>{var a;const n=null!==(a=null==e?void 0:e.result)&&void 0!==a?a:"";t(n)},a.readAsDataURL(e)})}(e).then(i),o(!0)}},r.a.createElement(W.a,null,r.a.createElement(x.a,{noWrap:!0,gutterBottom:!0,variant:"subtitle1",component:"h2"},t))),r.a.createElement(P.a,{className:l.actions},r.a.createElement(u.a,{size:"small",color:"primary",onClick:s},"Скачать"))),r.a.createElement(R.a,{open:a,onClose:()=>o(!1)},r.a.createElement(m.a,{container:!0,justify:"center",className:l.preview},r.a.createElement("img",{className:l.img,src:c,alt:t}))))};const A=Object(g.a)(e=>({root:{display:"grid",width:"100%",gridTemplateColumns:"1fr",gridGap:e.spacing(1),[e.breakpoints.up("sm")]:{gridTemplateColumns:"repeat(2, 1fr)"},[e.breakpoints.up("md")]:{gridTemplateColumns:"repeat(4, 1fr)"}}}));var N=function({images:e}){const t=A();return r.a.createElement(s.a,{className:t.root},e.map(({blob:e,name:t})=>r.a.createElement(F,{key:t,blob:e,name:t})))},S=a("lRFz"),I=a.n(S),z=a("Vdsi"),Z=a.n(z);"undefined"!=typeof window&&"Worker"in window&&(I.a.GlobalWorkerOptions.workerPort=new Z.a);var q=I.a;var B=Object(i.hot)((function(){const[e,t]=Object(n.useState)([]),[a,o]=Object(n.useState)(!1),c=Object(n.useRef)(null),i=Object(n.useCallback)(async e=>{const{files:a}=e.currentTarget;t([]),o(!0);for(const e of a){const a=await q.getDocument(new Uint8Array(await h(e))).promise,n=await v(a,3);if(n){const a=j(e.name,"png");t(e=>[...e,{blob:n,name:a}])}}o(!1),c.current.reset()},[]);return r.a.createElement(s.a,{p:4},r.a.createElement(l.a,null),r.a.createElement(m.a,{container:!0,direction:"column",spacing:2},r.a.createElement(m.a,{item:!0},r.a.createElement("form",{ref:c},r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0},r.a.createElement(E,{id:"upload",onChange:i,color:"primary",disabled:a},"Выбрать файлы")),!a&&!!e.length&&r.a.createElement(m.a,{item:!0},r.a.createElement(u.a,{onClick:async()=>{const t=new f.a;e.forEach(({name:e,blob:a})=>{t.file(e,a)});const a=await t.generateAsync({type:"blob"});Object(d.saveAs)(a,"images.zip")}},"Скачать все"))))),r.a.createElement(m.a,{item:!0},r.a.createElement(N,{images:e}))))}));c.a.render(r.a.createElement(B,null),document.getElementById("root"))},3:function(e,t){},4:function(e,t){}},[["2YZa",1,2]]]);