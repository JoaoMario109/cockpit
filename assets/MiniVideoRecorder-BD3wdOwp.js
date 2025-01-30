import{c as Z,a7 as ee,K as te,y as ae,a8 as ne,J as se,r as c,a9 as oe,aa as ie,e as re,k as F,w as m,o as le,L as de,ab as ue,ac as ce,ad as me,D as ve,l as d,m as v,n as f,v as E,q as i,H as g,N as x,Q as k,ae as C,F as U,t as L,I as q,s as z,af as fe,ag as ge,O as pe,ah as ye,a5 as H,W as xe,ai as he,_ as Se}from"./index-Cfe-5QXR.js";const we={key:1},be={class:"text-xs text-white select-none scroll-text"},Ve={key:3,class:"w-16 text-justify text-slate-100"},ke={key:4,class:"w-16 text-justify text-slate-100"},Me={class:"flex justify-center w-6"},Fe={class:"flex w-full justify-between items-center mt-4"},Ce={key:1,class:"w-5 h-5 ml-2 rounded-full bg-red"},Ie=Z({__name:"MiniVideoRecorder",props:{miniWidget:{}},setup(G){const{showDialog:h}=ee(),I=te(),p=ae(),s=ne(),n=se(G).miniWidget,a=c(),{namessAvailableAbstractedStreams:b}=oe(s),N=c(),{isOutside:R}=ie(N),O=c(!1),S=c(!1),J=re({interval:100}),u=c(),w=c(!1),W=c(0),o=c(),M=F(()=>o.value),_=()=>{I.videoLibraryVisibility=!0};m(()=>s.streamsCorrespondency,()=>u.value=void 0,{deep:!0}),le(async()=>{await V()}),de(async()=>{Object.keys(n.value.options).length===0&&(n.value.options={internalStreamName:void 0}),a.value=n.value.options.internalStreamName,a.value&&(o.value=s.externalStreamId(a.value))}),m(a,()=>{n.value.options.internalStreamName=a.value,u.value=void 0}),m(()=>s.streamsCorrespondency,t=>{if(!o.value)return;const e=t.find(r=>r.externalId===o.value);e?a.value!==e.name&&(a.value=e.name):(a.value=void 0,o.value=void 0)},{deep:!0}),m(a,t=>{o.value=t?s.externalStreamId(t):void 0,n.value.options.internalStreamName=t,u.value=void 0});const V=async()=>{const e=(await s.videoStorage.keys()).filter(l=>s.isVideoFilename(l)).length,r=Object.keys(s.keysFailedUnprocessedVideos).length;W.value=e+r};function D(t){if(a.value=t,a.value===void 0){h({message:"No stream selected.",variant:"error"});return}if(b.value.includes(a.value))return;const e="The selected stream is not available. Please check its source or select another stream.";throw h({message:e,variant:"error"}),new Error(e)}const K=async()=>{if(y.value){o.value&&s.stopRecording(o.value);return}if(!a.value){p.miniWidgetManagerVars(n.value.hash).configMenuOpen=!0;return}B()},B=()=>{var t;if(!o.value){h({title:"Cannot start recording.",message:"No stream selected.",variant:"error"});return}if(!((t=s.getStreamData(o.value))!=null&&t.connected)){h({title:"Cannot start recording.",message:"Stream is not connected.",variant:"error"});return}D(a.value),s.startRecording(o.value),p.miniWidgetManagerVars(n.value.hash).configMenuOpen=!1},y=F(()=>o.value?s.isRecording(o.value):!1),Q=F(()=>{var j,A,T,P;if(M.value===void 0)return"00:00:00";const t=(j=s.getStreamData(M.value))==null?void 0:j.timeRecordingStart;if(t===void 0)return"00:00:00";const e=ue({start:t,end:J.value}),r=((A=e.hours)==null?void 0:A.toFixed(0).length)===1?`0${e.hours}`:e.hours,l=((T=e.minutes)==null?void 0:T.toFixed(0).length)===1?`0${e.minutes}`:e.minutes,X=((P=e.seconds)==null?void 0:P.toFixed(0).length)===1?`0${e.seconds}`:e.seconds;return`${r}:${l}:${X}`}),Y=async t=>{D(t),u.value=void 0,S.value=!0;let e=0;const r=100,l=3e3;for(;S.value&&e<l;)S.value=u.value===void 0||!u.value.active,await he(r),e+=r;if(S.value){h({message:"Could not load media stream.",variant:"error"});return}n.value.options.internalStreamName=t};let $;return p.isRealMiniWidget(n.value.hash)&&($=setInterval(()=>{if(n.value.options.internalStreamName===void 0&&!b.value.isEmpty()&&(n.value.options.internalStreamName=b.value[0],a.value=n.value.options.internalStreamName),M.value!==void 0){const t=s.getMediaStream(n.value.options.internalStreamName);ce(t,u.value)||(u.value=t)}},1e3)),me(()=>clearInterval($)),m(()=>s.areThereVideosProcessing,t=>{w.value=t,V()}),m(()=>s.keysFailedUnprocessedVideos,()=>V()),m(()=>O.value,async t=>{t===!1&&await V()}),m(y,()=>{if(!y.value){window.onbeforeunload=null;return}window.onbeforeunload=()=>(h({message:`
      You have a video recording ongoing.
      Remember to stop it before closing Cockpit, or the record will be lost.
    `,variant:"warning"}),"I hope the user does not click on the leave button.")}),(t,e)=>{const r=ve("FontAwesomeIcon");return d(),v(U,null,[f("div",{ref_key:"recorderWidget",ref:N,class:"flex justify-around px-2 py-1 text-center rounded-lg w-40 h-9 align-center bg-slate-800/60"},[w.value?(d(),v("div",we,[g(C,{class:"w-6 h-6 animate-spin",color:"white"},{default:x(()=>e[4]||(e[4]=[k("mdi-loading")])),_:1})])):(d(),v("div",{key:0,class:E([{"blob red w-5 opacity-100 rounded-sm":y.value,"opacity-30 bg-red-400":i(R)&&!y.value},"w-6 transition-all duration-500 rounded-full aspect-square bg-red-lighten-1 hover:cursor-pointer opacity-70 hover:opacity-90"]),onClick:e[0]||(e[0]=l=>K())},null,2)),!y.value&&!w.value?(d(),v(U,{key:2},[a.value?(d(),v("div",{key:0,class:"flex flex-col max-w-[50%] scroll-container transition-all border-blur cursor-pointer",onClick:e[1]||(e[1]=l=>i(p).miniWidgetManagerVars(i(n).hash).configMenuOpen=!0)},[f("div",be,L(a.value),1)])):(d(),q(r,{key:1,icon:"fa-solid fa-video",class:"h-6 text-slate-100"}))],64)):z("",!0),y.value&&!w.value?(d(),v("div",Ve,L(Q.value),1)):w.value?(d(),v("div",ke,e[5]||(e[5]=[f("div",{class:"text-xs text-center text-white select-none flex-nowrap"},"Processing video...",-1)]))):z("",!0),f("div",Me,[g(fe,{vertical:"",class:"h-6 ml-1"}),g(ge,{color:"info",content:W.value,dot:i(R)||O.value,class:"cursor-pointer",onClick:_},{default:x(()=>[g(C,{class:"w-6 h-6 ml-1 text-slate-100",onClick:_},{default:x(()=>e[6]||(e[6]=[k(" mdi-video-box ")])),_:1})]),_:1},8,["content","dot"])])],512),g(xe,{modelValue:i(p).miniWidgetManagerVars(i(n).hash).configMenuOpen,"onUpdate:modelValue":e[3]||(e[3]=l=>i(p).miniWidgetManagerVars(i(n).hash).configMenuOpen=l),width:"auto"},{default:x(()=>[f("div",{class:"flex flex-col items-center p-2 pt-1 m-5 rounded-md gap-y-4",style:pe(i(I).globalGlassMenuStyles)},[e[10]||(e[10]=f("p",{class:"text-xl font-semibold m-4"},"Choose a stream to record",-1)),g(ye,{"model-value":a.value,label:"Stream name",items:i(b),"item-title":"name",density:"compact",variant:"outlined","no-data-text":"No streams available.","hide-details":"","return-object":"",theme:"dark",class:"w-[90%]","onUpdate:modelValue":Y},null,8,["model-value","items"]),f("div",Fe,[g(H,{class:"w-auto text-uppercase",variant:"text",onClick:e[2]||(e[2]=l=>i(p).miniWidgetManagerVars(i(n).hash).configMenuOpen=!1)},{default:x(()=>e[7]||(e[7]=[k(" Close ")])),_:1}),g(H,{class:E(["bg-[#FFFFFF11] hover:bg-[#FFFFFF33]",{"opacity-30 pointer-events-none":S.value}]),size:"large",onClick:B},{default:x(()=>[e[9]||(e[9]=f("span",null,"Record",-1)),S.value?(d(),q(C,{key:0,class:"m-2 animate-spin"},{default:x(()=>e[8]||(e[8]=[k("mdi-loading")])),_:1})):(d(),v("div",Ce))]),_:1},8,["class"])])],4)]),_:1},8,["modelValue"])],64)}}}),Oe=Se(Ie,[["__scopeId","data-v-cc9e6cd8"]]);export{Oe as default};
