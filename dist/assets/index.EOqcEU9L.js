/*! 
 Build based on gin-vue-admin 
 Time : 1774087961000 */
import{_ as o,R as t,aQ as e,H as r,r as i,a as n,o as s}from"./vue.DkGHsHGM.js";const u={key:0,class:"gvaIcon gvaIcon-fullscreen-expand"},d={key:1,class:"gvaIcon gvaIcon-fullscreen-shrink"},f=Object.assign({name:"Screenfull"},{__name:"index",props:{width:{type:Number,default:22},height:{type:Number,default:22},fill:{type:String,default:"#48576a"}},setup(_){t(()=>{e.isEnabled&&e.on("change",l)}),r(()=>{e.off("change")});const c=()=>{e.isEnabled&&e.toggle()},a=i(!0),l=()=>{a.value=!e.isFullscreen};return(p,g)=>(s(),n("div",{onClick:c},[a.value?(s(),n("div",u)):(s(),n("div",d))]))}}),v=o(f,[["__scopeId","data-v-c1eb3148"]]);export{v as default};
