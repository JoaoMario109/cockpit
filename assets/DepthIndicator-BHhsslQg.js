import{c as d,u,K as p,M as f,Y as m,r as h,w as v,Z as _,k as w,l as x,m as b,n as s,t as n,q as i,$ as g}from"./index-Cfe-5QXR.js";const S={class:"h-12 p-1 min-w-[8.5rem] text-white transition-all relative scroll-container"},D={class:"absolute left-[3rem] h-full select-none font-semibold scroll-container w-full"},C={class:"w-full"},k={class:"font-mono text-xl leading-6"},B={class:"text-xl leading-6"},y=d({__name:"DepthIndicator",setup(N){const o=u(),{displayUnitPreferences:l}=p();f.registerUsage(m.depth);const a=h(void 0);v(o.altitude,()=>{const e=o.altitude.msl,t=_(-e.value,e.toJSON().unit);if(t.value<.01){a.value=0;return}const c=t.to(l.distance);a.value=c.toJSON().value});const r=w(()=>{const e=a.value;if(e===void 0)return"--";const t=e<10?2:e>=10&&e<1e3?1:0;return e.toFixed(t)});return(e,t)=>(x(),b("div",S,[t[1]||(t[1]=s("span",{class:"h-full left-[0.5rem] bottom-[12%] absolute mdi text-[2.35rem] mdi-wave-arrow-up"},null,-1)),s("div",D,[s("div",C,[s("span",k,n(r.value),1),s("span",B,n(" ")+" "+n(i(g)[i(l).distance]),1)]),t[0]||(t[0]=s("span",{class:"w-full text-sm absolute bottom-[0.5rem] whitespace-nowrap text-ellipsis overflow-x-hidden"}," Depth ",-1))])]))}});export{y as default};
