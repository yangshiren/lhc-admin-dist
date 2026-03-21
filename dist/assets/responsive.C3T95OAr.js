/*! 
 Build based on gin-vue-admin 
 Time : 1774087961000 */
import{h as s}from"./index.Con7-IfI.js";import{R as r,aO as d,aP as c,a6 as u}from"./vue.DkGHsHGM.js";function f(e,o,t,n=!1){e.addEventListener&&typeof e.addEventListener=="function"&&e.addEventListener(o,t,n)}function v(e,o,t,n=!1){e.removeEventListener&&typeof e.removeEventListener=="function"&&e.removeEventListener(o,t,n)}const a=992;function m(){return document.body.getBoundingClientRect().width-1<a}function L(e){const o=s();function t(){if(!document.hidden){const i=m();o.toggleDevice(i?"mobile":"desktop")}}const n=d(t,100);r(()=>{n()}),c(()=>{f(window,"resize",n)}),u(()=>{v(window,"resize",n)})}export{L as u};
