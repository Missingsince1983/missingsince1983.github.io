"use strict";(globalThis["webpackChunkquasar_base_template"]=globalThis["webpackChunkquasar_base_template"]||[]).push([[292],{292:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var l=n(3673);function i(e,t,n,i,o,u){const a=(0,l.up)("game-betting-module"),d=(0,l.up)("screen");return(0,l.wg)(),(0,l.j4)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(a)])),_:1})}var o=n(9808);const u={class:"game-betting-module"};function a(e,t,n,i,o,a){var d;const v=(0,l.up)("block-title"),s=(0,l.up)("block-subtitle"),r=(0,l.up)("screen-section"),c=(0,l.up)("block-button");return(0,l.wg)(),(0,l.iD)("div",u,[(0,l.Wm)(v,{text:`Ожидаются вопросы из категории: ${null===(d=e.SelectedCategory)||void 0===d?void 0:d.title}`},null,8,["text"]),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,{text:"Делайте ставки, господа!"}),(0,l.Wm)(s,{text:e.descriptionText},null,8,["text"])])),_:1}),e.isFinishedBettings?((0,l.wg)(),(0,l.j4)(r,{key:1},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{text:"Далее","click-handler":e.startGameQuestions},null,8,["click-handler"])])),_:1})):((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{text:"Да","click-handler":e.votePros},null,8,["click-handler"])])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,{text:"Нет","click-handler":e.voteCons},null,8,["click-handler"])])),_:1})],64))])}var d=n(4785),v=n(9715),s=n(3437),r=n(1959),c=n(9582),m=function(e,t,n,l){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function u(e){try{d(l.next(e))}catch(t){o(t)}}function a(e){try{d(l["throw"](e))}catch(t){o(t)}}function d(e){e.done?n(e.value):i(e.value).then(u,a)}d((l=l.apply(e,t||[])).next())}))};const p=()=>{const e=(0,s.useStore)(),t=(0,c.tv)(),n=()=>m(void 0,void 0,void 0,(function*(){yield t.push(v.Q.GAME_BETTING)})),i=(0,r.iH)(null),o=(0,r.iH)(null),u=(0,r.iH)(0),a=(0,r.iH)(!1),d=()=>m(void 0,void 0,void 0,(function*(){yield g("Y")})),p=()=>m(void 0,void 0,void 0,(function*(){yield g("F")})),g=e=>m(void 0,void 0,void 0,(function*(){var t,n;i.value&&o.value&&(yield f({playerId:null===(t=i.value)||void 0===t?void 0:t.id,oppositePlayerId:null===(n=o.value)||void 0===n?void 0:n.id,voteType:e}),h.value?a.value=!0:k())})),f=t=>m(void 0,void 0,void 0,(function*(){return yield e.dispatch("gameCreate/voteForPlayer",t)})),h=(0,l.Fl)((()=>u.value===x.value.length)),y=(0,l.Fl)((()=>u.value+1===x.value.length)),k=()=>{y.value?(i.value=x.value[u.value],o.value=x.value[0]):(i.value=x.value[u.value],o.value=x.value[u.value+1]),u.value=u.value+1},b=(0,l.Fl)((()=>{var e,t,n,l;return a.value?"Ставки сделаны!":`${null!==(t=null===(e=i.value)||void 0===e?void 0:e.name)&&void 0!==t?t:""}, ответит ли ${null!==(l=null===(n=o.value)||void 0===n?void 0:n.name)&&void 0!==l?l:""} на вопрос?`})),C=()=>m(void 0,void 0,void 0,(function*(){return yield e.dispatch("questions/selectRandomCategory")}));(0,l.bv)((()=>m(void 0,void 0,void 0,(function*(){yield C(),k()}))));const w=()=>m(void 0,void 0,void 0,(function*(){yield t.push(v.Q.QUESTIONS)})),x=(0,l.Fl)((()=>e.state.gameCreate.playersList)),S=(0,l.Fl)((()=>e.state.questions.selectedCategory));return{voteCons:p,votePros:d,continueStep:n,startGameQuestions:w,isFinishedBettings:a,descriptionText:b,SelectedCategory:S}},g=(0,l.aZ)({name:"GameCreateModule",components:{ScreenSection:d.dg,BlockTitle:d.bi,BlockSubtitle:d.CH,BlockButton:d.of},setup(){const{voteCons:e,votePros:t,startGameQuestions:n,isFinishedBettings:l,descriptionText:i,SelectedCategory:o}=p();return{voteCons:e,votePros:t,startGameQuestions:n,isFinishedBettings:l,descriptionText:i,SelectedCategory:o}}});var f=n(4260);const h=(0,f.Z)(g,[["render",a]]),y=h,k=(0,l.aZ)({name:"GameBetting",components:{Screen:o.Z,GameBettingModule:y},setup(){return{}}}),b=(0,f.Z)(k,[["render",i]]),C=b}}]);