(self.webpackChunk=self.webpackChunk||[]).push([[7161],{9764:(a,e,l)=>{var t=l(9755);Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(a){a.addEventListener("mouseenter",Swal.stopTimer),a.addEventListener("mouseleave",Swal.resumeTimer)}});t("#No_tr").on("click",(function(){var a=t(this).val();t.ajax({type:"POST",url:"/api/bordaff/"+a,success:function(a){t.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_bord")&&t("#dtDynamicVerticalScrollExample_bord").DataTable().clear().destroy(),t("#dtDynamicVerticalScrollExample_bord").html(a).DataTable({bLengthChange:!1,lengthMenu:[[11,25,35,50,100,2e13],[10,15,25,50,100,"All"]],"font-size":"3rem"})}})})),t("#No_vr").on("click",(function(){var a=t(this).val();t.ajax({type:"POST",url:"/api/bordaff/"+a,success:function(a){t.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_bord")&&t("#dtDynamicVerticalScrollExample_bord").DataTable().clear().destroy(),t("#dtDynamicVerticalScrollExample_bord").html(a).DataTable({bLengthChange:!1,lengthMenu:[[11,25,35,50,100,2e13],[10,15,25,50,100,"All"]],"font-size":"3rem"})}})})),t("#No_sc").on("click",(function(){var a=t(this).val();t.ajax({type:"POST",url:"/api/bordaff/"+a,success:function(a){t.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_bord")&&t("#dtDynamicVerticalScrollExample_bord").DataTable().clear().destroy(),t("#dtDynamicVerticalScrollExample_bord").html(a).DataTable({bLengthChange:!1,lengthMenu:[[11,25,35,50,100,2e13],[10,15,25,50,100,"All"]],"font-size":"3rem"})}})})),t("#No_sc").on("click",(function(){var a=t(this).val();t.ajax({type:"POST",url:"/api/bordaff/"+a,success:function(a){t.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_bord")&&t("#dtDynamicVerticalScrollExample_bord").DataTable().clear().destroy(),t("#dtDynamicVerticalScrollExample_bord").html(a).DataTable({bLengthChange:!1,lengthMenu:[[11,25,35,50,100,2e13],[10,15,25,50,100,"All"]],"font-size":"3rem"})}})}))}},a=>{a.O(0,[9755],(()=>{return e=9764,a(a.s=e);var e}));a.O()}]);