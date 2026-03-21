/*! 
 Build based on gin-vue-admin 
 Time : 1774089795000 */
import{i as e}from"./vue.buMZrsl1.js";const t=async t=>{if(navigator.clipboard&&window.isSecureContext)try{return await navigator.clipboard.writeText(t),void e.success('账号 "'.concat(t,'" 复制成功'))}catch(o){}else try{const o=document.createElement("textarea");o.value=t,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();const c=document.execCommand("copy");if(document.body.removeChild(o),!c)throw new Error("execCommand 复制失败");e.success('账号 "'.concat(t,'" 复制成功'))}catch(o){e.error("复制失败，请手动选中文本后按 Ctrl+C 复制")}};export{t as c};
