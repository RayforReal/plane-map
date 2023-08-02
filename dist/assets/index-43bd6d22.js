var wt=Object.defineProperty;var Pt=(n,e,t)=>e in n?wt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var P5=(n,e,t)=>(Pt(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function i3(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const J0={},u1=[],$5=()=>{},Rt=()=>!1,Ct=/^on[^a-z]/,S7=n=>Ct.test(n),r3=n=>n.startsWith("onUpdate:"),f5=Object.assign,s3=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Lt=Object.prototype.hasOwnProperty,q0=(n,e)=>Lt.call(n,e),F0=Array.isArray,h1=n=>E7(n)==="[object Map]",Nt=n=>E7(n)==="[object Set]",V0=n=>typeof n=="function",m5=n=>typeof n=="string",o3=n=>typeof n=="symbol",o5=n=>n!==null&&typeof n=="object",$8=n=>o5(n)&&V0(n.then)&&V0(n.catch),Ut=Object.prototype.toString,E7=n=>Ut.call(n),Dt=n=>E7(n).slice(8,-1),It=n=>E7(n)==="[object Object]",a3=n=>m5(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,u7=i3(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),T7=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ot=/-(\w)/g,V2=T7(n=>n.replace(Ot,(e,t)=>t?t.toUpperCase():"")),Ft=/\B([A-Z])/g,K2=T7(n=>n.replace(Ft,"-$1").toLowerCase()),Q8=T7(n=>n.charAt(0).toUpperCase()+n.slice(1)),G7=T7(n=>n?`on${Q8(n)}`:""),m7=(n,e)=>!Object.is(n,e),V7=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},g7=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Bt=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let X3;const C4=()=>X3||(X3=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function l3(n){if(F0(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=m5(i)?Vt(i):l3(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(m5(n))return n;if(o5(n))return n}}const zt=/;(?![^(]*\))/g,Ht=/:([^]+)/,Gt=/\/\*[^]*?\*\//g;function Vt(n){const e={};return n.replace(Gt,"").split(zt).forEach(t=>{if(t){const i=t.split(Ht);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function c3(n){let e="";if(m5(n))e=n;else if(F0(n))for(let t=0;t<n.length;t++){const i=c3(n[t]);i&&(e+=i+" ")}else if(o5(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const kt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wt=i3(kt);function ee(n){return!!n||n===""}let q5;class Xt{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=q5,!e&&q5&&(this.index=(q5.scopes||(q5.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=q5;try{return q5=this,e()}finally{q5=t}}}on(){q5=this}off(){q5=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function qt(n,e=q5){e&&e.active&&e.effects.push(n)}function Yt(){return q5}const u3=n=>{const e=new Set(n);return e.w=0,e.n=0,e},te=n=>(n.w&H9)>0,ne=n=>(n.n&H9)>0,jt=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=H9},Kt=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];te(r)&&!ne(r)?r.delete(n):e[t++]=r,r.w&=~H9,r.n&=~H9}e.length=t}},L4=new WeakMap;let a1=0,H9=1;const N4=30;let j5;const t2=Symbol(""),U4=Symbol("");class h3{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,qt(this,i)}run(){if(!this.active)return this.fn();let e=j5,t=O9;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=j5,j5=this,O9=!0,H9=1<<++a1,a1<=N4?jt(this):q3(this),this.fn()}finally{a1<=N4&&Kt(this),H9=1<<--a1,j5=this.parent,O9=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){j5===this?this.deferStop=!0:this.active&&(q3(this),this.onStop&&this.onStop(),this.active=!1)}}function q3(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let O9=!0;const ie=[];function Z2(){ie.push(O9),O9=!1}function J2(){const n=ie.pop();O9=n===void 0?!0:n}function L5(n,e,t){if(O9&&j5){let i=L4.get(n);i||L4.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=u3()),re(r)}}function re(n,e){let t=!1;a1<=N4?ne(n)||(n.n|=H9,t=!te(n)):t=!n.has(j5),t&&(n.add(j5),j5.deps.push(n))}function A9(n,e,t,i,r,s){const o=L4.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&F0(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":F0(n)?a3(t)&&a.push(o.get("length")):(a.push(o.get(t2)),h1(n)&&a.push(o.get(U4)));break;case"delete":F0(n)||(a.push(o.get(t2)),h1(n)&&a.push(o.get(U4)));break;case"set":h1(n)&&a.push(o.get(t2));break}if(a.length===1)a[0]&&D4(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);D4(u3(l))}}function D4(n,e){const t=F0(n)?n:[...n];for(const i of t)i.computed&&Y3(i);for(const i of t)i.computed||Y3(i)}function Y3(n,e){(n!==j5||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Zt=i3("__proto__,__v_isRef,__isVue"),se=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(o3)),Jt=f3(),$t=f3(!1,!0),Qt=f3(!0),j3=en();function en(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Z0(this);for(let s=0,o=this.length;s<o;s++)L5(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Z0)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Z2();const i=Z0(this)[e].apply(this,t);return J2(),i}}),n}function tn(n){const e=Z0(this);return L5(e,"has",n),e.hasOwnProperty(n)}function f3(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?vn:ue:e?ce:le).get(i))return i;const o=F0(i);if(!n){if(o&&q0(j3,r))return Reflect.get(j3,r,s);if(r==="hasOwnProperty")return tn}const a=Reflect.get(i,r,s);return(o3(r)?se.has(r):Zt(r))||(n||L5(i,"get",r),e)?a:A5(a)?o&&a3(r)?a:a.value:o5(a)?n?he(a):m3(a):a}}const nn=oe(),rn=oe(!0);function oe(n=!1){return function(t,i,r,s){let o=t[i];if(g1(o)&&A5(o)&&!A5(r))return!1;if(!n&&(!I4(r)&&!g1(r)&&(o=Z0(o),r=Z0(r)),!F0(t)&&A5(o)&&!A5(r)))return o.value=r,!0;const a=F0(t)&&a3(i)?Number(i)<t.length:q0(t,i),l=Reflect.set(t,i,r,s);return t===Z0(s)&&(a?m7(r,o)&&A9(t,"set",i,r):A9(t,"add",i,r)),l}}function sn(n,e){const t=q0(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&A9(n,"delete",e,void 0),i}function on(n,e){const t=Reflect.has(n,e);return(!o3(e)||!se.has(e))&&L5(n,"has",e),t}function an(n){return L5(n,"iterate",F0(n)?"length":t2),Reflect.ownKeys(n)}const ae={get:Jt,set:nn,deleteProperty:sn,has:on,ownKeys:an},ln={get:Qt,set(n,e){return!0},deleteProperty(n,e){return!0}},cn=f5({},ae,{get:$t,set:rn}),d3=n=>n,b7=n=>Reflect.getPrototypeOf(n);function L1(n,e,t=!1,i=!1){n=n.__v_raw;const r=Z0(n),s=Z0(e);t||(e!==s&&L5(r,"get",e),L5(r,"get",s));const{has:o}=b7(r),a=i?d3:t?v3:_3;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function N1(n,e=!1){const t=this.__v_raw,i=Z0(t),r=Z0(n);return e||(n!==r&&L5(i,"has",n),L5(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function U1(n,e=!1){return n=n.__v_raw,!e&&L5(Z0(n),"iterate",t2),Reflect.get(n,"size",n)}function K3(n){n=Z0(n);const e=Z0(this);return b7(e).has.call(e,n)||(e.add(n),A9(e,"add",n,n)),this}function Z3(n,e){e=Z0(e);const t=Z0(this),{has:i,get:r}=b7(t);let s=i.call(t,n);s||(n=Z0(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?m7(e,o)&&A9(t,"set",n,e):A9(t,"add",n,e),this}function J3(n){const e=Z0(this),{has:t,get:i}=b7(e);let r=t.call(e,n);r||(n=Z0(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&A9(e,"delete",n,void 0),s}function $3(){const n=Z0(this),e=n.size!==0,t=n.clear();return e&&A9(n,"clear",void 0,void 0),t}function D1(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Z0(o),l=e?d3:n?v3:_3;return!n&&L5(a,"iterate",t2),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function I1(n,e,t){return function(...i){const r=this.__v_raw,s=Z0(r),o=h1(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?d3:e?v3:_3;return!e&&L5(s,"iterate",l?U4:t2),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function P9(n){return function(...e){return n==="delete"?!1:this}}function un(){const n={get(s){return L1(this,s)},get size(){return U1(this)},has:N1,add:K3,set:Z3,delete:J3,clear:$3,forEach:D1(!1,!1)},e={get(s){return L1(this,s,!1,!0)},get size(){return U1(this)},has:N1,add:K3,set:Z3,delete:J3,clear:$3,forEach:D1(!1,!0)},t={get(s){return L1(this,s,!0)},get size(){return U1(this,!0)},has(s){return N1.call(this,s,!0)},add:P9("add"),set:P9("set"),delete:P9("delete"),clear:P9("clear"),forEach:D1(!0,!1)},i={get(s){return L1(this,s,!0,!0)},get size(){return U1(this,!0)},has(s){return N1.call(this,s,!0)},add:P9("add"),set:P9("set"),delete:P9("delete"),clear:P9("clear"),forEach:D1(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=I1(s,!1,!1),t[s]=I1(s,!0,!1),e[s]=I1(s,!1,!0),i[s]=I1(s,!0,!0)}),[n,t,e,i]}const[hn,fn,dn,pn]=un();function p3(n,e){const t=e?n?pn:dn:n?fn:hn;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(q0(t,r)&&r in i?t:i,r,s)}const mn={get:p3(!1,!1)},gn={get:p3(!1,!0)},_n={get:p3(!0,!1)},le=new WeakMap,ce=new WeakMap,ue=new WeakMap,vn=new WeakMap;function xn(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yn(n){return n.__v_skip||!Object.isExtensible(n)?0:xn(Dt(n))}function m3(n){return g1(n)?n:g3(n,!1,ae,mn,le)}function Mn(n){return g3(n,!1,cn,gn,ce)}function he(n){return g3(n,!0,ln,_n,ue)}function g3(n,e,t,i,r){if(!o5(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=yn(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function F2(n){return g1(n)?F2(n.__v_raw):!!(n&&n.__v_isReactive)}function g1(n){return!!(n&&n.__v_isReadonly)}function I4(n){return!!(n&&n.__v_isShallow)}function fe(n){return F2(n)||g1(n)}function Z0(n){const e=n&&n.__v_raw;return e?Z0(e):n}function de(n){return g7(n,"__v_skip",!0),n}const _3=n=>o5(n)?m3(n):n,v3=n=>o5(n)?he(n):n;function Sn(n){O9&&j5&&(n=Z0(n),re(n.dep||(n.dep=u3())))}function En(n,e){n=Z0(n);const t=n.dep;t&&D4(t)}function A5(n){return!!(n&&n.__v_isRef===!0)}function Tn(n){return A5(n)?n.value:n}const bn={get:(n,e,t)=>Tn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return A5(r)&&!A5(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function pe(n){return F2(n)?n:new Proxy(n,bn)}class An{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new h3(e,()=>{this._dirty||(this._dirty=!0,En(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Z0(this);return Sn(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function wn(n,e,t=!1){let i,r;const s=V0(n);return s?(i=n,r=$5):(i=n.get,r=n.set),new An(i,r,s||!r,t)}function F9(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){A7(s,e,t)}return r}function Q5(n,e,t,i){if(V0(n)){const s=F9(n,e,t,i);return s&&$8(s)&&s.catch(o=>{A7(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Q5(n[s],e,t,i));return r}function A7(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){F9(l,null,10,[n,o,a]);return}}Pn(n,t,r,i)}function Pn(n,e,t,i=!0){console.error(n)}let _1=!1,O4=!1;const v5=[];let s9=0;const B2=[];let M9=null,$9=0;const me=Promise.resolve();let x3=null;function Rn(n){const e=x3||me;return n?e.then(this?n.bind(this):n):e}function Cn(n){let e=s9+1,t=v5.length;for(;e<t;){const i=e+t>>>1;v1(v5[i])<n?e=i+1:t=i}return e}function y3(n){(!v5.length||!v5.includes(n,_1&&n.allowRecurse?s9+1:s9))&&(n.id==null?v5.push(n):v5.splice(Cn(n.id),0,n),ge())}function ge(){!_1&&!O4&&(O4=!0,x3=me.then(ve))}function Ln(n){const e=v5.indexOf(n);e>s9&&v5.splice(e,1)}function Nn(n){F0(n)?B2.push(...n):(!M9||!M9.includes(n,n.allowRecurse?$9+1:$9))&&B2.push(n),ge()}function Q3(n,e=_1?s9+1:0){for(;e<v5.length;e++){const t=v5[e];t&&t.pre&&(v5.splice(e,1),e--,t())}}function _e(n){if(B2.length){const e=[...new Set(B2)];if(B2.length=0,M9){M9.push(...e);return}for(M9=e,M9.sort((t,i)=>v1(t)-v1(i)),$9=0;$9<M9.length;$9++)M9[$9]();M9=null,$9=0}}const v1=n=>n.id==null?1/0:n.id,Un=(n,e)=>{const t=v1(n)-v1(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function ve(n){O4=!1,_1=!0,v5.sort(Un);const e=$5;try{for(s9=0;s9<v5.length;s9++){const t=v5[s9];t&&t.active!==!1&&F9(t,null,14)}}finally{s9=0,v5.length=0,_e(),_1=!1,x3=null,(v5.length||B2.length)&&ve()}}function Dn(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||J0;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||J0;f&&(r=t.map(m=>m5(m)?m.trim():m)),h&&(r=t.map(Bt))}let a,l=i[a=G7(e)]||i[a=G7(V2(e))];!l&&s&&(l=i[a=G7(K2(e))]),l&&Q5(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Q5(c,n,6,r)}}function xe(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!V0(n)){const l=c=>{const u=xe(c,e,!0);u&&(a=!0,f5(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(o5(n)&&i.set(n,null),null):(F0(s)?s.forEach(l=>o[l]=null):f5(o,s),o5(n)&&i.set(n,o),o)}function w7(n,e){return!n||!S7(e)?!1:(e=e.slice(2).replace(/Once$/,""),q0(n,e[0].toLowerCase()+e.slice(1))||q0(n,K2(e))||q0(n,e))}let a9=null,ye=null;function _7(n){const e=a9;return a9=n,ye=n&&n.type.__scopeId||null,e}function In(n,e=a9,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&c6(-1);const s=_7(e);let o;try{o=n(...r)}finally{_7(s),i._d&&c6(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function k7(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:m,ctx:_,inheritAttrs:v}=n;let p,d;const T=_7(n);try{if(t.shapeFlag&4){const M=r||i;p=i9(u.call(M,M,h,s,m,f,_)),d=l}else{const M=e;p=i9(M.length>1?M(s,{attrs:l,slots:a,emit:c}):M(s,null)),d=e.props?l:On(l)}}catch(M){A7(M,n,1),p=n2(x1)}let y=p;if(d&&v!==!1){const M=Object.keys(d),{shapeFlag:w}=y;M.length&&w&7&&(o&&M.some(r3)&&(d=Fn(d,o)),y=k2(y,d))}return t.dirs&&(y=k2(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),p=y,_7(T),p}const On=n=>{let e;for(const t in n)(t==="class"||t==="style"||S7(t))&&((e||(e={}))[t]=n[t]);return e},Fn=(n,e)=>{const t={};for(const i in n)(!r3(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Bn(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?e6(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!w7(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?e6(i,o,c):!0:!!o;return!1}function e6(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!w7(t,s))return!0}return!1}function zn({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Hn=n=>n.__isSuspense;function Gn(n,e){e&&e.pendingBranch?F0(n)?e.effects.push(...n):e.effects.push(n):Nn(n)}const O1={};function W7(n,e,t){return Me(n,e,t)}function Me(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=J0){var a;const l=Yt()===((a=x5)==null?void 0:a.scope)?x5:null;let c,u=!1,h=!1;if(A5(n)?(c=()=>n.value,u=I4(n)):F2(n)?(c=()=>n,i=!0):F0(n)?(h=!0,u=n.some(M=>F2(M)||I4(M)),c=()=>n.map(M=>{if(A5(M))return M.value;if(F2(M))return N2(M);if(V0(M))return F9(M,l,2)})):V0(n)?e?c=()=>F9(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),Q5(n,l,3,[m])}:c=$5,e&&i){const M=c;c=()=>N2(M())}let f,m=M=>{f=T.onStop=()=>{F9(M,l,4)}},_;if(y1)if(m=$5,e?t&&Q5(e,l,3,[c(),h?[]:void 0,m]):c(),r==="sync"){const M=Fi();_=M.__watcherHandles||(M.__watcherHandles=[])}else return $5;let v=h?new Array(n.length).fill(O1):O1;const p=()=>{if(T.active)if(e){const M=T.run();(i||u||(h?M.some((w,N)=>m7(w,v[N])):m7(M,v)))&&(f&&f(),Q5(e,l,3,[M,v===O1?void 0:h&&v[0]===O1?[]:v,m]),v=M)}else T.run()};p.allowRecurse=!!e;let d;r==="sync"?d=p:r==="post"?d=()=>R5(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),d=()=>y3(p));const T=new h3(c,d);e?t?p():v=T.run():r==="post"?R5(T.run.bind(T),l&&l.suspense):T.run();const y=()=>{T.stop(),l&&l.scope&&s3(l.scope.effects,T)};return _&&_.push(y),y}function Vn(n,e,t){const i=this.proxy,r=m5(n)?n.includes(".")?Se(i,n):()=>i[n]:n.bind(i,i);let s;V0(e)?s=e:(s=e.handler,t=e);const o=x5;W2(this);const a=Me(r,s.bind(i),t);return o?W2(o):i2(),a}function Se(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function N2(n,e){if(!o5(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),A5(n))N2(n.value,e);else if(F0(n))for(let t=0;t<n.length;t++)N2(n[t],e);else if(Nt(n)||h1(n))n.forEach(t=>{N2(t,e)});else if(It(n))for(const t in n)N2(n[t],e);return n}function W9(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Z2(),Q5(l,t,8,[n.el,a,n,e]),J2())}}function kn(n,e){return V0(n)?(()=>f5({name:n.name},e,{setup:n}))():n}const h7=n=>!!n.type.__asyncLoader,Ee=n=>n.type.__isKeepAlive;function Wn(n,e){Te(n,"a",e)}function Xn(n,e){Te(n,"da",e)}function Te(n,e,t=x5){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(P7(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ee(r.parent.vnode)&&qn(i,e,t,r),r=r.parent}}function qn(n,e,t,i){const r=P7(e,n,i,!0);be(()=>{s3(i[e],r)},t)}function P7(n,e,t=x5,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Z2(),W2(t);const a=Q5(e,t,n,o);return i2(),J2(),a});return i?r.unshift(s):r.push(s),s}}const w9=n=>(e,t=x5)=>(!y1||n==="sp")&&P7(n,(...i)=>e(...i),t),Yn=w9("bm"),jn=w9("m"),Kn=w9("bu"),Zn=w9("u"),Jn=w9("bum"),be=w9("um"),$n=w9("sp"),Qn=w9("rtg"),ei=w9("rtc");function ti(n,e=x5){P7("ec",n,e)}const ni=Symbol.for("v-ndc"),F4=n=>n?Ie(n)?A3(n)||n.proxy:F4(n.parent):null,f1=f5(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>F4(n.parent),$root:n=>F4(n.root),$emit:n=>n.emit,$options:n=>M3(n),$forceUpdate:n=>n.f||(n.f=()=>y3(n.update)),$nextTick:n=>n.n||(n.n=Rn.bind(n.proxy)),$watch:n=>Vn.bind(n)}),X7=(n,e)=>n!==J0&&!n.__isScriptSetup&&q0(n,e),ii={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(X7(i,e))return o[e]=1,i[e];if(r!==J0&&q0(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&q0(c,e))return o[e]=3,s[e];if(t!==J0&&q0(t,e))return o[e]=4,t[e];B4&&(o[e]=0)}}const u=f1[e];let h,f;if(u)return e==="$attrs"&&L5(n,"get",e),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==J0&&q0(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,q0(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return X7(r,e)?(r[e]=t,!0):i!==J0&&q0(i,e)?(i[e]=t,!0):q0(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==J0&&q0(n,o)||X7(e,o)||(a=s[0])&&q0(a,o)||q0(i,o)||q0(f1,o)||q0(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:q0(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function t6(n){return F0(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let B4=!0;function ri(n){const e=M3(n),t=n.proxy,i=n.ctx;B4=!1,e.beforeCreate&&n6(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:_,activated:v,deactivated:p,beforeDestroy:d,beforeUnmount:T,destroyed:y,unmounted:M,render:w,renderTracked:N,renderTriggered:L,errorCaptured:G,serverPrefetch:E,expose:R,inheritAttrs:a0,components:h0,directives:H,filters:Y}=e;if(c&&si(c,i,null),o)for(const X in o){const j=o[X];V0(j)&&(i[X]=j.bind(t))}if(r){const X=r.call(t,t);o5(X)&&(n.data=m3(X))}if(B4=!0,s)for(const X in s){const j=s[X],u0=V0(j)?j.bind(t,t):V0(j.get)?j.get.bind(t,t):$5,l0=!V0(j)&&V0(j.set)?j.set.bind(t):$5,z=Ii({get:u0,set:l0});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>z.value,set:q=>z.value=q})}if(a)for(const X in a)Ae(a[X],i,t,X);if(l){const X=V0(l)?l.call(t):l;Reflect.ownKeys(X).forEach(j=>{hi(j,X[j])})}u&&n6(u,n,"c");function r0(X,j){F0(j)?j.forEach(u0=>X(u0.bind(t))):j&&X(j.bind(t))}if(r0(Yn,h),r0(jn,f),r0(Kn,m),r0(Zn,_),r0(Wn,v),r0(Xn,p),r0(ti,G),r0(ei,N),r0(Qn,L),r0(Jn,T),r0(be,M),r0($n,E),F0(R))if(R.length){const X=n.exposed||(n.exposed={});R.forEach(j=>{Object.defineProperty(X,j,{get:()=>t[j],set:u0=>t[j]=u0})})}else n.exposed||(n.exposed={});w&&n.render===$5&&(n.render=w),a0!=null&&(n.inheritAttrs=a0),h0&&(n.components=h0),H&&(n.directives=H)}function si(n,e,t=$5){F0(n)&&(n=z4(n));for(const i in n){const r=n[i];let s;o5(r)?"default"in r?s=f7(r.from||i,r.default,!0):s=f7(r.from||i):s=f7(r),A5(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function n6(n,e,t){Q5(F0(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ae(n,e,t,i){const r=i.includes(".")?Se(t,i):()=>t[i];if(m5(n)){const s=e[n];V0(s)&&W7(r,s)}else if(V0(n))W7(r,n.bind(t));else if(o5(n))if(F0(n))n.forEach(s=>Ae(s,e,t,i));else{const s=V0(n.handler)?n.handler.bind(t):e[n.handler];V0(s)&&W7(r,s,n)}}function M3(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>v7(l,c,o,!0)),v7(l,e,o)),o5(e)&&s.set(e,l),l}function v7(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&v7(n,s,t,!0),r&&r.forEach(o=>v7(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=oi[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const oi={data:i6,props:r6,emits:r6,methods:l1,computed:l1,beforeCreate:E5,created:E5,beforeMount:E5,mounted:E5,beforeUpdate:E5,updated:E5,beforeDestroy:E5,beforeUnmount:E5,destroyed:E5,unmounted:E5,activated:E5,deactivated:E5,errorCaptured:E5,serverPrefetch:E5,components:l1,directives:l1,watch:li,provide:i6,inject:ai};function i6(n,e){return e?n?function(){return f5(V0(n)?n.call(this,this):n,V0(e)?e.call(this,this):e)}:e:n}function ai(n,e){return l1(z4(n),z4(e))}function z4(n){if(F0(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function E5(n,e){return n?[...new Set([].concat(n,e))]:e}function l1(n,e){return n?f5(Object.create(null),n,e):e}function r6(n,e){return n?F0(n)&&F0(e)?[...new Set([...n,...e])]:f5(Object.create(null),t6(n),t6(e??{})):e}function li(n,e){if(!n)return e;if(!e)return n;const t=f5(Object.create(null),n);for(const i in e)t[i]=E5(n[i],e[i]);return t}function we(){return{app:null,config:{isNativeTag:Rt,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ci=0;function ui(n,e){return function(i,r=null){V0(i)||(i=f5({},i)),r!=null&&!o5(r)&&(r=null);const s=we(),o=new Set;let a=!1;const l=s.app={_uid:ci++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Bi,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&V0(c.install)?(o.add(c),c.install(l,...u)):V0(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=n2(i,r);return f.appContext=s,u&&e?e(f,c):n(f,c,h),a=!0,l._container=c,c.__vue_app__=l,A3(f.component)||f.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){x7=l;try{return c()}finally{x7=null}}};return l}}let x7=null;function hi(n,e){if(x5){let t=x5.provides;const i=x5.parent&&x5.parent.provides;i===t&&(t=x5.provides=Object.create(i)),t[n]=e}}function f7(n,e,t=!1){const i=x5||a9;if(i||x7){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:x7._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&V0(e)?e.call(i&&i.proxy):e}}function fi(n,e,t,i=!1){const r={},s={};g7(s,C7,1),n.propsDefaults=Object.create(null),Pe(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Mn(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function di(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Z0(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(w7(n.emitsOptions,f))continue;const m=e[f];if(l)if(q0(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const _=V2(f);r[_]=H4(l,a,_,m,n,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{Pe(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!q0(e,h)&&((u=K2(h))===h||!q0(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=H4(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!q0(e,h))&&(delete s[h],c=!0)}c&&A9(n,"set","$attrs")}function Pe(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(u7(l))continue;const c=e[l];let u;r&&q0(r,u=V2(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:w7(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Z0(t),c=a||J0;for(let u=0;u<s.length;u++){const h=s[u];t[h]=H4(r,l,h,c[h],n,!q0(c,h))}}return o}function H4(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=q0(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&V0(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(W2(r),i=c[t]=l.call(null,e),i2())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===K2(t))&&(i=!0))}return i}function Re(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!V0(n)){const u=h=>{l=!0;const[f,m]=Re(h,e,!0);f5(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return o5(n)&&i.set(n,u1),u1;if(F0(s))for(let u=0;u<s.length;u++){const h=V2(s[u]);s6(h)&&(o[h]=J0)}else if(s)for(const u in s){const h=V2(u);if(s6(h)){const f=s[u],m=o[h]=F0(f)||V0(f)?{type:f}:f5({},f);if(m){const _=l6(Boolean,m.type),v=l6(String,m.type);m[0]=_>-1,m[1]=v<0||_<v,(_>-1||q0(m,"default"))&&a.push(h)}}}const c=[o,a];return o5(n)&&i.set(n,c),c}function s6(n){return n[0]!=="$"}function o6(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function a6(n,e){return o6(n)===o6(e)}function l6(n,e){return F0(e)?e.findIndex(t=>a6(t,n)):V0(e)&&a6(e,n)?0:-1}const Ce=n=>n[0]==="_"||n==="$stable",S3=n=>F0(n)?n.map(i9):[i9(n)],pi=(n,e,t)=>{if(e._n)return e;const i=In((...r)=>S3(e(...r)),t);return i._c=!1,i},Le=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ce(r))continue;const s=n[r];if(V0(s))e[r]=pi(r,s,i);else if(s!=null){const o=S3(s);e[r]=()=>o}}},Ne=(n,e)=>{const t=S3(e);n.slots.default=()=>t},mi=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Z0(e),g7(e,"_",t)):Le(e,n.slots={})}else n.slots={},e&&Ne(n,e);g7(n.slots,C7,1)},gi=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=J0;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(f5(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Le(e,r)),o=e}else e&&(Ne(n,e),o={default:1});if(s)for(const a in r)!Ce(a)&&!(a in o)&&delete r[a]};function G4(n,e,t,i,r=!1){if(F0(n)){n.forEach((f,m)=>G4(f,e&&(F0(e)?e[m]:e),t,i,r));return}if(h7(i)&&!r)return;const s=i.shapeFlag&4?A3(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===J0?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(m5(c)?(u[c]=null,q0(h,c)&&(h[c]=null)):A5(c)&&(c.value=null)),V0(l))F9(l,a,12,[o,u]);else{const f=m5(l),m=A5(l);if(f||m){const _=()=>{if(n.f){const v=f?q0(h,l)?h[l]:u[l]:l.value;r?F0(v)&&s3(v,s):F0(v)?v.includes(s)||v.push(s):f?(u[l]=[s],q0(h,l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else f?(u[l]=o,q0(h,l)&&(h[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,R5(_,t)):_()}}}const R5=Gn;function _i(n){return vi(n)}function vi(n,e){const t=C4();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=$5,insertStaticContent:_}=n,v=(g,A,C,I=null,U=null,K=null,Z=!1,V=null,n0=!!A.dynamicChildren)=>{if(g===A)return;g&&!n1(g,A)&&(I=P0(g),q(g,U,K,!0),g=null),A.patchFlag===-2&&(n0=!1,A.dynamicChildren=null);const{type:Q,ref:m0,shapeFlag:S}=A;switch(Q){case R7:p(g,A,C,I);break;case x1:d(g,A,C,I);break;case q7:g==null&&T(A,C,I,Z);break;case S9:h0(g,A,C,I,U,K,Z,V,n0);break;default:S&1?w(g,A,C,I,U,K,Z,V,n0):S&6?H(g,A,C,I,U,K,Z,V,n0):(S&64||S&128)&&Q.process(g,A,C,I,U,K,Z,V,n0,O0)}m0!=null&&U&&G4(m0,g&&g.ref,K,A||g,!A)},p=(g,A,C,I)=>{if(g==null)i(A.el=a(A.children),C,I);else{const U=A.el=g.el;A.children!==g.children&&c(U,A.children)}},d=(g,A,C,I)=>{g==null?i(A.el=l(A.children||""),C,I):A.el=g.el},T=(g,A,C,I)=>{[g.el,g.anchor]=_(g.children,A,C,I,g.el,g.anchor)},y=({el:g,anchor:A},C,I)=>{let U;for(;g&&g!==A;)U=f(g),i(g,C,I),g=U;i(A,C,I)},M=({el:g,anchor:A})=>{let C;for(;g&&g!==A;)C=f(g),r(g),g=C;r(A)},w=(g,A,C,I,U,K,Z,V,n0)=>{Z=Z||A.type==="svg",g==null?N(A,C,I,U,K,Z,V,n0):E(g,A,U,K,Z,V,n0)},N=(g,A,C,I,U,K,Z,V)=>{let n0,Q;const{type:m0,props:S,shapeFlag:x,transition:F,dirs:e0}=g;if(n0=g.el=o(g.type,K,S&&S.is,S),x&8?u(n0,g.children):x&16&&G(g.children,n0,null,I,U,K&&m0!=="foreignObject",Z,V),e0&&W9(g,null,I,"created"),L(n0,g,g.scopeId,Z,I),S){for(const P in S)P!=="value"&&!u7(P)&&s(n0,P,null,S[P],K,g.children,I,U,E0);"value"in S&&s(n0,"value",null,S.value),(Q=S.onVnodeBeforeMount)&&n9(Q,I,g)}e0&&W9(g,null,I,"beforeMount");const o0=(!U||U&&!U.pendingBranch)&&F&&!F.persisted;o0&&F.beforeEnter(n0),i(n0,A,C),((Q=S&&S.onVnodeMounted)||o0||e0)&&R5(()=>{Q&&n9(Q,I,g),o0&&F.enter(n0),e0&&W9(g,null,I,"mounted")},U)},L=(g,A,C,I,U)=>{if(C&&m(g,C),I)for(let K=0;K<I.length;K++)m(g,I[K]);if(U){let K=U.subTree;if(A===K){const Z=U.vnode;L(g,Z,Z.scopeId,Z.slotScopeIds,U.parent)}}},G=(g,A,C,I,U,K,Z,V,n0=0)=>{for(let Q=n0;Q<g.length;Q++){const m0=g[Q]=V?U9(g[Q]):i9(g[Q]);v(null,m0,A,C,I,U,K,Z,V)}},E=(g,A,C,I,U,K,Z)=>{const V=A.el=g.el;let{patchFlag:n0,dynamicChildren:Q,dirs:m0}=A;n0|=g.patchFlag&16;const S=g.props||J0,x=A.props||J0;let F;C&&X9(C,!1),(F=x.onVnodeBeforeUpdate)&&n9(F,C,A,g),m0&&W9(A,g,C,"beforeUpdate"),C&&X9(C,!0);const e0=U&&A.type!=="foreignObject";if(Q?R(g.dynamicChildren,Q,V,C,I,e0,K):Z||j(g,A,V,null,C,I,e0,K,!1),n0>0){if(n0&16)a0(V,A,S,x,C,I,U);else if(n0&2&&S.class!==x.class&&s(V,"class",null,x.class,U),n0&4&&s(V,"style",S.style,x.style,U),n0&8){const o0=A.dynamicProps;for(let P=0;P<o0.length;P++){const t0=o0[P],c0=S[t0],W=x[t0];(W!==c0||t0==="value")&&s(V,t0,c0,W,U,g.children,C,I,E0)}}n0&1&&g.children!==A.children&&u(V,A.children)}else!Z&&Q==null&&a0(V,A,S,x,C,I,U);((F=x.onVnodeUpdated)||m0)&&R5(()=>{F&&n9(F,C,A,g),m0&&W9(A,g,C,"updated")},I)},R=(g,A,C,I,U,K,Z)=>{for(let V=0;V<A.length;V++){const n0=g[V],Q=A[V],m0=n0.el&&(n0.type===S9||!n1(n0,Q)||n0.shapeFlag&70)?h(n0.el):C;v(n0,Q,m0,null,I,U,K,Z,!0)}},a0=(g,A,C,I,U,K,Z)=>{if(C!==I){if(C!==J0)for(const V in C)!u7(V)&&!(V in I)&&s(g,V,C[V],null,Z,A.children,U,K,E0);for(const V in I){if(u7(V))continue;const n0=I[V],Q=C[V];n0!==Q&&V!=="value"&&s(g,V,Q,n0,Z,A.children,U,K,E0)}"value"in I&&s(g,"value",C.value,I.value)}},h0=(g,A,C,I,U,K,Z,V,n0)=>{const Q=A.el=g?g.el:a(""),m0=A.anchor=g?g.anchor:a("");let{patchFlag:S,dynamicChildren:x,slotScopeIds:F}=A;F&&(V=V?V.concat(F):F),g==null?(i(Q,C,I),i(m0,C,I),G(A.children,C,m0,U,K,Z,V,n0)):S>0&&S&64&&x&&g.dynamicChildren?(R(g.dynamicChildren,x,C,U,K,Z,V),(A.key!=null||U&&A===U.subTree)&&Ue(g,A,!0)):j(g,A,C,m0,U,K,Z,V,n0)},H=(g,A,C,I,U,K,Z,V,n0)=>{A.slotScopeIds=V,g==null?A.shapeFlag&512?U.ctx.activate(A,C,I,Z,n0):Y(A,C,I,U,K,Z,n0):$(g,A,n0)},Y=(g,A,C,I,U,K,Z)=>{const V=g.component=Ri(g,I,U);if(Ee(g)&&(V.ctx.renderer=O0),Ci(V),V.asyncDep){if(U&&U.registerDep(V,r0),!g.el){const n0=V.subTree=n2(x1);d(null,n0,A,C)}return}r0(V,g,A,C,U,K,Z)},$=(g,A,C)=>{const I=A.component=g.component;if(Bn(g,A,C))if(I.asyncDep&&!I.asyncResolved){X(I,A,C);return}else I.next=A,Ln(I.update),I.update();else A.el=g.el,I.vnode=A},r0=(g,A,C,I,U,K,Z)=>{const V=()=>{if(g.isMounted){let{next:m0,bu:S,u:x,parent:F,vnode:e0}=g,o0=m0,P;X9(g,!1),m0?(m0.el=e0.el,X(g,m0,Z)):m0=e0,S&&V7(S),(P=m0.props&&m0.props.onVnodeBeforeUpdate)&&n9(P,F,m0,e0),X9(g,!0);const t0=k7(g),c0=g.subTree;g.subTree=t0,v(c0,t0,h(c0.el),P0(c0),g,U,K),m0.el=t0.el,o0===null&&zn(g,t0.el),x&&R5(x,U),(P=m0.props&&m0.props.onVnodeUpdated)&&R5(()=>n9(P,F,m0,e0),U)}else{let m0;const{el:S,props:x}=A,{bm:F,m:e0,parent:o0}=g,P=h7(A);if(X9(g,!1),F&&V7(F),!P&&(m0=x&&x.onVnodeBeforeMount)&&n9(m0,o0,A),X9(g,!0),S&&C0){const t0=()=>{g.subTree=k7(g),C0(S,g.subTree,g,U,null)};P?A.type.__asyncLoader().then(()=>!g.isUnmounted&&t0()):t0()}else{const t0=g.subTree=k7(g);v(null,t0,C,I,g,U,K),A.el=t0.el}if(e0&&R5(e0,U),!P&&(m0=x&&x.onVnodeMounted)){const t0=A;R5(()=>n9(m0,o0,t0),U)}(A.shapeFlag&256||o0&&h7(o0.vnode)&&o0.vnode.shapeFlag&256)&&g.a&&R5(g.a,U),g.isMounted=!0,A=C=I=null}},n0=g.effect=new h3(V,()=>y3(Q),g.scope),Q=g.update=()=>n0.run();Q.id=g.uid,X9(g,!0),Q()},X=(g,A,C)=>{A.component=g;const I=g.vnode.props;g.vnode=A,g.next=null,di(g,A.props,I,C),gi(g,A.children,C),Z2(),Q3(),J2()},j=(g,A,C,I,U,K,Z,V,n0=!1)=>{const Q=g&&g.children,m0=g?g.shapeFlag:0,S=A.children,{patchFlag:x,shapeFlag:F}=A;if(x>0){if(x&128){l0(Q,S,C,I,U,K,Z,V,n0);return}else if(x&256){u0(Q,S,C,I,U,K,Z,V,n0);return}}F&8?(m0&16&&E0(Q,U,K),S!==Q&&u(C,S)):m0&16?F&16?l0(Q,S,C,I,U,K,Z,V,n0):E0(Q,U,K,!0):(m0&8&&u(C,""),F&16&&G(S,C,I,U,K,Z,V,n0))},u0=(g,A,C,I,U,K,Z,V,n0)=>{g=g||u1,A=A||u1;const Q=g.length,m0=A.length,S=Math.min(Q,m0);let x;for(x=0;x<S;x++){const F=A[x]=n0?U9(A[x]):i9(A[x]);v(g[x],F,C,null,U,K,Z,V,n0)}Q>m0?E0(g,U,K,!0,!1,S):G(A,C,I,U,K,Z,V,n0,S)},l0=(g,A,C,I,U,K,Z,V,n0)=>{let Q=0;const m0=A.length;let S=g.length-1,x=m0-1;for(;Q<=S&&Q<=x;){const F=g[Q],e0=A[Q]=n0?U9(A[Q]):i9(A[Q]);if(n1(F,e0))v(F,e0,C,null,U,K,Z,V,n0);else break;Q++}for(;Q<=S&&Q<=x;){const F=g[S],e0=A[x]=n0?U9(A[x]):i9(A[x]);if(n1(F,e0))v(F,e0,C,null,U,K,Z,V,n0);else break;S--,x--}if(Q>S){if(Q<=x){const F=x+1,e0=F<m0?A[F].el:I;for(;Q<=x;)v(null,A[Q]=n0?U9(A[Q]):i9(A[Q]),C,e0,U,K,Z,V,n0),Q++}}else if(Q>x)for(;Q<=S;)q(g[Q],U,K,!0),Q++;else{const F=Q,e0=Q,o0=new Map;for(Q=e0;Q<=x;Q++){const v0=A[Q]=n0?U9(A[Q]):i9(A[Q]);v0.key!=null&&o0.set(v0.key,Q)}let P,t0=0;const c0=x-e0+1;let W=!1,T0=0;const A0=new Array(c0);for(Q=0;Q<c0;Q++)A0[Q]=0;for(Q=F;Q<=S;Q++){const v0=g[Q];if(t0>=c0){q(v0,U,K,!0);continue}let x0;if(v0.key!=null)x0=o0.get(v0.key);else for(P=e0;P<=x;P++)if(A0[P-e0]===0&&n1(v0,A[P])){x0=P;break}x0===void 0?q(v0,U,K,!0):(A0[x0-e0]=Q+1,x0>=T0?T0=x0:W=!0,v(v0,A[x0],C,null,U,K,Z,V,n0),t0++)}const w0=W?xi(A0):u1;for(P=w0.length-1,Q=c0-1;Q>=0;Q--){const v0=e0+Q,x0=A[v0],L0=v0+1<m0?A[v0+1].el:I;A0[Q]===0?v(null,x0,C,L0,U,K,Z,V,n0):W&&(P<0||Q!==w0[P]?z(x0,C,L0,2):P--)}}},z=(g,A,C,I,U=null)=>{const{el:K,type:Z,transition:V,children:n0,shapeFlag:Q}=g;if(Q&6){z(g.component.subTree,A,C,I);return}if(Q&128){g.suspense.move(A,C,I);return}if(Q&64){Z.move(g,A,C,O0);return}if(Z===S9){i(K,A,C);for(let S=0;S<n0.length;S++)z(n0[S],A,C,I);i(g.anchor,A,C);return}if(Z===q7){y(g,A,C);return}if(I!==2&&Q&1&&V)if(I===0)V.beforeEnter(K),i(K,A,C),R5(()=>V.enter(K),U);else{const{leave:S,delayLeave:x,afterLeave:F}=V,e0=()=>i(K,A,C),o0=()=>{S(K,()=>{e0(),F&&F()})};x?x(K,e0,o0):o0()}else i(K,A,C)},q=(g,A,C,I=!1,U=!1)=>{const{type:K,props:Z,ref:V,children:n0,dynamicChildren:Q,shapeFlag:m0,patchFlag:S,dirs:x}=g;if(V!=null&&G4(V,null,C,g,!0),m0&256){A.ctx.deactivate(g);return}const F=m0&1&&x,e0=!h7(g);let o0;if(e0&&(o0=Z&&Z.onVnodeBeforeUnmount)&&n9(o0,A,g),m0&6)y0(g.component,C,I);else{if(m0&128){g.suspense.unmount(C,I);return}F&&W9(g,null,A,"beforeUnmount"),m0&64?g.type.remove(g,A,C,U,O0,I):Q&&(K!==S9||S>0&&S&64)?E0(Q,A,C,!1,!0):(K===S9&&S&384||!U&&m0&16)&&E0(n0,A,C),I&&p0(g)}(e0&&(o0=Z&&Z.onVnodeUnmounted)||F)&&R5(()=>{o0&&n9(o0,A,g),F&&W9(g,null,A,"unmounted")},C)},p0=g=>{const{type:A,el:C,anchor:I,transition:U}=g;if(A===S9){g0(C,I);return}if(A===q7){M(g);return}const K=()=>{r(C),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(g.shapeFlag&1&&U&&!U.persisted){const{leave:Z,delayLeave:V}=U,n0=()=>Z(C,K);V?V(g.el,K,n0):n0()}else K()},g0=(g,A)=>{let C;for(;g!==A;)C=f(g),r(g),g=C;r(A)},y0=(g,A,C)=>{const{bum:I,scope:U,update:K,subTree:Z,um:V}=g;I&&V7(I),U.stop(),K&&(K.active=!1,q(Z,g,A,C)),V&&R5(V,A),R5(()=>{g.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},E0=(g,A,C,I=!1,U=!1,K=0)=>{for(let Z=K;Z<g.length;Z++)q(g[Z],A,C,I,U)},P0=g=>g.shapeFlag&6?P0(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),R0=(g,A,C)=>{g==null?A._vnode&&q(A._vnode,null,null,!0):v(A._vnode||null,g,A,null,null,null,C),Q3(),_e(),A._vnode=g},O0={p:v,um:q,m:z,r:p0,mt:Y,mc:G,pc:j,pbc:R,n:P0,o:n};let j0,C0;return e&&([j0,C0]=e(O0)),{render:R0,hydrate:j0,createApp:ui(R0,j0)}}function X9({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Ue(n,e,t=!1){const i=n.children,r=e.children;if(F0(i)&&F0(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=U9(r[s]),a.el=o.el),t||Ue(o,a)),a.type===R7&&(a.el=o.el)}}function xi(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const yi=n=>n.__isTeleport,S9=Symbol.for("v-fgt"),R7=Symbol.for("v-txt"),x1=Symbol.for("v-cmt"),q7=Symbol.for("v-stc");let U2=null,E3=1;function c6(n){E3+=n}function Mi(n){return n?n.__v_isVNode===!0:!1}function n1(n,e){return n.type===e.type&&n.key===e.key}const C7="__vInternal",De=({key:n})=>n??null,d7=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?m5(n)||A5(n)||V0(n)?{i:a9,r:n,k:e,f:!!t}:n:null);function Si(n,e=null,t=null,i=0,r=null,s=n===S9?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&De(e),ref:e&&d7(e),scopeId:ye,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:a9};return a?(T3(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=m5(t)?8:16),E3>0&&!o&&U2&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&U2.push(l),l}const n2=Ei;function Ei(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ni)&&(n=x1),Mi(n)){const a=k2(n,e,!0);return t&&T3(a,t),E3>0&&!s&&U2&&(a.shapeFlag&6?U2[U2.indexOf(n)]=a:U2.push(a)),a.patchFlag|=-2,a}if(Di(n)&&(n=n.__vccOpts),e){e=Ti(e);let{class:a,style:l}=e;a&&!m5(a)&&(e.class=c3(a)),o5(l)&&(fe(l)&&!F0(l)&&(l=f5({},l)),e.style=l3(l))}const o=m5(n)?1:Hn(n)?128:yi(n)?64:o5(n)?4:V0(n)?2:0;return Si(n,e,t,i,r,o,s,!0)}function Ti(n){return n?fe(n)||C7 in n?f5({},n):n:null}function k2(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Ai(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&De(a),ref:e&&e.ref?t&&r?F0(r)?r.concat(d7(e)):[r,d7(e)]:d7(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==S9?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&k2(n.ssContent),ssFallback:n.ssFallback&&k2(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function bi(n=" ",e=0){return n2(R7,null,n,e)}function i9(n){return n==null||typeof n=="boolean"?n2(x1):F0(n)?n2(S9,null,n.slice()):typeof n=="object"?U9(n):n2(R7,null,String(n))}function U9(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:k2(n)}function T3(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(F0(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),T3(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(C7 in e)?e._ctx=a9:r===3&&a9&&(a9.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else V0(e)?(e={default:e,_ctx:a9},t=32):(e=String(e),i&64?(t=16,e=[bi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ai(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=c3([e.class,i.class]));else if(r==="style")e.style=l3([e.style,i.style]);else if(S7(r)){const s=e[r],o=i[r];o&&s!==o&&!(F0(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function n9(n,e,t,i=null){Q5(n,e,7,[t,i])}const wi=we();let Pi=0;function Ri(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||wi,s={uid:Pi++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Re(i,r),emitsOptions:xe(i,r),emit:null,emitted:null,propsDefaults:J0,inheritAttrs:i.inheritAttrs,ctx:J0,data:J0,props:J0,attrs:J0,slots:J0,refs:J0,setupState:J0,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Dn.bind(null,s),n.ce&&n.ce(s),s}let x5=null,b3,f2,u6="__VUE_INSTANCE_SETTERS__";(f2=C4()[u6])||(f2=C4()[u6]=[]),f2.push(n=>x5=n),b3=n=>{f2.length>1?f2.forEach(e=>e(n)):f2[0](n)};const W2=n=>{b3(n),n.scope.on()},i2=()=>{x5&&x5.scope.off(),b3(null)};function Ie(n){return n.vnode.shapeFlag&4}let y1=!1;function Ci(n,e=!1){y1=e;const{props:t,children:i}=n.vnode,r=Ie(n);fi(n,t,r,e),mi(n,i);const s=r?Li(n,e):void 0;return y1=!1,s}function Li(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=de(new Proxy(n.ctx,ii));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Ui(n):null;W2(n),Z2();const s=F9(i,n,0,[n.props,r]);if(J2(),i2(),$8(s)){if(s.then(i2,i2),e)return s.then(o=>{h6(n,o,e)}).catch(o=>{A7(o,n,0)});n.asyncDep=s}else h6(n,s,e)}else Oe(n,e)}function h6(n,e,t){V0(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:o5(e)&&(n.setupState=pe(e)),Oe(n,t)}let f6;function Oe(n,e,t){const i=n.type;if(!n.render){if(!e&&f6&&!i.render){const r=i.template||M3(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=f5(f5({isCustomElement:s,delimiters:a},o),l);i.render=f6(r,c)}}n.render=i.render||$5}W2(n),Z2(),ri(n),J2(),i2()}function Ni(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return L5(n,"get","$attrs"),e[t]}}))}function Ui(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Ni(n)},slots:n.slots,emit:n.emit,expose:e}}function A3(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(pe(de(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in f1)return f1[t](n)},has(e,t){return t in e||t in f1}}))}function Di(n){return V0(n)&&"__vccOpts"in n}const Ii=(n,e)=>wn(n,e,y1),Oi=Symbol.for("v-scx"),Fi=()=>f7(Oi),Bi="3.3.4",zi="http://www.w3.org/2000/svg",Q9=typeof document<"u"?document:null,d6=Q9&&Q9.createElement("template"),Hi={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Q9.createElementNS(zi,n):Q9.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Q9.createTextNode(n),createComment:n=>Q9.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Q9.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{d6.innerHTML=i?`<svg>${n}</svg>`:n;const a=d6.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Gi(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Vi(n,e,t){const i=n.style,r=m5(t);if(t&&!r){if(e&&!m5(e))for(const s in e)t[s]==null&&V4(i,s,"");for(const s in t)V4(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const p6=/\s*!important$/;function V4(n,e,t){if(F0(t))t.forEach(i=>V4(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ki(n,e);p6.test(t)?n.setProperty(K2(i),t.replace(p6,""),"important"):n[i]=t}}const m6=["Webkit","Moz","ms"],Y7={};function ki(n,e){const t=Y7[e];if(t)return t;let i=V2(e);if(i!=="filter"&&i in n)return Y7[e]=i;i=Q8(i);for(let r=0;r<m6.length;r++){const s=m6[r]+i;if(s in n)return Y7[e]=s}return e}const g6="http://www.w3.org/1999/xlink";function Wi(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(g6,e.slice(6,e.length)):n.setAttributeNS(g6,e,t);else{const s=Wt(e);t==null||s&&!ee(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Xi(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=ee(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function qi(n,e,t,i){n.addEventListener(e,t,i)}function Yi(n,e,t,i){n.removeEventListener(e,t,i)}function ji(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Ki(e);if(i){const c=s[e]=$i(i,r);qi(n,a,c,l)}else o&&(Yi(n,a,o,l),s[e]=void 0)}}const _6=/(?:Once|Passive|Capture)$/;function Ki(n){let e;if(_6.test(n)){e={};let i;for(;i=n.match(_6);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):K2(n.slice(2)),e]}let j7=0;const Zi=Promise.resolve(),Ji=()=>j7||(Zi.then(()=>j7=0),j7=Date.now());function $i(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Q5(Qi(i,t.value),e,5,[i])};return t.value=n,t.attached=Ji(),t}function Qi(n,e){if(F0(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const v6=/^on[a-z]/,er=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Gi(n,i,r):e==="style"?Vi(n,t,i):S7(e)?r3(e)||ji(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tr(n,e,i,r))?Xi(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Wi(n,e,i,r))};function tr(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&v6.test(e)&&V0(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||v6.test(e)&&m5(t)?!1:e in n}const nr=f5({patchProp:er},Hi);let x6;function ir(){return x6||(x6=_i(nr))}const rr=(...n)=>{const e=ir().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=sr(i);if(!r)return;const s=e._component;!V0(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function sr(n){return m5(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const w3="154",d2={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},p2={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},or=0,y6=1,ar=2,Fe=1,lr=2,y9=3,G9=0,C5=1,o9=2,B9=0,z2=1,M6=2,S6=3,E6=4,cr=5,L2=100,ur=101,hr=102,T6=103,b6=104,fr=200,dr=201,pr=202,mr=203,Be=204,ze=205,gr=206,_r=207,vr=208,xr=209,yr=210,Mr=0,Sr=1,Er=2,k4=3,Tr=4,br=5,Ar=6,wr=7,He=0,Pr=1,Rr=2,T9=0,Cr=1,Lr=2,Nr=3,Ur=4,Dr=5,Ge=300,X2=301,q2=302,W4=303,X4=304,L7=306,q4=1e3,K5=1001,Y4=1002,b5=1003,A6=1004,K7=1005,z5=1006,Ir=1007,M1=1008,z9=1009,Or=1010,Fr=1011,P3=1012,Ve=1013,D9=1014,I9=1015,S1=1016,ke=1017,We=1018,r2=1020,Br=1021,Z5=1023,zr=1024,Hr=1025,s2=1026,Y2=1027,Gr=1028,Xe=1029,Vr=1030,qe=1031,Ye=1033,Z7=33776,J7=33777,$7=33778,Q7=33779,w6=35840,P6=35841,R6=35842,C6=35843,kr=36196,L6=37492,N6=37496,U6=37808,D6=37809,I6=37810,O6=37811,F6=37812,B6=37813,z6=37814,H6=37815,G6=37816,V6=37817,k6=37818,W6=37819,X6=37820,q6=37821,e4=36492,Wr=36283,Y6=36284,j6=36285,K6=36286,je=3e3,o2=3001,Xr=3200,qr=3201,Yr=0,jr=1,a2="",H0="srgb",c9="srgb-linear",Ke="display-p3",t4=7680,Kr=519,Zr=512,Jr=513,$r=514,Qr=515,es=516,ts=517,ns=518,is=519,Z6=35044,J6="300 es",j4=1035,E9=2e3,y7=2001;class h2{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const g5=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],n4=Math.PI/180,K4=180/Math.PI;function $2(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(g5[n&255]+g5[n>>8&255]+g5[n>>16&255]+g5[n>>24&255]+"-"+g5[e&255]+g5[e>>8&255]+"-"+g5[e>>16&15|64]+g5[e>>24&255]+"-"+g5[t&63|128]+g5[t>>8&255]+"-"+g5[t>>16&255]+g5[t>>24&255]+g5[i&255]+g5[i>>8&255]+g5[i>>16&255]+g5[i>>24&255]).toLowerCase()}function d5(n,e,t){return Math.max(e,Math.min(t,n))}function rs(n,e){return(n%e+e)%e}function i4(n,e,t){return(1-t)*n+t*e}function $6(n){return(n&n-1)===0&&n!==0}function Z4(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function F1(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function D5(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class f0{constructor(e=0,t=0){f0.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(d5(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class G0{constructor(e,t,i,r,s,o,a,l,c){G0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],v=r[0],p=r[3],d=r[6],T=r[1],y=r[4],M=r[7],w=r[2],N=r[5],L=r[8];return s[0]=o*v+a*T+l*w,s[3]=o*p+a*y+l*N,s[6]=o*d+a*M+l*L,s[1]=c*v+u*T+h*w,s[4]=c*p+u*y+h*N,s[7]=c*d+u*M+h*L,s[2]=f*v+m*T+_*w,s[5]=f*p+m*y+_*N,s[8]=f*d+m*M+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,_=t*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(r4.makeScale(e,t)),this}rotate(e){return this.premultiply(r4.makeRotation(-e)),this}translate(e,t){return this.premultiply(r4.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const r4=new G0;function Ze(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function M7(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Q6={};function d1(n){n in Q6||(Q6[n]=!0,console.warn(n))}function H2(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function s4(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ss=new G0().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),os=new G0().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function as(n){return n.convertSRGBToLinear().applyMatrix3(os)}function ls(n){return n.applyMatrix3(ss).convertLinearToSRGB()}const cs={[c9]:n=>n,[H0]:n=>n.convertSRGBToLinear(),[Ke]:as},us={[c9]:n=>n,[H0]:n=>n.convertLinearToSRGB(),[Ke]:ls},V5={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return c9},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=cs[e],r=us[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let m2;class Je{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{m2===void 0&&(m2=M7("canvas")),m2.width=e.width,m2.height=e.height;const i=m2.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=m2}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=M7("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=H2(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(H2(t[i]/255)*255):t[i]=H2(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hs=0;class $e{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hs++}),this.uuid=$2(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(o4(r[o].image)):s.push(o4(r[o]))}else s=o4(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function o4(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Je.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fs=0;class F5 extends h2{constructor(e=F5.DEFAULT_IMAGE,t=F5.DEFAULT_MAPPING,i=K5,r=K5,s=z5,o=M1,a=Z5,l=z9,c=F5.DEFAULT_ANISOTROPY,u=a2){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fs++}),this.uuid=$2(),this.name="",this.source=new $e(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new f0(0,0),this.repeat=new f0(1,1),this.center=new f0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(d1("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===o2?H0:a2),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ge)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case q4:e.x=e.x-Math.floor(e.x);break;case K5:e.x=e.x<0?0:1;break;case Y4:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case q4:e.y=e.y-Math.floor(e.y);break;case K5:e.y=e.y<0?0:1;break;case Y4:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return d1("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===H0?o2:je}set encoding(e){d1("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===o2?H0:a2}}F5.DEFAULT_IMAGE=null;F5.DEFAULT_MAPPING=Ge;F5.DEFAULT_ANISOTROPY=1;class p5{constructor(e=0,t=0,i=0,r=1){p5.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(m+1)/2,w=(d+1)/2,N=(u+f)/4,L=(h+v)/4,G=(_+p)/4;return y>M&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=N/i,s=L/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=N/r,s=G/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=L/s,r=G/s),this.set(i,r,s,t),this}let T=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(h-v)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class l2 extends h2{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new p5(0,0,e,t),this.scissorTest=!1,this.viewport=new p5(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(d1("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===o2?H0:a2),this.texture=new F5(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:z5,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $e(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qe extends F5{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=b5,this.minFilter=b5,this.wrapR=K5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds extends F5{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=b5,this.minFilter=b5,this.wrapR=K5,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c2{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==f||c!==m||u!==_){let p=1-a;const d=l*f+c*m+u*_+h*v,T=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const w=Math.sqrt(y),N=Math.atan2(w,d*T);p=Math.sin(p*N)/w,a=Math.sin(a*N)/w}const M=a*T;if(l=l*p+f*M,c=c*p+m*M,u=u*p+_*M,h=h*p+v*M,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(d5(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(e8.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(e8.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,h=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return a4.copy(this).projectOnVector(e),this.sub(a4)}reflect(e){return this.sub(a4.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(d5(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const a4=new O,e8=new c2;class A1{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(p9.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(p9.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=p9.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),g2.copy(e.boundingBox),g2.applyMatrix4(e.matrixWorld),this.union(g2);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)p9.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(p9)}else r.boundingBox===null&&r.computeBoundingBox(),g2.copy(r.boundingBox),g2.applyMatrix4(e.matrixWorld),this.union(g2)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,p9),p9.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(i1),B1.subVectors(this.max,i1),_2.subVectors(e.a,i1),v2.subVectors(e.b,i1),x2.subVectors(e.c,i1),R9.subVectors(v2,_2),C9.subVectors(x2,v2),q9.subVectors(_2,x2);let t=[0,-R9.z,R9.y,0,-C9.z,C9.y,0,-q9.z,q9.y,R9.z,0,-R9.x,C9.z,0,-C9.x,q9.z,0,-q9.x,-R9.y,R9.x,0,-C9.y,C9.x,0,-q9.y,q9.x,0];return!l4(t,_2,v2,x2,B1)||(t=[1,0,0,0,1,0,0,0,1],!l4(t,_2,v2,x2,B1))?!1:(z1.crossVectors(R9,C9),t=[z1.x,z1.y,z1.z],l4(t,_2,v2,x2,B1))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,p9).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(p9).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(d9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),d9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),d9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),d9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),d9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),d9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),d9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),d9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(d9),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const d9=[new O,new O,new O,new O,new O,new O,new O,new O],p9=new O,g2=new A1,_2=new O,v2=new O,x2=new O,R9=new O,C9=new O,q9=new O,i1=new O,B1=new O,z1=new O,Y9=new O;function l4(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Y9.fromArray(n,s);const a=r.x*Math.abs(Y9.x)+r.y*Math.abs(Y9.y)+r.z*Math.abs(Y9.z),l=e.dot(Y9),c=t.dot(Y9),u=i.dot(Y9);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ps=new A1,r1=new O,c4=new O;class w1{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ps.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;r1.subVectors(e,this.center);const t=r1.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(r1,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(c4.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(r1.copy(e.center).add(c4)),this.expandByPoint(r1.copy(e.center).sub(c4))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const m9=new O,u4=new O,H1=new O,L9=new O,h4=new O,G1=new O,f4=new O;class N7{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,m9)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=m9.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(m9.copy(this.origin).addScaledVector(this.direction,t),m9.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){u4.copy(e).add(t).multiplyScalar(.5),H1.copy(t).sub(e).normalize(),L9.copy(this.origin).sub(u4);const s=e.distanceTo(t)*.5,o=-this.direction.dot(H1),a=L9.dot(this.direction),l=-L9.dot(H1),c=L9.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(u4).addScaledVector(H1,f),m}intersectSphere(e,t){m9.subVectors(e.center,this.origin);const i=m9.dot(this.direction),r=m9.dot(m9)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,m9)!==null}intersectTriangle(e,t,i,r,s){h4.subVectors(t,e),G1.subVectors(i,e),f4.crossVectors(h4,G1);let o=this.direction.dot(f4),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;L9.subVectors(this.origin,e);const l=a*this.direction.dot(G1.crossVectors(L9,G1));if(l<0)return null;const c=a*this.direction.dot(h4.cross(L9));if(c<0||l+c>o)return null;const u=-a*L9.dot(f4);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class s5{constructor(e,t,i,r,s,o,a,l,c,u,h,f,m,_,v,p){s5.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,m,_,v,p)}set(e,t,i,r,s,o,a,l,c,u,h,f,m,_,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s5().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/y2.setFromMatrixColumn(e,0).length(),s=1/y2.setFromMatrixColumn(e,1).length(),o=1/y2.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,v=c*h;t[0]=f+v*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ms,e,gs)}lookAt(e,t,i){const r=this.elements;return I5.subVectors(e,t),I5.lengthSq()===0&&(I5.z=1),I5.normalize(),N9.crossVectors(i,I5),N9.lengthSq()===0&&(Math.abs(i.z)===1?I5.x+=1e-4:I5.z+=1e-4,I5.normalize(),N9.crossVectors(i,I5)),N9.normalize(),V1.crossVectors(I5,N9),r[0]=N9.x,r[4]=V1.x,r[8]=I5.x,r[1]=N9.y,r[5]=V1.y,r[9]=I5.y,r[2]=N9.z,r[6]=V1.z,r[10]=I5.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],v=i[6],p=i[10],d=i[14],T=i[3],y=i[7],M=i[11],w=i[15],N=r[0],L=r[4],G=r[8],E=r[12],R=r[1],a0=r[5],h0=r[9],H=r[13],Y=r[2],$=r[6],r0=r[10],X=r[14],j=r[3],u0=r[7],l0=r[11],z=r[15];return s[0]=o*N+a*R+l*Y+c*j,s[4]=o*L+a*a0+l*$+c*u0,s[8]=o*G+a*h0+l*r0+c*l0,s[12]=o*E+a*H+l*X+c*z,s[1]=u*N+h*R+f*Y+m*j,s[5]=u*L+h*a0+f*$+m*u0,s[9]=u*G+h*h0+f*r0+m*l0,s[13]=u*E+h*H+f*X+m*z,s[2]=_*N+v*R+p*Y+d*j,s[6]=_*L+v*a0+p*$+d*u0,s[10]=_*G+v*h0+p*r0+d*l0,s[14]=_*E+v*H+p*X+d*z,s[3]=T*N+y*R+M*Y+w*j,s[7]=T*L+y*a0+M*$+w*u0,s[11]=T*G+y*h0+M*r0+w*l0,s[15]=T*E+y*H+M*X+w*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],v=e[7],p=e[11],d=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+v*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],v=e[13],p=e[14],d=e[15],T=h*p*c-v*f*c+v*l*m-a*p*m-h*l*d+a*f*d,y=_*f*c-u*p*c-_*l*m+o*p*m+u*l*d-o*f*d,M=u*v*c-_*h*c+_*a*m-o*v*m-u*a*d+o*h*d,w=_*h*l-u*v*l-_*a*f+o*v*f+u*a*p-o*h*p,N=t*T+i*y+r*M+s*w;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/N;return e[0]=T*L,e[1]=(v*f*s-h*p*s-v*r*m+i*p*m+h*r*d-i*f*d)*L,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*d+i*l*d)*L,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*L,e[4]=y*L,e[5]=(u*p*s-_*f*s+_*r*m-t*p*m-u*r*d+t*f*d)*L,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*d-t*l*d)*L,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*L,e[8]=M*L,e[9]=(_*h*s-u*v*s-_*i*m+t*v*m+u*i*d-t*h*d)*L,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*d+t*a*d)*L,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*m-t*a*m)*L,e[12]=w*L,e[13]=(u*v*r-_*h*r+_*i*f-t*v*f-u*i*p+t*h*p)*L,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*p-t*a*p)*L,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,_=s*h,v=o*u,p=o*h,d=a*h,T=l*c,y=l*u,M=l*h,w=i.x,N=i.y,L=i.z;return r[0]=(1-(v+d))*w,r[1]=(m+M)*w,r[2]=(_-y)*w,r[3]=0,r[4]=(m-M)*N,r[5]=(1-(f+d))*N,r[6]=(p+T)*N,r[7]=0,r[8]=(_+y)*L,r[9]=(p-T)*L,r[10]=(1-(f+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=y2.set(r[0],r[1],r[2]).length();const o=y2.set(r[4],r[5],r[6]).length(),a=y2.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],k5.copy(this);const c=1/s,u=1/o,h=1/a;return k5.elements[0]*=c,k5.elements[1]*=c,k5.elements[2]*=c,k5.elements[4]*=u,k5.elements[5]*=u,k5.elements[6]*=u,k5.elements[8]*=h,k5.elements[9]*=h,k5.elements[10]*=h,t.setFromRotationMatrix(k5),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=E9){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(a===E9)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===y7)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=E9){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,m=(i+r)*u;let _,v;if(a===E9)_=(o+s)*h,v=-2*h;else if(a===y7)_=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const y2=new O,k5=new s5,ms=new O(0,0,0),gs=new O(1,1,1),N9=new O,V1=new O,I5=new O,t8=new s5,n8=new c2;class U7{constructor(e=0,t=0,i=0,r=U7.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(d5(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-d5(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(d5(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-d5(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(d5(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-d5(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return t8.makeRotationFromQuaternion(e),this.setFromRotationMatrix(t8,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return n8.setFromEuler(this),this.setFromQuaternion(n8,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}U7.DEFAULT_ORDER="XYZ";class R3{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _s=0;const i8=new O,M2=new c2,g9=new s5,k1=new O,s1=new O,vs=new O,xs=new c2,r8=new O(1,0,0),s8=new O(0,1,0),o8=new O(0,0,1),ys={type:"added"},a8={type:"removed"};class w5 extends h2{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_s++}),this.uuid=$2(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=w5.DEFAULT_UP.clone();const e=new O,t=new U7,i=new c2,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new s5},normalMatrix:{value:new G0}}),this.matrix=new s5,this.matrixWorld=new s5,this.matrixAutoUpdate=w5.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=w5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new R3,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return M2.setFromAxisAngle(e,t),this.quaternion.multiply(M2),this}rotateOnWorldAxis(e,t){return M2.setFromAxisAngle(e,t),this.quaternion.premultiply(M2),this}rotateX(e){return this.rotateOnAxis(r8,e)}rotateY(e){return this.rotateOnAxis(s8,e)}rotateZ(e){return this.rotateOnAxis(o8,e)}translateOnAxis(e,t){return i8.copy(e).applyQuaternion(this.quaternion),this.position.add(i8.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(r8,e)}translateY(e){return this.translateOnAxis(s8,e)}translateZ(e){return this.translateOnAxis(o8,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(g9.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?k1.copy(e):k1.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),s1.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?g9.lookAt(s1,k1,this.up):g9.lookAt(k1,s1,this.up),this.quaternion.setFromRotationMatrix(g9),r&&(g9.extractRotation(r.matrixWorld),M2.setFromRotationMatrix(g9),this.quaternion.premultiply(M2.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ys)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a8)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(a8)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),g9.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),g9.multiply(e.parent.matrixWorld)),e.applyMatrix4(g9),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(s1,e,vs),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(s1,xs,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}w5.DEFAULT_UP=new O(0,1,0);w5.DEFAULT_MATRIX_AUTO_UPDATE=!0;w5.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const W5=new O,_9=new O,d4=new O,v9=new O,S2=new O,E2=new O,l8=new O,p4=new O,m4=new O,g4=new O;let W1=!1;class Y5{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),W5.subVectors(e,t),r.cross(W5);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){W5.subVectors(r,t),_9.subVectors(i,t),d4.subVectors(e,t);const o=W5.dot(W5),a=W5.dot(_9),l=W5.dot(d4),c=_9.dot(_9),u=_9.dot(d4),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,v9),v9.x>=0&&v9.y>=0&&v9.x+v9.y<=1}static getUV(e,t,i,r,s,o,a,l){return W1===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),W1=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,v9),l.setScalar(0),l.addScaledVector(s,v9.x),l.addScaledVector(o,v9.y),l.addScaledVector(a,v9.z),l}static isFrontFacing(e,t,i,r){return W5.subVectors(i,t),_9.subVectors(e,t),W5.cross(_9).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return W5.subVectors(this.c,this.b),_9.subVectors(this.a,this.b),W5.cross(_9).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Y5.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Y5.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return W1===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),W1=!0),Y5.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Y5.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Y5.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Y5.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;S2.subVectors(r,i),E2.subVectors(s,i),p4.subVectors(e,i);const l=S2.dot(p4),c=E2.dot(p4);if(l<=0&&c<=0)return t.copy(i);m4.subVectors(e,r);const u=S2.dot(m4),h=E2.dot(m4);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(S2,o);g4.subVectors(e,s);const m=S2.dot(g4),_=E2.dot(g4);if(_>=0&&m<=_)return t.copy(s);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(E2,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return l8.subVectors(s,r),a=(h-u)/(h-u+(m-_)),t.copy(r).addScaledVector(l8,a);const d=1/(p+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(S2,o).addScaledVector(E2,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ms=0;class Q2 extends h2{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ms++}),this.uuid=$2(),this.name="",this.type="Material",this.blending=z2,this.side=G9,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Be,this.blendDst=ze,this.blendEquation=L2,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=k4,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=t4,this.stencilZFail=t4,this.stencilZPass=t4,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==z2&&(i.blending=this.blending),this.side!==G9&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const et={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},X5={h:0,s:0,l:0},X1={h:0,s:0,l:0};function _4(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class K0{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=H0){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,V5.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=V5.workingColorSpace){return this.r=e,this.g=t,this.b=i,V5.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=V5.workingColorSpace){if(e=rs(e,1),t=d5(t,0,1),i=d5(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=_4(o,s,e+1/3),this.g=_4(o,s,e),this.b=_4(o,s,e-1/3)}return V5.toWorkingColorSpace(this,r),this}setStyle(e,t=H0){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=H0){const i=et[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=H2(e.r),this.g=H2(e.g),this.b=H2(e.b),this}copyLinearToSRGB(e){return this.r=s4(e.r),this.g=s4(e.g),this.b=s4(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=H0){return V5.fromWorkingColorSpace(_5.copy(this),e),Math.round(d5(_5.r*255,0,255))*65536+Math.round(d5(_5.g*255,0,255))*256+Math.round(d5(_5.b*255,0,255))}getHexString(e=H0){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=V5.workingColorSpace){V5.fromWorkingColorSpace(_5.copy(this),t);const i=_5.r,r=_5.g,s=_5.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=V5.workingColorSpace){return V5.fromWorkingColorSpace(_5.copy(this),t),e.r=_5.r,e.g=_5.g,e.b=_5.b,e}getStyle(e=H0){V5.fromWorkingColorSpace(_5.copy(this),e);const t=_5.r,i=_5.g,r=_5.b;return e!==H0?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(X5),X5.h+=e,X5.s+=t,X5.l+=i,this.setHSL(X5.h,X5.s,X5.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(X5),e.getHSL(X1);const i=i4(X5.h,X1.h,t),r=i4(X5.s,X1.s,t),s=i4(X5.l,X1.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _5=new K0;K0.NAMES=et;class C3 extends Q2{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=He,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const r5=new O,q1=new f0;class l9{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Z6,this.updateRange={offset:0,count:-1},this.gpuType=I9,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)q1.fromBufferAttribute(this,t),q1.applyMatrix3(e),this.setXY(t,q1.x,q1.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)r5.fromBufferAttribute(this,t),r5.applyMatrix3(e),this.setXYZ(t,r5.x,r5.y,r5.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)r5.fromBufferAttribute(this,t),r5.applyMatrix4(e),this.setXYZ(t,r5.x,r5.y,r5.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)r5.fromBufferAttribute(this,t),r5.applyNormalMatrix(e),this.setXYZ(t,r5.x,r5.y,r5.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)r5.fromBufferAttribute(this,t),r5.transformDirection(e),this.setXYZ(t,r5.x,r5.y,r5.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=F1(t,this.array)),t}setX(e,t){return this.normalized&&(t=D5(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=F1(t,this.array)),t}setY(e,t){return this.normalized&&(t=D5(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=F1(t,this.array)),t}setZ(e,t){return this.normalized&&(t=D5(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=F1(t,this.array)),t}setW(e,t){return this.normalized&&(t=D5(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=D5(t,this.array),i=D5(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=D5(t,this.array),i=D5(i,this.array),r=D5(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=D5(t,this.array),i=D5(i,this.array),r=D5(r,this.array),s=D5(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Z6&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class tt extends l9{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nt extends l9{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class y5 extends l9{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ss=0;const B5=new s5,v4=new w5,T2=new O,O5=new A1,o1=new A1,h5=new O;class N5 extends h2{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ss++}),this.uuid=$2(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ze(e)?nt:tt)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new G0().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return B5.makeRotationFromQuaternion(e),this.applyMatrix4(B5),this}rotateX(e){return B5.makeRotationX(e),this.applyMatrix4(B5),this}rotateY(e){return B5.makeRotationY(e),this.applyMatrix4(B5),this}rotateZ(e){return B5.makeRotationZ(e),this.applyMatrix4(B5),this}translate(e,t,i){return B5.makeTranslation(e,t,i),this.applyMatrix4(B5),this}scale(e,t,i){return B5.makeScale(e,t,i),this.applyMatrix4(B5),this}lookAt(e){return v4.lookAt(e),v4.updateMatrix(),this.applyMatrix4(v4.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(T2).negate(),this.translate(T2.x,T2.y,T2.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new y5(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new A1);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];O5.setFromBufferAttribute(s),this.morphTargetsRelative?(h5.addVectors(this.boundingBox.min,O5.min),this.boundingBox.expandByPoint(h5),h5.addVectors(this.boundingBox.max,O5.max),this.boundingBox.expandByPoint(h5)):(this.boundingBox.expandByPoint(O5.min),this.boundingBox.expandByPoint(O5.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new w1);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(O5.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];o1.setFromBufferAttribute(a),this.morphTargetsRelative?(h5.addVectors(O5.min,o1.min),O5.expandByPoint(h5),h5.addVectors(O5.max,o1.max),O5.expandByPoint(h5)):(O5.expandByPoint(o1.min),O5.expandByPoint(o1.max))}O5.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)h5.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(h5));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)h5.fromBufferAttribute(a,c),l&&(T2.fromBufferAttribute(e,c),h5.add(T2)),r=Math.max(r,i.distanceToSquared(h5))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new l9(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new O,u[R]=new O;const h=new O,f=new O,m=new O,_=new f0,v=new f0,p=new f0,d=new O,T=new O;function y(R,a0,h0){h.fromArray(r,R*3),f.fromArray(r,a0*3),m.fromArray(r,h0*3),_.fromArray(o,R*2),v.fromArray(o,a0*2),p.fromArray(o,h0*2),f.sub(h),m.sub(h),v.sub(_),p.sub(_);const H=1/(v.x*p.y-p.x*v.y);isFinite(H)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(H),T.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(H),c[R].add(d),c[a0].add(d),c[h0].add(d),u[R].add(T),u[a0].add(T),u[h0].add(T))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let R=0,a0=M.length;R<a0;++R){const h0=M[R],H=h0.start,Y=h0.count;for(let $=H,r0=H+Y;$<r0;$+=3)y(i[$+0],i[$+1],i[$+2])}const w=new O,N=new O,L=new O,G=new O;function E(R){L.fromArray(s,R*3),G.copy(L);const a0=c[R];w.copy(a0),w.sub(L.multiplyScalar(L.dot(a0))).normalize(),N.crossVectors(G,a0);const H=N.dot(u[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=H}for(let R=0,a0=M.length;R<a0;++R){const h0=M[R],H=h0.start,Y=h0.count;for(let $=H,r0=H+Y;$<r0;$+=3)E(i[$+0]),E(i[$+1]),E(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new l9(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)h5.fromBufferAttribute(e,t),h5.normalize(),e.setXYZ(t,h5.x,h5.y,h5.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new l9(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new N5,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c8=new s5,j9=new N7,Y1=new w1,u8=new O,b2=new O,A2=new O,w2=new O,x4=new O,j1=new O,K1=new f0,Z1=new f0,J1=new f0,h8=new O,f8=new O,d8=new O,$1=new O,Q1=new O;class J5 extends w5{constructor(e=new N5,t=new C3){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){j1.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(x4.fromBufferAttribute(h,e),o?j1.addScaledVector(x4,u):j1.addScaledVector(x4.sub(t),u))}t.add(j1)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Y1.copy(i.boundingSphere),Y1.applyMatrix4(s),j9.copy(e.ray).recast(e.near),!(Y1.containsPoint(j9.origin)===!1&&(j9.intersectSphere(Y1,u8)===null||j9.origin.distanceToSquared(u8)>(e.far-e.near)**2))&&(c8.copy(s).invert(),j9.copy(e.ray).applyMatrix4(c8),!(i.boundingBox!==null&&j9.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,j9)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=o[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,w=y;M<w;M+=3){const N=a.getX(M),L=a.getX(M+1),G=a.getX(M+2);r=e7(this,d,e,i,c,u,h,N,L,G),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const T=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);r=e7(this,o,e,i,c,u,h,T,y,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=o[p.materialIndex],T=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=T,w=y;M<w;M+=3){const N=M,L=M+1,G=M+2;r=e7(this,d,e,i,c,u,h,N,L,G),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const T=p,y=p+1,M=p+2;r=e7(this,o,e,i,c,u,h,T,y,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Es(n,e,t,i,r,s,o,a){let l;if(e.side===C5?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===G9,a),l===null)return null;Q1.copy(a),Q1.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Q1);return c<t.near||c>t.far?null:{distance:c,point:Q1.clone(),object:n}}function e7(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,b2),n.getVertexPosition(l,A2),n.getVertexPosition(c,w2);const u=Es(n,e,t,i,b2,A2,w2,$1);if(u){r&&(K1.fromBufferAttribute(r,a),Z1.fromBufferAttribute(r,l),J1.fromBufferAttribute(r,c),u.uv=Y5.getInterpolation($1,b2,A2,w2,K1,Z1,J1,new f0)),s&&(K1.fromBufferAttribute(s,a),Z1.fromBufferAttribute(s,l),J1.fromBufferAttribute(s,c),u.uv1=Y5.getInterpolation($1,b2,A2,w2,K1,Z1,J1,new f0),u.uv2=u.uv1),o&&(h8.fromBufferAttribute(o,a),f8.fromBufferAttribute(o,l),d8.fromBufferAttribute(o,c),u.normal=Y5.getInterpolation($1,b2,A2,w2,h8,f8,d8,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};Y5.getNormal(b2,A2,w2,h.normal),u.face=h}return u}class P1 extends N5{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new y5(c,3)),this.setAttribute("normal",new y5(u,3)),this.setAttribute("uv",new y5(h,2));function _(v,p,d,T,y,M,w,N,L,G,E){const R=M/L,a0=w/G,h0=M/2,H=w/2,Y=N/2,$=L+1,r0=G+1;let X=0,j=0;const u0=new O;for(let l0=0;l0<r0;l0++){const z=l0*a0-H;for(let q=0;q<$;q++){const p0=q*R-h0;u0[v]=p0*T,u0[p]=z*y,u0[d]=Y,c.push(u0.x,u0.y,u0.z),u0[v]=0,u0[p]=0,u0[d]=N>0?1:-1,u.push(u0.x,u0.y,u0.z),h.push(q/L),h.push(1-l0/G),X+=1}}for(let l0=0;l0<G;l0++)for(let z=0;z<L;z++){const q=f+z+$*l0,p0=f+z+$*(l0+1),g0=f+(z+1)+$*(l0+1),y0=f+(z+1)+$*l0;l.push(q,p0,y0),l.push(p0,g0,y0),j+=6}a.addGroup(m,j,E),m+=j,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new P1(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function j2(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function T5(n){const e={};for(let t=0;t<n.length;t++){const i=j2(n[t]);for(const r in i)e[r]=i[r]}return e}function Ts(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function it(n){return n.getRenderTarget()===null?n.outputColorSpace:c9}const bs={clone:j2,merge:T5};var As=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ws=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class u9 extends Q2{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=As,this.fragmentShader=ws,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=j2(e.uniforms),this.uniformsGroups=Ts(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rt extends w5{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new s5,this.projectionMatrix=new s5,this.projectionMatrixInverse=new s5,this.coordinateSystem=E9}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class H5 extends rt{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=K4*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(n4*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return K4*2*Math.atan(Math.tan(n4*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(n4*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const P2=-90,R2=1;class Ps extends w5{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new H5(P2,R2,e,t);r.layers=this.layers,this.add(r);const s=new H5(P2,R2,e,t);s.layers=this.layers,this.add(s);const o=new H5(P2,R2,e,t);o.layers=this.layers,this.add(o);const a=new H5(P2,R2,e,t);a.layers=this.layers,this.add(a);const l=new H5(P2,R2,e,t);l.layers=this.layers,this.add(l);const c=new H5(P2,R2,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===E9)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===y7)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=T9,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class st extends F5{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:X2,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rs extends l2{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(d1("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===o2?H0:a2),this.texture=new st(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:z5}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new P1(5,5,5),s=new u9({name:"CubemapFromEquirect",uniforms:j2(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:C5,blending:B9});s.uniforms.tEquirect.value=t;const o=new J5(r,s),a=t.minFilter;return t.minFilter===M1&&(t.minFilter=z5),new Ps(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const y4=new O,Cs=new O,Ls=new G0;class Z9{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=y4.subVectors(i,t).cross(Cs.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(y4),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ls.getNormalMatrix(e),r=this.coplanarPoint(y4).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const K9=new w1,t7=new O;class ot{constructor(e=new Z9,t=new Z9,i=new Z9,r=new Z9,s=new Z9,o=new Z9){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=E9){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],_=r[9],v=r[10],p=r[11],d=r[12],T=r[13],y=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,p-m,M-d).normalize(),i[1].setComponents(l+s,f+c,p+m,M+d).normalize(),i[2].setComponents(l+o,f+u,p+_,M+T).normalize(),i[3].setComponents(l-o,f-u,p-_,M-T).normalize(),i[4].setComponents(l-a,f-h,p-v,M-y).normalize(),t===E9)i[5].setComponents(l+a,f+h,p+v,M+y).normalize();else if(t===y7)i[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),K9.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),K9.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(K9)}intersectsSprite(e){return K9.center.set(0,0,0),K9.radius=.7071067811865476,K9.applyMatrix4(e.matrixWorld),this.intersectsSphere(K9)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(t7.x=r.normal.x>0?e.max.x:e.min.x,t7.y=r.normal.y>0?e.max.y:e.min.y,t7.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(t7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function at(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ns(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;n.bindBuffer(h,c),m.count===-1?n.bufferSubData(h,0,f):(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h===void 0?i.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class D7 extends N5{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],v=[],p=[];for(let d=0;d<u;d++){const T=d*f-o;for(let y=0;y<c;y++){const M=y*h-s;_.push(M,-T,0),v.push(0,0,1),p.push(y/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const y=T+c*d,M=T+c*(d+1),w=T+1+c*(d+1),N=T+1+c*d;m.push(y,M,N),m.push(M,w,N)}this.setIndex(m),this.setAttribute("position",new y5(_,3)),this.setAttribute("normal",new y5(v,3)),this.setAttribute("uv",new y5(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new D7(e.width,e.height,e.widthSegments,e.heightSegments)}}var Us=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ds=`#ifdef USE_ALPHAHASH
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
#endif`,Is=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Os=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fs=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bs=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zs=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hs=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gs=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vs=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ks=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ws=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Xs=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qs=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ys=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,js=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ks=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zs=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Js=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$s=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qs=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eo=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,to=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,no=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,io=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ro=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,so=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ao="gl_FragColor = linearToOutputTexel( gl_FragColor );",lo=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,co=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,uo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ho=`#ifdef USE_ENVMAP
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
#endif`,fo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,po=`#ifdef USE_ENVMAP
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
#endif`,mo=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,go=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_o=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vo=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xo=`#ifdef USE_GRADIENTMAP
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
}`,yo=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mo=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,So=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eo=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,To=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,bo=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Ao=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wo=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Po=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ro=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Co=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Lo=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,No=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uo=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Do=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Io=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oo=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fo=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bo=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zo=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Ho=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Go=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vo=`#if defined( USE_POINTS_UV )
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
#endif`,ko=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wo=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xo=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qo=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yo=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jo=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ko=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Zo=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jo=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$o=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qo=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ea=`#ifdef USE_NORMALMAP
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
#endif`,ta=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,na=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ia=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ra=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sa=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oa=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,aa=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,la=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ca=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ua=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ha=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fa=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,da=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pa=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ma=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ga=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_a=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,va=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xa=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ya=`#ifdef USE_SKINNING
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
#endif`,Ma=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sa=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ea=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ta=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ba=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Aa=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wa=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pa=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ra=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ca=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const La=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Na=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ua=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Da=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ia=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oa=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fa=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ba=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,za=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ha=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ga=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Va=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ka=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wa=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xa=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,qa=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ya=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,ja=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ka=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Za=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ja=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$a=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qa=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,el=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tl=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,nl=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,il=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,rl=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sl=`uniform float size;
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
}`,ol=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,al=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,ll=`uniform vec3 color;
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
}`,cl=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ul=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,z0={alphahash_fragment:Us,alphahash_pars_fragment:Ds,alphamap_fragment:Is,alphamap_pars_fragment:Os,alphatest_fragment:Fs,alphatest_pars_fragment:Bs,aomap_fragment:zs,aomap_pars_fragment:Hs,begin_vertex:Gs,beginnormal_vertex:Vs,bsdfs:ks,iridescence_fragment:Ws,bumpmap_pars_fragment:Xs,clipping_planes_fragment:qs,clipping_planes_pars_fragment:Ys,clipping_planes_pars_vertex:js,clipping_planes_vertex:Ks,color_fragment:Zs,color_pars_fragment:Js,color_pars_vertex:$s,color_vertex:Qs,common:eo,cube_uv_reflection_fragment:to,defaultnormal_vertex:no,displacementmap_pars_vertex:io,displacementmap_vertex:ro,emissivemap_fragment:so,emissivemap_pars_fragment:oo,colorspace_fragment:ao,colorspace_pars_fragment:lo,envmap_fragment:co,envmap_common_pars_fragment:uo,envmap_pars_fragment:ho,envmap_pars_vertex:fo,envmap_physical_pars_fragment:bo,envmap_vertex:po,fog_vertex:mo,fog_pars_vertex:go,fog_fragment:_o,fog_pars_fragment:vo,gradientmap_pars_fragment:xo,lightmap_fragment:yo,lightmap_pars_fragment:Mo,lights_lambert_fragment:So,lights_lambert_pars_fragment:Eo,lights_pars_begin:To,lights_toon_fragment:Ao,lights_toon_pars_fragment:wo,lights_phong_fragment:Po,lights_phong_pars_fragment:Ro,lights_physical_fragment:Co,lights_physical_pars_fragment:Lo,lights_fragment_begin:No,lights_fragment_maps:Uo,lights_fragment_end:Do,logdepthbuf_fragment:Io,logdepthbuf_pars_fragment:Oo,logdepthbuf_pars_vertex:Fo,logdepthbuf_vertex:Bo,map_fragment:zo,map_pars_fragment:Ho,map_particle_fragment:Go,map_particle_pars_fragment:Vo,metalnessmap_fragment:ko,metalnessmap_pars_fragment:Wo,morphcolor_vertex:Xo,morphnormal_vertex:qo,morphtarget_pars_vertex:Yo,morphtarget_vertex:jo,normal_fragment_begin:Ko,normal_fragment_maps:Zo,normal_pars_fragment:Jo,normal_pars_vertex:$o,normal_vertex:Qo,normalmap_pars_fragment:ea,clearcoat_normal_fragment_begin:ta,clearcoat_normal_fragment_maps:na,clearcoat_pars_fragment:ia,iridescence_pars_fragment:ra,opaque_fragment:sa,packing:oa,premultiplied_alpha_fragment:aa,project_vertex:la,dithering_fragment:ca,dithering_pars_fragment:ua,roughnessmap_fragment:ha,roughnessmap_pars_fragment:fa,shadowmap_pars_fragment:da,shadowmap_pars_vertex:pa,shadowmap_vertex:ma,shadowmask_pars_fragment:ga,skinbase_vertex:_a,skinning_pars_vertex:va,skinning_vertex:xa,skinnormal_vertex:ya,specularmap_fragment:Ma,specularmap_pars_fragment:Sa,tonemapping_fragment:Ea,tonemapping_pars_fragment:Ta,transmission_fragment:ba,transmission_pars_fragment:Aa,uv_pars_fragment:wa,uv_pars_vertex:Pa,uv_vertex:Ra,worldpos_vertex:Ca,background_vert:La,background_frag:Na,backgroundCube_vert:Ua,backgroundCube_frag:Da,cube_vert:Ia,cube_frag:Oa,depth_vert:Fa,depth_frag:Ba,distanceRGBA_vert:za,distanceRGBA_frag:Ha,equirect_vert:Ga,equirect_frag:Va,linedashed_vert:ka,linedashed_frag:Wa,meshbasic_vert:Xa,meshbasic_frag:qa,meshlambert_vert:Ya,meshlambert_frag:ja,meshmatcap_vert:Ka,meshmatcap_frag:Za,meshnormal_vert:Ja,meshnormal_frag:$a,meshphong_vert:Qa,meshphong_frag:el,meshphysical_vert:tl,meshphysical_frag:nl,meshtoon_vert:il,meshtoon_frag:rl,points_vert:sl,points_frag:ol,shadow_vert:al,shadow_frag:ll,sprite_vert:cl,sprite_frag:ul},_0={common:{diffuse:{value:new K0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G0},alphaMap:{value:null},alphaMapTransform:{value:new G0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G0}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G0},normalScale:{value:new f0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new K0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G0},alphaTest:{value:0},uvTransform:{value:new G0}},sprite:{diffuse:{value:new K0(16777215)},opacity:{value:1},center:{value:new f0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G0},alphaMap:{value:null},alphaMapTransform:{value:new G0},alphaTest:{value:0}}},r9={basic:{uniforms:T5([_0.common,_0.specularmap,_0.envmap,_0.aomap,_0.lightmap,_0.fog]),vertexShader:z0.meshbasic_vert,fragmentShader:z0.meshbasic_frag},lambert:{uniforms:T5([_0.common,_0.specularmap,_0.envmap,_0.aomap,_0.lightmap,_0.emissivemap,_0.bumpmap,_0.normalmap,_0.displacementmap,_0.fog,_0.lights,{emissive:{value:new K0(0)}}]),vertexShader:z0.meshlambert_vert,fragmentShader:z0.meshlambert_frag},phong:{uniforms:T5([_0.common,_0.specularmap,_0.envmap,_0.aomap,_0.lightmap,_0.emissivemap,_0.bumpmap,_0.normalmap,_0.displacementmap,_0.fog,_0.lights,{emissive:{value:new K0(0)},specular:{value:new K0(1118481)},shininess:{value:30}}]),vertexShader:z0.meshphong_vert,fragmentShader:z0.meshphong_frag},standard:{uniforms:T5([_0.common,_0.envmap,_0.aomap,_0.lightmap,_0.emissivemap,_0.bumpmap,_0.normalmap,_0.displacementmap,_0.roughnessmap,_0.metalnessmap,_0.fog,_0.lights,{emissive:{value:new K0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:z0.meshphysical_vert,fragmentShader:z0.meshphysical_frag},toon:{uniforms:T5([_0.common,_0.aomap,_0.lightmap,_0.emissivemap,_0.bumpmap,_0.normalmap,_0.displacementmap,_0.gradientmap,_0.fog,_0.lights,{emissive:{value:new K0(0)}}]),vertexShader:z0.meshtoon_vert,fragmentShader:z0.meshtoon_frag},matcap:{uniforms:T5([_0.common,_0.bumpmap,_0.normalmap,_0.displacementmap,_0.fog,{matcap:{value:null}}]),vertexShader:z0.meshmatcap_vert,fragmentShader:z0.meshmatcap_frag},points:{uniforms:T5([_0.points,_0.fog]),vertexShader:z0.points_vert,fragmentShader:z0.points_frag},dashed:{uniforms:T5([_0.common,_0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:z0.linedashed_vert,fragmentShader:z0.linedashed_frag},depth:{uniforms:T5([_0.common,_0.displacementmap]),vertexShader:z0.depth_vert,fragmentShader:z0.depth_frag},normal:{uniforms:T5([_0.common,_0.bumpmap,_0.normalmap,_0.displacementmap,{opacity:{value:1}}]),vertexShader:z0.meshnormal_vert,fragmentShader:z0.meshnormal_frag},sprite:{uniforms:T5([_0.sprite,_0.fog]),vertexShader:z0.sprite_vert,fragmentShader:z0.sprite_frag},background:{uniforms:{uvTransform:{value:new G0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:z0.background_vert,fragmentShader:z0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:z0.backgroundCube_vert,fragmentShader:z0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:z0.cube_vert,fragmentShader:z0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:z0.equirect_vert,fragmentShader:z0.equirect_frag},distanceRGBA:{uniforms:T5([_0.common,_0.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:z0.distanceRGBA_vert,fragmentShader:z0.distanceRGBA_frag},shadow:{uniforms:T5([_0.lights,_0.fog,{color:{value:new K0(0)},opacity:{value:1}}]),vertexShader:z0.shadow_vert,fragmentShader:z0.shadow_frag}};r9.physical={uniforms:T5([r9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G0},clearcoatNormalScale:{value:new f0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G0},sheen:{value:0},sheenColor:{value:new K0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G0},transmissionSamplerSize:{value:new f0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G0},attenuationDistance:{value:0},attenuationColor:{value:new K0(0)},specularColor:{value:new K0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G0},anisotropyVector:{value:new f0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G0}}]),vertexShader:z0.meshphysical_vert,fragmentShader:z0.meshphysical_frag};const n7={r:0,b:0,g:0};function hl(n,e,t,i,r,s,o){const a=new K0(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function _(p,d){let T=!1,y=d.isScene===!0?d.background:null;switch(y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?v(a,l):y&&y.isColor&&(v(y,1),T=!0),n.xr.getEnvironmentBlendMode()){case"opaque":T=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),T=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),T=!0;break}(n.autoClear||T)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===L7)?(u===void 0&&(u=new J5(new P1(1,1,1),new u9({name:"BackgroundCubeMaterial",uniforms:j2(r9.backgroundCube.uniforms),vertexShader:r9.backgroundCube.vertexShader,fragmentShader:r9.backgroundCube.fragmentShader,side:C5,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,L,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=y.colorSpace!==H0,(h!==y||f!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new J5(new D7(2,2),new u9({name:"BackgroundMaterial",uniforms:j2(r9.background.uniforms),vertexShader:r9.background.vertexShader,fragmentShader:r9.background.fragmentShader,side:G9,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=y.colorSpace!==H0,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,d){p.getRGB(n7,it(n)),i.buffers.color.setClear(n7.r,n7.g,n7.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:_}}function fl(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(Y,$,r0,X,j){let u0=!1;if(o){const l0=v(X,r0,$);c!==l0&&(c=l0,m(c.object)),u0=d(Y,X,r0,j),u0&&T(Y,X,r0,j)}else{const l0=$.wireframe===!0;(c.geometry!==X.id||c.program!==r0.id||c.wireframe!==l0)&&(c.geometry=X.id,c.program=r0.id,c.wireframe=l0,u0=!0)}j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(u0||u)&&(u=!1,G(Y,$,r0,X),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(Y){return i.isWebGL2?n.bindVertexArray(Y):s.bindVertexArrayOES(Y)}function _(Y){return i.isWebGL2?n.deleteVertexArray(Y):s.deleteVertexArrayOES(Y)}function v(Y,$,r0){const X=r0.wireframe===!0;let j=a[Y.id];j===void 0&&(j={},a[Y.id]=j);let u0=j[$.id];u0===void 0&&(u0={},j[$.id]=u0);let l0=u0[X];return l0===void 0&&(l0=p(f()),u0[X]=l0),l0}function p(Y){const $=[],r0=[],X=[];for(let j=0;j<r;j++)$[j]=0,r0[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:r0,attributeDivisors:X,object:Y,attributes:{},index:null}}function d(Y,$,r0,X){const j=c.attributes,u0=$.attributes;let l0=0;const z=r0.getAttributes();for(const q in z)if(z[q].location>=0){const g0=j[q];let y0=u0[q];if(y0===void 0&&(q==="instanceMatrix"&&Y.instanceMatrix&&(y0=Y.instanceMatrix),q==="instanceColor"&&Y.instanceColor&&(y0=Y.instanceColor)),g0===void 0||g0.attribute!==y0||y0&&g0.data!==y0.data)return!0;l0++}return c.attributesNum!==l0||c.index!==X}function T(Y,$,r0,X){const j={},u0=$.attributes;let l0=0;const z=r0.getAttributes();for(const q in z)if(z[q].location>=0){let g0=u0[q];g0===void 0&&(q==="instanceMatrix"&&Y.instanceMatrix&&(g0=Y.instanceMatrix),q==="instanceColor"&&Y.instanceColor&&(g0=Y.instanceColor));const y0={};y0.attribute=g0,g0&&g0.data&&(y0.data=g0.data),j[q]=y0,l0++}c.attributes=j,c.attributesNum=l0,c.index=X}function y(){const Y=c.newAttributes;for(let $=0,r0=Y.length;$<r0;$++)Y[$]=0}function M(Y){w(Y,0)}function w(Y,$){const r0=c.newAttributes,X=c.enabledAttributes,j=c.attributeDivisors;r0[Y]=1,X[Y]===0&&(n.enableVertexAttribArray(Y),X[Y]=1),j[Y]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,$),j[Y]=$)}function N(){const Y=c.newAttributes,$=c.enabledAttributes;for(let r0=0,X=$.length;r0<X;r0++)$[r0]!==Y[r0]&&(n.disableVertexAttribArray(r0),$[r0]=0)}function L(Y,$,r0,X,j,u0,l0){l0===!0?n.vertexAttribIPointer(Y,$,r0,j,u0):n.vertexAttribPointer(Y,$,r0,X,j,u0)}function G(Y,$,r0,X){if(i.isWebGL2===!1&&(Y.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const j=X.attributes,u0=r0.getAttributes(),l0=$.defaultAttributeValues;for(const z in u0){const q=u0[z];if(q.location>=0){let p0=j[z];if(p0===void 0&&(z==="instanceMatrix"&&Y.instanceMatrix&&(p0=Y.instanceMatrix),z==="instanceColor"&&Y.instanceColor&&(p0=Y.instanceColor)),p0!==void 0){const g0=p0.normalized,y0=p0.itemSize,E0=t.get(p0);if(E0===void 0)continue;const P0=E0.buffer,R0=E0.type,O0=E0.bytesPerElement,j0=i.isWebGL2===!0&&(R0===n.INT||R0===n.UNSIGNED_INT||p0.gpuType===Ve);if(p0.isInterleavedBufferAttribute){const C0=p0.data,g=C0.stride,A=p0.offset;if(C0.isInstancedInterleavedBuffer){for(let C=0;C<q.locationSize;C++)w(q.location+C,C0.meshPerAttribute);Y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=C0.meshPerAttribute*C0.count)}else for(let C=0;C<q.locationSize;C++)M(q.location+C);n.bindBuffer(n.ARRAY_BUFFER,P0);for(let C=0;C<q.locationSize;C++)L(q.location+C,y0/q.locationSize,R0,g0,g*O0,(A+y0/q.locationSize*C)*O0,j0)}else{if(p0.isInstancedBufferAttribute){for(let C0=0;C0<q.locationSize;C0++)w(q.location+C0,p0.meshPerAttribute);Y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=p0.meshPerAttribute*p0.count)}else for(let C0=0;C0<q.locationSize;C0++)M(q.location+C0);n.bindBuffer(n.ARRAY_BUFFER,P0);for(let C0=0;C0<q.locationSize;C0++)L(q.location+C0,y0/q.locationSize,R0,g0,y0*O0,y0/q.locationSize*C0*O0,j0)}}else if(l0!==void 0){const g0=l0[z];if(g0!==void 0)switch(g0.length){case 2:n.vertexAttrib2fv(q.location,g0);break;case 3:n.vertexAttrib3fv(q.location,g0);break;case 4:n.vertexAttrib4fv(q.location,g0);break;default:n.vertexAttrib1fv(q.location,g0)}}}}N()}function E(){h0();for(const Y in a){const $=a[Y];for(const r0 in $){const X=$[r0];for(const j in X)_(X[j].object),delete X[j];delete $[r0]}delete a[Y]}}function R(Y){if(a[Y.id]===void 0)return;const $=a[Y.id];for(const r0 in $){const X=$[r0];for(const j in X)_(X[j].object),delete X[j];delete $[r0]}delete a[Y.id]}function a0(Y){for(const $ in a){const r0=a[$];if(r0[Y.id]===void 0)continue;const X=r0[Y.id];for(const j in X)_(X[j].object),delete X[j];delete r0[Y.id]}}function h0(){H(),u=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:h0,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:a0,initAttributes:y,enableAttribute:M,disableUnusedAttributes:N}}function dl(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function pl(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,M=o||e.has("OES_texture_float"),w=y&&M,N=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:T,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:N}}function ml(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Z9,a=new G0,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const T=s?0:i,y=T*4;let M=d.clippingState||null;l.value=M,M=u(_,f,y,m);for(let w=0;w!==y;++w)M[w]=t[w];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,_){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,M=m;y!==v;++y,M+=4)o.copy(h[y]).applyMatrix4(T,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function gl(n){let e=new WeakMap;function t(o,a){return a===W4?o.mapping=X2:a===X4&&(o.mapping=q2),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===W4||a===X4)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rs(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _l extends rt{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const D2=4,p8=[.125,.215,.35,.446,.526,.582],e2=20,M4=new _l,m8=new K0;let S4=null;const J9=(1+Math.sqrt(5))/2,C2=1/J9,g8=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,J9,C2),new O(0,J9,-C2),new O(C2,0,J9),new O(-C2,0,J9),new O(J9,C2,0),new O(-J9,C2,0)];class _8{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){S4=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y8(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x8(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(S4),e.scissorTest=!1,i7(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===X2||e.mapping===q2?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),S4=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:z5,minFilter:z5,generateMipmaps:!1,type:S1,format:Z5,colorSpace:c9,depthBuffer:!1},r=v8(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v8(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vl(s)),this._blurMaterial=xl(s,e,t)}return r}_compileMaterial(e){const t=new J5(this._lodPlanes[0],e);this._renderer.compile(t,M4)}_sceneToCubeUV(e,t,i,r){const a=new H5(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(m8),u.toneMapping=T9,u.autoClear=!1;const m=new C3({name:"PMREM.Background",side:C5,depthWrite:!1,depthTest:!1}),_=new J5(new P1,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(m8),v=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):T===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const y=this._cubeSize;i7(r,T*y,d>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===X2||e.mapping===q2;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=y8()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x8());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new J5(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;i7(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,M4)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=g8[(r-1)%g8.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new J5(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*e2-1),v=s/_,p=isFinite(s)?1+Math.floor(u*v):e2;p>e2&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${e2}`);const d=[];let T=0;for(let L=0;L<e2;++L){const G=L/v,E=Math.exp(-G*G/2);d.push(E),L===0?T+=E:L<p&&(T+=2*E)}for(let L=0;L<d.length;L++)d[L]=d[L]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const M=this._sizeLods[r],w=3*M*(r>y-D2?r-y+D2:0),N=4*(this._cubeSize-M);i7(t,w,N,3*M,2*M),l.setRenderTarget(t),l.render(h,M4)}}function vl(n){const e=[],t=[],i=[];let r=n;const s=n-D2+1+p8.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-D2?l=p8[o-n+D2-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,v=3,p=2,d=1,T=new Float32Array(v*_*m),y=new Float32Array(p*_*m),M=new Float32Array(d*_*m);for(let N=0;N<m;N++){const L=N%3*2/3-1,G=N>2?0:-1,E=[L,G,0,L+2/3,G,0,L+2/3,G+1,0,L,G,0,L+2/3,G+1,0,L,G+1,0];T.set(E,v*_*N),y.set(f,p*_*N);const R=[N,N,N,N,N,N];M.set(R,d*_*N)}const w=new N5;w.setAttribute("position",new l9(T,v)),w.setAttribute("uv",new l9(y,p)),w.setAttribute("faceIndex",new l9(M,d)),e.push(w),r>D2&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function v8(n,e,t){const i=new l2(n,e,t);return i.texture.mapping=L7,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function i7(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xl(n,e,t){const i=new Float32Array(e2),r=new O(0,1,0);return new u9({name:"SphericalGaussianBlur",defines:{n:e2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:L3(),fragmentShader:`

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
		`,blending:B9,depthTest:!1,depthWrite:!1})}function x8(){return new u9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:L3(),fragmentShader:`

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
		`,blending:B9,depthTest:!1,depthWrite:!1})}function y8(){return new u9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:L3(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:B9,depthTest:!1,depthWrite:!1})}function L3(){return`

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
	`}function yl(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===W4||l===X4,u=l===X2||l===q2;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new _8(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new _8(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ml(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sl(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,d=v.length;p<d;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const T=m.array;v=m.version;for(let y=0,M=T.length;y<M;y+=3){const w=T[y+0],N=T[y+1],L=T[y+2];f.push(w,N,N,L,L,w)}}else{const T=_.array;v=_.version;for(let y=0,M=T.length/3-1;y<M;y+=3){const w=y+0,N=y+1,L=y+2;f.push(w,N,N,L,L,w)}}const p=new(Ze(f)?nt:tt)(f,1);p.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function El(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,_){if(_===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,m,a,f*l,_),t.update(m,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Tl(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bl(n,e){return n[0]-e[0]}function Al(n,e){return Math.abs(e[1])-Math.abs(n[1])}function wl(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new p5,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=_!==void 0?_.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let $=function(){H.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var m=$;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,N=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],G=u.morphAttributes.color||[];let E=0;y===!0&&(E=1),M===!0&&(E=2),w===!0&&(E=3);let R=u.attributes.position.count*E,a0=1;R>e.maxTextureSize&&(a0=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const h0=new Float32Array(R*a0*4*v),H=new Qe(h0,R,a0,v);H.type=I9,H.needsUpdate=!0;const Y=E*4;for(let r0=0;r0<v;r0++){const X=N[r0],j=L[r0],u0=G[r0],l0=R*a0*4*r0;for(let z=0;z<X.count;z++){const q=z*Y;y===!0&&(o.fromBufferAttribute(X,z),h0[l0+q+0]=o.x,h0[l0+q+1]=o.y,h0[l0+q+2]=o.z,h0[l0+q+3]=0),M===!0&&(o.fromBufferAttribute(j,z),h0[l0+q+4]=o.x,h0[l0+q+5]=o.y,h0[l0+q+6]=o.z,h0[l0+q+7]=0),w===!0&&(o.fromBufferAttribute(u0,z),h0[l0+q+8]=o.x,h0[l0+q+9]=o.y,h0[l0+q+10]=o.z,h0[l0+q+11]=u0.itemSize===4?o.w:1)}}p={count:v,texture:H,size:new f0(R,a0)},s.set(u,p),u.addEventListener("dispose",$)}let d=0;for(let y=0;y<f.length;y++)d+=f[y];const T=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",T),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==_){v=[];for(let M=0;M<_;M++)v[M]=[M,0];i[u.id]=v}for(let M=0;M<_;M++){const w=v[M];w[0]=M,w[1]=f[M]}v.sort(Al);for(let M=0;M<8;M++)M<_&&v[M][1]?(a[M][0]=v[M][0],a[M][1]=v[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(bl);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let T=0;for(let M=0;M<8;M++){const w=a[M],N=w[0],L=w[1];N!==Number.MAX_SAFE_INTEGER&&L?(p&&u.getAttribute("morphTarget"+M)!==p[N]&&u.setAttribute("morphTarget"+M,p[N]),d&&u.getAttribute("morphNormal"+M)!==d[N]&&u.setAttribute("morphNormal"+M,d[N]),r[M]=L,T+=L):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),d&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const y=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Pl(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const lt=new F5,ct=new Qe,ut=new ds,ht=new st,M8=[],S8=[],E8=new Float32Array(16),T8=new Float32Array(9),b8=new Float32Array(4);function e1(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=M8[r];if(s===void 0&&(s=new Float32Array(r),M8[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function a5(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function l5(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function I7(n,e){let t=S8[e];t===void 0&&(t=new Int32Array(e),S8[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Rl(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Cl(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(a5(t,e))return;n.uniform2fv(this.addr,e),l5(t,e)}}function Ll(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(a5(t,e))return;n.uniform3fv(this.addr,e),l5(t,e)}}function Nl(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(a5(t,e))return;n.uniform4fv(this.addr,e),l5(t,e)}}function Ul(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(a5(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),l5(t,e)}else{if(a5(t,i))return;b8.set(i),n.uniformMatrix2fv(this.addr,!1,b8),l5(t,i)}}function Dl(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(a5(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),l5(t,e)}else{if(a5(t,i))return;T8.set(i),n.uniformMatrix3fv(this.addr,!1,T8),l5(t,i)}}function Il(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(a5(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),l5(t,e)}else{if(a5(t,i))return;E8.set(i),n.uniformMatrix4fv(this.addr,!1,E8),l5(t,i)}}function Ol(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fl(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(a5(t,e))return;n.uniform2iv(this.addr,e),l5(t,e)}}function Bl(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(a5(t,e))return;n.uniform3iv(this.addr,e),l5(t,e)}}function zl(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(a5(t,e))return;n.uniform4iv(this.addr,e),l5(t,e)}}function Hl(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gl(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(a5(t,e))return;n.uniform2uiv(this.addr,e),l5(t,e)}}function Vl(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(a5(t,e))return;n.uniform3uiv(this.addr,e),l5(t,e)}}function kl(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(a5(t,e))return;n.uniform4uiv(this.addr,e),l5(t,e)}}function Wl(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||lt,r)}function Xl(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ut,r)}function ql(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ht,r)}function Yl(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ct,r)}function jl(n){switch(n){case 5126:return Rl;case 35664:return Cl;case 35665:return Ll;case 35666:return Nl;case 35674:return Ul;case 35675:return Dl;case 35676:return Il;case 5124:case 35670:return Ol;case 35667:case 35671:return Fl;case 35668:case 35672:return Bl;case 35669:case 35673:return zl;case 5125:return Hl;case 36294:return Gl;case 36295:return Vl;case 36296:return kl;case 35678:case 36198:case 36298:case 36306:case 35682:return Wl;case 35679:case 36299:case 36307:return Xl;case 35680:case 36300:case 36308:case 36293:return ql;case 36289:case 36303:case 36311:case 36292:return Yl}}function Kl(n,e){n.uniform1fv(this.addr,e)}function Zl(n,e){const t=e1(e,this.size,2);n.uniform2fv(this.addr,t)}function Jl(n,e){const t=e1(e,this.size,3);n.uniform3fv(this.addr,t)}function $l(n,e){const t=e1(e,this.size,4);n.uniform4fv(this.addr,t)}function Ql(n,e){const t=e1(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ec(n,e){const t=e1(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tc(n,e){const t=e1(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nc(n,e){n.uniform1iv(this.addr,e)}function ic(n,e){n.uniform2iv(this.addr,e)}function rc(n,e){n.uniform3iv(this.addr,e)}function sc(n,e){n.uniform4iv(this.addr,e)}function oc(n,e){n.uniform1uiv(this.addr,e)}function ac(n,e){n.uniform2uiv(this.addr,e)}function lc(n,e){n.uniform3uiv(this.addr,e)}function cc(n,e){n.uniform4uiv(this.addr,e)}function uc(n,e,t){const i=this.cache,r=e.length,s=I7(t,r);a5(i,s)||(n.uniform1iv(this.addr,s),l5(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||lt,s[o])}function hc(n,e,t){const i=this.cache,r=e.length,s=I7(t,r);a5(i,s)||(n.uniform1iv(this.addr,s),l5(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ut,s[o])}function fc(n,e,t){const i=this.cache,r=e.length,s=I7(t,r);a5(i,s)||(n.uniform1iv(this.addr,s),l5(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ht,s[o])}function dc(n,e,t){const i=this.cache,r=e.length,s=I7(t,r);a5(i,s)||(n.uniform1iv(this.addr,s),l5(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ct,s[o])}function pc(n){switch(n){case 5126:return Kl;case 35664:return Zl;case 35665:return Jl;case 35666:return $l;case 35674:return Ql;case 35675:return ec;case 35676:return tc;case 5124:case 35670:return nc;case 35667:case 35671:return ic;case 35668:case 35672:return rc;case 35669:case 35673:return sc;case 5125:return oc;case 36294:return ac;case 36295:return lc;case 36296:return cc;case 35678:case 36198:case 36298:case 36306:case 35682:return uc;case 35679:case 36299:case 36307:return hc;case 35680:case 36300:case 36308:case 36293:return fc;case 36289:case 36303:case 36311:case 36292:return dc}}class mc{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=jl(t.type)}}class gc{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=pc(t.type)}}class _c{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const E4=/(\w+)(\])?(\[|\.)?/g;function A8(n,e){n.seq.push(e),n.map[e.id]=e}function vc(n,e,t){const i=n.name,r=i.length;for(E4.lastIndex=0;;){const s=E4.exec(i),o=E4.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){A8(t,c===void 0?new mc(a,n,e):new gc(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new _c(a),A8(t,h)),t=h}}}class p7{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);vc(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function w8(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let xc=0;function yc(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Mc(n){switch(n){case c9:return["Linear","( value )"];case H0:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function P8(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yc(n.getShaderSource(e),o)}else return r}function Sc(n,e){const t=Mc(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ec(n,e){let t;switch(e){case Cr:t="Linear";break;case Lr:t="Reinhard";break;case Nr:t="OptimizedCineon";break;case Ur:t="ACESFilmic";break;case Dr:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tc(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(c1).join(`
`)}function bc(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ac(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function c1(n){return n!==""}function R8(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C8(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wc=/^[ \t]*#include +<([\w\d./]+)>/gm;function J4(n){return n.replace(wc,Rc)}const Pc=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rc(n,e){let t=z0[e];if(t===void 0){const i=Pc.get(e);if(i!==void 0)t=z0[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return J4(t)}const Cc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L8(n){return n.replace(Cc,Lc)}function Lc(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function N8(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nc(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fe?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lr?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===y9&&(e="SHADOWMAP_TYPE_VSM"),e}function Uc(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case X2:case q2:e="ENVMAP_TYPE_CUBE";break;case L7:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dc(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case q2:e="ENVMAP_MODE_REFRACTION";break}return e}function Ic(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case He:e="ENVMAP_BLENDING_MULTIPLY";break;case Pr:e="ENVMAP_BLENDING_MIX";break;case Rr:e="ENVMAP_BLENDING_ADD";break}return e}function Oc(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Fc(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Nc(t),c=Uc(t),u=Dc(t),h=Ic(t),f=Oc(t),m=t.isWebGL2?"":Tc(t),_=bc(s),v=r.createProgram();let p,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(c1).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(c1).join(`
`),d.length>0&&(d+=`
`)):(p=[N8(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(c1).join(`
`),d=[m,N8(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==T9?"#define TONE_MAPPING":"",t.toneMapping!==T9?z0.tonemapping_pars_fragment:"",t.toneMapping!==T9?Ec("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",z0.colorspace_pars_fragment,Sc("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(c1).join(`
`)),o=J4(o),o=R8(o,t),o=C8(o,t),a=J4(a),a=R8(a,t),a=C8(a,t),o=L8(o),a=L8(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===J6?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===J6?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=T+p+o,M=T+d+a,w=w8(r,r.VERTEX_SHADER,y),N=w8(r,r.FRAGMENT_SHADER,M);if(r.attachShader(v,w),r.attachShader(v,N),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(v).trim(),R=r.getShaderInfoLog(w).trim(),a0=r.getShaderInfoLog(N).trim();let h0=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(h0=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,N);else{const Y=P8(r,w,"vertex"),$=P8(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+Y+`
`+$)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(R===""||a0==="")&&(H=!1);H&&(this.diagnostics={runnable:h0,programLog:E,vertexShader:{log:R,prefix:p},fragmentShader:{log:a0,prefix:d}})}r.deleteShader(w),r.deleteShader(N);let L;this.getUniforms=function(){return L===void 0&&(L=new p7(r,v)),L};let G;return this.getAttributes=function(){return G===void 0&&(G=Ac(r,v)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xc++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=N,this}let Bc=0;class zc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Hc(e),t.set(e,i)),i}}class Hc{constructor(e){this.id=Bc++,this.code=e,this.usedTimes=0}}function Gc(n,e,t,i,r,s,o){const a=new R3,l=new zc,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,R,a0,h0,H){const Y=h0.fog,$=H.geometry,r0=E.isMeshStandardMaterial?h0.environment:null,X=(E.isMeshStandardMaterial?t:e).get(E.envMap||r0),j=X&&X.mapping===L7?X.image.height:null,u0=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const l0=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,z=l0!==void 0?l0.length:0;let q=0;$.morphAttributes.position!==void 0&&(q=1),$.morphAttributes.normal!==void 0&&(q=2),$.morphAttributes.color!==void 0&&(q=3);let p0,g0,y0,E0;if(u0){const e9=r9[u0];p0=e9.vertexShader,g0=e9.fragmentShader}else p0=E.vertexShader,g0=E.fragmentShader,l.update(E),y0=l.getVertexShaderID(E),E0=l.getFragmentShaderID(E);const P0=n.getRenderTarget(),R0=H.isInstancedMesh===!0,O0=!!E.map,j0=!!E.matcap,C0=!!X,g=!!E.aoMap,A=!!E.lightMap,C=!!E.bumpMap,I=!!E.normalMap,U=!!E.displacementMap,K=!!E.emissiveMap,Z=!!E.metalnessMap,V=!!E.roughnessMap,n0=E.anisotropy>0,Q=E.clearcoat>0,m0=E.iridescence>0,S=E.sheen>0,x=E.transmission>0,F=n0&&!!E.anisotropyMap,e0=Q&&!!E.clearcoatMap,o0=Q&&!!E.clearcoatNormalMap,P=Q&&!!E.clearcoatRoughnessMap,t0=m0&&!!E.iridescenceMap,c0=m0&&!!E.iridescenceThicknessMap,W=S&&!!E.sheenColorMap,T0=S&&!!E.sheenRoughnessMap,A0=!!E.specularMap,w0=!!E.specularColorMap,v0=!!E.specularIntensityMap,x0=x&&!!E.transmissionMap,L0=x&&!!E.thicknessMap,W0=!!E.gradientMap,D=!!E.alphaMap,M0=E.alphaTest>0,J=!!E.alphaHash,d0=!!E.extensions,S0=!!$.attributes.uv1,Y0=!!$.attributes.uv2,$0=!!$.attributes.uv3;return{isWebGL2:u,shaderID:u0,shaderType:E.type,shaderName:E.name,vertexShader:p0,fragmentShader:g0,defines:E.defines,customVertexShaderID:y0,customFragmentShaderID:E0,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:R0,instancingColor:R0&&H.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:P0===null?n.outputColorSpace:P0.isXRRenderTarget===!0?P0.texture.colorSpace:c9,map:O0,matcap:j0,envMap:C0,envMapMode:C0&&X.mapping,envMapCubeUVHeight:j,aoMap:g,lightMap:A,bumpMap:C,normalMap:I,displacementMap:f&&U,emissiveMap:K,normalMapObjectSpace:I&&E.normalMapType===jr,normalMapTangentSpace:I&&E.normalMapType===Yr,metalnessMap:Z,roughnessMap:V,anisotropy:n0,anisotropyMap:F,clearcoat:Q,clearcoatMap:e0,clearcoatNormalMap:o0,clearcoatRoughnessMap:P,iridescence:m0,iridescenceMap:t0,iridescenceThicknessMap:c0,sheen:S,sheenColorMap:W,sheenRoughnessMap:T0,specularMap:A0,specularColorMap:w0,specularIntensityMap:v0,transmission:x,transmissionMap:x0,thicknessMap:L0,gradientMap:W0,opaque:E.transparent===!1&&E.blending===z2,alphaMap:D,alphaTest:M0,alphaHash:J,combine:E.combine,mapUv:O0&&v(E.map.channel),aoMapUv:g&&v(E.aoMap.channel),lightMapUv:A&&v(E.lightMap.channel),bumpMapUv:C&&v(E.bumpMap.channel),normalMapUv:I&&v(E.normalMap.channel),displacementMapUv:U&&v(E.displacementMap.channel),emissiveMapUv:K&&v(E.emissiveMap.channel),metalnessMapUv:Z&&v(E.metalnessMap.channel),roughnessMapUv:V&&v(E.roughnessMap.channel),anisotropyMapUv:F&&v(E.anisotropyMap.channel),clearcoatMapUv:e0&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:o0&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:t0&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:c0&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:W&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:T0&&v(E.sheenRoughnessMap.channel),specularMapUv:A0&&v(E.specularMap.channel),specularColorMapUv:w0&&v(E.specularColorMap.channel),specularIntensityMapUv:v0&&v(E.specularIntensityMap.channel),transmissionMapUv:x0&&v(E.transmissionMap.channel),thicknessMapUv:L0&&v(E.thicknessMap.channel),alphaMapUv:D&&v(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(I||n0),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:S0,vertexUv2s:Y0,vertexUv3s:$0,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(O0||D),fog:!!Y,useFog:E.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&a0.length>0,shadowMapType:n.shadowMap.type,toneMapping:E.toneMapped?n.toneMapping:T9,useLegacyLights:n.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===o9,flipSided:E.side===C5,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:d0&&E.extensions.derivatives===!0,extensionFragDepth:d0&&E.extensions.fragDepth===!0,extensionDrawBuffers:d0&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:d0&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const a0 in E.defines)R.push(a0),R.push(E.defines[a0]);return E.isRawShaderMaterial===!1&&(T(R,E),y(R,E),R.push(n.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function T(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function y(E,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),E.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),E.push(a.mask)}function M(E){const R=_[E.type];let a0;if(R){const h0=r9[R];a0=bs.clone(h0.uniforms)}else a0=E.uniforms;return a0}function w(E,R){let a0;for(let h0=0,H=c.length;h0<H;h0++){const Y=c[h0];if(Y.cacheKey===R){a0=Y,++a0.usedTimes;break}}return a0===void 0&&(a0=new Fc(n,R,E,s),c.push(a0)),a0}function N(E){if(--E.usedTimes===0){const R=c.indexOf(E);c[R]=c[c.length-1],c.pop(),E.destroy()}}function L(E){l.remove(E)}function G(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:w,releaseProgram:N,releaseShaderCache:L,programs:c,dispose:G}}function Vc(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function kc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function U8(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function D8(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,_,v,p){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:p},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=v,d.group=p),e++,d}function a(h,f,m,_,v,p){const d=o(h,f,m,_,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(h,f,m,_,v,p){const d=o(h,f,m,_,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||kc),i.length>1&&i.sort(f||U8),r.length>1&&r.sort(f||U8)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Wc(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new D8,n.set(i,[o])):r>=s.length?(o=new D8,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Xc(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new K0};break;case"SpotLight":t={position:new O,direction:new O,color:new K0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new K0,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new K0,groundColor:new K0};break;case"RectAreaLight":t={color:new K0,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function qc(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new f0};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new f0};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new f0,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Yc=0;function jc(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Kc(n,e){const t=new Xc,i=qc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new s5,a=new s5;function l(u,h){let f=0,m=0,_=0;for(let a0=0;a0<9;a0++)r.probe[a0].set(0,0,0);let v=0,p=0,d=0,T=0,y=0,M=0,w=0,N=0,L=0,G=0;u.sort(jc);const E=h===!0?Math.PI:1;for(let a0=0,h0=u.length;a0<h0;a0++){const H=u[a0],Y=H.color,$=H.intensity,r0=H.distance,X=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=Y.r*$*E,m+=Y.g*$*E,_+=Y.b*$*E;else if(H.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(H.sh.coefficients[j],$);else if(H.isDirectionalLight){const j=t.get(H);if(j.color.copy(H.color).multiplyScalar(H.intensity*E),H.castShadow){const u0=H.shadow,l0=i.get(H);l0.shadowBias=u0.bias,l0.shadowNormalBias=u0.normalBias,l0.shadowRadius=u0.radius,l0.shadowMapSize=u0.mapSize,r.directionalShadow[v]=l0,r.directionalShadowMap[v]=X,r.directionalShadowMatrix[v]=H.shadow.matrix,M++}r.directional[v]=j,v++}else if(H.isSpotLight){const j=t.get(H);j.position.setFromMatrixPosition(H.matrixWorld),j.color.copy(Y).multiplyScalar($*E),j.distance=r0,j.coneCos=Math.cos(H.angle),j.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),j.decay=H.decay,r.spot[d]=j;const u0=H.shadow;if(H.map&&(r.spotLightMap[L]=H.map,L++,u0.updateMatrices(H),H.castShadow&&G++),r.spotLightMatrix[d]=u0.matrix,H.castShadow){const l0=i.get(H);l0.shadowBias=u0.bias,l0.shadowNormalBias=u0.normalBias,l0.shadowRadius=u0.radius,l0.shadowMapSize=u0.mapSize,r.spotShadow[d]=l0,r.spotShadowMap[d]=X,N++}d++}else if(H.isRectAreaLight){const j=t.get(H);j.color.copy(Y).multiplyScalar($),j.halfWidth.set(H.width*.5,0,0),j.halfHeight.set(0,H.height*.5,0),r.rectArea[T]=j,T++}else if(H.isPointLight){const j=t.get(H);if(j.color.copy(H.color).multiplyScalar(H.intensity*E),j.distance=H.distance,j.decay=H.decay,H.castShadow){const u0=H.shadow,l0=i.get(H);l0.shadowBias=u0.bias,l0.shadowNormalBias=u0.normalBias,l0.shadowRadius=u0.radius,l0.shadowMapSize=u0.mapSize,l0.shadowCameraNear=u0.camera.near,l0.shadowCameraFar=u0.camera.far,r.pointShadow[p]=l0,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=H.shadow.matrix,w++}r.point[p]=j,p++}else if(H.isHemisphereLight){const j=t.get(H);j.skyColor.copy(H.color).multiplyScalar($*E),j.groundColor.copy(H.groundColor).multiplyScalar($*E),r.hemi[y]=j,y++}}T>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_0.LTC_FLOAT_1,r.rectAreaLTC2=_0.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_0.LTC_HALF_1,r.rectAreaLTC2=_0.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const R=r.hash;(R.directionalLength!==v||R.pointLength!==p||R.spotLength!==d||R.rectAreaLength!==T||R.hemiLength!==y||R.numDirectionalShadows!==M||R.numPointShadows!==w||R.numSpotShadows!==N||R.numSpotMaps!==L)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=T,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=N+L-G,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=G,R.directionalLength=v,R.pointLength=p,R.spotLength=d,R.rectAreaLength=T,R.hemiLength=y,R.numDirectionalShadows=M,R.numPointShadows=w,R.numSpotShadows=N,R.numSpotMaps=L,r.version=Yc++)}function c(u,h){let f=0,m=0,_=0,v=0,p=0;const d=h.matrixWorldInverse;for(let T=0,y=u.length;T<y;T++){const M=u[T];if(M.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),f++}else if(M.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),_++}else if(M.isRectAreaLight){const w=r.rectArea[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function I8(n,e){const t=new Kc(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Zc(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new I8(n,e),t.set(s,[l])):o>=a.length?(l=new I8(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Jc extends Q2{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xr,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $c extends Q2{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eu=`uniform sampler2D shadow_pass;
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
}`;function tu(n,e,t){let i=new ot;const r=new f0,s=new f0,o=new p5,a=new Jc({depthPacking:qr}),l=new $c,c={},u=t.maxTextureSize,h={[G9]:C5,[C5]:G9,[o9]:o9},f=new u9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new f0},radius:{value:4}},vertexShader:Qc,fragmentShader:eu}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new N5;_.setAttribute("position",new l9(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new J5(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fe;let d=this.type;this.render=function(w,N,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const G=n.getRenderTarget(),E=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),a0=n.state;a0.setBlending(B9),a0.buffers.color.setClear(1,1,1,1),a0.buffers.depth.setTest(!0),a0.setScissorTest(!1);const h0=d!==y9&&this.type===y9,H=d===y9&&this.type!==y9;for(let Y=0,$=w.length;Y<$;Y++){const r0=w[Y],X=r0.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",r0,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const j=X.getFrameExtents();if(r.multiply(j),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,X.mapSize.y=s.y)),X.map===null||h0===!0||H===!0){const l0=this.type!==y9?{minFilter:b5,magFilter:b5}:{};X.map!==null&&X.map.dispose(),X.map=new l2(r.x,r.y,l0),X.map.texture.name=r0.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const u0=X.getViewportCount();for(let l0=0;l0<u0;l0++){const z=X.getViewport(l0);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),a0.viewport(o),X.updateMatrices(r0,l0),i=X.getFrustum(),M(N,L,X.camera,r0,this.type)}X.isPointLightShadow!==!0&&this.type===y9&&T(X,L),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(G,E,R)};function T(w,N){const L=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new l2(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(N,null,L,f,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(N,null,L,m,v,null)}function y(w,N,L,G){let E=null;const R=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)E=R;else if(E=L.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const a0=E.uuid,h0=N.uuid;let H=c[a0];H===void 0&&(H={},c[a0]=H);let Y=H[h0];Y===void 0&&(Y=E.clone(),H[h0]=Y),E=Y}if(E.visible=N.visible,E.wireframe=N.wireframe,G===y9?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:h[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const a0=n.properties.get(E);a0.light=L}return E}function M(w,N,L,G,E){if(w.visible===!1)return;if(w.layers.test(N.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===y9)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const h0=e.update(w),H=w.material;if(Array.isArray(H)){const Y=h0.groups;for(let $=0,r0=Y.length;$<r0;$++){const X=Y[$],j=H[X.materialIndex];if(j&&j.visible){const u0=y(w,j,G,E);n.renderBufferDirect(L,null,h0,u0,w,X)}}}else if(H.visible){const Y=y(w,H,G,E);n.renderBufferDirect(L,null,h0,Y,w,null)}}const a0=w.children;for(let h0=0,H=a0.length;h0<H;h0++)M(a0[h0],N,L,G,E)}}function nu(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const M0=new p5;let J=null;const d0=new p5(0,0,0,0);return{setMask:function(S0){J!==S0&&!D&&(n.colorMask(S0,S0,S0,S0),J=S0)},setLocked:function(S0){D=S0},setClear:function(S0,Y0,$0,c5,e9){e9===!0&&(S0*=c5,Y0*=c5,$0*=c5),M0.set(S0,Y0,$0,c5),d0.equals(M0)===!1&&(n.clearColor(S0,Y0,$0,c5),d0.copy(M0))},reset:function(){D=!1,J=null,d0.set(-1,0,0,0)}}}function s(){let D=!1,M0=null,J=null,d0=null;return{setTest:function(S0){S0?P0(n.DEPTH_TEST):R0(n.DEPTH_TEST)},setMask:function(S0){M0!==S0&&!D&&(n.depthMask(S0),M0=S0)},setFunc:function(S0){if(J!==S0){switch(S0){case Mr:n.depthFunc(n.NEVER);break;case Sr:n.depthFunc(n.ALWAYS);break;case Er:n.depthFunc(n.LESS);break;case k4:n.depthFunc(n.LEQUAL);break;case Tr:n.depthFunc(n.EQUAL);break;case br:n.depthFunc(n.GEQUAL);break;case Ar:n.depthFunc(n.GREATER);break;case wr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=S0}},setLocked:function(S0){D=S0},setClear:function(S0){d0!==S0&&(n.clearDepth(S0),d0=S0)},reset:function(){D=!1,M0=null,J=null,d0=null}}}function o(){let D=!1,M0=null,J=null,d0=null,S0=null,Y0=null,$0=null,c5=null,e9=null;return{setTest:function(e5){D||(e5?P0(n.STENCIL_TEST):R0(n.STENCIL_TEST))},setMask:function(e5){M0!==e5&&!D&&(n.stencilMask(e5),M0=e5)},setFunc:function(e5,t9,M5){(J!==e5||d0!==t9||S0!==M5)&&(n.stencilFunc(e5,t9,M5),J=e5,d0=t9,S0=M5)},setOp:function(e5,t9,M5){(Y0!==e5||$0!==t9||c5!==M5)&&(n.stencilOp(e5,t9,M5),Y0=e5,$0=t9,c5=M5)},setLocked:function(e5){D=e5},setClear:function(e5){e9!==e5&&(n.clearStencil(e5),e9=e5)},reset:function(){D=!1,M0=null,J=null,d0=null,S0=null,Y0=null,$0=null,c5=null,e9=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,v=[],p=null,d=!1,T=null,y=null,M=null,w=null,N=null,L=null,G=null,E=!1,R=null,a0=null,h0=null,H=null,Y=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let r0=!1,X=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),r0=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),r0=X>=2);let u0=null,l0={};const z=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),p0=new p5().fromArray(z),g0=new p5().fromArray(q);function y0(D,M0,J,d0){const S0=new Uint8Array(4),Y0=n.createTexture();n.bindTexture(D,Y0),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $0=0;$0<J;$0++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(M0,0,n.RGBA,1,1,d0,0,n.RGBA,n.UNSIGNED_BYTE,S0):n.texImage2D(M0+$0,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,S0);return Y0}const E0={};E0[n.TEXTURE_2D]=y0(n.TEXTURE_2D,n.TEXTURE_2D,1),E0[n.TEXTURE_CUBE_MAP]=y0(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(E0[n.TEXTURE_2D_ARRAY]=y0(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),E0[n.TEXTURE_3D]=y0(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),P0(n.DEPTH_TEST),l.setFunc(k4),U(!1),K(y6),P0(n.CULL_FACE),C(B9);function P0(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function R0(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function O0(D,M0){return m[D]!==M0?(n.bindFramebuffer(D,M0),m[D]=M0,i&&(D===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=M0),D===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=M0)),!0):!1}function j0(D,M0){let J=v,d0=!1;if(D)if(J=_.get(M0),J===void 0&&(J=[],_.set(M0,J)),D.isWebGLMultipleRenderTargets){const S0=D.texture;if(J.length!==S0.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Y0=0,$0=S0.length;Y0<$0;Y0++)J[Y0]=n.COLOR_ATTACHMENT0+Y0;J.length=S0.length,d0=!0}}else J[0]!==n.COLOR_ATTACHMENT0&&(J[0]=n.COLOR_ATTACHMENT0,d0=!0);else J[0]!==n.BACK&&(J[0]=n.BACK,d0=!0);d0&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function C0(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const g={[L2]:n.FUNC_ADD,[ur]:n.FUNC_SUBTRACT,[hr]:n.FUNC_REVERSE_SUBTRACT};if(i)g[T6]=n.MIN,g[b6]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(g[T6]=D.MIN_EXT,g[b6]=D.MAX_EXT)}const A={[fr]:n.ZERO,[dr]:n.ONE,[pr]:n.SRC_COLOR,[Be]:n.SRC_ALPHA,[yr]:n.SRC_ALPHA_SATURATE,[vr]:n.DST_COLOR,[gr]:n.DST_ALPHA,[mr]:n.ONE_MINUS_SRC_COLOR,[ze]:n.ONE_MINUS_SRC_ALPHA,[xr]:n.ONE_MINUS_DST_COLOR,[_r]:n.ONE_MINUS_DST_ALPHA};function C(D,M0,J,d0,S0,Y0,$0,c5){if(D===B9){d===!0&&(R0(n.BLEND),d=!1);return}if(d===!1&&(P0(n.BLEND),d=!0),D!==cr){if(D!==T||c5!==E){if((y!==L2||N!==L2)&&(n.blendEquation(n.FUNC_ADD),y=L2,N=L2),c5)switch(D){case z2:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case M6:n.blendFunc(n.ONE,n.ONE);break;case S6:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case E6:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case z2:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case M6:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case S6:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case E6:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,w=null,L=null,G=null,T=D,E=c5}return}S0=S0||M0,Y0=Y0||J,$0=$0||d0,(M0!==y||S0!==N)&&(n.blendEquationSeparate(g[M0],g[S0]),y=M0,N=S0),(J!==M||d0!==w||Y0!==L||$0!==G)&&(n.blendFuncSeparate(A[J],A[d0],A[Y0],A[$0]),M=J,w=d0,L=Y0,G=$0),T=D,E=!1}function I(D,M0){D.side===o9?R0(n.CULL_FACE):P0(n.CULL_FACE);let J=D.side===C5;M0&&(J=!J),U(J),D.blending===z2&&D.transparent===!1?C(B9):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const d0=D.stencilWrite;c.setTest(d0),d0&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),V(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?P0(n.SAMPLE_ALPHA_TO_COVERAGE):R0(n.SAMPLE_ALPHA_TO_COVERAGE)}function U(D){R!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),R=D)}function K(D){D!==or?(P0(n.CULL_FACE),D!==a0&&(D===y6?n.cullFace(n.BACK):D===ar?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):R0(n.CULL_FACE),a0=D}function Z(D){D!==h0&&(r0&&n.lineWidth(D),h0=D)}function V(D,M0,J){D?(P0(n.POLYGON_OFFSET_FILL),(H!==M0||Y!==J)&&(n.polygonOffset(M0,J),H=M0,Y=J)):R0(n.POLYGON_OFFSET_FILL)}function n0(D){D?P0(n.SCISSOR_TEST):R0(n.SCISSOR_TEST)}function Q(D){D===void 0&&(D=n.TEXTURE0+$-1),u0!==D&&(n.activeTexture(D),u0=D)}function m0(D,M0,J){J===void 0&&(u0===null?J=n.TEXTURE0+$-1:J=u0);let d0=l0[J];d0===void 0&&(d0={type:void 0,texture:void 0},l0[J]=d0),(d0.type!==D||d0.texture!==M0)&&(u0!==J&&(n.activeTexture(J),u0=J),n.bindTexture(D,M0||E0[D]),d0.type=D,d0.texture=M0)}function S(){const D=l0[u0];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function e0(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function o0(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function t0(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function c0(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function T0(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function A0(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function w0(D){p0.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),p0.copy(D))}function v0(D){g0.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),g0.copy(D))}function x0(D,M0){let J=h.get(M0);J===void 0&&(J=new WeakMap,h.set(M0,J));let d0=J.get(D);d0===void 0&&(d0=n.getUniformBlockIndex(M0,D.name),J.set(D,d0))}function L0(D,M0){const d0=h.get(M0).get(D);u.get(M0)!==d0&&(n.uniformBlockBinding(M0,d0,D.__bindingPointIndex),u.set(M0,d0))}function W0(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},u0=null,l0={},m={},_=new WeakMap,v=[],p=null,d=!1,T=null,y=null,M=null,w=null,N=null,L=null,G=null,E=!1,R=null,a0=null,h0=null,H=null,Y=null,p0.set(0,0,n.canvas.width,n.canvas.height),g0.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:P0,disable:R0,bindFramebuffer:O0,drawBuffers:j0,useProgram:C0,setBlending:C,setMaterial:I,setFlipSided:U,setCullFace:K,setLineWidth:Z,setPolygonOffset:V,setScissorTest:n0,activeTexture:Q,bindTexture:m0,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:T0,texImage3D:A0,updateUBOMapping:x0,uniformBlockBinding:L0,texStorage2D:c0,texStorage3D:W,texSubImage2D:e0,texSubImage3D:o0,compressedTexSubImage2D:P,compressedTexSubImage3D:t0,scissor:w0,viewport:v0,reset:W0}}function iu(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(S,x){return d?new OffscreenCanvas(S,x):M7("canvas")}function y(S,x,F,e0){let o0=1;if((S.width>e0||S.height>e0)&&(o0=e0/Math.max(S.width,S.height)),o0<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const P=x?Z4:Math.floor,t0=P(o0*S.width),c0=P(o0*S.height);v===void 0&&(v=T(t0,c0));const W=F?T(t0,c0):v;return W.width=t0,W.height=c0,W.getContext("2d").drawImage(S,0,0,t0,c0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+t0+"x"+c0+")."),W}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function M(S){return $6(S.width)&&$6(S.height)}function w(S){return a?!1:S.wrapS!==K5||S.wrapT!==K5||S.minFilter!==b5&&S.minFilter!==z5}function N(S,x){return S.generateMipmaps&&x&&S.minFilter!==b5&&S.minFilter!==z5}function L(S){n.generateMipmap(S)}function G(S,x,F,e0,o0=!1){if(a===!1)return x;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let P=x;return x===n.RED&&(F===n.FLOAT&&(P=n.R32F),F===n.HALF_FLOAT&&(P=n.R16F),F===n.UNSIGNED_BYTE&&(P=n.R8)),x===n.RG&&(F===n.FLOAT&&(P=n.RG32F),F===n.HALF_FLOAT&&(P=n.RG16F),F===n.UNSIGNED_BYTE&&(P=n.RG8)),x===n.RGBA&&(F===n.FLOAT&&(P=n.RGBA32F),F===n.HALF_FLOAT&&(P=n.RGBA16F),F===n.UNSIGNED_BYTE&&(P=e0===H0&&o0===!1?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)),(P===n.R16F||P===n.R32F||P===n.RG16F||P===n.RG32F||P===n.RGBA16F||P===n.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function E(S,x,F){return N(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==b5&&S.minFilter!==z5?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function R(S){return S===b5||S===A6||S===K7?n.NEAREST:n.LINEAR}function a0(S){const x=S.target;x.removeEventListener("dispose",a0),H(x),x.isVideoTexture&&_.delete(x)}function h0(S){const x=S.target;x.removeEventListener("dispose",h0),$(x)}function H(S){const x=i.get(S);if(x.__webglInit===void 0)return;const F=S.source,e0=p.get(F);if(e0){const o0=e0[x.__cacheKey];o0.usedTimes--,o0.usedTimes===0&&Y(S),Object.keys(e0).length===0&&p.delete(F)}i.remove(S)}function Y(S){const x=i.get(S);n.deleteTexture(x.__webglTexture);const F=S.source,e0=p.get(F);delete e0[x.__cacheKey],o.memory.textures--}function $(S){const x=S.texture,F=i.get(S),e0=i.get(x);if(e0.__webglTexture!==void 0&&(n.deleteTexture(e0.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let o0=0;o0<6;o0++)n.deleteFramebuffer(F.__webglFramebuffer[o0]),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[o0]);else{if(n.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let o0=0;o0<F.__webglColorRenderbuffer.length;o0++)F.__webglColorRenderbuffer[o0]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[o0]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let o0=0,P=x.length;o0<P;o0++){const t0=i.get(x[o0]);t0.__webglTexture&&(n.deleteTexture(t0.__webglTexture),o.memory.textures--),i.remove(x[o0])}i.remove(x),i.remove(S)}let r0=0;function X(){r0=0}function j(){const S=r0;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),r0+=1,S}function u0(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function l0(S,x){const F=i.get(S);if(S.isVideoTexture&&Q(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const e0=S.image;if(e0===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(e0.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O0(F,S,x);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function z(S,x){const F=i.get(S);if(S.version>0&&F.__version!==S.version){O0(F,S,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function q(S,x){const F=i.get(S);if(S.version>0&&F.__version!==S.version){O0(F,S,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function p0(S,x){const F=i.get(S);if(S.version>0&&F.__version!==S.version){j0(F,S,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const g0={[q4]:n.REPEAT,[K5]:n.CLAMP_TO_EDGE,[Y4]:n.MIRRORED_REPEAT},y0={[b5]:n.NEAREST,[A6]:n.NEAREST_MIPMAP_NEAREST,[K7]:n.NEAREST_MIPMAP_LINEAR,[z5]:n.LINEAR,[Ir]:n.LINEAR_MIPMAP_NEAREST,[M1]:n.LINEAR_MIPMAP_LINEAR},E0={[Zr]:n.NEVER,[is]:n.ALWAYS,[Jr]:n.LESS,[Qr]:n.LEQUAL,[$r]:n.EQUAL,[ns]:n.GEQUAL,[es]:n.GREATER,[ts]:n.NOTEQUAL};function P0(S,x,F){if(F?(n.texParameteri(S,n.TEXTURE_WRAP_S,g0[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,g0[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,g0[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,y0[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,y0[x.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==K5||x.wrapT!==K5)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,R(x.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==b5&&x.minFilter!==z5&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,E0[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const e0=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===b5||x.minFilter!==K7&&x.minFilter!==M1||x.type===I9&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===S1&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(S,e0.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function R0(S,x){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",a0));const e0=x.source;let o0=p.get(e0);o0===void 0&&(o0={},p.set(e0,o0));const P=u0(x);if(P!==S.__cacheKey){o0[P]===void 0&&(o0[P]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),o0[P].usedTimes++;const t0=o0[S.__cacheKey];t0!==void 0&&(o0[S.__cacheKey].usedTimes--,t0.usedTimes===0&&Y(x)),S.__cacheKey=P,S.__webglTexture=o0[P].texture}return F}function O0(S,x,F){let e0=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(e0=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(e0=n.TEXTURE_3D);const o0=R0(S,x),P=x.source;t.bindTexture(e0,S.__webglTexture,n.TEXTURE0+F);const t0=i.get(P);if(P.version!==t0.__version||o0===!0){t.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const c0=w(x)&&M(x.image)===!1;let W=y(x.image,c0,!1,u);W=m0(x,W);const T0=M(W)||a,A0=s.convert(x.format,x.colorSpace);let w0=s.convert(x.type),v0=G(x.internalFormat,A0,w0,x.colorSpace);P0(e0,x,T0);let x0;const L0=x.mipmaps,W0=a&&x.isVideoTexture!==!0,D=t0.__version===void 0||o0===!0,M0=E(x,W,T0);if(x.isDepthTexture)v0=n.DEPTH_COMPONENT,a?x.type===I9?v0=n.DEPTH_COMPONENT32F:x.type===D9?v0=n.DEPTH_COMPONENT24:x.type===r2?v0=n.DEPTH24_STENCIL8:v0=n.DEPTH_COMPONENT16:x.type===I9&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===s2&&v0===n.DEPTH_COMPONENT&&x.type!==P3&&x.type!==D9&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=D9,w0=s.convert(x.type)),x.format===Y2&&v0===n.DEPTH_COMPONENT&&(v0=n.DEPTH_STENCIL,x.type!==r2&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=r2,w0=s.convert(x.type))),D&&(W0?t.texStorage2D(n.TEXTURE_2D,1,v0,W.width,W.height):t.texImage2D(n.TEXTURE_2D,0,v0,W.width,W.height,0,A0,w0,null));else if(x.isDataTexture)if(L0.length>0&&T0){W0&&D&&t.texStorage2D(n.TEXTURE_2D,M0,v0,L0[0].width,L0[0].height);for(let J=0,d0=L0.length;J<d0;J++)x0=L0[J],W0?t.texSubImage2D(n.TEXTURE_2D,J,0,0,x0.width,x0.height,A0,w0,x0.data):t.texImage2D(n.TEXTURE_2D,J,v0,x0.width,x0.height,0,A0,w0,x0.data);x.generateMipmaps=!1}else W0?(D&&t.texStorage2D(n.TEXTURE_2D,M0,v0,W.width,W.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,W.width,W.height,A0,w0,W.data)):t.texImage2D(n.TEXTURE_2D,0,v0,W.width,W.height,0,A0,w0,W.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){W0&&D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,M0,v0,L0[0].width,L0[0].height,W.depth);for(let J=0,d0=L0.length;J<d0;J++)x0=L0[J],x.format!==Z5?A0!==null?W0?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,x0.width,x0.height,W.depth,A0,x0.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,v0,x0.width,x0.height,W.depth,0,x0.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W0?t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,x0.width,x0.height,W.depth,A0,w0,x0.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,v0,x0.width,x0.height,W.depth,0,A0,w0,x0.data)}else{W0&&D&&t.texStorage2D(n.TEXTURE_2D,M0,v0,L0[0].width,L0[0].height);for(let J=0,d0=L0.length;J<d0;J++)x0=L0[J],x.format!==Z5?A0!==null?W0?t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,x0.width,x0.height,A0,x0.data):t.compressedTexImage2D(n.TEXTURE_2D,J,v0,x0.width,x0.height,0,x0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W0?t.texSubImage2D(n.TEXTURE_2D,J,0,0,x0.width,x0.height,A0,w0,x0.data):t.texImage2D(n.TEXTURE_2D,J,v0,x0.width,x0.height,0,A0,w0,x0.data)}else if(x.isDataArrayTexture)W0?(D&&t.texStorage3D(n.TEXTURE_2D_ARRAY,M0,v0,W.width,W.height,W.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,A0,w0,W.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,v0,W.width,W.height,W.depth,0,A0,w0,W.data);else if(x.isData3DTexture)W0?(D&&t.texStorage3D(n.TEXTURE_3D,M0,v0,W.width,W.height,W.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,A0,w0,W.data)):t.texImage3D(n.TEXTURE_3D,0,v0,W.width,W.height,W.depth,0,A0,w0,W.data);else if(x.isFramebufferTexture){if(D)if(W0)t.texStorage2D(n.TEXTURE_2D,M0,v0,W.width,W.height);else{let J=W.width,d0=W.height;for(let S0=0;S0<M0;S0++)t.texImage2D(n.TEXTURE_2D,S0,v0,J,d0,0,A0,w0,null),J>>=1,d0>>=1}}else if(L0.length>0&&T0){W0&&D&&t.texStorage2D(n.TEXTURE_2D,M0,v0,L0[0].width,L0[0].height);for(let J=0,d0=L0.length;J<d0;J++)x0=L0[J],W0?t.texSubImage2D(n.TEXTURE_2D,J,0,0,A0,w0,x0):t.texImage2D(n.TEXTURE_2D,J,v0,A0,w0,x0);x.generateMipmaps=!1}else W0?(D&&t.texStorage2D(n.TEXTURE_2D,M0,v0,W.width,W.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,A0,w0,W)):t.texImage2D(n.TEXTURE_2D,0,v0,A0,w0,W);N(x,T0)&&L(e0),t0.__version=P.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function j0(S,x,F){if(x.image.length!==6)return;const e0=R0(S,x),o0=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+F);const P=i.get(o0);if(o0.version!==P.__version||e0===!0){t.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const t0=x.isCompressedTexture||x.image[0].isCompressedTexture,c0=x.image[0]&&x.image[0].isDataTexture,W=[];for(let J=0;J<6;J++)!t0&&!c0?W[J]=y(x.image[J],!1,!0,c):W[J]=c0?x.image[J].image:x.image[J],W[J]=m0(x,W[J]);const T0=W[0],A0=M(T0)||a,w0=s.convert(x.format,x.colorSpace),v0=s.convert(x.type),x0=G(x.internalFormat,w0,v0,x.colorSpace),L0=a&&x.isVideoTexture!==!0,W0=P.__version===void 0||e0===!0;let D=E(x,T0,A0);P0(n.TEXTURE_CUBE_MAP,x,A0);let M0;if(t0){L0&&W0&&t.texStorage2D(n.TEXTURE_CUBE_MAP,D,x0,T0.width,T0.height);for(let J=0;J<6;J++){M0=W[J].mipmaps;for(let d0=0;d0<M0.length;d0++){const S0=M0[d0];x.format!==Z5?w0!==null?L0?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,d0,0,0,S0.width,S0.height,w0,S0.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,d0,x0,S0.width,S0.height,0,S0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L0?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,d0,0,0,S0.width,S0.height,w0,v0,S0.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,d0,x0,S0.width,S0.height,0,w0,v0,S0.data)}}}else{M0=x.mipmaps,L0&&W0&&(M0.length>0&&D++,t.texStorage2D(n.TEXTURE_CUBE_MAP,D,x0,W[0].width,W[0].height));for(let J=0;J<6;J++)if(c0){L0?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,W[J].width,W[J].height,w0,v0,W[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,x0,W[J].width,W[J].height,0,w0,v0,W[J].data);for(let d0=0;d0<M0.length;d0++){const Y0=M0[d0].image[J].image;L0?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,d0+1,0,0,Y0.width,Y0.height,w0,v0,Y0.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,d0+1,x0,Y0.width,Y0.height,0,w0,v0,Y0.data)}}else{L0?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,w0,v0,W[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,x0,w0,v0,W[J]);for(let d0=0;d0<M0.length;d0++){const S0=M0[d0];L0?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,d0+1,0,0,w0,v0,S0.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,d0+1,x0,w0,v0,S0.image[J])}}}N(x,A0)&&L(n.TEXTURE_CUBE_MAP),P.__version=o0.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function C0(S,x,F,e0,o0){const P=s.convert(F.format,F.colorSpace),t0=s.convert(F.type),c0=G(F.internalFormat,P,t0,F.colorSpace);i.get(x).__hasExternalTextures||(o0===n.TEXTURE_3D||o0===n.TEXTURE_2D_ARRAY?t.texImage3D(o0,0,c0,x.width,x.height,x.depth,0,P,t0,null):t.texImage2D(o0,0,c0,x.width,x.height,0,P,t0,null)),t.bindFramebuffer(n.FRAMEBUFFER,S),n0(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,e0,o0,i.get(F).__webglTexture,0,V(x)):(o0===n.TEXTURE_2D||o0>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&o0<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,e0,o0,i.get(F).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(S,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let e0=n.DEPTH_COMPONENT16;if(F||n0(x)){const o0=x.depthTexture;o0&&o0.isDepthTexture&&(o0.type===I9?e0=n.DEPTH_COMPONENT32F:o0.type===D9&&(e0=n.DEPTH_COMPONENT24));const P=V(x);n0(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P,e0,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,P,e0,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,e0,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){const e0=V(x);F&&n0(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,e0,n.DEPTH24_STENCIL8,x.width,x.height):n0(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,e0,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{const e0=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let o0=0;o0<e0.length;o0++){const P=e0[o0],t0=s.convert(P.format,P.colorSpace),c0=s.convert(P.type),W=G(P.internalFormat,t0,c0,P.colorSpace),T0=V(x);F&&n0(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,T0,W,x.width,x.height):n0(x)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,T0,W,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function A(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),l0(x.depthTexture,0);const e0=i.get(x.depthTexture).__webglTexture,o0=V(x);if(x.depthTexture.format===s2)n0(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,e0,0,o0):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,e0,0);else if(x.depthTexture.format===Y2)n0(x)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,e0,0,o0):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,e0,0);else throw new Error("Unknown depthTexture format")}function C(S){const x=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");A(x.__webglFramebuffer,S)}else if(F){x.__webglDepthbuffer=[];for(let e0=0;e0<6;e0++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[e0]),x.__webglDepthbuffer[e0]=n.createRenderbuffer(),g(x.__webglDepthbuffer[e0],S,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),g(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(S,x,F){const e0=i.get(S);x!==void 0&&C0(e0.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),F!==void 0&&C(S)}function U(S){const x=S.texture,F=i.get(S),e0=i.get(x);S.addEventListener("dispose",h0),S.isWebGLMultipleRenderTargets!==!0&&(e0.__webglTexture===void 0&&(e0.__webglTexture=n.createTexture()),e0.__version=x.version,o.memory.textures++);const o0=S.isWebGLCubeRenderTarget===!0,P=S.isWebGLMultipleRenderTargets===!0,t0=M(S)||a;if(o0){F.__webglFramebuffer=[];for(let c0=0;c0<6;c0++)F.__webglFramebuffer[c0]=n.createFramebuffer()}else{if(F.__webglFramebuffer=n.createFramebuffer(),P)if(r.drawBuffers){const c0=S.texture;for(let W=0,T0=c0.length;W<T0;W++){const A0=i.get(c0[W]);A0.__webglTexture===void 0&&(A0.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&n0(S)===!1){const c0=P?x:[x];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let W=0;W<c0.length;W++){const T0=c0[W];F.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[W]);const A0=s.convert(T0.format,T0.colorSpace),w0=s.convert(T0.type),v0=G(T0.internalFormat,A0,w0,T0.colorSpace,S.isXRRenderTarget===!0),x0=V(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,x0,v0,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,F.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),g(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(o0){t.bindTexture(n.TEXTURE_CUBE_MAP,e0.__webglTexture),P0(n.TEXTURE_CUBE_MAP,x,t0);for(let c0=0;c0<6;c0++)C0(F.__webglFramebuffer[c0],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+c0);N(x,t0)&&L(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){const c0=S.texture;for(let W=0,T0=c0.length;W<T0;W++){const A0=c0[W],w0=i.get(A0);t.bindTexture(n.TEXTURE_2D,w0.__webglTexture),P0(n.TEXTURE_2D,A0,t0),C0(F.__webglFramebuffer,S,A0,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D),N(A0,t0)&&L(n.TEXTURE_2D)}t.unbindTexture()}else{let c0=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?c0=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(c0,e0.__webglTexture),P0(c0,x,t0),C0(F.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,c0),N(x,t0)&&L(c0),t.unbindTexture()}S.depthBuffer&&C(S)}function K(S){const x=M(S)||a,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let e0=0,o0=F.length;e0<o0;e0++){const P=F[e0];if(N(P,x)){const t0=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,c0=i.get(P).__webglTexture;t.bindTexture(t0,c0),L(t0),t.unbindTexture()}}}function Z(S){if(a&&S.samples>0&&n0(S)===!1){const x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,e0=S.height;let o0=n.COLOR_BUFFER_BIT;const P=[],t0=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,c0=i.get(S),W=S.isWebGLMultipleRenderTargets===!0;if(W)for(let T0=0;T0<x.length;T0++)t.bindFramebuffer(n.FRAMEBUFFER,c0.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+T0,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,c0.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+T0,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,c0.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,c0.__webglFramebuffer);for(let T0=0;T0<x.length;T0++){P.push(n.COLOR_ATTACHMENT0+T0),S.depthBuffer&&P.push(t0);const A0=c0.__ignoreDepthValues!==void 0?c0.__ignoreDepthValues:!1;if(A0===!1&&(S.depthBuffer&&(o0|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(o0|=n.STENCIL_BUFFER_BIT)),W&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,c0.__webglColorRenderbuffer[T0]),A0===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[t0]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[t0])),W){const w0=i.get(x[T0]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,w0,0)}n.blitFramebuffer(0,0,F,e0,0,0,F,e0,o0,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let T0=0;T0<x.length;T0++){t.bindFramebuffer(n.FRAMEBUFFER,c0.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+T0,n.RENDERBUFFER,c0.__webglColorRenderbuffer[T0]);const A0=i.get(x[T0]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,c0.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+T0,n.TEXTURE_2D,A0,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,c0.__webglMultisampledFramebuffer)}}function V(S){return Math.min(h,S.samples)}function n0(S){const x=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Q(S){const x=o.render.frame;_.get(S)!==x&&(_.set(S,x),S.update())}function m0(S,x){const F=S.colorSpace,e0=S.format,o0=S.type;return S.isCompressedTexture===!0||S.format===j4||F!==c9&&F!==a2&&(F===H0?a===!1?e.has("EXT_sRGB")===!0&&e0===Z5?(S.format=j4,S.minFilter=z5,S.generateMipmaps=!1):x=Je.sRGBToLinear(x):(e0!==Z5||o0!==z9)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=l0,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=p0,this.rebindTextures=I,this.setupRenderTarget=U,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=C0,this.useMultisampledRTT=n0}function ru(n,e,t){const i=t.isWebGL2;function r(s,o=a2){let a;if(s===z9)return n.UNSIGNED_BYTE;if(s===ke)return n.UNSIGNED_SHORT_4_4_4_4;if(s===We)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Or)return n.BYTE;if(s===Fr)return n.SHORT;if(s===P3)return n.UNSIGNED_SHORT;if(s===Ve)return n.INT;if(s===D9)return n.UNSIGNED_INT;if(s===I9)return n.FLOAT;if(s===S1)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Br)return n.ALPHA;if(s===Z5)return n.RGBA;if(s===zr)return n.LUMINANCE;if(s===Hr)return n.LUMINANCE_ALPHA;if(s===s2)return n.DEPTH_COMPONENT;if(s===Y2)return n.DEPTH_STENCIL;if(s===j4)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Gr)return n.RED;if(s===Xe)return n.RED_INTEGER;if(s===Vr)return n.RG;if(s===qe)return n.RG_INTEGER;if(s===Ye)return n.RGBA_INTEGER;if(s===Z7||s===J7||s===$7||s===Q7)if(o===H0)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Z7)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===J7)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$7)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Q7)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Z7)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===J7)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$7)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Q7)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===w6||s===P6||s===R6||s===C6)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===w6)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===P6)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===R6)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===C6)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kr)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===L6||s===N6)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===L6)return o===H0?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===N6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===U6||s===D6||s===I6||s===O6||s===F6||s===B6||s===z6||s===H6||s===G6||s===V6||s===k6||s===W6||s===X6||s===q6)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===U6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===D6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===I6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===O6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===F6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===B6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===z6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===H6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===G6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===V6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===k6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===W6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===X6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===q6)return o===H0?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===e4)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===e4)return o===H0?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Wr||s===Y6||s===j6||s===K6)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===e4)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Y6)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===j6)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===K6)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===r2?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class su extends H5{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class I2 extends w5{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ou={type:"move"};class T4{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new I2,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new I2,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new I2,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ou)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new I2;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class au extends F5{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:s2,u!==s2&&u!==Y2)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===s2&&(i=D9),i===void 0&&u===Y2&&(i=r2),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:b5,this.minFilter=l!==void 0?l:b5,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lu extends h2{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const v=t.getContextAttributes();let p=null,d=null;const T=[],y=[],M=new H5;M.layers.enable(1),M.viewport=new p5;const w=new H5;w.layers.enable(2),w.viewport=new p5;const N=[M,w],L=new su;L.layers.enable(1),L.layers.enable(2);let G=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=T[z];return q===void 0&&(q=new T4,T[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=T[z];return q===void 0&&(q=new T4,T[z]=q),q.getGripSpace()},this.getHand=function(z){let q=T[z];return q===void 0&&(q=new T4,T[z]=q),q.getHandSpace()};function R(z){const q=y.indexOf(z.inputSource);if(q===-1)return;const p0=T[q];p0!==void 0&&(p0.update(z.inputSource,z.frame,c||o),p0.dispatchEvent({type:z.type,data:z.inputSource}))}function a0(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",a0),r.removeEventListener("inputsourceschange",h0);for(let z=0;z<T.length;z++){const q=y[z];q!==null&&(y[z]=null,T[z].disconnect(q))}G=null,E=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,d=null,l0.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",a0),r.addEventListener("inputsourceschange",h0),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:m}),d=new l2(m.framebufferWidth,m.framebufferHeight,{format:Z5,type:z9,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let q=null,p0=null,g0=null;v.depth&&(g0=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=v.stencil?Y2:s2,p0=v.stencil?r2:D9);const y0={colorFormat:t.RGBA8,depthFormat:g0,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(y0),r.updateRenderState({layers:[f]}),d=new l2(f.textureWidth,f.textureHeight,{format:Z5,type:z9,depthTexture:new au(f.textureWidth,f.textureHeight,p0,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const E0=e.properties.get(d);E0.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),l0.setContext(r),l0.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function h0(z){for(let q=0;q<z.removed.length;q++){const p0=z.removed[q],g0=y.indexOf(p0);g0>=0&&(y[g0]=null,T[g0].disconnect(p0))}for(let q=0;q<z.added.length;q++){const p0=z.added[q];let g0=y.indexOf(p0);if(g0===-1){for(let E0=0;E0<T.length;E0++)if(E0>=y.length){y.push(p0),g0=E0;break}else if(y[E0]===null){y[E0]=p0,g0=E0;break}if(g0===-1)break}const y0=T[g0];y0&&y0.connect(p0)}}const H=new O,Y=new O;function $(z,q,p0){H.setFromMatrixPosition(q.matrixWorld),Y.setFromMatrixPosition(p0.matrixWorld);const g0=H.distanceTo(Y),y0=q.projectionMatrix.elements,E0=p0.projectionMatrix.elements,P0=y0[14]/(y0[10]-1),R0=y0[14]/(y0[10]+1),O0=(y0[9]+1)/y0[5],j0=(y0[9]-1)/y0[5],C0=(y0[8]-1)/y0[0],g=(E0[8]+1)/E0[0],A=P0*C0,C=P0*g,I=g0/(-C0+g),U=I*-C0;q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(U),z.translateZ(I),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const K=P0+I,Z=R0+I,V=A-U,n0=C+(g0-U),Q=O0*R0/Z*K,m0=j0*R0/Z*K;z.projectionMatrix.makePerspective(V,n0,Q,m0,K,Z),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function r0(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;L.near=w.near=M.near=z.near,L.far=w.far=M.far=z.far,(G!==L.near||E!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),G=L.near,E=L.far);const q=z.parent,p0=L.cameras;r0(L,q);for(let g0=0;g0<p0.length;g0++)r0(p0[g0],q);p0.length===2?$(L,M,w):L.projectionMatrix.copy(M.projectionMatrix),X(z,L,q)};function X(z,q,p0){p0===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(p0.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const g0=z.children;for(let y0=0,E0=g0.length;y0<E0;y0++)g0[y0].updateMatrixWorld(!0);z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=K4*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let j=null;function u0(z,q){if(u=q.getViewerPose(c||o),_=q,u!==null){const p0=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let g0=!1;p0.length!==L.cameras.length&&(L.cameras.length=0,g0=!0);for(let y0=0;y0<p0.length;y0++){const E0=p0[y0];let P0=null;if(m!==null)P0=m.getViewport(E0);else{const O0=h.getViewSubImage(f,E0);P0=O0.viewport,y0===0&&(e.setRenderTargetTextures(d,O0.colorTexture,f.ignoreDepthValues?void 0:O0.depthStencilTexture),e.setRenderTarget(d))}let R0=N[y0];R0===void 0&&(R0=new H5,R0.layers.enable(y0),R0.viewport=new p5,N[y0]=R0),R0.matrix.fromArray(E0.transform.matrix),R0.matrix.decompose(R0.position,R0.quaternion,R0.scale),R0.projectionMatrix.fromArray(E0.projectionMatrix),R0.projectionMatrixInverse.copy(R0.projectionMatrix).invert(),R0.viewport.set(P0.x,P0.y,P0.width,P0.height),y0===0&&(L.matrix.copy(R0.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),g0===!0&&L.cameras.push(R0)}}for(let p0=0;p0<T.length;p0++){const g0=y[p0],y0=T[p0];g0!==null&&y0!==void 0&&y0.update(g0,q,c||o)}j&&j(z,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const l0=new at;l0.setAnimationLoop(u0),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}}function cu(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,it(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,T,y,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),v(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,T,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===C5&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===C5&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const T=e.get(d).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const y=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,T,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===C5&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const T=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uu(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,y){const M=y.program;i.uniformBlockBinding(T,M)}function c(T,y){let M=r[T.id];M===void 0&&(_(T),M=u(T),r[T.id]=M,T.addEventListener("dispose",p));const w=y.program;i.updateUBOMapping(T,w);const N=e.render.frame;s[T.id]!==N&&(f(T),s[T.id]=N)}function u(T){const y=h();T.__bindingPointIndex=y;const M=n.createBuffer(),w=T.__size,N=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,w,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const y=r[T.id],M=T.uniforms,w=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let N=0,L=M.length;N<L;N++){const G=M[N];if(m(G,N,w)===!0){const E=G.__offset,R=Array.isArray(G.value)?G.value:[G.value];let a0=0;for(let h0=0;h0<R.length;h0++){const H=R[h0],Y=v(H);typeof H=="number"?(G.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,E+a0,G.__data)):H.isMatrix3?(G.__data[0]=H.elements[0],G.__data[1]=H.elements[1],G.__data[2]=H.elements[2],G.__data[3]=H.elements[0],G.__data[4]=H.elements[3],G.__data[5]=H.elements[4],G.__data[6]=H.elements[5],G.__data[7]=H.elements[0],G.__data[8]=H.elements[6],G.__data[9]=H.elements[7],G.__data[10]=H.elements[8],G.__data[11]=H.elements[0]):(H.toArray(G.__data,a0),a0+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,G.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,y,M){const w=T.value;if(M[y]===void 0){if(typeof w=="number")M[y]=w;else{const N=Array.isArray(w)?w:[w],L=[];for(let G=0;G<N.length;G++)L.push(N[G].clone());M[y]=L}return!0}else if(typeof w=="number"){if(M[y]!==w)return M[y]=w,!0}else{const N=Array.isArray(M[y])?M[y]:[M[y]],L=Array.isArray(w)?w:[w];for(let G=0;G<N.length;G++){const E=N[G];if(E.equals(L[G])===!1)return E.copy(L[G]),!0}}return!1}function _(T){const y=T.uniforms;let M=0;const w=16;let N=0;for(let L=0,G=y.length;L<G;L++){const E=y[L],R={boundary:0,storage:0},a0=Array.isArray(E.value)?E.value:[E.value];for(let h0=0,H=a0.length;h0<H;h0++){const Y=a0[h0],$=v(Y);R.boundary+=$.boundary,R.storage+=$.storage}if(E.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,L>0){N=M%w;const h0=w-N;N!==0&&h0-R.boundary<0&&(M+=w-N,E.__offset=M)}M+=R.storage}return N=M%w,N>0&&(M+=w-N),T.__size=M,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function p(T){const y=T.target;y.removeEventListener("dispose",p);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function hu(){const n=M7("canvas");return n.style.display="block",n}class ft{constructor(e={}){const{canvas:t=hu(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const d=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=H0,this.useLegacyLights=!0,this.toneMapping=T9,this.toneMappingExposure=1;const y=this;let M=!1,w=0,N=0,L=null,G=-1,E=null;const R=new p5,a0=new p5;let h0=null;const H=new K0(0);let Y=0,$=t.width,r0=t.height,X=1,j=null,u0=null;const l0=new p5(0,0,$,r0),z=new p5(0,0,$,r0);let q=!1;const p0=new ot;let g0=!1,y0=!1,E0=null;const P0=new s5,R0=new f0,O0=new O,j0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function C0(){return L===null?X:1}let g=i;function A(b,k){for(let i0=0;i0<b.length;i0++){const B=b[i0],s0=t.getContext(B,k);if(s0!==null)return s0}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${w3}`),t.addEventListener("webglcontextlost",M0,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",d0,!1),g===null){const k=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&k.shift(),g=A(k,b),g===null)throw A(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let C,I,U,K,Z,V,n0,Q,m0,S,x,F,e0,o0,P,t0,c0,W,T0,A0,w0,v0,x0,L0;function W0(){C=new Ml(g),I=new pl(g,C,e),C.init(I),v0=new ru(g,C,I),U=new nu(g,C,I),K=new Tl(g),Z=new Vc,V=new iu(g,C,U,Z,I,v0,K),n0=new gl(y),Q=new yl(y),m0=new Ns(g,I),x0=new fl(g,C,m0,I),S=new Sl(g,m0,K,x0),x=new Pl(g,S,m0,K),T0=new wl(g,I,V),t0=new ml(Z),F=new Gc(y,n0,Q,C,I,x0,t0),e0=new cu(y,Z),o0=new Wc,P=new Zc(C,I),W=new hl(y,n0,Q,U,x,f,l),c0=new tu(y,x,I),L0=new uu(g,K,I,U),A0=new dl(g,C,K,I),w0=new El(g,C,K,I),K.programs=F.programs,y.capabilities=I,y.extensions=C,y.properties=Z,y.renderLists=o0,y.shadowMap=c0,y.state=U,y.info=K}W0();const D=new lu(y,g);this.xr=D,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const b=C.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=C.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize($,r0,!1))},this.getSize=function(b){return b.set($,r0)},this.setSize=function(b,k,i0=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,r0=k,t.width=Math.floor(b*X),t.height=Math.floor(k*X),i0===!0&&(t.style.width=b+"px",t.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set($*X,r0*X).floor()},this.setDrawingBufferSize=function(b,k,i0){$=b,r0=k,X=i0,t.width=Math.floor(b*i0),t.height=Math.floor(k*i0),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(l0)},this.setViewport=function(b,k,i0,B){b.isVector4?l0.set(b.x,b.y,b.z,b.w):l0.set(b,k,i0,B),U.viewport(R.copy(l0).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,k,i0,B){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,k,i0,B),U.scissor(a0.copy(z).multiplyScalar(X).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(b){U.setScissorTest(q=b)},this.setOpaqueSort=function(b){j=b},this.setTransparentSort=function(b){u0=b},this.getClearColor=function(b){return b.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(b=!0,k=!0,i0=!0){let B=0;if(b){let s0=!1;if(L!==null){const b0=L.texture.format;s0=b0===Ye||b0===qe||b0===Xe}if(s0){const b0=L.texture.type,N0=b0===z9||b0===D9||b0===P3||b0===r2||b0===ke||b0===We,U0=W.getClearColor(),D0=W.getClearAlpha(),k0=U0.r,I0=U0.g,B0=U0.b;N0?(m[0]=k0,m[1]=I0,m[2]=B0,m[3]=D0,g.clearBufferuiv(g.COLOR,0,m)):(_[0]=k0,_[1]=I0,_[2]=B0,_[3]=D0,g.clearBufferiv(g.COLOR,0,_))}else B|=g.COLOR_BUFFER_BIT}k&&(B|=g.DEPTH_BUFFER_BIT),i0&&(B|=g.STENCIL_BUFFER_BIT),g.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",M0,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",d0,!1),o0.dispose(),P.dispose(),Z.dispose(),n0.dispose(),Q.dispose(),x.dispose(),x0.dispose(),L0.dispose(),F.dispose(),D.dispose(),D.removeEventListener("sessionstart",e5),D.removeEventListener("sessionend",t9),E0&&(E0.dispose(),E0=null),M5.stop()};function M0(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=K.autoReset,k=c0.enabled,i0=c0.autoUpdate,B=c0.needsUpdate,s0=c0.type;W0(),K.autoReset=b,c0.enabled=k,c0.autoUpdate=i0,c0.needsUpdate=B,c0.type=s0}function d0(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function S0(b){const k=b.target;k.removeEventListener("dispose",S0),Y0(k)}function Y0(b){$0(b),Z.remove(b)}function $0(b){const k=Z.get(b).programs;k!==void 0&&(k.forEach(function(i0){F.releaseProgram(i0)}),b.isShaderMaterial&&F.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,i0,B,s0,b0){k===null&&(k=j0);const N0=s0.isMesh&&s0.matrixWorld.determinant()<0,U0=Et(b,k,i0,B,s0);U.setMaterial(B,N0);let D0=i0.index,k0=1;B.wireframe===!0&&(D0=S.getWireframeAttribute(i0),k0=2);const I0=i0.drawRange,B0=i0.attributes.position;let t5=I0.start*k0,n5=(I0.start+I0.count)*k0;b0!==null&&(t5=Math.max(t5,b0.start*k0),n5=Math.min(n5,(b0.start+b0.count)*k0)),D0!==null?(t5=Math.max(t5,0),n5=Math.min(n5,D0.count)):B0!=null&&(t5=Math.max(t5,0),n5=Math.min(n5,B0.count));const G5=n5-t5;if(G5<0||G5===1/0)return;x0.setup(s0,B,U0,i0,D0);let f9,i5=A0;if(D0!==null&&(f9=m0.get(D0),i5=w0,i5.setIndex(f9)),s0.isMesh)B.wireframe===!0?(U.setLineWidth(B.wireframeLinewidth*C0()),i5.setMode(g.LINES)):i5.setMode(g.TRIANGLES);else if(s0.isLine){let X0=B.linewidth;X0===void 0&&(X0=1),U.setLineWidth(X0*C0()),s0.isLineSegments?i5.setMode(g.LINES):s0.isLineLoop?i5.setMode(g.LINE_LOOP):i5.setMode(g.LINE_STRIP)}else s0.isPoints?i5.setMode(g.POINTS):s0.isSprite&&i5.setMode(g.TRIANGLES);if(s0.isInstancedMesh)i5.renderInstances(t5,G5,s0.count);else if(i0.isInstancedBufferGeometry){const X0=i0._maxInstanceCount!==void 0?i0._maxInstanceCount:1/0,F7=Math.min(i0.instanceCount,X0);i5.renderInstances(t5,G5,F7)}else i5.render(t5,G5)},this.compile=function(b,k){function i0(B,s0,b0){B.transparent===!0&&B.side===o9&&B.forceSinglePass===!1?(B.side=C5,B.needsUpdate=!0,C1(B,s0,b0),B.side=G9,B.needsUpdate=!0,C1(B,s0,b0),B.side=o9):C1(B,s0,b0)}p=P.get(b),p.init(),T.push(p),b.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(y.useLegacyLights),b.traverse(function(B){const s0=B.material;if(s0)if(Array.isArray(s0))for(let b0=0;b0<s0.length;b0++){const N0=s0[b0];i0(N0,b,B)}else i0(s0,b,B)}),T.pop(),p=null};let c5=null;function e9(b){c5&&c5(b)}function e5(){M5.stop()}function t9(){M5.start()}const M5=new at;M5.setAnimationLoop(e9),typeof self<"u"&&M5.setContext(self),this.setAnimationLoop=function(b){c5=b,D.setAnimationLoop(b),b===null?M5.stop():M5.start()},D.addEventListener("sessionstart",e5),D.addEventListener("sessionend",t9),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(k),k=D.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,k,L),p=P.get(b,T.length),p.init(),T.push(p),P0.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),p0.setFromProjectionMatrix(P0),y0=this.localClippingEnabled,g0=t0.init(this.clippingPlanes,y0),v=o0.get(b,d.length),v.init(),d.push(v),z3(b,k,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(j,u0),this.info.render.frame++,g0===!0&&t0.beginShadows();const i0=p.state.shadowsArray;if(c0.render(i0,b,k),g0===!0&&t0.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(v,b),p.setupLights(y.useLegacyLights),k.isArrayCamera){const B=k.cameras;for(let s0=0,b0=B.length;s0<b0;s0++){const N0=B[s0];H3(v,b,N0,N0.viewport)}}else H3(v,b,k);L!==null&&(V.updateMultisampleRenderTarget(L),V.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(y,b,k),x0.resetDefaultState(),G=-1,E=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function z3(b,k,i0,B){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)i0=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||p0.intersectsSprite(b)){B&&O0.setFromMatrixPosition(b.matrixWorld).applyMatrix4(P0);const N0=x.update(b),U0=b.material;U0.visible&&v.push(b,N0,U0,i0,O0.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||p0.intersectsObject(b))){const N0=x.update(b),U0=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),O0.copy(b.boundingSphere.center)):(N0.boundingSphere===null&&N0.computeBoundingSphere(),O0.copy(N0.boundingSphere.center)),O0.applyMatrix4(b.matrixWorld).applyMatrix4(P0)),Array.isArray(U0)){const D0=N0.groups;for(let k0=0,I0=D0.length;k0<I0;k0++){const B0=D0[k0],t5=U0[B0.materialIndex];t5&&t5.visible&&v.push(b,N0,t5,i0,O0.z,B0)}}else U0.visible&&v.push(b,N0,U0,i0,O0.z,null)}}const b0=b.children;for(let N0=0,U0=b0.length;N0<U0;N0++)z3(b0[N0],k,i0,B)}function H3(b,k,i0,B){const s0=b.opaque,b0=b.transmissive,N0=b.transparent;p.setupLightsView(i0),g0===!0&&t0.setGlobalState(y.clippingPlanes,i0),b0.length>0&&St(s0,b0,k,i0),B&&U.viewport(R.copy(B)),s0.length>0&&R1(s0,k,i0),b0.length>0&&R1(b0,k,i0),N0.length>0&&R1(N0,k,i0),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function St(b,k,i0,B){const s0=I.isWebGL2;E0===null&&(E0=new l2(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")?S1:z9,minFilter:M1,samples:s0?4:0})),y.getDrawingBufferSize(R0),s0?E0.setSize(R0.x,R0.y):E0.setSize(Z4(R0.x),Z4(R0.y));const b0=y.getRenderTarget();y.setRenderTarget(E0),y.getClearColor(H),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear();const N0=y.toneMapping;y.toneMapping=T9,R1(b,i0,B),V.updateMultisampleRenderTarget(E0),V.updateRenderTargetMipmap(E0);let U0=!1;for(let D0=0,k0=k.length;D0<k0;D0++){const I0=k[D0],B0=I0.object,t5=I0.geometry,n5=I0.material,G5=I0.group;if(n5.side===o9&&B0.layers.test(B.layers)){const f9=n5.side;n5.side=C5,n5.needsUpdate=!0,G3(B0,i0,B,t5,n5,G5),n5.side=f9,n5.needsUpdate=!0,U0=!0}}U0===!0&&(V.updateMultisampleRenderTarget(E0),V.updateRenderTargetMipmap(E0)),y.setRenderTarget(b0),y.setClearColor(H,Y),y.toneMapping=N0}function R1(b,k,i0){const B=k.isScene===!0?k.overrideMaterial:null;for(let s0=0,b0=b.length;s0<b0;s0++){const N0=b[s0],U0=N0.object,D0=N0.geometry,k0=B===null?N0.material:B,I0=N0.group;U0.layers.test(i0.layers)&&G3(U0,k,i0,D0,k0,I0)}}function G3(b,k,i0,B,s0,b0){b.onBeforeRender(y,k,i0,B,s0,b0),b.modelViewMatrix.multiplyMatrices(i0.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),s0.onBeforeRender(y,k,i0,B,b,b0),s0.transparent===!0&&s0.side===o9&&s0.forceSinglePass===!1?(s0.side=C5,s0.needsUpdate=!0,y.renderBufferDirect(i0,k,B,s0,b,b0),s0.side=G9,s0.needsUpdate=!0,y.renderBufferDirect(i0,k,B,s0,b,b0),s0.side=o9):y.renderBufferDirect(i0,k,B,s0,b,b0),b.onAfterRender(y,k,i0,B,s0,b0)}function C1(b,k,i0){k.isScene!==!0&&(k=j0);const B=Z.get(b),s0=p.state.lights,b0=p.state.shadowsArray,N0=s0.state.version,U0=F.getParameters(b,s0.state,b0,k,i0),D0=F.getProgramCacheKey(U0);let k0=B.programs;B.environment=b.isMeshStandardMaterial?k.environment:null,B.fog=k.fog,B.envMap=(b.isMeshStandardMaterial?Q:n0).get(b.envMap||B.environment),k0===void 0&&(b.addEventListener("dispose",S0),k0=new Map,B.programs=k0);let I0=k0.get(D0);if(I0!==void 0){if(B.currentProgram===I0&&B.lightsStateVersion===N0)return V3(b,U0),I0}else U0.uniforms=F.getUniforms(b),b.onBuild(i0,U0,y),b.onBeforeCompile(U0,y),I0=F.acquireProgram(U0,D0),k0.set(D0,I0),B.uniforms=U0.uniforms;const B0=B.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(B0.clippingPlanes=t0.uniform),V3(b,U0),B.needsLights=bt(b),B.lightsStateVersion=N0,B.needsLights&&(B0.ambientLightColor.value=s0.state.ambient,B0.lightProbe.value=s0.state.probe,B0.directionalLights.value=s0.state.directional,B0.directionalLightShadows.value=s0.state.directionalShadow,B0.spotLights.value=s0.state.spot,B0.spotLightShadows.value=s0.state.spotShadow,B0.rectAreaLights.value=s0.state.rectArea,B0.ltc_1.value=s0.state.rectAreaLTC1,B0.ltc_2.value=s0.state.rectAreaLTC2,B0.pointLights.value=s0.state.point,B0.pointLightShadows.value=s0.state.pointShadow,B0.hemisphereLights.value=s0.state.hemi,B0.directionalShadowMap.value=s0.state.directionalShadowMap,B0.directionalShadowMatrix.value=s0.state.directionalShadowMatrix,B0.spotShadowMap.value=s0.state.spotShadowMap,B0.spotLightMatrix.value=s0.state.spotLightMatrix,B0.spotLightMap.value=s0.state.spotLightMap,B0.pointShadowMap.value=s0.state.pointShadowMap,B0.pointShadowMatrix.value=s0.state.pointShadowMatrix);const t5=I0.getUniforms(),n5=p7.seqWithValue(t5.seq,B0);return B.currentProgram=I0,B.uniformsList=n5,I0}function V3(b,k){const i0=Z.get(b);i0.outputColorSpace=k.outputColorSpace,i0.instancing=k.instancing,i0.skinning=k.skinning,i0.morphTargets=k.morphTargets,i0.morphNormals=k.morphNormals,i0.morphColors=k.morphColors,i0.morphTargetsCount=k.morphTargetsCount,i0.numClippingPlanes=k.numClippingPlanes,i0.numIntersection=k.numClipIntersection,i0.vertexAlphas=k.vertexAlphas,i0.vertexTangents=k.vertexTangents,i0.toneMapping=k.toneMapping}function Et(b,k,i0,B,s0){k.isScene!==!0&&(k=j0),V.resetTextureUnits();const b0=k.fog,N0=B.isMeshStandardMaterial?k.environment:null,U0=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:c9,D0=(B.isMeshStandardMaterial?Q:n0).get(B.envMap||N0),k0=B.vertexColors===!0&&!!i0.attributes.color&&i0.attributes.color.itemSize===4,I0=!!i0.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),B0=!!i0.morphAttributes.position,t5=!!i0.morphAttributes.normal,n5=!!i0.morphAttributes.color,G5=B.toneMapped?y.toneMapping:T9,f9=i0.morphAttributes.position||i0.morphAttributes.normal||i0.morphAttributes.color,i5=f9!==void 0?f9.length:0,X0=Z.get(B),F7=p.state.lights;if(g0===!0&&(y0===!0||b!==E)){const U5=b===E&&B.id===G;t0.setState(B,b,U5)}let u5=!1;B.version===X0.__version?(X0.needsLights&&X0.lightsStateVersion!==F7.state.version||X0.outputColorSpace!==U0||s0.isInstancedMesh&&X0.instancing===!1||!s0.isInstancedMesh&&X0.instancing===!0||s0.isSkinnedMesh&&X0.skinning===!1||!s0.isSkinnedMesh&&X0.skinning===!0||X0.envMap!==D0||B.fog===!0&&X0.fog!==b0||X0.numClippingPlanes!==void 0&&(X0.numClippingPlanes!==t0.numPlanes||X0.numIntersection!==t0.numIntersection)||X0.vertexAlphas!==k0||X0.vertexTangents!==I0||X0.morphTargets!==B0||X0.morphNormals!==t5||X0.morphColors!==n5||X0.toneMapping!==G5||I.isWebGL2===!0&&X0.morphTargetsCount!==i5)&&(u5=!0):(u5=!0,X0.__version=B.version);let V9=X0.currentProgram;u5===!0&&(V9=C1(B,k,s0));let k3=!1,t1=!1,B7=!1;const S5=V9.getUniforms(),k9=X0.uniforms;if(U.useProgram(V9.program)&&(k3=!0,t1=!0,B7=!0),B.id!==G&&(G=B.id,t1=!0),k3||E!==b){if(S5.setValue(g,"projectionMatrix",b.projectionMatrix),I.logarithmicDepthBuffer&&S5.setValue(g,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),E!==b&&(E=b,t1=!0,B7=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const U5=S5.map.cameraPosition;U5!==void 0&&U5.setValue(g,O0.setFromMatrixPosition(b.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&S5.setValue(g,"isOrthographic",b.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||s0.isSkinnedMesh)&&S5.setValue(g,"viewMatrix",b.matrixWorldInverse)}if(s0.isSkinnedMesh){S5.setOptional(g,s0,"bindMatrix"),S5.setOptional(g,s0,"bindMatrixInverse");const U5=s0.skeleton;U5&&(I.floatVertexTextures?(U5.boneTexture===null&&U5.computeBoneTexture(),S5.setValue(g,"boneTexture",U5.boneTexture,V),S5.setValue(g,"boneTextureSize",U5.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const z7=i0.morphAttributes;if((z7.position!==void 0||z7.normal!==void 0||z7.color!==void 0&&I.isWebGL2===!0)&&T0.update(s0,i0,V9),(t1||X0.receiveShadow!==s0.receiveShadow)&&(X0.receiveShadow=s0.receiveShadow,S5.setValue(g,"receiveShadow",s0.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(k9.envMap.value=D0,k9.flipEnvMap.value=D0.isCubeTexture&&D0.isRenderTargetTexture===!1?-1:1),t1&&(S5.setValue(g,"toneMappingExposure",y.toneMappingExposure),X0.needsLights&&Tt(k9,B7),b0&&B.fog===!0&&e0.refreshFogUniforms(k9,b0),e0.refreshMaterialUniforms(k9,B,X,r0,E0),p7.upload(g,X0.uniformsList,k9,V)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(p7.upload(g,X0.uniformsList,k9,V),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&S5.setValue(g,"center",s0.center),S5.setValue(g,"modelViewMatrix",s0.modelViewMatrix),S5.setValue(g,"normalMatrix",s0.normalMatrix),S5.setValue(g,"modelMatrix",s0.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const U5=B.uniformsGroups;for(let H7=0,At=U5.length;H7<At;H7++)if(I.isWebGL2){const W3=U5[H7];L0.update(W3,V9),L0.bind(W3,V9)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return V9}function Tt(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function bt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,k,i0){Z.get(b.texture).__webglTexture=k,Z.get(b.depthTexture).__webglTexture=i0;const B=Z.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=i0===void 0,B.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,k){const i0=Z.get(b);i0.__webglFramebuffer=k,i0.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,i0=0){L=b,w=k,N=i0;let B=!0,s0=null,b0=!1,N0=!1;if(b){const D0=Z.get(b);D0.__useDefaultFramebuffer!==void 0?(U.bindFramebuffer(g.FRAMEBUFFER,null),B=!1):D0.__webglFramebuffer===void 0?V.setupRenderTarget(b):D0.__hasExternalTextures&&V.rebindTextures(b,Z.get(b.texture).__webglTexture,Z.get(b.depthTexture).__webglTexture);const k0=b.texture;(k0.isData3DTexture||k0.isDataArrayTexture||k0.isCompressedArrayTexture)&&(N0=!0);const I0=Z.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(s0=I0[k],b0=!0):I.isWebGL2&&b.samples>0&&V.useMultisampledRTT(b)===!1?s0=Z.get(b).__webglMultisampledFramebuffer:s0=I0,R.copy(b.viewport),a0.copy(b.scissor),h0=b.scissorTest}else R.copy(l0).multiplyScalar(X).floor(),a0.copy(z).multiplyScalar(X).floor(),h0=q;if(U.bindFramebuffer(g.FRAMEBUFFER,s0)&&I.drawBuffers&&B&&U.drawBuffers(b,s0),U.viewport(R),U.scissor(a0),U.setScissorTest(h0),b0){const D0=Z.get(b.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+k,D0.__webglTexture,i0)}else if(N0){const D0=Z.get(b.texture),k0=k||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,D0.__webglTexture,i0||0,k0)}G=-1},this.readRenderTargetPixels=function(b,k,i0,B,s0,b0,N0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let U0=Z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&N0!==void 0&&(U0=U0[N0]),U0){U.bindFramebuffer(g.FRAMEBUFFER,U0);try{const D0=b.texture,k0=D0.format,I0=D0.type;if(k0!==Z5&&v0.convert(k0)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const B0=I0===S1&&(C.has("EXT_color_buffer_half_float")||I.isWebGL2&&C.has("EXT_color_buffer_float"));if(I0!==z9&&v0.convert(I0)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(I0===I9&&(I.isWebGL2||C.has("OES_texture_float")||C.has("WEBGL_color_buffer_float")))&&!B0){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-B&&i0>=0&&i0<=b.height-s0&&g.readPixels(k,i0,B,s0,v0.convert(k0),v0.convert(I0),b0)}finally{const D0=L!==null?Z.get(L).__webglFramebuffer:null;U.bindFramebuffer(g.FRAMEBUFFER,D0)}}},this.copyFramebufferToTexture=function(b,k,i0=0){const B=Math.pow(2,-i0),s0=Math.floor(k.image.width*B),b0=Math.floor(k.image.height*B);V.setTexture2D(k,0),g.copyTexSubImage2D(g.TEXTURE_2D,i0,0,0,b.x,b.y,s0,b0),U.unbindTexture()},this.copyTextureToTexture=function(b,k,i0,B=0){const s0=k.image.width,b0=k.image.height,N0=v0.convert(i0.format),U0=v0.convert(i0.type);V.setTexture2D(i0,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,i0.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i0.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,i0.unpackAlignment),k.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,B,b.x,b.y,s0,b0,N0,U0,k.image.data):k.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,B,b.x,b.y,k.mipmaps[0].width,k.mipmaps[0].height,N0,k.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,B,b.x,b.y,N0,U0,k.image),B===0&&i0.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),U.unbindTexture()},this.copyTextureToTexture3D=function(b,k,i0,B,s0=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const b0=b.max.x-b.min.x+1,N0=b.max.y-b.min.y+1,U0=b.max.z-b.min.z+1,D0=v0.convert(B.format),k0=v0.convert(B.type);let I0;if(B.isData3DTexture)V.setTexture3D(B,0),I0=g.TEXTURE_3D;else if(B.isDataArrayTexture)V.setTexture2DArray(B,0),I0=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,B.unpackAlignment);const B0=g.getParameter(g.UNPACK_ROW_LENGTH),t5=g.getParameter(g.UNPACK_IMAGE_HEIGHT),n5=g.getParameter(g.UNPACK_SKIP_PIXELS),G5=g.getParameter(g.UNPACK_SKIP_ROWS),f9=g.getParameter(g.UNPACK_SKIP_IMAGES),i5=i0.isCompressedTexture?i0.mipmaps[0]:i0.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,i5.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,i5.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,b.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,b.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,b.min.z),i0.isDataTexture||i0.isData3DTexture?g.texSubImage3D(I0,s0,k.x,k.y,k.z,b0,N0,U0,D0,k0,i5.data):i0.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(I0,s0,k.x,k.y,k.z,b0,N0,U0,D0,i5.data)):g.texSubImage3D(I0,s0,k.x,k.y,k.z,b0,N0,U0,D0,k0,i5),g.pixelStorei(g.UNPACK_ROW_LENGTH,B0),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,t5),g.pixelStorei(g.UNPACK_SKIP_PIXELS,n5),g.pixelStorei(g.UNPACK_SKIP_ROWS,G5),g.pixelStorei(g.UNPACK_SKIP_IMAGES,f9),s0===0&&B.generateMipmaps&&g.generateMipmap(I0),U.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?V.setTextureCube(b,0):b.isData3DTexture?V.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?V.setTexture2DArray(b,0):V.setTexture2D(b,0),U.unbindTexture()},this.resetState=function(){w=0,N=0,L=null,U.reset(),x0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return E9}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===H0?o2:je}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===o2?H0:c9}}class fu extends ft{}fu.prototype.isWebGL1Renderer=!0;class du extends w5{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class N3 extends Q2{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new K0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const O8=new O,F8=new O,B8=new s5,b4=new N7,r7=new w1;class dt extends w5{constructor(e=new N5,t=new N3){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)O8.fromBufferAttribute(t,r-1),F8.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=O8.distanceTo(F8);e.setAttribute("lineDistance",new y5(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),r7.copy(i.boundingSphere),r7.applyMatrix4(r),r7.radius+=s,e.ray.intersectsSphere(r7)===!1)return;B8.copy(r).invert(),b4.copy(e.ray).applyMatrix4(B8);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,h=new O,f=new O,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const d=Math.max(0,o.start),T=Math.min(_.count,o.start+o.count);for(let y=d,M=T-1;y<M;y+=m){const w=_.getX(y),N=_.getX(y+1);if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,N),b4.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(f);G<e.near||G>e.far||t.push({distance:G,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),T=Math.min(p.count,o.start+o.count);for(let y=d,M=T-1;y<M;y+=m){if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,y+1),b4.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class pu extends Q2{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const z8=new s5,$4=new N7,s7=new w1,o7=new O;class mu extends w5{constructor(e=new N5,t=new pu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),s7.copy(i.boundingSphere),s7.applyMatrix4(r),s7.radius+=s,e.ray.intersectsSphere(s7)===!1)return;z8.copy(r).invert(),$4.copy(e.ray).applyMatrix4(z8);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,v=m;_<v;_++){const p=c.getX(_);o7.fromBufferAttribute(h,p),H8(o7,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,v=m;_<v;_++)o7.fromBufferAttribute(h,_),H8(o7,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function H8(n,e,t,i,r,s,o){const a=$4.distanceSqToPoint(n);if(a<t){const l=new O;$4.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class h9{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,m=(o-u)/f;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new f0:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,r=[],s=[],o=[],a=new O,l=new s5;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(d5(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(d5(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class U3 extends h9{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new f0,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gu extends U3{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function D3(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const a7=new O,A4=new D3,w4=new D3,P4=new D3;class _u extends h9{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new O){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(a7.subVectors(r[0],r[1]).add(r[0]),c=a7);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(a7.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=a7),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),A4.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,v,p),w4.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,v,p),P4.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,v,p)}else this.curveType==="catmullrom"&&(A4.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),w4.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),P4.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(A4.calc(l),w4.calc(l),P4.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function G8(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function vu(n,e){const t=1-n;return t*t*e}function xu(n,e){return 2*(1-n)*n*e}function yu(n,e){return n*n*e}function p1(n,e,t,i){return vu(n,e)+xu(n,t)+yu(n,i)}function Mu(n,e){const t=1-n;return t*t*t*e}function Su(n,e){const t=1-n;return 3*t*t*n*e}function Eu(n,e){return 3*(1-n)*n*n*e}function Tu(n,e){return n*n*n*e}function m1(n,e,t,i,r){return Mu(n,e)+Su(n,t)+Eu(n,i)+Tu(n,r)}class pt extends h9{constructor(e=new f0,t=new f0,i=new f0,r=new f0){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new f0){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(m1(e,r.x,s.x,o.x,a.x),m1(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bu extends h9{constructor(e=new O,t=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new O){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(m1(e,r.x,s.x,o.x,a.x),m1(e,r.y,s.y,o.y,a.y),m1(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class I3 extends h9{constructor(e=new f0,t=new f0){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new f0){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new f0){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Au extends h9{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mt extends h9{constructor(e=new f0,t=new f0,i=new f0){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new f0){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(p1(e,r.x,s.x,o.x),p1(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gt extends h9{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(p1(e,r.x,s.x,o.x),p1(e,r.y,s.y,o.y),p1(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _t extends h9{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new f0){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(G8(a,l.x,c.x,u.x,h.x),G8(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new f0().fromArray(r))}return this}}var vt=Object.freeze({__proto__:null,ArcCurve:gu,CatmullRomCurve3:_u,CubicBezierCurve:pt,CubicBezierCurve3:bu,EllipseCurve:U3,LineCurve:I3,LineCurve3:Au,QuadraticBezierCurve:mt,QuadraticBezierCurve3:gt,SplineCurve:_t});class wu extends h9{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new I3(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new vt[r.type]().fromJSON(r))}return this}}class Q4 extends wu{constructor(e){super(),this.type="Path",this.currentPoint=new f0,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new I3(this.currentPoint.clone(),new f0(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new mt(this.currentPoint.clone(),new f0(e,t),new f0(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new pt(this.currentPoint.clone(),new f0(e,t),new f0(i,r),new f0(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new _t(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new U3(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class G2 extends Q4{constructor(e){super(e),this.uuid=$2(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Q4().fromJSON(r))}return this}}const Pu={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=xt(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,m;if(i&&(s=Uu(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let _=t;_<r;_+=t)h=n[_],f=n[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return E1(s,o,t,a,l,m,0),o}};function xt(n,e,t,i,r){let s,o;if(r===Wu(n,e,t,i)>0)for(s=e;s<t;s+=i)o=V8(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=V8(s,n[s],n[s+1],o);return o&&O7(o,o.next)&&(b1(o),o=o.next),o}function u2(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(O7(t,t.next)||Q0(t.prev,t,t.next)===0)){if(b1(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function E1(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Bu(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?Cu(n,i,r,s):Ru(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),b1(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Lu(u2(n),e,t),E1(n,e,t,i,r,s,2)):o===2&&Nu(n,e,t,i,r,s):E1(u2(n),e,t,i,r,s,1);break}}}function Ru(n){const e=n.prev,t=n,i=n.next;if(Q0(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=m&&O2(r,a,s,l,o,c,_.x,_.y)&&Q0(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Cu(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Q0(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,v=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,d=e3(m,_,e,t,i),T=e3(v,p,e,t,i);let y=n.prevZ,M=n.nextZ;for(;y&&y.z>=d&&M&&M.z<=T;){if(y.x>=m&&y.x<=v&&y.y>=_&&y.y<=p&&y!==r&&y!==o&&O2(a,u,l,h,c,f,y.x,y.y)&&Q0(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=m&&M.x<=v&&M.y>=_&&M.y<=p&&M!==r&&M!==o&&O2(a,u,l,h,c,f,M.x,M.y)&&Q0(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=d;){if(y.x>=m&&y.x<=v&&y.y>=_&&y.y<=p&&y!==r&&y!==o&&O2(a,u,l,h,c,f,y.x,y.y)&&Q0(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=T;){if(M.x>=m&&M.x<=v&&M.y>=_&&M.y<=p&&M!==r&&M!==o&&O2(a,u,l,h,c,f,M.x,M.y)&&Q0(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Lu(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!O7(r,s)&&yt(r,i,i.next,s)&&T1(r,s)&&T1(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),b1(i),b1(i.next),i=n=s),i=i.next}while(i!==n);return u2(i)}function Nu(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gu(o,a)){let l=Mt(o,a);o=u2(o,o.next),l=u2(l,l.next),E1(o,e,t,i,r,s,0),E1(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Uu(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=xt(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Hu(c));for(r.sort(Du),s=0;s<r.length;s++)t=Iu(r[s],t);return t}function Du(n,e){return n.x-e.x}function Iu(n,e){const t=Ou(n,e);if(!t)return e;const i=Mt(t,n);return u2(i,i.next),u2(t,t.next)}function Ou(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&O2(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),T1(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&Fu(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function Fu(n,e){return Q0(n.prev,n,e.prev)<0&&Q0(e.next,n,n.next)<0}function Bu(n,e,t,i){let r=n;do r.z===0&&(r.z=e3(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,zu(r)}function zu(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function e3(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Hu(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function O2(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Gu(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Vu(n,e)&&(T1(n,e)&&T1(e,n)&&ku(n,e)&&(Q0(n.prev,n,e.prev)||Q0(n,e.prev,e))||O7(n,e)&&Q0(n.prev,n,n.next)>0&&Q0(e.prev,e,e.next)>0)}function Q0(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function O7(n,e){return n.x===e.x&&n.y===e.y}function yt(n,e,t,i){const r=c7(Q0(n,e,t)),s=c7(Q0(n,e,i)),o=c7(Q0(t,i,n)),a=c7(Q0(t,i,e));return!!(r!==s&&o!==a||r===0&&l7(n,t,e)||s===0&&l7(n,i,e)||o===0&&l7(t,n,i)||a===0&&l7(t,e,i))}function l7(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function c7(n){return n>0?1:n<0?-1:0}function Vu(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&yt(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function T1(n,e){return Q0(n.prev,n,n.next)<0?Q0(n,e,n.next)>=0&&Q0(n,n.prev,e)>=0:Q0(n,e,n.prev)<0||Q0(n,n.next,e)<0}function ku(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Mt(n,e){const t=new t3(n.i,n.x,n.y),i=new t3(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function V8(n,e,t,i){const r=new t3(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function b1(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function t3(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wu(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class b9{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return b9.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];k8(e),W8(i,e);let o=e.length;t.forEach(k8);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,W8(i,t[l]);const a=Pu.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function k8(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function W8(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class O3 extends N5{constructor(e=new G2([new f0(.5,.5),new f0(-.5,.5),new f0(-.5,-.5),new f0(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new y5(r,3)),this.setAttribute("uv",new y5(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Xu;let y,M=!1,w,N,L,G;d&&(y=d.getSpacedPoints(u),M=!0,f=!1,w=d.computeFrenetFrames(u,!1),N=new O,L=new O,G=new O),f||(p=0,m=0,_=0,v=0);const E=a.extractPoints(c);let R=E.shape;const a0=E.holes;if(!b9.isClockWise(R)){R=R.reverse();for(let g=0,A=a0.length;g<A;g++){const C=a0[g];b9.isClockWise(C)&&(a0[g]=C.reverse())}}const H=b9.triangulateShape(R,a0),Y=R;for(let g=0,A=a0.length;g<A;g++){const C=a0[g];R=R.concat(C)}function $(g,A,C){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),g.clone().addScaledVector(A,C)}const r0=R.length,X=H.length;function j(g,A,C){let I,U,K;const Z=g.x-A.x,V=g.y-A.y,n0=C.x-g.x,Q=C.y-g.y,m0=Z*Z+V*V,S=Z*Q-V*n0;if(Math.abs(S)>Number.EPSILON){const x=Math.sqrt(m0),F=Math.sqrt(n0*n0+Q*Q),e0=A.x-V/x,o0=A.y+Z/x,P=C.x-Q/F,t0=C.y+n0/F,c0=((P-e0)*Q-(t0-o0)*n0)/(Z*Q-V*n0);I=e0+Z*c0-g.x,U=o0+V*c0-g.y;const W=I*I+U*U;if(W<=2)return new f0(I,U);K=Math.sqrt(W/2)}else{let x=!1;Z>Number.EPSILON?n0>Number.EPSILON&&(x=!0):Z<-Number.EPSILON?n0<-Number.EPSILON&&(x=!0):Math.sign(V)===Math.sign(Q)&&(x=!0),x?(I=-V,U=Z,K=Math.sqrt(m0)):(I=Z,U=V,K=Math.sqrt(m0/2))}return new f0(I/K,U/K)}const u0=[];for(let g=0,A=Y.length,C=A-1,I=g+1;g<A;g++,C++,I++)C===A&&(C=0),I===A&&(I=0),u0[g]=j(Y[g],Y[C],Y[I]);const l0=[];let z,q=u0.concat();for(let g=0,A=a0.length;g<A;g++){const C=a0[g];z=[];for(let I=0,U=C.length,K=U-1,Z=I+1;I<U;I++,K++,Z++)K===U&&(K=0),Z===U&&(Z=0),z[I]=j(C[I],C[K],C[Z]);l0.push(z),q=q.concat(z)}for(let g=0;g<p;g++){const A=g/p,C=m*Math.cos(A*Math.PI/2),I=_*Math.sin(A*Math.PI/2)+v;for(let U=0,K=Y.length;U<K;U++){const Z=$(Y[U],u0[U],I);P0(Z.x,Z.y,-C)}for(let U=0,K=a0.length;U<K;U++){const Z=a0[U];z=l0[U];for(let V=0,n0=Z.length;V<n0;V++){const Q=$(Z[V],z[V],I);P0(Q.x,Q.y,-C)}}}const p0=_+v;for(let g=0;g<r0;g++){const A=f?$(R[g],q[g],p0):R[g];M?(L.copy(w.normals[0]).multiplyScalar(A.x),N.copy(w.binormals[0]).multiplyScalar(A.y),G.copy(y[0]).add(L).add(N),P0(G.x,G.y,G.z)):P0(A.x,A.y,0)}for(let g=1;g<=u;g++)for(let A=0;A<r0;A++){const C=f?$(R[A],q[A],p0):R[A];M?(L.copy(w.normals[g]).multiplyScalar(C.x),N.copy(w.binormals[g]).multiplyScalar(C.y),G.copy(y[g]).add(L).add(N),P0(G.x,G.y,G.z)):P0(C.x,C.y,h/u*g)}for(let g=p-1;g>=0;g--){const A=g/p,C=m*Math.cos(A*Math.PI/2),I=_*Math.sin(A*Math.PI/2)+v;for(let U=0,K=Y.length;U<K;U++){const Z=$(Y[U],u0[U],I);P0(Z.x,Z.y,h+C)}for(let U=0,K=a0.length;U<K;U++){const Z=a0[U];z=l0[U];for(let V=0,n0=Z.length;V<n0;V++){const Q=$(Z[V],z[V],I);M?P0(Q.x,Q.y+y[u-1].y,y[u-1].x+C):P0(Q.x,Q.y,h+C)}}}g0(),y0();function g0(){const g=r.length/3;if(f){let A=0,C=r0*A;for(let I=0;I<X;I++){const U=H[I];R0(U[2]+C,U[1]+C,U[0]+C)}A=u+p*2,C=r0*A;for(let I=0;I<X;I++){const U=H[I];R0(U[0]+C,U[1]+C,U[2]+C)}}else{for(let A=0;A<X;A++){const C=H[A];R0(C[2],C[1],C[0])}for(let A=0;A<X;A++){const C=H[A];R0(C[0]+r0*u,C[1]+r0*u,C[2]+r0*u)}}i.addGroup(g,r.length/3-g,0)}function y0(){const g=r.length/3;let A=0;E0(Y,A),A+=Y.length;for(let C=0,I=a0.length;C<I;C++){const U=a0[C];E0(U,A),A+=U.length}i.addGroup(g,r.length/3-g,1)}function E0(g,A){let C=g.length;for(;--C>=0;){const I=C;let U=C-1;U<0&&(U=g.length-1);for(let K=0,Z=u+p*2;K<Z;K++){const V=r0*K,n0=r0*(K+1),Q=A+I+V,m0=A+U+V,S=A+U+n0,x=A+I+n0;O0(Q,m0,S,x)}}}function P0(g,A,C){l.push(g),l.push(A),l.push(C)}function R0(g,A,C){j0(g),j0(A),j0(C);const I=r.length/3,U=T.generateTopUV(i,r,I-3,I-2,I-1);C0(U[0]),C0(U[1]),C0(U[2])}function O0(g,A,C,I){j0(g),j0(A),j0(I),j0(A),j0(C),j0(I);const U=r.length/3,K=T.generateSideWallUV(i,r,U-6,U-3,U-2,U-1);C0(K[0]),C0(K[1]),C0(K[3]),C0(K[1]),C0(K[2]),C0(K[3])}function j0(g){r.push(l[g*3+0]),r.push(l[g*3+1]),r.push(l[g*3+2])}function C0(g){s.push(g.x),s.push(g.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return qu(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new vt[r.type]().fromJSON(r)),new O3(i,e.options)}}const Xu={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new f0(s,o),new f0(a,l),new f0(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[r*3],m=e[r*3+1],_=e[r*3+2],v=e[s*3],p=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new f0(o,1-l),new f0(c,1-h),new f0(f,1-_),new f0(v,1-d)]:[new f0(a,1-l),new f0(u,1-h),new f0(m,1-_),new f0(p,1-d)]}};function qu(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class F3 extends N5{constructor(e=new G2([new f0(0,.5),new f0(-.5,-.5),new f0(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new y5(r,3)),this.setAttribute("normal",new y5(s,3)),this.setAttribute("uv",new y5(o,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let m=f.shape;const _=f.holes;b9.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=_.length;p<d;p++){const T=_[p];b9.isClockWise(T)===!0&&(_[p]=T.reverse())}const v=b9.triangulateShape(m,_);for(let p=0,d=_.length;p<d;p++){const T=_[p];m=m.concat(T)}for(let p=0,d=m.length;p<d;p++){const T=m[p];r.push(T.x,T.y,0),s.push(0,0,1),o.push(T.x,T.y)}for(let p=0,d=v.length;p<d;p++){const T=v[p],y=T[0]+h,M=T[1]+h,w=T[2]+h;i.push(y,M,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Yu(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new F3(i,e.curveSegments)}}function Yu(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}const X8={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ju{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const Ku=new ju;class B3{constructor(e){this.manager=e!==void 0?e:Ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}B3.DEFAULT_MATERIAL_NAME="__DEFAULT";const x9={};class Zu extends Error{constructor(e,t){super(e),this.response=t}}class Ju extends B3{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=X8.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(x9[e]!==void 0){x9[e].push({onLoad:t,onProgress:i,onError:r});return}x9[e]=[],x9[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=x9[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0;let v=0;const p=new ReadableStream({start(d){T();function T(){h.read().then(({done:y,value:M})=>{if(y)d.close();else{v+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let N=0,L=u.length;N<L;N++){const G=u[N];G.onProgress&&G.onProgress(w)}d.enqueue(M),T()}})}}});return new Response(p)}else throw new Zu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{X8.add(e,c);const u=x9[e];delete x9[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=x9[e];if(u===void 0)throw this.manager.itemError(e),c;delete x9[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $u{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=q8(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=q8();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function q8(){return(typeof performance>"u"?Date:performance).now()}class Qu{constructor(e,t,i=0,r=1/0){this.ray=new N7(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new R3,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return n3(e,this,i,t),i.sort(Y8),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)n3(e[r],this,i,t);return i.sort(Y8),i}}function Y8(n,e){return n.distance-e.distance}function n3(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)n3(r[s],e,t,!0)}}class j8{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(d5(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class eh{constructor(){this.type="ShapePath",this.color=new K0,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Q4,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const T=[];for(let y=0,M=d.length;y<M;y++){const w=d[y],N=new G2;N.curves=w.curves,T.push(N)}return T}function i(d,T){const y=T.length;let M=!1;for(let w=y-1,N=0;N<y;w=N++){let L=T[w],G=T[N],E=G.x-L.x,R=G.y-L.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(L=T[N],E=-E,G=T[w],R=-R),d.y<L.y||d.y>G.y)continue;if(d.y===L.y){if(d.x===L.x)return!0}else{const a0=R*(d.x-L.x)-E*(d.y-L.y);if(a0===0)return!0;if(a0<0)continue;M=!M}}else{if(d.y!==L.y)continue;if(G.x<=d.x&&d.x<=L.x||L.x<=d.x&&d.x<=G.x)return!0}}return M}const r=b9.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new G2,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let m=[],_=0,v;f[_]=void 0,m[_]=[];for(let d=0,T=s.length;d<T;d++)a=s[d],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new G2,p:v},f[_].s.curves=a.curves,u&&_++,m[_]=[]):m[_].push({h:a,p:v[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,T=0;for(let y=0,M=f.length;y<M;y++)h[y]=[];for(let y=0,M=f.length;y<M;y++){const w=m[y];for(let N=0;N<w.length;N++){const L=w[N];let G=!0;for(let E=0;E<f.length;E++)i(L.p,f[E].p)&&(y!==E&&T++,G?(G=!1,h[E].push(L)):d=!0);G&&h[y].push(L)}}T>0&&d===!1&&(m=h)}let p;for(let d=0,T=f.length;d<T;d++){l=f[d].s,c.push(l),p=m[d];for(let y=0,M=p.length;y<M;y++)l.holes.push(p[y].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:w3}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=w3);const K8={type:"change"},R4={type:"start"},Z8={type:"end"};class th extends h2{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:d2.ROTATE,MIDDLE:d2.DOLLY,RIGHT:d2.PAN},this.touches={ONE:p2.ROTATE,TWO:p2.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",n0),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",n0),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(K8),i.update(),s=r.NONE},this.update=function(){const P=new O,t0=new c2().setFromUnitVectors(e.up,new O(0,1,0)),c0=t0.clone().invert(),W=new O,T0=new c2,A0=new O,w0=2*Math.PI;return function(){const x0=i.object.position;P.copy(x0).sub(i.target),P.applyQuaternion(t0),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&E(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let L0=i.minAzimuthAngle,W0=i.maxAzimuthAngle;return isFinite(L0)&&isFinite(W0)&&(L0<-Math.PI?L0+=w0:L0>Math.PI&&(L0-=w0),W0<-Math.PI?W0+=w0:W0>Math.PI&&(W0-=w0),L0<=W0?a.theta=Math.max(L0,Math.min(W0,a.theta)):a.theta=a.theta>(L0+W0)/2?Math.max(L0,a.theta):Math.min(W0,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),P.setFromSpherical(a),P.applyQuaternion(c0),x0.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||W.distanceToSquared(i.object.position)>o||8*(1-T0.dot(i.object.quaternion))>o||A0.distanceToSquared(i.target)>0?(i.dispatchEvent(K8),W.copy(i.object.position),T0.copy(i.object.quaternion),A0.copy(i.target),h=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",S),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",U),i.domElement.removeEventListener("wheel",V),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",U),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",n0),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new j8,l=new j8;let c=1;const u=new O;let h=!1;const f=new f0,m=new f0,_=new f0,v=new f0,p=new f0,d=new f0,T=new f0,y=new f0,M=new f0,w=[],N={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function G(){return Math.pow(.95,i.zoomSpeed)}function E(P){l.theta-=P}function R(P){l.phi-=P}const a0=function(){const P=new O;return function(c0,W){P.setFromMatrixColumn(W,0),P.multiplyScalar(-c0),u.add(P)}}(),h0=function(){const P=new O;return function(c0,W){i.screenSpacePanning===!0?P.setFromMatrixColumn(W,1):(P.setFromMatrixColumn(W,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(c0),u.add(P)}}(),H=function(){const P=new O;return function(c0,W){const T0=i.domElement;if(i.object.isPerspectiveCamera){const A0=i.object.position;P.copy(A0).sub(i.target);let w0=P.length();w0*=Math.tan(i.object.fov/2*Math.PI/180),a0(2*c0*w0/T0.clientHeight,i.object.matrix),h0(2*W*w0/T0.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(a0(c0*(i.object.right-i.object.left)/i.object.zoom/T0.clientWidth,i.object.matrix),h0(W*(i.object.top-i.object.bottom)/i.object.zoom/T0.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(P){i.object.isPerspectiveCamera?c/=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*P)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(P){i.object.isPerspectiveCamera?c*=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/P)),i.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function r0(P){f.set(P.clientX,P.clientY)}function X(P){T.set(P.clientX,P.clientY)}function j(P){v.set(P.clientX,P.clientY)}function u0(P){m.set(P.clientX,P.clientY),_.subVectors(m,f).multiplyScalar(i.rotateSpeed);const t0=i.domElement;E(2*Math.PI*_.x/t0.clientHeight),R(2*Math.PI*_.y/t0.clientHeight),f.copy(m),i.update()}function l0(P){y.set(P.clientX,P.clientY),M.subVectors(y,T),M.y>0?Y(G()):M.y<0&&$(G()),T.copy(y),i.update()}function z(P){p.set(P.clientX,P.clientY),d.subVectors(p,v).multiplyScalar(i.panSpeed),H(d.x,d.y),v.copy(p),i.update()}function q(P){P.deltaY<0?$(G()):P.deltaY>0&&Y(G()),i.update()}function p0(P){let t0=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),t0=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),t0=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?E(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),t0=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?E(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),t0=!0;break}t0&&(P.preventDefault(),i.update())}function g0(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),t0=.5*(w[0].pageY+w[1].pageY);f.set(P,t0)}}function y0(){if(w.length===1)v.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),t0=.5*(w[0].pageY+w[1].pageY);v.set(P,t0)}}function E0(){const P=w[0].pageX-w[1].pageX,t0=w[0].pageY-w[1].pageY,c0=Math.sqrt(P*P+t0*t0);T.set(0,c0)}function P0(){i.enableZoom&&E0(),i.enablePan&&y0()}function R0(){i.enableZoom&&E0(),i.enableRotate&&g0()}function O0(P){if(w.length==1)m.set(P.pageX,P.pageY);else{const c0=o0(P),W=.5*(P.pageX+c0.x),T0=.5*(P.pageY+c0.y);m.set(W,T0)}_.subVectors(m,f).multiplyScalar(i.rotateSpeed);const t0=i.domElement;E(2*Math.PI*_.x/t0.clientHeight),R(2*Math.PI*_.y/t0.clientHeight),f.copy(m)}function j0(P){if(w.length===1)p.set(P.pageX,P.pageY);else{const t0=o0(P),c0=.5*(P.pageX+t0.x),W=.5*(P.pageY+t0.y);p.set(c0,W)}d.subVectors(p,v).multiplyScalar(i.panSpeed),H(d.x,d.y),v.copy(p)}function C0(P){const t0=o0(P),c0=P.pageX-t0.x,W=P.pageY-t0.y,T0=Math.sqrt(c0*c0+W*W);y.set(0,T0),M.set(0,Math.pow(y.y/T.y,i.zoomSpeed)),Y(M.y),T.copy(y)}function g(P){i.enableZoom&&C0(P),i.enablePan&&j0(P)}function A(P){i.enableZoom&&C0(P),i.enableRotate&&O0(P)}function C(P){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",I),i.domElement.addEventListener("pointerup",U)),x(P),P.pointerType==="touch"?Q(P):K(P))}function I(P){i.enabled!==!1&&(P.pointerType==="touch"?m0(P):Z(P))}function U(P){F(P),w.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",I),i.domElement.removeEventListener("pointerup",U)),i.dispatchEvent(Z8),s=r.NONE}function K(P){let t0;switch(P.button){case 0:t0=i.mouseButtons.LEFT;break;case 1:t0=i.mouseButtons.MIDDLE;break;case 2:t0=i.mouseButtons.RIGHT;break;default:t0=-1}switch(t0){case d2.DOLLY:if(i.enableZoom===!1)return;X(P),s=r.DOLLY;break;case d2.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;j(P),s=r.PAN}else{if(i.enableRotate===!1)return;r0(P),s=r.ROTATE}break;case d2.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;r0(P),s=r.ROTATE}else{if(i.enablePan===!1)return;j(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(R4)}function Z(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;u0(P);break;case r.DOLLY:if(i.enableZoom===!1)return;l0(P);break;case r.PAN:if(i.enablePan===!1)return;z(P);break}}function V(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(R4),q(P),i.dispatchEvent(Z8))}function n0(P){i.enabled===!1||i.enablePan===!1||p0(P)}function Q(P){switch(e0(P),w.length){case 1:switch(i.touches.ONE){case p2.ROTATE:if(i.enableRotate===!1)return;g0(),s=r.TOUCH_ROTATE;break;case p2.PAN:if(i.enablePan===!1)return;y0(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case p2.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;P0(),s=r.TOUCH_DOLLY_PAN;break;case p2.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;R0(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(R4)}function m0(P){switch(e0(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;O0(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;j0(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;g(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;A(P),i.update();break;default:s=r.NONE}}function S(P){i.enabled!==!1&&P.preventDefault()}function x(P){w.push(P)}function F(P){delete N[P.pointerId];for(let t0=0;t0<w.length;t0++)if(w[t0].pointerId==P.pointerId){w.splice(t0,1);return}}function e0(P){let t0=N[P.pointerId];t0===void 0&&(t0=new f0,N[P.pointerId]=t0),t0.set(P.pageX,P.pageY)}function o0(P){const t0=P.pointerId===w[0].pointerId?w[1]:w[0];return N[t0.pointerId]}i.domElement.addEventListener("contextmenu",S),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",U),i.domElement.addEventListener("wheel",V,{passive:!1}),this.update()}}const nh=(n,e)=>{const t=new f0;return t.x=n/window.innerWidth*2-1,t.y=-(e/window.innerHeight)*2+1,t.clone()};class ih{constructor(e){P5(this,"radius");P5(this,"radarMesh");P5(this,"time");this.radius=8,this.radarMesh=null,this.time=e,this.init()}init(){const e=new D7(this.radius*2,this.radius*2),t=new u9({uniforms:{u_color:{value:new K0("#0c1dea")},u_time:this.time,u_radius:{value:this.radius}},transparent:!0,vertexShader:`
                varying vec2 v_position;
              
                void main() {
                  v_position = vec2(position);
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                precision mediump float;
                varying vec2 v_position;
                
                uniform float u_time;
                uniform vec3 u_color;
                uniform float u_radius;
                
                void main() {
                  float angle = atan(v_position.x, v_position.y);
                  
                  float new_angle = mod(angle + u_time, 3.1415926 * 2.0);
                  
                  // 计算距离
                  float dis = distance(vec2(0.0,0.0), v_position);
                  
                  // 外层圆环的宽度
                  float borderWidth = 0.5;
                  
                  float f_opacity = 0.0;
                  
                  // 在圆环上
                  if (dis > u_radius - borderWidth) {
                    f_opacity = 1.0;
                  }
                  
                  // 雷达扫描的显示
                  if (dis < u_radius - borderWidth) {
                    f_opacity = 1.0 - new_angle;
                  }
                  
                  // 处于雷达之外
                  if (dis > u_radius) {
                    f_opacity = 0.0;
                  }
                  
                  gl_FragColor = vec4(u_color, f_opacity);
                }
            `});this.radarMesh=new J5(e,t)}getRadarMesh(e){if(this.radarMesh){const t=this.radarMesh.clone();return t.position.set(e.lat,e.lon,1),t}}}class rh{constructor(e){P5(this,"line");P5(this,"radar");P5(this,"playPoints");P5(this,"time");this.line=[],this.radar=[],this.playPoints=[],this.time={value:0},e.forEach(t=>{this.creatFly(t),this.creatRadar(t)})}creatFly(e){const t=new O(e.from.lat,e.from.lon,0),i=new O(e.to.lat,e.to.lon,0),r=t.clone().lerp(i,.5);r.z=100;const s=Math.round(t.distanceTo(i)),a=new gt(t,r,i).getPoints(s*4);this.playPoint(a,s*4);const l=new N5().setFromPoints(a),c=new N3({color:8947848});this.line.push(new dt(l,c))}playPoint(e,t){const i=[],r=[];e.forEach((a,l)=>{i.push(a.x,a.y,a.z),r.push(l)});const s=new N5;s.setAttribute("position",new y5(i,3)),s.setAttribute("a_position",new y5(r,1));const o=new u9({uniforms:{u_range:{value:200},u_size:{value:20},u_color:{value:new K0("#00bbff")},u_total:{value:t},u_time:this.time},vertexShader:`
                attribute float a_position;
                
                uniform float u_time;
                uniform float u_size;
                uniform float u_range;
                uniform float u_total;
              
                varying float v_opacity;
                
                void main() {
                   float size = u_size;
                   float total_number = u_total * mod(u_time, 1.0);
                   if (total_number > a_position && total_number < a_position + u_range) {
                     // 拖尾效果
                     float index = (a_position + u_range - total_number) / u_range;
                     size *= index;
                     v_opacity = 1.0;
                   } else {
                     v_opacity = 0.0;
                   }
                   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                   gl_PointSize = size / 10.0;
                }
            `,fragmentShader:`
                uniform vec3 u_color;
                varying float v_opacity;
                
                void main() {
                  gl_FragColor = vec4(u_color, v_opacity);
                }
`)a=0,l-=s;else{const h=dh(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function dh(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new eh;let a,l,c,u,h,f,m,_;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,d=v.length;p<d;)switch(v[p++]){case"m":a=v[p++]*e+t,l=v[p++]*e+i,o.moveTo(a,l);break;case"l":a=v[p++]*e+t,l=v[p++]*e+i,o.lineTo(a,l);break;case"q":c=v[p++]*e+t,u=v[p++]*e+i,h=v[p++]*e+t,f=v[p++]*e+i,o.quadraticCurveTo(h,f,c,u);break;case"b":c=v[p++]*e+t,u=v[p++]*e+i,h=v[p++]*e+t,f=v[p++]*e+i,m=v[p++]*e+t,_=v[p++]*e+i,o.bezierCurveTo(h,f,m,_,c,u);break}}return{offsetX:s.ha*e,path:o}}class ph extends O3{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const mh="阿富汗",gh="阿尔巴尼亚",_h="阿尔及利亚",vh="安哥拉",xh="阿根廷",yh="亚美尼亚",Mh="澳大利亚",Sh="奥地利",Eh="阿塞拜疆",Th="巴哈马",bh="巴林",Ah="孟加拉国",wh="白俄罗斯",Ph="比利时",Rh="伯利兹",Ch="贝宁",Lh="不丹",Nh="玻利维亚",Uh="博茨瓦纳",Dh="巴西",Ih="文莱",Oh="保加利亚",Fh="布隆迪",Bh="柬埔寨",zh="喀麦隆",Hh="加拿大",Gh="乍得",Vh="智利",kh="中国",Wh="哥伦比亚",Xh="科摩罗",qh="刚果",Yh="克罗地亚",jh="古巴",Kh="塞浦路斯",Zh="丹麦",Jh="吉布提",$h="厄瓜多尔",Qh="埃及",ef="厄立特里亚",tf="爱沙尼亚",nf="埃塞俄比亚",rf="斐济",sf="芬兰",of="法国",af="加蓬",lf="冈比亚",cf="格鲁吉亚",uf="德国",hf="加纳",ff="希腊",df="格陵兰",pf="危地马拉",mf="几内亚",gf="圭亚那",_f="海地",vf="洪都拉斯",xf="匈牙利",yf="冰岛",Mf="印度",Sf="印度尼西亚",Ef="伊朗",Tf="伊拉克",bf="爱尔兰",Af="以色列",wf="意大利",Pf="牙买加",Rf="日本",Cf="约旦",Lf="哈萨克斯坦",Nf="肯尼亚",Uf="韩国",Df="科威特",If="吉尔吉斯斯坦",Of="拉脱维亚",Ff="黎巴嫩",Bf="莱索托",zf="利比里亚",Hf="利比亚",Gf="立陶宛",Vf="卢森堡",kf="马其顿",Wf="马达加斯加",Xf="马拉维",qf="马来西亚",Yf="马尔代夫",jf="马里",Kf="马耳他",Zf="毛利塔尼亚",Jf="毛里求斯",$f="墨西哥",Qf="摩尔多瓦",ed="摩纳哥",td="蒙古",nd="黑山共和国",id="摩洛哥",rd="莫桑比克",sd="缅甸",od="纳米比亚",ad="尼泊尔",ld="荷兰",cd="尼加拉瓜",ud="尼日尔",hd="尼日利亚",fd="挪威",dd="阿曼",pd="巴基斯坦",md="巴拿马",gd="巴拉圭",_d="秘鲁",vd="菲律宾",xd="波兰",yd="葡萄牙",Md="卡塔尔",Sd="留尼旺",Ed="罗马尼亚",Td="俄罗斯",bd="卢旺达",Ad="塞内加尔",wd="塞尔维亚",Pd="新加坡",Rd="斯洛伐克",Cd="斯洛文尼亚",Ld="索马里",Nd="西班牙",Ud="苏丹",Dd="苏里南",Id="斯威士兰",Od="瑞典",Fd="瑞士",Bd="叙利亚",zd="塔吉克斯坦",Hd="坦桑尼亚",Gd="泰国",Vd="多哥",kd="汤加",Wd="突尼斯",Xd="土耳其",qd="土库曼斯坦",Yd="乌干达",jd="乌克兰",Kd="乌拉圭",Zd="乌兹别克斯坦",Jd="瓦努阿图",$d="委内瑞拉",Qd="越南",ep="也门",tp="南斯拉夫",np="扎伊尔",ip="赞比亚",rp="津巴布韦",J8={Afghanistan:mh,Albania:gh,Algeria:_h,Angola:vh,Argentina:xh,Armenia:yh,Australia:Mh,Austria:Sh,Azerbaijan:Eh,Bahamas:Th,Bahrain:bh,Bangladesh:Ah,Belarus:wh,Belgium:Ph,Belize:Rh,Benin:Ch,Bhutan:Lh,Bolivia:Nh,"Bosnia and Herz.":"波斯尼亚和黑塞哥维那",Botswana:Uh,Brazil:Dh,"British Virgin Islands":"英属维京群岛",Brunei:Ih,Bulgaria:Oh,"Burkina Faso":"布基纳法索",Burundi:Fh,Cambodia:Bh,Cameroon:zh,Canada:Hh,"Cape Verde":"佛得角","Cayman Islands":"开曼群岛","Central African Rep.":"中非共和国",Chad:Gh,Chile:Vh,China:kh,Colombia:Wh,Comoros:Xh,Congo:qh,"Costa Rica":"哥斯达黎加",Croatia:Yh,Cuba:jh,Cyprus:Kh,"Czech Rep.":"捷克共和国","Côte d'Ivoire":"科特迪瓦","Dem. Rep. Congo":"刚果民主共和国","Dem. Rep. Korea":"朝鲜",Denmark:Zh,Djibouti:Jh,"Dominican Rep.":"多米尼加共和国",Ecuador:$h,Egypt:Qh,"El Salvador":"萨尔瓦多","Equatorial Guinea":"赤道几内亚",Eritrea:ef,Estonia:tf,Ethiopia:nf,"Falkland Is.":"福克兰群岛",Fiji:rf,Finland:sf,"Fr. S. Antarctic Lands":"所罗门群岛",France:of,Gabon:af,Gambia:lf,Georgia:cf,Germany:uf,Ghana:hf,Greece:ff,Greenland:df,Guatemala:pf,Guinea:mf,"Guinea-Bissau":"几内亚比绍",Guyana:gf,Haiti:_f,Honduras:vf,Hungary:xf,Iceland:yf,India:Mf,Indonesia:Sf,Iran:Ef,Iraq:Tf,Ireland:bf,"Isle of Man":"马恩岛",Israel:Af,Italy:wf,Jamaica:Pf,Japan:Rf,Jordan:Cf,Kazakhstan:Lf,Kenya:Nf,Korea:Uf,Kuwait:Df,Kyrgyzstan:If,"Lao PDR":"老挝",Latvia:Of,Lebanon:Ff,Lesotho:Bf,Liberia:zf,Libya:Hf,Lithuania:Gf,Luxembourg:Vf,Macedonia:kf,Madagascar:Wf,Malawi:Xf,Malaysia:qf,Maldives:Yf,Mali:jf,Malta:Kf,Mauritania:Zf,Mauritius:Jf,Mexico:$f,Moldova:Qf,Monaco:ed,Mongolia:td,Montenegro:nd,Morocco:id,Mozambique:rd,Myanmar:sd,Namibia:od,Nepal:ad,Netherlands:ld,"New Caledonia":"新喀里多尼亚","New Zealand":"新西兰",Nicaragua:cd,Niger:ud,Nigeria:hd,Norway:fd,Oman:dd,Pakistan:pd,Panama:md,"Papua New Guinea":"巴布亚新几内亚",Paraguay:gd,Peru:_d,Philippines:vd,Poland:xd,Portugal:yd,"Puerto Rico":"波多黎各",Qatar:Md,Reunion:Sd,Romania:Ed,Russia:Td,Rwanda:bd,"S. Geo. and S. Sandw. Is.":"南乔治亚和南桑威奇群岛","S. Sudan":"南苏丹","San Marino":"圣马力诺","Saudi Arabia":"沙特阿拉伯",Senegal:Ad,Serbia:wd,"Sierra Leone":"塞拉利昂",Singapore:Pd,Slovakia:Rd,Slovenia:Cd,"Solomon Is.":"所罗门群岛",Somalia:Ld,"South Africa":"南非",Spain:Nd,"Sri Lanka":"斯里兰卡",Sudan:Ud,Suriname:Dd,Swaziland:Id,Sweden:Od,Switzerland:Fd,Syria:Bd,Tajikistan:zd,Tanzania:Hd,Thailand:Gd,Togo:Vd,Tonga:kd,"Trinidad and Tobago":"特立尼达和多巴哥",Tunisia:Wd,Turkey:Xd,Turkmenistan:qd,"U.S. Virgin Islands":"美属维尔京群岛",Uganda:Yd,Ukraine:jd,"United Arab Emirates":"阿拉伯联合酋长国","United Kingdom":"英国","United States":"美国",Uruguay:Kd,Uzbekistan:Zd,Vanuatu:Jd,"Vatican City":"梵蒂冈城",Venezuela:$d,Vietnam:Qd,"W. Sahara":"西撒哈拉",Yemen:ep,Yugoslavia:tp,Zaire:np,Zambia:ip,Zimbabwe:rp};class sp{constructor(e){P5(this,"font");P5(this,"scene");P5(this,"object3D");P5(this,"textObject3D");this.init(),this.scene=e,this.textObject3D=null,this.font=null,this.object3D=null}init(){new uh(void 0).load("../src/assets/font.json",t=>{this.font=t},t=>{console.log(`字体加载:${Math.round(t.loaded/t.total*100)}%`)},t=>{console.log(`An error happened${t}`)})}createTextQueue(e){if(!this.font)return;const t=new ph(e,{font:this.font,size:3,height:.2}),i=new u9({vertexShader:`
                void main() {
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                void main() {
                  gl_FragColor = vec4(0.0,1.0,0.0,1.0);
                }
            `});this.object3D.geometry.computeBoundingBox();const{max:r,min:s}=this.object3D.geometry.boundingBox,o=s.clone().lerp(r,.5);t.computeBoundingBox(),o.x=o.x-.5*(t.boundingBox.max.x-t.boundingBox.min.x),o.y=o.y-.5*(t.boundingBox.max.y-t.boundingBox.min.y),this.textObject3D=new J5(t,i),this.textObject3D.rotation.x=Math.PI/5,this.textObject3D.position.copy(o),this.scene.add(this.textObject3D)}clearTextMesh(){this.textObject3D&&(this.scene.remove(this.textObject3D),this.textObject3D=null,this.object3D=null)}createTextMesh(e){var t;e.uuid!==((t=this.object3D)==null?void 0:t.uuid)&&(this.clearTextMesh(),J8[e.name]&&(this.object3D=e,this.createTextQueue(J8[e.name])))}}const op=kn({__name:"App",setup(n){const e=new $u,t=new H5(70,window.innerWidth/window.innerHeight,10,1e3);t.position.z=250;const i=new du;i.background=new K0("#f2f2f2");const r=new ft({antialias:!0});r.setSize(window.innerWidth,window.innerHeight);const s=new th(t,r.domElement);s.enableRotate=!1,s.enableZoom=!1;const o=new ch,a=new rh([{from:{lon:44.9635,lat:-103.4823},to:{lon:30.5728,lat:104.0668}},{from:{lon:-25.1721,lat:29.8739},to:{lon:61.52401,lat:105.318756}}]),l=new sp(i);i.add(...o.getCountry(),...a.getLine(),...a.getPlayPoints()),i.rotation.x=-Math.PI/5;const c=new Qu,u=new f0;let h=null;function f(_){u.copy(nh(_.clientX,_.clientY)),c.setFromCamera(u,t),h&&(h.object.material.color.set(h.object.name==="China"?"#f6647c":"#e10d04"),h=null);const v=c.intersectObjects(o.getCountryArea().children);v[0]?(h=v[0],l.createTextMesh(h.object),v[0].object.material.color.set(0)):l.clearTextMesh()}window.addEventListener("pointermove",f);function m(){a.setTime(e.getDelta()),s.update(),r.render(i,t)}return r.setAnimationLoop(m),document.body.appendChild(r.domElement),(_,v)=>null}});rr(op).mount("#app");