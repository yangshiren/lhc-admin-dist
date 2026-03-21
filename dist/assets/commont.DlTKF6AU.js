/*! 
 Build based on gin-vue-admin 
 Time : 1774087961000 */
import{i as o}from"./vue.DkGHsHGM.js";const a=async r=>{if(navigator.clipboard&&window.isSecureContext){try{await navigator.clipboard.writeText(r),o.success('账号 "'.concat(r,'" 复制成功'));return}catch(e){console.error("Clipboard API 失败，使用降级方案:",e)}return}try{const e=document.createElement("textarea");e.value=r,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select();const c=document.execCommand("copy");if(document.body.removeChild(e),c)o.success('账号 "'.concat(r,'" 复制成功'));else throw new Error("execCommand 复制失败")}catch(e){o.error("复制失败，请手动选中文本后按 Ctrl+C 复制"),console.error("所有复制方案均失败:",e)}};export{a as c};
