"use strict";(self.webpackChunkvista_dictionary=self.webpackChunkvista_dictionary||[]).push([[849],{849:(t,e,n)=>{n.r(e),n.d(e,{MutationType:()=>_,PiniaVuePlugin:()=>_t,acceptHMRUpdate:()=>X,createPinia:()=>K,defineStore:()=>lt,getActivePinia:()=>g,mapActions:()=>gt,mapGetters:()=>ht,mapState:()=>ft,mapStores:()=>dt,mapWritableState:()=>yt,setActivePinia:()=>h,setMapStoreSuffix:()=>pt,skipHydrate:()=>at,storeToRefs:()=>mt});var o=n(875),s=!1;function i(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}function a(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:{}}const r="function"==typeof Proxy,c="devtools-plugin:setup";let l,u,p;class d{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const e in t.settings){const o=t.settings[e];n[e]=o.defaultValue}const o=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},n);try{const t=localStorage.getItem(o),e=JSON.parse(t);Object.assign(s,e)}catch(t){}this.fallbacks={getSettings:()=>s,setSettings(t){try{localStorage.setItem(o,JSON.stringify(t))}catch(t){}s=t},now:()=>{return void 0!==l||("undefined"!=typeof window&&window.performance?(l=!0,u=window.performance):"undefined"!=typeof globalThis&&(null===(t=globalThis.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,u=globalThis.perf_hooks.performance):l=!1),l?u.now():Date.now();var t}},e&&e.on("plugin:settings:set",((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function f(t,e){const n=t,o=a(),s=a().__VUE_DEVTOOLS_GLOBAL_HOOK__,i=r&&n.enableEarlyProxy;if(!s||!o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&i){const t=i?new d(n,s):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else s.emit(c,t,e)}const h=t=>p=t,g=()=>(0,o.hasInjectionContext)()&&(0,o.inject)(y)||p,y=Symbol();function m(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var _;!function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"}(_||(_={}));const b="undefined"!=typeof window,v="undefined"!=typeof __VUE_PROD_DEVTOOLS__&&__VUE_PROD_DEVTOOLS__&&b,w=(()=>"object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:"object"==typeof globalThis?globalThis:{HTMLElement:null})();function O(t,e,n){const o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){I(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function S(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return e.status>=200&&e.status<=299}function $(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const k="object"==typeof navigator?navigator:{userAgent:""},E=(()=>/Macintosh/.test(k.userAgent)&&/AppleWebKit/.test(k.userAgent)&&!/Safari/.test(k.userAgent))(),I=b?"undefined"!=typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!E?function(t,e="download",n){const o=document.createElement("a");o.download=e,o.rel="noopener","string"==typeof t?(o.href=t,o.origin!==location.origin?S(o.href)?O(t,e,n):(o.target="_blank",$(o)):$(o)):(o.href=URL.createObjectURL(t),setTimeout((function(){URL.revokeObjectURL(o.href)}),4e4),setTimeout((function(){$(o)}),0))}:"msSaveOrOpenBlob"in k?function(t,e="download",n){if("string"==typeof t)if(S(t))O(t,e,n);else{const e=document.createElement("a");e.href=t,e.target="_blank",setTimeout((function(){$(e)}))}else navigator.msSaveOrOpenBlob(function(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}(t,n),e)}:function(t,e,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return O(t,e,n);const s="application/octet-stream"===t.type,i=/constructor/i.test(String(w.HTMLElement))||"safari"in w,a=/CriOS\/[\d]+/.test(navigator.userAgent);if((a||s&&i||E)&&"undefined"!=typeof FileReader){const e=new FileReader;e.onloadend=function(){let t=e.result;if("string"!=typeof t)throw o=null,new Error("Wrong reader.result type");t=a?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location.assign(t),o=null},e.readAsDataURL(t)}else{const e=URL.createObjectURL(t);o?o.location.assign(e):location.href=e,o=null,setTimeout((function(){URL.revokeObjectURL(e)}),4e4)}}:()=>{};function T(t,e){const n="🍍 "+t;"function"==typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(n,e):"error"===e?console.error(n):"warn"===e?console.warn(n):console.log(n)}function j(t){return"_a"in t&&"install"in t}function P(){if(!("clipboard"in navigator))return T("Your browser doesn't support the Clipboard API","error"),!0}function R(t){return!!(t instanceof Error&&t.message.toLowerCase().includes("document is not focused"))&&(T('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}let A;function L(t,e){for(const n in e){const o=t.state.value[n];o?Object.assign(o,e[n]):t.state.value[n]=e[n]}}function C(t){return{_custom:{display:t}}}const V="🍍 Pinia (root)",x="_root";function U(t){return j(t)?{id:x,label:V}:{id:t.$id,label:t.$id}}function D(t){return t?Array.isArray(t)?t.reduce(((t,e)=>(t.keys.push(e.key),t.operations.push(e.type),t.oldValue[e.key]=e.oldValue,t.newValue[e.key]=e.newValue,t)),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:C(t.type),key:C(t.key),oldValue:t.oldValue,newValue:t.newValue}:{}}function M(t){switch(t){case _.direct:return"mutation";case _.patchFunction:case _.patchObject:return"$patch";default:return"unknown"}}let N=!0;const F=[],H="pinia:mutations",J="pinia",{assign:G}=Object,B=t=>"🍍 "+t;function Q(t,e){f({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:F,app:t},(n=>{"function"!=typeof n.now&&T("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:H,label:"Pinia 🍍",color:15064968}),n.addInspector({id:J,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{!async function(t){if(!P())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),T("Global state copied to clipboard.")}catch(t){if(R(t))return;T("Failed to serialize the state. Check the console for more details.","error"),console.error(t)}}(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await async function(t){if(!P())try{L(t,JSON.parse(await navigator.clipboard.readText())),T("Global state pasted from clipboard.")}catch(t){if(R(t))return;T("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(t)}}(e),n.sendInspectorTree(J),n.sendInspectorState(J)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{!async function(t){try{I(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(t){T("Failed to export the state as JSON. Check the console for more details.","error"),console.error(t)}}(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await async function(t){try{const e=(A||(A=document.createElement("input"),A.type="file",A.accept=".json"),function(){return new Promise(((t,e)=>{A.onchange=async()=>{const e=A.files;if(!e)return t(null);const n=e.item(0);return t(n?{text:await n.text(),file:n}:null)},A.oncancel=()=>t(null),A.onerror=e,A.click()}))}),n=await e();if(!n)return;const{text:o,file:s}=n;L(t,JSON.parse(o)),T(`Global state imported from "${s.name}".`)}catch(t){T("Failed to import the state from JSON. Check the console for more details.","error"),console.error(t)}}(e),n.sendInspectorTree(J),n.sendInspectorState(J)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:t=>{const n=e._s.get(t);n?"function"!=typeof n.$reset?T(`Cannot reset "${t}" store because it doesn't have a "$reset" method implemented.`,"warn"):(n.$reset(),T(`Store "${t}" reset.`)):T(`Cannot reset "${t}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent(((t,e)=>{const n=t.componentInstance&&t.componentInstance.proxy;if(n&&n._pStores){const e=t.componentInstance.proxy._pStores;Object.values(e).forEach((e=>{t.instanceData.state.push({type:B(e.$id),key:"state",editable:!0,value:e._isOptionsAPI?{_custom:{value:(0,o.toRaw)(e.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>e.$reset()}]}}:Object.keys(e.$state).reduce(((t,n)=>(t[n]=e.$state[n],t)),{})}),e._getters&&e._getters.length&&t.instanceData.state.push({type:B(e.$id),key:"getters",editable:!1,value:e._getters.reduce(((t,n)=>{try{t[n]=e[n]}catch(e){t[n]=e}return t}),{})})}))}})),n.on.getInspectorTree((n=>{if(n.app===t&&n.inspectorId===J){let t=[e];t=t.concat(Array.from(e._s.values())),n.rootNodes=(n.filter?t.filter((t=>"$id"in t?t.$id.toLowerCase().includes(n.filter.toLowerCase()):V.toLowerCase().includes(n.filter.toLowerCase()))):t).map(U)}})),n.on.getInspectorState((n=>{if(n.app===t&&n.inspectorId===J){const t=n.nodeId===x?e:e._s.get(n.nodeId);if(!t)return;t&&(n.state=function(t){if(j(t)){const e=Array.from(t._s.keys()),n=t._s,o={state:e.map((e=>({editable:!0,key:e,value:t.state.value[e]}))),getters:e.filter((t=>n.get(t)._getters)).map((t=>{const e=n.get(t);return{editable:!1,key:t,value:e._getters.reduce(((t,n)=>(t[n]=e[n],t)),{})}}))};return o}const e={state:Object.keys(t.$state).map((e=>({editable:!0,key:e,value:t.$state[e]})))};return t._getters&&t._getters.length&&(e.getters=t._getters.map((e=>({editable:!1,key:e,value:t[e]})))),t._customProperties.size&&(e.customProperties=Array.from(t._customProperties).map((e=>({editable:!0,key:e,value:t[e]})))),e}(t))}})),n.on.editInspectorState(((n,o)=>{if(n.app===t&&n.inspectorId===J){const t=n.nodeId===x?e:e._s.get(n.nodeId);if(!t)return T(`store "${n.nodeId}" not found`,"error");const{path:o}=n;j(t)?o.unshift("state"):1===o.length&&t._customProperties.has(o[0])&&!(o[0]in t.$state)||o.unshift("$state"),N=!1,n.set(t,o,n.state.value),N=!0}})),n.on.editComponentState((t=>{if(t.type.startsWith("🍍")){const n=t.type.replace(/^🍍\s*/,""),o=e._s.get(n);if(!o)return T(`store "${n}" not found`,"error");const{path:s}=t;if("state"!==s[0])return T(`Invalid path for store "${n}":\n${s}\nOnly state can be modified.`);s[0]="$state",N=!1,t.set(o,s,t.state.value),N=!0}}))}))}let W,z=0;function Y(t,e,n){const s=e.reduce(((e,n)=>(e[n]=(0,o.toRaw)(t)[n],e)),{});for(const e in s)t[e]=function(){const o=z,i=n?new Proxy(t,{get:(...t)=>(W=o,Reflect.get(...t)),set:(...t)=>(W=o,Reflect.set(...t))}):t;W=o;const a=s[e].apply(i,arguments);return W=void 0,a}}function q({app:t,store:e,options:n}){if(e.$id.startsWith("__hot:"))return;e._isOptionsAPI=!!n.state,Y(e,Object.keys(n.actions),e._isOptionsAPI);const s=e._hotUpdate;(0,o.toRaw)(e)._hotUpdate=function(t){s.apply(this,arguments),Y(e,Object.keys(t._hmrPayload.actions),!!e._isOptionsAPI)},function(t,e){F.includes(B(e.$id))||F.push(B(e.$id)),f({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:F,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},(t=>{const n="function"==typeof t.now?t.now.bind(t):Date.now;e.$onAction((({after:o,onError:s,name:i,args:a})=>{const r=z++;t.addTimelineEvent({layerId:H,event:{time:n(),title:"🛫 "+i,subtitle:"start",data:{store:C(e.$id),action:C(i),args:a},groupId:r}}),o((o=>{W=void 0,t.addTimelineEvent({layerId:H,event:{time:n(),title:"🛬 "+i,subtitle:"end",data:{store:C(e.$id),action:C(i),args:a,result:o},groupId:r}})})),s((o=>{W=void 0,t.addTimelineEvent({layerId:H,event:{time:n(),logType:"error",title:"💥 "+i,subtitle:"end",data:{store:C(e.$id),action:C(i),args:a,error:o},groupId:r}})}))}),!0),e._customProperties.forEach((s=>{(0,o.watch)((()=>(0,o.unref)(e[s])),((e,o)=>{t.notifyComponentUpdate(),t.sendInspectorState(J),N&&t.addTimelineEvent({layerId:H,event:{time:n(),title:"Change",subtitle:s,data:{newValue:e,oldValue:o},groupId:W}})}),{deep:!0})})),e.$subscribe((({events:o,type:s},i)=>{if(t.notifyComponentUpdate(),t.sendInspectorState(J),!N)return;const a={time:n(),title:M(s),data:G({store:C(e.$id)},D(o)),groupId:W};s===_.patchFunction?a.subtitle="⤵️":s===_.patchObject?a.subtitle="🧩":o&&!Array.isArray(o)&&(a.subtitle=o.type),o&&(a.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:o}}),t.addTimelineEvent({layerId:H,event:a})}),{detached:!0,flush:"sync"});const s=e._hotUpdate;e._hotUpdate=(0,o.markRaw)((o=>{s(o),t.addTimelineEvent({layerId:H,event:{time:n(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:C(e.$id),info:C("HMR update")}}}),t.notifyComponentUpdate(),t.sendInspectorTree(J),t.sendInspectorState(J)}));const{$dispose:i}=e;e.$dispose=()=>{i(),t.notifyComponentUpdate(),t.sendInspectorTree(J),t.sendInspectorState(J),t.getSettings().logStoreChanges&&T(`Disposed "${e.$id}" store 🗑`)},t.notifyComponentUpdate(),t.sendInspectorTree(J),t.sendInspectorState(J),t.getSettings().logStoreChanges&&T(`"${e.$id}" store installed 🆕`)}))}(t,e)}function K(){const t=(0,o.effectScope)(!0),e=t.run((()=>(0,o.ref)({})));let n=[],i=[];const a=(0,o.markRaw)({install(t){h(a),s||(a._a=t,t.provide(y,a),t.config.globalProperties.$pinia=a,v&&Q(t,a),i.forEach((t=>n.push(t))),i=[])},use(t){return this._a||s?n.push(t):i.push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return v&&"undefined"!=typeof Proxy&&a.use(q),a}function X(t,e){return()=>{}}const Z=()=>{};function tt(t,e,n,s=Z){t.push(e);const i=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&(0,o.getCurrentScope)()&&(0,o.onScopeDispose)(i),i}function et(t,...e){t.slice().forEach((t=>{t(...e)}))}const nt=t=>t();function ot(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];m(i)&&m(s)&&t.hasOwnProperty(n)&&!(0,o.isRef)(s)&&!(0,o.isReactive)(s)?t[n]=ot(i,s):t[n]=s}return t}const st=Symbol(),it=new WeakMap;function at(t){return s?it.set(t,1)&&t:Object.defineProperty(t,st,{})}const{assign:rt}=Object;function ct(t,e,n={},a,r,c){let l;const u=rt({actions:{}},n),p={deep:!0};let d,f,g,y=[],b=[];const w=a.state.value[t];c||w||(s?i(a.state.value,t,{}):a.state.value[t]={});const O=(0,o.ref)({});let S;function $(e){let n;d=f=!1,"function"==typeof e?(e(a.state.value[t]),n={type:_.patchFunction,storeId:t,events:g}):(ot(a.state.value[t],e),n={type:_.patchObject,payload:e,storeId:t,events:g});const s=S=Symbol();(0,o.nextTick)().then((()=>{S===s&&(d=!0)})),f=!0,et(y,n,a.state.value[t])}const k=c?function(){const{state:t}=n,e=t?t():{};this.$patch((t=>{rt(t,e)}))}:Z;function E(e,n){return function(){h(a);const o=Array.from(arguments),s=[],i=[];let r;et(b,{args:o,name:e,store:j,after:function(t){s.push(t)},onError:function(t){i.push(t)}});try{r=n.apply(this&&this.$id===t?this:j,o)}catch(t){throw et(i,t),t}return r instanceof Promise?r.then((t=>(et(s,t),t))).catch((t=>(et(i,t),Promise.reject(t)))):(et(s,r),r)}}const I=(0,o.markRaw)({actions:{},getters:{},state:[],hotState:O}),T={_p:a,$id:t,$onAction:tt.bind(null,b),$patch:$,$reset:k,$subscribe(e,n={}){const s=tt(y,e,n.detached,(()=>i())),i=l.run((()=>(0,o.watch)((()=>a.state.value[t]),(o=>{("sync"===n.flush?f:d)&&e({storeId:t,type:_.direct,events:g},o)}),rt({},p,n))));return s},$dispose:function(){l.stop(),y=[],b=[],a._s.delete(t)}};s&&(T._r=!1);const j=(0,o.reactive)(v?rt({_hmrPayload:I,_customProperties:(0,o.markRaw)(new Set)},T):T);a._s.set(t,j);const P=(a._a&&a._a.runWithContext||nt)((()=>a._e.run((()=>(l=(0,o.effectScope)()).run(e)))));for(const e in P){const n=P[e];if((0,o.isRef)(n)&&(A=n,!(0,o.isRef)(A)||!A.effect)||(0,o.isReactive)(n))c||(!w||(R=n,s?it.has(R):m(R)&&R.hasOwnProperty(st))||((0,o.isRef)(n)?n.value=w[e]:ot(n,w[e])),s?i(a.state.value[t],e,n):a.state.value[t][e]=n);else if("function"==typeof n){const t=E(e,n);s?i(P,e,t):P[e]=t,u.actions[e]=n}}var R,A;if(s?Object.keys(P).forEach((t=>{i(j,t,P[t])})):(rt(j,P),rt((0,o.toRaw)(j),P)),Object.defineProperty(j,"$state",{get:()=>a.state.value[t],set:t=>{$((e=>{rt(e,t)}))}}),v){const t={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach((e=>{Object.defineProperty(j,e,rt({value:j[e]},t))}))}return s&&(j._r=!0),a._p.forEach((t=>{if(v){const e=l.run((()=>t({store:j,app:a._a,pinia:a,options:u})));Object.keys(e||{}).forEach((t=>j._customProperties.add(t))),rt(j,e)}else rt(j,l.run((()=>t({store:j,app:a._a,pinia:a,options:u}))))})),w&&c&&n.hydrate&&n.hydrate(j.$state,w),d=!0,f=!0,j}function lt(t,e,n){let a,r;const c="function"==typeof e;function l(t,n){const l=(0,o.hasInjectionContext)();return(t=t||(l?(0,o.inject)(y,null):null))&&h(t),(t=p)._s.has(a)||(c?ct(a,e,r,t):function(t,e,n,a){const{state:r,actions:c,getters:l}=e,u=n.state.value[t];let p;p=ct(t,(function(){u||(s?i(n.state.value,t,r?r():{}):n.state.value[t]=r?r():{});const e=(0,o.toRefs)(n.state.value[t]);return rt(e,c,Object.keys(l||{}).reduce(((e,i)=>(e[i]=(0,o.markRaw)((0,o.computed)((()=>{h(n);const e=n._s.get(t);if(!s||e._r)return l[i].call(e,e)}))),e)),{}))}),e,n,0,!0)}(a,r,t)),t._s.get(a)}return"string"==typeof t?(a=t,r=c?n:e):(r=t,a=t.id),l.$id=a,l}let ut="Store";function pt(t){ut=t}function dt(...t){return t.reduce(((t,e)=>(t[e.$id+ut]=function(){return e(this.$pinia)},t)),{})}function ft(t,e){return Array.isArray(e)?e.reduce(((e,n)=>(e[n]=function(){return t(this.$pinia)[n]},e)),{}):Object.keys(e).reduce(((n,o)=>(n[o]=function(){const n=t(this.$pinia),s=e[o];return"function"==typeof s?s.call(this,n):n[s]},n)),{})}const ht=ft;function gt(t,e){return Array.isArray(e)?e.reduce(((e,n)=>(e[n]=function(...e){return t(this.$pinia)[n](...e)},e)),{}):Object.keys(e).reduce(((n,o)=>(n[o]=function(...n){return t(this.$pinia)[e[o]](...n)},n)),{})}function yt(t,e){return Array.isArray(e)?e.reduce(((e,n)=>(e[n]={get(){return t(this.$pinia)[n]},set(e){return t(this.$pinia)[n]=e}},e)),{}):Object.keys(e).reduce(((n,o)=>(n[o]={get(){return t(this.$pinia)[e[o]]},set(n){return t(this.$pinia)[e[o]]=n}},n)),{})}function mt(t){if(s)return(0,o.toRefs)(t);{t=(0,o.toRaw)(t);const e={};for(const n in t){const s=t[n];((0,o.isRef)(s)||(0,o.isReactive)(s))&&(e[n]=(0,o.toRef)(t,n))}return e}}const _t=function(t){t.mixin({beforeCreate(){const t=this.$options;if(t.pinia){const e=t.pinia;if(!this._provided){const t={};Object.defineProperty(this,"_provided",{get:()=>t,set:e=>Object.assign(t,e)})}this._provided[y]=e,this.$pinia||(this.$pinia=e),e._a=this,b&&h(e),v&&Q(e._a,e)}else!this.$pinia&&t.parent&&t.parent.$pinia&&(this.$pinia=t.parent.$pinia)},destroyed(){delete this._pStores}})}}}]);