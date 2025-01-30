import{c as oe,a8 as se,r as h,bT as pe,w as O,o as fe,h as ye,ad as re,l as p,m as f,n as i,_ as ie,bU as ge,a_ as Se,q as o,K as be,y as he,a9 as Ve,J as we,L as xe,k as F,ac as ke,I as Ne,s as Fe,t as z,F as K,p as ae,Q as I,H as m,N as x,V as Ie,O as Ce,P as Pe,R as Re,ah as le,a4 as Q,a5 as ne,W as $e}from"./index-Cfe-5QXR.js";const De={class:"canvas-container"},Me=["width","height"],H=100,ze=60,Te=oe({__name:"VideoPlayerStatsForNerds",props:{width:{type:Number,default:130},height:{type:Number,default:200},updateInterval:{type:Number,default:20},streamName:{type:String,default:""}},setup(C){const W=se(),r=C,P=h(null),u=h([]),k=h([]),a=h([]);let s=null,V=null,d=0,y=0,c=0,T=0,R=0,L=0,U=0,A=0,B=!1,E=0,n=0,e=0,l=0,S=0,q=0,Y=0,_=0,G=1e3,$=30,X=10,ue=120;function de(b,t){return b/t*ze}function Z(){const t=P.value.getContext("2d"),{width:v,height:w}=r;t.clearRect(0,0,v,w);function D(N,J,ve){t.strokeStyle=J,t.lineWidth=1,t.beginPath();for(let M=0;M<N.length;M++){const ee=M/(H-1)*v,te=w-de(N[M],ve);M===0?t.moveTo(ee,te):t.lineTo(ee,te)}t.stroke()}D(k.value,"rgb(255, 165, 0)",G),D(u.value,"rgb(0, 255, 0)",$),D(a.value,"rgb(255, 0, 0)",X);const g=B?"red":"white",ce=[{label:"Stream",value:r.streamName,color:g},{label:"Size",value:_?`${_}p`:"N/A",color:g},{label:"Packets Lost",value:`${y} (${S.toFixed(0)}%)`,color:g},{label:"Frame drops",value:l,color:g},{label:"Nack",value:R,color:g},{label:"Pli",value:L,color:g},{label:"Fir",value:U,color:g},{label:"Processing ",value:`${E.toFixed(0)}ms`,color:g},{label:"Freezes",value:`${n}(${e.toFixed(1)}s)`,color:g},{label:"Bitrate",value:`${d.toFixed(0)}kbps`,color:"rgb(255, 165, 0)"},{label:"FPS",value:q.toFixed(2),color:"rgb(0, 255, 0)"}];t.font="10px Arial",ce.forEach((N,J)=>{t.fillStyle=N.color,t.fillText(`${N.label}: ${N.value}`,5,12+J*12)}),s=requestAnimationFrame(Z)}const j=new pe({getStatsInterval:100});function me(){u.value.push(q),k.value.push(d),a.value.push(Math.min(Y,X)),u.value.length>H&&u.value.shift(),k.value.length>H&&k.value.shift(),a.value.length>H&&a.value.shift(),G=Math.max(G,...k.value),$=Math.max($,...u.value),$=Math.min($,ue)}return O(W.activeStreams,b=>{Object.keys(b).forEach(t=>{var w;if(t!==r.streamName)return;const v=(w=b[t])==null?void 0:w.webRtcManager.session;!v||!v.peerConnection||j.peersToMonitor[v.consumerId]||j.addConnection({pc:v.peerConnection,peerId:v.consumerId,connectionId:v.id,remote:!1})})}),fe(()=>{V=setInterval(me,r.updateInterval),Z(),j.on("stats",b=>{try{const t=b.data.video.inbound[0];if(t===void 0)return;if(B=t.bitrate===0,!isNaN(t.bitrate)){const D=t.bitrate/1e3;d=d*.8+D*.2}Y=t.packetsLost-y,y=t.packetsLost,R=t.nackCount,L=t.pliCount,U=t.firCount,c=t.packetsReceived;let v=t.totalProcessingDelay-T,w=t.framesReceived-A;E=1e3*v/w,A=t.framesReceived,T=t.totalProcessingDelay,S=y/(y+c)*100,n=t.freezeCount,e=t.totalFreezesDuration,l=t.framesDropped,q=t.framesPerSecond??0,_=t.frameHeight}catch(t){console.error(t)}})}),ye(()=>{clearInterval(V),cancelAnimationFrame(s)}),re(()=>{j.destroy()}),(b,t)=>(p(),f("div",De,[i("canvas",{ref_key:"canvasRef",ref:P,width:C.width,height:C.height},null,8,Me)]))}}),Le=ie(Te,[["__scopeId","data-v-4a8ba759"]]),Ue=ge("v-banner-text"),Ae={ref:"videoWidget",class:"video-widget"},Be={key:1,class:"no-video-alert"},Ee={key:2,class:"no-video-alert"},je={key:3,class:"no-video-alert"},He={class:"no-video-alert"},Oe={key:4,class:"no-video-alert"},We={class:"flex-wrap justify-center d-flex ga-5"},qe=oe({__name:"VideoPlayer",props:{widget:{}},setup(C){Se(n=>({"281c6376":o(a).options.videoFitStyle,"20fb88cc":A.value}));const W=be(),r=se(),P=he(),{namessAvailableAbstractedStreams:u}=Ve(r),a=we(C).widget,s=h(),V=h(),d=h(),y=h(!1);xe(()=>{const n={videoFitStyle:"cover",flipHorizontally:!1,flipVertically:!1,rotationAngle:0,statsForNerds:!1,internalStreamName:void 0};a.value.options=Object.assign({},n,a.value.options),s.value=a.value.options.internalStreamName});const c=F(()=>s.value?r.externalStreamId(s.value):void 0);O(()=>r.streamsCorrespondency,()=>{if(d.value=void 0,!s.value)return;const n=r.externalStreamId(s.value);if(!n)return;const e=r.streamsCorrespondency.find(S=>S.externalId===n);if(!e)return;const l=e.name;s.value!==l&&(s.value=l,a.value.options.internalStreamName=l)},{deep:!0});const T=setInterval(()=>{var n;if(a.value.options.internalStreamName===void 0&&!u.value.isEmpty()&&(a.value.options.internalStreamName=u.value[0],s.value=a.value.options.internalStreamName),c.value!==void 0){const e=r.getMediaStream(c.value);ke(e,d.value)||(d.value=e);const l=((n=r.getStreamData(c.value))==null?void 0:n.connected)??!1;l!==y.value&&(y.value=l)}if(!u.value.isEmpty()&&!u.value.includes(s.value)){if(r.lastRenamedStreamName!==""){s.value=r.lastRenamedStreamName;return}s.value=u.value[0]}},1e3);re(()=>clearInterval(T)),O(s,()=>{a.value.options.internalStreamName=s.value,d.value=void 0}),O(d,()=>{!V.value||!d.value||(V.value.srcObject=d.value,V.value.play().then(()=>console.log("[VideoPlayer] Stream is playing")).catch(n=>{const e=`Failed to play stream. Reason: ${n}`;console.error(`[VideoPlayer] ${e}`)}))});const R=n=>{a.value.options.rotationAngle+=n},L=F(()=>`scale(${a.value.options.flipHorizontally?-1:1}, ${a.value.options.flipVertically?-1:1})`),U=F(()=>`rotate(${a.value.options.rotationAngle??0}deg)`),A=F(()=>`${L.value} ${U.value}`),B=F(()=>{var n;return c.value===void 0?"Unknown.":((n=r.getStreamData(c.value))==null?void 0:n.webRtcManager.signallerStatus)??"Unknown."}),E=F(()=>{var e;if(c.value===void 0)return"Unknown.";const n=r.availableIceIps;return!n.isEmpty()&&!n.find(l=>r.allowedIceIps.includes(l))?`Stream is coming from IPs [${n.join(", ")}], which are not in the list of allowed sources
      [${r.allowedIceIps.join(", ")}].\\n Please check your configuration.`:((e=r.getStreamData(c.value))==null?void 0:e.webRtcManager.streamStatus)??"Unknown."});return(n,e)=>(p(),f(K,null,[i("div",Ae,[o(a).options.statsForNerds?(p(),Ne(Le,{key:0,"stream-name":c.value},null,8,["stream-name"])):Fe("",!0),s.value===void 0?(p(),f("div",Be,e[8]||(e[8]=[i("span",null,"No video stream selected.",-1)]))):!o(u).isEmpty()&&!o(u).includes(s.value)?(p(),f("div",Ee,[i("p",null,'The selected stream "'+z(s.value)+'" is not available.',1),i("p",null,"Available ones are: "+z(o(u).map(l=>`"${l}"`).join(", "))+".",1),e[9]||(e[9]=i("br",null,null,-1)),e[10]||(e[10]=i("p",null," This can happen if you changed vehicles and the stream name in the new one is different from the former, or if the source is not available at all. ",-1)),e[11]||(e[11]=i("br",null,null,-1)),e[12]||(e[12]=i("p",null," Please open this video player configuration and select a new stream from the ones available, or check your source for issues. ",-1))])):y.value?(p(),f("div",Oe,e[17]||(e[17]=[i("p",null,"Loading stream...",-1)]))):(p(),f("div",je,[i("div",He,[i("p",null,[e[14]||(e[14]=i("span",{class:"text-xl font-bold"},"Server status: ",-1)),(p(!0),f(K,null,ae(B.value.toString().split("\\n"),(l,S)=>(p(),f("span",{key:S},[I(z(l)+" ",1),e[13]||(e[13]=i("br",null,null,-1))]))),128))]),i("p",null,[e[16]||(e[16]=i("span",{class:"text-xl font-bold"},"Stream status: ",-1)),(p(!0),f(K,null,ae(E.value.toString().split("\\n"),(l,S)=>(p(),f("span",{key:S},[I(z(l)+" ",1),e[15]||(e[15]=i("br",null,null,-1))]))),128))])])])),i("video",{id:"mainDisplayStream",ref_key:"videoElement",ref:V,muted:"",autoplay:"",playsinline:"",disablePictureInPicture:""}," Your browser does not support the video tag. ",512)],512),m($e,{modelValue:o(P).widgetManagerVars(o(a).hash).configMenuOpen,"onUpdate:modelValue":e[7]||(e[7]=l=>o(P).widgetManagerVars(o(a).hash).configMenuOpen=l),width:"auto"},{default:x(()=>[m(Ie,{class:"pa-4 text-white",style:Ce([{"border-radius":"15px"},o(W).globalGlassMenuStyles])},{default:x(()=>[m(Pe,{class:"text-center"},{default:x(()=>e[18]||(e[18]=[I("Video widget config")])),_:1}),m(Re,{class:"flex flex-col gap-y-4"},{default:x(()=>[m(le,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),label:"Stream name",class:"my-3",items:o(u),"item-title":"name",density:"compact",variant:"outlined","no-data-text":"No streams available.","hide-details":"","return-object":""},null,8,["modelValue","items"]),m(le,{modelValue:o(a).options.videoFitStyle,"onUpdate:modelValue":e[1]||(e[1]=l=>o(a).options.videoFitStyle=l),label:"Fit style",class:"my-3",items:["cover","fill","contain"],"item-title":"style",density:"compact",variant:"outlined","no-data-text":"No streams available.","hide-details":"","return-object":""},null,8,["modelValue"]),m(Ue,null,{default:x(()=>[I('Saved stream name: "'+z(o(a).options.internalStreamName)+'"',1)]),_:1}),m(Q,{modelValue:o(a).options.flipHorizontally,"onUpdate:modelValue":e[2]||(e[2]=l=>o(a).options.flipHorizontally=l),class:"my-1",label:"Flip horizontally",color:o(a).options.flipHorizontally?"white":void 0,"hide-details":""},null,8,["modelValue","color"]),m(Q,{modelValue:o(a).options.flipVertically,"onUpdate:modelValue":e[3]||(e[3]=l=>o(a).options.flipVertically=l),class:"my-1",label:"Flip vertically",color:o(a).options.flipVertically?"white":void 0,"hide-details":""},null,8,["modelValue","color"]),m(Q,{modelValue:o(a).options.statsForNerds,"onUpdate:modelValue":e[4]||(e[4]=l=>o(a).options.statsForNerds=l),class:"my-1",label:"Stats for nerds",color:o(a).options.statsForNerds?"white":void 0,"hide-details":""},null,8,["modelValue","color"]),i("div",We,[m(ne,{"prepend-icon":"mdi-file-rotate-left",variant:"outlined",onClick:e[5]||(e[5]=l=>R(-90))},{default:x(()=>e[19]||(e[19]=[I(" Rotate Left")])),_:1}),m(ne,{"prepend-icon":"mdi-file-rotate-right",variant:"outlined",onClick:e[6]||(e[6]=l=>R(90))},{default:x(()=>e[20]||(e[20]=[I(" Rotate Right")])),_:1})])]),_:1})]),_:1},8,["style"])]),_:1},8,["modelValue"])],64))}}),Ge=ie(qe,[["__scopeId","data-v-f57695a6"]]);export{Ge as default};
