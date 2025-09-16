var Id=e=>{throw TypeError(e)};var nl=(e,t,n)=>t.has(e)||Id("Cannot "+n);var R=(e,t,n)=>(nl(e,t,"read from private field"),n?n.call(e):t.get(e)),J=(e,t,n)=>t.has(e)?Id("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),W=(e,t,n,r)=>(nl(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ae=(e,t,n)=>(nl(e,t,"access private method"),n);var qs=(e,t,n,r)=>({set _(o){W(e,t,o,n)},get _(){return R(e,t,r)}});function Iy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function Km(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qm={exports:{}},ba={},Ym={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=Symbol.for("react.element"),My=Symbol.for("react.portal"),Oy=Symbol.for("react.fragment"),Dy=Symbol.for("react.strict_mode"),Ly=Symbol.for("react.profiler"),Fy=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),zy=Symbol.for("react.forward_ref"),By=Symbol.for("react.suspense"),Uy=Symbol.for("react.memo"),$y=Symbol.for("react.lazy"),Md=Symbol.iterator;function Wy(e){return e===null||typeof e!="object"?null:(e=Md&&e[Md]||e["@@iterator"],typeof e=="function"?e:null)}var Qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xm=Object.assign,Jm={};function Po(e,t,n){this.props=e,this.context=t,this.refs=Jm,this.updater=n||Qm}Po.prototype.isReactComponent={};Po.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Po.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zm(){}Zm.prototype=Po.prototype;function au(e,t,n){this.props=e,this.context=t,this.refs=Jm,this.updater=n||Qm}var lu=au.prototype=new Zm;lu.constructor=au;Xm(lu,Po.prototype);lu.isPureReactComponent=!0;var Od=Array.isArray,ef=Object.prototype.hasOwnProperty,cu={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var r,o={},s=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)ef.call(t,r)&&!tf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ls,type:e,key:s,ref:i,props:o,_owner:cu.current}}function Gy(e,t){return{$$typeof:Ls,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function uu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ls}function Hy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dd=/\/+/g;function rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hy(""+e.key):t.toString(36)}function wi(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ls:case My:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+rl(i,0):r,Od(o)?(n="",e!=null&&(n=e.replace(Dd,"$&/")+"/"),wi(o,t,n,"",function(u){return u})):o!=null&&(uu(o)&&(o=Gy(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Dd,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Od(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+rl(s,l);i+=wi(s,t,n,c,o)}else if(c=Wy(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+rl(s,l++),i+=wi(s,t,n,c,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ys(e,t,n){if(e==null)return e;var r=[],o=0;return wi(e,r,"","",function(s){return t.call(n,s,o++)}),r}function Ky(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},Si={transition:null},qy={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Si,ReactCurrentOwner:cu};function rf(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Ys,forEach:function(e,t,n){Ys(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ys(e,function(){t++}),t},toArray:function(e){return Ys(e,function(t){return t})||[]},only:function(e){if(!uu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Po;Y.Fragment=Oy;Y.Profiler=Ly;Y.PureComponent=au;Y.StrictMode=Dy;Y.Suspense=By;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qy;Y.act=rf;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xm({},e.props),o=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=cu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)ef.call(t,c)&&!tf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ls,type:e.type,key:o,ref:s,props:r,_owner:i}};Y.createContext=function(e){return e={$$typeof:Vy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fy,_context:e},e.Consumer=e};Y.createElement=nf;Y.createFactory=function(e){var t=nf.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:zy,render:e}};Y.isValidElement=uu;Y.lazy=function(e){return{$$typeof:$y,_payload:{_status:-1,_result:e},_init:Ky}};Y.memo=function(e,t){return{$$typeof:Uy,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};Y.unstable_act=rf;Y.useCallback=function(e,t){return Ue.current.useCallback(e,t)};Y.useContext=function(e){return Ue.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ue.current.useEffect(e,t)};Y.useId=function(){return Ue.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ue.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};Y.useRef=function(e){return Ue.current.useRef(e)};Y.useState=function(e){return Ue.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ue.current.useTransition()};Y.version="18.3.1";Ym.exports=Y;var y=Ym.exports;const O=Km(y),du=Iy({__proto__:null,default:O},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy=y,Qy=Symbol.for("react.element"),Xy=Symbol.for("react.fragment"),Jy=Object.prototype.hasOwnProperty,Zy=Yy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,e0={key:!0,ref:!0,__self:!0,__source:!0};function of(e,t,n){var r,o={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Jy.call(t,r)&&!e0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Qy,type:e,key:s,ref:i,props:o,_owner:Zy.current}}ba.Fragment=Xy;ba.jsx=of;ba.jsxs=of;qm.exports=ba;var a=qm.exports,sf={exports:{}},rt={},af={exports:{}},lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,_){var L=A.length;A.push(_);e:for(;0<L;){var H=L-1>>>1,V=A[H];if(0<o(V,_))A[H]=_,A[L]=V,L=H;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var _=A[0],L=A.pop();if(L!==_){A[0]=L;e:for(var H=0,V=A.length,q=V>>>1;H<q;){var Q=2*(H+1)-1,xe=A[Q],Re=Q+1,Z=A[Re];if(0>o(xe,L))Re<V&&0>o(Z,xe)?(A[H]=Z,A[Re]=L,H=Re):(A[H]=xe,A[Q]=L,H=Q);else if(Re<V&&0>o(Z,L))A[H]=Z,A[Re]=L,H=Re;else break e}}return _}function o(A,_){var L=A.sortIndex-_.sortIndex;return L!==0?L:A.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var c=[],u=[],d=1,m=null,h=3,p=!1,w=!1,g=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(A){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=A)r(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(u)}}function S(A){if(g=!1,x(A),!w)if(n(c)!==null)w=!0,U(k);else{var _=n(u);_!==null&&G(S,_.startTime-A)}}function k(A,_){w=!1,g&&(g=!1,v(C),C=-1),p=!0;var L=h;try{for(x(_),m=n(c);m!==null&&(!(m.expirationTime>_)||A&&!z());){var H=m.callback;if(typeof H=="function"){m.callback=null,h=m.priorityLevel;var V=H(m.expirationTime<=_);_=e.unstable_now(),typeof V=="function"?m.callback=V:m===n(c)&&r(c),x(_)}else r(c);m=n(c)}if(m!==null)var q=!0;else{var Q=n(u);Q!==null&&G(S,Q.startTime-_),q=!1}return q}finally{m=null,h=L,p=!1}}var P=!1,N=null,C=-1,E=5,M=-1;function z(){return!(e.unstable_now()-M<E)}function j(){if(N!==null){var A=e.unstable_now();M=A;var _=!0;try{_=N(!0,A)}finally{_?D():(P=!1,N=null)}}else P=!1}var D;if(typeof f=="function")D=function(){f(j)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,B=T.port2;T.port1.onmessage=j,D=function(){B.postMessage(null)}}else D=function(){b(j,0)};function U(A){N=A,P||(P=!0,D())}function G(A,_){C=b(function(){A(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||p||(w=!0,U(k))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var L=h;h=_;try{return A()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,_){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=h;h=A;try{return _()}finally{h=L}},e.unstable_scheduleCallback=function(A,_,L){var H=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?H+L:H):L=H,A){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=L+V,A={id:d++,callback:_,priorityLevel:A,startTime:L,expirationTime:V,sortIndex:-1},L>H?(A.sortIndex=L,t(u,A),n(c)===null&&A===n(u)&&(g?(v(C),C=-1):g=!0,G(S,L-H))):(A.sortIndex=V,t(c,A),w||p||(w=!0,U(k))),A},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(A){var _=h;return function(){var L=h;h=_;try{return A.apply(this,arguments)}finally{h=L}}}})(lf);af.exports=lf;var t0=af.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0=y,nt=t0;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cf=new Set,ds={};function Sr(e,t){go(e,t),go(e+"Capture",t)}function go(e,t){for(ds[e]=t,e=0;e<t.length;e++)cf.add(t[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,r0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ld={},Fd={};function o0(e){return Gl.call(Fd,e)?!0:Gl.call(Ld,e)?!1:r0.test(e)?Fd[e]=!0:(Ld[e]=!0,!1)}function s0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function i0(e,t,n,r){if(t===null||typeof t>"u"||s0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,o,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var pu=/[\-:]([a-z])/g;function mu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pu,mu);je[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pu,mu);je[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pu,mu);je[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function fu(e,t,n,r){var o=je.hasOwnProperty(t)?je[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(i0(t,n,o,r)&&(n=null),r||o===null?o0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var un=n0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qs=Symbol.for("react.element"),Or=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),hu=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),df=Symbol.for("react.context"),gu=Symbol.for("react.forward_ref"),Kl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),vu=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),pf=Symbol.for("react.offscreen"),Vd=Symbol.iterator;function Mo(e){return e===null||typeof e!="object"?null:(e=Vd&&e[Vd]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,ol;function qo(e){if(ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ol=t&&t[1]||""}return`
`+ol+e}var sl=!1;function il(e,t){if(!e||sl)return"";sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),s=r.stack.split(`
`),i=o.length-1,l=s.length-1;1<=i&&0<=l&&o[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==s[l]){var c=`
`+o[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=l);break}}}finally{sl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qo(e):""}function a0(e){switch(e.tag){case 5:return qo(e.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function Yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dr:return"Fragment";case Or:return"Portal";case Hl:return"Profiler";case hu:return"StrictMode";case Kl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case df:return(e.displayName||"Context")+".Consumer";case uf:return(e._context.displayName||"Context")+".Provider";case gu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vu:return t=e.displayName||null,t!==null?t:Yl(e.type)||"Memo";case kn:t=e._payload,e=e._init;try{return Yl(e(t))}catch{}}return null}function l0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yl(t);case 8:return t===hu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function c0(e){var t=mf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=c0(e))}function ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ql(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hf(e,t){t=t.checked,t!=null&&fu(e,"checked",t,!1)}function Xl(e,t){hf(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jl(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jl(e,t,n){(t!=="number"||zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yo=Array.isArray;function Xr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ud(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Yo(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function gf(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $d(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ec(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Js,yf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Js=Js||document.createElement("div"),Js.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Js.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ps(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u0=["Webkit","ms","Moz","O"];Object.keys(es).forEach(function(e){u0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),es[t]=es[e]})});function xf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||es.hasOwnProperty(e)&&es[e]?(""+t).trim():t+"px"}function bf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=xf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var d0=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tc(e,t){if(t){if(d0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function nc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rc=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oc=null,Jr=null,Zr=null;function Wd(e){if(e=zs(e)){if(typeof oc!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Pa(t),oc(e.stateNode,e.type,t))}}function wf(e){Jr?Zr?Zr.push(e):Zr=[e]:Jr=e}function Sf(){if(Jr){var e=Jr,t=Zr;if(Zr=Jr=null,Wd(e),t)for(e=0;e<t.length;e++)Wd(t[e])}}function kf(e,t){return e(t)}function Cf(){}var al=!1;function Pf(e,t,n){if(al)return e(t,n);al=!0;try{return kf(e,t,n)}finally{al=!1,(Jr!==null||Zr!==null)&&(Cf(),Sf())}}function ms(e,t){var n=e.stateNode;if(n===null)return null;var r=Pa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var sc=!1;if(rn)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){sc=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{sc=!1}function p0(e,t,n,r,o,s,i,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ts=!1,Bi=null,Ui=!1,ic=null,m0={onError:function(e){ts=!0,Bi=e}};function f0(e,t,n,r,o,s,i,l,c){ts=!1,Bi=null,p0.apply(m0,arguments)}function h0(e,t,n,r,o,s,i,l,c){if(f0.apply(this,arguments),ts){if(ts){var u=Bi;ts=!1,Bi=null}else throw Error(I(198));Ui||(Ui=!0,ic=u)}}function kr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gd(e){if(kr(e)!==e)throw Error(I(188))}function g0(e){var t=e.alternate;if(!t){if(t=kr(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return Gd(o),e;if(s===r)return Gd(o),t;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=o,r=s;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=s;break}if(l===r){i=!0,r=o,n=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===n){i=!0,n=s,r=o;break}if(l===r){i=!0,r=s,n=o;break}l=l.sibling}if(!i)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Ef(e){return e=g0(e),e!==null?Tf(e):null}function Tf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tf(e);if(t!==null)return t;e=e.sibling}return null}var jf=nt.unstable_scheduleCallback,Hd=nt.unstable_cancelCallback,v0=nt.unstable_shouldYield,y0=nt.unstable_requestPaint,ve=nt.unstable_now,x0=nt.unstable_getCurrentPriorityLevel,xu=nt.unstable_ImmediatePriority,Rf=nt.unstable_UserBlockingPriority,$i=nt.unstable_NormalPriority,b0=nt.unstable_LowPriority,Af=nt.unstable_IdlePriority,wa=null,Ut=null;function w0(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(wa,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:C0,S0=Math.log,k0=Math.LN2;function C0(e){return e>>>=0,e===0?32:31-(S0(e)/k0|0)|0}var Zs=64,ei=4194304;function Qo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=Qo(l):(s&=i,s!==0&&(r=Qo(s)))}else i=n&~o,i!==0?r=Qo(i):s!==0&&(r=Qo(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,s=t&-t,o>=s||o===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),o=1<<n,r|=e[n],t&=~o;return r}function P0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Nt(s),l=1<<i,c=o[i];c===-1?(!(l&n)||l&r)&&(o[i]=P0(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function ac(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _f(){var e=Zs;return Zs<<=1,!(Zs&4194240)&&(Zs=64),e}function ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function E0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Nt(n),s=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~s}}function bu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function If(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mf,wu,Of,Df,Lf,lc=!1,ti=[],Dn=null,Ln=null,Fn=null,fs=new Map,hs=new Map,Pn=[],T0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(e,t){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":fs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hs.delete(t.pointerId)}}function Do(e,t,n,r,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[o]},t!==null&&(t=zs(t),t!==null&&wu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function j0(e,t,n,r,o){switch(t){case"focusin":return Dn=Do(Dn,e,t,n,r,o),!0;case"dragenter":return Ln=Do(Ln,e,t,n,r,o),!0;case"mouseover":return Fn=Do(Fn,e,t,n,r,o),!0;case"pointerover":var s=o.pointerId;return fs.set(s,Do(fs.get(s)||null,e,t,n,r,o)),!0;case"gotpointercapture":return s=o.pointerId,hs.set(s,Do(hs.get(s)||null,e,t,n,r,o)),!0}return!1}function Ff(e){var t=or(e.target);if(t!==null){var n=kr(t);if(n!==null){if(t=n.tag,t===13){if(t=Nf(n),t!==null){e.blockedOn=t,Lf(e.priority,function(){Of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rc=r,n.target.dispatchEvent(r),rc=null}else return t=zs(n),t!==null&&wu(t),e.blockedOn=n,!1;t.shift()}return!0}function qd(e,t,n){ki(e)&&n.delete(t)}function R0(){lc=!1,Dn!==null&&ki(Dn)&&(Dn=null),Ln!==null&&ki(Ln)&&(Ln=null),Fn!==null&&ki(Fn)&&(Fn=null),fs.forEach(qd),hs.forEach(qd)}function Lo(e,t){e.blockedOn===t&&(e.blockedOn=null,lc||(lc=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,R0)))}function gs(e){function t(o){return Lo(o,e)}if(0<ti.length){Lo(ti[0],e);for(var n=1;n<ti.length;n++){var r=ti[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dn!==null&&Lo(Dn,e),Ln!==null&&Lo(Ln,e),Fn!==null&&Lo(Fn,e),fs.forEach(t),hs.forEach(t),n=0;n<Pn.length;n++)r=Pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&(n=Pn[0],n.blockedOn===null);)Ff(n),n.blockedOn===null&&Pn.shift()}var eo=un.ReactCurrentBatchConfig,Gi=!0;function A0(e,t,n,r){var o=te,s=eo.transition;eo.transition=null;try{te=1,Su(e,t,n,r)}finally{te=o,eo.transition=s}}function _0(e,t,n,r){var o=te,s=eo.transition;eo.transition=null;try{te=4,Su(e,t,n,r)}finally{te=o,eo.transition=s}}function Su(e,t,n,r){if(Gi){var o=cc(e,t,n,r);if(o===null)yl(e,t,r,Hi,n),Kd(e,r);else if(j0(o,e,t,n,r))r.stopPropagation();else if(Kd(e,r),t&4&&-1<T0.indexOf(e)){for(;o!==null;){var s=zs(o);if(s!==null&&Mf(s),s=cc(e,t,n,r),s===null&&yl(e,t,r,Hi,n),s===o)break;o=s}o!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var Hi=null;function cc(e,t,n,r){if(Hi=null,e=yu(r),e=or(e),e!==null)if(t=kr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hi=e,null}function Vf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x0()){case xu:return 1;case Rf:return 4;case $i:case b0:return 16;case Af:return 536870912;default:return 16}default:return 16}}var In=null,ku=null,Ci=null;function zf(){if(Ci)return Ci;var e,t=ku,n=t.length,r,o="value"in In?In.value:In.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[s-r];r++);return Ci=o.slice(e,1<r?1-r:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function Yd(){return!1}function ot(e){function t(n,r,o,s,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ni:Yd,this.isPropagationStopped=Yd,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),t}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cu=ot(No),Vs=pe({},No,{view:0,detail:0}),I0=ot(Vs),cl,ul,Fo,Sa=pe({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fo&&(Fo&&e.type==="mousemove"?(cl=e.screenX-Fo.screenX,ul=e.screenY-Fo.screenY):ul=cl=0,Fo=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),Qd=ot(Sa),M0=pe({},Sa,{dataTransfer:0}),O0=ot(M0),D0=pe({},Vs,{relatedTarget:0}),dl=ot(D0),L0=pe({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),F0=ot(L0),V0=pe({},No,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z0=ot(V0),B0=pe({},No,{data:0}),Xd=ot(B0),U0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=W0[e])?!!t[e]:!1}function Pu(){return G0}var H0=pe({},Vs,{key:function(e){if(e.key){var t=U0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K0=ot(H0),q0=pe({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=ot(q0),Y0=pe({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),Q0=ot(Y0),X0=pe({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=ot(X0),Z0=pe({},Sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ex=ot(Z0),tx=[9,13,27,32],Nu=rn&&"CompositionEvent"in window,ns=null;rn&&"documentMode"in document&&(ns=document.documentMode);var nx=rn&&"TextEvent"in window&&!ns,Bf=rn&&(!Nu||ns&&8<ns&&11>=ns),Zd=" ",ep=!1;function Uf(e,t){switch(e){case"keyup":return tx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $f(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function rx(e,t){switch(e){case"compositionend":return $f(t);case"keypress":return t.which!==32?null:(ep=!0,Zd);case"textInput":return e=t.data,e===Zd&&ep?null:e;default:return null}}function ox(e,t){if(Lr)return e==="compositionend"||!Nu&&Uf(e,t)?(e=zf(),Ci=ku=In=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bf&&t.locale!=="ko"?null:t.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sx[e.type]:t==="textarea"}function Wf(e,t,n,r){wf(r),t=Ki(t,"onChange"),0<t.length&&(n=new Cu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var rs=null,vs=null;function ix(e){th(e,0)}function ka(e){var t=zr(e);if(ff(t))return e}function ax(e,t){if(e==="change")return t}var Gf=!1;if(rn){var pl;if(rn){var ml="oninput"in document;if(!ml){var np=document.createElement("div");np.setAttribute("oninput","return;"),ml=typeof np.oninput=="function"}pl=ml}else pl=!1;Gf=pl&&(!document.documentMode||9<document.documentMode)}function rp(){rs&&(rs.detachEvent("onpropertychange",Hf),vs=rs=null)}function Hf(e){if(e.propertyName==="value"&&ka(vs)){var t=[];Wf(t,vs,e,yu(e)),Pf(ix,t)}}function lx(e,t,n){e==="focusin"?(rp(),rs=t,vs=n,rs.attachEvent("onpropertychange",Hf)):e==="focusout"&&rp()}function cx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ka(vs)}function ux(e,t){if(e==="click")return ka(t)}function dx(e,t){if(e==="input"||e==="change")return ka(t)}function px(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:px;function ys(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Gl.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function op(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sp(e,t){var n=op(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=op(n)}}function Kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qf(){for(var e=window,t=zi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zi(e.document)}return t}function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mx(e){var t=qf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kf(n.ownerDocument.documentElement,n)){if(r!==null&&Eu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,s=Math.min(r.start,o);r=r.end===void 0?s:Math.min(r.end,o),!e.extend&&s>r&&(o=r,r=s,s=o),o=sp(n,s);var i=sp(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fx=rn&&"documentMode"in document&&11>=document.documentMode,Fr=null,uc=null,os=null,dc=!1;function ip(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dc||Fr==null||Fr!==zi(r)||(r=Fr,"selectionStart"in r&&Eu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),os&&ys(os,r)||(os=r,r=Ki(uc,"onSelect"),0<r.length&&(t=new Cu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionend:ri("Transition","TransitionEnd")},fl={},Yf={};rn&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function Ca(e){if(fl[e])return fl[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yf)return fl[e]=t[n];return e}var Qf=Ca("animationend"),Xf=Ca("animationiteration"),Jf=Ca("animationstart"),Zf=Ca("transitionend"),eh=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(e,t){eh.set(e,t),Sr(t,[e])}for(var hl=0;hl<ap.length;hl++){var gl=ap[hl],hx=gl.toLowerCase(),gx=gl[0].toUpperCase()+gl.slice(1);qn(hx,"on"+gx)}qn(Qf,"onAnimationEnd");qn(Xf,"onAnimationIteration");qn(Jf,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(Zf,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function lp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,h0(r,t,void 0,e),e.currentTarget=null}function th(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&o.isPropagationStopped())break e;lp(o,l,u),s=c}else for(i=0;i<r.length;i++){if(l=r[i],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&o.isPropagationStopped())break e;lp(o,l,u),s=c}}}if(Ui)throw e=ic,Ui=!1,ic=null,e}function se(e,t){var n=t[gc];n===void 0&&(n=t[gc]=new Set);var r=e+"__bubble";n.has(r)||(nh(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),nh(n,e,r,t)}var oi="_reactListening"+Math.random().toString(36).slice(2);function xs(e){if(!e[oi]){e[oi]=!0,cf.forEach(function(n){n!=="selectionchange"&&(vx.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oi]||(t[oi]=!0,vl("selectionchange",!1,t))}}function nh(e,t,n,r){switch(Vf(t)){case 1:var o=A0;break;case 4:o=_0;break;default:o=Su}n=o.bind(null,t,n,e),o=void 0,!sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,o){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;i=i.return}for(;l!==null;){if(i=or(l),i===null)return;if(c=i.tag,c===5||c===6){r=s=i;continue e}l=l.parentNode}}r=r.return}Pf(function(){var u=s,d=yu(n),m=[];e:{var h=eh.get(e);if(h!==void 0){var p=Cu,w=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":p=K0;break;case"focusin":w="focus",p=dl;break;case"focusout":w="blur",p=dl;break;case"beforeblur":case"afterblur":p=dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Q0;break;case Qf:case Xf:case Jf:p=F0;break;case Zf:p=J0;break;case"scroll":p=I0;break;case"wheel":p=ex;break;case"copy":case"cut":case"paste":p=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jd}var g=(t&4)!==0,b=!g&&e==="scroll",v=g?h!==null?h+"Capture":null:h;g=[];for(var f=u,x;f!==null;){x=f;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,v!==null&&(S=ms(f,v),S!=null&&g.push(bs(f,S,x)))),b)break;f=f.return}0<g.length&&(h=new p(h,w,null,n,d),m.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==rc&&(w=n.relatedTarget||n.fromElement)&&(or(w)||w[on]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(w=n.relatedTarget||n.toElement,p=u,w=w?or(w):null,w!==null&&(b=kr(w),w!==b||w.tag!==5&&w.tag!==6)&&(w=null)):(p=null,w=u),p!==w)){if(g=Qd,S="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(g=Jd,S="onPointerLeave",v="onPointerEnter",f="pointer"),b=p==null?h:zr(p),x=w==null?h:zr(w),h=new g(S,f+"leave",p,n,d),h.target=b,h.relatedTarget=x,S=null,or(d)===u&&(g=new g(v,f+"enter",w,n,d),g.target=x,g.relatedTarget=b,S=g),b=S,p&&w)t:{for(g=p,v=w,f=0,x=g;x;x=Ar(x))f++;for(x=0,S=v;S;S=Ar(S))x++;for(;0<f-x;)g=Ar(g),f--;for(;0<x-f;)v=Ar(v),x--;for(;f--;){if(g===v||v!==null&&g===v.alternate)break t;g=Ar(g),v=Ar(v)}g=null}else g=null;p!==null&&cp(m,h,p,g,!1),w!==null&&b!==null&&cp(m,b,w,g,!0)}}e:{if(h=u?zr(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var k=ax;else if(tp(h))if(Gf)k=dx;else{k=cx;var P=lx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=ux);if(k&&(k=k(e,u))){Wf(m,k,n,d);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Jl(h,"number",h.value)}switch(P=u?zr(u):window,e){case"focusin":(tp(P)||P.contentEditable==="true")&&(Fr=P,uc=u,os=null);break;case"focusout":os=uc=Fr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,ip(m,n,d);break;case"selectionchange":if(fx)break;case"keydown":case"keyup":ip(m,n,d)}var N;if(Nu)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Lr?Uf(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Bf&&n.locale!=="ko"&&(Lr||C!=="onCompositionStart"?C==="onCompositionEnd"&&Lr&&(N=zf()):(In=d,ku="value"in In?In.value:In.textContent,Lr=!0)),P=Ki(u,C),0<P.length&&(C=new Xd(C,e,null,n,d),m.push({event:C,listeners:P}),N?C.data=N:(N=$f(n),N!==null&&(C.data=N)))),(N=nx?rx(e,n):ox(e,n))&&(u=Ki(u,"onBeforeInput"),0<u.length&&(d=new Xd("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=N))}th(m,t)})}function bs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=ms(e,n),s!=null&&r.unshift(bs(e,s,o)),s=ms(e,t),s!=null&&r.push(bs(e,s,o))),e=e.return}return r}function Ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cp(e,t,n,r,o){for(var s=t._reactName,i=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,o?(c=ms(n,s),c!=null&&i.unshift(bs(n,c,l))):o||(c=ms(n,s),c!=null&&i.push(bs(n,c,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var yx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function up(e){return(typeof e=="string"?e:""+e).replace(yx,`
`).replace(xx,"")}function si(e,t,n){if(t=up(t),up(e)!==t&&n)throw Error(I(425))}function qi(){}var pc=null,mc=null;function fc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hc=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,wx=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(e){return dp.resolve(null).then(e).catch(Sx)}:hc;function Sx(e){setTimeout(function(){throw e})}function xl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),gs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);gs(t)}function Vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Eo,ws="__reactProps$"+Eo,on="__reactContainer$"+Eo,gc="__reactEvents$"+Eo,kx="__reactListeners$"+Eo,Cx="__reactHandles$"+Eo;function or(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[on]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pp(e);e!==null;){if(n=e[Vt])return n;e=pp(e)}return t}e=n,n=e.parentNode}return null}function zs(e){return e=e[Vt]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Pa(e){return e[ws]||null}var vc=[],Br=-1;function Yn(e){return{current:e}}function ae(e){0>Br||(e.current=vc[Br],vc[Br]=null,Br--)}function re(e,t){Br++,vc[Br]=e.current,e.current=t}var Gn={},De=Yn(Gn),Ke=Yn(!1),hr=Gn;function vo(e,t){var n=e.type.contextTypes;if(!n)return Gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in n)o[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function qe(e){return e=e.childContextTypes,e!=null}function Yi(){ae(Ke),ae(De)}function mp(e,t,n){if(De.current!==Gn)throw Error(I(168));re(De,t),re(Ke,n)}function rh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,l0(e)||"Unknown",o));return pe({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gn,hr=De.current,re(De,e),re(Ke,Ke.current),!0}function fp(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=rh(e,t,hr),r.__reactInternalMemoizedMergedChildContext=e,ae(Ke),ae(De),re(De,e)):ae(Ke),re(Ke,n)}var Jt=null,Na=!1,bl=!1;function oh(e){Jt===null?Jt=[e]:Jt.push(e)}function Px(e){Na=!0,oh(e)}function Qn(){if(!bl&&Jt!==null){bl=!0;var e=0,t=te;try{var n=Jt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Jt=null,Na=!1}catch(o){throw Jt!==null&&(Jt=Jt.slice(e+1)),jf(xu,Qn),o}finally{te=t,bl=!1}}return null}var Ur=[],$r=0,Xi=null,Ji=0,ct=[],ut=0,gr=null,en=1,tn="";function er(e,t){Ur[$r++]=Ji,Ur[$r++]=Xi,Xi=e,Ji=t}function sh(e,t,n){ct[ut++]=en,ct[ut++]=tn,ct[ut++]=gr,gr=e;var r=en;e=tn;var o=32-Nt(r)-1;r&=~(1<<o),n+=1;var s=32-Nt(t)+o;if(30<s){var i=o-o%5;s=(r&(1<<i)-1).toString(32),r>>=i,o-=i,en=1<<32-Nt(t)+o|n<<o|r,tn=s+e}else en=1<<s|n<<o|r,tn=e}function Tu(e){e.return!==null&&(er(e,1),sh(e,1,0))}function ju(e){for(;e===Xi;)Xi=Ur[--$r],Ur[$r]=null,Ji=Ur[--$r],Ur[$r]=null;for(;e===gr;)gr=ct[--ut],ct[ut]=null,tn=ct[--ut],ct[ut]=null,en=ct[--ut],ct[ut]=null}var et=null,Ze=null,ce=!1,Pt=null;function ih(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Ze=Vn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gr!==null?{id:en,overflow:tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,Ze=null,!0):!1;default:return!1}}function yc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xc(e){if(ce){var t=Ze;if(t){var n=t;if(!hp(e,t)){if(yc(e))throw Error(I(418));t=Vn(n.nextSibling);var r=et;t&&hp(e,t)?ih(r,n):(e.flags=e.flags&-4097|2,ce=!1,et=e)}}else{if(yc(e))throw Error(I(418));e.flags=e.flags&-4097|2,ce=!1,et=e}}}function gp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function ii(e){if(e!==et)return!1;if(!ce)return gp(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fc(e.type,e.memoizedProps)),t&&(t=Ze)){if(yc(e))throw ah(),Error(I(418));for(;t;)ih(e,t),t=Vn(t.nextSibling)}if(gp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=Vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=et?Vn(e.stateNode.nextSibling):null;return!0}function ah(){for(var e=Ze;e;)e=Vn(e.nextSibling)}function yo(){Ze=et=null,ce=!1}function Ru(e){Pt===null?Pt=[e]:Pt.push(e)}var Nx=un.ReactCurrentBatchConfig;function Vo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var o=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var l=o.refs;i===null?delete l[s]:l[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function ai(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vp(e){var t=e._init;return t(e._payload)}function lh(e){function t(v,f){if(e){var x=v.deletions;x===null?(v.deletions=[f],v.flags|=16):x.push(f)}}function n(v,f){if(!e)return null;for(;f!==null;)t(v,f),f=f.sibling;return null}function r(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function o(v,f){return v=$n(v,f),v.index=0,v.sibling=null,v}function s(v,f,x){return v.index=x,e?(x=v.alternate,x!==null?(x=x.index,x<f?(v.flags|=2,f):x):(v.flags|=2,f)):(v.flags|=1048576,f)}function i(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,f,x,S){return f===null||f.tag!==6?(f=El(x,v.mode,S),f.return=v,f):(f=o(f,x),f.return=v,f)}function c(v,f,x,S){var k=x.type;return k===Dr?d(v,f,x.props.children,S,x.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===kn&&vp(k)===f.type)?(S=o(f,x.props),S.ref=Vo(v,f,x),S.return=v,S):(S=_i(x.type,x.key,x.props,null,v.mode,S),S.ref=Vo(v,f,x),S.return=v,S)}function u(v,f,x,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Tl(x,v.mode,S),f.return=v,f):(f=o(f,x.children||[]),f.return=v,f)}function d(v,f,x,S,k){return f===null||f.tag!==7?(f=fr(x,v.mode,S,k),f.return=v,f):(f=o(f,x),f.return=v,f)}function m(v,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=El(""+f,v.mode,x),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qs:return x=_i(f.type,f.key,f.props,null,v.mode,x),x.ref=Vo(v,null,f),x.return=v,x;case Or:return f=Tl(f,v.mode,x),f.return=v,f;case kn:var S=f._init;return m(v,S(f._payload),x)}if(Yo(f)||Mo(f))return f=fr(f,v.mode,x,null),f.return=v,f;ai(v,f)}return null}function h(v,f,x,S){var k=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return k!==null?null:l(v,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qs:return x.key===k?c(v,f,x,S):null;case Or:return x.key===k?u(v,f,x,S):null;case kn:return k=x._init,h(v,f,k(x._payload),S)}if(Yo(x)||Mo(x))return k!==null?null:d(v,f,x,S,null);ai(v,x)}return null}function p(v,f,x,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(x)||null,l(f,v,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qs:return v=v.get(S.key===null?x:S.key)||null,c(f,v,S,k);case Or:return v=v.get(S.key===null?x:S.key)||null,u(f,v,S,k);case kn:var P=S._init;return p(v,f,x,P(S._payload),k)}if(Yo(S)||Mo(S))return v=v.get(x)||null,d(f,v,S,k,null);ai(f,S)}return null}function w(v,f,x,S){for(var k=null,P=null,N=f,C=f=0,E=null;N!==null&&C<x.length;C++){N.index>C?(E=N,N=null):E=N.sibling;var M=h(v,N,x[C],S);if(M===null){N===null&&(N=E);break}e&&N&&M.alternate===null&&t(v,N),f=s(M,f,C),P===null?k=M:P.sibling=M,P=M,N=E}if(C===x.length)return n(v,N),ce&&er(v,C),k;if(N===null){for(;C<x.length;C++)N=m(v,x[C],S),N!==null&&(f=s(N,f,C),P===null?k=N:P.sibling=N,P=N);return ce&&er(v,C),k}for(N=r(v,N);C<x.length;C++)E=p(N,v,C,x[C],S),E!==null&&(e&&E.alternate!==null&&N.delete(E.key===null?C:E.key),f=s(E,f,C),P===null?k=E:P.sibling=E,P=E);return e&&N.forEach(function(z){return t(v,z)}),ce&&er(v,C),k}function g(v,f,x,S){var k=Mo(x);if(typeof k!="function")throw Error(I(150));if(x=k.call(x),x==null)throw Error(I(151));for(var P=k=null,N=f,C=f=0,E=null,M=x.next();N!==null&&!M.done;C++,M=x.next()){N.index>C?(E=N,N=null):E=N.sibling;var z=h(v,N,M.value,S);if(z===null){N===null&&(N=E);break}e&&N&&z.alternate===null&&t(v,N),f=s(z,f,C),P===null?k=z:P.sibling=z,P=z,N=E}if(M.done)return n(v,N),ce&&er(v,C),k;if(N===null){for(;!M.done;C++,M=x.next())M=m(v,M.value,S),M!==null&&(f=s(M,f,C),P===null?k=M:P.sibling=M,P=M);return ce&&er(v,C),k}for(N=r(v,N);!M.done;C++,M=x.next())M=p(N,v,C,M.value,S),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?C:M.key),f=s(M,f,C),P===null?k=M:P.sibling=M,P=M);return e&&N.forEach(function(j){return t(v,j)}),ce&&er(v,C),k}function b(v,f,x,S){if(typeof x=="object"&&x!==null&&x.type===Dr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Qs:e:{for(var k=x.key,P=f;P!==null;){if(P.key===k){if(k=x.type,k===Dr){if(P.tag===7){n(v,P.sibling),f=o(P,x.props.children),f.return=v,v=f;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===kn&&vp(k)===P.type){n(v,P.sibling),f=o(P,x.props),f.ref=Vo(v,P,x),f.return=v,v=f;break e}n(v,P);break}else t(v,P);P=P.sibling}x.type===Dr?(f=fr(x.props.children,v.mode,S,x.key),f.return=v,v=f):(S=_i(x.type,x.key,x.props,null,v.mode,S),S.ref=Vo(v,f,x),S.return=v,v=S)}return i(v);case Or:e:{for(P=x.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){n(v,f.sibling),f=o(f,x.children||[]),f.return=v,v=f;break e}else{n(v,f);break}else t(v,f);f=f.sibling}f=Tl(x,v.mode,S),f.return=v,v=f}return i(v);case kn:return P=x._init,b(v,f,P(x._payload),S)}if(Yo(x))return w(v,f,x,S);if(Mo(x))return g(v,f,x,S);ai(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(n(v,f.sibling),f=o(f,x),f.return=v,v=f):(n(v,f),f=El(x,v.mode,S),f.return=v,v=f),i(v)):n(v,f)}return b}var xo=lh(!0),ch=lh(!1),Zi=Yn(null),ea=null,Wr=null,Au=null;function _u(){Au=Wr=ea=null}function Iu(e){var t=Zi.current;ae(Zi),e._currentValue=t}function bc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function to(e,t){ea=e,Au=Wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Au!==e)if(e={context:e,memoizedValue:t,next:null},Wr===null){if(ea===null)throw Error(I(308));Wr=e,ea.dependencies={lanes:0,firstContext:e}}else Wr=Wr.next=e;return t}var sr=null;function Mu(e){sr===null?sr=[e]:sr.push(e)}function uh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Mu(t)):(n.next=o.next,o.next=n),t.interleaved=n,sn(e,r)}function sn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Cn=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,sn(e,n)}return o=r.interleaved,o===null?(t.next=t,Mu(r)):(t.next=o.next,o.next=t),r.interleaved=t,sn(e,n)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bu(e,n)}}function yp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?o=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ta(e,t,n,r){var o=e.updateQueue;Cn=!1;var s=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var c=l,u=c.next;c.next=null,i===null?s=u:i.next=u,i=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==i&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var m=o.baseState;i=0,d=u=c=null,l=s;do{var h=l.lane,p=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,g=l;switch(h=t,p=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){m=w.call(p,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,h=typeof w=="function"?w.call(p,m,h):w,h==null)break e;m=pe({},m,h);break e;case 2:Cn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=p,c=m):d=d.next=p,i|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(c=m),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else s===null&&(o.shared.lanes=0);yr|=i,e.lanes=i,e.memoizedState=m}}function xp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var Bs={},$t=Yn(Bs),Ss=Yn(Bs),ks=Yn(Bs);function ir(e){if(e===Bs)throw Error(I(174));return e}function Du(e,t){switch(re(ks,t),re(Ss,e),re($t,Bs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ec(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ec(t,e)}ae($t),re($t,t)}function bo(){ae($t),ae(Ss),ae(ks)}function ph(e){ir(ks.current);var t=ir($t.current),n=ec(t,e.type);t!==n&&(re(Ss,e),re($t,n))}function Lu(e){Ss.current===e&&(ae($t),ae(Ss))}var ue=Yn(0);function na(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wl=[];function Fu(){for(var e=0;e<wl.length;e++)wl[e]._workInProgressVersionPrimary=null;wl.length=0}var Ei=un.ReactCurrentDispatcher,Sl=un.ReactCurrentBatchConfig,vr=0,de=null,we=null,Ce=null,ra=!1,ss=!1,Cs=0,Ex=0;function _e(){throw Error(I(321))}function Vu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function zu(e,t,n,r,o,s){if(vr=s,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ei.current=e===null||e.memoizedState===null?Ax:_x,e=n(r,o),ss){s=0;do{if(ss=!1,Cs=0,25<=s)throw Error(I(301));s+=1,Ce=we=null,t.updateQueue=null,Ei.current=Ix,e=n(r,o)}while(ss)}if(Ei.current=oa,t=we!==null&&we.next!==null,vr=0,Ce=we=de=null,ra=!1,t)throw Error(I(300));return e}function Bu(){var e=Cs!==0;return Cs=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?de.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function ft(){if(we===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ce===null?de.memoizedState:Ce.next;if(t!==null)Ce=t,we=e;else{if(e===null)throw Error(I(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ce===null?de.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function Ps(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=ft(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=we,o=r.baseQueue,s=n.pending;if(s!==null){if(o!==null){var i=o.next;o.next=s.next,s.next=i}r.baseQueue=o=s,n.pending=null}if(o!==null){s=o.next,r=r.baseState;var l=i=null,c=null,u=s;do{var d=u.lane;if((vr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,i=r):c=c.next=m,de.lanes|=d,yr|=d}u=u.next}while(u!==null&&u!==s);c===null?i=r:c.next=l,Tt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do s=o.lane,de.lanes|=s,yr|=s,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cl(e){var t=ft(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do s=e(s,i.action),i=i.next;while(i!==o);Tt(s,t.memoizedState)||(He=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function mh(){}function fh(e,t){var n=de,r=ft(),o=t(),s=!Tt(r.memoizedState,o);if(s&&(r.memoizedState=o,He=!0),r=r.queue,Uu(vh.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,Ns(9,gh.bind(null,n,r,o,t),void 0,null),Pe===null)throw Error(I(349));vr&30||hh(n,t,o)}return o}function hh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gh(e,t,n,r){t.value=n,t.getSnapshot=r,yh(t)&&xh(e)}function vh(e,t,n){return n(function(){yh(t)&&xh(e)})}function yh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function xh(e){var t=sn(e,1);t!==null&&Et(t,e,1,-1)}function bp(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:e},t.queue=e,e=e.dispatch=Rx.bind(null,de,e),[t.memoizedState,e]}function Ns(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bh(){return ft().memoizedState}function Ti(e,t,n,r){var o=Mt();de.flags|=e,o.memoizedState=Ns(1|t,n,void 0,r===void 0?null:r)}function Ea(e,t,n,r){var o=ft();r=r===void 0?null:r;var s=void 0;if(we!==null){var i=we.memoizedState;if(s=i.destroy,r!==null&&Vu(r,i.deps)){o.memoizedState=Ns(t,n,s,r);return}}de.flags|=e,o.memoizedState=Ns(1|t,n,s,r)}function wp(e,t){return Ti(8390656,8,e,t)}function Uu(e,t){return Ea(2048,8,e,t)}function wh(e,t){return Ea(4,2,e,t)}function Sh(e,t){return Ea(4,4,e,t)}function kh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ch(e,t,n){return n=n!=null?n.concat([e]):null,Ea(4,4,kh.bind(null,t,e),n)}function $u(){}function Ph(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nh(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Eh(e,t,n){return vr&21?(Tt(n,t)||(n=_f(),de.lanes|=n,yr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function Tx(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),t()}finally{te=n,Sl.transition=r}}function Th(){return ft().memoizedState}function jx(e,t,n){var r=Un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jh(e))Rh(t,n);else if(n=uh(e,t,n,r),n!==null){var o=Be();Et(n,e,r,o),Ah(n,t,r)}}function Rx(e,t,n){var r=Un(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jh(e))Rh(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,l=s(i,n);if(o.hasEagerState=!0,o.eagerState=l,Tt(l,i)){var c=t.interleaved;c===null?(o.next=o,Mu(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=uh(e,t,o,r),n!==null&&(o=Be(),Et(n,e,r,o),Ah(n,t,r))}}function jh(e){var t=e.alternate;return e===de||t!==null&&t===de}function Rh(e,t){ss=ra=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ah(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bu(e,n)}}var oa={readContext:mt,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},Ax={readContext:mt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:wp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4194308,4,kh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ti(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ti(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jx.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:bp,useDebugValue:$u,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=bp(!1),t=e[0];return e=Tx.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,o=Mt();if(ce){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),Pe===null)throw Error(I(349));vr&30||hh(r,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,wp(vh.bind(null,r,s,e),[e]),r.flags|=2048,Ns(9,gh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Pe.identifierPrefix;if(ce){var n=tn,r=en;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ex++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_x={readContext:mt,useCallback:Ph,useContext:mt,useEffect:Uu,useImperativeHandle:Ch,useInsertionEffect:wh,useLayoutEffect:Sh,useMemo:Nh,useReducer:kl,useRef:bh,useState:function(){return kl(Ps)},useDebugValue:$u,useDeferredValue:function(e){var t=ft();return Eh(t,we.memoizedState,e)},useTransition:function(){var e=kl(Ps)[0],t=ft().memoizedState;return[e,t]},useMutableSource:mh,useSyncExternalStore:fh,useId:Th,unstable_isNewReconciler:!1},Ix={readContext:mt,useCallback:Ph,useContext:mt,useEffect:Uu,useImperativeHandle:Ch,useInsertionEffect:wh,useLayoutEffect:Sh,useMemo:Nh,useReducer:Cl,useRef:bh,useState:function(){return Cl(Ps)},useDebugValue:$u,useDeferredValue:function(e){var t=ft();return we===null?t.memoizedState=e:Eh(t,we.memoizedState,e)},useTransition:function(){var e=Cl(Ps)[0],t=ft().memoizedState;return[e,t]},useMutableSource:mh,useSyncExternalStore:fh,useId:Th,unstable_isNewReconciler:!1};function bt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ta={isMounted:function(e){return(e=e._reactInternals)?kr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),o=Un(e),s=nn(r,o);s.payload=t,n!=null&&(s.callback=n),t=zn(e,s,o),t!==null&&(Et(t,e,o,r),Ni(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),o=Un(e),s=nn(r,o);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=zn(e,s,o),t!==null&&(Et(t,e,o,r),Ni(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=Un(e),o=nn(n,r);o.tag=2,t!=null&&(o.callback=t),t=zn(e,o,r),t!==null&&(Et(t,e,r,n),Ni(t,e,r))}};function Sp(e,t,n,r,o,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,i):t.prototype&&t.prototype.isPureReactComponent?!ys(n,r)||!ys(o,s):!0}function _h(e,t,n){var r=!1,o=Gn,s=t.contextType;return typeof s=="object"&&s!==null?s=mt(s):(o=qe(t)?hr:De.current,r=t.contextTypes,s=(r=r!=null)?vo(e,o):Gn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ta,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),t}function kp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ta.enqueueReplaceState(t,t.state,null)}function Sc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ou(e);var s=t.contextType;typeof s=="object"&&s!==null?o.context=mt(s):(s=qe(t)?hr:De.current,o.context=vo(e,s)),o.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(wc(e,t,s,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ta.enqueueReplaceState(o,o.state,null),ta(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wo(e,t){try{var n="",r=t;do n+=a0(r),r=r.return;while(r);var o=n}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:o,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function kc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mx=typeof WeakMap=="function"?WeakMap:Map;function Ih(e,t,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ia||(ia=!0,Ic=r),kc(e,t)},n}function Mh(e,t,n){n=nn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){kc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kc(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Cp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mx;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=qx.bind(null,e,t,n),t.then(e,e))}function Pp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Np(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nn(-1,1),t.tag=2,zn(n,t,1))),n.lanes|=1),e)}var Ox=un.ReactCurrentOwner,He=!1;function Ve(e,t,n,r){t.child=e===null?ch(t,null,n,r):xo(t,e.child,n,r)}function Ep(e,t,n,r,o){n=n.render;var s=t.ref;return to(t,o),r=zu(e,t,n,r,s,o),n=Bu(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,an(e,t,o)):(ce&&n&&Tu(t),t.flags|=1,Ve(e,t,r,o),t.child)}function Tp(e,t,n,r,o){if(e===null){var s=n.type;return typeof s=="function"&&!Xu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Oh(e,t,s,r,o)):(e=_i(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&o)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:ys,n(i,r)&&e.ref===t.ref)return an(e,t,o)}return t.flags|=1,e=$n(s,r),e.ref=t.ref,e.return=t,t.child=e}function Oh(e,t,n,r,o){if(e!==null){var s=e.memoizedProps;if(ys(s,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=s,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,an(e,t,o)}return Cc(e,t,n,r,o)}function Dh(e,t,n){var r=t.pendingProps,o=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Hr,Xe),Xe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Hr,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(Hr,Xe),Xe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,re(Hr,Xe),Xe|=r;return Ve(e,t,o,n),t.child}function Lh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cc(e,t,n,r,o){var s=qe(n)?hr:De.current;return s=vo(t,s),to(t,o),n=zu(e,t,n,r,s,o),r=Bu(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,an(e,t,o)):(ce&&r&&Tu(t),t.flags|=1,Ve(e,t,n,o),t.child)}function jp(e,t,n,r,o){if(qe(n)){var s=!0;Qi(t)}else s=!1;if(to(t,o),t.stateNode===null)ji(e,t),_h(t,n,r),Sc(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var c=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=mt(u):(u=qe(n)?hr:De.current,u=vo(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||c!==u)&&kp(t,i,r,u),Cn=!1;var h=t.memoizedState;i.state=h,ta(t,r,i,o),c=t.memoizedState,l!==r||h!==c||Ke.current||Cn?(typeof d=="function"&&(wc(t,n,d,r),c=t.memoizedState),(l=Cn||Sp(t,n,l,r,h,c,u))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,dh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:bt(t.type,l),i.props=u,m=t.pendingProps,h=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=mt(c):(c=qe(n)?hr:De.current,c=vo(t,c));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==m||h!==c)&&kp(t,i,r,c),Cn=!1,h=t.memoizedState,i.state=h,ta(t,r,i,o);var w=t.memoizedState;l!==m||h!==w||Ke.current||Cn?(typeof p=="function"&&(wc(t,n,p,r),w=t.memoizedState),(u=Cn||Sp(t,n,u,r,h,w,c)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=c,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Pc(e,t,n,r,s,o)}function Pc(e,t,n,r,o,s){Lh(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&fp(t,n,!1),an(e,t,s);r=t.stateNode,Ox.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=xo(t,e.child,null,s),t.child=xo(t,null,l,s)):Ve(e,t,l,s),t.memoizedState=r.state,o&&fp(t,n,!0),t.child}function Fh(e){var t=e.stateNode;t.pendingContext?mp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mp(e,t.context,!1),Du(e,t.containerInfo)}function Rp(e,t,n,r,o){return yo(),Ru(o),t.flags|=256,Ve(e,t,n,r),t.child}var Nc={dehydrated:null,treeContext:null,retryLane:0};function Ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vh(e,t,n){var r=t.pendingProps,o=ue.current,s=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),re(ue,o&1),e===null)return xc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,s?(r=t.mode,s=t.child,i={mode:"hidden",children:i},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=Aa(i,r,0,null),e=fr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ec(n),t.memoizedState=Nc,e):Wu(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Dx(e,t,i,r,l,o,n);if(s){s=r.fallback,i=t.mode,o=e.child,l=o.sibling;var c={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=$n(o,c),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?s=$n(l,s):(s=fr(s,i,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,i=e.child.memoizedState,i=i===null?Ec(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=Nc,r}return s=e.child,e=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wu(e,t){return t=Aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function li(e,t,n,r){return r!==null&&Ru(r),xo(t,e.child,null,n),e=Wu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dx(e,t,n,r,o,s,i){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(I(422))),li(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,o=t.mode,r=Aa({mode:"visible",children:r.children},o,0,null),s=fr(s,o,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&xo(t,e.child,null,i),t.child.memoizedState=Ec(i),t.memoizedState=Nc,s);if(!(t.mode&1))return li(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(I(419)),r=Pl(s,r,void 0),li(e,t,i,r)}if(l=(i&e.childLanes)!==0,He||l){if(r=Pe,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,sn(e,o),Et(r,e,o,-1))}return Qu(),r=Pl(Error(I(421))),li(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Yx.bind(null,e),o._reactRetry=t,null):(e=s.treeContext,Ze=Vn(o.nextSibling),et=t,ce=!0,Pt=null,e!==null&&(ct[ut++]=en,ct[ut++]=tn,ct[ut++]=gr,en=e.id,tn=e.overflow,gr=t),t=Wu(t,r.children),t.flags|=4096,t)}function Ap(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bc(e.return,t,n)}function Nl(e,t,n,r,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=o)}function zh(e,t,n){var r=t.pendingProps,o=r.revealOrder,s=r.tail;if(Ve(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ap(e,n,t);else if(e.tag===19)Ap(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&na(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Nl(t,!1,o,n,s);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&na(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Nl(t,!0,n,null,s);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ji(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function an(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=$n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lx(e,t,n){switch(t.tag){case 3:Fh(t),yo();break;case 5:ph(t);break;case 1:qe(t.type)&&Qi(t);break;case 4:Du(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;re(Zi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?Vh(e,t,n):(re(ue,ue.current&1),e=an(e,t,n),e!==null?e.sibling:null);re(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return zh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),re(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Dh(e,t,n)}return an(e,t,n)}var Bh,Tc,Uh,$h;Bh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tc=function(){};Uh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ir($t.current);var s=null;switch(n){case"input":o=Ql(e,o),r=Ql(e,r),s=[];break;case"select":o=pe({},o,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":o=Zl(e,o),r=Zl(e,r),s=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qi)}tc(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ds.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&l[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ds.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&se("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};$h=function(e,t,n,r){n!==r&&(t.flags|=4)};function zo(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fx(e,t,n){var r=t.pendingProps;switch(ju(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return qe(t.type)&&Yi(),Ie(t),null;case 3:return r=t.stateNode,bo(),ae(Ke),ae(De),Fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Dc(Pt),Pt=null))),Tc(e,t),Ie(t),null;case 5:Lu(t);var o=ir(ks.current);if(n=t.type,e!==null&&t.stateNode!=null)Uh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Ie(t),null}if(e=ir($t.current),ii(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Vt]=t,r[ws]=s,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(o=0;o<Xo.length;o++)se(Xo[o],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":zd(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":Ud(r,s),se("invalid",r)}tc(n,s),o=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&si(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&si(r.textContent,l,e),o=["children",""+l]):ds.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&se("scroll",r)}switch(n){case"input":Xs(r),Bd(r,s,!0);break;case"textarea":Xs(r),$d(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=qi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Vt]=t,e[ws]=r,Bh(e,t,!1,!1),t.stateNode=e;e:{switch(i=nc(n,r),n){case"dialog":se("cancel",e),se("close",e),o=r;break;case"iframe":case"object":case"embed":se("load",e),o=r;break;case"video":case"audio":for(o=0;o<Xo.length;o++)se(Xo[o],e);o=r;break;case"source":se("error",e),o=r;break;case"img":case"image":case"link":se("error",e),se("load",e),o=r;break;case"details":se("toggle",e),o=r;break;case"input":zd(e,r),o=Ql(e,r),se("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=pe({},r,{value:void 0}),se("invalid",e);break;case"textarea":Ud(e,r),o=Zl(e,r),se("invalid",e);break;default:o=r}tc(n,o),l=o;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?bf(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yf(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ps(e,c):typeof c=="number"&&ps(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ds.hasOwnProperty(s)?c!=null&&s==="onScroll"&&se("scroll",e):c!=null&&fu(e,s,c,i))}switch(n){case"input":Xs(e),Bd(e,r,!1);break;case"textarea":Xs(e),$d(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Xr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Xr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=qi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)$h(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=ir(ks.current),ir($t.current),ii(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(s=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:si(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&si(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return Ie(t),null;case 13:if(ae(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Ze!==null&&t.mode&1&&!(t.flags&128))ah(),yo(),t.flags|=98560,s=!1;else if(s=ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(I(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Vt]=t}else yo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),s=!1}else Pt!==null&&(Dc(Pt),Pt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?Se===0&&(Se=3):Qu())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return bo(),Tc(e,t),e===null&&xs(t.stateNode.containerInfo),Ie(t),null;case 10:return Iu(t.type._context),Ie(t),null;case 17:return qe(t.type)&&Yi(),Ie(t),null;case 19:if(ae(ue),s=t.memoizedState,s===null)return Ie(t),null;if(r=(t.flags&128)!==0,i=s.rendering,i===null)if(r)zo(s,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=na(e),i!==null){for(t.flags|=128,zo(s,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(ue,ue.current&1|2),t.child}e=e.sibling}s.tail!==null&&ve()>So&&(t.flags|=128,r=!0,zo(s,!1),t.lanes=4194304)}else{if(!r)if(e=na(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!ce)return Ie(t),null}else 2*ve()-s.renderingStartTime>So&&n!==1073741824&&(t.flags|=128,r=!0,zo(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ve(),t.sibling=null,n=ue.current,re(ue,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return Yu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function Vx(e,t){switch(ju(t),t.tag){case 1:return qe(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bo(),ae(Ke),ae(De),Fu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lu(t),null;case 13:if(ae(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));yo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ue),null;case 4:return bo(),null;case 10:return Iu(t.type._context),null;case 22:case 23:return Yu(),null;case 24:return null;default:return null}}var ci=!1,Oe=!1,zx=typeof WeakSet=="function"?WeakSet:Set,F=null;function Gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function jc(e,t,n){try{n()}catch(r){he(e,t,r)}}var _p=!1;function Bx(e,t){if(pc=Gi,e=qf(),Eu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,l=-1,c=-1,u=0,d=0,m=e,h=null;t:for(;;){for(var p;m!==n||o!==0&&m.nodeType!==3||(l=i+o),m!==s||r!==0&&m.nodeType!==3||(c=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(p=m.firstChild)!==null;)h=m,m=p;for(;;){if(m===e)break t;if(h===n&&++u===o&&(l=i),h===s&&++d===r&&(c=i),(p=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=p}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:e,selectionRange:n},Gi=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,b=w.memoizedState,v=t.stateNode,f=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:bt(t.type,g),b);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){he(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return w=_p,_p=!1,w}function is(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&jc(t,n,s)}o=o.next}while(o!==r)}}function ja(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wh(e){var t=e.alternate;t!==null&&(e.alternate=null,Wh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[ws],delete t[gc],delete t[kx],delete t[Cx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gh(e){return e.tag===5||e.tag===3||e.tag===4}function Ip(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qi));else if(r!==4&&(e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}function _c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_c(e,t,n),e=e.sibling;e!==null;)_c(e,t,n),e=e.sibling}var Ne=null,Ct=!1;function vn(e,t,n){for(n=n.child;n!==null;)Hh(e,t,n),n=n.sibling}function Hh(e,t,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(wa,n)}catch{}switch(n.tag){case 5:Oe||Gr(n,t);case 6:var r=Ne,o=Ct;Ne=null,vn(e,t,n),Ne=r,Ct=o,Ne!==null&&(Ct?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(Ct?(e=Ne,n=n.stateNode,e.nodeType===8?xl(e.parentNode,n):e.nodeType===1&&xl(e,n),gs(e)):xl(Ne,n.stateNode));break;case 4:r=Ne,o=Ct,Ne=n.stateNode.containerInfo,Ct=!0,vn(e,t,n),Ne=r,Ct=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var s=o,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&jc(n,t,i),o=o.next}while(o!==r)}vn(e,t,n);break;case 1:if(!Oe&&(Gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,t,l)}vn(e,t,n);break;case 21:vn(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,vn(e,t,n),Oe=r):vn(e,t,n);break;default:vn(e,t,n)}}function Mp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zx),t.forEach(function(r){var o=Qx.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function yt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var s=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,Ct=!1;break e;case 3:Ne=l.stateNode.containerInfo,Ct=!0;break e;case 4:Ne=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(Ne===null)throw Error(I(160));Hh(s,i,o),Ne=null,Ct=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){he(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kh(t,e),t=t.sibling}function Kh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yt(t,e),_t(e),r&4){try{is(3,e,e.return),ja(3,e)}catch(g){he(e,e.return,g)}try{is(5,e,e.return)}catch(g){he(e,e.return,g)}}break;case 1:yt(t,e),_t(e),r&512&&n!==null&&Gr(n,n.return);break;case 5:if(yt(t,e),_t(e),r&512&&n!==null&&Gr(n,n.return),e.flags&32){var o=e.stateNode;try{ps(o,"")}catch(g){he(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&hf(o,s),nc(l,i);var u=nc(l,s);for(i=0;i<c.length;i+=2){var d=c[i],m=c[i+1];d==="style"?bf(o,m):d==="dangerouslySetInnerHTML"?yf(o,m):d==="children"?ps(o,m):fu(o,d,m,u)}switch(l){case"input":Xl(o,s);break;case"textarea":gf(o,s);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Xr(o,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Xr(o,!!s.multiple,s.defaultValue,!0):Xr(o,!!s.multiple,s.multiple?[]:"",!1))}o[ws]=s}catch(g){he(e,e.return,g)}}break;case 6:if(yt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(g){he(e,e.return,g)}}break;case 3:if(yt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gs(t.containerInfo)}catch(g){he(e,e.return,g)}break;case 4:yt(t,e),_t(e);break;case 13:yt(t,e),_t(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(Ku=ve())),r&4&&Mp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||d,yt(t,e),Oe=u):yt(t,e),_t(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(m=F=d;F!==null;){switch(h=F,p=h.child,h.tag){case 0:case 11:case 14:case 15:is(4,h,h.return);break;case 1:Gr(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){he(r,n,g)}}break;case 5:Gr(h,h.return);break;case 22:if(h.memoizedState!==null){Dp(m);continue}}p!==null?(p.return=h,F=p):Dp(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{o=m.stateNode,u?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=xf("display",i))}catch(g){he(e,e.return,g)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(g){he(e,e.return,g)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:yt(t,e),_t(e),r&4&&Mp(e);break;case 21:break;default:yt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gh(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ps(o,""),r.flags&=-33);var s=Ip(e);_c(e,s,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=Ip(e);Ac(e,l,i);break;default:throw Error(I(161))}}catch(c){he(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ux(e,t,n){F=e,qh(e)}function qh(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var o=F,s=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ci;if(!i){var l=o.alternate,c=l!==null&&l.memoizedState!==null||Oe;l=ci;var u=Oe;if(ci=i,(Oe=c)&&!u)for(F=o;F!==null;)i=F,c=i.child,i.tag===22&&i.memoizedState!==null?Lp(o):c!==null?(c.return=i,F=c):Lp(o);for(;s!==null;)F=s,qh(s),s=s.sibling;F=o,ci=l,Oe=u}Op(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,F=s):Op(e)}}function Op(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||ja(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:bt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&xp(t,s,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xp(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&gs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Oe||t.flags&512&&Rc(t)}catch(h){he(t,t.return,h)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Dp(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Lp(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ja(4,t)}catch(c){he(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){he(t,o,c)}}var s=t.return;try{Rc(t)}catch(c){he(t,s,c)}break;case 5:var i=t.return;try{Rc(t)}catch(c){he(t,i,c)}}}catch(c){he(t,t.return,c)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var $x=Math.ceil,sa=un.ReactCurrentDispatcher,Gu=un.ReactCurrentOwner,pt=un.ReactCurrentBatchConfig,X=0,Pe=null,be=null,Te=0,Xe=0,Hr=Yn(0),Se=0,Es=null,yr=0,Ra=0,Hu=0,as=null,Ge=null,Ku=0,So=1/0,Xt=null,ia=!1,Ic=null,Bn=null,ui=!1,Mn=null,aa=0,ls=0,Mc=null,Ri=-1,Ai=0;function Be(){return X&6?ve():Ri!==-1?Ri:Ri=ve()}function Un(e){return e.mode&1?X&2&&Te!==0?Te&-Te:Nx.transition!==null?(Ai===0&&(Ai=_f()),Ai):(e=te,e!==0||(e=window.event,e=e===void 0?16:Vf(e.type)),e):1}function Et(e,t,n,r){if(50<ls)throw ls=0,Mc=null,Error(I(185));Fs(e,n,r),(!(X&2)||e!==Pe)&&(e===Pe&&(!(X&2)&&(Ra|=n),Se===4&&Nn(e,Te)),Ye(e,r),n===1&&X===0&&!(t.mode&1)&&(So=ve()+500,Na&&Qn()))}function Ye(e,t){var n=e.callbackNode;N0(e,t);var r=Wi(e,e===Pe?Te:0);if(r===0)n!==null&&Hd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hd(n),t===1)e.tag===0?Px(Fp.bind(null,e)):oh(Fp.bind(null,e)),wx(function(){!(X&6)&&Qn()}),n=null;else{switch(If(r)){case 1:n=xu;break;case 4:n=Rf;break;case 16:n=$i;break;case 536870912:n=Af;break;default:n=$i}n=ng(n,Yh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yh(e,t){if(Ri=-1,Ai=0,X&6)throw Error(I(327));var n=e.callbackNode;if(no()&&e.callbackNode!==n)return null;var r=Wi(e,e===Pe?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=la(e,r);else{t=r;var o=X;X|=2;var s=Xh();(Pe!==e||Te!==t)&&(Xt=null,So=ve()+500,mr(e,t));do try{Hx();break}catch(l){Qh(e,l)}while(!0);_u(),sa.current=s,X=o,be!==null?t=0:(Pe=null,Te=0,t=Se)}if(t!==0){if(t===2&&(o=ac(e),o!==0&&(r=o,t=Oc(e,o))),t===1)throw n=Es,mr(e,0),Nn(e,r),Ye(e,ve()),n;if(t===6)Nn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Wx(o)&&(t=la(e,r),t===2&&(s=ac(e),s!==0&&(r=s,t=Oc(e,s))),t===1))throw n=Es,mr(e,0),Nn(e,r),Ye(e,ve()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:tr(e,Ge,Xt);break;case 3:if(Nn(e,r),(r&130023424)===r&&(t=Ku+500-ve(),10<t)){if(Wi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=hc(tr.bind(null,e,Ge,Xt),t);break}tr(e,Ge,Xt);break;case 4:if(Nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Nt(r);s=1<<i,i=t[i],i>o&&(o=i),r&=~s}if(r=o,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$x(r/1960))-r,10<r){e.timeoutHandle=hc(tr.bind(null,e,Ge,Xt),r);break}tr(e,Ge,Xt);break;case 5:tr(e,Ge,Xt);break;default:throw Error(I(329))}}}return Ye(e,ve()),e.callbackNode===n?Yh.bind(null,e):null}function Oc(e,t){var n=as;return e.current.memoizedState.isDehydrated&&(mr(e,t).flags|=256),e=la(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&Dc(t)),e}function Dc(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function Wx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],s=o.getSnapshot;o=o.value;try{if(!Tt(s(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nn(e,t){for(t&=~Hu,t&=~Ra,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Fp(e){if(X&6)throw Error(I(327));no();var t=Wi(e,0);if(!(t&1))return Ye(e,ve()),null;var n=la(e,t);if(e.tag!==0&&n===2){var r=ac(e);r!==0&&(t=r,n=Oc(e,r))}if(n===1)throw n=Es,mr(e,0),Nn(e,t),Ye(e,ve()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,Ge,Xt),Ye(e,ve()),null}function qu(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(So=ve()+500,Na&&Qn())}}function xr(e){Mn!==null&&Mn.tag===0&&!(X&6)&&no();var t=X;X|=1;var n=pt.transition,r=te;try{if(pt.transition=null,te=1,e)return e()}finally{te=r,pt.transition=n,X=t,!(X&6)&&Qn()}}function Yu(){Xe=Hr.current,ae(Hr)}function mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bx(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(ju(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:bo(),ae(Ke),ae(De),Fu();break;case 5:Lu(r);break;case 4:bo();break;case 13:ae(ue);break;case 19:ae(ue);break;case 10:Iu(r.type._context);break;case 22:case 23:Yu()}n=n.return}if(Pe=e,be=e=$n(e.current,null),Te=Xe=t,Se=0,Es=null,Hu=Ra=yr=0,Ge=as=null,sr!==null){for(t=0;t<sr.length;t++)if(n=sr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,s=n.pending;if(s!==null){var i=s.next;s.next=o,r.next=i}n.pending=r}sr=null}return e}function Qh(e,t){do{var n=be;try{if(_u(),Ei.current=oa,ra){for(var r=de.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ra=!1}if(vr=0,Ce=we=de=null,ss=!1,Cs=0,Gu.current=null,n===null||n.return===null){Se=1,Es=t,be=null;break}e:{var s=e,i=n.return,l=n,c=t;if(t=Te,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Pp(i);if(p!==null){p.flags&=-257,Np(p,i,l,s,t),p.mode&1&&Cp(s,u,t),t=p,c=u;var w=t.updateQueue;if(w===null){var g=new Set;g.add(c),t.updateQueue=g}else w.add(c);break e}else{if(!(t&1)){Cp(s,u,t),Qu();break e}c=Error(I(426))}}else if(ce&&l.mode&1){var b=Pp(i);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Np(b,i,l,s,t),Ru(wo(c,l));break e}}s=c=wo(c,l),Se!==4&&(Se=2),as===null?as=[s]:as.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=Ih(s,c,t);yp(s,v);break e;case 1:l=c;var f=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Bn===null||!Bn.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=Mh(s,l,t);yp(s,S);break e}}s=s.return}while(s!==null)}Zh(n)}catch(k){t=k,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Xh(){var e=sa.current;return sa.current=oa,e===null?oa:e}function Qu(){(Se===0||Se===3||Se===2)&&(Se=4),Pe===null||!(yr&268435455)&&!(Ra&268435455)||Nn(Pe,Te)}function la(e,t){var n=X;X|=2;var r=Xh();(Pe!==e||Te!==t)&&(Xt=null,mr(e,t));do try{Gx();break}catch(o){Qh(e,o)}while(!0);if(_u(),X=n,sa.current=r,be!==null)throw Error(I(261));return Pe=null,Te=0,Se}function Gx(){for(;be!==null;)Jh(be)}function Hx(){for(;be!==null&&!v0();)Jh(be)}function Jh(e){var t=tg(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Zh(e):be=t,Gu.current=null}function Zh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vx(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,be=null;return}}else if(n=Fx(n,t,Xe),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Se===0&&(Se=5)}function tr(e,t,n){var r=te,o=pt.transition;try{pt.transition=null,te=1,Kx(e,t,n,r)}finally{pt.transition=o,te=r}return null}function Kx(e,t,n,r){do no();while(Mn!==null);if(X&6)throw Error(I(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(E0(e,s),e===Pe&&(be=Pe=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ui||(ui=!0,ng($i,function(){return no(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pt.transition,pt.transition=null;var i=te;te=1;var l=X;X|=4,Gu.current=null,Bx(e,n),Kh(n,e),mx(mc),Gi=!!pc,mc=pc=null,e.current=n,Ux(n),y0(),X=l,te=i,pt.transition=s}else e.current=n;if(ui&&(ui=!1,Mn=e,aa=o),s=e.pendingLanes,s===0&&(Bn=null),w0(n.stateNode),Ye(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ia)throw ia=!1,e=Ic,Ic=null,e;return aa&1&&e.tag!==0&&no(),s=e.pendingLanes,s&1?e===Mc?ls++:(ls=0,Mc=e):ls=0,Qn(),null}function no(){if(Mn!==null){var e=If(aa),t=pt.transition,n=te;try{if(pt.transition=null,te=16>e?16:e,Mn===null)var r=!1;else{if(e=Mn,Mn=null,aa=0,X&6)throw Error(I(331));var o=X;for(X|=4,F=e.current;F!==null;){var s=F,i=s.child;if(F.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:is(8,d,s)}var m=d.child;if(m!==null)m.return=d,F=m;else for(;F!==null;){d=F;var h=d.sibling,p=d.return;if(Wh(d),d===u){F=null;break}if(h!==null){h.return=p,F=h;break}F=p}}}var w=s.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var b=g.sibling;g.sibling=null,g=b}while(g!==null)}}F=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,F=i;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:is(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,F=v;break e}F=s.return}}var f=e.current;for(F=f;F!==null;){i=F;var x=i.child;if(i.subtreeFlags&2064&&x!==null)x.return=i,F=x;else e:for(i=f;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ja(9,l)}}catch(k){he(l,l.return,k)}if(l===i){F=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,F=S;break e}F=l.return}}if(X=o,Qn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(wa,e)}catch{}r=!0}return r}finally{te=n,pt.transition=t}}return!1}function Vp(e,t,n){t=wo(n,t),t=Ih(e,t,1),e=zn(e,t,1),t=Be(),e!==null&&(Fs(e,1,t),Ye(e,t))}function he(e,t,n){if(e.tag===3)Vp(e,e,n);else for(;t!==null;){if(t.tag===3){Vp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=wo(n,e),e=Mh(t,e,1),t=zn(t,e,1),e=Be(),t!==null&&(Fs(t,1,e),Ye(t,e));break}}t=t.return}}function qx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Te&n)===n&&(Se===4||Se===3&&(Te&130023424)===Te&&500>ve()-Ku?mr(e,0):Hu|=n),Ye(e,t)}function eg(e,t){t===0&&(e.mode&1?(t=ei,ei<<=1,!(ei&130023424)&&(ei=4194304)):t=1);var n=Be();e=sn(e,t),e!==null&&(Fs(e,t,n),Ye(e,n))}function Yx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eg(e,n)}function Qx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),eg(e,n)}var tg;tg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Lx(e,t,n);He=!!(e.flags&131072)}else He=!1,ce&&t.flags&1048576&&sh(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ji(e,t),e=t.pendingProps;var o=vo(t,De.current);to(t,n),o=zu(null,t,r,e,o,n);var s=Bu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(s=!0,Qi(t)):s=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ou(t),o.updater=Ta,t.stateNode=o,o._reactInternals=t,Sc(t,r,e,n),t=Pc(null,t,r,!0,s,n)):(t.tag=0,ce&&s&&Tu(t),Ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ji(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Jx(r),e=bt(r,e),o){case 0:t=Cc(null,t,r,e,n);break e;case 1:t=jp(null,t,r,e,n);break e;case 11:t=Ep(null,t,r,e,n);break e;case 14:t=Tp(null,t,r,bt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bt(r,o),Cc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bt(r,o),jp(e,t,r,o,n);case 3:e:{if(Fh(t),e===null)throw Error(I(387));r=t.pendingProps,s=t.memoizedState,o=s.element,dh(e,t),ta(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){o=wo(Error(I(423)),t),t=Rp(e,t,r,n,o);break e}else if(r!==o){o=wo(Error(I(424)),t),t=Rp(e,t,r,n,o);break e}else for(Ze=Vn(t.stateNode.containerInfo.firstChild),et=t,ce=!0,Pt=null,n=ch(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yo(),r===o){t=an(e,t,n);break e}Ve(e,t,r,n)}t=t.child}return t;case 5:return ph(t),e===null&&xc(t),r=t.type,o=t.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,fc(r,o)?i=null:s!==null&&fc(r,s)&&(t.flags|=32),Lh(e,t),Ve(e,t,i,n),t.child;case 6:return e===null&&xc(t),null;case 13:return Vh(e,t,n);case 4:return Du(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xo(t,null,r,n):Ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bt(r,o),Ep(e,t,r,o,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,s=t.memoizedProps,i=o.value,re(Zi,r._currentValue),r._currentValue=i,s!==null)if(Tt(s.value,i)){if(s.children===o.children&&!Ke.current){t=an(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=nn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),bc(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(I(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),bc(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,to(t,n),o=mt(o),r=r(o),t.flags|=1,Ve(e,t,r,n),t.child;case 14:return r=t.type,o=bt(r,t.pendingProps),o=bt(r.type,o),Tp(e,t,r,o,n);case 15:return Oh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bt(r,o),ji(e,t),t.tag=1,qe(r)?(e=!0,Qi(t)):e=!1,to(t,n),_h(t,r,o),Sc(t,r,o,n),Pc(null,t,r,!0,e,n);case 19:return zh(e,t,n);case 22:return Dh(e,t,n)}throw Error(I(156,t.tag))};function ng(e,t){return jf(e,t)}function Xx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new Xx(e,t,n,r)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jx(e){if(typeof e=="function")return Xu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gu)return 11;if(e===vu)return 14}return 2}function $n(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,r,o,s){var i=2;if(r=e,typeof e=="function")Xu(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Dr:return fr(n.children,o,s,t);case hu:i=8,o|=8;break;case Hl:return e=dt(12,n,t,o|2),e.elementType=Hl,e.lanes=s,e;case Kl:return e=dt(13,n,t,o),e.elementType=Kl,e.lanes=s,e;case ql:return e=dt(19,n,t,o),e.elementType=ql,e.lanes=s,e;case pf:return Aa(n,o,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uf:i=10;break e;case df:i=9;break e;case gu:i=11;break e;case vu:i=14;break e;case kn:i=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=dt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=s,t}function fr(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function Aa(e,t,n,r){return e=dt(22,e,r,t),e.elementType=pf,e.lanes=n,e.stateNode={isHidden:!1},e}function El(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zx(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ju(e,t,n,r,o,s,i,l,c){return e=new Zx(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=dt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(s),e}function eb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Or,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rg(e){if(!e)return Gn;e=e._reactInternals;e:{if(kr(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(qe(n))return rh(e,n,t)}return t}function og(e,t,n,r,o,s,i,l,c){return e=Ju(n,r,!0,e,o,s,i,l,c),e.context=rg(null),n=e.current,r=Be(),o=Un(n),s=nn(r,o),s.callback=t??null,zn(n,s,o),e.current.lanes=o,Fs(e,o,r),Ye(e,r),e}function _a(e,t,n,r){var o=t.current,s=Be(),i=Un(o);return n=rg(n),t.context===null?t.context=n:t.pendingContext=n,t=nn(s,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zn(o,t,i),e!==null&&(Et(e,o,i,s),Ni(e,o,i)),i}function ca(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zu(e,t){zp(e,t),(e=e.alternate)&&zp(e,t)}function tb(){return null}var sg=typeof reportError=="function"?reportError:function(e){console.error(e)};function ed(e){this._internalRoot=e}Ia.prototype.render=ed.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));_a(e,t,null,null)};Ia.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xr(function(){_a(null,e,null,null)}),t[on]=null}};function Ia(e){this._internalRoot=e}Ia.prototype.unstable_scheduleHydration=function(e){if(e){var t=Df();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&t!==0&&t<Pn[n].priority;n++);Pn.splice(n,0,e),n===0&&Ff(e)}};function td(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function nb(e,t,n,r,o){if(o){if(typeof r=="function"){var s=r;r=function(){var u=ca(i);s.call(u)}}var i=og(t,r,e,0,null,!1,!1,"",Bp);return e._reactRootContainer=i,e[on]=i.current,xs(e.nodeType===8?e.parentNode:e),xr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ca(c);l.call(u)}}var c=Ju(e,0,!1,null,null,!1,!1,"",Bp);return e._reactRootContainer=c,e[on]=c.current,xs(e.nodeType===8?e.parentNode:e),xr(function(){_a(t,c,n,r)}),c}function Oa(e,t,n,r,o){var s=n._reactRootContainer;if(s){var i=s;if(typeof o=="function"){var l=o;o=function(){var c=ca(i);l.call(c)}}_a(t,i,e,o)}else i=nb(n,t,e,o,r);return ca(i)}Mf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qo(t.pendingLanes);n!==0&&(bu(t,n|1),Ye(t,ve()),!(X&6)&&(So=ve()+500,Qn()))}break;case 13:xr(function(){var r=sn(e,1);if(r!==null){var o=Be();Et(r,e,1,o)}}),Zu(e,1)}};wu=function(e){if(e.tag===13){var t=sn(e,134217728);if(t!==null){var n=Be();Et(t,e,134217728,n)}Zu(e,134217728)}};Of=function(e){if(e.tag===13){var t=Un(e),n=sn(e,t);if(n!==null){var r=Be();Et(n,e,t,r)}Zu(e,t)}};Df=function(){return te};Lf=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};oc=function(e,t,n){switch(t){case"input":if(Xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Pa(r);if(!o)throw Error(I(90));ff(r),Xl(r,o)}}}break;case"textarea":gf(e,n);break;case"select":t=n.value,t!=null&&Xr(e,!!n.multiple,t,!1)}};kf=qu;Cf=xr;var rb={usingClientEntryPoint:!1,Events:[zs,zr,Pa,wf,Sf,qu]},Bo={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ob={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ef(e),e===null?null:e.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||tb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!di.isDisabled&&di.supportsFiber)try{wa=di.inject(ob),Ut=di}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rb;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(t))throw Error(I(200));return eb(e,t,null,n)};rt.createRoot=function(e,t){if(!td(e))throw Error(I(299));var n=!1,r="",o=sg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ju(e,1,!1,null,null,n,!1,r,o),e[on]=t.current,xs(e.nodeType===8?e.parentNode:e),new ed(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Ef(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return xr(e)};rt.hydrate=function(e,t,n){if(!Ma(t))throw Error(I(200));return Oa(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!td(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,o=!1,s="",i=sg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=og(t,null,e,1,n??null,o,!1,s,i),e[on]=t.current,xs(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ia(t)};rt.render=function(e,t,n){if(!Ma(t))throw Error(I(200));return Oa(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!Ma(e))throw Error(I(40));return e._reactRootContainer?(xr(function(){Oa(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1};rt.unstable_batchedUpdates=qu;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ma(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Oa(e,t,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig)}catch(e){console.error(e)}}ig(),sf.exports=rt;var Us=sf.exports;const ag=Km(Us);var lg,Up=Us;lg=Up.createRoot,Up.hydrateRoot;const sb=1,ib=1e6;let jl=0;function ab(){return jl=(jl+1)%Number.MAX_SAFE_INTEGER,jl.toString()}const Rl=new Map,$p=e=>{if(Rl.has(e))return;const t=setTimeout(()=>{Rl.delete(e),cs({type:"REMOVE_TOAST",toastId:e})},ib);Rl.set(e,t)},lb=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,sb)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?$p(n):e.toasts.forEach(r=>{$p(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},Ii=[];let Mi={toasts:[]};function cs(e){Mi=lb(Mi,e),Ii.forEach(t=>{t(Mi)})}function cb({...e}){const t=ab(),n=o=>cs({type:"UPDATE_TOAST",toast:{...o,id:t}}),r=()=>cs({type:"DISMISS_TOAST",toastId:t});return cs({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:o=>{o||r()}}}),{id:t,dismiss:r,update:n}}function ub(){const[e,t]=y.useState(Mi);return y.useEffect(()=>(Ii.push(t),()=>{const n=Ii.indexOf(t);n>-1&&Ii.splice(n,1)}),[e]),{...e,toast:cb,dismiss:n=>cs({type:"DISMISS_TOAST",toastId:n})}}function ie(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Wp(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function cg(...e){return t=>{let n=!1;const r=e.map(o=>{const s=Wp(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():Wp(e[o],null)}}}}function Le(...e){return y.useCallback(cg(...e),e)}function db(e,t){const n=y.createContext(t),r=s=>{const{children:i,...l}=s,c=y.useMemo(()=>l,Object.values(l));return a.jsx(n.Provider,{value:c,children:i})};r.displayName=e+"Provider";function o(s){const i=y.useContext(n);if(i)return i;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return[r,o]}function To(e,t=[]){let n=[];function r(s,i){const l=y.createContext(i),c=n.length;n=[...n,i];const u=m=>{var v;const{scope:h,children:p,...w}=m,g=((v=h==null?void 0:h[e])==null?void 0:v[c])||l,b=y.useMemo(()=>w,Object.values(w));return a.jsx(g.Provider,{value:b,children:p})};u.displayName=s+"Provider";function d(m,h){var g;const p=((g=h==null?void 0:h[e])==null?void 0:g[c])||l,w=y.useContext(p);if(w)return w;if(i!==void 0)return i;throw new Error(`\`${m}\` must be used within \`${s}\``)}return[u,d]}const o=()=>{const s=n.map(i=>y.createContext(i));return function(l){const c=(l==null?void 0:l[e])||s;return y.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return o.scopeName=e,[r,pb(o,...t)]}function pb(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const i=r.reduce((l,{useScope:c,scopeName:u})=>{const m=c(s)[`__scope${u}`];return{...l,...m}},{});return y.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function Ts(e){const t=fb(e),n=y.forwardRef((r,o)=>{const{children:s,...i}=r,l=y.Children.toArray(s),c=l.find(gb);if(c){const u=c.props.children,d=l.map(m=>m===c?y.Children.count(u)>1?y.Children.only(null):y.isValidElement(u)?u.props.children:null:m);return a.jsx(t,{...i,ref:o,children:y.isValidElement(u)?y.cloneElement(u,void 0,d):null})}return a.jsx(t,{...i,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}var mb=Ts("Slot");function fb(e){const t=y.forwardRef((n,r)=>{const{children:o,...s}=n;if(y.isValidElement(o)){const i=yb(o),l=vb(s,o.props);return o.type!==y.Fragment&&(l.ref=r?cg(r,i):i),y.cloneElement(o,l)}return y.Children.count(o)>1?y.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var ug=Symbol("radix.slottable");function hb(e){const t=({children:n})=>a.jsx(a.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=ug,t}function gb(e){return y.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ug}function vb(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...l)=>{const c=s(...l);return o(...l),c}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function yb(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function xb(e){const t=e+"CollectionProvider",[n,r]=To(t),[o,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),i=g=>{const{scope:b,children:v}=g,f=O.useRef(null),x=O.useRef(new Map).current;return a.jsx(o,{scope:b,itemMap:x,collectionRef:f,children:v})};i.displayName=t;const l=e+"CollectionSlot",c=Ts(l),u=O.forwardRef((g,b)=>{const{scope:v,children:f}=g,x=s(l,v),S=Le(b,x.collectionRef);return a.jsx(c,{ref:S,children:f})});u.displayName=l;const d=e+"CollectionItemSlot",m="data-radix-collection-item",h=Ts(d),p=O.forwardRef((g,b)=>{const{scope:v,children:f,...x}=g,S=O.useRef(null),k=Le(b,S),P=s(d,v);return O.useEffect(()=>(P.itemMap.set(S,{ref:S,...x}),()=>void P.itemMap.delete(S))),a.jsx(h,{[m]:"",ref:k,children:f})});p.displayName=d;function w(g){const b=s(e+"CollectionConsumer",g);return O.useCallback(()=>{const f=b.collectionRef.current;if(!f)return[];const x=Array.from(f.querySelectorAll(`[${m}]`));return Array.from(b.itemMap.values()).sort((P,N)=>x.indexOf(P.ref.current)-x.indexOf(N.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:i,Slot:u,ItemSlot:p},w,r]}var bb=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],me=bb.reduce((e,t)=>{const n=Ts(`Primitive.${t}`),r=y.forwardRef((o,s)=>{const{asChild:i,...l}=o,c=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(c,{...l,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function dg(e,t){e&&Us.flushSync(()=>e.dispatchEvent(t))}function Gt(e){const t=y.useRef(e);return y.useEffect(()=>{t.current=e}),y.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function wb(e,t=globalThis==null?void 0:globalThis.document){const n=Gt(e);y.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Sb="DismissableLayer",Lc="dismissableLayer.update",kb="dismissableLayer.pointerDownOutside",Cb="dismissableLayer.focusOutside",Gp,pg=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Da=y.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:s,onInteractOutside:i,onDismiss:l,...c}=e,u=y.useContext(pg),[d,m]=y.useState(null),h=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=y.useState({}),w=Le(t,N=>m(N)),g=Array.from(u.layers),[b]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),v=g.indexOf(b),f=d?g.indexOf(d):-1,x=u.layersWithOutsidePointerEventsDisabled.size>0,S=f>=v,k=Nb(N=>{const C=N.target,E=[...u.branches].some(M=>M.contains(C));!S||E||(o==null||o(N),i==null||i(N),N.defaultPrevented||l==null||l())},h),P=Eb(N=>{const C=N.target;[...u.branches].some(M=>M.contains(C))||(s==null||s(N),i==null||i(N),N.defaultPrevented||l==null||l())},h);return wb(N=>{f===u.layers.size-1&&(r==null||r(N),!N.defaultPrevented&&l&&(N.preventDefault(),l()))},h),y.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Gp=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Hp(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=Gp)}},[d,h,n,u]),y.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Hp())},[d,u]),y.useEffect(()=>{const N=()=>p({});return document.addEventListener(Lc,N),()=>document.removeEventListener(Lc,N)},[]),a.jsx(me.div,{...c,ref:w,style:{pointerEvents:x?S?"auto":"none":void 0,...e.style},onFocusCapture:ie(e.onFocusCapture,P.onFocusCapture),onBlurCapture:ie(e.onBlurCapture,P.onBlurCapture),onPointerDownCapture:ie(e.onPointerDownCapture,k.onPointerDownCapture)})});Da.displayName=Sb;var Pb="DismissableLayerBranch",mg=y.forwardRef((e,t)=>{const n=y.useContext(pg),r=y.useRef(null),o=Le(t,r);return y.useEffect(()=>{const s=r.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),a.jsx(me.div,{...e,ref:o})});mg.displayName=Pb;function Nb(e,t=globalThis==null?void 0:globalThis.document){const n=Gt(e),r=y.useRef(!1),o=y.useRef(()=>{});return y.useEffect(()=>{const s=l=>{if(l.target&&!r.current){let c=function(){fg(kb,n,u,{discrete:!0})};const u={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=c,t.addEventListener("click",o.current,{once:!0})):c()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",s),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Eb(e,t=globalThis==null?void 0:globalThis.document){const n=Gt(e),r=y.useRef(!1);return y.useEffect(()=>{const o=s=>{s.target&&!r.current&&fg(Cb,n,{originalEvent:s},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Hp(){const e=new CustomEvent(Lc);document.dispatchEvent(e)}function fg(e,t,n,{discrete:r}){const o=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?dg(o,s):o.dispatchEvent(s)}var Tb=Da,jb=mg,Ht=globalThis!=null&&globalThis.document?y.useLayoutEffect:()=>{},Rb="Portal",nd=y.forwardRef((e,t)=>{var l;const{container:n,...r}=e,[o,s]=y.useState(!1);Ht(()=>s(!0),[]);const i=n||o&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return i?ag.createPortal(a.jsx(me.div,{...r,ref:t}),i):null});nd.displayName=Rb;function Ab(e,t){return y.useReducer((n,r)=>t[n][r]??n,e)}var Cr=e=>{const{present:t,children:n}=e,r=_b(t),o=typeof n=="function"?n({present:r.isPresent}):y.Children.only(n),s=Le(r.ref,Ib(o));return typeof n=="function"||r.isPresent?y.cloneElement(o,{ref:s}):null};Cr.displayName="Presence";function _b(e){const[t,n]=y.useState(),r=y.useRef(null),o=y.useRef(e),s=y.useRef("none"),i=e?"mounted":"unmounted",[l,c]=Ab(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const u=pi(r.current);s.current=l==="mounted"?u:"none"},[l]),Ht(()=>{const u=r.current,d=o.current;if(d!==e){const h=s.current,p=pi(u);e?c("MOUNT"):p==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(d&&h!==p?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,c]),Ht(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,m=p=>{const g=pi(r.current).includes(p.animationName);if(p.target===t&&g&&(c("ANIMATION_END"),!o.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},h=p=>{p.target===t&&(s.current=pi(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",m),t.addEventListener("animationend",m),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",m),t.removeEventListener("animationend",m)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:y.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function pi(e){return(e==null?void 0:e.animationName)||"none"}function Ib(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Mb=du[" useInsertionEffect ".trim().toString()]||Ht;function rd({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,s,i]=Ob({defaultProp:t,onChange:n}),l=e!==void 0,c=l?e:o;{const d=y.useRef(e!==void 0);y.useEffect(()=>{const m=d.current;m!==l&&console.warn(`${r} is changing from ${m?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=l},[l,r])}const u=y.useCallback(d=>{var m;if(l){const h=Db(d)?d(e):d;h!==e&&((m=i.current)==null||m.call(i,h))}else s(d)},[l,e,s,i]);return[c,u]}function Ob({defaultProp:e,onChange:t}){const[n,r]=y.useState(e),o=y.useRef(n),s=y.useRef(t);return Mb(()=>{s.current=t},[t]),y.useEffect(()=>{var i;o.current!==n&&((i=s.current)==null||i.call(s,n),o.current=n)},[n,o]),[n,r,s]}function Db(e){return typeof e=="function"}var Lb=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Fb="VisuallyHidden",La=y.forwardRef((e,t)=>a.jsx(me.span,{...e,ref:t,style:{...Lb,...e.style}}));La.displayName=Fb;var Vb=La,od="ToastProvider",[sd,zb,Bb]=xb("Toast"),[hg,dP]=To("Toast",[Bb]),[Ub,Fa]=hg(od),gg=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:s=50,children:i}=e,[l,c]=y.useState(null),[u,d]=y.useState(0),m=y.useRef(!1),h=y.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${od}\`. Expected non-empty \`string\`.`),a.jsx(sd.Provider,{scope:t,children:a.jsx(Ub,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:s,toastCount:u,viewport:l,onViewportChange:c,onToastAdd:y.useCallback(()=>d(p=>p+1),[]),onToastRemove:y.useCallback(()=>d(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:h,children:i})})};gg.displayName=od;var vg="ToastViewport",$b=["F8"],Fc="toast.viewportPause",Vc="toast.viewportResume",yg=y.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=$b,label:o="Notifications ({hotkey})",...s}=e,i=Fa(vg,n),l=zb(n),c=y.useRef(null),u=y.useRef(null),d=y.useRef(null),m=y.useRef(null),h=Le(t,m,i.onViewportChange),p=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),w=i.toastCount>0;y.useEffect(()=>{const b=v=>{var x;r.length!==0&&r.every(S=>v[S]||v.code===S)&&((x=m.current)==null||x.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),y.useEffect(()=>{const b=c.current,v=m.current;if(w&&b&&v){const f=()=>{if(!i.isClosePausedRef.current){const P=new CustomEvent(Fc);v.dispatchEvent(P),i.isClosePausedRef.current=!0}},x=()=>{if(i.isClosePausedRef.current){const P=new CustomEvent(Vc);v.dispatchEvent(P),i.isClosePausedRef.current=!1}},S=P=>{!b.contains(P.relatedTarget)&&x()},k=()=>{b.contains(document.activeElement)||x()};return b.addEventListener("focusin",f),b.addEventListener("focusout",S),b.addEventListener("pointermove",f),b.addEventListener("pointerleave",k),window.addEventListener("blur",f),window.addEventListener("focus",x),()=>{b.removeEventListener("focusin",f),b.removeEventListener("focusout",S),b.removeEventListener("pointermove",f),b.removeEventListener("pointerleave",k),window.removeEventListener("blur",f),window.removeEventListener("focus",x)}}},[w,i.isClosePausedRef]);const g=y.useCallback(({tabbingDirection:b})=>{const f=l().map(x=>{const S=x.ref.current,k=[S,...nw(S)];return b==="forwards"?k:k.reverse()});return(b==="forwards"?f.reverse():f).flat()},[l]);return y.useEffect(()=>{const b=m.current;if(b){const v=f=>{var k,P,N;const x=f.altKey||f.ctrlKey||f.metaKey;if(f.key==="Tab"&&!x){const C=document.activeElement,E=f.shiftKey;if(f.target===b&&E){(k=u.current)==null||k.focus();return}const j=g({tabbingDirection:E?"backwards":"forwards"}),D=j.findIndex(T=>T===C);Al(j.slice(D+1))?f.preventDefault():E?(P=u.current)==null||P.focus():(N=d.current)==null||N.focus()}};return b.addEventListener("keydown",v),()=>b.removeEventListener("keydown",v)}},[l,g]),a.jsxs(jb,{ref:c,role:"region","aria-label":o.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:w?void 0:"none"},children:[w&&a.jsx(zc,{ref:u,onFocusFromOutsideViewport:()=>{const b=g({tabbingDirection:"forwards"});Al(b)}}),a.jsx(sd.Slot,{scope:n,children:a.jsx(me.ol,{tabIndex:-1,...s,ref:h})}),w&&a.jsx(zc,{ref:d,onFocusFromOutsideViewport:()=>{const b=g({tabbingDirection:"backwards"});Al(b)}})]})});yg.displayName=vg;var xg="ToastFocusProxy",zc=y.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,s=Fa(xg,n);return a.jsx(La,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:i=>{var u;const l=i.relatedTarget;!((u=s.viewport)!=null&&u.contains(l))&&r()}})});zc.displayName=xg;var $s="Toast",Wb="toast.swipeStart",Gb="toast.swipeMove",Hb="toast.swipeCancel",Kb="toast.swipeEnd",bg=y.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:o,onOpenChange:s,...i}=e,[l,c]=rd({prop:r,defaultProp:o??!0,onChange:s,caller:$s});return a.jsx(Cr,{present:n||l,children:a.jsx(Qb,{open:l,...i,ref:t,onClose:()=>c(!1),onPause:Gt(e.onPause),onResume:Gt(e.onResume),onSwipeStart:ie(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ie(e.onSwipeMove,u=>{const{x:d,y:m}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${m}px`)}),onSwipeCancel:ie(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ie(e.onSwipeEnd,u=>{const{x:d,y:m}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${m}px`),c(!1)})})})});bg.displayName=$s;var[qb,Yb]=hg($s,{onClose(){}}),Qb=y.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:o,open:s,onClose:i,onEscapeKeyDown:l,onPause:c,onResume:u,onSwipeStart:d,onSwipeMove:m,onSwipeCancel:h,onSwipeEnd:p,...w}=e,g=Fa($s,n),[b,v]=y.useState(null),f=Le(t,T=>v(T)),x=y.useRef(null),S=y.useRef(null),k=o||g.duration,P=y.useRef(0),N=y.useRef(k),C=y.useRef(0),{onToastAdd:E,onToastRemove:M}=g,z=Gt(()=>{var B;(b==null?void 0:b.contains(document.activeElement))&&((B=g.viewport)==null||B.focus()),i()}),j=y.useCallback(T=>{!T||T===1/0||(window.clearTimeout(C.current),P.current=new Date().getTime(),C.current=window.setTimeout(z,T))},[z]);y.useEffect(()=>{const T=g.viewport;if(T){const B=()=>{j(N.current),u==null||u()},U=()=>{const G=new Date().getTime()-P.current;N.current=N.current-G,window.clearTimeout(C.current),c==null||c()};return T.addEventListener(Fc,U),T.addEventListener(Vc,B),()=>{T.removeEventListener(Fc,U),T.removeEventListener(Vc,B)}}},[g.viewport,k,c,u,j]),y.useEffect(()=>{s&&!g.isClosePausedRef.current&&j(k)},[s,k,g.isClosePausedRef,j]),y.useEffect(()=>(E(),()=>M()),[E,M]);const D=y.useMemo(()=>b?Eg(b):null,[b]);return g.viewport?a.jsxs(a.Fragment,{children:[D&&a.jsx(Xb,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:D}),a.jsx(qb,{scope:n,onClose:z,children:Us.createPortal(a.jsx(sd.ItemSlot,{scope:n,children:a.jsx(Tb,{asChild:!0,onEscapeKeyDown:ie(l,()=>{g.isFocusedToastEscapeKeyDownRef.current||z(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:a.jsx(me.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":g.swipeDirection,...w,ref:f,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ie(e.onKeyDown,T=>{T.key==="Escape"&&(l==null||l(T.nativeEvent),T.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,z()))}),onPointerDown:ie(e.onPointerDown,T=>{T.button===0&&(x.current={x:T.clientX,y:T.clientY})}),onPointerMove:ie(e.onPointerMove,T=>{if(!x.current)return;const B=T.clientX-x.current.x,U=T.clientY-x.current.y,G=!!S.current,A=["left","right"].includes(g.swipeDirection),_=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,L=A?_(0,B):0,H=A?0:_(0,U),V=T.pointerType==="touch"?10:2,q={x:L,y:H},Q={originalEvent:T,delta:q};G?(S.current=q,mi(Gb,m,Q,{discrete:!1})):Kp(q,g.swipeDirection,V)?(S.current=q,mi(Wb,d,Q,{discrete:!1}),T.target.setPointerCapture(T.pointerId)):(Math.abs(B)>V||Math.abs(U)>V)&&(x.current=null)}),onPointerUp:ie(e.onPointerUp,T=>{const B=S.current,U=T.target;if(U.hasPointerCapture(T.pointerId)&&U.releasePointerCapture(T.pointerId),S.current=null,x.current=null,B){const G=T.currentTarget,A={originalEvent:T,delta:B};Kp(B,g.swipeDirection,g.swipeThreshold)?mi(Kb,p,A,{discrete:!0}):mi(Hb,h,A,{discrete:!0}),G.addEventListener("click",_=>_.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),Xb=e=>{const{__scopeToast:t,children:n,...r}=e,o=Fa($s,t),[s,i]=y.useState(!1),[l,c]=y.useState(!1);return ew(()=>i(!0)),y.useEffect(()=>{const u=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(u)},[]),l?null:a.jsx(nd,{asChild:!0,children:a.jsx(La,{...r,children:s&&a.jsxs(a.Fragment,{children:[o.label," ",n]})})})},Jb="ToastTitle",wg=y.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(me.div,{...r,ref:t})});wg.displayName=Jb;var Zb="ToastDescription",Sg=y.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(me.div,{...r,ref:t})});Sg.displayName=Zb;var kg="ToastAction",Cg=y.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?a.jsx(Ng,{altText:n,asChild:!0,children:a.jsx(id,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${kg}\`. Expected non-empty \`string\`.`),null)});Cg.displayName=kg;var Pg="ToastClose",id=y.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,o=Yb(Pg,n);return a.jsx(Ng,{asChild:!0,children:a.jsx(me.button,{type:"button",...r,ref:t,onClick:ie(e.onClick,o.onClose)})})});id.displayName=Pg;var Ng=y.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...o}=e;return a.jsx(me.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function Eg(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),tw(r)){const o=r.ariaHidden||r.hidden||r.style.display==="none",s=r.dataset.radixToastAnnounceExclude==="";if(!o)if(s){const i=r.dataset.radixToastAnnounceAlt;i&&t.push(i)}else t.push(...Eg(r))}}),t}function mi(e,t,n,{discrete:r}){const o=n.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?dg(o,s):o.dispatchEvent(s)}var Kp=(e,t,n=0)=>{const r=Math.abs(e.x),o=Math.abs(e.y),s=r>o;return t==="left"||t==="right"?s&&r>n:!s&&o>n};function ew(e=()=>{}){const t=Gt(e);Ht(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function tw(e){return e.nodeType===e.ELEMENT_NODE}function nw(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Al(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var rw=gg,Tg=yg,jg=bg,Rg=wg,Ag=Sg,_g=Cg,Ig=id;function Mg(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Mg(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Og(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Mg(e))&&(r&&(r+=" "),r+=t);return r}const qp=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Yp=Og,ad=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Yp(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:s}=t,i=Object.keys(o).map(u=>{const d=n==null?void 0:n[u],m=s==null?void 0:s[u];if(d===null)return null;const h=qp(d)||qp(m);return o[u][h]}),l=n&&Object.entries(n).reduce((u,d)=>{let[m,h]=d;return h===void 0||(u[m]=h),u},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:m,className:h,...p}=d;return Object.entries(p).every(w=>{let[g,b]=w;return Array.isArray(b)?b.includes({...s,...l}[g]):{...s,...l}[g]===b})?[...u,m,h]:u},[]);return Yp(e,i,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dg=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:s,iconNode:i,...l},c)=>y.createElement("svg",{ref:c,...sw,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Dg("lucide",o),...l},[...i.map(([u,d])=>y.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(e,t)=>{const n=y.forwardRef(({className:r,...o},s)=>y.createElement(iw,{ref:s,iconNode:t,className:Dg(`lucide-${ow(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=ee("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=ee("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=ee("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=ee("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=ee("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=ee("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=ee("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=ee("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=ee("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=ee("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=ee("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=ee("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=ee("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=ee("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=ee("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=ee("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=ee("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=ee("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=ee("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=ee("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=ee("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=ee("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=ee("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=ee("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=ee("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=ee("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=ee("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=ee("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),ld="-",yw=e=>{const t=bw(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:i=>{const l=i.split(ld);return l[0]===""&&l.length!==1&&l.shift(),Bg(l,t)||xw(i)},getConflictingClassGroupIds:(i,l)=>{const c=n[i]||[];return l&&r[i]?[...c,...r[i]]:c}}},Bg=(e,t)=>{var i;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),o=r?Bg(e.slice(1),r):void 0;if(o)return o;if(t.validators.length===0)return;const s=e.join(ld);return(i=t.validators.find(({validator:l})=>l(s)))==null?void 0:i.classGroupId},Zp=/^\[(.+)\]$/,xw=e=>{if(Zp.test(e)){const t=Zp.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},bw=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Sw(Object.entries(e.classGroups),n).forEach(([s,i])=>{Wc(i,r,s,t)}),r},Wc=(e,t,n,r)=>{e.forEach(o=>{if(typeof o=="string"){const s=o===""?t:em(t,o);s.classGroupId=n;return}if(typeof o=="function"){if(ww(o)){Wc(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(([s,i])=>{Wc(i,em(t,s),n,r)})})},em=(e,t)=>{let n=e;return t.split(ld).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},ww=e=>e.isThemeGetter,Sw=(e,t)=>t?e.map(([n,r])=>{const o=r.map(s=>typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([i,l])=>[t+i,l])):s);return[n,o]}):e,kw=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const o=(s,i)=>{n.set(s,i),t++,t>e&&(t=0,r=n,n=new Map)};return{get(s){let i=n.get(s);if(i!==void 0)return i;if((i=r.get(s))!==void 0)return o(s,i),i},set(s,i){n.has(s)?n.set(s,i):o(s,i)}}},Ug="!",Cw=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,o=t[0],s=t.length,i=l=>{const c=[];let u=0,d=0,m;for(let b=0;b<l.length;b++){let v=l[b];if(u===0){if(v===o&&(r||l.slice(b,b+s)===t)){c.push(l.slice(d,b)),d=b+s;continue}if(v==="/"){m=b;continue}}v==="["?u++:v==="]"&&u--}const h=c.length===0?l:l.substring(d),p=h.startsWith(Ug),w=p?h.substring(1):h,g=m&&m>d?m-d:void 0;return{modifiers:c,hasImportantModifier:p,baseClassName:w,maybePostfixModifierPosition:g}};return n?l=>n({className:l,parseClassName:i}):i},Pw=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},Nw=e=>({cache:kw(e.cacheSize),parseClassName:Cw(e),...yw(e)}),Ew=/\s+/,Tw=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:o}=t,s=[],i=e.trim().split(Ew);let l="";for(let c=i.length-1;c>=0;c-=1){const u=i[c],{modifiers:d,hasImportantModifier:m,baseClassName:h,maybePostfixModifierPosition:p}=n(u);let w=!!p,g=r(w?h.substring(0,p):h);if(!g){if(!w){l=u+(l.length>0?" "+l:l);continue}if(g=r(h),!g){l=u+(l.length>0?" "+l:l);continue}w=!1}const b=Pw(d).join(":"),v=m?b+Ug:b,f=v+g;if(s.includes(f))continue;s.push(f);const x=o(g,w);for(let S=0;S<x.length;++S){const k=x[S];s.push(v+k)}l=u+(l.length>0?" "+l:l)}return l};function jw(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=$g(t))&&(r&&(r+=" "),r+=n);return r}const $g=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=$g(e[r]))&&(n&&(n+=" "),n+=t);return n};function Rw(e,...t){let n,r,o,s=i;function i(c){const u=t.reduce((d,m)=>m(d),e());return n=Nw(u),r=n.cache.get,o=n.cache.set,s=l,l(c)}function l(c){const u=r(c);if(u)return u;const d=Tw(c,n);return o(c,d),d}return function(){return s(jw.apply(null,arguments))}}const oe=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Wg=/^\[(?:([a-z-]+):)?(.+)\]$/i,Aw=/^\d+\/\d+$/,_w=new Set(["px","full","screen"]),Iw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Mw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ow=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Dw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Lw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Yt=e=>ro(e)||_w.has(e)||Aw.test(e),yn=e=>jo(e,"length",Gw),ro=e=>!!e&&!Number.isNaN(Number(e)),Il=e=>jo(e,"number",ro),Uo=e=>!!e&&Number.isInteger(Number(e)),Fw=e=>e.endsWith("%")&&ro(e.slice(0,-1)),K=e=>Wg.test(e),xn=e=>Iw.test(e),Vw=new Set(["length","size","percentage"]),zw=e=>jo(e,Vw,Gg),Bw=e=>jo(e,"position",Gg),Uw=new Set(["image","url"]),$w=e=>jo(e,Uw,Kw),Ww=e=>jo(e,"",Hw),$o=()=>!0,jo=(e,t,n)=>{const r=Wg.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},Gw=e=>Mw.test(e)&&!Ow.test(e),Gg=()=>!1,Hw=e=>Dw.test(e),Kw=e=>Lw.test(e),qw=()=>{const e=oe("colors"),t=oe("spacing"),n=oe("blur"),r=oe("brightness"),o=oe("borderColor"),s=oe("borderRadius"),i=oe("borderSpacing"),l=oe("borderWidth"),c=oe("contrast"),u=oe("grayscale"),d=oe("hueRotate"),m=oe("invert"),h=oe("gap"),p=oe("gradientColorStops"),w=oe("gradientColorStopPositions"),g=oe("inset"),b=oe("margin"),v=oe("opacity"),f=oe("padding"),x=oe("saturate"),S=oe("scale"),k=oe("sepia"),P=oe("skew"),N=oe("space"),C=oe("translate"),E=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto",K,t],j=()=>[K,t],D=()=>["",Yt,yn],T=()=>["auto",ro,K],B=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],U=()=>["solid","dashed","dotted","double","none"],G=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],A=()=>["start","end","center","between","around","evenly","stretch"],_=()=>["","0",K],L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>[ro,K];return{cacheSize:500,separator:":",theme:{colors:[$o],spacing:[Yt,yn],blur:["none","",xn,K],brightness:H(),borderColor:[e],borderRadius:["none","","full",xn,K],borderSpacing:j(),borderWidth:D(),contrast:H(),grayscale:_(),hueRotate:H(),invert:_(),gap:j(),gradientColorStops:[e],gradientColorStopPositions:[Fw,yn],inset:z(),margin:z(),opacity:H(),padding:j(),saturate:H(),scale:H(),sepia:_(),skew:H(),space:j(),translate:j()},classGroups:{aspect:[{aspect:["auto","square","video",K]}],container:["container"],columns:[{columns:[xn]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...B(),K]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Uo,K]}],basis:[{basis:z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",K]}],grow:[{grow:_()}],shrink:[{shrink:_()}],order:[{order:["first","last","none",Uo,K]}],"grid-cols":[{"grid-cols":[$o]}],"col-start-end":[{col:["auto",{span:["full",Uo,K]},K]}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":[$o]}],"row-start-end":[{row:["auto",{span:[Uo,K]},K]}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",K]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",K]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...A()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...A(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...A(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[f]}],px:[{px:[f]}],py:[{py:[f]}],ps:[{ps:[f]}],pe:[{pe:[f]}],pt:[{pt:[f]}],pr:[{pr:[f]}],pb:[{pb:[f]}],pl:[{pl:[f]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[N]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[N]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",K,t]}],"min-w":[{"min-w":[K,t,"min","max","fit"]}],"max-w":[{"max-w":[K,t,"none","full","min","max","fit","prose",{screen:[xn]},xn]}],h:[{h:[K,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[K,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[K,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[K,t,"auto","min","max","fit"]}],"font-size":[{text:["base",xn,yn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Il]}],"font-family":[{font:[$o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",K]}],"line-clamp":[{"line-clamp":["none",ro,Il]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Yt,K]}],"list-image":[{"list-image":["none",K]}],"list-style-type":[{list:["none","disc","decimal",K]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Yt,yn]}],"underline-offset":[{"underline-offset":["auto",Yt,K]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:j()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",K]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",K]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...B(),Bw]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",zw]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$w]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...U(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:U()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-s":[{"border-s":[o]}],"border-color-e":[{"border-e":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:["",...U()]}],"outline-offset":[{"outline-offset":[Yt,K]}],"outline-w":[{outline:[Yt,yn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[Yt,yn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",xn,Ww]}],"shadow-color":[{shadow:[$o]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...G(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":G()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",xn,K]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[m]}],saturate:[{saturate:[x]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",K]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",K]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",K]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[Uo,K]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",K]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",K]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":j()}],"scroll-mx":[{"scroll-mx":j()}],"scroll-my":[{"scroll-my":j()}],"scroll-ms":[{"scroll-ms":j()}],"scroll-me":[{"scroll-me":j()}],"scroll-mt":[{"scroll-mt":j()}],"scroll-mr":[{"scroll-mr":j()}],"scroll-mb":[{"scroll-mb":j()}],"scroll-ml":[{"scroll-ml":j()}],"scroll-p":[{"scroll-p":j()}],"scroll-px":[{"scroll-px":j()}],"scroll-py":[{"scroll-py":j()}],"scroll-ps":[{"scroll-ps":j()}],"scroll-pe":[{"scroll-pe":j()}],"scroll-pt":[{"scroll-pt":j()}],"scroll-pr":[{"scroll-pr":j()}],"scroll-pb":[{"scroll-pb":j()}],"scroll-pl":[{"scroll-pl":j()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",K]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Yt,yn,Il]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Yw=Rw(qw);function ye(...e){return Yw(Og(e))}const Qw=rw,Hg=y.forwardRef(({className:e,...t},n)=>a.jsx(Tg,{ref:n,className:ye("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Hg.displayName=Tg.displayName;const Xw=ad("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Kg=y.forwardRef(({className:e,variant:t,...n},r)=>a.jsx(jg,{ref:r,className:ye(Xw({variant:t}),e),...n}));Kg.displayName=jg.displayName;const Jw=y.forwardRef(({className:e,...t},n)=>a.jsx(_g,{ref:n,className:ye("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));Jw.displayName=_g.displayName;const qg=y.forwardRef(({className:e,...t},n)=>a.jsx(Ig,{ref:n,className:ye("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:a.jsx(Vg,{className:"h-4 w-4"})}));qg.displayName=Ig.displayName;const Yg=y.forwardRef(({className:e,...t},n)=>a.jsx(Rg,{ref:n,className:ye("text-sm font-semibold",e),...t}));Yg.displayName=Rg.displayName;const Qg=y.forwardRef(({className:e,...t},n)=>a.jsx(Ag,{ref:n,className:ye("text-sm opacity-90",e),...t}));Qg.displayName=Ag.displayName;function Zw(){const{toasts:e}=ub();return a.jsxs(Qw,{children:[e.map(function({id:t,title:n,description:r,action:o,...s}){return a.jsxs(Kg,{...s,children:[a.jsxs("div",{className:"grid gap-1",children:[n&&a.jsx(Yg,{children:n}),r&&a.jsx(Qg,{children:r})]}),o,a.jsx(qg,{})]},t)}),a.jsx(Hg,{})]})}var tm=["light","dark"],e1="(prefers-color-scheme: dark)",t1=y.createContext(void 0),n1={setTheme:e=>{},themes:[]},r1=()=>{var e;return(e=y.useContext(t1))!=null?e:n1};y.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:o,defaultTheme:s,value:i,attrs:l,nonce:c})=>{let u=s==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(w=>`'${w}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,m=o?tm.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(w,g=!1,b=!0)=>{let v=i?i[w]:w,f=g?w+"|| ''":`'${v}'`,x="";return o&&b&&!g&&tm.includes(w)&&(x+=`d.style.colorScheme = '${w}';`),n==="class"?g||v?x+=`c.add(${f})`:x+="null":v&&(x+=`d[s](n,${f})`),x},p=e?`!function(){${d}${h(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${e1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}${u?"":"else{"+h(s,!1,!1)+"}"}${m}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${h(i?"x[e]":"e",!0)}}else{${h(s,!1,!1)};}${m}}catch(t){}}();`;return y.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:p}})});var o1=e=>{switch(e){case"success":return a1;case"info":return c1;case"warning":return l1;case"error":return u1;default:return null}},s1=Array(12).fill(0),i1=({visible:e,className:t})=>O.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},O.createElement("div",{className:"sonner-spinner"},s1.map((n,r)=>O.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),a1=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),l1=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),c1=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),u1=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},O.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),d1=O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},O.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),O.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),p1=()=>{let[e,t]=O.useState(document.hidden);return O.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Gc=1,m1=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,o=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Gc++,s=this.toasts.find(l=>l.id===o),i=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(o)&&this.dismissedToasts.delete(o),s?this.toasts=this.toasts.map(l=>l.id===o?(this.publish({...l,...e,id:o,title:n}),{...l,...e,id:o,dismissible:i,title:n}):l):this.addToast({title:n,...r,dismissible:i,id:o}),o},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),o=n!==void 0,s,i=r.then(async c=>{if(s=["resolve",c],O.isValidElement(c))o=!1,this.create({id:n,type:"default",message:c});else if(h1(c)&&!c.ok){o=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${c.status}`):t.error,d=typeof t.description=="function"?await t.description(`HTTP error! status: ${c.status}`):t.description;this.create({id:n,type:"error",message:u,description:d})}else if(t.success!==void 0){o=!1;let u=typeof t.success=="function"?await t.success(c):t.success,d=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"success",message:u,description:d})}}).catch(async c=>{if(s=["reject",c],t.error!==void 0){o=!1;let u=typeof t.error=="function"?await t.error(c):t.error,d=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"error",message:u,description:d})}}).finally(()=>{var c;o&&(this.dismiss(n),n=void 0),(c=t.finally)==null||c.call(t)}),l=()=>new Promise((c,u)=>i.then(()=>s[0]==="reject"?u(s[1]):c(s[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:l}:Object.assign(n,{unwrap:l})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Gc++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},We=new m1,f1=(e,t)=>{let n=(t==null?void 0:t.id)||Gc++;return We.addToast({title:e,...t,id:n}),n},h1=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",g1=f1,v1=()=>We.toasts,y1=()=>We.getActiveToasts();Object.assign(g1,{success:We.success,info:We.info,warning:We.warning,error:We.error,custom:We.custom,message:We.message,promise:We.promise,dismiss:We.dismiss,loading:We.loading},{getHistory:v1,getToasts:y1});function x1(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}x1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function fi(e){return e.label!==void 0}var b1=3,w1="32px",S1="16px",nm=4e3,k1=356,C1=14,P1=20,N1=200;function xt(...e){return e.filter(Boolean).join(" ")}function E1(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var T1=e=>{var t,n,r,o,s,i,l,c,u,d,m;let{invert:h,toast:p,unstyled:w,interacting:g,setHeights:b,visibleToasts:v,heights:f,index:x,toasts:S,expanded:k,removeToast:P,defaultRichColors:N,closeButton:C,style:E,cancelButtonStyle:M,actionButtonStyle:z,className:j="",descriptionClassName:D="",duration:T,position:B,gap:U,loadingIcon:G,expandByDefault:A,classNames:_,icons:L,closeButtonAriaLabel:H="Close toast",pauseWhenPageIsHidden:V}=e,[q,Q]=O.useState(null),[xe,Re]=O.useState(null),[Z,Pr]=O.useState(!1),[dn,Xn]=O.useState(!1),[pn,Nr]=O.useState(!1),[mn,Gs]=O.useState(!1),[Ja,Hs]=O.useState(!1),[Za,_o]=O.useState(0),[Er,Ed]=O.useState(0),Io=O.useRef(p.duration||T||nm),Td=O.useRef(null),Jn=O.useRef(null),Cy=x===0,Py=x+1<=v,st=p.type,Tr=p.dismissible!==!1,Ny=p.className||"",Ey=p.descriptionClassName||"",Ks=O.useMemo(()=>f.findIndex($=>$.toastId===p.id)||0,[f,p.id]),Ty=O.useMemo(()=>{var $;return($=p.closeButton)!=null?$:C},[p.closeButton,C]),jd=O.useMemo(()=>p.duration||T||nm,[p.duration,T]),el=O.useRef(0),jr=O.useRef(0),Rd=O.useRef(0),Rr=O.useRef(null),[jy,Ry]=B.split("-"),Ad=O.useMemo(()=>f.reduce(($,ne,le)=>le>=Ks?$:$+ne.height,0),[f,Ks]),_d=p1(),Ay=p.invert||h,tl=st==="loading";jr.current=O.useMemo(()=>Ks*U+Ad,[Ks,Ad]),O.useEffect(()=>{Io.current=jd},[jd]),O.useEffect(()=>{Pr(!0)},[]),O.useEffect(()=>{let $=Jn.current;if($){let ne=$.getBoundingClientRect().height;return Ed(ne),b(le=>[{toastId:p.id,height:ne,position:p.position},...le]),()=>b(le=>le.filter(ht=>ht.toastId!==p.id))}},[b,p.id]),O.useLayoutEffect(()=>{if(!Z)return;let $=Jn.current,ne=$.style.height;$.style.height="auto";let le=$.getBoundingClientRect().height;$.style.height=ne,Ed(le),b(ht=>ht.find(gt=>gt.toastId===p.id)?ht.map(gt=>gt.toastId===p.id?{...gt,height:le}:gt):[{toastId:p.id,height:le,position:p.position},...ht])},[Z,p.title,p.description,b,p.id]);let fn=O.useCallback(()=>{Xn(!0),_o(jr.current),b($=>$.filter(ne=>ne.toastId!==p.id)),setTimeout(()=>{P(p)},N1)},[p,P,b,jr]);O.useEffect(()=>{if(p.promise&&st==="loading"||p.duration===1/0||p.type==="loading")return;let $;return k||g||V&&_d?(()=>{if(Rd.current<el.current){let ne=new Date().getTime()-el.current;Io.current=Io.current-ne}Rd.current=new Date().getTime()})():Io.current!==1/0&&(el.current=new Date().getTime(),$=setTimeout(()=>{var ne;(ne=p.onAutoClose)==null||ne.call(p,p),fn()},Io.current)),()=>clearTimeout($)},[k,g,p,st,V,_d,fn]),O.useEffect(()=>{p.delete&&fn()},[fn,p.delete]);function _y(){var $,ne,le;return L!=null&&L.loading?O.createElement("div",{className:xt(_==null?void 0:_.loader,($=p==null?void 0:p.classNames)==null?void 0:$.loader,"sonner-loader"),"data-visible":st==="loading"},L.loading):G?O.createElement("div",{className:xt(_==null?void 0:_.loader,(ne=p==null?void 0:p.classNames)==null?void 0:ne.loader,"sonner-loader"),"data-visible":st==="loading"},G):O.createElement(i1,{className:xt(_==null?void 0:_.loader,(le=p==null?void 0:p.classNames)==null?void 0:le.loader),visible:st==="loading"})}return O.createElement("li",{tabIndex:0,ref:Jn,className:xt(j,Ny,_==null?void 0:_.toast,(t=p==null?void 0:p.classNames)==null?void 0:t.toast,_==null?void 0:_.default,_==null?void 0:_[st],(n=p==null?void 0:p.classNames)==null?void 0:n[st]),"data-sonner-toast":"","data-rich-colors":(r=p.richColors)!=null?r:N,"data-styled":!(p.jsx||p.unstyled||w),"data-mounted":Z,"data-promise":!!p.promise,"data-swiped":Ja,"data-removed":dn,"data-visible":Py,"data-y-position":jy,"data-x-position":Ry,"data-index":x,"data-front":Cy,"data-swiping":pn,"data-dismissible":Tr,"data-type":st,"data-invert":Ay,"data-swipe-out":mn,"data-swipe-direction":xe,"data-expanded":!!(k||A&&Z),style:{"--index":x,"--toasts-before":x,"--z-index":S.length-x,"--offset":`${dn?Za:jr.current}px`,"--initial-height":A?"auto":`${Er}px`,...E,...p.style},onDragEnd:()=>{Nr(!1),Q(null),Rr.current=null},onPointerDown:$=>{tl||!Tr||(Td.current=new Date,_o(jr.current),$.target.setPointerCapture($.pointerId),$.target.tagName!=="BUTTON"&&(Nr(!0),Rr.current={x:$.clientX,y:$.clientY}))},onPointerUp:()=>{var $,ne,le,ht;if(mn||!Tr)return;Rr.current=null;let gt=Number((($=Jn.current)==null?void 0:$.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),hn=Number(((ne=Jn.current)==null?void 0:ne.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),Zn=new Date().getTime()-((le=Td.current)==null?void 0:le.getTime()),vt=q==="x"?gt:hn,gn=Math.abs(vt)/Zn;if(Math.abs(vt)>=P1||gn>.11){_o(jr.current),(ht=p.onDismiss)==null||ht.call(p,p),Re(q==="x"?gt>0?"right":"left":hn>0?"down":"up"),fn(),Gs(!0),Hs(!1);return}Nr(!1),Q(null)},onPointerMove:$=>{var ne,le,ht,gt;if(!Rr.current||!Tr||((ne=window.getSelection())==null?void 0:ne.toString().length)>0)return;let hn=$.clientY-Rr.current.y,Zn=$.clientX-Rr.current.x,vt=(le=e.swipeDirections)!=null?le:E1(B);!q&&(Math.abs(Zn)>1||Math.abs(hn)>1)&&Q(Math.abs(Zn)>Math.abs(hn)?"x":"y");let gn={x:0,y:0};q==="y"?(vt.includes("top")||vt.includes("bottom"))&&(vt.includes("top")&&hn<0||vt.includes("bottom")&&hn>0)&&(gn.y=hn):q==="x"&&(vt.includes("left")||vt.includes("right"))&&(vt.includes("left")&&Zn<0||vt.includes("right")&&Zn>0)&&(gn.x=Zn),(Math.abs(gn.x)>0||Math.abs(gn.y)>0)&&Hs(!0),(ht=Jn.current)==null||ht.style.setProperty("--swipe-amount-x",`${gn.x}px`),(gt=Jn.current)==null||gt.style.setProperty("--swipe-amount-y",`${gn.y}px`)}},Ty&&!p.jsx?O.createElement("button",{"aria-label":H,"data-disabled":tl,"data-close-button":!0,onClick:tl||!Tr?()=>{}:()=>{var $;fn(),($=p.onDismiss)==null||$.call(p,p)},className:xt(_==null?void 0:_.closeButton,(o=p==null?void 0:p.classNames)==null?void 0:o.closeButton)},(s=L==null?void 0:L.close)!=null?s:d1):null,p.jsx||y.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:O.createElement(O.Fragment,null,st||p.icon||p.promise?O.createElement("div",{"data-icon":"",className:xt(_==null?void 0:_.icon,(i=p==null?void 0:p.classNames)==null?void 0:i.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||_y():null,p.type!=="loading"?p.icon||(L==null?void 0:L[st])||o1(st):null):null,O.createElement("div",{"data-content":"",className:xt(_==null?void 0:_.content,(l=p==null?void 0:p.classNames)==null?void 0:l.content)},O.createElement("div",{"data-title":"",className:xt(_==null?void 0:_.title,(c=p==null?void 0:p.classNames)==null?void 0:c.title)},typeof p.title=="function"?p.title():p.title),p.description?O.createElement("div",{"data-description":"",className:xt(D,Ey,_==null?void 0:_.description,(u=p==null?void 0:p.classNames)==null?void 0:u.description)},typeof p.description=="function"?p.description():p.description):null),y.isValidElement(p.cancel)?p.cancel:p.cancel&&fi(p.cancel)?O.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||M,onClick:$=>{var ne,le;fi(p.cancel)&&Tr&&((le=(ne=p.cancel).onClick)==null||le.call(ne,$),fn())},className:xt(_==null?void 0:_.cancelButton,(d=p==null?void 0:p.classNames)==null?void 0:d.cancelButton)},p.cancel.label):null,y.isValidElement(p.action)?p.action:p.action&&fi(p.action)?O.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||z,onClick:$=>{var ne,le;fi(p.action)&&((le=(ne=p.action).onClick)==null||le.call(ne,$),!$.defaultPrevented&&fn())},className:xt(_==null?void 0:_.actionButton,(m=p==null?void 0:p.classNames)==null?void 0:m.actionButton)},p.action.label):null))};function rm(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function j1(e,t){let n={};return[e,t].forEach((r,o)=>{let s=o===1,i=s?"--mobile-offset":"--offset",l=s?S1:w1;function c(u){["top","right","bottom","left"].forEach(d=>{n[`${i}-${d}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?c(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${i}-${u}`]=l:n[`${i}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):c(l)}),n}var R1=y.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:o=["altKey","KeyT"],expand:s,closeButton:i,className:l,offset:c,mobileOffset:u,theme:d="light",richColors:m,duration:h,style:p,visibleToasts:w=b1,toastOptions:g,dir:b=rm(),gap:v=C1,loadingIcon:f,icons:x,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:k}=e,[P,N]=O.useState([]),C=O.useMemo(()=>Array.from(new Set([r].concat(P.filter(V=>V.position).map(V=>V.position)))),[P,r]),[E,M]=O.useState([]),[z,j]=O.useState(!1),[D,T]=O.useState(!1),[B,U]=O.useState(d!=="system"?d:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),G=O.useRef(null),A=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),_=O.useRef(null),L=O.useRef(!1),H=O.useCallback(V=>{N(q=>{var Q;return(Q=q.find(xe=>xe.id===V.id))!=null&&Q.delete||We.dismiss(V.id),q.filter(({id:xe})=>xe!==V.id)})},[]);return O.useEffect(()=>We.subscribe(V=>{if(V.dismiss){N(q=>q.map(Q=>Q.id===V.id?{...Q,delete:!0}:Q));return}setTimeout(()=>{ag.flushSync(()=>{N(q=>{let Q=q.findIndex(xe=>xe.id===V.id);return Q!==-1?[...q.slice(0,Q),{...q[Q],...V},...q.slice(Q+1)]:[V,...q]})})})}),[]),O.useEffect(()=>{if(d!=="system"){U(d);return}if(d==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?U("dark"):U("light")),typeof window>"u")return;let V=window.matchMedia("(prefers-color-scheme: dark)");try{V.addEventListener("change",({matches:q})=>{U(q?"dark":"light")})}catch{V.addListener(({matches:Q})=>{try{U(Q?"dark":"light")}catch(xe){console.error(xe)}})}},[d]),O.useEffect(()=>{P.length<=1&&j(!1)},[P]),O.useEffect(()=>{let V=q=>{var Q,xe;o.every(Re=>q[Re]||q.code===Re)&&(j(!0),(Q=G.current)==null||Q.focus()),q.code==="Escape"&&(document.activeElement===G.current||(xe=G.current)!=null&&xe.contains(document.activeElement))&&j(!1)};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[o]),O.useEffect(()=>{if(G.current)return()=>{_.current&&(_.current.focus({preventScroll:!0}),_.current=null,L.current=!1)}},[G.current]),O.createElement("section",{ref:t,"aria-label":`${S} ${A}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},C.map((V,q)=>{var Q;let[xe,Re]=V.split("-");return P.length?O.createElement("ol",{key:V,dir:b==="auto"?rm():b,tabIndex:-1,ref:G,className:l,"data-sonner-toaster":!0,"data-theme":B,"data-y-position":xe,"data-lifted":z&&P.length>1&&!s,"data-x-position":Re,style:{"--front-toast-height":`${((Q=E[0])==null?void 0:Q.height)||0}px`,"--width":`${k1}px`,"--gap":`${v}px`,...p,...j1(c,u)},onBlur:Z=>{L.current&&!Z.currentTarget.contains(Z.relatedTarget)&&(L.current=!1,_.current&&(_.current.focus({preventScroll:!0}),_.current=null))},onFocus:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||L.current||(L.current=!0,_.current=Z.relatedTarget)},onMouseEnter:()=>j(!0),onMouseMove:()=>j(!0),onMouseLeave:()=>{D||j(!1)},onDragEnd:()=>j(!1),onPointerDown:Z=>{Z.target instanceof HTMLElement&&Z.target.dataset.dismissible==="false"||T(!0)},onPointerUp:()=>T(!1)},P.filter(Z=>!Z.position&&q===0||Z.position===V).map((Z,Pr)=>{var dn,Xn;return O.createElement(T1,{key:Z.id,icons:x,index:Pr,toast:Z,defaultRichColors:m,duration:(dn=g==null?void 0:g.duration)!=null?dn:h,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:n,visibleToasts:w,closeButton:(Xn=g==null?void 0:g.closeButton)!=null?Xn:i,interacting:D,position:V,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:H,toasts:P.filter(pn=>pn.position==Z.position),heights:E.filter(pn=>pn.position==Z.position),setHeights:M,expandByDefault:s,gap:v,loadingIcon:f,expanded:z,pauseWhenPageIsHidden:k,swipeDirections:e.swipeDirections})})):null}))});const A1=({...e})=>{const{theme:t="system"}=r1();return a.jsx(R1,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var _1=du[" useId ".trim().toString()]||(()=>{}),I1=0;function Di(e){const[t,n]=y.useState(_1());return Ht(()=>{e||n(r=>r??String(I1++))},[e]),e||(t?`radix-${t}`:"")}const M1=["top","right","bottom","left"],Hn=Math.min,Je=Math.max,da=Math.round,hi=Math.floor,Wt=e=>({x:e,y:e}),O1={left:"right",right:"left",bottom:"top",top:"bottom"},D1={start:"end",end:"start"};function Hc(e,t,n){return Je(e,Hn(t,n))}function ln(e,t){return typeof e=="function"?e(t):e}function cn(e){return e.split("-")[0]}function Ro(e){return e.split("-")[1]}function cd(e){return e==="x"?"y":"x"}function ud(e){return e==="y"?"height":"width"}const L1=new Set(["top","bottom"]);function Bt(e){return L1.has(cn(e))?"y":"x"}function dd(e){return cd(Bt(e))}function F1(e,t,n){n===void 0&&(n=!1);const r=Ro(e),o=dd(e),s=ud(o);let i=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(i=pa(i)),[i,pa(i)]}function V1(e){const t=pa(e);return[Kc(e),t,Kc(t)]}function Kc(e){return e.replace(/start|end/g,t=>D1[t])}const om=["left","right"],sm=["right","left"],z1=["top","bottom"],B1=["bottom","top"];function U1(e,t,n){switch(e){case"top":case"bottom":return n?t?sm:om:t?om:sm;case"left":case"right":return t?z1:B1;default:return[]}}function $1(e,t,n,r){const o=Ro(e);let s=U1(cn(e),n==="start",r);return o&&(s=s.map(i=>i+"-"+o),t&&(s=s.concat(s.map(Kc)))),s}function pa(e){return e.replace(/left|right|bottom|top/g,t=>O1[t])}function W1(e){return{top:0,right:0,bottom:0,left:0,...e}}function Xg(e){return typeof e!="number"?W1(e):{top:e,right:e,bottom:e,left:e}}function ma(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function im(e,t,n){let{reference:r,floating:o}=e;const s=Bt(t),i=dd(t),l=ud(i),c=cn(t),u=s==="y",d=r.x+r.width/2-o.width/2,m=r.y+r.height/2-o.height/2,h=r[l]/2-o[l]/2;let p;switch(c){case"top":p={x:d,y:r.y-o.height};break;case"bottom":p={x:d,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:m};break;case"left":p={x:r.x-o.width,y:m};break;default:p={x:r.x,y:r.y}}switch(Ro(t)){case"start":p[i]-=h*(n&&u?-1:1);break;case"end":p[i]+=h*(n&&u?-1:1);break}return p}const G1=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:i}=n,l=s.filter(Boolean),c=await(i.isRTL==null?void 0:i.isRTL(t));let u=await i.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:m}=im(u,r,c),h=r,p={},w=0;for(let g=0;g<l.length;g++){const{name:b,fn:v}=l[g],{x:f,y:x,data:S,reset:k}=await v({x:d,y:m,initialPlacement:r,placement:h,strategy:o,middlewareData:p,rects:u,platform:i,elements:{reference:e,floating:t}});d=f??d,m=x??m,p={...p,[b]:{...p[b],...S}},k&&w<=50&&(w++,typeof k=="object"&&(k.placement&&(h=k.placement),k.rects&&(u=k.rects===!0?await i.getElementRects({reference:e,floating:t,strategy:o}):k.rects),{x:d,y:m}=im(u,h,c)),g=-1)}return{x:d,y:m,placement:h,strategy:o,middlewareData:p}};async function js(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:s,rects:i,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:h=!1,padding:p=0}=ln(t,e),w=Xg(p),b=l[h?m==="floating"?"reference":"floating":m],v=ma(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(b)))==null||n?b:b.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),f=m==="floating"?{x:r,y:o,width:i.floating.width,height:i.floating.height}:i.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),S=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},k=ma(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:f,offsetParent:x,strategy:c}):f);return{top:(v.top-k.top+w.top)/S.y,bottom:(k.bottom-v.bottom+w.bottom)/S.y,left:(v.left-k.left+w.left)/S.x,right:(k.right-v.right+w.right)/S.x}}const H1=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:s,platform:i,elements:l,middlewareData:c}=t,{element:u,padding:d=0}=ln(e,t)||{};if(u==null)return{};const m=Xg(d),h={x:n,y:r},p=dd(o),w=ud(p),g=await i.getDimensions(u),b=p==="y",v=b?"top":"left",f=b?"bottom":"right",x=b?"clientHeight":"clientWidth",S=s.reference[w]+s.reference[p]-h[p]-s.floating[w],k=h[p]-s.reference[p],P=await(i.getOffsetParent==null?void 0:i.getOffsetParent(u));let N=P?P[x]:0;(!N||!await(i.isElement==null?void 0:i.isElement(P)))&&(N=l.floating[x]||s.floating[w]);const C=S/2-k/2,E=N/2-g[w]/2-1,M=Hn(m[v],E),z=Hn(m[f],E),j=M,D=N-g[w]-z,T=N/2-g[w]/2+C,B=Hc(j,T,D),U=!c.arrow&&Ro(o)!=null&&T!==B&&s.reference[w]/2-(T<j?M:z)-g[w]/2<0,G=U?T<j?T-j:T-D:0;return{[p]:h[p]+G,data:{[p]:B,centerOffset:T-B-G,...U&&{alignmentOffset:G}},reset:U}}}),K1=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:s,rects:i,initialPlacement:l,platform:c,elements:u}=t,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:g=!0,...b}=ln(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const v=cn(o),f=Bt(l),x=cn(l)===l,S=await(c.isRTL==null?void 0:c.isRTL(u.floating)),k=h||(x||!g?[pa(l)]:V1(l)),P=w!=="none";!h&&P&&k.push(...$1(l,g,w,S));const N=[l,...k],C=await js(t,b),E=[];let M=((r=s.flip)==null?void 0:r.overflows)||[];if(d&&E.push(C[v]),m){const T=F1(o,i,S);E.push(C[T[0]],C[T[1]])}if(M=[...M,{placement:o,overflows:E}],!E.every(T=>T<=0)){var z,j;const T=(((z=s.flip)==null?void 0:z.index)||0)+1,B=N[T];if(B&&(!(m==="alignment"?f!==Bt(B):!1)||M.every(A=>A.overflows[0]>0&&Bt(A.placement)===f)))return{data:{index:T,overflows:M},reset:{placement:B}};let U=(j=M.filter(G=>G.overflows[0]<=0).sort((G,A)=>G.overflows[1]-A.overflows[1])[0])==null?void 0:j.placement;if(!U)switch(p){case"bestFit":{var D;const G=(D=M.filter(A=>{if(P){const _=Bt(A.placement);return _===f||_==="y"}return!0}).map(A=>[A.placement,A.overflows.filter(_=>_>0).reduce((_,L)=>_+L,0)]).sort((A,_)=>A[1]-_[1])[0])==null?void 0:D[0];G&&(U=G);break}case"initialPlacement":U=l;break}if(o!==U)return{reset:{placement:U}}}return{}}}};function am(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function lm(e){return M1.some(t=>e[t]>=0)}const q1=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=ln(e,t);switch(r){case"referenceHidden":{const s=await js(t,{...o,elementContext:"reference"}),i=am(s,n.reference);return{data:{referenceHiddenOffsets:i,referenceHidden:lm(i)}}}case"escaped":{const s=await js(t,{...o,altBoundary:!0}),i=am(s,n.floating);return{data:{escapedOffsets:i,escaped:lm(i)}}}default:return{}}}}},Jg=new Set(["left","top"]);async function Y1(e,t){const{placement:n,platform:r,elements:o}=e,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),i=cn(n),l=Ro(n),c=Bt(n)==="y",u=Jg.has(i)?-1:1,d=s&&c?-1:1,m=ln(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:w}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return l&&typeof w=="number"&&(p=l==="end"?w*-1:w),c?{x:p*d,y:h*u}:{x:h*u,y:p*d}}const Q1=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:s,placement:i,middlewareData:l}=t,c=await Y1(t,e);return i===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:o+c.x,y:s+c.y,data:{...c,placement:i}}}}},X1=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:s=!0,crossAxis:i=!1,limiter:l={fn:b=>{let{x:v,y:f}=b;return{x:v,y:f}}},...c}=ln(e,t),u={x:n,y:r},d=await js(t,c),m=Bt(cn(o)),h=cd(m);let p=u[h],w=u[m];if(s){const b=h==="y"?"top":"left",v=h==="y"?"bottom":"right",f=p+d[b],x=p-d[v];p=Hc(f,p,x)}if(i){const b=m==="y"?"top":"left",v=m==="y"?"bottom":"right",f=w+d[b],x=w-d[v];w=Hc(f,w,x)}const g=l.fn({...t,[h]:p,[m]:w});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[h]:s,[m]:i}}}}}},J1=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:s,middlewareData:i}=t,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=ln(e,t),d={x:n,y:r},m=Bt(o),h=cd(m);let p=d[h],w=d[m];const g=ln(l,t),b=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const x=h==="y"?"height":"width",S=s.reference[h]-s.floating[x]+b.mainAxis,k=s.reference[h]+s.reference[x]-b.mainAxis;p<S?p=S:p>k&&(p=k)}if(u){var v,f;const x=h==="y"?"width":"height",S=Jg.has(cn(o)),k=s.reference[m]-s.floating[x]+(S&&((v=i.offset)==null?void 0:v[m])||0)+(S?0:b.crossAxis),P=s.reference[m]+s.reference[x]+(S?0:((f=i.offset)==null?void 0:f[m])||0)-(S?b.crossAxis:0);w<k?w=k:w>P&&(w=P)}return{[h]:p,[m]:w}}}},Z1=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:o,rects:s,platform:i,elements:l}=t,{apply:c=()=>{},...u}=ln(e,t),d=await js(t,u),m=cn(o),h=Ro(o),p=Bt(o)==="y",{width:w,height:g}=s.floating;let b,v;m==="top"||m==="bottom"?(b=m,v=h===(await(i.isRTL==null?void 0:i.isRTL(l.floating))?"start":"end")?"left":"right"):(v=m,b=h==="end"?"top":"bottom");const f=g-d.top-d.bottom,x=w-d.left-d.right,S=Hn(g-d[b],f),k=Hn(w-d[v],x),P=!t.middlewareData.shift;let N=S,C=k;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(C=x),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(N=f),P&&!h){const M=Je(d.left,0),z=Je(d.right,0),j=Je(d.top,0),D=Je(d.bottom,0);p?C=w-2*(M!==0||z!==0?M+z:Je(d.left,d.right)):N=g-2*(j!==0||D!==0?j+D:Je(d.top,d.bottom))}await c({...t,availableWidth:C,availableHeight:N});const E=await i.getDimensions(l.floating);return w!==E.width||g!==E.height?{reset:{rects:!0}}:{}}}};function Va(){return typeof window<"u"}function Ao(e){return Zg(e)?(e.nodeName||"").toLowerCase():"#document"}function tt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function qt(e){var t;return(t=(Zg(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Zg(e){return Va()?e instanceof Node||e instanceof tt(e).Node:!1}function jt(e){return Va()?e instanceof Element||e instanceof tt(e).Element:!1}function Kt(e){return Va()?e instanceof HTMLElement||e instanceof tt(e).HTMLElement:!1}function cm(e){return!Va()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof tt(e).ShadowRoot}const eS=new Set(["inline","contents"]);function Ws(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Rt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!eS.has(o)}const tS=new Set(["table","td","th"]);function nS(e){return tS.has(Ao(e))}const rS=[":popover-open",":modal"];function za(e){return rS.some(t=>{try{return e.matches(t)}catch{return!1}})}const oS=["transform","translate","scale","rotate","perspective"],sS=["transform","translate","scale","rotate","perspective","filter"],iS=["paint","layout","strict","content"];function pd(e){const t=md(),n=jt(e)?Rt(e):e;return oS.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||sS.some(r=>(n.willChange||"").includes(r))||iS.some(r=>(n.contain||"").includes(r))}function aS(e){let t=Kn(e);for(;Kt(t)&&!ko(t);){if(pd(t))return t;if(za(t))return null;t=Kn(t)}return null}function md(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const lS=new Set(["html","body","#document"]);function ko(e){return lS.has(Ao(e))}function Rt(e){return tt(e).getComputedStyle(e)}function Ba(e){return jt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Kn(e){if(Ao(e)==="html")return e;const t=e.assignedSlot||e.parentNode||cm(e)&&e.host||qt(e);return cm(t)?t.host:t}function ev(e){const t=Kn(e);return ko(t)?e.ownerDocument?e.ownerDocument.body:e.body:Kt(t)&&Ws(t)?t:ev(t)}function Rs(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=ev(e),s=o===((r=e.ownerDocument)==null?void 0:r.body),i=tt(o);if(s){const l=qc(i);return t.concat(i,i.visualViewport||[],Ws(o)?o:[],l&&n?Rs(l):[])}return t.concat(o,Rs(o,[],n))}function qc(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function tv(e){const t=Rt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Kt(e),s=o?e.offsetWidth:n,i=o?e.offsetHeight:r,l=da(n)!==s||da(r)!==i;return l&&(n=s,r=i),{width:n,height:r,$:l}}function fd(e){return jt(e)?e:e.contextElement}function oo(e){const t=fd(e);if(!Kt(t))return Wt(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:s}=tv(t);let i=(s?da(n.width):n.width)/r,l=(s?da(n.height):n.height)/o;return(!i||!Number.isFinite(i))&&(i=1),(!l||!Number.isFinite(l))&&(l=1),{x:i,y:l}}const cS=Wt(0);function nv(e){const t=tt(e);return!md()||!t.visualViewport?cS:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function uS(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==tt(e)?!1:t}function br(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),s=fd(e);let i=Wt(1);t&&(r?jt(r)&&(i=oo(r)):i=oo(e));const l=uS(s,n,r)?nv(s):Wt(0);let c=(o.left+l.x)/i.x,u=(o.top+l.y)/i.y,d=o.width/i.x,m=o.height/i.y;if(s){const h=tt(s),p=r&&jt(r)?tt(r):r;let w=h,g=qc(w);for(;g&&r&&p!==w;){const b=oo(g),v=g.getBoundingClientRect(),f=Rt(g),x=v.left+(g.clientLeft+parseFloat(f.paddingLeft))*b.x,S=v.top+(g.clientTop+parseFloat(f.paddingTop))*b.y;c*=b.x,u*=b.y,d*=b.x,m*=b.y,c+=x,u+=S,w=tt(g),g=qc(w)}}return ma({width:d,height:m,x:c,y:u})}function hd(e,t){const n=Ba(e).scrollLeft;return t?t.left+n:br(qt(e)).left+n}function rv(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=r.left+t.scrollLeft-(n?0:hd(e,r)),s=r.top+t.scrollTop;return{x:o,y:s}}function dS(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const s=o==="fixed",i=qt(r),l=t?za(t.floating):!1;if(r===i||l&&s)return n;let c={scrollLeft:0,scrollTop:0},u=Wt(1);const d=Wt(0),m=Kt(r);if((m||!m&&!s)&&((Ao(r)!=="body"||Ws(i))&&(c=Ba(r)),Kt(r))){const p=br(r);u=oo(r),d.x=p.x+r.clientLeft,d.y=p.y+r.clientTop}const h=i&&!m&&!s?rv(i,c,!0):Wt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+d.x+h.x,y:n.y*u.y-c.scrollTop*u.y+d.y+h.y}}function pS(e){return Array.from(e.getClientRects())}function mS(e){const t=qt(e),n=Ba(e),r=e.ownerDocument.body,o=Je(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Je(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let i=-n.scrollLeft+hd(e);const l=-n.scrollTop;return Rt(r).direction==="rtl"&&(i+=Je(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:i,y:l}}function fS(e,t){const n=tt(e),r=qt(e),o=n.visualViewport;let s=r.clientWidth,i=r.clientHeight,l=0,c=0;if(o){s=o.width,i=o.height;const u=md();(!u||u&&t==="fixed")&&(l=o.offsetLeft,c=o.offsetTop)}return{width:s,height:i,x:l,y:c}}const hS=new Set(["absolute","fixed"]);function gS(e,t){const n=br(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,s=Kt(e)?oo(e):Wt(1),i=e.clientWidth*s.x,l=e.clientHeight*s.y,c=o*s.x,u=r*s.y;return{width:i,height:l,x:c,y:u}}function um(e,t,n){let r;if(t==="viewport")r=fS(e,n);else if(t==="document")r=mS(qt(e));else if(jt(t))r=gS(t,n);else{const o=nv(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return ma(r)}function ov(e,t){const n=Kn(e);return n===t||!jt(n)||ko(n)?!1:Rt(n).position==="fixed"||ov(n,t)}function vS(e,t){const n=t.get(e);if(n)return n;let r=Rs(e,[],!1).filter(l=>jt(l)&&Ao(l)!=="body"),o=null;const s=Rt(e).position==="fixed";let i=s?Kn(e):e;for(;jt(i)&&!ko(i);){const l=Rt(i),c=pd(i);!c&&l.position==="fixed"&&(o=null),(s?!c&&!o:!c&&l.position==="static"&&!!o&&hS.has(o.position)||Ws(i)&&!c&&ov(e,i))?r=r.filter(d=>d!==i):o=l,i=Kn(i)}return t.set(e,r),r}function yS(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[...n==="clippingAncestors"?za(t)?[]:vS(t,this._c):[].concat(n),r],l=i[0],c=i.reduce((u,d)=>{const m=um(t,d,o);return u.top=Je(m.top,u.top),u.right=Hn(m.right,u.right),u.bottom=Hn(m.bottom,u.bottom),u.left=Je(m.left,u.left),u},um(t,l,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function xS(e){const{width:t,height:n}=tv(e);return{width:t,height:n}}function bS(e,t,n){const r=Kt(t),o=qt(t),s=n==="fixed",i=br(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=Wt(0);function u(){c.x=hd(o)}if(r||!r&&!s)if((Ao(t)!=="body"||Ws(o))&&(l=Ba(t)),r){const p=br(t,!0,s,t);c.x=p.x+t.clientLeft,c.y=p.y+t.clientTop}else o&&u();s&&!r&&o&&u();const d=o&&!r&&!s?rv(o,l):Wt(0),m=i.left+l.scrollLeft-c.x-d.x,h=i.top+l.scrollTop-c.y-d.y;return{x:m,y:h,width:i.width,height:i.height}}function Ml(e){return Rt(e).position==="static"}function dm(e,t){if(!Kt(e)||Rt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return qt(e)===n&&(n=n.ownerDocument.body),n}function sv(e,t){const n=tt(e);if(za(e))return n;if(!Kt(e)){let o=Kn(e);for(;o&&!ko(o);){if(jt(o)&&!Ml(o))return o;o=Kn(o)}return n}let r=dm(e,t);for(;r&&nS(r)&&Ml(r);)r=dm(r,t);return r&&ko(r)&&Ml(r)&&!pd(r)?n:r||aS(e)||n}const wS=async function(e){const t=this.getOffsetParent||sv,n=this.getDimensions,r=await n(e.floating);return{reference:bS(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function SS(e){return Rt(e).direction==="rtl"}const kS={convertOffsetParentRelativeRectToViewportRelativeRect:dS,getDocumentElement:qt,getClippingRect:yS,getOffsetParent:sv,getElementRects:wS,getClientRects:pS,getDimensions:xS,getScale:oo,isElement:jt,isRTL:SS};function iv(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function CS(e,t){let n=null,r;const o=qt(e);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function i(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const u=e.getBoundingClientRect(),{left:d,top:m,width:h,height:p}=u;if(l||t(),!h||!p)return;const w=hi(m),g=hi(o.clientWidth-(d+h)),b=hi(o.clientHeight-(m+p)),v=hi(d),x={rootMargin:-w+"px "+-g+"px "+-b+"px "+-v+"px",threshold:Je(0,Hn(1,c))||1};let S=!0;function k(P){const N=P[0].intersectionRatio;if(N!==c){if(!S)return i();N?i(!1,N):r=setTimeout(()=>{i(!1,1e-7)},1e3)}N===1&&!iv(u,e.getBoundingClientRect())&&i(),S=!1}try{n=new IntersectionObserver(k,{...x,root:o.ownerDocument})}catch{n=new IntersectionObserver(k,x)}n.observe(e)}return i(!0),s}function PS(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=fd(e),d=o||s?[...u?Rs(u):[],...Rs(t)]:[];d.forEach(v=>{o&&v.addEventListener("scroll",n,{passive:!0}),s&&v.addEventListener("resize",n)});const m=u&&l?CS(u,n):null;let h=-1,p=null;i&&(p=new ResizeObserver(v=>{let[f]=v;f&&f.target===u&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(t)})),n()}),u&&!c&&p.observe(u),p.observe(t));let w,g=c?br(e):null;c&&b();function b(){const v=br(e);g&&!iv(g,v)&&n(),g=v,w=requestAnimationFrame(b)}return n(),()=>{var v;d.forEach(f=>{o&&f.removeEventListener("scroll",n),s&&f.removeEventListener("resize",n)}),m==null||m(),(v=p)==null||v.disconnect(),p=null,c&&cancelAnimationFrame(w)}}const NS=Q1,ES=X1,TS=K1,jS=Z1,RS=q1,pm=H1,AS=J1,_S=(e,t,n)=>{const r=new Map,o={platform:kS,...n},s={...o.platform,_c:r};return G1(e,t,{...o,platform:s})};var IS=typeof document<"u",MS=function(){},Li=IS?y.useLayoutEffect:MS;function fa(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!fa(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const s=o[r];if(!(s==="_owner"&&e.$$typeof)&&!fa(e[s],t[s]))return!1}return!0}return e!==e&&t!==t}function av(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function mm(e,t){const n=av(e);return Math.round(t*n)/n}function Ol(e){const t=y.useRef(e);return Li(()=>{t.current=e}),t}function OS(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:s,floating:i}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,m]=y.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=y.useState(r);fa(h,r)||p(r);const[w,g]=y.useState(null),[b,v]=y.useState(null),f=y.useCallback(A=>{A!==P.current&&(P.current=A,g(A))},[]),x=y.useCallback(A=>{A!==N.current&&(N.current=A,v(A))},[]),S=s||w,k=i||b,P=y.useRef(null),N=y.useRef(null),C=y.useRef(d),E=c!=null,M=Ol(c),z=Ol(o),j=Ol(u),D=y.useCallback(()=>{if(!P.current||!N.current)return;const A={placement:t,strategy:n,middleware:h};z.current&&(A.platform=z.current),_S(P.current,N.current,A).then(_=>{const L={..._,isPositioned:j.current!==!1};T.current&&!fa(C.current,L)&&(C.current=L,Us.flushSync(()=>{m(L)}))})},[h,t,n,z,j]);Li(()=>{u===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,m(A=>({...A,isPositioned:!1})))},[u]);const T=y.useRef(!1);Li(()=>(T.current=!0,()=>{T.current=!1}),[]),Li(()=>{if(S&&(P.current=S),k&&(N.current=k),S&&k){if(M.current)return M.current(S,k,D);D()}},[S,k,D,M,E]);const B=y.useMemo(()=>({reference:P,floating:N,setReference:f,setFloating:x}),[f,x]),U=y.useMemo(()=>({reference:S,floating:k}),[S,k]),G=y.useMemo(()=>{const A={position:n,left:0,top:0};if(!U.floating)return A;const _=mm(U.floating,d.x),L=mm(U.floating,d.y);return l?{...A,transform:"translate("+_+"px, "+L+"px)",...av(U.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:_,top:L}},[n,l,U.floating,d.x,d.y]);return y.useMemo(()=>({...d,update:D,refs:B,elements:U,floatingStyles:G}),[d,D,B,U,G])}const DS=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?pm({element:r.current,padding:o}).fn(n):{}:r?pm({element:r,padding:o}).fn(n):{}}}},LS=(e,t)=>({...NS(e),options:[e,t]}),FS=(e,t)=>({...ES(e),options:[e,t]}),VS=(e,t)=>({...AS(e),options:[e,t]}),zS=(e,t)=>({...TS(e),options:[e,t]}),BS=(e,t)=>({...jS(e),options:[e,t]}),US=(e,t)=>({...RS(e),options:[e,t]}),$S=(e,t)=>({...DS(e),options:[e,t]});var WS="Arrow",lv=y.forwardRef((e,t)=>{const{children:n,width:r=10,height:o=5,...s}=e;return a.jsx(me.svg,{...s,ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:a.jsx("polygon",{points:"0,0 30,0 15,10"})})});lv.displayName=WS;var GS=lv;function HS(e){const[t,n]=y.useState(void 0);return Ht(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const s=o[0];let i,l;if("borderBoxSize"in s){const c=s.borderBoxSize,u=Array.isArray(c)?c[0]:c;i=u.inlineSize,l=u.blockSize}else i=e.offsetWidth,l=e.offsetHeight;n({width:i,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var cv="Popper",[uv,dv]=To(cv),[pP,pv]=uv(cv),mv="PopperAnchor",fv=y.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,s=pv(mv,n),i=y.useRef(null),l=Le(t,i);return y.useEffect(()=>{s.onAnchorChange((r==null?void 0:r.current)||i.current)}),r?null:a.jsx(me.div,{...o,ref:l})});fv.displayName=mv;var gd="PopperContent",[KS,qS]=uv(gd),hv=y.forwardRef((e,t)=>{var Z,Pr,dn,Xn,pn,Nr;const{__scopePopper:n,side:r="bottom",sideOffset:o=0,align:s="center",alignOffset:i=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:m="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:w,...g}=e,b=pv(gd,n),[v,f]=y.useState(null),x=Le(t,mn=>f(mn)),[S,k]=y.useState(null),P=HS(S),N=(P==null?void 0:P.width)??0,C=(P==null?void 0:P.height)??0,E=r+(s!=="center"?"-"+s:""),M=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},z=Array.isArray(u)?u:[u],j=z.length>0,D={padding:M,boundary:z.filter(QS),altBoundary:j},{refs:T,floatingStyles:B,placement:U,isPositioned:G,middlewareData:A}=OS({strategy:"fixed",placement:E,whileElementsMounted:(...mn)=>PS(...mn,{animationFrame:p==="always"}),elements:{reference:b.anchor},middleware:[LS({mainAxis:o+C,alignmentAxis:i}),c&&FS({mainAxis:!0,crossAxis:!1,limiter:m==="partial"?VS():void 0,...D}),c&&zS({...D}),BS({...D,apply:({elements:mn,rects:Gs,availableWidth:Ja,availableHeight:Hs})=>{const{width:Za,height:_o}=Gs.reference,Er=mn.floating.style;Er.setProperty("--radix-popper-available-width",`${Ja}px`),Er.setProperty("--radix-popper-available-height",`${Hs}px`),Er.setProperty("--radix-popper-anchor-width",`${Za}px`),Er.setProperty("--radix-popper-anchor-height",`${_o}px`)}}),S&&$S({element:S,padding:l}),XS({arrowWidth:N,arrowHeight:C}),h&&US({strategy:"referenceHidden",...D})]}),[_,L]=yv(U),H=Gt(w);Ht(()=>{G&&(H==null||H())},[G,H]);const V=(Z=A.arrow)==null?void 0:Z.x,q=(Pr=A.arrow)==null?void 0:Pr.y,Q=((dn=A.arrow)==null?void 0:dn.centerOffset)!==0,[xe,Re]=y.useState();return Ht(()=>{v&&Re(window.getComputedStyle(v).zIndex)},[v]),a.jsx("div",{ref:T.setFloating,"data-radix-popper-content-wrapper":"",style:{...B,transform:G?B.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:xe,"--radix-popper-transform-origin":[(Xn=A.transformOrigin)==null?void 0:Xn.x,(pn=A.transformOrigin)==null?void 0:pn.y].join(" "),...((Nr=A.hide)==null?void 0:Nr.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:a.jsx(KS,{scope:n,placedSide:_,onArrowChange:k,arrowX:V,arrowY:q,shouldHideArrow:Q,children:a.jsx(me.div,{"data-side":_,"data-align":L,...g,ref:x,style:{...g.style,animation:G?void 0:"none"}})})})});hv.displayName=gd;var gv="PopperArrow",YS={top:"bottom",right:"left",bottom:"top",left:"right"},vv=y.forwardRef(function(t,n){const{__scopePopper:r,...o}=t,s=qS(gv,r),i=YS[s.placedSide];return a.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[i]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:a.jsx(GS,{...o,ref:n,style:{...o.style,display:"block"}})})});vv.displayName=gv;function QS(e){return e!==null}var XS=e=>({name:"transformOrigin",options:e,fn(t){var b,v,f;const{placement:n,rects:r,middlewareData:o}=t,i=((b=o.arrow)==null?void 0:b.centerOffset)!==0,l=i?0:e.arrowWidth,c=i?0:e.arrowHeight,[u,d]=yv(n),m={start:"0%",center:"50%",end:"100%"}[d],h=(((v=o.arrow)==null?void 0:v.x)??0)+l/2,p=(((f=o.arrow)==null?void 0:f.y)??0)+c/2;let w="",g="";return u==="bottom"?(w=i?m:`${h}px`,g=`${-c}px`):u==="top"?(w=i?m:`${h}px`,g=`${r.floating.height+c}px`):u==="right"?(w=`${-c}px`,g=i?m:`${p}px`):u==="left"&&(w=`${r.floating.width+c}px`,g=i?m:`${p}px`),{data:{x:w,y:g}}}});function yv(e){const[t,n="center"]=e.split("-");return[t,n]}var JS=fv,ZS=hv,ek=vv,[Ua,mP]=To("Tooltip",[dv]),vd=dv(),xv="TooltipProvider",tk=700,fm="tooltip.open",[nk,bv]=Ua(xv),wv=e=>{const{__scopeTooltip:t,delayDuration:n=tk,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:s}=e,i=y.useRef(!0),l=y.useRef(!1),c=y.useRef(0);return y.useEffect(()=>{const u=c.current;return()=>window.clearTimeout(u)},[]),a.jsx(nk,{scope:t,isOpenDelayedRef:i,delayDuration:n,onOpen:y.useCallback(()=>{window.clearTimeout(c.current),i.current=!1},[]),onClose:y.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>i.current=!0,r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:y.useCallback(u=>{l.current=u},[]),disableHoverableContent:o,children:s})};wv.displayName=xv;var Sv="Tooltip",[fP,$a]=Ua(Sv),Yc="TooltipTrigger",rk=y.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=$a(Yc,n),s=bv(Yc,n),i=vd(n),l=y.useRef(null),c=Le(t,l,o.onTriggerChange),u=y.useRef(!1),d=y.useRef(!1),m=y.useCallback(()=>u.current=!1,[]);return y.useEffect(()=>()=>document.removeEventListener("pointerup",m),[m]),a.jsx(JS,{asChild:!0,...i,children:a.jsx(me.button,{"aria-describedby":o.open?o.contentId:void 0,"data-state":o.stateAttribute,...r,ref:c,onPointerMove:ie(e.onPointerMove,h=>{h.pointerType!=="touch"&&!d.current&&!s.isPointerInTransitRef.current&&(o.onTriggerEnter(),d.current=!0)}),onPointerLeave:ie(e.onPointerLeave,()=>{o.onTriggerLeave(),d.current=!1}),onPointerDown:ie(e.onPointerDown,()=>{o.open&&o.onClose(),u.current=!0,document.addEventListener("pointerup",m,{once:!0})}),onFocus:ie(e.onFocus,()=>{u.current||o.onOpen()}),onBlur:ie(e.onBlur,o.onClose),onClick:ie(e.onClick,o.onClose)})})});rk.displayName=Yc;var ok="TooltipPortal",[hP,sk]=Ua(ok,{forceMount:void 0}),Co="TooltipContent",kv=y.forwardRef((e,t)=>{const n=sk(Co,e.__scopeTooltip),{forceMount:r=n.forceMount,side:o="top",...s}=e,i=$a(Co,e.__scopeTooltip);return a.jsx(Cr,{present:r||i.open,children:i.disableHoverableContent?a.jsx(Cv,{side:o,...s,ref:t}):a.jsx(ik,{side:o,...s,ref:t})})}),ik=y.forwardRef((e,t)=>{const n=$a(Co,e.__scopeTooltip),r=bv(Co,e.__scopeTooltip),o=y.useRef(null),s=Le(t,o),[i,l]=y.useState(null),{trigger:c,onClose:u}=n,d=o.current,{onPointerInTransitChange:m}=r,h=y.useCallback(()=>{l(null),m(!1)},[m]),p=y.useCallback((w,g)=>{const b=w.currentTarget,v={x:w.clientX,y:w.clientY},f=dk(v,b.getBoundingClientRect()),x=pk(v,f),S=mk(g.getBoundingClientRect()),k=hk([...x,...S]);l(k),m(!0)},[m]);return y.useEffect(()=>()=>h(),[h]),y.useEffect(()=>{if(c&&d){const w=b=>p(b,d),g=b=>p(b,c);return c.addEventListener("pointerleave",w),d.addEventListener("pointerleave",g),()=>{c.removeEventListener("pointerleave",w),d.removeEventListener("pointerleave",g)}}},[c,d,p,h]),y.useEffect(()=>{if(i){const w=g=>{const b=g.target,v={x:g.clientX,y:g.clientY},f=(c==null?void 0:c.contains(b))||(d==null?void 0:d.contains(b)),x=!fk(v,i);f?h():x&&(h(),u())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[c,d,i,u,h]),a.jsx(Cv,{...e,ref:s})}),[ak,lk]=Ua(Sv,{isInside:!1}),ck=hb("TooltipContent"),Cv=y.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":o,onEscapeKeyDown:s,onPointerDownOutside:i,...l}=e,c=$a(Co,n),u=vd(n),{onClose:d}=c;return y.useEffect(()=>(document.addEventListener(fm,d),()=>document.removeEventListener(fm,d)),[d]),y.useEffect(()=>{if(c.trigger){const m=h=>{const p=h.target;p!=null&&p.contains(c.trigger)&&d()};return window.addEventListener("scroll",m,{capture:!0}),()=>window.removeEventListener("scroll",m,{capture:!0})}},[c.trigger,d]),a.jsx(Da,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:m=>m.preventDefault(),onDismiss:d,children:a.jsxs(ZS,{"data-state":c.stateAttribute,...u,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[a.jsx(ck,{children:r}),a.jsx(ak,{scope:n,isInside:!0,children:a.jsx(Vb,{id:c.contentId,role:"tooltip",children:o||r})})]})})});kv.displayName=Co;var Pv="TooltipArrow",uk=y.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,o=vd(n);return lk(Pv,n).isInside?null:a.jsx(ek,{...o,...r,ref:t})});uk.displayName=Pv;function dk(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),s=Math.abs(t.left-e.x);switch(Math.min(n,r,o,s)){case s:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function pk(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function mk(e){const{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}function fk(e,t){const{x:n,y:r}=e;let o=!1;for(let s=0,i=t.length-1;s<t.length;i=s++){const l=t[s],c=t[i],u=l.x,d=l.y,m=c.x,h=c.y;d>r!=h>r&&n<(m-u)*(r-d)/(h-d)+u&&(o=!o)}return o}function hk(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),gk(t)}function gk(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const o=e[r];for(;t.length>=2;){const s=t[t.length-1],i=t[t.length-2];if((s.x-i.x)*(o.y-i.y)>=(s.y-i.y)*(o.x-i.x))t.pop();else break}t.push(o)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r];for(;n.length>=2;){const s=n[n.length-1],i=n[n.length-2];if((s.x-i.x)*(o.y-i.y)>=(s.y-i.y)*(o.x-i.x))n.pop();else break}n.push(o)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var vk=wv,Nv=kv;const yk=vk,xk=y.forwardRef(({className:e,sideOffset:t=4,...n},r)=>a.jsx(Nv,{ref:r,sideOffset:t,className:ye("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));xk.displayName=Nv.displayName;var Wa=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ga=typeof window>"u"||"Deno"in globalThis;function wt(){}function bk(e,t){return typeof e=="function"?e(t):e}function wk(e){return typeof e=="number"&&e>=0&&e!==1/0}function Sk(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Qc(e,t){return typeof e=="function"?e(t):e}function kk(e,t){return typeof e=="function"?e(t):e}function hm(e,t){const{type:n="all",exact:r,fetchStatus:o,predicate:s,queryKey:i,stale:l}=e;if(i){if(r){if(t.queryHash!==yd(i,t.options))return!1}else if(!_s(t.queryKey,i))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||o&&o!==t.state.fetchStatus||s&&!s(t))}function gm(e,t){const{exact:n,status:r,predicate:o,mutationKey:s}=e;if(s){if(!t.options.mutationKey)return!1;if(n){if(As(t.options.mutationKey)!==As(s))return!1}else if(!_s(t.options.mutationKey,s))return!1}return!(r&&t.state.status!==r||o&&!o(t))}function yd(e,t){return((t==null?void 0:t.queryKeyHashFn)||As)(e)}function As(e){return JSON.stringify(e,(t,n)=>Xc(n)?Object.keys(n).sort().reduce((r,o)=>(r[o]=n[o],r),{}):n)}function _s(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>_s(e[n],t[n])):!1}function Ev(e,t){if(e===t)return e;const n=vm(e)&&vm(t);if(n||Xc(e)&&Xc(t)){const r=n?e:Object.keys(e),o=r.length,s=n?t:Object.keys(t),i=s.length,l=n?[]:{},c=new Set(r);let u=0;for(let d=0;d<i;d++){const m=n?d:s[d];(!n&&c.has(m)||n)&&e[m]===void 0&&t[m]===void 0?(l[m]=void 0,u++):(l[m]=Ev(e[m],t[m]),l[m]===e[m]&&e[m]!==void 0&&u++)}return o===i&&u===o?e:l}return t}function vm(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Xc(e){if(!ym(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!ym(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function ym(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ck(e){return new Promise(t=>{setTimeout(t,e)})}function Pk(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Ev(e,t):t}function Nk(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function Ek(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var xd=Symbol();function Tv(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===xd?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var ar,Tn,ao,Vm,Tk=(Vm=class extends Wa{constructor(){super();J(this,ar);J(this,Tn);J(this,ao);W(this,ao,t=>{if(!Ga&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){R(this,Tn)||this.setEventListener(R(this,ao))}onUnsubscribe(){var t;this.hasListeners()||((t=R(this,Tn))==null||t.call(this),W(this,Tn,void 0))}setEventListener(t){var n;W(this,ao,t),(n=R(this,Tn))==null||n.call(this),W(this,Tn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){R(this,ar)!==t&&(W(this,ar,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof R(this,ar)=="boolean"?R(this,ar):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},ar=new WeakMap,Tn=new WeakMap,ao=new WeakMap,Vm),jv=new Tk,lo,jn,co,zm,jk=(zm=class extends Wa{constructor(){super();J(this,lo,!0);J(this,jn);J(this,co);W(this,co,t=>{if(!Ga&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){R(this,jn)||this.setEventListener(R(this,co))}onUnsubscribe(){var t;this.hasListeners()||((t=R(this,jn))==null||t.call(this),W(this,jn,void 0))}setEventListener(t){var n;W(this,co,t),(n=R(this,jn))==null||n.call(this),W(this,jn,t(this.setOnline.bind(this)))}setOnline(t){R(this,lo)!==t&&(W(this,lo,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return R(this,lo)}},lo=new WeakMap,jn=new WeakMap,co=new WeakMap,zm),ha=new jk;function Rk(){let e,t;const n=new Promise((o,s)=>{e=o,t=s});n.status="pending",n.catch(()=>{});function r(o){Object.assign(n,o),delete n.resolve,delete n.reject}return n.resolve=o=>{r({status:"fulfilled",value:o}),e(o)},n.reject=o=>{r({status:"rejected",reason:o}),t(o)},n}function Ak(e){return Math.min(1e3*2**e,3e4)}function Rv(e){return(e??"online")==="online"?ha.isOnline():!0}var Av=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Dl(e){return e instanceof Av}function _v(e){let t=!1,n=0,r=!1,o;const s=Rk(),i=g=>{var b;r||(h(new Av(g)),(b=e.abort)==null||b.call(e))},l=()=>{t=!0},c=()=>{t=!1},u=()=>jv.isFocused()&&(e.networkMode==="always"||ha.isOnline())&&e.canRun(),d=()=>Rv(e.networkMode)&&e.canRun(),m=g=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,g),o==null||o(),s.resolve(g))},h=g=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,g),o==null||o(),s.reject(g))},p=()=>new Promise(g=>{var b;o=v=>{(r||u())&&g(v)},(b=e.onPause)==null||b.call(e)}).then(()=>{var g;o=void 0,r||(g=e.onContinue)==null||g.call(e)}),w=()=>{if(r)return;let g;const b=n===0?e.initialPromise:void 0;try{g=b??e.fn()}catch(v){g=Promise.reject(v)}Promise.resolve(g).then(m).catch(v=>{var P;if(r)return;const f=e.retry??(Ga?0:3),x=e.retryDelay??Ak,S=typeof x=="function"?x(n,v):x,k=f===!0||typeof f=="number"&&n<f||typeof f=="function"&&f(n,v);if(t||!k){h(v);return}n++,(P=e.onFail)==null||P.call(e,n,v),Ck(S).then(()=>u()?void 0:p()).then(()=>{t?h(v):w()})})};return{promise:s,cancel:i,continue:()=>(o==null||o(),s),cancelRetry:l,continueRetry:c,canStart:d,start:()=>(d()?w():p().then(w),s)}}var _k=e=>setTimeout(e,0);function Ik(){let e=[],t=0,n=l=>{l()},r=l=>{l()},o=_k;const s=l=>{t?e.push(l):o(()=>{n(l)})},i=()=>{const l=e;e=[],l.length&&o(()=>{r(()=>{l.forEach(c=>{n(c)})})})};return{batch:l=>{let c;t++;try{c=l()}finally{t--,t||i()}return c},batchCalls:l=>(...c)=>{s(()=>{l(...c)})},schedule:s,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{o=l}}}var ze=Ik(),lr,Bm,Iv=(Bm=class{constructor(){J(this,lr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),wk(this.gcTime)&&W(this,lr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Ga?1/0:5*60*1e3))}clearGcTimeout(){R(this,lr)&&(clearTimeout(R(this,lr)),W(this,lr,void 0))}},lr=new WeakMap,Bm),uo,cr,lt,ur,Me,Os,dr,St,Qt,Um,Mk=(Um=class extends Iv{constructor(t){super();J(this,St);J(this,uo);J(this,cr);J(this,lt);J(this,ur);J(this,Me);J(this,Os);J(this,dr);W(this,dr,!1),W(this,Os,t.defaultOptions),this.setOptions(t.options),this.observers=[],W(this,ur,t.client),W(this,lt,R(this,ur).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,W(this,uo,Dk(this.options)),this.state=t.state??R(this,uo),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=R(this,Me))==null?void 0:t.promise}setOptions(t){this.options={...R(this,Os),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&R(this,lt).remove(this)}setData(t,n){const r=Pk(this.state.data,t,this.options);return Ae(this,St,Qt).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ae(this,St,Qt).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,o;const n=(r=R(this,Me))==null?void 0:r.promise;return(o=R(this,Me))==null||o.cancel(t),n?n.then(wt).catch(wt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(R(this,uo))}isActive(){return this.observers.some(t=>kk(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===xd||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Qc(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!Sk(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=R(this,Me))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=R(this,Me))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),R(this,lt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(R(this,Me)&&(R(this,dr)?R(this,Me).cancel({revert:!0}):R(this,Me).cancelRetry()),this.scheduleGc()),R(this,lt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ae(this,St,Qt).call(this,{type:"invalidate"})}fetch(t,n){var u,d,m;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(R(this,Me))return R(this,Me).continueRetry(),R(this,Me).promise}if(t&&this.setOptions(t),!this.options.queryFn){const h=this.observers.find(p=>p.options.queryFn);h&&this.setOptions(h.options)}const r=new AbortController,o=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(W(this,dr,!0),r.signal)})},s=()=>{const h=Tv(this.options,n),w=(()=>{const g={client:R(this,ur),queryKey:this.queryKey,meta:this.meta};return o(g),g})();return W(this,dr,!1),this.options.persister?this.options.persister(h,w,this):h(w)},l=(()=>{const h={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:R(this,ur),state:this.state,fetchFn:s};return o(h),h})();(u=this.options.behavior)==null||u.onFetch(l,this),W(this,cr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=l.fetchOptions)==null?void 0:d.meta))&&Ae(this,St,Qt).call(this,{type:"fetch",meta:(m=l.fetchOptions)==null?void 0:m.meta});const c=h=>{var p,w,g,b;Dl(h)&&h.silent||Ae(this,St,Qt).call(this,{type:"error",error:h}),Dl(h)||((w=(p=R(this,lt).config).onError)==null||w.call(p,h,this),(b=(g=R(this,lt).config).onSettled)==null||b.call(g,this.state.data,h,this)),this.scheduleGc()};return W(this,Me,_v({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,abort:r.abort.bind(r),onSuccess:h=>{var p,w,g,b;if(h===void 0){c(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(v){c(v);return}(w=(p=R(this,lt).config).onSuccess)==null||w.call(p,h,this),(b=(g=R(this,lt).config).onSettled)==null||b.call(g,h,this.state.error,this),this.scheduleGc()},onError:c,onFail:(h,p)=>{Ae(this,St,Qt).call(this,{type:"failed",failureCount:h,error:p})},onPause:()=>{Ae(this,St,Qt).call(this,{type:"pause"})},onContinue:()=>{Ae(this,St,Qt).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),R(this,Me).start()}},uo=new WeakMap,cr=new WeakMap,lt=new WeakMap,ur=new WeakMap,Me=new WeakMap,Os=new WeakMap,dr=new WeakMap,St=new WeakSet,Qt=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...Ok(r.data,this.options),fetchMeta:t.meta??null};case"success":return W(this,cr,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=t.error;return Dl(o)&&o.revert&&R(this,cr)?{...R(this,cr),fetchStatus:"idle"}:{...r,error:o,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),ze.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),R(this,lt).notify({query:this,type:"updated",action:t})})},Um);function Ok(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Rv(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Dk(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Dt,$m,Lk=($m=class extends Wa{constructor(t={}){super();J(this,Dt);this.config=t,W(this,Dt,new Map)}build(t,n,r){const o=n.queryKey,s=n.queryHash??yd(o,n);let i=this.get(s);return i||(i=new Mk({client:t,queryKey:o,queryHash:s,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(i)),i}add(t){R(this,Dt).has(t.queryHash)||(R(this,Dt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=R(this,Dt).get(t.queryHash);n&&(t.destroy(),n===t&&R(this,Dt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){ze.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return R(this,Dt).get(t)}getAll(){return[...R(this,Dt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>hm(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>hm(t,r)):n}notify(t){ze.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){ze.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){ze.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Dt=new WeakMap,$m),Lt,Fe,pr,Ft,wn,Wm,Fk=(Wm=class extends Iv{constructor(t){super();J(this,Ft);J(this,Lt);J(this,Fe);J(this,pr);this.mutationId=t.mutationId,W(this,Fe,t.mutationCache),W(this,Lt,[]),this.state=t.state||Vk(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){R(this,Lt).includes(t)||(R(this,Lt).push(t),this.clearGcTimeout(),R(this,Fe).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){W(this,Lt,R(this,Lt).filter(n=>n!==t)),this.scheduleGc(),R(this,Fe).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){R(this,Lt).length||(this.state.status==="pending"?this.scheduleGc():R(this,Fe).remove(this))}continue(){var t;return((t=R(this,pr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var s,i,l,c,u,d,m,h,p,w,g,b,v,f,x,S,k,P,N,C;const n=()=>{Ae(this,Ft,wn).call(this,{type:"continue"})};W(this,pr,_v({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(E,M)=>{Ae(this,Ft,wn).call(this,{type:"failed",failureCount:E,error:M})},onPause:()=>{Ae(this,Ft,wn).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>R(this,Fe).canRun(this)}));const r=this.state.status==="pending",o=!R(this,pr).canStart();try{if(r)n();else{Ae(this,Ft,wn).call(this,{type:"pending",variables:t,isPaused:o}),await((i=(s=R(this,Fe).config).onMutate)==null?void 0:i.call(s,t,this));const M=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,t));M!==this.state.context&&Ae(this,Ft,wn).call(this,{type:"pending",context:M,variables:t,isPaused:o})}const E=await R(this,pr).start();return await((d=(u=R(this,Fe).config).onSuccess)==null?void 0:d.call(u,E,t,this.state.context,this)),await((h=(m=this.options).onSuccess)==null?void 0:h.call(m,E,t,this.state.context)),await((w=(p=R(this,Fe).config).onSettled)==null?void 0:w.call(p,E,null,this.state.variables,this.state.context,this)),await((b=(g=this.options).onSettled)==null?void 0:b.call(g,E,null,t,this.state.context)),Ae(this,Ft,wn).call(this,{type:"success",data:E}),E}catch(E){try{throw await((f=(v=R(this,Fe).config).onError)==null?void 0:f.call(v,E,t,this.state.context,this)),await((S=(x=this.options).onError)==null?void 0:S.call(x,E,t,this.state.context)),await((P=(k=R(this,Fe).config).onSettled)==null?void 0:P.call(k,void 0,E,this.state.variables,this.state.context,this)),await((C=(N=this.options).onSettled)==null?void 0:C.call(N,void 0,E,t,this.state.context)),E}finally{Ae(this,Ft,wn).call(this,{type:"error",error:E})}}finally{R(this,Fe).runNext(this)}}},Lt=new WeakMap,Fe=new WeakMap,pr=new WeakMap,Ft=new WeakSet,wn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),ze.batch(()=>{R(this,Lt).forEach(r=>{r.onMutationUpdate(t)}),R(this,Fe).notify({mutation:this,type:"updated",action:t})})},Wm);function Vk(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Zt,kt,Ds,Gm,zk=(Gm=class extends Wa{constructor(t={}){super();J(this,Zt);J(this,kt);J(this,Ds);this.config=t,W(this,Zt,new Set),W(this,kt,new Map),W(this,Ds,0)}build(t,n,r){const o=new Fk({mutationCache:this,mutationId:++qs(this,Ds)._,options:t.defaultMutationOptions(n),state:r});return this.add(o),o}add(t){R(this,Zt).add(t);const n=gi(t);if(typeof n=="string"){const r=R(this,kt).get(n);r?r.push(t):R(this,kt).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(R(this,Zt).delete(t)){const n=gi(t);if(typeof n=="string"){const r=R(this,kt).get(n);if(r)if(r.length>1){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}else r[0]===t&&R(this,kt).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=gi(t);if(typeof n=="string"){const r=R(this,kt).get(n),o=r==null?void 0:r.find(s=>s.state.status==="pending");return!o||o===t}else return!0}runNext(t){var r;const n=gi(t);if(typeof n=="string"){const o=(r=R(this,kt).get(n))==null?void 0:r.find(s=>s!==t&&s.state.isPaused);return(o==null?void 0:o.continue())??Promise.resolve()}else return Promise.resolve()}clear(){ze.batch(()=>{R(this,Zt).forEach(t=>{this.notify({type:"removed",mutation:t})}),R(this,Zt).clear(),R(this,kt).clear()})}getAll(){return Array.from(R(this,Zt))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>gm(n,r))}findAll(t={}){return this.getAll().filter(n=>gm(t,n))}notify(t){ze.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return ze.batch(()=>Promise.all(t.map(n=>n.continue().catch(wt))))}},Zt=new WeakMap,kt=new WeakMap,Ds=new WeakMap,Gm);function gi(e){var t;return(t=e.options.scope)==null?void 0:t.id}function xm(e){return{onFetch:(t,n)=>{var d,m,h,p,w;const r=t.options,o=(h=(m=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:m.fetchMore)==null?void 0:h.direction,s=((p=t.state.data)==null?void 0:p.pages)||[],i=((w=t.state.data)==null?void 0:w.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const u=async()=>{let g=!1;const b=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(t.signal.aborted?g=!0:t.signal.addEventListener("abort",()=>{g=!0}),t.signal)})},v=Tv(t.options,t.fetchOptions),f=async(x,S,k)=>{if(g)return Promise.reject();if(S==null&&x.pages.length)return Promise.resolve(x);const N=(()=>{const z={client:t.client,queryKey:t.queryKey,pageParam:S,direction:k?"backward":"forward",meta:t.options.meta};return b(z),z})(),C=await v(N),{maxPages:E}=t.options,M=k?Ek:Nk;return{pages:M(x.pages,C,E),pageParams:M(x.pageParams,S,E)}};if(o&&s.length){const x=o==="backward",S=x?Bk:bm,k={pages:s,pageParams:i},P=S(r,k);l=await f(k,P,x)}else{const x=e??s.length;do{const S=c===0?i[0]??r.initialPageParam:bm(r,l);if(c>0&&S==null)break;l=await f(l,S),c++}while(c<x)}return l};t.options.persister?t.fetchFn=()=>{var g,b;return(b=(g=t.options).persister)==null?void 0:b.call(g,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function bm(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function Bk(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var fe,Rn,An,po,mo,_n,fo,ho,Hm,Uk=(Hm=class{constructor(e={}){J(this,fe);J(this,Rn);J(this,An);J(this,po);J(this,mo);J(this,_n);J(this,fo);J(this,ho);W(this,fe,e.queryCache||new Lk),W(this,Rn,e.mutationCache||new zk),W(this,An,e.defaultOptions||{}),W(this,po,new Map),W(this,mo,new Map),W(this,_n,0)}mount(){qs(this,_n)._++,R(this,_n)===1&&(W(this,fo,jv.subscribe(async e=>{e&&(await this.resumePausedMutations(),R(this,fe).onFocus())})),W(this,ho,ha.subscribe(async e=>{e&&(await this.resumePausedMutations(),R(this,fe).onOnline())})))}unmount(){var e,t;qs(this,_n)._--,R(this,_n)===0&&((e=R(this,fo))==null||e.call(this),W(this,fo,void 0),(t=R(this,ho))==null||t.call(this),W(this,ho,void 0))}isFetching(e){return R(this,fe).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return R(this,Rn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=R(this,fe).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=R(this,fe).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Qc(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return R(this,fe).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),o=R(this,fe).get(r.queryHash),s=o==null?void 0:o.state.data,i=bk(t,s);if(i!==void 0)return R(this,fe).build(this,r).setData(i,{...n,manual:!0})}setQueriesData(e,t,n){return ze.batch(()=>R(this,fe).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=R(this,fe).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=R(this,fe);ze.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=R(this,fe);return ze.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=ze.batch(()=>R(this,fe).findAll(e).map(o=>o.cancel(n)));return Promise.all(r).then(wt).catch(wt)}invalidateQueries(e,t={}){return ze.batch(()=>(R(this,fe).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=ze.batch(()=>R(this,fe).findAll(e).filter(o=>!o.isDisabled()&&!o.isStatic()).map(o=>{let s=o.fetch(void 0,n);return n.throwOnError||(s=s.catch(wt)),o.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(r).then(wt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=R(this,fe).build(this,t);return n.isStaleByTime(Qc(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(wt).catch(wt)}fetchInfiniteQuery(e){return e.behavior=xm(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(wt).catch(wt)}ensureInfiniteQueryData(e){return e.behavior=xm(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return ha.isOnline()?R(this,Rn).resumePausedMutations():Promise.resolve()}getQueryCache(){return R(this,fe)}getMutationCache(){return R(this,Rn)}getDefaultOptions(){return R(this,An)}setDefaultOptions(e){W(this,An,e)}setQueryDefaults(e,t){R(this,po).set(As(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...R(this,po).values()],n={};return t.forEach(r=>{_s(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){R(this,mo).set(As(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...R(this,mo).values()],n={};return t.forEach(r=>{_s(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...R(this,An).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=yd(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===xd&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...R(this,An).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){R(this,fe).clear(),R(this,Rn).clear()}},fe=new WeakMap,Rn=new WeakMap,An=new WeakMap,po=new WeakMap,mo=new WeakMap,_n=new WeakMap,fo=new WeakMap,ho=new WeakMap,Hm),$k=y.createContext(void 0),Wk=({client:e,children:t})=>(y.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),a.jsx($k.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ga.apply(this,arguments)}var On;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(On||(On={}));const wm="popstate";function Gk(e){e===void 0&&(e={});function t(r,o){let{pathname:s,search:i,hash:l}=r.location;return Jc("",{pathname:s,search:i,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ov(o)}return Kk(t,n,null,e)}function Qe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hk(){return Math.random().toString(36).substr(2,8)}function Sm(e,t){return{usr:e.state,key:e.key,idx:t}}function Jc(e,t,n,r){return n===void 0&&(n=null),ga({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ha(t):t,{state:n,key:t&&t.key||r||Hk()})}function Ov(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ha(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Kk(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:s=!1}=r,i=o.history,l=On.Pop,c=null,u=d();u==null&&(u=0,i.replaceState(ga({},i.state,{idx:u}),""));function d(){return(i.state||{idx:null}).idx}function m(){l=On.Pop;let b=d(),v=b==null?null:b-u;u=b,c&&c({action:l,location:g.location,delta:v})}function h(b,v){l=On.Push;let f=Jc(g.location,b,v);u=d()+1;let x=Sm(f,u),S=g.createHref(f);try{i.pushState(x,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(S)}s&&c&&c({action:l,location:g.location,delta:1})}function p(b,v){l=On.Replace;let f=Jc(g.location,b,v);u=d();let x=Sm(f,u),S=g.createHref(f);i.replaceState(x,"",S),s&&c&&c({action:l,location:g.location,delta:0})}function w(b){let v=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof b=="string"?b:Ov(b);return f=f.replace(/ $/,"%20"),Qe(v,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,v)}let g={get action(){return l},get location(){return e(o,i)},listen(b){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(wm,m),c=b,()=>{o.removeEventListener(wm,m),c=null}},createHref(b){return t(o,b)},createURL:w,encodeLocation(b){let v=w(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:p,go(b){return i.go(b)}};return g}var km;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(km||(km={}));function qk(e,t,n){return n===void 0&&(n="/"),Yk(e,t,n,!1)}function Yk(e,t,n,r){let o=typeof t=="string"?Ha(t):t,s=Fv(o.pathname||"/",n);if(s==null)return null;let i=Dv(e);Qk(i);let l=null;for(let c=0;l==null&&c<i.length;++c){let u=aC(s);l=sC(i[c],u,r)}return l}function Dv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(s,i,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:i,route:s};c.relativePath.startsWith("/")&&(Qe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=so([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Dv(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:rC(u,s.index),routesMeta:d})};return e.forEach((s,i)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))o(s,i);else for(let c of Lv(s.path))o(s,i,c)}),t}function Lv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return o?[s,""]:[s];let i=Lv(r.join("/")),l=[];return l.push(...i.map(c=>c===""?s:[s,c].join("/"))),o&&l.push(...i),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Qk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:oC(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Xk=/^:[\w-]+$/,Jk=3,Zk=2,eC=1,tC=10,nC=-2,Cm=e=>e==="*";function rC(e,t){let n=e.split("/"),r=n.length;return n.some(Cm)&&(r+=nC),t&&(r+=Zk),n.filter(o=>!Cm(o)).reduce((o,s)=>o+(Xk.test(s)?Jk:s===""?eC:tC),r)}function oC(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function sC(e,t,n){let{routesMeta:r}=e,o={},s="/",i=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",m=Pm({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),h=c.route;if(!m&&u&&n&&!r[r.length-1].route.index&&(m=Pm({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!m)return null;Object.assign(o,m.params),i.push({params:o,pathname:so([s,m.pathname]),pathnameBase:lC(so([s,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(s=so([s,m.pathnameBase]))}return i}function Pm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=iC(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let s=o[0],i=s.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,d,m)=>{let{paramName:h,isOptional:p}=d;if(h==="*"){let g=l[m]||"";i=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const w=l[m];return p&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:i,pattern:e}}function iC(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Mv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function aC(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fv(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const so=e=>e.join("/").replace(/\/\/+/g,"/"),lC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function cC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vv=["post","put","patch","delete"];new Set(Vv);const uC=["get",...Vv];new Set(uC);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},va.apply(this,arguments)}const dC=y.createContext(null),pC=y.createContext(null),zv=y.createContext(null),Ka=y.createContext(null),qa=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Bv=y.createContext(null);function bd(){return y.useContext(Ka)!=null}function Uv(){return bd()||Qe(!1),y.useContext(Ka).location}function mC(e,t){return fC(e,t)}function fC(e,t,n,r){bd()||Qe(!1);let{navigator:o}=y.useContext(zv),{matches:s}=y.useContext(qa),i=s[s.length-1],l=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let u=Uv(),d;if(t){var m;let b=typeof t=="string"?Ha(t):t;c==="/"||(m=b.pathname)!=null&&m.startsWith(c)||Qe(!1),d=b}else d=u;let h=d.pathname||"/",p=h;if(c!=="/"){let b=c.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let w=qk(e,{pathname:p}),g=xC(w&&w.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:so([c,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:so([c,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return t&&g?y.createElement(Ka.Provider,{value:{location:va({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:On.Pop}},g):g}function hC(){let e=kC(),t=cC(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:o},n):null,null)}const gC=y.createElement(hC,null);class vC extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(qa.Provider,{value:this.props.routeContext},y.createElement(Bv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yC(e){let{routeContext:t,match:n,children:r}=e,o=y.useContext(dC);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(qa.Provider,{value:t},r)}function xC(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let d=i.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);d>=0||Qe(!1),i=i.slice(0,Math.min(i.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<i.length;d++){let m=i[d];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=d),m.route.id){let{loaderData:h,errors:p}=n,w=m.route.loader&&h[m.route.id]===void 0&&(!p||p[m.route.id]===void 0);if(m.route.lazy||w){c=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((d,m,h)=>{let p,w=!1,g=null,b=null;n&&(p=l&&m.route.id?l[m.route.id]:void 0,g=m.route.errorElement||gC,c&&(u<0&&h===0?(w=!0,b=null):u===h&&(w=!0,b=m.route.hydrateFallbackElement||null)));let v=t.concat(i.slice(0,h+1)),f=()=>{let x;return p?x=g:w?x=b:m.route.Component?x=y.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=d,y.createElement(yC,{match:m,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:x})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?y.createElement(vC,{location:n.location,revalidation:n.revalidation,component:g,error:p,children:f(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):f()},null)}var Zc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zc||{});function bC(e){let t=y.useContext(pC);return t||Qe(!1),t}function wC(e){let t=y.useContext(qa);return t||Qe(!1),t}function SC(e){let t=wC(),n=t.matches[t.matches.length-1];return n.route.id||Qe(!1),n.route.id}function kC(){var e;let t=y.useContext(Bv),n=bC(Zc.UseRouteError),r=SC(Zc.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function CC(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function eu(e){Qe(!1)}function PC(e){let{basename:t="/",children:n=null,location:r,navigationType:o=On.Pop,navigator:s,static:i=!1,future:l}=e;bd()&&Qe(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:s,static:i,future:va({v7_relativeSplatPath:!1},l)}),[c,l,s,i]);typeof r=="string"&&(r=Ha(r));let{pathname:d="/",search:m="",hash:h="",state:p=null,key:w="default"}=r,g=y.useMemo(()=>{let b=Fv(d,c);return b==null?null:{location:{pathname:b,search:m,hash:h,state:p,key:w},navigationType:o}},[c,d,m,h,p,w,o]);return g==null?null:y.createElement(zv.Provider,{value:u},y.createElement(Ka.Provider,{children:n,value:g}))}function NC(e){let{children:t,location:n}=e;return mC(tu(t),n)}new Promise(()=>{});function tu(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let s=[...t,o];if(r.type===y.Fragment){n.push.apply(n,tu(r.props.children,s));return}r.type!==eu&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let i={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=tu(r.props.children,s)),n.push(i)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const EC="6";try{window.__reactRouterVersion=EC}catch{}const TC="startTransition",Nm=du[TC];function jC(e){let{basename:t,children:n,future:r,window:o}=e,s=y.useRef();s.current==null&&(s.current=Gk({window:o,v5Compat:!0}));let i=s.current,[l,c]=y.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},d=y.useCallback(m=>{u&&Nm?Nm(()=>c(m)):c(m)},[c,u]);return y.useLayoutEffect(()=>i.listen(d),[i,d]),y.useEffect(()=>CC(r),[r]),y.createElement(PC,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:i,future:r})}var Em;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Em||(Em={}));var Tm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tm||(Tm={}));const RC="/kubernetes/assets/kubernetes-hero-CxoC5qg8.jpg",AC=()=>{const[e,t]=y.useState(!1);return y.useEffect(()=>{t(!0)},[]),a.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0 dots-pattern opacity-30"}),a.jsxs("div",{className:"absolute inset-0 z-0",children:[a.jsx("img",{src:RC,alt:"Kubernetes cluster visualization",className:"w-full h-full object-cover opacity-20"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"})]}),a.jsx("div",{className:"container relative z-10 px-4 sm:px-6 lg:px-8",children:a.jsx("div",{className:"max-w-6xl mx-auto",children:a.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[a.jsxs("div",{className:`space-y-8 ${e?"animate-slide-up":"opacity-0"}`,children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium",children:[a.jsx(zg,{className:"w-4 h-4"}),"Interactive Kubernetes Learning"]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h1",{className:"text-5xl lg:text-7xl font-bold leading-tight",children:["Master"," ",a.jsx("span",{className:"gradient-text",children:"Kubernetes"})]}),a.jsx("p",{className:"text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed",children:"Your path to cloud-native excellence with interactive tutorials, 3D visualizations, and real-world scenarios."})]})]}),a.jsx("div",{className:"relative lg:h-[600px] flex items-center justify-center",children:a.jsxs("div",{className:"relative animate-float",children:[a.jsx("div",{className:"absolute -top-8 -right-8 w-16 h-16 bg-gradient-primary rounded-lg opacity-80 animate-glow"}),a.jsx("div",{className:"absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-accent to-cyber-purple rounded-lg opacity-60 animate-glow",style:{animationDelay:"1s"}}),a.jsx("div",{className:"relative p-8 card-gradient rounded-2xl border border-border/50 hover-lift",children:a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-3 h-3 bg-tech-green rounded-full animate-pulse"}),a.jsx("span",{className:"font-mono text-sm text-muted-foreground",children:"cluster.local"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("div",{className:"h-2 bg-primary/30 rounded w-3/4"}),a.jsx("div",{className:"h-2 bg-accent/30 rounded w-1/2"}),a.jsx("div",{className:"h-2 bg-primary/20 rounded w-2/3"})]}),a.jsxs("div",{className:"mt-6 p-4 terminal rounded-lg",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[a.jsx("div",{className:"w-2 h-2 bg-red-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full"}),a.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"})]}),a.jsxs("div",{className:"font-mono text-sm space-y-1",children:[a.jsx("div",{className:"text-primary",children:"$ kubectl get pods"}),a.jsx("div",{className:"text-muted-foreground",children:"NAME READY STATUS"}),a.jsx("div",{className:"text-tech-green",children:"web-app-1 1/1 Running"})]})]})]})})]})})]})})})]})},ke=y.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:ye("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));ke.displayName="Card";const Is=y.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:ye("flex flex-col space-y-1.5 p-6",e),...t}));Is.displayName="CardHeader";const Ms=y.forwardRef(({className:e,...t},n)=>a.jsx("h3",{ref:n,className:ye("text-2xl font-semibold leading-none tracking-tight",e),...t}));Ms.displayName="CardTitle";const _C=y.forwardRef(({className:e,...t},n)=>a.jsx("p",{ref:n,className:ye("text-sm text-muted-foreground",e),...t}));_C.displayName="CardDescription";const Ee=y.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:ye("p-6 pt-0",e),...t}));Ee.displayName="CardContent";const IC=y.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:ye("flex items-center p-6 pt-0",e),...t}));IC.displayName="CardFooter";var Ya="Collapsible",[MC,gP]=To(Ya),[OC,wd]=MC(Ya),$v=y.forwardRef((e,t)=>{const{__scopeCollapsible:n,open:r,defaultOpen:o,disabled:s,onOpenChange:i,...l}=e,[c,u]=rd({prop:r,defaultProp:o??!1,onChange:i,caller:Ya});return a.jsx(OC,{scope:n,disabled:s,contentId:Di(),open:c,onOpenToggle:y.useCallback(()=>u(d=>!d),[u]),children:a.jsx(me.div,{"data-state":kd(c),"data-disabled":s?"":void 0,...l,ref:t})})});$v.displayName=Ya;var Wv="CollapsibleTrigger",Gv=y.forwardRef((e,t)=>{const{__scopeCollapsible:n,...r}=e,o=wd(Wv,n);return a.jsx(me.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":kd(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...r,ref:t,onClick:ie(e.onClick,o.onOpenToggle)})});Gv.displayName=Wv;var Sd="CollapsibleContent",Hv=y.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=wd(Sd,e.__scopeCollapsible);return a.jsx(Cr,{present:n||o.open,children:({present:s})=>a.jsx(DC,{...r,ref:t,present:s})})});Hv.displayName=Sd;var DC=y.forwardRef((e,t)=>{const{__scopeCollapsible:n,present:r,children:o,...s}=e,i=wd(Sd,n),[l,c]=y.useState(r),u=y.useRef(null),d=Le(t,u),m=y.useRef(0),h=m.current,p=y.useRef(0),w=p.current,g=i.open||l,b=y.useRef(g),v=y.useRef(void 0);return y.useEffect(()=>{const f=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(f)},[]),Ht(()=>{const f=u.current;if(f){v.current=v.current||{transitionDuration:f.style.transitionDuration,animationName:f.style.animationName},f.style.transitionDuration="0s",f.style.animationName="none";const x=f.getBoundingClientRect();m.current=x.height,p.current=x.width,b.current||(f.style.transitionDuration=v.current.transitionDuration,f.style.animationName=v.current.animationName),c(r)}},[i.open,r]),a.jsx(me.div,{"data-state":kd(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!g,...s,ref:d,style:{"--radix-collapsible-content-height":h?`${h}px`:void 0,"--radix-collapsible-content-width":w?`${w}px`:void 0,...e.style},children:g&&o})});function kd(e){return e?"open":"closed"}var LC=$v;const nu=LC,ru=Gv,ou=Hv;var Ll="focusScope.autoFocusOnMount",Fl="focusScope.autoFocusOnUnmount",jm={bubbles:!1,cancelable:!0},FC="FocusScope",Kv=y.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:s,...i}=e,[l,c]=y.useState(null),u=Gt(o),d=Gt(s),m=y.useRef(null),h=Le(t,g=>c(g)),p=y.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;y.useEffect(()=>{if(r){let g=function(x){if(p.paused||!l)return;const S=x.target;l.contains(S)?m.current=S:Sn(m.current,{select:!0})},b=function(x){if(p.paused||!l)return;const S=x.relatedTarget;S!==null&&(l.contains(S)||Sn(m.current,{select:!0}))},v=function(x){if(document.activeElement===document.body)for(const k of x)k.removedNodes.length>0&&Sn(l)};document.addEventListener("focusin",g),document.addEventListener("focusout",b);const f=new MutationObserver(v);return l&&f.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",b),f.disconnect()}}},[r,l,p.paused]),y.useEffect(()=>{if(l){Am.add(p);const g=document.activeElement;if(!l.contains(g)){const v=new CustomEvent(Ll,jm);l.addEventListener(Ll,u),l.dispatchEvent(v),v.defaultPrevented||(VC(WC(qv(l)),{select:!0}),document.activeElement===g&&Sn(l))}return()=>{l.removeEventListener(Ll,u),setTimeout(()=>{const v=new CustomEvent(Fl,jm);l.addEventListener(Fl,d),l.dispatchEvent(v),v.defaultPrevented||Sn(g??document.body,{select:!0}),l.removeEventListener(Fl,d),Am.remove(p)},0)}}},[l,u,d,p]);const w=y.useCallback(g=>{if(!n&&!r||p.paused)return;const b=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,v=document.activeElement;if(b&&v){const f=g.currentTarget,[x,S]=zC(f);x&&S?!g.shiftKey&&v===S?(g.preventDefault(),n&&Sn(x,{select:!0})):g.shiftKey&&v===x&&(g.preventDefault(),n&&Sn(S,{select:!0})):v===f&&g.preventDefault()}},[n,r,p.paused]);return a.jsx(me.div,{tabIndex:-1,...i,ref:h,onKeyDown:w})});Kv.displayName=FC;function VC(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Sn(r,{select:t}),document.activeElement!==n)return}function zC(e){const t=qv(e),n=Rm(t,e),r=Rm(t.reverse(),e);return[n,r]}function qv(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Rm(e,t){for(const n of e)if(!BC(n,{upTo:t}))return n}function BC(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function UC(e){return e instanceof HTMLInputElement&&"select"in e}function Sn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&UC(e)&&t&&e.select()}}var Am=$C();function $C(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=_m(e,t),e.unshift(t)},remove(t){var n;e=_m(e,t),(n=e[0])==null||n.resume()}}}function _m(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function WC(e){return e.filter(t=>t.tagName!=="A")}var Vl=0;function GC(){y.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Im()),document.body.insertAdjacentElement("beforeend",e[1]??Im()),Vl++,()=>{Vl===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Vl--}},[])}function Im(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var zt=function(){return zt=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},zt.apply(this,arguments)};function Yv(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function HC(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,s;r<o;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Fi="right-scroll-bar-position",Vi="width-before-scroll-bar",KC="with-scroll-bars-hidden",qC="--removed-body-scroll-bar-size";function zl(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function YC(e,t){var n=y.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var QC=typeof window<"u"?y.useLayoutEffect:y.useEffect,Mm=new WeakMap;function XC(e,t){var n=YC(null,function(r){return e.forEach(function(o){return zl(o,r)})});return QC(function(){var r=Mm.get(n);if(r){var o=new Set(r),s=new Set(e),i=n.current;o.forEach(function(l){s.has(l)||zl(l,null)}),s.forEach(function(l){o.has(l)||zl(l,i)})}Mm.set(n,e)},[e]),n}function JC(e){return e}function ZC(e,t){t===void 0&&(t=JC);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(s){var i=t(s,r);return n.push(i),function(){n=n.filter(function(l){return l!==i})}},assignSyncMedium:function(s){for(r=!0;n.length;){var i=n;n=[],i.forEach(s)}n={push:function(l){return s(l)},filter:function(){return n}}},assignMedium:function(s){r=!0;var i=[];if(n.length){var l=n;n=[],l.forEach(s),i=n}var c=function(){var d=i;i=[],d.forEach(s)},u=function(){return Promise.resolve().then(c)};u(),n={push:function(d){i.push(d),u()},filter:function(d){return i=i.filter(d),n}}}};return o}function e2(e){e===void 0&&(e={});var t=ZC(null);return t.options=zt({async:!0,ssr:!1},e),t}var Qv=function(e){var t=e.sideCar,n=Yv(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return y.createElement(r,zt({},n))};Qv.isSideCarExport=!0;function t2(e,t){return e.useMedium(t),Qv}var Xv=e2(),Bl=function(){},Qa=y.forwardRef(function(e,t){var n=y.useRef(null),r=y.useState({onScrollCapture:Bl,onWheelCapture:Bl,onTouchMoveCapture:Bl}),o=r[0],s=r[1],i=e.forwardProps,l=e.children,c=e.className,u=e.removeScrollBar,d=e.enabled,m=e.shards,h=e.sideCar,p=e.noRelative,w=e.noIsolation,g=e.inert,b=e.allowPinchZoom,v=e.as,f=v===void 0?"div":v,x=e.gapMode,S=Yv(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),k=h,P=XC([n,t]),N=zt(zt({},S),o);return y.createElement(y.Fragment,null,d&&y.createElement(k,{sideCar:Xv,removeScrollBar:u,shards:m,noRelative:p,noIsolation:w,inert:g,setCallbacks:s,allowPinchZoom:!!b,lockRef:n,gapMode:x}),i?y.cloneElement(y.Children.only(l),zt(zt({},N),{ref:P})):y.createElement(f,zt({},N,{className:c,ref:P}),l))});Qa.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Qa.classNames={fullWidth:Vi,zeroRight:Fi};var n2=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function r2(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=n2();return t&&e.setAttribute("nonce",t),e}function o2(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function s2(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var i2=function(){var e=0,t=null;return{add:function(n){e==0&&(t=r2())&&(o2(t,n),s2(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},a2=function(){var e=i2();return function(t,n){y.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Jv=function(){var e=a2(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},l2={left:0,top:0,right:0,gap:0},Ul=function(e){return parseInt(e||"",10)||0},c2=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[Ul(n),Ul(r),Ul(o)]},u2=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return l2;var t=c2(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},d2=Jv(),io="data-scroll-locked",p2=function(e,t,n,r){var o=e.left,s=e.top,i=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(KC,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body[`).concat(io,`] {
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
  
  .`).concat(Fi,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(Vi,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(Fi," .").concat(Fi,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Vi," .").concat(Vi,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(io,`] {
    `).concat(qC,": ").concat(l,`px;
  }
`)},Om=function(){var e=parseInt(document.body.getAttribute(io)||"0",10);return isFinite(e)?e:0},m2=function(){y.useEffect(function(){return document.body.setAttribute(io,(Om()+1).toString()),function(){var e=Om()-1;e<=0?document.body.removeAttribute(io):document.body.setAttribute(io,e.toString())}},[])},f2=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;m2();var s=y.useMemo(function(){return u2(o)},[o]);return y.createElement(d2,{styles:p2(s,!t,o,n?"":"!important")})},su=!1;if(typeof window<"u")try{var vi=Object.defineProperty({},"passive",{get:function(){return su=!0,!0}});window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{su=!1}var _r=su?{passive:!1}:!1,h2=function(e){return e.tagName==="TEXTAREA"},Zv=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!h2(e)&&n[t]==="visible")},g2=function(e){return Zv(e,"overflowY")},v2=function(e){return Zv(e,"overflowX")},Dm=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=ey(e,r);if(o){var s=ty(e,r),i=s[1],l=s[2];if(i>l)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},y2=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},x2=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},ey=function(e,t){return e==="v"?g2(t):v2(t)},ty=function(e,t){return e==="v"?y2(t):x2(t)},b2=function(e,t){return e==="h"&&t==="rtl"?-1:1},w2=function(e,t,n,r,o){var s=b2(e,window.getComputedStyle(t).direction),i=s*r,l=n.target,c=t.contains(l),u=!1,d=i>0,m=0,h=0;do{if(!l)break;var p=ty(e,l),w=p[0],g=p[1],b=p[2],v=g-b-s*w;(w||v)&&ey(e,l)&&(m+=v,h+=w);var f=l.parentNode;l=f&&f.nodeType===Node.DOCUMENT_FRAGMENT_NODE?f.host:f}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return(d&&(Math.abs(m)<1||!o)||!d&&(Math.abs(h)<1||!o))&&(u=!0),u},yi=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Lm=function(e){return[e.deltaX,e.deltaY]},Fm=function(e){return e&&"current"in e?e.current:e},S2=function(e,t){return e[0]===t[0]&&e[1]===t[1]},k2=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},C2=0,Ir=[];function P2(e){var t=y.useRef([]),n=y.useRef([0,0]),r=y.useRef(),o=y.useState(C2++)[0],s=y.useState(Jv)[0],i=y.useRef(e);y.useEffect(function(){i.current=e},[e]),y.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var g=HC([e.lockRef.current],(e.shards||[]).map(Fm),!0).filter(Boolean);return g.forEach(function(b){return b.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),g.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=y.useCallback(function(g,b){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!i.current.allowPinchZoom;var v=yi(g),f=n.current,x="deltaX"in g?g.deltaX:f[0]-v[0],S="deltaY"in g?g.deltaY:f[1]-v[1],k,P=g.target,N=Math.abs(x)>Math.abs(S)?"h":"v";if("touches"in g&&N==="h"&&P.type==="range")return!1;var C=Dm(N,P);if(!C)return!0;if(C?k=N:(k=N==="v"?"h":"v",C=Dm(N,P)),!C)return!1;if(!r.current&&"changedTouches"in g&&(x||S)&&(r.current=k),!k)return!0;var E=r.current||k;return w2(E,b,g,E==="h"?x:S,!0)},[]),c=y.useCallback(function(g){var b=g;if(!(!Ir.length||Ir[Ir.length-1]!==s)){var v="deltaY"in b?Lm(b):yi(b),f=t.current.filter(function(k){return k.name===b.type&&(k.target===b.target||b.target===k.shadowParent)&&S2(k.delta,v)})[0];if(f&&f.should){b.cancelable&&b.preventDefault();return}if(!f){var x=(i.current.shards||[]).map(Fm).filter(Boolean).filter(function(k){return k.contains(b.target)}),S=x.length>0?l(b,x[0]):!i.current.noIsolation;S&&b.cancelable&&b.preventDefault()}}},[]),u=y.useCallback(function(g,b,v,f){var x={name:g,delta:b,target:v,should:f,shadowParent:N2(v)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(S){return S!==x})},1)},[]),d=y.useCallback(function(g){n.current=yi(g),r.current=void 0},[]),m=y.useCallback(function(g){u(g.type,Lm(g),g.target,l(g,e.lockRef.current))},[]),h=y.useCallback(function(g){u(g.type,yi(g),g.target,l(g,e.lockRef.current))},[]);y.useEffect(function(){return Ir.push(s),e.setCallbacks({onScrollCapture:m,onWheelCapture:m,onTouchMoveCapture:h}),document.addEventListener("wheel",c,_r),document.addEventListener("touchmove",c,_r),document.addEventListener("touchstart",d,_r),function(){Ir=Ir.filter(function(g){return g!==s}),document.removeEventListener("wheel",c,_r),document.removeEventListener("touchmove",c,_r),document.removeEventListener("touchstart",d,_r)}},[]);var p=e.removeScrollBar,w=e.inert;return y.createElement(y.Fragment,null,w?y.createElement(s,{styles:k2(o)}):null,p?y.createElement(f2,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function N2(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const E2=t2(Xv,P2);var ny=y.forwardRef(function(e,t){return y.createElement(Qa,zt({},e,{ref:t,sideCar:E2}))});ny.classNames=Qa.classNames;var T2=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Mr=new WeakMap,xi=new WeakMap,bi={},$l=0,ry=function(e){return e&&(e.host||ry(e.parentNode))},j2=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=ry(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},R2=function(e,t,n,r){var o=j2(t,Array.isArray(e)?e:[e]);bi[n]||(bi[n]=new WeakMap);var s=bi[n],i=[],l=new Set,c=new Set(o),u=function(m){!m||l.has(m)||(l.add(m),u(m.parentNode))};o.forEach(u);var d=function(m){!m||c.has(m)||Array.prototype.forEach.call(m.children,function(h){if(l.has(h))d(h);else try{var p=h.getAttribute(r),w=p!==null&&p!=="false",g=(Mr.get(h)||0)+1,b=(s.get(h)||0)+1;Mr.set(h,g),s.set(h,b),i.push(h),g===1&&w&&xi.set(h,!0),b===1&&h.setAttribute(n,"true"),w||h.setAttribute(r,"true")}catch(v){console.error("aria-hidden: cannot operate on ",h,v)}})};return d(t),l.clear(),$l++,function(){i.forEach(function(m){var h=Mr.get(m)-1,p=s.get(m)-1;Mr.set(m,h),s.set(m,p),h||(xi.has(m)||m.removeAttribute(r),xi.delete(m)),p||m.removeAttribute(n)}),$l--,$l||(Mr=new WeakMap,Mr=new WeakMap,xi=new WeakMap,bi={})}},A2=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=T2(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),R2(r,o,n,"aria-hidden")):function(){return null}},Xa="Dialog",[oy,vP]=To(Xa),[_2,At]=oy(Xa),sy=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:s,modal:i=!0}=e,l=y.useRef(null),c=y.useRef(null),[u,d]=rd({prop:r,defaultProp:o??!1,onChange:s,caller:Xa});return a.jsx(_2,{scope:t,triggerRef:l,contentRef:c,contentId:Di(),titleId:Di(),descriptionId:Di(),open:u,onOpenChange:d,onOpenToggle:y.useCallback(()=>d(m=>!m),[d]),modal:i,children:n})};sy.displayName=Xa;var iy="DialogTrigger",I2=y.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=At(iy,n),s=Le(t,o.triggerRef);return a.jsx(me.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Nd(o.open),...r,ref:s,onClick:ie(e.onClick,o.onOpenToggle)})});I2.displayName=iy;var Cd="DialogPortal",[M2,ay]=oy(Cd,{forceMount:void 0}),ly=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,s=At(Cd,t);return a.jsx(M2,{scope:t,forceMount:n,children:y.Children.map(r,i=>a.jsx(Cr,{present:n||s.open,children:a.jsx(nd,{asChild:!0,container:o,children:i})}))})};ly.displayName=Cd;var ya="DialogOverlay",cy=y.forwardRef((e,t)=>{const n=ay(ya,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,s=At(ya,e.__scopeDialog);return s.modal?a.jsx(Cr,{present:r||s.open,children:a.jsx(D2,{...o,ref:t})}):null});cy.displayName=ya;var O2=Ts("DialogOverlay.RemoveScroll"),D2=y.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=At(ya,n);return a.jsx(ny,{as:O2,allowPinchZoom:!0,shards:[o.contentRef],children:a.jsx(me.div,{"data-state":Nd(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),wr="DialogContent",uy=y.forwardRef((e,t)=>{const n=ay(wr,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,s=At(wr,e.__scopeDialog);return a.jsx(Cr,{present:r||s.open,children:s.modal?a.jsx(L2,{...o,ref:t}):a.jsx(F2,{...o,ref:t})})});uy.displayName=wr;var L2=y.forwardRef((e,t)=>{const n=At(wr,e.__scopeDialog),r=y.useRef(null),o=Le(t,n.contentRef,r);return y.useEffect(()=>{const s=r.current;if(s)return A2(s)},[]),a.jsx(dy,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ie(e.onCloseAutoFocus,s=>{var i;s.preventDefault(),(i=n.triggerRef.current)==null||i.focus()}),onPointerDownOutside:ie(e.onPointerDownOutside,s=>{const i=s.detail.originalEvent,l=i.button===0&&i.ctrlKey===!0;(i.button===2||l)&&s.preventDefault()}),onFocusOutside:ie(e.onFocusOutside,s=>s.preventDefault())})}),F2=y.forwardRef((e,t)=>{const n=At(wr,e.__scopeDialog),r=y.useRef(!1),o=y.useRef(!1);return a.jsx(dy,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var i,l;(i=e.onCloseAutoFocus)==null||i.call(e,s),s.defaultPrevented||(r.current||(l=n.triggerRef.current)==null||l.focus(),s.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:s=>{var c,u;(c=e.onInteractOutside)==null||c.call(e,s),s.defaultPrevented||(r.current=!0,s.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const i=s.target;((u=n.triggerRef.current)==null?void 0:u.contains(i))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&o.current&&s.preventDefault()}})}),dy=y.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:s,...i}=e,l=At(wr,n),c=y.useRef(null),u=Le(t,c);return GC(),a.jsxs(a.Fragment,{children:[a.jsx(Kv,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:s,children:a.jsx(Da,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":Nd(l.open),...i,ref:u,onDismiss:()=>l.onOpenChange(!1)})}),a.jsxs(a.Fragment,{children:[a.jsx(V2,{titleId:l.titleId}),a.jsx(B2,{contentRef:c,descriptionId:l.descriptionId})]})]})}),Pd="DialogTitle",py=y.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=At(Pd,n);return a.jsx(me.h2,{id:o.titleId,...r,ref:t})});py.displayName=Pd;var my="DialogDescription",fy=y.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=At(my,n);return a.jsx(me.p,{id:o.descriptionId,...r,ref:t})});fy.displayName=my;var hy="DialogClose",gy=y.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=At(hy,n);return a.jsx(me.button,{type:"button",...r,ref:t,onClick:ie(e.onClick,()=>o.onOpenChange(!1))})});gy.displayName=hy;function Nd(e){return e?"open":"closed"}var vy="DialogTitleWarning",[yP,yy]=db(vy,{contentName:wr,titleName:Pd,docsSlug:"dialog"}),V2=({titleId:e})=>{const t=yy(vy),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return y.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},z2="DialogDescriptionWarning",B2=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${yy(z2).contentName}}.`;return y.useEffect(()=>{var s;const o=(s=e.current)==null?void 0:s.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},U2=sy,$2=ly,xy=cy,by=uy,wy=py,Sy=fy,W2=gy;const Zo=U2,G2=$2,ky=y.forwardRef(({className:e,...t},n)=>a.jsx(xy,{ref:n,className:ye("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));ky.displayName=xy.displayName;const Kr=y.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(G2,{children:[a.jsx(ky,{}),a.jsxs(by,{ref:r,className:ye("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,a.jsxs(W2,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[a.jsx(Vg,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));Kr.displayName=by.displayName;const qr=({className:e,...t})=>a.jsx("div",{className:ye("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});qr.displayName="DialogHeader";const Yr=y.forwardRef(({className:e,...t},n)=>a.jsx(wy,{ref:n,className:ye("text-lg font-semibold leading-none tracking-tight",e),...t}));Yr.displayName=wy.displayName;const Qr=y.forwardRef(({className:e,...t},n)=>a.jsx(Sy,{ref:n,className:ye("text-sm text-muted-foreground",e),...t}));Qr.displayName=Sy.displayName;const H2=ad("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ge=y.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},s)=>{const i=r?mb:"button";return a.jsx(i,{className:ye(H2({variant:t,size:n,className:e})),ref:s,...o})});ge.displayName="Button";const K2=ad("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function iu({className:e,variant:t,...n}){return a.jsx("div",{className:ye(K2({variant:t}),e),...n})}const q2=[{title:"What are Containers?",description:"Lightweight, portable units that package applications with their dependencies",details:"Containers provide process isolation, resource control, and consistent environments across different systems."},{title:"Container vs VMs",description:"Understanding the key differences in architecture and resource usage",details:"VMs virtualize hardware, containers virtualize the OS. Containers are more lightweight and start faster."},{title:"Docker Basics",description:"Building and managing container images",details:"Learn Dockerfile syntax, image layers, and container lifecycle management."}],Y2=[{icon:nr,title:"Control Plane",description:"Master components that make cluster-wide decisions",components:["API Server","etcd","Scheduler","Controller Manager"],color:"from-primary to-electric-blue"},{icon:Jo,title:"Worker Nodes",description:"Machines that run application workloads",components:["Kubelet","Kube-proxy","Container Runtime"],color:"from-accent to-cyber-purple"},{icon:us,title:"Networking",description:"Pod-to-pod and service communication",components:["CNI Plugins","Service Mesh","Ingress Controllers"],color:"from-tech-green to-primary"}],bn={"Control Plane":{title:"Control Plane",description:"The brain of Kubernetes that makes global decisions about the cluster",overview:"The Control Plane manages the overall state of the cluster and makes decisions about scheduling, scaling, and maintaining the desired state of applications. It consists of several components that work together to provide the cluster's management capabilities.",keyFeatures:["Cluster state management","API endpoint for all cluster operations","Scheduling decisions for pod placement","Automatic scaling and self-healing","Configuration and secret management"],commands:[{description:"Check control plane component status",command:"kubectl get componentstatuses",output:`NAME                 STATUS    MESSAGE   ERROR
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
app-ingress       nginx   app.example.com       192.168.1.200    80, 443   10m`}],components:{"CNI Plugins":"Handle pod networking setup and IP assignment","Service Mesh":"Advanced networking layer for service communication","Ingress Controllers":"Manage external access to services"}}},it={"API Server":{title:"API Server",description:"The central management hub for all Kubernetes operations",overview:"The Kubernetes API Server is the central management entity that receives all REST requests for modifications to pods, services, replication sets/controllers and others, validates them, and processes them.",keyFeatures:["RESTful API interface for all cluster operations","Authentication and authorization gateway","Request validation and admission control","Cluster state management and coordination","Event notification and watch API"],commands:[{description:"Check API server version",command:"kubectl version --short",output:`Client Version: v1.28.0
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
app-ingress   nginx   app.example.com     192.168.1.200  80, 443   10m`}]}},at={Pods:{title:"Pods",description:"The smallest deployable units in Kubernetes",overview:"A Pod represents a group of one or more containers running together on the same node. It's the basic execution unit of a Kubernetes application.",keyFeatures:["Shared network (IP address and port space)","Shared storage volumes","Ephemeral by nature","Usually contains a single container"],useCases:["Single-container applications","Sidecar pattern implementations","Init containers for setup tasks","Testing and development environments"],bestPractices:["Use one container per Pod unless containers need to share resources","Always specify resource limits and requests","Use health checks (liveness and readiness probes)","Avoid using Pods directly in production - use Deployments instead"],commands:[{description:"Create a simple pod",command:"kubectl run nginx --image=nginx",output:"pod/nginx created"},{description:"Get all pods",command:"kubectl get pods",output:`NAME    READY   STATUS    RESTARTS   AGE
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
    name: development`}},It={StatefulSets:{title:"StatefulSets",description:"Stateful applications with stable network identity",overview:"StatefulSets manage the deployment and scaling of a set of Pods and provide guarantees about the ordering and uniqueness of these Pods.",keyFeatures:["Stable, unique network identifiers","Stable, persistent storage","Ordered deployment and scaling","Ordered, graceful deletion and termination"],useCases:["Databases (MySQL, PostgreSQL, MongoDB)","Message queues (RabbitMQ, Kafka)","Distributed storage systems"],commands:[{description:"Create a StatefulSet",command:"kubectl apply -f statefulset.yaml",output:"statefulset.apps/web created"},{description:"Scale StatefulSet",command:"kubectl scale statefulset web --replicas=5",output:"statefulset.apps/web scaled"}],yamlExample:`apiVersion: apps/v1
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
        image: gcr.io/google_samples/gb-frontend:v3`}},Q2=()=>{var f,x,S,k,P,N;const[e,t]=y.useState([]),[n,r]=y.useState("idle"),[o,s]=y.useState(0),[i,l]=y.useState(!1),[c,u]=y.useState(null),[d,m]=y.useState(null),[h,p]=y.useState(null),w=[{name:"Build",description:"Creating container image...",icon:"🔨"},{name:"Run",description:"Starting container...",icon:"▶️"},{name:"Deploy",description:"Deploying to cluster...",icon:"🚀"}],g=C=>{t(E=>E.includes(C)?E.filter(M=>M!==C):[...E,C])},b=()=>{n!=="running"&&(r("running"),s(0),l(!0))},v=()=>{r("idle"),s(0),l(!1)};return y.useEffect(()=>{if(n==="running"&&i){const C=setInterval(()=>{s(E=>E<w.length-1?E+1:(r("completed"),l(!1),E))},2e3);return()=>clearInterval(C)}},[n,i,w.length]),a.jsxs("section",{className:"py-24 relative",children:[a.jsxs("div",{className:"container px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-16",children:[a.jsxs("h2",{className:"text-3xl lg:text-5xl font-bold mb-6",children:["Kubernetes"," ",a.jsx("span",{className:"gradient-text",children:"Fundamentals"})]}),a.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"Master the core concepts and architecture through interactive learning"})]}),a.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-2",children:[a.jsx(Jo,{className:"w-6 h-6 text-primary"}),"Container Fundamentals"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Understanding the building blocks of containerization"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs(ke,{className:"card-gradient border-border/50",children:[a.jsx(Is,{children:a.jsx(Ms,{children:"Core Concepts"})}),a.jsx(Ee,{className:"space-y-4",children:q2.map((C,E)=>a.jsxs(nu,{open:e.includes(`container-${E}`),onOpenChange:()=>g(`container-${E}`),children:[a.jsxs(ru,{className:"flex items-center justify-between w-full p-3 text-left terminal rounded-lg hover:bg-muted/50 transition-colors",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"font-semibold",children:C.title}),a.jsx("p",{className:"text-sm text-muted-foreground",children:C.description})]}),a.jsx(Bc,{className:"w-4 h-4 transition-transform",style:{transform:e.includes(`container-${E}`)?"rotate(180deg)":"rotate(0deg)"}})]}),a.jsx(ou,{className:"p-3 text-sm text-muted-foreground",children:C.details})]},E))})]}),a.jsxs(ke,{className:"card-gradient border-border/50",children:[a.jsx(Is,{children:a.jsx(Ms,{children:"Interactive Container Demo"})}),a.jsx(Ee,{children:a.jsx("div",{className:"terminal p-6 rounded-lg border border-border/30",children:a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:`w-2 h-2 rounded-full ${n==="running"?"bg-tech-green animate-pulse":n==="completed"?"bg-primary":"bg-muted-foreground"}`}),a.jsx("span",{className:"font-mono text-xs text-muted-foreground",children:"Container Lifecycle Simulation"})]}),n!=="idle"&&a.jsx("span",{className:"text-xs text-muted-foreground font-mono",children:n==="running"?`Step ${o+1}/${w.length}`:"Completed"})]}),n!=="idle"&&a.jsx("div",{className:"mb-4 p-3 bg-muted/30 rounded border",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-lg",children:(f=w[o])==null?void 0:f.icon}),a.jsx("span",{className:"text-sm font-medium",children:(x=w[o])==null?void 0:x.description})]})}),a.jsx("div",{className:"grid grid-cols-3 gap-2",children:w.map((C,E)=>a.jsxs("div",{className:`p-3 rounded border text-center transition-all duration-500 ${n==="running"&&E===o?"bg-primary/20 border-primary scale-105 shadow-lg":n==="completed"||n==="running"&&E<o?"bg-tech-green/20 border-tech-green":E===0?"bg-primary/10 border-primary/30":E===1?"bg-accent/10 border-accent/30":"bg-tech-green/10 border-tech-green/30"}`,children:[a.jsx("div",{className:`w-4 h-4 rounded mx-auto mb-1 transition-all duration-300 ${n==="running"&&E===o?"bg-primary animate-pulse":n==="completed"||n==="running"&&E<o?"bg-tech-green":E===0?"bg-primary/50":E===1?"bg-accent/50":"bg-tech-green/50"}`}),a.jsx("span",{className:"text-xs font-medium",children:C.name})]},E))}),a.jsxs("div",{className:"flex gap-2 mt-4",children:[a.jsxs(ge,{variant:"outline",className:"flex-1",onClick:b,disabled:n==="running",children:[a.jsx(Uc,{className:"w-4 h-4 mr-2"}),n==="idle"?"Start Demo":n==="running"?"Running...":"Demo Complete"]}),n!=="idle"&&a.jsx(ge,{variant:"outline",size:"icon",onClick:v,children:a.jsx(Fg,{className:"w-4 h-4"})})]})]})})})]})]})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-2",children:[a.jsx(nr,{className:"w-6 h-6 text-primary"}),"Kubernetes Cluster Architecture"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Click on components to explore their functionality"})]}),a.jsx(ke,{className:"card-gradient border-border/50",children:a.jsx(Ee,{className:"p-8",children:a.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:Y2.map((C,E)=>a.jsxs("div",{className:"group cursor-pointer",onClick:()=>m(C.title),children:[a.jsx("div",{className:`p-6 rounded-xl bg-gradient-to-r ${C.color} shadow-glow mb-4 group-hover:scale-105 transition-transform`,children:a.jsx(C.icon,{className:"w-8 h-8 text-white mx-auto"})}),a.jsx("h3",{className:"text-lg font-semibold mb-2 text-center",children:C.title}),a.jsx("p",{className:"text-sm text-muted-foreground text-center mb-3",children:C.description}),a.jsx("div",{className:"space-y-2",children:C.components.map((M,z)=>a.jsxs("div",{className:"group/item p-3 terminal rounded-lg text-xs text-center hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30 hover:shadow-lg hover:scale-105 transform relative overflow-hidden",onClick:j=>{j.stopPropagation(),console.log("Clicked component:",M),console.log("Component data exists:",!!it[M]),m(M)},children:[a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-lg"}),a.jsxs("div",{className:"relative z-10 flex items-center justify-center gap-2",children:[a.jsx("span",{className:"font-medium group-hover/item:text-primary transition-colors duration-300",children:M}),a.jsx("div",{className:"w-1.5 h-1.5 bg-primary/50 rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:animate-pulse transition-all duration-300"})]}),a.jsx("div",{className:"absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover/item:w-full transition-all duration-300"})]},z))})]},E))})})})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-2",children:[a.jsx(us,{className:"w-6 h-6 text-primary"}),"Core Kubernetes Objects"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Essential building blocks of Kubernetes applications"})]}),a.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:[{name:"Pods",icon:Jo,color:"from-blue-500 to-blue-600"},{name:"Deployments",icon:rr,color:"from-green-500 to-green-600"},{name:"ReplicaSets",icon:nr,color:"from-purple-500 to-purple-600"},{name:"Services",icon:us,color:"from-orange-500 to-orange-600"},{name:"ConfigMaps",icon:_l,color:"from-cyan-500 to-cyan-600"},{name:"Secrets",icon:$c,color:"from-red-500 to-red-600"},{name:"Namespaces",icon:Oi,color:"from-indigo-500 to-indigo-600"}].map((C,E)=>a.jsx(ke,{className:"card-gradient border-border/50 hover-lift cursor-pointer group",children:a.jsxs(Ee,{className:"p-6 text-center",children:[a.jsx("div",{className:`w-12 h-12 bg-gradient-to-r ${C.color} rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`,children:a.jsx(C.icon,{className:"w-6 h-6 text-white"})}),a.jsx("h3",{className:"text-lg font-semibold mb-2",children:C.name}),a.jsxs("p",{className:"text-sm text-muted-foreground mb-4",children:["Interactive ",C.name.toLowerCase()," explorer with examples"]}),a.jsxs(ge,{variant:"outline",size:"sm",className:"w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors",onClick:()=>u(C.name),children:["Explore ",C.name]})]})},E))})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-2",children:[a.jsx(rr,{className:"w-6 h-6 text-primary"}),"Kubernetes Workloads"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Different types of workloads for various use cases"})]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:[{title:"StatefulSets",description:"Stateful applications with stable network identity",icon:Oi},{title:"DaemonSets",description:"Pods running on every node",icon:nr},{title:"Jobs & CronJobs",description:"Batch and scheduled workloads",icon:rr},{title:"ReplicaSets",description:"Maintaining desired pod replicas",icon:Jo}].map((C,E)=>a.jsx(ke,{className:"card-gradient border-border/50 hover-lift cursor-pointer",children:a.jsx(Ee,{className:"p-6",children:a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"p-3 rounded-xl bg-gradient-to-r from-primary to-accent shadow-glow",children:a.jsx(C.icon,{className:"w-6 h-6 text-white"})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h3",{className:"text-lg font-semibold mb-2",children:C.title}),a.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:C.description}),a.jsx(ge,{variant:"outline",size:"sm",onClick:()=>p(C.title),children:"Learn More"})]})]})})},E))})]})]})]}),a.jsx(Zo,{open:!!c,onOpenChange:()=>u(null),children:a.jsx(Kr,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:c&&at[c]&&a.jsxs(a.Fragment,{children:[a.jsxs(qr,{children:[a.jsxs(Yr,{className:"text-2xl flex items-center gap-3",children:[a.jsxs("div",{className:"w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center",children:[c==="Pods"&&a.jsx(Jo,{className:"w-5 h-5 text-white"}),c==="Deployments"&&a.jsx(rr,{className:"w-5 h-5 text-white"}),c==="ReplicaSets"&&a.jsx(nr,{className:"w-5 h-5 text-white"}),c==="Services"&&a.jsx(us,{className:"w-5 h-5 text-white"}),c==="ConfigMaps"&&a.jsx(_l,{className:"w-5 h-5 text-white"}),c==="Secrets"&&a.jsx($c,{className:"w-5 h-5 text-white"}),c==="Namespaces"&&a.jsx(Oi,{className:"w-5 h-5 text-white"})]}),at[c].title]}),a.jsx(Qr,{className:"text-lg",children:at[c].description})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/20",children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(ua,{className:"w-5 h-5 text-primary"}),"Overview"]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:at[c].overview})]}),a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(fw,{className:"w-5 h-5 text-accent"}),"Key Features"]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:at[c].keyFeatures.map((C,E)=>a.jsxs("div",{className:"flex items-start gap-3 p-3 bg-muted/30 rounded-lg border border-border/50",children:[a.jsx("div",{className:"w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"}),a.jsx("span",{className:"text-sm font-medium",children:C})]},E))})]}),at[c].useCases&&a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(hw,{className:"w-5 h-5 text-green-500"}),"Common Use Cases"]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-2",children:(S=at[c].useCases)==null?void 0:S.map((C,E)=>a.jsxs("div",{className:"flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-green-500 rounded-full"}),a.jsx("span",{className:"text-sm text-green-700 dark:text-green-300",children:C})]},E))})]}),a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(En,{className:"w-5 h-5 text-blue-500"}),"Common Commands"]}),a.jsx("div",{className:"space-y-4",children:at[c].commands.map((C,E)=>a.jsxs("div",{className:"border border-border/50 rounded-lg overflow-hidden hover:shadow-md transition-shadow",children:[a.jsx("div",{className:"p-4 bg-gradient-to-r from-muted/50 to-muted/30 border-b border-border/50",children:a.jsx("p",{className:"text-sm font-medium text-foreground",children:C.description})}),a.jsx("div",{className:"p-4 space-y-3",children:a.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm relative group",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("span",{className:"text-cyan-400 font-semibold",children:["$ ",C.command]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs(ge,{size:"sm",variant:"ghost",className:"h-7 px-3 text-slate-300 hover:text-white hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity",onClick:()=>navigator.clipboard.writeText(C.command),children:[a.jsx(Ot,{className:"w-3 h-3 mr-1"}),"Copy"]}),a.jsxs(ge,{size:"sm",variant:"ghost",className:"h-7 px-3 text-slate-300 hover:text-white hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity",onClick:()=>navigator.clipboard.writeText(C.output),children:[a.jsx(Ot,{className:"w-3 h-3 mr-1"}),"Copy Output"]})]})]}),a.jsx("div",{className:"text-green-400 whitespace-pre-wrap leading-relaxed",children:C.output})]})})]},E))})]}),a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(_l,{className:"w-5 h-5 text-purple-500"}),"YAML Example"]}),a.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm relative group",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("span",{className:"text-slate-400 text-xs font-medium uppercase tracking-wider",children:"YAML Configuration"}),a.jsxs(ge,{size:"sm",variant:"ghost",className:"h-7 px-3 text-slate-300 hover:text-white hover:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity",onClick:()=>navigator.clipboard.writeText(at[c].yamlExample),children:[a.jsx(Ot,{className:"w-3 h-3 mr-1"}),"Copy YAML"]})]}),a.jsx("pre",{className:"text-slate-100 whitespace-pre-wrap overflow-x-auto leading-relaxed",children:at[c].yamlExample})]})]}),at[c].bestPractices&&a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3 flex items-center gap-2",children:[a.jsx(uw,{className:"w-5 h-5 text-yellow-500"}),"Best Practices"]}),a.jsx("div",{className:"space-y-2",children:(k=at[c].bestPractices)==null?void 0:k.map((C,E)=>a.jsxs("div",{className:"flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800",children:[a.jsx("div",{className:"w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"}),a.jsx("span",{className:"text-sm text-yellow-700 dark:text-yellow-300 font-medium",children:C})]},E))})]})]})]})})}),a.jsx(Zo,{open:!!d&&!!it[d],onOpenChange:()=>m(null),children:a.jsx(Kr,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:d&&it[d]&&a.jsxs(a.Fragment,{children:[a.jsxs(qr,{children:[a.jsxs(Yr,{className:"text-2xl flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center",children:a.jsx(nr,{className:"w-5 h-5 text-white"})}),it[d].title]}),a.jsx(Qr,{className:"text-lg",children:it[d].description})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["What is ",d,"?"]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed mb-4",children:it[d].overview}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-base font-semibold mb-3",children:"Key Features"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:((P=it[d].keyFeatures)==null?void 0:P.map((C,E)=>a.jsxs("div",{className:"flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors",children:[a.jsx("div",{className:"w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"}),a.jsx("span",{className:"text-sm",children:C})]},E)))||[]})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Common Commands"}),a.jsxs("div",{className:"space-y-4",children:[((N=it[d].commands)==null?void 0:N.map((C,E)=>a.jsxs("div",{className:"border border-border/50 rounded-lg overflow-hidden hover:border-primary/30 transition-colors",children:[a.jsx("div",{className:"p-3 bg-muted/30 border-b border-border/50",children:a.jsxs("p",{className:"text-sm font-medium flex items-center gap-2",children:[a.jsx(En,{className:"w-4 h-4 text-primary"}),C.description]})}),a.jsx("div",{className:"p-0",children:a.jsxs("div",{className:"bg-slate-900 p-4 font-mono text-sm",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("span",{className:"text-cyan-400",children:["$ ",C.command]}),a.jsx(ge,{size:"sm",variant:"ghost",className:"h-6 px-2 text-slate-300 hover:text-white",onClick:()=>navigator.clipboard.writeText(C.command),children:a.jsx(Ot,{className:"w-3 h-3"})})]}),a.jsx("div",{className:"text-green-400 whitespace-pre-wrap text-xs leading-relaxed",children:C.output})]})})]},E)))||[],(!it[d].commands||it[d].commands.length===0)&&a.jsxs("div",{className:"text-center py-8",children:[a.jsx("div",{className:"w-16 h-16 bg-muted/30 rounded-full mx-auto mb-4 flex items-center justify-center",children:a.jsx(En,{className:"w-8 h-8 text-muted-foreground"})}),a.jsxs("p",{className:"text-muted-foreground",children:["Commands for ",d," coming soon!"]})]})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Configuration Examples"}),a.jsxs("div",{className:"text-center py-12",children:[a.jsx("div",{className:"w-16 h-16 bg-muted/30 rounded-full mx-auto mb-4 flex items-center justify-center",children:a.jsx(En,{className:"w-8 h-8 text-muted-foreground"})}),a.jsx("p",{className:"text-muted-foreground text-lg mb-2",children:"Configuration examples coming soon!"}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Check the Commands section above for practical usage examples of ",d,"."]}),a.jsx("div",{className:"mt-6 p-4 bg-muted/20 rounded-lg border border-dashed border-muted-foreground/30",children:a.jsxs("p",{className:"text-xs text-muted-foreground",children:["💡 ",a.jsx("strong",{children:"Pro tip:"})," Use the commands above to explore ",d," in your own cluster!"]})})]})]})]})]})})}),a.jsx(Zo,{open:!!d&&!!bn[d]&&!it[d],onOpenChange:()=>m(null),children:a.jsx(Kr,{className:"max-w-5xl max-h-[90vh] overflow-y-auto",children:d&&bn[d]&&!it[d]&&a.jsxs(a.Fragment,{children:[a.jsxs(qr,{children:[a.jsxs(Yr,{className:"text-2xl flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center",children:a.jsx(nr,{className:"w-5 h-5 text-white"})}),bn[d].title]}),a.jsx(Qr,{className:"text-lg",children:bn[d].description})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"text-lg font-semibold mb-3",children:["What is ",d,"?"]}),a.jsx("p",{className:"text-muted-foreground leading-relaxed mb-4",children:bn[d].overview}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-base font-semibold mb-3",children:"Key Features"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:bn[d].keyFeatures.map((C,E)=>a.jsxs("div",{className:"flex items-start gap-3 p-3 bg-muted/30 rounded-lg",children:[a.jsx("div",{className:"w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"}),a.jsx("span",{className:"text-sm",children:C})]},E))})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Components Breakdown"}),a.jsx("div",{className:"grid gap-4",children:Object.entries(bn[d].components).map(([C,E])=>a.jsx(ke,{className:"p-4 border border-border/50",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("div",{className:"w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mt-1 flex-shrink-0"}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h4",{className:"font-semibold text-base mb-2",children:C}),a.jsx("p",{className:"text-sm text-muted-foreground",children:E})]})]})},C))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Common Commands"}),a.jsx("div",{className:"space-y-4",children:bn[d].commands.map((C,E)=>a.jsxs("div",{className:"border border-border/50 rounded-lg overflow-hidden",children:[a.jsx("div",{className:"p-3 bg-muted/30 border-b border-border/50",children:a.jsx("p",{className:"text-sm font-medium",children:C.description})}),a.jsx("div",{className:"p-0",children:a.jsxs("div",{className:"bg-slate-900 p-4 font-mono text-sm",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("span",{className:"text-cyan-400",children:["$ ",C.command]}),a.jsx(ge,{size:"sm",variant:"ghost",className:"h-6 px-2 text-slate-300 hover:text-white",onClick:()=>navigator.clipboard.writeText(C.command),children:a.jsx(Ot,{className:"w-3 h-3"})})]}),a.jsx("div",{className:"text-green-400 whitespace-pre-wrap text-xs leading-relaxed",children:C.output})]})})]},E))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Practical Examples"}),a.jsxs("div",{className:"text-center py-8",children:[a.jsx("div",{className:"w-16 h-16 bg-muted/30 rounded-full mx-auto mb-4 flex items-center justify-center",children:a.jsx(En,{className:"w-8 h-8 text-muted-foreground"})}),a.jsxs("p",{className:"text-muted-foreground",children:["Examples and tutorials for ",d," coming soon!"]}),a.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:"Check the Commands section above for practical kubectl usage."})]})]})]})]})})}),a.jsx(Zo,{open:!!h,onOpenChange:()=>p(null),children:a.jsx(Kr,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:h&&It[h]&&a.jsxs(a.Fragment,{children:[a.jsxs(qr,{children:[a.jsxs(Yr,{className:"text-2xl flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center",children:a.jsx(rr,{className:"w-5 h-5 text-white"})}),It[h].title]}),a.jsx(Qr,{className:"text-lg",children:It[h].description})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Overview"}),a.jsx("p",{className:"text-muted-foreground",children:It[h].overview})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Key Features"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-2",children:It[h].keyFeatures.map((C,E)=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-primary rounded-full"}),a.jsx("span",{className:"text-sm",children:C})]},E))})]}),It[h].useCases&&a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Common Use Cases"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-2",children:It[h].useCases.map((C,E)=>a.jsx("div",{className:"flex items-center gap-2",children:a.jsx(iu,{variant:"secondary",className:"text-xs",children:C})},E))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Common Commands"}),a.jsx("div",{className:"space-y-4",children:It[h].commands.map((C,E)=>a.jsxs("div",{className:"border border-border/50 rounded-lg",children:[a.jsx("div",{className:"p-3 bg-muted/30 border-b border-border/50",children:a.jsx("p",{className:"text-sm font-medium",children:C.description})}),a.jsx("div",{className:"p-3 space-y-3",children:a.jsxs("div",{className:"bg-slate-900 rounded p-3 font-mono text-sm",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("span",{className:"text-cyan-400",children:["$ ",C.command]}),a.jsx(ge,{size:"sm",variant:"ghost",className:"h-6 px-2 text-slate-300 hover:text-white",onClick:()=>navigator.clipboard.writeText(C.command),children:a.jsx(Ot,{className:"w-3 h-3"})})]}),a.jsx("div",{className:"text-green-400 whitespace-pre-wrap",children:C.output})]})})]},E))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"YAML Example"}),a.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm relative",children:[a.jsx(ge,{size:"sm",variant:"ghost",className:"absolute top-2 right-2 h-6 px-2 text-slate-300 hover:text-white",onClick:()=>navigator.clipboard.writeText(It[h].yamlExample),children:a.jsx(Ot,{className:"w-3 h-3"})}),a.jsx("pre",{className:"text-slate-100 whitespace-pre-wrap overflow-x-auto",children:It[h].yamlExample})]})]})]})]})})})]})},xa=y.forwardRef(({className:e,type:t,...n},r)=>a.jsx("input",{type:t,className:ye("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));xa.displayName="Input";const X2=({open:e,onOpenChange:t,topic:n,subtopic:r,data:o})=>{const s=i=>{navigator.clipboard.writeText(i)};return a.jsx(Zo,{open:e,onOpenChange:t,children:a.jsxs(Kr,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:[a.jsxs(qr,{children:[a.jsxs(Yr,{className:"text-2xl flex items-center gap-3",children:[a.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center",children:a.jsx(En,{className:"w-5 h-5 text-white"})}),o.title]}),a.jsx(Qr,{className:"text-lg",children:o.description})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/20",children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Definition"}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o.definition})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Description"}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:o.detailedDescription})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Use Cases"}),a.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:o.useCases.map((i,l)=>a.jsxs("div",{className:"flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800",children:[a.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"}),a.jsx("span",{className:"text-sm text-green-700 dark:text-green-300",children:i})]},l))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Commands"}),a.jsx("div",{className:"space-y-4",children:o.commands.map((i,l)=>a.jsxs("div",{className:"border border-border/50 rounded-lg overflow-hidden hover:shadow-md transition-shadow",children:[a.jsx("div",{className:"p-4 bg-gradient-to-r from-muted/50 to-muted/30 border-b border-border/50",children:a.jsx("p",{className:"text-sm font-medium text-foreground",children:i.description})}),a.jsx("div",{className:"p-4 space-y-3",children:a.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm relative group",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsxs("span",{className:"text-cyan-400 font-semibold",children:["$ ",i.command]}),a.jsx(ge,{variant:"ghost",size:"icon",className:"h-6 w-6 opacity-50 hover:opacity-100",onClick:()=>s(i.command),children:a.jsx(Ot,{className:"h-3 w-3"})})]}),i.output&&a.jsx("div",{className:"text-gray-300 mt-2",children:a.jsx("pre",{className:"whitespace-pre-wrap",children:i.output})})]})})]},l))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Examples"}),a.jsx("div",{className:"space-y-4",children:o.examples.map((i,l)=>a.jsx(ke,{className:"border-border/50",children:a.jsxs(Ee,{className:"p-4",children:[a.jsx("h4",{className:"font-medium mb-2",children:i.title}),i.description&&a.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:i.description}),a.jsxs("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm relative",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("span",{className:"text-xs text-gray-400",children:"YAML/Configuration"}),a.jsx(ge,{variant:"ghost",size:"icon",className:"h-6 w-6 opacity-50 hover:opacity-100",onClick:()=>s(i.code),children:a.jsx(Ot,{className:"h-3 w-3"})})]}),a.jsx("pre",{className:"text-gray-300 whitespace-pre-wrap",children:i.code})]})]})},l))})]}),o.outputs&&o.outputs.length>0&&a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Outputs"}),a.jsx("div",{className:"space-y-4",children:o.outputs.map((i,l)=>a.jsx(ke,{className:"border-border/50",children:a.jsxs(Ee,{className:"p-4",children:[a.jsx("h4",{className:"font-medium mb-2",children:i.title}),i.description&&a.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:i.description}),a.jsx("div",{className:"bg-slate-900 rounded-lg p-4 font-mono text-sm",children:a.jsx("pre",{className:"text-gray-300 whitespace-pre-wrap",children:i.content})})]})},l))})]})]})]})})},Wo={podNetworking:{title:"Pod Networking (CNI)",description:"Container Network Interface implementation in Kubernetes",definition:"Container Network Interface (CNI) is a specification and libraries for writing plugins to configure network interfaces in Linux containers, part of the Cloud Native Computing Foundation (CNCF) project.",detailedDescription:"CNI plugins are responsible for inserting a network interface into the container network namespace and making any necessary changes on the host. They enable pods to communicate with each other across nodes and provide network policies for security. Popular CNI implementations include Calico, Flannel, Weave Net, and Cilium, each with different features and performance characteristics.",useCases:["Multi-cloud Kubernetes deployments requiring consistent networking","High-security environments needing network policy enforcement","High-performance clusters requiring optimized networking","Service mesh integration for advanced traffic management","Network observability and troubleshooting"],commands:[{description:"View CNI configuration on a node",command:"ls -la /etc/cni/net.d/",output:`total 12
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
- Elevated error rate (0.5%) in reviews-v2 service`}]}},Go={persistentVolumes:{title:"Persistent Volumes (PV)",description:"Storage resources in the cluster that are provisioned by an administrator",definition:"A Persistent Volume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource.",detailedDescription:"Persistent Volumes are volume plugins like Volumes, but have a lifecycle independent of any individual Pod that uses the PV. This API object captures the details of the implementation of the storage, be that NFS, iSCSI, or a cloud-provider-specific storage system. PVs are non-namespaced resources and are available to the entire cluster. They can be provisioned statically by a cluster administrator or dynamically using Storage Classes.",useCases:["Databases requiring persistent data storage","Content management systems with file storage needs","AI/ML pipelines with large dataset requirements","Log aggregation and analysis systems","Media processing applications with large file storage needs"],commands:[{description:"Create a Persistent Volume",command:"kubectl apply -f pv.yaml",output:"persistentvolume/pv-example created"},{description:"List all Persistent Volumes",command:"kubectl get pv",output:`NAME         CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM                 STORAGECLASS   REASON   AGE
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
4. Existing PVC www-web-3 reused`}]}},Ho={rbac:{title:"Role-Based Access Control (RBAC)",description:"Managing authorization and permissions in Kubernetes",definition:"Role-Based Access Control (RBAC) is a method of regulating access to resources based on the roles of individual users within an organization. In Kubernetes, RBAC is used to dynamically configure and fine-tune permissions.",detailedDescription:"Kubernetes RBAC defines four top-level API objects: Role, ClusterRole, RoleBinding, and ClusterRoleBinding. Roles define permissions within a specific namespace, while ClusterRoles define permissions across the entire cluster. RoleBindings grant the permissions defined in a Role to users, groups, or service accounts within a namespace, while ClusterRoleBindings grant permissions cluster-wide. RBAC allows administrators to control what actions users and service accounts can perform on which resources, following the principle of least privilege.",useCases:["Restricting namespace access to specific teams","Granting read-only access to monitoring systems","Providing limited administrative capabilities to DevOps engineers","Implementing separation of duties in multi-tenant clusters","Creating service accounts with minimal required permissions"],commands:[{description:"Create a Role",command:"kubectl create role pod-reader --verb=get,list,watch --resource=pods -n development",output:"role.rbac.authorization.k8s.io/pod-reader created"},{description:"Create a RoleBinding",command:"kubectl create rolebinding read-pods --role=pod-reader --user=jane -n development",output:"rolebinding.rbac.authorization.k8s.io/read-pods created"},{description:"Create a ClusterRole",command:"kubectl create clusterrole node-reader --verb=get,list,watch --resource=nodes",output:"clusterrole.rbac.authorization.k8s.io/node-reader created"},{description:"Create a ClusterRoleBinding",command:"kubectl create clusterrolebinding read-nodes --clusterrole=node-reader --user=john",output:"clusterrolebinding.rbac.authorization.k8s.io/read-nodes created"},{description:"Check user permissions",command:"kubectl auth can-i list pods --as=jane -n development",output:"yes"}],examples:[{title:"Role Definition",description:"Role that allows reading pods in a namespace",code:`apiVersion: rbac.authorization.k8s.io/v1
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
   - Kubelet authentication issues`}]}},Ko={prometheusGrafana:{title:"Prometheus & Grafana",description:"Monitoring and visualization for Kubernetes clusters",definition:"Prometheus is an open-source monitoring and alerting toolkit, while Grafana is a multi-platform analytics and interactive visualization web application. Together, they form a powerful monitoring solution for Kubernetes.",detailedDescription:"Prometheus collects metrics from configured targets at given intervals, evaluates rule expressions, displays results, and can trigger alerts when specified conditions are observed. It uses a pull-based model, scraping metrics endpoints exposed by applications and Kubernetes components. Grafana connects to Prometheus as a data source and provides rich visualization capabilities through customizable dashboards. The combination enables comprehensive monitoring of cluster health, application performance, and resource utilization, with features for alerting, querying, and visualization.",useCases:["Cluster-wide resource utilization monitoring","Application performance metrics collection and visualization","Alerting on threshold violations and anomalies","Capacity planning and trend analysis","SLO/SLI monitoring and reporting"],commands:[{description:"Install Prometheus and Grafana using Helm",command:`helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
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
   - Incident tracking systems updated with resolution status`}]}]}},Wl=[{id:"fundamentals",title:"Kubernetes Fundamentals",description:"Master the core concepts and architecture",icon:ua,topics:["What are Containers?","Container vs VMs","Introduction to Orchestration","Kubernetes Architecture","Cluster Components"],interactive:["3D Cluster Tour","Container Comparison Tool","Architecture Simulator"],detailedContent:{overview:"Learn the fundamental concepts that power Kubernetes orchestration",prerequisites:["Basic understanding of Linux","Familiarity with command line"],learningOutcomes:["Understand containerization vs virtualization","Identify Kubernetes architecture components","Navigate cluster hierarchy and organization"]}},{id:"core-concepts",title:"Core Kubernetes Objects",description:"Deep dive into Pods, Services, and Deployments",icon:Lg,topics:["Pods Lifecycle","Deployments & ReplicaSets","Services & Networking","ConfigMaps & Secrets","Namespaces"],interactive:["Pod Simulator","Service Discovery Demo","Rolling Update Visualizer"],detailedContent:{overview:"Master the core objects that make up Kubernetes applications",prerequisites:["Kubernetes Fundamentals","YAML syntax knowledge"],learningOutcomes:["Create and manage Pods effectively","Implement service discovery patterns","Configure application deployments"]}},{id:"kubectl",title:"kubectl Command Mastery",description:"Become proficient with the Kubernetes CLI",icon:En,topics:["Basic Commands","Resource Management","Debugging & Troubleshooting","Advanced Queries","Best Practices"],interactive:["Command Simulator","Interactive Cheatsheet","Debug Scenarios"],detailedContent:{overview:"Master the kubectl CLI for efficient Kubernetes management",prerequisites:["Basic terminal knowledge","Kubernetes Fundamentals"],learningOutcomes:["Execute common kubectl operations","Debug application issues effectively","Automate cluster management tasks"]}},{id:"advanced",title:"Advanced Topics",description:"Scaling, monitoring, and production practices",icon:rr,topics:["Horizontal Pod Autoscaling","Persistent Storage","Helm Package Manager","Operators","Monitoring & Logging"],interactive:["HPA Simulator","Storage Provisioning","Helm Chart Builder"],detailedContent:{overview:"Production-ready Kubernetes patterns and enterprise features",prerequisites:["Core Kubernetes Objects","kubectl proficiency"],learningOutcomes:["Implement auto-scaling strategies","Manage persistent data effectively","Deploy production monitoring"]}}],J2={basic:{title:"Basic Commands",commands:[{command:"kubectl get pods",description:"List all pods in current namespace",syntax:"kubectl get pods [flags]",example:"kubectl get pods -o wide",category:"Get Resources"},{command:"kubectl describe pod",description:"Show detailed information about a pod",syntax:"kubectl describe pod <pod-name>",example:"kubectl describe pod my-app-12345",category:"Inspect Resources"},{command:"kubectl logs",description:"Print logs from a pod",syntax:"kubectl logs <pod-name> [flags]",example:"kubectl logs my-app-12345 -f",category:"Debug"},{command:"kubectl exec",description:"Execute commands in a container",syntax:"kubectl exec <pod-name> -- <command>",example:"kubectl exec my-app-12345 -- /bin/bash",category:"Debug"}]},deployment:{title:"Deployment Commands",commands:[{command:"kubectl create deployment",description:"Create a new deployment",syntax:"kubectl create deployment <name> --image=<image>",example:"kubectl create deployment nginx --image=nginx:1.20",category:"Create"},{command:"kubectl scale deployment",description:"Scale a deployment",syntax:"kubectl scale deployment <name> --replicas=<count>",example:"kubectl scale deployment nginx --replicas=3",category:"Scale"}]},service:{title:"Service Commands",commands:[{command:"kubectl expose deployment",description:"Create a service for a deployment",syntax:"kubectl expose deployment <name> --port=<port>",example:"kubectl expose deployment nginx --port=80 --type=LoadBalancer",category:"Expose"},{command:"kubectl get services",description:"List all services",syntax:"kubectl get services [flags]",example:"kubectl get services -o wide",category:"Get Resources"}]},management:{title:"Resource Management",commands:[{command:"kubectl apply",description:"Apply configuration from file",syntax:"kubectl apply -f <filename>",example:"kubectl apply -f deployment.yaml",category:"Apply"},{command:"kubectl delete",description:"Delete resources",syntax:"kubectl delete <resource> <name>",example:"kubectl delete pod my-app-12345",category:"Delete"}]}},Z2=[{id:"networking",title:"Networking & Ingress",icon:us,description:"CNI, Service Mesh, Ingress Controllers",color:"from-primary to-electric-blue",subtopics:["Pod Networking (CNI)","Service Types & Load Balancing","Ingress Controllers (Nginx, Traefik)","Network Policies","Service Mesh (Istio, Linkerd)"]},{id:"storage",title:"Persistent Storage",icon:Oi,description:"PVs, PVCs, Storage Classes",color:"from-accent to-cyber-purple",subtopics:["Persistent Volumes (PV)","Persistent Volume Claims (PVC)","Storage Classes","Dynamic Provisioning","StatefulSet Storage"]},{id:"security",title:"Security & RBAC",icon:$c,description:"Security best practices and access control",color:"from-tech-green to-primary",subtopics:["Role-Based Access Control (RBAC)","Pod Security Standards","Network Policies","Secrets Management","Security Scanning"]},{id:"monitoring",title:"Monitoring & Logging",icon:pw,description:"Observability and debugging",color:"from-cyber-purple to-accent",subtopics:["Prometheus & Grafana","Centralized Logging","Distributed Tracing","Resource Monitoring","Alert Management"]}],eP=["kubectl get pods","kubectl get nodes","kubectl describe pod nginx","kubectl apply -f deployment.yaml","kubectl get services","kubectl logs nginx-pod"],tP={"kubectl get pods":`NAME                     READY   STATUS    RESTARTS   AGE
nginx-deployment-1       1/1     Running   0          2m
web-app-2               1/1     Running   0          1m
api-service-3           1/1     Running   0          3m`,"kubectl get nodes":`NAME           STATUS   ROLES           AGE   VERSION
control-plane  Ready    control-plane   1d    v1.28.0
worker-1       Ready    <none>          1d    v1.28.0
worker-2       Ready    <none>          1d    v1.28.0`,"kubectl get services":`NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP   1d
nginx-svc    ClusterIP   10.96.1.100     <none>        80/TCP    2m`},nP=[{title:"Pod Stuck in Pending State",category:"Pod Issues",symptoms:["Pod shows Pending status","Events show scheduling issues"],commonCauses:["Insufficient cluster resources","Node selector constraints","Pod resource requests too high","Persistent volume issues"],solutions:["Check cluster resource availability with kubectl top nodes","Verify node selectors and taints","Review resource requests and limits","Check persistent volume status"]},{title:"Service Not Accessible",category:"Networking",symptoms:["Cannot connect to service","Connection timeouts"],commonCauses:["Incorrect service selector","Pod not ready","Network policy blocking traffic","Ingress misconfiguration"],solutions:["Verify service selector matches pod labels","Check pod readiness probes","Review network policies","Validate ingress configuration"]}],rP={"Get Resources":"bg-primary/20 text-primary",Create:"bg-tech-green/20 text-tech-green",Delete:"bg-destructive/20 text-destructive",Debug:"bg-accent/20 text-accent",Monitor:"bg-cyber-purple/20 text-cyber-purple",Scale:"bg-electric-blue/20 text-electric-blue",Update:"bg-orange/20 text-orange",Apply:"bg-tech-green/20 text-tech-green",Expose:"bg-primary/20 text-primary","Inspect Resources":"bg-primary/20 text-primary"},oP=()=>{const[e,t]=y.useState(""),[n,r]=y.useState([]),[o,s]=y.useState([]),[i,l]=y.useState(""),[c,u]=y.useState(""),[d,m]=y.useState(!1),[h,p]=y.useState([]),[w,g]=y.useState(!1),[b,v]=y.useState(""),[f,x]=y.useState(""),[S,k]=y.useState(null),P=j=>{r(D=>D.includes(j)?D.filter(T=>T!==j):[...D,j])},N=j=>{const D=`guide-${j}`;s(T=>T.includes(D)?T.filter(B=>B!==D):[...T,D])},C=async()=>{i.trim()&&(m(!0),p(j=>[...j,i]),setTimeout(()=>{const j=tP[i]||`Command executed: ${i}
Result: Operation completed successfully`;u(j),m(!1)},1e3))},E=()=>{u(""),l(""),p([])},M=j=>{navigator.clipboard.writeText(j)},z=(j,D)=>{let T;switch(j){case"networking":switch(D){case"Pod Networking (CNI)":T=Wo.podNetworking;break;case"Service Types & Load Balancing":T=Wo.serviceTypes;break;case"Ingress Controllers (Nginx, Traefik)":T=Wo.ingressControllers;break;case"Network Policies":T=Wo.networkPolicies;break;case"Service Mesh (Istio, Linkerd)":T=Wo.serviceMesh;break}break;case"storage":switch(D){case"Persistent Volumes (PV)":T=Go.persistentVolumes;break;case"Persistent Volume Claims (PVC)":T=Go.persistentVolumeClaims;break;case"Storage Classes":T=Go.storageClasses;break;case"Dynamic Provisioning":T=Go.dynamicProvisioning;break;case"StatefulSet Storage":T=Go.statefulSetStorage;break}break;case"security":switch(D){case"Role-Based Access Control (RBAC)":T=Ho.rbac;break;case"Pod Security Standards":T=Ho.podSecurity;break;case"Network Policies":T=Ho.networkPolicies;break;case"Secrets Management":T=Ho.secretsManagement;break;case"Security Scanning":T=Ho.securityScanning;break}break;case"monitoring":switch(D){case"Prometheus & Grafana":T=Ko.prometheusGrafana;break;case"Centralized Logging":T=Ko.centralizedLogging;break;case"Distributed Tracing":T=Ko.distributedTracing;break;case"Resource Monitoring":T=Ko.resourceMonitoring;break;case"Alert Management":T=Ko.alertManagement;break}break}T&&(v(j),x(D),k(T),g(!0))};return a.jsxs("section",{className:"py-24 relative",children:[S&&a.jsx(X2,{open:w,onOpenChange:g,topic:b,subtopic:f,data:S}),a.jsxs("div",{className:"container px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"max-w-3xl mx-auto text-center mb-16",children:[a.jsxs("h2",{className:"text-3xl lg:text-5xl font-bold mb-6",children:["Structured Learning"," ",a.jsx("span",{className:"gradient-text",children:"Path"})]}),a.jsx("p",{className:"text-xl text-muted-foreground leading-relaxed",children:"Follow our comprehensive curriculum designed by industry experts. Each module builds upon the previous one with hands-on exercises."})]}),a.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-3",children:[a.jsx("div",{className:"p-2 bg-gradient-primary rounded-lg",children:a.jsx(ua,{className:"w-6 h-6 text-white"})}),"Kubernetes Fundamentals"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Master the core concepts and architecture"}),a.jsx("div",{className:"flex items-center justify-center gap-3 mt-4"})]}),a.jsx(ke,{className:"card-gradient border-border/50",children:a.jsx(Ee,{className:"p-8",children:a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"text-lg font-semibold flex items-center gap-2",children:[a.jsx(ua,{className:"w-5 h-5 text-primary"}),"Learning Topics"]}),a.jsx("div",{className:"space-y-2",children:Wl[0].topics.map((j,D)=>a.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-lg border border-border/30 hover:bg-muted/30 transition-colors cursor-pointer",children:[a.jsx("div",{className:"w-2 h-2 bg-primary rounded-full"}),a.jsx("span",{className:"text-sm",children:j})]},D))})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("h4",{className:"text-lg font-semibold flex items-center gap-2",children:[a.jsx(zg,{className:"w-5 h-5 text-accent"}),"Interactive Features"]}),a.jsx("div",{className:"space-y-2",children:Wl[0].interactive.map((j,D)=>a.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 cursor-pointer hover:bg-gradient-to-r hover:from-accent/20 hover:to-primary/20 transition-all",children:[a.jsx("div",{className:"w-2 h-2 bg-accent rounded-full animate-pulse"}),a.jsx("span",{className:"text-sm",children:j})]},D))})]})]})})})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-3",children:[a.jsx("div",{className:"p-2 bg-gradient-primary rounded-lg",children:a.jsx(Lg,{className:"w-6 h-6 text-white"})}),"Core Kubernetes Objects"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Deep dive into Pods, Services, and Deployments"}),a.jsx("div",{className:"flex items-center justify-center gap-3 mt-4"})]}),a.jsx(ke,{className:"card-gradient border-border/50",children:a.jsxs(Ee,{className:"p-8 space-y-8",children:[a.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:Wl[1].topics.map((j,D)=>a.jsx(ke,{className:"hover-lift cursor-pointer border border-border/30",children:a.jsxs(Ee,{className:"p-4",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx("div",{className:"w-3 h-3 bg-primary rounded-full"}),a.jsx("h4",{className:"font-medium",children:j})]}),a.jsxs("p",{className:"text-sm text-muted-foreground",children:["Learn how to implement and manage ",j.toLowerCase()," in your Kubernetes clusters."]})]})},D))}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-lg font-semibold",children:"Troubleshooting Guides"}),a.jsx("div",{className:"space-y-4",children:nP.map((j,D)=>a.jsx(ke,{className:"card-gradient border-border/50",children:a.jsxs(nu,{open:o.includes(`guide-${D}`),onOpenChange:()=>N(D),children:[a.jsx(ru,{className:"w-full",children:a.jsx(Is,{className:"cursor-pointer hover:bg-muted/20 transition-colors",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(Jp,{className:"w-5 h-5 text-orange mt-1"}),a.jsxs("div",{className:"text-left",children:[a.jsx(Ms,{className:"text-lg",children:j.title}),a.jsx("div",{className:"flex items-center gap-2 mt-1",children:a.jsx(iu,{variant:"secondary",className:"text-xs",children:j.category})})]})]}),a.jsx(Bc,{className:"w-5 h-5 transition-transform",style:{transform:o.includes(`guide-${D}`)?"rotate(180deg)":"rotate(0deg)"}})]})})}),a.jsx(ou,{children:a.jsx(Ee,{className:"pt-0",children:a.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[a.jsxs("div",{children:[a.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[a.jsx(aw,{className:"w-4 h-4 text-accent"}),"Symptoms"]}),a.jsx("ul",{className:"space-y-2 text-sm text-muted-foreground",children:j.symptoms.map((T,B)=>a.jsxs("li",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-orange rounded-full"}),T]},B))})]}),a.jsxs("div",{children:[a.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[a.jsx(Jp,{className:"w-4 h-4 text-destructive"}),"Common Causes"]}),a.jsx("ul",{className:"space-y-2 text-sm text-muted-foreground",children:j.commonCauses.map((T,B)=>a.jsxs("li",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-destructive rounded-full"}),T]},B))})]}),a.jsxs("div",{children:[a.jsxs("h4",{className:"font-medium mb-3 flex items-center gap-2",children:[a.jsx(vw,{className:"w-4 h-4 text-tech-green"}),"Solutions"]}),a.jsx("ul",{className:"space-y-2 text-sm text-muted-foreground",children:j.solutions.map((T,B)=>a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx("div",{className:"w-1.5 h-1.5 bg-tech-green rounded-full mt-2 flex-shrink-0"}),T]},B))})]})]})})})]})},D))})]})]})})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-3",children:[a.jsx("div",{className:"p-2 bg-gradient-primary rounded-lg",children:a.jsx(En,{className:"w-6 h-6 text-white"})}),"kubectl Command Mastery"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Become proficient with the Kubernetes CLI"})]}),a.jsx(ke,{className:"card-gradient border-border/50",children:a.jsxs(Ee,{className:"p-8 space-y-8",children:[a.jsxs("div",{className:"relative",children:[a.jsx(mw,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"}),a.jsx(xa,{placeholder:"Search commands, descriptions, or categories...",value:e,onChange:j=>t(j.target.value),className:"pl-10 h-12 text-base"})]}),a.jsx("div",{className:"space-y-6",children:Object.entries(J2).map(([j,D])=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-lg font-semibold",children:D.title}),a.jsx("div",{className:"grid gap-4",children:D.commands.filter(T=>!e||T.command.toLowerCase().includes(e.toLowerCase())||T.description.toLowerCase().includes(e.toLowerCase())||T.category.toLowerCase().includes(e.toLowerCase())).map((T,B)=>a.jsx(ke,{className:"card-gradient border-border/50 hover-lift transition-all",children:a.jsxs(Ee,{className:"p-6",children:[a.jsxs("div",{className:"flex items-start justify-between mb-4",children:[a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx("code",{className:"text-lg font-mono font-semibold text-primary",children:T.command}),a.jsx(iu,{className:rP[T.category],children:T.category})]}),a.jsx("p",{className:"text-muted-foreground mb-3",children:T.description})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(ge,{variant:"outline",size:"sm",onClick:()=>M(T.command),children:a.jsx(Ot,{className:"w-4 h-4"})}),a.jsx(ge,{variant:"outline",size:"sm",children:a.jsx(Uc,{className:"w-4 h-4"})})]})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("h5",{className:"font-medium text-sm mb-2",children:"Syntax"}),a.jsx("code",{className:"text-xs text-muted-foreground bg-muted/30 p-2 rounded block",children:T.syntax})]}),a.jsxs("div",{children:[a.jsx("h5",{className:"font-medium text-sm mb-2",children:"Example"}),a.jsx("code",{className:"text-xs text-muted-foreground bg-muted/30 p-2 rounded block",children:T.example})]})]})]})},B))})]},j))}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"text-lg font-semibold",children:"Interactive Terminal"}),a.jsx(ke,{className:"card-gradient border-border/50",children:a.jsx(Ee,{className:"p-6",children:a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"terminal p-6 rounded-lg border border-border/30 min-h-[400px]",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[a.jsxs("div",{className:"flex gap-1",children:[a.jsx("div",{className:"w-3 h-3 bg-destructive rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-orange rounded-full"}),a.jsx("div",{className:"w-3 h-3 bg-tech-green rounded-full"})]}),a.jsx("span",{className:"text-xs text-muted-foreground",children:"kubectl-terminal"})]}),h.map((j,D)=>a.jsx("div",{className:"mb-2",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-tech-green font-mono text-sm",children:"admin@ubuntu:~$"}),a.jsx("span",{className:"font-mono text-sm",children:j})]})},D)),c&&a.jsx("div",{className:"mb-4 p-3 bg-muted/20 rounded border border-muted/30",children:a.jsx("pre",{className:"text-xs text-muted-foreground whitespace-pre-wrap",children:c})}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-tech-green font-mono text-sm",children:"admin@ubuntu:~$"}),a.jsx(xa,{value:i,onChange:j=>l(j.target.value),placeholder:"Type kubectl command here...",className:"flex-1 bg-transparent border-none focus:ring-0 font-mono text-sm",onKeyPress:j=>{j.key==="Enter"&&C()}}),d&&a.jsx(Qp,{className:"w-4 h-4 animate-spin text-muted-foreground"})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h5",{className:"font-medium",children:"Quick Commands"}),a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:eP.map((j,D)=>a.jsx(ge,{variant:"outline",size:"sm",className:"font-mono text-xs justify-start",onClick:()=>l(j),children:j},D))})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(ge,{onClick:C,disabled:!i.trim()||d,className:"flex-1",children:d?a.jsxs(a.Fragment,{children:[a.jsx(Qp,{className:"w-4 h-4 mr-2 animate-spin"}),"Executing..."]}):a.jsxs(a.Fragment,{children:[a.jsx(Uc,{className:"w-4 h-4 mr-2"}),"Execute Command"]})}),a.jsxs(ge,{variant:"outline",onClick:E,children:[a.jsx(Fg,{className:"w-4 h-4 mr-2"}),"Clear"]})]})]})})})]})]})})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"text-center",children:[a.jsxs("h3",{className:"text-2xl font-bold mb-4 flex items-center justify-center gap-3",children:[a.jsx("div",{className:"p-2 bg-gradient-primary rounded-lg",children:a.jsx(rr,{className:"w-6 h-6 text-white"})}),"Advanced Topics"]}),a.jsx("p",{className:"text-lg text-muted-foreground",children:"Scaling, monitoring, and production practices"})]}),a.jsx(ke,{className:"card-gradient border-border/50",children:a.jsx(Ee,{className:"p-8",children:a.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:Z2.map(j=>a.jsx(ke,{className:"card-gradient border-border/50 hover-lift cursor-pointer",children:a.jsxs(nu,{open:n.includes(j.id),onOpenChange:()=>P(j.id),children:[a.jsx(ru,{className:"w-full",children:a.jsx(Is,{className:"hover:bg-muted/20 transition-colors",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`p-3 rounded-xl bg-gradient-to-r ${j.color} shadow-glow`,children:a.jsx(j.icon,{className:"w-6 h-6 text-white"})}),a.jsxs("div",{className:"text-left",children:[a.jsx(Ms,{className:"text-lg",children:j.title}),a.jsx("p",{className:"text-sm text-muted-foreground",children:j.description})]})]}),a.jsx(Bc,{className:"w-5 h-5 transition-transform",style:{transform:n.includes(j.id)?"rotate(180deg)":"rotate(0deg)"}})]})})}),a.jsx(ou,{children:a.jsx(Ee,{className:"pt-0",children:a.jsxs("div",{className:"space-y-4",children:[a.jsx("h4",{className:"font-medium",children:"Subtopics"}),a.jsx("div",{className:"grid gap-2",children:j.subtopics.map((D,T)=>a.jsxs("div",{className:"group/item p-3 terminal rounded-lg text-xs text-center hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30 hover:shadow-lg hover:scale-105 transform relative overflow-hidden",onClick:()=>z(j.id,D),children:[a.jsx("div",{className:"w-2 h-2 bg-primary rounded-full"}),a.jsx("span",{className:"text-sm",children:D})]},T))})]})})})]})},j.id))})})})]})]})]})]})},sP=()=>a.jsx("footer",{className:"relative border-t border-border/50 bg-gradient-to-r from-card to-muted/30",children:a.jsxs("div",{className:"container px-4 sm:px-6 lg:px-8 py-16",children:[a.jsxs("div",{className:"grid lg:grid-cols-4 gap-12",children:[a.jsxs("div",{className:"lg:col-span-1 space-y-6",children:[a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-2xl font-bold gradient-text",children:"Kubernetes Bioscope"}),a.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"The most comprehensive and interactive Kubernetes learning platform. Master container orchestration with cutting-edge visualizations."})]}),a.jsx("div",{className:"flex gap-3",children:[{icon:lw,href:"#"},{icon:gw,href:"#"},{icon:dw,href:"#"},{icon:Xp,href:"#"}].map((e,t)=>a.jsx(ge,{size:"sm",variant:"ghost",className:"w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary transition-colors",children:a.jsx(e.icon,{className:"w-4 h-4"})},t))})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold",children:"Learning Path"}),a.jsx("div",{className:"space-y-3",children:["Getting Started","Core Concepts","kubectl Commands","Advanced Topics","Interactive Labs","Certification Guide"].map((e,t)=>a.jsx("div",{children:a.jsx("a",{href:"#",className:"text-muted-foreground hover:text-primary transition-colors text-sm",children:e})},t))})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold",children:"Resources"}),a.jsx("div",{className:"space-y-3",children:["Documentation","Command Reference","Troubleshooting","Best Practices","Community Forum","Blog & Updates"].map((e,t)=>a.jsx("div",{children:a.jsx("a",{href:"#",className:"text-muted-foreground hover:text-primary transition-colors text-sm",children:e})},t))})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx("h4",{className:"text-lg font-semibold",children:"Stay Updated"}),a.jsx("p",{className:"text-muted-foreground text-sm",children:"Get the latest tutorials, tips, and Kubernetes updates delivered to your inbox."}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(xa,{placeholder:"Enter your email",className:"bg-background/50 border-border/50"}),a.jsxs(ge,{className:"w-full bg-gradient-primary text-white",children:[a.jsx(Xp,{className:"w-4 h-4 mr-2"}),"Subscribe"]})]})]})]}),a.jsxs("div",{className:"mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[a.jsx("span",{children:"Made with"}),a.jsx(cw,{className:"w-4 h-4 text-red-500"}),a.jsx("span",{children:"for the Kubernetes community"})]}),a.jsxs("div",{className:"flex items-center gap-6 text-sm text-muted-foreground",children:[a.jsx("a",{href:"#",className:"hover:text-primary transition-colors",children:"Privacy Policy"}),a.jsx("a",{href:"#",className:"hover:text-primary transition-colors",children:"Terms of Service"}),a.jsx("span",{children:"© 2025 Kubernetes Bioscope. All rights reserved."})]})]})]})}),iP=()=>a.jsxs("div",{className:"min-h-screen bg-background",children:[a.jsx(AC,{}),a.jsx(Q2,{}),a.jsx(oP,{}),a.jsx(sP,{})]}),aP=()=>{const e=Uv();return y.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),a.jsx("div",{className:"flex min-h-screen items-center justify-center bg-gray-100",children:a.jsxs("div",{className:"text-center",children:[a.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),a.jsx("p",{className:"mb-4 text-xl text-gray-600",children:"Oops! Page not found"}),a.jsx("a",{href:"/",className:"text-blue-500 underline hover:text-blue-700",children:"Return to Home"})]})})},lP=new Uk,cP=()=>a.jsx(Wk,{client:lP,children:a.jsxs(yk,{children:[a.jsx(Zw,{}),a.jsx(A1,{}),a.jsx(jC,{basename:"/kubernetes",children:a.jsxs(NC,{children:[a.jsx(eu,{path:"/",element:a.jsx(iP,{})}),a.jsx(eu,{path:"*",element:a.jsx(aP,{})})]})})]})});lg(document.getElementById("root")).render(a.jsx(cP,{}));
