(self.webpackChunk=self.webpackChunk||[]).push([[9437],{3276:(e,t,n)=>{var r=n(9755);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,c=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw c}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(9826),n(1539),n(9554),n(4747),n(7042),n(8309),n(1038),n(8783),n(4916),n(2526),n(1817),n(2165),n(6992),n(3948),n(9753);var c=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}});r(document).ready((function(){r("body #p_check").on("click",(function(){!function(){for(var e=document.getElementsByName("chk"),t=0;t<e.length;t++)"checkbox"==e[t].type&&(e[t].checked=!0)}()})),r("body #p_uncheck").on("click",(function(){!function(){for(var e=document.getElementsByName("chk"),t=0;t<e.length;t++)"checkbox"==e[t].type&&(e[t].checked=!1)}()})),r("body #dtDynamicVerticalScrollresidanat_pointeuse").on("click","tr",(function(){var e=r(this).hasClass("highlighty");if(r("body #dtDynamicVerticalScrollresidanat_pointeuse tr").removeClass("highlighty"),r("body #dtDynamicVerticalScrollresidanat_pointeuse tr").removeClass("odd"),r("body #dtDynamicVerticalScrollresidanat_pointeuse tr").removeClass("even"),!e){r(this).addClass("highlighty");var t=r(this).closest("tr");list_pointeuse=[],list_pointeuse.push({sn:t.find("td:eq(2)").html(),ip:t.find("td:eq(3)").html()})}})),r(document).ready((function(){r("#connect_pointeuse_residanat").click((function(){r(".loader2").show();var e=[];if(r(":checkbox:checked").each((function(t){e[t]=r(this).val()})),0===e.length)list_pointeuse.forEach((function(e){r.ajax({type:"POST",url:"/api/pointeuse_connect/"+e.ip+"/ip",success:function(e){r(".loader2").hide(),"true"==e?c.fire({icon:"success",title:"Pointeuse connected"}):c.fire({icon:"error",title:"pointeuse not connected"})}})}));else{var t,n=o(e);try{var i=function(){var e=t.value;r.ajax({type:"POST",url:"/api/pointeuse_connect/"+e+"/sn",success:function(t){r(".loader2").hide(),"true"==t?(r("."+e).removeClass("desconnected").removeClass("connected").addClass("connected"),c.fire({icon:"success",title:"Pointeuse connected"})):(r("."+e).removeClass("desconnected").removeClass("connected").addClass("desconnected"),c.fire({icon:"error",title:"pointeuse not connected"}))},error:function(){}})};for(n.s();!(t=n.n()).done;)i()}catch(e){n.e(e)}finally{n.f()}}}))}))}))}},e=>{e.O(0,[9755,6488,1259,6814],(()=>{return t=3276,e(e.s=t);var t}));e.O()}]);