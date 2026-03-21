/*! 
 Build based on gin-vue-admin 
 Time : 1774087961000 */
import{s as e}from"./index.Con7-IfI.js";const o=t=>e({url:"/lhcReports/getLhcReportsList",method:"get",params:t}),s=t=>(t.searchAccount=String(t.searchAccount),e({url:"/lhcReports/getConditionOrderList",method:"GET",params:t})),n=t=>e({url:"/lhcReports/revocationAll",method:"POST",data:t}),c=t=>e({url:"/lhcReports/getRestockingOrderList",method:"GET",params:t}),l=t=>e({url:"/lhcReports/getMonthlyReport",method:"GET",params:t}),h=t=>e({url:"/lhcReports/getMonthlyReportDetails",method:"GET",params:t}),i=t=>e({url:"/lhcReports/getreportDetailsList",method:"GET",params:t}),g=t=>e({url:"/lhcReports/getMonthlyReport2",method:"GET",params:t});export{c as a,o as b,g as c,l as d,h as e,i as f,s as g,n as r};
