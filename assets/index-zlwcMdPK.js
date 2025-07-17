(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();var vh={exports:{}},Wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function iS(){if(F_)return Wo;F_=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:c,type:a,key:u,ref:r!==void 0?r:null,props:l}}return Wo.Fragment=t,Wo.jsx=n,Wo.jsxs=n,Wo}var H_;function aS(){return H_||(H_=1,vh.exports=iS()),vh.exports}var lu=aS(),yh={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function sS(){if(G_)return le;G_=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function x(z,J,st){this.props=z,this.context=J,this.refs=b,this.updater=st||S}x.prototype.isReactComponent={},x.prototype.setState=function(z,J){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,J,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function y(){}y.prototype=x.prototype;function T(z,J,st){this.props=z,this.context=J,this.refs=b,this.updater=st||S}var U=T.prototype=new y;U.constructor=T,M(U,x.prototype),U.isPureReactComponent=!0;var A=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function I(z,J,st,xt,tt,gt){return st=gt.ref,{$$typeof:c,type:z,key:J,ref:st!==void 0?st:null,props:gt}}function k(z,J){return I(z.type,J,void 0,void 0,void 0,z.props)}function N(z){return typeof z=="object"&&z!==null&&z.$$typeof===c}function w(z){var J={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(st){return J[st]})}var H=/\/+/g;function nt(z,J){return typeof z=="object"&&z!==null&&z.key!=null?w(""+z.key):J.toString(36)}function V(){}function K(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(V,V):(z.status="pending",z.then(function(J){z.status==="pending"&&(z.status="fulfilled",z.value=J)},function(J){z.status==="pending"&&(z.status="rejected",z.reason=J)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function Y(z,J,st,xt,tt){var gt=typeof z;(gt==="undefined"||gt==="boolean")&&(z=null);var Mt=!1;if(z===null)Mt=!0;else switch(gt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(z.$$typeof){case c:case t:Mt=!0;break;case g:return Mt=z._init,Y(Mt(z._payload),J,st,xt,tt)}}if(Mt)return tt=tt(z),Mt=xt===""?"."+nt(z,0):xt,A(tt)?(st="",Mt!=null&&(st=Mt.replace(H,"$&/")+"/"),Y(tt,J,st,"",function(ue){return ue})):tt!=null&&(N(tt)&&(tt=k(tt,st+(tt.key==null||z&&z.key===tt.key?"":(""+tt.key).replace(H,"$&/")+"/")+Mt)),J.push(tt)),1;Mt=0;var wt=xt===""?".":xt+":";if(A(z))for(var Ct=0;Ct<z.length;Ct++)xt=z[Ct],gt=wt+nt(xt,Ct),Mt+=Y(xt,J,st,gt,tt);else if(Ct=_(z),typeof Ct=="function")for(z=Ct.call(z),Ct=0;!(xt=z.next()).done;)xt=xt.value,gt=wt+nt(xt,Ct++),Mt+=Y(xt,J,st,gt,tt);else if(gt==="object"){if(typeof z.then=="function")return Y(K(z),J,st,xt,tt);throw J=String(z),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function O(z,J,st){if(z==null)return z;var xt=[],tt=0;return Y(z,xt,"","",function(gt){return J.call(st,gt,tt++)}),xt}function Z(z){if(z._status===-1){var J=z._result;J=J(),J.then(function(st){(z._status===0||z._status===-1)&&(z._status=1,z._result=st)},function(st){(z._status===0||z._status===-1)&&(z._status=2,z._result=st)}),z._status===-1&&(z._status=0,z._result=J)}if(z._status===1)return z._result.default;throw z._result}var q=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function ct(){}return le.Children={map:O,forEach:function(z,J,st){O(z,function(){J.apply(this,arguments)},st)},count:function(z){var J=0;return O(z,function(){J++}),J},toArray:function(z){return O(z,function(J){return J})||[]},only:function(z){if(!N(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},le.Component=x,le.Fragment=n,le.Profiler=r,le.PureComponent=T,le.StrictMode=a,le.Suspense=d,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,le.__COMPILER_RUNTIME={__proto__:null,c:function(z){return P.H.useMemoCache(z)}},le.cache=function(z){return function(){return z.apply(null,arguments)}},le.cloneElement=function(z,J,st){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var xt=M({},z.props),tt=z.key,gt=void 0;if(J!=null)for(Mt in J.ref!==void 0&&(gt=void 0),J.key!==void 0&&(tt=""+J.key),J)!B.call(J,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&J.ref===void 0||(xt[Mt]=J[Mt]);var Mt=arguments.length-2;if(Mt===1)xt.children=st;else if(1<Mt){for(var wt=Array(Mt),Ct=0;Ct<Mt;Ct++)wt[Ct]=arguments[Ct+2];xt.children=wt}return I(z.type,tt,void 0,void 0,gt,xt)},le.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},le.createElement=function(z,J,st){var xt,tt={},gt=null;if(J!=null)for(xt in J.key!==void 0&&(gt=""+J.key),J)B.call(J,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(tt[xt]=J[xt]);var Mt=arguments.length-2;if(Mt===1)tt.children=st;else if(1<Mt){for(var wt=Array(Mt),Ct=0;Ct<Mt;Ct++)wt[Ct]=arguments[Ct+2];tt.children=wt}if(z&&z.defaultProps)for(xt in Mt=z.defaultProps,Mt)tt[xt]===void 0&&(tt[xt]=Mt[xt]);return I(z,gt,void 0,void 0,null,tt)},le.createRef=function(){return{current:null}},le.forwardRef=function(z){return{$$typeof:f,render:z}},le.isValidElement=N,le.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:Z}},le.memo=function(z,J){return{$$typeof:p,type:z,compare:J===void 0?null:J}},le.startTransition=function(z){var J=P.T,st={};P.T=st;try{var xt=z(),tt=P.S;tt!==null&&tt(st,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(ct,q)}catch(gt){q(gt)}finally{P.T=J}},le.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},le.use=function(z){return P.H.use(z)},le.useActionState=function(z,J,st){return P.H.useActionState(z,J,st)},le.useCallback=function(z,J){return P.H.useCallback(z,J)},le.useContext=function(z){return P.H.useContext(z)},le.useDebugValue=function(){},le.useDeferredValue=function(z,J){return P.H.useDeferredValue(z,J)},le.useEffect=function(z,J,st){var xt=P.H;if(typeof st=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(z,J)},le.useId=function(){return P.H.useId()},le.useImperativeHandle=function(z,J,st){return P.H.useImperativeHandle(z,J,st)},le.useInsertionEffect=function(z,J){return P.H.useInsertionEffect(z,J)},le.useLayoutEffect=function(z,J){return P.H.useLayoutEffect(z,J)},le.useMemo=function(z,J){return P.H.useMemo(z,J)},le.useOptimistic=function(z,J){return P.H.useOptimistic(z,J)},le.useReducer=function(z,J,st){return P.H.useReducer(z,J,st)},le.useRef=function(z){return P.H.useRef(z)},le.useState=function(z){return P.H.useState(z)},le.useSyncExternalStore=function(z,J,st){return P.H.useSyncExternalStore(z,J,st)},le.useTransition=function(){return P.H.useTransition()},le.version="19.1.0",le}var V_;function Kd(){return V_||(V_=1,yh.exports=sS()),yh.exports}var tu=Kd(),xh={exports:{}},Yo={},Sh={exports:{}},Mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function rS(){return k_||(k_=1,function(c){function t(O,Z){var q=O.length;O.push(Z);t:for(;0<q;){var ct=q-1>>>1,z=O[ct];if(0<r(z,Z))O[ct]=Z,O[q]=z,q=ct;else break t}}function n(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var Z=O[0],q=O.pop();if(q!==Z){O[0]=q;t:for(var ct=0,z=O.length,J=z>>>1;ct<J;){var st=2*(ct+1)-1,xt=O[st],tt=st+1,gt=O[tt];if(0>r(xt,q))tt<z&&0>r(gt,xt)?(O[ct]=gt,O[tt]=q,ct=tt):(O[ct]=xt,O[st]=q,ct=st);else if(tt<z&&0>r(gt,q))O[ct]=gt,O[tt]=q,ct=tt;else break t}}return Z}function r(O,Z){var q=O.sortIndex-Z.sortIndex;return q!==0?q:O.id-Z.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;c.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();c.unstable_now=function(){return u.now()-f}}var d=[],p=[],g=1,v=null,_=3,S=!1,M=!1,b=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function A(O){for(var Z=n(p);Z!==null;){if(Z.callback===null)a(p);else if(Z.startTime<=O)a(p),Z.sortIndex=Z.expirationTime,t(d,Z);else break;Z=n(p)}}function P(O){if(b=!1,A(O),!M)if(n(d)!==null)M=!0,B||(B=!0,nt());else{var Z=n(p);Z!==null&&Y(P,Z.startTime-O)}}var B=!1,I=-1,k=5,N=-1;function w(){return x?!0:!(c.unstable_now()-N<k)}function H(){if(x=!1,B){var O=c.unstable_now();N=O;var Z=!0;try{t:{M=!1,b&&(b=!1,T(I),I=-1),S=!0;var q=_;try{e:{for(A(O),v=n(d);v!==null&&!(v.expirationTime>O&&w());){var ct=v.callback;if(typeof ct=="function"){v.callback=null,_=v.priorityLevel;var z=ct(v.expirationTime<=O);if(O=c.unstable_now(),typeof z=="function"){v.callback=z,A(O),Z=!0;break e}v===n(d)&&a(d),A(O)}else a(d);v=n(d)}if(v!==null)Z=!0;else{var J=n(p);J!==null&&Y(P,J.startTime-O),Z=!1}}break t}finally{v=null,_=q,S=!1}Z=void 0}}finally{Z?nt():B=!1}}}var nt;if(typeof U=="function")nt=function(){U(H)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=H,nt=function(){K.postMessage(null)}}else nt=function(){y(H,0)};function Y(O,Z){I=y(function(){O(c.unstable_now())},Z)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(O){O.callback=null},c.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<O?Math.floor(1e3/O):5},c.unstable_getCurrentPriorityLevel=function(){return _},c.unstable_next=function(O){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var q=_;_=Z;try{return O()}finally{_=q}},c.unstable_requestPaint=function(){x=!0},c.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=_;_=O;try{return Z()}finally{_=q}},c.unstable_scheduleCallback=function(O,Z,q){var ct=c.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ct+q:ct):q=ct,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=q+z,O={id:g++,callback:Z,priorityLevel:O,startTime:q,expirationTime:z,sortIndex:-1},q>ct?(O.sortIndex=q,t(p,O),n(d)===null&&O===n(p)&&(b?(T(I),I=-1):b=!0,Y(P,q-ct))):(O.sortIndex=z,t(d,O),M||S||(M=!0,B||(B=!0,nt()))),O},c.unstable_shouldYield=w,c.unstable_wrapCallback=function(O){var Z=_;return function(){var q=_;_=Z;try{return O.apply(this,arguments)}finally{_=q}}}}(Mh)),Mh}var q_;function oS(){return q_||(q_=1,Sh.exports=rS()),Sh.exports}var Eh={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function lS(){if(X_)return Pn;X_=1;var c=Kd();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(d,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:v==null?null:""+v,children:d,containerInfo:p,implementation:g}}var u=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Pn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,g)},Pn.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},Pn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Pn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Pn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,v=f(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):g==="script"&&a.d.X(d,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Pn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=f(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Pn.requestFormReset=function(d){a.d.r(d)},Pn.unstable_batchedUpdates=function(d,p){return d(p)},Pn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Pn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Pn.version="19.1.0",Pn}var W_;function cS(){if(W_)return Eh.exports;W_=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),Eh.exports=lS(),Eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function uS(){if(Y_)return Yo;Y_=1;var c=oS(),t=Kd(),n=cS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(o=h.return,o!==null){s=o;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return f(h),e;if(m===o)return f(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==o.return)s=h,o=m;else{for(var E=!1,D=h.child;D;){if(D===s){E=!0,s=h,o=m;break}if(D===o){E=!0,o=h,s=m;break}D=D.sibling}if(!E){for(D=m.child;D;){if(D===s){E=!0,s=m,o=h;break}if(D===o){E=!0,o=m,s=h;break}D=D.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function p(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=p(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),T=Symbol.for("react.consumer"),U=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case x:return"Profiler";case b:return"StrictMode";case P:return"Suspense";case B:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case U:return(e.displayName||"Context")+".Provider";case T:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:K(e.type)||"Memo";case k:i=e._payload,e=e._init;try{return K(e(i))}catch{}}return null}var Y=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ct=[],z=-1;function J(e){return{current:e}}function st(e){0>z||(e.current=ct[z],ct[z]=null,z--)}function xt(e,i){z++,ct[z]=e.current,e.current=i}var tt=J(null),gt=J(null),Mt=J(null),wt=J(null);function Ct(e,i){switch(xt(Mt,i),xt(gt,e),xt(tt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?d_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=d_(i),e=p_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}st(tt),xt(tt,e)}function ue(){st(tt),st(gt),st(Mt)}function $t(e){e.memoizedState!==null&&xt(wt,e);var i=tt.current,s=p_(i,e.type);i!==s&&(xt(gt,e),xt(tt,s))}function ze(e){gt.current===e&&(st(tt),st(gt)),wt.current===e&&(st(wt),Go._currentValue=q)}var ke=Object.prototype.hasOwnProperty,xe=c.unstable_scheduleCallback,X=c.unstable_cancelCallback,wn=c.unstable_shouldYield,be=c.unstable_requestPaint,ge=c.unstable_now,qt=c.unstable_getCurrentPriorityLevel,Se=c.unstable_ImmediatePriority,Kt=c.unstable_UserBlockingPriority,re=c.unstable_NormalPriority,nn=c.unstable_LowPriority,F=c.unstable_IdlePriority,R=c.log,ot=c.unstable_setDisableYieldValue,mt=null,vt=null;function dt(e){if(typeof R=="function"&&ot(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(mt,e)}catch{}}var Pt=Math.clz32?Math.clz32:Xt,Ut=Math.log,kt=Math.LN2;function Xt(e){return e>>>=0,e===0?32:31-(Ut(e)/kt|0)|0}var Et=256,zt=4194304;function jt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zt(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var h=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var D=o&134217727;return D!==0?(o=D&~m,o!==0?h=jt(o):(E&=D,E!==0?h=jt(E):s||(s=D&~e,s!==0&&(h=jt(s))))):(D=o&~m,D!==0?h=jt(D):E!==0?h=jt(E):s||(s=o&~e,s!==0&&(h=jt(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function Rt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function se(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function Lt(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function bt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,i,s,o,h,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var D=e.entanglements,G=e.expirationTimes,at=e.hiddenUpdates;for(s=E&~s;0<s;){var pt=31-Pt(s),yt=1<<pt;D[pt]=0,G[pt]=-1;var lt=at[pt];if(lt!==null)for(at[pt]=null,pt=0;pt<lt.length;pt++){var ut=lt[pt];ut!==null&&(ut.lane&=-536870913)}s&=~yt}o!==0&&St(e,o,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function St(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Pt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&4194090}function Ft(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-Pt(s),h=1<<o;h&i|e[o]&i&&(e[o]|=i),s&=~h}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ne(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:N_(e.type))}function Qn(e,i){var s=Z.p;try{return Z.p=e,i()}finally{Z.p=s}}var xn=Math.random().toString(36).slice(2),hn="__reactFiber$"+xn,Rn="__reactProps$"+xn,Gn="__reactContainer$"+xn,us="__reactEvents$"+xn,gl="__reactListeners$"+xn,_l="__reactHandles$"+xn,fs="__reactResources$"+xn,ba="__reactMarker$"+xn;function Ta(e){delete e[hn],delete e[Rn],delete e[us],delete e[gl],delete e[_l]}function Xi(e){var i=e[hn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Gn]||s[hn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=v_(e);e!==null;){if(s=e[hn])return s;e=v_(e)}return i}e=s,s=e.parentNode}return null}function Wi(e){if(e=e[hn]||e[Gn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function hs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Aa(e){var i=e[fs];return i||(i=e[fs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function rn(e){e[ba]=!0}var vl=new Set,yl={};function Yi(e,i){L(e,i),L(e+"Capture",i)}function L(e,i){for(yl[e]=i,e=0;e<i.length;e++)vl.add(i[e])}var $=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ft={},ht={};function et(e){return ke.call(ht,e)?!0:ke.call(ft,e)?!1:$.test(e)?ht[e]=!0:(ft[e]=!0,!1)}function Tt(e,i,s){if(et(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Dt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Ot(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}var It,ne;function Jt(e){if(It===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);It=i&&i[1]||"",ne=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+ne}var Wt=!1;function fe(e,i){if(!e||Wt)return"";Wt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ut){var lt=ut}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ut){lt=ut}e.call(yt.prototype)}}else{try{throw Error()}catch(ut){lt=ut}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ut){if(ut&&lt&&typeof ut.stack=="string")return[ut.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),E=m[0],D=m[1];if(E&&D){var G=E.split(`
`),at=D.split(`
`);for(h=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;h<at.length&&!at[h].includes("DetermineComponentFrameRoot");)h++;if(o===G.length||h===at.length)for(o=G.length-1,h=at.length-1;1<=o&&0<=h&&G[o]!==at[h];)h--;for(;1<=o&&0<=h;o--,h--)if(G[o]!==at[h]){if(o!==1||h!==1)do if(o--,h--,0>h||G[o]!==at[h]){var pt=`
`+G[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=h);break}}}finally{Wt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Jt(s):""}function Ue(e){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return fe(e.type,!1);case 11:return fe(e.type.render,!1);case 1:return fe(e.type,!0);case 31:return Jt("Activity");default:return""}}function je(e){try{var i="";do i+=Ue(e),e=e.return;while(e);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Le(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qt(e){var i=Le(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,m=s.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){o=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Be(e){e._valueTracker||(e._valueTracker=Qt(e))}function Me(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Le(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wa=/[\n"\\]/g;function We(e){return e.replace(wa,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ji(e,i,s,o,h,m,E,D){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+pe(i)):e.value!==""+pe(i)&&(e.value=""+pe(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Nn(e,E,pe(i)):s!=null?Nn(e,E,pe(s)):o!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+pe(D):e.removeAttribute("name")}function qe(e,i,s,o,h,m,E,D){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+pe(s):"",i=i!=null?""+pe(i):s,D||i===e.value||(e.value=i),e.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=D?e.checked:!!o,e.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function Nn(e,i,s){i==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function dn(e,i,s,o){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&o&&(e[s].defaultSelected=!0)}else{for(s=""+pe(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Mn(e,i,s){if(i!=null&&(i=""+pe(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+pe(s):""}function Cn(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(Y(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=pe(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o)}function Di(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dp(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||Zi.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function pp(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&s[h]!==o&&dp(e,h,o)}else for(var m in i)i.hasOwnProperty(m)&&dp(e,m,i[m])}function gu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ey=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ny=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(e){return ny.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var _u=null;function vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,js=null;function mp(e){var i=Wi(e);if(i&&(e=i.stateNode)){var s=e[Rn]||null;t:switch(e=i.stateNode,i.type){case"input":if(ji(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+We(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var h=o[Rn]||null;if(!h)throw Error(a(90));ji(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&Me(o)}break t;case"textarea":Mn(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&dn(e,!!s.multiple,i,!1)}}}var yu=!1;function gp(e,i,s){if(yu)return e(i,s);yu=!0;try{var o=e(i);return o}finally{if(yu=!1,(Ys!==null||js!==null)&&(sc(),Ys&&(i=Ys,e=js,js=Ys=null,mp(i),e)))for(i=0;i<e.length;i++)mp(e[i])}}function $r(e,i){var s=e.stateNode;if(s===null)return null;var o=s[Rn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Ki)try{var to={};Object.defineProperty(to,"passive",{get:function(){xu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{xu=!1}var Ra=null,Su=null,Sl=null;function _p(){if(Sl)return Sl;var e,i=Su,s=i.length,o,h="value"in Ra?Ra.value:Ra.textContent,m=h.length;for(e=0;e<s&&i[e]===h[e];e++);var E=s-e;for(o=1;o<=E&&i[s-o]===h[m-o];o++);return Sl=h.slice(e,1<o?1-o:void 0)}function Ml(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function El(){return!0}function vp(){return!1}function Vn(e){function i(s,o,h,m,E){this._reactName=s,this._targetInst=h,this.type=o,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(s=e[D],this[D]=s?s(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?El:vp,this.isPropagationStopped=vp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=Vn(ds),eo=g({},ds,{view:0,detail:0}),iy=Vn(eo),Mu,Eu,no,Tl=g({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(Mu=e.screenX-no.screenX,Eu=e.screenY-no.screenY):Eu=Mu=0,no=e),Mu)},movementY:function(e){return"movementY"in e?e.movementY:Eu}}),yp=Vn(Tl),ay=g({},Tl,{dataTransfer:0}),sy=Vn(ay),ry=g({},eo,{relatedTarget:0}),bu=Vn(ry),oy=g({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),ly=Vn(oy),cy=g({},ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uy=Vn(cy),fy=g({},ds,{data:0}),xp=Vn(fy),hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=py[e])?!!i[e]:!1}function Tu(){return my}var gy=g({},eo,{key:function(e){if(e.key){var i=hy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?Ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_y=Vn(gy),vy=g({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=Vn(vy),yy=g({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),xy=Vn(yy),Sy=g({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),My=Vn(Sy),Ey=g({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),by=Vn(Ey),Ty=g({},ds,{newState:0,oldState:0}),Ay=Vn(Ty),wy=[9,13,27,32],Au=Ki&&"CompositionEvent"in window,io=null;Ki&&"documentMode"in document&&(io=document.documentMode);var Ry=Ki&&"TextEvent"in window&&!io,Mp=Ki&&(!Au||io&&8<io&&11>=io),Ep=" ",bp=!1;function Tp(e,i){switch(e){case"keyup":return wy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function Cy(e,i){switch(e){case"compositionend":return Ap(i);case"keypress":return i.which!==32?null:(bp=!0,Ep);case"textInput":return e=i.data,e===Ep&&bp?null:e;default:return null}}function Dy(e,i){if(Zs)return e==="compositionend"||!Au&&Tp(e,i)?(e=_p(),Sl=Su=Ra=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Mp&&i.locale!=="ko"?null:i.data;default:return null}}var Uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Uy[e.type]:i==="textarea"}function Rp(e,i,s,o){Ys?js?js.push(o):js=[o]:Ys=o,i=fc(i,"onChange"),0<i.length&&(s=new bl("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var ao=null,so=null;function Ly(e){l_(e,0)}function Al(e){var i=hs(e);if(Me(i))return e}function Cp(e,i){if(e==="change")return i}var Dp=!1;if(Ki){var wu;if(Ki){var Ru="oninput"in document;if(!Ru){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Ru=typeof Up.oninput=="function"}wu=Ru}else wu=!1;Dp=wu&&(!document.documentMode||9<document.documentMode)}function Lp(){ao&&(ao.detachEvent("onpropertychange",Np),so=ao=null)}function Np(e){if(e.propertyName==="value"&&Al(so)){var i=[];Rp(i,so,e,vu(e)),gp(Ly,i)}}function Ny(e,i,s){e==="focusin"?(Lp(),ao=i,so=s,ao.attachEvent("onpropertychange",Np)):e==="focusout"&&Lp()}function Oy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Al(so)}function Py(e,i){if(e==="click")return Al(i)}function zy(e,i){if(e==="input"||e==="change")return Al(i)}function By(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Jn=typeof Object.is=="function"?Object.is:By;function ro(e,i){if(Jn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var h=s[o];if(!ke.call(i,h)||!Jn(e[h],i[h]))return!1}return!0}function Op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pp(e,i){var s=Op(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Op(s)}}function zp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?zp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Sn(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Sn(e.document)}return i}function Cu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Iy=Ki&&"documentMode"in document&&11>=document.documentMode,Ks=null,Du=null,oo=null,Uu=!1;function Ip(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Uu||Ks==null||Ks!==Sn(o)||(o=Ks,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=fc(Du,"onSelect"),0<o.length&&(i=new bl("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=Ks)))}function ps(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Qs={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Lu={},Fp={};Ki&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function ms(e){if(Lu[e])return Lu[e];if(!Qs[e])return e;var i=Qs[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Fp)return Lu[e]=i[s];return e}var Hp=ms("animationend"),Gp=ms("animationiteration"),Vp=ms("animationstart"),Fy=ms("transitionrun"),Hy=ms("transitionstart"),Gy=ms("transitioncancel"),kp=ms("transitionend"),qp=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function yi(e,i){qp.set(e,i),Yi(i,[e])}var Xp=new WeakMap;function li(e,i){if(typeof e=="object"&&e!==null){var s=Xp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:je(i)},Xp.set(e,i),i)}return{value:e,source:i,stack:je(i)}}var ci=[],Js=0,Ou=0;function wl(){for(var e=Js,i=Ou=Js=0;i<e;){var s=ci[i];ci[i++]=null;var o=ci[i];ci[i++]=null;var h=ci[i];ci[i++]=null;var m=ci[i];if(ci[i++]=null,o!==null&&h!==null){var E=o.pending;E===null?h.next=h:(h.next=E.next,E.next=h),o.pending=h}m!==0&&Wp(s,h,m)}}function Rl(e,i,s,o){ci[Js++]=e,ci[Js++]=i,ci[Js++]=s,ci[Js++]=o,Ou|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Pu(e,i,s,o){return Rl(e,i,s,o),Cl(e)}function $s(e,i){return Rl(e,null,null,i),Cl(e)}function Wp(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var h=!1,m=e.return;m!==null;)m.childLanes|=s,o=m.alternate,o!==null&&(o.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Pt(s),e=m.hiddenUpdates,o=e[h],o===null?e[h]=[i]:o.push(i),i.lane=s|536870912),m):null}function Cl(e){if(50<No)throw No=0,Vf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var tr={};function Vy(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,i,s,o){return new Vy(e,i,s,o)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,i){var s=e.alternate;return s===null?(s=$n(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Yp(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Dl(e,i,s,o,h,m){var E=0;if(o=e,typeof e=="function")zu(e)&&(E=1);else if(typeof e=="string")E=qx(e,s,tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=$n(31,s,i,h),e.elementType=N,e.lanes=m,e;case M:return gs(s.children,h,m,i);case b:E=8,h|=24;break;case x:return e=$n(12,s,i,h|2),e.elementType=x,e.lanes=m,e;case P:return e=$n(13,s,i,h),e.elementType=P,e.lanes=m,e;case B:return e=$n(19,s,i,h),e.elementType=B,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case y:case U:E=10;break t;case T:E=9;break t;case A:E=11;break t;case I:E=14;break t;case k:E=16,o=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=$n(E,s,i,h),i.elementType=e,i.type=o,i.lanes=m,i}function gs(e,i,s,o){return e=$n(7,e,o,i),e.lanes=s,e}function Bu(e,i,s){return e=$n(6,e,null,i),e.lanes=s,e}function Iu(e,i,s){return i=$n(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var er=[],nr=0,Ul=null,Ll=0,ui=[],fi=0,_s=null,Ji=1,$i="";function vs(e,i){er[nr++]=Ll,er[nr++]=Ul,Ul=e,Ll=i}function jp(e,i,s){ui[fi++]=Ji,ui[fi++]=$i,ui[fi++]=_s,_s=e;var o=Ji;e=$i;var h=32-Pt(o)-1;o&=~(1<<h),s+=1;var m=32-Pt(i)+h;if(30<m){var E=h-h%5;m=(o&(1<<E)-1).toString(32),o>>=E,h-=E,Ji=1<<32-Pt(i)+h|s<<h|o,$i=m+e}else Ji=1<<m|s<<h|o,$i=e}function Fu(e){e.return!==null&&(vs(e,1),jp(e,1,0))}function Hu(e){for(;e===Ul;)Ul=er[--nr],er[nr]=null,Ll=er[--nr],er[nr]=null;for(;e===_s;)_s=ui[--fi],ui[fi]=null,$i=ui[--fi],ui[fi]=null,Ji=ui[--fi],ui[fi]=null}var Fn=null,Je=null,Ce=!1,ys=null,Ui=!1,Gu=Error(a(519));function xs(e){var i=Error(a(418,""));throw uo(li(i,e)),Gu}function Zp(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[hn]=e,i[Rn]=o,s){case"dialog":ve("cancel",i),ve("close",i);break;case"iframe":case"object":case"embed":ve("load",i);break;case"video":case"audio":for(s=0;s<Po.length;s++)ve(Po[s],i);break;case"source":ve("error",i);break;case"img":case"image":case"link":ve("error",i),ve("load",i);break;case"details":ve("toggle",i);break;case"input":ve("invalid",i),qe(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Be(i);break;case"select":ve("invalid",i);break;case"textarea":ve("invalid",i),Cn(i,o.value,o.defaultValue,o.children),Be(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||h_(i.textContent,s)?(o.popover!=null&&(ve("beforetoggle",i),ve("toggle",i)),o.onScroll!=null&&ve("scroll",i),o.onScrollEnd!=null&&ve("scrollend",i),o.onClick!=null&&(i.onclick=hc),i=!0):i=!1,i||xs(e)}function Kp(e){for(Fn=e.return;Fn;)switch(Fn.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Fn=Fn.return}}function lo(e){if(e!==Fn)return!1;if(!Ce)return Kp(e),Ce=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||ah(e.type,e.memoizedProps)),s=!s),s&&Je&&xs(e),Kp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(i===0){Je=Si(e.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;e=e.nextSibling}Je=null}}else i===27?(i=Je,qa(e.type)?(e=lh,lh=null,Je=e):Je=i):Je=Fn?Si(e.stateNode.nextSibling):null;return!0}function co(){Je=Fn=null,Ce=!1}function Qp(){var e=ys;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),ys=null),e}function uo(e){ys===null?ys=[e]:ys.push(e)}var Vu=J(null),Ss=null,ta=null;function Ca(e,i,s){xt(Vu,i._currentValue),i._currentValue=s}function ea(e){e._currentValue=Vu.current,st(Vu)}function ku(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function qu(e,i,s,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var D=m;m=h;for(var G=0;G<i.length;G++)if(D.context===i[G]){m.lanes|=s,D=m.alternate,D!==null&&(D.lanes|=s),ku(m.return,s,e),o||(E=null);break t}m=D.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),ku(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function fo(e,i,s,o){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var D=h.type;Jn(h.pendingProps.value,E.value)||(e!==null?e.push(D):e=[D])}}else if(h===wt.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}h=h.return}e!==null&&qu(i,e,s,o),i.flags|=262144}function Nl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ms(e){Ss=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return Jp(Ss,e)}function Ol(e,i){return Ss===null&&Ms(e),Jp(e,i)}function Jp(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ta===null){if(e===null)throw Error(a(308));ta=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ta=ta.next=i;return s}var ky=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},qy=c.unstable_scheduleCallback,Xy=c.unstable_NormalPriority,pn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new ky,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&qy(Xy,function(){e.controller.abort()})}var po=null,Wu=0,ir=0,ar=null;function Wy(e,i){if(po===null){var s=po=[];Wu=0,ir=Zf(),ar={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Wu++,i.then($p,$p),i}function $p(){if(--Wu===0&&po!==null){ar!==null&&(ar.status="fulfilled");var e=po;po=null,ir=0,ar=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Yy(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),o}var tm=O.S;O.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Wy(e,i),tm!==null&&tm(e,i)};var Es=J(null);function Yu(){var e=Es.current;return e!==null?e:Ye.pooledCache}function Pl(e,i){i===null?xt(Es,Es.current):xt(Es,i.pool)}function em(){var e=Yu();return e===null?null:{parent:pn._currentValue,pool:e}}var mo=Error(a(460)),nm=Error(a(474)),zl=Error(a(542)),ju={then:function(){}};function im(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Bl(){}function am(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Bl,Bl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,rm(e),e;default:if(typeof i.status=="string")i.then(Bl,Bl);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,rm(e),e}throw go=i,mo}}var go=null;function sm(){if(go===null)throw Error(a(459));var e=go;return go=null,e}function rm(e){if(e===mo||e===zl)throw Error(a(483))}var Da=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=Cl(e),Wp(e,null,s),i}return Rl(e,o,i,s),Cl(e)}function _o(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Ft(e,s)}}function Qu(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Ju=!1;function vo(){if(Ju){var e=ar;if(e!==null)throw e}}function yo(e,i,s,o){Ju=!1;var h=e.updateQueue;Da=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,D=h.shared.pending;if(D!==null){h.shared.pending=null;var G=D,at=G.next;G.next=null,E===null?m=at:E.next=at,E=G;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,D=pt.lastBaseUpdate,D!==E&&(D===null?pt.firstBaseUpdate=at:D.next=at,pt.lastBaseUpdate=G))}if(m!==null){var yt=h.baseState;E=0,pt=at=G=null,D=m;do{var lt=D.lane&-536870913,ut=lt!==D.lane;if(ut?(Ee&lt)===lt:(o&lt)===lt){lt!==0&&lt===ir&&(Ju=!0),pt!==null&&(pt=pt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var ie=e,te=D;lt=i;var He=s;switch(te.tag){case 1:if(ie=te.payload,typeof ie=="function"){yt=ie.call(He,yt,lt);break t}yt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=te.payload,lt=typeof ie=="function"?ie.call(He,yt,lt):ie,lt==null)break t;yt=g({},yt,lt);break t;case 2:Da=!0}}lt=D.callback,lt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=h.callbacks,ut===null?h.callbacks=[lt]:ut.push(lt))}else ut={lane:lt,tag:D.tag,payload:D.payload,callback:D.callback,next:null},pt===null?(at=pt=ut,G=yt):pt=pt.next=ut,E|=lt;if(D=D.next,D===null){if(D=h.shared.pending,D===null)break;ut=D,D=ut.next,ut.next=null,h.lastBaseUpdate=ut,h.shared.pending=null}}while(!0);pt===null&&(G=yt),h.baseState=G,h.firstBaseUpdate=at,h.lastBaseUpdate=pt,m===null&&(h.shared.lanes=0),Ha|=E,e.lanes=E,e.memoizedState=yt}}function om(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function lm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)om(s[e],i)}var sr=J(null),Il=J(0);function cm(e,i){e=la,xt(Il,e),xt(sr,i),la=e|i.baseLanes}function $u(){xt(Il,la),xt(sr,sr.current)}function tf(){la=Il.current,st(sr),st(Il)}var Na=0,de=null,Ie=null,on=null,Fl=!1,rr=!1,bs=!1,Hl=0,xo=0,or=null,jy=0;function an(){throw Error(a(321))}function ef(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Jn(e[s],i[s]))return!1;return!0}function nf(e,i,s,o,h,m){return Na=m,de=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=e===null||e.memoizedState===null?Wm:Ym,bs=!1,m=s(o,h),bs=!1,rr&&(m=fm(i,s,o,h)),um(e),m}function um(e){O.H=Wl;var i=Ie!==null&&Ie.next!==null;if(Na=0,on=Ie=de=null,Fl=!1,xo=0,or=null,i)throw Error(a(300));e===null||En||(e=e.dependencies,e!==null&&Nl(e)&&(En=!0))}function fm(e,i,s,o){de=e;var h=0;do{if(rr&&(or=null),xo=0,rr=!1,25<=h)throw Error(a(301));if(h+=1,on=Ie=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}O.H=ex,m=i(s,o)}while(rr);return m}function Zy(){var e=O.H,i=e.useState()[0];return i=typeof i.then=="function"?So(i):i,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(de.flags|=1024),i}function af(){var e=Hl!==0;return Hl=0,e}function sf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function rf(e){if(Fl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Fl=!1}Na=0,on=Ie=de=null,rr=!1,xo=Hl=0,or=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?de.memoizedState=on=e:on=on.next=e,on}function ln(){if(Ie===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var i=on===null?de.memoizedState:on.next;if(i!==null)on=i,Ie=e;else{if(e===null)throw de.alternate===null?Error(a(467)):Error(a(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},on===null?de.memoizedState=on=e:on=on.next=e}return on}function of(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(e){var i=xo;return xo+=1,or===null&&(or=[]),e=am(or,e,i),i=de,(on===null?i.memoizedState:on.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?Wm:Ym),e}function Gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return So(e);if(e.$$typeof===U)return On(e)}throw Error(a(438,String(e)))}function lf(e){var i=null,s=de.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=of(),de.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=w;return i.index++,s}function na(e,i){return typeof i=="function"?i(e):i}function Vl(e){var i=ln();return cf(i,Ie,e)}function cf(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var h=e.baseQueue,m=o.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,o.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var D=E=null,G=null,at=i,pt=!1;do{var yt=at.lane&-536870913;if(yt!==at.lane?(Ee&yt)===yt:(Na&yt)===yt){var lt=at.revertLane;if(lt===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),yt===ir&&(pt=!0);else if((Na&lt)===lt){at=at.next,lt===ir&&(pt=!0);continue}else yt={lane:0,revertLane:at.revertLane,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(D=G=yt,E=m):G=G.next=yt,de.lanes|=lt,Ha|=lt;yt=at.action,bs&&s(m,yt),m=at.hasEagerState?at.eagerState:s(m,yt)}else lt={lane:yt,revertLane:at.revertLane,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},G===null?(D=G=lt,E=m):G=G.next=lt,de.lanes|=yt,Ha|=yt;at=at.next}while(at!==null&&at!==i);if(G===null?E=m:G.next=D,!Jn(m,e.memoizedState)&&(En=!0,pt&&(s=ar,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=G,o.lastRenderedState=m}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function uf(e){var i=ln(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do m=e(m,E.action),E=E.next;while(E!==h);Jn(m,i.memoizedState)||(En=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,o]}function hm(e,i,s){var o=de,h=ln(),m=Ce;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!Jn((Ie||h).memoizedState,s);E&&(h.memoizedState=s,En=!0),h=h.queue;var D=mm.bind(null,o,h,e);if(Mo(2048,8,D,[e]),h.getSnapshot!==i||E||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,lr(9,kl(),pm.bind(null,o,h,s,i),null),Ye===null)throw Error(a(349));m||(Na&124)!==0||dm(o,i,s)}return s}function dm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=de.updateQueue,i===null?(i=of(),de.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function pm(e,i,s,o){i.value=s,i.getSnapshot=o,gm(i)&&_m(e)}function mm(e,i,s){return s(function(){gm(i)&&_m(e)})}function gm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Jn(e,s)}catch{return!0}}function _m(e){var i=$s(e,2);i!==null&&ai(i,e,2)}function ff(e){var i=kn();if(typeof e=="function"){var s=e;if(e=s(),bs){dt(!0);try{s()}finally{dt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},i}function vm(e,i,s,o){return e.baseState=s,cf(e,Ie,typeof o=="function"?o:na)}function Ky(e,i,s,o,h){if(Xl(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};O.T!==null?s(!0):m.isTransition=!1,o(m),s=i.pending,s===null?(m.next=i.pending=m,ym(i,m)):(m.next=s.next,i.pending=s.next=m)}}function ym(e,i){var s=i.action,o=i.payload,h=e.state;if(i.isTransition){var m=O.T,E={};O.T=E;try{var D=s(h,o),G=O.S;G!==null&&G(E,D),xm(e,i,D)}catch(at){hf(e,i,at)}finally{O.T=m}}else try{m=s(h,o),xm(e,i,m)}catch(at){hf(e,i,at)}}function xm(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Sm(e,i,o)},function(o){return hf(e,i,o)}):Sm(e,i,s)}function Sm(e,i,s){i.status="fulfilled",i.value=s,Mm(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,ym(e,s)))}function hf(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Mm(i),i=i.next;while(i!==o)}e.action=null}function Mm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Em(e,i){return i}function bm(e,i){if(Ce){var s=Ye.formState;if(s!==null){t:{var o=de;if(Ce){if(Je){e:{for(var h=Je,m=Ui;h.nodeType!==8;){if(!m){h=null;break e}if(h=Si(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Je=Si(h.nextSibling),o=h.data==="F!";break t}}xs(o)}o=!1}o&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Em,lastRenderedState:i},s.queue=o,s=km.bind(null,de,o),o.dispatch=s,o=ff(!1),m=_f.bind(null,de,!1,o.queue),o=kn(),h={state:i,dispatch:null,action:e,pending:null},o.queue=h,s=Ky.bind(null,de,h,m,s),h.dispatch=s,o.memoizedState=e,[i,s,!1]}function Tm(e){var i=ln();return Am(i,Ie,e)}function Am(e,i,s){if(i=cf(e,i,Em)[0],e=Vl(na)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=So(i)}catch(E){throw E===mo?zl:E}else o=i;i=ln();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(de.flags|=2048,lr(9,kl(),Qy.bind(null,h,s),null)),[o,m,e]}function Qy(e,i){e.action=i}function wm(e){var i=ln(),s=Ie;if(s!==null)return Am(i,s,e);ln(),i=i.memoizedState,s=ln();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function lr(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=de.updateQueue,i===null&&(i=of(),de.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function kl(){return{destroy:void 0,resource:void 0}}function Rm(){return ln().memoizedState}function ql(e,i,s,o){var h=kn();o=o===void 0?null:o,de.flags|=e,h.memoizedState=lr(1|i,kl(),s,o)}function Mo(e,i,s,o){var h=ln();o=o===void 0?null:o;var m=h.memoizedState.inst;Ie!==null&&o!==null&&ef(o,Ie.memoizedState.deps)?h.memoizedState=lr(i,m,s,o):(de.flags|=e,h.memoizedState=lr(1|i,m,s,o))}function Cm(e,i){ql(8390656,8,e,i)}function Dm(e,i){Mo(2048,8,e,i)}function Um(e,i){return Mo(4,2,e,i)}function Lm(e,i){return Mo(4,4,e,i)}function Nm(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Om(e,i,s){s=s!=null?s.concat([e]):null,Mo(4,4,Nm.bind(null,i,e),s)}function df(){}function Pm(e,i){var s=ln();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&ef(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function zm(e,i){var s=ln();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&ef(i,o[1]))return o[0];if(o=e(),bs){dt(!0);try{e()}finally{dt(!1)}}return s.memoizedState=[o,i],o}function pf(e,i,s){return s===void 0||(Na&1073741824)!==0?e.memoizedState=i:(e.memoizedState=s,e=Fg(),de.lanes|=e,Ha|=e,s)}function Bm(e,i,s,o){return Jn(s,i)?s:sr.current!==null?(e=pf(e,s,o),Jn(e,i)||(En=!0),e):(Na&42)===0?(En=!0,e.memoizedState=s):(e=Fg(),de.lanes|=e,Ha|=e,i)}function Im(e,i,s,o,h){var m=Z.p;Z.p=m!==0&&8>m?m:8;var E=O.T,D={};O.T=D,_f(e,!1,i,s);try{var G=h(),at=O.S;if(at!==null&&at(D,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pt=Yy(G,o);Eo(e,i,pt,ii(e))}else Eo(e,i,o,ii(e))}catch(yt){Eo(e,i,{then:function(){},status:"rejected",reason:yt},ii())}finally{Z.p=m,O.T=E}}function Jy(){}function mf(e,i,s,o){if(e.tag!==5)throw Error(a(476));var h=Fm(e).queue;Im(e,h,i,q,s===null?Jy:function(){return Hm(e),s(o)})}function Fm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Hm(e){var i=Fm(e).next.queue;Eo(e,i,{},ii())}function gf(){return On(Go)}function Gm(){return ln().memoizedState}function Vm(){return ln().memoizedState}function $y(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ii();e=Ua(s);var o=La(i,e,s);o!==null&&(ai(o,i,s),_o(o,i,s)),i={cache:Xu()},e.payload=i;return}i=i.return}}function tx(e,i,s){var o=ii();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Xl(e)?qm(i,s):(s=Pu(e,i,s,o),s!==null&&(ai(s,e,o),Xm(s,i,o)))}function km(e,i,s){var o=ii();Eo(e,i,s,o)}function Eo(e,i,s,o){var h={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Xl(e))qm(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,D=m(E,s);if(h.hasEagerState=!0,h.eagerState=D,Jn(D,E))return Rl(e,i,h,0),Ye===null&&wl(),!1}catch{}finally{}if(s=Pu(e,i,h,o),s!==null)return ai(s,e,o),Xm(s,i,o),!0}return!1}function _f(e,i,s,o){if(o={lane:2,revertLane:Zf(),action:o,hasEagerState:!1,eagerState:null,next:null},Xl(e)){if(i)throw Error(a(479))}else i=Pu(e,s,o,2),i!==null&&ai(i,e,2)}function Xl(e){var i=e.alternate;return e===de||i!==null&&i===de}function qm(e,i){rr=Fl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Xm(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Ft(e,s)}}var Wl={readContext:On,use:Gl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Wm={readContext:On,use:Gl,useCallback:function(e,i){return kn().memoizedState=[e,i===void 0?null:i],e},useContext:On,useEffect:Cm,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,ql(4194308,4,Nm.bind(null,i,e),s)},useLayoutEffect:function(e,i){return ql(4194308,4,e,i)},useInsertionEffect:function(e,i){ql(4,2,e,i)},useMemo:function(e,i){var s=kn();i=i===void 0?null:i;var o=e();if(bs){dt(!0);try{e()}finally{dt(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=kn();if(s!==void 0){var h=s(i);if(bs){dt(!0);try{s(i)}finally{dt(!1)}}}else h=i;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=tx.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var i=kn();return e={current:e},i.memoizedState=e},useState:function(e){e=ff(e);var i=e.queue,s=km.bind(null,de,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:df,useDeferredValue:function(e,i){var s=kn();return pf(s,e,i)},useTransition:function(){var e=ff(!1);return e=Im.bind(null,de,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=de,h=kn();if(Ce){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ye===null)throw Error(a(349));(Ee&124)!==0||dm(o,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,Cm(mm.bind(null,o,m,e),[e]),o.flags|=2048,lr(9,kl(),pm.bind(null,o,m,s,i),null),s},useId:function(){var e=kn(),i=Ye.identifierPrefix;if(Ce){var s=$i,o=Ji;s=(o&~(1<<32-Pt(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=Hl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=jy++,i="«"+i+"r"+s.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:gf,useFormState:bm,useActionState:bm,useOptimistic:function(e){var i=kn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=_f.bind(null,de,!0,s),s.dispatch=i,[e,i]},useMemoCache:lf,useCacheRefresh:function(){return kn().memoizedState=$y.bind(null,de)}},Ym={readContext:On,use:Gl,useCallback:Pm,useContext:On,useEffect:Dm,useImperativeHandle:Om,useInsertionEffect:Um,useLayoutEffect:Lm,useMemo:zm,useReducer:Vl,useRef:Rm,useState:function(){return Vl(na)},useDebugValue:df,useDeferredValue:function(e,i){var s=ln();return Bm(s,Ie.memoizedState,e,i)},useTransition:function(){var e=Vl(na)[0],i=ln().memoizedState;return[typeof e=="boolean"?e:So(e),i]},useSyncExternalStore:hm,useId:Gm,useHostTransitionStatus:gf,useFormState:Tm,useActionState:Tm,useOptimistic:function(e,i){var s=ln();return vm(s,Ie,e,i)},useMemoCache:lf,useCacheRefresh:Vm},ex={readContext:On,use:Gl,useCallback:Pm,useContext:On,useEffect:Dm,useImperativeHandle:Om,useInsertionEffect:Um,useLayoutEffect:Lm,useMemo:zm,useReducer:uf,useRef:Rm,useState:function(){return uf(na)},useDebugValue:df,useDeferredValue:function(e,i){var s=ln();return Ie===null?pf(s,e,i):Bm(s,Ie.memoizedState,e,i)},useTransition:function(){var e=uf(na)[0],i=ln().memoizedState;return[typeof e=="boolean"?e:So(e),i]},useSyncExternalStore:hm,useId:Gm,useHostTransitionStatus:gf,useFormState:wm,useActionState:wm,useOptimistic:function(e,i){var s=ln();return Ie!==null?vm(s,Ie,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:lf,useCacheRefresh:Vm},cr=null,bo=0;function Yl(e){var i=bo;return bo+=1,cr===null&&(cr=[]),am(cr,e,i)}function To(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function jl(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function jm(e){var i=e._init;return i(e._payload)}function Zm(e){function i(Q,W){if(e){var it=Q.deletions;it===null?(Q.deletions=[W],Q.flags|=16):it.push(W)}}function s(Q,W){if(!e)return null;for(;W!==null;)i(Q,W),W=W.sibling;return null}function o(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function h(Q,W){return Q=Qi(Q,W),Q.index=0,Q.sibling=null,Q}function m(Q,W,it){return Q.index=it,e?(it=Q.alternate,it!==null?(it=it.index,it<W?(Q.flags|=67108866,W):it):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function E(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function D(Q,W,it,_t){return W===null||W.tag!==6?(W=Bu(it,Q.mode,_t),W.return=Q,W):(W=h(W,it),W.return=Q,W)}function G(Q,W,it,_t){var Ht=it.type;return Ht===M?pt(Q,W,it.props.children,_t,it.key):W!==null&&(W.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===k&&jm(Ht)===W.type)?(W=h(W,it.props),To(W,it),W.return=Q,W):(W=Dl(it.type,it.key,it.props,null,Q.mode,_t),To(W,it),W.return=Q,W)}function at(Q,W,it,_t){return W===null||W.tag!==4||W.stateNode.containerInfo!==it.containerInfo||W.stateNode.implementation!==it.implementation?(W=Iu(it,Q.mode,_t),W.return=Q,W):(W=h(W,it.children||[]),W.return=Q,W)}function pt(Q,W,it,_t,Ht){return W===null||W.tag!==7?(W=gs(it,Q.mode,_t,Ht),W.return=Q,W):(W=h(W,it),W.return=Q,W)}function yt(Q,W,it){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Bu(""+W,Q.mode,it),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case _:return it=Dl(W.type,W.key,W.props,null,Q.mode,it),To(it,W),it.return=Q,it;case S:return W=Iu(W,Q.mode,it),W.return=Q,W;case k:var _t=W._init;return W=_t(W._payload),yt(Q,W,it)}if(Y(W)||nt(W))return W=gs(W,Q.mode,it,null),W.return=Q,W;if(typeof W.then=="function")return yt(Q,Yl(W),it);if(W.$$typeof===U)return yt(Q,Ol(Q,W),it);jl(Q,W)}return null}function lt(Q,W,it,_t){var Ht=W!==null?W.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Ht!==null?null:D(Q,W,""+it,_t);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case _:return it.key===Ht?G(Q,W,it,_t):null;case S:return it.key===Ht?at(Q,W,it,_t):null;case k:return Ht=it._init,it=Ht(it._payload),lt(Q,W,it,_t)}if(Y(it)||nt(it))return Ht!==null?null:pt(Q,W,it,_t,null);if(typeof it.then=="function")return lt(Q,W,Yl(it),_t);if(it.$$typeof===U)return lt(Q,W,Ol(Q,it),_t);jl(Q,it)}return null}function ut(Q,W,it,_t,Ht){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get(it)||null,D(W,Q,""+_t,Ht);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case _:return Q=Q.get(_t.key===null?it:_t.key)||null,G(W,Q,_t,Ht);case S:return Q=Q.get(_t.key===null?it:_t.key)||null,at(W,Q,_t,Ht);case k:var me=_t._init;return _t=me(_t._payload),ut(Q,W,it,_t,Ht)}if(Y(_t)||nt(_t))return Q=Q.get(it)||null,pt(W,Q,_t,Ht,null);if(typeof _t.then=="function")return ut(Q,W,it,Yl(_t),Ht);if(_t.$$typeof===U)return ut(Q,W,it,Ol(W,_t),Ht);jl(W,_t)}return null}function ie(Q,W,it,_t){for(var Ht=null,me=null,Yt=W,ee=W=0,Tn=null;Yt!==null&&ee<it.length;ee++){Yt.index>ee?(Tn=Yt,Yt=null):Tn=Yt.sibling;var Ae=lt(Q,Yt,it[ee],_t);if(Ae===null){Yt===null&&(Yt=Tn);break}e&&Yt&&Ae.alternate===null&&i(Q,Yt),W=m(Ae,W,ee),me===null?Ht=Ae:me.sibling=Ae,me=Ae,Yt=Tn}if(ee===it.length)return s(Q,Yt),Ce&&vs(Q,ee),Ht;if(Yt===null){for(;ee<it.length;ee++)Yt=yt(Q,it[ee],_t),Yt!==null&&(W=m(Yt,W,ee),me===null?Ht=Yt:me.sibling=Yt,me=Yt);return Ce&&vs(Q,ee),Ht}for(Yt=o(Yt);ee<it.length;ee++)Tn=ut(Yt,Q,ee,it[ee],_t),Tn!==null&&(e&&Tn.alternate!==null&&Yt.delete(Tn.key===null?ee:Tn.key),W=m(Tn,W,ee),me===null?Ht=Tn:me.sibling=Tn,me=Tn);return e&&Yt.forEach(function(Za){return i(Q,Za)}),Ce&&vs(Q,ee),Ht}function te(Q,W,it,_t){if(it==null)throw Error(a(151));for(var Ht=null,me=null,Yt=W,ee=W=0,Tn=null,Ae=it.next();Yt!==null&&!Ae.done;ee++,Ae=it.next()){Yt.index>ee?(Tn=Yt,Yt=null):Tn=Yt.sibling;var Za=lt(Q,Yt,Ae.value,_t);if(Za===null){Yt===null&&(Yt=Tn);break}e&&Yt&&Za.alternate===null&&i(Q,Yt),W=m(Za,W,ee),me===null?Ht=Za:me.sibling=Za,me=Za,Yt=Tn}if(Ae.done)return s(Q,Yt),Ce&&vs(Q,ee),Ht;if(Yt===null){for(;!Ae.done;ee++,Ae=it.next())Ae=yt(Q,Ae.value,_t),Ae!==null&&(W=m(Ae,W,ee),me===null?Ht=Ae:me.sibling=Ae,me=Ae);return Ce&&vs(Q,ee),Ht}for(Yt=o(Yt);!Ae.done;ee++,Ae=it.next())Ae=ut(Yt,Q,ee,Ae.value,_t),Ae!==null&&(e&&Ae.alternate!==null&&Yt.delete(Ae.key===null?ee:Ae.key),W=m(Ae,W,ee),me===null?Ht=Ae:me.sibling=Ae,me=Ae);return e&&Yt.forEach(function(nS){return i(Q,nS)}),Ce&&vs(Q,ee),Ht}function He(Q,W,it,_t){if(typeof it=="object"&&it!==null&&it.type===M&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case _:t:{for(var Ht=it.key;W!==null;){if(W.key===Ht){if(Ht=it.type,Ht===M){if(W.tag===7){s(Q,W.sibling),_t=h(W,it.props.children),_t.return=Q,Q=_t;break t}}else if(W.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===k&&jm(Ht)===W.type){s(Q,W.sibling),_t=h(W,it.props),To(_t,it),_t.return=Q,Q=_t;break t}s(Q,W);break}else i(Q,W);W=W.sibling}it.type===M?(_t=gs(it.props.children,Q.mode,_t,it.key),_t.return=Q,Q=_t):(_t=Dl(it.type,it.key,it.props,null,Q.mode,_t),To(_t,it),_t.return=Q,Q=_t)}return E(Q);case S:t:{for(Ht=it.key;W!==null;){if(W.key===Ht)if(W.tag===4&&W.stateNode.containerInfo===it.containerInfo&&W.stateNode.implementation===it.implementation){s(Q,W.sibling),_t=h(W,it.children||[]),_t.return=Q,Q=_t;break t}else{s(Q,W);break}else i(Q,W);W=W.sibling}_t=Iu(it,Q.mode,_t),_t.return=Q,Q=_t}return E(Q);case k:return Ht=it._init,it=Ht(it._payload),He(Q,W,it,_t)}if(Y(it))return ie(Q,W,it,_t);if(nt(it)){if(Ht=nt(it),typeof Ht!="function")throw Error(a(150));return it=Ht.call(it),te(Q,W,it,_t)}if(typeof it.then=="function")return He(Q,W,Yl(it),_t);if(it.$$typeof===U)return He(Q,W,Ol(Q,it),_t);jl(Q,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,W!==null&&W.tag===6?(s(Q,W.sibling),_t=h(W,it),_t.return=Q,Q=_t):(s(Q,W),_t=Bu(it,Q.mode,_t),_t.return=Q,Q=_t),E(Q)):s(Q,W)}return function(Q,W,it,_t){try{bo=0;var Ht=He(Q,W,it,_t);return cr=null,Ht}catch(Yt){if(Yt===mo||Yt===zl)throw Yt;var me=$n(29,Yt,null,Q.mode);return me.lanes=_t,me.return=Q,me}finally{}}}var ur=Zm(!0),Km=Zm(!1),hi=J(null),Li=null;function Oa(e){var i=e.alternate;xt(mn,mn.current&1),xt(hi,e),Li===null&&(i===null||sr.current!==null||i.memoizedState!==null)&&(Li=e)}function Qm(e){if(e.tag===22){if(xt(mn,mn.current),xt(hi,e),Li===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Li=e)}}else Pa()}function Pa(){xt(mn,mn.current),xt(hi,hi.current)}function ia(e){st(hi),Li===e&&(Li=null),st(mn)}var mn=J(0);function Zl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||oh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function vf(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var yf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=ii(),h=Ua(o);h.payload=i,s!=null&&(h.callback=s),i=La(e,h,o),i!==null&&(ai(i,e,o),_o(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=ii(),h=Ua(o);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=La(e,h,o),i!==null&&(ai(i,e,o),_o(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ii(),o=Ua(s);o.tag=2,i!=null&&(o.callback=i),i=La(e,o,s),i!==null&&(ai(i,e,s),_o(i,e,s))}};function Jm(e,i,s,o,h,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,m,E):i.prototype&&i.prototype.isPureReactComponent?!ro(s,o)||!ro(h,m):!0}function $m(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&yf.enqueueReplaceState(i,i.state,null)}function Ts(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}var Kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function tg(e){Kl(e)}function eg(e){console.error(e)}function ng(e){Kl(e)}function Ql(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function ig(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function xf(e,i,s){return s=Ua(s),s.tag=3,s.payload={element:null},s.callback=function(){Ql(e,i)},s}function ag(e){return e=Ua(e),e.tag=3,e}function sg(e,i,s,o){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=o.value;e.payload=function(){return h(m)},e.callback=function(){ig(i,s,o)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){ig(i,s,o),typeof h!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function nx(e,i,s,o,h){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&fo(i,s,h,!0),s=hi.current,s!==null){switch(s.tag){case 13:return Li===null?qf():s.alternate===null&&$e===0&&($e=3),s.flags&=-257,s.flags|=65536,s.lanes=h,o===ju?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Wf(e,o,h)),!1;case 22:return s.flags|=65536,o===ju?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Wf(e,o,h)),!1}throw Error(a(435,s.tag))}return Wf(e,o,h),qf(),!1}if(Ce)return i=hi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==Gu&&(e=Error(a(422),{cause:o}),uo(li(e,s)))):(o!==Gu&&(i=Error(a(423),{cause:o}),uo(li(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=li(o,s),h=xf(e.stateNode,o,h),Qu(e,h),$e!==4&&($e=2)),!1;var m=Error(a(520),{cause:o});if(m=li(m,s),Lo===null?Lo=[m]:Lo.push(m),$e!==4&&($e=2),i===null)return!0;o=li(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=xf(s.stateNode,o,e),Qu(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ga===null||!Ga.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=ag(h),sg(h,e,s,o),Qu(s,h),!1}s=s.return}while(s!==null);return!1}var rg=Error(a(461)),En=!1;function Dn(e,i,s,o){i.child=e===null?Km(i,null,s,o):ur(i,e.child,s,o)}function og(e,i,s,o,h){s=s.render;var m=i.ref;if("ref"in o){var E={};for(var D in o)D!=="ref"&&(E[D]=o[D])}else E=o;return Ms(i),o=nf(e,i,s,E,m,h),D=af(),e!==null&&!En?(sf(e,i,h),aa(e,i,h)):(Ce&&D&&Fu(i),i.flags|=1,Dn(e,i,o,h),i.child)}function lg(e,i,s,o,h){if(e===null){var m=s.type;return typeof m=="function"&&!zu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,cg(e,i,m,o,h)):(e=Dl(s.type,null,o,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Rf(e,h)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:ro,s(E,o)&&e.ref===i.ref)return aa(e,i,h)}return i.flags|=1,e=Qi(m,o),e.ref=i.ref,e.return=i,i.child=e}function cg(e,i,s,o,h){if(e!==null){var m=e.memoizedProps;if(ro(m,o)&&e.ref===i.ref)if(En=!1,i.pendingProps=o=m,Rf(e,h))(e.flags&131072)!==0&&(En=!0);else return i.lanes=e.lanes,aa(e,i,h)}return Sf(e,i,s,o,h)}function ug(e,i,s){var o=i.pendingProps,h=o.children,m=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=m!==null?m.baseLanes|s:s,e!==null){for(h=i.child=e.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;i.childLanes=m&~o}else i.childLanes=0,i.child=null;return fg(e,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pl(i,m!==null?m.cachePool:null),m!==null?cm(i,m):$u(),Qm(i);else return i.lanes=i.childLanes=536870912,fg(e,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(Pl(i,m.cachePool),cm(i,m),Pa(),i.memoizedState=null):(e!==null&&Pl(i,null),$u(),Pa());return Dn(e,i,h,s),i.child}function fg(e,i,s,o){var h=Yu();return h=h===null?null:{parent:pn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},e!==null&&Pl(i,null),$u(),Qm(i),e!==null&&fo(e,i,o,!0),null}function Jl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Sf(e,i,s,o,h){return Ms(i),s=nf(e,i,s,o,void 0,h),o=af(),e!==null&&!En?(sf(e,i,h),aa(e,i,h)):(Ce&&o&&Fu(i),i.flags|=1,Dn(e,i,s,h),i.child)}function hg(e,i,s,o,h,m){return Ms(i),i.updateQueue=null,s=fm(i,o,s,h),um(e),o=af(),e!==null&&!En?(sf(e,i,m),aa(e,i,m)):(Ce&&o&&Fu(i),i.flags|=1,Dn(e,i,s,m),i.child)}function dg(e,i,s,o,h){if(Ms(i),i.stateNode===null){var m=tr,E=s.contextType;typeof E=="object"&&E!==null&&(m=On(E)),m=new s(o,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=yf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=o,m.state=i.memoizedState,m.refs={},Zu(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?On(E):tr,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(vf(i,s,E,o),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&yf.enqueueReplaceState(m,m.state,null),yo(i,o,m,h),vo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){m=i.stateNode;var D=i.memoizedProps,G=Ts(s,D);m.props=G;var at=m.context,pt=s.contextType;E=tr,typeof pt=="object"&&pt!==null&&(E=On(pt));var yt=s.getDerivedStateFromProps;pt=typeof yt=="function"||typeof m.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,pt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(D||at!==E)&&$m(i,m,o,E),Da=!1;var lt=i.memoizedState;m.state=lt,yo(i,o,m,h),vo(),at=i.memoizedState,D||lt!==at||Da?(typeof yt=="function"&&(vf(i,s,yt,o),at=i.memoizedState),(G=Da||Jm(i,s,G,o,lt,at,E))?(pt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=at),m.props=o,m.state=at,m.context=E,o=G):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{m=i.stateNode,Ku(e,i),E=i.memoizedProps,pt=Ts(s,E),m.props=pt,yt=i.pendingProps,lt=m.context,at=s.contextType,G=tr,typeof at=="object"&&at!==null&&(G=On(at)),D=s.getDerivedStateFromProps,(at=typeof D=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==yt||lt!==G)&&$m(i,m,o,G),Da=!1,lt=i.memoizedState,m.state=lt,yo(i,o,m,h),vo();var ut=i.memoizedState;E!==yt||lt!==ut||Da||e!==null&&e.dependencies!==null&&Nl(e.dependencies)?(typeof D=="function"&&(vf(i,s,D,o),ut=i.memoizedState),(pt=Da||Jm(i,s,pt,o,lt,ut,G)||e!==null&&e.dependencies!==null&&Nl(e.dependencies))?(at||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,ut,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,ut,G)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ut),m.props=o,m.state=ut,m.context=G,o=pt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&lt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&lt===e.memoizedState||(i.flags|=1024),o=!1)}return m=o,Jl(e,i),o=(i.flags&128)!==0,m||o?(m=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&o?(i.child=ur(i,e.child,null,h),i.child=ur(i,null,s,h)):Dn(e,i,s,h),i.memoizedState=m.state,e=i.child):e=aa(e,i,h),e}function pg(e,i,s,o){return co(),i.flags|=256,Dn(e,i,s,o),i.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ef(e){return{baseLanes:e,cachePool:em()}}function bf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=di),e}function mg(e,i,s){var o=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ce){if(h?Oa(i):Pa(),Ce){var D=Je,G;if(G=D){t:{for(G=D,D=Ui;G.nodeType!==8;){if(!D){D=null;break t}if(G=Si(G.nextSibling),G===null){D=null;break t}}D=G}D!==null?(i.memoizedState={dehydrated:D,treeContext:_s!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},G=$n(18,null,null,0),G.stateNode=D,G.return=i,i.child=G,Fn=i,Je=null,G=!0):G=!1}G||xs(i)}if(D=i.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return oh(D)?i.lanes=32:i.lanes=536870912,null;ia(i)}return D=o.children,o=o.fallback,h?(Pa(),h=i.mode,D=$l({mode:"hidden",children:D},h),o=gs(o,h,s,null),D.return=i,o.return=i,D.sibling=o,i.child=D,h=i.child,h.memoizedState=Ef(s),h.childLanes=bf(e,E,s),i.memoizedState=Mf,o):(Oa(i),Tf(i,D))}if(G=e.memoizedState,G!==null&&(D=G.dehydrated,D!==null)){if(m)i.flags&256?(Oa(i),i.flags&=-257,i=Af(e,i,s)):i.memoizedState!==null?(Pa(),i.child=e.child,i.flags|=128,i=null):(Pa(),h=o.fallback,D=i.mode,o=$l({mode:"visible",children:o.children},D),h=gs(h,D,s,null),h.flags|=2,o.return=i,h.return=i,o.sibling=h,i.child=o,ur(i,e.child,null,s),o=i.child,o.memoizedState=Ef(s),o.childLanes=bf(e,E,s),i.memoizedState=Mf,i=h);else if(Oa(i),oh(D)){if(E=D.nextSibling&&D.nextSibling.dataset,E)var at=E.dgst;E=at,o=Error(a(419)),o.stack="",o.digest=E,uo({value:o,source:null,stack:null}),i=Af(e,i,s)}else if(En||fo(e,i,s,!1),E=(s&e.childLanes)!==0,En||E){if(E=Ye,E!==null&&(o=s&-s,o=(o&42)!==0?1:ae(o),o=(o&(E.suspendedLanes|s))!==0?0:o,o!==0&&o!==G.retryLane))throw G.retryLane=o,$s(e,o),ai(E,e,o),rg;D.data==="$?"||qf(),i=Af(e,i,s)}else D.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,Je=Si(D.nextSibling),Fn=i,Ce=!0,ys=null,Ui=!1,e!==null&&(ui[fi++]=Ji,ui[fi++]=$i,ui[fi++]=_s,Ji=e.id,$i=e.overflow,_s=i),i=Tf(i,o.children),i.flags|=4096);return i}return h?(Pa(),h=o.fallback,D=i.mode,G=e.child,at=G.sibling,o=Qi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,at!==null?h=Qi(at,h):(h=gs(h,D,s,null),h.flags|=2),h.return=i,o.return=i,o.sibling=h,i.child=o,o=h,h=i.child,D=e.child.memoizedState,D===null?D=Ef(s):(G=D.cachePool,G!==null?(at=pn._currentValue,G=G.parent!==at?{parent:at,pool:at}:G):G=em(),D={baseLanes:D.baseLanes|s,cachePool:G}),h.memoizedState=D,h.childLanes=bf(e,E,s),i.memoizedState=Mf,o):(Oa(i),s=e.child,e=s.sibling,s=Qi(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Tf(e,i){return i=$l({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function $l(e,i){return e=$n(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Af(e,i,s){return ur(i,e.child,null,s),e=Tf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function gg(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),ku(e.return,i,s)}function wf(e,i,s,o,h){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=s,m.tailMode=h)}function _g(e,i,s){var o=i.pendingProps,h=o.revealOrder,m=o.tail;if(Dn(e,i,o.children,s),o=mn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gg(e,s,i);else if(e.tag===19)gg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(xt(mn,o),h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&Zl(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),wf(i,!1,h,s,m);break;case"backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Zl(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}wf(i,!0,s,null,m);break;case"together":wf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function aa(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ha|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(fo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Qi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Qi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Rf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Nl(e)))}function ix(e,i,s){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),Ca(i,pn,e.memoizedState.cache),co();break;case 27:case 5:$t(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:Ca(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Oa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?mg(e,i,s):(Oa(i),e=aa(e,i,s),e!==null?e.sibling:null);Oa(i);break;case 19:var h=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(fo(e,i,s,!1),o=(s&i.childLanes)!==0),h){if(o)return _g(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),xt(mn,mn.current),o)break;return null;case 22:case 23:return i.lanes=0,ug(e,i,s);case 24:Ca(i,pn,e.memoizedState.cache)}return aa(e,i,s)}function vg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)En=!0;else{if(!Rf(e,s)&&(i.flags&128)===0)return En=!1,ix(e,i,s);En=(e.flags&131072)!==0}else En=!1,Ce&&(i.flags&1048576)!==0&&jp(i,Ll,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,h=o._init;if(o=h(o._payload),i.type=o,typeof o=="function")zu(o)?(e=Ts(o,e),i.tag=1,i=dg(null,i,o,e,s)):(i.tag=0,i=Sf(null,i,o,e,s));else{if(o!=null){if(h=o.$$typeof,h===A){i.tag=11,i=og(null,i,o,e,s);break t}else if(h===I){i.tag=14,i=lg(null,i,o,e,s);break t}}throw i=K(o)||o,Error(a(306,i,""))}}return i;case 0:return Sf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,h=Ts(o,i.pendingProps),dg(e,i,o,h,s);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var m=i.memoizedState;h=m.element,Ku(e,i),yo(i,o,null,s);var E=i.memoizedState;if(o=E.cache,Ca(i,pn,o),o!==m.cache&&qu(i,[pn],s,!0),vo(),o=E.element,m.isDehydrated)if(m={element:o,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=pg(e,i,o,s);break t}else if(o!==h){h=li(Error(a(424)),i),uo(h),i=pg(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=Si(e.firstChild),Fn=i,Ce=!0,ys=null,Ui=!0,s=Km(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(co(),o===h){i=aa(e,i,s);break t}Dn(e,i,o,s)}i=i.child}return i;case 26:return Jl(e,i),e===null?(s=M_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ce||(s=i.type,e=i.pendingProps,o=dc(Mt.current).createElement(s),o[hn]=i,o[Rn]=e,Ln(o,s,e),rn(o),i.stateNode=o):i.memoizedState=M_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return $t(i),e===null&&Ce&&(o=i.stateNode=y_(i.type,i.pendingProps,Mt.current),Fn=i,Ui=!0,h=Je,qa(i.type)?(lh=h,Je=Si(o.firstChild)):Je=h),Dn(e,i,i.pendingProps.children,s),Jl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ce&&((h=o=Je)&&(o=Ux(o,i.type,i.pendingProps,Ui),o!==null?(i.stateNode=o,Fn=i,Je=Si(o.firstChild),Ui=!1,h=!0):h=!1),h||xs(i)),$t(i),h=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,o=m.children,ah(h,m)?o=null:E!==null&&ah(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=nf(e,i,Zy,null,null,s),Go._currentValue=h),Jl(e,i),Dn(e,i,o,s),i.child;case 6:return e===null&&Ce&&((e=s=Je)&&(s=Lx(s,i.pendingProps,Ui),s!==null?(i.stateNode=s,Fn=i,Je=null,e=!0):e=!1),e||xs(i)),null;case 13:return mg(e,i,s);case 4:return Ct(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=ur(i,null,o,s):Dn(e,i,o,s),i.child;case 11:return og(e,i,i.type,i.pendingProps,s);case 7:return Dn(e,i,i.pendingProps,s),i.child;case 8:return Dn(e,i,i.pendingProps.children,s),i.child;case 12:return Dn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Ca(i,i.type,o.value),Dn(e,i,o.children,s),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,Ms(i),h=On(h),o=o(h),i.flags|=1,Dn(e,i,o,s),i.child;case 14:return lg(e,i,i.type,i.pendingProps,s);case 15:return cg(e,i,i.type,i.pendingProps,s);case 19:return _g(e,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},e===null?(s=$l(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=Qi(e.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return ug(e,i,s);case 24:return Ms(i),o=On(pn),e===null?(h=Yu(),h===null&&(h=Ye,m=Xu(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:o,cache:h},Zu(i),Ca(i,pn,h)):((e.lanes&s)!==0&&(Ku(e,i),yo(i,null,null,s),vo()),h=e.memoizedState,m=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ca(i,pn,o)):(o=m.cache,Ca(i,pn,o),o!==h.cache&&qu(i,[pn],s,!0))),Dn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function sa(e){e.flags|=4}function yg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!w_(i)){if(i=hi.current,i!==null&&((Ee&4194048)===Ee?Li!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||i!==Li))throw go=ju,nm;e.flags|=8192}}function tc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Lt():536870912,e.lanes|=i,pr|=i)}function Ao(e,i){if(!Ce)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function ax(e,i,s){var o=i.pendingProps;switch(Hu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(i),null;case 1:return Qe(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ea(pn),ue(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(lo(i)?sa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qp())),Qe(i),null;case 26:return s=i.memoizedState,e===null?(sa(i),s!==null?(Qe(i),yg(i,s)):(Qe(i),i.flags&=-16777217)):s?s!==e.memoizedState?(sa(i),Qe(i),yg(i,s)):(Qe(i),i.flags&=-16777217):(e.memoizedProps!==o&&sa(i),Qe(i),i.flags&=-16777217),null;case 27:ze(i),s=Mt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&sa(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Qe(i),null}e=tt.current,lo(i)?Zp(i):(e=y_(h,o,s),i.stateNode=e,sa(i))}return Qe(i),null;case 5:if(ze(i),s=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&sa(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Qe(i),null}if(e=tt.current,lo(i))Zp(i);else{switch(h=dc(Mt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?h.createElement("select",{is:o.is}):h.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?h.createElement(s,{is:o.is}):h.createElement(s)}}e[hn]=i,e[Rn]=o;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Ln(e,s,o),s){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&sa(i)}}return Qe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&sa(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=Mt.current,lo(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,h=Fn,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[hn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||h_(e.nodeValue,s)),e||xs(i)}else e=dc(e).createTextNode(o),e[hn]=i,i.stateNode=e}return Qe(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=lo(i),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[hn]=i}else co(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),h=!1}else h=Qp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ia(i),i):(ia(i),null)}if(ia(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,e=e!==null&&e.memoizedState!==null,s){o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool);var m=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==h&&(o.flags|=2048)}return s!==e&&s&&(i.child.flags|=8192),tc(i,i.updateQueue),Qe(i),null;case 4:return ue(),e===null&&$f(i.stateNode.containerInfo),Qe(i),null;case 10:return ea(i.type),Qe(i),null;case 19:if(st(mn),h=i.memoizedState,h===null)return Qe(i),null;if(o=(i.flags&128)!==0,m=h.rendering,m===null)if(o)Ao(h,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Zl(e),m!==null){for(i.flags|=128,Ao(h,!1),e=m.updateQueue,i.updateQueue=e,tc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Yp(s,e),s=s.sibling;return xt(mn,mn.current&1|2),i.child}e=e.sibling}h.tail!==null&&ge()>ic&&(i.flags|=128,o=!0,Ao(h,!1),i.lanes=4194304)}else{if(!o)if(e=Zl(m),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,tc(i,e),Ao(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ce)return Qe(i),null}else 2*ge()-h.renderingStartTime>ic&&s!==536870912&&(i.flags|=128,o=!0,Ao(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(e=h.last,e!==null?e.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=ge(),i.sibling=null,e=mn.current,xt(mn,o?e&1|2:e&1),i):(Qe(i),null);case 22:case 23:return ia(i),tf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Qe(i),i.subtreeFlags&6&&(i.flags|=8192)):Qe(i),s=i.updateQueue,s!==null&&tc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&st(Es),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ea(pn),Qe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function sx(e,i){switch(Hu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ea(pn),ue(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ze(i),null;case 13:if(ia(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));co()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return st(mn),null;case 4:return ue(),null;case 10:return ea(i.type),null;case 22:case 23:return ia(i),tf(),e!==null&&st(Es),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ea(pn),null;case 25:return null;default:return null}}function xg(e,i){switch(Hu(i),i.tag){case 3:ea(pn),ue();break;case 26:case 27:case 5:ze(i);break;case 4:ue();break;case 13:ia(i);break;case 19:st(mn);break;case 10:ea(i.type);break;case 22:case 23:ia(i),tf(),e!==null&&st(Es);break;case 24:ea(pn)}}function wo(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var h=o.next;s=h;do{if((s.tag&e)===e){o=void 0;var m=s.create,E=s.inst;o=m(),E.destroy=o}s=s.next}while(s!==h)}}catch(D){Xe(i,i.return,D)}}function za(e,i,s){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var m=h.next;o=m;do{if((o.tag&e)===e){var E=o.inst,D=E.destroy;if(D!==void 0){E.destroy=void 0,h=i;var G=s,at=D;try{at()}catch(pt){Xe(h,G,pt)}}}o=o.next}while(o!==m)}}catch(pt){Xe(i,i.return,pt)}}function Sg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{lm(i,s)}catch(o){Xe(e,e.return,o)}}}function Mg(e,i,s){s.props=Ts(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Xe(e,i,o)}}function Ro(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(h){Xe(e,i,h)}}function Ni(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(h){Xe(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Xe(e,i,h)}else s.current=null}function Eg(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(h){Xe(e,e.return,h)}}function Cf(e,i,s){try{var o=e.stateNode;Ax(o,e.type,s,i),o[Rn]=i}catch(h){Xe(e,e.return,h)}}function bg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function Df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||bg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uf(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=hc));else if(o!==4&&(o===27&&qa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Uf(e,i,s),e=e.sibling;e!==null;)Uf(e,i,s),e=e.sibling}function ec(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&qa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(ec(e,i,s),e=e.sibling;e!==null;)ec(e,i,s),e=e.sibling}function Tg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ln(i,o,s),i[hn]=e,i[Rn]=s}catch(m){Xe(e,e.return,m)}}var ra=!1,sn=!1,Lf=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,bn=null;function rx(e,i){if(e=e.containerInfo,nh=yc,e=Bp(e),Cu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var h=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,D=-1,G=-1,at=0,pt=0,yt=e,lt=null;e:for(;;){for(var ut;yt!==s||h!==0&&yt.nodeType!==3||(D=E+h),yt!==m||o!==0&&yt.nodeType!==3||(G=E+o),yt.nodeType===3&&(E+=yt.nodeValue.length),(ut=yt.firstChild)!==null;)lt=yt,yt=ut;for(;;){if(yt===e)break e;if(lt===s&&++at===h&&(D=E),lt===m&&++pt===o&&(G=E),(ut=yt.nextSibling)!==null)break;yt=lt,lt=yt.parentNode}yt=ut}s=D===-1||G===-1?null:{start:D,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(ih={focusedElem:e,selectionRange:s},yc=!1,bn=i;bn!==null;)if(i=bn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,bn=e;else for(;bn!==null;){switch(i=bn,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,o=s.stateNode;try{var ie=Ts(s.type,h,s.elementType===s.type);e=o.getSnapshotBeforeUpdate(ie,m),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Xe(s,s.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)rh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,bn=e;break}bn=i.return}}function wg(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Ba(e,s),o&4&&wo(5,s);break;case 1:if(Ba(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){Xe(s,s.return,E)}else{var h=Ts(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Xe(s,s.return,E)}}o&64&&Sg(s),o&512&&Ro(s,s.return);break;case 3:if(Ba(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{lm(e,i)}catch(E){Xe(s,s.return,E)}}break;case 27:i===null&&o&4&&Tg(s);case 26:case 5:Ba(e,s),i===null&&o&4&&Eg(s),o&512&&Ro(s,s.return);break;case 12:Ba(e,s);break;case 13:Ba(e,s),o&4&&Dg(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=mx.bind(null,s),Nx(e,s))));break;case 22:if(o=s.memoizedState!==null||ra,!o){i=i!==null&&i.memoizedState!==null||sn,h=ra;var m=sn;ra=o,(sn=i)&&!m?Ia(e,s,(s.subtreeFlags&8772)!==0):Ba(e,s),ra=h,sn=m}break;case 30:break;default:Ba(e,s)}}function Rg(e){var i=e.alternate;i!==null&&(e.alternate=null,Rg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Ta(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,qn=!1;function oa(e,i,s){for(s=s.child;s!==null;)Cg(e,i,s),s=s.sibling}function Cg(e,i,s){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(mt,s)}catch{}switch(s.tag){case 26:sn||Ni(s,i),oa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||Ni(s,i);var o=Ke,h=qn;qa(s.type)&&(Ke=s.stateNode,qn=!1),oa(e,i,s),Bo(s.stateNode),Ke=o,qn=h;break;case 5:sn||Ni(s,i);case 6:if(o=Ke,h=qn,Ke=null,oa(e,i,s),Ke=o,qn=h,Ke!==null)if(qn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(s.stateNode)}catch(m){Xe(s,i,m)}else try{Ke.removeChild(s.stateNode)}catch(m){Xe(s,i,m)}break;case 18:Ke!==null&&(qn?(e=Ke,__(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Xo(e)):__(Ke,s.stateNode));break;case 4:o=Ke,h=qn,Ke=s.stateNode.containerInfo,qn=!0,oa(e,i,s),Ke=o,qn=h;break;case 0:case 11:case 14:case 15:sn||za(2,s,i),sn||za(4,s,i),oa(e,i,s);break;case 1:sn||(Ni(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Mg(s,i,o)),oa(e,i,s);break;case 21:oa(e,i,s);break;case 22:sn=(o=sn)||s.memoizedState!==null,oa(e,i,s),sn=o;break;default:oa(e,i,s)}}function Dg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xo(e)}catch(s){Xe(i,i.return,s)}}function ox(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ag),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ag),i;default:throw Error(a(435,e.tag))}}function Nf(e,i){var s=ox(e);i.forEach(function(o){var h=gx.bind(null,e,o);s.has(o)||(s.add(o),o.then(h,h))})}function ti(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var h=s[o],m=e,E=i,D=E;t:for(;D!==null;){switch(D.tag){case 27:if(qa(D.type)){Ke=D.stateNode,qn=!1;break t}break;case 5:Ke=D.stateNode,qn=!1;break t;case 3:case 4:Ke=D.stateNode.containerInfo,qn=!0;break t}D=D.return}if(Ke===null)throw Error(a(160));Cg(m,E,h),Ke=null,qn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ug(i,e),i=i.sibling}var xi=null;function Ug(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(i,e),ei(e),o&4&&(za(3,e,e.return),wo(3,e),za(5,e,e.return));break;case 1:ti(i,e),ei(e),o&512&&(sn||s===null||Ni(s,s.return)),o&64&&ra&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var h=xi;if(ti(i,e),ei(e),o&512&&(sn||s===null||Ni(s,s.return)),o&4){var m=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":m=h.getElementsByTagName("title")[0],(!m||m[ba]||m[hn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(o),h.head.insertBefore(m,h.querySelector("head > title"))),Ln(m,o,s),m[hn]=e,rn(m),o=m;break t;case"link":var E=T_("link","href",h).get(o+(s.href||""));if(E){for(var D=0;D<E.length;D++)if(m=E[D],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(D,1);break e}}m=h.createElement(o),Ln(m,o,s),h.head.appendChild(m);break;case"meta":if(E=T_("meta","content",h).get(o+(s.content||""))){for(D=0;D<E.length;D++)if(m=E[D],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(D,1);break e}}m=h.createElement(o),Ln(m,o,s),h.head.appendChild(m);break;default:throw Error(a(468,o))}m[hn]=e,rn(m),o=m}e.stateNode=o}else A_(h,e.type,e.stateNode);else e.stateNode=b_(h,o,e.memoizedProps);else m!==o?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,o===null?A_(h,e.type,e.stateNode):b_(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,s.memoizedProps)}break;case 27:ti(i,e),ei(e),o&512&&(sn||s===null||Ni(s,s.return)),s!==null&&o&4&&Cf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ti(i,e),ei(e),o&512&&(sn||s===null||Ni(s,s.return)),e.flags&32){h=e.stateNode;try{Di(h,"")}catch(ut){Xe(e,e.return,ut)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,Cf(e,h,s!==null?s.memoizedProps:h)),o&1024&&(Lf=!0);break;case 6:if(ti(i,e),ei(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(ut){Xe(e,e.return,ut)}}break;case 3:if(gc=null,h=xi,xi=pc(i.containerInfo),ti(i,e),xi=h,ei(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Xo(i.containerInfo)}catch(ut){Xe(e,e.return,ut)}Lf&&(Lf=!1,Lg(e));break;case 4:o=xi,xi=pc(e.stateNode.containerInfo),ti(i,e),ei(e),xi=o;break;case 12:ti(i,e),ei(e);break;case 13:ti(i,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ff=ge()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nf(e,o)));break;case 22:h=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,at=ra,pt=sn;if(ra=at||h,sn=pt||G,ti(i,e),sn=pt,ra=at,ei(e),o&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||G||ra||sn||As(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(m=G.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{D=G.stateNode;var yt=G.memoizedProps.style,lt=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;D.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(ut){Xe(G,G.return,ut)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=h?"":G.memoizedProps}catch(ut){Xe(G,G.return,ut)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Nf(e,s))));break;case 19:ti(i,e),ei(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Nf(e,o)));break;case 30:break;case 21:break;default:ti(i,e),ei(e)}}function ei(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(bg(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=Df(e);ec(e,m,h);break;case 5:var E=s.stateNode;s.flags&32&&(Di(E,""),s.flags&=-33);var D=Df(e);ec(e,D,E);break;case 3:case 4:var G=s.stateNode.containerInfo,at=Df(e);Uf(e,at,G);break;default:throw Error(a(161))}}catch(pt){Xe(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Lg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Lg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ba(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)wg(e,i.alternate,i),i=i.sibling}function As(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:za(4,i,i.return),As(i);break;case 1:Ni(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Mg(i,i.return,s),As(i);break;case 27:Bo(i.stateNode);case 26:case 5:Ni(i,i.return),As(i);break;case 22:i.memoizedState===null&&As(i);break;case 30:As(i);break;default:As(i)}e=e.sibling}}function Ia(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ia(h,m,s),wo(4,m);break;case 1:if(Ia(h,m,s),o=m,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(at){Xe(o,o.return,at)}if(o=m,h=o.updateQueue,h!==null){var D=o.stateNode;try{var G=h.shared.hiddenCallbacks;if(G!==null)for(h.shared.hiddenCallbacks=null,h=0;h<G.length;h++)om(G[h],D)}catch(at){Xe(o,o.return,at)}}s&&E&64&&Sg(m),Ro(m,m.return);break;case 27:Tg(m);case 26:case 5:Ia(h,m,s),s&&o===null&&E&4&&Eg(m),Ro(m,m.return);break;case 12:Ia(h,m,s);break;case 13:Ia(h,m,s),s&&E&4&&Dg(h,m);break;case 22:m.memoizedState===null&&Ia(h,m,s),Ro(m,m.return);break;case 30:break;default:Ia(h,m,s)}i=i.sibling}}function Of(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&ho(s))}function Pf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ho(e))}function Oi(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ng(e,i,s,o),i=i.sibling}function Ng(e,i,s,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Oi(e,i,s,o),h&2048&&wo(9,i);break;case 1:Oi(e,i,s,o);break;case 3:Oi(e,i,s,o),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ho(e)));break;case 12:if(h&2048){Oi(e,i,s,o),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,D=m.onPostCommit;typeof D=="function"&&D(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Xe(i,i.return,G)}}else Oi(e,i,s,o);break;case 13:Oi(e,i,s,o);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Oi(e,i,s,o):Co(e,i):m._visibility&2?Oi(e,i,s,o):(m._visibility|=2,fr(e,i,s,o,(i.subtreeFlags&10256)!==0)),h&2048&&Of(E,i);break;case 24:Oi(e,i,s,o),h&2048&&Pf(i.alternate,i);break;default:Oi(e,i,s,o)}}function fr(e,i,s,o,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,E=i,D=s,G=o,at=E.flags;switch(E.tag){case 0:case 11:case 15:fr(m,E,D,G,h),wo(8,E);break;case 23:break;case 22:var pt=E.stateNode;E.memoizedState!==null?pt._visibility&2?fr(m,E,D,G,h):Co(m,E):(pt._visibility|=2,fr(m,E,D,G,h)),h&&at&2048&&Of(E.alternate,E);break;case 24:fr(m,E,D,G,h),h&&at&2048&&Pf(E.alternate,E);break;default:fr(m,E,D,G,h)}i=i.sibling}}function Co(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,h=o.flags;switch(o.tag){case 22:Co(s,o),h&2048&&Of(o.alternate,o);break;case 24:Co(s,o),h&2048&&Pf(o.alternate,o);break;default:Co(s,o)}i=i.sibling}}var Do=8192;function hr(e){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)Og(e),e=e.sibling}function Og(e){switch(e.tag){case 26:hr(e),e.flags&Do&&e.memoizedState!==null&&Wx(xi,e.memoizedState,e.memoizedProps);break;case 5:hr(e);break;case 3:case 4:var i=xi;xi=pc(e.stateNode.containerInfo),hr(e),xi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Do,Do=16777216,hr(e),Do=i):hr(e));break;default:hr(e)}}function Pg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Uo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];bn=o,Bg(o,e)}Pg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zg(e),e=e.sibling}function zg(e){switch(e.tag){case 0:case 11:case 15:Uo(e),e.flags&2048&&za(9,e,e.return);break;case 3:Uo(e);break;case 12:Uo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,nc(e)):Uo(e);break;default:Uo(e)}}function nc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];bn=o,Bg(o,e)}Pg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:za(8,i,i.return),nc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,nc(i));break;default:nc(i)}e=e.sibling}}function Bg(e,i){for(;bn!==null;){var s=bn;switch(s.tag){case 0:case 11:case 15:za(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,bn=o;else t:for(s=e;bn!==null;){o=bn;var h=o.sibling,m=o.return;if(Rg(o),o===s){bn=null;break t}if(h!==null){h.return=m,bn=h;break t}bn=m}}}var lx={getCacheForType:function(e){var i=On(pn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s}},cx=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,_e=null,Ee=0,Pe=0,ni=null,Fa=!1,dr=!1,zf=!1,la=0,$e=0,Ha=0,ws=0,Bf=0,di=0,pr=0,Lo=null,Xn=null,If=!1,Ff=0,ic=1/0,ac=null,Ga=null,Un=0,Va=null,mr=null,gr=0,Hf=0,Gf=null,Ig=null,No=0,Vf=null;function ii(){if((Oe&2)!==0&&Ee!==0)return Ee&-Ee;if(O.T!==null){var e=ir;return e!==0?e:Zf()}return Te()}function Fg(){di===0&&(di=(Ee&536870912)===0||Ce?j():536870912);var e=hi.current;return e!==null&&(e.flags|=32),di}function ai(e,i,s){(e===Ye&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(_r(e,0),ka(e,Ee,di,!1)),Bt(e,s),((Oe&2)===0||e!==Ye)&&(e===Ye&&((Oe&2)===0&&(ws|=s),$e===4&&ka(e,Ee,di,!1)),Pi(e))}function Hg(e,i,s){if((Oe&6)!==0)throw Error(a(327));var o=!s&&(i&124)===0&&(i&e.expiredLanes)===0||Rt(e,i),h=o?hx(e,i):Xf(e,i,!0),m=o;do{if(h===0){dr&&!o&&ka(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!ux(s)){h=Xf(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var D=e;h=Lo;var G=D.current.memoizedState.isDehydrated;if(G&&(_r(D,E).flags|=256),E=Xf(D,E,!1),E!==2){if(zf&&!G){D.errorRecoveryDisabledLanes|=m,ws|=m,h=4;break t}m=Xn,Xn=h,m!==null&&(Xn===null?Xn=m:Xn.push.apply(Xn,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){_r(e,0),ka(e,i,0,!0);break}t:{switch(o=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ka(o,i,di,!Fa);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Ff+300-ge(),10<h)){if(ka(o,i,di,!Fa),Zt(o,0,!0)!==0)break t;o.timeoutHandle=m_(Gg.bind(null,o,s,Xn,ac,If,i,di,ws,pr,Fa,m,2,-0,0),h);break t}Gg(o,s,Xn,ac,If,i,di,ws,pr,Fa,m,0,-0,0)}}break}while(!0);Pi(e)}function Gg(e,i,s,o,h,m,E,D,G,at,pt,yt,lt,ut){if(e.timeoutHandle=-1,yt=i.subtreeFlags,(yt&8192||(yt&16785408)===16785408)&&(Ho={stylesheets:null,count:0,unsuspend:Xx},Og(i),yt=Yx(),yt!==null)){e.cancelPendingCommit=yt(jg.bind(null,e,i,m,s,o,h,E,D,G,pt,1,lt,ut)),ka(e,m,E,!at);return}jg(e,i,m,s,o,h,E,D,G)}function ux(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var h=s[o],m=h.getSnapshot;h=h.value;try{if(!Jn(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ka(e,i,s,o){i&=~Bf,i&=~ws,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var h=i;0<h;){var m=31-Pt(h),E=1<<m;o[m]=-1,h&=~E}s!==0&&St(e,s,i)}function sc(){return(Oe&6)===0?(Oo(0),!1):!0}function kf(){if(_e!==null){if(Pe===0)var e=_e.return;else e=_e,ta=Ss=null,rf(e),cr=null,bo=0,e=_e;for(;e!==null;)xg(e.alternate,e),e=e.return;_e=null}}function _r(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Rx(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),kf(),Ye=e,_e=s=Qi(e.current,null),Ee=i,Pe=0,ni=null,Fa=!1,dr=Rt(e,i),zf=!1,pr=di=Bf=ws=Ha=$e=0,Xn=Lo=null,If=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var h=31-Pt(o),m=1<<h;i|=e[h],o&=~m}return la=i,wl(),s}function Vg(e,i){de=null,O.H=Wl,i===mo||i===zl?(i=sm(),Pe=3):i===nm?(i=sm(),Pe=4):Pe=i===rg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ni=i,_e===null&&($e=1,Ql(e,li(i,e.current)))}function kg(){var e=O.H;return O.H=Wl,e===null?Wl:e}function qg(){var e=O.A;return O.A=lx,e}function qf(){$e=4,Fa||(Ee&4194048)!==Ee&&hi.current!==null||(dr=!0),(Ha&134217727)===0&&(ws&134217727)===0||Ye===null||ka(Ye,Ee,di,!1)}function Xf(e,i,s){var o=Oe;Oe|=2;var h=kg(),m=qg();(Ye!==e||Ee!==i)&&(ac=null,_r(e,i)),i=!1;var E=$e;t:do try{if(Pe!==0&&_e!==null){var D=_e,G=ni;switch(Pe){case 8:kf(),E=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(i=!0);var at=Pe;if(Pe=0,ni=null,vr(e,D,G,at),s&&dr){E=0;break t}break;default:at=Pe,Pe=0,ni=null,vr(e,D,G,at)}}fx(),E=$e;break}catch(pt){Vg(e,pt)}while(!0);return i&&e.shellSuspendCounter++,ta=Ss=null,Oe=o,O.H=h,O.A=m,_e===null&&(Ye=null,Ee=0,wl()),E}function fx(){for(;_e!==null;)Xg(_e)}function hx(e,i){var s=Oe;Oe|=2;var o=kg(),h=qg();Ye!==e||Ee!==i?(ac=null,ic=ge()+500,_r(e,i)):dr=Rt(e,i);t:do try{if(Pe!==0&&_e!==null){i=_e;var m=ni;e:switch(Pe){case 1:Pe=0,ni=null,vr(e,i,m,1);break;case 2:case 9:if(im(m)){Pe=0,ni=null,Wg(i);break}i=function(){Pe!==2&&Pe!==9||Ye!==e||(Pe=7),Pi(e)},m.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:im(m)?(Pe=0,ni=null,Wg(i)):(Pe=0,ni=null,vr(e,i,m,7));break;case 5:var E=null;switch(_e.tag){case 26:E=_e.memoizedState;case 5:case 27:var D=_e;if(!E||w_(E)){Pe=0,ni=null;var G=D.sibling;if(G!==null)_e=G;else{var at=D.return;at!==null?(_e=at,rc(at)):_e=null}break e}}Pe=0,ni=null,vr(e,i,m,5);break;case 6:Pe=0,ni=null,vr(e,i,m,6);break;case 8:kf(),$e=6;break t;default:throw Error(a(462))}}dx();break}catch(pt){Vg(e,pt)}while(!0);return ta=Ss=null,O.H=o,O.A=h,Oe=s,_e!==null?0:(Ye=null,Ee=0,wl(),$e)}function dx(){for(;_e!==null&&!wn();)Xg(_e)}function Xg(e){var i=vg(e.alternate,e,la);e.memoizedProps=e.pendingProps,i===null?rc(e):_e=i}function Wg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=hg(s,i,i.pendingProps,i.type,void 0,Ee);break;case 11:i=hg(s,i,i.pendingProps,i.type.render,i.ref,Ee);break;case 5:rf(i);default:xg(s,i),i=_e=Yp(i,la),i=vg(s,i,la)}e.memoizedProps=e.pendingProps,i===null?rc(e):_e=i}function vr(e,i,s,o){ta=Ss=null,rf(i),cr=null,bo=0;var h=i.return;try{if(nx(e,h,i,s,Ee)){$e=1,Ql(e,li(s,e.current)),_e=null;return}}catch(m){if(h!==null)throw _e=h,m;$e=1,Ql(e,li(s,e.current)),_e=null;return}i.flags&32768?(Ce||o===1?e=!0:dr||(Ee&536870912)!==0?e=!1:(Fa=e=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Yg(i,e)):rc(i)}function rc(e){var i=e;do{if((i.flags&32768)!==0){Yg(i,Fa);return}e=i.return;var s=ax(i.alternate,i,la);if(s!==null){_e=s;return}if(i=i.sibling,i!==null){_e=i;return}_e=i=e}while(i!==null);$e===0&&($e=5)}function Yg(e,i){do{var s=sx(e.alternate,e);if(s!==null){s.flags&=32767,_e=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){_e=e;return}_e=e=s}while(e!==null);$e=6,_e=null}function jg(e,i,s,o,h,m,E,D,G){e.cancelPendingCommit=null;do oc();while(Un!==0);if((Oe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Ou,At(e,s,m,E,D,G),e===Ye&&(_e=Ye=null,Ee=0),mr=i,Va=e,gr=s,Hf=m,Gf=h,Ig=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_x(re,function(){return $g(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,h=Z.p,Z.p=2,E=Oe,Oe|=4;try{rx(e,i,s)}finally{Oe=E,Z.p=h,O.T=o}}Un=1,Zg(),Kg(),Qg()}}function Zg(){if(Un===1){Un=0;var e=Va,i=mr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=O.T,O.T=null;var o=Z.p;Z.p=2;var h=Oe;Oe|=4;try{Ug(i,e);var m=ih,E=Bp(e.containerInfo),D=m.focusedElem,G=m.selectionRange;if(E!==D&&D&&D.ownerDocument&&zp(D.ownerDocument.documentElement,D)){if(G!==null&&Cu(D)){var at=G.start,pt=G.end;if(pt===void 0&&(pt=at),"selectionStart"in D)D.selectionStart=at,D.selectionEnd=Math.min(pt,D.value.length);else{var yt=D.ownerDocument||document,lt=yt&&yt.defaultView||window;if(lt.getSelection){var ut=lt.getSelection(),ie=D.textContent.length,te=Math.min(G.start,ie),He=G.end===void 0?te:Math.min(G.end,ie);!ut.extend&&te>He&&(E=He,He=te,te=E);var Q=Pp(D,te),W=Pp(D,He);if(Q&&W&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var it=yt.createRange();it.setStart(Q.node,Q.offset),ut.removeAllRanges(),te>He?(ut.addRange(it),ut.extend(W.node,W.offset)):(it.setEnd(W.node,W.offset),ut.addRange(it))}}}}for(yt=[],ut=D;ut=ut.parentNode;)ut.nodeType===1&&yt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<yt.length;D++){var _t=yt[D];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}yc=!!nh,ih=nh=null}finally{Oe=h,Z.p=o,O.T=s}}e.current=i,Un=2}}function Kg(){if(Un===2){Un=0;var e=Va,i=mr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=O.T,O.T=null;var o=Z.p;Z.p=2;var h=Oe;Oe|=4;try{wg(e,i.alternate,i)}finally{Oe=h,Z.p=o,O.T=s}}Un=3}}function Qg(){if(Un===4||Un===3){Un=0,be();var e=Va,i=mr,s=gr,o=Ig;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Un=5:(Un=0,mr=Va=null,Jg(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Ga=null),Ne(s),i=i.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(mt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=O.T,h=Z.p,Z.p=2,O.T=null;try{for(var m=e.onRecoverableError,E=0;E<o.length;E++){var D=o[E];m(D.value,{componentStack:D.stack})}}finally{O.T=i,Z.p=h}}(gr&3)!==0&&oc(),Pi(e),h=e.pendingLanes,(s&4194090)!==0&&(h&42)!==0?e===Vf?No++:(No=0,Vf=e):No=0,Oo(0)}}function Jg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ho(i)))}function oc(e){return Zg(),Kg(),Qg(),$g()}function $g(){if(Un!==5)return!1;var e=Va,i=Hf;Hf=0;var s=Ne(gr),o=O.T,h=Z.p;try{Z.p=32>s?32:s,O.T=null,s=Gf,Gf=null;var m=Va,E=gr;if(Un=0,mr=Va=null,gr=0,(Oe&6)!==0)throw Error(a(331));var D=Oe;if(Oe|=4,zg(m.current),Ng(m,m.current,E,s),Oe=D,Oo(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(mt,m)}catch{}return!0}finally{Z.p=h,O.T=o,Jg(e,i)}}function t_(e,i,s){i=li(s,i),i=xf(e.stateNode,i,2),e=La(e,i,2),e!==null&&(Bt(e,2),Pi(e))}function Xe(e,i,s){if(e.tag===3)t_(e,e,s);else for(;i!==null;){if(i.tag===3){t_(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){e=li(s,e),s=ag(2),o=La(i,s,2),o!==null&&(sg(s,o,i,e),Bt(o,2),Pi(o));break}}i=i.return}}function Wf(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new cx;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(s)||(zf=!0,h.add(s),e=px.bind(null,e,i,s),i.then(e,e))}function px(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ye===e&&(Ee&s)===s&&($e===4||$e===3&&(Ee&62914560)===Ee&&300>ge()-Ff?(Oe&2)===0&&_r(e,0):Bf|=s,pr===Ee&&(pr=0)),Pi(e)}function e_(e,i){i===0&&(i=Lt()),e=$s(e,i),e!==null&&(Bt(e,i),Pi(e))}function mx(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),e_(e,s)}function gx(e,i){var s=0;switch(e.tag){case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),e_(e,s)}function _x(e,i){return xe(e,i)}var lc=null,yr=null,Yf=!1,cc=!1,jf=!1,Rs=0;function Pi(e){e!==yr&&e.next===null&&(yr===null?lc=yr=e:yr=yr.next=e),cc=!0,Yf||(Yf=!0,yx())}function Oo(e,i){if(!jf&&cc){jf=!0;do for(var s=!1,o=lc;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var m=0;else{var E=o.suspendedLanes,D=o.pingedLanes;m=(1<<31-Pt(42|e)+1)-1,m&=h&~(E&~D),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,s_(o,m))}else m=Ee,m=Zt(o,o===Ye?m:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(m&3)===0||Rt(o,m)||(s=!0,s_(o,m));o=o.next}while(s);jf=!1}}function vx(){n_()}function n_(){cc=Yf=!1;var e=0;Rs!==0&&(wx()&&(e=Rs),Rs=0);for(var i=ge(),s=null,o=lc;o!==null;){var h=o.next,m=i_(o,i);m===0?(o.next=null,s===null?lc=h:s.next=h,h===null&&(yr=s)):(s=o,(e!==0||(m&3)!==0)&&(cc=!0)),o=h}Oo(e)}function i_(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Pt(m),D=1<<E,G=h[E];G===-1?((D&s)===0||(D&o)!==0)&&(h[E]=se(D,i)):G<=i&&(e.expiredLanes|=D),m&=~D}if(i=Ye,s=Ee,s=Zt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&X(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Rt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&X(o),Ne(s)){case 2:case 8:s=Kt;break;case 32:s=re;break;case 268435456:s=F;break;default:s=re}return o=a_.bind(null,e),s=xe(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&X(o),e.callbackPriority=2,e.callbackNode=null,2}function a_(e,i){if(Un!==0&&Un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(oc()&&e.callbackNode!==s)return null;var o=Ee;return o=Zt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Hg(e,o,i),i_(e,ge()),e.callbackNode!=null&&e.callbackNode===s?a_.bind(null,e):null)}function s_(e,i){if(oc())return null;Hg(e,i,!0)}function yx(){Cx(function(){(Oe&6)!==0?xe(Se,vx):n_()})}function Zf(){return Rs===0&&(Rs=j()),Rs}function r_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xl(""+e)}function o_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function xx(e,i,s,o,h){if(i==="submit"&&s&&s.stateNode===h){var m=r_((h[Rn]||null).action),E=o.submitter;E&&(i=(i=E[Rn]||null)?r_(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var D=new bl("action","action",null,o,h);e.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Rs!==0){var G=E?o_(h,E):new FormData(h);mf(s,{pending:!0,data:G,method:h.method,action:m},null,G)}}else typeof m=="function"&&(D.preventDefault(),G=E?o_(h,E):new FormData(h),mf(s,{pending:!0,data:G,method:h.method,action:m},m,G))},currentTarget:h}]})}}for(var Kf=0;Kf<Nu.length;Kf++){var Qf=Nu[Kf],Sx=Qf.toLowerCase(),Mx=Qf[0].toUpperCase()+Qf.slice(1);yi(Sx,"on"+Mx)}yi(Hp,"onAnimationEnd"),yi(Gp,"onAnimationIteration"),yi(Vp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Fy,"onTransitionRun"),yi(Hy,"onTransitionStart"),yi(Gy,"onTransitionCancel"),yi(kp,"onTransitionEnd"),L("onMouseEnter",["mouseout","mouseover"]),L("onMouseLeave",["mouseout","mouseover"]),L("onPointerEnter",["pointerout","pointerover"]),L("onPointerLeave",["pointerout","pointerover"]),Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ex=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function l_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],h=o.event;o=o.listeners;t:{var m=void 0;if(i)for(var E=o.length-1;0<=E;E--){var D=o[E],G=D.instance,at=D.currentTarget;if(D=D.listener,G!==m&&h.isPropagationStopped())break t;m=D,h.currentTarget=at;try{m(h)}catch(pt){Kl(pt)}h.currentTarget=null,m=G}else for(E=0;E<o.length;E++){if(D=o[E],G=D.instance,at=D.currentTarget,D=D.listener,G!==m&&h.isPropagationStopped())break t;m=D,h.currentTarget=at;try{m(h)}catch(pt){Kl(pt)}h.currentTarget=null,m=G}}}}function ve(e,i){var s=i[us];s===void 0&&(s=i[us]=new Set);var o=e+"__bubble";s.has(o)||(c_(i,e,2,!1),s.add(o))}function Jf(e,i,s){var o=0;i&&(o|=4),c_(s,e,o,i)}var uc="_reactListening"+Math.random().toString(36).slice(2);function $f(e){if(!e[uc]){e[uc]=!0,vl.forEach(function(s){s!=="selectionchange"&&(Ex.has(s)||Jf(s,!1,e),Jf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[uc]||(i[uc]=!0,Jf("selectionchange",!1,i))}}function c_(e,i,s,o){switch(N_(i)){case 2:var h=Kx;break;case 8:h=Qx;break;default:h=dh}s=h.bind(null,i,s,e),h=void 0,!xu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function th(e,i,s,o,h){var m=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var D=o.stateNode.containerInfo;if(D===h)break;if(E===4)for(E=o.return;E!==null;){var G=E.tag;if((G===3||G===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;D!==null;){if(E=Xi(D),E===null)return;if(G=E.tag,G===5||G===6||G===26||G===27){o=m=E;continue t}D=D.parentNode}}o=o.return}gp(function(){var at=m,pt=vu(s),yt=[];t:{var lt=qp.get(e);if(lt!==void 0){var ut=bl,ie=e;switch(e){case"keypress":if(Ml(s)===0)break t;case"keydown":case"keyup":ut=_y;break;case"focusin":ie="focus",ut=bu;break;case"focusout":ie="blur",ut=bu;break;case"beforeblur":case"afterblur":ut=bu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=xy;break;case Hp:case Gp:case Vp:ut=ly;break;case kp:ut=My;break;case"scroll":case"scrollend":ut=iy;break;case"wheel":ut=by;break;case"copy":case"cut":case"paste":ut=uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Sp;break;case"toggle":case"beforetoggle":ut=Ay}var te=(i&4)!==0,He=!te&&(e==="scroll"||e==="scrollend"),Q=te?lt!==null?lt+"Capture":null:lt;te=[];for(var W=at,it;W!==null;){var _t=W;if(it=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||it===null||Q===null||(_t=$r(W,Q),_t!=null&&te.push(zo(W,_t,it))),He)break;W=W.return}0<te.length&&(lt=new ut(lt,ie,null,s,pt),yt.push({event:lt,listeners:te}))}}if((i&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",lt&&s!==_u&&(ie=s.relatedTarget||s.fromElement)&&(Xi(ie)||ie[Gn]))break t;if((ut||lt)&&(lt=pt.window===pt?pt:(lt=pt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ut?(ie=s.relatedTarget||s.toElement,ut=at,ie=ie?Xi(ie):null,ie!==null&&(He=l(ie),te=ie.tag,ie!==He||te!==5&&te!==27&&te!==6)&&(ie=null)):(ut=null,ie=at),ut!==ie)){if(te=yp,_t="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(te=Sp,_t="onPointerLeave",Q="onPointerEnter",W="pointer"),He=ut==null?lt:hs(ut),it=ie==null?lt:hs(ie),lt=new te(_t,W+"leave",ut,s,pt),lt.target=He,lt.relatedTarget=it,_t=null,Xi(pt)===at&&(te=new te(Q,W+"enter",ie,s,pt),te.target=it,te.relatedTarget=He,_t=te),He=_t,ut&&ie)e:{for(te=ut,Q=ie,W=0,it=te;it;it=xr(it))W++;for(it=0,_t=Q;_t;_t=xr(_t))it++;for(;0<W-it;)te=xr(te),W--;for(;0<it-W;)Q=xr(Q),it--;for(;W--;){if(te===Q||Q!==null&&te===Q.alternate)break e;te=xr(te),Q=xr(Q)}te=null}else te=null;ut!==null&&u_(yt,lt,ut,te,!1),ie!==null&&He!==null&&u_(yt,He,ie,te,!0)}}t:{if(lt=at?hs(at):window,ut=lt.nodeName&&lt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&lt.type==="file")var Ht=Cp;else if(wp(lt))if(Dp)Ht=zy;else{Ht=Oy;var me=Ny}else ut=lt.nodeName,!ut||ut.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?at&&gu(at.elementType)&&(Ht=Cp):Ht=Py;if(Ht&&(Ht=Ht(e,at))){Rp(yt,Ht,s,pt);break t}me&&me(e,lt,at),e==="focusout"&&at&&lt.type==="number"&&at.memoizedProps.value!=null&&Nn(lt,"number",lt.value)}switch(me=at?hs(at):window,e){case"focusin":(wp(me)||me.contentEditable==="true")&&(Ks=me,Du=at,oo=null);break;case"focusout":oo=Du=Ks=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Ip(yt,s,pt);break;case"selectionchange":if(Iy)break;case"keydown":case"keyup":Ip(yt,s,pt)}var Yt;if(Au)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Zs?Tp(e,s)&&(ee="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ee="onCompositionStart");ee&&(Mp&&s.locale!=="ko"&&(Zs||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Zs&&(Yt=_p()):(Ra=pt,Su="value"in Ra?Ra.value:Ra.textContent,Zs=!0)),me=fc(at,ee),0<me.length&&(ee=new xp(ee,e,null,s,pt),yt.push({event:ee,listeners:me}),Yt?ee.data=Yt:(Yt=Ap(s),Yt!==null&&(ee.data=Yt)))),(Yt=Ry?Cy(e,s):Dy(e,s))&&(ee=fc(at,"onBeforeInput"),0<ee.length&&(me=new xp("onBeforeInput","beforeinput",null,s,pt),yt.push({event:me,listeners:ee}),me.data=Yt)),xx(yt,e,at,s,pt)}l_(yt,i)})}function zo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function fc(e,i){for(var s=i+"Capture",o=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=$r(e,s),h!=null&&o.unshift(zo(e,h,m)),h=$r(e,i),h!=null&&o.push(zo(e,h,m))),e.tag===3)return o;e=e.return}return[]}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function u_(e,i,s,o,h){for(var m=i._reactName,E=[];s!==null&&s!==o;){var D=s,G=D.alternate,at=D.stateNode;if(D=D.tag,G!==null&&G===o)break;D!==5&&D!==26&&D!==27||at===null||(G=at,h?(at=$r(s,m),at!=null&&E.unshift(zo(s,at,G))):h||(at=$r(s,m),at!=null&&E.push(zo(s,at,G)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var bx=/\r\n?/g,Tx=/\u0000|\uFFFD/g;function f_(e){return(typeof e=="string"?e:""+e).replace(bx,`
`).replace(Tx,"")}function h_(e,i){return i=f_(i),f_(e)===i}function hc(){}function Fe(e,i,s,o,h,m){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Di(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Di(e,""+o);break;case"className":Dt(e,"class",o);break;case"tabIndex":Dt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Dt(e,s,o);break;case"style":pp(e,o,m);break;case"data":if(i!=="object"){Dt(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=xl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Fe(e,i,"name",h.name,h,null),Fe(e,i,"formEncType",h.formEncType,h,null),Fe(e,i,"formMethod",h.formMethod,h,null),Fe(e,i,"formTarget",h.formTarget,h,null)):(Fe(e,i,"encType",h.encType,h,null),Fe(e,i,"method",h.method,h,null),Fe(e,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=xl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=hc);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=xl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ey.get(s)||s,Tt(e,s,o))}}function eh(e,i,s,o,h,m){switch(s){case"style":pp(e,o,m);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Di(e,o):(typeof o=="number"||typeof o=="bigint")&&Di(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yl.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=e[Rn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof o=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,h);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Tt(e,s,o)}}}function Ln(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,m,E,s,null)}}h&&Fe(e,i,"srcSet",s.srcSet,s,null),o&&Fe(e,i,"src",s.src,s,null);return;case"input":ve("invalid",e);var D=m=E=h=null,G=null,at=null;for(o in s)if(s.hasOwnProperty(o)){var pt=s[o];if(pt!=null)switch(o){case"name":h=pt;break;case"type":E=pt;break;case"checked":G=pt;break;case"defaultChecked":at=pt;break;case"value":m=pt;break;case"defaultValue":D=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:Fe(e,i,o,pt,s,null)}}qe(e,m,D,G,at,E,h,!1),Be(e);return;case"select":ve("invalid",e),o=E=m=null;for(h in s)if(s.hasOwnProperty(h)&&(D=s[h],D!=null))switch(h){case"value":m=D;break;case"defaultValue":E=D;break;case"multiple":o=D;default:Fe(e,i,h,D,s,null)}i=m,s=E,e.multiple=!!o,i!=null?dn(e,!!o,i,!1):s!=null&&dn(e,!!o,s,!0);return;case"textarea":ve("invalid",e),m=h=o=null;for(E in s)if(s.hasOwnProperty(E)&&(D=s[E],D!=null))switch(E){case"value":o=D;break;case"defaultValue":h=D;break;case"children":m=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:Fe(e,i,E,D,s,null)}Cn(e,o,h,m),Be(e);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(o=s[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Fe(e,i,G,o,s,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Po.length;o++)ve(Po[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in s)if(s.hasOwnProperty(at)&&(o=s[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,at,o,s,null)}return;default:if(gu(i)){for(pt in s)s.hasOwnProperty(pt)&&(o=s[pt],o!==void 0&&eh(e,i,pt,o,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(o=s[D],o!=null&&Fe(e,i,D,o,s,null))}function Ax(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,D=null,G=null,at=null,pt=null;for(ut in s){var yt=s[ut];if(s.hasOwnProperty(ut)&&yt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=yt;default:o.hasOwnProperty(ut)||Fe(e,i,ut,null,o,yt)}}for(var lt in o){var ut=o[lt];if(yt=s[lt],o.hasOwnProperty(lt)&&(ut!=null||yt!=null))switch(lt){case"type":m=ut;break;case"name":h=ut;break;case"checked":at=ut;break;case"defaultChecked":pt=ut;break;case"value":E=ut;break;case"defaultValue":D=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==yt&&Fe(e,i,lt,ut,o,yt)}}ji(e,E,D,G,at,pt,m,h);return;case"select":ut=E=D=lt=null;for(m in s)if(G=s[m],s.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":ut=G;default:o.hasOwnProperty(m)||Fe(e,i,m,null,o,G)}for(h in o)if(m=o[h],G=s[h],o.hasOwnProperty(h)&&(m!=null||G!=null))switch(h){case"value":lt=m;break;case"defaultValue":D=m;break;case"multiple":E=m;default:m!==G&&Fe(e,i,h,m,o,G)}i=D,s=E,o=ut,lt!=null?dn(e,!!s,lt,!1):!!o!=!!s&&(i!=null?dn(e,!!s,i,!0):dn(e,!!s,s?[]:"",!1));return;case"textarea":ut=lt=null;for(D in s)if(h=s[D],s.hasOwnProperty(D)&&h!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Fe(e,i,D,null,o,h)}for(E in o)if(h=o[E],m=s[E],o.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":lt=h;break;case"defaultValue":ut=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Fe(e,i,E,h,o,m)}Mn(e,lt,ut);return;case"option":for(var ie in s)if(lt=s[ie],s.hasOwnProperty(ie)&&lt!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Fe(e,i,ie,null,o,lt)}for(G in o)if(lt=o[G],ut=s[G],o.hasOwnProperty(G)&&lt!==ut&&(lt!=null||ut!=null))switch(G){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Fe(e,i,G,lt,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in s)lt=s[te],s.hasOwnProperty(te)&&lt!=null&&!o.hasOwnProperty(te)&&Fe(e,i,te,null,o,lt);for(at in o)if(lt=o[at],ut=s[at],o.hasOwnProperty(at)&&lt!==ut&&(lt!=null||ut!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:Fe(e,i,at,lt,o,ut)}return;default:if(gu(i)){for(var He in s)lt=s[He],s.hasOwnProperty(He)&&lt!==void 0&&!o.hasOwnProperty(He)&&eh(e,i,He,void 0,o,lt);for(pt in o)lt=o[pt],ut=s[pt],!o.hasOwnProperty(pt)||lt===ut||lt===void 0&&ut===void 0||eh(e,i,pt,lt,o,ut);return}}for(var Q in s)lt=s[Q],s.hasOwnProperty(Q)&&lt!=null&&!o.hasOwnProperty(Q)&&Fe(e,i,Q,null,o,lt);for(yt in o)lt=o[yt],ut=s[yt],!o.hasOwnProperty(yt)||lt===ut||lt==null&&ut==null||Fe(e,i,yt,lt,o,ut)}var nh=null,ih=null;function dc(e){return e.nodeType===9?e:e.ownerDocument}function d_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ah(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sh=null;function wx(){var e=window.event;return e&&e.type==="popstate"?e===sh?!1:(sh=e,!0):(sh=null,!1)}var m_=typeof setTimeout=="function"?setTimeout:void 0,Rx=typeof clearTimeout=="function"?clearTimeout:void 0,g_=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof g_<"u"?function(e){return g_.resolve(null).then(e).catch(Dx)}:m_;function Dx(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function __(e,i){var s=i,o=0,h=0;do{var m=s.nextSibling;if(e.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<o&&8>o){s=o;var E=e.ownerDocument;if(s&1&&Bo(E.documentElement),s&2&&Bo(E.body),s&4)for(s=E.head,Bo(s),E=s.firstChild;E;){var D=E.nextSibling,G=E.nodeName;E[ba]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=D}}if(h===0){e.removeChild(m),Xo(i);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:o=s.charCodeAt(0)-48;else o=0;s=m}while(s);Xo(i)}function rh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":rh(s),Ta(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Ux(e,i,s,o){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ba])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function Lx(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Si(e.nextSibling),e===null))return null;return e}function oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Nx(e,i){var s=e.ownerDocument;if(e.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Si(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var lh=null;function v_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return e;i--}else s==="/$"&&i++}e=e.previousSibling}return null}function y_(e,i,s){switch(i=dc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Bo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ta(e)}var pi=new Map,x_=new Set;function pc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=Z.d;Z.d={f:Ox,r:Px,D:zx,C:Bx,L:Ix,m:Fx,X:Gx,S:Hx,M:Vx};function Ox(){var e=ca.f(),i=sc();return e||i}function Px(e){var i=Wi(e);i!==null&&i.tag===5&&i.type==="form"?Hm(i):ca.r(e)}var Sr=typeof document>"u"?null:document;function S_(e,i,s){var o=Sr;if(o&&typeof i=="string"&&i){var h=We(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),x_.has(h)||(x_.add(h),e={rel:e,crossOrigin:s,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),Ln(i,"link",e),rn(i),o.head.appendChild(i)))}}function zx(e){ca.D(e),S_("dns-prefetch",e,null)}function Bx(e,i){ca.C(e,i),S_("preconnect",e,i)}function Ix(e,i,s){ca.L(e,i,s);var o=Sr;if(o&&e&&i){var h='link[rel="preload"][as="'+We(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+We(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+We(s.imageSizes)+'"]')):h+='[href="'+We(e)+'"]';var m=h;switch(i){case"style":m=Mr(e);break;case"script":m=Er(e)}pi.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),pi.set(m,e),o.querySelector(h)!==null||i==="style"&&o.querySelector(Io(m))||i==="script"&&o.querySelector(Fo(m))||(i=o.createElement("link"),Ln(i,"link",e),rn(i),o.head.appendChild(i)))}}function Fx(e,i){ca.m(e,i);var s=Sr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+We(o)+'"][href="'+We(e)+'"]',m=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Er(e)}if(!pi.has(m)&&(e=g({rel:"modulepreload",href:e},i),pi.set(m,e),s.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Fo(m)))return}o=s.createElement("link"),Ln(o,"link",e),rn(o),s.head.appendChild(o)}}}function Hx(e,i,s){ca.S(e,i,s);var o=Sr;if(o&&e){var h=Aa(o).hoistableStyles,m=Mr(e);i=i||"default";var E=h.get(m);if(!E){var D={loading:0,preload:null};if(E=o.querySelector(Io(m)))D.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=pi.get(m))&&ch(e,s);var G=E=o.createElement("link");rn(G),Ln(G,"link",e),G._p=new Promise(function(at,pt){G.onload=at,G.onerror=pt}),G.addEventListener("load",function(){D.loading|=1}),G.addEventListener("error",function(){D.loading|=2}),D.loading|=4,mc(E,i,o)}E={type:"stylesheet",instance:E,count:1,state:D},h.set(m,E)}}}function Gx(e,i){ca.X(e,i);var s=Sr;if(s&&e){var o=Aa(s).hoistableScripts,h=Er(e),m=o.get(h);m||(m=s.querySelector(Fo(h)),m||(e=g({src:e,async:!0},i),(i=pi.get(h))&&uh(e,i),m=s.createElement("script"),rn(m),Ln(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(h,m))}}function Vx(e,i){ca.M(e,i);var s=Sr;if(s&&e){var o=Aa(s).hoistableScripts,h=Er(e),m=o.get(h);m||(m=s.querySelector(Fo(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=pi.get(h))&&uh(e,i),m=s.createElement("script"),rn(m),Ln(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(h,m))}}function M_(e,i,s,o){var h=(h=Mt.current)?pc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Mr(s.href),s=Aa(h).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Mr(s.href);var m=Aa(h).hoistableStyles,E=m.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=h.querySelector(Io(e)))&&!m._p&&(E.instance=m,E.state.loading=5),pi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pi.set(e,s),m||kx(h,e,s,E.state))),i&&o===null)throw Error(a(528,""));return E}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Er(s),s=Aa(h).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Mr(e){return'href="'+We(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function E_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function kx(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Ln(i,"link",s),rn(i),e.head.appendChild(i))}function Er(e){return'[src="'+We(e)+'"]'}function Fo(e){return"script[async]"+e}function b_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+We(s.href)+'"]');if(o)return i.instance=o,rn(o),o;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),rn(o),Ln(o,"style",h),mc(o,s.precedence,e),i.instance=o;case"stylesheet":h=Mr(s.href);var m=e.querySelector(Io(h));if(m)return i.state.loading|=4,i.instance=m,rn(m),m;o=E_(s),(h=pi.get(h))&&ch(o,h),m=(e.ownerDocument||e).createElement("link"),rn(m);var E=m;return E._p=new Promise(function(D,G){E.onload=D,E.onerror=G}),Ln(m,"link",o),i.state.loading|=4,mc(m,s.precedence,e),i.instance=m;case"script":return m=Er(s.src),(h=e.querySelector(Fo(m)))?(i.instance=h,rn(h),h):(o=s,(h=pi.get(m))&&(o=g({},s),uh(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),rn(h),Ln(h,"link",o),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,mc(o,s.precedence,e));return i.instance}function mc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,m=h,E=0;E<o.length;E++){var D=o[E];if(D.dataset.precedence===i)m=D;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function ch(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function uh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var gc=null;function T_(e,i,s){if(gc===null){var o=new Map,h=gc=new Map;h.set(s,o)}else h=gc,o=h.get(s),o||(o=new Map,h.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var m=s[h];if(!(m[ba]||m[hn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var D=o.get(E);D?D.push(m):o.set(E,[m])}}return o}function A_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function qx(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function w_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ho=null;function Xx(){}function Wx(e,i,s){if(Ho===null)throw Error(a(475));var o=Ho;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Mr(s.href),m=e.querySelector(Io(h));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=_c.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=m,rn(m);return}m=e.ownerDocument||e,s=E_(s),(h=pi.get(h))&&ch(s,h),m=m.createElement("link"),rn(m);var E=m;E._p=new Promise(function(D,G){E.onload=D,E.onerror=G}),Ln(m,"link",s),i.instance=m}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=_c.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function Yx(){if(Ho===null)throw Error(a(475));var e=Ho;return e.stylesheets&&e.count===0&&fh(e,e.stylesheets),0<e.count?function(i){var s=setTimeout(function(){if(e.stylesheets&&fh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s)}}:null}function _c(){if(this.count--,this.count===0){if(this.stylesheets)fh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function fh(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,i.forEach(jx,e),vc=null,_c.call(e))}function jx(e,i){if(!(i.state.loading&4)){var s=vc.get(e);if(s)var o=s.get(null);else{s=new Map,vc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),o=E)}o&&s.set(null,o)}h=i.instance,E=h.getAttribute("data-precedence"),m=s.get(E)||o,m===o&&s.set(null,h),s.set(E,h),this.count++,o=_c.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Go={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Zx(e,i,s,o,h,m,E,D){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function R_(e,i,s,o,h,m,E,D,G,at,pt,yt){return e=new Zx(e,i,s,E,D,G,at,yt),i=1,m===!0&&(i|=24),m=$n(3,null,null,i),e.current=m,m.stateNode=e,i=Xu(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:o,isDehydrated:s,cache:i},Zu(m),e}function C_(e){return e?(e=tr,e):tr}function D_(e,i,s,o,h,m){h=C_(h),o.context===null?o.context=h:o.pendingContext=h,o=Ua(i),o.payload={element:s},m=m===void 0?null:m,m!==null&&(o.callback=m),s=La(e,o,i),s!==null&&(ai(s,e,i),_o(s,e,i))}function U_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function hh(e,i){U_(e,i),(e=e.alternate)&&U_(e,i)}function L_(e){if(e.tag===13){var i=$s(e,67108864);i!==null&&ai(i,e,67108864),hh(e,67108864)}}var yc=!0;function Kx(e,i,s,o){var h=O.T;O.T=null;var m=Z.p;try{Z.p=2,dh(e,i,s,o)}finally{Z.p=m,O.T=h}}function Qx(e,i,s,o){var h=O.T;O.T=null;var m=Z.p;try{Z.p=8,dh(e,i,s,o)}finally{Z.p=m,O.T=h}}function dh(e,i,s,o){if(yc){var h=ph(o);if(h===null)th(e,i,o,xc,s),O_(e,o);else if($x(h,e,i,s,o))o.stopPropagation();else if(O_(e,o),i&4&&-1<Jx.indexOf(e)){for(;h!==null;){var m=Wi(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=jt(m.pendingLanes);if(E!==0){var D=m;for(D.pendingLanes|=2,D.entangledLanes|=2;E;){var G=1<<31-Pt(E);D.entanglements[1]|=G,E&=~G}Pi(m),(Oe&6)===0&&(ic=ge()+500,Oo(0))}}break;case 13:D=$s(m,2),D!==null&&ai(D,m,2),sc(),hh(m,2)}if(m=ph(o),m===null&&th(e,i,o,xc,s),m===h)break;h=m}h!==null&&o.stopPropagation()}else th(e,i,o,null,s)}}function ph(e){return e=vu(e),mh(e)}var xc=null;function mh(e){if(xc=null,e=Xi(e),e!==null){var i=l(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return xc=e,null}function N_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qt()){case Se:return 2;case Kt:return 8;case re:case nn:return 32;case F:return 268435456;default:return 32}default:return 32}}var gh=!1,Xa=null,Wa=null,Ya=null,Vo=new Map,ko=new Map,ja=[],Jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O_(e,i){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(i.pointerId)}}function qo(e,i,s,o,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Wi(i),i!==null&&L_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function $x(e,i,s,o,h){switch(i){case"focusin":return Xa=qo(Xa,e,i,s,o,h),!0;case"dragenter":return Wa=qo(Wa,e,i,s,o,h),!0;case"mouseover":return Ya=qo(Ya,e,i,s,o,h),!0;case"pointerover":var m=h.pointerId;return Vo.set(m,qo(Vo.get(m)||null,e,i,s,o,h)),!0;case"gotpointercapture":return m=h.pointerId,ko.set(m,qo(ko.get(m)||null,e,i,s,o,h)),!0}return!1}function P_(e){var i=Xi(e.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,Qn(e.priority,function(){if(s.tag===13){var o=ii();o=ae(o);var h=$s(s,o);h!==null&&ai(h,s,o),hh(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=ph(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);_u=o,s.target.dispatchEvent(o),_u=null}else return i=Wi(s),i!==null&&L_(i),e.blockedOn=s,!1;i.shift()}return!0}function z_(e,i,s){Sc(e)&&s.delete(i)}function tS(){gh=!1,Xa!==null&&Sc(Xa)&&(Xa=null),Wa!==null&&Sc(Wa)&&(Wa=null),Ya!==null&&Sc(Ya)&&(Ya=null),Vo.forEach(z_),ko.forEach(z_)}function Mc(e,i){e.blockedOn===i&&(e.blockedOn=null,gh||(gh=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tS)))}var Ec=null;function B_(e){Ec!==e&&(Ec=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Ec===e&&(Ec=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],h=e[i+2];if(typeof o!="function"){if(mh(o||s)===null)continue;break}var m=Wi(s);m!==null&&(e.splice(i,3),i-=3,mf(m,{pending:!0,data:h,method:s.method,action:o},o,h))}}))}function Xo(e){function i(G){return Mc(G,e)}Xa!==null&&Mc(Xa,e),Wa!==null&&Mc(Wa,e),Ya!==null&&Mc(Ya,e),Vo.forEach(i),ko.forEach(i);for(var s=0;s<ja.length;s++){var o=ja[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ja.length&&(s=ja[0],s.blockedOn===null);)P_(s),s.blockedOn===null&&ja.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var h=s[o],m=s[o+1],E=h[Rn]||null;if(typeof m=="function")E||B_(s);else if(E){var D=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[Rn]||null)D=E.formAction;else if(mh(h)!==null)continue}else D=E.action;typeof D=="function"?s[o+1]=D:(s.splice(o,3),o-=3),B_(s)}}}function _h(e){this._internalRoot=e}bc.prototype.render=_h.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=ii();D_(s,o,e,i,null,null)},bc.prototype.unmount=_h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;D_(e.current,2,null,e,null,null),sc(),i[Gn]=null}};function bc(e){this._internalRoot=e}bc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Te();e={blockedOn:null,target:e,priority:i};for(var s=0;s<ja.length&&i!==0&&i<ja[s].priority;s++);ja.splice(s,0,e),s===0&&P_(e)}};var I_=t.version;if(I_!=="19.1.0")throw Error(a(527,I_,"19.1.0"));Z.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var eS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{mt=Tc.inject(eS),vt=Tc}catch{}}return Yo.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,o="",h=tg,m=eg,E=ng,D=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(D=i.unstable_transitionCallbacks)),i=R_(e,1,!1,null,null,s,o,h,m,E,D,null),e[Gn]=i.current,$f(e),new _h(i)},Yo.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var o=!1,h="",m=tg,E=eg,D=ng,G=null,at=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(G=s.unstable_transitionCallbacks),s.formState!==void 0&&(at=s.formState)),i=R_(e,1,!0,i,s??null,o,h,m,E,D,G,at),i.context=C_(null),s=i.current,o=ii(),o=ae(o),h=Ua(o),h.callback=null,La(s,h,o),s=o,i.current.lanes=s,Bt(i,s),Pi(i),e[Gn]=i.current,$f(e),new bc(i)},Yo.version="19.1.0",Yo}var j_;function fS(){if(j_)return xh.exports;j_=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),xh.exports=uS(),xh.exports}var hS=fS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="178",Vr={ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dS=0,Z_=1,pS=2,p0=1,mS=2,ya=3,os=0,Zn=1,xa=2,ss=0,kr=1,K_=2,Q_=3,J_=4,gS=5,Bs=100,_S=101,vS=102,yS=103,xS=104,SS=200,MS=201,ES=202,bS=203,cd=204,ud=205,TS=206,AS=207,wS=208,RS=209,CS=210,DS=211,US=212,LS=213,NS=214,fd=0,hd=1,dd=2,Wr=3,pd=4,md=5,gd=6,_d=7,m0=0,OS=1,PS=2,rs=0,zS=1,BS=2,IS=3,FS=4,HS=5,GS=6,VS=7,g0=300,Yr=301,jr=302,vd=303,yd=304,du=306,xd=1e3,Hs=1001,Sd=1002,Ci=1003,kS=1004,Ac=1005,Hi=1006,bh=1007,Gs=1008,ki=1009,_0=1010,v0=1011,sl=1012,Jd=1013,Vs=1014,Sa=1015,ul=1016,$d=1017,tp=1018,rl=1020,y0=35902,x0=1021,S0=1022,wi=1023,ol=1026,ll=1027,M0=1028,ep=1029,E0=1030,np=1031,ip=1033,eu=33776,nu=33777,iu=33778,au=33779,Md=35840,Ed=35841,bd=35842,Td=35843,Ad=36196,wd=37492,Rd=37496,Cd=37808,Dd=37809,Ud=37810,Ld=37811,Nd=37812,Od=37813,Pd=37814,zd=37815,Bd=37816,Id=37817,Fd=37818,Hd=37819,Gd=37820,Vd=37821,su=36492,kd=36494,qd=36495,b0=36283,Xd=36284,Wd=36285,Yd=36286,qS=3200,XS=3201,T0=0,WS=1,as="",gi="srgb",Zr="srgb-linear",cu="linear",Ge="srgb",br=7680,$_=519,YS=512,jS=513,ZS=514,A0=515,KS=516,QS=517,JS=518,$S=519,tv=35044,ev="300 es",Ma=2e3,uu=2001;class Ws{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=Math.PI/180,jd=180/Math.PI;function fl(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(zn[c&255]+zn[c>>8&255]+zn[c>>16&255]+zn[c>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[a&255]+zn[a>>8&255]+zn[a>>16&255]+zn[a>>24&255]).toLowerCase()}function ye(c,t,n){return Math.max(t,Math.min(n,c))}function tM(c,t){return(c%t+t)%t}function Th(c,t,n){return(1-n)*c+n*t}function jo(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return c/4294967295;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int32Array:return Math.max(c/2147483647,-1);case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Wn(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return Math.round(c*4294967295);case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int32Array:return Math.round(c*2147483647);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}const eM={DEG2RAD:ru};class oe{constructor(t=0,n=0){oe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),l=this.x-t.x,u=this.y-t.y;return this.x=l*a-u*r+t.x,this.y=l*r+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let ks=class{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,l,u,f){let d=a[r+0],p=a[r+1],g=a[r+2],v=a[r+3];const _=l[u+0],S=l[u+1],M=l[u+2],b=l[u+3];if(f===0){t[n+0]=d,t[n+1]=p,t[n+2]=g,t[n+3]=v;return}if(f===1){t[n+0]=_,t[n+1]=S,t[n+2]=M,t[n+3]=b;return}if(v!==b||d!==_||p!==S||g!==M){let x=1-f;const y=d*_+p*S+g*M+v*b,T=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const P=Math.sqrt(U),B=Math.atan2(P,y*T);x=Math.sin(x*B)/P,f=Math.sin(f*B)/P}const A=f*T;if(d=d*x+_*A,p=p*x+S*A,g=g*x+M*A,v=v*x+b*A,x===1-f){const P=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=P,p*=P,g*=P,v*=P}}t[n]=d,t[n+1]=p,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,r,l,u){const f=a[r],d=a[r+1],p=a[r+2],g=a[r+3],v=l[u],_=l[u+1],S=l[u+2],M=l[u+3];return t[n]=f*M+g*v+d*S-p*_,t[n+1]=d*M+g*_+p*v-f*S,t[n+2]=p*M+g*S+f*_-d*v,t[n+3]=g*M-f*v-d*_-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,l=t._z,u=t._order,f=Math.cos,d=Math.sin,p=f(a/2),g=f(r/2),v=f(l/2),_=d(a/2),S=d(r/2),M=d(l/2);switch(u){case"XYZ":this._x=_*g*v+p*S*M,this._y=p*S*v-_*g*M,this._z=p*g*M+_*S*v,this._w=p*g*v-_*S*M;break;case"YXZ":this._x=_*g*v+p*S*M,this._y=p*S*v-_*g*M,this._z=p*g*M-_*S*v,this._w=p*g*v+_*S*M;break;case"ZXY":this._x=_*g*v-p*S*M,this._y=p*S*v+_*g*M,this._z=p*g*M+_*S*v,this._w=p*g*v-_*S*M;break;case"ZYX":this._x=_*g*v-p*S*M,this._y=p*S*v+_*g*M,this._z=p*g*M-_*S*v,this._w=p*g*v+_*S*M;break;case"YZX":this._x=_*g*v+p*S*M,this._y=p*S*v+_*g*M,this._z=p*g*M-_*S*v,this._w=p*g*v-_*S*M;break;case"XZY":this._x=_*g*v-p*S*M,this._y=p*S*v-_*g*M,this._z=p*g*M+_*S*v,this._w=p*g*v+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],l=n[8],u=n[1],f=n[5],d=n[9],p=n[2],g=n[6],v=n[10],_=a+f+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-d)*S,this._y=(l-p)*S,this._z=(u-r)*S}else if(a>f&&a>v){const S=2*Math.sqrt(1+a-f-v);this._w=(g-d)/S,this._x=.25*S,this._y=(r+u)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-a-v);this._w=(l-p)/S,this._x=(r+u)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+v-a-f);this._w=(u-r)/S,this._x=(l+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,l=t._z,u=t._w,f=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*f+r*p-l*d,this._y=r*g+u*d+l*f-a*p,this._z=l*g+u*p+a*d-r*f,this._w=u*g-a*f-r*d-l*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,r=this._y,l=this._z,u=this._w;let f=u*t._w+a*t._x+r*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=u,this._x=a,this._y=r,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*a+n*this._x,this._y=S*r+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,f),v=Math.sin((1-n)*g)/p,_=Math.sin(n*g)/p;return this._w=u*v+this._w*_,this._x=a*v+this._x*_,this._y=r*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class rt{constructor(t=0,n=0,a=0){rt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(nv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(nv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*r,this.y=l[1]*n+l[4]*a+l[7]*r,this.z=l[2]*n+l[5]*a+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=t.elements,u=1/(l[3]*n+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*r+l[12])*u,this.y=(l[1]*n+l[5]*a+l[9]*r+l[13])*u,this.z=(l[2]*n+l[6]*a+l[10]*r+l[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,l=t.x,u=t.y,f=t.z,d=t.w,p=2*(u*r-f*a),g=2*(f*n-l*r),v=2*(l*a-u*n);return this.x=n+d*p+u*v-f*g,this.y=a+d*g+f*p-l*v,this.z=r+d*v+l*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*r,this.y=l[1]*n+l[5]*a+l[9]*r,this.z=l[2]*n+l[6]*a+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,l=t.z,u=n.x,f=n.y,d=n.z;return this.x=r*d-l*f,this.y=l*u-a*d,this.z=a*f-r*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new rt,nv=new ks;class ce{constructor(t,n,a,r,l,u,f,d,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,u,f,d,p)}set(t,n,a,r,l,u,f,d,p){const g=this.elements;return g[0]=t,g[1]=r,g[2]=f,g[3]=n,g[4]=l,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,u=a[0],f=a[3],d=a[6],p=a[1],g=a[4],v=a[7],_=a[2],S=a[5],M=a[8],b=r[0],x=r[3],y=r[6],T=r[1],U=r[4],A=r[7],P=r[2],B=r[5],I=r[8];return l[0]=u*b+f*T+d*P,l[3]=u*x+f*U+d*B,l[6]=u*y+f*A+d*I,l[1]=p*b+g*T+v*P,l[4]=p*x+g*U+v*B,l[7]=p*y+g*A+v*I,l[2]=_*b+S*T+M*P,l[5]=_*x+S*U+M*B,l[8]=_*y+S*A+M*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8];return n*u*g-n*f*p-a*l*g+a*f*d+r*l*p-r*u*d}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],v=g*u-f*p,_=f*d-g*l,S=p*l-u*d,M=n*v+a*_+r*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=v*b,t[1]=(r*p-g*a)*b,t[2]=(f*a-r*u)*b,t[3]=_*b,t[4]=(g*n-r*d)*b,t[5]=(r*l-f*n)*b,t[6]=S*b,t[7]=(a*d-p*n)*b,t[8]=(u*n-a*l)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,l,u,f){const d=Math.cos(l),p=Math.sin(l);return this.set(a*d,a*p,-a*(d*u+p*f)+u+t,-r*p,r*d,-r*(-p*u+d*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(wh.makeScale(t,n)),this}rotate(t){return this.premultiply(wh.makeRotation(-t)),this}translate(t,n){return this.premultiply(wh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new ce;function w0(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function fu(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function nM(){const c=fu("canvas");return c.style.display="block",c}const iv={};function qr(c){c in iv||(iv[c]=!0,console.warn(c))}function iM(c,t,n){return new Promise(function(a,r){function l(){switch(c.clientWaitSync(t,c.SYNC_FLUSH_COMMANDS_BIT,0)){case c.WAIT_FAILED:r();break;case c.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}function aM(c){const t=c.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sM(c){const t=c.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const av=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sv=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rM(){const c={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(r,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ge&&(r.r=Ea(r.r),r.g=Ea(r.g),r.b=Ea(r.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ge&&(r.r=Xr(r.r),r.g=Xr(r.g),r.b=Xr(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===as?cu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,u){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return qr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),c.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return qr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),c.colorSpaceToWorking(r,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return c.define({[Zr]:{primaries:t,whitePoint:a,transfer:cu,toXYZ:av,fromXYZ:sv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:a,transfer:Ge,toXYZ:av,fromXYZ:sv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),c}const we=rM();function Ea(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function Xr(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}let Tr;class oM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Tr===void 0&&(Tr=fu("canvas")),Tr.width=t.width,Tr.height=t.height;const r=Tr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=Tr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=fu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=Ea(l[u]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ea(n[a]/255)*255):n[a]=Ea(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lM=0;class ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=fl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?l.push(Rh(r[u].image)):l.push(Rh(r[u]))}else l=Rh(r);a.url=l}return n||(t.images[this.uuid]=a),a}}function Rh(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?oM.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cM=0;const Ch=new rt;class Kn extends Ws{constructor(t=Kn.DEFAULT_IMAGE,n=Kn.DEFAULT_MAPPING,a=Hs,r=Hs,l=Hi,u=Gs,f=wi,d=ki,p=Kn.DEFAULT_ANISOTROPY,g=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=fl(),this.name="",this.source=new ap(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==g0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xd:t.x=t.x-Math.floor(t.x);break;case Hs:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xd:t.y=t.y-Math.floor(t.y);break;case Hs:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=g0;Kn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,n=0,a=0,r=1){tn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*l,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*l,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*l,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,l;const d=t.elements,p=d[0],g=d[4],v=d[8],_=d[1],S=d[5],M=d[9],b=d[2],x=d[6],y=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-b)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+b)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,A=(S+1)/2,P=(y+1)/2,B=(g+_)/4,I=(v+b)/4,k=(M+x)/4;return U>A&&U>P?U<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(U),r=B/a,l=I/a):A>P?A<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(A),a=B/r,l=k/r):P<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(P),a=I/l,r=k/l),this.set(a,r,l,n),this}let T=Math.sqrt((x-M)*(x-M)+(v-b)*(v-b)+(_-g)*(_-g));return Math.abs(T)<.001&&(T=1),this.x=(x-M)/T,this.y=(v-b)/T,this.z=(_-g)/T,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uM extends Ws{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new tn(0,0,t,n),this.scissorTest=!1,this.viewport=new tn(0,0,t,n);const r={width:t,height:n,depth:a.depth},l=new Kn(r);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new ap(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qs extends uM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class R0 extends Kn{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fM extends Kn{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(t=new rt(1/0,1/0,1/0),n=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Mi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Mi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Mi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Mi):Mi.fromBufferAttribute(l,u),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),wc.copy(a.boundingBox)),wc.applyMatrix4(t.matrixWorld),this.union(wc)}const r=t.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),Rc.subVectors(this.max,Zo),Ar.subVectors(t.a,Zo),wr.subVectors(t.b,Zo),Rr.subVectors(t.c,Zo),Ka.subVectors(wr,Ar),Qa.subVectors(Rr,wr),Cs.subVectors(Ar,Rr);let n=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Cs.z,Cs.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Cs.z,0,-Cs.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Cs.y,Cs.x,0];return!Dh(n,Ar,wr,Rr,Rc)||(n=[1,0,0,0,1,0,0,0,1],!Dh(n,Ar,wr,Rr,Rc))?!1:(Cc.crossVectors(Ka,Qa),n=[Cc.x,Cc.y,Cc.z],Dh(n,Ar,wr,Rr,Rc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ua=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Mi=new rt,wc=new hl,Ar=new rt,wr=new rt,Rr=new rt,Ka=new rt,Qa=new rt,Cs=new rt,Zo=new rt,Rc=new rt,Cc=new rt,Ds=new rt;function Dh(c,t,n,a,r){for(let l=0,u=c.length-3;l<=u;l+=3){Ds.fromArray(c,l);const f=r.x*Math.abs(Ds.x)+r.y*Math.abs(Ds.y)+r.z*Math.abs(Ds.z),d=t.dot(Ds),p=n.dot(Ds),g=a.dot(Ds);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>f)return!1}return!0}const hM=new hl,Ko=new rt,Uh=new rt;class sp{constructor(t=new rt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):hM.setFromPoints(t).getCenter(a);let r=0;for(let l=0,u=t.length;l<u;l++)r=Math.max(r,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const n=Ko.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(Ko,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Uh)),this.expandByPoint(Ko.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fa=new rt,Lh=new rt,Dc=new rt,Ja=new rt,Nh=new rt,Uc=new rt,Oh=new rt;let C0=class{constructor(t=new rt,n=new rt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=fa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,n),fa.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){Lh.copy(t).add(n).multiplyScalar(.5),Dc.copy(n).sub(t).normalize(),Ja.copy(this.origin).sub(Lh);const l=t.distanceTo(n)*.5,u=-this.direction.dot(Dc),f=Ja.dot(this.direction),d=-Ja.dot(Dc),p=Ja.lengthSq(),g=Math.abs(1-u*u);let v,_,S,M;if(g>0)if(v=u*d-f,_=u*f-d,M=l*g,v>=0)if(_>=-M)if(_<=M){const b=1/g;v*=b,_*=b,S=v*(v+u*_+2*f)+_*(u*v+_+2*d)+p}else _=l,v=Math.max(0,-(u*_+f)),S=-v*v+_*(_+2*d)+p;else _=-l,v=Math.max(0,-(u*_+f)),S=-v*v+_*(_+2*d)+p;else _<=-M?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p):_<=M?(v=0,_=Math.min(Math.max(-l,-d),l),S=_*(_+2*d)+p):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+_*(_+2*d)+p);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),S=-v*v+_*(_+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(Lh).addScaledVector(Dc,_),S}intersectSphere(t,n){fa.subVectors(t.center,this.origin);const a=fa.dot(this.direction),r=fa.dot(fa)-a*a,l=t.radius*t.radius;if(r>l)return null;const u=Math.sqrt(l-r),f=a-u,d=a+u;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,l,u,f,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(a=(t.min.x-_.x)*p,r=(t.max.x-_.x)*p):(a=(t.max.x-_.x)*p,r=(t.min.x-_.x)*p),g>=0?(l=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(l=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),a>u||l>r||((l>a||isNaN(a))&&(a=l),(u<r||isNaN(r))&&(r=u),v>=0?(f=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),a>d||f>r)||((f>a||a!==a)&&(a=f),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,n,a,r,l){Nh.subVectors(n,t),Uc.subVectors(a,t),Oh.crossVectors(Nh,Uc);let u=this.direction.dot(Oh),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Ja.subVectors(this.origin,t);const d=f*this.direction.dot(Uc.crossVectors(Ja,Uc));if(d<0)return null;const p=f*this.direction.dot(Nh.cross(Ja));if(p<0||d+p>u)return null;const g=-f*Ja.dot(Oh);return g<0?null:this.at(g/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class en{constructor(t,n,a,r,l,u,f,d,p,g,v,_,S,M,b,x){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,u,f,d,p,g,v,_,S,M,b,x)}set(t,n,a,r,l,u,f,d,p,g,v,_,S,M,b,x){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=r,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=p,y[6]=g,y[10]=v,y[14]=_,y[3]=S,y[7]=M,y[11]=b,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,r=1/Cr.setFromMatrixColumn(t,0).length(),l=1/Cr.setFromMatrixColumn(t,1).length(),u=1/Cr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,l=t.z,u=Math.cos(a),f=Math.sin(a),d=Math.cos(r),p=Math.sin(r),g=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const _=u*g,S=u*v,M=f*g,b=f*v;n[0]=d*g,n[4]=-d*v,n[8]=p,n[1]=S+M*p,n[5]=_-b*p,n[9]=-f*d,n[2]=b-_*p,n[6]=M+S*p,n[10]=u*d}else if(t.order==="YXZ"){const _=d*g,S=d*v,M=p*g,b=p*v;n[0]=_+b*f,n[4]=M*f-S,n[8]=u*p,n[1]=u*v,n[5]=u*g,n[9]=-f,n[2]=S*f-M,n[6]=b+_*f,n[10]=u*d}else if(t.order==="ZXY"){const _=d*g,S=d*v,M=p*g,b=p*v;n[0]=_-b*f,n[4]=-u*v,n[8]=M+S*f,n[1]=S+M*f,n[5]=u*g,n[9]=b-_*f,n[2]=-u*p,n[6]=f,n[10]=u*d}else if(t.order==="ZYX"){const _=u*g,S=u*v,M=f*g,b=f*v;n[0]=d*g,n[4]=M*p-S,n[8]=_*p+b,n[1]=d*v,n[5]=b*p+_,n[9]=S*p-M,n[2]=-p,n[6]=f*d,n[10]=u*d}else if(t.order==="YZX"){const _=u*d,S=u*p,M=f*d,b=f*p;n[0]=d*g,n[4]=b-_*v,n[8]=M*v+S,n[1]=v,n[5]=u*g,n[9]=-f*g,n[2]=-p*g,n[6]=S*v+M,n[10]=_-b*v}else if(t.order==="XZY"){const _=u*d,S=u*p,M=f*d,b=f*p;n[0]=d*g,n[4]=-v,n[8]=p*g,n[1]=_*v+b,n[5]=u*g,n[9]=S*v-M,n[2]=M*v-S,n[6]=f*g,n[10]=b*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dM,t,pM)}lookAt(t,n,a){const r=this.elements;return si.subVectors(t,n),si.lengthSq()===0&&(si.z=1),si.normalize(),$a.crossVectors(a,si),$a.lengthSq()===0&&(Math.abs(a.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),$a.crossVectors(a,si)),$a.normalize(),Lc.crossVectors(si,$a),r[0]=$a.x,r[4]=Lc.x,r[8]=si.x,r[1]=$a.y,r[5]=Lc.y,r[9]=si.y,r[2]=$a.z,r[6]=Lc.z,r[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,u=a[0],f=a[4],d=a[8],p=a[12],g=a[1],v=a[5],_=a[9],S=a[13],M=a[2],b=a[6],x=a[10],y=a[14],T=a[3],U=a[7],A=a[11],P=a[15],B=r[0],I=r[4],k=r[8],N=r[12],w=r[1],H=r[5],nt=r[9],V=r[13],K=r[2],Y=r[6],O=r[10],Z=r[14],q=r[3],ct=r[7],z=r[11],J=r[15];return l[0]=u*B+f*w+d*K+p*q,l[4]=u*I+f*H+d*Y+p*ct,l[8]=u*k+f*nt+d*O+p*z,l[12]=u*N+f*V+d*Z+p*J,l[1]=g*B+v*w+_*K+S*q,l[5]=g*I+v*H+_*Y+S*ct,l[9]=g*k+v*nt+_*O+S*z,l[13]=g*N+v*V+_*Z+S*J,l[2]=M*B+b*w+x*K+y*q,l[6]=M*I+b*H+x*Y+y*ct,l[10]=M*k+b*nt+x*O+y*z,l[14]=M*N+b*V+x*Z+y*J,l[3]=T*B+U*w+A*K+P*q,l[7]=T*I+U*H+A*Y+P*ct,l[11]=T*k+U*nt+A*O+P*z,l[15]=T*N+U*V+A*Z+P*J,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],l=t[12],u=t[1],f=t[5],d=t[9],p=t[13],g=t[2],v=t[6],_=t[10],S=t[14],M=t[3],b=t[7],x=t[11],y=t[15];return M*(+l*d*v-r*p*v-l*f*_+a*p*_+r*f*S-a*d*S)+b*(+n*d*S-n*p*_+l*u*_-r*u*S+r*p*g-l*d*g)+x*(+n*p*v-n*f*S-l*u*v+a*u*S+l*f*g-a*p*g)+y*(-r*f*g-n*d*v+n*f*_+r*u*v-a*u*_+a*d*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],v=t[9],_=t[10],S=t[11],M=t[12],b=t[13],x=t[14],y=t[15],T=v*x*p-b*_*p+b*d*S-f*x*S-v*d*y+f*_*y,U=M*_*p-g*x*p-M*d*S+u*x*S+g*d*y-u*_*y,A=g*b*p-M*v*p+M*f*S-u*b*S-g*f*y+u*v*y,P=M*v*d-g*b*d-M*f*_+u*b*_+g*f*x-u*v*x,B=n*T+a*U+r*A+l*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return t[0]=T*I,t[1]=(b*_*l-v*x*l-b*r*S+a*x*S+v*r*y-a*_*y)*I,t[2]=(f*x*l-b*d*l+b*r*p-a*x*p-f*r*y+a*d*y)*I,t[3]=(v*d*l-f*_*l-v*r*p+a*_*p+f*r*S-a*d*S)*I,t[4]=U*I,t[5]=(g*x*l-M*_*l+M*r*S-n*x*S-g*r*y+n*_*y)*I,t[6]=(M*d*l-u*x*l-M*r*p+n*x*p+u*r*y-n*d*y)*I,t[7]=(u*_*l-g*d*l+g*r*p-n*_*p-u*r*S+n*d*S)*I,t[8]=A*I,t[9]=(M*v*l-g*b*l-M*a*S+n*b*S+g*a*y-n*v*y)*I,t[10]=(u*b*l-M*f*l+M*a*p-n*b*p-u*a*y+n*f*y)*I,t[11]=(g*f*l-u*v*l-g*a*p+n*v*p+u*a*S-n*f*S)*I,t[12]=P*I,t[13]=(g*b*r-M*v*r+M*a*_-n*b*_-g*a*x+n*v*x)*I,t[14]=(M*f*r-u*b*r-M*a*d+n*b*d+u*a*x-n*f*x)*I,t[15]=(u*v*r-g*f*r+g*a*d-n*v*d-u*a*_+n*f*_)*I,this}scale(t){const n=this.elements,a=t.x,r=t.y,l=t.z;return n[0]*=a,n[4]*=r,n[8]*=l,n[1]*=a,n[5]*=r,n[9]*=l,n[2]*=a,n[6]*=r,n[10]*=l,n[3]*=a,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),l=1-a,u=t.x,f=t.y,d=t.z,p=l*u,g=l*f;return this.set(p*u+a,p*f-r*d,p*d+r*f,0,p*f+r*d,g*f+a,g*d-r*u,0,p*d-r*f,g*d+r*u,l*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,l,u){return this.set(1,a,l,0,t,1,u,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,l=n._x,u=n._y,f=n._z,d=n._w,p=l+l,g=u+u,v=f+f,_=l*p,S=l*g,M=l*v,b=u*g,x=u*v,y=f*v,T=d*p,U=d*g,A=d*v,P=a.x,B=a.y,I=a.z;return r[0]=(1-(b+y))*P,r[1]=(S+A)*P,r[2]=(M-U)*P,r[3]=0,r[4]=(S-A)*B,r[5]=(1-(_+y))*B,r[6]=(x+T)*B,r[7]=0,r[8]=(M+U)*I,r[9]=(x-T)*I,r[10]=(1-(_+b))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;let l=Cr.set(r[0],r[1],r[2]).length();const u=Cr.set(r[4],r[5],r[6]).length(),f=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],Ei.copy(this);const p=1/l,g=1/u,v=1/f;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,n.setFromRotationMatrix(Ei),a.x=l,a.y=u,a.z=f,this}makePerspective(t,n,a,r,l,u,f=Ma){const d=this.elements,p=2*l/(n-t),g=2*l/(a-r),v=(n+t)/(n-t),_=(a+r)/(a-r);let S,M;if(f===Ma)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(f===uu)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,r,l,u,f=Ma){const d=this.elements,p=1/(n-t),g=1/(a-r),v=1/(u-l),_=(n+t)*p,S=(a+r)*g;let M,b;if(f===Ma)M=(u+l)*v,b=-2*v;else if(f===uu)M=l*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=b,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Cr=new rt,Ei=new en,dM=new rt(0,0,0),pM=new rt(1,1,1),$a=new rt,Lc=new rt,si=new rt,rv=new en,ov=new ks;class qi{constructor(t=0,n=0,a=0,r=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,l=r[0],u=r[4],f=r[8],d=r[1],p=r[5],g=r[9],v=r[2],_=r[6],S=r[10];switch(n){case"XYZ":this._y=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return rv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ov.setFromEuler(this),this.setFromQuaternion(ov,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class D0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mM=0;const lv=new rt,Dr=new ks,ha=new en,Nc=new rt,Qo=new rt,gM=new rt,_M=new ks,cv=new rt(1,0,0),uv=new rt(0,1,0),fv=new rt(0,0,1),hv={type:"added"},vM={type:"removed"},Ur={type:"childadded",child:null},Ph={type:"childremoved",child:null};class In extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new rt,n=new qi,a=new ks,r=new rt(1,1,1);function l(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new en},normalMatrix:{value:new ce}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Dr.setFromAxisAngle(t,n),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,n){return Dr.setFromAxisAngle(t,n),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(cv,t)}rotateY(t){return this.rotateOnAxis(uv,t)}rotateZ(t){return this.rotateOnAxis(fv,t)}translateOnAxis(t,n){return lv.copy(t).applyQuaternion(this.quaternion),this.position.add(lv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(cv,t)}translateY(t){return this.translateOnAxis(uv,t)}translateZ(t){return this.translateOnAxis(fv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Nc.copy(t):Nc.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Qo,Nc,this.up):ha.lookAt(Nc,Qo,this.up),this.quaternion.setFromRotationMatrix(ha),r&&(ha.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(ha),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hv),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(vM),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hv),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,gM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,_M,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];l(t.shapes,v)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];r.animations.push(l(t.animations,d))}}if(n){const f=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),S=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),S.length>0&&(a.animations=S),M.length>0&&(a.nodes=M)}return a.object=r,a;function u(f){const d=[];for(const p in f){const g=f[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}In.DEFAULT_UP=new rt(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new rt,da=new rt,zh=new rt,pa=new rt,Lr=new rt,Nr=new rt,dv=new rt,Bh=new rt,Ih=new rt,Fh=new rt,Hh=new tn,Gh=new tn,Vh=new tn;class Ai{constructor(t=new rt,n=new rt,a=new rt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),bi.subVectors(t,n),r.cross(bi);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,n,a,r,l){bi.subVectors(r,n),da.subVectors(a,n),zh.subVectors(t,n);const u=bi.dot(bi),f=bi.dot(da),d=bi.dot(zh),p=da.dot(da),g=da.dot(zh),v=u*p-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,S=(p*d-f*g)*_,M=(u*g-f*d)*_;return l.set(1-S-M,M,S)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,n,a,r,l,u,f,d){return this.getBarycoord(t,n,a,r,pa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,pa.x),d.addScaledVector(u,pa.y),d.addScaledVector(f,pa.z),d)}static getInterpolatedAttribute(t,n,a,r,l,u){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,n),Gh.fromBufferAttribute(t,a),Vh.fromBufferAttribute(t,r),u.setScalar(0),u.addScaledVector(Hh,l.x),u.addScaledVector(Gh,l.y),u.addScaledVector(Vh,l.z),u}static isFrontFacing(t,n,a,r){return bi.subVectors(a,n),da.subVectors(t,n),bi.cross(da).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),da.subVectors(this.a,this.b),bi.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ai.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,l){return Ai.getInterpolation(t,this.a,this.b,this.c,n,a,r,l)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,l=this.c;let u,f;Lr.subVectors(r,a),Nr.subVectors(l,a),Bh.subVectors(t,a);const d=Lr.dot(Bh),p=Nr.dot(Bh);if(d<=0&&p<=0)return n.copy(a);Ih.subVectors(t,r);const g=Lr.dot(Ih),v=Nr.dot(Ih);if(g>=0&&v<=g)return n.copy(r);const _=d*v-g*p;if(_<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(Lr,u);Fh.subVectors(t,l);const S=Lr.dot(Fh),M=Nr.dot(Fh);if(M>=0&&S<=M)return n.copy(l);const b=S*p-d*M;if(b<=0&&p>=0&&M<=0)return f=p/(p-M),n.copy(a).addScaledVector(Nr,f);const x=g*M-S*v;if(x<=0&&v-g>=0&&S-M>=0)return dv.subVectors(l,r),f=(v-g)/(v-g+(S-M)),n.copy(r).addScaledVector(dv,f);const y=1/(x+b+_);return u=b*y,f=_*y,n.copy(a).addScaledVector(Lr,u).addScaledVector(Nr,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function kh(c,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?c+(t-c)*6*n:n<1/2?t:n<2/3?c+(t-c)*6*(2/3-n):c}class Re{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,n),this}setRGB(t,n,a,r=we.workingColorSpace){return this.r=t,this.g=n,this.b=a,we.colorSpaceToWorking(this,r),this}setHSL(t,n,a,r=we.workingColorSpace){if(t=tM(t,1),n=ye(n,0,1),a=ye(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,u=2*a-l;this.r=kh(u,l,t+1/3),this.g=kh(u,l,t),this.b=kh(u,l,t-1/3)}return we.colorSpaceToWorking(this,r),this}setStyle(t,n=gi){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=gi){const a=U0[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return we.workingToColorSpace(Bn.copy(this),t),Math.round(ye(Bn.r*255,0,255))*65536+Math.round(ye(Bn.g*255,0,255))*256+Math.round(ye(Bn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.workingToColorSpace(Bn.copy(this),n);const a=Bn.r,r=Bn.g,l=Bn.b,u=Math.max(a,r,l),f=Math.min(a,r,l);let d,p;const g=(f+u)/2;if(f===u)d=0,p=0;else{const v=u-f;switch(p=g<=.5?v/(u+f):v/(2-u-f),u){case a:d=(r-l)/v+(r<l?6:0);break;case r:d=(l-a)/v+2;break;case l:d=(a-r)/v+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,n=we.workingColorSpace){return we.workingToColorSpace(Bn.copy(this),n),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=gi){we.workingToColorSpace(Bn.copy(this),t);const n=Bn.r,a=Bn.g,r=Bn.b;return t!==gi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+n,ts.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(ts),t.getHSL(Oc);const a=Th(ts.h,Oc.h,n),r=Th(ts.s,Oc.s,n),l=Th(ts.l,Oc.l,n);return this.setHSL(a,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*r,this.g=l[1]*n+l[4]*a+l[7]*r,this.b=l[2]*n+l[5]*a+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Re;Re.NAMES=U0;let yM=0,dl=class extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=fl(),this.name="",this.type="Material",this.blending=kr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(a.blending=this.blending),this.side!==os&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==cd&&(a.blendSrc=this.blendSrc),this.blendDst!==ud&&(a.blendDst=this.blendDst),this.blendEquation!==Bs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(a.stencilFail=this.stencilFail),this.stencilZFail!==br&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(n){const l=r(t.textures),u=r(t.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class L0 extends dl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=m0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new rt,Pc=new oe;let xM=0;class Gi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=tv,this.updateRanges=[],this.gpuType=Sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Pc.fromBufferAttribute(this,n),Pc.applyMatrix3(t),this.setXY(n,Pc.x,Pc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=jo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=jo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=jo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=jo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=jo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array),r=Wn(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,l){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tv&&(t.usage=this.usage),t}}class N0 extends Gi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class O0 extends Gi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Vi extends Gi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let SM=0;const mi=new en,qh=new In,Or=new rt,ri=new hl,Jo=new hl,An=new rt;class cs extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w0(t)?O0:N0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new ce().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,n,a){return mi.makeTranslation(t,n,a),this.applyMatrix4(mi),this}scale(t,n,a){return mi.makeScale(t,n,a),this.applyMatrix4(mi),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,l=t.length;r<l;r++){const u=t[r];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Vi(a,3))}else{const a=Math.min(t.length,n.count);for(let r=0;r<a;r++){const l=t[r];n.setXYZ(r,l.x,l.y,l.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const l=n[a];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const a=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Jo.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(ri.min,Jo.min),ri.expandByPoint(An),An.addVectors(ri.max,Jo.max),ri.expandByPoint(An)):(ri.expandByPoint(Jo.min),ri.expandByPoint(Jo.max))}ri.getCenter(a);let r=0;for(let l=0,u=t.count;l<u;l++)An.fromBufferAttribute(t,l),r=Math.max(r,a.distanceToSquared(An));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],d=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)An.fromBufferAttribute(f,p),d&&(Or.fromBufferAttribute(t,p),An.add(Or)),r=Math.max(r,a.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let k=0;k<a.count;k++)f[k]=new rt,d[k]=new rt;const p=new rt,g=new rt,v=new rt,_=new oe,S=new oe,M=new oe,b=new rt,x=new rt;function y(k,N,w){p.fromBufferAttribute(a,k),g.fromBufferAttribute(a,N),v.fromBufferAttribute(a,w),_.fromBufferAttribute(l,k),S.fromBufferAttribute(l,N),M.fromBufferAttribute(l,w),g.sub(p),v.sub(p),S.sub(_),M.sub(_);const H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(H),x.copy(v).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(H),f[k].add(b),f[N].add(b),f[w].add(b),d[k].add(x),d[N].add(x),d[w].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let k=0,N=T.length;k<N;++k){const w=T[k],H=w.start,nt=w.count;for(let V=H,K=H+nt;V<K;V+=3)y(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const U=new rt,A=new rt,P=new rt,B=new rt;function I(k){P.fromBufferAttribute(r,k),B.copy(P);const N=f[k];U.copy(N),U.sub(P.multiplyScalar(P.dot(N))).normalize(),A.crossVectors(B,N);const H=A.dot(d[k])<0?-1:1;u.setXYZW(k,U.x,U.y,U.z,H)}for(let k=0,N=T.length;k<N;++k){const w=T[k],H=w.start,nt=w.count;for(let V=H,K=H+nt;V<K;V+=3)I(t.getX(V+0)),I(t.getX(V+1)),I(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Gi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,S=a.count;_<S;_++)a.setXYZ(_,0,0,0);const r=new rt,l=new rt,u=new rt,f=new rt,d=new rt,p=new rt,g=new rt,v=new rt;if(t)for(let _=0,S=t.count;_<S;_+=3){const M=t.getX(_+0),b=t.getX(_+1),x=t.getX(_+2);r.fromBufferAttribute(n,M),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),g.subVectors(u,l),v.subVectors(r,l),g.cross(v),f.fromBufferAttribute(a,M),d.fromBufferAttribute(a,b),p.fromBufferAttribute(a,x),f.add(g),d.add(g),p.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(b,d.x,d.y,d.z),a.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,S=n.count;_<S;_+=3)r.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,l),v.subVectors(r,l),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(f,d){const p=f.array,g=f.itemSize,v=f.normalized,_=new p.constructor(d.length*g);let S=0,M=0;for(let b=0,x=d.length;b<x;b++){f.isInterleavedBufferAttribute?S=d[b]*f.data.stride+f.offset:S=d[b]*g;for(let y=0;y<g;y++)_[M++]=p[S++]}return new Gi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cs,a=this.index.array,r=this.attributes;for(const f in r){const d=r[f],p=t(d,a);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let g=0,v=p.length;g<v;g++){const _=p[g],S=t(_,a);d.push(S)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const r={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,_=p.length;v<_;v++){const S=p[v];g.push(S.toJSON(t.data))}g.length>0&&(r[d]=g,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(n))}const l=t.morphAttributes;for(const p in l){const g=[],v=l[p];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pv=new en,Us=new C0,zc=new sp,mv=new rt,Bc=new rt,Ic=new rt,Fc=new rt,Xh=new rt,Hc=new rt,gv=new rt,Gc=new rt;class vi extends In{constructor(t=new cs,n=new L0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){Hc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=f[d],v=l[d];g!==0&&(Xh.fromBufferAttribute(v,t),u?Hc.addScaledVector(Xh,g):Hc.addScaledVector(Xh.sub(n),g))}n.add(Hc)}return n}raycast(t,n){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),zc.copy(a.boundingSphere),zc.applyMatrix4(l),Us.copy(t.ray).recast(t.near),!(zc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(zc,mv)===null||Us.origin.distanceToSquared(mv)>(t.far-t.near)**2))&&(pv.copy(l).invert(),Us.copy(t.ray).applyMatrix4(pv),!(a.boundingBox!==null&&Us.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Us)))}_computeIntersections(t,n,a){let r;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const x=_[M],y=u[x.materialIndex],T=Math.max(x.start,S.start),U=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let A=T,P=U;A<P;A+=3){const B=f.getX(A),I=f.getX(A+1),k=f.getX(A+2);r=Vc(this,y,t,a,p,g,v,B,I,k),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const M=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let x=M,y=b;x<y;x+=3){const T=f.getX(x),U=f.getX(x+1),A=f.getX(x+2);r=Vc(this,u,t,a,p,g,v,T,U,A),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,b=_.length;M<b;M++){const x=_[M],y=u[x.materialIndex],T=Math.max(x.start,S.start),U=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let A=T,P=U;A<P;A+=3){const B=A,I=A+1,k=A+2;r=Vc(this,y,t,a,p,g,v,B,I,k),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const M=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let x=M,y=b;x<y;x+=3){const T=x,U=x+1,A=x+2;r=Vc(this,u,t,a,p,g,v,T,U,A),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function MM(c,t,n,a,r,l,u,f){let d;if(t.side===Zn?d=a.intersectTriangle(u,l,r,!0,f):d=a.intersectTriangle(r,l,u,t.side===os,f),d===null)return null;Gc.copy(f),Gc.applyMatrix4(c.matrixWorld);const p=n.ray.origin.distanceTo(Gc);return p<n.near||p>n.far?null:{distance:p,point:Gc.clone(),object:c}}function Vc(c,t,n,a,r,l,u,f,d,p){c.getVertexPosition(f,Bc),c.getVertexPosition(d,Ic),c.getVertexPosition(p,Fc);const g=MM(c,t,n,a,Bc,Ic,Fc,gv);if(g){const v=new rt;Ai.getBarycoord(gv,Bc,Ic,Fc,v),r&&(g.uv=Ai.getInterpolatedAttribute(r,f,d,p,v,new oe)),l&&(g.uv1=Ai.getInterpolatedAttribute(l,f,d,p,v,new oe)),u&&(g.normal=Ai.getInterpolatedAttribute(u,f,d,p,v,new rt),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:d,c:p,normal:new rt,materialIndex:0};Ai.getNormal(Bc,Ic,Fc,_.normal),g.face=_,g.barycoord=v}return g}class Xs extends cs{constructor(t=1,n=1,a=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:l,depthSegments:u};const f=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],v=[];let _=0,S=0;M("z","y","x",-1,-1,a,n,t,u,l,0),M("z","y","x",1,-1,a,n,-t,u,l,1),M("x","z","y",1,1,t,a,n,r,u,2),M("x","z","y",1,-1,t,a,-n,r,u,3),M("x","y","z",1,-1,t,n,a,r,l,4),M("x","y","z",-1,-1,t,n,-a,r,l,5),this.setIndex(d),this.setAttribute("position",new Vi(p,3)),this.setAttribute("normal",new Vi(g,3)),this.setAttribute("uv",new Vi(v,2));function M(b,x,y,T,U,A,P,B,I,k,N){const w=A/I,H=P/k,nt=A/2,V=P/2,K=B/2,Y=I+1,O=k+1;let Z=0,q=0;const ct=new rt;for(let z=0;z<O;z++){const J=z*H-V;for(let st=0;st<Y;st++){const xt=st*w-nt;ct[b]=xt*T,ct[x]=J*U,ct[y]=K,p.push(ct.x,ct.y,ct.z),ct[b]=0,ct[x]=0,ct[y]=B>0?1:-1,g.push(ct.x,ct.y,ct.z),v.push(st/I),v.push(1-z/k),Z+=1}}for(let z=0;z<k;z++)for(let J=0;J<I;J++){const st=_+J+Y*z,xt=_+J+Y*(z+1),tt=_+(J+1)+Y*(z+1),gt=_+(J+1)+Y*z;d.push(st,xt,gt),d.push(xt,tt,gt),q+=6}f.addGroup(S,q,N),S+=q,_+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kr(c){const t={};for(const n in c){t[n]={};for(const a in c[n]){const r=c[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone():Array.isArray(r)?t[n][a]=r.slice():t[n][a]=r}}return t}function Hn(c){const t={};for(let n=0;n<c.length;n++){const a=Kr(c[n]);for(const r in a)t[r]=a[r]}return t}function EM(c){const t=[];for(let n=0;n<c.length;n++)t.push(c[n].clone());return t}function P0(c){const t=c.getRenderTarget();return t===null?c.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const bM={clone:Kr,merge:Hn};var TM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ls extends dl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=EM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class z0 extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ma}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new rt,_v=new oe,vv=new oe;class _i extends z0{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ru*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,n){return this.getViewBounds(t,_v,vv),n.subVectors(vv,_v)}setViewOffset(t,n,a,r,l,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ru*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*r/d,n-=u.offsetY*a/p,r*=u.width/d,a*=u.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Pr=-90,zr=1;class wM extends In{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _i(Pr,zr,t,n);r.layers=this.layers,this.add(r);const l=new _i(Pr,zr,t,n);l.layers=this.layers,this.add(l);const u=new _i(Pr,zr,t,n);u.layers=this.layers,this.add(u);const f=new _i(Pr,zr,t,n);f.layers=this.layers,this.add(f);const d=new _i(Pr,zr,t,n);d.layers=this.layers,this.add(d);const p=new _i(Pr,zr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,l,u,f,d]=n;for(const p of n)this.remove(p);if(t===Ma)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===uu)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,p,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(n,l),t.setRenderTarget(a,1,r),t.render(n,u),t.setRenderTarget(a,2,r),t.render(n,f),t.setRenderTarget(a,3,r),t.render(n,d),t.setRenderTarget(a,4,r),t.render(n,p),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,r),t.render(n,g),t.setRenderTarget(v,_,S),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class B0 extends Kn{constructor(t=[],n=Yr,a,r,l,u,f,d,p,g){super(t,n,a,r,l,u,f,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class RM extends qs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new B0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xs(5,5,5),l=new ls({name:"CubemapFromEquirect",uniforms:Kr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Zn,blending:ss});l.uniforms.tEquirect.value=n;const u=new vi(r,l),f=n.minFilter;return n.minFilter===Gs&&(n.minFilter=Hi),new wM(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,r=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,r);t.setRenderTarget(l)}}class kc extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CM={type:"move"};class Wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,l=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const b of t.hand.values()){const x=n.getJointPose(b,a),y=this._getHandJoint(p,b);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,M=.005;p.inputState.pinching&&_>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(CM)))}return f!==null&&(f.visible=r!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new kc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class DM extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yh=new rt,UM=new rt,LM=new ce;class is{constructor(t=new rt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=Yh.subVectors(a,n).cross(UM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Yh),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||LM.getNormalMatrix(t),r=this.coplanarPoint(Yh).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new sp,NM=new oe(.5,.5),qc=new rt;class rp{constructor(t=new is,n=new is,a=new is,r=new is,l=new is,u=new is){this.planes=[t,n,a,r,l,u]}set(t,n,a,r,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Ma){const a=this.planes,r=t.elements,l=r[0],u=r[1],f=r[2],d=r[3],p=r[4],g=r[5],v=r[6],_=r[7],S=r[8],M=r[9],b=r[10],x=r[11],y=r[12],T=r[13],U=r[14],A=r[15];if(a[0].setComponents(d-l,_-p,x-S,A-y).normalize(),a[1].setComponents(d+l,_+p,x+S,A+y).normalize(),a[2].setComponents(d+u,_+g,x+M,A+T).normalize(),a[3].setComponents(d-u,_-g,x-M,A-T).normalize(),a[4].setComponents(d-f,_-v,x-b,A-U).normalize(),n===Ma)a[5].setComponents(d+f,_+v,x+b,A+U).normalize();else if(n===uu)a[5].setComponents(f,v,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);const n=NM.distanceTo(t.center);return Ls.radius=.7071067811865476+n,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(qc.x=r.normal.x>0?t.max.x:t.min.x,qc.y=r.normal.y>0?t.max.y:t.min.y,qc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(qc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class I0 extends Kn{constructor(t,n,a=Vs,r,l,u,f=Ci,d=Ci,p,g=ol,v=1){if(g!==ol&&g!==ll)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,r,l,u,f,d,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ap(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pu extends cs{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const l=t/2,u=n/2,f=Math.floor(a),d=Math.floor(r),p=f+1,g=d+1,v=t/f,_=n/d,S=[],M=[],b=[],x=[];for(let y=0;y<g;y++){const T=y*_-u;for(let U=0;U<p;U++){const A=U*v-l;M.push(A,-T,0),b.push(0,0,1),x.push(U/f),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let T=0;T<f;T++){const U=T+p*y,A=T+p*(y+1),P=T+1+p*(y+1),B=T+1+p*y;S.push(U,A,B),S.push(A,P,B)}this.setIndex(S),this.setAttribute("position",new Vi(M,3)),this.setAttribute("normal",new Vi(b,3)),this.setAttribute("uv",new Vi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pu(t.width,t.height,t.widthSegments,t.heightSegments)}}class op extends cs{constructor(t=1,n=32,a=16,r=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:r,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(u+f,Math.PI);let p=0;const g=[],v=new rt,_=new rt,S=[],M=[],b=[],x=[];for(let y=0;y<=a;y++){const T=[],U=y/a;let A=0;y===0&&u===0?A=.5/n:y===a&&d===Math.PI&&(A=-.5/n);for(let P=0;P<=n;P++){const B=P/n;v.x=-t*Math.cos(r+B*l)*Math.sin(u+U*f),v.y=t*Math.cos(u+U*f),v.z=t*Math.sin(r+B*l)*Math.sin(u+U*f),M.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),x.push(B+A,1-U),T.push(p++)}g.push(T)}for(let y=0;y<a;y++)for(let T=0;T<n;T++){const U=g[y][T+1],A=g[y][T],P=g[y+1][T],B=g[y+1][T+1];(y!==0||u>0)&&S.push(U,A,B),(y!==a-1||d<Math.PI)&&S.push(A,P,B)}this.setIndex(S),this.setAttribute("position",new Vi(M,3)),this.setAttribute("normal",new Vi(b,3)),this.setAttribute("uv",new Vi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new op(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class jh extends dl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=T0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class OM extends dl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class PM extends dl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class F0 extends In{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Zh=new en,yv=new rt,xv=new rt;class zM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=ki,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;yv.setFromMatrixPosition(t.matrixWorld),n.position.copy(yv),xv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(xv),n.updateMatrixWorld(),Zh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class H0 extends z0{constructor(t=-1,n=1,a=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-t,u=a+t,f=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class BM extends zM{constructor(){super(new H0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class IM extends F0{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new BM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class FM extends F0{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class HM extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Sv{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(ye(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class GM extends Ws{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Mv(c,t,n,a){const r=VM(a);switch(n){case x0:return c*t;case M0:return c*t/r.components*r.byteLength;case ep:return c*t/r.components*r.byteLength;case E0:return c*t*2/r.components*r.byteLength;case np:return c*t*2/r.components*r.byteLength;case S0:return c*t*3/r.components*r.byteLength;case wi:return c*t*4/r.components*r.byteLength;case ip:return c*t*4/r.components*r.byteLength;case eu:case nu:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*8;case iu:case au:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case Ed:case Td:return Math.max(c,16)*Math.max(t,8)/4;case Md:case bd:return Math.max(c,8)*Math.max(t,8)/2;case Ad:case wd:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*8;case Rd:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((c+3)/4)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((c+4)/5)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((c+4)/5)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((c+5)/6)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((c+5)/6)*Math.floor((t+5)/6)*16;case Od:return Math.floor((c+7)/8)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((c+7)/8)*Math.floor((t+5)/6)*16;case zd:return Math.floor((c+7)/8)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((c+9)/10)*Math.floor((t+4)/5)*16;case Id:return Math.floor((c+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((c+9)/10)*Math.floor((t+7)/8)*16;case Hd:return Math.floor((c+9)/10)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((c+11)/12)*Math.floor((t+9)/10)*16;case Vd:return Math.floor((c+11)/12)*Math.floor((t+11)/12)*16;case su:case kd:case qd:return Math.ceil(c/4)*Math.ceil(t/4)*16;case b0:case Xd:return Math.ceil(c/4)*Math.ceil(t/4)*8;case Wd:case Yd:return Math.ceil(c/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VM(c){switch(c){case ki:case _0:return{byteLength:1,components:1};case sl:case v0:case ul:return{byteLength:2,components:1};case $d:case tp:return{byteLength:2,components:4};case Vs:case Jd:case Sa:return{byteLength:4,components:1};case y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${c}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function G0(){let c=null,t=!1,n=null,a=null;function r(l,u){n(l,u),a=c.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(a=c.requestAnimationFrame(r),t=!0)},stop:function(){c.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){c=l}}}function kM(c){const t=new WeakMap;function n(f,d){const p=f.array,g=f.usage,v=p.byteLength,_=c.createBuffer();c.bindBuffer(d,_),c.bufferData(d,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=c.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=c.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=c.HALF_FLOAT:S=c.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=c.SHORT;else if(p instanceof Uint32Array)S=c.UNSIGNED_INT;else if(p instanceof Int32Array)S=c.INT;else if(p instanceof Int8Array)S=c.BYTE;else if(p instanceof Uint8Array)S=c.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=c.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,d,p){const g=d.array,v=d.updateRanges;if(c.bindBuffer(p,f),v.length===0)c.bufferSubData(p,0,g);else{v.sort((S,M)=>S.start-M.start);let _=0;for(let S=1;S<v.length;S++){const M=v[_],b=v[S];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++_,v[_]=b)}v.length=_+1;for(let S=0,M=v.length;S<M;S++){const b=v[S];c.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(c.deleteBuffer(d.buffer),t.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,n(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:r,remove:l,update:u}}var qM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xE="gl_FragColor = linearToOutputTexel( gl_FragColor );",SE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ME=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$E=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Db=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ub=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ob=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ib=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ST=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:qM,alphahash_pars_fragment:XM,alphamap_fragment:WM,alphamap_pars_fragment:YM,alphatest_fragment:jM,alphatest_pars_fragment:ZM,aomap_fragment:KM,aomap_pars_fragment:QM,batching_pars_vertex:JM,batching_vertex:$M,begin_vertex:tE,beginnormal_vertex:eE,bsdfs:nE,iridescence_fragment:iE,bumpmap_pars_fragment:aE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:rE,clipping_planes_pars_vertex:oE,clipping_planes_vertex:lE,color_fragment:cE,color_pars_fragment:uE,color_pars_vertex:fE,color_vertex:hE,common:dE,cube_uv_reflection_fragment:pE,defaultnormal_vertex:mE,displacementmap_pars_vertex:gE,displacementmap_vertex:_E,emissivemap_fragment:vE,emissivemap_pars_fragment:yE,colorspace_fragment:xE,colorspace_pars_fragment:SE,envmap_fragment:ME,envmap_common_pars_fragment:EE,envmap_pars_fragment:bE,envmap_pars_vertex:TE,envmap_physical_pars_fragment:zE,envmap_vertex:AE,fog_vertex:wE,fog_pars_vertex:RE,fog_fragment:CE,fog_pars_fragment:DE,gradientmap_pars_fragment:UE,lightmap_pars_fragment:LE,lights_lambert_fragment:NE,lights_lambert_pars_fragment:OE,lights_pars_begin:PE,lights_toon_fragment:BE,lights_toon_pars_fragment:IE,lights_phong_fragment:FE,lights_phong_pars_fragment:HE,lights_physical_fragment:GE,lights_physical_pars_fragment:VE,lights_fragment_begin:kE,lights_fragment_maps:qE,lights_fragment_end:XE,logdepthbuf_fragment:WE,logdepthbuf_pars_fragment:YE,logdepthbuf_pars_vertex:jE,logdepthbuf_vertex:ZE,map_fragment:KE,map_pars_fragment:QE,map_particle_fragment:JE,map_particle_pars_fragment:$E,metalnessmap_fragment:tb,metalnessmap_pars_fragment:eb,morphinstance_vertex:nb,morphcolor_vertex:ib,morphnormal_vertex:ab,morphtarget_pars_vertex:sb,morphtarget_vertex:rb,normal_fragment_begin:ob,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:fb,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:db,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:_b,packing:vb,premultiplied_alpha_fragment:yb,project_vertex:xb,dithering_fragment:Sb,dithering_pars_fragment:Mb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Ab,shadowmap_vertex:wb,shadowmask_pars_fragment:Rb,skinbase_vertex:Cb,skinning_pars_vertex:Db,skinning_vertex:Ub,skinnormal_vertex:Lb,specularmap_fragment:Nb,specularmap_pars_fragment:Ob,tonemapping_fragment:Pb,tonemapping_pars_fragment:zb,transmission_fragment:Bb,transmission_pars_fragment:Ib,uv_pars_fragment:Fb,uv_pars_vertex:Hb,uv_vertex:Gb,worldpos_vertex:Vb,background_vert:kb,background_frag:qb,backgroundCube_vert:Xb,backgroundCube_frag:Wb,cube_vert:Yb,cube_frag:jb,depth_vert:Zb,depth_frag:Kb,distanceRGBA_vert:Qb,distanceRGBA_frag:Jb,equirect_vert:$b,equirect_frag:tT,linedashed_vert:eT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:aT,meshlambert_vert:sT,meshlambert_frag:rT,meshmatcap_vert:oT,meshmatcap_frag:lT,meshnormal_vert:cT,meshnormal_frag:uT,meshphong_vert:fT,meshphong_frag:hT,meshphysical_vert:dT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:_T,points_frag:vT,shadow_vert:yT,shadow_frag:xT,sprite_vert:ST,sprite_frag:MT},Nt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Fi={basic:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Hn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Hn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Hn([Nt.points,Nt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Hn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Hn([Nt.common,Nt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Hn([Nt.sprite,Nt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Hn([Nt.common,Nt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Hn([Nt.lights,Nt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Fi.physical={uniforms:Hn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Xc={r:0,b:0,g:0},Ns=new qi,ET=new en;function bT(c,t,n,a,r,l,u){const f=new Re(0);let d=l===!0?0:1,p,g,v=null,_=0,S=null;function M(U){let A=U.isScene===!0?U.background:null;return A&&A.isTexture&&(A=(U.backgroundBlurriness>0?n:t).get(A)),A}function b(U){let A=!1;const P=M(U);P===null?y(f,d):P&&P.isColor&&(y(P,1),A=!0);const B=c.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(c.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil))}function x(U,A){const P=M(A);P&&(P.isCubeTexture||P.mapping===du)?(g===void 0&&(g=new vi(new Xs(1,1,1),new ls({name:"BackgroundCubeMaterial",uniforms:Kr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Ns.copy(A.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(Ns)),g.material.toneMapped=we.getTransfer(P.colorSpace)!==Ge,(v!==P||_!==P.version||S!==c.toneMapping)&&(g.material.needsUpdate=!0,v=P,_=P.version,S=c.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new vi(new pu(2,2),new ls({name:"BackgroundMaterial",uniforms:Kr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=we.getTransfer(P.colorSpace)!==Ge,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||_!==P.version||S!==c.toneMapping)&&(p.material.needsUpdate=!0,v=P,_=P.version,S=c.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function y(U,A){U.getRGB(Xc,P0(c)),a.buffers.color.setClear(Xc.r,Xc.g,Xc.b,A,u)}function T(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,A=1){f.set(U),d=A,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,y(f,d)},render:b,addToRenderList:x,dispose:T}}function TT(c,t){const n=c.getParameter(c.MAX_VERTEX_ATTRIBS),a={},r=_(null);let l=r,u=!1;function f(w,H,nt,V,K){let Y=!1;const O=v(V,nt,H);l!==O&&(l=O,p(l.object)),Y=S(w,V,nt,K),Y&&M(w,V,nt,K),K!==null&&t.update(K,c.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,A(w,H,nt,V),K!==null&&c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return c.createVertexArray()}function p(w){return c.bindVertexArray(w)}function g(w){return c.deleteVertexArray(w)}function v(w,H,nt){const V=nt.wireframe===!0;let K=a[w.id];K===void 0&&(K={},a[w.id]=K);let Y=K[H.id];Y===void 0&&(Y={},K[H.id]=Y);let O=Y[V];return O===void 0&&(O=_(d()),Y[V]=O),O}function _(w){const H=[],nt=[],V=[];for(let K=0;K<n;K++)H[K]=0,nt[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:nt,attributeDivisors:V,object:w,attributes:{},index:null}}function S(w,H,nt,V){const K=l.attributes,Y=H.attributes;let O=0;const Z=nt.getAttributes();for(const q in Z)if(Z[q].location>=0){const z=K[q];let J=Y[q];if(J===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),z===void 0||z.attribute!==J||J&&z.data!==J.data)return!0;O++}return l.attributesNum!==O||l.index!==V}function M(w,H,nt,V){const K={},Y=H.attributes;let O=0;const Z=nt.getAttributes();for(const q in Z)if(Z[q].location>=0){let z=Y[q];z===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(z=w.instanceColor));const J={};J.attribute=z,z&&z.data&&(J.data=z.data),K[q]=J,O++}l.attributes=K,l.attributesNum=O,l.index=V}function b(){const w=l.newAttributes;for(let H=0,nt=w.length;H<nt;H++)w[H]=0}function x(w){y(w,0)}function y(w,H){const nt=l.newAttributes,V=l.enabledAttributes,K=l.attributeDivisors;nt[w]=1,V[w]===0&&(c.enableVertexAttribArray(w),V[w]=1),K[w]!==H&&(c.vertexAttribDivisor(w,H),K[w]=H)}function T(){const w=l.newAttributes,H=l.enabledAttributes;for(let nt=0,V=H.length;nt<V;nt++)H[nt]!==w[nt]&&(c.disableVertexAttribArray(nt),H[nt]=0)}function U(w,H,nt,V,K,Y,O){O===!0?c.vertexAttribIPointer(w,H,nt,K,Y):c.vertexAttribPointer(w,H,nt,V,K,Y)}function A(w,H,nt,V){b();const K=V.attributes,Y=nt.getAttributes(),O=H.defaultAttributeValues;for(const Z in Y){const q=Y[Z];if(q.location>=0){let ct=K[Z];if(ct===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor)),ct!==void 0){const z=ct.normalized,J=ct.itemSize,st=t.get(ct);if(st===void 0)continue;const xt=st.buffer,tt=st.type,gt=st.bytesPerElement,Mt=tt===c.INT||tt===c.UNSIGNED_INT||ct.gpuType===Jd;if(ct.isInterleavedBufferAttribute){const wt=ct.data,Ct=wt.stride,ue=ct.offset;if(wt.isInstancedInterleavedBuffer){for(let $t=0;$t<q.locationSize;$t++)y(q.location+$t,wt.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let $t=0;$t<q.locationSize;$t++)x(q.location+$t);c.bindBuffer(c.ARRAY_BUFFER,xt);for(let $t=0;$t<q.locationSize;$t++)U(q.location+$t,J/q.locationSize,tt,z,Ct*gt,(ue+J/q.locationSize*$t)*gt,Mt)}else{if(ct.isInstancedBufferAttribute){for(let wt=0;wt<q.locationSize;wt++)y(q.location+wt,ct.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let wt=0;wt<q.locationSize;wt++)x(q.location+wt);c.bindBuffer(c.ARRAY_BUFFER,xt);for(let wt=0;wt<q.locationSize;wt++)U(q.location+wt,J/q.locationSize,tt,z,J*gt,J/q.locationSize*wt*gt,Mt)}}else if(O!==void 0){const z=O[Z];if(z!==void 0)switch(z.length){case 2:c.vertexAttrib2fv(q.location,z);break;case 3:c.vertexAttrib3fv(q.location,z);break;case 4:c.vertexAttrib4fv(q.location,z);break;default:c.vertexAttrib1fv(q.location,z)}}}}T()}function P(){k();for(const w in a){const H=a[w];for(const nt in H){const V=H[nt];for(const K in V)g(V[K].object),delete V[K];delete H[nt]}delete a[w]}}function B(w){if(a[w.id]===void 0)return;const H=a[w.id];for(const nt in H){const V=H[nt];for(const K in V)g(V[K].object),delete V[K];delete H[nt]}delete a[w.id]}function I(w){for(const H in a){const nt=a[H];if(nt[w.id]===void 0)continue;const V=nt[w.id];for(const K in V)g(V[K].object),delete V[K];delete nt[w.id]}}function k(){N(),u=!0,l!==r&&(l=r,p(l.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:k,resetDefaultState:N,dispose:P,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:x,disableUnusedAttributes:T}}function AT(c,t,n){let a;function r(p){a=p}function l(p,g){c.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,v){v!==0&&(c.drawArraysInstanced(a,p,g,v),n.update(g,a,v))}function f(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,v);let S=0;for(let M=0;M<v;M++)S+=g[M];n.update(S,a,1)}function d(p,g,v,_){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],g[M],_[M]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,g,0,_,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b]*_[b];n.update(M,a,1)}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function wT(c,t,n,a){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=c.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(I){return!(I!==wi&&a.convert(I)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const k=I===ul&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ki&&a.convert(I)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Sa&&!k)}function d(I){if(I==="highp"){if(c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),M=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=c.getParameter(c.MAX_TEXTURE_SIZE),x=c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),y=c.getParameter(c.MAX_VERTEX_ATTRIBS),T=c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),U=c.getParameter(c.MAX_VARYING_VECTORS),A=c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,B=c.getParameter(c.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:T,maxVaryings:U,maxFragmentUniforms:A,vertexTextures:P,maxSamples:B}}function RT(c){const t=this;let n=null,a=0,r=!1,l=!1;const u=new is,f=new ce,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||a!==0||r;return r=_,a=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,S){const M=v.clippingPlanes,b=v.clipIntersection,x=v.clipShadows,y=c.get(v);if(!r||M===null||M.length===0||l&&!x)l?g(null):p();else{const T=l?0:a,U=T*4;let A=y.clippingState||null;d.value=A,A=g(M,_,U,S);for(let P=0;P!==U;++P)A[P]=n[P];y.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,S,M){const b=v!==null?v.length:0;let x=null;if(b!==0){if(x=d.value,M!==!0||x===null){const y=S+b*4,T=_.matrixWorldInverse;f.getNormalMatrix(T),(x===null||x.length<y)&&(x=new Float32Array(y));for(let U=0,A=S;U!==b;++U,A+=4)u.copy(v[U]).applyMatrix4(T,f),u.normal.toArray(x,A),x[A+3]=u.constant}d.value=x,d.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function CT(c){let t=new WeakMap;function n(u,f){return f===vd?u.mapping=Yr:f===yd&&(u.mapping=jr),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===vd||f===yd)if(t.has(u)){const d=t.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new RM(d.height);return p.fromEquirectangularTexture(c,u),t.set(u,p),u.addEventListener("dispose",r),n(p.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const Gr=4,Ev=[.125,.215,.35,.446,.526,.582],Is=20,Kh=new H0,bv=new Re;let Qh=null,Jh=0,$h=0,td=!1;const zs=(1+Math.sqrt(5))/2,Br=1/zs,Tv=[new rt(-zs,Br,0),new rt(zs,Br,0),new rt(-Br,0,zs),new rt(Br,0,zs),new rt(0,zs,-Br),new rt(0,zs,Br),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],DT=new rt;class Av{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,r=100,l={}){const{size:u=256,position:f=DT}=l;Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,a,r,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qh,Jh,$h),this._renderer.xr.enabled=td,t.scissorTest=!1,Wc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Yr||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:ul,format:wi,colorSpace:Zr,depthBuffer:!1},r=wv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wv(t,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UT(l)),this._blurMaterial=LT(l,t,n)}return r}_compileMaterial(t){const n=new vi(this._lodPlanes[0],t);this._renderer.compile(n,Kh)}_sceneToCubeUV(t,n,a,r,l){const d=new _i(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(bv),v.toneMapping=rs,v.autoClear=!1;const M=new L0({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),b=new vi(new Xs,M);let x=!1;const y=t.background;y?y.isColor&&(M.color.copy(y),t.background=null,x=!0):(M.color.copy(bv),x=!0);for(let T=0;T<6;T++){const U=T%3;U===0?(d.up.set(0,p[T],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[T],l.y,l.z)):U===1?(d.up.set(0,0,p[T]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[T],l.z)):(d.up.set(0,p[T],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[T]));const A=this._cubeSize;Wc(r,U*A,T>2?A:0,A,A),v.setRenderTarget(r),x&&v.render(b,d),v.render(t,d)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=S,v.autoClear=_,t.background=y}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===Yr||t.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());const l=r?this._cubemapMaterial:this._equirectMaterial,u=new vi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;Wc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,Kh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Tv[(r-l-1)%Tv.length];this._blur(t,l-1,l,u,f)}n.autoClear=a}_blur(t,n,a,r,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,r,"latitudinal",l),this._halfBlur(u,t,a,a,r,"longitudinal",l)}_halfBlur(t,n,a,r,l,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new vi(this._lodPlanes[r],p),_=p.uniforms,S=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Is-1),b=l/M,x=isFinite(l)?1+Math.floor(g*b):Is;x>Is&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Is}`);const y=[];let T=0;for(let I=0;I<Is;++I){const k=I/b,N=Math.exp(-k*k/2);y.push(N),I===0?T+=N:I<x&&(T+=2*N)}for(let I=0;I<y.length;I++)y[I]=y[I]/T;_.envMap.value=t.texture,_.samples.value=x,_.weights.value=y,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:U}=this;_.dTheta.value=M,_.mipInt.value=U-a;const A=this._sizeLods[r],P=3*A*(r>U-Gr?r-U+Gr:0),B=4*(this._cubeSize-A);Wc(n,P,B,3*A,2*A),d.setRenderTarget(n),d.render(v,Kh)}}function UT(c){const t=[],n=[],a=[];let r=c;const l=c-Gr+1+Ev.length;for(let u=0;u<l;u++){const f=Math.pow(2,r);n.push(f);let d=1/f;u>c-Gr?d=Ev[u-c+Gr-1]:u===0&&(d=0),a.push(d);const p=1/(f-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,M=6,b=3,x=2,y=1,T=new Float32Array(b*M*S),U=new Float32Array(x*M*S),A=new Float32Array(y*M*S);for(let B=0;B<S;B++){const I=B%3*2/3-1,k=B>2?0:-1,N=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];T.set(N,b*M*B),U.set(_,x*M*B);const w=[B,B,B,B,B,B];A.set(w,y*M*B)}const P=new cs;P.setAttribute("position",new Gi(T,b)),P.setAttribute("uv",new Gi(U,x)),P.setAttribute("faceIndex",new Gi(A,y)),t.push(P),r>Gr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function wv(c,t,n){const a=new qs(c,t,n);return a.texture.mapping=du,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Wc(c,t,n,a,r){c.viewport.set(t,n,a,r),c.scissor.set(t,n,a,r)}function LT(c,t,n){const a=new Float32Array(Is),r=new rt(0,1,0);return new ls({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Rv(){return new ls({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Cv(){return new ls({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function lp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NT(c){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const d=f.mapping,p=d===vd||d===yd,g=d===Yr||d===jr;if(p||g){let v=t.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Av(c)),v=p?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&r(S)?(n===null&&(n=new Av(c)),v=p?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,t.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function r(f){let d=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function OT(c){const t={};function n(a){if(t[a]!==void 0)return t[a];let r;switch(a){case"WEBGL_depth_texture":r=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=c.getExtension(a)}return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&qr("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function PT(c,t,n,a){const r={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const M in _.attributes)t.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete r[_.id];const S=l.get(_);S&&(t.remove(S),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(v,_){return r[_.id]===!0||(_.addEventListener("dispose",u),r[_.id]=!0,n.memory.geometries++),_}function d(v){const _=v.attributes;for(const S in _)t.update(_[S],c.ARRAY_BUFFER)}function p(v){const _=[],S=v.index,M=v.attributes.position;let b=0;if(S!==null){const T=S.array;b=S.version;for(let U=0,A=T.length;U<A;U+=3){const P=T[U+0],B=T[U+1],I=T[U+2];_.push(P,B,B,I,I,P)}}else if(M!==void 0){const T=M.array;b=M.version;for(let U=0,A=T.length/3-1;U<A;U+=3){const P=U+0,B=U+1,I=U+2;_.push(P,B,B,I,I,P)}}else return;const x=new(w0(_)?O0:N0)(_,1);x.version=b;const y=l.get(v);y&&t.remove(y),l.set(v,x)}function g(v){const _=l.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:g}}function zT(c,t,n){let a;function r(_){a=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function d(_,S){c.drawElements(a,S,l,_*u),n.update(S,a,1)}function p(_,S,M){M!==0&&(c.drawElementsInstanced(a,S,l,_*u,M),n.update(S,a,M))}function g(_,S,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,l,_,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];n.update(x,a,1)}function v(_,S,M,b){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<_.length;y++)p(_[y]/u,S[y],b[y]);else{x.multiDrawElementsInstancedWEBGL(a,S,0,l,_,0,b,0,M);let y=0;for(let T=0;T<M;T++)y+=S[T]*b[T];n.update(y,a,1)}}this.setMode=r,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function BT(c){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(n.calls++,u){case c.TRIANGLES:n.triangles+=f*(l/3);break;case c.LINES:n.lines+=f*(l/2);break;case c.LINE_STRIP:n.lines+=f*(l-1);break;case c.LINE_LOOP:n.lines+=f*l;break;case c.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function IT(c,t,n){const a=new WeakMap,r=new tn;function l(u,f,d){const p=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(f);if(_===void 0||_.count!==v){let w=function(){k.dispose(),a.delete(f),f.removeEventListener("dispose",w)};var S=w;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let A=0;M===!0&&(A=1),b===!0&&(A=2),x===!0&&(A=3);let P=f.attributes.position.count*A,B=1;P>t.maxTextureSize&&(B=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const I=new Float32Array(P*B*4*v),k=new R0(I,P,B,v);k.type=Sa,k.needsUpdate=!0;const N=A*4;for(let H=0;H<v;H++){const nt=y[H],V=T[H],K=U[H],Y=P*B*4*H;for(let O=0;O<nt.count;O++){const Z=O*N;M===!0&&(r.fromBufferAttribute(nt,O),I[Y+Z+0]=r.x,I[Y+Z+1]=r.y,I[Y+Z+2]=r.z,I[Y+Z+3]=0),b===!0&&(r.fromBufferAttribute(V,O),I[Y+Z+4]=r.x,I[Y+Z+5]=r.y,I[Y+Z+6]=r.z,I[Y+Z+7]=0),x===!0&&(r.fromBufferAttribute(K,O),I[Y+Z+8]=r.x,I[Y+Z+9]=r.y,I[Y+Z+10]=r.z,I[Y+Z+11]=K.itemSize===4?r.w:1)}}_={count:v,texture:k,size:new oe(P,B)},a.set(f,_),f.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(c,"morphTexture",u.morphTexture,n);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const b=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(c,"morphTargetBaseInfluence",b),d.getUniforms().setValue(c,"morphTargetInfluences",p)}d.getUniforms().setValue(c,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(c,"morphTargetsTextureSize",_.size)}return{update:l}}function FT(c,t,n,a){let r=new WeakMap;function l(d){const p=a.render.frame,g=d.geometry,v=t.get(d,g);if(r.get(v)!==p&&(t.update(v),r.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),r.get(d)!==p&&(n.update(d.instanceMatrix,c.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,c.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;r.get(_)!==p&&(_.update(),r.set(_,p))}return v}function u(){r=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:u}}const V0=new Kn,Dv=new I0(1,1),k0=new R0,q0=new fM,X0=new B0,Uv=[],Lv=[],Nv=new Float32Array(16),Ov=new Float32Array(9),Pv=new Float32Array(4);function Jr(c,t,n){const a=c[0];if(a<=0||a>0)return c;const r=t*n;let l=Uv[r];if(l===void 0&&(l=new Float32Array(r),Uv[r]=l),t!==0){a.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=n,c[u].toArray(l,f)}return l}function vn(c,t){if(c.length!==t.length)return!1;for(let n=0,a=c.length;n<a;n++)if(c[n]!==t[n])return!1;return!0}function yn(c,t){for(let n=0,a=t.length;n<a;n++)c[n]=t[n]}function mu(c,t){let n=Lv[t];n===void 0&&(n=new Int32Array(t),Lv[t]=n);for(let a=0;a!==t;++a)n[a]=c.allocateTextureUnit();return n}function HT(c,t){const n=this.cache;n[0]!==t&&(c.uniform1f(this.addr,t),n[0]=t)}function GT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;c.uniform2fv(this.addr,t),yn(n,t)}}function VT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(vn(n,t))return;c.uniform3fv(this.addr,t),yn(n,t)}}function kT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;c.uniform4fv(this.addr,t),yn(n,t)}}function qT(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(vn(n,t))return;c.uniformMatrix2fv(this.addr,!1,t),yn(n,t)}else{if(vn(n,a))return;Pv.set(a),c.uniformMatrix2fv(this.addr,!1,Pv),yn(n,a)}}function XT(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(vn(n,t))return;c.uniformMatrix3fv(this.addr,!1,t),yn(n,t)}else{if(vn(n,a))return;Ov.set(a),c.uniformMatrix3fv(this.addr,!1,Ov),yn(n,a)}}function WT(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(vn(n,t))return;c.uniformMatrix4fv(this.addr,!1,t),yn(n,t)}else{if(vn(n,a))return;Nv.set(a),c.uniformMatrix4fv(this.addr,!1,Nv),yn(n,a)}}function YT(c,t){const n=this.cache;n[0]!==t&&(c.uniform1i(this.addr,t),n[0]=t)}function jT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;c.uniform2iv(this.addr,t),yn(n,t)}}function ZT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;c.uniform3iv(this.addr,t),yn(n,t)}}function KT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;c.uniform4iv(this.addr,t),yn(n,t)}}function QT(c,t){const n=this.cache;n[0]!==t&&(c.uniform1ui(this.addr,t),n[0]=t)}function JT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;c.uniform2uiv(this.addr,t),yn(n,t)}}function $T(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;c.uniform3uiv(this.addr,t),yn(n,t)}}function tA(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;c.uniform4uiv(this.addr,t),yn(n,t)}}function eA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r);let l;this.type===c.SAMPLER_2D_SHADOW?(Dv.compareFunction=A0,l=Dv):l=V0,n.setTexture2D(t||l,r)}function nA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||q0,r)}function iA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||X0,r)}function aA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||k0,r)}function sA(c){switch(c){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return kT;case 35674:return qT;case 35675:return XT;case 35676:return WT;case 5124:case 35670:return YT;case 35667:case 35671:return jT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return aA}}function rA(c,t){c.uniform1fv(this.addr,t)}function oA(c,t){const n=Jr(t,this.size,2);c.uniform2fv(this.addr,n)}function lA(c,t){const n=Jr(t,this.size,3);c.uniform3fv(this.addr,n)}function cA(c,t){const n=Jr(t,this.size,4);c.uniform4fv(this.addr,n)}function uA(c,t){const n=Jr(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,n)}function fA(c,t){const n=Jr(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,n)}function hA(c,t){const n=Jr(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,n)}function dA(c,t){c.uniform1iv(this.addr,t)}function pA(c,t){c.uniform2iv(this.addr,t)}function mA(c,t){c.uniform3iv(this.addr,t)}function gA(c,t){c.uniform4iv(this.addr,t)}function _A(c,t){c.uniform1uiv(this.addr,t)}function vA(c,t){c.uniform2uiv(this.addr,t)}function yA(c,t){c.uniform3uiv(this.addr,t)}function xA(c,t){c.uniform4uiv(this.addr,t)}function SA(c,t,n){const a=this.cache,r=t.length,l=mu(n,r);vn(a,l)||(c.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)n.setTexture2D(t[u]||V0,l[u])}function MA(c,t,n){const a=this.cache,r=t.length,l=mu(n,r);vn(a,l)||(c.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)n.setTexture3D(t[u]||q0,l[u])}function EA(c,t,n){const a=this.cache,r=t.length,l=mu(n,r);vn(a,l)||(c.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)n.setTextureCube(t[u]||X0,l[u])}function bA(c,t,n){const a=this.cache,r=t.length,l=mu(n,r);vn(a,l)||(c.uniform1iv(this.addr,l),yn(a,l));for(let u=0;u!==r;++u)n.setTexture2DArray(t[u]||k0,l[u])}function TA(c){switch(c){case 5126:return rA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return fA;case 35676:return hA;case 5124:case 35670:return dA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return _A;case 36294:return vA;case 36295:return yA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return bA}}class AA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=sA(n.type)}}class wA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TA(n.type)}}class RA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const f=r[l];f.setValue(t,n[f.id],a)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function zv(c,t){c.seq.push(t),c.map[t.id]=t}function CA(c,t,n){const a=c.name,r=a.length;for(ed.lastIndex=0;;){const l=ed.exec(a),u=ed.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===r){zv(n,p===void 0?new AA(f,c,t):new wA(f,c,t));break}else{let v=n.map[f];v===void 0&&(v=new RA(f),zv(n,v)),n=v}}}class ou{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const l=t.getActiveUniform(n,r),u=t.getUniformLocation(n,l.name);CA(l,u,this)}}setValue(t,n,a,r){const l=this.map[n];l!==void 0&&l.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let l=0,u=n.length;l!==u;++l){const f=n[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,l=t.length;r!==l;++r){const u=t[r];u.id in n&&a.push(u)}return a}}function Bv(c,t,n){const a=c.createShader(t);return c.shaderSource(a,n),c.compileShader(a),a}const DA=37297;let UA=0;function LA(c,t){const n=c.split(`
`),a=[],r=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let u=r;u<l;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const Iv=new ce;function NA(c){we._getMatrix(Iv,we.workingColorSpace,c);const t=`mat3( ${Iv.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(c)){case cu:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",c),[t,"LinearTransferOETF"]}}function Fv(c,t,n){const a=c.getShaderParameter(t,c.COMPILE_STATUS),r=c.getShaderInfoLog(t).trim();if(a&&r==="")return"";const l=/ERROR: 0:(\d+)/.exec(r);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+r+`

`+LA(c.getShaderSource(t),u)}else return r}function OA(c,t){const n=NA(t);return[`vec4 ${c}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function PA(c,t){let n;switch(t){case zS:n="Linear";break;case BS:n="Reinhard";break;case IS:n="Cineon";break;case FS:n="ACESFilmic";break;case GS:n="AgX";break;case VS:n="Neutral";break;case HS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+c+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yc=new rt;function zA(){we.getLuminanceCoefficients(Yc);const c=Yc.x.toFixed(4),t=Yc.y.toFixed(4),n=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${c}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BA(c){return[c.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",c.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function IA(c){const t=[];for(const n in c){const a=c[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function FA(c,t){const n={},a=c.getProgramParameter(t,c.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=c.getActiveAttrib(t,r),u=l.name;let f=1;l.type===c.FLOAT_MAT2&&(f=2),l.type===c.FLOAT_MAT3&&(f=3),l.type===c.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:c.getAttribLocation(t,u),locationSize:f}}return n}function il(c){return c!==""}function Hv(c,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gv(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const HA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(c){return c.replace(HA,VA)}const GA=new Map;function VA(c,t){let n=he[t];if(n===void 0){const a=GA.get(t);if(a!==void 0)n=he[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Zd(n)}const kA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vv(c){return c.replace(kA,qA)}function qA(c,t,n,a){let r="";for(let l=parseInt(t);l<parseInt(n);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function kv(c){let t=`precision ${c.precision} float;
	precision ${c.precision} int;
	precision ${c.precision} sampler2D;
	precision ${c.precision} samplerCube;
	precision ${c.precision} sampler3D;
	precision ${c.precision} sampler2DArray;
	precision ${c.precision} sampler2DShadow;
	precision ${c.precision} samplerCubeShadow;
	precision ${c.precision} sampler2DArrayShadow;
	precision ${c.precision} isampler2D;
	precision ${c.precision} isampler3D;
	precision ${c.precision} isamplerCube;
	precision ${c.precision} isampler2DArray;
	precision ${c.precision} usampler2D;
	precision ${c.precision} usampler3D;
	precision ${c.precision} usamplerCube;
	precision ${c.precision} usampler2DArray;
	`;return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function XA(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===p0?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===mS?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===ya&&(t="SHADOWMAP_TYPE_VSM"),t}function WA(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Yr:case jr:t="ENVMAP_TYPE_CUBE";break;case du:t="ENVMAP_TYPE_CUBE_UV";break}return t}function YA(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case jr:t="ENVMAP_MODE_REFRACTION";break}return t}function jA(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case m0:t="ENVMAP_BLENDING_MULTIPLY";break;case OS:t="ENVMAP_BLENDING_MIX";break;case PS:t="ENVMAP_BLENDING_ADD";break}return t}function ZA(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:a,maxMip:n}}function KA(c,t,n,a){const r=c.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const d=XA(n),p=WA(n),g=YA(n),v=jA(n),_=ZA(n),S=BA(n),M=IA(l),b=r.createProgram();let x,y,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(il).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(il).join(`
`),y.length>0&&(y+=`
`)):(x=[kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),y=[kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rs?"#define TONE_MAPPING":"",n.toneMapping!==rs?he.tonemapping_pars_fragment:"",n.toneMapping!==rs?PA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,OA("linearToOutputTexel",n.outputColorSpace),zA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(il).join(`
`)),u=Zd(u),u=Hv(u,n),u=Gv(u,n),f=Zd(f),f=Hv(f,n),f=Gv(f,n),u=Vv(u),f=Vv(f),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",n.glslVersion===ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=T+x+u,A=T+y+f,P=Bv(r,r.VERTEX_SHADER,U),B=Bv(r,r.FRAGMENT_SHADER,A);r.attachShader(b,P),r.attachShader(b,B),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function I(H){if(c.debug.checkShaderErrors){const nt=r.getProgramInfoLog(b).trim(),V=r.getShaderInfoLog(P).trim(),K=r.getShaderInfoLog(B).trim();let Y=!0,O=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(Y=!1,typeof c.debug.onShaderError=="function")c.debug.onShaderError(r,b,P,B);else{const Z=Fv(r,P,"vertex"),q=Fv(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+nt+`
`+Z+`
`+q)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(V===""||K==="")&&(O=!1);O&&(H.diagnostics={runnable:Y,programLog:nt,vertexShader:{log:V,prefix:x},fragmentShader:{log:K,prefix:y}})}r.deleteShader(P),r.deleteShader(B),k=new ou(r,b),N=FA(r,b)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(b,DA)),w},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=B,this}let QA=0;class JA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new $A(t),n.set(t,a)),a}}class $A{constructor(t){this.id=QA++,this.code=t,this.usedTimes=0}}function t1(c,t,n,a,r,l,u){const f=new D0,d=new JA,p=new Set,g=[],v=r.logarithmicDepthBuffer,_=r.vertexTextures;let S=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(N){return p.add(N),N===0?"uv":`uv${N}`}function x(N,w,H,nt,V){const K=nt.fog,Y=V.geometry,O=N.isMeshStandardMaterial?nt.environment:null,Z=(N.isMeshStandardMaterial?n:t).get(N.envMap||O),q=Z&&Z.mapping===du?Z.image.height:null,ct=M[N.type];N.precision!==null&&(S=r.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const z=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,J=z!==void 0?z.length:0;let st=0;Y.morphAttributes.position!==void 0&&(st=1),Y.morphAttributes.normal!==void 0&&(st=2),Y.morphAttributes.color!==void 0&&(st=3);let xt,tt,gt,Mt;if(ct){const Te=Fi[ct];xt=Te.vertexShader,tt=Te.fragmentShader}else xt=N.vertexShader,tt=N.fragmentShader,d.update(N),gt=d.getVertexShaderID(N),Mt=d.getFragmentShaderID(N);const wt=c.getRenderTarget(),Ct=c.state.buffers.depth.getReversed(),ue=V.isInstancedMesh===!0,$t=V.isBatchedMesh===!0,ze=!!N.map,ke=!!N.matcap,xe=!!Z,X=!!N.aoMap,wn=!!N.lightMap,be=!!N.bumpMap,ge=!!N.normalMap,qt=!!N.displacementMap,Se=!!N.emissiveMap,Kt=!!N.metalnessMap,re=!!N.roughnessMap,nn=N.anisotropy>0,F=N.clearcoat>0,R=N.dispersion>0,ot=N.iridescence>0,mt=N.sheen>0,vt=N.transmission>0,dt=nn&&!!N.anisotropyMap,Pt=F&&!!N.clearcoatMap,Ut=F&&!!N.clearcoatNormalMap,kt=F&&!!N.clearcoatRoughnessMap,Xt=ot&&!!N.iridescenceMap,Et=ot&&!!N.iridescenceThicknessMap,zt=mt&&!!N.sheenColorMap,jt=mt&&!!N.sheenRoughnessMap,Zt=!!N.specularMap,Rt=!!N.specularColorMap,se=!!N.specularIntensityMap,j=vt&&!!N.transmissionMap,Lt=vt&&!!N.thicknessMap,bt=!!N.gradientMap,Bt=!!N.alphaMap,At=N.alphaTest>0,St=!!N.alphaHash,Ft=!!N.extensions;let ae=rs;N.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ae=c.toneMapping);const Ne={shaderID:ct,shaderType:N.type,shaderName:N.name,vertexShader:xt,fragmentShader:tt,defines:N.defines,customVertexShaderID:gt,customFragmentShaderID:Mt,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:$t,batchingColor:$t&&V._colorsTexture!==null,instancing:ue,instancingColor:ue&&V.instanceColor!==null,instancingMorph:ue&&V.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:wt===null?c.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Zr,alphaToCoverage:!!N.alphaToCoverage,map:ze,matcap:ke,envMap:xe,envMapMode:xe&&Z.mapping,envMapCubeUVHeight:q,aoMap:X,lightMap:wn,bumpMap:be,normalMap:ge,displacementMap:_&&qt,emissiveMap:Se,normalMapObjectSpace:ge&&N.normalMapType===WS,normalMapTangentSpace:ge&&N.normalMapType===T0,metalnessMap:Kt,roughnessMap:re,anisotropy:nn,anisotropyMap:dt,clearcoat:F,clearcoatMap:Pt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:kt,dispersion:R,iridescence:ot,iridescenceMap:Xt,iridescenceThicknessMap:Et,sheen:mt,sheenColorMap:zt,sheenRoughnessMap:jt,specularMap:Zt,specularColorMap:Rt,specularIntensityMap:se,transmission:vt,transmissionMap:j,thicknessMap:Lt,gradientMap:bt,opaque:N.transparent===!1&&N.blending===kr&&N.alphaToCoverage===!1,alphaMap:Bt,alphaTest:At,alphaHash:St,combine:N.combine,mapUv:ze&&b(N.map.channel),aoMapUv:X&&b(N.aoMap.channel),lightMapUv:wn&&b(N.lightMap.channel),bumpMapUv:be&&b(N.bumpMap.channel),normalMapUv:ge&&b(N.normalMap.channel),displacementMapUv:qt&&b(N.displacementMap.channel),emissiveMapUv:Se&&b(N.emissiveMap.channel),metalnessMapUv:Kt&&b(N.metalnessMap.channel),roughnessMapUv:re&&b(N.roughnessMap.channel),anisotropyMapUv:dt&&b(N.anisotropyMap.channel),clearcoatMapUv:Pt&&b(N.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&b(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&b(N.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&b(N.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&b(N.sheenColorMap.channel),sheenRoughnessMapUv:jt&&b(N.sheenRoughnessMap.channel),specularMapUv:Zt&&b(N.specularMap.channel),specularColorMapUv:Rt&&b(N.specularColorMap.channel),specularIntensityMapUv:se&&b(N.specularIntensityMap.channel),transmissionMapUv:j&&b(N.transmissionMap.channel),thicknessMapUv:Lt&&b(N.thicknessMap.channel),alphaMapUv:Bt&&b(N.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ge||nn),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(ze||Bt),fog:!!K,useFog:N.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:st,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:c.shadowMap.enabled&&H.length>0,shadowMapType:c.shadowMap.type,toneMapping:ae,decodeVideoTexture:ze&&N.map.isVideoTexture===!0&&we.getTransfer(N.map.colorSpace)===Ge,decodeVideoTextureEmissive:Se&&N.emissiveMap.isVideoTexture===!0&&we.getTransfer(N.emissiveMap.colorSpace)===Ge,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===xa,flipSided:N.side===Zn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:Ft&&N.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&N.extensions.multiDraw===!0||$t)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function y(N){const w=[];if(N.shaderID?w.push(N.shaderID):(w.push(N.customVertexShaderID),w.push(N.customFragmentShaderID)),N.defines!==void 0)for(const H in N.defines)w.push(H),w.push(N.defines[H]);return N.isRawShaderMaterial===!1&&(T(w,N),U(w,N),w.push(c.outputColorSpace)),w.push(N.customProgramCacheKey),w.join()}function T(N,w){N.push(w.precision),N.push(w.outputColorSpace),N.push(w.envMapMode),N.push(w.envMapCubeUVHeight),N.push(w.mapUv),N.push(w.alphaMapUv),N.push(w.lightMapUv),N.push(w.aoMapUv),N.push(w.bumpMapUv),N.push(w.normalMapUv),N.push(w.displacementMapUv),N.push(w.emissiveMapUv),N.push(w.metalnessMapUv),N.push(w.roughnessMapUv),N.push(w.anisotropyMapUv),N.push(w.clearcoatMapUv),N.push(w.clearcoatNormalMapUv),N.push(w.clearcoatRoughnessMapUv),N.push(w.iridescenceMapUv),N.push(w.iridescenceThicknessMapUv),N.push(w.sheenColorMapUv),N.push(w.sheenRoughnessMapUv),N.push(w.specularMapUv),N.push(w.specularColorMapUv),N.push(w.specularIntensityMapUv),N.push(w.transmissionMapUv),N.push(w.thicknessMapUv),N.push(w.combine),N.push(w.fogExp2),N.push(w.sizeAttenuation),N.push(w.morphTargetsCount),N.push(w.morphAttributeCount),N.push(w.numDirLights),N.push(w.numPointLights),N.push(w.numSpotLights),N.push(w.numSpotLightMaps),N.push(w.numHemiLights),N.push(w.numRectAreaLights),N.push(w.numDirLightShadows),N.push(w.numPointLightShadows),N.push(w.numSpotLightShadows),N.push(w.numSpotLightShadowsWithMaps),N.push(w.numLightProbes),N.push(w.shadowMapType),N.push(w.toneMapping),N.push(w.numClippingPlanes),N.push(w.numClipIntersection),N.push(w.depthPacking)}function U(N,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),w.gradientMap&&f.enable(22),N.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reverseDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),N.push(f.mask)}function A(N){const w=M[N.type];let H;if(w){const nt=Fi[w];H=bM.clone(nt.uniforms)}else H=N.uniforms;return H}function P(N,w){let H;for(let nt=0,V=g.length;nt<V;nt++){const K=g[nt];if(K.cacheKey===w){H=K,++H.usedTimes;break}}return H===void 0&&(H=new KA(c,w,N,l),g.push(H)),H}function B(N){if(--N.usedTimes===0){const w=g.indexOf(N);g[w]=g[g.length-1],g.pop(),N.destroy()}}function I(N){d.remove(N)}function k(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:A,acquireProgram:P,releaseProgram:B,releaseShaderCache:I,programs:g,dispose:k}}function e1(){let c=new WeakMap;function t(u){return c.has(u)}function n(u){let f=c.get(u);return f===void 0&&(f={},c.set(u,f)),f}function a(u){c.delete(u)}function r(u,f,d){c.get(u)[f]=d}function l(){c=new WeakMap}return{has:t,get:n,remove:a,update:r,dispose:l}}function n1(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function qv(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function Xv(){const c=[];let t=0;const n=[],a=[],r=[];function l(){t=0,n.length=0,a.length=0,r.length=0}function u(v,_,S,M,b,x){let y=c[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:S,groupOrder:M,renderOrder:v.renderOrder,z:b,group:x},c[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=S,y.groupOrder=M,y.renderOrder=v.renderOrder,y.z=b,y.group=x),t++,y}function f(v,_,S,M,b,x){const y=u(v,_,S,M,b,x);S.transmission>0?a.push(y):S.transparent===!0?r.push(y):n.push(y)}function d(v,_,S,M,b,x){const y=u(v,_,S,M,b,x);S.transmission>0?a.unshift(y):S.transparent===!0?r.unshift(y):n.unshift(y)}function p(v,_){n.length>1&&n.sort(v||n1),a.length>1&&a.sort(_||qv),r.length>1&&r.sort(_||qv)}function g(){for(let v=t,_=c.length;v<_;v++){const S=c[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:r,init:l,push:f,unshift:d,finish:g,sort:p}}function i1(){let c=new WeakMap;function t(a,r){const l=c.get(a);let u;return l===void 0?(u=new Xv,c.set(a,[u])):r>=l.length?(u=new Xv,l.push(u)):u=l[r],u}function n(){c=new WeakMap}return{get:t,dispose:n}}function a1(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new rt,color:new Re};break;case"SpotLight":n={position:new rt,direction:new rt,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new rt,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new rt,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return c[t.id]=n,n}}}function s1(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=n,n}}}let r1=0;function o1(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function l1(c){const t=new a1,n=s1(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new rt);const r=new rt,l=new en,u=new en;function f(p){let g=0,v=0,_=0;for(let N=0;N<9;N++)a.probe[N].set(0,0,0);let S=0,M=0,b=0,x=0,y=0,T=0,U=0,A=0,P=0,B=0,I=0;p.sort(o1);for(let N=0,w=p.length;N<w;N++){const H=p[N],nt=H.color,V=H.intensity,K=H.distance,Y=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=nt.r*V,v+=nt.g*V,_+=nt.b*V;else if(H.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(H.sh.coefficients[O],V);I++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,q=n.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,a.directionalShadow[S]=q,a.directionalShadowMap[S]=Y,a.directionalShadowMatrix[S]=H.shadow.matrix,T++}a.directional[S]=O,S++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(nt).multiplyScalar(V),O.distance=K,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,a.spot[b]=O;const Z=H.shadow;if(H.map&&(a.spotLightMap[P]=H.map,P++,Z.updateMatrices(H),H.castShadow&&B++),a.spotLightMatrix[b]=Z.matrix,H.castShadow){const q=n.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,a.spotShadow[b]=q,a.spotShadowMap[b]=Y,A++}b++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(nt).multiplyScalar(V),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),a.rectArea[x]=O,x++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const Z=H.shadow,q=n.get(H);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,a.pointShadow[M]=q,a.pointShadowMap[M]=Y,a.pointShadowMatrix[M]=H.shadow.matrix,U++}a.point[M]=O,M++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(V),O.groundColor.copy(H.groundColor).multiplyScalar(V),a.hemi[y]=O,y++}}x>0&&(c.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_FLOAT_1,a.rectAreaLTC2=Nt.LTC_FLOAT_2):(a.rectAreaLTC1=Nt.LTC_HALF_1,a.rectAreaLTC2=Nt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const k=a.hash;(k.directionalLength!==S||k.pointLength!==M||k.spotLength!==b||k.rectAreaLength!==x||k.hemiLength!==y||k.numDirectionalShadows!==T||k.numPointShadows!==U||k.numSpotShadows!==A||k.numSpotMaps!==P||k.numLightProbes!==I)&&(a.directional.length=S,a.spot.length=b,a.rectArea.length=x,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=A+P-B,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=I,k.directionalLength=S,k.pointLength=M,k.spotLength=b,k.rectAreaLength=x,k.hemiLength=y,k.numDirectionalShadows=T,k.numPointShadows=U,k.numSpotShadows=A,k.numSpotMaps=P,k.numLightProbes=I,a.version=r1++)}function d(p,g){let v=0,_=0,S=0,M=0,b=0;const x=g.matrixWorldInverse;for(let y=0,T=p.length;y<T;y++){const U=p[y];if(U.isDirectionalLight){const A=a.directional[v];A.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),v++}else if(U.isSpotLight){const A=a.spot[S];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),S++}else if(U.isRectAreaLight){const A=a.rectArea[M];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(x),u.identity(),l.copy(U.matrixWorld),l.premultiply(x),u.extractRotation(l),A.halfWidth.set(U.width*.5,0,0),A.halfHeight.set(0,U.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const A=a.point[_];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(x),_++}else if(U.isHemisphereLight){const A=a.hemi[b];A.direction.setFromMatrixPosition(U.matrixWorld),A.direction.transformDirection(x),b++}}}return{setup:f,setupView:d,state:a}}function Wv(c){const t=new l1(c),n=[],a=[];function r(g){p.camera=g,n.length=0,a.length=0}function l(g){n.push(g)}function u(g){a.push(g)}function f(){t.setup(n)}function d(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function c1(c){let t=new WeakMap;function n(r,l=0){const u=t.get(r);let f;return u===void 0?(f=new Wv(c),t.set(r,[f])):l>=u.length?(f=new Wv(c),u.push(f)):f=u[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const u1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h1(c,t,n){let a=new rp;const r=new oe,l=new oe,u=new tn,f=new OM({depthPacking:XS}),d=new PM,p={},g=n.maxTextureSize,v={[os]:Zn,[Zn]:os,[xa]:xa},_=new ls({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:u1,fragmentShader:f1}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new cs;M.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new vi(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=p0;let y=this.type;this.render=function(B,I,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const N=c.getRenderTarget(),w=c.getActiveCubeFace(),H=c.getActiveMipmapLevel(),nt=c.state;nt.setBlending(ss),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const V=y!==ya&&this.type===ya,K=y===ya&&this.type!==ya;for(let Y=0,O=B.length;Y<O;Y++){const Z=B[Y],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ct=q.getFrameExtents();if(r.multiply(ct),l.copy(q.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(l.x=Math.floor(g/ct.x),r.x=l.x*ct.x,q.mapSize.x=l.x),r.y>g&&(l.y=Math.floor(g/ct.y),r.y=l.y*ct.y,q.mapSize.y=l.y)),q.map===null||V===!0||K===!0){const J=this.type!==ya?{minFilter:Ci,magFilter:Ci}:{};q.map!==null&&q.map.dispose(),q.map=new qs(r.x,r.y,J),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}c.setRenderTarget(q.map),c.clear();const z=q.getViewportCount();for(let J=0;J<z;J++){const st=q.getViewport(J);u.set(l.x*st.x,l.y*st.y,l.x*st.z,l.y*st.w),nt.viewport(u),q.updateMatrices(Z,J),a=q.getFrustum(),A(I,k,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===ya&&T(q,k),q.needsUpdate=!1}y=this.type,x.needsUpdate=!1,c.setRenderTarget(N,w,H)};function T(B,I){const k=t.update(b);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new qs(r.x,r.y)),_.uniforms.shadow_pass.value=B.map.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,c.setRenderTarget(B.mapPass),c.clear(),c.renderBufferDirect(I,null,k,_,b,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,c.setRenderTarget(B.map),c.clear(),c.renderBufferDirect(I,null,k,S,b,null)}function U(B,I,k,N){let w=null;const H=k.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)w=H;else if(w=k.isPointLight===!0?d:f,c.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const nt=w.uuid,V=I.uuid;let K=p[nt];K===void 0&&(K={},p[nt]=K);let Y=K[V];Y===void 0&&(Y=w.clone(),K[V]=Y,I.addEventListener("dispose",P)),w=Y}if(w.visible=I.visible,w.wireframe=I.wireframe,N===ya?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:v[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const nt=c.properties.get(w);nt.light=k}return w}function A(B,I,k,N,w){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===ya)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,B.matrixWorld);const V=t.update(B),K=B.material;if(Array.isArray(K)){const Y=V.groups;for(let O=0,Z=Y.length;O<Z;O++){const q=Y[O],ct=K[q.materialIndex];if(ct&&ct.visible){const z=U(B,ct,N,w);B.onBeforeShadow(c,B,I,k,V,z,q),c.renderBufferDirect(k,null,V,z,B,q),B.onAfterShadow(c,B,I,k,V,z,q)}}}else if(K.visible){const Y=U(B,K,N,w);B.onBeforeShadow(c,B,I,k,V,Y,null),c.renderBufferDirect(k,null,V,Y,B,null),B.onAfterShadow(c,B,I,k,V,Y,null)}}const nt=B.children;for(let V=0,K=nt.length;V<K;V++)A(nt[V],I,k,N,w)}function P(B){B.target.removeEventListener("dispose",P);for(const k in p){const N=p[k],w=B.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}const d1={[fd]:hd,[dd]:gd,[pd]:_d,[Wr]:md,[hd]:fd,[gd]:dd,[_d]:pd,[md]:Wr};function p1(c,t){function n(){let j=!1;const Lt=new tn;let bt=null;const Bt=new tn(0,0,0,0);return{setMask:function(At){bt!==At&&!j&&(c.colorMask(At,At,At,At),bt=At)},setLocked:function(At){j=At},setClear:function(At,St,Ft,ae,Ne){Ne===!0&&(At*=ae,St*=ae,Ft*=ae),Lt.set(At,St,Ft,ae),Bt.equals(Lt)===!1&&(c.clearColor(At,St,Ft,ae),Bt.copy(Lt))},reset:function(){j=!1,bt=null,Bt.set(-1,0,0,0)}}}function a(){let j=!1,Lt=!1,bt=null,Bt=null,At=null;return{setReversed:function(St){if(Lt!==St){const Ft=t.get("EXT_clip_control");St?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),Lt=St;const ae=At;At=null,this.setClear(ae)}},getReversed:function(){return Lt},setTest:function(St){St?wt(c.DEPTH_TEST):Ct(c.DEPTH_TEST)},setMask:function(St){bt!==St&&!j&&(c.depthMask(St),bt=St)},setFunc:function(St){if(Lt&&(St=d1[St]),Bt!==St){switch(St){case fd:c.depthFunc(c.NEVER);break;case hd:c.depthFunc(c.ALWAYS);break;case dd:c.depthFunc(c.LESS);break;case Wr:c.depthFunc(c.LEQUAL);break;case pd:c.depthFunc(c.EQUAL);break;case md:c.depthFunc(c.GEQUAL);break;case gd:c.depthFunc(c.GREATER);break;case _d:c.depthFunc(c.NOTEQUAL);break;default:c.depthFunc(c.LEQUAL)}Bt=St}},setLocked:function(St){j=St},setClear:function(St){At!==St&&(Lt&&(St=1-St),c.clearDepth(St),At=St)},reset:function(){j=!1,bt=null,Bt=null,At=null,Lt=!1}}}function r(){let j=!1,Lt=null,bt=null,Bt=null,At=null,St=null,Ft=null,ae=null,Ne=null;return{setTest:function(Te){j||(Te?wt(c.STENCIL_TEST):Ct(c.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!j&&(c.stencilMask(Te),Lt=Te)},setFunc:function(Te,Qn,xn){(bt!==Te||Bt!==Qn||At!==xn)&&(c.stencilFunc(Te,Qn,xn),bt=Te,Bt=Qn,At=xn)},setOp:function(Te,Qn,xn){(St!==Te||Ft!==Qn||ae!==xn)&&(c.stencilOp(Te,Qn,xn),St=Te,Ft=Qn,ae=xn)},setLocked:function(Te){j=Te},setClear:function(Te){Ne!==Te&&(c.clearStencil(Te),Ne=Te)},reset:function(){j=!1,Lt=null,bt=null,Bt=null,At=null,St=null,Ft=null,ae=null,Ne=null}}}const l=new n,u=new a,f=new r,d=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,S=[],M=null,b=!1,x=null,y=null,T=null,U=null,A=null,P=null,B=null,I=new Re(0,0,0),k=0,N=!1,w=null,H=null,nt=null,V=null,K=null;const Y=c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const q=c.getParameter(c.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=Z>=2);let ct=null,z={};const J=c.getParameter(c.SCISSOR_BOX),st=c.getParameter(c.VIEWPORT),xt=new tn().fromArray(J),tt=new tn().fromArray(st);function gt(j,Lt,bt,Bt){const At=new Uint8Array(4),St=c.createTexture();c.bindTexture(j,St),c.texParameteri(j,c.TEXTURE_MIN_FILTER,c.NEAREST),c.texParameteri(j,c.TEXTURE_MAG_FILTER,c.NEAREST);for(let Ft=0;Ft<bt;Ft++)j===c.TEXTURE_3D||j===c.TEXTURE_2D_ARRAY?c.texImage3D(Lt,0,c.RGBA,1,1,Bt,0,c.RGBA,c.UNSIGNED_BYTE,At):c.texImage2D(Lt+Ft,0,c.RGBA,1,1,0,c.RGBA,c.UNSIGNED_BYTE,At);return St}const Mt={};Mt[c.TEXTURE_2D]=gt(c.TEXTURE_2D,c.TEXTURE_2D,1),Mt[c.TEXTURE_CUBE_MAP]=gt(c.TEXTURE_CUBE_MAP,c.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[c.TEXTURE_2D_ARRAY]=gt(c.TEXTURE_2D_ARRAY,c.TEXTURE_2D_ARRAY,1,1),Mt[c.TEXTURE_3D]=gt(c.TEXTURE_3D,c.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),wt(c.DEPTH_TEST),u.setFunc(Wr),be(!1),ge(Z_),wt(c.CULL_FACE),X(ss);function wt(j){g[j]!==!0&&(c.enable(j),g[j]=!0)}function Ct(j){g[j]!==!1&&(c.disable(j),g[j]=!1)}function ue(j,Lt){return v[j]!==Lt?(c.bindFramebuffer(j,Lt),v[j]=Lt,j===c.DRAW_FRAMEBUFFER&&(v[c.FRAMEBUFFER]=Lt),j===c.FRAMEBUFFER&&(v[c.DRAW_FRAMEBUFFER]=Lt),!0):!1}function $t(j,Lt){let bt=S,Bt=!1;if(j){bt=_.get(Lt),bt===void 0&&(bt=[],_.set(Lt,bt));const At=j.textures;if(bt.length!==At.length||bt[0]!==c.COLOR_ATTACHMENT0){for(let St=0,Ft=At.length;St<Ft;St++)bt[St]=c.COLOR_ATTACHMENT0+St;bt.length=At.length,Bt=!0}}else bt[0]!==c.BACK&&(bt[0]=c.BACK,Bt=!0);Bt&&c.drawBuffers(bt)}function ze(j){return M!==j?(c.useProgram(j),M=j,!0):!1}const ke={[Bs]:c.FUNC_ADD,[_S]:c.FUNC_SUBTRACT,[vS]:c.FUNC_REVERSE_SUBTRACT};ke[yS]=c.MIN,ke[xS]=c.MAX;const xe={[SS]:c.ZERO,[MS]:c.ONE,[ES]:c.SRC_COLOR,[cd]:c.SRC_ALPHA,[CS]:c.SRC_ALPHA_SATURATE,[wS]:c.DST_COLOR,[TS]:c.DST_ALPHA,[bS]:c.ONE_MINUS_SRC_COLOR,[ud]:c.ONE_MINUS_SRC_ALPHA,[RS]:c.ONE_MINUS_DST_COLOR,[AS]:c.ONE_MINUS_DST_ALPHA,[DS]:c.CONSTANT_COLOR,[US]:c.ONE_MINUS_CONSTANT_COLOR,[LS]:c.CONSTANT_ALPHA,[NS]:c.ONE_MINUS_CONSTANT_ALPHA};function X(j,Lt,bt,Bt,At,St,Ft,ae,Ne,Te){if(j===ss){b===!0&&(Ct(c.BLEND),b=!1);return}if(b===!1&&(wt(c.BLEND),b=!0),j!==gS){if(j!==x||Te!==N){if((y!==Bs||A!==Bs)&&(c.blendEquation(c.FUNC_ADD),y=Bs,A=Bs),Te)switch(j){case kr:c.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case K_:c.blendFunc(c.ONE,c.ONE);break;case Q_:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case J_:c.blendFuncSeparate(c.DST_COLOR,c.ONE_MINUS_SRC_ALPHA,c.ZERO,c.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case kr:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case K_:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE,c.ONE,c.ONE);break;case Q_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}T=null,U=null,P=null,B=null,I.set(0,0,0),k=0,x=j,N=Te}return}At=At||Lt,St=St||bt,Ft=Ft||Bt,(Lt!==y||At!==A)&&(c.blendEquationSeparate(ke[Lt],ke[At]),y=Lt,A=At),(bt!==T||Bt!==U||St!==P||Ft!==B)&&(c.blendFuncSeparate(xe[bt],xe[Bt],xe[St],xe[Ft]),T=bt,U=Bt,P=St,B=Ft),(ae.equals(I)===!1||Ne!==k)&&(c.blendColor(ae.r,ae.g,ae.b,Ne),I.copy(ae),k=Ne),x=j,N=!1}function wn(j,Lt){j.side===xa?Ct(c.CULL_FACE):wt(c.CULL_FACE);let bt=j.side===Zn;Lt&&(bt=!bt),be(bt),j.blending===kr&&j.transparent===!1?X(ss):X(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),l.setMask(j.colorWrite);const Bt=j.stencilWrite;f.setTest(Bt),Bt&&(f.setMask(j.stencilWriteMask),f.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),f.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Se(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?wt(c.SAMPLE_ALPHA_TO_COVERAGE):Ct(c.SAMPLE_ALPHA_TO_COVERAGE)}function be(j){w!==j&&(j?c.frontFace(c.CW):c.frontFace(c.CCW),w=j)}function ge(j){j!==dS?(wt(c.CULL_FACE),j!==H&&(j===Z_?c.cullFace(c.BACK):j===pS?c.cullFace(c.FRONT):c.cullFace(c.FRONT_AND_BACK))):Ct(c.CULL_FACE),H=j}function qt(j){j!==nt&&(O&&c.lineWidth(j),nt=j)}function Se(j,Lt,bt){j?(wt(c.POLYGON_OFFSET_FILL),(V!==Lt||K!==bt)&&(c.polygonOffset(Lt,bt),V=Lt,K=bt)):Ct(c.POLYGON_OFFSET_FILL)}function Kt(j){j?wt(c.SCISSOR_TEST):Ct(c.SCISSOR_TEST)}function re(j){j===void 0&&(j=c.TEXTURE0+Y-1),ct!==j&&(c.activeTexture(j),ct=j)}function nn(j,Lt,bt){bt===void 0&&(ct===null?bt=c.TEXTURE0+Y-1:bt=ct);let Bt=z[bt];Bt===void 0&&(Bt={type:void 0,texture:void 0},z[bt]=Bt),(Bt.type!==j||Bt.texture!==Lt)&&(ct!==bt&&(c.activeTexture(bt),ct=bt),c.bindTexture(j,Lt||Mt[j]),Bt.type=j,Bt.texture=Lt)}function F(){const j=z[ct];j!==void 0&&j.type!==void 0&&(c.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function R(){try{c.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ot(){try{c.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function mt(){try{c.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function vt(){try{c.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function dt(){try{c.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pt(){try{c.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ut(){try{c.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function kt(){try{c.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xt(){try{c.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Et(){try{c.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function zt(j){xt.equals(j)===!1&&(c.scissor(j.x,j.y,j.z,j.w),xt.copy(j))}function jt(j){tt.equals(j)===!1&&(c.viewport(j.x,j.y,j.z,j.w),tt.copy(j))}function Zt(j,Lt){let bt=p.get(Lt);bt===void 0&&(bt=new WeakMap,p.set(Lt,bt));let Bt=bt.get(j);Bt===void 0&&(Bt=c.getUniformBlockIndex(Lt,j.name),bt.set(j,Bt))}function Rt(j,Lt){const Bt=p.get(Lt).get(j);d.get(Lt)!==Bt&&(c.uniformBlockBinding(Lt,Bt,j.__bindingPointIndex),d.set(Lt,Bt))}function se(){c.disable(c.BLEND),c.disable(c.CULL_FACE),c.disable(c.DEPTH_TEST),c.disable(c.POLYGON_OFFSET_FILL),c.disable(c.SCISSOR_TEST),c.disable(c.STENCIL_TEST),c.disable(c.SAMPLE_ALPHA_TO_COVERAGE),c.blendEquation(c.FUNC_ADD),c.blendFunc(c.ONE,c.ZERO),c.blendFuncSeparate(c.ONE,c.ZERO,c.ONE,c.ZERO),c.blendColor(0,0,0,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(c.LESS),u.setReversed(!1),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(c.ALWAYS,0,4294967295),c.stencilOp(c.KEEP,c.KEEP,c.KEEP),c.clearStencil(0),c.cullFace(c.BACK),c.frontFace(c.CCW),c.polygonOffset(0,0),c.activeTexture(c.TEXTURE0),c.bindFramebuffer(c.FRAMEBUFFER,null),c.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),c.bindFramebuffer(c.READ_FRAMEBUFFER,null),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),g={},ct=null,z={},v={},_=new WeakMap,S=[],M=null,b=!1,x=null,y=null,T=null,U=null,A=null,P=null,B=null,I=new Re(0,0,0),k=0,N=!1,w=null,H=null,nt=null,V=null,K=null,xt.set(0,0,c.canvas.width,c.canvas.height),tt.set(0,0,c.canvas.width,c.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:wt,disable:Ct,bindFramebuffer:ue,drawBuffers:$t,useProgram:ze,setBlending:X,setMaterial:wn,setFlipSided:be,setCullFace:ge,setLineWidth:qt,setPolygonOffset:Se,setScissorTest:Kt,activeTexture:re,bindTexture:nn,unbindTexture:F,compressedTexImage2D:R,compressedTexImage3D:ot,texImage2D:Xt,texImage3D:Et,updateUBOMapping:Zt,uniformBlockBinding:Rt,texStorage2D:Ut,texStorage3D:kt,texSubImage2D:mt,texSubImage3D:vt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Pt,scissor:zt,viewport:jt,reset:se}}function m1(c,t,n,a,r,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new oe,g=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,R){return S?new OffscreenCanvas(F,R):fu("canvas")}function b(F,R,ot){let mt=1;const vt=nn(F);if((vt.width>ot||vt.height>ot)&&(mt=ot/Math.max(vt.width,vt.height)),mt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const dt=Math.floor(mt*vt.width),Pt=Math.floor(mt*vt.height);v===void 0&&(v=M(dt,Pt));const Ut=R?M(dt,Pt):v;return Ut.width=dt,Ut.height=Pt,Ut.getContext("2d").drawImage(F,0,0,dt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+dt+"x"+Pt+")."),Ut}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),F;return F}function x(F){return F.generateMipmaps}function y(F){c.generateMipmap(F)}function T(F){return F.isWebGLCubeRenderTarget?c.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?c.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?c.TEXTURE_2D_ARRAY:c.TEXTURE_2D}function U(F,R,ot,mt,vt=!1){if(F!==null){if(c[F]!==void 0)return c[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let dt=R;if(R===c.RED&&(ot===c.FLOAT&&(dt=c.R32F),ot===c.HALF_FLOAT&&(dt=c.R16F),ot===c.UNSIGNED_BYTE&&(dt=c.R8)),R===c.RED_INTEGER&&(ot===c.UNSIGNED_BYTE&&(dt=c.R8UI),ot===c.UNSIGNED_SHORT&&(dt=c.R16UI),ot===c.UNSIGNED_INT&&(dt=c.R32UI),ot===c.BYTE&&(dt=c.R8I),ot===c.SHORT&&(dt=c.R16I),ot===c.INT&&(dt=c.R32I)),R===c.RG&&(ot===c.FLOAT&&(dt=c.RG32F),ot===c.HALF_FLOAT&&(dt=c.RG16F),ot===c.UNSIGNED_BYTE&&(dt=c.RG8)),R===c.RG_INTEGER&&(ot===c.UNSIGNED_BYTE&&(dt=c.RG8UI),ot===c.UNSIGNED_SHORT&&(dt=c.RG16UI),ot===c.UNSIGNED_INT&&(dt=c.RG32UI),ot===c.BYTE&&(dt=c.RG8I),ot===c.SHORT&&(dt=c.RG16I),ot===c.INT&&(dt=c.RG32I)),R===c.RGB_INTEGER&&(ot===c.UNSIGNED_BYTE&&(dt=c.RGB8UI),ot===c.UNSIGNED_SHORT&&(dt=c.RGB16UI),ot===c.UNSIGNED_INT&&(dt=c.RGB32UI),ot===c.BYTE&&(dt=c.RGB8I),ot===c.SHORT&&(dt=c.RGB16I),ot===c.INT&&(dt=c.RGB32I)),R===c.RGBA_INTEGER&&(ot===c.UNSIGNED_BYTE&&(dt=c.RGBA8UI),ot===c.UNSIGNED_SHORT&&(dt=c.RGBA16UI),ot===c.UNSIGNED_INT&&(dt=c.RGBA32UI),ot===c.BYTE&&(dt=c.RGBA8I),ot===c.SHORT&&(dt=c.RGBA16I),ot===c.INT&&(dt=c.RGBA32I)),R===c.RGB&&ot===c.UNSIGNED_INT_5_9_9_9_REV&&(dt=c.RGB9_E5),R===c.RGBA){const Pt=vt?cu:we.getTransfer(mt);ot===c.FLOAT&&(dt=c.RGBA32F),ot===c.HALF_FLOAT&&(dt=c.RGBA16F),ot===c.UNSIGNED_BYTE&&(dt=Pt===Ge?c.SRGB8_ALPHA8:c.RGBA8),ot===c.UNSIGNED_SHORT_4_4_4_4&&(dt=c.RGBA4),ot===c.UNSIGNED_SHORT_5_5_5_1&&(dt=c.RGB5_A1)}return(dt===c.R16F||dt===c.R32F||dt===c.RG16F||dt===c.RG32F||dt===c.RGBA16F||dt===c.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function A(F,R){let ot;return F?R===null||R===Vs||R===rl?ot=c.DEPTH24_STENCIL8:R===Sa?ot=c.DEPTH32F_STENCIL8:R===sl&&(ot=c.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Vs||R===rl?ot=c.DEPTH_COMPONENT24:R===Sa?ot=c.DEPTH_COMPONENT32F:R===sl&&(ot=c.DEPTH_COMPONENT16),ot}function P(F,R){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==Ci&&F.minFilter!==Hi?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function B(F){const R=F.target;R.removeEventListener("dispose",B),k(R),R.isVideoTexture&&g.delete(R)}function I(F){const R=F.target;R.removeEventListener("dispose",I),w(R)}function k(F){const R=a.get(F);if(R.__webglInit===void 0)return;const ot=F.source,mt=_.get(ot);if(mt){const vt=mt[R.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&N(F),Object.keys(mt).length===0&&_.delete(ot)}a.remove(F)}function N(F){const R=a.get(F);c.deleteTexture(R.__webglTexture);const ot=F.source,mt=_.get(ot);delete mt[R.__cacheKey],u.memory.textures--}function w(F){const R=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(R.__webglFramebuffer[mt]))for(let vt=0;vt<R.__webglFramebuffer[mt].length;vt++)c.deleteFramebuffer(R.__webglFramebuffer[mt][vt]);else c.deleteFramebuffer(R.__webglFramebuffer[mt]);R.__webglDepthbuffer&&c.deleteRenderbuffer(R.__webglDepthbuffer[mt])}else{if(Array.isArray(R.__webglFramebuffer))for(let mt=0;mt<R.__webglFramebuffer.length;mt++)c.deleteFramebuffer(R.__webglFramebuffer[mt]);else c.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&c.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&c.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let mt=0;mt<R.__webglColorRenderbuffer.length;mt++)R.__webglColorRenderbuffer[mt]&&c.deleteRenderbuffer(R.__webglColorRenderbuffer[mt]);R.__webglDepthRenderbuffer&&c.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ot=F.textures;for(let mt=0,vt=ot.length;mt<vt;mt++){const dt=a.get(ot[mt]);dt.__webglTexture&&(c.deleteTexture(dt.__webglTexture),u.memory.textures--),a.remove(ot[mt])}a.remove(F)}let H=0;function nt(){H=0}function V(){const F=H;return F>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),H+=1,F}function K(F){const R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function Y(F,R){const ot=a.get(F);if(F.isVideoTexture&&Kt(F),F.isRenderTargetTexture===!1&&F.version>0&&ot.__version!==F.version){const mt=F.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(ot,F,R);return}}n.bindTexture(c.TEXTURE_2D,ot.__webglTexture,c.TEXTURE0+R)}function O(F,R){const ot=a.get(F);if(F.version>0&&ot.__version!==F.version){Mt(ot,F,R);return}n.bindTexture(c.TEXTURE_2D_ARRAY,ot.__webglTexture,c.TEXTURE0+R)}function Z(F,R){const ot=a.get(F);if(F.version>0&&ot.__version!==F.version){Mt(ot,F,R);return}n.bindTexture(c.TEXTURE_3D,ot.__webglTexture,c.TEXTURE0+R)}function q(F,R){const ot=a.get(F);if(F.version>0&&ot.__version!==F.version){wt(ot,F,R);return}n.bindTexture(c.TEXTURE_CUBE_MAP,ot.__webglTexture,c.TEXTURE0+R)}const ct={[xd]:c.REPEAT,[Hs]:c.CLAMP_TO_EDGE,[Sd]:c.MIRRORED_REPEAT},z={[Ci]:c.NEAREST,[kS]:c.NEAREST_MIPMAP_NEAREST,[Ac]:c.NEAREST_MIPMAP_LINEAR,[Hi]:c.LINEAR,[bh]:c.LINEAR_MIPMAP_NEAREST,[Gs]:c.LINEAR_MIPMAP_LINEAR},J={[YS]:c.NEVER,[$S]:c.ALWAYS,[jS]:c.LESS,[A0]:c.LEQUAL,[ZS]:c.EQUAL,[JS]:c.GEQUAL,[KS]:c.GREATER,[QS]:c.NOTEQUAL};function st(F,R){if(R.type===Sa&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Hi||R.magFilter===bh||R.magFilter===Ac||R.magFilter===Gs||R.minFilter===Hi||R.minFilter===bh||R.minFilter===Ac||R.minFilter===Gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),c.texParameteri(F,c.TEXTURE_WRAP_S,ct[R.wrapS]),c.texParameteri(F,c.TEXTURE_WRAP_T,ct[R.wrapT]),(F===c.TEXTURE_3D||F===c.TEXTURE_2D_ARRAY)&&c.texParameteri(F,c.TEXTURE_WRAP_R,ct[R.wrapR]),c.texParameteri(F,c.TEXTURE_MAG_FILTER,z[R.magFilter]),c.texParameteri(F,c.TEXTURE_MIN_FILTER,z[R.minFilter]),R.compareFunction&&(c.texParameteri(F,c.TEXTURE_COMPARE_MODE,c.COMPARE_REF_TO_TEXTURE),c.texParameteri(F,c.TEXTURE_COMPARE_FUNC,J[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ci||R.minFilter!==Ac&&R.minFilter!==Gs||R.type===Sa&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||a.get(R).__currentAnisotropy){const ot=t.get("EXT_texture_filter_anisotropic");c.texParameterf(F,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy}}}function xt(F,R){let ot=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",B));const mt=R.source;let vt=_.get(mt);vt===void 0&&(vt={},_.set(mt,vt));const dt=K(R);if(dt!==F.__cacheKey){vt[dt]===void 0&&(vt[dt]={texture:c.createTexture(),usedTimes:0},u.memory.textures++,ot=!0),vt[dt].usedTimes++;const Pt=vt[F.__cacheKey];Pt!==void 0&&(vt[F.__cacheKey].usedTimes--,Pt.usedTimes===0&&N(R)),F.__cacheKey=dt,F.__webglTexture=vt[dt].texture}return ot}function tt(F,R,ot){return Math.floor(Math.floor(F/ot)/R)}function gt(F,R,ot,mt){const dt=F.updateRanges;if(dt.length===0)n.texSubImage2D(c.TEXTURE_2D,0,0,0,R.width,R.height,ot,mt,R.data);else{dt.sort((Et,zt)=>Et.start-zt.start);let Pt=0;for(let Et=1;Et<dt.length;Et++){const zt=dt[Pt],jt=dt[Et],Zt=zt.start+zt.count,Rt=tt(jt.start,R.width,4),se=tt(zt.start,R.width,4);jt.start<=Zt+1&&Rt===se&&tt(jt.start+jt.count-1,R.width,4)===Rt?zt.count=Math.max(zt.count,jt.start+jt.count-zt.start):(++Pt,dt[Pt]=jt)}dt.length=Pt+1;const Ut=c.getParameter(c.UNPACK_ROW_LENGTH),kt=c.getParameter(c.UNPACK_SKIP_PIXELS),Xt=c.getParameter(c.UNPACK_SKIP_ROWS);c.pixelStorei(c.UNPACK_ROW_LENGTH,R.width);for(let Et=0,zt=dt.length;Et<zt;Et++){const jt=dt[Et],Zt=Math.floor(jt.start/4),Rt=Math.ceil(jt.count/4),se=Zt%R.width,j=Math.floor(Zt/R.width),Lt=Rt,bt=1;c.pixelStorei(c.UNPACK_SKIP_PIXELS,se),c.pixelStorei(c.UNPACK_SKIP_ROWS,j),n.texSubImage2D(c.TEXTURE_2D,0,se,j,Lt,bt,ot,mt,R.data)}F.clearUpdateRanges(),c.pixelStorei(c.UNPACK_ROW_LENGTH,Ut),c.pixelStorei(c.UNPACK_SKIP_PIXELS,kt),c.pixelStorei(c.UNPACK_SKIP_ROWS,Xt)}}function Mt(F,R,ot){let mt=c.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(mt=c.TEXTURE_2D_ARRAY),R.isData3DTexture&&(mt=c.TEXTURE_3D);const vt=xt(F,R),dt=R.source;n.bindTexture(mt,F.__webglTexture,c.TEXTURE0+ot);const Pt=a.get(dt);if(dt.version!==Pt.__version||vt===!0){n.activeTexture(c.TEXTURE0+ot);const Ut=we.getPrimaries(we.workingColorSpace),kt=R.colorSpace===as?null:we.getPrimaries(R.colorSpace),Xt=R.colorSpace===as||Ut===kt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,R.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,R.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let Et=b(R.image,!1,r.maxTextureSize);Et=re(R,Et);const zt=l.convert(R.format,R.colorSpace),jt=l.convert(R.type);let Zt=U(R.internalFormat,zt,jt,R.colorSpace,R.isVideoTexture);st(mt,R);let Rt;const se=R.mipmaps,j=R.isVideoTexture!==!0,Lt=Pt.__version===void 0||vt===!0,bt=dt.dataReady,Bt=P(R,Et);if(R.isDepthTexture)Zt=A(R.format===ll,R.type),Lt&&(j?n.texStorage2D(c.TEXTURE_2D,1,Zt,Et.width,Et.height):n.texImage2D(c.TEXTURE_2D,0,Zt,Et.width,Et.height,0,zt,jt,null));else if(R.isDataTexture)if(se.length>0){j&&Lt&&n.texStorage2D(c.TEXTURE_2D,Bt,Zt,se[0].width,se[0].height);for(let At=0,St=se.length;At<St;At++)Rt=se[At],j?bt&&n.texSubImage2D(c.TEXTURE_2D,At,0,0,Rt.width,Rt.height,zt,jt,Rt.data):n.texImage2D(c.TEXTURE_2D,At,Zt,Rt.width,Rt.height,0,zt,jt,Rt.data);R.generateMipmaps=!1}else j?(Lt&&n.texStorage2D(c.TEXTURE_2D,Bt,Zt,Et.width,Et.height),bt&&gt(R,Et,zt,jt)):n.texImage2D(c.TEXTURE_2D,0,Zt,Et.width,Et.height,0,zt,jt,Et.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){j&&Lt&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Bt,Zt,se[0].width,se[0].height,Et.depth);for(let At=0,St=se.length;At<St;At++)if(Rt=se[At],R.format!==wi)if(zt!==null)if(j){if(bt)if(R.layerUpdates.size>0){const Ft=Mv(Rt.width,Rt.height,R.format,R.type);for(const ae of R.layerUpdates){const Ne=Rt.data.subarray(ae*Ft/Rt.data.BYTES_PER_ELEMENT,(ae+1)*Ft/Rt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,At,0,0,ae,Rt.width,Rt.height,1,zt,Ne)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,At,0,0,0,Rt.width,Rt.height,Et.depth,zt,Rt.data)}else n.compressedTexImage3D(c.TEXTURE_2D_ARRAY,At,Zt,Rt.width,Rt.height,Et.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?bt&&n.texSubImage3D(c.TEXTURE_2D_ARRAY,At,0,0,0,Rt.width,Rt.height,Et.depth,zt,jt,Rt.data):n.texImage3D(c.TEXTURE_2D_ARRAY,At,Zt,Rt.width,Rt.height,Et.depth,0,zt,jt,Rt.data)}else{j&&Lt&&n.texStorage2D(c.TEXTURE_2D,Bt,Zt,se[0].width,se[0].height);for(let At=0,St=se.length;At<St;At++)Rt=se[At],R.format!==wi?zt!==null?j?bt&&n.compressedTexSubImage2D(c.TEXTURE_2D,At,0,0,Rt.width,Rt.height,zt,Rt.data):n.compressedTexImage2D(c.TEXTURE_2D,At,Zt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?bt&&n.texSubImage2D(c.TEXTURE_2D,At,0,0,Rt.width,Rt.height,zt,jt,Rt.data):n.texImage2D(c.TEXTURE_2D,At,Zt,Rt.width,Rt.height,0,zt,jt,Rt.data)}else if(R.isDataArrayTexture)if(j){if(Lt&&n.texStorage3D(c.TEXTURE_2D_ARRAY,Bt,Zt,Et.width,Et.height,Et.depth),bt)if(R.layerUpdates.size>0){const At=Mv(Et.width,Et.height,R.format,R.type);for(const St of R.layerUpdates){const Ft=Et.data.subarray(St*At/Et.data.BYTES_PER_ELEMENT,(St+1)*At/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,St,Et.width,Et.height,1,zt,jt,Ft)}R.clearLayerUpdates()}else n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,zt,jt,Et.data)}else n.texImage3D(c.TEXTURE_2D_ARRAY,0,Zt,Et.width,Et.height,Et.depth,0,zt,jt,Et.data);else if(R.isData3DTexture)j?(Lt&&n.texStorage3D(c.TEXTURE_3D,Bt,Zt,Et.width,Et.height,Et.depth),bt&&n.texSubImage3D(c.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,zt,jt,Et.data)):n.texImage3D(c.TEXTURE_3D,0,Zt,Et.width,Et.height,Et.depth,0,zt,jt,Et.data);else if(R.isFramebufferTexture){if(Lt)if(j)n.texStorage2D(c.TEXTURE_2D,Bt,Zt,Et.width,Et.height);else{let At=Et.width,St=Et.height;for(let Ft=0;Ft<Bt;Ft++)n.texImage2D(c.TEXTURE_2D,Ft,Zt,At,St,0,zt,jt,null),At>>=1,St>>=1}}else if(se.length>0){if(j&&Lt){const At=nn(se[0]);n.texStorage2D(c.TEXTURE_2D,Bt,Zt,At.width,At.height)}for(let At=0,St=se.length;At<St;At++)Rt=se[At],j?bt&&n.texSubImage2D(c.TEXTURE_2D,At,0,0,zt,jt,Rt):n.texImage2D(c.TEXTURE_2D,At,Zt,zt,jt,Rt);R.generateMipmaps=!1}else if(j){if(Lt){const At=nn(Et);n.texStorage2D(c.TEXTURE_2D,Bt,Zt,At.width,At.height)}bt&&n.texSubImage2D(c.TEXTURE_2D,0,0,0,zt,jt,Et)}else n.texImage2D(c.TEXTURE_2D,0,Zt,zt,jt,Et);x(R)&&y(mt),Pt.__version=dt.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function wt(F,R,ot){if(R.image.length!==6)return;const mt=xt(F,R),vt=R.source;n.bindTexture(c.TEXTURE_CUBE_MAP,F.__webglTexture,c.TEXTURE0+ot);const dt=a.get(vt);if(vt.version!==dt.__version||mt===!0){n.activeTexture(c.TEXTURE0+ot);const Pt=we.getPrimaries(we.workingColorSpace),Ut=R.colorSpace===as?null:we.getPrimaries(R.colorSpace),kt=R.colorSpace===as||Pt===Ut?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,R.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,R.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Xt=R.isCompressedTexture||R.image[0].isCompressedTexture,Et=R.image[0]&&R.image[0].isDataTexture,zt=[];for(let St=0;St<6;St++)!Xt&&!Et?zt[St]=b(R.image[St],!0,r.maxCubemapSize):zt[St]=Et?R.image[St].image:R.image[St],zt[St]=re(R,zt[St]);const jt=zt[0],Zt=l.convert(R.format,R.colorSpace),Rt=l.convert(R.type),se=U(R.internalFormat,Zt,Rt,R.colorSpace),j=R.isVideoTexture!==!0,Lt=dt.__version===void 0||mt===!0,bt=vt.dataReady;let Bt=P(R,jt);st(c.TEXTURE_CUBE_MAP,R);let At;if(Xt){j&&Lt&&n.texStorage2D(c.TEXTURE_CUBE_MAP,Bt,se,jt.width,jt.height);for(let St=0;St<6;St++){At=zt[St].mipmaps;for(let Ft=0;Ft<At.length;Ft++){const ae=At[Ft];R.format!==wi?Zt!==null?j?bt&&n.compressedTexSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft,0,0,ae.width,ae.height,Zt,ae.data):n.compressedTexImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft,se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?bt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft,0,0,ae.width,ae.height,Zt,Rt,ae.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft,se,ae.width,ae.height,0,Zt,Rt,ae.data)}}}else{if(At=R.mipmaps,j&&Lt){At.length>0&&Bt++;const St=nn(zt[0]);n.texStorage2D(c.TEXTURE_CUBE_MAP,Bt,se,St.width,St.height)}for(let St=0;St<6;St++)if(Et){j?bt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,zt[St].width,zt[St].height,Zt,Rt,zt[St].data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,se,zt[St].width,zt[St].height,0,Zt,Rt,zt[St].data);for(let Ft=0;Ft<At.length;Ft++){const Ne=At[Ft].image[St].image;j?bt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft+1,0,0,Ne.width,Ne.height,Zt,Rt,Ne.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft+1,se,Ne.width,Ne.height,0,Zt,Rt,Ne.data)}}else{j?bt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Zt,Rt,zt[St]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,se,Zt,Rt,zt[St]);for(let Ft=0;Ft<At.length;Ft++){const ae=At[Ft];j?bt&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft+1,0,0,Zt,Rt,ae.image[St]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ft+1,se,Zt,Rt,ae.image[St])}}}x(R)&&y(c.TEXTURE_CUBE_MAP),dt.__version=vt.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function Ct(F,R,ot,mt,vt,dt){const Pt=l.convert(ot.format,ot.colorSpace),Ut=l.convert(ot.type),kt=U(ot.internalFormat,Pt,Ut,ot.colorSpace),Xt=a.get(R),Et=a.get(ot);if(Et.__renderTarget=R,!Xt.__hasExternalTextures){const zt=Math.max(1,R.width>>dt),jt=Math.max(1,R.height>>dt);vt===c.TEXTURE_3D||vt===c.TEXTURE_2D_ARRAY?n.texImage3D(vt,dt,kt,zt,jt,R.depth,0,Pt,Ut,null):n.texImage2D(vt,dt,kt,zt,jt,0,Pt,Ut,null)}n.bindFramebuffer(c.FRAMEBUFFER,F),Se(R)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,mt,vt,Et.__webglTexture,0,qt(R)):(vt===c.TEXTURE_2D||vt>=c.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=c.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&c.framebufferTexture2D(c.FRAMEBUFFER,mt,vt,Et.__webglTexture,dt),n.bindFramebuffer(c.FRAMEBUFFER,null)}function ue(F,R,ot){if(c.bindRenderbuffer(c.RENDERBUFFER,F),R.depthBuffer){const mt=R.depthTexture,vt=mt&&mt.isDepthTexture?mt.type:null,dt=A(R.stencilBuffer,vt),Pt=R.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,Ut=qt(R);Se(R)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,Ut,dt,R.width,R.height):ot?c.renderbufferStorageMultisample(c.RENDERBUFFER,Ut,dt,R.width,R.height):c.renderbufferStorage(c.RENDERBUFFER,dt,R.width,R.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,Pt,c.RENDERBUFFER,F)}else{const mt=R.textures;for(let vt=0;vt<mt.length;vt++){const dt=mt[vt],Pt=l.convert(dt.format,dt.colorSpace),Ut=l.convert(dt.type),kt=U(dt.internalFormat,Pt,Ut,dt.colorSpace),Xt=qt(R);ot&&Se(R)===!1?c.renderbufferStorageMultisample(c.RENDERBUFFER,Xt,kt,R.width,R.height):Se(R)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,Xt,kt,R.width,R.height):c.renderbufferStorage(c.RENDERBUFFER,kt,R.width,R.height)}}c.bindRenderbuffer(c.RENDERBUFFER,null)}function $t(F,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(c.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=a.get(R.depthTexture);mt.__renderTarget=R,(!mt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Y(R.depthTexture,0);const vt=mt.__webglTexture,dt=qt(R);if(R.depthTexture.format===ol)Se(R)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.TEXTURE_2D,vt,0,dt):c.framebufferTexture2D(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.TEXTURE_2D,vt,0);else if(R.depthTexture.format===ll)Se(R)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.TEXTURE_2D,vt,0,dt):c.framebufferTexture2D(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ze(F){const R=a.get(F),ot=F.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==F.depthTexture){const mt=F.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),mt){const vt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,mt.removeEventListener("dispose",vt)};mt.addEventListener("dispose",vt),R.__depthDisposeCallback=vt}R.__boundDepthTexture=mt}if(F.depthTexture&&!R.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");const mt=F.texture.mipmaps;mt&&mt.length>0?$t(R.__webglFramebuffer[0],F):$t(R.__webglFramebuffer,F)}else if(ot){R.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(n.bindFramebuffer(c.FRAMEBUFFER,R.__webglFramebuffer[mt]),R.__webglDepthbuffer[mt]===void 0)R.__webglDepthbuffer[mt]=c.createRenderbuffer(),ue(R.__webglDepthbuffer[mt],F,!1);else{const vt=F.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,dt=R.__webglDepthbuffer[mt];c.bindRenderbuffer(c.RENDERBUFFER,dt),c.framebufferRenderbuffer(c.FRAMEBUFFER,vt,c.RENDERBUFFER,dt)}}else{const mt=F.texture.mipmaps;if(mt&&mt.length>0?n.bindFramebuffer(c.FRAMEBUFFER,R.__webglFramebuffer[0]):n.bindFramebuffer(c.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=c.createRenderbuffer(),ue(R.__webglDepthbuffer,F,!1);else{const vt=F.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,dt=R.__webglDepthbuffer;c.bindRenderbuffer(c.RENDERBUFFER,dt),c.framebufferRenderbuffer(c.FRAMEBUFFER,vt,c.RENDERBUFFER,dt)}}n.bindFramebuffer(c.FRAMEBUFFER,null)}function ke(F,R,ot){const mt=a.get(F);R!==void 0&&Ct(mt.__webglFramebuffer,F,F.texture,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,0),ot!==void 0&&ze(F)}function xe(F){const R=F.texture,ot=a.get(F),mt=a.get(R);F.addEventListener("dispose",I);const vt=F.textures,dt=F.isWebGLCubeRenderTarget===!0,Pt=vt.length>1;if(Pt||(mt.__webglTexture===void 0&&(mt.__webglTexture=c.createTexture()),mt.__version=R.version,u.memory.textures++),dt){ot.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(R.mipmaps&&R.mipmaps.length>0){ot.__webglFramebuffer[Ut]=[];for(let kt=0;kt<R.mipmaps.length;kt++)ot.__webglFramebuffer[Ut][kt]=c.createFramebuffer()}else ot.__webglFramebuffer[Ut]=c.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ot.__webglFramebuffer=[];for(let Ut=0;Ut<R.mipmaps.length;Ut++)ot.__webglFramebuffer[Ut]=c.createFramebuffer()}else ot.__webglFramebuffer=c.createFramebuffer();if(Pt)for(let Ut=0,kt=vt.length;Ut<kt;Ut++){const Xt=a.get(vt[Ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=c.createTexture(),u.memory.textures++)}if(F.samples>0&&Se(F)===!1){ot.__webglMultisampledFramebuffer=c.createFramebuffer(),ot.__webglColorRenderbuffer=[],n.bindFramebuffer(c.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const kt=vt[Ut];ot.__webglColorRenderbuffer[Ut]=c.createRenderbuffer(),c.bindRenderbuffer(c.RENDERBUFFER,ot.__webglColorRenderbuffer[Ut]);const Xt=l.convert(kt.format,kt.colorSpace),Et=l.convert(kt.type),zt=U(kt.internalFormat,Xt,Et,kt.colorSpace,F.isXRRenderTarget===!0),jt=qt(F);c.renderbufferStorageMultisample(c.RENDERBUFFER,jt,zt,F.width,F.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Ut,c.RENDERBUFFER,ot.__webglColorRenderbuffer[Ut])}c.bindRenderbuffer(c.RENDERBUFFER,null),F.depthBuffer&&(ot.__webglDepthRenderbuffer=c.createRenderbuffer(),ue(ot.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(c.FRAMEBUFFER,null)}}if(dt){n.bindTexture(c.TEXTURE_CUBE_MAP,mt.__webglTexture),st(c.TEXTURE_CUBE_MAP,R);for(let Ut=0;Ut<6;Ut++)if(R.mipmaps&&R.mipmaps.length>0)for(let kt=0;kt<R.mipmaps.length;kt++)Ct(ot.__webglFramebuffer[Ut][kt],F,R,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,kt);else Ct(ot.__webglFramebuffer[Ut],F,R,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);x(R)&&y(c.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pt){for(let Ut=0,kt=vt.length;Ut<kt;Ut++){const Xt=vt[Ut],Et=a.get(Xt);n.bindTexture(c.TEXTURE_2D,Et.__webglTexture),st(c.TEXTURE_2D,Xt),Ct(ot.__webglFramebuffer,F,Xt,c.COLOR_ATTACHMENT0+Ut,c.TEXTURE_2D,0),x(Xt)&&y(c.TEXTURE_2D)}n.unbindTexture()}else{let Ut=c.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ut=F.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(Ut,mt.__webglTexture),st(Ut,R),R.mipmaps&&R.mipmaps.length>0)for(let kt=0;kt<R.mipmaps.length;kt++)Ct(ot.__webglFramebuffer[kt],F,R,c.COLOR_ATTACHMENT0,Ut,kt);else Ct(ot.__webglFramebuffer,F,R,c.COLOR_ATTACHMENT0,Ut,0);x(R)&&y(Ut),n.unbindTexture()}F.depthBuffer&&ze(F)}function X(F){const R=F.textures;for(let ot=0,mt=R.length;ot<mt;ot++){const vt=R[ot];if(x(vt)){const dt=T(F),Pt=a.get(vt).__webglTexture;n.bindTexture(dt,Pt),y(dt),n.unbindTexture()}}}const wn=[],be=[];function ge(F){if(F.samples>0){if(Se(F)===!1){const R=F.textures,ot=F.width,mt=F.height;let vt=c.COLOR_BUFFER_BIT;const dt=F.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,Pt=a.get(F),Ut=R.length>1;if(Ut)for(let Xt=0;Xt<R.length;Xt++)n.bindFramebuffer(c.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Xt,c.RENDERBUFFER,null),n.bindFramebuffer(c.FRAMEBUFFER,Pt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+Xt,c.TEXTURE_2D,null,0);n.bindFramebuffer(c.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const kt=F.texture.mipmaps;kt&&kt.length>0?n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Xt=0;Xt<R.length;Xt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(vt|=c.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(vt|=c.STENCIL_BUFFER_BIT)),Ut){c.framebufferRenderbuffer(c.READ_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const Et=a.get(R[Xt]).__webglTexture;c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,Et,0)}c.blitFramebuffer(0,0,ot,mt,0,0,ot,mt,vt,c.NEAREST),d===!0&&(wn.length=0,be.length=0,wn.push(c.COLOR_ATTACHMENT0+Xt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(wn.push(dt),be.push(dt),c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,be)),c.invalidateFramebuffer(c.READ_FRAMEBUFFER,wn))}if(n.bindFramebuffer(c.READ_FRAMEBUFFER,null),n.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),Ut)for(let Xt=0;Xt<R.length;Xt++){n.bindFramebuffer(c.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Xt,c.RENDERBUFFER,Pt.__webglColorRenderbuffer[Xt]);const Et=a.get(R[Xt]).__webglTexture;n.bindFramebuffer(c.FRAMEBUFFER,Pt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+Xt,c.TEXTURE_2D,Et,0)}n.bindFramebuffer(c.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&d){const R=F.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,[R])}}}function qt(F){return Math.min(r.maxSamples,F.samples)}function Se(F){const R=a.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Kt(F){const R=u.render.frame;g.get(F)!==R&&(g.set(F,R),F.update())}function re(F,R){const ot=F.colorSpace,mt=F.format,vt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ot!==Zr&&ot!==as&&(we.getTransfer(ot)===Ge?(mt!==wi||vt!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),R}function nn(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=V,this.resetTextureUnits=nt,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=ke,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Se}function g1(c,t){function n(a,r=as){let l;const u=we.getTransfer(r);if(a===ki)return c.UNSIGNED_BYTE;if(a===$d)return c.UNSIGNED_SHORT_4_4_4_4;if(a===tp)return c.UNSIGNED_SHORT_5_5_5_1;if(a===y0)return c.UNSIGNED_INT_5_9_9_9_REV;if(a===_0)return c.BYTE;if(a===v0)return c.SHORT;if(a===sl)return c.UNSIGNED_SHORT;if(a===Jd)return c.INT;if(a===Vs)return c.UNSIGNED_INT;if(a===Sa)return c.FLOAT;if(a===ul)return c.HALF_FLOAT;if(a===x0)return c.ALPHA;if(a===S0)return c.RGB;if(a===wi)return c.RGBA;if(a===ol)return c.DEPTH_COMPONENT;if(a===ll)return c.DEPTH_STENCIL;if(a===M0)return c.RED;if(a===ep)return c.RED_INTEGER;if(a===E0)return c.RG;if(a===np)return c.RG_INTEGER;if(a===ip)return c.RGBA_INTEGER;if(a===eu||a===nu||a===iu||a===au)if(u===Ge)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===eu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===nu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===au)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===eu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===nu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===iu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===au)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Md||a===Ed||a===bd||a===Td)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Md)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ed)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===bd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Td)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ad||a===wd||a===Rd)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Ad||a===wd)return u===Ge?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Rd)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Cd||a===Dd||a===Ud||a===Ld||a===Nd||a===Od||a===Pd||a===zd||a===Bd||a===Id||a===Fd||a===Hd||a===Gd||a===Vd)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Cd)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Dd)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ud)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ld)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Nd)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Od)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Pd)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===zd)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Bd)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Id)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Fd)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Hd)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Gd)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vd)return u===Ge?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===su||a===kd||a===qd)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===su)return u===Ge?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===kd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===qd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===b0||a===Xd||a===Wd||a===Yd)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===su)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Xd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Wd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Yd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===rl?c.UNSIGNED_INT_24_8:c[a]!==void 0?c[a]:null}return{convert:n}}const _1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const r=new Kn,l=t.properties.get(r);l.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ls({vertexShader:_1,fragmentShader:v1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vi(new pu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x1 extends Ws{constructor(t,n){super();const a=this;let r=null,l=1,u=null,f="local-floor",d=1,p=null,g=null,v=null,_=null,S=null,M=null;const b=new y1,x=n.getContextAttributes();let y=null,T=null;const U=[],A=[],P=new oe;let B=null;const I=new _i;I.viewport=new tn;const k=new _i;k.viewport=new tn;const N=[I,k],w=new HM;let H=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let gt=U[tt];return gt===void 0&&(gt=new Wh,U[tt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(tt){let gt=U[tt];return gt===void 0&&(gt=new Wh,U[tt]=gt),gt.getGripSpace()},this.getHand=function(tt){let gt=U[tt];return gt===void 0&&(gt=new Wh,U[tt]=gt),gt.getHandSpace()};function V(tt){const gt=A.indexOf(tt.inputSource);if(gt===-1)return;const Mt=U[gt];Mt!==void 0&&(Mt.update(tt.inputSource,tt.frame,p||u),Mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function K(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Y);for(let tt=0;tt<U.length;tt++){const gt=A[tt];gt!==null&&(A[tt]=null,U[tt].disconnect(gt))}H=null,nt=null,b.reset(),t.setRenderTarget(y),S=null,_=null,v=null,r=null,T=null,xt.stop(),a.isPresenting=!1,t.setPixelRatio(B),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){l=tt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){f=tt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(tt){if(r=tt,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await n.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,wt=null,Ct=null;x.depth&&(Ct=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Mt=x.stencil?ll:ol,wt=x.stencil?rl:Vs);const ue={colorFormat:n.RGBA8,depthFormat:Ct,scaleFactor:l};v=new XRWebGLBinding(r,n),_=v.createProjectionLayer(ue),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),T=new qs(_.textureWidth,_.textureHeight,{format:wi,type:ki,depthTexture:new I0(_.textureWidth,_.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(r,n,Mt),r.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),T=new qs(S.framebufferWidth,S.framebufferHeight,{format:wi,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(f),xt.setContext(r),xt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Y(tt){for(let gt=0;gt<tt.removed.length;gt++){const Mt=tt.removed[gt],wt=A.indexOf(Mt);wt>=0&&(A[wt]=null,U[wt].disconnect(Mt))}for(let gt=0;gt<tt.added.length;gt++){const Mt=tt.added[gt];let wt=A.indexOf(Mt);if(wt===-1){for(let ue=0;ue<U.length;ue++)if(ue>=A.length){A.push(Mt),wt=ue;break}else if(A[ue]===null){A[ue]=Mt,wt=ue;break}if(wt===-1)break}const Ct=U[wt];Ct&&Ct.connect(Mt)}}const O=new rt,Z=new rt;function q(tt,gt,Mt){O.setFromMatrixPosition(gt.matrixWorld),Z.setFromMatrixPosition(Mt.matrixWorld);const wt=O.distanceTo(Z),Ct=gt.projectionMatrix.elements,ue=Mt.projectionMatrix.elements,$t=Ct[14]/(Ct[10]-1),ze=Ct[14]/(Ct[10]+1),ke=(Ct[9]+1)/Ct[5],xe=(Ct[9]-1)/Ct[5],X=(Ct[8]-1)/Ct[0],wn=(ue[8]+1)/ue[0],be=$t*X,ge=$t*wn,qt=wt/(-X+wn),Se=qt*-X;if(gt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Se),tt.translateZ(qt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ct[10]===-1)tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Kt=$t+qt,re=ze+qt,nn=be-Se,F=ge+(wt-Se),R=ke*ze/re*Kt,ot=xe*ze/re*Kt;tt.projectionMatrix.makePerspective(nn,F,R,ot,Kt,re),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ct(tt,gt){gt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(gt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(r===null)return;let gt=tt.near,Mt=tt.far;b.texture!==null&&(b.depthNear>0&&(gt=b.depthNear),b.depthFar>0&&(Mt=b.depthFar)),w.near=k.near=I.near=gt,w.far=k.far=I.far=Mt,(H!==w.near||nt!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,nt=w.far),I.layers.mask=tt.layers.mask|2,k.layers.mask=tt.layers.mask|4,w.layers.mask=I.layers.mask|k.layers.mask;const wt=tt.parent,Ct=w.cameras;ct(w,wt);for(let ue=0;ue<Ct.length;ue++)ct(Ct[ue],wt);Ct.length===2?q(w,I,k):w.projectionMatrix.copy(I.projectionMatrix),z(tt,w,wt)};function z(tt,gt,Mt){Mt===null?tt.matrix.copy(gt.matrixWorld):(tt.matrix.copy(Mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(gt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=jd*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(tt){d=tt,_!==null&&(_.fixedFoveation=tt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=tt)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(w)};let J=null;function st(tt,gt){if(g=gt.getViewerPose(p||u),M=gt,g!==null){const Mt=g.views;S!==null&&(t.setRenderTargetFramebuffer(T,S.framebuffer),t.setRenderTarget(T));let wt=!1;Mt.length!==w.cameras.length&&(w.cameras.length=0,wt=!0);for(let $t=0;$t<Mt.length;$t++){const ze=Mt[$t];let ke=null;if(S!==null)ke=S.getViewport(ze);else{const X=v.getViewSubImage(_,ze);ke=X.viewport,$t===0&&(t.setRenderTargetTextures(T,X.colorTexture,X.depthStencilTexture),t.setRenderTarget(T))}let xe=N[$t];xe===void 0&&(xe=new _i,xe.layers.enable($t),xe.viewport=new tn,N[$t]=xe),xe.matrix.fromArray(ze.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(ze.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(ke.x,ke.y,ke.width,ke.height),$t===0&&(w.matrix.copy(xe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),wt===!0&&w.cameras.push(xe)}const Ct=r.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){const $t=v.getDepthInformation(Mt[0]);$t&&$t.isValid&&$t.texture&&b.init(t,$t,r.renderState)}}for(let Mt=0;Mt<U.length;Mt++){const wt=A[Mt],Ct=U[Mt];wt!==null&&Ct!==void 0&&Ct.update(wt,gt,p||u)}J&&J(tt,gt),gt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:gt}),M=null}const xt=new G0;xt.setAnimationLoop(st),this.setAnimationLoop=function(tt){J=tt},this.dispose=function(){}}}const Os=new qi,S1=new en;function M1(c,t){function n(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function a(x,y){y.color.getRGB(x.fogColor.value,P0(c)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,T,U,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),v(x,y)):y.isMeshPhongMaterial?(l(x,y),g(x,y)):y.isMeshStandardMaterial?(l(x,y),_(x,y),y.isMeshPhysicalMaterial&&S(x,y,A)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),b(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?d(x,y,T,U):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,n(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Zn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,n(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Zn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,n(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,n(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const T=t.get(y),U=T.envMap,A=T.envMapRotation;U&&(x.envMap.value=U,Os.copy(A),Os.x*=-1,Os.y*=-1,Os.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),x.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(Os)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,T,U){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*T,x.scale.value=U*.5,y.map&&(x.map.value=y.map,n(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function v(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function _(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,T){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Zn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function b(x,y){const T=t.get(y).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function E1(c,t,n,a){let r={},l={},u=[];const f=c.getParameter(c.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,U){const A=U.program;a.uniformBlockBinding(T,A)}function p(T,U){let A=r[T.id];A===void 0&&(M(T),A=g(T),r[T.id]=A,T.addEventListener("dispose",x));const P=U.program;a.updateUBOMapping(T,P);const B=t.render.frame;l[T.id]!==B&&(_(T),l[T.id]=B)}function g(T){const U=v();T.__bindingPointIndex=U;const A=c.createBuffer(),P=T.__size,B=T.usage;return c.bindBuffer(c.UNIFORM_BUFFER,A),c.bufferData(c.UNIFORM_BUFFER,P,B),c.bindBuffer(c.UNIFORM_BUFFER,null),c.bindBufferBase(c.UNIFORM_BUFFER,U,A),A}function v(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(T){const U=r[T.id],A=T.uniforms,P=T.__cache;c.bindBuffer(c.UNIFORM_BUFFER,U);for(let B=0,I=A.length;B<I;B++){const k=Array.isArray(A[B])?A[B]:[A[B]];for(let N=0,w=k.length;N<w;N++){const H=k[N];if(S(H,B,N,P)===!0){const nt=H.__offset,V=Array.isArray(H.value)?H.value:[H.value];let K=0;for(let Y=0;Y<V.length;Y++){const O=V[Y],Z=b(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,c.bufferSubData(c.UNIFORM_BUFFER,nt+K,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,K),K+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(c.UNIFORM_BUFFER,nt,H.__data)}}}c.bindBuffer(c.UNIFORM_BUFFER,null)}function S(T,U,A,P){const B=T.value,I=U+"_"+A;if(P[I]===void 0)return typeof B=="number"||typeof B=="boolean"?P[I]=B:P[I]=B.clone(),!0;{const k=P[I];if(typeof B=="number"||typeof B=="boolean"){if(k!==B)return P[I]=B,!0}else if(k.equals(B)===!1)return k.copy(B),!0}return!1}function M(T){const U=T.uniforms;let A=0;const P=16;for(let I=0,k=U.length;I<k;I++){const N=Array.isArray(U[I])?U[I]:[U[I]];for(let w=0,H=N.length;w<H;w++){const nt=N[w],V=Array.isArray(nt.value)?nt.value:[nt.value];for(let K=0,Y=V.length;K<Y;K++){const O=V[K],Z=b(O),q=A%P,ct=q%Z.boundary,z=q+ct;A+=ct,z!==0&&P-z<Z.storage&&(A+=P-z),nt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=A,A+=Z.storage}}}const B=A%P;return B>0&&(A+=P-B),T.__size=A,T.__cache={},this}function b(T){const U={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(U.boundary=4,U.storage=4):T.isVector2?(U.boundary=8,U.storage=8):T.isVector3||T.isColor?(U.boundary=16,U.storage=12):T.isVector4?(U.boundary=16,U.storage=16):T.isMatrix3?(U.boundary=48,U.storage=48):T.isMatrix4?(U.boundary=64,U.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),U}function x(T){const U=T.target;U.removeEventListener("dispose",x);const A=u.indexOf(U.__bindingPointIndex);u.splice(A,1),c.deleteBuffer(r[U.id]),delete r[U.id],delete l[U.id]}function y(){for(const T in r)c.deleteBuffer(r[T]);u=[],r={},l={}}return{bind:d,update:p,dispose:y}}class b1{constructor(t={}){const{canvas:n=nM(),context:a=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=u;const M=new Uint32Array(4),b=new Int32Array(4);let x=null,y=null;const T=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1;this._outputColorSpace=gi;let B=0,I=0,k=null,N=-1,w=null;const H=new tn,nt=new tn;let V=null;const K=new Re(0);let Y=0,O=n.width,Z=n.height,q=1,ct=null,z=null;const J=new tn(0,0,O,Z),st=new tn(0,0,O,Z);let xt=!1;const tt=new rp;let gt=!1,Mt=!1;const wt=new en,Ct=new en,ue=new rt,$t=new tn,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function xe(){return k===null?q:1}let X=a;function wn(L,$){return n.getContext(L,$)}try{const L={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qd}`),n.addEventListener("webglcontextlost",Bt,!1),n.addEventListener("webglcontextrestored",At,!1),n.addEventListener("webglcontextcreationerror",St,!1),X===null){const $="webgl2";if(X=wn($,L),X===null)throw wn($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let be,ge,qt,Se,Kt,re,nn,F,R,ot,mt,vt,dt,Pt,Ut,kt,Xt,Et,zt,jt,Zt,Rt,se,j;function Lt(){be=new OT(X),be.init(),Rt=new g1(X,be),ge=new wT(X,be,t,Rt),qt=new p1(X,be),ge.reverseDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),Se=new BT(X),Kt=new e1,re=new m1(X,be,qt,Kt,ge,Rt,Se),nn=new CT(A),F=new NT(A),R=new kM(X),se=new TT(X,R),ot=new PT(X,R,Se,se),mt=new FT(X,ot,R,Se),zt=new IT(X,ge,re),kt=new RT(Kt),vt=new t1(A,nn,F,be,ge,se,kt),dt=new M1(A,Kt),Pt=new i1,Ut=new c1(be),Et=new bT(A,nn,F,qt,mt,S,d),Xt=new h1(A,mt,ge),j=new E1(X,Se,ge,qt),jt=new AT(X,be,Se),Zt=new zT(X,be,Se),Se.programs=vt.programs,A.capabilities=ge,A.extensions=be,A.properties=Kt,A.renderLists=Pt,A.shadowMap=Xt,A.state=qt,A.info=Se}Lt();const bt=new x1(A,X);this.xr=bt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const L=be.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=be.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(L){L!==void 0&&(q=L,this.setSize(O,Z,!1))},this.getSize=function(L){return L.set(O,Z)},this.setSize=function(L,$,ft=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=L,Z=$,n.width=Math.floor(L*q),n.height=Math.floor($*q),ft===!0&&(n.style.width=L+"px",n.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(O*q,Z*q).floor()},this.setDrawingBufferSize=function(L,$,ft){O=L,Z=$,q=ft,n.width=Math.floor(L*ft),n.height=Math.floor($*ft),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(H)},this.getViewport=function(L){return L.copy(J)},this.setViewport=function(L,$,ft,ht){L.isVector4?J.set(L.x,L.y,L.z,L.w):J.set(L,$,ft,ht),qt.viewport(H.copy(J).multiplyScalar(q).round())},this.getScissor=function(L){return L.copy(st)},this.setScissor=function(L,$,ft,ht){L.isVector4?st.set(L.x,L.y,L.z,L.w):st.set(L,$,ft,ht),qt.scissor(nt.copy(st).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(L){qt.setScissorTest(xt=L)},this.setOpaqueSort=function(L){ct=L},this.setTransparentSort=function(L){z=L},this.getClearColor=function(L){return L.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(L=!0,$=!0,ft=!0){let ht=0;if(L){let et=!1;if(k!==null){const Tt=k.texture.format;et=Tt===ip||Tt===np||Tt===ep}if(et){const Tt=k.texture.type,Dt=Tt===ki||Tt===Vs||Tt===sl||Tt===rl||Tt===$d||Tt===tp,Ot=Et.getClearColor(),It=Et.getClearAlpha(),ne=Ot.r,Jt=Ot.g,Wt=Ot.b;Dt?(M[0]=ne,M[1]=Jt,M[2]=Wt,M[3]=It,X.clearBufferuiv(X.COLOR,0,M)):(b[0]=ne,b[1]=Jt,b[2]=Wt,b[3]=It,X.clearBufferiv(X.COLOR,0,b))}else ht|=X.COLOR_BUFFER_BIT}$&&(ht|=X.DEPTH_BUFFER_BIT),ft&&(ht|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Bt,!1),n.removeEventListener("webglcontextrestored",At,!1),n.removeEventListener("webglcontextcreationerror",St,!1),Et.dispose(),Pt.dispose(),Ut.dispose(),Kt.dispose(),nn.dispose(),F.dispose(),mt.dispose(),se.dispose(),j.dispose(),vt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",hn),bt.removeEventListener("sessionend",Rn),Gn.stop()};function Bt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const L=Se.autoReset,$=Xt.enabled,ft=Xt.autoUpdate,ht=Xt.needsUpdate,et=Xt.type;Lt(),Se.autoReset=L,Xt.enabled=$,Xt.autoUpdate=ft,Xt.needsUpdate=ht,Xt.type=et}function St(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ft(L){const $=L.target;$.removeEventListener("dispose",Ft),ae($)}function ae(L){Ne(L),Kt.remove(L)}function Ne(L){const $=Kt.get(L).programs;$!==void 0&&($.forEach(function(ft){vt.releaseProgram(ft)}),L.isShaderMaterial&&vt.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,ft,ht,et,Tt){$===null&&($=ze);const Dt=et.isMesh&&et.matrixWorld.determinant()<0,Ot=hs(L,$,ft,ht,et);qt.setMaterial(ht,Dt);let It=ft.index,ne=1;if(ht.wireframe===!0){if(It=ot.getWireframeAttribute(ft),It===void 0)return;ne=2}const Jt=ft.drawRange,Wt=ft.attributes.position;let fe=Jt.start*ne,Ue=(Jt.start+Jt.count)*ne;Tt!==null&&(fe=Math.max(fe,Tt.start*ne),Ue=Math.min(Ue,(Tt.start+Tt.count)*ne)),It!==null?(fe=Math.max(fe,0),Ue=Math.min(Ue,It.count)):Wt!=null&&(fe=Math.max(fe,0),Ue=Math.min(Ue,Wt.count));const je=Ue-fe;if(je<0||je===1/0)return;se.setup(et,ht,Ot,ft,It);let pe,Le=jt;if(It!==null&&(pe=R.get(It),Le=Zt,Le.setIndex(pe)),et.isMesh)ht.wireframe===!0?(qt.setLineWidth(ht.wireframeLinewidth*xe()),Le.setMode(X.LINES)):Le.setMode(X.TRIANGLES);else if(et.isLine){let Qt=ht.linewidth;Qt===void 0&&(Qt=1),qt.setLineWidth(Qt*xe()),et.isLineSegments?Le.setMode(X.LINES):et.isLineLoop?Le.setMode(X.LINE_LOOP):Le.setMode(X.LINE_STRIP)}else et.isPoints?Le.setMode(X.POINTS):et.isSprite&&Le.setMode(X.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)qr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Le.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Qt=et._multiDrawStarts,Be=et._multiDrawCounts,Me=et._multiDrawCount,Sn=It?R.get(It).bytesPerElement:1,wa=Kt.get(ht).currentProgram.getUniforms();for(let We=0;We<Me;We++)wa.setValue(X,"_gl_DrawID",We),Le.render(Qt[We]/Sn,Be[We])}else if(et.isInstancedMesh)Le.renderInstances(fe,je,et.count);else if(ft.isInstancedBufferGeometry){const Qt=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Be=Math.min(ft.instanceCount,Qt);Le.renderInstances(fe,je,Be)}else Le.render(fe,je)};function Te(L,$,ft){L.transparent===!0&&L.side===xa&&L.forceSinglePass===!1?(L.side=Zn,L.needsUpdate=!0,Ta(L,$,ft),L.side=os,L.needsUpdate=!0,Ta(L,$,ft),L.side=xa):Ta(L,$,ft)}this.compile=function(L,$,ft=null){ft===null&&(ft=L),y=Ut.get(ft),y.init($),U.push(y),ft.traverseVisible(function(et){et.isLight&&et.layers.test($.layers)&&(y.pushLight(et),et.castShadow&&y.pushShadow(et))}),L!==ft&&L.traverseVisible(function(et){et.isLight&&et.layers.test($.layers)&&(y.pushLight(et),et.castShadow&&y.pushShadow(et))}),y.setupLights();const ht=new Set;return L.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Tt=et.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Ot=Tt[Dt];Te(Ot,ft,et),ht.add(Ot)}else Te(Tt,ft,et),ht.add(Tt)}),y=U.pop(),ht},this.compileAsync=function(L,$,ft=null){const ht=this.compile(L,$,ft);return new Promise(et=>{function Tt(){if(ht.forEach(function(Dt){Kt.get(Dt).currentProgram.isReady()&&ht.delete(Dt)}),ht.size===0){et(L);return}setTimeout(Tt,10)}be.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Qn=null;function xn(L){Qn&&Qn(L)}function hn(){Gn.stop()}function Rn(){Gn.start()}const Gn=new G0;Gn.setAnimationLoop(xn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(L){Qn=L,bt.setAnimationLoop(L),L===null?Gn.stop():Gn.start()},bt.addEventListener("sessionstart",hn),bt.addEventListener("sessionend",Rn),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera($),$=bt.getCamera()),L.isScene===!0&&L.onBeforeRender(A,L,$,k),y=Ut.get(L,U.length),y.init($),U.push(y),Ct.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),tt.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,gt=kt.init(this.clippingPlanes,Mt),x=Pt.get(L,T.length),x.init(),T.push(x),bt.enabled===!0&&bt.isPresenting===!0){const Tt=A.xr.getDepthSensingMesh();Tt!==null&&us(Tt,$,-1/0,A.sortObjects)}us(L,$,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(ct,z),ke=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ke&&Et.addToRenderList(x,L),this.info.render.frame++,gt===!0&&kt.beginShadows();const ft=y.state.shadowsArray;Xt.render(ft,L,$),gt===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=x.opaque,et=x.transmissive;if(y.setupLights(),$.isArrayCamera){const Tt=$.cameras;if(et.length>0)for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const It=Tt[Dt];_l(ht,et,L,It)}ke&&Et.render(L);for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++){const It=Tt[Dt];gl(x,L,It,It.viewport)}}else et.length>0&&_l(ht,et,L,$),ke&&Et.render(L),gl(x,L,$);k!==null&&I===0&&(re.updateMultisampleRenderTarget(k),re.updateRenderTargetMipmap(k)),L.isScene===!0&&L.onAfterRender(A,L,$),se.resetDefaultState(),N=-1,w=null,U.pop(),U.length>0?(y=U[U.length-1],gt===!0&&kt.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function us(L,$,ft,ht){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)ft=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)y.pushLight(L),L.castShadow&&y.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||tt.intersectsSprite(L)){ht&&$t.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ct);const Dt=mt.update(L),Ot=L.material;Ot.visible&&x.push(L,Dt,Ot,ft,$t.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||tt.intersectsObject(L))){const Dt=mt.update(L),Ot=L.material;if(ht&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),$t.copy(L.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),$t.copy(Dt.boundingSphere.center)),$t.applyMatrix4(L.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ot)){const It=Dt.groups;for(let ne=0,Jt=It.length;ne<Jt;ne++){const Wt=It[ne],fe=Ot[Wt.materialIndex];fe&&fe.visible&&x.push(L,Dt,fe,ft,$t.z,Wt)}}else Ot.visible&&x.push(L,Dt,Ot,ft,$t.z,null)}}const Tt=L.children;for(let Dt=0,Ot=Tt.length;Dt<Ot;Dt++)us(Tt[Dt],$,ft,ht)}function gl(L,$,ft,ht){const et=L.opaque,Tt=L.transmissive,Dt=L.transparent;y.setupLightsView(ft),gt===!0&&kt.setGlobalState(A.clippingPlanes,ft),ht&&qt.viewport(H.copy(ht)),et.length>0&&fs(et,$,ft),Tt.length>0&&fs(Tt,$,ft),Dt.length>0&&fs(Dt,$,ft),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function _l(L,$,ft,ht){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ht.id]===void 0&&(y.state.transmissionRenderTarget[ht.id]=new qs(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?ul:ki,minFilter:Gs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[ht.id],Dt=ht.viewport||H;Tt.setSize(Dt.z*A.transmissionResolutionScale,Dt.w*A.transmissionResolutionScale);const Ot=A.getRenderTarget(),It=A.getActiveCubeFace(),ne=A.getActiveMipmapLevel();A.setRenderTarget(Tt),A.getClearColor(K),Y=A.getClearAlpha(),Y<1&&A.setClearColor(16777215,.5),A.clear(),ke&&Et.render(ft);const Jt=A.toneMapping;A.toneMapping=rs;const Wt=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),y.setupLightsView(ht),gt===!0&&kt.setGlobalState(A.clippingPlanes,ht),fs(L,ft,ht),re.updateMultisampleRenderTarget(Tt),re.updateRenderTargetMipmap(Tt),be.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ue=0,je=$.length;Ue<je;Ue++){const pe=$[Ue],Le=pe.object,Qt=pe.geometry,Be=pe.material,Me=pe.group;if(Be.side===xa&&Le.layers.test(ht.layers)){const Sn=Be.side;Be.side=Zn,Be.needsUpdate=!0,ba(Le,ft,ht,Qt,Be,Me),Be.side=Sn,Be.needsUpdate=!0,fe=!0}}fe===!0&&(re.updateMultisampleRenderTarget(Tt),re.updateRenderTargetMipmap(Tt))}A.setRenderTarget(Ot,It,ne),A.setClearColor(K,Y),Wt!==void 0&&(ht.viewport=Wt),A.toneMapping=Jt}function fs(L,$,ft){const ht=$.isScene===!0?$.overrideMaterial:null;for(let et=0,Tt=L.length;et<Tt;et++){const Dt=L[et],Ot=Dt.object,It=Dt.geometry,ne=Dt.group;let Jt=Dt.material;Jt.allowOverride===!0&&ht!==null&&(Jt=ht),Ot.layers.test(ft.layers)&&ba(Ot,$,ft,It,Jt,ne)}}function ba(L,$,ft,ht,et,Tt){L.onBeforeRender(A,$,ft,ht,et,Tt),L.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),et.onBeforeRender(A,$,ft,ht,L,Tt),et.transparent===!0&&et.side===xa&&et.forceSinglePass===!1?(et.side=Zn,et.needsUpdate=!0,A.renderBufferDirect(ft,$,ht,et,L,Tt),et.side=os,et.needsUpdate=!0,A.renderBufferDirect(ft,$,ht,et,L,Tt),et.side=xa):A.renderBufferDirect(ft,$,ht,et,L,Tt),L.onAfterRender(A,$,ft,ht,et,Tt)}function Ta(L,$,ft){$.isScene!==!0&&($=ze);const ht=Kt.get(L),et=y.state.lights,Tt=y.state.shadowsArray,Dt=et.state.version,Ot=vt.getParameters(L,et.state,Tt,$,ft),It=vt.getProgramCacheKey(Ot);let ne=ht.programs;ht.environment=L.isMeshStandardMaterial?$.environment:null,ht.fog=$.fog,ht.envMap=(L.isMeshStandardMaterial?F:nn).get(L.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&L.envMap===null?$.environmentRotation:L.envMapRotation,ne===void 0&&(L.addEventListener("dispose",Ft),ne=new Map,ht.programs=ne);let Jt=ne.get(It);if(Jt!==void 0){if(ht.currentProgram===Jt&&ht.lightsStateVersion===Dt)return Wi(L,Ot),Jt}else Ot.uniforms=vt.getUniforms(L),L.onBeforeCompile(Ot,A),Jt=vt.acquireProgram(Ot,It),ne.set(It,Jt),ht.uniforms=Ot.uniforms;const Wt=ht.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Wt.clippingPlanes=kt.uniform),Wi(L,Ot),ht.needsLights=rn(L),ht.lightsStateVersion=Dt,ht.needsLights&&(Wt.ambientLightColor.value=et.state.ambient,Wt.lightProbe.value=et.state.probe,Wt.directionalLights.value=et.state.directional,Wt.directionalLightShadows.value=et.state.directionalShadow,Wt.spotLights.value=et.state.spot,Wt.spotLightShadows.value=et.state.spotShadow,Wt.rectAreaLights.value=et.state.rectArea,Wt.ltc_1.value=et.state.rectAreaLTC1,Wt.ltc_2.value=et.state.rectAreaLTC2,Wt.pointLights.value=et.state.point,Wt.pointLightShadows.value=et.state.pointShadow,Wt.hemisphereLights.value=et.state.hemi,Wt.directionalShadowMap.value=et.state.directionalShadowMap,Wt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Wt.spotShadowMap.value=et.state.spotShadowMap,Wt.spotLightMatrix.value=et.state.spotLightMatrix,Wt.spotLightMap.value=et.state.spotLightMap,Wt.pointShadowMap.value=et.state.pointShadowMap,Wt.pointShadowMatrix.value=et.state.pointShadowMatrix),ht.currentProgram=Jt,ht.uniformsList=null,Jt}function Xi(L){if(L.uniformsList===null){const $=L.currentProgram.getUniforms();L.uniformsList=ou.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function Wi(L,$){const ft=Kt.get(L);ft.outputColorSpace=$.outputColorSpace,ft.batching=$.batching,ft.batchingColor=$.batchingColor,ft.instancing=$.instancing,ft.instancingColor=$.instancingColor,ft.instancingMorph=$.instancingMorph,ft.skinning=$.skinning,ft.morphTargets=$.morphTargets,ft.morphNormals=$.morphNormals,ft.morphColors=$.morphColors,ft.morphTargetsCount=$.morphTargetsCount,ft.numClippingPlanes=$.numClippingPlanes,ft.numIntersection=$.numClipIntersection,ft.vertexAlphas=$.vertexAlphas,ft.vertexTangents=$.vertexTangents,ft.toneMapping=$.toneMapping}function hs(L,$,ft,ht,et){$.isScene!==!0&&($=ze),re.resetTextureUnits();const Tt=$.fog,Dt=ht.isMeshStandardMaterial?$.environment:null,Ot=k===null?A.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Zr,It=(ht.isMeshStandardMaterial?F:nn).get(ht.envMap||Dt),ne=ht.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,Jt=!!ft.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Wt=!!ft.morphAttributes.position,fe=!!ft.morphAttributes.normal,Ue=!!ft.morphAttributes.color;let je=rs;ht.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(je=A.toneMapping);const pe=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Le=pe!==void 0?pe.length:0,Qt=Kt.get(ht),Be=y.state.lights;if(gt===!0&&(Mt===!0||L!==w)){const Mn=L===w&&ht.id===N;kt.setState(ht,L,Mn)}let Me=!1;ht.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Be.state.version||Qt.outputColorSpace!==Ot||et.isBatchedMesh&&Qt.batching===!1||!et.isBatchedMesh&&Qt.batching===!0||et.isBatchedMesh&&Qt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&Qt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&Qt.instancing===!1||!et.isInstancedMesh&&Qt.instancing===!0||et.isSkinnedMesh&&Qt.skinning===!1||!et.isSkinnedMesh&&Qt.skinning===!0||et.isInstancedMesh&&Qt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Qt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Qt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Qt.instancingMorph===!1&&et.morphTexture!==null||Qt.envMap!==It||ht.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==kt.numPlanes||Qt.numIntersection!==kt.numIntersection)||Qt.vertexAlphas!==ne||Qt.vertexTangents!==Jt||Qt.morphTargets!==Wt||Qt.morphNormals!==fe||Qt.morphColors!==Ue||Qt.toneMapping!==je||Qt.morphTargetsCount!==Le)&&(Me=!0):(Me=!0,Qt.__version=ht.version);let Sn=Qt.currentProgram;Me===!0&&(Sn=Ta(ht,$,et));let wa=!1,We=!1,ji=!1;const qe=Sn.getUniforms(),Nn=Qt.uniforms;if(qt.useProgram(Sn.program)&&(wa=!0,We=!0,ji=!0),ht.id!==N&&(N=ht.id,We=!0),wa||w!==L){qt.buffers.depth.getReversed()?(wt.copy(L.projectionMatrix),aM(wt),sM(wt),qe.setValue(X,"projectionMatrix",wt)):qe.setValue(X,"projectionMatrix",L.projectionMatrix),qe.setValue(X,"viewMatrix",L.matrixWorldInverse);const Cn=qe.map.cameraPosition;Cn!==void 0&&Cn.setValue(X,ue.setFromMatrixPosition(L.matrixWorld)),ge.logarithmicDepthBuffer&&qe.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&qe.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),w!==L&&(w=L,We=!0,ji=!0)}if(et.isSkinnedMesh){qe.setOptional(X,et,"bindMatrix"),qe.setOptional(X,et,"bindMatrixInverse");const Mn=et.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),qe.setValue(X,"boneTexture",Mn.boneTexture,re))}et.isBatchedMesh&&(qe.setOptional(X,et,"batchingTexture"),qe.setValue(X,"batchingTexture",et._matricesTexture,re),qe.setOptional(X,et,"batchingIdTexture"),qe.setValue(X,"batchingIdTexture",et._indirectTexture,re),qe.setOptional(X,et,"batchingColorTexture"),et._colorsTexture!==null&&qe.setValue(X,"batchingColorTexture",et._colorsTexture,re));const dn=ft.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&zt.update(et,ft,Sn),(We||Qt.receiveShadow!==et.receiveShadow)&&(Qt.receiveShadow=et.receiveShadow,qe.setValue(X,"receiveShadow",et.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Nn.envMap.value=It,Nn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&$.environment!==null&&(Nn.envMapIntensity.value=$.environmentIntensity),We&&(qe.setValue(X,"toneMappingExposure",A.toneMappingExposure),Qt.needsLights&&Aa(Nn,ji),Tt&&ht.fog===!0&&dt.refreshFogUniforms(Nn,Tt),dt.refreshMaterialUniforms(Nn,ht,q,Z,y.state.transmissionRenderTarget[L.id]),ou.upload(X,Xi(Qt),Nn,re)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(ou.upload(X,Xi(Qt),Nn,re),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&qe.setValue(X,"center",et.center),qe.setValue(X,"modelViewMatrix",et.modelViewMatrix),qe.setValue(X,"normalMatrix",et.normalMatrix),qe.setValue(X,"modelMatrix",et.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const Mn=ht.uniformsGroups;for(let Cn=0,Di=Mn.length;Cn<Di;Cn++){const Zi=Mn[Cn];j.update(Zi,Sn),j.bind(Zi,Sn)}}return Sn}function Aa(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function rn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(L,$,ft){const ht=Kt.get(L);ht.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),Kt.get(L.texture).__webglTexture=$,Kt.get(L.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:ft,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,$){const ft=Kt.get(L);ft.__webglFramebuffer=$,ft.__useDefaultFramebuffer=$===void 0};const vl=X.createFramebuffer();this.setRenderTarget=function(L,$=0,ft=0){k=L,B=$,I=ft;let ht=!0,et=null,Tt=!1,Dt=!1;if(L){const It=Kt.get(L);if(It.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(X.FRAMEBUFFER,null),ht=!1;else if(It.__webglFramebuffer===void 0)re.setupRenderTarget(L);else if(It.__hasExternalTextures)re.rebindTextures(L,Kt.get(L.texture).__webglTexture,Kt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Wt=L.depthTexture;if(It.__boundDepthTexture!==Wt){if(Wt!==null&&Kt.has(Wt)&&(L.width!==Wt.image.width||L.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(L)}}const ne=L.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Dt=!0);const Jt=Kt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Jt[$])?et=Jt[$][ft]:et=Jt[$],Tt=!0):L.samples>0&&re.useMultisampledRTT(L)===!1?et=Kt.get(L).__webglMultisampledFramebuffer:Array.isArray(Jt)?et=Jt[ft]:et=Jt,H.copy(L.viewport),nt.copy(L.scissor),V=L.scissorTest}else H.copy(J).multiplyScalar(q).floor(),nt.copy(st).multiplyScalar(q).floor(),V=xt;if(ft!==0&&(et=vl),qt.bindFramebuffer(X.FRAMEBUFFER,et)&&ht&&qt.drawBuffers(L,et),qt.viewport(H),qt.scissor(nt),qt.setScissorTest(V),Tt){const It=Kt.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+$,It.__webglTexture,ft)}else if(Dt){const It=Kt.get(L.texture),ne=$;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,It.__webglTexture,ft,ne)}else if(L!==null&&ft!==0){const It=Kt.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,It.__webglTexture,ft)}N=-1},this.readRenderTargetPixels=function(L,$,ft,ht,et,Tt,Dt,Ot=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Kt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It){qt.bindFramebuffer(X.FRAMEBUFFER,It);try{const ne=L.textures[Ot],Jt=ne.format,Wt=ne.type;if(!ge.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-ht&&ft>=0&&ft<=L.height-et&&(L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ot),X.readPixels($,ft,ht,et,Rt.convert(Jt),Rt.convert(Wt),Tt))}finally{const ne=k!==null?Kt.get(k).__webglFramebuffer:null;qt.bindFramebuffer(X.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(L,$,ft,ht,et,Tt,Dt,Ot=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Kt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Dt!==void 0&&(It=It[Dt]),It)if($>=0&&$<=L.width-ht&&ft>=0&&ft<=L.height-et){qt.bindFramebuffer(X.FRAMEBUFFER,It);const ne=L.textures[Ot],Jt=ne.format,Wt=ne.type;if(!ge.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,fe),X.bufferData(X.PIXEL_PACK_BUFFER,Tt.byteLength,X.STREAM_READ),L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ot),X.readPixels($,ft,ht,et,Rt.convert(Jt),Rt.convert(Wt),0);const Ue=k!==null?Kt.get(k).__webglFramebuffer:null;qt.bindFramebuffer(X.FRAMEBUFFER,Ue);const je=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await iM(X,je,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,fe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Tt),X.deleteBuffer(fe),X.deleteSync(je),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,$=null,ft=0){const ht=Math.pow(2,-ft),et=Math.floor(L.image.width*ht),Tt=Math.floor(L.image.height*ht),Dt=$!==null?$.x:0,Ot=$!==null?$.y:0;re.setTexture2D(L,0),X.copyTexSubImage2D(X.TEXTURE_2D,ft,0,0,Dt,Ot,et,Tt),qt.unbindTexture()};const yl=X.createFramebuffer(),Yi=X.createFramebuffer();this.copyTextureToTexture=function(L,$,ft=null,ht=null,et=0,Tt=null){Tt===null&&(et!==0?(qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=et,et=0):Tt=0);let Dt,Ot,It,ne,Jt,Wt,fe,Ue,je;const pe=L.isCompressedTexture?L.mipmaps[Tt]:L.image;if(ft!==null)Dt=ft.max.x-ft.min.x,Ot=ft.max.y-ft.min.y,It=ft.isBox3?ft.max.z-ft.min.z:1,ne=ft.min.x,Jt=ft.min.y,Wt=ft.isBox3?ft.min.z:0;else{const dn=Math.pow(2,-et);Dt=Math.floor(pe.width*dn),Ot=Math.floor(pe.height*dn),L.isDataArrayTexture?It=pe.depth:L.isData3DTexture?It=Math.floor(pe.depth*dn):It=1,ne=0,Jt=0,Wt=0}ht!==null?(fe=ht.x,Ue=ht.y,je=ht.z):(fe=0,Ue=0,je=0);const Le=Rt.convert($.format),Qt=Rt.convert($.type);let Be;$.isData3DTexture?(re.setTexture3D($,0),Be=X.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(re.setTexture2DArray($,0),Be=X.TEXTURE_2D_ARRAY):(re.setTexture2D($,0),Be=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,$.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,$.unpackAlignment);const Me=X.getParameter(X.UNPACK_ROW_LENGTH),Sn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),wa=X.getParameter(X.UNPACK_SKIP_PIXELS),We=X.getParameter(X.UNPACK_SKIP_ROWS),ji=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,pe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,pe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,ne),X.pixelStorei(X.UNPACK_SKIP_ROWS,Jt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Wt);const qe=L.isDataArrayTexture||L.isData3DTexture,Nn=$.isDataArrayTexture||$.isData3DTexture;if(L.isDepthTexture){const dn=Kt.get(L),Mn=Kt.get($),Cn=Kt.get(dn.__renderTarget),Di=Kt.get(Mn.__renderTarget);qt.bindFramebuffer(X.READ_FRAMEBUFFER,Cn.__webglFramebuffer),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Zi=0;Zi<It;Zi++)qe&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Kt.get(L).__webglTexture,et,Wt+Zi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Kt.get($).__webglTexture,Tt,je+Zi)),X.blitFramebuffer(ne,Jt,Dt,Ot,fe,Ue,Dt,Ot,X.DEPTH_BUFFER_BIT,X.NEAREST);qt.bindFramebuffer(X.READ_FRAMEBUFFER,null),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(et!==0||L.isRenderTargetTexture||Kt.has(L)){const dn=Kt.get(L),Mn=Kt.get($);qt.bindFramebuffer(X.READ_FRAMEBUFFER,yl),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Yi);for(let Cn=0;Cn<It;Cn++)qe?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dn.__webglTexture,et,Wt+Cn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dn.__webglTexture,et),Nn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Mn.__webglTexture,Tt,je+Cn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Mn.__webglTexture,Tt),et!==0?X.blitFramebuffer(ne,Jt,Dt,Ot,fe,Ue,Dt,Ot,X.COLOR_BUFFER_BIT,X.NEAREST):Nn?X.copyTexSubImage3D(Be,Tt,fe,Ue,je+Cn,ne,Jt,Dt,Ot):X.copyTexSubImage2D(Be,Tt,fe,Ue,ne,Jt,Dt,Ot);qt.bindFramebuffer(X.READ_FRAMEBUFFER,null),qt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Nn?L.isDataTexture||L.isData3DTexture?X.texSubImage3D(Be,Tt,fe,Ue,je,Dt,Ot,It,Le,Qt,pe.data):$.isCompressedArrayTexture?X.compressedTexSubImage3D(Be,Tt,fe,Ue,je,Dt,Ot,It,Le,pe.data):X.texSubImage3D(Be,Tt,fe,Ue,je,Dt,Ot,It,Le,Qt,pe):L.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Tt,fe,Ue,Dt,Ot,Le,Qt,pe.data):L.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Tt,fe,Ue,pe.width,pe.height,Le,pe.data):X.texSubImage2D(X.TEXTURE_2D,Tt,fe,Ue,Dt,Ot,Le,Qt,pe);X.pixelStorei(X.UNPACK_ROW_LENGTH,Me),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Sn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,wa),X.pixelStorei(X.UNPACK_SKIP_ROWS,We),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ji),Tt===0&&$.generateMipmaps&&X.generateMipmap(Be),qt.unbindTexture()},this.copyTextureToTexture3D=function(L,$,ft=null,ht=null,et=0){return qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,$,ft,ht,et)},this.initRenderTarget=function(L){Kt.get(L).__webglFramebuffer===void 0&&re.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?re.setTextureCube(L,0):L.isData3DTexture?re.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?re.setTexture2DArray(L,0):re.setTexture2D(L,0),qt.unbindTexture()},this.resetState=function(){B=0,I=0,k=null,qt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}class Ri{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const n=this.elements;n[0]=t.x,n[4]=t.y,n[8]=t.z}getTrace(t){t===void 0&&(t=new C);const n=this.elements;return t.x=n[0],t.y=n[4],t.z=n[8],t}vmult(t,n){n===void 0&&(n=new C);const a=this.elements,r=t.x,l=t.y,u=t.z;return n.x=a[0]*r+a[1]*l+a[2]*u,n.y=a[3]*r+a[4]*l+a[5]*u,n.z=a[6]*r+a[7]*l+a[8]*u,n}smult(t){for(let n=0;n<this.elements.length;n++)this.elements[n]*=t}mmult(t,n){n===void 0&&(n=new Ri);const a=this.elements,r=t.elements,l=n.elements,u=a[0],f=a[1],d=a[2],p=a[3],g=a[4],v=a[5],_=a[6],S=a[7],M=a[8],b=r[0],x=r[1],y=r[2],T=r[3],U=r[4],A=r[5],P=r[6],B=r[7],I=r[8];return l[0]=u*b+f*T+d*P,l[1]=u*x+f*U+d*B,l[2]=u*y+f*A+d*I,l[3]=p*b+g*T+v*P,l[4]=p*x+g*U+v*B,l[5]=p*y+g*A+v*I,l[6]=_*b+S*T+M*P,l[7]=_*x+S*U+M*B,l[8]=_*y+S*A+M*I,n}scale(t,n){n===void 0&&(n=new Ri);const a=this.elements,r=n.elements;for(let l=0;l!==3;l++)r[3*l+0]=t.x*a[3*l+0],r[3*l+1]=t.y*a[3*l+1],r[3*l+2]=t.z*a[3*l+2];return n}solve(t,n){n===void 0&&(n=new C);const a=3,r=4,l=[];let u,f;for(u=0;u<a*r;u++)l.push(0);for(u=0;u<3;u++)for(f=0;f<3;f++)l[u+r*f]=this.elements[u+3*f];l[3+4*0]=t.x,l[3+4*1]=t.y,l[3+4*2]=t.z;let d=3;const p=d;let g;const v=4;let _;do{if(u=p-d,l[u+r*u]===0){for(f=u+1;f<p;f++)if(l[u+r*f]!==0){g=v;do _=v-g,l[_+r*u]+=l[_+r*f];while(--g);break}}if(l[u+r*u]!==0)for(f=u+1;f<p;f++){const S=l[u+r*f]/l[u+r*u];g=v;do _=v-g,l[_+r*f]=_<=u?0:l[_+r*f]-l[_+r*u]*S;while(--g)}}while(--d);if(n.z=l[2*r+3]/l[2*r+2],n.y=(l[1*r+3]-l[1*r+2]*n.z)/l[1*r+1],n.x=(l[0*r+3]-l[0*r+2]*n.z-l[0*r+1]*n.y)/l[0*r+0],isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||n.x===1/0||n.y===1/0||n.z===1/0)throw`Could not solve equation! Got x=[${n.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return n}e(t,n,a){if(a===void 0)return this.elements[n+3*t];this.elements[n+3*t]=a}copy(t){for(let n=0;n<t.elements.length;n++)this.elements[n]=t.elements[n];return this}toString(){let t="";const n=",";for(let a=0;a<9;a++)t+=this.elements[a]+n;return t}reverse(t){t===void 0&&(t=new Ri);const n=3,a=6,r=T1;let l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)r[l+a*u]=this.elements[l+3*u];r[3+6*0]=1,r[3+6*1]=0,r[3+6*2]=0,r[4+6*0]=0,r[4+6*1]=1,r[4+6*2]=0,r[5+6*0]=0,r[5+6*1]=0,r[5+6*2]=1;let f=3;const d=f;let p;const g=a;let v;do{if(l=d-f,r[l+a*l]===0){for(u=l+1;u<d;u++)if(r[l+a*u]!==0){p=g;do v=g-p,r[v+a*l]+=r[v+a*u];while(--p);break}}if(r[l+a*l]!==0)for(u=l+1;u<d;u++){const _=r[l+a*u]/r[l+a*l];p=g;do v=g-p,r[v+a*u]=v<=l?0:r[v+a*u]-r[v+a*l]*_;while(--p)}}while(--f);l=2;do{u=l-1;do{const _=r[l+a*u]/r[l+a*l];p=a;do v=a-p,r[v+a*u]=r[v+a*u]-r[v+a*l]*_;while(--p)}while(u--)}while(--l);l=2;do{const _=1/r[l+a*l];p=a;do v=a-p,r[v+a*l]=r[v+a*l]*_;while(--p)}while(l--);l=2;do{u=2;do{if(v=r[n+u+a*l],isNaN(v)||v===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(l,u,v)}while(u--)}while(l--);return t}setRotationFromQuaternion(t){const n=t.x,a=t.y,r=t.z,l=t.w,u=n+n,f=a+a,d=r+r,p=n*u,g=n*f,v=n*d,_=a*f,S=a*d,M=r*d,b=l*u,x=l*f,y=l*d,T=this.elements;return T[3*0+0]=1-(_+M),T[3*0+1]=g-y,T[3*0+2]=v+x,T[3*1+0]=g+y,T[3*1+1]=1-(p+M),T[3*1+2]=S-b,T[3*2+0]=v-x,T[3*2+1]=S+b,T[3*2+2]=1-(p+_),this}transpose(t){t===void 0&&(t=new Ri);const n=this.elements,a=t.elements;let r;return a[0]=n[0],a[4]=n[4],a[8]=n[8],r=n[1],a[1]=n[3],a[3]=r,r=n[2],a[2]=n[6],a[6]=r,r=n[5],a[5]=n[7],a[7]=r,t}}const T1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class C{constructor(t,n,a){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),this.x=t,this.y=n,this.z=a}cross(t,n){n===void 0&&(n=new C);const a=t.x,r=t.y,l=t.z,u=this.x,f=this.y,d=this.z;return n.x=f*l-d*r,n.y=d*a-u*l,n.z=u*r-f*a,n}set(t,n,a){return this.x=t,this.y=n,this.z=a,this}setZero(){this.x=this.y=this.z=0}vadd(t,n){if(n)n.x=t.x+this.x,n.y=t.y+this.y,n.z=t.z+this.z;else return new C(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,n){if(n)n.x=this.x-t.x,n.y=this.y-t.y,n.z=this.z-t.z;else return new C(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Ri([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,n=this.y,a=this.z,r=Math.sqrt(t*t+n*n+a*a);if(r>0){const l=1/r;this.x*=l,this.y*=l,this.z*=l}else this.x=0,this.y=0,this.z=0;return r}unit(t){t===void 0&&(t=new C);const n=this.x,a=this.y,r=this.z;let l=Math.sqrt(n*n+a*a+r*r);return l>0?(l=1/l,t.x=n*l,t.y=a*l,t.z=r*l):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,n=this.y,a=this.z;return Math.sqrt(t*t+n*n+a*a)}lengthSquared(){return this.dot(this)}distanceTo(t){const n=this.x,a=this.y,r=this.z,l=t.x,u=t.y,f=t.z;return Math.sqrt((l-n)*(l-n)+(u-a)*(u-a)+(f-r)*(f-r))}distanceSquared(t){const n=this.x,a=this.y,r=this.z,l=t.x,u=t.y,f=t.z;return(l-n)*(l-n)+(u-a)*(u-a)+(f-r)*(f-r)}scale(t,n){n===void 0&&(n=new C);const a=this.x,r=this.y,l=this.z;return n.x=t*a,n.y=t*r,n.z=t*l,n}vmul(t,n){return n===void 0&&(n=new C),n.x=t.x*this.x,n.y=t.y*this.y,n.z=t.z*this.z,n}addScaledVector(t,n,a){return a===void 0&&(a=new C),a.x=this.x+t*n.x,a.y=this.y+t*n.y,a.z=this.z+t*n.z,a}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new C),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,n){const a=this.length();if(a>0){const r=A1,l=1/a;r.set(this.x*l,this.y*l,this.z*l);const u=w1;Math.abs(r.x)<.9?(u.set(1,0,0),r.cross(u,t)):(u.set(0,1,0),r.cross(u,t)),r.cross(t,n)}else t.set(1,0,0),n.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,n,a){const r=this.x,l=this.y,u=this.z;a.x=r+(t.x-r)*n,a.y=l+(t.y-l)*n,a.z=u+(t.z-u)*n}almostEquals(t,n){return n===void 0&&(n=1e-6),!(Math.abs(this.x-t.x)>n||Math.abs(this.y-t.y)>n||Math.abs(this.z-t.z)>n)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,n){return this.negate(Yv),Yv.almostEquals(t,n)}clone(){return new C(this.x,this.y,this.z)}}C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);const A1=new C,w1=new C,Yv=new C;class oi{constructor(t){t===void 0&&(t={}),this.lowerBound=new C,this.upperBound=new C,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,n,a,r){const l=this.lowerBound,u=this.upperBound,f=a;l.copy(t[0]),f&&f.vmult(l,l),u.copy(l);for(let d=1;d<t.length;d++){let p=t[d];f&&(f.vmult(p,jv),p=jv),p.x>u.x&&(u.x=p.x),p.x<l.x&&(l.x=p.x),p.y>u.y&&(u.y=p.y),p.y<l.y&&(l.y=p.y),p.z>u.z&&(u.z=p.z),p.z<l.z&&(l.z=p.z)}return n&&(n.vadd(l,l),n.vadd(u,u)),r&&(l.x-=r,l.y-=r,l.z-=r,u.x+=r,u.y+=r,u.z+=r),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new oi().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,l=t.upperBound,u=r.x<=a.x&&a.x<=l.x||n.x<=l.x&&l.x<=a.x,f=r.y<=a.y&&a.y<=l.y||n.y<=l.y&&l.y<=a.y,d=r.z<=a.z&&a.z<=l.z||n.z<=l.z&&l.z<=a.z;return u&&f&&d}volume(){const t=this.lowerBound,n=this.upperBound;return(n.x-t.x)*(n.y-t.y)*(n.z-t.z)}contains(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,l=t.upperBound;return n.x<=r.x&&a.x>=l.x&&n.y<=r.y&&a.y>=l.y&&n.z<=r.z&&a.z>=l.z}getCorners(t,n,a,r,l,u,f,d){const p=this.lowerBound,g=this.upperBound;t.copy(p),n.set(g.x,p.y,p.z),a.set(g.x,g.y,p.z),r.set(p.x,g.y,g.z),l.set(g.x,p.y,g.z),u.set(p.x,g.y,p.z),f.set(p.x,p.y,g.z),d.copy(g)}toLocalFrame(t,n){const a=Zv,r=a[0],l=a[1],u=a[2],f=a[3],d=a[4],p=a[5],g=a[6],v=a[7];this.getCorners(r,l,u,f,d,p,g,v);for(let _=0;_!==8;_++){const S=a[_];t.pointToLocal(S,S)}return n.setFromPoints(a)}toWorldFrame(t,n){const a=Zv,r=a[0],l=a[1],u=a[2],f=a[3],d=a[4],p=a[5],g=a[6],v=a[7];this.getCorners(r,l,u,f,d,p,g,v);for(let _=0;_!==8;_++){const S=a[_];t.pointToWorld(S,S)}return n.setFromPoints(a)}overlapsRay(t){const{direction:n,from:a}=t,r=1/n.x,l=1/n.y,u=1/n.z,f=(this.lowerBound.x-a.x)*r,d=(this.upperBound.x-a.x)*r,p=(this.lowerBound.y-a.y)*l,g=(this.upperBound.y-a.y)*l,v=(this.lowerBound.z-a.z)*u,_=(this.upperBound.z-a.z)*u,S=Math.max(Math.max(Math.min(f,d),Math.min(p,g)),Math.min(v,_)),M=Math.min(Math.min(Math.max(f,d),Math.max(p,g)),Math.max(v,_));return!(M<0||S>M)}}const jv=new C,Zv=[new C,new C,new C,new C,new C,new C,new C,new C];class Kv{constructor(){this.matrix=[]}get(t,n){let{index:a}=t,{index:r}=n;if(r>a){const l=r;r=a,a=l}return this.matrix[(a*(a+1)>>1)+r-1]}set(t,n,a){let{index:r}=t,{index:l}=n;if(l>r){const u=l;l=r,r=u}this.matrix[(r*(r+1)>>1)+l-1]=a?1:0}reset(){for(let t=0,n=this.matrix.length;t!==n;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class W0{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;return a[t]===void 0&&(a[t]=[]),a[t].includes(n)||a[t].push(n),this}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return!!(a[t]!==void 0&&a[t].includes(n))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,n){if(this._listeners===void 0)return this;const a=this._listeners;if(a[t]===void 0)return this;const r=a[t].indexOf(n);return r!==-1&&a[t].splice(r,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const a=this._listeners[t.type];if(a!==void 0){t.target=this;for(let r=0,l=a.length;r<l;r++)a[r].call(this,t)}return this}}class fn{constructor(t,n,a,r){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),r===void 0&&(r=1),this.x=t,this.y=n,this.z=a,this.w=r}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,n){const a=Math.sin(n*.5);return this.x=t.x*a,this.y=t.y*a,this.z=t.z*a,this.w=Math.cos(n*.5),this}toAxisAngle(t){t===void 0&&(t=new C),this.normalize();const n=2*Math.acos(this.w),a=Math.sqrt(1-this.w*this.w);return a<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/a,t.y=this.y/a,t.z=this.z/a),[t,n]}setFromVectors(t,n){if(t.isAntiparallelTo(n)){const a=R1,r=C1;t.tangents(a,r),this.setFromAxisAngle(a,Math.PI)}else{const a=t.cross(n);this.x=a.x,this.y=a.y,this.z=a.z,this.w=Math.sqrt(t.length()**2*n.length()**2)+t.dot(n),this.normalize()}return this}mult(t,n){n===void 0&&(n=new fn);const a=this.x,r=this.y,l=this.z,u=this.w,f=t.x,d=t.y,p=t.z,g=t.w;return n.x=a*g+u*f+r*p-l*d,n.y=r*g+u*d+l*f-a*p,n.z=l*g+u*p+a*d-r*f,n.w=u*g-a*f-r*d-l*p,n}inverse(t){t===void 0&&(t=new fn);const n=this.x,a=this.y,r=this.z,l=this.w;this.conjugate(t);const u=1/(n*n+a*a+r*r+l*l);return t.x*=u,t.y*=u,t.z*=u,t.w*=u,t}conjugate(t){return t===void 0&&(t=new fn),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,n){n===void 0&&(n=new C);const a=t.x,r=t.y,l=t.z,u=this.x,f=this.y,d=this.z,p=this.w,g=p*a+f*l-d*r,v=p*r+d*a-u*l,_=p*l+u*r-f*a,S=-u*a-f*r-d*l;return n.x=g*p+S*-u+v*-d-_*-f,n.y=v*p+S*-f+_*-u-g*-d,n.z=_*p+S*-d+g*-f-v*-u,n}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,n){n===void 0&&(n="YZX");let a,r,l;const u=this.x,f=this.y,d=this.z,p=this.w;switch(n){case"YZX":const g=u*f+d*p;if(g>.499&&(a=2*Math.atan2(u,p),r=Math.PI/2,l=0),g<-.499&&(a=-2*Math.atan2(u,p),r=-Math.PI/2,l=0),a===void 0){const v=u*u,_=f*f,S=d*d;a=Math.atan2(2*f*p-2*u*d,1-2*_-2*S),r=Math.asin(2*g),l=Math.atan2(2*u*p-2*f*d,1-2*v-2*S)}break;default:throw new Error(`Euler order ${n} not supported yet.`)}t.y=a,t.z=r,t.x=l}setFromEuler(t,n,a,r){r===void 0&&(r="XYZ");const l=Math.cos(t/2),u=Math.cos(n/2),f=Math.cos(a/2),d=Math.sin(t/2),p=Math.sin(n/2),g=Math.sin(a/2);return r==="XYZ"?(this.x=d*u*f+l*p*g,this.y=l*p*f-d*u*g,this.z=l*u*g+d*p*f,this.w=l*u*f-d*p*g):r==="YXZ"?(this.x=d*u*f+l*p*g,this.y=l*p*f-d*u*g,this.z=l*u*g-d*p*f,this.w=l*u*f+d*p*g):r==="ZXY"?(this.x=d*u*f-l*p*g,this.y=l*p*f+d*u*g,this.z=l*u*g+d*p*f,this.w=l*u*f-d*p*g):r==="ZYX"?(this.x=d*u*f-l*p*g,this.y=l*p*f+d*u*g,this.z=l*u*g-d*p*f,this.w=l*u*f+d*p*g):r==="YZX"?(this.x=d*u*f+l*p*g,this.y=l*p*f+d*u*g,this.z=l*u*g-d*p*f,this.w=l*u*f-d*p*g):r==="XZY"&&(this.x=d*u*f-l*p*g,this.y=l*p*f-d*u*g,this.z=l*u*g+d*p*f,this.w=l*u*f+d*p*g),this}clone(){return new fn(this.x,this.y,this.z,this.w)}slerp(t,n,a){a===void 0&&(a=new fn);const r=this.x,l=this.y,u=this.z,f=this.w;let d=t.x,p=t.y,g=t.z,v=t.w,_,S,M,b,x;return S=r*d+l*p+u*g+f*v,S<0&&(S=-S,d=-d,p=-p,g=-g,v=-v),1-S>1e-6?(_=Math.acos(S),M=Math.sin(_),b=Math.sin((1-n)*_)/M,x=Math.sin(n*_)/M):(b=1-n,x=n),a.x=b*r+x*d,a.y=b*l+x*p,a.z=b*u+x*g,a.w=b*f+x*v,a}integrate(t,n,a,r){r===void 0&&(r=new fn);const l=t.x*a.x,u=t.y*a.y,f=t.z*a.z,d=this.x,p=this.y,g=this.z,v=this.w,_=n*.5;return r.x+=_*(l*v+u*g-f*p),r.y+=_*(u*v+f*d-l*g),r.z+=_*(f*v+l*p-u*d),r.w+=_*(-l*d-u*p-f*g),r}}const R1=new C,C1=new C,D1={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Vt{constructor(t){t===void 0&&(t={}),this.id=Vt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,n){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,n,a,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Vt.idCounter=0;Vt.types=D1;class De{constructor(t){t===void 0&&(t={}),this.position=new C,this.quaternion=new fn,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,n){return De.pointToLocalFrame(this.position,this.quaternion,t,n)}pointToWorld(t,n){return De.pointToWorldFrame(this.position,this.quaternion,t,n)}vectorToWorldFrame(t,n){return n===void 0&&(n=new C),this.quaternion.vmult(t,n),n}static pointToLocalFrame(t,n,a,r){return r===void 0&&(r=new C),a.vsub(t,r),n.conjugate(Qv),Qv.vmult(r,r),r}static pointToWorldFrame(t,n,a,r){return r===void 0&&(r=new C),n.vmult(a,r),r.vadd(t,r),r}static vectorToWorldFrame(t,n,a){return a===void 0&&(a=new C),t.vmult(n,a),a}static vectorToLocalFrame(t,n,a,r){return r===void 0&&(r=new C),n.w*=-1,n.vmult(a,r),n.w*=-1,r}}const Qv=new fn;class al extends Vt{constructor(t){t===void 0&&(t={});const{vertices:n=[],faces:a=[],normals:r=[],axes:l,boundingSphereRadius:u}=t;super({type:Vt.types.CONVEXPOLYHEDRON}),this.vertices=n,this.faces=a,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),u?this.boundingSphereRadius=u:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=l?l.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,n=this.vertices,a=this.uniqueEdges;a.length=0;const r=new C;for(let l=0;l!==t.length;l++){const u=t[l],f=u.length;for(let d=0;d!==f;d++){const p=(d+1)%f;n[u[d]].vsub(n[u[p]],r),r.normalize();let g=!1;for(let v=0;v!==a.length;v++)if(a[v].almostEquals(r)||a[v].almostEquals(r)){g=!0;break}g||a.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let r=0;r<this.faces[t].length;r++)if(!this.vertices[this.faces[t][r]])throw new Error(`Vertex ${this.faces[t][r]} not found!`);const n=this.faceNormals[t]||new C;this.getFaceNormal(t,n),n.negate(n),this.faceNormals[t]=n;const a=this.vertices[this.faces[t][0]];if(n.dot(a)<0){console.error(`.faceNormals[${t}] = Vec3(${n.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[t].length;r++)console.warn(`.vertices[${this.faces[t][r]}] = Vec3(${this.vertices[this.faces[t][r]].toString()})`)}}}getFaceNormal(t,n){const a=this.faces[t],r=this.vertices[a[0]],l=this.vertices[a[1]],u=this.vertices[a[2]];al.computeNormal(r,l,u,n)}static computeNormal(t,n,a,r){const l=new C,u=new C;n.vsub(t,u),a.vsub(n,l),l.cross(u,r),r.isZero()||r.normalize()}clipAgainstHull(t,n,a,r,l,u,f,d,p){const g=new C;let v=-1,_=-Number.MAX_VALUE;for(let M=0;M<a.faces.length;M++){g.copy(a.faceNormals[M]),l.vmult(g,g);const b=g.dot(u);b>_&&(_=b,v=M)}const S=[];for(let M=0;M<a.faces[v].length;M++){const b=a.vertices[a.faces[v][M]],x=new C;x.copy(b),l.vmult(x,x),r.vadd(x,x),S.push(x)}v>=0&&this.clipFaceAgainstHull(u,t,n,S,f,d,p)}findSeparatingAxis(t,n,a,r,l,u,f,d){const p=new C,g=new C,v=new C,_=new C,S=new C,M=new C;let b=Number.MAX_VALUE;const x=this;if(x.uniqueAxes)for(let y=0;y!==x.uniqueAxes.length;y++){a.vmult(x.uniqueAxes[y],p);const T=x.testSepAxis(p,t,n,a,r,l);if(T===!1)return!1;T<b&&(b=T,u.copy(p))}else{const y=f?f.length:x.faces.length;for(let T=0;T<y;T++){const U=f?f[T]:T;p.copy(x.faceNormals[U]),a.vmult(p,p);const A=x.testSepAxis(p,t,n,a,r,l);if(A===!1)return!1;A<b&&(b=A,u.copy(p))}}if(t.uniqueAxes)for(let y=0;y!==t.uniqueAxes.length;y++){l.vmult(t.uniqueAxes[y],g);const T=x.testSepAxis(g,t,n,a,r,l);if(T===!1)return!1;T<b&&(b=T,u.copy(g))}else{const y=d?d.length:t.faces.length;for(let T=0;T<y;T++){const U=d?d[T]:T;g.copy(t.faceNormals[U]),l.vmult(g,g);const A=x.testSepAxis(g,t,n,a,r,l);if(A===!1)return!1;A<b&&(b=A,u.copy(g))}}for(let y=0;y!==x.uniqueEdges.length;y++){a.vmult(x.uniqueEdges[y],_);for(let T=0;T!==t.uniqueEdges.length;T++)if(l.vmult(t.uniqueEdges[T],S),_.cross(S,M),!M.almostZero()){M.normalize();const U=x.testSepAxis(M,t,n,a,r,l);if(U===!1)return!1;U<b&&(b=U,u.copy(M))}}return r.vsub(n,v),v.dot(u)>0&&u.negate(u),!0}testSepAxis(t,n,a,r,l,u){const f=this;al.project(f,t,a,r,nd),al.project(n,t,l,u,id);const d=nd[0],p=nd[1],g=id[0],v=id[1];if(d<v||g<p)return!1;const _=d-v,S=g-p;return _<S?_:S}calculateLocalInertia(t,n){const a=new C,r=new C;this.computeLocalAABB(r,a);const l=a.x-r.x,u=a.y-r.y,f=a.z-r.z;n.x=1/12*t*(2*u*2*u+2*f*2*f),n.y=1/12*t*(2*l*2*l+2*f*2*f),n.z=1/12*t*(2*u*2*u+2*l*2*l)}getPlaneConstantOfFace(t){const n=this.faces[t],a=this.faceNormals[t],r=this.vertices[n[0]];return-a.dot(r)}clipFaceAgainstHull(t,n,a,r,l,u,f){const d=new C,p=new C,g=new C,v=new C,_=new C,S=new C,M=new C,b=new C,x=this,y=[],T=r,U=y;let A=-1,P=Number.MAX_VALUE;for(let w=0;w<x.faces.length;w++){d.copy(x.faceNormals[w]),a.vmult(d,d);const H=d.dot(t);H<P&&(P=H,A=w)}if(A<0)return;const B=x.faces[A];B.connectedFaces=[];for(let w=0;w<x.faces.length;w++)for(let H=0;H<x.faces[w].length;H++)B.indexOf(x.faces[w][H])!==-1&&w!==A&&B.connectedFaces.indexOf(w)===-1&&B.connectedFaces.push(w);const I=B.length;for(let w=0;w<I;w++){const H=x.vertices[B[w]],nt=x.vertices[B[(w+1)%I]];H.vsub(nt,p),g.copy(p),a.vmult(g,g),n.vadd(g,g),v.copy(this.faceNormals[A]),a.vmult(v,v),n.vadd(v,v),g.cross(v,_),_.negate(_),S.copy(H),a.vmult(S,S),n.vadd(S,S);const V=B.connectedFaces[w];M.copy(this.faceNormals[V]);const K=this.getPlaneConstantOfFace(V);b.copy(M),a.vmult(b,b);const Y=K-b.dot(n);for(this.clipFaceAgainstPlane(T,U,b,Y);T.length;)T.shift();for(;U.length;)T.push(U.shift())}M.copy(this.faceNormals[A]);const k=this.getPlaneConstantOfFace(A);b.copy(M),a.vmult(b,b);const N=k-b.dot(n);for(let w=0;w<T.length;w++){let H=b.dot(T[w])+N;if(H<=l&&(console.log(`clamped: depth=${H} to minDist=${l}`),H=l),H<=u){const nt=T[w];if(H<=1e-6){const V={point:nt,normal:b,depth:H};f.push(V)}}}}clipFaceAgainstPlane(t,n,a,r){let l,u;const f=t.length;if(f<2)return n;let d=t[t.length-1],p=t[0];l=a.dot(d)+r;for(let g=0;g<f;g++){if(p=t[g],u=a.dot(p)+r,l<0)if(u<0){const v=new C;v.copy(p),n.push(v)}else{const v=new C;d.lerp(p,l/(l-u),v),n.push(v)}else if(u<0){const v=new C;d.lerp(p,l/(l-u),v),n.push(v),n.push(p)}d=p,l=u}return n}computeWorldVertices(t,n){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);const a=this.vertices,r=this.worldVertices;for(let l=0;l!==this.vertices.length;l++)n.vmult(a[l],r[l]),t.vadd(r[l],r[l]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,n){const a=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const l=a[r];l.x<t.x?t.x=l.x:l.x>n.x&&(n.x=l.x),l.y<t.y?t.y=l.y:l.y>n.y&&(n.y=l.y),l.z<t.z?t.z=l.z:l.z>n.z&&(n.z=l.z)}}computeWorldFaceNormals(t){const n=this.faceNormals.length;for(;this.worldFaceNormals.length<n;)this.worldFaceNormals.push(new C);const a=this.faceNormals,r=this.worldFaceNormals;for(let l=0;l!==n;l++)t.vmult(a[l],r[l]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const n=this.vertices;for(let a=0;a!==n.length;a++){const r=n[a].lengthSquared();r>t&&(t=r)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,n,a,r){const l=this.vertices;let u,f,d,p,g,v,_=new C;for(let S=0;S<l.length;S++){_.copy(l[S]),n.vmult(_,_),t.vadd(_,_);const M=_;(u===void 0||M.x<u)&&(u=M.x),(p===void 0||M.x>p)&&(p=M.x),(f===void 0||M.y<f)&&(f=M.y),(g===void 0||M.y>g)&&(g=M.y),(d===void 0||M.z<d)&&(d=M.z),(v===void 0||M.z>v)&&(v=M.z)}a.set(u,f,d),r.set(p,g,v)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new C);const n=this.vertices;for(let a=0;a<n.length;a++)t.vadd(n[a],t);return t.scale(1/n.length,t),t}transformAllPoints(t,n){const a=this.vertices.length,r=this.vertices;if(n){for(let l=0;l<a;l++){const u=r[l];n.vmult(u,u)}for(let l=0;l<this.faceNormals.length;l++){const u=this.faceNormals[l];n.vmult(u,u)}}if(t)for(let l=0;l<a;l++){const u=r[l];u.vadd(t,u)}}pointIsInside(t){const n=this.vertices,a=this.faces,r=this.faceNormals,l=new C;this.getAveragePointLocal(l);for(let u=0;u<this.faces.length;u++){let f=r[u];const d=n[a[u][0]],p=new C;t.vsub(d,p);const g=f.dot(p),v=new C;l.vsub(d,v);const _=f.dot(v);if(g<0&&_>0||g>0&&_<0)return!1}return-1}static project(t,n,a,r,l){const u=t.vertices.length,f=U1;let d=0,p=0;const g=L1,v=t.vertices;g.setZero(),De.vectorToLocalFrame(a,r,n,f),De.pointToLocalFrame(a,r,g,g);const _=g.dot(f);p=d=v[0].dot(f);for(let S=1;S<u;S++){const M=v[S].dot(f);M>d&&(d=M),M<p&&(p=M)}if(p-=_,d-=_,p>d){const S=p;p=d,d=S}l[0]=d,l[1]=p}}const nd=[],id=[];new C;const U1=new C,L1=new C;class cl extends Vt{constructor(t){super({type:Vt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,n=this.halfExtents.y,a=this.halfExtents.z,r=C,l=[new r(-t,-n,-a),new r(t,-n,-a),new r(t,n,-a),new r(-t,n,-a),new r(-t,-n,a),new r(t,-n,a),new r(t,n,a),new r(-t,n,a)],u=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],f=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],d=new al({vertices:l,faces:u,axes:f});this.convexPolyhedronRepresentation=d,d.material=this.material}calculateLocalInertia(t,n){return n===void 0&&(n=new C),cl.calculateInertia(this.halfExtents,t,n),n}static calculateInertia(t,n,a){const r=t;a.x=1/12*n*(2*r.y*2*r.y+2*r.z*2*r.z),a.y=1/12*n*(2*r.x*2*r.x+2*r.z*2*r.z),a.z=1/12*n*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(t,n){const a=t,r=this.halfExtents;if(a[0].set(r.x,0,0),a[1].set(0,r.y,0),a[2].set(0,0,r.z),a[3].set(-r.x,0,0),a[4].set(0,-r.y,0),a[5].set(0,0,-r.z),n!==void 0)for(let l=0;l!==a.length;l++)n.vmult(a[l],a[l]);return a}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,n,a){const r=this.halfExtents,l=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let u=0;u<l.length;u++)ns.set(l[u][0],l[u][1],l[u][2]),n.vmult(ns,ns),t.vadd(ns,ns),a(ns.x,ns.y,ns.z)}calculateWorldAABB(t,n,a,r){const l=this.halfExtents;zi[0].set(l.x,l.y,l.z),zi[1].set(-l.x,l.y,l.z),zi[2].set(-l.x,-l.y,l.z),zi[3].set(-l.x,-l.y,-l.z),zi[4].set(l.x,-l.y,-l.z),zi[5].set(l.x,l.y,-l.z),zi[6].set(-l.x,l.y,-l.z),zi[7].set(l.x,-l.y,l.z);const u=zi[0];n.vmult(u,u),t.vadd(u,u),r.copy(u),a.copy(u);for(let f=1;f<8;f++){const d=zi[f];n.vmult(d,d),t.vadd(d,d);const p=d.x,g=d.y,v=d.z;p>r.x&&(r.x=p),g>r.y&&(r.y=g),v>r.z&&(r.z=v),p<a.x&&(a.x=p),g<a.y&&(a.y=g),v<a.z&&(a.z=v)}}}const ns=new C,zi=[new C,new C,new C,new C,new C,new C,new C,new C],cp={DYNAMIC:1,STATIC:2,KINEMATIC:4},up={AWAKE:0,SLEEPY:1,SLEEPING:2};class Gt extends W0{constructor(t){t===void 0&&(t={}),super(),this.id=Gt.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new C,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new C,this.force=new C;const n=typeof t.mass=="number"?t.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=n<=0?Gt.STATIC:Gt.DYNAMIC,typeof t.type==typeof Gt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Gt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new fn,this.initQuaternion=new fn,this.previousQuaternion=new fn,this.interpolatedQuaternion=new fn,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new C,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new Ri,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new Ri,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new C(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new C(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new oi,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Gt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Gt.SLEEPING&&this.dispatchEvent(Gt.wakeupEvent)}sleep(){this.sleepState=Gt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const n=this.sleepState,a=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;n===Gt.AWAKE&&a<r?(this.sleepState=Gt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Gt.sleepyEvent)):n===Gt.SLEEPY&&a>r?this.wakeUp():n===Gt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Gt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Gt.SLEEPING||this.type===Gt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,n){return n===void 0&&(n=new C),t.vsub(this.position,n),this.quaternion.conjugate().vmult(n,n),n}vectorToLocalFrame(t,n){return n===void 0&&(n=new C),this.quaternion.conjugate().vmult(t,n),n}pointToWorldFrame(t,n){return n===void 0&&(n=new C),this.quaternion.vmult(t,n),n.vadd(this.position,n),n}vectorToWorldFrame(t,n){return n===void 0&&(n=new C),this.quaternion.vmult(t,n),n}addShape(t,n,a){const r=new C,l=new fn;return n&&r.copy(n),a&&l.copy(a),this.shapes.push(t),this.shapeOffsets.push(r),this.shapeOrientations.push(l),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const n=this.shapes.indexOf(t);return n===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(n,1),this.shapeOffsets.splice(n,1),this.shapeOrientations.splice(n,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,n=this.shapeOffsets,a=t.length;let r=0;for(let l=0;l!==a;l++){const u=t[l];u.updateBoundingSphereRadius();const f=n[l].length(),d=u.boundingSphereRadius;f+d>r&&(r=f+d)}this.boundingRadius=r}updateAABB(){const t=this.shapes,n=this.shapeOffsets,a=this.shapeOrientations,r=t.length,l=N1,u=O1,f=this.quaternion,d=this.aabb,p=P1;for(let g=0;g!==r;g++){const v=t[g];f.vmult(n[g],l),l.vadd(this.position,l),f.mult(a[g],u),v.calculateWorldAABB(l,u,p.lowerBound,p.upperBound),g===0?d.copy(p):d.extend(p)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const n=this.invInertia;if(!(n.x===n.y&&n.y===n.z&&!t)){const a=z1,r=B1;a.setRotationFromQuaternion(this.quaternion),a.transpose(r),a.scale(n,a),a.mmult(r,this.invInertiaWorld)}}applyForce(t,n){if(n===void 0&&(n=new C),this.type!==Gt.DYNAMIC)return;this.sleepState===Gt.SLEEPING&&this.wakeUp();const a=I1;n.cross(t,a),this.force.vadd(t,this.force),this.torque.vadd(a,this.torque)}applyLocalForce(t,n){if(n===void 0&&(n=new C),this.type!==Gt.DYNAMIC)return;const a=F1,r=H1;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyForce(a,r)}applyTorque(t){this.type===Gt.DYNAMIC&&(this.sleepState===Gt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,n){if(n===void 0&&(n=new C),this.type!==Gt.DYNAMIC)return;this.sleepState===Gt.SLEEPING&&this.wakeUp();const a=n,r=G1;r.copy(t),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const l=V1;a.cross(t,l),this.invInertiaWorld.vmult(l,l),this.angularVelocity.vadd(l,this.angularVelocity)}applyLocalImpulse(t,n){if(n===void 0&&(n=new C),this.type!==Gt.DYNAMIC)return;const a=k1,r=q1;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyImpulse(a,r)}updateMassProperties(){const t=X1;this.invMass=this.mass>0?1/this.mass:0;const n=this.inertia,a=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),cl.calculateInertia(t,this.mass,n),this.invInertia.set(n.x>0&&!a?1/n.x:0,n.y>0&&!a?1/n.y:0,n.z>0&&!a?1/n.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,n){const a=new C;return t.vsub(this.position,a),this.angularVelocity.cross(a,n),this.velocity.vadd(n,n),n}integrate(t,n,a){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Gt.DYNAMIC||this.type===Gt.KINEMATIC)||this.sleepState===Gt.SLEEPING)return;const r=this.velocity,l=this.angularVelocity,u=this.position,f=this.force,d=this.torque,p=this.quaternion,g=this.invMass,v=this.invInertiaWorld,_=this.linearFactor,S=g*t;r.x+=f.x*S*_.x,r.y+=f.y*S*_.y,r.z+=f.z*S*_.z;const M=v.elements,b=this.angularFactor,x=d.x*b.x,y=d.y*b.y,T=d.z*b.z;l.x+=t*(M[0]*x+M[1]*y+M[2]*T),l.y+=t*(M[3]*x+M[4]*y+M[5]*T),l.z+=t*(M[6]*x+M[7]*y+M[8]*T),u.x+=r.x*t,u.y+=r.y*t,u.z+=r.z*t,p.integrate(this.angularVelocity,t,this.angularFactor,p),n&&(a?p.normalizeFast():p.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Gt.idCounter=0;Gt.COLLIDE_EVENT_NAME="collide";Gt.DYNAMIC=cp.DYNAMIC;Gt.STATIC=cp.STATIC;Gt.KINEMATIC=cp.KINEMATIC;Gt.AWAKE=up.AWAKE;Gt.SLEEPY=up.SLEEPY;Gt.SLEEPING=up.SLEEPING;Gt.wakeupEvent={type:"wakeup"};Gt.sleepyEvent={type:"sleepy"};Gt.sleepEvent={type:"sleep"};const N1=new C,O1=new fn,P1=new oi,z1=new Ri,B1=new Ri;new Ri;const I1=new C,F1=new C,H1=new C,G1=new C,V1=new C,k1=new C,q1=new C,X1=new C;class W1{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,n,a){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,n){return!((t.collisionFilterGroup&n.collisionFilterMask)===0||(n.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Gt.STATIC)!==0||t.sleepState===Gt.SLEEPING)&&((n.type&Gt.STATIC)!==0||n.sleepState===Gt.SLEEPING))}intersectionTest(t,n,a,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,n,a,r):this.doBoundingSphereBroadphase(t,n,a,r)}doBoundingSphereBroadphase(t,n,a,r){const l=Y1;n.position.vsub(t.position,l);const u=(t.boundingRadius+n.boundingRadius)**2;l.lengthSquared()<u&&(a.push(t),r.push(n))}doBoundingBoxBroadphase(t,n,a,r){t.aabbNeedsUpdate&&t.updateAABB(),n.aabbNeedsUpdate&&n.updateAABB(),t.aabb.overlaps(n.aabb)&&(a.push(t),r.push(n))}makePairsUnique(t,n){const a=j1,r=Z1,l=K1,u=t.length;for(let f=0;f!==u;f++)r[f]=t[f],l[f]=n[f];t.length=0,n.length=0;for(let f=0;f!==u;f++){const d=r[f].id,p=l[f].id,g=d<p?`${d},${p}`:`${p},${d}`;a[g]=f,a.keys.push(g)}for(let f=0;f!==a.keys.length;f++){const d=a.keys.pop(),p=a[d];t.push(r[p]),n.push(l[p]),delete a[d]}}setWorld(t){}static boundingSphereCheck(t,n){const a=new C;t.position.vsub(n.position,a);const r=t.shapes[0],l=n.shapes[0];return Math.pow(r.boundingSphereRadius+l.boundingSphereRadius,2)>a.lengthSquared()}aabbQuery(t,n,a){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Y1=new C;new C;new fn;new C;const j1={keys:[]},Z1=[],K1=[];new C;new C;new C;class Q1 extends W1{constructor(){super()}collisionPairs(t,n,a){const r=t.bodies,l=r.length;let u,f;for(let d=0;d!==l;d++)for(let p=0;p!==d;p++)u=r[d],f=r[p],this.needBroadphaseCollision(u,f)&&this.intersectionTest(u,f,n,a)}aabbQuery(t,n,a){a===void 0&&(a=[]);for(let r=0;r<t.bodies.length;r++){const l=t.bodies[r];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(n)&&a.push(l)}return a}}class hu{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,n,a,r,l,u,f){this.rayFromWorld.copy(t),this.rayToWorld.copy(n),this.hitNormalWorld.copy(a),this.hitPointWorld.copy(r),this.shape=l,this.body=u,this.distance=f}}let Y0,j0,Z0,K0,Q0,J0,$0;const fp={CLOSEST:1,ANY:2,ALL:4};Y0=Vt.types.SPHERE;j0=Vt.types.PLANE;Z0=Vt.types.BOX;K0=Vt.types.CYLINDER;Q0=Vt.types.CONVEXPOLYHEDRON;J0=Vt.types.HEIGHTFIELD;$0=Vt.types.TRIMESH;class un{get[Y0](){return this._intersectSphere}get[j0](){return this._intersectPlane}get[Z0](){return this._intersectBox}get[K0](){return this._intersectConvex}get[Q0](){return this._intersectConvex}get[J0](){return this._intersectHeightfield}get[$0](){return this._intersectTrimesh}constructor(t,n){t===void 0&&(t=new C),n===void 0&&(n=new C),this.from=t.clone(),this.to=n.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=un.ANY,this.result=new hu,this.hasHit=!1,this.callback=a=>{}}intersectWorld(t,n){return this.mode=n.mode||un.ANY,this.result=n.result||new hu,this.skipBackfaces=!!n.skipBackfaces,this.collisionFilterMask=typeof n.collisionFilterMask<"u"?n.collisionFilterMask:-1,this.collisionFilterGroup=typeof n.collisionFilterGroup<"u"?n.collisionFilterGroup:-1,this.checkCollisionResponse=typeof n.checkCollisionResponse<"u"?n.checkCollisionResponse:!0,n.from&&this.from.copy(n.from),n.to&&this.to.copy(n.to),this.callback=n.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Jv),ad.length=0,t.broadphase.aabbQuery(t,Jv,ad),this.intersectBodies(ad),this.hasHit}intersectBody(t,n){n&&(this.result=n,this.updateDirection());const a=this.checkCollisionResponse;if(a&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=J1,l=$1;for(let u=0,f=t.shapes.length;u<f;u++){const d=t.shapes[u];if(!(a&&!d.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[u],l),t.quaternion.vmult(t.shapeOffsets[u],r),r.vadd(t.position,r),this.intersectShape(d,l,r,t),this.result.shouldStop))break}}intersectBodies(t,n){n&&(this.result=n,this.updateDirection());for(let a=0,r=t.length;!this.result.shouldStop&&a<r;a++)this.intersectBody(t[a])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,n,a,r){const l=this.from;if(dw(l,this.direction,a)>t.boundingSphereRadius)return;const f=this[t.type];f&&f.call(this,t,n,a,r,t)}_intersectBox(t,n,a,r,l){return this._intersectConvex(t.convexPolyhedronRepresentation,n,a,r,l)}_intersectPlane(t,n,a,r,l){const u=this.from,f=this.to,d=this.direction,p=new C(0,0,1);n.vmult(p,p);const g=new C;u.vsub(a,g);const v=g.dot(p);f.vsub(a,g);const _=g.dot(p);if(v*_>0||u.distanceTo(f)<v)return;const S=p.dot(d);if(Math.abs(S)<this.precision)return;const M=new C,b=new C,x=new C;u.vsub(a,M);const y=-p.dot(M)/S;d.scale(y,b),u.vadd(b,x),this.reportIntersection(p,x,l,r,-1)}getAABB(t){const{lowerBound:n,upperBound:a}=t,r=this.to,l=this.from;n.x=Math.min(r.x,l.x),n.y=Math.min(r.y,l.y),n.z=Math.min(r.z,l.z),a.x=Math.max(r.x,l.x),a.y=Math.max(r.y,l.y),a.z=Math.max(r.z,l.z)}_intersectHeightfield(t,n,a,r,l){t.data,t.elementSize;const u=tw;u.from.copy(this.from),u.to.copy(this.to),De.pointToLocalFrame(a,n,u.from,u.from),De.pointToLocalFrame(a,n,u.to,u.to),u.updateDirection();const f=ew;let d,p,g,v;d=p=0,g=v=t.data.length-1;const _=new oi;u.getAABB(_),t.getIndexOfPosition(_.lowerBound.x,_.lowerBound.y,f,!0),d=Math.max(d,f[0]),p=Math.max(p,f[1]),t.getIndexOfPosition(_.upperBound.x,_.upperBound.y,f,!0),g=Math.min(g,f[0]+1),v=Math.min(v,f[1]+1);for(let S=d;S<g;S++)for(let M=p;M<v;M++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(S,M,_),!!_.overlapsRay(u)){if(t.getConvexTrianglePillar(S,M,!1),De.pointToWorldFrame(a,n,t.pillarOffset,jc),this._intersectConvex(t.pillarConvex,n,jc,r,l,$v),this.result.shouldStop)return;t.getConvexTrianglePillar(S,M,!0),De.pointToWorldFrame(a,n,t.pillarOffset,jc),this._intersectConvex(t.pillarConvex,n,jc,r,l,$v)}}}_intersectSphere(t,n,a,r,l){const u=this.from,f=this.to,d=t.radius,p=(f.x-u.x)**2+(f.y-u.y)**2+(f.z-u.z)**2,g=2*((f.x-u.x)*(u.x-a.x)+(f.y-u.y)*(u.y-a.y)+(f.z-u.z)*(u.z-a.z)),v=(u.x-a.x)**2+(u.y-a.y)**2+(u.z-a.z)**2-d**2,_=g**2-4*p*v,S=nw,M=iw;if(!(_<0))if(_===0)u.lerp(f,_,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1);else{const b=(-g-Math.sqrt(_))/(2*p),x=(-g+Math.sqrt(_))/(2*p);if(b>=0&&b<=1&&(u.lerp(f,b,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1)),this.result.shouldStop)return;x>=0&&x<=1&&(u.lerp(f,x,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1))}}_intersectConvex(t,n,a,r,l,u){const f=aw,d=t0,p=u&&u.faceList||null,g=t.faces,v=t.vertices,_=t.faceNormals,S=this.direction,M=this.from,b=this.to,x=M.distanceTo(b),y=p?p.length:g.length,T=this.result;for(let U=0;!T.shouldStop&&U<y;U++){const A=p?p[U]:U,P=g[A],B=_[A],I=n,k=a;d.copy(v[P[0]]),I.vmult(d,d),d.vadd(k,d),d.vsub(M,d),I.vmult(B,f);const N=S.dot(f);if(Math.abs(N)<this.precision)continue;const w=f.dot(d)/N;if(!(w<0)){S.scale(w,Yn),Yn.vadd(M,Yn),Ti.copy(v[P[0]]),I.vmult(Ti,Ti),k.vadd(Ti,Ti);for(let H=1;!T.shouldStop&&H<P.length-1;H++){Bi.copy(v[P[H]]),Ii.copy(v[P[H+1]]),I.vmult(Bi,Bi),I.vmult(Ii,Ii),k.vadd(Bi,Bi),k.vadd(Ii,Ii);const nt=Yn.distanceTo(M);!(un.pointInTriangle(Yn,Ti,Bi,Ii)||un.pointInTriangle(Yn,Bi,Ti,Ii))||nt>x||this.reportIntersection(f,Yn,l,r,A)}}}}_intersectTrimesh(t,n,a,r,l,u){const f=sw,d=fw,p=hw,g=t0,v=rw,_=ow,S=lw,M=uw,b=cw,x=t.indices;t.vertices;const y=this.from,T=this.to,U=this.direction;p.position.copy(a),p.quaternion.copy(n),De.vectorToLocalFrame(a,n,U,v),De.pointToLocalFrame(a,n,y,_),De.pointToLocalFrame(a,n,T,S),S.x*=t.scale.x,S.y*=t.scale.y,S.z*=t.scale.z,_.x*=t.scale.x,_.y*=t.scale.y,_.z*=t.scale.z,S.vsub(_,v),v.normalize();const A=_.distanceSquared(S);t.tree.rayQuery(this,p,d);for(let P=0,B=d.length;!this.result.shouldStop&&P!==B;P++){const I=d[P];t.getNormal(I,f),t.getVertex(x[I*3],Ti),Ti.vsub(_,g);const k=v.dot(f),N=f.dot(g)/k;if(N<0)continue;v.scale(N,Yn),Yn.vadd(_,Yn),t.getVertex(x[I*3+1],Bi),t.getVertex(x[I*3+2],Ii);const w=Yn.distanceSquared(_);!(un.pointInTriangle(Yn,Bi,Ti,Ii)||un.pointInTriangle(Yn,Ti,Bi,Ii))||w>A||(De.vectorToWorldFrame(n,f,b),De.pointToWorldFrame(a,n,Yn,M),this.reportIntersection(b,M,l,r,I))}d.length=0}reportIntersection(t,n,a,r,l){const u=this.from,f=this.to,d=u.distanceTo(n),p=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(p.hitFaceIndex=typeof l<"u"?l:-1,this.mode){case un.ALL:this.hasHit=!0,p.set(u,f,t,n,a,r,d),p.hasHit=!0,this.callback(p);break;case un.CLOSEST:(d<p.distance||!p.hasHit)&&(this.hasHit=!0,p.hasHit=!0,p.set(u,f,t,n,a,r,d));break;case un.ANY:this.hasHit=!0,p.hasHit=!0,p.set(u,f,t,n,a,r,d),p.shouldStop=!0;break}}static pointInTriangle(t,n,a,r){r.vsub(n,Fs),a.vsub(n,$o),t.vsub(n,sd);const l=Fs.dot(Fs),u=Fs.dot($o),f=Fs.dot(sd),d=$o.dot($o),p=$o.dot(sd);let g,v;return(g=d*f-u*p)>=0&&(v=l*p-u*f)>=0&&g+v<l*d-u*u}}un.CLOSEST=fp.CLOSEST;un.ANY=fp.ANY;un.ALL=fp.ALL;const Jv=new oi,ad=[],$o=new C,sd=new C,J1=new C,$1=new fn,Yn=new C,Ti=new C,Bi=new C,Ii=new C;new C;new hu;const $v={faceList:[0]},jc=new C,tw=new un,ew=[],nw=new C,iw=new C,aw=new C;new C;new C;const t0=new C,sw=new C,rw=new C,ow=new C,lw=new C,cw=new C,uw=new C;new oi;const fw=[],hw=new De,Fs=new C,Zc=new C;function dw(c,t,n){n.vsub(c,Fs);const a=Fs.dot(t);return t.scale(a,Zc),Zc.vadd(c,Zc),n.distanceTo(Zc)}class pw{static defaults(t,n){t===void 0&&(t={});for(let a in n)a in t||(t[a]=n[a]);return t}}class e0{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,n){return t.dot(this.spatial)+n.dot(this.rotational)}}class pl{constructor(t,n,a,r){a===void 0&&(a=-1e6),r===void 0&&(r=1e6),this.id=pl.idCounter++,this.minForce=a,this.maxForce=r,this.bi=t,this.bj=n,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new e0,this.jacobianElementB=new e0,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,n,a){const r=n,l=t,u=a;this.a=4/(u*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(u*u*l*(1+4*r))}computeB(t,n,a){const r=this.computeGW(),l=this.computeGq(),u=this.computeGiMf();return-l*t-r*n-u*a}computeGq(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.position,u=r.position;return t.spatial.dot(l)+n.spatial.dot(u)}computeGW(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.velocity,u=r.velocity,f=a.angularVelocity,d=r.angularVelocity;return t.multiplyVectors(l,f)+n.multiplyVectors(u,d)}computeGWlambda(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.vlambda,u=r.vlambda,f=a.wlambda,d=r.wlambda;return t.multiplyVectors(l,f)+n.multiplyVectors(u,d)}computeGiMf(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.force,u=a.torque,f=r.force,d=r.torque,p=a.invMassSolve,g=r.invMassSolve;return l.scale(p,n0),f.scale(g,i0),a.invInertiaWorldSolve.vmult(u,a0),r.invInertiaWorldSolve.vmult(d,s0),t.multiplyVectors(n0,a0)+n.multiplyVectors(i0,s0)}computeGiMGt(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.invMassSolve,u=r.invMassSolve,f=a.invInertiaWorldSolve,d=r.invInertiaWorldSolve;let p=l+u;return f.vmult(t.rotational,Kc),p+=Kc.dot(t.rotational),d.vmult(n.rotational,Kc),p+=Kc.dot(n.rotational),p}addToWlambda(t){const n=this.jacobianElementA,a=this.jacobianElementB,r=this.bi,l=this.bj,u=mw;r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),l.vlambda.addScaledVector(l.invMassSolve*t,a.spatial,l.vlambda),r.invInertiaWorldSolve.vmult(n.rotational,u),r.wlambda.addScaledVector(t,u,r.wlambda),l.invInertiaWorldSolve.vmult(a.rotational,u),l.wlambda.addScaledVector(t,u,l.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}pl.idCounter=0;const n0=new C,i0=new C,a0=new C,s0=new C,Kc=new C,mw=new C;class gw extends pl{constructor(t,n,a){a===void 0&&(a=1e6),super(t,n,0,a),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(t){const n=this.a,a=this.b,r=this.bi,l=this.bj,u=this.ri,f=this.rj,d=_w,p=vw,g=r.velocity,v=r.angularVelocity;r.force,r.torque;const _=l.velocity,S=l.angularVelocity;l.force,l.torque;const M=yw,b=this.jacobianElementA,x=this.jacobianElementB,y=this.ni;u.cross(y,d),f.cross(y,p),y.negate(b.spatial),d.negate(b.rotational),x.spatial.copy(y),x.rotational.copy(p),M.copy(l.position),M.vadd(f,M),M.vsub(r.position,M),M.vsub(u,M);const T=y.dot(M),U=this.restitution+1,A=U*_.dot(y)-U*g.dot(y)+S.dot(p)-v.dot(d),P=this.computeGiMf();return-T*n-A*a-t*P}getImpactVelocityAlongNormal(){const t=xw,n=Sw,a=Mw,r=Ew,l=bw;return this.bi.position.vadd(this.ri,a),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(a,t),this.bj.getVelocityAtWorldPoint(r,n),t.vsub(n,l),this.ni.dot(l)}}const _w=new C,vw=new C,yw=new C,xw=new C,Sw=new C,Mw=new C,Ew=new C,bw=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class r0 extends pl{constructor(t,n,a){super(t,n,-a,a),this.ri=new C,this.rj=new C,this.t=new C}computeB(t){this.a;const n=this.b;this.bi,this.bj;const a=this.ri,r=this.rj,l=Tw,u=Aw,f=this.t;a.cross(f,l),r.cross(f,u);const d=this.jacobianElementA,p=this.jacobianElementB;f.negate(d.spatial),l.negate(d.rotational),p.spatial.copy(f),p.rotational.copy(u);const g=this.computeGW(),v=this.computeGiMf();return-g*n-t*v}}const Tw=new C,Aw=new C;class ml{constructor(t,n,a){a=pw.defaults(a,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ml.idCounter++,this.materials=[t,n],this.friction=a.friction,this.restitution=a.restitution,this.contactEquationStiffness=a.contactEquationStiffness,this.contactEquationRelaxation=a.contactEquationRelaxation,this.frictionEquationStiffness=a.frictionEquationStiffness,this.frictionEquationRelaxation=a.frictionEquationRelaxation}}ml.idCounter=0;class Qr{constructor(t){t===void 0&&(t={});let n="";typeof t=="string"&&(n=t,t={}),this.name=n,this.id=Qr.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Qr.idCounter=0;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new un;new C;new C;new C;new C(1,0,0),new C(0,1,0),new C(0,0,1);new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new oi;new C;new oi;new C;new C;new C;new C;new C;new C;new C;new oi;new C;new De;new oi;class ww{constructor(){this.equations=[]}solve(t,n){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const n=this.equations,a=n.indexOf(t);a!==-1&&n.splice(a,1)}removeAllEquations(){this.equations.length=0}}class Rw extends ww{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,n){let a=0;const r=this.iterations,l=this.tolerance*this.tolerance,u=this.equations,f=u.length,d=n.bodies,p=d.length,g=t;let v,_,S,M,b,x;if(f!==0)for(let A=0;A!==p;A++)d[A].updateSolveMassProperties();const y=Dw,T=Uw,U=Cw;y.length=f,T.length=f,U.length=f;for(let A=0;A!==f;A++){const P=u[A];U[A]=0,T[A]=P.computeB(g),y[A]=1/P.computeC()}if(f!==0){for(let B=0;B!==p;B++){const I=d[B],k=I.vlambda,N=I.wlambda;k.set(0,0,0),N.set(0,0,0)}for(a=0;a!==r;a++){M=0;for(let B=0;B!==f;B++){const I=u[B];v=T[B],_=y[B],x=U[B],b=I.computeGWlambda(),S=_*(v-b-I.eps*x),x+S<I.minForce?S=I.minForce-x:x+S>I.maxForce&&(S=I.maxForce-x),U[B]+=S,M+=S>0?S:-S,I.addToWlambda(S)}if(M*M<l)break}for(let B=0;B!==p;B++){const I=d[B],k=I.velocity,N=I.angularVelocity;I.vlambda.vmul(I.linearFactor,I.vlambda),k.vadd(I.vlambda,k),I.wlambda.vmul(I.angularFactor,I.wlambda),N.vadd(I.wlambda,N)}let A=u.length;const P=1/g;for(;A--;)u[A].multiplier=U[A]*P}return a}}const Cw=[],Dw=[],Uw=[];class Lw{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let n=0;n!==t;n++)this.objects.push(n<0||arguments.length<=n?void 0:arguments[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const n=this.objects;for(;n.length>t;)n.pop();for(;n.length<t;)n.push(this.constructObject());return this}}class Nw extends Lw{constructor(){super(...arguments),this.type=C}constructObject(){return new C}}const Ze={sphereSphere:Vt.types.SPHERE,spherePlane:Vt.types.SPHERE|Vt.types.PLANE,boxBox:Vt.types.BOX|Vt.types.BOX,sphereBox:Vt.types.SPHERE|Vt.types.BOX,planeBox:Vt.types.PLANE|Vt.types.BOX,convexConvex:Vt.types.CONVEXPOLYHEDRON,sphereConvex:Vt.types.SPHERE|Vt.types.CONVEXPOLYHEDRON,planeConvex:Vt.types.PLANE|Vt.types.CONVEXPOLYHEDRON,boxConvex:Vt.types.BOX|Vt.types.CONVEXPOLYHEDRON,sphereHeightfield:Vt.types.SPHERE|Vt.types.HEIGHTFIELD,boxHeightfield:Vt.types.BOX|Vt.types.HEIGHTFIELD,convexHeightfield:Vt.types.CONVEXPOLYHEDRON|Vt.types.HEIGHTFIELD,sphereParticle:Vt.types.PARTICLE|Vt.types.SPHERE,planeParticle:Vt.types.PLANE|Vt.types.PARTICLE,boxParticle:Vt.types.BOX|Vt.types.PARTICLE,convexParticle:Vt.types.PARTICLE|Vt.types.CONVEXPOLYHEDRON,cylinderCylinder:Vt.types.CYLINDER,sphereCylinder:Vt.types.SPHERE|Vt.types.CYLINDER,planeCylinder:Vt.types.PLANE|Vt.types.CYLINDER,boxCylinder:Vt.types.BOX|Vt.types.CYLINDER,convexCylinder:Vt.types.CONVEXPOLYHEDRON|Vt.types.CYLINDER,heightfieldCylinder:Vt.types.HEIGHTFIELD|Vt.types.CYLINDER,particleCylinder:Vt.types.PARTICLE|Vt.types.CYLINDER,sphereTrimesh:Vt.types.SPHERE|Vt.types.TRIMESH,planeTrimesh:Vt.types.PLANE|Vt.types.TRIMESH};class Ow{get[Ze.sphereSphere](){return this.sphereSphere}get[Ze.spherePlane](){return this.spherePlane}get[Ze.boxBox](){return this.boxBox}get[Ze.sphereBox](){return this.sphereBox}get[Ze.planeBox](){return this.planeBox}get[Ze.convexConvex](){return this.convexConvex}get[Ze.sphereConvex](){return this.sphereConvex}get[Ze.planeConvex](){return this.planeConvex}get[Ze.boxConvex](){return this.boxConvex}get[Ze.sphereHeightfield](){return this.sphereHeightfield}get[Ze.boxHeightfield](){return this.boxHeightfield}get[Ze.convexHeightfield](){return this.convexHeightfield}get[Ze.sphereParticle](){return this.sphereParticle}get[Ze.planeParticle](){return this.planeParticle}get[Ze.boxParticle](){return this.boxParticle}get[Ze.convexParticle](){return this.convexParticle}get[Ze.cylinderCylinder](){return this.convexConvex}get[Ze.sphereCylinder](){return this.sphereConvex}get[Ze.planeCylinder](){return this.planeConvex}get[Ze.boxCylinder](){return this.boxConvex}get[Ze.convexCylinder](){return this.convexConvex}get[Ze.heightfieldCylinder](){return this.heightfieldCylinder}get[Ze.particleCylinder](){return this.particleCylinder}get[Ze.sphereTrimesh](){return this.sphereTrimesh}get[Ze.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Nw,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,n,a,r,l,u){let f;this.contactPointPool.length?(f=this.contactPointPool.pop(),f.bi=t,f.bj=n):f=new gw(t,n),f.enabled=t.collisionResponse&&n.collisionResponse&&a.collisionResponse&&r.collisionResponse;const d=this.currentContactMaterial;f.restitution=d.restitution,f.setSpookParams(d.contactEquationStiffness,d.contactEquationRelaxation,this.world.dt);const p=a.material||t.material,g=r.material||n.material;return p&&g&&p.restitution>=0&&g.restitution>=0&&(f.restitution=p.restitution*g.restitution),f.si=l||a,f.sj=u||r,f}createFrictionEquationsFromContact(t,n){const a=t.bi,r=t.bj,l=t.si,u=t.sj,f=this.world,d=this.currentContactMaterial;let p=d.friction;const g=l.material||a.material,v=u.material||r.material;if(g&&v&&g.friction>=0&&v.friction>=0&&(p=g.friction*v.friction),p>0){const _=p*(f.frictionGravity||f.gravity).length();let S=a.invMass+r.invMass;S>0&&(S=1/S);const M=this.frictionEquationPool,b=M.length?M.pop():new r0(a,r,_*S),x=M.length?M.pop():new r0(a,r,_*S);return b.bi=x.bi=a,b.bj=x.bj=r,b.minForce=x.minForce=-_*S,b.maxForce=x.maxForce=_*S,b.ri.copy(t.ri),b.rj.copy(t.rj),x.ri.copy(t.ri),x.rj.copy(t.rj),t.ni.tangents(b.t,x.t),b.setSpookParams(d.frictionEquationStiffness,d.frictionEquationRelaxation,f.dt),x.setSpookParams(d.frictionEquationStiffness,d.frictionEquationRelaxation,f.dt),b.enabled=x.enabled=t.enabled,n.push(b,x),!0}return!1}createFrictionFromAverage(t){let n=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(n,this.frictionResult)||t===1)return;const a=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Ps.setZero(),Ir.setZero(),Fr.setZero();const l=n.bi;n.bj;for(let f=0;f!==t;f++)n=this.result[this.result.length-1-f],n.bi!==l?(Ps.vadd(n.ni,Ps),Ir.vadd(n.ri,Ir),Fr.vadd(n.rj,Fr)):(Ps.vsub(n.ni,Ps),Ir.vadd(n.rj,Ir),Fr.vadd(n.ri,Fr));const u=1/t;Ir.scale(u,a.ri),Fr.scale(u,a.rj),r.ri.copy(a.ri),r.rj.copy(a.rj),Ps.normalize(),Ps.tangents(a.t,r.t)}getContacts(t,n,a,r,l,u,f){this.contactPointPool=l,this.frictionEquationPool=f,this.result=r,this.frictionResult=u;const d=Bw,p=Iw,g=Pw,v=zw;for(let _=0,S=t.length;_!==S;_++){const M=t[_],b=n[_];let x=null;M.material&&b.material&&(x=a.getContactMaterial(M.material,b.material)||null);const y=M.type&Gt.KINEMATIC&&b.type&Gt.STATIC||M.type&Gt.STATIC&&b.type&Gt.KINEMATIC||M.type&Gt.KINEMATIC&&b.type&Gt.KINEMATIC;for(let T=0;T<M.shapes.length;T++){M.quaternion.mult(M.shapeOrientations[T],d),M.quaternion.vmult(M.shapeOffsets[T],g),g.vadd(M.position,g);const U=M.shapes[T];for(let A=0;A<b.shapes.length;A++){b.quaternion.mult(b.shapeOrientations[A],p),b.quaternion.vmult(b.shapeOffsets[A],v),v.vadd(b.position,v);const P=b.shapes[A];if(!(U.collisionFilterMask&P.collisionFilterGroup&&P.collisionFilterMask&U.collisionFilterGroup)||g.distanceTo(v)>U.boundingSphereRadius+P.boundingSphereRadius)continue;let B=null;U.material&&P.material&&(B=a.getContactMaterial(U.material,P.material)||null),this.currentContactMaterial=B||x||a.defaultContactMaterial;const I=U.type|P.type,k=this[I];if(k){let N=!1;U.type<P.type?N=k.call(this,U,P,g,v,d,p,M,b,U,P,y):N=k.call(this,P,U,v,g,p,d,b,M,U,P,y),N&&y&&(a.shapeOverlapKeeper.set(U.id,P.id),a.bodyOverlapKeeper.set(M.id,b.id))}}}}}sphereSphere(t,n,a,r,l,u,f,d,p,g,v){if(v)return a.distanceSquared(r)<(t.radius+n.radius)**2;const _=this.createContactEquation(f,d,t,n,p,g);r.vsub(a,_.ni),_.ni.normalize(),_.ri.copy(_.ni),_.rj.copy(_.ni),_.ri.scale(t.radius,_.ri),_.rj.scale(-n.radius,_.rj),_.ri.vadd(a,_.ri),_.ri.vsub(f.position,_.ri),_.rj.vadd(r,_.rj),_.rj.vsub(d.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}spherePlane(t,n,a,r,l,u,f,d,p,g,v){const _=this.createContactEquation(f,d,t,n,p,g);if(_.ni.set(0,0,1),u.vmult(_.ni,_.ni),_.ni.negate(_.ni),_.ni.normalize(),_.ni.scale(t.radius,_.ri),a.vsub(r,Qc),_.ni.scale(_.ni.dot(Qc),o0),Qc.vsub(o0,_.rj),-Qc.dot(_.ni)<=t.radius){if(v)return!0;const S=_.ri,M=_.rj;S.vadd(a,S),S.vsub(f.position,S),M.vadd(r,M),M.vsub(d.position,M),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxBox(t,n,a,r,l,u,f,d,p,g,v){return t.convexPolyhedronRepresentation.material=t.material,n.convexPolyhedronRepresentation.material=n.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n.convexPolyhedronRepresentation,a,r,l,u,f,d,t,n,v)}sphereBox(t,n,a,r,l,u,f,d,p,g,v){const _=this.v3pool,S=uR;a.vsub(r,Jc),n.getSideNormals(S,u);const M=t.radius;let b=!1;const x=hR,y=dR,T=pR;let U=null,A=0,P=0,B=0,I=null;for(let O=0,Z=S.length;O!==Z&&b===!1;O++){const q=oR;q.copy(S[O]);const ct=q.length();q.normalize();const z=Jc.dot(q);if(z<ct+M&&z>0){const J=lR,st=cR;J.copy(S[(O+1)%3]),st.copy(S[(O+2)%3]);const xt=J.length(),tt=st.length();J.normalize(),st.normalize();const gt=Jc.dot(J),Mt=Jc.dot(st);if(gt<xt&&gt>-xt&&Mt<tt&&Mt>-tt){const wt=Math.abs(z-ct-M);if((I===null||wt<I)&&(I=wt,P=gt,B=Mt,U=ct,x.copy(q),y.copy(J),T.copy(st),A++,v))return!0}}}if(A){b=!0;const O=this.createContactEquation(f,d,t,n,p,g);x.scale(-M,O.ri),O.ni.copy(x),O.ni.negate(O.ni),x.scale(U,x),y.scale(P,y),x.vadd(y,x),T.scale(B,T),x.vadd(T,O.rj),O.ri.vadd(a,O.ri),O.ri.vsub(f.position,O.ri),O.rj.vadd(r,O.rj),O.rj.vsub(d.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}let k=_.get();const N=fR;for(let O=0;O!==2&&!b;O++)for(let Z=0;Z!==2&&!b;Z++)for(let q=0;q!==2&&!b;q++)if(k.set(0,0,0),O?k.vadd(S[0],k):k.vsub(S[0],k),Z?k.vadd(S[1],k):k.vsub(S[1],k),q?k.vadd(S[2],k):k.vsub(S[2],k),r.vadd(k,N),N.vsub(a,N),N.lengthSquared()<M*M){if(v)return!0;b=!0;const ct=this.createContactEquation(f,d,t,n,p,g);ct.ri.copy(N),ct.ri.normalize(),ct.ni.copy(ct.ri),ct.ri.scale(M,ct.ri),ct.rj.copy(k),ct.ri.vadd(a,ct.ri),ct.ri.vsub(f.position,ct.ri),ct.rj.vadd(r,ct.rj),ct.rj.vsub(d.position,ct.rj),this.result.push(ct),this.createFrictionEquationsFromContact(ct,this.frictionResult)}_.release(k),k=null;const w=_.get(),H=_.get(),nt=_.get(),V=_.get(),K=_.get(),Y=S.length;for(let O=0;O!==Y&&!b;O++)for(let Z=0;Z!==Y&&!b;Z++)if(O%3!==Z%3){S[Z].cross(S[O],w),w.normalize(),S[O].vadd(S[Z],H),nt.copy(a),nt.vsub(H,nt),nt.vsub(r,nt);const q=nt.dot(w);w.scale(q,V);let ct=0;for(;ct===O%3||ct===Z%3;)ct++;K.copy(a),K.vsub(V,K),K.vsub(H,K),K.vsub(r,K);const z=Math.abs(q),J=K.length();if(z<S[ct].length()&&J<M){if(v)return!0;b=!0;const st=this.createContactEquation(f,d,t,n,p,g);H.vadd(V,st.rj),st.rj.copy(st.rj),K.negate(st.ni),st.ni.normalize(),st.ri.copy(st.rj),st.ri.vadd(r,st.ri),st.ri.vsub(a,st.ri),st.ri.normalize(),st.ri.scale(M,st.ri),st.ri.vadd(a,st.ri),st.ri.vsub(f.position,st.ri),st.rj.vadd(r,st.rj),st.rj.vsub(d.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}_.release(w,H,nt,V,K)}planeBox(t,n,a,r,l,u,f,d,p,g,v){return n.convexPolyhedronRepresentation.material=n.material,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,n.convexPolyhedronRepresentation.id=n.id,this.planeConvex(t,n.convexPolyhedronRepresentation,a,r,l,u,f,d,t,n,v)}convexConvex(t,n,a,r,l,u,f,d,p,g,v,_,S){const M=CR;if(!(a.distanceTo(r)>t.boundingSphereRadius+n.boundingSphereRadius)&&t.findSeparatingAxis(n,a,l,r,u,M,_,S)){const b=[],x=DR;t.clipAgainstHull(a,l,n,r,u,M,-100,100,b);let y=0;for(let T=0;T!==b.length;T++){if(v)return!0;const U=this.createContactEquation(f,d,t,n,p,g),A=U.ri,P=U.rj;M.negate(U.ni),b[T].normal.negate(x),x.scale(b[T].depth,x),b[T].point.vadd(x,A),P.copy(b[T].point),A.vsub(a,A),P.vsub(r,P),A.vadd(a,A),A.vsub(f.position,A),P.vadd(r,P),P.vsub(d.position,P),this.result.push(U),y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(U,this.frictionResult)}this.enableFrictionReduction&&y&&this.createFrictionFromAverage(y)}}sphereConvex(t,n,a,r,l,u,f,d,p,g,v){const _=this.v3pool;a.vsub(r,mR);const S=n.faceNormals,M=n.faces,b=n.vertices,x=t.radius;let y=!1;for(let T=0;T!==b.length;T++){const U=b[T],A=yR;u.vmult(U,A),r.vadd(A,A);const P=vR;if(A.vsub(a,P),P.lengthSquared()<x*x){if(v)return!0;y=!0;const B=this.createContactEquation(f,d,t,n,p,g);B.ri.copy(P),B.ri.normalize(),B.ni.copy(B.ri),B.ri.scale(x,B.ri),A.vsub(r,B.rj),B.ri.vadd(a,B.ri),B.ri.vsub(f.position,B.ri),B.rj.vadd(r,B.rj),B.rj.vsub(d.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);return}}for(let T=0,U=M.length;T!==U&&y===!1;T++){const A=S[T],P=M[T],B=xR;u.vmult(A,B);const I=SR;u.vmult(b[P[0]],I),I.vadd(r,I);const k=MR;B.scale(-x,k),a.vadd(k,k);const N=ER;k.vsub(I,N);const w=N.dot(B),H=bR;if(a.vsub(I,H),w<0&&H.dot(B)>0){const nt=[];for(let V=0,K=P.length;V!==K;V++){const Y=_.get();u.vmult(b[P[V]],Y),r.vadd(Y,Y),nt.push(Y)}if(rR(nt,B,a)){if(v)return!0;y=!0;const V=this.createContactEquation(f,d,t,n,p,g);B.scale(-x,V.ri),B.negate(V.ni);const K=_.get();B.scale(-w,K);const Y=_.get();B.scale(-x,Y),a.vsub(r,V.rj),V.rj.vadd(Y,V.rj),V.rj.vadd(K,V.rj),V.rj.vadd(r,V.rj),V.rj.vsub(d.position,V.rj),V.ri.vadd(a,V.ri),V.ri.vsub(f.position,V.ri),_.release(K),_.release(Y),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(let O=0,Z=nt.length;O!==Z;O++)_.release(nt[O]);return}else for(let V=0;V!==P.length;V++){const K=_.get(),Y=_.get();u.vmult(b[P[(V+1)%P.length]],K),u.vmult(b[P[(V+2)%P.length]],Y),r.vadd(K,K),r.vadd(Y,Y);const O=gR;Y.vsub(K,O);const Z=_R;O.unit(Z);const q=_.get(),ct=_.get();a.vsub(K,ct);const z=ct.dot(Z);Z.scale(z,q),q.vadd(K,q);const J=_.get();if(q.vsub(a,J),z>0&&z*z<O.lengthSquared()&&J.lengthSquared()<x*x){if(v)return!0;const st=this.createContactEquation(f,d,t,n,p,g);q.vsub(r,st.rj),q.vsub(a,st.ni),st.ni.normalize(),st.ni.scale(x,st.ri),st.rj.vadd(r,st.rj),st.rj.vsub(d.position,st.rj),st.ri.vadd(a,st.ri),st.ri.vsub(f.position,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult);for(let xt=0,tt=nt.length;xt!==tt;xt++)_.release(nt[xt]);_.release(K),_.release(Y),_.release(q),_.release(J),_.release(ct);return}_.release(K),_.release(Y),_.release(q),_.release(J),_.release(ct)}for(let V=0,K=nt.length;V!==K;V++)_.release(nt[V])}}}planeConvex(t,n,a,r,l,u,f,d,p,g,v){const _=TR,S=AR;S.set(0,0,1),l.vmult(S,S);let M=0;const b=wR;for(let x=0;x!==n.vertices.length;x++)if(_.copy(n.vertices[x]),u.vmult(_,_),r.vadd(_,_),_.vsub(a,b),S.dot(b)<=0){if(v)return!0;const T=this.createContactEquation(f,d,t,n,p,g),U=RR;S.scale(S.dot(b),U),_.vsub(U,U),U.vsub(a,T.ri),T.ni.copy(S),_.vsub(r,T.rj),T.ri.vadd(a,T.ri),T.ri.vsub(f.position,T.ri),T.rj.vadd(r,T.rj),T.rj.vsub(d.position,T.rj),this.result.push(T),M++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}this.enableFrictionReduction&&M&&this.createFrictionFromAverage(M)}boxConvex(t,n,a,r,l,u,f,d,p,g,v){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n,a,r,l,u,f,d,t,n,v)}sphereHeightfield(t,n,a,r,l,u,f,d,p,g,v){const _=n.data,S=t.radius,M=n.elementSize,b=VR,x=GR;De.pointToLocalFrame(r,u,a,x);let y=Math.floor((x.x-S)/M)-1,T=Math.ceil((x.x+S)/M)+1,U=Math.floor((x.y-S)/M)-1,A=Math.ceil((x.y+S)/M)+1;if(T<0||A<0||y>_.length||U>_[0].length)return;y<0&&(y=0),T<0&&(T=0),U<0&&(U=0),A<0&&(A=0),y>=_.length&&(y=_.length-1),T>=_.length&&(T=_.length-1),A>=_[0].length&&(A=_[0].length-1),U>=_[0].length&&(U=_[0].length-1);const P=[];n.getRectMinMax(y,U,T,A,P);const B=P[0],I=P[1];if(x.z-S>I||x.z+S<B)return;const k=this.result;for(let N=y;N<T;N++)for(let w=U;w<A;w++){const H=k.length;let nt=!1;if(n.getConvexTrianglePillar(N,w,!1),De.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(nt=this.sphereConvex(t,n.pillarConvex,a,b,l,u,f,d,t,n,v)),v&&nt||(n.getConvexTrianglePillar(N,w,!0),De.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(nt=this.sphereConvex(t,n.pillarConvex,a,b,l,u,f,d,t,n,v)),v&&nt))return!0;if(k.length-H>2)return}}boxHeightfield(t,n,a,r,l,u,f,d,p,g,v){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,n,a,r,l,u,f,d,t,n,v)}convexHeightfield(t,n,a,r,l,u,f,d,p,g,v){const _=n.data,S=n.elementSize,M=t.boundingSphereRadius,b=FR,x=HR,y=IR;De.pointToLocalFrame(r,u,a,y);let T=Math.floor((y.x-M)/S)-1,U=Math.ceil((y.x+M)/S)+1,A=Math.floor((y.y-M)/S)-1,P=Math.ceil((y.y+M)/S)+1;if(U<0||P<0||T>_.length||A>_[0].length)return;T<0&&(T=0),U<0&&(U=0),A<0&&(A=0),P<0&&(P=0),T>=_.length&&(T=_.length-1),U>=_.length&&(U=_.length-1),P>=_[0].length&&(P=_[0].length-1),A>=_[0].length&&(A=_[0].length-1);const B=[];n.getRectMinMax(T,A,U,P,B);const I=B[0],k=B[1];if(!(y.z-M>k||y.z+M<I))for(let N=T;N<U;N++)for(let w=A;w<P;w++){let H=!1;if(n.getConvexTrianglePillar(N,w,!1),De.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,n.pillarConvex,a,b,l,u,f,d,null,null,v,x,null)),v&&H||(n.getConvexTrianglePillar(N,w,!0),De.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,n.pillarConvex,a,b,l,u,f,d,null,null,v,x,null)),v&&H))return!0}}sphereParticle(t,n,a,r,l,u,f,d,p,g,v){const _=OR;if(_.set(0,0,1),r.vsub(a,_),_.lengthSquared()<=t.radius*t.radius){if(v)return!0;const M=this.createContactEquation(d,f,n,t,p,g);_.normalize(),M.rj.copy(_),M.rj.scale(t.radius,M.rj),M.ni.copy(_),M.ni.negate(M.ni),M.ri.set(0,0,0),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}planeParticle(t,n,a,r,l,u,f,d,p,g,v){const _=UR;_.set(0,0,1),f.quaternion.vmult(_,_);const S=LR;if(r.vsub(f.position,S),_.dot(S)<=0){if(v)return!0;const b=this.createContactEquation(d,f,n,t,p,g);b.ni.copy(_),b.ni.negate(b.ni),b.ri.set(0,0,0);const x=NR;_.scale(_.dot(r),x),r.vsub(x,x),b.rj.copy(x),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}}boxParticle(t,n,a,r,l,u,f,d,p,g,v){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,n,a,r,l,u,f,d,t,n,v)}convexParticle(t,n,a,r,l,u,f,d,p,g,v){let _=-1;const S=zR,M=BR;let b=null;const x=PR;if(x.copy(r),x.vsub(a,x),l.conjugate(l0),l0.vmult(x,x),t.pointIsInside(x)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(a,l),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(l);for(let y=0,T=t.faces.length;y!==T;y++){const U=[t.worldVertices[t.faces[y][0]]],A=t.worldFaceNormals[y];r.vsub(U[0],c0);const P=-A.dot(c0);if(b===null||Math.abs(P)<Math.abs(b)){if(v)return!0;b=P,_=y,S.copy(A)}}if(_!==-1){const y=this.createContactEquation(d,f,n,t,p,g);S.scale(b,M),M.vadd(r,M),M.vsub(a,M),y.rj.copy(M),S.negate(y.ni),y.ri.set(0,0,0);const T=y.ri,U=y.rj;T.vadd(r,T),T.vsub(d.position,T),U.vadd(a,U),U.vsub(f.position,U),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,n,a,r,l,u,f,d,p,g,v){return this.convexHeightfield(n,t,r,a,u,l,d,f,p,g,v)}particleCylinder(t,n,a,r,l,u,f,d,p,g,v){return this.convexParticle(n,t,r,a,u,l,d,f,p,g,v)}sphereTrimesh(t,n,a,r,l,u,f,d,p,g,v){const _=Ww,S=Yw,M=jw,b=Zw,x=Kw,y=Qw,T=eR,U=Xw,A=kw,P=nR;De.pointToLocalFrame(r,u,a,x);const B=t.radius;T.lowerBound.set(x.x-B,x.y-B,x.z-B),T.upperBound.set(x.x+B,x.y+B,x.z+B),n.getTrianglesInAABB(T,P);const I=qw,k=t.radius*t.radius;for(let V=0;V<P.length;V++)for(let K=0;K<3;K++)if(n.getVertex(n.indices[P[V]*3+K],I),I.vsub(x,A),A.lengthSquared()<=k){if(U.copy(I),De.pointToWorldFrame(r,u,U,I),I.vsub(a,A),v)return!0;let Y=this.createContactEquation(f,d,t,n,p,g);Y.ni.copy(A),Y.ni.normalize(),Y.ri.copy(Y.ni),Y.ri.scale(t.radius,Y.ri),Y.ri.vadd(a,Y.ri),Y.ri.vsub(f.position,Y.ri),Y.rj.copy(I),Y.rj.vsub(d.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}for(let V=0;V<P.length;V++)for(let K=0;K<3;K++){n.getVertex(n.indices[P[V]*3+K],_),n.getVertex(n.indices[P[V]*3+(K+1)%3],S),S.vsub(_,M),x.vsub(S,y);const Y=y.dot(M);x.vsub(_,y);let O=y.dot(M);if(O>0&&Y<0&&(x.vsub(_,y),b.copy(M),b.normalize(),O=y.dot(b),b.scale(O,y),y.vadd(_,y),y.distanceTo(x)<t.radius)){if(v)return!0;const q=this.createContactEquation(f,d,t,n,p,g);y.vsub(x,q.ni),q.ni.normalize(),q.ni.scale(t.radius,q.ri),q.ri.vadd(a,q.ri),q.ri.vsub(f.position,q.ri),De.pointToWorldFrame(r,u,y,y),y.vsub(d.position,q.rj),De.vectorToWorldFrame(u,q.ni,q.ni),De.vectorToWorldFrame(u,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}const N=Jw,w=$w,H=tR,nt=Vw;for(let V=0,K=P.length;V!==K;V++){n.getTriangleVertices(P[V],N,w,H),n.getNormal(P[V],nt),x.vsub(N,y);let Y=y.dot(nt);if(nt.scale(Y,y),x.vsub(y,y),Y=y.distanceTo(x),un.pointInTriangle(y,N,w,H)&&Y<t.radius){if(v)return!0;let O=this.createContactEquation(f,d,t,n,p,g);y.vsub(x,O.ni),O.ni.normalize(),O.ni.scale(t.radius,O.ri),O.ri.vadd(a,O.ri),O.ri.vsub(f.position,O.ri),De.pointToWorldFrame(r,u,y,y),y.vsub(d.position,O.rj),De.vectorToWorldFrame(u,O.ni,O.ni),De.vectorToWorldFrame(u,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}P.length=0}planeTrimesh(t,n,a,r,l,u,f,d,p,g,v){const _=new C,S=Fw;S.set(0,0,1),l.vmult(S,S);for(let M=0;M<n.vertices.length/3;M++){n.getVertex(M,_);const b=new C;b.copy(_),De.pointToWorldFrame(r,u,b,_);const x=Hw;if(_.vsub(a,x),S.dot(x)<=0){if(v)return!0;const T=this.createContactEquation(f,d,t,n,p,g);T.ni.copy(S);const U=Gw;S.scale(x.dot(S),U),_.vsub(U,U),T.ri.copy(U),T.ri.vsub(f.position,T.ri),T.rj.copy(_),T.rj.vsub(d.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult)}}}}const Ps=new C,Ir=new C,Fr=new C,Pw=new C,zw=new C,Bw=new fn,Iw=new fn,Fw=new C,Hw=new C,Gw=new C,Vw=new C,kw=new C;new C;const qw=new C,Xw=new C,Ww=new C,Yw=new C,jw=new C,Zw=new C,Kw=new C,Qw=new C,Jw=new C,$w=new C,tR=new C,eR=new oi,nR=[],Qc=new C,o0=new C,iR=new C,aR=new C,sR=new C;function rR(c,t,n){let a=null;const r=c.length;for(let l=0;l!==r;l++){const u=c[l],f=iR;c[(l+1)%r].vsub(u,f);const d=aR;f.cross(t,d);const p=sR;n.vsub(u,p);const g=d.dot(p);if(a===null||g>0&&a===!0||g<=0&&a===!1){a===null&&(a=g>0);continue}else return!1}return!0}const Jc=new C,oR=new C,lR=new C,cR=new C,uR=[new C,new C,new C,new C,new C,new C],fR=new C,hR=new C,dR=new C,pR=new C,mR=new C,gR=new C,_R=new C,vR=new C,yR=new C,xR=new C,SR=new C,MR=new C,ER=new C,bR=new C;new C;new C;const TR=new C,AR=new C,wR=new C,RR=new C,CR=new C,DR=new C,UR=new C,LR=new C,NR=new C,OR=new C,l0=new fn,PR=new C;new C;const zR=new C,c0=new C,BR=new C,IR=new C,FR=new C,HR=[0],GR=new C,VR=new C;class u0{constructor(){this.current=[],this.previous=[]}getKey(t,n){if(n<t){const a=n;n=t,t=a}return t<<16|n}set(t,n){const a=this.getKey(t,n),r=this.current;let l=0;for(;a>r[l];)l++;if(a!==r[l]){for(let u=r.length-1;u>=l;u--)r[u+1]=r[u];r[l]=a}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,n){const a=this.current,r=this.previous,l=a.length,u=r.length;let f=0;for(let d=0;d<l;d++){let p=!1;const g=a[d];for(;g>r[f];)f++;p=g===r[f],p||f0(t,g)}f=0;for(let d=0;d<u;d++){let p=!1;const g=r[d];for(;g>a[f];)f++;p=a[f]===g,p||f0(n,g)}}}function f0(c,t){c.push((t&4294901760)>>16,t&65535)}const rd=(c,t)=>c<t?`${c}-${t}`:`${t}-${c}`;class kR{constructor(){this.data={keys:[]}}get(t,n){const a=rd(t,n);return this.data[a]}set(t,n,a){const r=rd(t,n);this.get(t,n)||this.data.keys.push(r),this.data[r]=a}delete(t,n){const a=rd(t,n),r=this.data.keys.indexOf(a);r!==-1&&this.data.keys.splice(r,1),delete this.data[a]}reset(){const t=this.data,n=t.keys;for(;n.length>0;){const a=n.pop();delete t[a]}}}class qR extends W0{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Q1,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Rw,this.constraints=[],this.narrowphase=new Ow(this),this.collisionMatrix=new Kv,this.collisionMatrixPrevious=new Kv,this.bodyOverlapKeeper=new u0,this.shapeOverlapKeeper=new u0,this.contactmaterials=[],this.contactMaterialTable=new kR,this.defaultMaterial=new Qr("default"),this.defaultContactMaterial=new ml(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,n){return this.contactMaterialTable.get(t.id,n.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const n=this.constraints.indexOf(t);n!==-1&&this.constraints.splice(n,1)}rayTest(t,n,a){a instanceof hu?this.raycastClosest(t,n,{skipBackfaces:!0},a):this.raycastAll(t,n,{skipBackfaces:!0},a)}raycastAll(t,n,a,r){return a===void 0&&(a={}),a.mode=un.ALL,a.from=t,a.to=n,a.callback=r,od.intersectWorld(this,a)}raycastAny(t,n,a,r){return a===void 0&&(a={}),a.mode=un.ANY,a.from=t,a.to=n,a.result=r,od.intersectWorld(this,a)}raycastClosest(t,n,a,r){return a===void 0&&(a={}),a.mode=un.CLOSEST,a.from=t,a.to=n,a.result=r,od.intersectWorld(this,a)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Gt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const n=this.bodies.length-1,a=this.bodies,r=a.indexOf(t);if(r!==-1){a.splice(r,1);for(let l=0;l!==a.length;l++)a[l].index=l;this.collisionMatrix.setNumObjects(n),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const n=this.bodies;for(let a=0;a<n.length;a++){const r=n[a].shapes;for(let l=0;l<r.length;l++){const u=r[l];if(u.id===t)return u}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const n=this.contactmaterials.indexOf(t);n!==-1&&(this.contactmaterials.splice(n,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,n){t===void 0&&(t=1/60),n===void 0&&(n=10);const a=_n.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,n);else{const r=a-this.lastCallTime;this.step(t,r,n)}this.lastCallTime=a}step(t,n,a){if(a===void 0&&(a=10),n===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=n;const r=_n.now();let l=0;for(;this.accumulator>=t&&l<a&&(this.internalStep(t),this.accumulator-=t,l++,!(_n.now()-r>t*1e3)););this.accumulator=this.accumulator%t;const u=this.accumulator/t;for(let f=0;f!==this.bodies.length;f++){const d=this.bodies[f];d.previousPosition.lerp(d.position,u,d.interpolatedPosition),d.previousQuaternion.slerp(d.quaternion,u,d.interpolatedQuaternion),d.previousQuaternion.normalize()}this.time+=n}}internalStep(t){this.dt=t;const n=this.contacts,a=ZR,r=KR,l=this.bodies.length,u=this.bodies,f=this.solver,d=this.gravity,p=this.doProfiling,g=this.profile,v=Gt.DYNAMIC;let _=-1/0;const S=this.constraints,M=jR;d.length();const b=d.x,x=d.y,y=d.z;let T=0;for(p&&(_=_n.now()),T=0;T!==l;T++){const V=u[T];if(V.type===v){const K=V.force,Y=V.mass;K.x+=Y*b,K.y+=Y*x,K.z+=Y*y}}for(let V=0,K=this.subsystems.length;V!==K;V++)this.subsystems[V].update();p&&(_=_n.now()),a.length=0,r.length=0,this.broadphase.collisionPairs(this,a,r),p&&(g.broadphase=_n.now()-_);let U=S.length;for(T=0;T!==U;T++){const V=S[T];if(!V.collideConnected)for(let K=a.length-1;K>=0;K-=1)(V.bodyA===a[K]&&V.bodyB===r[K]||V.bodyB===a[K]&&V.bodyA===r[K])&&(a.splice(K,1),r.splice(K,1))}this.collisionMatrixTick(),p&&(_=_n.now());const A=YR,P=n.length;for(T=0;T!==P;T++)A.push(n[T]);n.length=0;const B=this.frictionEquations.length;for(T=0;T!==B;T++)M.push(this.frictionEquations[T]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(a,r,this,n,A,this.frictionEquations,M),p&&(g.narrowphase=_n.now()-_),p&&(_=_n.now()),T=0;T<this.frictionEquations.length;T++)f.addEquation(this.frictionEquations[T]);const I=n.length;for(let V=0;V!==I;V++){const K=n[V],Y=K.bi,O=K.bj,Z=K.si,q=K.sj;let ct;if(Y.material&&O.material?ct=this.getContactMaterial(Y.material,O.material)||this.defaultContactMaterial:ct=this.defaultContactMaterial,ct.friction,Y.material&&O.material&&(Y.material.friction>=0&&O.material.friction>=0&&Y.material.friction*O.material.friction,Y.material.restitution>=0&&O.material.restitution>=0&&(K.restitution=Y.material.restitution*O.material.restitution)),f.addEquation(K),Y.allowSleep&&Y.type===Gt.DYNAMIC&&Y.sleepState===Gt.SLEEPING&&O.sleepState===Gt.AWAKE&&O.type!==Gt.STATIC){const z=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),J=O.sleepSpeedLimit**2;z>=J*2&&(Y.wakeUpAfterNarrowphase=!0)}if(O.allowSleep&&O.type===Gt.DYNAMIC&&O.sleepState===Gt.SLEEPING&&Y.sleepState===Gt.AWAKE&&Y.type!==Gt.STATIC){const z=Y.velocity.lengthSquared()+Y.angularVelocity.lengthSquared(),J=Y.sleepSpeedLimit**2;z>=J*2&&(O.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(Y,O,!0),this.collisionMatrixPrevious.get(Y,O)||(tl.body=O,tl.contact=K,Y.dispatchEvent(tl),tl.body=Y,O.dispatchEvent(tl)),this.bodyOverlapKeeper.set(Y.id,O.id),this.shapeOverlapKeeper.set(Z.id,q.id)}for(this.emitContactEvents(),p&&(g.makeContactConstraints=_n.now()-_,_=_n.now()),T=0;T!==l;T++){const V=u[T];V.wakeUpAfterNarrowphase&&(V.wakeUp(),V.wakeUpAfterNarrowphase=!1)}for(U=S.length,T=0;T!==U;T++){const V=S[T];V.update();for(let K=0,Y=V.equations.length;K!==Y;K++){const O=V.equations[K];f.addEquation(O)}}f.solve(t,this),p&&(g.solve=_n.now()-_),f.removeAllEquations();const k=Math.pow;for(T=0;T!==l;T++){const V=u[T];if(V.type&v){const K=k(1-V.linearDamping,t),Y=V.velocity;Y.scale(K,Y);const O=V.angularVelocity;if(O){const Z=k(1-V.angularDamping,t);O.scale(Z,O)}}}this.dispatchEvent(WR),p&&(_=_n.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,H=this.quatNormalizeFast;for(T=0;T!==l;T++)u[T].integrate(t,w,H);this.clearForces(),this.broadphase.dirty=!0,p&&(g.integrate=_n.now()-_),this.stepnumber+=1,this.dispatchEvent(XR);let nt=!0;if(this.allowSleep)for(nt=!1,T=0;T!==l;T++){const V=u[T];V.sleepTick(this.time),V.sleepState!==Gt.SLEEPING&&(nt=!0)}this.hasActiveBodies=nt}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),n=this.hasAnyEventListener("endContact");if((t||n)&&this.bodyOverlapKeeper.getDiff(ma,ga),t){for(let l=0,u=ma.length;l<u;l+=2)el.bodyA=this.getBodyById(ma[l]),el.bodyB=this.getBodyById(ma[l+1]),this.dispatchEvent(el);el.bodyA=el.bodyB=null}if(n){for(let l=0,u=ga.length;l<u;l+=2)nl.bodyA=this.getBodyById(ga[l]),nl.bodyB=this.getBodyById(ga[l+1]),this.dispatchEvent(nl);nl.bodyA=nl.bodyB=null}ma.length=ga.length=0;const a=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((a||r)&&this.shapeOverlapKeeper.getDiff(ma,ga),a){for(let l=0,u=ma.length;l<u;l+=2){const f=this.getShapeById(ma[l]),d=this.getShapeById(ma[l+1]);_a.shapeA=f,_a.shapeB=d,f&&(_a.bodyA=f.body),d&&(_a.bodyB=d.body),this.dispatchEvent(_a)}_a.bodyA=_a.bodyB=_a.shapeA=_a.shapeB=null}if(r){for(let l=0,u=ga.length;l<u;l+=2){const f=this.getShapeById(ga[l]),d=this.getShapeById(ga[l+1]);va.shapeA=f,va.shapeB=d,f&&(va.bodyA=f.body),d&&(va.bodyB=d.body),this.dispatchEvent(va)}va.bodyA=va.bodyB=va.shapeA=va.shapeB=null}}clearForces(){const t=this.bodies,n=t.length;for(let a=0;a!==n;a++){const r=t[a];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new oi;const od=new un,_n=globalThis.performance||{};if(!_n.now){let c=Date.now();_n.timing&&_n.timing.navigationStart&&(c=_n.timing.navigationStart),_n.now=()=>Date.now()-c}new C;const XR={type:"postStep"},WR={type:"preStep"},tl={type:Gt.COLLIDE_EVENT_NAME,body:null,contact:null},YR=[],jR=[],ZR=[],KR=[],ma=[],ga=[],el={type:"beginContact",bodyA:null,bodyB:null},nl={type:"endContact",bodyA:null,bodyB:null},_a={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},va={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},h0={type:"change"},hp={type:"start"},ty={type:"end"},$c=new C0,d0=new is,QR=Math.cos(70*eM.DEG2RAD),gn=new rt,jn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ld=1e-6;class JR extends GM{constructor(t,n=null){super(t,n),this.state=Ve.NONE,this.target=new rt,this.cursor=new rt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new rt,this._lastQuaternion=new ks,this._lastTargetPosition=new rt,this._quat=new ks().setFromUnitVectors(t.up,new rt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sv,this._sphericalDelta=new Sv,this._scale=1,this._panOffset=new rt,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new rt,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tC.bind(this),this._onPointerDown=$R.bind(this),this._onPointerUp=eC.bind(this),this._onContextMenu=lC.bind(this),this._onMouseWheel=aC.bind(this),this._onKeyDown=sC.bind(this),this._onTouchStart=rC.bind(this),this._onTouchMove=oC.bind(this),this._onMouseDown=nC.bind(this),this._onMouseMove=iC.bind(this),this._interceptControlDown=cC.bind(this),this._interceptControlUp=uC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(h0),this.update(),this.state=Ve.NONE}update(t=null){const n=this.object.position;gn.copy(n).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(a)&&isFinite(r)&&(a<-Math.PI?a+=jn:a>Math.PI&&(a-=jn),r<-Math.PI?r+=jn:r>Math.PI&&(r-=jn),a<=r?this._spherical.theta=Math.max(a,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+r)/2?Math.max(a,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),n.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=gn.length();u=this._clampDistance(f*this._scale);const d=f-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),l=!!d}else if(this.object.isOrthographicCamera){const f=new rt(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=d!==this.object.zoom;const p=new rt(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),u=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):($c.origin.copy(this.object.position),$c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($c.direction))<QR?this.object.lookAt(this.target):(d0.setFromNormalAndCoplanarPoint(this.object.up,this.target),$c.intersectPlane(d0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>ld||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ld||this._lastTargetPosition.distanceToSquared(this.target)>ld?(this.dispatchEvent(h0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){gn.setFromMatrixColumn(n,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,n){this.screenSpacePanning===!0?gn.setFromMatrixColumn(n,1):(gn.setFromMatrixColumn(n,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;gn.copy(r).sub(this.target);let l=gn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*l/a.clientHeight,this.object.matrix),this._panUp(2*n*l/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),r=t-a.left,l=n-a.top,u=a.width,f=a.height;this._mouse.x=r/u*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/n.clientHeight),this._rotateUp(jn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateStart.set(a,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panStart.set(a,r)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,r=t.pageY-n.y,l=Math.sqrt(a*a+r*r);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),r=.5*(t.pageX+a.x),l=.5*(t.pageY+a.y);this._rotateEnd.set(r,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/n.clientHeight),this._rotateUp(jn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panEnd.set(a,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,r=t.pageY-n.y,l=Math.sqrt(a*a+r*r);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,f=(t.pageY+n.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new oe,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function $R(c){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(c.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(c)&&(this._addPointer(c),c.pointerType==="touch"?this._onTouchStart(c):this._onMouseDown(c)))}function tC(c){this.enabled!==!1&&(c.pointerType==="touch"?this._onTouchMove(c):this._onMouseMove(c))}function eC(c){switch(this._removePointer(c),this._pointers.length){case 0:this.domElement.releasePointerCapture(c.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ty),this.state=Ve.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function nC(c){let t;switch(c.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(c),this.state=Ve.DOLLY;break;case Vr.ROTATE:if(c.ctrlKey||c.metaKey||c.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(c),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(c),this.state=Ve.ROTATE}break;case Vr.PAN:if(c.ctrlKey||c.metaKey||c.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(c),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(c),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(hp)}function iC(c){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(c);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(c);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(c);break}}function aC(c){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(c.preventDefault(),this.dispatchEvent(hp),this._handleMouseWheel(this._customWheelEvent(c)),this.dispatchEvent(ty))}function sC(c){this.enabled!==!1&&this._handleKeyDown(c)}function rC(c){switch(this._trackPointer(c),this._pointers.length){case 1:switch(this.touches.ONE){case Hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(c),this.state=Ve.TOUCH_ROTATE;break;case Hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(c),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case Hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(c),this.state=Ve.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(c),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(hp)}function oC(c){switch(this._trackPointer(c),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(c),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(c),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(c),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(c),this.update();break;default:this.state=Ve.NONE}}function lC(c){this.enabled!==!1&&c.preventDefault()}function cC(c){c.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uC(c){c.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fC(){const c=tu.useRef(null),[t,n]=tu.useState(0);return tu.useEffect(()=>{const a=new DM,r=new _i(60,window.innerWidth/window.innerHeight,.1,1e3);r.position.set(6,6,10),r.lookAt(0,0,0);const l=new b1({antialias:!0});l.setSize(window.innerWidth,window.innerHeight),l.setClearColor(15790320);const u=c.current;u&&u.appendChild(l.domElement);const f=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",f);const d=new JR(r,l.domElement);d.enableDamping=!0,d.dampingFactor=.05,d.enablePan=!1,d.target.set(0,0,0),d.update();const p=new qR;p.gravity.set(0,-9.82,0);const g=new Qr("chassisMat"),v=new Qr("groundMat"),_=new ml(g,v,{friction:.001,restitution:0});p.defaultContactMaterial=_;const S=new cl(new C(1,.5,2)),M=new Gt({mass:150,material:g});M.addShape(S),M.position.set(0,1,0),M.angularDamping=.5,p.addBody(M);const b=new Xs(2,1,4),x=new jh({color:16711680}),y=new vi(b,x);a.add(y);const T=new cl(new C(50,.1,50)),U=new Gt({mass:0,material:v});U.addShape(T),U.position.set(0,-1,0),p.addBody(U);const A=new Xs(100,.2,100),P=new jh({color:8947848}),B=new vi(A,P);B.position.y=-1,a.add(B);const I=new FM(16777215,.7);a.add(I);const k=new IM(16777215,1.2);k.position.set(5,10,7.5),a.add(k);const N={forward:!1,backward:!1,left:!1,right:!1},w=10,H=5,nt=ct=>{ct.code==="ArrowUp"&&(N.forward=!0),ct.code==="ArrowDown"&&(N.backward=!0),ct.code==="ArrowLeft"&&(N.left=!0),ct.code==="ArrowRight"&&(N.right=!0)},V=ct=>{ct.code==="ArrowUp"&&(N.forward=!1),ct.code==="ArrowDown"&&(N.backward=!1),ct.code==="ArrowLeft"&&(N.left=!1),ct.code==="ArrowRight"&&(N.right=!1)};window.addEventListener("keydown",nt),window.addEventListener("keyup",V);let K,Y=new rt;const O=()=>{K&&a.remove(K);const ct=45,z=(Math.random()-.5)*2*ct,J=(Math.random()-.5)*2*ct;Y.set(z,.5,J);const st=new op(1,16,16),xt=new jh({color:65280});K=new vi(st,xt),K.position.copy(Y),a.add(K)};O();let Z;const q=()=>{p.step(1/60);const z=performance.now()/1e3*40%360,J=new Re(`hsl(${z}, 100%, 50%)`);x.color.copy(J),M.position.distanceTo(new C(Y.x,Y.y,Y.z))<1.5&&(n(gt=>gt+1),O());const xt=new C(0,0,-1),tt=new C;M.quaternion.vmult(xt,tt),N.forward?(M.velocity.x=tt.x*w,M.velocity.z=tt.z*w):N.backward?(M.velocity.x=-tt.x*w,M.velocity.z=-tt.z*w):(M.velocity.x*=.95,M.velocity.z*=.95),N.left?M.angularVelocity.y=H:N.right?M.angularVelocity.y=-H:M.angularVelocity.y*=.9,y.position.copy(M.position),y.quaternion.copy(M.quaternion),B.position.y=-1,d.update(),l.render(a,r),Z=requestAnimationFrame(q)};return q(),()=>{cancelAnimationFrame(Z),window.removeEventListener("resize",f),window.removeEventListener("keydown",nt),window.removeEventListener("keyup",V),u&&u.removeChild(l.domElement),l.dispose()}},[]),lu.jsx("div",{className:"fullscreen-container",children:lu.jsx("div",{ref:c,style:{width:"100vw",height:"100vh"}})})}hS.createRoot(document.getElementById("root")).render(lu.jsx(tu.StrictMode,{children:lu.jsx(fC,{})}));
