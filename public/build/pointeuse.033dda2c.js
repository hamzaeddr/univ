(self.webpackChunk=self.webpackChunk||[]).push([[1779],{1324:(e,t,n)=>{var o=n(9755);function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}n(9826),n(1539),n(9554),n(4747),n(7042),n(8309),n(1038),n(8783),n(4916),n(2526),n(1817),n(2165),n(6992),n(3948),n(9753);var a=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}});o(document).ready((function(){o("body #p_check").on("click",(function(){!function(){for(var e=document.getElementsByName("chk"),t=0;t<e.length;t++)"checkbox"==e[t].type&&(e[t].checked=!0)}()})),o("body #p_uncheck").on("click",(function(){!function(){for(var e=document.getElementsByName("chk"),t=0;t<e.length;t++)"checkbox"==e[t].type&&(e[t].checked=!1)}()})),o("#salle_pointeuse").on("change",(function(){var e,t=o(this).val();o(".loader").show(),e=t,o.ajax({type:"POST",url:"/api/pointeuse_aff/"+e,success:function(e){o.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse")&&o("#dtDynamicVerticalScrollExample_pointeuse").DataTable().clear().destroy(),o("#dtDynamicVerticalScrollExample_pointeuse").html(e).DataTable({bLengthChange:!1,lengthMenu:[[11,25,35,50,100,2e13],[10,15,25,50,100,"All"]],"font-size":"3rem"})}})})),o("body #dtDynamicVerticalScrollExample_pointeuse").on("click","tr",(function(){var e=o(this).hasClass("highlighty");if(o("body #dtDynamicVerticalScrollExample_pointeuse tr").removeClass("highlighty"),o("body #dtDynamicVerticalScrollExample_pointeuse tr").removeClass("odd"),o("body #dtDynamicVerticalScrollExample_pointeuse tr").removeClass("even"),!e){o(this).addClass("highlighty");var t=o(this).closest("tr");list_pointeuse=[],list_pointeuse.push({sn:t.find("td:eq(2)").html(),ip:t.find("td:eq(3)").html()})}})),o("body #connect_pointeuse").on("click",(function(){o(".loader2").show();var e=[];if(o(":checkbox:checked").each((function(t){e[t]=o(this).val()})),0===e.length)list_pointeuse.forEach((function(e){o.ajax({type:"POST",url:"/api/pointeuse_connect/"+e.ip+"/ip",success:function(e){o(".loader2").hide(),"true"==e?a.fire({icon:"success",title:"Pointeuse connected"}):a.fire({icon:"error",title:"pointeuse not connected"})},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}));else{var t,n=i(e);try{var r=function(){var e=t.value;o.ajax({type:"POST",url:"/api/pointeuse_connect/"+e+"/sn",success:function(t){o(".loader2").hide(),"true"==t?(o("."+e).removeClass("desconnected").removeClass("connected").addClass("connected"),a.fire({icon:"success",title:"Pointeuse connected"})):(o("."+e).removeClass("desconnected").removeClass("connected").addClass("desconnected"),a.fire({icon:"error",title:"pointeuse not connected"}))},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})};for(n.s();!(t=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}}})),o("#att_pointeuse").on("click",(function(){o(".loader2").show();var e=o("#datetime_pointeuse").val();list_pointeuse.forEach((function(t){o.ajax({type:"POST",url:"/api/pointeuse_att/"+t.ip+"/"+e,success:function(e){o(".loader2").hide(),o.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse2")&&o("#dtDynamicVerticalScrollExample_pointeuse2").DataTable().clear().destroy(),o("#dtDynamicVerticalScrollExample_pointeuse2").html(e).DataTable({bLengthChange:!1,lengthMenu:[[11,25,35,50,100,2e13],[10,15,25,50,100,"All"]],"font-size":"3rem"})},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme technique  !"})}})}))})),o("#user_pointeuse").on("click",(function(){o(".loader2").show(),list_pointeuse.forEach((function(e){o.ajax({type:"POST",url:"/api/pointeuse_user/"+e.ip,success:function(e){o(".loader2").hide(),o.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse2")&&o("#dtDynamicVerticalScrollExample_pointeuse2").DataTable().clear().destroy(),o("#dtDynamicVerticalScrollExample_pointeuse2").html(e).DataTable({bLengthChange:!1,lengthMenu:[[11,25,35,50,100,2e13],[10,15,25,50,100,"All"]],"font-size":"3rem"})},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("#download_pointeuse").on("click",(function(){o(".loader2").show();var e=o("#datetime_pointeuse").val();list_pointeuse.forEach((function(t){o.ajax({type:"POST",url:"/api/pointeuse_download/"+t.ip+"/"+e,success:function(e){o(".loader2").hide(),a.fire({icon:"success",title:"la pointeuse bien importée."})},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme technique  !"})}})}))})),o("#residanat_Importe").on("click",(function(){o(".loader2").show();var e=o("#datetime_pointeuse").val();if(!e)return a.fire({icon:"error",title:"Veuillez remplir la date  !"}),void o(".loader2").hide();list_pointeuse.forEach((function(t){o.ajax({type:"POST",url:"/api/pointeuse_download/"+t.ip+"/"+e,success:function(e){o(".loader2").hide(),a.fire({icon:"success",title:"la pointeuse bien importée."})},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme technique  !"})}})}))}))}))}},e=>{e.O(0,[9755,6488,1259,6814],(()=>{return t=1324,e(e.s=t);var t}));e.O()}]);