"use strict";(globalThis["webpackChunkmy_portfolio"]=globalThis["webpackChunkmy_portfolio"]||[]).push([[432],{2432:(t,e,o)=>{o.r(e),o.d(e,{default:()=>I});var r=o(3673);function n(t,e,o,n,s,l){const c=(0,r.up)("settings-module"),i=(0,r.up)("screen");return(0,r.wg)(),(0,r.j4)(i,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})}var s=o(7731);const l={class:"settings-mo"};function c(t,e,o,n,s,c){const i=(0,r.up)("block-title"),u=(0,r.up)("settings-color"),a=(0,r.up)("settings-section"),g=(0,r.up)("screen-section");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{text:"Настройки игры"}),(0,r.Wm)(a,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u)])),_:1})])),_:1})])}var i=o(7666);const u={class:"settings-color"},a={class:"settings-color__list"};function g(t,e,o,n,s,l){const c=(0,r.up)("block-subtitle"),i=(0,r.up)("settings-color-item");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(c,{text:"Выберите цвет"}),(0,r._)("div",a,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.APP_THEMES,(t=>((0,r.wg)(),(0,r.j4)(i,{key:t.colorName,color:t},null,8,["color"])))),128))])])}var m=o(2323);function C(t,e,o,n,s,l){return(0,r.wg)(),(0,r.iD)("div",{class:"settings-color-item",style:(0,m.j5)(`border-color: ${t.isColorCurrent?t.color.colorName:"transparent"}`),onClick:e[0]||(e[0]=(...e)=>t.changeCurrentColor&&t.changeCurrentColor(...e))},[(0,r._)("div",{class:"settings-color-item__inner",style:(0,m.j5)(`background-color: ${t.color.colorName}`)},null,4)],4)}var p=o(8631);const d=t=>{const{color:e}=t,o=(0,p.useStore)(),n=t=>{o.commit("settings/mutateCurrentColorTheme",t)},s=()=>{n(e)},l=(0,r.Fl)((()=>o.state.settings.currentColorTheme));return{CurrentColor:l,changeCurrentColor:s}},S=(0,r.aZ)({name:"SettingsColorItem",components:{},props:{color:{type:Object,required:!0}},setup(t){const{CurrentColor:e,changeCurrentColor:o}=d({color:t.color.colorName}),n=(0,r.Fl)((()=>e.value===t.color.colorName));return{isColorCurrent:n,changeCurrentColor:o}}});var v=o(4260);const _=(0,v.Z)(S,[["render",C]]),b=_;var f=o(9475);const h=(0,r.aZ)({name:"SettingsColor",components:{SettingsColorItem:b,BlockSubtitle:i.CH},setup(){return{APP_THEMES:f.A}}}),w=(0,v.Z)(h,[["render",g]]),k=w,Z={class:"settings-section"};function T(t,e,o,n,s,l){return(0,r.wg)(),(0,r.iD)("div",Z,[(0,r.WI)(t.$slots,"default")])}const W=(0,r.aZ)({name:"SettingsSection",components:{},setup(){return{}}}),y=(0,v.Z)(W,[["render",T]]),j=y;var D=o(1959);const H=()=>{const t=(0,D.iH)(!0);return{list:t}},N=(0,r.aZ)({name:"SettingsModule",components:{ScreenSection:i.dg,SettingsColor:k,SettingsSection:j,BlockTitle:i.bi},setup(){const{list:t}=H();return{list:t}}}),P=(0,v.Z)(N,[["render",c]]),E=P,M=(0,r.aZ)({name:"PageSettings",components:{Screen:s.Z,SettingsModule:E},setup(){return{}}}),A=(0,v.Z)(M,[["render",n]]),I=A}}]);