import{c as s,J as r,y as l,L as d,bL as g,bM as c,l as p,m as f,H as u,q as e,bN as m}from"./index-Cfe-5QXR.js";const w={class:"flex flex-col items-center justify-center w-full h-full p-2 rounded-md bg-slate-600/50"},W=s({__name:"MiniWidgetsBar",props:{widget:{}},setup(i){const n=r(i).widget,o=l();return d(()=>{Object.keys(n.value.options).length===0&&(n.value.options={miniWidgetsContainer:{name:`${g(c.random()||"Plankton")} floating container`,widgets:[]}})}),(v,t)=>(p(),f("div",w,[u(m,{container:e(n).options.miniWidgetsContainer,wrap:!0,"allow-editing":e(o).editingMode,onChooseMiniWidget:t[0]||(t[0]=a=>e(o).widgetManagerVars(e(n).hash).allowMoving=!1),onUnchooseMiniWidget:t[1]||(t[1]=a=>e(o).widgetManagerVars(e(n).hash).allowMoving=!0)},null,8,["container","allow-editing"])]))}});export{W as default};
