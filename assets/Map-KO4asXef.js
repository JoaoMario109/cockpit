import{bx as Ee,by as Ae,bz as ze,bA as Z,f as Ne,bB as Me,bC as $e,bD as Pe,c as Fe,a_ as Be,J as Ue,K as _e,a7 as Re,u as Xe,aj as We,r as v,k as A,M as we,Y as ke,L as Ye,bE as r,j as Ge,w as h,o as Ze,bF as b,ad as qe,bG as je,aE as Ke,bH as Je,bI as xe,aB as Qe,y as ea,l as E,m as le,n as P,G as Te,T as Ce,I as F,v as se,q as i,ar as D,a5 as q,s as L,O as j,H as B,N as K,V as aa,P as ta,Q as oa,R as na,a4 as la,W as sa,bJ as ra,F as ia,z as ua,B as ca,E as da,bK as re}from"./index-Cfe-5QXR.js";function Se(m,y){if(m==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var l in y)Object.prototype.hasOwnProperty.call(y,l)&&(m[l]=y[l]);return m}function va(m){return Se({},m)}var Ie=1440,ma=2520,ie=43200,fa=86400;function pa(m,y,l){var z,N;Ee(2,arguments);var u=Pe(),n=(z=(N=l==null?void 0:l.locale)!==null&&N!==void 0?N:u.locale)!==null&&z!==void 0?z:Ae;if(!n.formatDistance)throw new RangeError("locale must contain formatDistance property");var t=ze(m,y);if(isNaN(t))throw new RangeError("Invalid time value");var s=Se(va(l),{addSuffix:!!(l!=null&&l.addSuffix),comparison:t}),f,d;t>0?(f=Z(y),d=Z(m)):(f=Z(m),d=Z(y));var x=Ne(d,f),T=(Me(d)-Me(f))/1e3,c=Math.round((x-T)/60),C;if(c<2)return l!=null&&l.includeSeconds?x<5?n.formatDistance("lessThanXSeconds",5,s):x<10?n.formatDistance("lessThanXSeconds",10,s):x<20?n.formatDistance("lessThanXSeconds",20,s):x<40?n.formatDistance("halfAMinute",0,s):x<60?n.formatDistance("lessThanXMinutes",1,s):n.formatDistance("xMinutes",1,s):c===0?n.formatDistance("lessThanXMinutes",1,s):n.formatDistance("xMinutes",c,s);if(c<45)return n.formatDistance("xMinutes",c,s);if(c<90)return n.formatDistance("aboutXHours",1,s);if(c<Ie){var U=Math.round(c/60);return n.formatDistance("aboutXHours",U,s)}else{if(c<ma)return n.formatDistance("xDays",1,s);if(c<ie){var _=Math.round(c/Ie);return n.formatDistance("xDays",_,s)}else if(c<fa)return C=Math.round(c/ie),n.formatDistance("aboutXMonths",C,s)}if(C=$e(d,f),C<12){var J=Math.round(c/ie);return n.formatDistance("xMonths",J,s)}else{var R=C%12,H=Math.floor(C/12);return R<3?n.formatDistance("aboutXYears",H,s):R<9?n.formatDistance("overXYears",H,s):n.formatDistance("almostXYears",H+1,s)}}function ga(m,y){return Ee(1,arguments),pa(m,Date.now(),y)}const ha=""+new URL("blueboat-marker-DyHmCFOq.png",import.meta.url).href,ba=""+new URL("brov2-marker-CBzp11FX.png",import.meta.url).href,ya=""+new URL("generic-vehicle-marker-SovxT5Tc.png",import.meta.url).href,Ma=["id"],ka=Fe({__name:"Map",props:{widget:{}},setup(m){var ye;Be(e=>({eeffcec6:He.value}));const y=m,l=Ue(y).widget,z=_e(),{showDialog:N}=Re(),u=Xe(),n=We(),t=v(),s=v(n.defaultMapZoom),f=v(n.defaultMapCenter),d=v(),x=A(()=>`map-${l.value.hash}`),T=v(!1);we.registerUsage(ke.latitude),we.registerUsage(ke.longitude),Ye(()=>{Object.keys(l.value.options).length===0&&(l.value.options={showVehiclePath:!0}),p.enableAutoUpdate()});const c=r.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap"}),C=r.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:19,attribution:"© Esri World Imagery"}),U=r.tileLayer("https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png",{maxZoom:18,attribution:"© OpenSeaMap contributors"}),_=r.tileLayer.wms("https://geoserver.openseamap.org/geoserver/gwc/service/wms",{layers:"gebco2021:gebco_2021",format:"image/png",transparent:!0,version:"1.1.1",attribution:"© GEBCO, OpenSeaMap",tileSize:256,maxZoom:19}),J={OpenStreetMap:c,"Esri World Imagery":C},R={Seamarks:U,"Marine Profile":_},H=v(),ue=Ge(H),ce=r.control.zoom({position:"bottomright"}),de=r.control.layers(J,R);h(T,()=>{t.value!==void 0&&(T.value?(t.value.addControl(ce),t.value.addControl(de)):(t.value.removeControl(ce),t.value.removeControl(de)))}),h(ue,()=>{T.value=ue.value}),Ze(async()=>{t.value=r.map(x.value,{layers:[c,C,U,_],attributionControl:!1}).setView(f.value,s.value),t.value.removeControl(t.value.zoomControl),t.value.on("moveend",()=>{if(t.value===void 0)return;let{lat:e,lng:a}=t.value.getCenter();e&&a&&(f.value=[e,a])}),t.value.on("zoomend",()=>{var e;t.value!==void 0&&(s.value=((e=t.value)==null?void 0:e.getZoom())??f.value)}),t.value.on("click",()=>{t.value!==void 0&&t.value.on("click",fe)}),t.value.on("contextmenu",()=>{ge()}),p.enableAutoUpdate(),window.addEventListener("keydown",he),g.value?p.goToTarget(b.VEHICLE):p.goToTarget(b.HOME)}),qe(()=>{p.disableAutoUpdate(),window.removeEventListener("keydown",he),t.value&&(t.value.off("click",fe),t.value.off("contextmenu"))}),h(f,(e,a)=>{var o,M,k;e.toString()!==a.toString()&&((o=t.value)==null||o.panTo(e),(k=(M=S.value)==null?void 0:M.getTooltip())==null||k.setContent(`Home: ${e[0].toFixed(6)}, ${e[1].toFixed(6)}`))}),h(t,(e,a)=>{t.value!==void 0&&(e==null?void 0:e.options)===void 0&&(t.value=a)}),h(s,(e,a)=>{var o;e!==a&&((o=t.value)==null||o.setZoom(s.value))}),h(y.widget,()=>{var e;(e=t.value)==null||e.invalidateSize()});const X=v(void 0),p=new je(e=>X.value=e,e=>f.value=e);p.setTrackableTarget(b.VEHICLE,()=>g.value),p.setTrackableTarget(b.HOME,()=>d.value);const g=A(()=>u.coordinates.latitude?[u.coordinates.latitude,u.coordinates.longitude]:void 0),Q=A(()=>{var e;return u.attitude.yaw?Ke((e=u.attitude)==null?void 0:e.yaw):0}),ve=A(()=>{const e=u.lastHeartbeat;return e?`${ga(e??0,{includeSeconds:!0})} ago`:"never"}),{history:Ve}=Je(g);(ye=navigator==null?void 0:navigator.geolocation)==null||ye.watchPosition(e=>d.value=[e.coords.latitude,e.coords.longitude],e=>console.error(`Failed to get position: (${e.code}) ${e.message}`),{enableHighAccuracy:!1,timeout:5e3,maximumAge:0});let me=!0;h([d,t],async()=>{d.value===f.value||!t.value||!me||(p.goToTarget(b.HOME),me=!1)});const I=v();h(u.coordinates,()=>{if(!(!t.value||!g.value)){if(I.value===void 0){let e=ya;u.vehicleType===xe.MAV_TYPE_SURFACE_BOAT?e=ha:u.vehicleType===xe.MAV_TYPE_SUBMARINE&&(e=ba);const a=r.divIcon({className:"vehicle-marker",html:`<img src="${e}" style="width: 64px; height: 64px;">`,iconSize:[64,64],iconAnchor:[32,32]});I.value=r.marker(g.value,{icon:a});const o=r.tooltip({content:"No data available",className:"waypoint-tooltip",offset:[40,0]});I.value.bindTooltip(o),t.value.addLayer(I.value)}I.value.setLatLng(g.value)}}),h(g,(e,a)=>{X.value===b.VEHICLE||a!==void 0||p.follow(b.VEHICLE)}),h([g,Q,ve,()=>u.isArmed],()=>{var a,o,M,k,w;if(I.value===void 0)return;(k=I.value.getTooltip())==null||k.setContent(`
    <p>Coordinates: ${(a=g.value)==null?void 0:a[0].toFixed(6)}, ${(o=g.value)==null?void 0:o[1].toFixed(6)}</p>
    <p>Velocity: ${((M=u.velocity.ground)==null?void 0:M.toFixed(2))??"N/A"} m/s</p>
    <p>Heading: ${Q.value.toFixed(2)}°</p>
    <p>${u.isArmed?"Armed":"Disarmed"}</p>
    <p>Last seen: ${ve.value}</p>
  `);const e=(w=I.value.getElement())==null?void 0:w.querySelector("img");e&&(e.style.transform=`rotate(${Q.value}deg)`)});const S=v();h(d,()=>{if(t.value===void 0)return;const e=d.value;if(e!==void 0){if(S.value===void 0){S.value=r.marker(e);const a=r.divIcon({className:"marker-icon",iconSize:[32,32],iconAnchor:[16,16],html:"H"});S.value.setIcon(a);const o=r.tooltip({content:"No data available",className:"waypoint-tooltip"});S.value.bindTooltip(o),t.value.addLayer(S.value)}S.value.setLatLng(d.value)}});const ee=v();h(n.currentPlanningWaypoints,e=>{if(t.value!==void 0){if(ee.value===void 0){const a=e.map(o=>o.coordinates);ee.value=r.polyline(a,{color:"#358AC3"}).addTo(t.value)}ee.value.setLatLngs(e.map(a=>a.coordinates)),e.forEach((a,o)=>{var w;const M=r.marker(a.coordinates),k=r.divIcon({className:"marker-icon",iconSize:[32,32],iconAnchor:[16,16],html:`${o}`});M.setIcon(k),(w=t.value)==null||w.addLayer(M)})}});const ae=v();h(Ve,e=>{if(t.value===void 0||e===void 0)return;ae.value===void 0&&(ae.value=r.polyline([],{color:"#ffff00"}).addTo(t.value));const a=e.filter(o=>o.snapshot!==void 0).map(o=>o.snapshot);ae.value.setLatLngs(a)});const W=v(!1),O=v(null),Y=Qe({top:"0px",left:"0px"}),V=v(),fe=e=>{var a,o,M,k;if(V.value!==void 0&&t.value!==void 0&&((a=V.value)==null||a.removeFrom(t.value)),((o=e==null?void 0:e.latlng)==null?void 0:o.lat)!=null&&((M=e==null?void 0:e.latlng)==null?void 0:M.lng)!=null){O.value=[e.latlng.lat,e.latlng.lng],W.value=!0;const w=(k=t.value)==null?void 0:k.getContainer();if(w){const{x:oe,y:ne}=w.getBoundingClientRect();Y.left=`${e.originalEvent.clientX-oe}px`,Y.top=`${e.originalEvent.clientY-ne}px`}}else console.error("Invalid event structure:",e);if(t.value!==void 0){V.value=r.marker(O.value);const w=r.divIcon({className:"marker-icon",iconSize:[32,32],iconAnchor:[16,16]});V.value.setIcon(w),t.value.addLayer(V.value)}},pe=e=>{switch(e){case"goto":if(O.value){const w=u.coordinates.altitude??0,oe=O.value[0],ne=O.value[1];ua(async()=>{try{await u.goTo(0,0,0,0,oe,ne,w)}catch(Oe){re({message:Oe,variant:"error"})}},{command:"GoTo"},ca(da.GOTO))}break;case"set-default-map-position":n.setDefaultMapPosition(f.value,s.value);break;default:console.warn("Unknown menu option selected:",e)}W.value=!1},ge=()=>{W.value=!1,O.value=null,t.value!==void 0&&V.value!==void 0&&t.value.removeLayer(V.value)},he=e=>{e.key==="Escape"&&ge()},G=v(!1),te=v(0),De=async()=>{for(G.value=!0,te.value=0;n.currentPlanningWaypoints.length>0;)n.currentPlanningWaypoints.pop();const e=async a=>{te.value=a};try{(await u.fetchMission(e)).forEach(o=>{n.currentPlanningWaypoints.push(o)}),re({variant:"success",message:"Mission download succeed!",duration:3e3})}catch(a){N({variant:"error",title:"Mission download failed",message:a,timer:5e3})}finally{G.value=!1}},Le=async()=>{try{await u.startMission()}catch{re({message:"Failed to start mission.",variant:"error"})}},$=ea(),He=A(()=>`${Math.max(-$.widgetClearanceForVisibleArea(l.value).bottom,0)}px`),be=A(()=>`${Math.max(-$.widgetClearanceForVisibleArea(l.value).top,0)}px`);return(e,a)=>(E(),le(ia,null,[P("div",{ref_key:"mapBase",ref:H,class:se(["page-base",i($).editingMode?"pointer-events-none":"pointer-events-auto"])},[P("div",{id:x.value,ref_key:"map",ref:t,class:"map"},[T.value?Te((E(),F(q,{key:0,class:se(["absolute left-0 m-3 bottom-button bg-slate-50",d.value?"":"active-events-on-disabled"]),color:X.value==i(b).HOME?"red":"",elevation:"2",style:{"z-index":"1002","border-radius":"0px"},icon:"mdi-home-map-marker",size:"x-small",disabled:!d.value,onClick:a[0]||(a[0]=D(o=>i(p).goToTarget(i(b).HOME,!0),["stop"])),onDblclick:a[1]||(a[1]=D(o=>i(p).follow(i(b).HOME),["stop"]))},null,8,["class","color","disabled"])),[[Ce,d.value?"Center map on home position.":"Home position is currently undefined."]]):L("",!0),T.value?Te((E(),F(q,{key:1,class:se(["absolute m-3 bottom-button left-10 bg-slate-50",g.value?"":"active-events-on-disabled"]),color:X.value==i(b).VEHICLE?"red":"",elevation:"2",style:{"z-index":"1002","border-radius":"0px"},icon:"mdi-airplane-marker",size:"x-small",disabled:!g.value,onClick:a[2]||(a[2]=D(o=>i(p).goToTarget(i(b).VEHICLE,!0),["stop"])),onDblclick:a[3]||(a[3]=D(o=>i(p).follow(i(b).VEHICLE),["stop"]))},null,8,["class","color","disabled"])),[[Ce,g.value?"Center map on vehicle position.":"Vehicle position is currently undefined."]]):L("",!0),T.value?(E(),F(q,{key:2,class:"absolute m-3 bottom-button left-20 bg-slate-50",elevation:"2",style:{"z-index":"1002","border-radius":"0px"},icon:"mdi-download",size:"x-small",onClick:D(De,["stop"])})):L("",!0),T.value?(E(),F(q,{key:3,class:"absolute mb-3 ml-1 bottom-button left-32 bg-slate-50",elevation:"2",style:{"z-index":"1002","border-radius":"0px"},icon:"mdi-play",size:"x-small",onClick:D(Le,["stop"])})):L("",!0)],8,Ma)],2),W.value?(E(),le("div",{key:0,class:"context-menu",style:j({top:Y.top,left:Y.left})},[P("ul",{onClick:a[6]||(a[6]=D(()=>{},["stop"]))},[P("li",{onClick:a[4]||(a[4]=o=>pe("goto"))},"GoTo"),P("li",{onClick:a[5]||(a[5]=o=>pe("set-default-map-position"))},"Set default map position")])],4)):L("",!0),B(sa,{modelValue:i($).widgetManagerVars(i(l).hash).configMenuOpen,"onUpdate:modelValue":a[8]||(a[8]=o=>i($).widgetManagerVars(i(l).hash).configMenuOpen=o),width:"auto"},{default:K(()=>[B(aa,{class:"pa-2",style:j(i(z).globalGlassMenuStyles)},{default:K(()=>[B(ta,{class:"text-center"},{default:K(()=>a[9]||(a[9]=[oa("Map widget settings")])),_:1}),B(na,null,{default:K(()=>[B(la,{modelValue:i(l).options.showVehiclePath,"onUpdate:modelValue":a[7]||(a[7]=o=>i(l).options.showVehiclePath=o),class:"my-1",label:"Show vehicle path",color:i(l).options.showVehiclePath?"white":void 0,"hide-details":""},null,8,["modelValue","color"])]),_:1})]),_:1},8,["style"])]),_:1},8,["modelValue"]),G.value?(E(),F(ra,{key:1,"model-value":te.value,height:"10",absolute:"",bottom:"",color:"white",style:j(`top: ${be.value}`)},null,8,["model-value","style"])):L("",!0),G.value?(E(),le("p",{key:2,style:j({top:be.value}),class:"absolute left-[7px] mt-4 flex text-md font-bold text-white z-30 drop-shadow-md"}," Loading mission... ",4)):L("",!0)],64))}});export{ka as default};
