(self.webpackChunk=self.webpackChunk||[]).push([[7161],{9764:(e,a,r)=>{var l=r(9755),t=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}});l("#No_tr").on("click",(function(){l(".loader2").show();var e=l(this).val();l.ajax({type:"POST",url:"/api/bordaff/"+e,success:function(e){l(".loader2").hide(),l.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_bord")&&l("#dtDynamicVerticalScrollExample_bord").DataTable().clear().destroy(),l("#dtDynamicVerticalScrollExample_bord").html(e).DataTable({bLengthChange:!1,lengthMenu:[[11,25,35,50,100,2e13],[10,15,25,50,100,"All"]],"font-size":"3rem"})},error:function(){l(".loader2").hide(),t.fire({icon:"error",title:"Probleme Technique !"})}})})),l("#No_vr").on("click",(function(){l(".loader2").show();var e=l(this).val();l.ajax({type:"POST",url:"/api/bordaff/"+e,success:function(e){l(".loader2").hide(),l.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_bord")&&l("#dtDynamicVerticalScrollExample_bord").DataTable().clear().destroy(),l("#dtDynamicVerticalScrollExample_bord").html(e).DataTable({bLengthChange:!1,lengthMenu:[[11,25,35,50,100,2e13],[10,15,25,50,100,"All"]],"font-size":"3rem"})},error:function(){l(".loader2").hide(),t.fire({icon:"error",title:"Probleme  !"})}})})),l("#No_sc").on("click",(function(){l(".loader2").show();var e=l(this).val();l.ajax({type:"POST",url:"/api/bordaff/"+e,success:function(e){l(".loader2").hide(),l.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_bord")&&l("#dtDynamicVerticalScrollExample_bord").DataTable().clear().destroy(),l("#dtDynamicVerticalScrollExample_bord").html(e).DataTable({bLengthChange:!1,lengthMenu:[[11,25,35,50,100,2e13],[10,15,25,50,100,"All"]],"font-size":"3rem"})},error:function(){l(".loader2").hide(),t.fire({icon:"error",title:"Probleme  !"})}})}))}},e=>{e.O(0,[9755],(()=>{return a=9764,e(e.s=a);var a}));e.O()}]);