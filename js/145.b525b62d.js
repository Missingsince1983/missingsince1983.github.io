"use strict";(globalThis["webpackChunkquasar_base_template"]=globalThis["webpackChunkquasar_base_template"]||[]).push([[145],{5145:(e,n,o)=>{o.r(n),o.d(n,{default:()=>g});var t=o(3673);function l(e,n,o,l,u,c){const i=(0,t.up)("welcome-module");return(0,t.wg)(),(0,t.j4)(i)}const u={class:"welcome-module"},c=(0,t._)("div",{class:"welcome-module__logo-block"},[(0,t._)("div",{class:"welcome-module__logo"})],-1),i={class:"welcome-module__button-block"};function a(e,n,o,l,a,s){const d=(0,t.up)("form-button"),r=(0,t.up)("screen-section");return(0,t.wg)(),(0,t.iD)("div",u,[c,(0,t._)("div",i,[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{text:"Продолжить","is-secondary":!0,"click-handler":e.continueGame},null,8,["click-handler"])])),_:1}),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{text:"Новая игра","click-handler":e.openGame},null,8,["click-handler"])])),_:1}),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{text:"Правила игры","click-handler":e.openRules},null,8,["click-handler"])])),_:1})])])}var s=o(4785),d=o(9715),r=o(9582),m=function(e,n,o,t){function l(e){return e instanceof o?e:new o((function(n){n(e)}))}return new(o||(o=Promise))((function(o,u){function c(e){try{a(t.next(e))}catch(n){u(n)}}function i(e){try{a(t["throw"](e))}catch(n){u(n)}}function a(e){e.done?o(e.value):l(e.value).then(c,i)}a((t=t.apply(e,n||[])).next())}))};const p=()=>{const e=(0,r.tv)(),n=()=>m(void 0,void 0,void 0,(function*(){yield e.push(d.Q.RULES)})),o=()=>m(void 0,void 0,void 0,(function*(){yield e.push(d.Q.SETTINGS)})),t=()=>m(void 0,void 0,void 0,(function*(){yield e.push(d.Q.SELECT_PACK)})),l=()=>m(void 0,void 0,void 0,(function*(){yield e.push(d.Q.SELECT_PACK)}));return{openRules:n,openSettings:o,openGame:t,continueGame:l}},v=(0,t.aZ)({name:"WelcomeModule",components:{FormButton:s.OL,ScreenSection:s.dg},setup(){const{openRules:e,openSettings:n,openGame:o,continueGame:t}=p();return{openRules:e,openSettings:n,openGame:o,continueGame:t}}});var f=o(4260);const h=(0,f.Z)(v,[["render",a]]),_=h,w=(0,t.aZ)({name:"PageIndex",components:{WelcomeModule:_},setup(){return{}}}),k=(0,f.Z)(w,[["render",l]]),g=k}}]);