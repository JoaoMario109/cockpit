import{c as y,J as x,y as V,a0 as w,r as C,o as J,a1 as M,k as c,D as F,l as p,m as W,H as s,N as d,n as u,a2 as h,q as t,I as B,s as I,a3 as N,a4 as S,a5 as O,Q as j,a6 as z}from"./index-Cfe-5QXR.js";const T={class:"flex items-center justify-center mb-4 flex-col"},E=y({__name:"JoystickCommIndicator",props:{miniWidget:{}},setup(g){const i=x(g).miniWidget,l=V(),o=w(),n=C(!1);J(()=>{M.onJoystickUpdate(r=>{f(r)})});const f=r=>{n.value=r.size!==0},k=c(()=>n.value?o.enableForwarding?"text-slate-50":"text-yellow-500":"text-gray-700"),v=c(()=>n.value?o.enableForwarding?"Joystick connected and enabled":"Joystick connected but disabled":"Joystick disconnected"),b=c(()=>o.enableForwarding?"Joystick commands enabled":"Joystick commands paused");return(r,e)=>{const m=F("FontAwesomeIcon");return p(),W("div",null,[s(N,{text:v.value,location:"bottom"},{activator:d(({props:a})=>[u("div",h(a,{class:["relative cursor-pointer",k.value],onClick:e[0]||(e[0]=A=>t(l).miniWidgetManagerVars(t(i).hash).configMenuOpen=!0)}),[s(m,{icon:"fa-solid fa-gamepad",size:"xl"}),!n.value||!t(o).enableForwarding?(p(),B(m,{key:0,icon:"fa-solid fa-slash",size:"xl",class:"absolute left-0"})):I("",!0)],16)]),_:1},8,["text"]),s(z,{modelValue:t(l).miniWidgetManagerVars(t(i).hash).configMenuOpen,"onUpdate:modelValue":e[3]||(e[3]=a=>t(l).miniWidgetManagerVars(t(i).hash).configMenuOpen=a),title:n.value?"Joystick connected":"Joystick disconnected","max-width":"400px",variant:"text-only"},{content:d(()=>[u("div",T,[e[4]||(e[4]=u("span",{class:"mr-2"},null,-1)),s(S,{modelValue:t(o).enableForwarding,"onUpdate:modelValue":e[1]||(e[1]=a=>t(o).enableForwarding=a),"hide-details":"",label:b.value,color:"white",disabled:!n.value},null,8,["modelValue","label","disabled"])])]),actions:d(()=>[s(O,{onClick:e[2]||(e[2]=a=>t(l).miniWidgetManagerVars(t(i).hash).configMenuOpen=!1)},{default:d(()=>e[5]||(e[5]=[j("Close")])),_:1})]),_:1},8,["modelValue","title"])])}}});export{E as default};
