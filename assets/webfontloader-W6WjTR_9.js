import{g as Ft}from"./index-Cfe-5QXR.js";function Pt(w,S){for(var _=0;_<S.length;_++){const l=S[_];if(typeof l!="string"&&!Array.isArray(l)){for(const d in l)if(d!=="default"&&!(d in w)){const T=Object.getOwnPropertyDescriptor(l,d);T&&Object.defineProperty(w,d,T.get?T:{enumerable:!0,get:()=>l[d]})}}}return Object.freeze(Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}))}var at={exports:{}};(function(w){(function(){function S(t,n,i){return t.call.apply(t.bind,arguments)}function _(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var o=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(o,e),t.apply(n,o)}}return function(){return t.apply(n,arguments)}}function l(t,n,i){return l=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:_,l.apply(null,arguments)}var d=Date.now||function(){return+new Date};function T(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var ut=!!window.FontFace;function F(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&(o=="style"?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function B(t,n,i){t=t.c.getElementsByTagName(n)[0],t||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function y(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var s=!1,r=0;r<e.length;r+=1)if(n[o]===e[r]){s=!0;break}s||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(s=!1,r=0;r<i.length;r+=1)if(e[o]===i[r]){s=!0;break}s||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function D(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function ct(t){return t.o.location.hostname||t.a.location.hostname}function L(t,n,i){function e(){a&&o&&s&&(a(r),a=null)}n=F(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,s=!0,r=null,a=i||null;ut?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,r=Error("Stylesheet failed to load"),e()}):setTimeout(function(){o=!0,e()},0),B(t,"head",n)}function P(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var s=F(t,"script",{src:n}),r=!1;return s.onload=s.onreadystatechange=function(){r||this.readyState&&this.readyState!="loaded"&&this.readyState!="complete"||(r=!0,i&&i(null),s.onload=s.onreadystatechange=null,s.parentNode.tagName=="HEAD"&&o.removeChild(s))},o.appendChild(s),setTimeout(function(){r||(r=!0,i&&i(Error("Script load timeout")))},e||5e3),s}return null}function $(){this.a=0,this.c=null}function q(t){return t.a++,function(){t.a--,H(t)}}function z(t,n){t.c=n,H(t)}function H(t){t.a==0&&t.c&&(t.c(),t.c=null)}function M(t){this.a=t||"-"}M.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)};function g(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function lt(t){return K(t)+" "+(t.f+"00")+" 300px "+G(t.c)}function G(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");e.indexOf(" ")!=-1||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function p(t){return t.a+t.f}function K(t){var n="normal";return t.a==="o"?n="oblique":t.a==="i"&&(n="italic"),n}function ht(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function pt(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new M("-"),this.j=n.events!==!1,this.g=n.classes!==!1}function gt(t){t.g&&y(t.f,[t.a.c("wf","loading")]),j(t,"loading")}function R(t){if(t.g){var n=D(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),y(t.f,i,e)}j(t,"inactive")}function j(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,p(i)):t.h[n]())}function vt(){this.c={}}function dt(t,n,i){var e=[],o;for(o in n)if(n.hasOwnProperty(o)){var s=t.c[o];s&&e.push(s(n[o],i))}return e}function A(t,n){this.c=t,this.f=n,this.a=F(this.c,"span",{"aria-hidden":"true"},this.f)}function C(t){B(t.c,"body",t.a)}function b(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+G(t.c)+";"+("font-style:"+K(t)+";font-weight:"+(t.f+"00")+";")}function U(t,n,i,e,o,s){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=s||void 0}U.prototype.start=function(){var t=this.c.o.document,n=this,i=d(),e=new Promise(function(r,a){function f(){d()-i>=n.f?a():t.fonts.load(lt(n.a),n.h).then(function(u){1<=u.length?r():setTimeout(f,25)},function(){a()})}f()}),o=null,s=new Promise(function(r,a){o=setTimeout(a,n.f)});Promise.race([s,e]).then(function(){o&&(clearTimeout(o),o=null),n.g(n.a)},function(){n.j(n.a)})};function V(t,n,i,e,o,s,r){this.v=t,this.B=n,this.c=i,this.a=e,this.s=r||"BESbswy",this.f={},this.w=o||3e3,this.u=s||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),t=new g(this.a.c+",serif",p(this.a)),t=b(t),this.g.a.style.cssText=t,t=new g(this.a.c+",sans-serif",p(this.a)),t=b(t),this.h.a.style.cssText=t,t=new g("serif",p(this.a)),t=b(t),this.j.a.style.cssText=t,t=new g("sans-serif",p(this.a)),t=b(t),this.m.a.style.cssText=t,C(this.g),C(this.h),C(this.j),C(this.m)}var N={D:"serif",C:"sans-serif"},W=null;function X(){if(W===null){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);W=!!t&&(536>parseInt(t[1],10)||parseInt(t[1],10)===536&&11>=parseInt(t[2],10))}return W}V.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=d(),Q(this)};function J(t,n,i){for(var e in N)if(N.hasOwnProperty(e)&&n===t.f[N[e]]&&i===t.f[N[e]])return!0;return!1}function Q(t){var n=t.g.a.offsetWidth,i=t.h.a.offsetWidth,e;(e=n===t.f.serif&&i===t.f["sans-serif"])||(e=X()&&J(t,n,i)),e?d()-t.A>=t.w?X()&&J(t,n,i)&&(t.u===null||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):mt(t):I(t,t.v)}function mt(t){setTimeout(l(function(){Q(this)},t),50)}function I(t,n){setTimeout(l(function(){E(this.g.a),E(this.h.a),E(this.j.a),E(this.m.a),n(this.a)},t),0)}function k(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}var O=null;k.prototype.g=function(t){var n=this.a;n.g&&y(n.f,[n.a.c("wf",t.c,p(t).toString(),"active")],[n.a.c("wf",t.c,p(t).toString(),"loading"),n.a.c("wf",t.c,p(t).toString(),"inactive")]),j(n,"fontactive",t),this.m=!0,Y(this)},k.prototype.h=function(t){var n=this.a;if(n.g){var i=D(n.f,n.a.c("wf",t.c,p(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,p(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,p(t).toString(),"inactive")),y(n.f,e,o)}j(n,"fontinactive",t),Y(this)};function Y(t){--t.f==0&&t.j&&(t.m?(t=t.a,t.g&&y(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),j(t,"active")):R(t.a))}function Z(t){this.j=t,this.a=new vt,this.h=0,this.f=this.g=!0}Z.prototype.load=function(t){this.c=new T(this.j,t.context||this.j),this.g=t.events!==!1,this.f=t.classes!==!1,yt(this,new pt(this.c,t),t)};function wt(t,n,i,e,o){var s=--t.h==0;(t.f||t.g)&&setTimeout(function(){var r=o||null,a=e||null||{};if(i.length===0&&s)R(n.a);else{n.f+=i.length,s&&(n.j=s);var f,u=[];for(f=0;f<i.length;f++){var c=i[f],h=a[c.c],v=n.a,x=c;if(v.g&&y(v.f,[v.a.c("wf",x.c,p(x).toString(),"loading")]),j(v,"fontloading",x),v=null,O===null)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),Ot=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);O=x?42<parseInt(x[1],10):!Ot}else O=!1;O?v=new U(l(n.g,n),l(n.h,n),n.c,c,n.s,h):v=new V(l(n.g,n),l(n.h,n),n.c,c,n.s,r,h),u.push(v)}for(f=0;f<u.length;f++)u[f].start()}},0)}function yt(t,n,i){var o=[],e=i.timeout;gt(n);var o=dt(t.a,i,t.c),s=new k(t.c,n,e);for(t.h=o.length,n=0,i=o.length;n<i;n++)o[n].load(function(r,a,f){wt(t,s,r,a,f)})}function tt(t,n){this.c=t,this.a=n}tt.prototype.load=function(t){function n(){if(s["__mti_fntLst"+e]){var r=s["__mti_fntLst"+e](),a=[],f;if(r)for(var u=0;u<r.length;u++){var c=r[u].fontfamily;r[u].fontStyle!=null&&r[u].fontWeight!=null?(f=r[u].fontStyle+r[u].fontWeight,a.push(new g(c,f))):a.push(new g(c))}t(a)}else setTimeout(function(){n()},50)}var i=this,e=i.a.projectId,o=i.a.version;if(e){var s=i.c.o;P(this.c,(i.a.api||"https://fast.fonts.net/jsapi")+"/"+e+".js"+(o?"?v="+o:""),function(r){r?t([]):(s["__MonotypeConfiguration__"+e]=function(){return i.a},n())}).id="__MonotypeAPIScript__"+e}else t([])};function nt(t,n){this.c=t,this.a=n}nt.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],s=this.a.testStrings||{},r=new $;for(n=0,i=e.length;n<i;n++)L(this.c,e[n],q(r));var a=[];for(n=0,i=o.length;n<i;n++)if(e=o[n].split(":"),e[1])for(var f=e[1].split(","),u=0;u<f.length;u+=1)a.push(new g(e[0],f[u]));else a.push(new g(e[0]));z(r,function(){t(a,s)})};function jt(t,n){t?this.c=t:this.c=xt,this.a=[],this.f=[],this.g=n||""}var xt="https://fonts.googleapis.com/css";function _t(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");o.length==3&&t.f.push(o.pop());var s="";o.length==2&&o[1]!=""&&(s=":"),t.a.push(o.join(s))}}function Tt(t){if(t.a.length==0)throw Error("No fonts to load!");if(t.c.indexOf("kit=")!=-1)return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}function St(t){this.f=t,this.a=[],this.c={}}var et={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Et={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},At={i:"i",italic:"i",n:"n",normal:"n"},Ct=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function bt(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),s=["n4"];if(2<=e.length){var r,a=e[1];if(r=[],a)for(var a=a.split(","),f=a.length,u=0;u<f;u++){var c;if(c=a[u],c.match(/^[\w-]+$/)){var h=Ct.exec(c.toLowerCase());if(h==null)c="";else{if(c=h[2],c=c==null||c==""?"n":At[c],h=h[1],h==null||h=="")h="4";else var v=Et[h],h=v||(isNaN(h)?"4":h.substr(0,1));c=[c,h].join("")}}else c="";c&&r.push(c)}0<r.length&&(s=r),e.length==3&&(e=e[2],r=[],e=e?e.split(","):r,0<e.length&&(e=et[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=et[o])&&(t.c[o]=e),e=0;e<s.length;e+=1)t.a.push(new g(o,s[e]))}}function it(t,n){this.c=t,this.a=n}var Nt={Arimo:!0,Cousine:!0,Tinos:!0};it.prototype.load=function(t){var n=new $,i=this.c,e=new jt(this.a.api,this.a.text),o=this.a.families;_t(e,o);var s=new St(o);bt(s),L(i,Tt(e),q(n)),z(n,function(){t(s.a,s.c,Nt)})};function ot(t,n){this.c=t,this.a=n}ot.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?P(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(e){if(e)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){e=i.Typekit.config.fn;for(var o=[],s=0;s<e.length;s+=2)for(var r=e[s],a=e[s+1],f=0;f<a.length;f++)o.push(new g(r,a[f]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch{}t(o)}},2e3):t([])};function st(t,n){this.c=t,this.f=n,this.a=[]}st.prototype.load=function(t){var n=this.f.id,i=this.c.o,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(o,s){for(var r=0,a=s.fonts.length;r<a;++r){var f=s.fonts[r];e.a.push(new g(f.name,ht("font-weight:"+f.weight+";font-style:"+f.style)))}t(e.a)},P(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ct(this.c)+"/"+n+".js",function(o){o&&t([])})):t([])};var m=new Z(window);m.a.c.custom=function(t,n){return new nt(n,t)},m.a.c.fontdeck=function(t,n){return new st(n,t)},m.a.c.monotype=function(t,n){return new tt(n,t)},m.a.c.typekit=function(t,n){return new ot(n,t)},m.a.c.google=function(t,n){return new it(n,t)};var rt={load:l(m.load,m)};w.exports?w.exports=rt:(window.WebFont=rt,window.WebFontConfig&&m.load(window.WebFontConfig))})()})(at);var ft=at.exports;const Wt=Ft(ft),kt=Pt({__proto__:null,default:Wt},[ft]);export{kt as w};
