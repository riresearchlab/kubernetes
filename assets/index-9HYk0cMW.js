var Xd=e=>{throw TypeError(e)};var cl=(e,t,n)=>t.has(e)||Xd("Cannot "+n);var A=(e,t,n)=>(cl(e,t,"read from private field"),n?n.call(e):t.get(e)),te=(e,t,n)=>t.has(e)?Xd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),G=(e,t,n,r)=>(cl(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Me=(e,t,n)=>(cl(e,t,"access private method"),n);var ei=(e,t,n,r)=>({set _(o){G(e,t,o,n)},get _(){return A(e,t,r)}});function k0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function hf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gf={exports:{}},Ea={},vf={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Us=Symbol.for("react.element"),S0=Symbol.for("react.portal"),C0=Symbol.for("react.fragment"),N0=Symbol.for("react.strict_mode"),P0=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),R0=Symbol.for("react.forward_ref"),j0=Symbol.for("react.suspense"),A0=Symbol.for("react.memo"),M0=Symbol.for("react.lazy"),Jd=Symbol.iterator;function I0(e){return e===null||typeof e!="object"?null:(e=Jd&&e[Jd]||e["@@iterator"],typeof e=="function"?e:null)}var yf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xf=Object.assign,bf={};function jo(e,t,n){this.props=e,this.context=t,this.refs=bf,this.updater=n||yf}jo.prototype.isReactComponent={};jo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wf(){}wf.prototype=jo.prototype;function gu(e,t,n){this.props=e,this.context=t,this.refs=bf,this.updater=n||yf}var vu=gu.prototype=new wf;vu.constructor=gu;xf(vu,jo.prototype);vu.isPureReactComponent=!0;var Zd=Array.isArray,kf=Object.prototype.hasOwnProperty,yu={current:null},Sf={key:!0,ref:!0,__self:!0,__source:!0};function Cf(e,t,n){var r,o={},s=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)kf.call(t,r)&&!Sf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Us,type:e,key:s,ref:i,props:o,_owner:yu.current}}function _0(e,t){return{$$typeof:Us,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Us}function O0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ep=/\/+/g;function ul(e,t){return typeof e=="object"&&e!==null&&e.key!=null?O0(""+e.key):t.toString(36)}function Ei(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Us:case S0:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+ul(i,0):r,Zd(o)?(n="",e!=null&&(n=e.replace(ep,"$&/")+"/"),Ei(o,t,n,"",function(u){return u})):o!=null&&(xu(o)&&(o=_0(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ep,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Zd(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+ul(s,l);i+=Ei(s,t,n,c,o)}else if(c=I0(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+ul(s,l++),i+=Ei(s,t,n,c,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ti(e,t,n){if(e==null)return e;var r=[],o=0;return Ei(e,r,"","",function(s){return t.call(n,s,o++)}),r}function D0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Ti={transition:null},L0={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ti,ReactCurrentOwner:yu};function Nf(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:ti,forEach:function(e,t,n){ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ti(e,function(){t++}),t},toArray:function(e){return ti(e,function(t){return t})||[]},only:function(e){if(!xu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=jo;Q.Fragment=C0;Q.Profiler=P0;Q.PureComponent=gu;Q.StrictMode=N0;Q.Suspense=j0;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0;Q.act=Nf;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xf({},e.props),o=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=yu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)kf.call(t,c)&&!Sf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Us,type:e.type,key:o,ref:s,props:r,_owner:i}};Q.createContext=function(e){return e={$$typeof:T0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:E0,_context:e},e.Consumer=e};Q.createElement=Cf;Q.createFactory=function(e){var t=Cf.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:R0,render:e}};Q.isValidElement=xu;Q.lazy=function(e){return{$$typeof:M0,_payload:{_status:-1,_result:e},_init:D0}};Q.memo=function(e,t){return{$$typeof:A0,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=Ti.transition;Ti.transition={};try{e()}finally{Ti.transition=t}};Q.unstable_act=Nf;Q.useCallback=function(e,t){return Be.current.useCallback(e,t)};Q.useContext=function(e){return Be.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Be.current.useEffect(e,t)};Q.useId=function(){return Be.current.useId()};Q.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Be.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};Q.useRef=function(e){return Be.current.useRef(e)};Q.useState=function(e){return Be.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Be.current.useTransition()};Q.version="18.3.1";vf.exports=Q;var m=vf.exports;const O=hf(m),bu=k0({__proto__:null,default:O},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=m,V0=Symbol.for("react.element"),z0=Symbol.for("react.fragment"),U0=Object.prototype.hasOwnProperty,$0=F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B0={key:!0,ref:!0,__self:!0,__source:!0};function Pf(e,t,n){var r,o={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)U0.call(t,r)&&!B0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:V0,type:e,key:s,ref:i,props:o,_owner:$0.current}}Ea.Fragment=z0;Ea.jsx=Pf;Ea.jsxs=Pf;gf.exports=Ea;var a=gf.exports,Ef={exports:{}},st={},Tf={exports:{}},Rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,M){var L=j.length;j.push(M);e:for(;0<L;){var K=L-1>>>1,z=j[K];if(0<o(z,M))j[K]=M,j[L]=z,L=K;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var M=j[0],L=j.pop();if(L!==M){j[0]=L;e:for(var K=0,z=j.length,Y=z>>>1;K<Y;){var X=2*(K+1)-1,xe=j[X],Ae=X+1,re=j[Ae];if(0>o(xe,L))Ae<z&&0>o(re,xe)?(j[K]=re,j[Ae]=L,K=Ae):(j[K]=xe,j[X]=L,K=X);else if(Ae<z&&0>o(re,L))j[K]=re,j[Ae]=L,K=Ae;else break e}}return M}function o(j,M){var L=j.sortIndex-M.sortIndex;return L!==0?L:j.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],d=1,p=null,h=3,f=!1,w=!1,g=!1,b=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(j){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=j)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function k(j){if(g=!1,x(j),!w)if(n(c)!==null)w=!0,$(S);else{var M=n(u);M!==null&&B(k,M.startTime-j)}}function S(j,M){w=!1,g&&(g=!1,y(C),C=-1),f=!0;var L=h;try{for(x(M),p=n(c);p!==null&&(!(p.expirationTime>M)||j&&!V());){var K=p.callback;if(typeof K=="function"){p.callback=null,h=p.priorityLevel;var z=K(p.expirationTime<=M);M=e.unstable_now(),typeof z=="function"?p.callback=z:p===n(c)&&r(c),x(M)}else r(c);p=n(c)}if(p!==null)var Y=!0;else{var X=n(u);X!==null&&B(k,X.startTime-M),Y=!1}return Y}finally{p=null,h=L,f=!1}}var N=!1,E=null,C=-1,P=5,I=-1;function V(){return!(e.unstable_now()-I<P)}function T(){if(E!==null){var j=e.unstable_now();I=j;var M=!0;try{M=E(!0,j)}finally{M?D():(N=!1,E=null)}}else N=!1}var D;if(typeof v=="function")D=function(){v(T)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,U=R.port2;R.port1.onmessage=T,D=function(){U.postMessage(null)}}else D=function(){b(T,0)};function $(j){E=j,N||(N=!0,D())}function B(j,M){C=b(function(){j(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||f||(w=!0,$(S))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var L=h;h=M;try{return j()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,M){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var L=h;h=j;try{return M()}finally{h=L}},e.unstable_scheduleCallback=function(j,M,L){var K=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?K+L:K):L=K,j){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=L+z,j={id:d++,callback:M,priorityLevel:j,startTime:L,expirationTime:z,sortIndex:-1},L>K?(j.sortIndex=L,t(u,j),n(c)===null&&j===n(u)&&(g?(y(C),C=-1):g=!0,B(k,L-K))):(j.sortIndex=z,t(c,j),w||f||(w=!0,$(S))),j},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(j){var M=h;return function(){var L=h;h=M;try{return j.apply(this,arguments)}finally{h=L}}}})(Rf);Tf.exports=Rf;var W0=Tf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0=m,rt=W0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jf=new Set,hs={};function Cr(e,t){bo(e,t),bo(e+"Capture",t)}function bo(e,t){for(hs[e]=t,e=0;e<t.length;e++)jf.add(t[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,K0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tp={},np={};function H0(e){return Xl.call(np,e)?!0:Xl.call(tp,e)?!1:K0.test(e)?np[e]=!0:(tp[e]=!0,!1)}function q0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y0(e,t,n,r){if(t===null||typeof t>"u"||q0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,o,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var wu=/[\-:]([a-z])/g;function ku(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wu,ku);je[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wu,ku);je[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wu,ku);je[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Su(e,t,n,r){var o=je.hasOwnProperty(t)?je[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y0(t,n,o,r)&&(n=null),r||o===null?H0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pn=G0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ni=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),Cu=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),Af=Symbol.for("react.provider"),Mf=Symbol.for("react.context"),Nu=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),ec=Symbol.for("react.suspense_list"),Pu=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),If=Symbol.for("react.offscreen"),rp=Symbol.iterator;function Fo(e){return e===null||typeof e!="object"?null:(e=rp&&e[rp]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,dl;function Jo(e){if(dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);dl=t&&t[1]||""}return`
`+dl+e}var pl=!1;function ml(e,t){if(!e||pl)return"";pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),s=r.stack.split(`
`),i=o.length-1,l=s.length-1;1<=i&&0<=l&&o[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==s[l]){var c=`
`+o[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jo(e):""}function Q0(e){switch(e.tag){case 5:return Jo(e.type);case 16:return Jo("Lazy");case 13:return Jo("Suspense");case 19:return Jo("SuspenseList");case 0:case 2:case 15:return e=ml(e.type,!1),e;case 11:return e=ml(e.type.render,!1),e;case 1:return e=ml(e.type,!0),e;default:return""}}function tc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vr:return"Fragment";case Fr:return"Portal";case Jl:return"Profiler";case Cu:return"StrictMode";case Zl:return"Suspense";case ec:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mf:return(e.displayName||"Context")+".Consumer";case Af:return(e._context.displayName||"Context")+".Provider";case Nu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pu:return t=e.displayName||null,t!==null?t:tc(e.type)||"Memo";case Nn:t=e._payload,e=e._init;try{return tc(e(t))}catch{}}return null}function X0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tc(t);case 8:return t===Cu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function J0(e){var t=_f(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ri(e){e._valueTracker||(e._valueTracker=J0(e))}function Of(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_f(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nc(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function op(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Df(e,t){t=t.checked,t!=null&&Su(e,"checked",t,!1)}function rc(e,t){Df(e,t);var n=Kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oc(e,t.type,n):t.hasOwnProperty("defaultValue")&&oc(e,t.type,Kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oc(e,t,n){(t!=="number"||Ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zo=Array.isArray;function eo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function sc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ip(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Zo(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kn(n)}}function Lf(e,t){var n=Kn(t.value),r=Kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ap(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ff(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ic(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ff(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,Vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Z0=["Webkit","ms","Moz","O"];Object.keys(os).forEach(function(e){Z0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),os[t]=os[e]})});function zf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||os.hasOwnProperty(e)&&os[e]?(""+t).trim():t+"px"}function Uf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=zf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ex=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ac(e,t){if(t){if(ex[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function lc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cc=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uc=null,to=null,no=null;function lp(e){if(e=Ws(e)){if(typeof uc!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ma(t),uc(e.stateNode,e.type,t))}}function $f(e){to?no?no.push(e):no=[e]:to=e}function Bf(){if(to){var e=to,t=no;if(no=to=null,lp(e),t)for(e=0;e<t.length;e++)lp(t[e])}}function Wf(e,t){return e(t)}function Gf(){}var fl=!1;function Kf(e,t,n){if(fl)return e(t,n);fl=!0;try{return Wf(e,t,n)}finally{fl=!1,(to!==null||no!==null)&&(Gf(),Bf())}}function vs(e,t){var n=e.stateNode;if(n===null)return null;var r=Ma(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var dc=!1;if(sn)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){dc=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{dc=!1}function tx(e,t,n,r,o,s,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ss=!1,Hi=null,qi=!1,pc=null,nx={onError:function(e){ss=!0,Hi=e}};function rx(e,t,n,r,o,s,i,l,c){ss=!1,Hi=null,tx.apply(nx,arguments)}function ox(e,t,n,r,o,s,i,l,c){if(rx.apply(this,arguments),ss){if(ss){var u=Hi;ss=!1,Hi=null}else throw Error(_(198));qi||(qi=!0,pc=u)}}function Nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cp(e){if(Nr(e)!==e)throw Error(_(188))}function sx(e){var t=e.alternate;if(!t){if(t=Nr(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return cp(o),e;if(s===r)return cp(o),t;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=s;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=s;break}if(l===r){i=!0,r=o,n=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===n){i=!0,n=s,r=o;break}if(l===r){i=!0,r=s,n=o;break}l=l.sibling}if(!i)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function qf(e){return e=sx(e),e!==null?Yf(e):null}function Yf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yf(e);if(t!==null)return t;e=e.sibling}return null}var Qf=rt.unstable_scheduleCallback,up=rt.unstable_cancelCallback,ix=rt.unstable_shouldYield,ax=rt.unstable_requestPaint,ve=rt.unstable_now,lx=rt.unstable_getCurrentPriorityLevel,Tu=rt.unstable_ImmediatePriority,Xf=rt.unstable_UserBlockingPriority,Yi=rt.unstable_NormalPriority,cx=rt.unstable_LowPriority,Jf=rt.unstable_IdlePriority,Ta=null,Gt=null;function ux(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Ta,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:mx,dx=Math.log,px=Math.LN2;function mx(e){return e>>>=0,e===0?32:31-(dx(e)/px|0)|0}var si=64,ii=4194304;function es(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=es(l):(s&=i,s!==0&&(r=es(s)))}else i=n&~o,i!==0?r=es(i):s!==0&&(r=es(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),o=1<<n,r|=e[n],t&=~o;return r}function fx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Rt(s),l=1<<i,c=o[i];c===-1?(!(l&n)||l&r)&&(o[i]=fx(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function mc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zf(){var e=si;return si<<=1,!(si&4194240)&&(si=64),e}function hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $s(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function gx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Rt(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function Ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var oe=0;function eh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var th,ju,nh,rh,oh,fc=!1,ai=[],Fn=null,Vn=null,zn=null,ys=new Map,xs=new Map,En=[],vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dp(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":ys.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(t.pointerId)}}function zo(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Ws(t),t!==null&&ju(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yx(e,t,n,r,o){switch(t){case"focusin":return Fn=zo(Fn,e,t,n,r,o),!0;case"dragenter":return Vn=zo(Vn,e,t,n,r,o),!0;case"mouseover":return zn=zo(zn,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return ys.set(s,zo(ys.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,xs.set(s,zo(xs.get(s)||null,e,t,n,r,o)),!0}return!1}function sh(e){var t=ir(e.target);if(t!==null){var n=Nr(t);if(n!==null){if(t=n.tag,t===13){if(t=Hf(n),t!==null){e.blockedOn=t,oh(e.priority,function(){nh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cc=r,n.target.dispatchEvent(r),cc=null}else return t=Ws(n),t!==null&&ju(t),e.blockedOn=n,!1;t.shift()}return!0}function pp(e,t,n){Ri(e)&&n.delete(t)}function xx(){fc=!1,Fn!==null&&Ri(Fn)&&(Fn=null),Vn!==null&&Ri(Vn)&&(Vn=null),zn!==null&&Ri(zn)&&(zn=null),ys.forEach(pp),xs.forEach(pp)}function Uo(e,t){e.blockedOn===t&&(e.blockedOn=null,fc||(fc=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,xx)))}function bs(e){function t(o){return Uo(o,e)}if(0<ai.length){Uo(ai[0],e);for(var n=1;n<ai.length;n++){var r=ai[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fn!==null&&Uo(Fn,e),Vn!==null&&Uo(Vn,e),zn!==null&&Uo(zn,e),ys.forEach(t),xs.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)sh(n),n.blockedOn===null&&En.shift()}var ro=pn.ReactCurrentBatchConfig,Xi=!0;function bx(e,t,n,r){var o=oe,s=ro.transition;ro.transition=null;try{oe=1,Au(e,t,n,r)}finally{oe=o,ro.transition=s}}function wx(e,t,n,r){var o=oe,s=ro.transition;ro.transition=null;try{oe=4,Au(e,t,n,r)}finally{oe=o,ro.transition=s}}function Au(e,t,n,r){if(Xi){var o=hc(e,t,n,r);if(o===null)Nl(e,t,r,Ji,n),dp(e,r);else if(yx(o,e,t,n,r))r.stopPropagation();else if(dp(e,r),t&4&&-1<vx.indexOf(e)){for(;o!==null;){var s=Ws(o);if(s!==null&&th(s),s=hc(e,t,n,r),s===null&&Nl(e,t,r,Ji,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else Nl(e,t,r,null,n)}}var Ji=null;function hc(e,t,n,r){if(Ji=null,e=Eu(r),e=ir(e),e!==null)if(t=Nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ji=e,null}function ih(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lx()){case Tu:return 1;case Xf:return 4;case Yi:case cx:return 16;case Jf:return 536870912;default:return 16}default:return 16}}var On=null,Mu=null,ji=null;function ah(){if(ji)return ji;var e,t=Mu,n=t.length,r,o="value"in On?On.value:On.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[s-r];r++);return ji=o.slice(e,1<r?1-r:void 0)}function Ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function li(){return!0}function mp(){return!1}function it(e){function t(n,r,o,s,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?li:mp,this.isPropagationStopped=mp,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=li)},persist:function(){},isPersistent:li}),t}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=it(Ao),Bs=fe({},Ao,{view:0,detail:0}),kx=it(Bs),gl,vl,$o,Ra=fe({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$o&&($o&&e.type==="mousemove"?(gl=e.screenX-$o.screenX,vl=e.screenY-$o.screenY):vl=gl=0,$o=e),gl)},movementY:function(e){return"movementY"in e?e.movementY:vl}}),fp=it(Ra),Sx=fe({},Ra,{dataTransfer:0}),Cx=it(Sx),Nx=fe({},Bs,{relatedTarget:0}),yl=it(Nx),Px=fe({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),Ex=it(Px),Tx=fe({},Ao,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rx=it(Tx),jx=fe({},Ao,{data:0}),hp=it(jx),Ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _x(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ix[e])?!!t[e]:!1}function _u(){return _x}var Ox=fe({},Bs,{key:function(e){if(e.key){var t=Ax[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dx=it(Ox),Lx=fe({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=it(Lx),Fx=fe({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),Vx=it(Fx),zx=fe({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ux=it(zx),$x=fe({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bx=it($x),Wx=[9,13,27,32],Ou=sn&&"CompositionEvent"in window,is=null;sn&&"documentMode"in document&&(is=document.documentMode);var Gx=sn&&"TextEvent"in window&&!is,lh=sn&&(!Ou||is&&8<is&&11>=is),vp=" ",yp=!1;function ch(e,t){switch(e){case"keyup":return Wx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function Kx(e,t){switch(e){case"compositionend":return uh(t);case"keypress":return t.which!==32?null:(yp=!0,vp);case"textInput":return e=t.data,e===vp&&yp?null:e;default:return null}}function Hx(e,t){if(zr)return e==="compositionend"||!Ou&&ch(e,t)?(e=ah(),ji=Mu=On=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lh&&t.locale!=="ko"?null:t.data;default:return null}}var qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qx[e.type]:t==="textarea"}function dh(e,t,n,r){$f(r),t=Zi(t,"onChange"),0<t.length&&(n=new Iu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var as=null,ws=null;function Yx(e){kh(e,0)}function ja(e){var t=Br(e);if(Of(t))return e}function Qx(e,t){if(e==="change")return t}var ph=!1;if(sn){var xl;if(sn){var bl="oninput"in document;if(!bl){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),bl=typeof bp.oninput=="function"}xl=bl}else xl=!1;ph=xl&&(!document.documentMode||9<document.documentMode)}function wp(){as&&(as.detachEvent("onpropertychange",mh),ws=as=null)}function mh(e){if(e.propertyName==="value"&&ja(ws)){var t=[];dh(t,ws,e,Eu(e)),Kf(Yx,t)}}function Xx(e,t,n){e==="focusin"?(wp(),as=t,ws=n,as.attachEvent("onpropertychange",mh)):e==="focusout"&&wp()}function Jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(ws)}function Zx(e,t){if(e==="click")return ja(t)}function eb(e,t){if(e==="input"||e==="change")return ja(t)}function tb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:tb;function ks(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Xl.call(t,o)||!At(e[o],t[o]))return!1}return!0}function kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sp(e,t){var n=kp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function fh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hh(){for(var e=window,t=Ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ki(e.document)}return t}function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nb(e){var t=hh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fh(n.ownerDocument.documentElement,n)){if(r!==null&&Du(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=Sp(n,s);var i=Sp(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rb=sn&&"documentMode"in document&&11>=document.documentMode,Ur=null,gc=null,ls=null,vc=!1;function Cp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vc||Ur==null||Ur!==Ki(r)||(r=Ur,"selectionStart"in r&&Du(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ls&&ks(ls,r)||(ls=r,r=Zi(gc,"onSelect"),0<r.length&&(t=new Iu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}function ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $r={animationend:ci("Animation","AnimationEnd"),animationiteration:ci("Animation","AnimationIteration"),animationstart:ci("Animation","AnimationStart"),transitionend:ci("Transition","TransitionEnd")},wl={},gh={};sn&&(gh=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function Aa(e){if(wl[e])return wl[e];if(!$r[e])return e;var t=$r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gh)return wl[e]=t[n];return e}var vh=Aa("animationend"),yh=Aa("animationiteration"),xh=Aa("animationstart"),bh=Aa("transitionend"),wh=new Map,Np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,t){wh.set(e,t),Cr(t,[e])}for(var kl=0;kl<Np.length;kl++){var Sl=Np[kl],ob=Sl.toLowerCase(),sb=Sl[0].toUpperCase()+Sl.slice(1);Qn(ob,"on"+sb)}Qn(vh,"onAnimationEnd");Qn(yh,"onAnimationIteration");Qn(xh,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn(bh,"onTransitionEnd");bo("onMouseEnter",["mouseout","mouseover"]);bo("onMouseLeave",["mouseout","mouseover"]);bo("onPointerEnter",["pointerout","pointerover"]);bo("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ib=new Set("cancel close invalid load scroll toggle".split(" ").concat(ts));function Pp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ox(r,t,void 0,e),e.currentTarget=null}function kh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&o.isPropagationStopped())break e;Pp(o,l,u),s=c}else for(i=0;i<r.length;i++){if(l=r[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&o.isPropagationStopped())break e;Pp(o,l,u),s=c}}}if(qi)throw e=pc,qi=!1,pc=null,e}function le(e,t){var n=t[kc];n===void 0&&(n=t[kc]=new Set);var r=e+"__bubble";n.has(r)||(Sh(t,e,2,!1),n.add(r))}function Cl(e,t,n){var r=0;t&&(r|=4),Sh(n,e,r,t)}var ui="_reactListening"+Math.random().toString(36).slice(2);function Ss(e){if(!e[ui]){e[ui]=!0,jf.forEach(function(n){n!=="selectionchange"&&(ib.has(n)||Cl(n,!1,e),Cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ui]||(t[ui]=!0,Cl("selectionchange",!1,t))}}function Sh(e,t,n,r){switch(ih(t)){case 1:var o=bx;break;case 4:o=wx;break;default:o=Au}n=o.bind(null,t,n,e),o=void 0,!dc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Nl(e,t,n,r,o){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;i=i.return}for(;l!==null;){if(i=ir(l),i===null)return;if(c=i.tag,c===5||c===6){r=s=i;continue e}l=l.parentNode}}r=r.return}Kf(function(){var u=s,d=Eu(n),p=[];e:{var h=wh.get(e);if(h!==void 0){var f=Iu,w=e;switch(e){case"keypress":if(Ai(n)===0)break e;case"keydown":case"keyup":f=Dx;break;case"focusin":w="focus",f=yl;break;case"focusout":w="blur",f=yl;break;case"beforeblur":case"afterblur":f=yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Vx;break;case vh:case yh:case xh:f=Ex;break;case bh:f=Ux;break;case"scroll":f=kx;break;case"wheel":f=Bx;break;case"copy":case"cut":case"paste":f=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=gp}var g=(t&4)!==0,b=!g&&e==="scroll",y=g?h!==null?h+"Capture":null:h;g=[];for(var v=u,x;v!==null;){x=v;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,y!==null&&(k=vs(v,y),k!=null&&g.push(Cs(v,k,x)))),b)break;v=v.return}0<g.length&&(h=new f(h,w,null,n,d),p.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==cc&&(w=n.relatedTarget||n.fromElement)&&(ir(w)||w[an]))break e;if((f||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,f?(w=n.relatedTarget||n.toElement,f=u,w=w?ir(w):null,w!==null&&(b=Nr(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(f=null,w=u),f!==w)){if(g=fp,k="onMouseLeave",y="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(g=gp,k="onPointerLeave",y="onPointerEnter",v="pointer"),b=f==null?h:Br(f),x=w==null?h:Br(w),h=new g(k,v+"leave",f,n,d),h.target=b,h.relatedTarget=x,k=null,ir(d)===u&&(g=new g(y,v+"enter",w,n,d),g.target=x,g.relatedTarget=b,k=g),b=k,f&&w)t:{for(g=f,y=w,v=0,x=g;x;x=_r(x))v++;for(x=0,k=y;k;k=_r(k))x++;for(;0<v-x;)g=_r(g),v--;for(;0<x-v;)y=_r(y),x--;for(;v--;){if(g===y||y!==null&&g===y.alternate)break t;g=_r(g),y=_r(y)}g=null}else g=null;f!==null&&Ep(p,h,f,g,!1),w!==null&&b!==null&&Ep(p,b,w,g,!0)}}e:{if(h=u?Br(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var S=Qx;else if(xp(h))if(ph)S=eb;else{S=Jx;var N=Xx}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Zx);if(S&&(S=S(e,u))){dh(p,S,n,d);break e}N&&N(e,h,u),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&oc(h,"number",h.value)}switch(N=u?Br(u):window,e){case"focusin":(xp(N)||N.contentEditable==="true")&&(Ur=N,gc=u,ls=null);break;case"focusout":ls=gc=Ur=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,Cp(p,n,d);break;case"selectionchange":if(rb)break;case"keydown":case"keyup":Cp(p,n,d)}var E;if(Ou)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else zr?ch(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(lh&&n.locale!=="ko"&&(zr||C!=="onCompositionStart"?C==="onCompositionEnd"&&zr&&(E=ah()):(On=d,Mu="value"in On?On.value:On.textContent,zr=!0)),N=Zi(u,C),0<N.length&&(C=new hp(C,e,null,n,d),p.push({event:C,listeners:N}),E?C.data=E:(E=uh(n),E!==null&&(C.data=E)))),(E=Gx?Kx(e,n):Hx(e,n))&&(u=Zi(u,"onBeforeInput"),0<u.length&&(d=new hp("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=E))}kh(p,t)})}function Cs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=vs(e,n),s!=null&&r.unshift(Cs(e,s,o)),s=vs(e,t),s!=null&&r.push(Cs(e,s,o))),e=e.return}return r}function _r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ep(e,t,n,r,o){for(var s=t._reactName,i=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,o?(c=vs(n,s),c!=null&&i.unshift(Cs(n,c,l))):o||(c=vs(n,s),c!=null&&i.push(Cs(n,c,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var ab=/\r\n?/g,lb=/\u0000|\uFFFD/g;function Tp(e){return(typeof e=="string"?e:""+e).replace(ab,`
`).replace(lb,"")}function di(e,t,n){if(t=Tp(t),Tp(e)!==t&&n)throw Error(_(425))}function ea(){}var yc=null,xc=null;function bc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,cb=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,ub=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(e){return Rp.resolve(null).then(e).catch(db)}:wc;function db(e){setTimeout(function(){throw e})}function Pl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),bs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);bs(t)}function Un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),$t="__reactFiber$"+Mo,Ns="__reactProps$"+Mo,an="__reactContainer$"+Mo,kc="__reactEvents$"+Mo,pb="__reactListeners$"+Mo,mb="__reactHandles$"+Mo;function ir(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[an]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jp(e);e!==null;){if(n=e[$t])return n;e=jp(e)}return t}e=n,n=e.parentNode}return null}function Ws(e){return e=e[$t]||e[an],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Br(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ma(e){return e[Ns]||null}var Sc=[],Wr=-1;function Xn(e){return{current:e}}function ce(e){0>Wr||(e.current=Sc[Wr],Sc[Wr]=null,Wr--)}function ie(e,t){Wr++,Sc[Wr]=e.current,e.current=t}var Hn={},Fe=Xn(Hn),qe=Xn(!1),vr=Hn;function wo(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function ta(){ce(qe),ce(Fe)}function Ap(e,t,n){if(Fe.current!==Hn)throw Error(_(168));ie(Fe,t),ie(qe,n)}function Ch(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,X0(e)||"Unknown",o));return fe({},n,r)}function na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,vr=Fe.current,ie(Fe,e),ie(qe,qe.current),!0}function Mp(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Ch(e,t,vr),r.__reactInternalMemoizedMergedChildContext=e,ce(qe),ce(Fe),ie(Fe,e)):ce(qe),ie(qe,n)}var en=null,Ia=!1,El=!1;function Nh(e){en===null?en=[e]:en.push(e)}function fb(e){Ia=!0,Nh(e)}function Jn(){if(!El&&en!==null){El=!0;var e=0,t=oe;try{var n=en;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}en=null,Ia=!1}catch(o){throw en!==null&&(en=en.slice(e+1)),Qf(Tu,Jn),o}finally{oe=t,El=!1}}return null}var Gr=[],Kr=0,ra=null,oa=0,dt=[],pt=0,yr=null,nn=1,rn="";function nr(e,t){Gr[Kr++]=oa,Gr[Kr++]=ra,ra=e,oa=t}function Ph(e,t,n){dt[pt++]=nn,dt[pt++]=rn,dt[pt++]=yr,yr=e;var r=nn;e=rn;var o=32-Rt(r)-1;r&=~(1<<o),n+=1;var s=32-Rt(t)+o;if(30<s){var i=o-o%5;s=(r&(1<<i)-1).toString(32),r>>=i,o-=i,nn=1<<32-Rt(t)+o|n<<o|r,rn=s+e}else nn=1<<s|n<<o|r,rn=e}function Lu(e){e.return!==null&&(nr(e,1),Ph(e,1,0))}function Fu(e){for(;e===ra;)ra=Gr[--Kr],Gr[Kr]=null,oa=Gr[--Kr],Gr[Kr]=null;for(;e===yr;)yr=dt[--pt],dt[pt]=null,rn=dt[--pt],dt[pt]=null,nn=dt[--pt],dt[pt]=null}var tt=null,et=null,de=!1,Tt=null;function Eh(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ip(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=Un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yr!==null?{id:nn,overflow:rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function Cc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nc(e){if(de){var t=et;if(t){var n=t;if(!Ip(e,t)){if(Cc(e))throw Error(_(418));t=Un(n.nextSibling);var r=tt;t&&Ip(e,t)?Eh(r,n):(e.flags=e.flags&-4097|2,de=!1,tt=e)}}else{if(Cc(e))throw Error(_(418));e.flags=e.flags&-4097|2,de=!1,tt=e}}}function _p(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function pi(e){if(e!==tt)return!1;if(!de)return _p(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bc(e.type,e.memoizedProps)),t&&(t=et)){if(Cc(e))throw Th(),Error(_(418));for(;t;)Eh(e,t),t=Un(t.nextSibling)}if(_p(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=Un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?Un(e.stateNode.nextSibling):null;return!0}function Th(){for(var e=et;e;)e=Un(e.nextSibling)}function ko(){et=tt=null,de=!1}function Vu(e){Tt===null?Tt=[e]:Tt.push(e)}var hb=pn.ReactCurrentBatchConfig;function Bo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var l=o.refs;i===null?delete l[s]:l[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function mi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Op(e){var t=e._init;return t(e._payload)}function Rh(e){function t(y,v){if(e){var x=y.deletions;x===null?(y.deletions=[v],y.flags|=16):x.push(v)}}function n(y,v){if(!e)return null;for(;v!==null;)t(y,v),v=v.sibling;return null}function r(y,v){for(y=new Map;v!==null;)v.key!==null?y.set(v.key,v):y.set(v.index,v),v=v.sibling;return y}function o(y,v){return y=Gn(y,v),y.index=0,y.sibling=null,y}function s(y,v,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<v?(y.flags|=2,v):x):(y.flags|=2,v)):(y.flags|=1048576,v)}function i(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,v,x,k){return v===null||v.tag!==6?(v=_l(x,y.mode,k),v.return=y,v):(v=o(v,x),v.return=y,v)}function c(y,v,x,k){var S=x.type;return S===Vr?d(y,v,x.props.children,k,x.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nn&&Op(S)===v.type)?(k=o(v,x.props),k.ref=Bo(y,v,x),k.return=y,k):(k=Fi(x.type,x.key,x.props,null,y.mode,k),k.ref=Bo(y,v,x),k.return=y,k)}function u(y,v,x,k){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Ol(x,y.mode,k),v.return=y,v):(v=o(v,x.children||[]),v.return=y,v)}function d(y,v,x,k,S){return v===null||v.tag!==7?(v=gr(x,y.mode,k,S),v.return=y,v):(v=o(v,x),v.return=y,v)}function p(y,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=_l(""+v,y.mode,x),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ni:return x=Fi(v.type,v.key,v.props,null,y.mode,x),x.ref=Bo(y,null,v),x.return=y,x;case Fr:return v=Ol(v,y.mode,x),v.return=y,v;case Nn:var k=v._init;return p(y,k(v._payload),x)}if(Zo(v)||Fo(v))return v=gr(v,y.mode,x,null),v.return=y,v;mi(y,v)}return null}function h(y,v,x,k){var S=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:l(y,v,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ni:return x.key===S?c(y,v,x,k):null;case Fr:return x.key===S?u(y,v,x,k):null;case Nn:return S=x._init,h(y,v,S(x._payload),k)}if(Zo(x)||Fo(x))return S!==null?null:d(y,v,x,k,null);mi(y,x)}return null}function f(y,v,x,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return y=y.get(x)||null,l(v,y,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ni:return y=y.get(k.key===null?x:k.key)||null,c(v,y,k,S);case Fr:return y=y.get(k.key===null?x:k.key)||null,u(v,y,k,S);case Nn:var N=k._init;return f(y,v,x,N(k._payload),S)}if(Zo(k)||Fo(k))return y=y.get(x)||null,d(v,y,k,S,null);mi(v,k)}return null}function w(y,v,x,k){for(var S=null,N=null,E=v,C=v=0,P=null;E!==null&&C<x.length;C++){E.index>C?(P=E,E=null):P=E.sibling;var I=h(y,E,x[C],k);if(I===null){E===null&&(E=P);break}e&&E&&I.alternate===null&&t(y,E),v=s(I,v,C),N===null?S=I:N.sibling=I,N=I,E=P}if(C===x.length)return n(y,E),de&&nr(y,C),S;if(E===null){for(;C<x.length;C++)E=p(y,x[C],k),E!==null&&(v=s(E,v,C),N===null?S=E:N.sibling=E,N=E);return de&&nr(y,C),S}for(E=r(y,E);C<x.length;C++)P=f(E,y,C,x[C],k),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?C:P.key),v=s(P,v,C),N===null?S=P:N.sibling=P,N=P);return e&&E.forEach(function(V){return t(y,V)}),de&&nr(y,C),S}function g(y,v,x,k){var S=Fo(x);if(typeof S!="function")throw Error(_(150));if(x=S.call(x),x==null)throw Error(_(151));for(var N=S=null,E=v,C=v=0,P=null,I=x.next();E!==null&&!I.done;C++,I=x.next()){E.index>C?(P=E,E=null):P=E.sibling;var V=h(y,E,I.value,k);if(V===null){E===null&&(E=P);break}e&&E&&V.alternate===null&&t(y,E),v=s(V,v,C),N===null?S=V:N.sibling=V,N=V,E=P}if(I.done)return n(y,E),de&&nr(y,C),S;if(E===null){for(;!I.done;C++,I=x.next())I=p(y,I.value,k),I!==null&&(v=s(I,v,C),N===null?S=I:N.sibling=I,N=I);return de&&nr(y,C),S}for(E=r(y,E);!I.done;C++,I=x.next())I=f(E,y,C,I.value,k),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?C:I.key),v=s(I,v,C),N===null?S=I:N.sibling=I,N=I);return e&&E.forEach(function(T){return t(y,T)}),de&&nr(y,C),S}function b(y,v,x,k){if(typeof x=="object"&&x!==null&&x.type===Vr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ni:e:{for(var S=x.key,N=v;N!==null;){if(N.key===S){if(S=x.type,S===Vr){if(N.tag===7){n(y,N.sibling),v=o(N,x.props.children),v.return=y,y=v;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Nn&&Op(S)===N.type){n(y,N.sibling),v=o(N,x.props),v.ref=Bo(y,N,x),v.return=y,y=v;break e}n(y,N);break}else t(y,N);N=N.sibling}x.type===Vr?(v=gr(x.props.children,y.mode,k,x.key),v.return=y,y=v):(k=Fi(x.type,x.key,x.props,null,y.mode,k),k.ref=Bo(y,v,x),k.return=y,y=k)}return i(y);case Fr:e:{for(N=x.key;v!==null;){if(v.key===N)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(y,v.sibling),v=o(v,x.children||[]),v.return=y,y=v;break e}else{n(y,v);break}else t(y,v);v=v.sibling}v=Ol(x,y.mode,k),v.return=y,y=v}return i(y);case Nn:return N=x._init,b(y,v,N(x._payload),k)}if(Zo(x))return w(y,v,x,k);if(Fo(x))return g(y,v,x,k);mi(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(y,v.sibling),v=o(v,x),v.return=y,y=v):(n(y,v),v=_l(x,y.mode,k),v.return=y,y=v),i(y)):n(y,v)}return b}var So=Rh(!0),jh=Rh(!1),sa=Xn(null),ia=null,Hr=null,zu=null;function Uu(){zu=Hr=ia=null}function $u(e){var t=sa.current;ce(sa),e._currentValue=t}function Pc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oo(e,t){ia=e,zu=Hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(zu!==e)if(e={context:e,memoizedValue:t,next:null},Hr===null){if(ia===null)throw Error(_(308));Hr=e,ia.dependencies={lanes:0,firstContext:e}}else Hr=Hr.next=e;return t}var ar=null;function Bu(e){ar===null?ar=[e]:ar.push(e)}function Ah(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Bu(t)):(n.next=o.next,o.next=n),t.interleaved=n,ln(e,r)}function ln(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pn=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ln(e,n)}return o=r.interleaved,o===null?(t.next=t,Bu(r)):(t.next=o.next,o.next=t),r.interleaved=t,ln(e,n)}function Mi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}function Dp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function aa(e,t,n,r){var o=e.updateQueue;Pn=!1;var s=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?s=u:i.next=u,i=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==i&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=o.baseState;i=0,d=u=c=null,l=s;do{var h=l.lane,f=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,g=l;switch(h=t,f=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){p=w.call(f,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,h=typeof w=="function"?w.call(f,p,h):w,h==null)break e;p=fe({},p,h);break e;case 2:Pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else f={eventTime:f,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=f,c=p):d=d.next=f,i|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(c=p),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);br|=i,e.lanes=i,e.memoizedState=p}}function Lp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Gs={},Kt=Xn(Gs),Ps=Xn(Gs),Es=Xn(Gs);function lr(e){if(e===Gs)throw Error(_(174));return e}function Gu(e,t){switch(ie(Es,t),ie(Ps,e),ie(Kt,Gs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ic(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ic(t,e)}ce(Kt),ie(Kt,t)}function Co(){ce(Kt),ce(Ps),ce(Es)}function Ih(e){lr(Es.current);var t=lr(Kt.current),n=ic(t,e.type);t!==n&&(ie(Ps,e),ie(Kt,n))}function Ku(e){Ps.current===e&&(ce(Kt),ce(Ps))}var pe=Xn(0);function la(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Tl=[];function Hu(){for(var e=0;e<Tl.length;e++)Tl[e]._workInProgressVersionPrimary=null;Tl.length=0}var Ii=pn.ReactCurrentDispatcher,Rl=pn.ReactCurrentBatchConfig,xr=0,me=null,ke=null,Ce=null,ca=!1,cs=!1,Ts=0,gb=0;function Ie(){throw Error(_(321))}function qu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function Yu(e,t,n,r,o,s){if(xr=s,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?bb:wb,e=n(r,o),cs){s=0;do{if(cs=!1,Ts=0,25<=s)throw Error(_(301));s+=1,Ce=ke=null,t.updateQueue=null,Ii.current=kb,e=n(r,o)}while(cs)}if(Ii.current=ua,t=ke!==null&&ke.next!==null,xr=0,Ce=ke=me=null,ca=!1,t)throw Error(_(300));return e}function Qu(){var e=Ts!==0;return Ts=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?me.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function gt(){if(ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Ce===null?me.memoizedState:Ce.next;if(t!==null)Ce=t,ke=e;else{if(e===null)throw Error(_(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Ce===null?me.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Rs(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=gt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ke,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var i=o.next;o.next=s.next,s.next=i}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var l=i=null,c=null,u=s;do{var d=u.lane;if((xr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,i=r):c=c.next=p,me.lanes|=d,br|=d}u=u.next}while(u!==null&&u!==s);c===null?i=r:c.next=l,At(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,me.lanes|=s,br|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=gt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do s=e(s,i.action),i=i.next;while(i!==o);At(s,t.memoizedState)||(He=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function _h(){}function Oh(e,t){var n=me,r=gt(),o=t(),s=!At(r.memoizedState,o);if(s&&(r.memoizedState=o,He=!0),r=r.queue,Xu(Fh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,js(9,Lh.bind(null,n,r,o,t),void 0,null),Ne===null)throw Error(_(349));xr&30||Dh(n,t,o)}return o}function Dh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lh(e,t,n,r){t.value=n,t.getSnapshot=r,Vh(t)&&zh(e)}function Fh(e,t,n){return n(function(){Vh(t)&&zh(e)})}function Vh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function zh(e){var t=ln(e,1);t!==null&&jt(t,e,1,-1)}function Fp(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:e},t.queue=e,e=e.dispatch=xb.bind(null,me,e),[t.memoizedState,e]}function js(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Uh(){return gt().memoizedState}function _i(e,t,n,r){var o=Ft();me.flags|=e,o.memoizedState=js(1|t,n,void 0,r===void 0?null:r)}function _a(e,t,n,r){var o=gt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var i=ke.memoizedState;if(s=i.destroy,r!==null&&qu(r,i.deps)){o.memoizedState=js(t,n,s,r);return}}me.flags|=e,o.memoizedState=js(1|t,n,s,r)}function Vp(e,t){return _i(8390656,8,e,t)}function Xu(e,t){return _a(2048,8,e,t)}function $h(e,t){return _a(4,2,e,t)}function Bh(e,t){return _a(4,4,e,t)}function Wh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gh(e,t,n){return n=n!=null?n.concat([e]):null,_a(4,4,Wh.bind(null,t,e),n)}function Ju(){}function Kh(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hh(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&qu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qh(e,t,n){return xr&21?(At(n,t)||(n=Zf(),me.lanes|=n,br|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function vb(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Rl.transition;Rl.transition={};try{e(!1),t()}finally{oe=n,Rl.transition=r}}function Yh(){return gt().memoizedState}function yb(e,t,n){var r=Wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qh(e))Xh(t,n);else if(n=Ah(e,t,n,r),n!==null){var o=$e();jt(n,e,r,o),Jh(n,t,r)}}function xb(e,t,n){var r=Wn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qh(e))Xh(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,l=s(i,n);if(o.hasEagerState=!0,o.eagerState=l,At(l,i)){var c=t.interleaved;c===null?(o.next=o,Bu(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Ah(e,t,o,r),n!==null&&(o=$e(),jt(n,e,r,o),Jh(n,t,r))}}function Qh(e){var t=e.alternate;return e===me||t!==null&&t===me}function Xh(e,t){cs=ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ru(e,n)}}var ua={readContext:ht,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},bb={readContext:ht,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Vp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,Wh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=Ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yb.bind(null,me,e),[r.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:Fp,useDebugValue:Ju,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=Fp(!1),t=e[0];return e=vb.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=me,o=Ft();if(de){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Ne===null)throw Error(_(349));xr&30||Dh(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,Vp(Fh.bind(null,r,s,e),[e]),r.flags|=2048,js(9,Lh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ft(),t=Ne.identifierPrefix;if(de){var n=rn,r=nn;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ts++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wb={readContext:ht,useCallback:Kh,useContext:ht,useEffect:Xu,useImperativeHandle:Gh,useInsertionEffect:$h,useLayoutEffect:Bh,useMemo:Hh,useReducer:jl,useRef:Uh,useState:function(){return jl(Rs)},useDebugValue:Ju,useDeferredValue:function(e){var t=gt();return qh(t,ke.memoizedState,e)},useTransition:function(){var e=jl(Rs)[0],t=gt().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:Oh,useId:Yh,unstable_isNewReconciler:!1},kb={readContext:ht,useCallback:Kh,useContext:ht,useEffect:Xu,useImperativeHandle:Gh,useInsertionEffect:$h,useLayoutEffect:Bh,useMemo:Hh,useReducer:Al,useRef:Uh,useState:function(){return Al(Rs)},useDebugValue:Ju,useDeferredValue:function(e){var t=gt();return ke===null?t.memoizedState=e:qh(t,ke.memoizedState,e)},useTransition:function(){var e=Al(Rs)[0],t=gt().memoizedState;return[e,t]},useMutableSource:_h,useSyncExternalStore:Oh,useId:Yh,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ec(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oa={isMounted:function(e){return(e=e._reactInternals)?Nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$e(),o=Wn(e),s=on(r,o);s.payload=t,n!=null&&(s.callback=n),t=$n(e,s,o),t!==null&&(jt(t,e,o,r),Mi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$e(),o=Wn(e),s=on(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=$n(e,s,o),t!==null&&(jt(t,e,o,r),Mi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$e(),r=Wn(e),o=on(n,r);o.tag=2,t!=null&&(o.callback=t),t=$n(e,o,r),t!==null&&(jt(t,e,r,n),Mi(t,e,r))}};function zp(e,t,n,r,o,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!ks(n,r)||!ks(o,s):!0}function Zh(e,t,n){var r=!1,o=Hn,s=t.contextType;return typeof s=="object"&&s!==null?s=ht(s):(o=Ye(t)?vr:Fe.current,r=t.contextTypes,s=(r=r!=null)?wo(e,o):Hn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function Up(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oa.enqueueReplaceState(t,t.state,null)}function Tc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Wu(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=ht(s):(s=Ye(t)?vr:Fe.current,o.context=wo(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ec(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Oa.enqueueReplaceState(o,o.state,null),aa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function No(e,t){try{var n="",r=t;do n+=Q0(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function Ml(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sb=typeof WeakMap=="function"?WeakMap:Map;function eg(e,t,n){n=on(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pa||(pa=!0,Vc=r),Rc(e,t)},n}function tg(e,t,n){n=on(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Rc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rc(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function $p(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sb;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Lb.bind(null,e,t,n),t.then(e,e))}function Bp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wp(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=on(-1,1),t.tag=2,$n(n,t,1))),n.lanes|=1),e)}var Cb=pn.ReactCurrentOwner,He=!1;function ze(e,t,n,r){t.child=e===null?jh(t,null,n,r):So(t,e.child,n,r)}function Gp(e,t,n,r,o){n=n.render;var s=t.ref;return oo(t,o),r=Yu(e,t,n,r,s,o),n=Qu(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,cn(e,t,o)):(de&&n&&Lu(t),t.flags|=1,ze(e,t,r,o),t.child)}function Kp(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ng(e,t,s,r,o)):(e=Fi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:ks,n(i,r)&&e.ref===t.ref)return cn(e,t,o)}return t.flags|=1,e=Gn(s,r),e.ref=t.ref,e.return=t,t.child=e}function ng(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(ks(s,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=s,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,cn(e,t,o)}return jc(e,t,n,r,o)}function rg(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Yr,Je),Je|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Yr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Yr,Je),Je|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ie(Yr,Je),Je|=r;return ze(e,t,o,n),t.child}function og(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jc(e,t,n,r,o){var s=Ye(n)?vr:Fe.current;return s=wo(t,s),oo(t,o),n=Yu(e,t,n,r,s,o),r=Qu(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,cn(e,t,o)):(de&&r&&Lu(t),t.flags|=1,ze(e,t,n,o),t.child)}function Hp(e,t,n,r,o){if(Ye(n)){var s=!0;na(t)}else s=!1;if(oo(t,o),t.stateNode===null)Oi(e,t),Zh(t,n,r),Tc(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=ht(u):(u=Ye(n)?vr:Fe.current,u=wo(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Up(t,i,r,u),Pn=!1;var h=t.memoizedState;i.state=h,aa(t,r,i,o),c=t.memoizedState,l!==r||h!==c||qe.current||Pn?(typeof d=="function"&&(Ec(t,n,d,r),c=t.memoizedState),(l=Pn||zp(t,n,l,r,h,c,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Mh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:St(t.type,l),i.props=u,p=t.pendingProps,h=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=ht(c):(c=Ye(n)?vr:Fe.current,c=wo(t,c));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==p||h!==c)&&Up(t,i,r,c),Pn=!1,h=t.memoizedState,i.state=h,aa(t,r,i,o);var w=t.memoizedState;l!==p||h!==w||qe.current||Pn?(typeof f=="function"&&(Ec(t,n,f,r),w=t.memoizedState),(u=Pn||zp(t,n,u,r,h,w,c)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=c,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ac(e,t,n,r,s,o)}function Ac(e,t,n,r,o,s){og(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Mp(t,n,!1),cn(e,t,s);r=t.stateNode,Cb.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=So(t,e.child,null,s),t.child=So(t,null,l,s)):ze(e,t,l,s),t.memoizedState=r.state,o&&Mp(t,n,!0),t.child}function sg(e){var t=e.stateNode;t.pendingContext?Ap(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ap(e,t.context,!1),Gu(e,t.containerInfo)}function qp(e,t,n,r,o){return ko(),Vu(o),t.flags|=256,ze(e,t,n,r),t.child}var Mc={dehydrated:null,treeContext:null,retryLane:0};function Ic(e){return{baseLanes:e,cachePool:null,transitions:null}}function ig(e,t,n){var r=t.pendingProps,o=pe.current,s=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(pe,o&1),e===null)return Nc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Fa(i,r,0,null),e=gr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ic(n),t.memoizedState=Mc,e):Zu(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Nb(e,t,i,r,l,o,n);if(s){s=r.fallback,i=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Gn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?s=Gn(l,s):(s=gr(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?Ic(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=Mc,r}return s=e.child,e=s.sibling,r=Gn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zu(e,t){return t=Fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fi(e,t,n,r){return r!==null&&Vu(r),So(t,e.child,null,n),e=Zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nb(e,t,n,r,o,s,i){if(n)return t.flags&256?(t.flags&=-257,r=Ml(Error(_(422))),fi(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=Fa({mode:"visible",children:r.children},o,0,null),s=gr(s,o,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&So(t,e.child,null,i),t.child.memoizedState=Ic(i),t.memoizedState=Mc,s);if(!(t.mode&1))return fi(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(_(419)),r=Ml(s,r,void 0),fi(e,t,i,r)}if(l=(i&e.childLanes)!==0,He||l){if(r=Ne,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,ln(e,o),jt(r,e,o,-1))}return sd(),r=Ml(Error(_(421))),fi(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Fb.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,et=Un(o.nextSibling),tt=t,de=!0,Tt=null,e!==null&&(dt[pt++]=nn,dt[pt++]=rn,dt[pt++]=yr,nn=e.id,rn=e.overflow,yr=t),t=Zu(t,r.children),t.flags|=4096,t)}function Yp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pc(e.return,t,n)}function Il(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function ag(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(ze(e,t,r.children,n),r=pe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yp(e,n,t);else if(e.tag===19)Yp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(pe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&la(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Il(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&la(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Il(t,!0,n,null,s);break;case"together":Il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),br|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pb(e,t,n){switch(t.tag){case 3:sg(t),ko();break;case 5:Ih(t);break;case 1:Ye(t.type)&&na(t);break;case 4:Gu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(sa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?ig(e,t,n):(ie(pe,pe.current&1),e=cn(e,t,n),e!==null?e.sibling:null);ie(pe,pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ag(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(pe,pe.current),r)break;return null;case 22:case 23:return t.lanes=0,rg(e,t,n)}return cn(e,t,n)}var lg,_c,cg,ug;lg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_c=function(){};cg=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,lr(Kt.current);var s=null;switch(n){case"input":o=nc(e,o),r=nc(e,r),s=[];break;case"select":o=fe({},o,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":o=sc(e,o),r=sc(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ea)}ac(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&le("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ug=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wo(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Eb(e,t,n){var r=t.pendingProps;switch(Fu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Ye(t.type)&&ta(),_e(t),null;case 3:return r=t.stateNode,Co(),ce(qe),ce(Fe),Hu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Tt!==null&&($c(Tt),Tt=null))),_c(e,t),_e(t),null;case 5:Ku(t);var o=lr(Es.current);if(n=t.type,e!==null&&t.stateNode!=null)cg(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return _e(t),null}if(e=lr(Kt.current),pi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[$t]=t,r[Ns]=s,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(o=0;o<ts.length;o++)le(ts[o],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":op(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":ip(r,s),le("invalid",r)}ac(n,s),o=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&di(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&di(r.textContent,l,e),o=["children",""+l]):hs.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&le("scroll",r)}switch(n){case"input":ri(r),sp(r,s,!0);break;case"textarea":ri(r),ap(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ea)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ff(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[$t]=t,e[Ns]=r,lg(e,t,!1,!1),t.stateNode=e;e:{switch(i=lc(n,r),n){case"dialog":le("cancel",e),le("close",e),o=r;break;case"iframe":case"object":case"embed":le("load",e),o=r;break;case"video":case"audio":for(o=0;o<ts.length;o++)le(ts[o],e);o=r;break;case"source":le("error",e),o=r;break;case"img":case"image":case"link":le("error",e),le("load",e),o=r;break;case"details":le("toggle",e),o=r;break;case"input":op(e,r),o=nc(e,r),le("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=fe({},r,{value:void 0}),le("invalid",e);break;case"textarea":ip(e,r),o=sc(e,r),le("invalid",e);break;default:o=r}ac(n,o),l=o;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Uf(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Vf(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&gs(e,c):typeof c=="number"&&gs(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hs.hasOwnProperty(s)?c!=null&&s==="onScroll"&&le("scroll",e):c!=null&&Su(e,s,c,i))}switch(n){case"input":ri(e),sp(e,r,!1);break;case"textarea":ri(e),ap(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?eo(e,!!r.multiple,s,!1):r.defaultValue!=null&&eo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)ug(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=lr(Es.current),lr(Kt.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(s=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&di(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return _e(t),null;case 13:if(ce(pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&et!==null&&t.mode&1&&!(t.flags&128))Th(),ko(),t.flags|=98560,s=!1;else if(s=pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(_(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[$t]=t}else ko(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),s=!1}else Tt!==null&&($c(Tt),Tt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Se===0&&(Se=3):sd())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return Co(),_c(e,t),e===null&&Ss(t.stateNode.containerInfo),_e(t),null;case 10:return $u(t.type._context),_e(t),null;case 17:return Ye(t.type)&&ta(),_e(t),null;case 19:if(ce(pe),s=t.memoizedState,s===null)return _e(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)Wo(s,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=la(e),i!==null){for(t.flags|=128,Wo(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(pe,pe.current&1|2),t.child}e=e.sibling}s.tail!==null&&ve()>Po&&(t.flags|=128,r=!0,Wo(s,!1),t.lanes=4194304)}else{if(!r)if(e=la(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!de)return _e(t),null}else 2*ve()-s.renderingStartTime>Po&&n!==1073741824&&(t.flags|=128,r=!0,Wo(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ve(),t.sibling=null,n=pe.current,ie(pe,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return od(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Tb(e,t){switch(Fu(t),t.tag){case 1:return Ye(t.type)&&ta(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Co(),ce(qe),ce(Fe),Hu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ku(t),null;case 13:if(ce(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));ko()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(pe),null;case 4:return Co(),null;case 10:return $u(t.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var hi=!1,Le=!1,Rb=typeof WeakSet=="function"?WeakSet:Set,F=null;function qr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Oc(e,t,n){try{n()}catch(r){ge(e,t,r)}}var Qp=!1;function jb(e,t){if(yc=Xi,e=hh(),Du(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,l=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||o!==0&&p.nodeType!==3||(l=i+o),p!==s||r!==0&&p.nodeType!==3||(c=i+r),p.nodeType===3&&(i+=p.nodeValue.length),(f=p.firstChild)!==null;)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++u===o&&(l=i),h===s&&++d===r&&(c=i),(f=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=f}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(xc={focusedElem:e,selectionRange:n},Xi=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,b=w.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:St(t.type,g),b);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){ge(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return w=Qp,Qp=!1,w}function us(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&Oc(t,n,s)}o=o.next}while(o!==r)}}function Da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dg(e){var t=e.alternate;t!==null&&(e.alternate=null,dg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[Ns],delete t[kc],delete t[pb],delete t[mb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pg(e){return e.tag===5||e.tag===3||e.tag===4}function Xp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ea));else if(r!==4&&(e=e.child,e!==null))for(Lc(e,t,n),e=e.sibling;e!==null;)Lc(e,t,n),e=e.sibling}function Fc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fc(e,t,n),e=e.sibling;e!==null;)Fc(e,t,n),e=e.sibling}var Pe=null,Et=!1;function xn(e,t,n){for(n=n.child;n!==null;)mg(e,t,n),n=n.sibling}function mg(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Ta,n)}catch{}switch(n.tag){case 5:Le||qr(n,t);case 6:var r=Pe,o=Et;Pe=null,xn(e,t,n),Pe=r,Et=o,Pe!==null&&(Et?(e=Pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(Et?(e=Pe,n=n.stateNode,e.nodeType===8?Pl(e.parentNode,n):e.nodeType===1&&Pl(e,n),bs(e)):Pl(Pe,n.stateNode));break;case 4:r=Pe,o=Et,Pe=n.stateNode.containerInfo,Et=!0,xn(e,t,n),Pe=r,Et=o;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&Oc(n,t,i),o=o.next}while(o!==r)}xn(e,t,n);break;case 1:if(!Le&&(qr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ge(n,t,l)}xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,xn(e,t,n),Le=r):xn(e,t,n);break;default:xn(e,t,n)}}function Jp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rb),t.forEach(function(r){var o=Vb.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:Pe=l.stateNode,Et=!1;break e;case 3:Pe=l.stateNode.containerInfo,Et=!0;break e;case 4:Pe=l.stateNode.containerInfo,Et=!0;break e}l=l.return}if(Pe===null)throw Error(_(160));mg(s,i,o),Pe=null,Et=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ge(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fg(t,e),t=t.sibling}function fg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),Dt(e),r&4){try{us(3,e,e.return),Da(3,e)}catch(g){ge(e,e.return,g)}try{us(5,e,e.return)}catch(g){ge(e,e.return,g)}}break;case 1:wt(t,e),Dt(e),r&512&&n!==null&&qr(n,n.return);break;case 5:if(wt(t,e),Dt(e),r&512&&n!==null&&qr(n,n.return),e.flags&32){var o=e.stateNode;try{gs(o,"")}catch(g){ge(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Df(o,s),lc(l,i);var u=lc(l,s);for(i=0;i<c.length;i+=2){var d=c[i],p=c[i+1];d==="style"?Uf(o,p):d==="dangerouslySetInnerHTML"?Vf(o,p):d==="children"?gs(o,p):Su(o,d,p,u)}switch(l){case"input":rc(o,s);break;case"textarea":Lf(o,s);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?eo(o,!!s.multiple,f,!1):h!==!!s.multiple&&(s.defaultValue!=null?eo(o,!!s.multiple,s.defaultValue,!0):eo(o,!!s.multiple,s.multiple?[]:"",!1))}o[Ns]=s}catch(g){ge(e,e.return,g)}}break;case 6:if(wt(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(g){ge(e,e.return,g)}}break;case 3:if(wt(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bs(t.containerInfo)}catch(g){ge(e,e.return,g)}break;case 4:wt(t,e),Dt(e);break;case 13:wt(t,e),Dt(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(nd=ve())),r&4&&Jp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(u=Le)||d,wt(t,e),Le=u):wt(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(p=F=d;F!==null;){switch(h=F,f=h.child,h.tag){case 0:case 11:case 14:case 15:us(4,h,h.return);break;case 1:qr(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){ge(r,n,g)}}break;case 5:qr(h,h.return);break;case 22:if(h.memoizedState!==null){em(p);continue}}f!==null?(f.return=h,F=f):em(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,u?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=zf("display",i))}catch(g){ge(e,e.return,g)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){ge(e,e.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:wt(t,e),Dt(e),r&4&&Jp(e);break;case 21:break;default:wt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pg(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(gs(o,""),r.flags&=-33);var s=Xp(e);Fc(e,s,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=Xp(e);Lc(e,l,i);break;default:throw Error(_(161))}}catch(c){ge(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ab(e,t,n){F=e,hg(e)}function hg(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var o=F,s=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||hi;if(!i){var l=o.alternate,c=l!==null&&l.memoizedState!==null||Le;l=hi;var u=Le;if(hi=i,(Le=c)&&!u)for(F=o;F!==null;)i=F,c=i.child,i.tag===22&&i.memoizedState!==null?tm(o):c!==null?(c.return=i,F=c):tm(o);for(;s!==null;)F=s,hg(s),s=s.sibling;F=o,hi=l,Le=u}Zp(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,F=s):Zp(e)}}function Zp(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Lp(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lp(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&bs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Le||t.flags&512&&Dc(t)}catch(h){ge(t,t.return,h)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function em(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function tm(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Da(4,t)}catch(c){ge(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){ge(t,o,c)}}var s=t.return;try{Dc(t)}catch(c){ge(t,s,c)}break;case 5:var i=t.return;try{Dc(t)}catch(c){ge(t,i,c)}}}catch(c){ge(t,t.return,c)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var Mb=Math.ceil,da=pn.ReactCurrentDispatcher,ed=pn.ReactCurrentOwner,ft=pn.ReactCurrentBatchConfig,ee=0,Ne=null,we=null,Re=0,Je=0,Yr=Xn(0),Se=0,As=null,br=0,La=0,td=0,ds=null,Ke=null,nd=0,Po=1/0,Jt=null,pa=!1,Vc=null,Bn=null,gi=!1,Dn=null,ma=0,ps=0,zc=null,Di=-1,Li=0;function $e(){return ee&6?ve():Di!==-1?Di:Di=ve()}function Wn(e){return e.mode&1?ee&2&&Re!==0?Re&-Re:hb.transition!==null?(Li===0&&(Li=Zf()),Li):(e=oe,e!==0||(e=window.event,e=e===void 0?16:ih(e.type)),e):1}function jt(e,t,n,r){if(50<ps)throw ps=0,zc=null,Error(_(185));$s(e,n,r),(!(ee&2)||e!==Ne)&&(e===Ne&&(!(ee&2)&&(La|=n),Se===4&&Tn(e,Re)),Qe(e,r),n===1&&ee===0&&!(t.mode&1)&&(Po=ve()+500,Ia&&Jn()))}function Qe(e,t){var n=e.callbackNode;hx(e,t);var r=Qi(e,e===Ne?Re:0);if(r===0)n!==null&&up(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&up(n),t===1)e.tag===0?fb(nm.bind(null,e)):Nh(nm.bind(null,e)),ub(function(){!(ee&6)&&Jn()}),n=null;else{switch(eh(r)){case 1:n=Tu;break;case 4:n=Xf;break;case 16:n=Yi;break;case 536870912:n=Jf;break;default:n=Yi}n=Sg(n,gg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gg(e,t){if(Di=-1,Li=0,ee&6)throw Error(_(327));var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var r=Qi(e,e===Ne?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fa(e,r);else{t=r;var o=ee;ee|=2;var s=yg();(Ne!==e||Re!==t)&&(Jt=null,Po=ve()+500,hr(e,t));do try{Ob();break}catch(l){vg(e,l)}while(!0);Uu(),da.current=s,ee=o,we!==null?t=0:(Ne=null,Re=0,t=Se)}if(t!==0){if(t===2&&(o=mc(e),o!==0&&(r=o,t=Uc(e,o))),t===1)throw n=As,hr(e,0),Tn(e,r),Qe(e,ve()),n;if(t===6)Tn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ib(o)&&(t=fa(e,r),t===2&&(s=mc(e),s!==0&&(r=s,t=Uc(e,s))),t===1))throw n=As,hr(e,0),Tn(e,r),Qe(e,ve()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:rr(e,Ke,Jt);break;case 3:if(Tn(e,r),(r&130023424)===r&&(t=nd+500-ve(),10<t)){if(Qi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=wc(rr.bind(null,e,Ke,Jt),t);break}rr(e,Ke,Jt);break;case 4:if(Tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Rt(r);s=1<<i,i=t[i],i>o&&(o=i),r&=~s}if(r=o,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mb(r/1960))-r,10<r){e.timeoutHandle=wc(rr.bind(null,e,Ke,Jt),r);break}rr(e,Ke,Jt);break;case 5:rr(e,Ke,Jt);break;default:throw Error(_(329))}}}return Qe(e,ve()),e.callbackNode===n?gg.bind(null,e):null}function Uc(e,t){var n=ds;return e.current.memoizedState.isDehydrated&&(hr(e,t).flags|=256),e=fa(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&$c(t)),e}function $c(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Ib(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!At(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t){for(t&=~td,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function nm(e){if(ee&6)throw Error(_(327));so();var t=Qi(e,0);if(!(t&1))return Qe(e,ve()),null;var n=fa(e,t);if(e.tag!==0&&n===2){var r=mc(e);r!==0&&(t=r,n=Uc(e,r))}if(n===1)throw n=As,hr(e,0),Tn(e,t),Qe(e,ve()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,Ke,Jt),Qe(e,ve()),null}function rd(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Po=ve()+500,Ia&&Jn())}}function wr(e){Dn!==null&&Dn.tag===0&&!(ee&6)&&so();var t=ee;ee|=1;var n=ft.transition,r=oe;try{if(ft.transition=null,oe=1,e)return e()}finally{oe=r,ft.transition=n,ee=t,!(ee&6)&&Jn()}}function od(){Je=Yr.current,ce(Yr)}function hr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cb(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Fu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ta();break;case 3:Co(),ce(qe),ce(Fe),Hu();break;case 5:Ku(r);break;case 4:Co();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:$u(r.type._context);break;case 22:case 23:od()}n=n.return}if(Ne=e,we=e=Gn(e.current,null),Re=Je=t,Se=0,As=null,td=La=br=0,Ke=ds=null,ar!==null){for(t=0;t<ar.length;t++)if(n=ar[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=o,r.next=i}n.pending=r}ar=null}return e}function vg(e,t){do{var n=we;try{if(Uu(),Ii.current=ua,ca){for(var r=me.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ca=!1}if(xr=0,Ce=ke=me=null,cs=!1,Ts=0,ed.current=null,n===null||n.return===null){Se=1,As=t,we=null;break}e:{var s=e,i=n.return,l=n,c=t;if(t=Re,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=Bp(i);if(f!==null){f.flags&=-257,Wp(f,i,l,s,t),f.mode&1&&$p(s,u,t),t=f,c=u;var w=t.updateQueue;if(w===null){var g=new Set;g.add(c),t.updateQueue=g}else w.add(c);break e}else{if(!(t&1)){$p(s,u,t),sd();break e}c=Error(_(426))}}else if(de&&l.mode&1){var b=Bp(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Wp(b,i,l,s,t),Vu(No(c,l));break e}}s=c=No(c,l),Se!==4&&(Se=2),ds===null?ds=[s]:ds.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=eg(s,c,t);Dp(s,y);break e;case 1:l=c;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Bn===null||!Bn.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var k=tg(s,l,t);Dp(s,k);break e}}s=s.return}while(s!==null)}bg(n)}catch(S){t=S,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function yg(){var e=da.current;return da.current=ua,e===null?ua:e}function sd(){(Se===0||Se===3||Se===2)&&(Se=4),Ne===null||!(br&268435455)&&!(La&268435455)||Tn(Ne,Re)}function fa(e,t){var n=ee;ee|=2;var r=yg();(Ne!==e||Re!==t)&&(Jt=null,hr(e,t));do try{_b();break}catch(o){vg(e,o)}while(!0);if(Uu(),ee=n,da.current=r,we!==null)throw Error(_(261));return Ne=null,Re=0,Se}function _b(){for(;we!==null;)xg(we)}function Ob(){for(;we!==null&&!ix();)xg(we)}function xg(e){var t=kg(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?bg(e):we=t,ed.current=null}function bg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tb(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,we=null;return}}else if(n=Eb(n,t,Je),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Se===0&&(Se=5)}function rr(e,t,n){var r=oe,o=ft.transition;try{ft.transition=null,oe=1,Db(e,t,n,r)}finally{ft.transition=o,oe=r}return null}function Db(e,t,n,r){do so();while(Dn!==null);if(ee&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(gx(e,s),e===Ne&&(we=Ne=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gi||(gi=!0,Sg(Yi,function(){return so(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ft.transition,ft.transition=null;var i=oe;oe=1;var l=ee;ee|=4,ed.current=null,jb(e,n),fg(n,e),nb(xc),Xi=!!yc,xc=yc=null,e.current=n,Ab(n),ax(),ee=l,oe=i,ft.transition=s}else e.current=n;if(gi&&(gi=!1,Dn=e,ma=o),s=e.pendingLanes,s===0&&(Bn=null),ux(n.stateNode),Qe(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(pa)throw pa=!1,e=Vc,Vc=null,e;return ma&1&&e.tag!==0&&so(),s=e.pendingLanes,s&1?e===zc?ps++:(ps=0,zc=e):ps=0,Jn(),null}function so(){if(Dn!==null){var e=eh(ma),t=ft.transition,n=oe;try{if(ft.transition=null,oe=16>e?16:e,Dn===null)var r=!1;else{if(e=Dn,Dn=null,ma=0,ee&6)throw Error(_(331));var o=ee;for(ee|=4,F=e.current;F!==null;){var s=F,i=s.child;if(F.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:us(8,d,s)}var p=d.child;if(p!==null)p.return=d,F=p;else for(;F!==null;){d=F;var h=d.sibling,f=d.return;if(dg(d),d===u){F=null;break}if(h!==null){h.return=f,F=h;break}F=f}}}var w=s.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(g!==null)}}F=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,F=i;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:us(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,F=y;break e}F=s.return}}var v=e.current;for(F=v;F!==null;){i=F;var x=i.child;if(i.subtreeFlags&2064&&x!==null)x.return=i,F=x;else e:for(i=v;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Da(9,l)}}catch(S){ge(l,l.return,S)}if(l===i){F=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,F=k;break e}F=l.return}}if(ee=o,Jn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Ta,e)}catch{}r=!0}return r}finally{oe=n,ft.transition=t}}return!1}function rm(e,t,n){t=No(n,t),t=eg(e,t,1),e=$n(e,t,1),t=$e(),e!==null&&($s(e,1,t),Qe(e,t))}function ge(e,t,n){if(e.tag===3)rm(e,e,n);else for(;t!==null;){if(t.tag===3){rm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=No(n,e),e=tg(t,e,1),t=$n(t,e,1),e=$e(),t!==null&&($s(t,1,e),Qe(t,e));break}}t=t.return}}function Lb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Re&n)===n&&(Se===4||Se===3&&(Re&130023424)===Re&&500>ve()-nd?hr(e,0):td|=n),Qe(e,t)}function wg(e,t){t===0&&(e.mode&1?(t=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):t=1);var n=$e();e=ln(e,t),e!==null&&($s(e,t,n),Qe(e,n))}function Fb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wg(e,n)}function Vb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),wg(e,n)}var kg;kg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Pb(e,t,n);He=!!(e.flags&131072)}else He=!1,de&&t.flags&1048576&&Ph(t,oa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oi(e,t),e=t.pendingProps;var o=wo(t,Fe.current);oo(t,n),o=Yu(null,t,r,e,o,n);var s=Qu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(s=!0,na(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wu(t),o.updater=Oa,t.stateNode=o,o._reactInternals=t,Tc(t,r,e,n),t=Ac(null,t,r,!0,s,n)):(t.tag=0,de&&s&&Lu(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ub(r),e=St(r,e),o){case 0:t=jc(null,t,r,e,n);break e;case 1:t=Hp(null,t,r,e,n);break e;case 11:t=Gp(null,t,r,e,n);break e;case 14:t=Kp(null,t,r,St(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),jc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),Hp(e,t,r,o,n);case 3:e:{if(sg(t),e===null)throw Error(_(387));r=t.pendingProps,s=t.memoizedState,o=s.element,Mh(e,t),aa(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=No(Error(_(423)),t),t=qp(e,t,r,n,o);break e}else if(r!==o){o=No(Error(_(424)),t),t=qp(e,t,r,n,o);break e}else for(et=Un(t.stateNode.containerInfo.firstChild),tt=t,de=!0,Tt=null,n=jh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ko(),r===o){t=cn(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return Ih(t),e===null&&Nc(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,bc(r,o)?i=null:s!==null&&bc(r,s)&&(t.flags|=32),og(e,t),ze(e,t,i,n),t.child;case 6:return e===null&&Nc(t),null;case 13:return ig(e,t,n);case 4:return Gu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=So(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),Gp(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,i=o.value,ie(sa,r._currentValue),r._currentValue=i,s!==null)if(At(s.value,i)){if(s.children===o.children&&!qe.current){t=cn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=on(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Pc(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(_(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Pc(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,oo(t,n),o=ht(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=St(r,t.pendingProps),o=St(r.type,o),Kp(e,t,r,o,n);case 15:return ng(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),Oi(e,t),t.tag=1,Ye(r)?(e=!0,na(t)):e=!1,oo(t,n),Zh(t,r,o),Tc(t,r,o,n),Ac(null,t,r,!0,e,n);case 19:return ag(e,t,n);case 22:return rg(e,t,n)}throw Error(_(156,t.tag))};function Sg(e,t){return Qf(e,t)}function zb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new zb(e,t,n,r)}function id(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ub(e){if(typeof e=="function")return id(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nu)return 11;if(e===Pu)return 14}return 2}function Gn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fi(e,t,n,r,o,s){var i=2;if(r=e,typeof e=="function")id(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Vr:return gr(n.children,o,s,t);case Cu:i=8,o|=8;break;case Jl:return e=mt(12,n,t,o|2),e.elementType=Jl,e.lanes=s,e;case Zl:return e=mt(13,n,t,o),e.elementType=Zl,e.lanes=s,e;case ec:return e=mt(19,n,t,o),e.elementType=ec,e.lanes=s,e;case If:return Fa(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Af:i=10;break e;case Mf:i=9;break e;case Nu:i=11;break e;case Pu:i=14;break e;case Nn:i=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=mt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function gr(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Fa(e,t,n,r){return e=mt(22,e,r,t),e.elementType=If,e.lanes=n,e.stateNode={isHidden:!1},e}function _l(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Ol(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $b(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ad(e,t,n,r,o,s,i,l,c){return e=new $b(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=mt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(s),e}function Bb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cg(e){if(!e)return Hn;e=e._reactInternals;e:{if(Nr(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ye(n))return Ch(e,n,t)}return t}function Ng(e,t,n,r,o,s,i,l,c){return e=ad(n,r,!0,e,o,s,i,l,c),e.context=Cg(null),n=e.current,r=$e(),o=Wn(n),s=on(r,o),s.callback=t??null,$n(n,s,o),e.current.lanes=o,$s(e,o,r),Qe(e,r),e}function Va(e,t,n,r){var o=t.current,s=$e(),i=Wn(o);return n=Cg(n),t.context===null?t.context=n:t.pendingContext=n,t=on(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$n(o,t,i),e!==null&&(jt(e,o,i,s),Mi(e,o,i)),i}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function om(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ld(e,t){om(e,t),(e=e.alternate)&&om(e,t)}function Wb(){return null}var Pg=typeof reportError=="function"?reportError:function(e){console.error(e)};function cd(e){this._internalRoot=e}za.prototype.render=cd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Va(e,t,null,null)};za.prototype.unmount=cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wr(function(){Va(null,e,null,null)}),t[an]=null}};function za(e){this._internalRoot=e}za.prototype.unstable_scheduleHydration=function(e){if(e){var t=rh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&sh(e)}};function ud(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sm(){}function Gb(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var u=ha(i);s.call(u)}}var i=Ng(t,r,e,0,null,!1,!1,"",sm);return e._reactRootContainer=i,e[an]=i.current,Ss(e.nodeType===8?e.parentNode:e),wr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ha(c);l.call(u)}}var c=ad(e,0,!1,null,null,!1,!1,"",sm);return e._reactRootContainer=c,e[an]=c.current,Ss(e.nodeType===8?e.parentNode:e),wr(function(){Va(t,c,n,r)}),c}function $a(e,t,n,r,o){var s=n._reactRootContainer;if(s){var i=s;if(typeof o=="function"){var l=o;o=function(){var c=ha(i);l.call(c)}}Va(t,i,e,o)}else i=Gb(n,t,e,o,r);return ha(i)}th=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=es(t.pendingLanes);n!==0&&(Ru(t,n|1),Qe(t,ve()),!(ee&6)&&(Po=ve()+500,Jn()))}break;case 13:wr(function(){var r=ln(e,1);if(r!==null){var o=$e();jt(r,e,1,o)}}),ld(e,1)}};ju=function(e){if(e.tag===13){var t=ln(e,134217728);if(t!==null){var n=$e();jt(t,e,134217728,n)}ld(e,134217728)}};nh=function(e){if(e.tag===13){var t=Wn(e),n=ln(e,t);if(n!==null){var r=$e();jt(n,e,t,r)}ld(e,t)}};rh=function(){return oe};oh=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};uc=function(e,t,n){switch(t){case"input":if(rc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ma(r);if(!o)throw Error(_(90));Of(r),rc(r,o)}}}break;case"textarea":Lf(e,n);break;case"select":t=n.value,t!=null&&eo(e,!!n.multiple,t,!1)}};Wf=rd;Gf=wr;var Kb={usingClientEntryPoint:!1,Events:[Ws,Br,Ma,$f,Bf,rd]},Go={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hb={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qf(e),e===null?null:e.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||Wb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{Ta=vi.inject(Hb),Gt=vi}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kb;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(t))throw Error(_(200));return Bb(e,t,null,n)};st.createRoot=function(e,t){if(!ud(e))throw Error(_(299));var n=!1,r="",o=Pg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ad(e,1,!1,null,null,n,!1,r,o),e[an]=t.current,Ss(e.nodeType===8?e.parentNode:e),new cd(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=qf(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return wr(e)};st.hydrate=function(e,t,n){if(!Ua(t))throw Error(_(200));return $a(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!ud(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",i=Pg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Ng(t,null,e,1,n??null,o,!1,s,i),e[an]=t.current,Ss(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new za(t)};st.render=function(e,t,n){if(!Ua(t))throw Error(_(200));return $a(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!Ua(e))throw Error(_(40));return e._reactRootContainer?(wr(function(){$a(null,null,e,!1,function(){e._reactRootContainer=null,e[an]=null})}),!0):!1};st.unstable_batchedUpdates=rd;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ua(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return $a(e,t,n,!1,r)};st.version="18.3.1-next-f1338f8080-20240426";function Eg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eg)}catch(e){console.error(e)}}Eg(),Ef.exports=st;var Ks=Ef.exports;const dd=hf(Ks);var Tg,im=Ks;Tg=im.createRoot,im.hydrateRoot;const qb=1,Yb=1e6;let Dl=0;function Qb(){return Dl=(Dl+1)%Number.MAX_SAFE_INTEGER,Dl.toString()}const Ll=new Map,am=e=>{if(Ll.has(e))return;const t=setTimeout(()=>{Ll.delete(e),ms({type:"REMOVE_TOAST",toastId:e})},Yb);Ll.set(e,t)},Xb=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,qb)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?am(n):e.toasts.forEach(r=>{am(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},Vi=[];let zi={toasts:[]};function ms(e){zi=Xb(zi,e),Vi.forEach(t=>{t(zi)})}function Jb({...e}){const t=Qb(),n=o=>ms({type:"UPDATE_TOAST",toast:{...o,id:t}}),r=()=>ms({type:"DISMISS_TOAST",toastId:t});return ms({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:o=>{o||r()}}}),{id:t,dismiss:r,update:n}}function Zb(){const[e,t]=m.useState(zi);return m.useEffect(()=>(Vi.push(t),()=>{const n=Vi.indexOf(t);n>-1&&Vi.splice(n,1)}),[e]),{...e,toast:Jb,dismiss:n=>ms({type:"DISMISS_TOAST",toastId:n})}}function q(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function lm(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function pd(...e){return t=>{let n=!1;const r=e.map(o=>{const s=lm(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():lm(e[o],null)}}}}function ye(...e){return m.useCallback(pd(...e),e)}function ew(e,t){const n=m.createContext(t),r=s=>{const{children:i,...l}=s,c=m.useMemo(()=>l,Object.values(l));return a.jsx(n.Provider,{value:c,children:i})};r.displayName=e+"Provider";function o(s){const i=m.useContext(n);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return[r,o]}function Pr(e,t=[]){let n=[];function r(s,i){const l=m.createContext(i),c=n.length;n=[...n,i];const u=p=>{var y;const{scope:h,children:f,...w}=p,g=((y=h==null?void 0:h[e])==null?void 0:y[c])||l,b=m.useMemo(()=>w,Object.values(w));return a.jsx(g.Provider,{value:b,children:f})};u.displayName=s+"Provider";function d(p,h){var g;const f=((g=h==null?void 0:h[e])==null?void 0:g[c])||l,w=m.useContext(f);if(w)return w;if(i!==void 0)return i;throw new Error(`\`${p}\` must be used within \`${s}\``)}return[u,d]}const o=()=>{const s=n.map(i=>m.createContext(i));return function(l){const c=(l==null?void 0:l[e])||s;return m.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return o.scopeName=e,[r,tw(o,...t)]}function tw(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const i=r.reduce((l,{useScope:c,scopeName:u})=>{const p=c(s)[`__scope${u}`];return{...l,...p}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function Ms(e){const t=rw(e),n=m.forwardRef((r,o)=>{const{children:s,...i}=r,l=m.Children.toArray(s),c=l.find(sw);if(c){const u=c.props.children,d=l.map(p=>p===c?m.Children.count(u)>1?m.Children.only(null):m.isValidElement(u)?u.props.children:null:p);return a.jsx(t,{...i,ref:o,children:m.isValidElement(u)?m.cloneElement(u,void 0,d):null})}return a.jsx(t,{...i,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}var nw=Ms("Slot");function rw(e){const t=m.forwardRef((n,r)=>{const{children:o,...s}=n;if(m.isValidElement(o)){const i=aw(o),l=iw(s,o.props);return o.type!==m.Fragment&&(l.ref=r?pd(r,i):i),m.cloneElement(o,l)}return m.Children.count(o)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Rg=Symbol("radix.slottable");function ow(e){const t=({children:n})=>a.jsx(a.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Rg,t}function sw(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Rg}function iw(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...l)=>{const c=s(...l);return o(...l),c}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function aw(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function md(e){const t=e+"CollectionProvider",[n,r]=Pr(t),[o,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),i=g=>{const{scope:b,children:y}=g,v=O.useRef(null),x=O.useRef(new Map).current;return a.jsx(o,{scope:b,itemMap:x,collectionRef:v,children:y})};i.displayName=t;const l=e+"CollectionSlot",c=Ms(l),u=O.forwardRef((g,b)=>{const{scope:y,children:v}=g,x=s(l,y),k=ye(b,x.collectionRef);return a.jsx(c,{ref:k,children:v})});u.displayName=l;const d=e+"CollectionItemSlot",p="data-radix-collection-item",h=Ms(d),f=O.forwardRef((g,b)=>{const{scope:y,children:v,...x}=g,k=O.useRef(null),S=ye(b,k),N=s(d,y);return O.useEffect(()=>(N.itemMap.set(k,{ref:k,...x}),()=>void N.itemMap.delete(k))),a.jsx(h,{[p]:"",ref:S,children:v})});f.displayName=d;function w(g){const b=s(e+"CollectionConsumer",g);return O.useCallback(()=>{const v=b.collectionRef.current;if(!v)return[];const x=Array.from(v.querySelectorAll(`[${p}]`));return Array.from(b.itemMap.values()).sort((N,E)=>x.indexOf(N.ref.current)-x.indexOf(E.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:i,Slot:u,ItemSlot:f},w,r]}var lw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Z=lw.reduce((e,t)=>{const n=Ms(`Primitive.${t}`),r=m.forwardRef((o,s)=>{const{asChild:i,...l}=o,c=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(c,{...l,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function ga(e,t){e&&Ks.flushSync(()=>e.dispatchEvent(t))}function Te(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function cw(e,t=globalThis==null?void 0:globalThis.document){const n=Te(e);m.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var uw="DismissableLayer",Bc="dismissableLayer.update",dw="dismissableLayer.pointerDownOutside",pw="dismissableLayer.focusOutside",cm,jg=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Hs=m.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:s,onInteractOutside:i,onDismiss:l,...c}=e,u=m.useContext(jg),[d,p]=m.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,f]=m.useState({}),w=ye(t,E=>p(E)),g=Array.from(u.layers),[b]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),y=g.indexOf(b),v=d?g.indexOf(d):-1,x=u.layersWithOutsidePointerEventsDisabled.size>0,k=v>=y,S=fw(E=>{const C=E.target,P=[...u.branches].some(I=>I.contains(C));!k||P||(o==null||o(E),i==null||i(E),E.defaultPrevented||l==null||l())},h),N=hw(E=>{const C=E.target;[...u.branches].some(I=>I.contains(C))||(s==null||s(E),i==null||i(E),E.defaultPrevented||l==null||l())},h);return cw(E=>{v===u.layers.size-1&&(r==null||r(E),!E.defaultPrevented&&l&&(E.preventDefault(),l()))},h),m.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(cm=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),um(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=cm)}},[d,h,n,u]),m.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),um())},[d,u]),m.useEffect(()=>{const E=()=>f({});return document.addEventListener(Bc,E),()=>document.removeEventListener(Bc,E)},[]),a.jsx(Z.div,{...c,ref:w,style:{pointerEvents:x?k?"auto":"none":void 0,...e.style},onFocusCapture:q(e.onFocusCapture,N.onFocusCapture),onBlurCapture:q(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:q(e.onPointerDownCapture,S.onPointerDownCapture)})});Hs.displayName=uw;var mw="DismissableLayerBranch",Ag=m.forwardRef((e,t)=>{const n=m.useContext(jg),r=m.useRef(null),o=ye(t,r);return m.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),a.jsx(Z.div,{...e,ref:o})});Ag.displayName=mw;function fw(e,t=globalThis==null?void 0:globalThis.document){const n=Te(e),r=m.useRef(!1),o=m.useRef(()=>{});return m.useEffect(()=>{const s=l=>{if(l.target&&!r.current){let c=function(){Mg(dw,n,u,{discrete:!0})};const u={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",s),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function hw(e,t=globalThis==null?void 0:globalThis.document){const n=Te(e),r=m.useRef(!1);return m.useEffect(()=>{const o=s=>{s.target&&!r.current&&Mg(pw,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function um(){const e=new CustomEvent(Bc);document.dispatchEvent(e)}function Mg(e,t,n,{discrete:r}){const o=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?ga(o,s):o.dispatchEvent(s)}var gw=Hs,vw=Ag,ot=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{},yw="Portal",fd=m.forwardRef((e,t)=>{var l;const{container:n,...r}=e,[o,s]=m.useState(!1);ot(()=>s(!0),[]);const i=n||o&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return i?dd.createPortal(a.jsx(Z.div,{...r,ref:t}),i):null});fd.displayName=yw;function xw(e,t){return m.useReducer((n,r)=>t[n][r]??n,e)}var _t=e=>{const{present:t,children:n}=e,r=bw(t),o=typeof n=="function"?n({present:r.isPresent}):m.Children.only(n),s=ye(r.ref,ww(o));return typeof n=="function"||r.isPresent?m.cloneElement(o,{ref:s}):null};_t.displayName="Presence";function bw(e){const[t,n]=m.useState(),r=m.useRef(null),o=m.useRef(e),s=m.useRef("none"),i=e?"mounted":"unmounted",[l,c]=xw(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const u=yi(r.current);s.current=l==="mounted"?u:"none"},[l]),ot(()=>{const u=r.current,d=o.current;if(d!==e){const h=s.current,f=yi(u);e?c("MOUNT"):f==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(d&&h!==f?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,c]),ot(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,p=f=>{const g=yi(r.current).includes(f.animationName);if(f.target===t&&g&&(c("ANIMATION_END"),!o.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},h=f=>{f.target===t&&(s.current=yi(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:m.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function yi(e){return(e==null?void 0:e.animationName)||"none"}function ww(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var kw=bu[" useInsertionEffect ".trim().toString()]||ot;function qs({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,s,i]=Sw({defaultProp:t,onChange:n}),l=e!==void 0,c=l?e:o;{const d=m.useRef(e!==void 0);m.useEffect(()=>{const p=d.current;p!==l&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=l},[l,r])}const u=m.useCallback(d=>{var p;if(l){const h=Cw(d)?d(e):d;h!==e&&((p=i.current)==null||p.call(i,h))}else s(d)},[l,e,s,i]);return[c,u]}function Sw({defaultProp:e,onChange:t}){const[n,r]=m.useState(e),o=m.useRef(n),s=m.useRef(t);return kw(()=>{s.current=t},[t]),m.useEffect(()=>{var i;o.current!==n&&((i=s.current)==null||i.call(s,n),o.current=n)},[n,o]),[n,r,s]}function Cw(e){return typeof e=="function"}var Nw=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Pw="VisuallyHidden",Ba=m.forwardRef((e,t)=>a.jsx(Z.span,{...e,ref:t,style:{...Nw,...e.style}}));Ba.displayName=Pw;var Ig=Ba,hd="ToastProvider",[gd,Ew,Tw]=md("Toast"),[_g,OP]=Pr("Toast",[Tw]),[Rw,Wa]=_g(hd),Og=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:s=50,children:i}=e,[l,c]=m.useState(null),[u,d]=m.useState(0),p=m.useRef(!1),h=m.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${hd}\`. Expected non-empty \`string\`.`),a.jsx(gd.Provider,{scope:t,children:a.jsx(Rw,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:s,toastCount:u,viewport:l,onViewportChange:c,onToastAdd:m.useCallback(()=>d(f=>f+1),[]),onToastRemove:m.useCallback(()=>d(f=>f-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:h,children:i})})};Og.displayName=hd;var Dg="ToastViewport",jw=["F8"],Wc="toast.viewportPause",Gc="toast.viewportResume",Lg=m.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=jw,label:o="Notifications ({hotkey})",...s}=e,i=Wa(Dg,n),l=Ew(n),c=m.useRef(null),u=m.useRef(null),d=m.useRef(null),p=m.useRef(null),h=ye(t,p,i.onViewportChange),f=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),w=i.toastCount>0;m.useEffect(()=>{const b=y=>{var x;r.length!==0&&r.every(k=>y[k]||y.code===k)&&((x=p.current)==null||x.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),m.useEffect(()=>{const b=c.current,y=p.current;if(w&&b&&y){const v=()=>{if(!i.isClosePausedRef.current){const N=new CustomEvent(Wc);y.dispatchEvent(N),i.isClosePausedRef.current=!0}},x=()=>{if(i.isClosePausedRef.current){const N=new CustomEvent(Gc);y.dispatchEvent(N),i.isClosePausedRef.current=!1}},k=N=>{!b.contains(N.relatedTarget)&&x()},S=()=>{b.contains(document.activeElement)||x()};return b.addEventListener("focusin",v),b.addEventListener("focusout",k),b.addEventListener("pointermove",v),b.addEventListener("pointerleave",S),window.addEventListener("blur",v),window.addEventListener("focus",x),()=>{b.removeEventListener("focusin",v),b.removeEventListener("focusout",k),b.removeEventListener("pointermove",v),b.removeEventListener("pointerleave",S),window.removeEventListener("blur",v),window.removeEventListener("focus",x)}}},[w,i.isClosePausedRef]);const g=m.useCallback(({tabbingDirection:b})=>{const v=l().map(x=>{const k=x.ref.current,S=[k,...Bw(k)];return b==="forwards"?S:S.reverse()});return(b==="forwards"?v.reverse():v).flat()},[l]);return m.useEffect(()=>{const b=p.current;if(b){const y=v=>{var S,N,E;const x=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!x){const C=document.activeElement,P=v.shiftKey;if(v.target===b&&P){(S=u.current)==null||S.focus();return}const T=g({tabbingDirection:P?"backwards":"forwards"}),D=T.findIndex(R=>R===C);Fl(T.slice(D+1))?v.preventDefault():P?(N=u.current)==null||N.focus():(E=d.current)==null||E.focus()}};return b.addEventListener("keydown",y),()=>b.removeEventListener("keydown",y)}},[l,g]),a.jsxs(vw,{ref:c,role:"region","aria-label":o.replace("{hotkey}",f),tabIndex:-1,style:{pointerEvents:w?void 0:"none"},children:[w&&a.jsx(Kc,{ref:u,onFocusFromOutsideViewport:()=>{const b=g({tabbingDirection:"forwards"});Fl(b)}}),a.jsx(gd.Slot,{scope:n,children:a.jsx(Z.ol,{tabIndex:-1,...s,ref:h})}),w&&a.jsx(Kc,{ref:d,onFocusFromOutsideViewport:()=>{const b=g({tabbingDirection:"backwards"});Fl(b)}})]})});Lg.displayName=Dg;var Fg="ToastFocusProxy",Kc=m.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,s=Wa(Fg,n);return a.jsx(Ba,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:i=>{var u;const l=i.relatedTarget;!((u=s.viewport)!=null&&u.contains(l))&&r()}})});Kc.displayName=Fg;var Ys="Toast",Aw="toast.swipeStart",Mw="toast.swipeMove",Iw="toast.swipeCancel",_w="toast.swipeEnd",Vg=m.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:o,onOpenChange:s,...i}=e,[l,c]=qs({prop:r,defaultProp:o??!0,onChange:s,caller:Ys});return a.jsx(_t,{present:n||l,children:a.jsx(Lw,{open:l,...i,ref:t,onClose:()=>c(!1),onPause:Te(e.onPause),onResume:Te(e.onResume),onSwipeStart:q(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:q(e.onSwipeMove,u=>{const{x:d,y:p}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:q(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:q(e.onSwipeEnd,u=>{const{x:d,y:p}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),c(!1)})})})});Vg.displayName=Ys;var[Ow,Dw]=_g(Ys,{onClose(){}}),Lw=m.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:o,open:s,onClose:i,onEscapeKeyDown:l,onPause:c,onResume:u,onSwipeStart:d,onSwipeMove:p,onSwipeCancel:h,onSwipeEnd:f,...w}=e,g=Wa(Ys,n),[b,y]=m.useState(null),v=ye(t,R=>y(R)),x=m.useRef(null),k=m.useRef(null),S=o||g.duration,N=m.useRef(0),E=m.useRef(S),C=m.useRef(0),{onToastAdd:P,onToastRemove:I}=g,V=Te(()=>{var U;(b==null?void 0:b.contains(document.activeElement))&&((U=g.viewport)==null||U.focus()),i()}),T=m.useCallback(R=>{!R||R===1/0||(window.clearTimeout(C.current),N.current=new Date().getTime(),C.current=window.setTimeout(V,R))},[V]);m.useEffect(()=>{const R=g.viewport;if(R){const U=()=>{T(E.current),u==null||u()},$=()=>{const B=new Date().getTime()-N.current;E.current=E.current-B,window.clearTimeout(C.current),c==null||c()};return R.addEventListener(Wc,$),R.addEventListener(Gc,U),()=>{R.removeEventListener(Wc,$),R.removeEventListener(Gc,U)}}},[g.viewport,S,c,u,T]),m.useEffect(()=>{s&&!g.isClosePausedRef.current&&T(S)},[s,S,g.isClosePausedRef,T]),m.useEffect(()=>(P(),()=>I()),[P,I]);const D=m.useMemo(()=>b?Kg(b):null,[b]);return g.viewport?a.jsxs(a.Fragment,{children:[D&&a.jsx(Fw,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:D}),a.jsx(Ow,{scope:n,onClose:V,children:Ks.createPortal(a.jsx(gd.ItemSlot,{scope:n,children:a.jsx(gw,{asChild:!0,onEscapeKeyDown:q(l,()=>{g.isFocusedToastEscapeKeyDownRef.current||V(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:a.jsx(Z.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":g.swipeDirection,...w,ref:v,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:q(e.onKeyDown,R=>{R.key==="Escape"&&(l==null||l(R.nativeEvent),R.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,V()))}),onPointerDown:q(e.onPointerDown,R=>{R.button===0&&(x.current={x:R.clientX,y:R.clientY})}),onPointerMove:q(e.onPointerMove,R=>{if(!x.current)return;const U=R.clientX-x.current.x,$=R.clientY-x.current.y,B=!!k.current,j=["left","right"].includes(g.swipeDirection),M=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,L=j?M(0,U):0,K=j?0:M(0,$),z=R.pointerType==="touch"?10:2,Y={x:L,y:K},X={originalEvent:R,delta:Y};B?(k.current=Y,xi(Mw,p,X,{discrete:!1})):dm(Y,g.swipeDirection,z)?(k.current=Y,xi(Aw,d,X,{discrete:!1}),R.target.setPointerCapture(R.pointerId)):(Math.abs(U)>z||Math.abs($)>z)&&(x.current=null)}),onPointerUp:q(e.onPointerUp,R=>{const U=k.current,$=R.target;if($.hasPointerCapture(R.pointerId)&&$.releasePointerCapture(R.pointerId),k.current=null,x.current=null,U){const B=R.currentTarget,j={originalEvent:R,delta:U};dm(U,g.swipeDirection,g.swipeThreshold)?xi(_w,f,j,{discrete:!0}):xi(Iw,h,j,{discrete:!0}),B.addEventListener("click",M=>M.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),Fw=e=>{const{__scopeToast:t,children:n,...r}=e,o=Wa(Ys,t),[s,i]=m.useState(!1),[l,c]=m.useState(!1);return Uw(()=>i(!0)),m.useEffect(()=>{const u=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(u)},[]),l?null:a.jsx(fd,{asChild:!0,children:a.jsx(Ba,{...r,children:s&&a.jsxs(a.Fragment,{children:[o.label," ",n]})})})},Vw="ToastTitle",zg=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(Z.div,{...r,ref:t})});zg.displayName=Vw;var zw="ToastDescription",Ug=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(Z.div,{...r,ref:t})});Ug.displayName=zw;var $g="ToastAction",Bg=m.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?a.jsx(Gg,{altText:n,asChild:!0,children:a.jsx(vd,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${$g}\`. Expected non-empty \`string\`.`),null)});Bg.displayName=$g;var Wg="ToastClose",vd=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,o=Dw(Wg,n);return a.jsx(Gg,{asChild:!0,children:a.jsx(Z.button,{type:"button",...r,ref:t,onClick:q(e.onClick,o.onClose)})})});vd.displayName=Wg;var Gg=m.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...o}=e;return a.jsx(Z.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function Kg(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),$w(r)){const o=r.ariaHidden||r.hidden||r.style.display==="none",s=r.dataset.radixToastAnnounceExclude==="";if(!o)if(s){const i=r.dataset.radixToastAnnounceAlt;i&&t.push(i)}else t.push(...Kg(r))}}),t}function xi(e,t,n,{discrete:r}){const o=n.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?ga(o,s):o.dispatchEvent(s)}var dm=(e,t,n=0)=>{const r=Math.abs(e.x),o=Math.abs(e.y),s=r>o;return t==="left"||t==="right"?s&&r>n:!s&&o>n};function Uw(e=()=>{}){const t=Te(e);ot(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function $w(e){return e.nodeType===e.ELEMENT_NODE}function Bw(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Fl(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var Ww=Og,Hg=Lg,qg=Vg,Yg=zg,Qg=Ug,Xg=Bg,Jg=vd;function Zg(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Zg(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function ev(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Zg(e))&&(r&&(r+=" "),r+=t);return r}const pm=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,mm=ev,Ga=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return mm(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:s}=t,i=Object.keys(o).map(u=>{const d=n==null?void 0:n[u],p=s==null?void 0:s[u];if(d===null)return null;const h=pm(d)||pm(p);return o[u][h]}),l=n&&Object.entries(n).reduce((u,d)=>{let[p,h]=d;return h===void 0||(u[p]=h),u},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:p,className:h,...f}=d;return Object.entries(f).every(w=>{let[g,b]=w;return Array.isArray(b)?b.includes({...s,...l}[g]):{...s,...l}[g]===b})?[...u,p,h]:u},[]);return mm(e,i,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tv=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:s,iconNode:i,...l},c)=>m.createElement("svg",{ref:c,...Kw,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:tv("lucide",o),...l},[...i.map(([u,d])=>m.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(e,t)=>{const n=m.forwardRef(({className:r,...o},s)=>m.createElement(Hw,{ref:s,iconNode:t,className:tv(`lucide-${Gw(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=J("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=J("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=J("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=J("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=J("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=J("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=J("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=J("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=J("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=J("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=J("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=J("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=J("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=J("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=J("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=J("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=J("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=J("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=J("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=J("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=J("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=J("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=J("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=J("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=J("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=J("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=J("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=J("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=J("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=J("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=J("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=J("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=J("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=J("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),xd="-",h1=e=>{const t=v1(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:i=>{const l=i.split(xd);return l[0]===""&&l.length!==1&&l.shift(),rv(l,t)||g1(i)},getConflictingClassGroupIds:(i,l)=>{const c=n[i]||[];return l&&r[i]?[...c,...r[i]]:c}}},rv=(e,t)=>{var i;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?rv(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const s=e.join(xd);return(i=t.validators.find(({validator:l})=>l(s)))==null?void 0:i.classGroupId},gm=/^\[(.+)\]$/,g1=e=>{if(gm.test(e)){const t=gm.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},v1=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return x1(Object.entries(e.classGroups),n).forEach(([s,i])=>{qc(i,r,s,t)}),r},qc=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){const s=o===""?t:vm(t,o);s.classGroupId=n;return}if(typeof o=="function"){if(y1(o)){qc(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([s,i])=>{qc(i,vm(t,s),n,r)})})},vm=(e,t)=>{let n=e;return t.split(xd).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},y1=e=>e.isThemeGetter,x1=(e,t)=>t?e.map(([n,r])=>{const o=r.map(s=>typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([i,l])=>[t+i,l])):s);return[n,o]}):e,b1=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const o=(s,i)=>{n.set(s,i),t++,t>e&&(t=0,r=n,n=new Map)};return{get(s){let i=n.get(s);if(i!==void 0)return i;if((i=r.get(s))!==void 0)return o(s,i),i},set(s,i){n.has(s)?n.set(s,i):o(s,i)}}},ov="!",w1=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],s=t.length,i=l=>{const c=[];let u=0,d=0,p;for(let b=0;b<l.length;b++){let y=l[b];if(u===0){if(y===o&&(r||l.slice(b,b+s)===t)){c.push(l.slice(d,b)),d=b+s;continue}if(y==="/"){p=b;continue}}y==="["?u++:y==="]"&&u--}const h=c.length===0?l:l.substring(d),f=h.startsWith(ov),w=f?h.substring(1):h,g=p&&p>d?p-d:void 0;return{modifiers:c,hasImportantModifier:f,baseClassName:w,maybePostfixModifierPosition:g}};return n?l=>n({className:l,parseClassName:i}):i},k1=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},S1=e=>({cache:b1(e.cacheSize),parseClassName:w1(e),...h1(e)}),C1=/\s+/,N1=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,s=[],i=e.trim().split(C1);let l="";for(let c=i.length-1;c>=0;c-=1){const u=i[c],{modifiers:d,hasImportantModifier:p,baseClassName:h,maybePostfixModifierPosition:f}=n(u);let w=!!f,g=r(w?h.substring(0,f):h);if(!g){if(!w){l=u+(l.length>0?" "+l:l);continue}if(g=r(h),!g){l=u+(l.length>0?" "+l:l);continue}w=!1}const b=k1(d).join(":"),y=p?b+ov:b,v=y+g;if(s.includes(v))continue;s.push(v);const x=o(g,w);for(let k=0;k<x.length;++k){const S=x[k];s.push(y+S)}l=u+(l.length>0?" "+l:l)}return l};function P1(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=sv(t))&&(r&&(r+=" "),r+=n);return r}const sv=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=sv(e[r]))&&(n&&(n+=" "),n+=t);return n};function E1(e,...t){let n,r,o,s=i;function i(c){const u=t.reduce((d,p)=>p(d),e());return n=S1(u),r=n.cache.get,o=n.cache.set,s=l,l(c)}function l(c){const u=r(c);if(u)return u;const d=N1(c,n);return o(c,d),d}return function(){return s(P1.apply(null,arguments))}}const ae=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},iv=/^\[(?:([a-z-]+):)?(.+)\]$/i,T1=/^\d+\/\d+$/,R1=new Set(["px","full","screen"]),j1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,A1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,M1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,I1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,_1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Qt=e=>io(e)||R1.has(e)||T1.test(e),bn=e=>Io(e,"length",$1),io=e=>!!e&&!Number.isNaN(Number(e)),zl=e=>Io(e,"number",io),Ko=e=>!!e&&Number.isInteger(Number(e)),O1=e=>e.endsWith("%")&&io(e.slice(0,-1)),H=e=>iv.test(e),wn=e=>j1.test(e),D1=new Set(["length","size","percentage"]),L1=e=>Io(e,D1,av),F1=e=>Io(e,"position",av),V1=new Set(["image","url"]),z1=e=>Io(e,V1,W1),U1=e=>Io(e,"",B1),Ho=()=>!0,Io=(e,t,n)=>{const r=iv.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},$1=e=>A1.test(e)&&!M1.test(e),av=()=>!1,B1=e=>I1.test(e),W1=e=>_1.test(e),G1=()=>{const e=ae("colors"),t=ae("spacing"),n=ae("blur"),r=ae("brightness"),o=ae("borderColor"),s=ae("borderRadius"),i=ae("borderSpacing"),l=ae("borderWidth"),c=ae("contrast"),u=ae("grayscale"),d=ae("hueRotate"),p=ae("invert"),h=ae("gap"),f=ae("gradientColorStops"),w=ae("gradientColorStopPositions"),g=ae("inset"),b=ae("margin"),y=ae("opacity"),v=ae("padding"),x=ae("saturate"),k=ae("scale"),S=ae("sepia"),N=ae("skew"),E=ae("space"),C=ae("translate"),P=()=>["auto","contain","none"],I=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",H,t],T=()=>[H,t],D=()=>["",Qt,bn],R=()=>["auto",io,H],U=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],$=()=>["solid","dashed","dotted","double","none"],B=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],j=()=>["start","end","center","between","around","evenly","stretch"],M=()=>["","0",H],L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>[io,H];return{cacheSize:500,separator:":",theme:{colors:[Ho],spacing:[Qt,bn],blur:["none","",wn,H],brightness:K(),borderColor:[e],borderRadius:["none","","full",wn,H],borderSpacing:T(),borderWidth:D(),contrast:K(),grayscale:M(),hueRotate:K(),invert:M(),gap:T(),gradientColorStops:[e],gradientColorStopPositions:[O1,bn],inset:V(),margin:V(),opacity:K(),padding:T(),saturate:K(),scale:K(),sepia:M(),skew:K(),space:T(),translate:T()},classGroups:{aspect:[{aspect:["auto","square","video",H]}],container:["container"],columns:[{columns:[wn]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...U(),H]}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ko,H]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",H]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",Ko,H]}],"grid-cols":[{"grid-cols":[Ho]}],"col-start-end":[{col:["auto",{span:["full",Ko,H]},H]}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":[Ho]}],"row-start-end":[{row:["auto",{span:[Ko,H]},H]}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",H]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",H]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...j()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...j(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...j(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",H,t]}],"min-w":[{"min-w":[H,t,"min","max","fit"]}],"max-w":[{"max-w":[H,t,"none","full","min","max","fit","prose",{screen:[wn]},wn]}],h:[{h:[H,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[H,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[H,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[H,t,"auto","min","max","fit"]}],"font-size":[{text:["base",wn,bn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",zl]}],"font-family":[{font:[Ho]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",H]}],"line-clamp":[{"line-clamp":["none",io,zl]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Qt,H]}],"list-image":[{"list-image":["none",H]}],"list-style-type":[{list:["none","disc","decimal",H]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...$(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Qt,bn]}],"underline-offset":[{"underline-offset":["auto",Qt,H]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:T()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",H]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",H]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...U(),F1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",L1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},z1]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[...$(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:$()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...$()]}],"outline-offset":[{"outline-offset":[Qt,H]}],"outline-w":[{outline:[Qt,bn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[Qt,bn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",wn,U1]}],"shadow-color":[{shadow:[Ho]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...B(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":B()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",wn,H]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[p]}],saturate:[{saturate:[x]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",H]}],duration:[{duration:K()}],ease:[{ease:["linear","in","out","in-out",H]}],delay:[{delay:K()}],animate:[{animate:["none","spin","ping","pulse","bounce",H]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[Ko,H]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",H]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",H]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",H]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Qt,bn,zl]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},K1=E1(G1);function ne(...e){return K1(ev(e))}const H1=Ww,lv=m.forwardRef(({className:e,...t},n)=>a.jsx(Hg,{ref:n,className:ne("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));lv.displayName=Hg.displayName;const q1=Ga("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),cv=m.forwardRef(({className:e,variant:t,...n},r)=>a.jsx(qg,{ref:r,className:ne(q1({variant:t}),e),...n}));cv.displayName=qg.displayName;const Y1=m.forwardRef(({className:e,...t},n)=>a.jsx(Xg,{ref:n,className:ne("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));Y1.displayName=Xg.displayName;const uv=m.forwardRef(({className:e,...t},n)=>a.jsx(Jg,{ref:n,className:ne("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:a.jsx(yd,{className:"h-4 w-4"})}));uv.displayName=Jg.displayName;const dv=m.forwardRef(({className:e,...t},n)=>a.jsx(Yg,{ref:n,className:ne("text-sm font-semibold",e),...t}));dv.displayName=Yg.displayName;const pv=m.forwardRef(({className:e,...t},n)=>a.jsx(Qg,{ref:n,className:ne("text-sm opacity-90",e),...t}));pv.displayName=Qg.displayName;function Q1(){const{toasts:e}=Zb();return a.jsxs(H1,{children:[e.map(function({id:t,title:n,description:r,action:o,...s}){return a.jsxs(cv,{...s,children:[a.jsxs("div",{className:"grid gap-1",children:[n&&a.jsx(dv,{children:n}),r&&a.jsx(pv,{children:r})]}),o,a.jsx(uv,{})]},t)}),a.jsx(lv,{})]})}var ym=["light","dark"],X1="(prefers-color-scheme: dark)",J1=m.createContext(void 0),Z1={setTheme:e=>{},themes:[]},ek=()=>{var e;return(e=m.useContext(J1))!=null?e:Z1};m.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:o,defaultTheme:s,value:i,attrs:l,nonce:c})=>{let u=s==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(w=>`'${w}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=o?ym.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(w,g=!1,b=!0)=>{let y=i?i[w]:w,v=g?w+"|| ''":`'${y}'`,x="";return o&&b&&!g&&ym.includes(w)&&(x+=`d.style.colorScheme = '${w}';`),n==="class"?g||y?x+=`c.add(${v})`:x+="null":y&&(x+=`d[s](n,${v})`),x},f=e?`!function(){${d}${h(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${X1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}${u?"":"else{"+h(s,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}else{${h(s,!1,!1)};}${p}}catch(t){}}();`;return m.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:f}})});var tk=e=>{switch(e){case"success":return ok;case"info":return ik;case"warning":return sk;case"error":return ak;default:return null}},nk=Array(12).fill(0),rk=({visible:e,className:t})=>O.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},O.createElement("div",{className:"sonner-spinner"},nk.map((n,r)=>O.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),ok=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),sk=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),ik=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),ak=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),lk=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},O.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),O.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),ck=()=>{let[e,t]=O.useState(document.hidden);return O.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Yc=1,uk=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,o=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Yc++,s=this.toasts.find(l=>l.id===o),i=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(o)&&this.dismissedToasts.delete(o),s?this.toasts=this.toasts.map(l=>l.id===o?(this.publish({...l,...e,id:o,title:n}),{...l,...e,id:o,dismissible:i,title:n}):l):this.addToast({title:n,...r,dismissible:i,id:o}),o},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),o=n!==void 0,s,i=r.then(async c=>{if(s=["resolve",c],O.isValidElement(c))o=!1,this.create({id:n,type:"default",message:c});else if(pk(c)&&!c.ok){o=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${c.status}`):t.error,d=typeof t.description=="function"?await t.description(`HTTP error! status: ${c.status}`):t.description;this.create({id:n,type:"error",message:u,description:d})}else if(t.success!==void 0){o=!1;let u=typeof t.success=="function"?await t.success(c):t.success,d=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"success",message:u,description:d})}}).catch(async c=>{if(s=["reject",c],t.error!==void 0){o=!1;let u=typeof t.error=="function"?await t.error(c):t.error,d=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"error",message:u,description:d})}}).finally(()=>{var c;o&&(this.dismiss(n),n=void 0),(c=t.finally)==null||c.call(t)}),l=()=>new Promise((c,u)=>i.then(()=>s[0]==="reject"?u(s[1]):c(s[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:l}:Object.assign(n,{unwrap:l})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Yc++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Ge=new uk,dk=(e,t)=>{let n=(t==null?void 0:t.id)||Yc++;return Ge.addToast({title:e,...t,id:n}),n},pk=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",mk=dk,fk=()=>Ge.toasts,hk=()=>Ge.getActiveToasts();Object.assign(mk,{success:Ge.success,info:Ge.info,warning:Ge.warning,error:Ge.error,custom:Ge.custom,message:Ge.message,promise:Ge.promise,dismiss:Ge.dismiss,loading:Ge.loading},{getHistory:fk,getToasts:hk});function gk(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}gk(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function bi(e){return e.label!==void 0}var vk=3,yk="32px",xk="16px",xm=4e3,bk=356,wk=14,kk=20,Sk=200;function kt(...e){return e.filter(Boolean).join(" ")}function Ck(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var Nk=e=>{var t,n,r,o,s,i,l,c,u,d,p;let{invert:h,toast:f,unstyled:w,interacting:g,setHeights:b,visibleToasts:y,heights:v,index:x,toasts:k,expanded:S,removeToast:N,defaultRichColors:E,closeButton:C,style:P,cancelButtonStyle:I,actionButtonStyle:V,className:T="",descriptionClassName:D="",duration:R,position:U,gap:$,loadingIcon:B,expandByDefault:j,classNames:M,icons:L,closeButtonAriaLabel:K="Close toast",pauseWhenPageIsHidden:z}=e,[Y,X]=O.useState(null),[xe,Ae]=O.useState(null),[re,Tr]=O.useState(!1),[mn,Zn]=O.useState(!1),[fn,Rr]=O.useState(!1),[hn,Xs]=O.useState(!1),[sl,Js]=O.useState(!1),[il,Do]=O.useState(0),[jr,Gd]=O.useState(0),Lo=O.useRef(f.duration||R||xm),Kd=O.useRef(null),er=O.useRef(null),m0=x===0,f0=x+1<=y,at=f.type,Ar=f.dismissible!==!1,h0=f.className||"",g0=f.descriptionClassName||"",Zs=O.useMemo(()=>v.findIndex(W=>W.toastId===f.id)||0,[v,f.id]),v0=O.useMemo(()=>{var W;return(W=f.closeButton)!=null?W:C},[f.closeButton,C]),Hd=O.useMemo(()=>f.duration||R||xm,[f.duration,R]),al=O.useRef(0),Mr=O.useRef(0),qd=O.useRef(0),Ir=O.useRef(null),[y0,x0]=U.split("-"),Yd=O.useMemo(()=>v.reduce((W,se,ue)=>ue>=Zs?W:W+se.height,0),[v,Zs]),Qd=ck(),b0=f.invert||h,ll=at==="loading";Mr.current=O.useMemo(()=>Zs*$+Yd,[Zs,Yd]),O.useEffect(()=>{Lo.current=Hd},[Hd]),O.useEffect(()=>{Tr(!0)},[]),O.useEffect(()=>{let W=er.current;if(W){let se=W.getBoundingClientRect().height;return Gd(se),b(ue=>[{toastId:f.id,height:se,position:f.position},...ue]),()=>b(ue=>ue.filter(yt=>yt.toastId!==f.id))}},[b,f.id]),O.useLayoutEffect(()=>{if(!re)return;let W=er.current,se=W.style.height;W.style.height="auto";let ue=W.getBoundingClientRect().height;W.style.height=se,Gd(ue),b(yt=>yt.find(xt=>xt.toastId===f.id)?yt.map(xt=>xt.toastId===f.id?{...xt,height:ue}:xt):[{toastId:f.id,height:ue,position:f.position},...yt])},[re,f.title,f.description,b,f.id]);let gn=O.useCallback(()=>{Zn(!0),Do(Mr.current),b(W=>W.filter(se=>se.toastId!==f.id)),setTimeout(()=>{N(f)},Sk)},[f,N,b,Mr]);O.useEffect(()=>{if(f.promise&&at==="loading"||f.duration===1/0||f.type==="loading")return;let W;return S||g||z&&Qd?(()=>{if(qd.current<al.current){let se=new Date().getTime()-al.current;Lo.current=Lo.current-se}qd.current=new Date().getTime()})():Lo.current!==1/0&&(al.current=new Date().getTime(),W=setTimeout(()=>{var se;(se=f.onAutoClose)==null||se.call(f,f),gn()},Lo.current)),()=>clearTimeout(W)},[S,g,f,at,z,Qd,gn]),O.useEffect(()=>{f.delete&&gn()},[gn,f.delete]);function w0(){var W,se,ue;return L!=null&&L.loading?O.createElement("div",{className:kt(M==null?void 0:M.loader,(W=f==null?void 0:f.classNames)==null?void 0:W.loader,"sonner-loader"),"data-visible":at==="loading"},L.loading):B?O.createElement("div",{className:kt(M==null?void 0:M.loader,(se=f==null?void 0:f.classNames)==null?void 0:se.loader,"sonner-loader"),"data-visible":at==="loading"},B):O.createElement(rk,{className:kt(M==null?void 0:M.loader,(ue=f==null?void 0:f.classNames)==null?void 0:ue.loader),visible:at==="loading"})}return O.createElement("li",{tabIndex:0,ref:er,className:kt(T,h0,M==null?void 0:M.toast,(t=f==null?void 0:f.classNames)==null?void 0:t.toast,M==null?void 0:M.default,M==null?void 0:M[at],(n=f==null?void 0:f.classNames)==null?void 0:n[at]),"data-sonner-toast":"","data-rich-colors":(r=f.richColors)!=null?r:E,"data-styled":!(f.jsx||f.unstyled||w),"data-mounted":re,"data-promise":!!f.promise,"data-swiped":sl,"data-removed":mn,"data-visible":f0,"data-y-position":y0,"data-x-position":x0,"data-index":x,"data-front":m0,"data-swiping":fn,"data-dismissible":Ar,"data-type":at,"data-invert":b0,"data-swipe-out":hn,"data-swipe-direction":xe,"data-expanded":!!(S||j&&re),style:{"--index":x,"--toasts-before":x,"--z-index":k.length-x,"--offset":`${mn?il:Mr.current}px`,"--initial-height":j?"auto":`${jr}px`,...P,...f.style},onDragEnd:()=>{Rr(!1),X(null),Ir.current=null},onPointerDown:W=>{ll||!Ar||(Kd.current=new Date,Do(Mr.current),W.target.setPointerCapture(W.pointerId),W.target.tagName!=="BUTTON"&&(Rr(!0),Ir.current={x:W.clientX,y:W.clientY}))},onPointerUp:()=>{var W,se,ue,yt;if(hn||!Ar)return;Ir.current=null;let xt=Number(((W=er.current)==null?void 0:W.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),vn=Number(((se=er.current)==null?void 0:se.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),tr=new Date().getTime()-((ue=Kd.current)==null?void 0:ue.getTime()),bt=Y==="x"?xt:vn,yn=Math.abs(bt)/tr;if(Math.abs(bt)>=kk||yn>.11){Do(Mr.current),(yt=f.onDismiss)==null||yt.call(f,f),Ae(Y==="x"?xt>0?"right":"left":vn>0?"down":"up"),gn(),Xs(!0),Js(!1);return}Rr(!1),X(null)},onPointerMove:W=>{var se,ue,yt,xt;if(!Ir.current||!Ar||((se=window.getSelection())==null?void 0:se.toString().length)>0)return;let vn=W.clientY-Ir.current.y,tr=W.clientX-Ir.current.x,bt=(ue=e.swipeDirections)!=null?ue:Ck(U);!Y&&(Math.abs(tr)>1||Math.abs(vn)>1)&&X(Math.abs(tr)>Math.abs(vn)?"x":"y");let yn={x:0,y:0};Y==="y"?(bt.includes("top")||bt.includes("bottom"))&&(bt.includes("top")&&vn<0||bt.includes("bottom")&&vn>0)&&(yn.y=vn):Y==="x"&&(bt.includes("left")||bt.includes("right"))&&(bt.includes("left")&&tr<0||bt.includes("right")&&tr>0)&&(yn.x=tr),(Math.abs(yn.x)>0||Math.abs(yn.y)>0)&&Js(!0),(yt=er.current)==null||yt.style.setProperty("--swipe-amount-x",`${yn.x}px`),(xt=er.current)==null||xt.style.setProperty("--swipe-amount-y",`${yn.y}px`)}},v0&&!f.jsx?O.createElement("button",{"aria-label":K,"data-disabled":ll,"data-close-button":!0,onClick:ll||!Ar?()=>{}:()=>{var W;gn(),(W=f.onDismiss)==null||W.call(f,f)},className:kt(M==null?void 0:M.closeButton,(o=f==null?void 0:f.classNames)==null?void 0:o.closeButton)},(s=L==null?void 0:L.close)!=null?s:lk):null,f.jsx||m.isValidElement(f.title)?f.jsx?f.jsx:typeof f.title=="function"?f.title():f.title:O.createElement(O.Fragment,null,at||f.icon||f.promise?O.createElement("div",{"data-icon":"",className:kt(M==null?void 0:M.icon,(i=f==null?void 0:f.classNames)==null?void 0:i.icon)},f.promise||f.type==="loading"&&!f.icon?f.icon||w0():null,f.type!=="loading"?f.icon||(L==null?void 0:L[at])||tk(at):null):null,O.createElement("div",{"data-content":"",className:kt(M==null?void 0:M.content,(l=f==null?void 0:f.classNames)==null?void 0:l.content)},O.createElement("div",{"data-title":"",className:kt(M==null?void 0:M.title,(c=f==null?void 0:f.classNames)==null?void 0:c.title)},typeof f.title=="function"?f.title():f.title),f.description?O.createElement("div",{"data-description":"",className:kt(D,g0,M==null?void 0:M.description,(u=f==null?void 0:f.classNames)==null?void 0:u.description)},typeof f.description=="function"?f.description():f.description):null),m.isValidElement(f.cancel)?f.cancel:f.cancel&&bi(f.cancel)?O.createElement("button",{"data-button":!0,"data-cancel":!0,style:f.cancelButtonStyle||I,onClick:W=>{var se,ue;bi(f.cancel)&&Ar&&((ue=(se=f.cancel).onClick)==null||ue.call(se,W),gn())},className:kt(M==null?void 0:M.cancelButton,(d=f==null?void 0:f.classNames)==null?void 0:d.cancelButton)},f.cancel.label):null,m.isValidElement(f.action)?f.action:f.action&&bi(f.action)?O.createElement("button",{"data-button":!0,"data-action":!0,style:f.actionButtonStyle||V,onClick:W=>{var se,ue;bi(f.action)&&((ue=(se=f.action).onClick)==null||ue.call(se,W),!W.defaultPrevented&&gn())},className:kt(M==null?void 0:M.actionButton,(p=f==null?void 0:f.classNames)==null?void 0:p.actionButton)},f.action.label):null))};function bm(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function Pk(e,t){let n={};return[e,t].forEach((r,o)=>{let s=o===1,i=s?"--mobile-offset":"--offset",l=s?xk:yk;function c(u){["top","right","bottom","left"].forEach(d=>{n[`${i}-${d}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?c(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${i}-${u}`]=l:n[`${i}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):c(l)}),n}var Ek=m.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:o=["altKey","KeyT"],expand:s,closeButton:i,className:l,offset:c,mobileOffset:u,theme:d="light",richColors:p,duration:h,style:f,visibleToasts:w=vk,toastOptions:g,dir:b=bm(),gap:y=wk,loadingIcon:v,icons:x,containerAriaLabel:k="Notifications",pauseWhenPageIsHidden:S}=e,[N,E]=O.useState([]),C=O.useMemo(()=>Array.from(new Set([r].concat(N.filter(z=>z.position).map(z=>z.position)))),[N,r]),[P,I]=O.useState([]),[V,T]=O.useState(!1),[D,R]=O.useState(!1),[U,$]=O.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),B=O.useRef(null),j=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),M=O.useRef(null),L=O.useRef(!1),K=O.useCallback(z=>{E(Y=>{var X;return(X=Y.find(xe=>xe.id===z.id))!=null&&X.delete||Ge.dismiss(z.id),Y.filter(({id:xe})=>xe!==z.id)})},[]);return O.useEffect(()=>Ge.subscribe(z=>{if(z.dismiss){E(Y=>Y.map(X=>X.id===z.id?{...X,delete:!0}:X));return}setTimeout(()=>{dd.flushSync(()=>{E(Y=>{let X=Y.findIndex(xe=>xe.id===z.id);return X!==-1?[...Y.slice(0,X),{...Y[X],...z},...Y.slice(X+1)]:[z,...Y]})})})}),[]),O.useEffect(()=>{if(d!=="system"){$(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?$("dark"):$("light")),typeof window>"u")return;let z=window.matchMedia("(prefers-color-scheme: dark)");try{z.addEventListener("change",({matches:Y})=>{$(Y?"dark":"light")})}catch{z.addListener(({matches:X})=>{try{$(X?"dark":"light")}catch(xe){console.error(xe)}})}},[d]),O.useEffect(()=>{N.length<=1&&T(!1)},[N]),O.useEffect(()=>{let z=Y=>{var X,xe;o.every(Ae=>Y[Ae]||Y.code===Ae)&&(T(!0),(X=B.current)==null||X.focus()),Y.code==="Escape"&&(document.activeElement===B.current||(xe=B.current)!=null&&xe.contains(document.activeElement))&&T(!1)};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[o]),O.useEffect(()=>{if(B.current)return()=>{M.current&&(M.current.focus({preventScroll:!0}),M.current=null,L.current=!1)}},[B.current]),O.createElement("section",{ref:t,"aria-label":`${k} ${j}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},C.map((z,Y)=>{var X;let[xe,Ae]=z.split("-");return N.length?O.createElement("ol",{key:z,dir:b==="auto"?bm():b,tabIndex:-1,ref:B,className:l,"data-sonner-toaster":!0,"data-theme":U,"data-y-position":xe,"data-lifted":V&&N.length>1&&!s,"data-x-position":Ae,style:{"--front-toast-height":`${((X=P[0])==null?void 0:X.height)||0}px`,"--width":`${bk}px`,"--gap":`${y}px`,...f,...Pk(c,u)},onBlur:re=>{L.current&&!re.currentTarget.contains(re.relatedTarget)&&(L.current=!1,M.current&&(M.current.focus({preventScroll:!0}),M.current=null))},onFocus:re=>{re.target instanceof HTMLElement&&re.target.dataset.dismissible==="false"||L.current||(L.current=!0,M.current=re.relatedTarget)},onMouseEnter:()=>T(!0),onMouseMove:()=>T(!0),onMouseLeave:()=>{D||T(!1)},onDragEnd:()=>T(!1),onPointerDown:re=>{re.target instanceof HTMLElement&&re.target.dataset.dismissible==="false"||R(!0)},onPointerUp:()=>R(!1)},N.filter(re=>!re.position&&Y===0||re.position===z).map((re,Tr)=>{var mn,Zn;return O.createElement(Nk,{key:re.id,icons:x,index:Tr,toast:re,defaultRichColors:p,duration:(mn=g==null?void 0:g.duration)!=null?mn:h,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:n,visibleToasts:w,closeButton:(Zn=g==null?void 0:g.closeButton)!=null?Zn:i,interacting:D,position:z,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:K,toasts:N.filter(fn=>fn.position==re.position),heights:P.filter(fn=>fn.position==re.position),setHeights:I,expandByDefault:s,gap:y,loadingIcon:v,expanded:V,pauseWhenPageIsHidden:S,swipeDirections:e.swipeDirections})})):null}))});const Tk=({...e})=>{const{theme:t="system"}=ek();return a.jsx(Ek,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var Rk=bu[" useId ".trim().toString()]||(()=>{}),jk=0;function ao(e){const[t,n]=m.useState(Rk());return ot(()=>{e||n(r=>r??String(jk++))},[e]),e||(t?`radix-${t}`:"")}const Ak=["top","right","bottom","left"],qn=Math.min,Ze=Math.max,ya=Math.round,wi=Math.floor,Ht=e=>({x:e,y:e}),Mk={left:"right",right:"left",bottom:"top",top:"bottom"},Ik={start:"end",end:"start"};function Qc(e,t,n){return Ze(e,qn(t,n))}function un(e,t){return typeof e=="function"?e(t):e}function dn(e){return e.split("-")[0]}function _o(e){return e.split("-")[1]}function bd(e){return e==="x"?"y":"x"}function wd(e){return e==="y"?"height":"width"}const _k=new Set(["top","bottom"]);function Wt(e){return _k.has(dn(e))?"y":"x"}function kd(e){return bd(Wt(e))}function Ok(e,t,n){n===void 0&&(n=!1);const r=_o(e),o=kd(e),s=wd(o);let i=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(i=xa(i)),[i,xa(i)]}function Dk(e){const t=xa(e);return[Xc(e),t,Xc(t)]}function Xc(e){return e.replace(/start|end/g,t=>Ik[t])}const wm=["left","right"],km=["right","left"],Lk=["top","bottom"],Fk=["bottom","top"];function Vk(e,t,n){switch(e){case"top":case"bottom":return n?t?km:wm:t?wm:km;case"left":case"right":return t?Lk:Fk;default:return[]}}function zk(e,t,n,r){const o=_o(e);let s=Vk(dn(e),n==="start",r);return o&&(s=s.map(i=>i+"-"+o),t&&(s=s.concat(s.map(Xc)))),s}function xa(e){return e.replace(/left|right|bottom|top/g,t=>Mk[t])}function Uk(e){return{top:0,right:0,bottom:0,left:0,...e}}function mv(e){return typeof e!="number"?Uk(e):{top:e,right:e,bottom:e,left:e}}function ba(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function Sm(e,t,n){let{reference:r,floating:o}=e;const s=Wt(t),i=kd(t),l=wd(i),c=dn(t),u=s==="y",d=r.x+r.width/2-o.width/2,p=r.y+r.height/2-o.height/2,h=r[l]/2-o[l]/2;let f;switch(c){case"top":f={x:d,y:r.y-o.height};break;case"bottom":f={x:d,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:p};break;case"left":f={x:r.x-o.width,y:p};break;default:f={x:r.x,y:r.y}}switch(_o(t)){case"start":f[i]-=h*(n&&u?-1:1);break;case"end":f[i]+=h*(n&&u?-1:1);break}return f}const $k=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:i}=n,l=s.filter(Boolean),c=await(i.isRTL==null?void 0:i.isRTL(t));let u=await i.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:p}=Sm(u,r,c),h=r,f={},w=0;for(let g=0;g<l.length;g++){const{name:b,fn:y}=l[g],{x:v,y:x,data:k,reset:S}=await y({x:d,y:p,initialPlacement:r,placement:h,strategy:o,middlewareData:f,rects:u,platform:i,elements:{reference:e,floating:t}});d=v??d,p=x??p,f={...f,[b]:{...f[b],...k}},S&&w<=50&&(w++,typeof S=="object"&&(S.placement&&(h=S.placement),S.rects&&(u=S.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:o}):S.rects),{x:d,y:p}=Sm(u,h,c)),g=-1)}return{x:d,y:p,placement:h,strategy:o,middlewareData:f}};async function Is(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:s,rects:i,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:h=!1,padding:f=0}=un(t,e),w=mv(f),b=l[h?p==="floating"?"reference":"floating":p],y=ba(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(b)))==null||n?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),v=p==="floating"?{x:r,y:o,width:i.floating.width,height:i.floating.height}:i.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),k=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},S=ba(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:x,strategy:c}):v);return{top:(y.top-S.top+w.top)/k.y,bottom:(S.bottom-y.bottom+w.bottom)/k.y,left:(y.left-S.left+w.left)/k.x,right:(S.right-y.right+w.right)/k.x}}const Bk=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:s,platform:i,elements:l,middlewareData:c}=t,{element:u,padding:d=0}=un(e,t)||{};if(u==null)return{};const p=mv(d),h={x:n,y:r},f=kd(o),w=wd(f),g=await i.getDimensions(u),b=f==="y",y=b?"top":"left",v=b?"bottom":"right",x=b?"clientHeight":"clientWidth",k=s.reference[w]+s.reference[f]-h[f]-s.floating[w],S=h[f]-s.reference[f],N=await(i.getOffsetParent==null?void 0:i.getOffsetParent(u));let E=N?N[x]:0;(!E||!await(i.isElement==null?void 0:i.isElement(N)))&&(E=l.floating[x]||s.floating[w]);const C=k/2-S/2,P=E/2-g[w]/2-1,I=qn(p[y],P),V=qn(p[v],P),T=I,D=E-g[w]-V,R=E/2-g[w]/2+C,U=Qc(T,R,D),$=!c.arrow&&_o(o)!=null&&R!==U&&s.reference[w]/2-(R<T?I:V)-g[w]/2<0,B=$?R<T?R-T:R-D:0;return{[f]:h[f]+B,data:{[f]:U,centerOffset:R-U-B,...$&&{alignmentOffset:B}},reset:$}}}),Wk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:s,rects:i,initialPlacement:l,platform:c,elements:u}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:g=!0,...b}=un(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const y=dn(o),v=Wt(l),x=dn(l)===l,k=await(c.isRTL==null?void 0:c.isRTL(u.floating)),S=h||(x||!g?[xa(l)]:Dk(l)),N=w!=="none";!h&&N&&S.push(...zk(l,g,w,k));const E=[l,...S],C=await Is(t,b),P=[];let I=((r=s.flip)==null?void 0:r.overflows)||[];if(d&&P.push(C[y]),p){const R=Ok(o,i,k);P.push(C[R[0]],C[R[1]])}if(I=[...I,{placement:o,overflows:P}],!P.every(R=>R<=0)){var V,T;const R=(((V=s.flip)==null?void 0:V.index)||0)+1,U=E[R];if(U&&(!(p==="alignment"?v!==Wt(U):!1)||I.every(j=>j.overflows[0]>0&&Wt(j.placement)===v)))return{data:{index:R,overflows:I},reset:{placement:U}};let $=(T=I.filter(B=>B.overflows[0]<=0).sort((B,j)=>B.overflows[1]-j.overflows[1])[0])==null?void 0:T.placement;if(!$)switch(f){case"bestFit":{var D;const B=(D=I.filter(j=>{if(N){const M=Wt(j.placement);return M===v||M==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(M=>M>0).reduce((M,L)=>M+L,0)]).sort((j,M)=>j[1]-M[1])[0])==null?void 0:D[0];B&&($=B);break}case"initialPlacement":$=l;break}if(o!==$)return{reset:{placement:$}}}return{}}}};function Cm(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Nm(e){return Ak.some(t=>e[t]>=0)}const Gk=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=un(e,t);switch(r){case"referenceHidden":{const s=await Is(t,{...o,elementContext:"reference"}),i=Cm(s,n.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:Nm(i)}}}case"escaped":{const s=await Is(t,{...o,altBoundary:!0}),i=Cm(s,n.floating);return{data:{escapedOffsets:i,escaped:Nm(i)}}}default:return{}}}}},fv=new Set(["left","top"]);async function Kk(e,t){const{placement:n,platform:r,elements:o}=e,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),i=dn(n),l=_o(n),c=Wt(n)==="y",u=fv.has(i)?-1:1,d=s&&c?-1:1,p=un(t,e);let{mainAxis:h,crossAxis:f,alignmentAxis:w}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof w=="number"&&(f=l==="end"?w*-1:w),c?{x:f*d,y:h*u}:{x:h*u,y:f*d}}const Hk=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:s,placement:i,middlewareData:l}=t,c=await Kk(t,e);return i===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:o+c.x,y:s+c.y,data:{...c,placement:i}}}}},qk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:s=!0,crossAxis:i=!1,limiter:l={fn:b=>{let{x:y,y:v}=b;return{x:y,y:v}}},...c}=un(e,t),u={x:n,y:r},d=await Is(t,c),p=Wt(dn(o)),h=bd(p);let f=u[h],w=u[p];if(s){const b=h==="y"?"top":"left",y=h==="y"?"bottom":"right",v=f+d[b],x=f-d[y];f=Qc(v,f,x)}if(i){const b=p==="y"?"top":"left",y=p==="y"?"bottom":"right",v=w+d[b],x=w-d[y];w=Qc(v,w,x)}const g=l.fn({...t,[h]:f,[p]:w});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[h]:s,[p]:i}}}}}},Yk=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:s,middlewareData:i}=t,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=un(e,t),d={x:n,y:r},p=Wt(o),h=bd(p);let f=d[h],w=d[p];const g=un(l,t),b=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const x=h==="y"?"height":"width",k=s.reference[h]-s.floating[x]+b.mainAxis,S=s.reference[h]+s.reference[x]-b.mainAxis;f<k?f=k:f>S&&(f=S)}if(u){var y,v;const x=h==="y"?"width":"height",k=fv.has(dn(o)),S=s.reference[p]-s.floating[x]+(k&&((y=i.offset)==null?void 0:y[p])||0)+(k?0:b.crossAxis),N=s.reference[p]+s.reference[x]+(k?0:((v=i.offset)==null?void 0:v[p])||0)-(k?b.crossAxis:0);w<S?w=S:w>N&&(w=N)}return{[h]:f,[p]:w}}}},Qk=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:o,rects:s,platform:i,elements:l}=t,{apply:c=()=>{},...u}=un(e,t),d=await Is(t,u),p=dn(o),h=_o(o),f=Wt(o)==="y",{width:w,height:g}=s.floating;let b,y;p==="top"||p==="bottom"?(b=p,y=h===(await(i.isRTL==null?void 0:i.isRTL(l.floating))?"start":"end")?"left":"right"):(y=p,b=h==="end"?"top":"bottom");const v=g-d.top-d.bottom,x=w-d.left-d.right,k=qn(g-d[b],v),S=qn(w-d[y],x),N=!t.middlewareData.shift;let E=k,C=S;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(C=x),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(E=v),N&&!h){const I=Ze(d.left,0),V=Ze(d.right,0),T=Ze(d.top,0),D=Ze(d.bottom,0);f?C=w-2*(I!==0||V!==0?I+V:Ze(d.left,d.right)):E=g-2*(T!==0||D!==0?T+D:Ze(d.top,d.bottom))}await c({...t,availableWidth:C,availableHeight:E});const P=await i.getDimensions(l.floating);return w!==P.width||g!==P.height?{reset:{rects:!0}}:{}}}};function Ka(){return typeof window<"u"}function Oo(e){return hv(e)?(e.nodeName||"").toLowerCase():"#document"}function nt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Yt(e){var t;return(t=(hv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function hv(e){return Ka()?e instanceof Node||e instanceof nt(e).Node:!1}function Mt(e){return Ka()?e instanceof Element||e instanceof nt(e).Element:!1}function qt(e){return Ka()?e instanceof HTMLElement||e instanceof nt(e).HTMLElement:!1}function Pm(e){return!Ka()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof nt(e).ShadowRoot}const Xk=new Set(["inline","contents"]);function Qs(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=It(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Xk.has(o)}const Jk=new Set(["table","td","th"]);function Zk(e){return Jk.has(Oo(e))}const eS=[":popover-open",":modal"];function Ha(e){return eS.some(t=>{try{return e.matches(t)}catch{return!1}})}const tS=["transform","translate","scale","rotate","perspective"],nS=["transform","translate","scale","rotate","perspective","filter"],rS=["paint","layout","strict","content"];function Sd(e){const t=Cd(),n=Mt(e)?It(e):e;return tS.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||nS.some(r=>(n.willChange||"").includes(r))||rS.some(r=>(n.contain||"").includes(r))}function oS(e){let t=Yn(e);for(;qt(t)&&!Eo(t);){if(Sd(t))return t;if(Ha(t))return null;t=Yn(t)}return null}function Cd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const sS=new Set(["html","body","#document"]);function Eo(e){return sS.has(Oo(e))}function It(e){return nt(e).getComputedStyle(e)}function qa(e){return Mt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Yn(e){if(Oo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Pm(e)&&e.host||Yt(e);return Pm(t)?t.host:t}function gv(e){const t=Yn(e);return Eo(t)?e.ownerDocument?e.ownerDocument.body:e.body:qt(t)&&Qs(t)?t:gv(t)}function _s(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=gv(e),s=o===((r=e.ownerDocument)==null?void 0:r.body),i=nt(o);if(s){const l=Jc(i);return t.concat(i,i.visualViewport||[],Qs(o)?o:[],l&&n?_s(l):[])}return t.concat(o,_s(o,[],n))}function Jc(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function vv(e){const t=It(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=qt(e),s=o?e.offsetWidth:n,i=o?e.offsetHeight:r,l=ya(n)!==s||ya(r)!==i;return l&&(n=s,r=i),{width:n,height:r,$:l}}function Nd(e){return Mt(e)?e:e.contextElement}function lo(e){const t=Nd(e);if(!qt(t))return Ht(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:s}=vv(t);let i=(s?ya(n.width):n.width)/r,l=(s?ya(n.height):n.height)/o;return(!i||!Number.isFinite(i))&&(i=1),(!l||!Number.isFinite(l))&&(l=1),{x:i,y:l}}const iS=Ht(0);function yv(e){const t=nt(e);return!Cd()||!t.visualViewport?iS:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function aS(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==nt(e)?!1:t}function kr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),s=Nd(e);let i=Ht(1);t&&(r?Mt(r)&&(i=lo(r)):i=lo(e));const l=aS(s,n,r)?yv(s):Ht(0);let c=(o.left+l.x)/i.x,u=(o.top+l.y)/i.y,d=o.width/i.x,p=o.height/i.y;if(s){const h=nt(s),f=r&&Mt(r)?nt(r):r;let w=h,g=Jc(w);for(;g&&r&&f!==w;){const b=lo(g),y=g.getBoundingClientRect(),v=It(g),x=y.left+(g.clientLeft+parseFloat(v.paddingLeft))*b.x,k=y.top+(g.clientTop+parseFloat(v.paddingTop))*b.y;c*=b.x,u*=b.y,d*=b.x,p*=b.y,c+=x,u+=k,w=nt(g),g=Jc(w)}}return ba({width:d,height:p,x:c,y:u})}function Pd(e,t){const n=qa(e).scrollLeft;return t?t.left+n:kr(Yt(e)).left+n}function xv(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=r.left+t.scrollLeft-(n?0:Pd(e,r)),s=r.top+t.scrollTop;return{x:o,y:s}}function lS(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const s=o==="fixed",i=Yt(r),l=t?Ha(t.floating):!1;if(r===i||l&&s)return n;let c={scrollLeft:0,scrollTop:0},u=Ht(1);const d=Ht(0),p=qt(r);if((p||!p&&!s)&&((Oo(r)!=="body"||Qs(i))&&(c=qa(r)),qt(r))){const f=kr(r);u=lo(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}const h=i&&!p&&!s?xv(i,c,!0):Ht(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+d.x+h.x,y:n.y*u.y-c.scrollTop*u.y+d.y+h.y}}function cS(e){return Array.from(e.getClientRects())}function uS(e){const t=Yt(e),n=qa(e),r=e.ownerDocument.body,o=Ze(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Ze(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let i=-n.scrollLeft+Pd(e);const l=-n.scrollTop;return It(r).direction==="rtl"&&(i+=Ze(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:i,y:l}}function dS(e,t){const n=nt(e),r=Yt(e),o=n.visualViewport;let s=r.clientWidth,i=r.clientHeight,l=0,c=0;if(o){s=o.width,i=o.height;const u=Cd();(!u||u&&t==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}return{width:s,height:i,x:l,y:c}}const pS=new Set(["absolute","fixed"]);function mS(e,t){const n=kr(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,s=qt(e)?lo(e):Ht(1),i=e.clientWidth*s.x,l=e.clientHeight*s.y,c=o*s.x,u=r*s.y;return{width:i,height:l,x:c,y:u}}function Em(e,t,n){let r;if(t==="viewport")r=dS(e,n);else if(t==="document")r=uS(Yt(e));else if(Mt(t))r=mS(t,n);else{const o=yv(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return ba(r)}function bv(e,t){const n=Yn(e);return n===t||!Mt(n)||Eo(n)?!1:It(n).position==="fixed"||bv(n,t)}function fS(e,t){const n=t.get(e);if(n)return n;let r=_s(e,[],!1).filter(l=>Mt(l)&&Oo(l)!=="body"),o=null;const s=It(e).position==="fixed";let i=s?Yn(e):e;for(;Mt(i)&&!Eo(i);){const l=It(i),c=Sd(i);!c&&l.position==="fixed"&&(o=null),(s?!c&&!o:!c&&l.position==="static"&&!!o&&pS.has(o.position)||Qs(i)&&!c&&bv(e,i))?r=r.filter(d=>d!==i):o=l,i=Yn(i)}return t.set(e,r),r}function hS(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[...n==="clippingAncestors"?Ha(t)?[]:fS(t,this._c):[].concat(n),r],l=i[0],c=i.reduce((u,d)=>{const p=Em(t,d,o);return u.top=Ze(p.top,u.top),u.right=qn(p.right,u.right),u.bottom=qn(p.bottom,u.bottom),u.left=Ze(p.left,u.left),u},Em(t,l,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function gS(e){const{width:t,height:n}=vv(e);return{width:t,height:n}}function vS(e,t,n){const r=qt(t),o=Yt(t),s=n==="fixed",i=kr(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=Ht(0);function u(){c.x=Pd(o)}if(r||!r&&!s)if((Oo(t)!=="body"||Qs(o))&&(l=qa(t)),r){const f=kr(t,!0,s,t);c.x=f.x+t.clientLeft,c.y=f.y+t.clientTop}else o&&u();s&&!r&&o&&u();const d=o&&!r&&!s?xv(o,l):Ht(0),p=i.left+l.scrollLeft-c.x-d.x,h=i.top+l.scrollTop-c.y-d.y;return{x:p,y:h,width:i.width,height:i.height}}function Ul(e){return It(e).position==="static"}function Tm(e,t){if(!qt(e)||It(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Yt(e)===n&&(n=n.ownerDocument.body),n}function wv(e,t){const n=nt(e);if(Ha(e))return n;if(!qt(e)){let o=Yn(e);for(;o&&!Eo(o);){if(Mt(o)&&!Ul(o))return o;o=Yn(o)}return n}let r=Tm(e,t);for(;r&&Zk(r)&&Ul(r);)r=Tm(r,t);return r&&Eo(r)&&Ul(r)&&!Sd(r)?n:r||oS(e)||n}const yS=async function(e){const t=this.getOffsetParent||wv,n=this.getDimensions,r=await n(e.floating);return{reference:vS(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function xS(e){return It(e).direction==="rtl"}const bS={convertOffsetParentRelativeRectToViewportRelativeRect:lS,getDocumentElement:Yt,getClippingRect:hS,getOffsetParent:wv,getElementRects:yS,getClientRects:cS,getDimensions:gS,getScale:lo,isElement:Mt,isRTL:xS};function kv(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function wS(e,t){let n=null,r;const o=Yt(e);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function i(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const u=e.getBoundingClientRect(),{left:d,top:p,width:h,height:f}=u;if(l||t(),!h||!f)return;const w=wi(p),g=wi(o.clientWidth-(d+h)),b=wi(o.clientHeight-(p+f)),y=wi(d),x={rootMargin:-w+"px "+-g+"px "+-b+"px "+-y+"px",threshold:Ze(0,qn(1,c))||1};let k=!0;function S(N){const E=N[0].intersectionRatio;if(E!==c){if(!k)return i();E?i(!1,E):r=setTimeout(()=>{i(!1,1e-7)},1e3)}E===1&&!kv(u,e.getBoundingClientRect())&&i(),k=!1}try{n=new IntersectionObserver(S,{...x,root:o.ownerDocument})}catch{n=new IntersectionObserver(S,x)}n.observe(e)}return i(!0),s}function kS(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=Nd(e),d=o||s?[...u?_s(u):[],..._s(t)]:[];d.forEach(y=>{o&&y.addEventListener("scroll",n,{passive:!0}),s&&y.addEventListener("resize",n)});const p=u&&l?wS(u,n):null;let h=-1,f=null;i&&(f=new ResizeObserver(y=>{let[v]=y;v&&v.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let w,g=c?kr(e):null;c&&b();function b(){const y=kr(e);g&&!kv(g,y)&&n(),g=y,w=requestAnimationFrame(b)}return n(),()=>{var y;d.forEach(v=>{o&&v.removeEventListener("scroll",n),s&&v.removeEventListener("resize",n)}),p==null||p(),(y=f)==null||y.disconnect(),f=null,c&&cancelAnimationFrame(w)}}const SS=Hk,CS=qk,NS=Wk,PS=Qk,ES=Gk,Rm=Bk,TS=Yk,RS=(e,t,n)=>{const r=new Map,o={platform:bS,...n},s={...o.platform,_c:r};return $k(e,t,{...o,platform:s})};var jS=typeof document<"u",AS=function(){},$i=jS?m.useLayoutEffect:AS;function wa(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!wa(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const s=o[r];if(!(s==="_owner"&&e.$$typeof)&&!wa(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function Sv(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function jm(e,t){const n=Sv(e);return Math.round(t*n)/n}function $l(e){const t=m.useRef(e);return $i(()=>{t.current=e}),t}function MS(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:s,floating:i}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,p]=m.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,f]=m.useState(r);wa(h,r)||f(r);const[w,g]=m.useState(null),[b,y]=m.useState(null),v=m.useCallback(j=>{j!==N.current&&(N.current=j,g(j))},[]),x=m.useCallback(j=>{j!==E.current&&(E.current=j,y(j))},[]),k=s||w,S=i||b,N=m.useRef(null),E=m.useRef(null),C=m.useRef(d),P=c!=null,I=$l(c),V=$l(o),T=$l(u),D=m.useCallback(()=>{if(!N.current||!E.current)return;const j={placement:t,strategy:n,middleware:h};V.current&&(j.platform=V.current),RS(N.current,E.current,j).then(M=>{const L={...M,isPositioned:T.current!==!1};R.current&&!wa(C.current,L)&&(C.current=L,Ks.flushSync(()=>{p(L)}))})},[h,t,n,V,T]);$i(()=>{u===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,p(j=>({...j,isPositioned:!1})))},[u]);const R=m.useRef(!1);$i(()=>(R.current=!0,()=>{R.current=!1}),[]),$i(()=>{if(k&&(N.current=k),S&&(E.current=S),k&&S){if(I.current)return I.current(k,S,D);D()}},[k,S,D,I,P]);const U=m.useMemo(()=>({reference:N,floating:E,setReference:v,setFloating:x}),[v,x]),$=m.useMemo(()=>({reference:k,floating:S}),[k,S]),B=m.useMemo(()=>{const j={position:n,left:0,top:0};if(!$.floating)return j;const M=jm($.floating,d.x),L=jm($.floating,d.y);return l?{...j,transform:"translate("+M+"px, "+L+"px)",...Sv($.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:M,top:L}},[n,l,$.floating,d.x,d.y]);return m.useMemo(()=>({...d,update:D,refs:U,elements:$,floatingStyles:B}),[d,D,U,$,B])}const IS=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Rm({element:r.current,padding:o}).fn(n):{}:r?Rm({element:r,padding:o}).fn(n):{}}}},_S=(e,t)=>({...SS(e),options:[e,t]}),OS=(e,t)=>({...CS(e),options:[e,t]}),DS=(e,t)=>({...TS(e),options:[e,t]}),LS=(e,t)=>({...NS(e),options:[e,t]}),FS=(e,t)=>({...PS(e),options:[e,t]}),VS=(e,t)=>({...ES(e),options:[e,t]}),zS=(e,t)=>({...IS(e),options:[e,t]});var US="Arrow",Cv=m.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...s}=e;return a.jsx(Z.svg,{...s,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:a.jsx("polygon",{points:"0,0 30,0 15,10"})})});Cv.displayName=US;var $S=Cv;function BS(e){const[t,n]=m.useState(void 0);return ot(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const s=o[0];let i,l;if("borderBoxSize"in s){const c=s.borderBoxSize,u=Array.isArray(c)?c[0]:c;i=u.inlineSize,l=u.blockSize}else i=e.offsetWidth,l=e.offsetHeight;n({width:i,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Nv="Popper",[Pv,Ev]=Pr(Nv),[DP,Tv]=Pv(Nv),Rv="PopperAnchor",jv=m.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,s=Tv(Rv,n),i=m.useRef(null),l=ye(t,i);return m.useEffect(()=>{s.onAnchorChange((r==null?void 0:r.current)||i.current)}),r?null:a.jsx(Z.div,{...o,ref:l})});jv.displayName=Rv;var Ed="PopperContent",[WS,GS]=Pv(Ed),Av=m.forwardRef((e,t)=>{var re,Tr,mn,Zn,fn,Rr;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:s="center",alignOffset:i=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:p="partial",hideWhenDetached:h=!1,updatePositionStrategy:f="optimized",onPlaced:w,...g}=e,b=Tv(Ed,n),[y,v]=m.useState(null),x=ye(t,hn=>v(hn)),[k,S]=m.useState(null),N=BS(k),E=(N==null?void 0:N.width)??0,C=(N==null?void 0:N.height)??0,P=r+(s!=="center"?"-"+s:""),I=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},V=Array.isArray(u)?u:[u],T=V.length>0,D={padding:I,boundary:V.filter(HS),altBoundary:T},{refs:R,floatingStyles:U,placement:$,isPositioned:B,middlewareData:j}=MS({strategy:"fixed",placement:P,whileElementsMounted:(...hn)=>kS(...hn,{animationFrame:f==="always"}),elements:{reference:b.anchor},middleware:[_S({mainAxis:o+C,alignmentAxis:i}),c&&OS({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?DS():void 0,...D}),c&&LS({...D}),FS({...D,apply:({elements:hn,rects:Xs,availableWidth:sl,availableHeight:Js})=>{const{width:il,height:Do}=Xs.reference,jr=hn.floating.style;jr.setProperty("--radix-popper-available-width",`${sl}px`),jr.setProperty("--radix-popper-available-height",`${Js}px`),jr.setProperty("--radix-popper-anchor-width",`${il}px`),jr.setProperty("--radix-popper-anchor-height",`${Do}px`)}}),k&&zS({element:k,padding:l}),qS({arrowWidth:E,arrowHeight:C}),h&&VS({strategy:"referenceHidden",...D})]}),[M,L]=_v($),K=Te(w);ot(()=>{B&&(K==null||K())},[B,K]);const z=(re=j.arrow)==null?void 0:re.x,Y=(Tr=j.arrow)==null?void 0:Tr.y,X=((mn=j.arrow)==null?void 0:mn.centerOffset)!==0,[xe,Ae]=m.useState();return ot(()=>{y&&Ae(window.getComputedStyle(y).zIndex)},[y]),a.jsx("div",{ref:R.setFloating,"data-radix-popper-content-wrapper":"",style:{...U,transform:B?U.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:xe,"--radix-popper-transform-origin":[(Zn=j.transformOrigin)==null?void 0:Zn.x,(fn=j.transformOrigin)==null?void 0:fn.y].join(" "),...((Rr=j.hide)==null?void 0:Rr.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:a.jsx(WS,{scope:n,placedSide:M,onArrowChange:S,arrowX:z,arrowY:Y,shouldHideArrow:X,children:a.jsx(Z.div,{"data-side":M,"data-align":L,...g,ref:x,style:{...g.style,animation:B?void 0:"none"}})})})});Av.displayName=Ed;var Mv="PopperArrow",KS={top:"bottom",right:"left",bottom:"top",left:"right"},Iv=m.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,s=GS(Mv,r),i=KS[s.placedSide];return a.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:a.jsx($S,{...o,ref:n,style:{...o.style,display:"block"}})})});Iv.displayName=Mv;function HS(e){return e!==null}var qS=e=>({name:"transformOrigin",options:e,fn(t){var b,y,v;const{placement:n,rects:r,middlewareData:o}=t,i=((b=o.arrow)==null?void 0:b.centerOffset)!==0,l=i?0:e.arrowWidth,c=i?0:e.arrowHeight,[u,d]=_v(n),p={start:"0%",center:"50%",end:"100%"}[d],h=(((y=o.arrow)==null?void 0:y.x)??0)+l/2,f=(((v=o.arrow)==null?void 0:v.y)??0)+c/2;let w="",g="";return u==="bottom"?(w=i?p:`${h}px`,g=`${-c}px`):u==="top"?(w=i?p:`${h}px`,g=`${r.floating.height+c}px`):u==="right"?(w=`${-c}px`,g=i?p:`${f}px`):u==="left"&&(w=`${r.floating.width+c}px`,g=i?p:`${f}px`),{data:{x:w,y:g}}}});function _v(e){const[t,n="center"]=e.split("-");return[t,n]}var YS=jv,QS=Av,XS=Iv,[Ya,LP]=Pr("Tooltip",[Ev]),Td=Ev(),Ov="TooltipProvider",JS=700,Am="tooltip.open",[ZS,Dv]=Ya(Ov),Lv=e=>{const{__scopeTooltip:t,delayDuration:n=JS,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:s}=e,i=m.useRef(!0),l=m.useRef(!1),c=m.useRef(0);return m.useEffect(()=>{const u=c.current;return()=>window.clearTimeout(u)},[]),a.jsx(ZS,{scope:t,isOpenDelayedRef:i,delayDuration:n,onOpen:m.useCallback(()=>{window.clearTimeout(c.current),i.current=!1},[]),onClose:m.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>i.current=!0,r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:m.useCallback(u=>{l.current=u},[]),disableHoverableContent:o,children:s})};Lv.displayName=Ov;var Fv="Tooltip",[FP,Qa]=Ya(Fv),Zc="TooltipTrigger",eC=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Qa(Zc,n),s=Dv(Zc,n),i=Td(n),l=m.useRef(null),c=ye(t,l,o.onTriggerChange),u=m.useRef(!1),d=m.useRef(!1),p=m.useCallback(()=>u.current=!1,[]);return m.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),a.jsx(YS,{asChild:!0,...i,children:a.jsx(Z.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:c,onPointerMove:q(e.onPointerMove,h=>{h.pointerType!=="touch"&&!d.current&&!s.isPointerInTransitRef.current&&(o.onTriggerEnter(),d.current=!0)}),onPointerLeave:q(e.onPointerLeave,()=>{o.onTriggerLeave(),d.current=!1}),onPointerDown:q(e.onPointerDown,()=>{o.open&&o.onClose(),u.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:q(e.onFocus,()=>{u.current||o.onOpen()}),onBlur:q(e.onBlur,o.onClose),onClick:q(e.onClick,o.onClose)})})});eC.displayName=Zc;var tC="TooltipPortal",[VP,nC]=Ya(tC,{forceMount:void 0}),To="TooltipContent",Vv=m.forwardRef((e,t)=>{const n=nC(To,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...s}=e,i=Qa(To,e.__scopeTooltip);return a.jsx(_t,{present:r||i.open,children:i.disableHoverableContent?a.jsx(zv,{side:o,...s,ref:t}):a.jsx(rC,{side:o,...s,ref:t})})}),rC=m.forwardRef((e,t)=>{const n=Qa(To,e.__scopeTooltip),r=Dv(To,e.__scopeTooltip),o=m.useRef(null),s=ye(t,o),[i,l]=m.useState(null),{trigger:c,onClose:u}=n,d=o.current,{onPointerInTransitChange:p}=r,h=m.useCallback(()=>{l(null),p(!1)},[p]),f=m.useCallback((w,g)=>{const b=w.currentTarget,y={x:w.clientX,y:w.clientY},v=lC(y,b.getBoundingClientRect()),x=cC(y,v),k=uC(g.getBoundingClientRect()),S=pC([...x,...k]);l(S),p(!0)},[p]);return m.useEffect(()=>()=>h(),[h]),m.useEffect(()=>{if(c&&d){const w=b=>f(b,d),g=b=>f(b,c);return c.addEventListener("pointerleave",w),d.addEventListener("pointerleave",g),()=>{c.removeEventListener("pointerleave",w),d.removeEventListener("pointerleave",g)}}},[c,d,f,h]),m.useEffect(()=>{if(i){const w=g=>{const b=g.target,y={x:g.clientX,y:g.clientY},v=(c==null?void 0:c.contains(b))||(d==null?void 0:d.contains(b)),x=!dC(y,i);v?h():x&&(h(),u())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[c,d,i,u,h]),a.jsx(zv,{...e,ref:s})}),[oC,sC]=Ya(Fv,{isInside:!1}),iC=ow("TooltipContent"),zv=m.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":o,onEscapeKeyDown:s,onPointerDownOutside:i,...l}=e,c=Qa(To,n),u=Td(n),{onClose:d}=c;return m.useEffect(()=>(document.addEventListener(Am,d),()=>document.removeEventListener(Am,d)),[d]),m.useEffect(()=>{if(c.trigger){const p=h=>{const f=h.target;f!=null&&f.contains(c.trigger)&&d()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[c.trigger,d]),a.jsx(Hs,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:p=>p.preventDefault(),onDismiss:d,children:a.jsxs(QS,{"data-state":c.stateAttribute,...u,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[a.jsx(iC,{children:r}),a.jsx(oC,{scope:n,isInside:!0,children:a.jsx(Ig,{id:c.contentId,role:"tooltip",children:o||r})})]})})});Vv.displayName=To;var Uv="TooltipArrow",aC=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=Td(n);return sC(Uv,n).isInside?null:a.jsx(XS,{...o,...r,ref:t})});aC.displayName=Uv;function lC(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),s=Math.abs(t.left-e.x);switch(Math.min(n,r,o,s)){case s:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function cC(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function uC(e){const{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}function dC(e,t){const{x:n,y:r}=e;let o=!1;for(let s=0,i=t.length-1;s<t.length;i=s++){const l=t[s],c=t[i],u=l.x,d=l.y,p=c.x,h=c.y;d>r!=h>r&&n<(p-u)*(r-d)/(h-d)+u&&(o=!o)}return o}function pC(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),mC(t)}function mC(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const o=e[r];for(;t.length>=2;){const s=t[t.length-1],i=t[t.length-2];if((s.x-i.x)*(o.y-i.y)>=(s.y-i.y)*(o.x-i.x))t.pop();else break}t.push(o)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r];for(;n.length>=2;){const s=n[n.length-1],i=n[n.length-2];if((s.x-i.x)*(o.y-i.y)>=(s.y-i.y)*(o.x-i.x))n.pop();else break}n.push(o)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var fC=Lv,$v=Vv;const hC=fC,gC=m.forwardRef(({className:e,sideOffset:t=4,...n},r)=>a.jsx($v,{ref:r,sideOffset:t,className:ne("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));gC.displayName=$v.displayName;var Xa=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ja=typeof window>"u"||"Deno"in globalThis;function Ct(){}function vC(e,t){return typeof e=="function"?e(t):e}function yC(e){return typeof e=="number"&&e>=0&&e!==1/0}function xC(e,t){return Math.max(e+(t||0)-Date.now(),0)}function eu(e,t){return typeof e=="function"?e(t):e}function bC(e,t){return typeof e=="function"?e(t):e}function Mm(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:s,queryKey:i,stale:l}=e;if(i){if(r){if(t.queryHash!==Rd(i,t.options))return!1}else if(!Ds(t.queryKey,i))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||o&&o!==t.state.fetchStatus||s&&!s(t))}function Im(e,t){const{exact:n,status:r,predicate:o,mutationKey:s}=e;if(s){if(!t.options.mutationKey)return!1;if(n){if(Os(t.options.mutationKey)!==Os(s))return!1}else if(!Ds(t.options.mutationKey,s))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function Rd(e,t){return((t==null?void 0:t.queryKeyHashFn)||Os)(e)}function Os(e){return JSON.stringify(e,(t,n)=>tu(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function Ds(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Ds(e[n],t[n])):!1}function Bv(e,t){if(e===t)return e;const n=_m(e)&&_m(t);if(n||tu(e)&&tu(t)){const r=n?e:Object.keys(e),o=r.length,s=n?t:Object.keys(t),i=s.length,l=n?[]:{},c=new Set(r);let u=0;for(let d=0;d<i;d++){const p=n?d:s[d];(!n&&c.has(p)||n)&&e[p]===void 0&&t[p]===void 0?(l[p]=void 0,u++):(l[p]=Bv(e[p],t[p]),l[p]===e[p]&&e[p]!==void 0&&u++)}return o===i&&u===o?e:l}return t}function _m(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function tu(e){if(!Om(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Om(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Om(e){return Object.prototype.toString.call(e)==="[object Object]"}function wC(e){return new Promise(t=>{setTimeout(t,e)})}function kC(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Bv(e,t):t}function SC(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function CC(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var jd=Symbol();function Wv(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===jd?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var cr,jn,po,af,NC=(af=class extends Xa{constructor(){super();te(this,cr);te(this,jn);te(this,po);G(this,po,t=>{if(!Ja&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){A(this,jn)||this.setEventListener(A(this,po))}onUnsubscribe(){var t;this.hasListeners()||((t=A(this,jn))==null||t.call(this),G(this,jn,void 0))}setEventListener(t){var n;G(this,po,t),(n=A(this,jn))==null||n.call(this),G(this,jn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){A(this,cr)!==t&&(G(this,cr,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof A(this,cr)=="boolean"?A(this,cr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},cr=new WeakMap,jn=new WeakMap,po=new WeakMap,af),Gv=new NC,mo,An,fo,lf,PC=(lf=class extends Xa{constructor(){super();te(this,mo,!0);te(this,An);te(this,fo);G(this,fo,t=>{if(!Ja&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){A(this,An)||this.setEventListener(A(this,fo))}onUnsubscribe(){var t;this.hasListeners()||((t=A(this,An))==null||t.call(this),G(this,An,void 0))}setEventListener(t){var n;G(this,fo,t),(n=A(this,An))==null||n.call(this),G(this,An,t(this.setOnline.bind(this)))}setOnline(t){A(this,mo)!==t&&(G(this,mo,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return A(this,mo)}},mo=new WeakMap,An=new WeakMap,fo=new WeakMap,lf),ka=new PC;function EC(){let e,t;const n=new Promise((o,s)=>{e=o,t=s});n.status="pending",n.catch(()=>{});function r(o){Object.assign(n,o),delete n.resolve,delete n.reject}return n.resolve=o=>{r({status:"fulfilled",value:o}),e(o)},n.reject=o=>{r({status:"rejected",reason:o}),t(o)},n}function TC(e){return Math.min(1e3*2**e,3e4)}function Kv(e){return(e??"online")==="online"?ka.isOnline():!0}var Hv=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Bl(e){return e instanceof Hv}function qv(e){let t=!1,n=0,r=!1,o;const s=EC(),i=g=>{var b;r||(h(new Hv(g)),(b=e.abort)==null||b.call(e))},l=()=>{t=!0},c=()=>{t=!1},u=()=>Gv.isFocused()&&(e.networkMode==="always"||ka.isOnline())&&e.canRun(),d=()=>Kv(e.networkMode)&&e.canRun(),p=g=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,g),o==null||o(),s.resolve(g))},h=g=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,g),o==null||o(),s.reject(g))},f=()=>new Promise(g=>{var b;o=y=>{(r||u())&&g(y)},(b=e.onPause)==null||b.call(e)}).then(()=>{var g;o=void 0,r||(g=e.onContinue)==null||g.call(e)}),w=()=>{if(r)return;let g;const b=n===0?e.initialPromise:void 0;try{g=b??e.fn()}catch(y){g=Promise.reject(y)}Promise.resolve(g).then(p).catch(y=>{var N;if(r)return;const v=e.retry??(Ja?0:3),x=e.retryDelay??TC,k=typeof x=="function"?x(n,y):x,S=v===!0||typeof v=="number"&&n<v||typeof v=="function"&&v(n,y);if(t||!S){h(y);return}n++,(N=e.onFail)==null||N.call(e,n,y),wC(k).then(()=>u()?void 0:f()).then(()=>{t?h(y):w()})})};return{promise:s,cancel:i,continue:()=>(o==null||o(),s),cancelRetry:l,continueRetry:c,canStart:d,start:()=>(d()?w():f().then(w),s)}}var RC=e=>setTimeout(e,0);function jC(){let e=[],t=0,n=l=>{l()},r=l=>{l()},o=RC;const s=l=>{t?e.push(l):o(()=>{n(l)})},i=()=>{const l=e;e=[],l.length&&o(()=>{r(()=>{l.forEach(c=>{n(c)})})})};return{batch:l=>{let c;t++;try{c=l()}finally{t--,t||i()}return c},batchCalls:l=>(...c)=>{s(()=>{l(...c)})},schedule:s,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{o=l}}}var Ue=jC(),ur,cf,Yv=(cf=class{constructor(){te(this,ur)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),yC(this.gcTime)&&G(this,ur,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Ja?1/0:5*60*1e3))}clearGcTimeout(){A(this,ur)&&(clearTimeout(A(this,ur)),G(this,ur,void 0))}},ur=new WeakMap,cf),ho,dr,ut,pr,Oe,Vs,mr,Nt,Xt,uf,AC=(uf=class extends Yv{constructor(t){super();te(this,Nt);te(this,ho);te(this,dr);te(this,ut);te(this,pr);te(this,Oe);te(this,Vs);te(this,mr);G(this,mr,!1),G(this,Vs,t.defaultOptions),this.setOptions(t.options),this.observers=[],G(this,pr,t.client),G(this,ut,A(this,pr).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,G(this,ho,IC(this.options)),this.state=t.state??A(this,ho),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=A(this,Oe))==null?void 0:t.promise}setOptions(t){this.options={...A(this,Vs),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&A(this,ut).remove(this)}setData(t,n){const r=kC(this.state.data,t,this.options);return Me(this,Nt,Xt).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Me(this,Nt,Xt).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=A(this,Oe))==null?void 0:r.promise;return(o=A(this,Oe))==null||o.cancel(t),n?n.then(Ct).catch(Ct):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(A(this,ho))}isActive(){return this.observers.some(t=>bC(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===jd||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>eu(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!xC(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=A(this,Oe))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=A(this,Oe))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),A(this,ut).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(A(this,Oe)&&(A(this,mr)?A(this,Oe).cancel({revert:!0}):A(this,Oe).cancelRetry()),this.scheduleGc()),A(this,ut).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Me(this,Nt,Xt).call(this,{type:"invalidate"})}fetch(t,n){var u,d,p;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(A(this,Oe))return A(this,Oe).continueRetry(),A(this,Oe).promise}if(t&&this.setOptions(t),!this.options.queryFn){const h=this.observers.find(f=>f.options.queryFn);h&&this.setOptions(h.options)}const r=new AbortController,o=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(G(this,mr,!0),r.signal)})},s=()=>{const h=Wv(this.options,n),w=(()=>{const g={client:A(this,pr),queryKey:this.queryKey,meta:this.meta};return o(g),g})();return G(this,mr,!1),this.options.persister?this.options.persister(h,w,this):h(w)},l=(()=>{const h={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:A(this,pr),state:this.state,fetchFn:s};return o(h),h})();(u=this.options.behavior)==null||u.onFetch(l,this),G(this,dr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=l.fetchOptions)==null?void 0:d.meta))&&Me(this,Nt,Xt).call(this,{type:"fetch",meta:(p=l.fetchOptions)==null?void 0:p.meta});const c=h=>{var f,w,g,b;Bl(h)&&h.silent||Me(this,Nt,Xt).call(this,{type:"error",error:h}),Bl(h)||((w=(f=A(this,ut).config).onError)==null||w.call(f,h,this),(b=(g=A(this,ut).config).onSettled)==null||b.call(g,this.state.data,h,this)),this.scheduleGc()};return G(this,Oe,qv({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,abort:r.abort.bind(r),onSuccess:h=>{var f,w,g,b;if(h===void 0){c(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(y){c(y);return}(w=(f=A(this,ut).config).onSuccess)==null||w.call(f,h,this),(b=(g=A(this,ut).config).onSettled)==null||b.call(g,h,this.state.error,this),this.scheduleGc()},onError:c,onFail:(h,f)=>{Me(this,Nt,Xt).call(this,{type:"failed",failureCount:h,error:f})},onPause:()=>{Me(this,Nt,Xt).call(this,{type:"pause"})},onContinue:()=>{Me(this,Nt,Xt).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),A(this,Oe).start()}},ho=new WeakMap,dr=new WeakMap,ut=new WeakMap,pr=new WeakMap,Oe=new WeakMap,Vs=new WeakMap,mr=new WeakMap,Nt=new WeakSet,Xt=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...MC(r.data,this.options),fetchMeta:t.meta??null};case"success":return G(this,dr,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return Bl(o)&&o.revert&&A(this,dr)?{...A(this,dr),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Ue.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),A(this,ut).notify({query:this,type:"updated",action:t})})},uf);function MC(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Kv(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function IC(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Vt,df,_C=(df=class extends Xa{constructor(t={}){super();te(this,Vt);this.config=t,G(this,Vt,new Map)}build(t,n,r){const o=n.queryKey,s=n.queryHash??Rd(o,n);let i=this.get(s);return i||(i=new AC({client:t,queryKey:o,queryHash:s,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(i)),i}add(t){A(this,Vt).has(t.queryHash)||(A(this,Vt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=A(this,Vt).get(t.queryHash);n&&(t.destroy(),n===t&&A(this,Vt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Ue.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return A(this,Vt).get(t)}getAll(){return[...A(this,Vt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Mm(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Mm(t,r)):n}notify(t){Ue.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Ue.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Ue.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Vt=new WeakMap,df),zt,Ve,fr,Ut,Sn,pf,OC=(pf=class extends Yv{constructor(t){super();te(this,Ut);te(this,zt);te(this,Ve);te(this,fr);this.mutationId=t.mutationId,G(this,Ve,t.mutationCache),G(this,zt,[]),this.state=t.state||DC(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){A(this,zt).includes(t)||(A(this,zt).push(t),this.clearGcTimeout(),A(this,Ve).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){G(this,zt,A(this,zt).filter(n=>n!==t)),this.scheduleGc(),A(this,Ve).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){A(this,zt).length||(this.state.status==="pending"?this.scheduleGc():A(this,Ve).remove(this))}continue(){var t;return((t=A(this,fr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var s,i,l,c,u,d,p,h,f,w,g,b,y,v,x,k,S,N,E,C;const n=()=>{Me(this,Ut,Sn).call(this,{type:"continue"})};G(this,fr,qv({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(P,I)=>{Me(this,Ut,Sn).call(this,{type:"failed",failureCount:P,error:I})},onPause:()=>{Me(this,Ut,Sn).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>A(this,Ve).canRun(this)}));const r=this.state.status==="pending",o=!A(this,fr).canStart();try{if(r)n();else{Me(this,Ut,Sn).call(this,{type:"pending",variables:t,isPaused:o}),await((i=(s=A(this,Ve).config).onMutate)==null?void 0:i.call(s,t,this));const I=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,t));I!==this.state.context&&Me(this,Ut,Sn).call(this,{type:"pending",context:I,variables:t,isPaused:o})}const P=await A(this,fr).start();return await((d=(u=A(this,Ve).config).onSuccess)==null?void 0:d.call(u,P,t,this.state.context,this)),await((h=(p=this.options).onSuccess)==null?void 0:h.call(p,P,t,this.state.context)),await((w=(f=A(this,Ve).config).onSettled)==null?void 0:w.call(f,P,null,this.state.variables,this.state.context,this)),await((b=(g=this.options).onSettled)==null?void 0:b.call(g,P,null,t,this.state.context)),Me(this,Ut,Sn).call(this,{type:"success",data:P}),P}catch(P){try{throw await((v=(y=A(this,Ve).config).onError)==null?void 0:v.call(y,P,t,this.state.context,this)),await((k=(x=this.options).onError)==null?void 0:k.call(x,P,t,this.state.context)),await((N=(S=A(this,Ve).config).onSettled)==null?void 0:N.call(S,void 0,P,this.state.variables,this.state.context,this)),await((C=(E=this.options).onSettled)==null?void 0:C.call(E,void 0,P,t,this.state.context)),P}finally{Me(this,Ut,Sn).call(this,{type:"error",error:P})}}finally{A(this,Ve).runNext(this)}}},zt=new WeakMap,Ve=new WeakMap,fr=new WeakMap,Ut=new WeakSet,Sn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Ue.batch(()=>{A(this,zt).forEach(r=>{r.onMutationUpdate(t)}),A(this,Ve).notify({mutation:this,type:"updated",action:t})})},pf);function DC(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var tn,Pt,zs,mf,LC=(mf=class extends Xa{constructor(t={}){super();te(this,tn);te(this,Pt);te(this,zs);this.config=t,G(this,tn,new Set),G(this,Pt,new Map),G(this,zs,0)}build(t,n,r){const o=new OC({mutationCache:this,mutationId:++ei(this,zs)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){A(this,tn).add(t);const n=ki(t);if(typeof n=="string"){const r=A(this,Pt).get(n);r?r.push(t):A(this,Pt).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(A(this,tn).delete(t)){const n=ki(t);if(typeof n=="string"){const r=A(this,Pt).get(n);if(r)if(r.length>1){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}else r[0]===t&&A(this,Pt).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=ki(t);if(typeof n=="string"){const r=A(this,Pt).get(n),o=r==null?void 0:r.find(s=>s.state.status==="pending");return!o||o===t}else return!0}runNext(t){var r;const n=ki(t);if(typeof n=="string"){const o=(r=A(this,Pt).get(n))==null?void 0:r.find(s=>s!==t&&s.state.isPaused);return(o==null?void 0:o.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Ue.batch(()=>{A(this,tn).forEach(t=>{this.notify({type:"removed",mutation:t})}),A(this,tn).clear(),A(this,Pt).clear()})}getAll(){return Array.from(A(this,tn))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Im(n,r))}findAll(t={}){return this.getAll().filter(n=>Im(t,n))}notify(t){Ue.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Ue.batch(()=>Promise.all(t.map(n=>n.continue().catch(Ct))))}},tn=new WeakMap,Pt=new WeakMap,zs=new WeakMap,mf);function ki(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Dm(e){return{onFetch:(t,n)=>{var d,p,h,f,w;const r=t.options,o=(h=(p=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:p.fetchMore)==null?void 0:h.direction,s=((f=t.state.data)==null?void 0:f.pages)||[],i=((w=t.state.data)==null?void 0:w.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const u=async()=>{let g=!1;const b=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(t.signal.aborted?g=!0:t.signal.addEventListener("abort",()=>{g=!0}),t.signal)})},y=Wv(t.options,t.fetchOptions),v=async(x,k,S)=>{if(g)return Promise.reject();if(k==null&&x.pages.length)return Promise.resolve(x);const E=(()=>{const V={client:t.client,queryKey:t.queryKey,pageParam:k,direction:S?"backward":"forward",meta:t.options.meta};return b(V),V})(),C=await y(E),{maxPages:P}=t.options,I=S?CC:SC;return{pages:I(x.pages,C,P),pageParams:I(x.pageParams,k,P)}};if(o&&s.length){const x=o==="backward",k=x?FC:Lm,S={pages:s,pageParams:i},N=k(r,S);l=await v(S,N,x)}else{const x=e??s.length;do{const k=c===0?i[0]??r.initialPageParam:Lm(r,l);if(c>0&&k==null)break;l=await v(l,k),c++}while(c<x)}return l};t.options.persister?t.fetchFn=()=>{var g,b;return(b=(g=t.options).persister)==null?void 0:b.call(g,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Lm(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function FC(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var he,Mn,In,go,vo,_n,yo,xo,ff,VC=(ff=class{constructor(e={}){te(this,he);te(this,Mn);te(this,In);te(this,go);te(this,vo);te(this,_n);te(this,yo);te(this,xo);G(this,he,e.queryCache||new _C),G(this,Mn,e.mutationCache||new LC),G(this,In,e.defaultOptions||{}),G(this,go,new Map),G(this,vo,new Map),G(this,_n,0)}mount(){ei(this,_n)._++,A(this,_n)===1&&(G(this,yo,Gv.subscribe(async e=>{e&&(await this.resumePausedMutations(),A(this,he).onFocus())})),G(this,xo,ka.subscribe(async e=>{e&&(await this.resumePausedMutations(),A(this,he).onOnline())})))}unmount(){var e,t;ei(this,_n)._--,A(this,_n)===0&&((e=A(this,yo))==null||e.call(this),G(this,yo,void 0),(t=A(this,xo))==null||t.call(this),G(this,xo,void 0))}isFetching(e){return A(this,he).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return A(this,Mn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=A(this,he).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=A(this,he).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(eu(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return A(this,he).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=A(this,he).get(r.queryHash),s=o==null?void 0:o.state.data,i=vC(t,s);if(i!==void 0)return A(this,he).build(this,r).setData(i,{...n,manual:!0})}setQueriesData(e,t,n){return Ue.batch(()=>A(this,he).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=A(this,he).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=A(this,he);Ue.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=A(this,he);return Ue.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=Ue.batch(()=>A(this,he).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(Ct).catch(Ct)}invalidateQueries(e,t={}){return Ue.batch(()=>(A(this,he).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=Ue.batch(()=>A(this,he).findAll(e).filter(o=>!o.isDisabled()&&!o.isStatic()).map(o=>{let s=o.fetch(void 0,n);return n.throwOnError||(s=s.catch(Ct)),o.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(Ct)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=A(this,he).build(this,t);return n.isStaleByTime(eu(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Ct).catch(Ct)}fetchInfiniteQuery(e){return e.behavior=Dm(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Ct).catch(Ct)}ensureInfiniteQueryData(e){return e.behavior=Dm(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return ka.isOnline()?A(this,Mn).resumePausedMutations():Promise.resolve()}getQueryCache(){return A(this,he)}getMutationCache(){return A(this,Mn)}getDefaultOptions(){return A(this,In)}setDefaultOptions(e){G(this,In,e)}setQueryDefaults(e,t){A(this,go).set(Os(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...A(this,go).values()],n={};return t.forEach(r=>{Ds(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){A(this,vo).set(Os(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...A(this,vo).values()],n={};return t.forEach(r=>{Ds(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...A(this,In).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Rd(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===jd&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...A(this,In).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){A(this,he).clear(),A(this,Mn).clear()}},he=new WeakMap,Mn=new WeakMap,In=new WeakMap,go=new WeakMap,vo=new WeakMap,_n=new WeakMap,yo=new WeakMap,xo=new WeakMap,ff),zC=m.createContext(void 0),UC=({client:e,children:t})=>(m.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),a.jsx(zC.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sa(){return Sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sa.apply(this,arguments)}var Ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ln||(Ln={}));const Fm="popstate";function $C(e){e===void 0&&(e={});function t(r,o){let{pathname:s,search:i,hash:l}=r.location;return nu("",{pathname:s,search:i,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Xv(o)}return WC(t,n,null,e)}function Xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function BC(){return Math.random().toString(36).substr(2,8)}function Vm(e,t){return{usr:e.state,key:e.key,idx:t}}function nu(e,t,n,r){return n===void 0&&(n=null),Sa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Za(t):t,{state:n,key:t&&t.key||r||BC()})}function Xv(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Za(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function WC(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:s=!1}=r,i=o.history,l=Ln.Pop,c=null,u=d();u==null&&(u=0,i.replaceState(Sa({},i.state,{idx:u}),""));function d(){return(i.state||{idx:null}).idx}function p(){l=Ln.Pop;let b=d(),y=b==null?null:b-u;u=b,c&&c({action:l,location:g.location,delta:y})}function h(b,y){l=Ln.Push;let v=nu(g.location,b,y);u=d()+1;let x=Vm(v,u),k=g.createHref(v);try{i.pushState(x,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(k)}s&&c&&c({action:l,location:g.location,delta:1})}function f(b,y){l=Ln.Replace;let v=nu(g.location,b,y);u=d();let x=Vm(v,u),k=g.createHref(v);i.replaceState(x,"",k),s&&c&&c({action:l,location:g.location,delta:0})}function w(b){let y=o.location.origin!=="null"?o.location.origin:o.location.href,v=typeof b=="string"?b:Xv(b);return v=v.replace(/ $/,"%20"),Xe(y,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,y)}let g={get action(){return l},get location(){return e(o,i)},listen(b){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Fm,p),c=b,()=>{o.removeEventListener(Fm,p),c=null}},createHref(b){return t(o,b)},createURL:w,encodeLocation(b){let y=w(b);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:h,replace:f,go(b){return i.go(b)}};return g}var zm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zm||(zm={}));function GC(e,t,n){return n===void 0&&(n="/"),KC(e,t,n,!1)}function KC(e,t,n,r){let o=typeof t=="string"?Za(t):t,s=ey(o.pathname||"/",n);if(s==null)return null;let i=Jv(e);HC(i);let l=null;for(let c=0;l==null&&c<i.length;++c){let u=o2(s);l=n2(i[c],u,r)}return l}function Jv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(s,i,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};c.relativePath.startsWith("/")&&(Xe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=co([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jv(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:e2(u,s.index),routesMeta:d})};return e.forEach((s,i)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))o(s,i);else for(let c of Zv(s.path))o(s,i,c)}),t}function Zv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return o?[s,""]:[s];let i=Zv(r.join("/")),l=[];return l.push(...i.map(c=>c===""?s:[s,c].join("/"))),o&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function HC(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:t2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qC=/^:[\w-]+$/,YC=3,QC=2,XC=1,JC=10,ZC=-2,Um=e=>e==="*";function e2(e,t){let n=e.split("/"),r=n.length;return n.some(Um)&&(r+=ZC),t&&(r+=QC),n.filter(o=>!Um(o)).reduce((o,s)=>o+(qC.test(s)?YC:s===""?XC:JC),r)}function t2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function n2(e,t,n){let{routesMeta:r}=e,o={},s="/",i=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=$m({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),h=c.route;if(!p&&u&&n&&!r[r.length-1].route.index&&(p=$m({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!p)return null;Object.assign(o,p.params),i.push({params:o,pathname:co([s,p.pathname]),pathnameBase:s2(co([s,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(s=co([s,p.pathnameBase]))}return i}function $m(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=r2(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let s=o[0],i=s.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:h,isOptional:f}=d;if(h==="*"){let g=l[p]||"";i=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const w=l[p];return f&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:i,pattern:e}}function r2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function o2(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Qv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ey(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const co=e=>e.join("/").replace(/\/\/+/g,"/"),s2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function i2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ty=["post","put","patch","delete"];new Set(ty);const a2=["get",...ty];new Set(a2);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ca(){return Ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ca.apply(this,arguments)}const l2=m.createContext(null),c2=m.createContext(null),ny=m.createContext(null),el=m.createContext(null),tl=m.createContext({outlet:null,matches:[],isDataRoute:!1}),ry=m.createContext(null);function Ad(){return m.useContext(el)!=null}function oy(){return Ad()||Xe(!1),m.useContext(el).location}function u2(e,t){return d2(e,t)}function d2(e,t,n,r){Ad()||Xe(!1);let{navigator:o}=m.useContext(ny),{matches:s}=m.useContext(tl),i=s[s.length-1],l=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let u=oy(),d;if(t){var p;let b=typeof t=="string"?Za(t):t;c==="/"||(p=b.pathname)!=null&&p.startsWith(c)||Xe(!1),d=b}else d=u;let h=d.pathname||"/",f=h;if(c!=="/"){let b=c.replace(/^\//,"").split("/");f="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let w=GC(e,{pathname:f}),g=g2(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:co([c,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:co([c,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return t&&g?m.createElement(el.Provider,{value:{location:Ca({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ln.Pop}},g):g}function p2(){let e=b2(),t=i2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:o},n):null,null)}const m2=m.createElement(p2,null);class f2 extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(tl.Provider,{value:this.props.routeContext},m.createElement(ry.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function h2(e){let{routeContext:t,match:n,children:r}=e,o=m.useContext(l2);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(tl.Provider,{value:t},r)}function g2(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=i.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Xe(!1),i=i.slice(0,Math.min(i.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<i.length;d++){let p=i[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:h,errors:f}=n,w=p.route.loader&&h[p.route.id]===void 0&&(!f||f[p.route.id]===void 0);if(p.route.lazy||w){c=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((d,p,h)=>{let f,w=!1,g=null,b=null;n&&(f=l&&p.route.id?l[p.route.id]:void 0,g=p.route.errorElement||m2,c&&(u<0&&h===0?(w=!0,b=null):u===h&&(w=!0,b=p.route.hydrateFallbackElement||null)));let y=t.concat(i.slice(0,h+1)),v=()=>{let x;return f?x=g:w?x=b:p.route.Component?x=m.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,m.createElement(h2,{match:p,routeContext:{outlet:d,matches:y,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?m.createElement(f2,{location:n.location,revalidation:n.revalidation,component:g,error:f,children:v(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):v()},null)}var ru=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ru||{});function v2(e){let t=m.useContext(c2);return t||Xe(!1),t}function y2(e){let t=m.useContext(tl);return t||Xe(!1),t}function x2(e){let t=y2(),n=t.matches[t.matches.length-1];return n.route.id||Xe(!1),n.route.id}function b2(){var e;let t=m.useContext(ry),n=v2(ru.UseRouteError),r=x2(ru.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function w2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ou(e){Xe(!1)}function k2(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ln.Pop,navigator:s,static:i=!1,future:l}=e;Ad()&&Xe(!1);let c=t.replace(/^\/*/,"/"),u=m.useMemo(()=>({basename:c,navigator:s,static:i,future:Ca({v7_relativeSplatPath:!1},l)}),[c,l,s,i]);typeof r=="string"&&(r=Za(r));let{pathname:d="/",search:p="",hash:h="",state:f=null,key:w="default"}=r,g=m.useMemo(()=>{let b=ey(d,c);return b==null?null:{location:{pathname:b,search:p,hash:h,state:f,key:w},navigationType:o}},[c,d,p,h,f,w,o]);return g==null?null:m.createElement(ny.Provider,{value:u},m.createElement(el.Provider,{children:n,value:g}))}function S2(e){let{children:t,location:n}=e;return u2(su(t),n)}new Promise(()=>{});function su(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(r,o)=>{if(!m.isValidElement(r))return;let s=[...t,o];if(r.type===m.Fragment){n.push.apply(n,su(r.props.children,s));return}r.type!==ou&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let i={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=su(r.props.children,s)),n.push(i)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const C2="6";try{window.__reactRouterVersion=C2}catch{}const N2="startTransition",Bm=bu[N2];function P2(e){let{basename:t,children:n,future:r,window:o}=e,s=m.useRef();s.current==null&&(s.current=$C({window:o,v5Compat:!0}));let i=s.current,[l,c]=m.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},d=m.useCallback(p=>{u&&Bm?Bm(()=>c(p)):c(p)},[c,u]);return m.useLayoutEffect(()=>i.listen(d),[i,d]),m.useEffect(()=>w2(r),[r]),m.createElement(k2,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,future:r})}var Wm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wm||(Wm={}));var Gm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gm||(Gm={}));const E2=Ga("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),be=m.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},s)=>{const i=r?nw:"button";return a.jsx(i,{className:ne(E2({variant:t,size:n,className:e})),ref:s,...o})});be.displayName="Button";var T2=m.createContext(void 0);function R2(e){const t=m.useContext(T2);return e||t||"ltr"}function j2(e){const t=m.useRef({value:e,previous:e});return m.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var Er="NavigationMenu",[Md,sy,A2]=md(Er),[iu,M2,I2]=md(Er),[Id,zP]=Pr(Er,[A2,I2]),[_2,vt]=Id(Er),[O2,D2]=Id(Er),iy=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:s,delayDuration:i=200,skipDelayDuration:l=300,orientation:c="horizontal",dir:u,...d}=e,[p,h]=m.useState(null),f=ye(t,P=>h(P)),w=R2(u),g=m.useRef(0),b=m.useRef(0),y=m.useRef(0),[v,x]=m.useState(!0),[k,S]=qs({prop:r,onChange:P=>{const I=P!=="",V=l>0;I?(window.clearTimeout(y.current),V&&x(!1)):(window.clearTimeout(y.current),y.current=window.setTimeout(()=>x(!0),l)),o==null||o(P)},defaultProp:s??"",caller:Er}),N=m.useCallback(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>S(""),150)},[S]),E=m.useCallback(P=>{window.clearTimeout(b.current),S(P)},[S]),C=m.useCallback(P=>{k===P?window.clearTimeout(b.current):g.current=window.setTimeout(()=>{window.clearTimeout(b.current),S(P)},i)},[k,S,i]);return m.useEffect(()=>()=>{window.clearTimeout(g.current),window.clearTimeout(b.current),window.clearTimeout(y.current)},[]),a.jsx(ay,{scope:n,isRootMenu:!0,value:k,dir:w,orientation:c,rootNavigationMenu:p,onTriggerEnter:P=>{window.clearTimeout(g.current),v?C(P):E(P)},onTriggerLeave:()=>{window.clearTimeout(g.current),N()},onContentEnter:()=>window.clearTimeout(b.current),onContentLeave:N,onItemSelect:P=>{S(I=>I===P?"":P)},onItemDismiss:()=>S(""),children:a.jsx(Z.nav,{"aria-label":"Main","data-orientation":c,dir:w,...d,ref:f})})});iy.displayName=Er;var au="NavigationMenuSub",L2=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:s,orientation:i="horizontal",...l}=e,c=vt(au,n),[u,d]=qs({prop:r,onChange:o,defaultProp:s??"",caller:au});return a.jsx(ay,{scope:n,isRootMenu:!1,value:u,dir:c.dir,orientation:i,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:p=>d(p),onItemSelect:p=>d(p),onItemDismiss:()=>d(""),children:a.jsx(Z.div,{"data-orientation":i,...l,ref:t})})});L2.displayName=au;var ay=e=>{const{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:o,orientation:s,children:i,value:l,onItemSelect:c,onItemDismiss:u,onTriggerEnter:d,onTriggerLeave:p,onContentEnter:h,onContentLeave:f}=e,[w,g]=m.useState(null),[b,y]=m.useState(new Map),[v,x]=m.useState(null);return a.jsx(_2,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:l,previousValue:j2(l),baseId:ao(),dir:o,orientation:s,viewport:w,onViewportChange:g,indicatorTrack:v,onIndicatorTrackChange:x,onTriggerEnter:Te(d),onTriggerLeave:Te(p),onContentEnter:Te(h),onContentLeave:Te(f),onItemSelect:Te(c),onItemDismiss:Te(u),onViewportContentChange:m.useCallback((k,S)=>{y(N=>(N.set(k,S),new Map(N)))},[]),onViewportContentRemove:m.useCallback(k=>{y(S=>S.has(k)?(S.delete(k),new Map(S)):S)},[]),children:a.jsx(Md.Provider,{scope:t,children:a.jsx(O2,{scope:t,items:b,children:i})})})},ly="NavigationMenuList",cy=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=vt(ly,n),s=a.jsx(Z.ul,{"data-orientation":o.orientation,...r,ref:t});return a.jsx(Z.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:a.jsx(Md.Slot,{scope:n,children:o.isRootMenu?a.jsx(xy,{asChild:!0,children:s}):s})})});cy.displayName=ly;var uy="NavigationMenuItem",[F2,dy]=Id(uy),py=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,...o}=e,s=ao(),i=r||s||"LEGACY_REACT_AUTO_VALUE",l=m.useRef(null),c=m.useRef(null),u=m.useRef(null),d=m.useRef(()=>{}),p=m.useRef(!1),h=m.useCallback((w="start")=>{if(l.current){d.current();const g=cu(l.current);g.length&&Dd(w==="start"?g:g.reverse())}},[]),f=m.useCallback(()=>{if(l.current){const w=cu(l.current);w.length&&(d.current=G2(w))}},[]);return a.jsx(F2,{scope:n,value:i,triggerRef:c,contentRef:l,focusProxyRef:u,wasEscapeCloseRef:p,onEntryKeyDown:h,onFocusProxyEnter:h,onRootContentClose:f,onContentFocusOutside:f,children:a.jsx(Z.li,{...o,ref:t})})});py.displayName=uy;var lu="NavigationMenuTrigger",my=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,disabled:r,...o}=e,s=vt(lu,e.__scopeNavigationMenu),i=dy(lu,e.__scopeNavigationMenu),l=m.useRef(null),c=ye(l,i.triggerRef,t),u=wy(s.baseId,i.value),d=ky(s.baseId,i.value),p=m.useRef(!1),h=m.useRef(!1),f=i.value===s.value;return a.jsxs(a.Fragment,{children:[a.jsx(Md.ItemSlot,{scope:n,value:i.value,children:a.jsx(by,{asChild:!0,children:a.jsx(Z.button,{id:u,disabled:r,"data-disabled":r?"":void 0,"data-state":Ld(f),"aria-expanded":f,"aria-controls":d,...o,ref:c,onPointerEnter:q(e.onPointerEnter,()=>{h.current=!1,i.wasEscapeCloseRef.current=!1}),onPointerMove:q(e.onPointerMove,Na(()=>{r||h.current||i.wasEscapeCloseRef.current||p.current||(s.onTriggerEnter(i.value),p.current=!0)})),onPointerLeave:q(e.onPointerLeave,Na(()=>{r||(s.onTriggerLeave(),p.current=!1)})),onClick:q(e.onClick,()=>{s.onItemSelect(i.value),h.current=f}),onKeyDown:q(e.onKeyDown,w=>{const b={horizontal:"ArrowDown",vertical:s.dir==="rtl"?"ArrowLeft":"ArrowRight"}[s.orientation];f&&w.key===b&&(i.onEntryKeyDown(),w.preventDefault())})})})}),f&&a.jsxs(a.Fragment,{children:[a.jsx(Ig,{"aria-hidden":!0,tabIndex:0,ref:i.focusProxyRef,onFocus:w=>{const g=i.contentRef.current,b=w.relatedTarget,y=b===l.current,v=g==null?void 0:g.contains(b);(y||!v)&&i.onFocusProxyEnter(y?"start":"end")}}),s.viewport&&a.jsx("span",{"aria-owns":d})]})]})});my.displayName=lu;var V2="NavigationMenuLink",Km="navigationMenu.linkSelect",fy=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,active:r,onSelect:o,...s}=e;return a.jsx(by,{asChild:!0,children:a.jsx(Z.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...s,ref:t,onClick:q(e.onClick,i=>{const l=i.target,c=new CustomEvent(Km,{bubbles:!0,cancelable:!0});if(l.addEventListener(Km,u=>o==null?void 0:o(u),{once:!0}),ga(l,c),!c.defaultPrevented&&!i.metaKey){const u=new CustomEvent(Bi,{bubbles:!0,cancelable:!0});ga(l,u)}},{checkForDefaultPrevented:!1})})})});fy.displayName=V2;var _d="NavigationMenuIndicator",hy=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=vt(_d,e.__scopeNavigationMenu),s=!!o.value;return o.indicatorTrack?dd.createPortal(a.jsx(_t,{present:n||s,children:a.jsx(z2,{...r,ref:t})}),o.indicatorTrack):null});hy.displayName=_d;var z2=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=vt(_d,n),s=sy(n),[i,l]=m.useState(null),[c,u]=m.useState(null),d=o.orientation==="horizontal",p=!!o.value;m.useEffect(()=>{var g;const w=(g=s().find(b=>b.value===o.value))==null?void 0:g.ref.current;w&&l(w)},[s,o.value]);const h=()=>{i&&u({size:d?i.offsetWidth:i.offsetHeight,offset:d?i.offsetLeft:i.offsetTop})};return uu(i,h),uu(o.indicatorTrack,h),c?a.jsx(Z.div,{"aria-hidden":!0,"data-state":p?"visible":"hidden","data-orientation":o.orientation,...r,ref:t,style:{position:"absolute",...d?{left:0,width:c.size+"px",transform:`translateX(${c.offset}px)`}:{top:0,height:c.size+"px",transform:`translateY(${c.offset}px)`},...r.style}}):null}),Ro="NavigationMenuContent",gy=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=vt(Ro,e.__scopeNavigationMenu),s=dy(Ro,e.__scopeNavigationMenu),i=ye(s.contentRef,t),l=s.value===o.value,c={value:s.value,triggerRef:s.triggerRef,focusProxyRef:s.focusProxyRef,wasEscapeCloseRef:s.wasEscapeCloseRef,onContentFocusOutside:s.onContentFocusOutside,onRootContentClose:s.onRootContentClose,...r};return o.viewport?a.jsx(U2,{forceMount:n,...c,ref:i}):a.jsx(_t,{present:n||l,children:a.jsx(vy,{"data-state":Ld(l),...c,ref:i,onPointerEnter:q(e.onPointerEnter,o.onContentEnter),onPointerLeave:q(e.onPointerLeave,Na(o.onContentLeave)),style:{pointerEvents:!l&&o.isRootMenu?"none":void 0,...c.style}})})});gy.displayName=Ro;var U2=m.forwardRef((e,t)=>{const n=vt(Ro,e.__scopeNavigationMenu),{onViewportContentChange:r,onViewportContentRemove:o}=n;return ot(()=>{r(e.value,{ref:t,...e})},[e,t,r]),ot(()=>()=>o(e.value),[e.value,o]),null}),Bi="navigationMenu.rootContentDismiss",vy=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:r,triggerRef:o,focusProxyRef:s,wasEscapeCloseRef:i,onRootContentClose:l,onContentFocusOutside:c,...u}=e,d=vt(Ro,n),p=m.useRef(null),h=ye(p,t),f=wy(d.baseId,r),w=ky(d.baseId,r),g=sy(n),b=m.useRef(null),{onItemDismiss:y}=d;m.useEffect(()=>{const x=p.current;if(d.isRootMenu&&x){const k=()=>{var S;y(),l(),x.contains(document.activeElement)&&((S=o.current)==null||S.focus())};return x.addEventListener(Bi,k),()=>x.removeEventListener(Bi,k)}},[d.isRootMenu,e.value,o,y,l]);const v=m.useMemo(()=>{const k=g().map(I=>I.value);d.dir==="rtl"&&k.reverse();const S=k.indexOf(d.value),N=k.indexOf(d.previousValue),E=r===d.value,C=N===k.indexOf(r);if(!E&&!C)return b.current;const P=(()=>{if(S!==N){if(E&&N!==-1)return S>N?"from-end":"from-start";if(C&&S!==-1)return S>N?"to-start":"to-end"}return null})();return b.current=P,P},[d.previousValue,d.value,d.dir,g,r]);return a.jsx(xy,{asChild:!0,children:a.jsx(Hs,{id:w,"aria-labelledby":f,"data-motion":v,"data-orientation":d.orientation,...u,ref:h,disableOutsidePointerEvents:!1,onDismiss:()=>{var k;const x=new Event(Bi,{bubbles:!0,cancelable:!0});(k=p.current)==null||k.dispatchEvent(x)},onFocusOutside:q(e.onFocusOutside,x=>{var S;c();const k=x.target;(S=d.rootNavigationMenu)!=null&&S.contains(k)&&x.preventDefault()}),onPointerDownOutside:q(e.onPointerDownOutside,x=>{var E;const k=x.target,S=g().some(C=>{var P;return(P=C.ref.current)==null?void 0:P.contains(k)}),N=d.isRootMenu&&((E=d.viewport)==null?void 0:E.contains(k));(S||N||!d.isRootMenu)&&x.preventDefault()}),onKeyDown:q(e.onKeyDown,x=>{var N;const k=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!k){const E=cu(x.currentTarget),C=document.activeElement,P=E.findIndex(T=>T===C),V=x.shiftKey?E.slice(0,P).reverse():E.slice(P+1,E.length);Dd(V)?x.preventDefault():(N=s.current)==null||N.focus()}}),onEscapeKeyDown:q(e.onEscapeKeyDown,x=>{i.current=!0})})})}),Od="NavigationMenuViewport",yy=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,s=!!vt(Od,e.__scopeNavigationMenu).value;return a.jsx(_t,{present:n||s,children:a.jsx($2,{...r,ref:t})})});yy.displayName=Od;var $2=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,children:r,...o}=e,s=vt(Od,n),i=ye(t,s.onViewportChange),l=D2(Ro,e.__scopeNavigationMenu),[c,u]=m.useState(null),[d,p]=m.useState(null),h=c?(c==null?void 0:c.width)+"px":void 0,f=c?(c==null?void 0:c.height)+"px":void 0,w=!!s.value,g=w?s.value:s.previousValue;return uu(d,()=>{d&&u({width:d.offsetWidth,height:d.offsetHeight})}),a.jsx(Z.div,{"data-state":Ld(w),"data-orientation":s.orientation,...o,ref:i,style:{pointerEvents:!w&&s.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":h,"--radix-navigation-menu-viewport-height":f,...o.style},onPointerEnter:q(e.onPointerEnter,s.onContentEnter),onPointerLeave:q(e.onPointerLeave,Na(s.onContentLeave)),children:Array.from(l.items).map(([y,{ref:v,forceMount:x,...k}])=>{const S=g===y;return a.jsx(_t,{present:x||S,children:a.jsx(vy,{...k,ref:pd(v,N=>{S&&N&&p(N)})})},y)})})}),B2="FocusGroup",xy=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=vt(B2,n);return a.jsx(iu.Provider,{scope:n,children:a.jsx(iu.Slot,{scope:n,children:a.jsx(Z.div,{dir:o.dir,...r,ref:t})})})}),Hm=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],W2="FocusGroupItem",by=m.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...r}=e,o=M2(n),s=vt(W2,n);return a.jsx(iu.ItemSlot,{scope:n,children:a.jsx(Z.button,{...r,ref:t,onKeyDown:q(e.onKeyDown,i=>{if(["Home","End",...Hm].includes(i.key)){let c=o().map(p=>p.ref.current);if([s.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(i.key)&&c.reverse(),Hm.includes(i.key)){const p=c.indexOf(i.currentTarget);c=c.slice(p+1)}setTimeout(()=>Dd(c)),i.preventDefault()}})})})});function cu(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Dd(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}function G2(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const n=t.dataset.tabindex;t.setAttribute("tabindex",n)})}}function uu(e,t){const n=Te(t);ot(()=>{let r=0;if(e){const o=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(n)});return o.observe(e),()=>{window.cancelAnimationFrame(r),o.unobserve(e)}}},[e,n])}function Ld(e){return e?"open":"closed"}function wy(e,t){return`${e}-trigger-${t}`}function ky(e,t){return`${e}-content-${t}`}function Na(e){return t=>t.pointerType==="mouse"?e(t):void 0}var Sy=iy,Cy=cy,K2=py,Ny=my,H2=fy,Py=hy,Ey=gy,Ty=yy;const Ry=m.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(Sy,{ref:r,className:ne("relative z-10 flex max-w-max flex-1 items-center justify-center",e),...n,children:[t,a.jsx(Ay,{})]}));Ry.displayName=Sy.displayName;const jy=m.forwardRef(({className:e,...t},n)=>a.jsx(Cy,{ref:n,className:ne("group flex flex-1 list-none items-center justify-center space-x-1",e),...t}));jy.displayName=Cy.displayName;const q2=K2,Y2=Ga("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),Q2=m.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(Ny,{ref:r,className:ne(Y2(),"group",e),...n,children:[t," ",a.jsx(va,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})]}));Q2.displayName=Ny.displayName;const X2=m.forwardRef(({className:e,...t},n)=>a.jsx(Ey,{ref:n,className:ne("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",e),...t}));X2.displayName=Ey.displayName;const J2=H2,Ay=m.forwardRef(({className:e,...t},n)=>a.jsx("div",{className:ne("absolute left-0 top-full flex justify-center"),children:a.jsx(Ty,{className:ne("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",e),ref:n,...t})}));Ay.displayName=Ty.displayName;const Z2=m.forwardRef(({className:e,...t},n)=>a.jsx(Py,{ref:n,className:ne("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",e),...t,children:a.jsx("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})}));Z2.displayName=Py.displayName;const eN=({sections:e,activeSection:t})=>{const[n,r]=m.useState(!1),[o,s]=m.useState(!1),[i,l]=m.useState(!1);m.useEffect(()=>{l(!0)},[]),m.useEffect(()=>{const d=()=>{s(window.scrollY>10)};return window.addEventListener("scroll",d),d(),()=>window.removeEventListener("scroll",d)},[]);const c=d=>{r(!1);const p=document.getElementById(d);if(p){const w=p.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:w,behavior:"smooth"})}},u=(d,p)=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),c(p))};return a.jsx("header",{className:ne("fixed top-0 left-0 right-0 z-50 transition-all duration-300",o?"bg-background/90 backdrop-blur-md shadow-md py-2":"bg-transparent py-4",i?"translate-y-0":"-translate-y-full"),children:a.jsxs("div",{className:"container px-4 mx-auto flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("img",{src:"favicon.ico",alt:"Kubernetes Bioscope Icon",className:"w-6 h-6 mr-2"}),a.jsx("span",{className:"text-xl font-bold gradient-text",children:"Kubernetes Bioscope"})]}),a.jsx(Ry,{className:"hidden md:flex",children:a.jsx(jy,{children:e.map(d=>a.jsx(q2,{children:a.jsx(J2,{asChild:!0,className:ne("px-4 py-2 text-sm font-medium rounded-md transition-colors nav-link-hover",t===d.id?"text-primary nav-link-active":"text-muted-foreground"),children:a.jsx("button",{onClick:()=>c(d.id),onKeyDown:p=>u(p,d.id),tabIndex:0,role:"link","aria-current":t===d.id?"page":void 0,children:d.name})})},d.id))})}),a.jsx(be,{variant:"ghost",size:"icon",className:"md:hidden text-foreground focus:ring-2 focus:ring-primary",onClick:()=>r(!n),"aria-label":"Toggle menu","aria-expanded":n,"aria-controls":"mobile-menu",children:n?a.jsx(yd,{size:24}):a.jsx(o1,{size:24})}),a.jsx("div",{id:"mobile-menu",className:ne("md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center pt-10 transition-all duration-300 ease-in-out",n?"opacity-100 translate-x-0":"opacity-0 translate-x-full pointer-events-none"),children:a.jsx("nav",{className:"flex flex-col items-center space-y-6 w-full",children:e.map((d,p)=>a.jsxs(be,{variant:"ghost",className:ne("text-lg font-medium transition-all duration-200 w-4/5 py-6 flex items-center justify-center gap-2",t===d.id?"text-primary bg-primary/10":"text-muted-foreground hover:text-primary hover:bg-primary/5","animate-fade-in"),style:{animationDelay:`${p*100}ms`},onClick:()=>c(d.id),onKeyDown:h=>u(h,d.id),tabIndex:0,role:"link","aria-current":t===d.id?"page":void 0,children:[d.name,t===d.id&&a.jsx(Qw,{className:"w-4 h-4 ml-1"})]},d.id))})})]})})},tN=()=>{const[e,t]=m.useState("home"),n=m.useRef([]),r=[{id:"home",name:"Home"},{id:"fundamentals",name:"Fundamentals"},{id:"learning-path",name:"Learning Path"}];return m.useEffect(()=>(n.current.forEach(o=>o.disconnect()),n.current=[],r.forEach(o=>{const s=document.getElementById(o.id);if(!s)return;const i=new IntersectionObserver(([l])=>{l.isIntersecting&&l.intersectionRatio>=.4&&t(o.id)},{root:null,rootMargin:"0px",threshold:[.4,.8]});i.observe(s),n.current.push(i)}),()=>{n.current.forEach(o=>o.disconnect())}),[]),a.jsx(eN,{sections:r,activeSection:e})},nN="/kubernetes/assets/kubernetes-hero-CxoC5qg8.jpg",rN=()=>{const[e,t]=m.useState(!1);return m.useEffect(()=>{t(!0)},[]),a.jsxs("section",{id:"hero",className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 dots-pattern opacity-30"}),a.jsxs("div",{className:"absolute inset-0 z-0",children:[a.jsx("img",{src:nN,alt:"Kubernetes cluster visualization",className:"w-full h-full object-cover opacity-20"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"})]}),a.jsx("div",{className:"container relative z-10 px-4 sm:px-6 lg:px-8",children:a.jsx("div",{className:"max-w-6xl mx-auto",children:a.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[a.jsxs("div",{className:`space-y-8 ${e?"animate-slide-up":"opacity-0"}`,children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium",children:[a.jsx(f1,{className:"w-4 h-4"}),"Interactive Kubernetes Learning"]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h1",{className:"text-5xl lg:text-7xl font-bold leading-tight",children:["Kubernetes"," ",a.jsx("span",{className:"gradient-text",children:"Bioscope"})]}),a.jsx("p",{className:"text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed",children:"Your path to cloud-native excellence with interactive tutorials, 3D visualizations, and real-world scenarios."})]})]}),a.jsx("div",{className:"relative lg:h-[600px] flex items-center justify-center",children:a.jsxs("div",{className:"relative animate-float",children:[a.jsx("div",{className:"absolute -top-8 -right-8 w-16 h-16 bg-gradient-primary rounded-lg opacity-80 animate-glow"}),a.jsx("div",{className:"absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-accent to-cyber-purple rounded-lg opacity-60 animate-glow",style:{animationDelay:"1s"}}),a.jsx("div",{className:"relative p-8 card-gradient rounded-2xl border border-border/50 hover-lift",children:a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-3 h-3 bg-tech-green rounded-full animate-pulse"}),a.jsx("span",{className:"font-mono text-sm text-muted-foreground",children:"cluster.local"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"h-2 bg-primary/30 rounded w-3/4"}),a.jsx("div",{className:"h-2 bg-accent/30 rounded w-1/2"}),a.jsx("div",{className:"h-2 bg-primary/20 rounded w-2/3"})]}),a.jsxs("div",{className:"mt-6 p-4 terminal rounded-lg",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]}),a.jsxs("div",{className:"font-mono text-sm space-y-1",children:[a.jsx("div",{className:"text-primary",children:"$ kubectl get pods"}),a.jsx("div",{className:"text-muted-foreground",children:"NAME READY STATUS"}),a.jsx("div",{className:"text-tech-green",children:"web-app-1 1/1 Running"})]})]})]})})]})})]})})})]})},Ee=m.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:ne("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));Ee.displayName="Card";const Ls=m.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:ne("flex flex-col space-y-1.5 p-6",e),...t}));Ls.displayName="CardHeader";const Fs=m.forwardRef(({className:e,...t},n)=>a.jsx("h3",{ref:n,className:ne("text-2xl font-semibold leading-none tracking-tight",e),...t}));Fs.displayName="CardTitle";const oN=m.forwardRef(({className:e,...t},n)=>a.jsx("p",{ref:n,className:ne("text-sm text-muted-foreground",e),...t}));oN.displayName="CardDescription";const De=m.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:ne("p-6 pt-0",e),...t}));De.displayName="CardContent";const sN=m.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:ne("flex items-center p-6 pt-0",e),...t}));sN.displayName="CardFooter";var nl="Collapsible",[iN,UP]=Pr(nl),[aN,Fd]=iN(nl),My=m.forwardRef((e,t)=>{const{__scopeCollapsible:n,open:r,defaultOpen:o,disabled:s,onOpenChange:i,...l}=e,[c,u]=qs({prop:r,defaultProp:o??!1,onChange:i,caller:nl});return a.jsx(aN,{scope:n,disabled:s,contentId:ao(),open:c,onOpenToggle:m.useCallback(()=>u(d=>!d),[u]),children:a.jsx(Z.div,{"data-state":zd(c),"data-disabled":s?"":void 0,...l,ref:t})})});My.displayName=nl;var Iy="CollapsibleTrigger",_y=m.forwardRef((e,t)=>{const{__scopeCollapsible:n,...r}=e,o=Fd(Iy,n);return a.jsx(Z.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":zd(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...r,ref:t,onClick:q(e.onClick,o.onOpenToggle)})});_y.displayName=Iy;var Vd="CollapsibleContent",Oy=m.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=Fd(Vd,e.__scopeCollapsible);return a.jsx(_t,{present:n||o.open,children:({present:s})=>a.jsx(lN,{...r,ref:t,present:s})})});Oy.displayName=Vd;var lN=m.forwardRef((e,t)=>{const{__scopeCollapsible:n,present:r,children:o,...s}=e,i=Fd(Vd,n),[l,c]=m.useState(r),u=m.useRef(null),d=ye(t,u),p=m.useRef(0),h=p.current,f=m.useRef(0),w=f.current,g=i.open||l,b=m.useRef(g),y=m.useRef(void 0);return m.useEffect(()=>{const v=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(v)},[]),ot(()=>{const v=u.current;if(v){y.current=y.current||{transitionDuration:v.style.transitionDuration,animationName:v.style.animationName},v.style.transitionDuration="0s",v.style.animationName="none";const x=v.getBoundingClientRect();p.current=x.height,f.current=x.width,b.current||(v.style.transitionDuration=y.current.transitionDuration,v.style.animationName=y.current.animationName),c(r)}},[i.open,r]),a.jsx(Z.div,{"data-state":zd(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!g,...s,ref:d,style:{"--radix-collapsible-content-height":h?`${h}px`:void 0,"--radix-collapsible-content-width":w?`${w}px`:void 0,...e.style},children:g&&o})});function zd(e){return e?"open":"closed"}var cN=My;const du=cN,pu=_y,mu=Oy;var Wl="focusScope.autoFocusOnMount",Gl="focusScope.autoFocusOnUnmount",qm={bubbles:!1,cancelable:!0},uN="FocusScope",Dy=m.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:s,...i}=e,[l,c]=m.useState(null),u=Te(o),d=Te(s),p=m.useRef(null),h=ye(t,g=>c(g)),f=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;m.useEffect(()=>{if(r){let g=function(x){if(f.paused||!l)return;const k=x.target;l.contains(k)?p.current=k:Cn(p.current,{select:!0})},b=function(x){if(f.paused||!l)return;const k=x.relatedTarget;k!==null&&(l.contains(k)||Cn(p.current,{select:!0}))},y=function(x){if(document.activeElement===document.body)for(const S of x)S.removedNodes.length>0&&Cn(l)};document.addEventListener("focusin",g),document.addEventListener("focusout",b);const v=new MutationObserver(y);return l&&v.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",b),v.disconnect()}}},[r,l,f.paused]),m.useEffect(()=>{if(l){Qm.add(f);const g=document.activeElement;if(!l.contains(g)){const y=new CustomEvent(Wl,qm);l.addEventListener(Wl,u),l.dispatchEvent(y),y.defaultPrevented||(dN(gN(Ly(l)),{select:!0}),document.activeElement===g&&Cn(l))}return()=>{l.removeEventListener(Wl,u),setTimeout(()=>{const y=new CustomEvent(Gl,qm);l.addEventListener(Gl,d),l.dispatchEvent(y),y.defaultPrevented||Cn(g??document.body,{select:!0}),l.removeEventListener(Gl,d),Qm.remove(f)},0)}}},[l,u,d,f]);const w=m.useCallback(g=>{if(!n&&!r||f.paused)return;const b=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,y=document.activeElement;if(b&&y){const v=g.currentTarget,[x,k]=pN(v);x&&k?!g.shiftKey&&y===k?(g.preventDefault(),n&&Cn(x,{select:!0})):g.shiftKey&&y===x&&(g.preventDefault(),n&&Cn(k,{select:!0})):y===v&&g.preventDefault()}},[n,r,f.paused]);return a.jsx(Z.div,{tabIndex:-1,...i,ref:h,onKeyDown:w})});Dy.displayName=uN;function dN(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Cn(r,{select:t}),document.activeElement!==n)return}function pN(e){const t=Ly(e),n=Ym(t,e),r=Ym(t.reverse(),e);return[n,r]}function Ly(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Ym(e,t){for(const n of e)if(!mN(n,{upTo:t}))return n}function mN(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function fN(e){return e instanceof HTMLInputElement&&"select"in e}function Cn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&fN(e)&&t&&e.select()}}var Qm=hN();function hN(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Xm(e,t),e.unshift(t)},remove(t){var n;e=Xm(e,t),(n=e[0])==null||n.resume()}}}function Xm(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function gN(e){return e.filter(t=>t.tagName!=="A")}var Kl=0;function vN(){m.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Jm()),document.body.insertAdjacentElement("beforeend",e[1]??Jm()),Kl++,()=>{Kl===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Kl--}},[])}function Jm(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Bt=function(){return Bt=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Bt.apply(this,arguments)};function Fy(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function yN(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,s;r<o;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Wi="right-scroll-bar-position",Gi="width-before-scroll-bar",xN="with-scroll-bars-hidden",bN="--removed-body-scroll-bar-size";function Hl(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function wN(e,t){var n=m.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var kN=typeof window<"u"?m.useLayoutEffect:m.useEffect,Zm=new WeakMap;function SN(e,t){var n=wN(null,function(r){return e.forEach(function(o){return Hl(o,r)})});return kN(function(){var r=Zm.get(n);if(r){var o=new Set(r),s=new Set(e),i=n.current;o.forEach(function(l){s.has(l)||Hl(l,null)}),s.forEach(function(l){o.has(l)||Hl(l,i)})}Zm.set(n,e)},[e]),n}function CN(e){return e}function NN(e,t){t===void 0&&(t=CN);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(s){var i=t(s,r);return n.push(i),function(){n=n.filter(function(l){return l!==i})}},assignSyncMedium:function(s){for(r=!0;n.length;){var i=n;n=[],i.forEach(s)}n={push:function(l){return s(l)},filter:function(){return n}}},assignMedium:function(s){r=!0;var i=[];if(n.length){var l=n;n=[],l.forEach(s),i=n}var c=function(){var d=i;i=[],d.forEach(s)},u=function(){return Promise.resolve().then(c)};u(),n={push:function(d){i.push(d),u()},filter:function(d){return i=i.filter(d),n}}}};return o}function PN(e){e===void 0&&(e={});var t=NN(null);return t.options=Bt({async:!0,ssr:!1},e),t}var Vy=function(e){var t=e.sideCar,n=Fy(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return m.createElement(r,Bt({},n))};Vy.isSideCarExport=!0;function EN(e,t){return e.useMedium(t),Vy}var zy=PN(),ql=function(){},rl=m.forwardRef(function(e,t){var n=m.useRef(null),r=m.useState({onScrollCapture:ql,onWheelCapture:ql,onTouchMoveCapture:ql}),o=r[0],s=r[1],i=e.forwardProps,l=e.children,c=e.className,u=e.removeScrollBar,d=e.enabled,p=e.shards,h=e.sideCar,f=e.noRelative,w=e.noIsolation,g=e.inert,b=e.allowPinchZoom,y=e.as,v=y===void 0?"div":y,x=e.gapMode,k=Fy(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=h,N=SN([n,t]),E=Bt(Bt({},k),o);return m.createElement(m.Fragment,null,d&&m.createElement(S,{sideCar:zy,removeScrollBar:u,shards:p,noRelative:f,noIsolation:w,inert:g,setCallbacks:s,allowPinchZoom:!!b,lockRef:n,gapMode:x}),i?m.cloneElement(m.Children.only(l),Bt(Bt({},E),{ref:N})):m.createElement(v,Bt({},E,{className:c,ref:N}),l))});rl.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};rl.classNames={fullWidth:Gi,zeroRight:Wi};var TN=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function RN(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=TN();return t&&e.setAttribute("nonce",t),e}function jN(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function AN(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var MN=function(){var e=0,t=null;return{add:function(n){e==0&&(t=RN())&&(jN(t,n),AN(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},IN=function(){var e=MN();return function(t,n){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Uy=function(){var e=IN(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},_N={left:0,top:0,right:0,gap:0},Yl=function(e){return parseInt(e||"",10)||0},ON=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Yl(n),Yl(r),Yl(o)]},DN=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return _N;var t=ON(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},LN=Uy(),uo="data-scroll-locked",FN=function(e,t,n,r){var o=e.left,s=e.top,i=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(xN,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body[`).concat(uo,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(s,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Wi,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(Gi,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(Wi," .").concat(Wi,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Gi," .").concat(Gi,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(uo,`] {
    `).concat(bN,": ").concat(l,`px;
  }
`)},ef=function(){var e=parseInt(document.body.getAttribute(uo)||"0",10);return isFinite(e)?e:0},VN=function(){m.useEffect(function(){return document.body.setAttribute(uo,(ef()+1).toString()),function(){var e=ef()-1;e<=0?document.body.removeAttribute(uo):document.body.setAttribute(uo,e.toString())}},[])},zN=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;VN();var s=m.useMemo(function(){return DN(o)},[o]);return m.createElement(LN,{styles:FN(s,!t,o,n?"":"!important")})},fu=!1;if(typeof window<"u")try{var Si=Object.defineProperty({},"passive",{get:function(){return fu=!0,!0}});window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{fu=!1}var Or=fu?{passive:!1}:!1,UN=function(e){return e.tagName==="TEXTAREA"},$y=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!UN(e)&&n[t]==="visible")},$N=function(e){return $y(e,"overflowY")},BN=function(e){return $y(e,"overflowX")},tf=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=By(e,r);if(o){var s=Wy(e,r),i=s[1],l=s[2];if(i>l)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},WN=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},GN=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},By=function(e,t){return e==="v"?$N(t):BN(t)},Wy=function(e,t){return e==="v"?WN(t):GN(t)},KN=function(e,t){return e==="h"&&t==="rtl"?-1:1},HN=function(e,t,n,r,o){var s=KN(e,window.getComputedStyle(t).direction),i=s*r,l=n.target,c=t.contains(l),u=!1,d=i>0,p=0,h=0;do{if(!l)break;var f=Wy(e,l),w=f[0],g=f[1],b=f[2],y=g-b-s*w;(w||y)&&By(e,l)&&(p+=y,h+=w);var v=l.parentNode;l=v&&v.nodeType===Node.DOCUMENT_FRAGMENT_NODE?v.host:v}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return(d&&(Math.abs(p)<1||!o)||!d&&(Math.abs(h)<1||!o))&&(u=!0),u},Ci=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},nf=function(e){return[e.deltaX,e.deltaY]},rf=function(e){return e&&"current"in e?e.current:e},qN=function(e,t){return e[0]===t[0]&&e[1]===t[1]},YN=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},QN=0,Dr=[];function XN(e){var t=m.useRef([]),n=m.useRef([0,0]),r=m.useRef(),o=m.useState(QN++)[0],s=m.useState(Uy)[0],i=m.useRef(e);m.useEffect(function(){i.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var g=yN([e.lockRef.current],(e.shards||[]).map(rf),!0).filter(Boolean);return g.forEach(function(b){return b.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),g.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=m.useCallback(function(g,b){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!i.current.allowPinchZoom;var y=Ci(g),v=n.current,x="deltaX"in g?g.deltaX:v[0]-y[0],k="deltaY"in g?g.deltaY:v[1]-y[1],S,N=g.target,E=Math.abs(x)>Math.abs(k)?"h":"v";if("touches"in g&&E==="h"&&N.type==="range")return!1;var C=tf(E,N);if(!C)return!0;if(C?S=E:(S=E==="v"?"h":"v",C=tf(E,N)),!C)return!1;if(!r.current&&"changedTouches"in g&&(x||k)&&(r.current=S),!S)return!0;var P=r.current||S;return HN(P,b,g,P==="h"?x:k,!0)},[]),c=m.useCallback(function(g){var b=g;if(!(!Dr.length||Dr[Dr.length-1]!==s)){var y="deltaY"in b?nf(b):Ci(b),v=t.current.filter(function(S){return S.name===b.type&&(S.target===b.target||b.target===S.shadowParent)&&qN(S.delta,y)})[0];if(v&&v.should){b.cancelable&&b.preventDefault();return}if(!v){var x=(i.current.shards||[]).map(rf).filter(Boolean).filter(function(S){return S.contains(b.target)}),k=x.length>0?l(b,x[0]):!i.current.noIsolation;k&&b.cancelable&&b.preventDefault()}}},[]),u=m.useCallback(function(g,b,y,v){var x={name:g,delta:b,target:y,should:v,shadowParent:JN(y)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(k){return k!==x})},1)},[]),d=m.useCallback(function(g){n.current=Ci(g),r.current=void 0},[]),p=m.useCallback(function(g){u(g.type,nf(g),g.target,l(g,e.lockRef.current))},[]),h=m.useCallback(function(g){u(g.type,Ci(g),g.target,l(g,e.lockRef.current))},[]);m.useEffect(function(){return Dr.push(s),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:h}),document.addEventListener("wheel",c,Or),document.addEventListener("touchmove",c,Or),document.addEventListener("touchstart",d,Or),function(){Dr=Dr.filter(function(g){return g!==s}),document.removeEventListener("wheel",c,Or),document.removeEventListener("touchmove",c,Or),document.removeEventListener("touchstart",d,Or)}},[]);var f=e.removeScrollBar,w=e.inert;return m.createElement(m.Fragment,null,w?m.createElement(s,{styles:YN(o)}):null,f?m.createElement(zN,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function JN(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const ZN=EN(zy,XN);var Gy=m.forwardRef(function(e,t){return m.createElement(rl,Bt({},e,{ref:t,sideCar:ZN}))});Gy.classNames=rl.classNames;var eP=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Lr=new WeakMap,Ni=new WeakMap,Pi={},Ql=0,Ky=function(e){return e&&(e.host||Ky(e.parentNode))},tP=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ky(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},nP=function(e,t,n,r){var o=tP(t,Array.isArray(e)?e:[e]);Pi[n]||(Pi[n]=new WeakMap);var s=Pi[n],i=[],l=new Set,c=new Set(o),u=function(p){!p||l.has(p)||(l.add(p),u(p.parentNode))};o.forEach(u);var d=function(p){!p||c.has(p)||Array.prototype.forEach.call(p.children,function(h){if(l.has(h))d(h);else try{var f=h.getAttribute(r),w=f!==null&&f!=="false",g=(Lr.get(h)||0)+1,b=(s.get(h)||0)+1;Lr.set(h,g),s.set(h,b),i.push(h),g===1&&w&&Ni.set(h,!0),b===1&&h.setAttribute(n,"true"),w||h.setAttribute(r,"true")}catch(y){console.error("aria-hidden: cannot operate on ",h,y)}})};return d(t),l.clear(),Ql++,function(){i.forEach(function(p){var h=Lr.get(p)-1,f=s.get(p)-1;Lr.set(p,h),s.set(p,f),h||(Ni.has(p)||p.removeAttribute(r),Ni.delete(p)),f||p.removeAttribute(n)}),Ql--,Ql||(Lr=new WeakMap,Lr=new WeakMap,Ni=new WeakMap,Pi={})}},rP=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=eP(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),nP(r,o,n,"aria-hidden")):function(){return null}},ol="Dialog",[Hy,$P]=Pr(ol),[oP,Ot]=Hy(ol),qy=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:s,modal:i=!0}=e,l=m.useRef(null),c=m.useRef(null),[u,d]=qs({prop:r,defaultProp:o??!1,onChange:s,caller:ol});return a.jsx(oP,{scope:t,triggerRef:l,contentRef:c,contentId:ao(),titleId:ao(),descriptionId:ao(),open:u,onOpenChange:d,onOpenToggle:m.useCallback(()=>d(p=>!p),[d]),modal:i,children:n})};qy.displayName=ol;var Yy="DialogTrigger",sP=m.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Ot(Yy,n),s=ye(t,o.triggerRef);return a.jsx(Z.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Bd(o.open),...r,ref:s,onClick:q(e.onClick,o.onOpenToggle)})});sP.displayName=Yy;var Ud="DialogPortal",[iP,Qy]=Hy(Ud,{forceMount:void 0}),Xy=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,s=Ot(Ud,t);return a.jsx(iP,{scope:t,forceMount:n,children:m.Children.map(r,i=>a.jsx(_t,{present:n||s.open,children:a.jsx(fd,{asChild:!0,container:o,children:i})}))})};Xy.displayName=Ud;var Pa="DialogOverlay",Jy=m.forwardRef((e,t)=>{const n=Qy(Pa,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,s=Ot(Pa,e.__scopeDialog);return s.modal?a.jsx(_t,{present:r||s.open,children:a.jsx(lP,{...o,ref:t})}):null});Jy.displayName=Pa;var aP=Ms("DialogOverlay.RemoveScroll"),lP=m.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Ot(Pa,n);return a.jsx(Gy,{as:aP,allowPinchZoom:!0,shards:[o.contentRef],children:a.jsx(Z.div,{"data-state":Bd(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),Sr="DialogContent",Zy=m.forwardRef((e,t)=>{const n=Qy(Sr,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,s=Ot(Sr,e.__scopeDialog);return a.jsx(_t,{present:r||s.open,children:s.modal?a.jsx(cP,{...o,ref:t}):a.jsx(uP,{...o,ref:t})})});Zy.displayName=Sr;var cP=m.forwardRef((e,t)=>{const n=Ot(Sr,e.__scopeDialog),r=m.useRef(null),o=ye(t,n.contentRef,r);return m.useEffect(()=>{const s=r.current;if(s)return rP(s)},[]),a.jsx(e0,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:q(e.onCloseAutoFocus,s=>{var i;s.preventDefault(),(i=n.triggerRef.current)==null||i.focus()}),onPointerDownOutside:q(e.onPointerDownOutside,s=>{const i=s.detail.originalEvent,l=i.button===0&&i.ctrlKey===!0;(i.button===2||l)&&s.preventDefault()}),onFocusOutside:q(e.onFocusOutside,s=>s.preventDefault())})}),uP=m.forwardRef((e,t)=>{const n=Ot(Sr,e.__scopeDialog),r=m.useRef(!1),o=m.useRef(!1);return a.jsx(e0,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var i,l;(i=e.onCloseAutoFocus)==null||i.call(e,s),s.defaultPrevented||(r.current||(l=n.triggerRef.current)==null||l.focus(),s.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:s=>{var c,u;(c=e.onInteractOutside)==null||c.call(e,s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const i=s.target;((u=n.triggerRef.current)==null?void 0:u.contains(i))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&o.current&&s.preventDefault()}})}),e0=m.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:s,...i}=e,l=Ot(Sr,n),c=m.useRef(null),u=ye(t,c);return vN(),a.jsxs(a.Fragment,{children:[a.jsx(Dy,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:s,children:a.jsx(Hs,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":Bd(l.open),...i,ref:u,onDismiss:()=>l.onOpenChange(!1)})}),a.jsxs(a.Fragment,{children:[a.jsx(dP,{titleId:l.titleId}),a.jsx(mP,{contentRef:c,descriptionId:l.descriptionId})]})]})}),$d="DialogTitle",t0=m.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Ot($d,n);return a.jsx(Z.h2,{id:o.titleId,...r,ref:t})});t0.displayName=$d;var n0="DialogDescription",r0=m.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Ot(n0,n);return a.jsx(Z.p,{id:o.descriptionId,...r,ref:t})});r0.displayName=n0;var o0="DialogClose",s0=m.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=Ot(o0,n);return a.jsx(Z.button,{type:"button",...r,ref:t,onClick:q(e.onClick,()=>o.onOpenChange(!1))})});s0.displayName=o0;function Bd(e){return e?"open":"closed"}var i0="DialogTitleWarning",[BP,a0]=ew(i0,{contentName:Sr,titleName:$d,docsSlug:"dialog"}),dP=({titleId:e})=>{const t=a0(i0),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return m.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},pP="DialogDescriptionWarning",mP=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${a0(pP).contentName}}.`;return m.useEffect(()=>{var s;const o=(s=e.current)==null?void 0:s.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},fP=qy,hP=Xy,l0=Jy,c0=Zy,u0=t0,d0=r0,gP=s0;const rs=fP,vP=hP,p0=m.forwardRef(({className:e,...t},n)=>a.jsx(l0,{ref:n,className:ne("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));p0.displayName=l0.displayName;const Qr=m.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(vP,{children:[a.jsx(p0,{}),a.jsxs(c0,{ref:r,className:ne("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,a.jsxs(gP,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[a.jsx(yd,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Qr.displayName=c0.displayName;const Xr=({className:e,...t})=>a.jsx("div",{className:ne("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});Xr.displayName="DialogHeader";const Jr=m.forwardRef(({className:e,...t},n)=>a.jsx(u0,{ref:n,className:ne("text-lg font-semibold leading-none tracking-tight",e),...t}));Jr.displayName=u0.displayName;const Zr=m.forwardRef(({className:e,...t},n)=>a.jsx(d0,{ref:n,className:ne("text-sm text-muted-foreground",e),...t}));Zr.displayName=d0.displayName;const yP=Ga("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function hu({className:e,variant:t,...n}){return a.jsx("div",{className:ne(yP({variant:t}),e),...n})}const xP=[{title:"What are Containers?",description:"Lightweight, portable units that package applications with their dependencies",details:"Containers provide process isolation, resource control, and consistent environments across different systems."},{title:"Container vs VMs",description:"Understanding the key differences in architecture and resource usage",details:"VMs virtualize hardware, containers virtualize the OS. Containers are more lightweight and start faster."},{title:"Docker Basics",description:"Building and managing container images",details:"Learn Dockerfile syntax, image layers, and container lifecycle management."}],bP=[{icon:or,title:"Control Plane",description:"Master components that make cluster-wide decisions",components:["API Server","etcd","Scheduler","Controller Manager"],color:"from-primary to-electric-blue"},{icon:ns,title:"Worker Nodes",description:"Machines that run application workloads",components:["Kubelet","Kube-proxy","Container Runtime"],color:"from-accent to-cyber-purple"},{icon:fs,title:"Networking",description:"Pod-to-pod and service communication",components:["CNI Plugins","Service Mesh","Ingress Controllers"],color:"from-tech-green to-primary"}],kn={"Control Plane":{title:"Control Plane",description:"The brain of Kubernetes that makes global decisions about the cluster",overview:"The Control Plane manages the overall state of the cluster and makes decisions about scheduling, scaling, and maintaining the desired state of applications. It consists of several components that work together to provide the cluster's management capabilities.",keyFeatures:["Cluster state management","API endpoint for all cluster operations","Scheduling decisions for pod placement","Automatic scaling and self-healing","Configuration and secret management"],commands:[{description:"Check control plane component status",command:"kubectl get componentstatuses",output:`NAME                 STATUS    MESSAGE   ERROR
controller-manager   Healthy   ok
scheduler            Healthy   ok
etcd-0               Healthy   ok`},{description:"View control plane pods",command:"kubectl get pods -n kube-system",output:`NAME                                READY   STATUS    RESTARTS   AGE
etcd-master-1                       1/1     Running   0          1d
kube-apiserver-master-1             1/1     Running   0          1d
kube-controller-manager-master-1    1/1     Running   0          1d
kube-scheduler-master-1             1/1     Running   0          1d`}],components:{"API Server":"The central hub that exposes the Kubernetes API",etcd:"Distributed key-value store for all cluster data",Scheduler:"Determines which nodes should run newly created pods","Controller Manager":"Runs controller processes that regulate cluster state"}},"Worker Nodes":{title:"Worker Nodes",description:"The workhorses that run your containerized applications",overview:"Worker Nodes are the machines where your application containers actually run. Each node contains the necessary services to run pods and is managed by the control plane.",keyFeatures:["Container runtime environment","Pod lifecycle management","Network proxy and load balancing","Resource monitoring and reporting","Volume mounting and storage"],commands:[{description:"List all nodes in the cluster",command:"kubectl get nodes",output:`NAME           STATUS   ROLES           AGE   VERSION
master-1       Ready    control-plane   1d    v1.28.0
worker-1       Ready    <none>          1d    v1.28.0
worker-2       Ready    <none>          1d    v1.28.0
worker-3       Ready    <none>          1d    v1.28.0`},{description:"Get detailed node information",command:"kubectl describe node worker-1",output:`Name:               worker-1
Roles:              <none>
Labels:             beta.kubernetes.io/arch=amd64
CreationTimestamp:  Sun, 13 Sep 2025 10:30:00 +0000
Conditions:
  Type             Status
  Ready            True
Capacity:
  cpu:                4
  memory:             8Gi`}],components:{Kubelet:"Primary node agent that manages pods and containers","Kube-proxy":"Network proxy that maintains network rules","Container Runtime":"Software responsible for running containers"}},Networking:{title:"Networking",description:"The communication backbone that connects all cluster components",overview:"Kubernetes networking enables communication between pods, services, and external clients. It provides a flat network where every pod gets its own IP address.",keyFeatures:["Pod-to-pod communication","Service discovery and load balancing","External traffic ingress","Network policies and security","Cross-node networking"],commands:[{description:"List all services and their endpoints",command:"kubectl get services,endpoints",output:`NAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   1d
service/nginx        ClusterIP   10.96.1.100     <none>        80/TCP    2m`},{description:"View ingress resources",command:"kubectl get ingress",output:`NAME              CLASS   HOSTS                 ADDRESS          PORTS     AGE
app-ingress       nginx   app.example.com       192.168.1.200    80, 443   10m`}],components:{"CNI Plugins":"Handle pod networking setup and IP assignment","Service Mesh":"Advanced networking layer for service communication","Ingress Controllers":"Manage external access to services"}}},lt={"API Server":{title:"API Server",description:"The central management hub for all Kubernetes operations",overview:"The Kubernetes API Server is the central management entity that receives all REST requests for modifications to pods, services, replication sets/controllers and others, validates them, and processes them.",keyFeatures:["RESTful API interface for all cluster operations","Authentication and authorization gateway","Request validation and admission control","Cluster state management and coordination","Event notification and watch API"],commands:[{description:"Check API server version",command:"kubectl version --short",output:`Client Version: v1.28.0
Kustomize Version: v5.0.4
Server Version: v1.28.0`},{description:"List available API resources",command:"kubectl api-resources --verbs=list",output:`NAME         SHORTNAMES   APIVERSION   NAMESPACED   KIND
pods         po           v1           true         Pod
services     svc          v1           true         Service
deployments  deploy       apps/v1      true         Deployment`}]},etcd:{title:"etcd",description:"The persistent storage backend for all cluster data",overview:"etcd is a distributed, reliable key-value store used as Kubernetes' backing store for all cluster data. It stores configuration data, state data, and metadata.",keyFeatures:["Distributed consensus using Raft algorithm","Strong consistency guarantees","High availability and fault tolerance","Watch API for real-time notifications","Backup and restore capabilities"],commands:[{description:"Check etcd cluster health",command:"kubectl exec -n kube-system etcd-master-1 -- etcdctl endpoint health",output:"127.0.0.1:2379 is healthy: successfully committed proposal: took = 2.345ms"}]},Scheduler:{title:"Scheduler",description:"The intelligent pod placement engine",overview:"The Kubernetes Scheduler is responsible for selecting an optimal node for newly created pods. It considers resource requirements, constraints, affinity rules, and optimization policies.",keyFeatures:["Resource-aware scheduling algorithms","Constraint satisfaction and filtering","Affinity and anti-affinity rules","Priority-based pod scheduling","Extensible scheduling framework"],commands:[{description:"View scheduler events",command:"kubectl get events --field-selector reason=Scheduled",output:`LAST SEEN   TYPE     REASON      OBJECT      MESSAGE
2m          Normal   Scheduled   pod/nginx   Successfully assigned default/nginx to worker-1`}]},"Controller Manager":{title:"Controller Manager",description:"The supervisor ensuring desired state is maintained",overview:"The Controller Manager runs controller processes that regulate the state of the cluster. Each controller watches the cluster state and makes changes to move current state towards desired state.",keyFeatures:["Desired state enforcement","Resource lifecycle management","Automatic remediation and healing","Controller coordination","Event-driven operations"],commands:[{description:"Check controller manager status",command:"kubectl get componentstatus controller-manager",output:`NAME                 STATUS    MESSAGE
controller-manager   Healthy   ok`}]},Kubelet:{title:"Kubelet",description:"The node agent managing pod lifecycle",overview:"The kubelet is the primary node agent that runs on each node. It ensures that containers are running in a Pod by taking PodSpecs and managing their lifecycle.",keyFeatures:["Pod lifecycle management","Container health monitoring","Resource reporting and metrics","Volume management and mounting","Node status reporting"],commands:[{description:"Check kubelet service status",command:"sudo systemctl status kubelet",output:`● kubelet.service - kubelet: The Kubernetes Node Agent
   Active: active (running) since Sun 2025-09-13 10:30:00 UTC`}]},"Kube-proxy":{title:"Kube-proxy",description:"The network proxy enabling service communication",overview:"kube-proxy is a network proxy that runs on each node and maintains network rules. These rules allow network communication to Pods from inside or outside the cluster.",keyFeatures:["Service load balancing","Network rule management","Multiple proxy modes (iptables, IPVS)","Service discovery support","Connection forwarding"],commands:[{description:"Check kube-proxy pods",command:"kubectl get pods -n kube-system -l k8s-app=kube-proxy",output:`NAME               READY   STATUS    RESTARTS   AGE
kube-proxy-abc123  1/1     Running   0          1d`}]},"Container Runtime":{title:"Container Runtime",description:"The engine that runs your containers",overview:"The container runtime is responsible for running containers on each node. Kubernetes supports several runtimes including Docker, containerd, and CRI-O.",keyFeatures:["Container lifecycle management","Image pulling and storage","Resource isolation and limits","Network and storage setup","Security and sandboxing"],commands:[{description:"Check container runtime",command:"kubectl get nodes -o wide",output:`NAME     STATUS   CONTAINER-RUNTIME
worker-1 Ready    containerd://1.6.6
worker-2 Ready    containerd://1.6.6`}]},"CNI Plugins":{title:"CNI Plugins",description:"Container Network Interface plugins for pod networking",overview:"CNI plugins are responsible for configuring network interfaces in containers. They handle IP assignment, interface creation, and network policy enforcement.",keyFeatures:["Pod IP address assignment","Network interface configuration","Inter-pod communication setup","Network policy enforcement","Cross-node networking"],commands:[{description:"Check CNI configuration",command:"ls -la /etc/cni/net.d/",output:`total 12
-rw-r--r-- 1 root root 292 Sep 13 10:30 10-flannel.conflist`}]},"Service Mesh":{title:"Service Mesh",description:"Advanced networking layer for service communication",overview:"A service mesh provides a dedicated infrastructure layer for service-to-service communication with traffic management, security, and observability features.",keyFeatures:["Traffic management and routing","Security and encryption (mTLS)","Observability and monitoring","Policy enforcement","Circuit breaking and retries"],commands:[{description:"Check service mesh pods",command:"kubectl get pods -n istio-system",output:`NAME                     READY   STATUS    RESTARTS   AGE
istiod-123456789-abcde   1/1     Running   0          1h`}]},"Ingress Controllers":{title:"Ingress Controllers",description:"Manage external access to services in the cluster",overview:"Ingress Controllers manage external access to services, typically HTTP/HTTPS traffic. They provide load balancing, SSL termination, and name-based virtual hosting.",keyFeatures:["External traffic routing","SSL/TLS termination","Load balancing","Path-based routing","Host-based routing"],commands:[{description:"View ingress resources",command:"kubectl get ingress",output:`NAME          CLASS   HOSTS               ADDRESS        PORTS     AGE
app-ingress   nginx   app.example.com     192.168.1.200  80, 443   10m`}]}},ct={Pods:{title:"Pods",description:"The smallest deployable units in Kubernetes",overview:"A Pod represents a group of one or more containers running together on the same node. It's the basic execution unit of a Kubernetes application.",keyFeatures:["Shared network (IP address and port space)","Shared storage volumes","Ephemeral by nature","Usually contains a single container"],useCases:["Single-container applications","Sidecar pattern implementations","Init containers for setup tasks","Testing and development environments"],bestPractices:["Use one container per Pod unless containers need to share resources","Always specify resource limits and requests","Use health checks (liveness and readiness probes)","Avoid using Pods directly in production - use Deployments instead"],commands:[{description:"Create a simple pod",command:"kubectl run nginx --image=nginx",output:"pod/nginx created"},{description:"Get all pods",command:"kubectl get pods",output:`NAME    READY   STATUS    RESTARTS   AGE
nginx   1/1     Running   0          2m`},{description:"Describe a pod",command:"kubectl describe pod nginx",output:`Name:         nginx
Namespace:    default
Priority:     0
Node:         worker-1/10.0.1.100
Start Time:   Mon, 13 Sep 2025 10:30:00 +0000
Labels:       run=nginx
Annotations:  <none>
Status:       Running
IP:           10.244.1.5`}],yamlExample:`apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.20
    ports:
    - containerPort: 80`},Deployments:{title:"Deployments",description:"Declarative updates for Pods and ReplicaSets",overview:"Deployments provide declarative updates for Pods and ReplicaSets. They manage the lifecycle of application instances and enable rolling updates.",keyFeatures:["Rolling updates and rollbacks","Scaling up and down","Self-healing capabilities","Version management"],useCases:["Stateless applications","Web applications and APIs","Microservices architecture","Production workloads"],bestPractices:["Always use Deployments instead of creating Pods directly","Set appropriate replica counts based on load","Use rolling updates for zero-downtime deployments","Configure resource limits and requests for all containers"],commands:[{description:"Create a deployment",command:"kubectl create deployment nginx --image=nginx --replicas=3",output:"deployment.apps/nginx created"},{description:"Scale a deployment",command:"kubectl scale deployment nginx --replicas=5",output:"deployment.apps/nginx scaled"},{description:"Update deployment image",command:"kubectl set image deployment/nginx nginx=nginx:1.21",output:"deployment.apps/nginx image updated"}],yamlExample:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.20
        ports:
        - containerPort: 80`},ReplicaSets:{title:"ReplicaSets",description:"Maintains a stable set of replica Pods",overview:"ReplicaSets ensure that a specified number of Pod replicas are running at any given time. They are the underlying mechanism that Deployments use to manage Pods.",keyFeatures:["Maintains desired replica count","Pod template for creating new Pods","Label selector for Pod management","Scaling capabilities"],useCases:["Underlying mechanism for Deployments","Simple scaling scenarios","Custom controllers","Legacy workload management"],bestPractices:["Use Deployments instead of ReplicaSets directly","Ensure label selectors match Pod labels exactly","Monitor replica count and Pod health","Use ReplicaSets only when you need more control than Deployments provide"],commands:[{description:"Create a ReplicaSet",command:"kubectl create -f replicaset.yaml",output:"replicaset.apps/nginx-replicaset created"},{description:"Get ReplicaSets",command:"kubectl get replicasets",output:`NAME               DESIRED   CURRENT   READY   AGE
nginx-replicaset   3         3         3       2m`},{description:"Scale a ReplicaSet",command:"kubectl scale replicaset nginx-replicaset --replicas=5",output:"replicaset.apps/nginx-replicaset scaled"}],yamlExample:`apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-replicaset
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.20
        ports:
        - containerPort: 80`},Services:{title:"Services",description:"Stable network endpoints for accessing Pods",overview:"Services provide a stable way to access a set of Pods. They enable load balancing and service discovery within the cluster.",keyFeatures:["Load balancing across Pods","Service discovery via DNS","Multiple service types (ClusterIP, NodePort, LoadBalancer)","Session affinity support"],useCases:["Internal service communication","Exposing applications to external traffic","Load balancing across multiple Pods","Service mesh integration"],bestPractices:["Use ClusterIP for internal communication","Use NodePort or LoadBalancer for external access","Ensure service selectors match Pod labels","Use meaningful service names for DNS resolution"],commands:[{description:"Expose a deployment",command:"kubectl expose deployment nginx --port=80 --type=ClusterIP",output:"service/nginx exposed"},{description:"Get services",command:"kubectl get services",output:`NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   1d
nginx        ClusterIP   10.96.1.100     <none>        80/TCP    2m`}],yamlExample:`apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: ClusterIP`},ConfigMaps:{title:"ConfigMaps",description:"Configuration data stored as key-value pairs",overview:"ConfigMaps allow you to decouple configuration artifacts from image content to keep containerized applications portable.",keyFeatures:["Store configuration data","Environment variables injection","Volume mounting","Command-line arguments"],useCases:["Application configuration","Environment-specific settings","Feature flags","Non-sensitive configuration data"],bestPractices:["Use ConfigMaps for non-sensitive configuration data","Keep configuration data separate from application code","Use meaningful keys and organize data logically","Consider using ConfigMap generators for large configurations"],commands:[{description:"Create ConfigMap from literals",command:"kubectl create configmap app-config --from-literal=database_url=postgres://localhost:5432/myapp",output:"configmap/app-config created"},{description:"Get ConfigMaps",command:"kubectl get configmaps",output:`NAME          DATA   AGE
app-config    1      30s`}],yamlExample:`apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database_url: "postgres://localhost:5432/myapp"
  api_key: "your-api-key-here"
  debug_mode: "true"`},Secrets:{title:"Secrets",description:"Secure storage for sensitive data",overview:"Secrets are similar to ConfigMaps but are specifically intended to hold confidential data like passwords, OAuth tokens, and SSH keys.",keyFeatures:["Base64 encoded storage","Mounted as volumes or environment variables","Automatic rotation support","Encryption at rest"],useCases:["Database passwords and connection strings","API keys and tokens","TLS certificates and private keys","Any sensitive configuration data"],bestPractices:["Use Secrets for sensitive data, ConfigMaps for non-sensitive data","Enable encryption at rest for Secrets","Use external secret management systems for production","Regularly rotate secrets and monitor access"],commands:[{description:"Create a secret",command:"kubectl create secret generic db-secret --from-literal=username=admin --from-literal=password=secretpassword",output:"secret/db-secret created"},{description:"Get secrets",command:"kubectl get secrets",output:`NAME                  TYPE                                  DATA   AGE
db-secret             Opaque                                2      10s`}],yamlExample:`apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  username: YWRtaW4=  # base64 encoded 'admin'
  password: c2VjcmV0cGFzc3dvcmQ=  # base64 encoded 'secretpassword'`},Namespaces:{title:"Namespaces",description:"Virtual clusters within a physical cluster",overview:"Namespaces provide a mechanism for isolating groups of resources within a single cluster. They're intended for use in environments with many users spread across multiple teams.",keyFeatures:["Resource isolation","RBAC boundaries","Resource quotas","Network policies"],useCases:["Multi-tenant environments","Environment separation (dev, staging, prod)","Team-based resource organization","Application isolation"],bestPractices:["Use namespaces to organize resources logically","Implement RBAC policies per namespace","Set resource quotas to prevent resource exhaustion","Use meaningful namespace names that reflect their purpose"],commands:[{description:"Create a namespace",command:"kubectl create namespace development",output:"namespace/development created"},{description:"List namespaces",command:"kubectl get namespaces",output:`NAME              STATUS   AGE
default           Active   1d
development       Active   30s
kube-system       Active   1d
kube-public       Active   1d`}],yamlExample:`apiVersion: v1
kind: Namespace
metadata:
  name: development
  labels:
    name: development`}},Lt={StatefulSets:{title:"StatefulSets",description:"Stateful applications with stable network identity",overview:"StatefulSets manage the deployment and scaling of a set of Pods and provide guarantees about the ordering and uniqueness of these Pods.",keyFeatures:["Stable, unique network identifiers","Stable, persistent storage","Ordered deployment and scaling","Ordered, graceful deletion and termination"],useCases:["Databases (MySQL, PostgreSQL, MongoDB)","Message queues (RabbitMQ, Kafka)","Distributed storage systems"],commands:[{description:"Create a StatefulSet",command:"kubectl apply -f statefulset.yaml",output:"statefulset.apps/web created"},{description:"Scale StatefulSet",command:"kubectl scale statefulset web --replicas=5",output:"statefulset.apps/web scaled"}],yamlExample:`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: "nginx"
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.20
        ports:
        - containerPort: 80`},DaemonSets:{title:"DaemonSets",description:"Pods running on every node",overview:"A DaemonSet ensures that all (or some) Nodes run a copy of a Pod. As nodes are added to the cluster, Pods are added to them.",keyFeatures:["One pod per node","Automatic scheduling on new nodes","Node-level services","System-level workloads"],useCases:["Logging agents (Fluentd, Logstash)","Monitoring agents (Prometheus Node Exporter)","Storage daemons (Ceph, GlusterFS)","Network plugins"],commands:[{description:"Create a DaemonSet",command:"kubectl apply -f daemonset.yaml",output:"daemonset.apps/fluentd created"},{description:"Get DaemonSets",command:"kubectl get daemonsets",output:`NAME      DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
fluentd   3         3         3       3            3           <none>          2m`}],yamlExample:`apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd
spec:
  selector:
    matchLabels:
      name: fluentd
  template:
    metadata:
      labels:
        name: fluentd
    spec:
      containers:
      - name: fluentd
        image: fluentd:latest
        volumeMounts:
        - name: varlog
          mountPath: /var/log`},"Jobs & CronJobs":{title:"Jobs & CronJobs",description:"Batch and scheduled workloads",overview:"Jobs run Pods to completion, while CronJobs run Jobs on a time-based schedule, similar to cron in Unix systems.",keyFeatures:["Run-to-completion workloads","Parallel execution support","Automatic retry on failure","Time-based scheduling (CronJobs)"],useCases:["Database backups","Data processing tasks","Batch computations","Scheduled maintenance"],commands:[{description:"Create a Job",command:"kubectl create job pi --image=perl -- perl -Mbignum=bpi -wle 'print bpi(2000)'",output:"job.batch/pi created"},{description:"Create a CronJob",command:"kubectl create cronjob backup --image=backup:latest --schedule='0 2 * * *' -- /backup.sh",output:"cronjob.batch/backup created"}],yamlExample:`apiVersion: batch/v1
kind: Job
metadata:
  name: pi
spec:
  template:
    spec:
      containers:
      - name: pi
        image: perl
        command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
  backoffLimit: 4
---
apiVersion: batch/v1
kind: CronJob
metadata:
  name: backup
spec:
  schedule: "0 2 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup
            image: backup:latest
            command: ["/backup.sh"]
          restartPolicy: OnFailure`},ReplicaSets:{title:"ReplicaSets",description:"Maintaining desired pod replicas",overview:"A ReplicaSet ensures that a specified number of pod replicas are running at any given time. However, Deployments are the recommended way to set up replication.",keyFeatures:["Maintains replica count","Pod template management","Label selector matching","Self-healing capabilities"],useCases:["Typically managed by Deployments","Custom controllers","Legacy application migration"],commands:[{description:"Get ReplicaSets",command:"kubectl get replicasets",output:`NAME               DESIRED   CURRENT   READY   AGE
nginx-7d7d7d7d7d   3         3         3       5m`},{description:"Scale a ReplicaSet",command:"kubectl scale replicaset nginx-7d7d7d7d7d --replicas=5",output:"replicaset.apps/nginx-7d7d7d7d7d scaled"}],yamlExample:`apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      tier: frontend
  template:
    metadata:
      labels:
        tier: frontend
    spec:
      containers:
      - name: php-redis
        image: gcr.io/google_samples/gb-frontend:v3`}},wP=()=>{var v,x,k,S,N,E;const[e,t]=m.useState([]),[n,r]=m.useState("idle"),[o,s]=m.useState(0),[i,l]=m.useState(!1),[c,u]=m.useState(null),[d,p]=m.useState(null),[h,f]=m.useState(null),w=[{name:"Build",description:"Creating container image...",icon:"🔨"},{name:"Run",description:"Starting container...",icon:"▶️"},{name:"Deploy",description:"Deploying to cluster...",icon:"🚀"}],g=C=>{t(P=>P.includes(C)?P.filter(I=>I!==C):[...P,C])},b=()=>{n!=="running"&&(r("running"),s(0),l(!0))},y=()=>{r("idle"),s(0),l(!1)};return m.useEffect(()=>{if(n==="running"&&i){const C=setInterval(()=>{s(P=>P<w.length-1?P+1:(r("completed"),l(!1),P))},2e3);return()=>clearInterval(C)}},[n,i,w.length]),a.jsxs("section",{id:"fundamentals",className:"py-24 relative",children:[a.jsxs("div",{className:"container px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-16",children:[a.jsxs("h2",{className:"text-3xl lg:text-5xl font-bold mb-6",children:["Kubernetes"," ",a.jsx("span",{className:"gradient-text",children:"Fundamentals"})]}),a.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"Master the core concepts and architecture through interactive learning"})]}),a.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-2",children:[a.jsx(ns,{className:"w-6 h-6 text-primary"}),"Container Fundamentals"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Understanding the building blocks of containerization"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs(Ee,{className:"card-gradient border-border/50",children:[a.jsx(Ls,{children:a.jsx(Fs,{children:"Core Concepts"})}),a.jsx(De,{className:"space-y-4",children:xP.map((C,P)=>a.jsxs(du,{open:e.includes(`container-${P}`),onOpenChange:()=>g(`container-${P}`),children:[a.jsxs(pu,{className:"flex items-center justify-between w-full p-3 text-left terminal rounded-lg hover:bg-muted/50 transition-colors",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold",children:C.title}),a.jsx("p",{className:"text-sm text-muted-foreground",children:C.description})]}),a.jsx(va,{className:"w-4 h-4 transition-transform",style:{transform:e.includes(`container-${P}`)?"rotate(180deg)":"rotate(0deg)"}})]}),a.jsx(mu,{className:"p-3 text-sm text-muted-foreground",children:C.details})]},P))})]}),a.jsxs(Ee,{className:"card-gradient border-border/50",children:[a.jsx(Ls,{children:a.jsx(Fs,{children:"Interactive Container Demo"})}),a.jsx(De,{children:a.jsx("div",{className:"terminal p-6 rounded-lg border border-border/30",children:a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:`w-2 h-2 rounded-full ${n==="running"?"bg-tech-green animate-pulse":n==="completed"?"bg-primary":"bg-muted-foreground"}`}),a.jsx("span",{className:"font-mono text-xs text-muted-foreground",children:"Container Lifecycle Simulation"})]}),n!=="idle"&&a.jsx("span",{className:"text-xs text-muted-foreground font-mono",children:n==="running"?`Step ${o+1}/${w.length}`:"Completed"})]}),n!=="idle"&&a.jsx("div",{className:"mb-4 p-3 bg-muted/30 rounded border",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-lg",children:(v=w[o])==null?void 0:v.icon}),a.jsx("span",{className:"text-sm font-medium",children:(x=w[o])==null?void 0:x.description})]})}),a.jsx("div",{className:"grid grid-cols-3 gap-2",children:w.map((C,P)=>a.jsxs("div",{className:`p-3 rounded border text-center transition-all duration-500 ${n==="running"&&P===o?"bg-yellow-500/20 border-yellow-500 scale-105 shadow-lg":n==="completed"||n==="running"&&P<o?"bg-green-500/20 border-green-500":P===0?"bg-cyan-500/10 border-cyan-500/30":P===1?"bg-primary/10 border-primary/30":P===2?"bg-accent/10 border-accent/30":"bg-green-500/10 border-green-500/30"}`,children:[a.jsx("div",{className:`w-4 h-4 rounded mx-auto mb-1 transition-all duration-300 ${n==="running"&&P===o?"bg-yellow-500 animate-pulse":n==="completed"||n==="running"&&P<o?"bg-green-500":P===0?"bg-cyan-500/50":P===1?"bg-primary/50":P===2?"bg-accent/50":"bg-green-500/50"}`}),a.jsx("span",{className:"text-xs font-medium",children:C.name})]},P))}),a.jsxs("div",{className:"flex gap-2 mt-4",children:[a.jsxs(be,{variant:"outline",className:"flex-1",onClick:b,disabled:n==="running",children:[n==="idle"?a.jsx(i1,{className:"w-4 h-4 mr-2"}):n==="running"?a.jsx(a1,{className:"w-4 h-4 mr-2"}):a.jsx(Xw,{className:"w-4 h-4 mr-2"}),n==="idle"?"Start Demo":n==="running"?"Running...":"Demo Complete"]}),n!=="idle"&&a.jsx(be,{variant:"outline",size:"icon",onClick:y,children:a.jsx(l1,{className:"w-4 h-4"})})]})]})})})]})]})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-2",children:[a.jsx(or,{className:"w-6 h-6 text-primary"}),"Kubernetes Cluster Architecture"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Click on components to explore their functionality"})]}),a.jsx(Ee,{className:"card-gradient border-border/50",children:a.jsx(De,{className:"p-8",children:a.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:bP.map((C,P)=>a.jsxs("div",{className:"group cursor-pointer",onClick:()=>p(C.title),children:[a.jsx("div",{className:`p-6 rounded-xl bg-gradient-to-r ${C.color} shadow-glow mb-4 group-hover:scale-105 transition-transform`,children:a.jsx(C.icon,{className:"w-8 h-8 text-white mx-auto"})}),a.jsx("h3",{className:"text-lg font-semibold mb-2 text-center",children:C.title}),a.jsx("p",{className:"text-sm text-muted-foreground text-center mb-3",children:C.description}),a.jsx("div",{className:"space-y-2",children:C.components.map((I,V)=>a.jsxs("div",{className:"group/item p-3 terminal rounded-lg text-xs text-center hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30 hover:shadow-lg hover:scale-105 transform relative overflow-hidden",onClick:T=>{T.stopPropagation(),console.log("Clicked component:",I),console.log("Component data exists:",!!lt[I]),p(I)},children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-lg"}),a.jsxs("div",{className:"relative z-10 flex items-center justify-center gap-2",children:[a.jsx("span",{className:"font-medium group-hover/item:text-primary transition-colors duration-300",children:I}),a.jsx("div",{className:"w-1.5 h-1.5 bg-primary/50 rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:animate-pulse transition-all duration-300"})]}),a.jsx("div",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover/item:w-full transition-all duration-300"})]},V))})]},P))})})})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-2",children:[a.jsx(fs,{className:"w-6 h-6 text-primary"}),"Core Kubernetes Objects"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Essential building blocks of Kubernetes applications"})]}),a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Pods",icon:ns,color:"from-blue-500 to-blue-600"},{name:"Deployments",icon:sr,color:"from-green-500 to-green-600"},{name:"ReplicaSets",icon:or,color:"from-purple-500 to-purple-600"},{name:"Services",icon:fs,color:"from-orange-500 to-orange-600"},{name:"ConfigMaps",icon:Vl,color:"from-cyan-500 to-cyan-600"},{name:"Secrets",icon:Hc,color:"from-red-500 to-red-600"},{name:"Namespaces",icon:Ui,color:"from-indigo-500 to-indigo-600"}].map((C,P)=>a.jsx(Ee,{className:"card-gradient border-border/50 hover-lift cursor-pointer group",children:a.jsxs(De,{className:"p-6 text-center",children:[a.jsx("div",{className:`w-12 h-12 bg-gradient-to-r ${C.color} rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`,children:a.jsx(C.icon,{className:"w-6 h-6 text-white"})}),a.jsx("h3",{className:"text-lg font-semibold mb-2",children:C.name}),a.jsxs("p",{className:"text-sm text-muted-foreground mb-4",children:["Interactive ",C.name.toLowerCase()," explorer with examples"]}),a.jsxs(be,{variant:"outline",size:"sm",className:"w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors",onClick:()=>u(C.name),children:["Explore ",C.name]})]})},P))})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-2",children:[a.jsx(sr,{className:"w-6 h-6 text-primary"}),"Kubernetes Workloads"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Different types of workloads for various use cases"})]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:[{title:"StatefulSets",description:"Stateful applications with stable network identity",icon:Ui},{title:"DaemonSets",description:"Pods running on every node",icon:or},{title:"Jobs & CronJobs",description:"Batch and scheduled workloads",icon:sr},{title:"ReplicaSets",description:"Maintaining desired pod replicas",icon:ns}].map((C,P)=>a.jsx(Ee,{className:"card-gradient border-border/50 hover-lift cursor-pointer",children:a.jsx(De,{className:"p-6",children:a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"p-3 rounded-xl bg-gradient-to-r from-primary to-accent shadow-glow",children:a.jsx(C.icon,{className:"w-6 h-6 text-white"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-lg font-semibold mb-2",children:C.title}),a.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:C.description}),a.jsx(be,{variant:"outline",size:"sm",onClick:()=>f(C.title),children:"Learn More"})]})]})})},P))})]})]})]}),a.jsx(rs,{open:!!c,onOpenChange:()=>u(null),children:a.jsx(Qr,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:c&&ct[c]&&a.jsxs(a.Fragment,{children:[a.jsxs(Xr,{children:[a.jsxs(Jr,{className:"text-2xl flex items-center gap-3",children:[a.jsxs("div",{className:"w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center",children:[c==="Pods"&&a.jsx(ns,{className:"w-5 h-5 text-white"}),c==="Deployments"&&a.jsx(sr,{className:"w-5 h-5 text-white"}),c==="ReplicaSets"&&a.jsx(or,{className:"w-5 h-5 text-white"}),c==="Services"&&a.jsx(fs,{className:"w-5 h-5 text-white"}),c==="ConfigMaps"&&a.jsx(Vl,{className:"w-5 h-5 text-white"}),c==="Secrets"&&a.jsx(Hc,{className:"w-5 h-5 text-white"}),c==="Namespaces"&&a.jsx(Ui,{className:"w-5 h-5 text-white"})]}),ct[c].title]}),a.jsx(Zr,{className:"text-lg",children:ct[c].description})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/20",children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(Yw,{className:"w-5 h-5 text-primary"}),"Overview"]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:ct[c].overview})]}),a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(u1,{className:"w-5 h-5 text-accent"}),"Key Features"]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:ct[c].keyFeatures.map((C,P)=>a.jsxs("div",{className:"flex items-start gap-3 p-3 bg-muted/30 rounded-lg border border-border/50",children:[a.jsx("div",{className:"w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"}),a.jsx("span",{className:"text-sm font-medium",children:C})]},P))})]}),ct[c].useCases&&a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(d1,{className:"w-5 h-5 text-green-500"}),"Common Use Cases"]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-2",children:(k=ct[c].useCases)==null?void 0:k.map((C,P)=>a.jsxs("div",{className:"flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-green-500 rounded-full"}),a.jsx("span",{className:"text-sm text-green-700 dark:text-green-300",children:C})]},P))})]}),a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(Rn,{className:"w-5 h-5 text-blue-500"}),"Common Commands"]}),a.jsx("div",{className:"space-y-4",children:ct[c].commands.map((C,P)=>a.jsxs("div",{className:"border border-border/50 rounded-lg overflow-hidden hover:shadow-md transition-shadow",children:[a.jsx("div",{className:"p-4 bg-gradient-to-r from-muted/50 to-muted/30 border-b border-border/50",children:a.jsx("p",{className:"text-sm font-medium text-foreground",children:C.description})}),a.jsx("div",{className:"p-4 space-y-3",children:a.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm relative group",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("span",{className:"text-cyan-400 font-semibold",children:["$ ",C.command]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs(be,{size:"sm",variant:"ghost",className:"h-7 px-3 text-slate-300 hover:text-white hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity",onClick:()=>navigator.clipboard.writeText(C.command),children:[a.jsx(Zt,{className:"w-3 h-3 mr-1"}),"Copy"]}),a.jsxs(be,{size:"sm",variant:"ghost",className:"h-7 px-3 text-slate-300 hover:text-white hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity",onClick:()=>navigator.clipboard.writeText(C.output),children:[a.jsx(Zt,{className:"w-3 h-3 mr-1"}),"Copy Output"]})]})]}),a.jsx("div",{className:"text-green-400 whitespace-pre-wrap leading-relaxed",children:C.output})]})})]},P))})]}),a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(Vl,{className:"w-5 h-5 text-purple-500"}),"YAML Example"]}),a.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm relative group",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("span",{className:"text-slate-400 text-xs font-medium uppercase tracking-wider",children:"YAML Configuration"}),a.jsxs(be,{size:"sm",variant:"ghost",className:"h-7 px-3 text-slate-300 hover:text-white hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity",onClick:()=>navigator.clipboard.writeText(ct[c].yamlExample),children:[a.jsx(Zt,{className:"w-3 h-3 mr-1"}),"Copy YAML"]})]}),a.jsx("pre",{className:"text-slate-100 whitespace-pre-wrap overflow-x-auto leading-relaxed",children:ct[c].yamlExample})]})]}),ct[c].bestPractices&&a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(t1,{className:"w-5 h-5 text-yellow-500"}),"Best Practices"]}),a.jsx("div",{className:"space-y-2",children:(S=ct[c].bestPractices)==null?void 0:S.map((C,P)=>a.jsxs("div",{className:"flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:[a.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"}),a.jsx("span",{className:"text-sm text-yellow-700 dark:text-yellow-300 font-medium",children:C})]},P))})]})]})]})})}),a.jsx(rs,{open:!!d&&!!lt[d],onOpenChange:()=>p(null),children:a.jsx(Qr,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:d&&lt[d]&&a.jsxs(a.Fragment,{children:[a.jsxs(Xr,{children:[a.jsxs(Jr,{className:"text-2xl flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center",children:a.jsx(or,{className:"w-5 h-5 text-white"})}),lt[d].title]}),a.jsx(Zr,{className:"text-lg",children:lt[d].description})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["What is ",d,"?"]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed mb-4",children:lt[d].overview}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-base font-semibold mb-3",children:"Key Features"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:((N=lt[d].keyFeatures)==null?void 0:N.map((C,P)=>a.jsxs("div",{className:"flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors",children:[a.jsx("div",{className:"w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"}),a.jsx("span",{className:"text-sm",children:C})]},P)))||[]})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Common Commands"}),a.jsxs("div",{className:"space-y-4",children:[((E=lt[d].commands)==null?void 0:E.map((C,P)=>a.jsxs("div",{className:"border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-colors",children:[a.jsx("div",{className:"p-3 bg-muted/30 border-b border-border/50",children:a.jsxs("p",{className:"text-sm font-medium flex items-center gap-2",children:[a.jsx(Rn,{className:"w-4 h-4 text-primary"}),C.description]})}),a.jsx("div",{className:"p-0",children:a.jsxs("div",{className:"bg-slate-900 p-4 font-mono text-sm",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("span",{className:"text-cyan-400",children:["$ ",C.command]}),a.jsx(be,{size:"sm",variant:"ghost",className:"h-6 px-2 text-slate-300 hover:text-white",onClick:()=>navigator.clipboard.writeText(C.command),children:a.jsx(Zt,{className:"w-3 h-3"})})]}),a.jsx("div",{className:"text-green-400 whitespace-pre-wrap text-xs leading-relaxed",children:C.output})]})})]},P)))||[],(!lt[d].commands||lt[d].commands.length===0)&&a.jsxs("div",{className:"text-center py-8",children:[a.jsx("div",{className:"w-16 h-16 bg-muted/30 rounded-full mx-auto mb-4 flex items-center justify-center",children:a.jsx(Rn,{className:"w-8 h-8 text-muted-foreground"})}),a.jsxs("p",{className:"text-muted-foreground",children:["Commands for ",d," coming soon!"]})]})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Configuration Examples"}),a.jsxs("div",{className:"text-center py-12",children:[a.jsx("div",{className:"w-16 h-16 bg-muted/30 rounded-full mx-auto mb-4 flex items-center justify-center",children:a.jsx(Rn,{className:"w-8 h-8 text-muted-foreground"})}),a.jsx("p",{className:"text-muted-foreground text-lg mb-2",children:"Configuration examples coming soon!"}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Check the Commands section above for practical usage examples of ",d,"."]}),a.jsx("div",{className:"mt-6 p-4 bg-muted/20 rounded-lg border border-dashed border-muted-foreground/30",children:a.jsxs("p",{className:"text-xs text-muted-foreground",children:["💡 ",a.jsx("strong",{children:"Pro tip:"})," Use the commands above to explore ",d," in your own cluster!"]})})]})]})]})]})})}),a.jsx(rs,{open:!!d&&!!kn[d]&&!lt[d],onOpenChange:()=>p(null),children:a.jsx(Qr,{className:"max-w-5xl max-h-[90vh] overflow-y-auto",children:d&&kn[d]&&!lt[d]&&a.jsxs(a.Fragment,{children:[a.jsxs(Xr,{children:[a.jsxs(Jr,{className:"text-2xl flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center",children:a.jsx(or,{className:"w-5 h-5 text-white"})}),kn[d].title]}),a.jsx(Zr,{className:"text-lg",children:kn[d].description})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["What is ",d,"?"]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed mb-4",children:kn[d].overview}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-base font-semibold mb-3",children:"Key Features"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:kn[d].keyFeatures.map((C,P)=>a.jsxs("div",{className:"flex items-start gap-3 p-3 bg-muted/30 rounded-lg",children:[a.jsx("div",{className:"w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"}),a.jsx("span",{className:"text-sm",children:C})]},P))})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Components Breakdown"}),a.jsx("div",{className:"grid gap-4",children:Object.entries(kn[d].components).map(([C,P])=>a.jsx(Ee,{className:"p-4 border border-border/50",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("div",{className:"w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mt-1 flex-shrink-0"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h4",{className:"font-semibold text-base mb-2",children:C}),a.jsx("p",{className:"text-sm text-muted-foreground",children:P})]})]})},C))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Common Commands"}),a.jsx("div",{className:"space-y-4",children:kn[d].commands.map((C,P)=>a.jsxs("div",{className:"border border-border/50 rounded-lg overflow-hidden",children:[a.jsx("div",{className:"p-3 bg-muted/30 border-b border-border/50",children:a.jsx("p",{className:"text-sm font-medium",children:C.description})}),a.jsx("div",{className:"p-0",children:a.jsxs("div",{className:"bg-slate-900 p-4 font-mono text-sm",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("span",{className:"text-cyan-400",children:["$ ",C.command]}),a.jsx(be,{size:"sm",variant:"ghost",className:"h-6 px-2 text-slate-300 hover:text-white",onClick:()=>navigator.clipboard.writeText(C.command),children:a.jsx(Zt,{className:"w-3 h-3"})})]}),a.jsx("div",{className:"text-green-400 whitespace-pre-wrap text-xs leading-relaxed",children:C.output})]})})]},P))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Practical Examples"}),a.jsxs("div",{className:"text-center py-8",children:[a.jsx("div",{className:"w-16 h-16 bg-muted/30 rounded-full mx-auto mb-4 flex items-center justify-center",children:a.jsx(Rn,{className:"w-8 h-8 text-muted-foreground"})}),a.jsxs("p",{className:"text-muted-foreground",children:["Examples and tutorials for ",d," coming soon!"]}),a.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:"Check the Commands section above for practical kubectl usage."})]})]})]})]})})}),a.jsx(rs,{open:!!h,onOpenChange:()=>f(null),children:a.jsx(Qr,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:h&&Lt[h]&&a.jsxs(a.Fragment,{children:[a.jsxs(Xr,{children:[a.jsxs(Jr,{className:"text-2xl flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center",children:a.jsx(sr,{className:"w-5 h-5 text-white"})}),Lt[h].title]}),a.jsx(Zr,{className:"text-lg",children:Lt[h].description})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Overview"}),a.jsx("p",{className:"text-muted-foreground",children:Lt[h].overview})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Key Features"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-2",children:Lt[h].keyFeatures.map((C,P)=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-primary rounded-full"}),a.jsx("span",{className:"text-sm",children:C})]},P))})]}),Lt[h].useCases&&a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Common Use Cases"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-2",children:Lt[h].useCases.map((C,P)=>a.jsx("div",{className:"flex items-center gap-2",children:a.jsx(hu,{variant:"secondary",className:"text-xs",children:C})},P))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Common Commands"}),a.jsx("div",{className:"space-y-4",children:Lt[h].commands.map((C,P)=>a.jsxs("div",{className:"border border-border/50 rounded-lg",children:[a.jsx("div",{className:"p-3 bg-muted/30 border-b border-border/50",children:a.jsx("p",{className:"text-sm font-medium",children:C.description})}),a.jsx("div",{className:"p-3 space-y-3",children:a.jsxs("div",{className:"bg-slate-900 rounded p-3 font-mono text-sm",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("span",{className:"text-cyan-400",children:["$ ",C.command]}),a.jsx(be,{size:"sm",variant:"ghost",className:"h-6 px-2 text-slate-300 hover:text-white",onClick:()=>navigator.clipboard.writeText(C.command),children:a.jsx(Zt,{className:"w-3 h-3"})})]}),a.jsx("div",{className:"text-green-400 whitespace-pre-wrap",children:C.output})]})})]},P))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"YAML Example"}),a.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm relative",children:[a.jsx(be,{size:"sm",variant:"ghost",className:"absolute top-2 right-2 h-6 px-2 text-slate-300 hover:text-white",onClick:()=>navigator.clipboard.writeText(Lt[h].yamlExample),children:a.jsx(Zt,{className:"w-3 h-3"})}),a.jsx("pre",{className:"text-slate-100 whitespace-pre-wrap overflow-x-auto",children:Lt[h].yamlExample})]})]})]})]})})})]})},Wd=m.forwardRef(({className:e,type:t,...n},r)=>a.jsx("input",{type:t,className:ne("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));Wd.displayName="Input";const kP=({open:e,onOpenChange:t,topic:n,subtopic:r,data:o})=>{const s=i=>{navigator.clipboard.writeText(i)};return a.jsx(rs,{open:e,onOpenChange:t,children:a.jsxs(Qr,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:[a.jsxs(Xr,{children:[a.jsxs(Jr,{className:"text-2xl flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center",children:a.jsx(Rn,{className:"w-5 h-5 text-white"})}),o.title]}),a.jsx(Zr,{className:"text-lg",children:o.description})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/20",children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Definition"}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o.definition})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Description"}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o.detailedDescription})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Use Cases"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:o.useCases.map((i,l)=>a.jsxs("div",{className:"flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:[a.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"}),a.jsx("span",{className:"text-sm text-green-700 dark:text-green-300",children:i})]},l))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Commands"}),a.jsx("div",{className:"space-y-4",children:o.commands.map((i,l)=>a.jsxs("div",{className:"border border-border/50 rounded-lg overflow-hidden hover:shadow-md transition-shadow",children:[a.jsx("div",{className:"p-4 bg-gradient-to-r from-muted/50 to-muted/30 border-b border-border/50",children:a.jsx("p",{className:"text-sm font-medium text-foreground",children:i.description})}),a.jsx("div",{className:"p-4 space-y-3",children:a.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm relative group",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("span",{className:"text-cyan-400 font-semibold",children:["$ ",i.command]}),a.jsx(be,{variant:"ghost",size:"icon",className:"h-6 w-6 opacity-50 hover:opacity-100",onClick:()=>s(i.command),children:a.jsx(Zt,{className:"h-3 w-3"})})]}),i.output&&a.jsx("div",{className:"text-gray-300 mt-2",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:i.output})})]})})]},l))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Examples"}),a.jsx("div",{className:"space-y-4",children:o.examples.map((i,l)=>a.jsx(Ee,{className:"border-border/50",children:a.jsxs(De,{className:"p-4",children:[a.jsx("h4",{className:"font-medium mb-2",children:i.title}),i.description&&a.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:i.description}),a.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm relative",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("span",{className:"text-xs text-gray-400",children:"YAML/Configuration"}),a.jsx(be,{variant:"ghost",size:"icon",className:"h-6 w-6 opacity-50 hover:opacity-100",onClick:()=>s(i.code),children:a.jsx(Zt,{className:"h-3 w-3"})})]}),a.jsx("pre",{className:"text-gray-300 whitespace-pre-wrap",children:i.code})]})]})},l))})]}),o.outputs&&o.outputs.length>0&&a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Outputs"}),a.jsx("div",{className:"space-y-4",children:o.outputs.map((i,l)=>a.jsx(Ee,{className:"border-border/50",children:a.jsxs(De,{className:"p-4",children:[a.jsx("h4",{className:"font-medium mb-2",children:i.title}),i.description&&a.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:i.description}),a.jsx("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm",children:a.jsx("pre",{className:"text-gray-300 whitespace-pre-wrap",children:i.content})})]})},l))})]})]})]})})},qo={podNetworking:{title:"Pod Networking (CNI)",description:"Container Network Interface implementation in Kubernetes",definition:"Container Network Interface (CNI) is a specification and libraries for writing plugins to configure network interfaces in Linux containers, part of the Cloud Native Computing Foundation (CNCF) project.",detailedDescription:"CNI plugins are responsible for inserting a network interface into the container network namespace and making any necessary changes on the host. They enable pods to communicate with each other across nodes and provide network policies for security. Popular CNI implementations include Calico, Flannel, Weave Net, and Cilium, each with different features and performance characteristics.",useCases:["Multi-cloud Kubernetes deployments requiring consistent networking","High-security environments needing network policy enforcement","High-performance clusters requiring optimized networking","Service mesh integration for advanced traffic management","Network observability and troubleshooting"],commands:[{description:"View CNI configuration on a node",command:"ls -la /etc/cni/net.d/",output:`total 12
drwxr-xr-x 2 root root 4096 Jan 15 10:23 .
drwxr-xr-x 3 root root 4096 Jan 15 10:23 ..
-rw-r--r-- 1 root root  491 Jan 15 10:23 10-calico.conflist`},{description:"Check CNI plugin pods in kube-system namespace",command:"kubectl get pods -n kube-system -l k8s-app=calico-node",output:`NAME                READY   STATUS    RESTARTS   AGE
calico-node-b82kp   1/1     Running   0          24h
calico-node-c7jkp   1/1     Running   0          24h
calico-node-t834v   1/1     Running   0          24h`},{description:"Verify pod networking connectivity",command:"kubectl exec -it nginx-pod -- ping 10.244.1.2",output:`PING 10.244.1.2 (10.244.1.2) 56(84) bytes of data.
64 bytes from 10.244.1.2: icmp_seq=1 ttl=63 time=0.128 ms
64 bytes from 10.244.1.2: icmp_seq=2 ttl=63 time=0.128 ms`},{description:"Install a CNI plugin (Calico example)",command:"kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml",output:`configmap/calico-config created
customresourcedefinition.apiextensions.k8s.io/bgpconfigurations.crd.projectcalico.org created
deployment.apps/calico-kube-controllers created
serviceaccount/calico-kube-controllers created
clusterrole.rbac.authorization.k8s.io/calico-kube-controllers created`}],examples:[{title:"Calico CNI Configuration",description:"Example of a Calico CNI configuration file",code:`{
  "name": "k8s-pod-network",
  "cniVersion": "0.3.1",
  "plugins": [
    {
      "type": "calico",
      "log_level": "info",
      "datastore_type": "kubernetes",
      "nodename": "node-01",
      "mtu": 1500,
      "ipam": {
        "type": "calico-ipam"
      },
      "policy": {
        "type": "k8s"
      },
      "kubernetes": {
        "kubeconfig": "/etc/cni/net.d/calico-kubeconfig"
      }
    },
    {
      "type": "portmap",
      "snat": true,
      "capabilities": {"portMappings": true}
    }
  ]
}`},{title:"Pod with Specific Network Annotations",description:"Pod definition with network-specific annotations",code:`apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  annotations:
    cni.projectcalico.org/ipAddrs: "["192.168.0.1"]"
    cni.projectcalico.org/ipv6pools: "["2001:db8::/64"]"
spec:
  containers:
  - name: nginx
    image: nginx:1.19
    ports:
    - containerPort: 80`}],outputs:[{title:"Pod Network Information",description:"Output of pod network details using ip command",content:`1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
3: eth0@if10: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 92:8f:6a:d6:f3:f0 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 10.244.1.2/24 scope global eth0
       valid_lft forever preferred_lft forever`},{title:"CNI Network Visualization",description:"Visual representation of pod networking across nodes",content:`Node 1 (10.0.0.1)         Node 2 (10.0.0.2)         Node 3 (10.0.0.3)
+------------------+      +------------------+      +------------------+
|                  |      |                  |      |                  |
| +------+ +------+|      | +------+ +------+|      | +------+ +------+|
| |Pod A | |Pod B ||      | |Pod C | |Pod D ||      | |Pod E | |Pod F ||
| |10.244| |10.244||      | |10.244| |10.244||      | |10.244| |10.244||
| |.1.2  | |.1.3  ||      | |.2.2  | |.2.3  ||      | |.3.2  | |.3.3  ||
| +------+ +------+|      | +------+ +------+|      | +------+ +------+|
|        |         |      |        |         |      |        |         |
|    cbr0 bridge   |      |    cbr0 bridge   |      |    cbr0 bridge   |
|   (10.244.1.1/24)|      |   (10.244.2.1/24)|      |   (10.244.3.1/24)|
+--------|---------+      +--------|---------+      +--------|---------+
         |                         |                         |
         |                         |                         |
         +-------------------------+-------------------------+
                                   |
                            Overlay Network
                          (VXLAN, IPIP, etc)`}]},serviceTypes:{title:"Service Types & Load Balancing",description:"Different service types and load balancing strategies in Kubernetes",definition:"Kubernetes Services are an abstraction that defines a logical set of Pods and a policy by which to access them, often called a micro-service. The set of Pods targeted by a Service is usually determined by a selector.",detailedDescription:"Kubernetes offers several types of Services to expose applications: ClusterIP (internal only), NodePort (exposes on each node's IP at a static port), LoadBalancer (exposes externally using cloud provider's load balancer), and ExternalName (maps to an external name). Load balancing in Kubernetes happens at two levels: service-level load balancing distributes traffic to pods, while ingress-level load balancing manages external traffic routing to services.",useCases:["Exposing applications internally within the cluster","Making services available externally with static ports","Cloud-native applications requiring external load balancers","Microservices architecture with service discovery","Blue/green deployments and canary releases"],commands:[{description:"Create a ClusterIP service",command:"kubectl create service clusterip my-service --tcp=80:8080",output:"service/my-service created"},{description:"Create a NodePort service",command:"kubectl create service nodeport my-nodeport --tcp=80:8080",output:"service/my-nodeport created"},{description:"Create a LoadBalancer service",command:"kubectl create service loadbalancer my-lb --tcp=80:8080",output:"service/my-lb created"},{description:"View all services in the namespace",command:"kubectl get services",output:`NAME         TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
kubernetes   ClusterIP      10.96.0.1       <none>          443/TCP        24h
my-service   ClusterIP      10.96.45.12     <none>          80/TCP         10m
my-nodeport  NodePort       10.96.231.43    <none>          80:30080/TCP   8m
my-lb        LoadBalancer   10.96.78.92     203.0.113.45    80:31128/TCP   5m`}],examples:[{title:"ClusterIP Service",description:"Basic ClusterIP service definition",code:`apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
  - port: 80
    targetPort: 8080
  type: ClusterIP`},{title:"NodePort Service",description:"Service exposed on each node's IP at a static port",code:`apiVersion: v1
kind: Service
metadata:
  name: my-nodeport-service
spec:
  selector:
    app: MyApp
  ports:
  - port: 80
    targetPort: 8080
    nodePort: 30007
  type: NodePort`},{title:"LoadBalancer Service",description:"Service that uses cloud provider's load balancer",code:`apiVersion: v1
kind: Service
metadata:
  name: my-loadbalancer
  annotations:
    service.beta.kubernetes.io/aws-load-balancer-type: "nlb"
spec:
  selector:
    app: MyApp
  ports:
  - port: 80
    targetPort: 8080
  type: LoadBalancer`},{title:"ExternalName Service",description:"Service that maps to an external DNS name",code:`apiVersion: v1
kind: Service
metadata:
  name: my-externalname-service
spec:
  type: ExternalName
  externalName: api.example.com`},{title:"Headless Service",description:"Service without a cluster IP for direct pod addressing",code:`apiVersion: v1
kind: Service
metadata:
  name: my-headless-service
spec:
  clusterIP: None
  selector:
    app: MyApp
  ports:
  - port: 80
    targetPort: 8080`}],outputs:[{title:"Service Endpoints",description:"Output showing service endpoints",content:`$ kubectl get endpoints my-service
NAME         ENDPOINTS                                   AGE
my-service   10.244.1.3:8080,10.244.2.5:8080,10.244.3.4:8080   1h`},{title:"Service Load Balancing Diagram",content:`External Traffic
      |
      ▼
+-------------+
| LoadBalancer| (External IP: 203.0.113.45)
+------+------+
       |
       ▼
+------+------+
|   Service   | (ClusterIP: 10.96.78.92)
+------+------+
       |
       ▼
+------+------+
|  Endpoints  | (Pod Selection & Load Balancing)
+------+------+
       |
  +----+----+
  |         |
  ▼         ▼
+---+     +---+
|Pod|     |Pod|
+---+     +---+`}]},ingressControllers:{title:"Ingress Controllers (Nginx, Traefik)",description:"Managing external access to services in a cluster",definition:"An Ingress Controller is a specialized load balancer for Kubernetes that operates at the application layer (HTTP/HTTPS) and provides features like path-based routing, TLS termination, and name-based virtual hosting.",detailedDescription:"Ingress controllers implement the Kubernetes Ingress resource, which defines rules for external access to services. Popular implementations include Nginx Ingress Controller, Traefik, HAProxy, and Kong. They offer advanced features like URL rewriting, authentication, rate limiting, and SSL/TLS termination. Ingress controllers typically run as pods within the cluster and integrate with cloud provider load balancers or can be deployed on-premises.",useCases:["Hosting multiple web applications on a single IP address","SSL/TLS termination for secure applications","Path-based routing to different backend services","Implementing authentication and authorization at the edge","Rate limiting and traffic control"],commands:[{description:"Install Nginx Ingress Controller",command:"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.0/deploy/static/provider/cloud/deploy.yaml",output:`namespace/ingress-nginx created
serviceaccount/ingress-nginx created
configmap/ingress-nginx-controller created
service/ingress-nginx-controller-admission created
service/ingress-nginx-controller created
deployment.apps/ingress-nginx-controller created`},{description:"Create an Ingress resource",command:"kubectl apply -f ingress.yaml",output:"ingress.networking.k8s.io/example-ingress created"},{description:"View Ingress resources",command:"kubectl get ingress",output:`NAME              CLASS    HOSTS                 ADDRESS         PORTS     AGE
example-ingress   <none>   example.com,api.example.com   203.0.113.45   80, 443   5m`},{description:"Check Ingress controller logs",command:"kubectl logs -n ingress-nginx deploy/ingress-nginx-controller",output:`I0215 15:18:35.363936       7 controller.go:144] "Configuration changes detected, backend reload required"
I0215 15:18:35.364067       7 event.go:282] Event(v1.ObjectReference{Kind:"Ingress", ... }): type: 'Normal' reason: 'Scheduled' Ingress example/example-ingress scheduled`}],examples:[{title:"Basic Ingress Resource",description:"Simple Ingress with host and path-based routing",code:`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /app1
        pathType: Prefix
        backend:
          service:
            name: app1-service
            port:
              number: 80
      - path: /app2
        pathType: Prefix
        backend:
          service:
            name: app2-service
            port:
              number: 80`},{title:"Ingress with TLS",description:"Ingress resource with TLS configuration",code:`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: tls-example-ingress
spec:
  tls:
  - hosts:
      - secure.example.com
    secretName: example-tls-secret
  rules:
  - host: secure.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: secure-service
            port:
              number: 80`},{title:"Traefik IngressRoute CRD",description:"Traefik's custom resource for advanced routing",code:`apiVersion: traefik.containo.us/v1alpha1
kind: IngressRoute
metadata:
  name: traefik-dashboard
spec:
  entryPoints:
    - web
  routes:
    - match: Host(\`dashboard.example.com\`) && (PathPrefix(\`/api\`) || PathPrefix(\`/dashboard\`))
      kind: Rule
      services:
        - name: api@internal
          kind: TraefikService
      middlewares:
        - name: auth-middleware`}],outputs:[{title:"Ingress Controller Architecture",content:`External Traffic
      |
      ▼
+-------------+
| Load Balancer| (External IP)
+------+------+
       |
       ▼
+------+------+
|  Ingress    | (HTTP/HTTPS Routing)
| Controller  |
+------+------+
       |
  +----+----+
  |         |
  ▼         ▼
+---+     +---+
|Svc|     |Svc|
+---+     +---+
  |         |
  ▼         ▼
+---+     +---+
|Pod|     |Pod|
+---+     +---+`},{title:"Ingress Controller Logs",description:"Sample logs showing request handling",content:`10.180.0.1 - [10.180.0.1] - - [15/Feb/2023:15:04:05 +0000] "GET /app1/index.html HTTP/1.1" 200 615 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36" 343 0.043 [default-app1-service-80] [] 10.244.0.5:80 615 0.042 200 a0be52e8f9055c4e72c2d81cd9392329
10.180.0.1 - [10.180.0.1] - - [15/Feb/2023:15:04:06 +0000] "GET /app2/api/data HTTP/1.1" 200 1245 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36" 343 0.021 [default-app2-service-80] [] 10.244.0.6:80 1245 0.020 200 a0be52e8f9055c4e72c2d81cd9392330`}]},networkPolicies:{title:"Network Policies",description:"Controlling traffic flow between pods and namespaces",definition:"Network Policies are specifications of how groups of pods are allowed to communicate with each other and other network endpoints. They use labels to select pods and define rules which specify what traffic is allowed to the selected pods.",detailedDescription:"Network Policies act as a firewall for Kubernetes pods, controlling both ingress (incoming) and egress (outgoing) traffic. They allow fine-grained control over which pods can communicate with each other and external endpoints. Network Policies are implemented by the CNI plugin, so your cluster must be using a network provider that supports NetworkPolicy (like Calico, Cilium, or Weave Net). Without a policy engine, all pods in the cluster can communicate freely with each other.",useCases:["Isolating production environments from development","Implementing zero-trust security models","Restricting database access to specific application tiers","Compliance with security standards requiring network segmentation","Protecting sensitive workloads from unauthorized access"],commands:[{description:"Create a network policy",command:"kubectl apply -f network-policy.yaml",output:"networkpolicy.networking.k8s.io/db-policy created"},{description:"List network policies",command:"kubectl get networkpolicies",output:`NAME        POD-SELECTOR    AGE
db-policy   app=database   5m`},{description:"Describe a network policy",command:"kubectl describe networkpolicy db-policy",output:`Name:         db-policy
Namespace:    default
Created on:   2023-02-15T14:04:05Z
Labels:       <none>
Annotations:  <none>
Spec:
  PodSelector:     app=database
  Allowing ingress traffic:
    To Port: 3306/TCP
    From:
      PodSelector: app=backend
  Allowing egress traffic:
    <none> (Selected pods are isolated for egress connectivity)
  Policy Types: Ingress, Egress`},{description:"Test network connectivity between pods",command:"kubectl exec -it frontend-pod -- curl -m 3 backend-service:8080",output:"curl: (28) Connection timed out after 3001 milliseconds"}],examples:[{title:"Default Deny All Ingress Traffic",description:"Policy that blocks all incoming traffic to pods in a namespace",code:`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
spec:
  podSelector: {}
  policyTypes:
  - Ingress`},{title:"Allow Traffic from Specific Namespace",description:"Policy allowing traffic only from a specific namespace",code:`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-from-frontend-namespace
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: frontend`},{title:"Database Access Policy",description:"Policy restricting database access to specific applications",code:`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-netpol
spec:
  podSelector:
    matchLabels:
      app: database
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: backend
    ports:
    - port: 3306
      protocol: TCP
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: monitoring
    ports:
    - port: 9090
      protocol: TCP`}],outputs:[{title:"Network Policy Visualization",content:`+----------------+      Allow      +----------------+
|                |<----------------|                |
|  Backend Pods  |                |  Database Pods |
|  (app=backend) |                |  (app=database)|
|                |--------------->|                |
+----------------+   Blocked     +----------------+
                                        ^
                                        |
                                        | Blocked
                                        |
                                  +----------------+
                                  |                |
                                  | Frontend Pods  |
                                  | (app=frontend) |
                                  |                |
                                  +----------------+`},{title:"Network Policy Troubleshooting",description:"Output from network policy troubleshooting tools",content:`$ kubectl exec -it network-tools -- nc -zv database-service 3306
Connection to database-service 3306 port [tcp/mysql] succeeded!

$ kubectl exec -it network-tools -- nc -zv database-service 5432
nc: connect to database-service port 5432 (tcp) failed: Connection timed out

$ kubectl exec -it network-tools -n other-namespace -- nc -zv database-service.default 3306
nc: connect to database-service.default port 3306 (tcp) failed: Connection timed out`}]},serviceMesh:{title:"Service Mesh (Istio, Linkerd)",description:"Advanced networking, security, and observability for microservices",definition:"A service mesh is a dedicated infrastructure layer for facilitating service-to-service communications between microservices, often using a sidecar proxy pattern.",detailedDescription:"Service meshes like Istio and Linkerd add a layer of intelligent proxies (sidecars) to Kubernetes services, intercepting and enhancing all network communication. They provide advanced traffic management (routing, splitting, failover), robust security (mTLS, authorization), and comprehensive observability (metrics, traces, logs) without requiring changes to application code. Service meshes are particularly valuable in large, complex microservices architectures where traditional networking approaches become unmanageable.",useCases:["Zero-trust security implementation with mutual TLS","Advanced traffic management with canary deployments","End-to-end encryption for all service communication","Detailed service-level observability and monitoring","Circuit breaking and fault injection for resilience testing"],commands:[{description:"Install Istio using istioctl",command:"istioctl install --set profile=demo",output:`✔ Istio core installed
✔ Istiod installed
✔ Ingress gateways installed
✔ Installation complete`},{description:"Enable automatic sidecar injection for a namespace",command:"kubectl label namespace default istio-injection=enabled",output:"namespace/default labeled"},{description:"View Istio proxies",command:"kubectl get pods -l istio=sidecar",output:`NAME                     READY   STATUS    RESTARTS   AGE
productpage-v1-7f4cc988c6-qrdhz   2/2     Running   0          1h
details-v1-76778d6644-j8c2j       2/2     Running   0          1h
ratings-v1-85c74b5c97-m5hzx       2/2     Running   0          1h
reviews-v1-67f588cb76-sxvh7       2/2     Running   0          1h`},{description:"Install Linkerd",command:"linkerd install | kubectl apply -f -",output:`namespace/linkerd created
clusterrole.rbac.authorization.k8s.io/linkerd-linkerd-controller created
clusterrolebinding.rbac.authorization.k8s.io/linkerd-linkerd-controller created
serviceaccount/linkerd-controller created
clusterrole.rbac.authorization.k8s.io/linkerd-linkerd-identity created`}],examples:[{title:"Istio Virtual Service",description:"Traffic routing configuration in Istio",code:`apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews-route
spec:
  hosts:
  - reviews.prod.svc.cluster.local
  http:
  - match:
    - headers:
        end-user:
          exact: jason
    route:
    - destination:
        host: reviews.prod.svc.cluster.local
        subset: v2
  - route:
    - destination:
        host: reviews.prod.svc.cluster.local
        subset: v1`},{title:"Istio Destination Rule",description:"Subset definitions for different service versions",code:`apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: reviews-destination
spec:
  host: reviews.prod.svc.cluster.local
  trafficPolicy:
    loadBalancer:
      simple: RANDOM
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2
    trafficPolicy:
      loadBalancer:
        simple: ROUND_ROBIN`},{title:"Linkerd Service Profile",description:"Defining routes and retries in Linkerd",code:`apiVersion: linkerd.io/v1alpha2
kind: ServiceProfile
metadata:
  name: webapp.default.svc.cluster.local
  namespace: default
spec:
  routes:
  - name: GET /books/{id}
    condition:
      method: GET
      pathRegex: /books/[^/]*$
    responseClasses:
    - condition:
        status:
          min: 500
          max: 599
      isFailure: true
    retryPolicy:
      maxRetries: 2
      backoff:
        minMs: 5
        maxMs: 20`}],outputs:[{title:"Service Mesh Architecture",content:`+----------------+      +----------------+
|  Service A     |      |  Service B     |
|  +----------+  |      |  +----------+  |
|  |          |  |      |  |          |  |
|  |   App    |  |      |  |   App    |  |
|  |Container |  |      |  |Container |  |
|  +----------+  |      |  +----------+  |
|       ▲        |      |       ▲        |
|       |        |      |       |        |
|       ▼        |      |       ▼        |
|  +----------+  |      |  +----------+  |
|  |  Sidecar  |<------>|  Sidecar  |  |
|  |   Proxy   |  |      |   Proxy   |  |
|  +----------+  |      |  +----------+  |
+----------------+      +----------------+
        ▲                        ▲
        |                        |
        ▼                        ▼
+---------------------------------------+
|        Control Plane                  |
|  +------------+    +------------+     |
|  |   Policy   |    | Telemetry  |     |
|  |  Control   |    | Collection |     |
|  +------------+    +------------+     |
+---------------------------------------+`},{title:"Istio Dashboard",description:"Service mesh observability metrics",content:`SERVICE METRICS - LAST 1 HOUR

productpage-v1
- Success Rate: 99.8%
- Request Volume: 2.5k req/min
- P50 Latency: 28ms
- P90 Latency: 58ms
- P99 Latency: 117ms

reviews-v1
- Success Rate: 100%
- Request Volume: 1.2k req/min
- P50 Latency: 15ms
- P90 Latency: 32ms
- P99 Latency: 87ms

reviews-v2
- Success Rate: 99.5%
- Request Volume: 1.3k req/min
- P50 Latency: 16ms
- P90 Latency: 34ms
- P99 Latency: 92ms

TOP DETECTED ISSUES:
- High latency spike in ratings service at 14:35
- Elevated error rate (0.5%) in reviews-v2 service`}]}},Yo={persistentVolumes:{title:"Persistent Volumes (PV)",description:"Storage resources in the cluster that are provisioned by an administrator",definition:"A Persistent Volume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource.",detailedDescription:"Persistent Volumes are volume plugins like Volumes, but have a lifecycle independent of any individual Pod that uses the PV. This API object captures the details of the implementation of the storage, be that NFS, iSCSI, or a cloud-provider-specific storage system. PVs are non-namespaced resources and are available to the entire cluster. They can be provisioned statically by a cluster administrator or dynamically using Storage Classes.",useCases:["Databases requiring persistent data storage","Content management systems with file storage needs","AI/ML pipelines with large dataset requirements","Log aggregation and analysis systems","Media processing applications with large file storage needs"],commands:[{description:"Create a Persistent Volume",command:"kubectl apply -f pv.yaml",output:"persistentvolume/pv-example created"},{description:"List all Persistent Volumes",command:"kubectl get pv",output:`NAME         CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM                 STORAGECLASS   REASON   AGE
pv-example   10Gi       RWO            Retain           Available                         standard                 2m
pv-used      5Gi        RWO            Retain           Bound        default/pvc-example   standard                 1d`},{description:"Describe a Persistent Volume",command:"kubectl describe pv pv-example",output:`Name:            pv-example
Labels:          type=local
Annotations:     <none>
Finalizers:      [kubernetes.io/pv-protection]
StorageClass:    standard
Status:          Available
Claim:           
Reclaim Policy:  Retain
Access Modes:    RWO
VolumeMode:      Filesystem
Capacity:        10Gi
Node Affinity:   <none>
Message:         
Source:
    Type:          HostPath
    Path:          /mnt/data
    HostPathType:  `},{description:"Delete a Persistent Volume",command:"kubectl delete pv pv-example",output:'persistentvolume "/pv-example"/ deleted'}],examples:[{title:"Local Persistent Volume",description:"PV using local storage on a specific node",code:`apiVersion: v1
kind: PersistentVolume
metadata:
  name: local-pv
  labels:
    type: local
spec:
  storageClassName: local-storage
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: kubernetes.io/hostname
          operator: In
          values:
          - worker-node-1
  hostPath:
    path: "/mnt/data"`},{title:"NFS Persistent Volume",description:"PV using a Network File System share",code:`apiVersion: v1
kind: PersistentVolume
metadata:
  name: nfs-pv
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Recycle
  storageClassName: nfs
  nfs:
    server: nfs-server.example.com
    path: "/exported/path"`},{title:"AWS EBS Persistent Volume",description:"PV using AWS Elastic Block Store",code:`apiVersion: v1
kind: PersistentVolume
metadata:
  name: aws-ebs-pv
spec:
  capacity:
    storage: 20Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: gp2
  awsElasticBlockStore:
    volumeID: vol-0123456789abcdef0
    fsType: ext4`}],outputs:[{title:"Persistent Volume Lifecycle",content:`1. PROVISIONING
   ├── Static: Admin creates PV
   └── Dynamic: StorageClass automatically provisions

2. BINDING
   └── User creates PVC → Control plane finds matching PV

3. USING
   └── Pod uses PVC as a volume

4. RECLAIMING
   ├── Retain: PV data preserved, admin must clean up
   ├── Delete: PV and external storage deleted
   └── Recycle: Basic scrub (rm -rf) before reuse`},{title:"Persistent Volume Status",description:"Different states a PV can be in",content:`Available: Free resource not yet bound to a claim
Bound: Volume is bound to a claim
Released: Claim was deleted, but resource not yet reclaimed
Failed: Automatic reclamation failed`}]},persistentVolumeClaims:{title:"Persistent Volume Claims (PVC)",description:"Storage requests by users that can be fulfilled by Persistent Volumes",definition:"A Persistent Volume Claim (PVC) is a request for storage by a user. It is similar to a Pod in that Pods consume node resources and PVCs consume PV resources.",detailedDescription:"Persistent Volume Claims enable users to request specific sizes and access modes without knowing the details of the underlying storage infrastructure. When a PVC is created, the control plane looks for a PV that satisfies the claim's requirements. If a suitable PV is found, the PV is bound to the PVC. Pods then use PVCs as volumes, allowing the details of storage provisioning to be abstracted away from Pod configuration.",useCases:["Requesting specific storage capacity for applications","Ensuring data persistence across pod restarts","Sharing data volumes between multiple pods (with ReadWriteMany)","Implementing storage quotas at namespace level","Enabling developers to consume storage without infrastructure knowledge"],commands:[{description:"Create a Persistent Volume Claim",command:"kubectl apply -f pvc.yaml",output:"persistentvolumeclaim/pvc-example created"},{description:"List all Persistent Volume Claims",command:"kubectl get pvc",output:`NAME         STATUS   VOLUME      CAPACITY   ACCESS MODES   STORAGECLASS   AGE
pvc-example   Bound    pv-used      5Gi        RWO            standard       5m`},{description:"Describe a Persistent Volume Claim",command:"kubectl describe pvc pvc-example",output:`Name:          pvc-example
Namespace:     default
StorageClass:  standard
Status:        Bound
Volume:        pv-used
Labels:        <none>
Annotations:   pv.kubernetes.io/bind-completed: yes
               pv.kubernetes.io/bound-by-controller: yes
Finalizers:    [kubernetes.io/pvc-protection]
Capacity:      5Gi
Access Modes:  RWO
VolumeMode:    Filesystem
Events:
  Type    Reason                 Age   From                         Message
  ----    ------                 ----  ----                         -------
  Normal  SuccessfulBind         5m    persistentvolume-controller  Successfully bound persistent volume`},{description:"Delete a Persistent Volume Claim",command:"kubectl delete pvc pvc-example",output:'persistentvolumeclaim "/pvc-example"/ deleted'}],examples:[{title:"Basic Persistent Volume Claim",description:"Simple PVC requesting storage",code:`apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: basic-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: standard`},{title:"PVC with Selector",description:"PVC that selects specific PVs using labels",code:`apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-with-selector
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: "" # Empty string must be explicitly set
  selector:
    matchLabels:
      type: local`},{title:"Pod Using a PVC",description:"Pod configuration that mounts a PVC",code:`apiVersion: v1
kind: Pod
metadata:
  name: pvc-demo-pod
spec:
  containers:
    - name: app
      image: nginx
      volumeMounts:
      - mountPath: "/usr/share/nginx/html"
        name: pvc-storage
  volumes:
    - name: pvc-storage
      persistentVolumeClaim:
        claimName: basic-pvc`}],outputs:[{title:"PVC to PV Binding Process",content:`User creates PVC
      |
      ▼
Control plane looks for matching PV
      |
      ▼
Matching criteria:
- Sufficient capacity
- Matching access modes
- Matching storage class
- Matching selectors (if specified)
      |
      ▼
If match found: PV bound to PVC
      |
      ▼
If no match and dynamic provisioning enabled:
New PV automatically created
      |
      ▼
Pod can now use PVC as volume`},{title:"PVC Access Modes",description:"Available access modes for PVCs",content:`ReadWriteOnce (RWO): Volume can be mounted as read-write by a single node
ReadOnlyMany (ROX): Volume can be mounted read-only by many nodes
ReadWriteMany (RWX): Volume can be mounted as read-write by many nodes

Note: Not all storage types support all access modes.
For example:
- AWS EBS, GCE PD: Support RWO only
- NFS, CephFS: Support all three modes
- Azure File: Supports RWO and RWX`}]},storageClasses:{title:"Storage Classes",description:"Defines types of storage with different performance characteristics",definition:"A StorageClass provides a way for administrators to describe the 'classes' of storage they offer. Different classes might map to quality-of-service levels, backup policies, or arbitrary policies determined by the cluster administrators.",detailedDescription:"StorageClasses enable dynamic volume provisioning, allowing storage volumes to be created on-demand. They abstract the underlying storage provider details and offer different performance characteristics and parameters. Each StorageClass contains the fields provisioner, parameters, and reclaimPolicy, which are used when a PVC claims a PV with that class. The cluster administrator can define as many StorageClass objects as needed, each specifying a volume plugin (provisioner) that provisions a volume and the set of parameters to pass to that provisioner.",useCases:["Offering different storage tiers (SSD vs HDD)","Automating storage provisioning for different environments","Implementing different backup policies per storage type","Managing storage costs with appropriate performance levels","Simplifying storage management across multiple cloud providers"],commands:[{description:"Create a Storage Class",command:"kubectl apply -f storageclass.yaml",output:"storageclass.storage.k8s.io/fast created"},{description:"List all Storage Classes",command:"kubectl get storageclass",output:`NAME                 PROVISIONER                    RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
standard (default)   kubernetes.io/gce-pd           Delete          Immediate              false                  1d
fast                 kubernetes.io/gce-pd           Delete          Immediate              true                   5m`},{description:"Set a default Storage Class",command:`kubectl patch storageclass fast -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'`,output:"storageclass.storage.k8s.io/fast patched"},{description:"Describe a Storage Class",command:"kubectl describe storageclass fast",output:`Name:                  fast
IsDefaultClass:        Yes
Annotations:           storageclass.kubernetes.io/is-default-class=true
Provisioner:           kubernetes.io/gce-pd
Parameters:            type=pd-ssd
AllowVolumeExpansion:  true
MountOptions:          <none>
ReclaimPolicy:         Delete
VolumeBindingMode:     Immediate
Events:                <none>`}],examples:[{title:"Basic Storage Class",description:"Simple StorageClass for GCE PD SSD volumes",code:`apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
  annotations:
    storageclass.kubernetes.io/is-default-class: "false"
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-ssd
reclaimPolicy: Delete
allowVolumeExpansion: true
volumeBindingMode: Immediate`},{title:"AWS EBS Storage Class",description:"StorageClass for AWS EBS volumes with specific parameters",code:`apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: aws-standard
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  fsType: ext4
  encrypted: "true"
reclaimPolicy: Retain
volumeBindingMode: WaitForFirstConsumer`},{title:"Local Storage Class",description:"StorageClass for local volumes with delayed binding",code:`apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: local-storage
provisioner: kubernetes.io/no-provisioner
volumeBindingMode: WaitForFirstConsumer
reclaimPolicy: Retain`}],outputs:[{title:"Storage Class Provisioning Flow",content:`1. Admin creates StorageClass
   |
   ▼
2. User creates PVC referencing StorageClass
   |
   ▼
3. PV Controller observes the PVC
   |
   ▼
4. External Provisioner watches for PVCs
   |
   ▼
5. Provisioner creates the volume in external storage
   |
   ▼
6. Provisioner creates a PV object in Kubernetes
   |
   ▼
7. PV Controller binds the PVC to the new PV`},{title:"Volume Binding Modes",description:"Different binding modes for StorageClasses",content:`Immediate: Volume binding and dynamic provisioning occurs
when the PVC is created. This is the default mode.

WaitForFirstConsumer: Volume binding and provisioning is
delayed until a Pod using the PVC is created. This ensures
the volume is provisioned in a topology-aware way, on a
node that will actually use it.`}]},dynamicProvisioning:{title:"Dynamic Provisioning",description:"Automatic creation of storage volumes when requested by users",definition:"Dynamic provisioning is a feature that allows storage volumes to be created on-demand when a PersistentVolumeClaim (PVC) is created, eliminating the need for cluster administrators to pre-provision storage.",detailedDescription:"Dynamic provisioning uses StorageClasses to determine what type of storage to create when a PVC requests it. When a user creates a PVC that references a StorageClass, the cluster's persistent volume controller will automatically provision a new storage volume and corresponding PersistentVolume (PV) object that meets the requirements of the claim. This automation significantly reduces the administrative overhead of managing storage in a Kubernetes cluster and allows users to request storage without knowing the underlying infrastructure details.",useCases:["Self-service storage provisioning for development teams","Automating storage lifecycle in CI/CD pipelines","On-demand database storage allocation","Elastic storage scaling for applications with varying demands","Multi-tenant clusters with isolated storage resources"],commands:[{description:"Create a PVC with dynamic provisioning",command:"kubectl apply -f dynamic-pvc.yaml",output:"persistentvolumeclaim/dynamic-pvc created"},{description:"Watch the PV get dynamically created",command:"kubectl get pv --watch",output:`NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                 STORAGECLASS   REASON   AGE
pvc-3b8b3e1f-c4b9-4221-8537-c1e77e6fb418   10Gi       RWO            Delete           Bound    default/dynamic-pvc   standard                 5s`},{description:"Check the PVC status",command:"kubectl get pvc dynamic-pvc",output:`NAME          STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
dynamic-pvc   Bound    pvc-3b8b3e1f-c4b9-4221-8537-c1e77e6fb418   10Gi       RWO            standard       30s`},{description:"View the storage provider's resources",command:'gcloud compute disks list --filter="/name~pvc-3b8b3e1f"/',output:`NAME                                       LOCATION       LOCATION_SCOPE  SIZE_GB  TYPE         STATUS
pvc-3b8b3e1f-c4b9-4221-8537-c1e77e6fb418   us-central1-a  zone            10       pd-standard  READY`}],examples:[{title:"PVC for Dynamic Provisioning",description:"PVC that will trigger dynamic volume creation",code:`apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: dynamic-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: standard`},{title:"Pod Using Dynamically Provisioned Storage",description:"Pod that uses a dynamically provisioned PVC",code:`apiVersion: v1
kind: Pod
metadata:
  name: dynamic-storage-pod
spec:
  containers:
  - name: web-server
    image: nginx
    volumeMounts:
    - mountPath: "/usr/share/nginx/html"
      name: dynamic-storage
  volumes:
  - name: dynamic-storage
    persistentVolumeClaim:
      claimName: dynamic-pvc`},{title:"Custom StorageClass for Dynamic Provisioning",description:"StorageClass with specific parameters for dynamic provisioning",code:`apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: managed-premium-retain
provisioner: kubernetes.io/azure-disk
reclaimPolicy: Retain
allowVolumeExpansion: true
parameters:
  storageaccounttype: Premium_LRS
  kind: Managed
volumeBindingMode: WaitForFirstConsumer`}],outputs:[{title:"Dynamic Provisioning Workflow",content:`User creates PVC with storageClassName: "standard"
              |
              ▼
Persistent Volume Controller detects new PVC
              |
              ▼
Controller identifies the StorageClass "standard"
              |
              ▼
Controller calls the provisioner specified in the StorageClass
              |
              ▼
Provisioner creates actual storage in the infrastructure
(e.g., AWS EBS volume, GCE Persistent Disk)
              |
              ▼
Provisioner creates a PV object in Kubernetes
representing the new storage volume
              |
              ▼
Persistent Volume Controller binds the PVC to the new PV
              |
              ▼
Pod can now use the PVC and access the storage`},{title:"Dynamic Provisioning vs Static Provisioning",description:"Comparison between dynamic and static provisioning approaches",content:`DYNAMIC PROVISIONING:
- Storage created automatically when PVC is created
- Uses StorageClass to determine volume type
- No pre-provisioning required by administrators
- Volume size determined by PVC request
- Volume lifecycle tied to PVC (with Delete reclaim policy)

STATIC PROVISIONING:
- Admin manually creates PVs before PVCs
- Admin must know volume details in advance
- Limited to pre-created volumes
- May lead to storage waste if volumes go unused
- More administrative overhead`}]},statefulSetStorage:{title:"StatefulSet Storage",description:"Managing storage for stateful applications with stable identities",definition:"StatefulSet storage refers to the persistent storage management for StatefulSets, which are Kubernetes workloads designed for stateful applications requiring stable network identities and persistent storage.",detailedDescription:"StatefulSets provide guarantees about the ordering and uniqueness of Pods, making them suitable for applications that require stable persistent storage, stable network identifiers, and ordered deployment and scaling. Each Pod in a StatefulSet has a persistent identifier that it maintains across any rescheduling. StatefulSets use a volumeClaimTemplate to dynamically provision storage for each Pod instance. This ensures that each Pod gets its own PersistentVolumeClaim and associated storage, which remains attached to the Pod even if it's rescheduled to a different node.",useCases:["Distributed databases like MongoDB, Cassandra, or Elasticsearch","Messaging systems requiring persistent message queues","Stateful applications with master-slave architecture","Applications requiring stable hostnames and storage","Data processing pipelines with state requirements"],commands:[{description:"Create a StatefulSet with persistent storage",command:"kubectl apply -f statefulset.yaml",output:"statefulset.apps/web created"},{description:"List StatefulSet pods",command:"kubectl get pods -l app=nginx",output:`NAME    READY   STATUS    RESTARTS   AGE
web-0   1/1     Running   0          5m
web-1   1/1     Running   0          4m
web-2   1/1     Running   0          3m`},{description:"List PVCs created by the StatefulSet",command:"kubectl get pvc -l app=nginx",output:`NAME           STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
www-web-0     Bound    pvc-42c9815d-4f98-4f31-9c1c-0ec9b1e0d338   1Gi        RWO            standard       5m
www-web-1     Bound    pvc-8b5f7e21-9640-4d8c-8bd9-8b3d40c2b853   1Gi        RWO            standard       4m
www-web-2     Bound    pvc-9c7f5b77-9e9b-4f83-9bf4-4f9e8f9e2d58   1Gi        RWO            standard       3m`},{description:"Scale a StatefulSet",command:"kubectl scale statefulset web --replicas=5",output:"statefulset.apps/web scaled"}],examples:[{title:"Basic StatefulSet with Storage",description:"StatefulSet definition with volumeClaimTemplates",code:`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  selector:
    matchLabels:
      app: nginx
  serviceName: "nginx"
  replicas: 3
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.20
        ports:
        - containerPort: 80
          name: web
        volumeMounts:
        - name: www
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: www
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "standard"
      resources:
        requests:
          storage: 1Gi`},{title:"Headless Service for StatefulSet",description:"Service that provides network identity for StatefulSet pods",code:`apiVersion: v1
kind: Service
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  ports:
  - port: 80
    name: web
  clusterIP: None
  selector:
    app: nginx`},{title:"StatefulSet for Database with Multiple Volumes",description:"StatefulSet with multiple volume claim templates",code:`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mongodb
spec:
  selector:
    matchLabels:
      app: mongodb
  serviceName: mongodb-service
  replicas: 3
  template:
    metadata:
      labels:
        app: mongodb
    spec:
      containers:
      - name: mongodb
        image: mongo:4.4
        ports:
        - containerPort: 27017
          name: mongodb
        volumeMounts:
        - name: data
          mountPath: /data/db
        - name: config
          mountPath: /data/configdb
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "fast"
      resources:
        requests:
          storage: 10Gi
  - metadata:
      name: config
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "standard"
      resources:
        requests:
          storage: 1Gi`}],outputs:[{title:"StatefulSet Storage Architecture",content:`StatefulSet: web (3 replicas)
        |
        ├── Pod: web-0
        │   └── PVC: www-web-0 → PV: pvc-42c9815d-...
        │
        ├── Pod: web-1
        │   └── PVC: www-web-1 → PV: pvc-8b5f7e21-...
        │
        └── Pod: web-2
            └── PVC: www-web-2 → PV: pvc-9c7f5b77-...

If web-0 is rescheduled to another node:
- Pod name remains web-0
- PVC www-web-0 remains attached to web-0
- Data persists across rescheduling`},{title:"StatefulSet Scaling Behavior",description:"How storage is managed during scaling operations",content:`SCALING UP (3→5 replicas):
1. Pod web-3 created
2. PVC www-web-3 dynamically provisioned
3. Pod web-3 starts after PVC is bound
4. Pod web-4 created
5. PVC www-web-4 dynamically provisioned
6. Pod web-4 starts after PVC is bound

SCALING DOWN (5→2 replicas):
1. Pod web-4 terminated
2. PVC www-web-4 remains (not deleted)
3. Pod web-3 terminated
4. PVC www-web-3 remains (not deleted)
5. Pod web-2 terminated
6. PVC www-web-2 remains (not deleted)

SCALING UP AGAIN (2→4 replicas):
1. Pod web-2 created
2. Existing PVC www-web-2 reused
3. Pod web-3 created
4. Existing PVC www-web-3 reused`}]}},Qo={rbac:{title:"Role-Based Access Control (RBAC)",description:"Managing authorization and permissions in Kubernetes",definition:"Role-Based Access Control (RBAC) is a method of regulating access to resources based on the roles of individual users within an organization. In Kubernetes, RBAC is used to dynamically configure and fine-tune permissions.",detailedDescription:"Kubernetes RBAC defines four top-level API objects: Role, ClusterRole, RoleBinding, and ClusterRoleBinding. Roles define permissions within a specific namespace, while ClusterRoles define permissions across the entire cluster. RoleBindings grant the permissions defined in a Role to users, groups, or service accounts within a namespace, while ClusterRoleBindings grant permissions cluster-wide. RBAC allows administrators to control what actions users and service accounts can perform on which resources, following the principle of least privilege.",useCases:["Restricting namespace access to specific teams","Granting read-only access to monitoring systems","Providing limited administrative capabilities to DevOps engineers","Implementing separation of duties in multi-tenant clusters","Creating service accounts with minimal required permissions"],commands:[{description:"Create a Role",command:"kubectl create role pod-reader --verb=get,list,watch --resource=pods -n development",output:"role.rbac.authorization.k8s.io/pod-reader created"},{description:"Create a RoleBinding",command:"kubectl create rolebinding read-pods --role=pod-reader --user=jane -n development",output:"rolebinding.rbac.authorization.k8s.io/read-pods created"},{description:"Create a ClusterRole",command:"kubectl create clusterrole node-reader --verb=get,list,watch --resource=nodes",output:"clusterrole.rbac.authorization.k8s.io/node-reader created"},{description:"Create a ClusterRoleBinding",command:"kubectl create clusterrolebinding read-nodes --clusterrole=node-reader --user=john",output:"clusterrolebinding.rbac.authorization.k8s.io/read-nodes created"},{description:"Check user permissions",command:"kubectl auth can-i list pods --as=jane -n development",output:"yes"}],examples:[{title:"Role Definition",description:"Role that allows reading pods in a namespace",code:`apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: development
  name: pod-reader
rules:
- apiGroups: [""] # "" indicates the core API group
  resources: ["pods"]
  verbs: ["get", "watch", "list"]`},{title:"RoleBinding Definition",description:"RoleBinding that grants the pod-reader role to a user",code:`apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: development
subjects:
- kind: User
  name: jane
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io`},{title:"ClusterRole with Multiple Resources",description:"ClusterRole that grants permissions to multiple resources",code:`apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: monitoring-role
rules:
- apiGroups: [""] # Core API group
  resources: ["pods", "services", "nodes"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["apps"]
  resources: ["deployments", "daemonsets", "statefulsets"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["batch"]
  resources: ["jobs", "cronjobs"]
  verbs: ["get", "list", "watch"]`},{title:"Service Account with RBAC",description:"Creating a service account and binding it to a role",code:`# Service Account
apiVersion: v1
kind: ServiceAccount
metadata:
  name: app-service-account
  namespace: production
---
# Role for the service account
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: app-role
  namespace: production
rules:
- apiGroups: [""] 
  resources: ["configmaps", "secrets"]
  verbs: ["get"]
- apiGroups: [""] 
  resources: ["pods"]
  verbs: ["list"]
---
# RoleBinding to bind the service account to the role
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: app-role-binding
  namespace: production
subjects:
- kind: ServiceAccount
  name: app-service-account
  namespace: production
roleRef:
  kind: Role
  name: app-role
  apiGroup: rbac.authorization.k8s.io`}],outputs:[{title:"RBAC Authorization Flow",content:`1. User authenticates to the API server
   |
   ▼
2. API server identifies the user
   |
   ▼
3. API server checks if user can perform requested action
   |
   ▼
4. RBAC evaluates applicable:
   - Roles/ClusterRoles
   - RoleBindings/ClusterRoleBindings
   |
   ▼
5. If authorized: Request proceeds
   If not authorized: 403 Forbidden error`},{title:"RBAC Permission Check Results",description:"Output of permission checks for different users",content:`$ kubectl auth can-i list pods --as=jane -n development
yes

$ kubectl auth can-i create deployments --as=jane -n development
no

$ kubectl auth can-i list nodes --as=john
yes

$ kubectl auth can-i list pods --as=jane -n production
no - no RBAC policy matched`}]},podSecurity:{title:"Pod Security Standards",description:"Enforcing security best practices for pods",definition:"Pod Security Standards define different isolation levels for pods, providing a simplified way to enforce security best practices and restrict pod behaviors.",detailedDescription:"Kubernetes Pod Security Standards define three policy levels: Privileged (unrestricted), Baseline (minimally restrictive), and Restricted (hardened). These standards can be enforced using Pod Security Admission (built into Kubernetes) or third-party policy engines like OPA Gatekeeper or Kyverno. They control aspects like running as non-root, using read-only root filesystems, dropping capabilities, and preventing privilege escalation. Pod Security Standards replaced the deprecated PodSecurityPolicy in Kubernetes v1.25.",useCases:["Preventing containers from running as root","Enforcing read-only root filesystems","Restricting Linux capabilities to minimum required","Preventing privilege escalation","Implementing defense-in-depth security measures"],commands:[{description:"Enable Pod Security Standards for a namespace",command:"kubectl label namespace restricted pod-security.kubernetes.io/enforce=restricted",output:"namespace/restricted labeled"},{description:"Set warning level for a namespace",command:"kubectl label namespace dev pod-security.kubernetes.io/warn=baseline",output:"namespace/dev labeled"},{description:"Check Pod Security Standards labels on a namespace",command:"kubectl get ns restricted --show-labels",output:`NAME         STATUS   AGE   LABELS
restricted   Active   1h    kubernetes.io/metadata.name=restricted,pod-security.kubernetes.io/enforce=restricted`},{description:"Try to create a privileged pod in restricted namespace",command:"kubectl apply -f privileged-pod.yaml -n restricted",output:`Error from server (Forbidden): error when creating "/privileged-pod.yaml"/: pods "/nginx-privileged"/ is forbidden: violates Pod
Security "/restricted:latest"/: privileged (container "/nginx"/ must not set securityContext.privileged=true)`}],examples:[{title:"Baseline Pod Security",description:"Pod configuration following baseline security standards",code:`apiVersion: v1
kind: Pod
metadata:
  name: baseline-pod
spec:
  securityContext:
    runAsNonRoot: true
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: app
    image: nginx:1.20
    securityContext:
      allowPrivilegeEscalation: false`},{title:"Restricted Pod Security",description:"Pod configuration following restricted security standards",code:`apiVersion: v1
kind: Pod
metadata:
  name: restricted-pod
spec:
  securityContext:
    runAsNonRoot: true
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: app
    image: nginx:1.20
    securityContext:
      allowPrivilegeEscalation: false
      capabilities:
        drop: ["ALL"]
      runAsUser: 1000
      runAsGroup: 3000
      readOnlyRootFilesystem: true`},{title:"Namespace with Pod Security Standards",description:"Namespace configuration with Pod Security Standards labels",code:`apiVersion: v1
kind: Namespace
metadata:
  name: secure-workloads
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/enforce-version: latest
    pod-security.kubernetes.io/warn: restricted
    pod-security.kubernetes.io/warn-version: latest
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/audit-version: latest`}],outputs:[{title:"Pod Security Standards Levels",content:`PRIVILEGED (unrestricted):
- Provides wide permissions similar to root on the node
- No restrictions on pod specifications
- Typically used for infrastructure and system pods

BASELINE (minimally restrictive):
- Prevents known privilege escalations
- Disallows privileged pods
- Disallows hostPID, hostIPC, hostNetwork
- Restricts host paths

RESTRICTED (hardened):
- Heavily restricted pod specification
- Requires running as non-root user
- Drops ALL capabilities, adds only what's needed
- Requires read-only root filesystem
- Enforces seccomp profile`},{title:"Pod Security Admission Modes",description:"Different enforcement modes for Pod Security Standards",content:`ENFORCE: Policy violations cause the pod to be rejected

AUDIT: Policy violations are recorded in the audit log but
pod is allowed to run

WARN: Policy violations trigger a user-facing warning but
pod is allowed to run`}]},networkPolicies:{title:"Network Policies",description:"Controlling traffic flow between pods and namespaces",definition:"Network Policies are specifications of how groups of pods are allowed to communicate with each other and other network endpoints. They use labels to select pods and define rules which specify what traffic is allowed to the selected pods.",detailedDescription:"Network Policies act as a firewall for Kubernetes pods, controlling both ingress (incoming) and egress (outgoing) traffic. They allow fine-grained control over which pods can communicate with each other and external endpoints. Network Policies are implemented by the CNI plugin, so your cluster must be using a network provider that supports NetworkPolicy (like Calico, Cilium, or Weave Net). Without a policy engine, all pods in the cluster can communicate freely with each other.",useCases:["Isolating production environments from development","Implementing zero-trust security models","Restricting database access to specific application tiers","Compliance with security standards requiring network segmentation","Protecting sensitive workloads from unauthorized access"],commands:[{description:"Create a network policy",command:"kubectl apply -f network-policy.yaml",output:"networkpolicy.networking.k8s.io/db-policy created"},{description:"List network policies",command:"kubectl get networkpolicies",output:`NAME        POD-SELECTOR    AGE
db-policy   app=database   5m`},{description:"Describe a network policy",command:"kubectl describe networkpolicy db-policy",output:`Name:         db-policy
Namespace:    default
Created on:   2023-02-15T14:04:05Z
Labels:       <none>
Annotations:  <none>
Spec:
  PodSelector:     app=database
  Allowing ingress traffic:
    To Port: 3306/TCP
    From:
      PodSelector: app=backend
  Allowing egress traffic:
    <none> (Selected pods are isolated for egress connectivity)
  Policy Types: Ingress, Egress`},{description:"Test network connectivity between pods",command:"kubectl exec -it frontend-pod -- curl -m 3 backend-service:8080",output:"curl: (28) Connection timed out after 3001 milliseconds"}],examples:[{title:"Default Deny All Ingress Traffic",description:"Policy that blocks all incoming traffic to pods in a namespace",code:`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
spec:
  podSelector: {}
  policyTypes:
  - Ingress`},{title:"Allow Traffic from Specific Namespace",description:"Policy allowing traffic only from a specific namespace",code:`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-from-frontend-namespace
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: frontend`},{title:"Database Access Policy",description:"Policy restricting database access to specific applications",code:`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-netpol
spec:
  podSelector:
    matchLabels:
      app: database
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: backend
    ports:
    - port: 3306
      protocol: TCP
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: monitoring
    ports:
    - port: 9090
      protocol: TCP`}],outputs:[{title:"Network Policy Visualization",content:`+----------------+      Allow      +----------------+
|                |<----------------|                |
|  Backend Pods  |                |  Database Pods |
|  (app=backend) |                |  (app=database)|
|                |--------------->|                |
+----------------+   Blocked     +----------------+
                                        ^
                                        |
                                        | Blocked
                                        |
                                  +----------------+
                                  |                |
                                  | Frontend Pods  |
                                  | (app=frontend) |
                                  |                |
                                  +----------------+`},{title:"Network Policy Troubleshooting",description:"Output from network policy troubleshooting tools",content:`$ kubectl exec -it network-tools -- nc -zv database-service 3306
Connection to database-service 3306 port [tcp/mysql] succeeded!

$ kubectl exec -it network-tools -- nc -zv database-service 5432
nc: connect to database-service port 5432 (tcp) failed: Connection timed out

$ kubectl exec -it network-tools -n other-namespace -- nc -zv database-service.default 3306
nc: connect to database-service.default port 3306 (tcp) failed: Connection timed out`}]},secretsManagement:{title:"Secrets Management",description:"Securely storing and managing sensitive information in Kubernetes",definition:"Kubernetes Secrets are objects that store sensitive information, such as passwords, OAuth tokens, and SSH keys, which can be mounted into pods or used by the kubelet to pull images.",detailedDescription:"Kubernetes Secrets provide a way to separate sensitive information from application code, reducing the risk of accidental exposure. By default, Secrets are stored unencrypted in the API server's underlying data store (etcd), so access to the API server and etcd should be limited to trusted users. For enhanced security, features like encryption at rest, RBAC controls, and external secrets management systems (like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault) can be used. Secrets can be mounted as files or exposed as environment variables to containers.",useCases:["Storing database credentials for applications","Managing API keys and tokens","Providing TLS certificates for secure communication","Storing SSH keys for git operations","Injecting configuration with sensitive data"],commands:[{description:"Create a secret from literal values",command:"kubectl create secret generic db-credentials --from-literal=username=admin --from-literal=password=s3cr3t",output:"secret/db-credentials created"},{description:"Create a secret from files",command:"kubectl create secret generic tls-certs --from-file=tls.crt=./cert.crt --from-file=tls.key=./private.key",output:"secret/tls-certs created"},{description:"List secrets",command:"kubectl get secrets",output:`NAME             TYPE                                  DATA   AGE
db-credentials   Opaque                                2      30s
tls-certs        Opaque                                2      15s
default-token    kubernetes.io/service-account-token   3      45d`},{description:"View secret details (without showing values)",command:"kubectl describe secret db-credentials",output:`Name:         db-credentials
Namespace:    default
Labels:       <none>
Annotations:  <none>

Type:  Opaque

Data
====
password:  6 bytes
username:  5 bytes`},{description:"Decode a secret value",command:"kubectl get secret db-credentials -o jsonpath='{.data.password}' | base64 --decode",output:"s3cr3t"}],examples:[{title:"Basic Secret Definition",description:"YAML definition for a basic Kubernetes Secret",code:`apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
type: Opaque
data:
  username: YWRtaW4=  # base64 encoded 'admin'
  password: czNjcjN0  # base64 encoded 's3cr3t'`},{title:"Pod Using Secrets as Environment Variables",description:"Pod that consumes secrets as environment variables",code:`apiVersion: v1
kind: Pod
metadata:
  name: secret-env-pod
spec:
  containers:
  - name: app
    image: myapp:1.0
    env:
    - name: DB_USERNAME
      valueFrom:
        secretKeyRef:
          name: db-credentials
          key: username
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: db-credentials
          key: password`},{title:"Pod Using Secrets as Volumes",description:"Pod that mounts secrets as files in a volume",code:`apiVersion: v1
kind: Pod
metadata:
  name: secret-vol-pod
spec:
  containers:
  - name: app
    image: nginx:1.20
    volumeMounts:
    - name: tls
      mountPath: "/etc/nginx/ssl"
      readOnly: true
  volumes:
  - name: tls
    secret:
      secretName: tls-certs
      items:
      - key: tls.crt
        path: server.crt
      - key: tls.key
        path: server.key`},{title:"TLS Secret for Ingress",description:"Creating and using a TLS secret with Ingress",code:`# Create TLS Secret
apiVersion: v1
kind: Secret
metadata:
  name: example-tls
  namespace: default
type: kubernetes.io/tls
data:
  tls.crt: base64_encoded_cert
  tls.key: base64_encoded_key
---
# Use TLS Secret in Ingress
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: tls-example-ingress
spec:
  tls:
  - hosts:
      - secure.example.com
    secretName: example-tls
  rules:
  - host: secure.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: service
            port:
              number: 80`}],outputs:[{title:"Secret Usage in Pods",content:`+----------------+
|                |
|  Secret Object |
| db-credentials |
|                |
+-------+--------+
        |
        | Reference
        |
        ▼
+-------+--------+
|                |
|      Pod       |
|                |
| Environment:   |
| DB_USERNAME    |
| DB_PASSWORD    |
|                |
| Volume:        |
| /etc/secrets/  |
|                |
+----------------+`},{title:"Secret Security Best Practices",description:"Recommendations for securing Kubernetes Secrets",content:`1. Enable Encryption at Rest
   - Configure the API server to encrypt secret data in etcd

2. Use RBAC to Restrict Access
   - Limit which users and service accounts can read secrets

3. Consider External Secret Stores
   - HashiCorp Vault
   - AWS Secrets Manager
   - Azure Key Vault
   - Google Secret Manager

4. Minimize Secret Distribution
   - Only provide secrets to pods that need them
   - Use namespaces to isolate secrets

5. Rotate Secrets Regularly
   - Implement a process for secret rotation

6. Audit Secret Access
   - Enable audit logging for secret operations

7. Use imagePullSecrets Carefully
   - Don't share registry credentials widely`}]},securityScanning:{title:"Security Scanning",description:"Tools and practices for identifying vulnerabilities in Kubernetes environments",definition:"Security scanning in Kubernetes involves using automated tools to identify vulnerabilities, misconfigurations, and compliance issues in cluster components, workloads, and container images.",detailedDescription:"Kubernetes security scanning encompasses multiple layers: infrastructure scanning checks the cluster configuration and components; image scanning identifies vulnerabilities in container images; runtime security monitors for suspicious behavior during execution; and compliance scanning ensures adherence to standards like CIS Benchmarks, NIST, or PCI-DSS. Tools like Trivy, Clair, Falco, Kubescape, and Kube-bench automate these processes, while admission controllers like OPA Gatekeeper can enforce security policies at deployment time. Regular scanning is essential as new vulnerabilities are constantly discovered.",useCases:["Identifying vulnerable packages in container images","Detecting misconfigurations in Kubernetes resources","Ensuring compliance with security standards and benchmarks","Preventing deployment of insecure workloads","Continuous security monitoring in CI/CD pipelines"],commands:[{description:"Scan a container image for vulnerabilities with Trivy",command:"trivy image nginx:1.20",output:`2023-02-15T10:15:30.123Z INFO Detected OS: debian 10.8
2023-02-15T10:15:31.456Z INFO Detecting Debian vulnerabilities...

ngix:1.20 (debian 10.8)
========================
Total: 65 (CRITICAL: 12, HIGH: 28, MEDIUM: 18, LOW: 7, UNKNOWN: 0)

+---------------+------------------+----------+-------------------+---------------+---------------------------------------+
|    LIBRARY    | VULNERABILITY ID | SEVERITY | INSTALLED VERSION | FIXED VERSION |                 TITLE                 |
+---------------+------------------+----------+-------------------+---------------+---------------------------------------+
| apt           | CVE-2020-27350   | CRITICAL | 1.8.2             | 1.8.2.1       | apt: integer overflows and underflows |
|               |                  |          |                   |               | in ar/tar implementations            |
+---------------+------------------+----------+-------------------+---------------+---------------------------------------+`},{description:"Run CIS Kubernetes Benchmark with kube-bench",command:"kube-bench run --targets=master",output:`[INFO] 1 Master Node Security Configuration
[INFO] 1.1 API Server
[PASS] 1.1.1 Ensure that the --anonymous-auth argument is set to false
[FAIL] 1.1.2 Ensure that the --basic-auth-file argument is not set
[PASS] 1.1.3 Ensure that the --token-auth-file argument is not set
...
== Summary ==
19 checks PASS
5 checks FAIL
2 checks WARN
0 checks INFO`},{description:"Scan Kubernetes YAML files with Kubescape",command:"kubescape scan deployment.yaml",output:`FAILED CONTROLS: 4
LOW: 0, MEDIUM: 2, HIGH: 2

FAILED RESOURCES BY SEVERITY:
LOW: 0, MEDIUM: 3, HIGH: 2

Control: Pods in default namespace
Severity: Medium
Resource: deployment/web-app
Status: Failed

Control: Privileged container
Severity: High
Resource: deployment/web-app
Status: Failed`},{description:"Check for exposed secrets in Kubernetes resources",command:"kubectl-detect-secrets -n default",output:`Found potential secret in ConfigMap/app-config:
  API_KEY: 'a1b2c3d4e5f6g7h8i9j0'

Found potential secret in Deployment/api-server:
  Container 'api' has environment variable 'DB_PASSWORD' with value 'password123'`}],examples:[{title:"Trivy in CI Pipeline",description:"GitHub Actions workflow using Trivy for image scanning",code:`name: Container Security Scan

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  scan:
    name: Security Scan
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      
      - name: Build image
        run: docker build -t myapp:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 .
      
      - name: Scan image for vulnerabilities
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'myapp:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
          format: 'sarif'
          output: 'trivy-results.sarif'
          severity: 'CRITICAL,HIGH'
          exit-code: '1'
          ignore-unfixed: true`},{title:"OPA Gatekeeper Policy",description:"Constraint template to require non-root containers",code:`apiVersion: templates.gatekeeper.sh/v1beta1
kind: ConstraintTemplate
metadata:
  name: k8snonrootcontainers
spec:
  crd:
    spec:
      names:
        kind: K8sNonRootContainers
  targets:
    - target: admission.k8s.gatekeeper.sh
      rego: |
        package k8snonrootcontainers

        violation[{"msg": msg}] {
          container := input.review.object.spec.containers[_]
          not container.securityContext.runAsNonRoot
          msg := sprintf("Container %v must set securityContext.runAsNonRoot=true", [container.name])
        }
---
apiVersion: constraints.gatekeeper.sh/v1beta1
kind: K8sNonRootContainers
metadata:
  name: require-non-root-containers
spec:
  match:
    kinds:
      - apiGroups: [""]
        kinds: ["Pod"]
      - apiGroups: ["apps"]
        kinds: ["Deployment", "StatefulSet", "DaemonSet"]`},{title:"Falco Runtime Security Rules",description:"Custom Falco rules for detecting suspicious activities",code:`- rule: Terminal Shell in Container
  desc: A shell was spawned by a container with an attached terminal
  condition: >-
    container and
    shell_procs and container_entrypoint
    and interactive
    and not user_expected_terminal_shell_in_container_conditions
  output: >-
    A shell was spawned in a container with an attached terminal (user=%user.name
    %container.info shell=%proc.name parent=%proc.pname cmdline=%proc.cmdline
    terminal=%proc.tty container_id=%container.id image=%container.image.repository)
  priority: NOTICE
  tags: [container, shell, mitre_execution]

- rule: Detect crypto miners
  desc: Detect crypto-mining activities
  condition: >-
    spawned_process and
    (proc.name in (crypto_mining_procs) or
     proc.cmdline contains "stratum+tcp://" or
     proc.cmdline contains "--algo=" or
     proc.cmdline contains "--pool" or
     proc.cmdline contains "--addr")
  output: >-
    Possible crypto miner detected (user=%user.name command=%proc.cmdline
    container=%container.id image=%container.image.repository)
  priority: WARNING
  tags: [process, mitre_execution, mitre_persistence]`}],outputs:[{title:"Kubernetes Security Scanning Layers",content:`+---------------------------------------------+
|                                             |
|            COMPLIANCE SCANNING              |
|  (CIS Benchmarks, NIST, PCI-DSS, HIPAA)    |
|                                             |
+---------------------------------------------+
                     |
                     ▼
+---------------------------------------------+
|                                             |
|           INFRASTRUCTURE SCANNING           |
|    (Cluster configuration, RBAC, etc.)      |
|                                             |
+---------------------------------------------+
                     |
                     ▼
+---------------------------------------------+
|                                             |
|              IMAGE SCANNING                 |
|     (Vulnerabilities, malware, secrets)     |
|                                             |
+---------------------------------------------+
                     |
                     ▼
+---------------------------------------------+
|                                             |
|            RUNTIME SECURITY                 |
|   (Behavior monitoring, anomaly detection)  |
|                                             |
+---------------------------------------------+`},{title:"Common Kubernetes Security Issues",description:"Frequently detected security issues in Kubernetes environments",content:`1. RBAC Misconfigurations
   - Over-permissive roles and bindings
   - Use of cluster-admin for regular operations

2. Workload Security Issues
   - Running containers as root
   - Privileged containers
   - Mounting sensitive host paths
   - Containers with dangerous capabilities

3. Network Security Gaps
   - Missing Network Policies
   - Exposed sensitive services
   - Unencrypted communications

4. Secret Management Problems
   - Hardcoded credentials in images or manifests
   - Unencrypted secrets in etcd
   - Over-sharing of secrets across namespaces

5. Supply Chain Vulnerabilities
   - Outdated base images with CVEs
   - Untrusted image sources
   - Lack of image signing and verification

6. Misconfigured Control Plane
   - Insecure API server settings
   - Disabled audit logging
   - Kubelet authentication issues`}]}},Xo={prometheusGrafana:{title:"Prometheus & Grafana",description:"Monitoring and visualization for Kubernetes clusters",definition:"Prometheus is an open-source monitoring and alerting toolkit, while Grafana is a multi-platform analytics and interactive visualization web application. Together, they form a powerful monitoring solution for Kubernetes.",detailedDescription:"Prometheus collects metrics from configured targets at given intervals, evaluates rule expressions, displays results, and can trigger alerts when specified conditions are observed. It uses a pull-based model, scraping metrics endpoints exposed by applications and Kubernetes components. Grafana connects to Prometheus as a data source and provides rich visualization capabilities through customizable dashboards. The combination enables comprehensive monitoring of cluster health, application performance, and resource utilization, with features for alerting, querying, and visualization.",useCases:["Cluster-wide resource utilization monitoring","Application performance metrics collection and visualization","Alerting on threshold violations and anomalies","Capacity planning and trend analysis","SLO/SLI monitoring and reporting"],commands:[{description:"Install Prometheus and Grafana using Helm",command:`helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/kube-prometheus-stack`,output:`NAME: prometheus
LAST DEPLOYED: Wed Feb 15 10:00:00 2023
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
kube-prometheus-stack has been installed. Check its status by running:
  kubectl --namespace default get pods -l "release=prometheus"`},{description:"Port-forward to access Prometheus UI",command:"kubectl port-forward svc/prometheus-kube-prometheus-prometheus 9090:9090",output:`Forwarding from 127.0.0.1:9090 -> 9090
Forwarding from [::1]:9090 -> 9090`},{description:"Port-forward to access Grafana",command:"kubectl port-forward svc/prometheus-grafana 3000:80",output:`Forwarding from 127.0.0.1:3000 -> 3000
Forwarding from [::1]:3000 -> 3000`},{description:"Get Grafana admin password",command:'kubectl get secret prometheus-grafana -o jsonpath="{.data.admin-password}" | base64 --decode',output:"prom-operator"}],examples:[{title:"Prometheus Configuration",description:"Basic Prometheus configuration for Kubernetes monitoring",code:`apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
      evaluation_interval: 15s

    scrape_configs:
      - job_name: 'kubernetes-apiservers'
        kubernetes_sd_configs:
        - role: endpoints
        scheme: https
        tls_config:
          ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
        relabel_configs:
        - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
          action: keep
          regex: default;kubernetes;https

      - job_name: 'kubernetes-nodes'
        kubernetes_sd_configs:
        - role: node
        relabel_configs:
        - action: labelmap
          regex: __meta_kubernetes_node_label_(.+)
        - target_label: __address__
          replacement: kubernetes.default.svc:443
        - source_labels: [__meta_kubernetes_node_name]
          regex: (.+)
          target_label: __metrics_path__
          replacement: /api/v1/nodes/$1/proxy/metrics`},{title:"Prometheus ServiceMonitor",description:"Custom resource to define how services should be monitored",code:`apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: example-app
  labels:
    team: frontend
spec:
  selector:
    matchLabels:
      app: example-app
  endpoints:
  - port: web
    interval: 30s
    path: /metrics`},{title:"PrometheusRule for Alerting",description:"Alert rules definition for Prometheus",code:`apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: example-alert-rules
  labels:
    prometheus: example
    role: alert-rules
spec:
  groups:
  - name: example
    rules:
    - alert: HighRequestLatency
      expr: job:request_latency_seconds:mean5m{job="myjob"} > 0.5
      for: 10m
      labels:
        severity: page
      annotations:
        summary: High request latency
        description: Job {{ $labels.job }} has a request latency above 500ms (current value: {{ $value }}s)`},{title:"Grafana Dashboard JSON",description:"Example of a Grafana dashboard configuration",code:`{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "gnetId": null,
  "graphTooltip": 0,
  "id": 1,
  "links": [],
  "panels": [
    {
      "alert": {
        "alertRuleTags": {},
        "conditions": [
          {
            "evaluator": {
              "params": [
                80
              ],
              "type": "gt"
            },
            "operator": {
              "type": "and"
            },
            "query": {
              "params": [
                "A",
                "5m",
                "now"
              ]
            },
            "reducer": {
              "params": [],
              "type": "avg"
            },
            "type": "query"
          }
        ],
        "executionErrorState": "alerting",
        "for": "5m",
        "frequency": "1m",
        "handler": 1,
        "name": "CPU Usage alert",
        "noDataState": "no_data",
        "notifications": []
      },
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 9,
        "w": 12,
        "x": 0,
        "y": 0
      },
      "hiddenSeries": false,
      "id": 2,
      "legend": {
        "avg": false,
        "current": false,
        "max": false,
        "min": false,
        "show": true,
        "total": false,
        "values": false
      },
      "lines": true,
      "linewidth": 1,
      "nullPointMode": "null",
      "options": {
        "alertThreshold": true
      },
      "percentage": false,
      "pluginVersion": "7.2.0",
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "sum(rate(container_cpu_usage_seconds_total{namespace="default"}[5m])) by (pod) / sum(kube_pod_container_resource_limits_cpu_cores{namespace="default"}) by (pod) * 100",
          "interval": "",
          "legendFormat": "{{pod}}",
          "refId": "A"
        }
      ],
      "thresholds": [
        {
          "colorMode": "critical",
          "fill": true,
          "line": true,
          "op": "gt",
          "value": 80
        }
      ],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "CPU Usage",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "percent",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    }
  ],
  "schemaVersion": 26,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": []
  },
  "time": {
    "from": "now-6h",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "",
  "title": "Kubernetes Pod Monitoring",
  "uid": "kubernetes-pod-monitoring",
  "version": 1
}`}],outputs:[{title:"Prometheus Architecture",content:`+----------------+      +----------------+
|                |      |                |
|  Prometheus    |      |    Alertmanager|
|  Server        |----->|                |
|                |      |                |
+-------+--------+      +----------------+
        |
        | Scrapes
        ▼
+-------+--------+
|                |
|  Exporters &   |
|  /metrics      |
|  Endpoints     |
|                |
+----------------+
        ^
        | Instruments
        |
+-------+--------+
|                |
|  Applications  |
|                |
+----------------+
        ^
        | Queries
        |
+-------+--------+
|                |
|    Grafana     |
|                |
+----------------+`},{title:"Prometheus Query Examples",description:"Common PromQL queries for Kubernetes monitoring",content:`# CPU usage by pod
sum(rate(container_cpu_usage_seconds_total{namespace="default"}[5m])) by (pod)

# Memory usage by pod
sum(container_memory_usage_bytes{namespace="default"}) by (pod)

# Disk usage
sum(container_fs_usage_bytes{device=~"^/dev/.*$"}) by (pod)

# Network received bytes
sum(rate(container_network_receive_bytes_total[5m])) by (pod)

# HTTP request rate
sum(rate(http_requests_total[5m])) by (handler)

# 95th percentile request latency
histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))

# Error rate
sum(rate(http_requests_total{status_code=~"5.."}[5m])) / sum(rate(http_requests_total[5m]))`}]},centralizedLogging:{title:"Centralized Logging",description:"Collecting, processing, and analyzing logs from across the cluster",definition:"Centralized logging in Kubernetes is the practice of aggregating logs from all cluster components, nodes, and applications into a unified system for storage, search, and analysis.",detailedDescription:"Kubernetes generates logs from various sources: application containers, system components, and the control plane. A centralized logging solution typically consists of log collection agents (like Fluentd or Filebeat) running on each node, a log aggregation and processing system (like Elasticsearch or Loki), and a visualization interface (like Kibana or Grafana). The EFK (Elasticsearch, Fluentd, Kibana) and PLG (Promtail, Loki, Grafana) stacks are popular implementations. These systems enable searching, filtering, and analyzing logs across the entire cluster, making troubleshooting and monitoring more efficient.",useCases:["Troubleshooting application issues across distributed services","Security monitoring and threat detection","Compliance and audit requirements","Performance analysis and optimization","User activity tracking and business analytics"],commands:[{description:"Install Elasticsearch and Kibana using Helm",command:`helm repo add elastic https://helm.elastic.co
helm install elasticsearch elastic/elasticsearch
helm install kibana elastic/kibana`,output:`NAME: elasticsearch
LAST DEPLOYED: Wed Feb 15 11:00:00 2023
NAMESPACE: default
STATUS: deployed
REVISION: 1

NAME: kibana
LAST DEPLOYED: Wed Feb 15 11:01:00 2023
NAMESPACE: default
STATUS: deployed
REVISION: 1`},{description:"Install Fluentd as DaemonSet",command:"kubectl apply -f fluentd-daemonset.yaml",output:"daemonset.apps/fluentd created"},{description:"Check if logging components are running",command:"kubectl get pods -l app=elasticsearch",output:`NAME                             READY   STATUS    RESTARTS   AGE
elasticsearch-master-0           1/1     Running   0          10m
elasticsearch-master-1           1/1     Running   0          10m
elasticsearch-master-2           1/1     Running   0          10m
elasticsearch-data-0             1/1     Running   0          10m
elasticsearch-data-1             1/1     Running   0          10m`},{description:"Port-forward to access Kibana",command:"kubectl port-forward svc/kibana-kibana 5601:5601",output:`Forwarding from 127.0.0.1:5601 -> 5601
Forwarding from [::1]:5601 -> 5601`}],examples:[{title:"Fluentd DaemonSet",description:"DaemonSet configuration to deploy Fluentd on all nodes",code:`apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd
  namespace: logging
  labels:
    app: fluentd
spec:
  selector:
    matchLabels:
      app: fluentd
  template:
    metadata:
      labels:
        app: fluentd
    spec:
      serviceAccount: fluentd
      serviceAccountName: fluentd
      tolerations:
      - key: node-role.kubernetes.io/master
        effect: NoSchedule
      containers:
      - name: fluentd
        image: fluent/fluentd-kubernetes-daemonset:v1.14-debian-elasticsearch7-1
        env:
          - name: FLUENT_ELASTICSEARCH_HOST
            value: "elasticsearch-master"
          - name: FLUENT_ELASTICSEARCH_PORT
            value: "9200"
          - name: FLUENT_ELASTICSEARCH_SCHEME
            value: "http"
          - name: FLUENTD_SYSTEMD_CONF
            value: "disable"
        resources:
          limits:
            memory: 512Mi
          requests:
            cpu: 100m
            memory: 200Mi
        volumeMounts:
        - name: varlog
          mountPath: /var/log
        - name: varlibdockercontainers
          mountPath: /var/lib/docker/containers
          readOnly: true
      terminationGracePeriodSeconds: 30
      volumes:
      - name: varlog
        hostPath:
          path: /var/log
      - name: varlibdockercontainers
        hostPath:
          path: /var/lib/docker/containers`},{title:"Fluentd ConfigMap",description:"Configuration for Fluentd to collect and forward logs",code:`apiVersion: v1
kind: ConfigMap
metadata:
  name: fluentd-config
  namespace: logging
data:
  fluent.conf: |
    <source>
      @type tail
      path /var/log/containers/*.log
      pos_file /var/log/fluentd-containers.log.pos
      tag kubernetes.*
      read_from_head true
      <parse>
        @type json
        time_format %Y-%m-%dT%H:%M:%S.%NZ
      </parse>
    </source>

    <filter kubernetes.**>
      @type kubernetes_metadata
      kubernetes_url https://kubernetes.default.svc
      bearer_token_file /var/run/secrets/kubernetes.io/serviceaccount/token
      ca_file /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    </filter>

    <match kubernetes.**>
      @type elasticsearch
      host elasticsearch-master
      port 9200
      logstash_format true
      logstash_prefix k8s-logs
      <buffer>
        @type file
        path /var/log/fluentd-buffers/kubernetes.system.buffer
        flush_mode interval
        retry_type exponential_backoff
        flush_thread_count 2
        flush_interval 5s
        retry_forever false
        retry_max_interval 30
        chunk_limit_size 2M
        queue_limit_length 8
        overflow_action block
      </buffer>
    </match>`},{title:"Loki Stack Helm Values",description:"Values file for deploying the Loki stack with Helm",code:`loki:
  enabled: true
  persistence:
    enabled: true
    size: 10Gi
  config:
    auth_enabled: false
    ingester:
      chunk_idle_period: 3m
      chunk_block_size: 262144
      chunk_retain_period: 1m
    limits_config:
      enforce_metric_name: false
      reject_old_samples: true
      reject_old_samples_max_age: 168h

promtail:
  enabled: true
  config:
    lokiAddress: http://{{ .Release.Name }}-loki:3100/loki/api/v1/push

grafana:
  enabled: true
  adminPassword: admin
  datasources:
    datasources.yaml:
      apiVersion: 1
      datasources:
      - name: Loki
        type: loki
        url: http://{{ .Release.Name }}-loki:3100
        access: proxy
        isDefault: true`},{title:"Elasticsearch Index Pattern",description:"Kibana configuration for Elasticsearch index pattern",code:`PUT _index_template/kubernetes
{
  "index_patterns": ["k8s-logs-*"],
  "template": {
    "settings": {
      "number_of_shards": 1,
      "number_of_replicas": 1
    },
    "mappings": {
      "properties": {
        "@timestamp": { "type": "date" },
        "kubernetes": {
          "properties": {
            "pod_name": { "type": "keyword" },
            "namespace_name": { "type": "keyword" },
            "container_name": { "type": "keyword" },
            "labels": {
              "properties": {
                "app": { "type": "keyword" }
              }
            }
          }
        },
        "log": { "type": "text" },
        "stream": { "type": "keyword" }
      }
    }
  }
}`}],outputs:[{title:"Centralized Logging Architecture",content:`+----------------+      +----------------+      +----------------+
|                |      |                |      |                |
|  Application   |      |  Application   |      |  Application   |
|  Pods          |      |  Pods          |      |  Pods          |
|                |      |                |      |                |
+-------+--------+      +-------+--------+      +-------+--------+
        |                       |                       |
        | Logs                  | Logs                  | Logs
        ▼                       ▼                       ▼
+-------+--------+      +-------+--------+      +-------+--------+
|                |      |                |      |                |
|  Fluentd/      |      |  Fluentd/      |      |  Fluentd/      |
|  Filebeat      |      |  Filebeat      |      |  Filebeat      |
|  (DaemonSet)   |      |  (DaemonSet)   |      |  (DaemonSet)   |
|                |      |                |      |                |
+-------+--------+      +-------+--------+      +-------+--------+
        |                       |                       |
        | Forward               | Forward               | Forward
        ▼                       ▼                       ▼
+------------------------------------------------------------------+
|                                                                  |
|                  Elasticsearch / Loki Cluster                    |
|                                                                  |
+---------------------------+----------------------------------+---+
                            |
                            | Query
                            ▼
                  +---------+----------+
                  |                    |
                  |  Kibana / Grafana  |
                  |                    |
                  +--------------------+`},{title:"Kibana Log Search Example",description:"Example of log search and filtering in Kibana",content:`# Search for error logs in the production namespace
kubernetes.namespace_name: "production" AND log: *error*

# Find logs from a specific pod
kubernetes.pod_name: "web-app-67d8fb7b58-2nlxv"

# Search for logs containing a specific request ID
log: "request-id: abc123def456"

# Find logs from a specific time range
@timestamp: [2023-02-15T10:00:00.000Z TO 2023-02-15T11:00:00.000Z] AND kubernetes.container_name: "api-server"

# Search for logs from pods with a specific label
kubernetes.labels.app: "frontend"

# Find HTTP 500 errors
log: "status=500" OR log: "HTTP/1.1 500"`}]},distributedTracing:{title:"Distributed Tracing",description:"End-to-end tracking of requests through microservices",definition:"Distributed tracing is a method used to profile and monitor applications, especially those built using a microservices architecture, by tracking a request as it flows through the various services.",detailedDescription:"Distributed tracing provides visibility into the entire lifecycle of requests in a distributed system. It works by assigning a unique identifier to each request, which is then propagated through all the services involved in handling that request. Each service adds its own span (a named, timed operation) to the trace. Popular tracing systems include Jaeger and Zipkin, which implement the OpenTelemetry or OpenTracing standards. These systems help identify performance bottlenecks, understand service dependencies, and troubleshoot failures in complex microservice architectures by visualizing the entire request flow and timing information.",useCases:["Performance optimization of microservice architectures","Root cause analysis for service failures","Understanding service dependencies and interactions","Identifying latency issues in request processing","Debugging complex distributed transactions"],commands:[{description:"Install Jaeger using the operator",command:`kubectl create namespace observability
kubectl apply -f https://github.com/jaegertracing/jaeger-operator/releases/download/v1.35.0/jaeger-operator.yaml -n observability`,output:`namespace/observability created
customresourcedefinition.apiextensions.k8s.io/jaegers.jaegertracing.io created
serviceaccount/jaeger-operator created
role.rbac.authorization.k8s.io/jaeger-operator created
rolebinding.rbac.authorization.k8s.io/jaeger-operator created
deployment.apps/jaeger-operator created`},{description:"Deploy a simple Jaeger instance",command:`kubectl apply -f - <<EOF
apiVersion: jaegertracing.io/v1
kind: Jaeger
metadata:
  name: simplest
EOF`,output:"jaeger.jaegertracing.io/simplest created"},{description:"Check Jaeger deployment status",command:"kubectl get pods -n observability",output:`NAME                               READY   STATUS    RESTARTS   AGE
jaeger-operator-66f9c7d7d4-vqtf7   1/1     Running   0          2m
simplest-collector-7c7b4f8b9-qpzpj   1/1     Running   0          1m
simplest-query-6d5c7d74d6-wltnm     1/1     Running   0          1m`},{description:"Port-forward to access Jaeger UI",command:"kubectl port-forward svc/simplest-query 16686:16686",output:`Forwarding from 127.0.0.1:16686 -> 16686
Forwarding from [::1]:16686 -> 16686`}],examples:[{title:"Jaeger Deployment",description:"Production-ready Jaeger deployment with Elasticsearch storage",code:`apiVersion: jaegertracing.io/v1
kind: Jaeger
metadata:
  name: jaeger-production
spec:
  strategy: production
  storage:
    type: elasticsearch
    elasticsearch:
      nodeCount: 3
      resources:
        requests:
          cpu: 1
          memory: 1Gi
        limits:
          memory: 1Gi
  ingress:
    enabled: true
    hosts:
      - jaeger.example.com
  agent:
    strategy: DaemonSet
  collector:
    replicas: 2
    resources:
      limits:
        memory: 1Gi
  query:
    replicas: 2
    resources:
      limits:
        memory: 512Mi`},{title:"OpenTelemetry Instrumentation",description:"Java application instrumented with OpenTelemetry",code:`// Add dependencies to build.gradle
implementation 'io.opentelemetry:opentelemetry-api:1.12.0'
implementation 'io.opentelemetry:opentelemetry-sdk:1.12.0'
implementation 'io.opentelemetry:opentelemetry-exporter-jaeger:1.12.0'
implementation 'io.opentelemetry:opentelemetry-semconv:1.12.0-alpha'

// Java code for OpenTelemetry configuration
import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.exporter.jaeger.JaegerGrpcSpanExporter;
import io.opentelemetry.sdk.OpenTelemetrySdk;
import io.opentelemetry.sdk.resources.Resource;
import io.opentelemetry.sdk.trace.SdkTracerProvider;
import io.opentelemetry.sdk.trace.export.BatchSpanProcessor;
import io.opentelemetry.semconv.resource.attributes.ResourceAttributes;

public class TracingConfig {
    private static final String SERVICE_NAME = "order-service";
    
    public static OpenTelemetry initOpenTelemetry() {
        // Create Jaeger exporter
        JaegerGrpcSpanExporter jaegerExporter = JaegerGrpcSpanExporter.builder()
            .setEndpoint("http://jaeger-collector:14250")
            .build();
            
        // Create resource with service name
        Resource resource = Resource.getDefault()
            .merge(Resource.create(Attributes.of(
                ResourceAttributes.SERVICE_NAME, SERVICE_NAME)));
                
        // Create tracer provider
        SdkTracerProvider tracerProvider = SdkTracerProvider.builder()
            .addSpanProcessor(BatchSpanProcessor.builder(jaegerExporter).build())
            .setResource(resource)
            .build();
            
        // Create OpenTelemetry instance
        OpenTelemetrySdk openTelemetry = OpenTelemetrySdk.builder()
            .setTracerProvider(tracerProvider)
            .build();
            
        // Add shutdown hook
        Runtime.getRuntime().addShutdownHook(new Thread(tracerProvider::close));
        
        return openTelemetry;
    }
    
    public static Tracer getTracer() {
        OpenTelemetry openTelemetry = initOpenTelemetry();
        return openTelemetry.getTracer(SERVICE_NAME);
    }
}`},{title:"Service with Tracing",description:"Example of a service with tracing implementation",code:`import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.context.Scope;

public class OrderService {
    private final Tracer tracer;
    private final PaymentService paymentService;
    private final InventoryService inventoryService;
    
    public OrderService(Tracer tracer, PaymentService paymentService, InventoryService inventoryService) {
        this.tracer = tracer;
        this.paymentService = paymentService;
        this.inventoryService = inventoryService;
    }
    
    public Order processOrder(String orderId, List<OrderItem> items) {
        // Create a span for the entire order processing
        Span orderSpan = tracer.spanBuilder("process-order")
            .setAttribute("orderId", orderId)
            .setAttribute("itemCount", items.size())
            .startSpan();
            
        try (Scope scope = orderSpan.makeCurrent()) {
            // Check inventory
            Span inventorySpan = tracer.spanBuilder("check-inventory")
                .startSpan();
            try (Scope inventoryScope = inventorySpan.makeCurrent()) {
                boolean available = inventoryService.checkAvailability(items);
                if (!available) {
                    inventorySpan.setAttribute("error", true);
                    inventorySpan.setAttribute("error.message", "Items not available");
                    throw new RuntimeException("Items not available");
                }
            } finally {
                inventorySpan.end();
            }
            
            // Process payment
            Span paymentSpan = tracer.spanBuilder("process-payment")
                .setAttribute("amount", calculateTotal(items))
                .startSpan();
            try (Scope paymentScope = paymentSpan.makeCurrent()) {
                paymentService.processPayment(orderId, calculateTotal(items));
            } finally {
                paymentSpan.end();
            }
            
            // Create order
            Order order = new Order(orderId, items, OrderStatus.COMPLETED);
            return order;
        } catch (Exception e) {
            orderSpan.setAttribute("error", true);
            orderSpan.setAttribute("error.message", e.getMessage());
            throw e;
        } finally {
            orderSpan.end();
        }
    }
    
    private double calculateTotal(List<OrderItem> items) {
        return items.stream().mapToDouble(item -> item.getPrice() * item.getQuantity()).sum();
    }
}`},{title:"OpenTelemetry Collector Configuration",description:"Configuration for the OpenTelemetry Collector",code:`apiVersion: v1
kind: ConfigMap
metadata:
  name: otel-collector-conf
  namespace: observability
data:
  otel-collector-config: |
    receivers:
      otlp:
        protocols:
          grpc:
            endpoint: 0.0.0.0:4317
          http:
            endpoint: 0.0.0.0:4318
      jaeger:
        protocols:
          thrift_http:
            endpoint: 0.0.0.0:14268
          grpc:
            endpoint: 0.0.0.0:14250

    processors:
      batch:
        timeout: 1s
        send_batch_size: 1024
      memory_limiter:
        check_interval: 1s
        limit_mib: 1000

    exporters:
      jaeger:
        endpoint: jaeger-production-collector-headless:14250
        tls:
          insecure: true
      logging:
        loglevel: debug

    service:
      pipelines:
        traces:
          receivers: [otlp, jaeger]
          processors: [memory_limiter, batch]
          exporters: [jaeger, logging]`}],outputs:[{title:"Distributed Trace Visualization",content:`Service: web-frontend | Operation: /checkout | Duration: 1.2s
├── Service: auth-service | Operation: validateToken | Duration: 150ms
├── Service: cart-service | Operation: getCartItems | Duration: 85ms
├── Service: order-service | Operation: createOrder | Duration: 750ms
│   ├── Service: inventory-service | Operation: checkAvailability | Duration: 120ms
│   ├── Service: payment-service | Operation: processPayment | Duration: 500ms
│   │   └── Service: payment-gateway | Operation: chargeCard | Duration: 450ms
│   └── Service: notification-service | Operation: sendConfirmation | Duration: 65ms
└── Service: analytics-service | Operation: recordPurchase | Duration: 30ms`},{title:"Trace Context Propagation",description:"How trace context is propagated between services",content:`1. Client sends request to Service A
   Headers: {}

2. Service A receives request
   - Generates trace ID: 7df6b76b8a71e05f
   - Generates span ID: 1a2b3c4d5e6f7g8h
   - Creates headers:
     traceparent: 00-7df6b76b8a71e05f-1a2b3c4d5e6f7g8h-01

3. Service A calls Service B
   Headers: {
     traceparent: 00-7df6b76b8a71e05f-9i8h7g6f5e4d3c2b-01
   }

4. Service B receives request
   - Extracts trace ID: 7df6b76b8a71e05f
   - Creates new span ID: 3j4k5l6m7n8o9p0q
   - Parent span ID: 9i8h7g6f5e4d3c2b

5. Service B calls Service C
   Headers: {
     traceparent: 00-7df6b76b8a71e05f-3j4k5l6m7n8o9p0q-01
   }

All spans are collected and sent to the tracing backend
where they are assembled into a complete trace using
the shared trace ID and parent-child span relationships.`}]},resourceMonitoring:{title:"Resource Monitoring",description:"Tracking and analyzing resource usage across the cluster",definition:"Resource monitoring in Kubernetes involves tracking CPU, memory, storage, and network usage across nodes, pods, and containers to ensure optimal performance and resource allocation.",detailedDescription:"Kubernetes resource monitoring provides visibility into how cluster resources are being utilized, helping administrators identify bottlenecks, optimize resource allocation, and plan for capacity. It typically involves collecting metrics from the Kubernetes API server, kubelet, and container runtime, as well as application-specific metrics. Tools like Prometheus with kube-state-metrics and node-exporter, Kubernetes Dashboard, and cloud provider monitoring solutions offer different approaches to resource monitoring. Effective monitoring includes setting resource requests and limits, implementing horizontal and vertical pod autoscaling, and establishing alerts for resource constraints.",useCases:["Capacity planning and resource optimization","Identifying resource bottlenecks and performance issues","Implementing autoscaling based on resource utilization","Cost allocation and chargeback in multi-tenant clusters","Preventing resource starvation and application outages"],commands:[{description:"View node resource usage",command:"kubectl top nodes",output:`NAME           CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
node-1        256m         6%     1.5Gi           20%
node-2        125m         3%     1.2Gi           15%
node-3        375m         9%     2.1Gi           28%`},{description:"View pod resource usage",command:"kubectl top pods -n default",output:`NAME                     CPU(cores)   MEMORY(bytes)
api-server-6d8fb7b58-2nlxv   25m          150Mi
db-5b96c7f97d-wglf2          75m          550Mi
web-app-67d8fb7b58-j9t7s    15m          120Mi`},{description:"View container resource usage within a pod",command:"kubectl top pod api-server-6d8fb7b58-2nlxv --containers",output:`POD                        NAME        CPU(cores)   MEMORY(bytes)
api-server-6d8fb7b58-2nlxv   api-server   20m          120Mi
api-server-6d8fb7b58-2nlxv   sidecar      5m           30Mi`},{description:"Install metrics-server",command:"kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml",output:`serviceaccount/metrics-server created
clusterrole.rbac.authorization.k8s.io/system:aggregated-metrics-reader created
clusterrole.rbac.authorization.k8s.io/system:metrics-server created
rolebinding.rbac.authorization.k8s.io/metrics-server-auth-reader created
clusterrolebinding.rbac.authorization.k8s.io/metrics-server:system:auth-delegator created
clusterrolebinding.rbac.authorization.k8s.io/system:metrics-server created
service/metrics-server created
deployment.apps/metrics-server created
apiservice.apiregistration.k8s.io/v1beta1.metrics.k8s.io created`}],examples:[{title:"Pod with Resource Requests and Limits",description:"Pod configuration with defined resource constraints",code:`apiVersion: v1
kind: Pod
metadata:
  name: resource-demo
spec:
  containers:
  - name: resource-demo-container
    image: nginx
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"`},{title:"Horizontal Pod Autoscaler",description:"HPA configuration based on CPU utilization",code:`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 80
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80`},{title:"Vertical Pod Autoscaler",description:"VPA configuration for automatic resource adjustment",code:`apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: db-vpa
spec:
  targetRef:
    apiVersion: "apps/v1"
    kind: Deployment
    name: db
  updatePolicy:
    updateMode: "Auto"
  resourcePolicy:
    containerPolicies:
    - containerName: "*"
      minAllowed:
        cpu: "100m"
        memory: "200Mi"
      maxAllowed:
        cpu: "1"
        memory: "1Gi"
      controlledResources: ["cpu", "memory"]`},{title:"ResourceQuota for Namespace",description:"Setting resource limits for an entire namespace",code:`apiVersion: v1
kind: ResourceQuota
metadata:
  name: team-quota
  namespace: team-a
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi
    pods: "20"
    services: "10"
    persistentvolumeclaims: "5"
    secrets: "10"
    configmaps: "10"`}],outputs:[{title:"Resource Monitoring Dashboard",content:`CLUSTER OVERVIEW
-----------------
Total Nodes: 5
Total CPU: 40 cores (Used: 24.5 cores, 61%)
Total Memory: 160 GB (Used: 120 GB, 75%)
Total Pods: 120/150

NODE UTILIZATION
---------------
node-1: CPU 85% | Memory 90% | Pods 25/30 | Disk 65%
node-2: CPU 75% | Memory 80% | Pods 28/30 | Disk 50%
node-3: CPU 45% | Memory 60% | Pods 20/30 | Disk 40%
node-4: CPU 55% | Memory 70% | Pods 22/30 | Disk 45%
node-5: CPU 40% | Memory 75% | Pods 25/30 | Disk 55%

NAMESPACE RESOURCE USAGE
----------------------
production: CPU 12.5 cores | Memory 60 GB | Pods 50
development: CPU 8.0 cores | Memory 40 GB | Pods 40
monitoring: CPU 2.5 cores | Memory 15 GB | Pods 15
kube-system: CPU 1.5 cores | Memory 5 GB | Pods 15

TOP RESOURCE CONSUMERS (PODS)
---------------------------
db-statefulset-0: CPU 2.0 cores | Memory 8 GB
api-gateway-deployment-7d8fb: CPU 1.5 cores | Memory 4 GB
cache-statefulset-0: CPU 1.2 cores | Memory 6 GB
analytics-deployment-3f9d7: CPU 1.0 cores | Memory 5 GB
web-deployment-5c8b9: CPU 0.8 cores | Memory 2 GB`},{title:"Resource Metrics PromQL Queries",description:"Common Prometheus queries for resource monitoring",content:`# Node CPU utilization
sum(rate(node_cpu_seconds_total{mode!="idle"}[5m])) by (instance) / 
count(node_cpu_seconds_total{mode="idle"}) by (instance) * 100

# Node memory utilization
(node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / 
node_memory_MemTotal_bytes * 100

# Node disk utilization
(1 - node_filesystem_avail_bytes{mountpoint="/"} / 
node_filesystem_size_bytes{mountpoint="/"}) * 100

# Pod CPU usage
sum(rate(container_cpu_usage_seconds_total{container!="", 
image!=""}[5m])) by (pod, namespace)

# Pod memory usage
sum(container_memory_working_set_bytes{container!="", 
image!=""}) by (pod, namespace)

# Container CPU usage vs request
sum(rate(container_cpu_usage_seconds_total{container!="", 
image!=""}[5m])) by (container, pod, namespace) / 
sum(kube_pod_container_resource_requests_cpu_cores) by 
(container, pod, namespace)

# Container memory usage vs limit
sum(container_memory_working_set_bytes{container!="", 
image!=""}) by (container, pod, namespace) / 
sum(kube_pod_container_resource_limits_memory_bytes) by 
(container, pod, namespace)`}]},alertManagement:{title:"Alert Management",description:"Setting up and managing alerts for cluster and application issues",definition:"Alert management in Kubernetes involves configuring, delivering, and handling notifications about potential issues or anomalies in the cluster or applications.",detailedDescription:"Alert management systems monitor metrics, logs, and events from Kubernetes clusters and applications, triggering notifications when predefined conditions are met. These systems typically include components for defining alert rules (like Prometheus AlertManager), routing and grouping alerts, handling notification delivery through various channels (email, Slack, PagerDuty), and managing alert lifecycles including silencing, inhibition, and escalation. Effective alert management requires balancing between detecting genuine issues early while avoiding alert fatigue from false positives or non-actionable notifications. Integration with incident management systems helps track resolution progress and capture post-incident learnings.",useCases:["Detecting and responding to infrastructure failures","Monitoring application performance degradation","Identifying security incidents and compliance violations","Preventing resource exhaustion through early warnings","Tracking SLO/SLI violations for service reliability"],commands:[{description:"Install Prometheus Alertmanager",command:"kubectl apply -f alertmanager.yaml",output:`configmap/alertmanager-config created
deployment.apps/alertmanager created
service/alertmanager created`},{description:"View active alerts",command:"curl -s http://prometheus-server:9090/api/v1/alerts | jq",output:`{
  "status": "success",
  "data": [
    {
      "labels": {
        "alertname": "HighCPULoad",
        "instance": "node-1:9100",
        "job": "node-exporter",
        "severity": "warning"
      },
      "annotations": {
        "description": "CPU load is above 80% for 5 minutes",
        "summary": "High CPU load on node-1"
      },
      "state": "firing",
      "activeAt": "2023-02-15T12:05:23.123Z",
      "value": "92.5"
    }
  ]
}`},{description:"Check Alertmanager status",command:"curl -s http://alertmanager:9093/api/v1/status | jq",output:`{
  "status": "success",
  "data": {
    "uptime": "1d 2h 35m 20s",
    "clusterStatus": {
      "status": "ready",
      "peers": [
        {
          "address": "172.17.0.5:9094",
          "name": "alertmanager-6fd4b86db4-8p4wz"
        }
      ]
    },
    "versionInfo": {
      "version": "0.24.0",
      "revision": "0.24.0",
      "branch": "HEAD",
      "buildUser": "root@37609b3a0e21",
      "buildDate": "20220203-13:49:13",
      "goVersion": "go1.17.6"
    },
    "config": {
      "original": "global:
  resolve_timeout: 5m
  slack_api_url: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'

route:
  group_by: ['alertname', 'job']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 12h
  receiver: 'slack-notifications'
  routes:
  - match:
      severity: critical
    receiver: 'pagerduty-critical'

receivers:
- name: 'slack-notifications'
  slack_configs:
  - channel: '#alerts'
    send_resolved: true
- name: 'pagerduty-critical'
  pagerduty_configs:
  - service_key: 'your_pagerduty_service_key'
"
    }
  }
}`},{description:"Create a PrometheusRule for alerts",command:"kubectl apply -f prometheus-rules.yaml",output:"prometheusrule.monitoring.coreos.com/kubernetes-resources created"}],examples:[{title:"Alertmanager Configuration",description:"Configuration for Prometheus Alertmanager",code:`global:
  resolve_timeout: 5m
  smtp_smarthost: 'smtp.example.org:587'
  smtp_from: 'alerts@example.org'
  smtp_auth_username: 'alertmanager'
  smtp_auth_password: 'password'
  slack_api_url: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'

templates:
  - '/etc/alertmanager/template/*.tmpl'

route:
  group_by: ['namespace', 'alertname']
  group_wait: 30s
  group_interval: 5m
  repeat_interval: 12h
  receiver: 'team-X-mails'
  routes:
  - match:
      severity: critical
    receiver: 'team-X-pagers'
    continue: true
  - match:
      severity: warning
    receiver: 'team-X-slack'
    continue: true

inhibit_rules:
- source_match:
    severity: 'critical'
  target_match:
    severity: 'warning'
  equal: ['alertname', 'namespace']

receivers:
- name: 'team-X-mails'
  email_configs:
  - to: 'team-X+alerts@example.org'
    send_resolved: true

- name: 'team-X-pagers'
  pagerduty_configs:
  - service_key: '<team-X-key>'

- name: 'team-X-slack'
  slack_configs:
  - channel: '#team-X-alerts'
    send_resolved: true`},{title:"Prometheus Alert Rules",description:"Alert rules for common Kubernetes issues",code:`apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: kubernetes-resources
  namespace: monitoring
  labels:
    prometheus: k8s
    role: alert-rules
spec:
  groups:
  - name: kubernetes-resources
    rules:
    - alert: KubernetesPodCrashLooping
      expr: rate(kube_pod_container_status_restarts_total[15m]) * 60 * 5 > 5
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes pod crash looping (instance {{ $labels.instance }})
        description: "Pod {{ $labels.namespace }}/{{ $labels.pod }} is crash looping
  VALUE = {{ $value }}
  LABELS = {{ $labels }}"

    - alert: KubernetesPodNotReady
      expr: sum by (namespace, pod) (max by(namespace, pod) (kube_pod_status_phase{phase=~"Pending|Unknown"}) * on(namespace, pod) group_left(owner_kind) topk by(namespace, pod) (1, max by(namespace, pod, owner_kind) (kube_pod_owner{owner_kind!="Job"}))) > 0
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes Pod not ready (instance {{ $labels.instance }})
        description: "Pod {{ $labels.namespace }}/{{ $labels.pod }} has been in a non-ready state for longer than 15 minutes.
  VALUE = {{ $value }}
  LABELS = {{ $labels }}"

    - alert: KubernetesDeploymentReplicasMismatch
      expr: kube_deployment_spec_replicas != kube_deployment_status_replicas_available
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes Deployment replicas mismatch (instance {{ $labels.instance }})
        description: "Deployment {{ $labels.namespace }}/{{ $labels.deployment }} has not matched the expected number of replicas for longer than 15 minutes.
  VALUE = {{ $value }}
  LABELS = {{ $labels }}"

    - alert: KubernetesStatefulsetReplicasMismatch
      expr: kube_statefulset_status_replicas_ready != kube_statefulset_status_replicas
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes StatefulSet replicas mismatch (instance {{ $labels.instance }})
        description: "StatefulSet {{ $labels.namespace }}/{{ $labels.statefulset }} has not matched the expected number of replicas for longer than 15 minutes.
  VALUE = {{ $value }}
  LABELS = {{ $labels }}"

    - alert: KubernetesPersistentvolumeclaimPending
      expr: kube_persistentvolumeclaim_status_phase{phase="Pending"} == 1
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes PersistentVolumeClaim pending (instance {{ $labels.instance }})
        description: "PersistentVolumeClaim {{ $labels.namespace }}/{{ $labels.persistentvolumeclaim }} is pending
  VALUE = {{ $value }}
  LABELS = {{ $labels }}"

    - alert: KubernetesNodeNotReady
      expr: kube_node_status_condition{condition="Ready",status="true"} == 0
      for: 15m
      labels:
        severity: critical
      annotations:
        summary: Kubernetes Node not ready (instance {{ $labels.instance }})
        description: "Node {{ $labels.node }} has been unready for more than 15 minutes.
  VALUE = {{ $value }}
  LABELS = {{ $labels }}"

    - alert: KubernetesMemoryPressure
      expr: kube_node_status_condition{condition="MemoryPressure",status="true"} == 1
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes memory pressure (instance {{ $labels.instance }})
        description: "Node {{ $labels.node }} has memory pressure
  VALUE = {{ $value }}
  LABELS = {{ $labels }}"

    - alert: KubernetesDiskPressure
      expr: kube_node_status_condition{condition="DiskPressure",status="true"} == 1
      for: 15m
      labels:
        severity: warning
      annotations:
        summary: Kubernetes disk pressure (instance {{ $labels.instance }})
        description: "Node {{ $labels.node }} has disk pressure
  VALUE = {{ $value }}
  LABELS = {{ $labels }}"
      }
    ]`,outputs:[{title:"Alert Notification Example",content:`[FIRING:2] KubernetesPodNotReady (default/web-app-67d8fb7b58-j9t7s warning)

Labels:
 - alertname = KubernetesPodNotReady
 - namespace = default
 - pod = web-app-67d8fb7b58-j9t7s
 - severity = warning

Annotations:
 - description = Pod default/web-app-67d8fb7b58-j9t7s has been in a non-ready state for longer than 15 minutes.
   VALUE = 1
   LABELS = map[namespace:default pod:web-app-67d8fb7b58-j9t7s]
 - summary = Kubernetes Pod not ready (instance monitoring-prometheus-kube-state-metrics-5d5cc9b8d8-s9qkp)

Source: http://prometheus-k8s-0:9090/graph?g0.expr=sum+by%28namespace%2C+pod%29+%28max+by%28namespace%2C+pod%29+%28kube_pod_status_phase%7Bphase%3D~%22Pending%7CUnknown%22%7D%29+%2A+on%28namespace%2C+pod%29+group_left%28owner_kind%29+topk+by%28namespace%2C+pod%29+%281%2C+max+by%28namespace%2C+pod%2C+owner_kind%29+%28kube_pod_owner%7Bowner_kind%21%3D%22Job%22%7D%29%29%29+%3E+0&g0.tab=1

Silence: https://alertmanager-main-0.alertmanager-operated:9093/#/silences/new?filter=%7Balertname%3D%22KubernetesPodNotReady%22%2C%20namespace%3D%22default%22%2C%20pod%3D%22web-app-67d8fb7b58-j9t7s%22%7D

(Sent at: 2023-02-15 14:05:23 UTC)`},{title:"Alert Management Workflow",content:`1. DETECTION
   - Prometheus scrapes metrics from targets
   - Alert rules evaluate metrics against thresholds
   - When conditions are met, alerts transition to FIRING state

2. NOTIFICATION
   - AlertManager receives firing alerts from Prometheus
   - Alerts are grouped based on labels (e.g., by service, severity)
   - Duplicate alerts are deduplicated
   - Notifications are sent to configured receivers

3. ROUTING
   - Alerts are routed based on labels and routing tree
   - Different teams/individuals receive relevant alerts
   - Critical alerts may be sent to multiple channels

4. SILENCING & INHIBITION
   - Maintenance windows use silences to suppress notifications
   - Related alerts can be inhibited when a more critical alert fires
   - Prevents alert storms during major outages

5. ESCALATION
   - Unacknowledged alerts can be escalated to additional receivers
   - Time-based escalation paths ensure critical issues get attention
   - Integration with on-call rotation systems

6. RESOLUTION
   - When alert condition no longer applies, alert resolves
   - Resolution notifications sent to same receivers
   - Incident tracking systems updated with resolution status`}]}]}},SP=[{id:"core-concepts",title:"Core Kubernetes Objects",description:"Deep dive into Pods, Services, and Deployments",icon:nv,topics:["Pods Lifecycle","Deployments & ReplicaSets","Services & Networking","ConfigMaps & Secrets","Namespaces"],interactive:["Pod Simulator","Service Discovery Demo","Rolling Update Visualizer"],detailedContent:{overview:"Master the core objects that make up Kubernetes applications",prerequisites:["Kubernetes Fundamentals","YAML syntax knowledge"],learningOutcomes:["Create and manage Pods effectively","Implement service discovery patterns","Configure application deployments"]}},{id:"kubectl",title:"kubectl Command Mastery",description:"Become proficient with the Kubernetes CLI",icon:Rn,topics:["Basic Commands","Resource Management","Debugging & Troubleshooting","Advanced Queries","Best Practices"],interactive:["Command Simulator","Interactive Cheatsheet","Debug Scenarios"],detailedContent:{overview:"Master the kubectl CLI for efficient Kubernetes management",prerequisites:["Basic terminal knowledge","Kubernetes Fundamentals"],learningOutcomes:["Execute common kubectl operations","Debug application issues effectively","Automate cluster management tasks"]}},{id:"advanced",title:"Advanced Topics",description:"Scaling, monitoring, and production practices",icon:sr,topics:["Horizontal Pod Autoscaling","Persistent Storage","Helm Package Manager","Operators","Monitoring & Logging"],interactive:["HPA Simulator","Storage Provisioning","Helm Chart Builder"],detailedContent:{overview:"Production-ready Kubernetes patterns and enterprise features",prerequisites:["Core Kubernetes Objects","kubectl proficiency"],learningOutcomes:["Implement auto-scaling strategies","Manage persistent data effectively","Deploy production monitoring"]}}],CP={basic:{title:"Basic Commands",commands:[{command:"kubectl get pods",description:"List all pods in current namespace",syntax:"kubectl get pods [flags]",example:"kubectl get pods -o wide",category:"Get Resources"},{command:"kubectl describe pod",description:"Show detailed information about a pod",syntax:"kubectl describe pod <pod-name>",example:"kubectl describe pod my-app-12345",category:"Inspect Resources"},{command:"kubectl logs",description:"Print logs from a pod",syntax:"kubectl logs <pod-name> [flags]",example:"kubectl logs my-app-12345 -f",category:"Debug"},{command:"kubectl exec",description:"Execute commands in a container",syntax:"kubectl exec <pod-name> -- <command>",example:"kubectl exec my-app-12345 -- /bin/bash",category:"Debug"}]},deployment:{title:"Deployment Commands",commands:[{command:"kubectl create deployment",description:"Create a new deployment",syntax:"kubectl create deployment <name> --image=<image>",example:"kubectl create deployment nginx --image=nginx:1.20",category:"Create"},{command:"kubectl scale deployment",description:"Scale a deployment",syntax:"kubectl scale deployment <name> --replicas=<count>",example:"kubectl scale deployment nginx --replicas=3",category:"Scale"}]},service:{title:"Service Commands",commands:[{command:"kubectl expose deployment",description:"Create a service for a deployment",syntax:"kubectl expose deployment <name> --port=<port>",example:"kubectl expose deployment nginx --port=80 --type=LoadBalancer",category:"Expose"},{command:"kubectl get services",description:"List all services",syntax:"kubectl get services [flags]",example:"kubectl get services -o wide",category:"Get Resources"}]},management:{title:"Resource Management",commands:[{command:"kubectl apply",description:"Apply configuration from file",syntax:"kubectl apply -f <filename>",example:"kubectl apply -f deployment.yaml",category:"Apply"},{command:"kubectl delete",description:"Delete resources",syntax:"kubectl delete <resource> <name>",example:"kubectl delete pod my-app-12345",category:"Delete"}]}},of=[{id:"networking",title:"Networking & Ingress",icon:fs,description:"CNI, Service Mesh, Ingress Controllers",color:"from-primary to-electric-blue",subtopics:["Pod Networking (CNI)","Service Types & Load Balancing","Ingress Controllers (Nginx, Traefik)","Network Policies","Service Mesh (Istio, Linkerd)"]},{id:"storage",title:"Persistent Storage",icon:Ui,description:"PVs, PVCs, Storage Classes",color:"from-accent to-cyber-purple",subtopics:["Persistent Volumes (PV)","Persistent Volume Claims (PVC)","Storage Classes","Dynamic Provisioning","StatefulSet Storage"]},{id:"security",title:"Security & RBAC",icon:Hc,description:"Security best practices and access control",color:"from-tech-green to-primary",subtopics:["Role-Based Access Control (RBAC)","Pod Security Standards","Network Policies","Secrets Management","Security Scanning"]},{id:"monitoring",title:"Monitoring & Logging",icon:s1,description:"Observability and debugging",color:"from-cyber-purple to-accent",subtopics:["Prometheus & Grafana","Centralized Logging","Distributed Tracing","Resource Monitoring","Alert Management"]}],NP=["kubectl get pods","kubectl get nodes","kubectl describe pod nginx","kubectl apply -f deployment.yaml","kubectl get services","kubectl logs nginx-deployment-1","kubectl get pods -o wide","kubectl describe pod my-app-12345","kubectl logs my-app-12345 -f","kubectl exec my-app-12345 -- /bin/bash","kubectl create deployment nginx --image=nginx:1.20","kubectl scale deployment nginx --replicas=3","kubectl create service loadbalancer nginx --tcp=80","kubectl get services -o wide","kubectl delete pod my-app-12345","kubectl delete deployment nginx","kubectl delete service nginx-svc","kubectl get namespaces","kubectl top pods -n marketing","kubectl get events --sort-by='.lastTimestamp'","kubectl get cs","kubectl get pods -n kube-system","kubectl top nodes","kubectl config current-context"],PP={"kubectl get pods":`NAME                      READY   STATUS    RESTARTS   AGE
nginx-deployment-1        1/1     Running   0          2m
web-app-2                 1/1     Running   0          1m
api-service-3             1/1     Running   0          3m`,"kubectl get nodes":`NAME            STATUS   ROLES           AGE   VERSION
control-plane   Ready    control-plane   1d    v1.28.0
worker-1        Ready    <none>          1d    v1.28.0
worker-2        Ready    <none>          1d    v1.28.0`,"kubectl apply -f deployment.yaml":"deployment.apps/nginx-deployment created","kubectl get services":`NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   1d
nginx-svc    ClusterIP   10.96.1.100     <none>        80/TCP    2m`,"kubectl describe pod nginx-deployment-1":`Name:         nginx-deployment-1
Namespace:    default
Priority:     0
Node:         worker-1/192.168.1.101
Start Time:   Wed, 17 Sep 2025 01:47:52 +0600
Labels:       app=nginx
Annotations:  <none>
Status:       Running
IP:           10.244.1.4
Containers:
  nginx:
    Container ID:  containerd://12345abcdef67890
    Image:         nginx:1.25
    Port:          80/TCP
    Host Port:     0/TCP
    State:         Running
      Started:     Wed, 17 Sep 2025 01:47:53 +0600
    Ready:         True
    Restart Count: 0
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  2m    default-scheduler  Successfully assigned default/nginx-deployment-1 to worker-1
  Normal  Pulling    2m    kubelet            Pulling image "nginx:1.25"
  Normal  Pulled     2m    kubelet            Successfully pulled image "nginx:1.25"
  Normal  Created    2m    kubelet            Created container nginx
  Normal  Started    2m    kubelet            Started container nginx`,"kubectl logs nginx-deployment-1":`127.0.0.1 - - [17/Sep/2025:01:48:10 +0600] "GET / HTTP/1.1" 200 612 "-" "curl/7.81.0" "-"
127.0.0.1 - - [17/Sep/2025:01:48:35 +0600] "GET /index.html HTTP/1.1" 200 612 "-" "Mozilla/5.0" "-"`,"kubectl get pods -o wide":`NAME                     READY   STATUS    RESTARTS   AGE   IP           NODE       NOMINATED NODE   READINESS GATES
my-app-12345             1/1     Running   0          12m   10.244.1.5   worker-1   <none>           <none>
nginx-6c6c4d6c9f-jklmn   1/1     Running   0          5m    10.244.2.8   worker-2   <none>           <none>
nginx-6c6c4d6c9f-pqrst   1/1     Running   0          5m    10.244.1.6   worker-1   <none>           <none>
nginx-6c6c4d6c9f-uvwxyz   1/1     Running   0          5m    10.244.2.9   worker-2   <none>           <none>`,"kubectl describe pod my-app-12345":`Name:         my-app-12345
Namespace:    default
Priority:     0
Node:         worker-1/192.168.1.101
Start Time:   Wed, 17 Sep 2025 01:58:10 +0600
Labels:       app=my-app
Status:       Running
IP:           10.244.1.5
Containers:
  my-app-container:
    Image:         my-app:latest
    Port:          8080/TCP
    Host Port:     0/TCP
    State:         Running
      Started:     Wed, 17 Sep 2025 01:58:12 +0600
    Ready:         True
    Restart Count: 0
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  12m   default-scheduler  Successfully assigned default/my-app-12345 to worker-1
  Normal  Pulled     12m   kubelet            Container image "my-app:latest" already present on machine
  Normal  Created    12m   kubelet            Created container my-app-container
  Normal  Started    12m   kubelet            Started container my-app-container`,"kubectl logs my-app-12345 -f":`[INFO] 2025-09-17T02:10:05Z: Application starting...
[INFO] 2025-09-17T02:10:06Z: Database connection successful.
[INFO] 2025-09-17T02:10:11Z: Received request for user ID 101.
[WARN] 2025-09-17T02:10:12Z: User ID 101 has an expired subscription.
(Note: This command would hang and continue streaming new logs)`,"kubectl exec my-app-12345 -- /bin/bash":`(Note: This command typically opens an interactive shell inside the container. 
The user's terminal prompt would change, for example:)
root@my-app-12345:/app#`,"kubectl create deployment nginx --image=nginx:1.20":"deployment.apps/nginx created","kubectl scale deployment nginx --replicas=3":"deployment.apps/nginx scaled","kubectl create service loadbalancer nginx --tcp=80":"service/nginx created","kubectl get services -o wide":`NAME         TYPE           CLUSTER-IP      EXTERNAL-IP      PORT(S)        AGE   SELECTOR
kubernetes   ClusterIP      10.96.0.1       <none>           443/TCP        2d    <none>
nginx        LoadBalancer   10.108.15.201   52.140.12.103    80:31189/TCP   5m    app=nginx`,"kubectl delete pod my-app-12345":'pod "my-app-12345" deleted',"kubectl delete deployment nginx":'deployment.apps "nginx" deleted',"kubectl delete service nginx-svc":'service "nginx-svc" deleted',"kubectl get namespaces":`NAME              STATUS   AGE
default           Active   3d
kube-node-lease   Active   3d
kube-public       Active   3d
kube-system       Active   3d
marketing         Active   22h
production        Active   18h`,"kubectl top pods -n marketing":`NAME                              CPU(cores)   MEMORY(bytes)
promo-engine-7db7b8c8f-4g5h6     105m         128Mi
promo-engine-7db7b8c8f-9j1k2     110m         135Mi
user-session-d9b6c7c5-3l4m5     50m          90Mi`,"kubectl get cs":`NAME                 STATUS    MESSAGE   ERROR
scheduler            Healthy   ok
controller-manager   Healthy   ok
etcd-0               Healthy   {"health":"true","reason":""}`,"kubectl top nodes":`NAME            CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%
control-plane   250m         12%    1210Mi          60%
worker-1        110m         5%     980Mi           25%
worker-2        135m         6%     1050Mi          26%`,"kubectl get pods -n kube-system":`NAME                               READY   STATUS    RESTARTS   AGE
coredns-787d7bdfb4-wgtl5         1/1     Running   0          3d
etcd-control-plane               1/1     Running   0          3d
kube-apiserver-control-plane     1/1     Running   0          3d
kube-controller-mgr-control-plane 1/1    Running   0          3d
kube-proxy-abcde                 1/1     Running   0          3d
kube-scheduler-control-plane     1/1     Running   0          3d`,"kubectl config current-context":"minikube","kubectl get events --sort-by='.lastTimestamp'":`LAST SEEN   TYPE      REASON              OBJECT                                        MESSAGE
2m10s       Normal    Scheduled           pod/promo-engine-7db7b8c8f-9j1k2              Successfully assigned marketing/promo-engine-7db7b8c8f-9j1k2 to worker-2
2m5s        Normal    Pulling             pod/promo-engine-7db7b8c8f-9j1k2              Pulling image "my-registry/promo-engine:v1.2.5"
1m58s       Normal    Pulled              pod/promo-engine-7db7b8c8f-9j1k2              Successfully pulled image "my-registry/promo-engine:v1.2.5"
1m57s       Normal    Created             pod/promo-engine-7db7b8c8f-9j1k2              Created container promo-engine-container
1m56s       Normal    Started             pod/promo-engine-7db7b8c8f-9j1k2              Started container promo-engine-container
30s         Normal    ScalingReplicaSet   deployment/nginx                              Scaled up replica set nginx-6c6c4d6c9f to 3`},sf=[{title:"Pod Stuck in Pending State",category:"Pod Issues",symptoms:["Pod shows Pending status","Events show scheduling issues"],commonCauses:["Insufficient cluster resources","Node selector constraints","Pod resource requests too high","Persistent volume issues"],solutions:["Check cluster resource availability with kubectl top nodes","Verify node selectors and taints","Review resource requests and limits","Check persistent volume status"]},{title:"Service Not Accessible",category:"Networking",symptoms:["Cannot connect to service","Connection timeouts"],commonCauses:["Incorrect service selector","Pod not ready","Network policy blocking traffic","Ingress misconfiguration"],solutions:["Verify service selector matches pod labels","Check pod readiness probes","Review network policies","Validate ingress configuration"]}],EP={"Get Resources":"bg-primary/20 text-primary",Create:"bg-tech-green/20 text-tech-green",Delete:"bg-destructive/20 text-destructive",Debug:"bg-accent/20 text-accent",Monitor:"bg-cyber-purple/20 text-cyber-purple",Scale:"bg-electric-blue/20 text-electric-blue",Update:"bg-orange/20 text-orange",Apply:"bg-tech-green/20 text-tech-green",Expose:"bg-primary/20 text-primary","Inspect Resources":"bg-primary/20 text-primary"},TP=()=>{const[e,t]=m.useState(""),[n,r]=m.useState(of.map(T=>T.id)),[o,s]=m.useState(sf.map((T,D)=>`guide-${D}`)),[i,l]=m.useState(""),[c,u]=m.useState([]),[d,p]=m.useState(!1),h=m.useRef(null),f=m.useRef(null),[w,g]=m.useState(!1),[b,y]=m.useState(""),[v,x]=m.useState(""),[k,S]=m.useState(null);m.useEffect(()=>{h.current&&(h.current.scrollTop=h.current.scrollHeight)},[c,d]),m.useEffect(()=>{var T;(T=f.current)==null||T.focus()},[]);const N=T=>{r(D=>D.includes(T)?D.filter(R=>R!==T):[...D,T])},E=T=>{const D=`guide-${T}`;s(R=>R.includes(D)?R.filter(U=>U!==D):[...R,D])},C=async T=>{if(!T.trim()||d)return;p(!0),l("");const D={command:T,output:"Executing command..."};u(R=>[...R,D]),setTimeout(()=>{var U;const R=PP[T]||`Error: command not found: ${T}`;u($=>$.map((B,j)=>j===$.length-1?{...B,output:R}:B)),p(!1),(U=f.current)==null||U.focus()},1e3)},P=()=>{C(i)},I=()=>{u([]),l("")},V=(T,D)=>{let R;switch(T){case"networking":switch(D){case"Pod Networking (CNI)":R=qo.podNetworking;break;case"Service Types & Load Balancing":R=qo.serviceTypes;break;case"Ingress Controllers (Nginx, Traefik)":R=qo.ingressControllers;break;case"Network Policies":R=qo.networkPolicies;break;case"Service Mesh (Istio, Linkerd)":R=qo.serviceMesh;break}break;case"storage":switch(D){case"Persistent Volumes (PV)":R=Yo.persistentVolumes;break;case"Persistent Volume Claims (PVC)":R=Yo.persistentVolumeClaims;break;case"Storage Classes":R=Yo.storageClasses;break;case"Dynamic Provisioning":R=Yo.dynamicProvisioning;break;case"StatefulSet Storage":R=Yo.statefulSetStorage;break}break;case"security":switch(D){case"Role-Based Access Control (RBAC)":R=Qo.rbac;break;case"Pod Security Standards":R=Qo.podSecurity;break;case"Network Policies":R=Qo.networkPolicies;break;case"Secrets Management":R=Qo.secretsManagement;break;case"Security Scanning":R=Qo.securityScanning;break}break;case"monitoring":switch(D){case"Prometheus & Grafana":R=Xo.prometheusGrafana;break;case"Centralized Logging":R=Xo.centralizedLogging;break;case"Distributed Tracing":R=Xo.distributedTracing;break;case"Resource Monitoring":R=Xo.resourceMonitoring;break;case"Alert Management":R=Xo.alertManagement;break}break}R&&(y(T),x(D),S(R),g(!0))};return a.jsxs("section",{id:"learning-path",className:"py-24 relative",children:[k&&a.jsx(kP,{open:w,onOpenChange:g,topic:b,subtopic:v,data:k}),a.jsxs("div",{className:"container px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-16",children:[a.jsxs("h2",{className:"text-3xl lg:text-5xl font-bold mb-6",children:["Structured Learning"," ",a.jsx("span",{className:"gradient-text",children:"Path"})]}),a.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"Follow our comprehensive curriculum designed by industry experts. Each module builds upon the previous one with hands-on exercises."})]}),a.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-3",children:[a.jsx("div",{className:"p-2 bg-gradient-primary rounded-lg",children:a.jsx(nv,{className:"w-6 h-6 text-white"})}),"Core Kubernetes Objects"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Deep dive into Pods, Services, and Deployments"}),a.jsx("div",{className:"flex items-center justify-center gap-3 mt-4"})]}),a.jsx(Ee,{className:"card-gradient border-border/50",children:a.jsxs(De,{className:"p-8 space-y-8",children:[a.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:SP[1].topics.map((T,D)=>a.jsx(Ee,{className:"hover-lift cursor-pointer border border-border/30",children:a.jsxs(De,{className:"p-4",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx("div",{className:"w-3 h-3 bg-primary rounded-full"}),a.jsx("h4",{className:"font-medium",children:T})]}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Learn how to implement and manage ",T.toLowerCase()," in your Kubernetes clusters."]})]})},D))}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-lg font-semibold",children:"Troubleshooting Guides"}),a.jsx("div",{className:"space-y-4",children:sf.map((T,D)=>a.jsx(Ee,{className:"card-gradient border-border/50",children:a.jsxs(du,{open:o.includes(`guide-${D}`),onOpenChange:()=>E(D),children:[a.jsx(pu,{className:"w-full",children:a.jsx(Ls,{className:"cursor-pointer hover:bg-muted/20 transition-colors",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(hm,{className:"w-5 h-5 text-orange mt-1"}),a.jsxs("div",{className:"text-left",children:[a.jsx(Fs,{className:"text-lg",children:T.title}),a.jsx("div",{className:"flex items-center gap-2 mt-1",children:a.jsx(hu,{variant:"secondary",className:"text-xs",children:T.category})})]})]}),a.jsx(va,{className:"w-5 h-5 transition-transform",style:{transform:o.includes(`guide-${D}`)?"rotate(180deg)":"rotate(0deg)"}})]})})}),a.jsx(mu,{children:a.jsx(De,{className:"pt-0",children:a.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[a.jsxs("div",{children:[a.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[a.jsx(Jw,{className:"w-4 h-4 text-accent"}),"Symptoms"]}),a.jsx("ul",{className:"space-y-2 text-sm text-muted-foreground",children:T.symptoms.map((R,U)=>a.jsxs("li",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-orange rounded-full"}),R]},U))})]}),a.jsxs("div",{children:[a.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[a.jsx(hm,{className:"w-4 h-4 text-destructive"}),"Common Causes"]}),a.jsx("ul",{className:"space-y-2 text-sm text-muted-foreground",children:T.commonCauses.map((R,U)=>a.jsxs("li",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-destructive rounded-full"}),R]},U))})]}),a.jsxs("div",{children:[a.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[a.jsx(m1,{className:"w-4 h-4 text-tech-green"}),"Solutions"]}),a.jsx("ul",{className:"space-y-2 text-sm text-muted-foreground",children:T.solutions.map((R,U)=>a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-tech-green rounded-full mt-2 flex-shrink-0"}),R]},U))})]})]})})})]})},D))})]})]})})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-3",children:[a.jsx("div",{className:"p-2 bg-gradient-primary rounded-lg",children:a.jsx(Rn,{className:"w-6 h-6 text-white"})}),"kubectl Command Mastery"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Become proficient with the Kubernetes CLI"})]}),a.jsx(Ee,{className:"card-gradient border-border/50",children:a.jsxs(De,{className:"p-8 space-y-8",children:[a.jsxs("div",{className:"relative",children:[a.jsx(c1,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"}),a.jsx(Wd,{placeholder:"Search commands, descriptions, or categories...",value:e,onChange:T=>t(T.target.value),className:"pl-10 h-12 text-base"})]}),a.jsx("div",{className:"space-y-6",children:Object.entries(CP).map(([T,D])=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-lg font-semibold",children:D.title}),a.jsx("div",{className:"grid gap-4",children:D.commands.filter(R=>!e||R.command.toLowerCase().includes(e.toLowerCase())||R.description.toLowerCase().includes(e.toLowerCase())||R.category.toLowerCase().includes(e.toLowerCase())).map((R,U)=>a.jsx(Ee,{className:"card-gradient border-border/50 hover-lift transition-all",children:a.jsxs(De,{className:"p-6",children:[a.jsx("div",{className:"flex items-start justify-between mb-4",children:a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx("code",{className:"text-lg font-mono font-semibold text-primary",children:R.command}),a.jsx(hu,{className:EP[R.category],children:R.category})]}),a.jsx("p",{className:"text-muted-foreground mb-3",children:R.description})]})}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("h5",{className:"font-medium text-sm mb-2",children:"Syntax"}),a.jsx("code",{className:"text-xs text-muted-foreground bg-muted/30 p-2 rounded block",children:R.syntax})]}),a.jsxs("div",{children:[a.jsx("h5",{className:"font-medium text-sm mb-2",children:"Example"}),a.jsx("code",{className:"text-xs text-muted-foreground bg-muted/30 p-2 rounded block",children:R.example})]})]})]})},U))})]},T))})]})}),a.jsx(Ee,{children:a.jsxs(De,{children:[a.jsx("div",{className:"space-y-6 mt-12",children:a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-3",children:[a.jsx("div",{className:"p-2 bg-gradient-primary rounded-lg",children:a.jsx(qw,{className:"w-6 h-6 text-white"})}),"Visualize kubectl Commands"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Master Your Cluster with Visual Feedback"})]})}),a.jsxs("div",{className:"space-y-6 mt-4",children:[a.jsx("h5",{className:"font-medium",children:"Quick Commands"}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:NP.map((T,D)=>a.jsx(be,{variant:"outline",size:"sm",className:"font-mono text-xs justify-start",onClick:()=>C(T),children:T},D))})]}),a.jsx("div",{className:"space-y-6 mt-4",children:a.jsxs("div",{className:"bg-slate-900 rounded-lg border border-border/50 shadow-xl",children:[a.jsxs("div",{className:"flex items-center justify-between p-3 border-b border-slate-700 bg-slate-800 rounded-t-lg",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),a.jsx("span",{className:"ml-2 text-sm text-slate-300 font-medium",children:"kubectl-terminal"})]}),a.jsx(be,{size:"sm",variant:"ghost",onClick:I,className:"text-slate-300 hover:text-white hover:bg-slate-700 text-xs px-3 py-1 h-auto w-[111px]",children:"Clear"})]}),a.jsxs("div",{ref:h,className:"p-4 h-[400px] bg-slate-900 rounded-b-lg font-mono text-sm overflow-y-auto",onClick:()=>{var T;return(T=f.current)==null?void 0:T.focus()},children:[c.map((T,D)=>a.jsxs("div",{className:"mb-2",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-cyan-400",children:"admin@ubuntu:~$"}),a.jsx("span",{className:"text-white",children:T.command})]}),T.output==="Executing command..."&&d&&D===c.length-1?a.jsxs("div",{className:"flex items-center gap-2 text-yellow-400 mt-1",children:[a.jsx(r1,{className:"w-4 h-4 animate-spin"}),a.jsx("span",{children:T.output})]}):a.jsx("div",{className:"mt-1 text-green-400 whitespace-pre-wrap",children:T.output})]},D)),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-cyan-400",children:"admin@ubuntu:~$"}),a.jsxs("div",{className:"flex-1 relative",children:[a.jsx("input",{ref:f,type:"text",value:i,onChange:T=>l(T.target.value),placeholder:"",className:"bg-transparent text-white outline-none border-none w-full font-mono",onKeyDown:T=>{T.key==="Enter"&&P()},disabled:d,autoFocus:!0}),!d&&a.jsx("span",{className:"absolute top-0 left-0 w-2 h-5 bg-white animate-pulse",style:{left:`${i.length*.6}rem`}})]})]})]})]})})]})})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-3",children:[a.jsx("div",{className:"p-2 bg-gradient-primary rounded-lg",children:a.jsx(sr,{className:"w-6 h-6 text-white"})}),"Advanced Topics"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Scaling, monitoring, and production practices"})]}),a.jsx(Ee,{className:"card-gradient border-border/50",children:a.jsx(De,{className:"p-8",children:a.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:of.map(T=>a.jsx(Ee,{className:"card-gradient border-border/50 hover-lift cursor-pointer",children:a.jsxs(du,{open:n.includes(T.id),onOpenChange:()=>N(T.id),children:[a.jsx(pu,{className:"w-full",children:a.jsx(Ls,{className:"hover:bg-muted/20 transition-colors",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`p-3 rounded-xl bg-gradient-to-r ${T.color} shadow-glow`,children:a.jsx(T.icon,{className:"w-6 h-6 text-white"})}),a.jsxs("div",{className:"text-left",children:[a.jsx(Fs,{className:"text-lg",children:T.title}),a.jsx("p",{className:"text-sm text-muted-foreground",children:T.description})]})]}),a.jsx(va,{className:"w-5 h-5 transition-transform",style:{transform:n.includes(T.id)?"rotate(180deg)":"rotate(0deg)"}})]})})}),a.jsx(mu,{children:a.jsx(De,{className:"pt-0",children:a.jsx("div",{className:"space-y-4",children:a.jsx("div",{className:"grid gap-2",children:T.subtopics.map((D,R)=>a.jsxs("div",{className:"group/item p-3 terminal rounded-lg text-xs text-center hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30 hover:shadow-lg hover:scale-105 transform relative overflow-hidden",onClick:()=>V(T.id,D),children:[a.jsx("div",{className:"w-2 h-2 bg-primary rounded-full"}),a.jsx("span",{className:"text-sm",children:D})]},R))})})})})]})},T.id))})})})]})]})]})]})},RP=()=>a.jsx("footer",{id:"footer",className:"relative border-t border-border/50 bg-gradient-to-r from-card to-muted/30",children:a.jsxs("div",{className:"container px-4 sm:px-6 lg:px-8 py-16",children:[a.jsxs("div",{className:"grid lg:grid-cols-4 gap-12",children:[a.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-2xl font-bold gradient-text",children:"Kubernetes Bioscope"}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"The most comprehensive and interactive Kubernetes learning platform. Master container orchestration with cutting-edge visualizations."})]}),a.jsx("div",{className:"flex gap-3",children:[{icon:Zw,href:"#"},{icon:p1,href:"#"},{icon:n1,href:"#"},{icon:fm,href:"#"}].map((e,t)=>a.jsx(be,{size:"sm",variant:"ghost",className:"w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary transition-colors",children:a.jsx(e.icon,{className:"w-4 h-4"})},t))})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold",children:"Learning Path"}),a.jsx("div",{className:"space-y-3",children:["Getting Started","Core Concepts","kubectl Commands","Advanced Topics","Interactive Labs","Certification Guide"].map((e,t)=>a.jsx("div",{children:a.jsx("a",{href:"#",className:"text-muted-foreground hover:text-primary transition-colors text-sm",children:e})},t))})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold",children:"Resources"}),a.jsx("div",{className:"space-y-3",children:["Documentation","Command Reference","Troubleshooting","Best Practices","Community Forum","Blog & Updates"].map((e,t)=>a.jsx("div",{children:a.jsx("a",{href:"#",className:"text-muted-foreground hover:text-primary transition-colors text-sm",children:e})},t))})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold",children:"Stay Updated"}),a.jsx("p",{className:"text-muted-foreground text-sm",children:"Get the latest tutorials, tips, and Kubernetes updates delivered to your inbox."}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(Wd,{placeholder:"Enter your email",className:"bg-background/50 border-border/50"}),a.jsxs(be,{className:"w-full bg-gradient-primary text-white",children:[a.jsx(fm,{className:"w-4 h-4 mr-2"}),"Subscribe"]})]})]})]}),a.jsxs("div",{className:"mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[a.jsx("span",{children:"Made with"}),a.jsx(e1,{className:"w-4 h-4 text-red-500"}),a.jsx("span",{children:"for the Kubernetes community"})]}),a.jsxs("div",{className:"flex items-center gap-6 text-sm text-muted-foreground",children:[a.jsx("a",{href:"#",className:"hover:text-primary transition-colors",children:"Privacy Policy"}),a.jsx("a",{href:"#",className:"hover:text-primary transition-colors",children:"Terms of Service"}),a.jsx("span",{children:"© 2025 Kubernetes Bioscope. All rights reserved."})]})]})]})}),jP=()=>a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsx(rN,{}),a.jsx(wP,{}),a.jsx(TP,{}),a.jsx(RP,{})]}),AP=()=>{const e=oy();return m.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),a.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-100",children:a.jsxs("div",{className:"text-center",children:[a.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),a.jsx("p",{className:"mb-4 text-xl text-gray-600",children:"Oops! Page not found"}),a.jsx("a",{href:"/",className:"text-blue-500 underline hover:text-blue-700",children:"Return to Home"})]})})},MP=new VC,IP=()=>a.jsx(UC,{client:MP,children:a.jsxs(hC,{children:[a.jsx(Q1,{}),a.jsx(Tk,{}),a.jsxs(P2,{basename:"/kubernetes",children:[a.jsx(tN,{}),a.jsxs(S2,{children:[a.jsx(ou,{path:"/",element:a.jsx(jP,{})}),a.jsx(ou,{path:"*",element:a.jsx(AP,{})})]})]})]})});Tg(document.getElementById("root")).render(a.jsx(IP,{}));
