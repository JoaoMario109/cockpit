import{bO as N,bL as R,b1 as Q,b2 as q,bi as X,b4 as Z,k as M,bP as ee,c as Ve,K as ye,y as ke,J as Se,r as $,L as we,o as xe,bQ as Ce,bR as Le,h as Me,bS as Ne,av as Pe,w as C,aC as Ie,aG as je,aI as Te,aF as $e,l as E,m as O,q as s,n as f,H as r,N as d,ah as Ee,aR as G,a2 as W,O as L,V as z,aJ as H,U,S as Oe,a5 as Ue,Q as De,a6 as _e,F as Re,ax as K,_ as Ae}from"./index-Cfe-5QXR.js";const te=N.reduce((t,i)=>(t[i]={type:[Boolean,String,Number],default:!1},t),{}),ae=N.reduce((t,i)=>{const o="offset"+R(i);return t[o]={type:[String,Number],default:null},t},{}),le=N.reduce((t,i)=>{const o="order"+R(i);return t[o]={type:[String,Number],default:null},t},{}),J={col:Object.keys(te),offset:Object.keys(ae),order:Object.keys(le)};function Be(t,i,o){let u=t;if(!(o==null||o===!1)){if(i){const e=i.replace(t,"");u+=`-${e}`}return t==="col"&&(u="v-"+u),t==="col"&&(o===""||o===!0)||(u+=`-${o}`),u.toLowerCase()}}const Fe=["auto","start","end","center","baseline","stretch"],Ge=Q({cols:{type:[Boolean,String,Number],default:!1},...te,offset:{type:[String,Number],default:null},...ae,order:{type:[String,Number],default:null},...le,alignSelf:{type:String,default:null,validator:t=>Fe.includes(t)},...q(),...X()},"VCol"),D=Z()({name:"VCol",props:Ge(),setup(t,i){let{slots:o}=i;const u=M(()=>{const e=[];let m;for(m in J)J[m].forEach(b=>{const h=t[b],V=Be(m,b,h);V&&e.push(V)});const p=e.some(b=>b.startsWith("v-col-"));return e.push({"v-col":!p||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),e});return()=>{var e;return ee(t.tag,{class:[u.value,t.class],style:t.style},(e=o.default)==null?void 0:e.call(o))}}}),A=["start","end","center"],ne=["space-between","space-around","space-evenly"];function B(t,i){return N.reduce((o,u)=>{const e=t+R(u);return o[e]=i(),o},{})}const We=[...A,"baseline","stretch"],oe=t=>We.includes(t),se=B("align",()=>({type:String,default:null,validator:oe})),ze=[...A,...ne],ie=t=>ze.includes(t),re=B("justify",()=>({type:String,default:null,validator:ie})),He=[...A,...ne,"stretch"],ue=t=>He.includes(t),de=B("alignContent",()=>({type:String,default:null,validator:ue})),Y={align:Object.keys(se),justify:Object.keys(re),alignContent:Object.keys(de)},Ke={align:"align",justify:"justify",alignContent:"align-content"};function Je(t,i,o){let u=Ke[t];if(o!=null){if(i){const e=i.replace(t,"");u+=`-${e}`}return u+=`-${o}`,u.toLowerCase()}}const Ye=Q({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:oe},...se,justify:{type:String,default:null,validator:ie},...re,alignContent:{type:String,default:null,validator:ue},...de,...q(),...X()},"VRow"),_=Z()({name:"VRow",props:Ye(),setup(t,i){let{slots:o}=i;const u=M(()=>{const e=[];let m;for(m in Y)Y[m].forEach(p=>{const b=t[p],h=Je(m,p,b);h&&e.push(h)});return e.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),e});return()=>{var e;return ee(t.tag,{class:["v-row",u.value,t.class],style:t.style},(e=o.default)==null?void 0:e.call(o))}}}),Qe={key:0,class:"w-full h-full flex items-center justify-center text-center text-white text-h5 font-weight-bold p-4 overflow-hidden"},qe={key:1,class:"main"},Xe=["width","height"],Ze={class:"ml-2"},et={class:"ml-2 flex gap-x-8"},tt={class:"ml-2 flex gap-x-8"},at={class:"flex w-full justify-end my-2"},lt=Ve({__name:"Plotter",props:{widget:{}},setup(t){const i=ye(),o=ke(),e=Se(t).widget,m=$([]);let p,b;we(()=>{const n={backgroundColor:"rgba(0, 0, 0, 0.7)",lineColor:"rgba(255, 0, 0, 1.0)",dataLakeVariableId:void 0,maxSamples:1e3,limitSamples:!0,lineThickness:1,decimalPlaces:2};e.value.options={...n,...e.value.options}}),xe(()=>{F(e.value.options.dataLakeVariableId),m.value=Object.values(Ce()),b=Le(n=>{m.value=Object.values(n)})}),Me(()=>{b&&Ne(b),p&&K(e.value.options.dataLakeVariableId,p)});const h=M(()=>m.value.filter(n=>n.type==="number")),V=()=>{e.value.options.limitSamples&&(c.length===e.value.options.maxSamples+1?c.shift():c.length>e.value.options.maxSamples&&c.splice(0,c.length-e.value.options.maxSamples))},F=(n,a)=>{if(n===void 0){console.error("No data lake variable ID provided!");return}a!==void 0&&p&&K(a,p),p=Pe(n,l=>{c.push(l),V(),x()})};C([e.value.options.maxSamples,e.value.options.limitSamples],()=>{V(),x()}),C(()=>e.value.options.dataLakeVariableId,(n,a)=>{F(n,a),c.length=0});const{width:ce,height:fe}=Ie(),y=M(()=>({width:e.value.size.width*ce.value,height:e.value.size.height*fe.value})),k=$(),P=$(),I=(n,a,l,g)=>{const j=n.measureText(a),v=4;n.fillStyle="rgba(0, 0, 0, 0.5)",n.fillRect(l-v,g-16-v,j.width+v*2,16+v*2),n.fillStyle=e.value.options.lineColor,n.fillText(a,l,g)},x=()=>{if(k.value===void 0||k.value===null)return;if(P.value===void 0){console.debug("Canvas context undefined!"),P.value=k.value.getContext("2d");return}const n=P.value,a=y.value.width,l=y.value.height;je(n),n.clearRect(0,0,a,l),n.fillStyle=e.value.options.backgroundColor,n.fillRect(0,0,a,l),n.strokeStyle=e.value.options.lineColor,n.lineWidth=Math.max(e.value.options.lineThickness,1);try{if(c.length===0)return;S=Math.max(...c),w=Math.min(...c);const g=.05*(S!=w?S-w:1),j=S+g,v=w-g,pe=c[c.length-1];n.beginPath(),n.moveTo(0,l/2),c.forEach((be,ge)=>{const ve=ge*(a/c.length),he=l-(be-v)/(j-v)*l;n.lineTo(ve,he)}),n.stroke(),n.font="14px monospace",n.textBaseline="bottom";const T=e.value.options.decimalPlaces;I(n,`Current: ${Number(pe).toFixed(T)}`,10,l-10),I(n,`Min: ${Number(w).toFixed(T)}`,10,l-30),I(n,`Max: ${Number(S).toFixed(T)}`,10,l-50)}catch(g){console.error("Error drawing graph:",g)}},c=[];let S=0,w=0;C([y,e.value.options],()=>{o.isWidgetVisible(e.value)&&Te(()=>x())});const me=$e(k);return C(me,(n,a)=>{n&&!a&&x()}),(n,a)=>(E(),O(Re,null,[s(e).options.dataLakeVariableId?(E(),O("div",qe,[f("canvas",{ref_key:"canvasRef",ref:k,width:y.value.width,height:y.value.height},null,8,Xe)])):(E(),O("p",Qe," Please open the Plotter widget configuration menu to select a variable to be plotted. ")),r(_e,{modelValue:s(o).widgetManagerVars(s(e).hash).configMenuOpen,"onUpdate:modelValue":a[8]||(a[8]=l=>s(o).widgetManagerVars(s(e).hash).configMenuOpen=l),title:"Plotter config",variant:"text-only"},{content:d(()=>[r(_,null,{default:d(()=>[r(D,{cols:"12"},{default:d(()=>[a[9]||(a[9]=f("div",{class:"text-subtitle-1 font-weight-medium mb-4"},"Data Source",-1)),f("div",Ze,[r(Ee,{modelValue:s(e).options.dataLakeVariableId,"onUpdate:modelValue":a[0]||(a[0]=l=>s(e).options.dataLakeVariableId=l),items:h.value,"item-title":"name","item-value":"id",label:"Data Lake variable",hint:"Select a variable to be plotted","persistent-hint":"",variant:"outlined",density:"comfortable"},null,8,["modelValue","items"])])]),_:1})]),_:1}),r(_,null,{default:d(()=>[r(D,{cols:"12"},{default:d(()=>[a[12]||(a[12]=f("div",{class:"text-subtitle-1 font-weight-medium mb-2"},"Appearance",-1)),f("div",et,[r(G,{"close-on-content-click":!1},{activator:d(({props:l})=>[f("div",W(l,{class:"flex cursor-pointer"}),[a[10]||(a[10]=f("span",{class:"mt-1"},"Background color",-1)),f("div",{class:"w-[30px] h-[30px] border-2 border-slate-700 rounded-lg cursor-pointer ml-2",style:L({backgroundColor:s(e).options.backgroundColor})},null,4)],16)]),default:d(()=>[r(z,{class:"overflow-hidden",style:L(s(i).globalGlassMenuStyles)},{default:d(()=>[r(H,{modelValue:s(e).options.backgroundColor,"onUpdate:modelValue":a[1]||(a[1]=l=>s(e).options.backgroundColor=l),label:"Background","hide-inputs":""},null,8,["modelValue"])]),_:1},8,["style"])]),_:1}),r(G,{"close-on-content-click":!1},{activator:d(({props:l})=>[f("div",W(l,{class:"flex cursor-pointer"}),[a[11]||(a[11]=f("span",{class:"mt-1"},"Line color",-1)),f("div",{class:"w-[30px] h-[30px] border-2 border-slate-700 rounded-lg cursor-pointer ml-2",style:L({backgroundColor:s(e).options.lineColor})},null,4)],16)]),default:d(()=>[r(z,{class:"overflow-hidden",style:L(s(i).globalGlassMenuStyles)},{default:d(()=>[r(H,{modelValue:s(e).options.lineColor,"onUpdate:modelValue":a[2]||(a[2]=l=>s(e).options.lineColor=l),label:"Line","hide-inputs":""},null,8,["modelValue"])]),_:1},8,["style"])]),_:1}),r(U,{modelValue:s(e).options.lineThickness,"onUpdate:modelValue":a[3]||(a[3]=l=>s(e).options.lineThickness=l),modelModifiers:{number:!0},type:"number",label:"Line thickness",variant:"outlined",density:"compact",rules:[l=>l>0||"Must be greater than 0"],width:"140px","hide-details":""},null,8,["modelValue","rules"])])]),_:1})]),_:1}),r(_,null,{default:d(()=>[r(D,{cols:"12"},{default:d(()=>[a[13]||(a[13]=f("div",{class:"text-subtitle-1 font-weight-medium mb-4"},"Data Points",-1)),f("div",tt,[r(U,{modelValue:s(e).options.decimalPlaces,"onUpdate:modelValue":a[4]||(a[4]=l=>s(e).options.decimalPlaces=l),modelModifiers:{number:!0},type:"number",label:"Decimal places",variant:"outlined",density:"comfortable",rules:[l=>l>=0||"Must be 0 or greater"],hint:"Number of decimal places to be displayed",width:"160px",class:"ml-2"},null,8,["modelValue","rules"]),r(Oe,{modelValue:s(e).options.limitSamples,"onUpdate:modelValue":a[5]||(a[5]=l=>s(e).options.limitSamples=l),label:"Limit number of samples"},null,8,["modelValue"]),r(U,{modelValue:s(e).options.maxSamples,"onUpdate:modelValue":a[6]||(a[6]=l=>s(e).options.maxSamples=l),modelModifiers:{number:!0},type:"number",label:"Maximum samples",variant:"outlined",density:"comfortable",disabled:!s(e).options.limitSamples,rules:[l=>l>0||"Must be greater than 0"],hint:"Higher values will show more history but may impact performance",width:"220px"},null,8,["modelValue","disabled","rules"])])]),_:1})]),_:1})]),actions:d(()=>[f("div",at,[r(Ue,{onClick:a[7]||(a[7]=l=>s(o).widgetManagerVars(s(e).hash).configMenuOpen=!1)},{default:d(()=>a[14]||(a[14]=[De("Close")])),_:1})])]),_:1},8,["modelValue"])],64))}}),ot=Ae(lt,[["__scopeId","data-v-e41dca79"]]);export{ot as default};
