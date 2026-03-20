/*! 
 Build based on gin-vue-admin 
 Time : 1774033438000 */
import{s as t}from"./index.BteXrqW0.js";const r=r=>t({url:"/lhcReports/getLhcReportsList",method:"get",params:r}),e=r=>(r.searchAccount=String(r.searchAccount),t({url:"/lhcReports/getConditionOrderList",method:"GET",params:r})),s=r=>t({url:"/lhcReports/revocationAll",method:"POST",data:r}),o=r=>t({url:"/lhcReports/getRestockingOrderList",method:"GET",params:r}),a=r=>t({url:"/lhcReports/getMonthlyReport",method:"GET",params:r}),l=r=>t({url:"/lhcReports/getMonthlyReportDetails",method:"GET",params:r}),h=r=>t({url:"/lhcReports/getreportDetailsList",method:"GET",params:r}),p=r=>t({url:"/lhcReports/getMonthlyReport2",method:"GET",params:r});export{o as a,r as b,p as c,a as d,l as e,h as f,e as g,s as r};
