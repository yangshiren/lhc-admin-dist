/*! 
 Build based on gin-vue-admin 
 Time : 1774089795000 */
import{_ as e,R as a,aQ as s,H as n,r as l,a as t,o as c}from"./vue.buMZrsl1.js";const o={key:0,class:"gvaIcon gvaIcon-fullscreen-expand"},i={key:1,class:"gvaIcon gvaIcon-fullscreen-shrink"},r=e(Object.assign({name:"Screenfull"},{__name:"index",props:{width:{type:Number,default:22},height:{type:Number,default:22},fill:{type:String,default:"#48576a"}},setup(e){a((()=>{s.isEnabled&&s.on("change",d)})),n((()=>{s.off("change")}));const r=()=>{s.isEnabled&&s.toggle()},u=l(!0),d=()=>{u.value=!s.isFullscreen};return(e,a)=>(c(),t("div",{onClick:r},[u.value?(c(),t("div",o)):(c(),t("div",i))]))}}),[["__scopeId","data-v-c1eb3148"]]);export{r as default};
