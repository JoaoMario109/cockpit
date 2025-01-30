import{c as P,J as L,r as f,o as U,w,l as H,I as F,n as g,a2 as j,aK as q,al as G,y as Y,M as J,Y as K,u as X,L as Q,aC as Z,k as E,aG as ee,aH as d,aL as te,aE as N,aB as ae,aI as se,m as oe,H as B,N as ne,am as le,q as c,F as ie,_ as re}from"./index-Cfe-5QXR.js";import{g as h}from"./index-D1ftmvKV.js";const de=P({__name:"Dialog",props:{show:Boolean},emits:["update:show"],setup(u,{emit:v}){const p=u,S=v,r=L(p).show,n=f(r.value),i=f(),m=f();return U(()=>{i.value.addEventListener("click",a=>{!a.target||a.target instanceof HTMLElement&&!a.target.closest(".action-button")&&a.target.nodeName!=="DIALOG"||(n.value=!1)}),document.addEventListener("keydown",a=>{n.value&&a.key==="Escape"&&(a.preventDefault(),a.stopImmediatePropagation(),n.value=!1)},{passive:!1})}),w(r,()=>n.value=r.value),w(n,()=>{n.value?i.value.showModal():(i.value.setAttribute("closing",""),i.value.addEventListener("animationend",()=>{i.value.removeAttribute("closing"),i.value.close()},{once:!0})),S("update:show",n.value)}),(a,s)=>(H(),F(G,{to:"body"},[g("dialog",{ref_key:"dialogRef",ref:i,class:"modal"},[g("div",j({ref_key:"dialogContentRef",ref:m},a.$attrs,{class:"flex flex-col items-center justify-center w-full h-full p-5 backdrop-blur-sm"}),[q(a.$slots,"default")],16)],512)]))}}),ue=["height","width"],ce={class:"flex items-center"},ge={class:"w-40"};var O=(u=>(u.NORTH_UP="North Up",u.HEAD_UP="Head Up",u))(O||{});const fe=P({__name:"Compass",props:{widget:{}},setup(u){const v=Y();J.registerUsage(K.heading);const p=X(),S=f(),r=f(),n=f(),i={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"},m=Object.values(O),s=L(u).widget;Q(()=>{Object.keys(s.value.options).length===0&&(s.value.options={headingStyle:m[0]})}),U(()=>{V(),M()});const{width:I,height:$}=Z(),T=E(()=>s.value.size.width*I.value),C=E(()=>s.value.size.height*$.value),y=E(()=>T.value<C.value?T.value:C.value),M=()=>{if(r.value===void 0||r.value===null)return;n.value===void 0&&(n.value=r.value.getContext("2d"));const e=n.value;ee(e);const t=.5*y.value,l=.13*y.value,D=.03*t;e.textAlign="center",e.strokeStyle="white",e.font=`bold ${l}px Arial`,e.fillStyle="white",e.lineWidth=D,e.textBaseline="middle";const x=.7*t,R=.4*t,W=.55*t;e.translate(t,t),e.font=`bold ${l}px Arial`,e.fillText(`${o.yawAngleDegrees.toFixed(0)}°`,.15*l,0),e.rotate(d(-90)),s.value.options.headingStyle=="Head Up"&&e.rotate(-d(o.yawAngleDegrees));for(const[k,z]of Object.entries(i))e.save(),e.rotate(d(Number(k))),e.beginPath(),e.moveTo(W,0),e.lineTo(x,0),e.textBaseline="bottom",e.font=`bold ${.7*l}px Arial`,e.translate(x*1.025,0),e.rotate(d(90)),e.fillText(z,0,0),e.stroke(),e.restore();for(const k of te(360))k%9===0&&(e.save(),e.lineWidth=.25*D,e.rotate(d(Number(k))),e.beginPath(),e.moveTo(1.1*W,0),e.lineTo(x,0),e.stroke(),e.restore());e.beginPath(),e.arc(0,0,x,0,d(360)),e.stroke(),s.value.options.headingStyle=="North Up"?e.rotate(d(o.yawAngleDegrees)):e.rotate(d(o.yawAngleDegrees)),e.beginPath(),e.lineWidth=1,e.strokeStyle="red",e.fillStyle="red";const _=.05*t;e.moveTo(R,_),e.lineTo(W-.5*_,0),e.lineTo(R,-_),e.lineTo(R,_),e.closePath(),e.fill(),e.stroke()},b=f(.01);let A;w(p.attitude,e=>{if(A===void 0){b.value=N(p.attitude.yaw),A=e.yaw;return}Math.abs(N(e.yaw-A))>.1&&(A=e.yaw,b.value=N(p.attitude.yaw))});const o=ae({yawAngleDegrees:0}),V=()=>{const e=b.value,t=e<0?e+360:e,l=o.yawAngleDegrees>270&&t<90,D=o.yawAngleDegrees<90&&t>270;l?(h.to(o,.05,{yawAngleDegrees:0}),h.fromTo(o,.05,{yawAngleDegrees:0},{yawAngleDegrees:t})):D?(h.to(o,.05,{yawAngleDegrees:360}),h.fromTo(o,.05,{yawAngleDegrees:360},{yawAngleDegrees:t})):h.to(o,.1,{yawAngleDegrees:t})};return w(b,()=>V()),w([o,T,C],()=>{v.isWidgetVisible(s.value)&&se(()=>M())}),(e,t)=>(H(),oe(ie,null,[g("div",{ref_key:"compassRoot",ref:S,class:"compass"},[g("canvas",{ref_key:"canvasRef",ref:r,height:y.value,width:y.value,class:"rounded-[15%] bg-slate-950/70"},null,8,ue)],512),B(de,{show:c(v).widgetManagerVars(c(s).hash).configMenuOpen,"onUpdate:show":t[1]||(t[1]=l=>c(v).widgetManagerVars(c(s).hash).configMenuOpen=l),class:"flex pa-4 bg-[#ffffff10] text-white backdrop-blur-2xl border-[1px] border-[#FAFAFA12]"},{default:ne(()=>[g("div",ce,[t[2]||(t[2]=g("span",{class:"mr-3 text-slate-100"},"Heading style",-1)),g("div",ge,[B(le,{modelValue:c(s).options.headingStyle,"onUpdate:modelValue":t[0]||(t[0]=l=>c(s).options.headingStyle=l),options:c(m)},null,8,["modelValue","options"])])])]),_:1},8,["show"])],64))}}),he=re(fe,[["__scopeId","data-v-758f6fd3"]]);export{he as default};
