"use strict";(globalThis["webpackChunkanswerplease"]=globalThis["webpackChunkanswerplease"]||[]).push([[68],{9068:(n,e,o)=>{o.r(e),o.d(e,{default:()=>R});var t=o(3673);function u(n,e,o,u,s,r){const a=(0,t.up)("rounds-module"),l=(0,t.up)("screen");return(0,t.wg)(),(0,t.j4)(l,null,{default:(0,t.w5)((()=>[(0,t.Wm)(a)])),_:1})}var s=o(7731);const r={class:"rounds-module"},a={class:"rounds-module__slider-section"};function l(n,e,o,u,s,l){const c=(0,t.up)("navbar"),d=(0,t.up)("q-slider"),i=(0,t.up)("screen-section"),m=(0,t.up)("form-button");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(c,{title:"Кол-во раундов"}),(0,t.Wm)(i,{"is-padded":!0},{default:(0,t.w5)((()=>[(0,t._)("div",a,[(0,t.Wm)(d,{modelValue:n.roundsAmountLocal,"onUpdate:modelValue":e[0]||(e[0]=e=>n.roundsAmountLocal=e),min:1,max:4,markers:"","track-size":"1.2rem","inner-track-color":"white","marker-labels-class":"rounds-module__slider-marker","marker-labels":n=>`${n}`,class:"rounds-module__slider"},null,8,["modelValue","marker-labels"])])])),_:1}),(0,t.Wm)(i,{"is-bottom-section":!0},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{text:"Далее","is-secondary":!0,"click-handler":n.continueStep,"is-disabled":!n.roundsAmountLocal},null,8,["click-handler","is-disabled"])])),_:1})])}var c=o(7666),d=o(9715),i=o(8631),m=o(1959),p=o(9582),f=function(n,e,o,t){function u(n){return n instanceof o?n:new o((function(e){e(n)}))}return new(o||(o=Promise))((function(o,s){function r(n){try{l(t.next(n))}catch(e){s(e)}}function a(n){try{l(t["throw"](n))}catch(e){s(e)}}function l(n){n.done?o(n.value):u(n.value).then(r,a)}l((t=t.apply(n,e||[])).next())}))};const v=()=>{const n=(0,i.useStore)(),e=(0,p.tv)(),o=(0,m.iH)(1),t=e=>{n.commit("questions/mutateRoundsAmount",e)},u=e=>{n.commit("questions/mutateActiveRound",e)},s=()=>f(void 0,void 0,void 0,(function*(){t(o.value),u(1),yield e.push(d.Q.GAME_CREATE)}));return{continueStep:s,roundsAmountLocal:o}},w=(0,t.aZ)({name:"RoundsModule",components:{ScreenSection:c.dg,Navbar:c.wp,FormButton:c.OL},setup(){const{continueStep:n,roundsAmountLocal:e}=v();return{continueStep:n,roundsAmountLocal:e}}});var b=o(4260),h=o(3328),k=o(7518),_=o.n(k);const A=(0,b.Z)(w,[["render",l]]),S=A;_()(w,"components",{QSlider:h.Z});const L=(0,t.aZ)({name:"PageRounds",components:{Screen:s.Z,RoundsModule:S},setup(){return{}}}),g=(0,b.Z)(L,[["render",u]]),R=g}}]);