import{c as g,y as h,J as f,w as y,o as w,l as x,m as F,n as v,t as W,q as t,O as b,v as _,_ as M}from"./index-Cfe-5QXR.js";const S=g({__name:"Label",props:{miniWidget:{}},setup(c){const o=h(),n=c,e=f(n).miniWidget;return y(()=>o.miniWidgetManagerVars(e.value.hash).configMenuOpen,a=>{a===!0&&(o.showElementPropsDrawer(e.value.hash),setTimeout(()=>{o.miniWidgetManagerVars(e.value.hash).configMenuOpen=!1},200))},{immediate:!0,deep:!0}),w(()=>{(!n.miniWidget.options||Object.keys(n.miniWidget.options).length===0)&&(e.value.isCustomElement=!0,o.updateElementOptions(n.miniWidget.hash,{layout:{text:"Label",textSize:20,weight:"normal",decoration:"none",color:"#FFFFFF",align:"center"},variableType:null}))}),(a,i)=>{var s,r,l,p,d,m,u;return x(),F("div",{class:_(["label-container",((s=t(o).elementToShowOnDrawer)==null?void 0:s.hash)===t(e).hash&&t(o).editingMode?"bg-[#00000010] ":"border-0"]),onClick:i[0]||(i[0]=O=>t(o).editingMode&&t(o).showElementPropsDrawer(t(e).hash))},[v("div",{style:b({width:"100%",fontSize:`${(r=t(e).options.layout)==null?void 0:r.textSize}px`||"35px",fontWeight:(l=t(e).options.layout)==null?void 0:l.weight,textDecoration:(p=t(e).options.layout)==null?void 0:p.decoration,color:((d=t(e).options.layout)==null?void 0:d.color)||"#FFFFFF",textAlign:((m=t(e).options.layout)==null?void 0:m.align)||"center",margin:"1px"})},W(((u=t(e).options.layout)==null?void 0:u.text)||"Label"),5)],2)}}}),D=M(S,[["__scopeId","data-v-386e2d88"]]);export{D as default};
