(self.webpackChunk=self.webpackChunk||[]).push([[906],{8471:(e,t,r)=>{var o=r(9755);r(3710),r(7042),r(9826),r(1539),r(9554),r(4747);var a=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}});o(document).ready((function(){function e(e,t,r){return o(".loader2").show(),o.ajax({type:"POST",url:"/api/Seance_aff/"+e+"/"+t+"/"+r,success:function(e){o(".loader2").hide(),o.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample")&&o("#dtDynamicVerticalScrollExample").DataTable().clear().destroy(),o("#dtDynamicVerticalScrollExample").html(e).DataTable({bLengthChange:!1,lengthMenu:[[10,20,30,40,50,2e13],[10,15,25,50,100,"All"]],"font-size":"3rem"})},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}}),e}o("#dtDynamicVerticalScrollExample").DataTable({bLengthChange:!1,lengthMenu:[[13,25,35,50,100,2e13],[10,15,25,50,100,"All"]]}),o("#etablissement").prop("selectedIndex",1),o("#formation").prop("selectedIndex",1),o("#promotion").prop("selectedIndex",1);var t=new Date,r=("0"+t.getDate()).slice(-2),i=("0"+(t.getMonth()+1)).slice(-2),n=t.getFullYear()+"-"+i+"-"+r;o("#datetime").val(n);var c=o("#promotion").val(),l=[];e(c,n,"stage"),o("#etablissement").on("change",(function(){var t=o(this).val();o.ajax({type:"POST",url:"/api/Formation_aff/"+t,success:function(t){o(".loader2").hide(),o("#formation").html(t),o("#formation").prop("selectedIndex",1),o.ajax({type:"POST",url:"/api/Promotion_aff/"+o("#formation").val(),success:function(t){o(".loader2").hide(),o("#promotion").html(t),o("#promotion").prop("selectedIndex",1),e(o("#promotion").val(),o("#datetime").val(),"stage")},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})})),o("#formation").on("change",(function(){var t=o(this).val();o.ajax({type:"POST",url:"/api/Promotion_aff/"+t,success:function(t){o(".loader2").hide(),o("#promotion").html(t),o("#promotion").prop("selectedIndex",1),e(o("#promotion").val(),o("#datetime").val(),"stage")},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})})),o("#promotion").on("change",(function(){e(o(this).val(),o("#datetime").val(),"stage")})),o("#datetime").on("change",(function(){var t=o(this).val();e(o("#promotion").val(),t,"stage")})),o("body #dtDynamicVerticalScrollExample").on("click","tr",(function(){var e=o(this).hasClass("highlighty");if(o("body #dtDynamicVerticalScrollExample tr").removeClass("highlighty"),o("body #dtDynamicVerticalScrollExample tr").removeClass("odd"),o("body #dtDynamicVerticalScrollExample tr").removeClass("even"),!e){o(this).addClass("highlighty");var t=o(this).closest("tr"),r=t.find("td:eq(1)").html();(l=[]).push({promotion:t.find("td:eq(2)").html(),seance:t.find("td:eq(3)").html(),groupe:t.find("td:eq(10)").html(),hd:t.find("td:eq(8)").html(),module:t.find("td:eq(14)").html(),sale:t.find("td:eq(15)").html(),existe:t.find("td:eq(11)").html(),statut:t.find("td:eq(1)").html()}),o("#traite_epreuve").hide(),o("#retraiter_seance").hide(),o("#deverouiller-modal").hide(),o("#verouiller-modal").hide(),o("#assiduite_print").hide(),"1"==r&&(o("#traite_epreuve").css({display:"none"}),o("#retraiter_seance").show(),o("#verouiller-modal").show(),o("#assiduite_print").show()),"2"==r?(o("#deverouiller-modal").show(),o("#assiduite_print").show()):o("#traite_epreuve").show()}"1"!=r&&"2"!=r||l.forEach((function(e){o.ajax({type:"POST",url:"/api/count_seance/"+e.seance,data:{seance:e.seance},success:function(e){o(".loader2").hide(),o(".grid").html(e)},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("body #dtDynamicVerticalScrollExample").on("dblclick","tr",(function(){o("#etudiant-modal").modal("toggle"),o("#etudiant-modal").modal("show"),l.forEach((function(e){o("#Seance_etud").val(e.seance),o("#salle_etud").val(e.nature+" / "+e.salle),o("#element_etud").val(e.element),o("#Enseignant_etud").val(e.enseignant),o("#Hd_etud").val(e.hd),o("#Hf_etud").val(e.hf),o("#group_etud").val(e.groupe),o(".loader2").hide(),o.ajax({type:"POST",url:"/api/Etud_aff",data:{promotion:e.promotion,seance:e.seance,groupe:e.groupe,existe:e.existe},success:function(e){o.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample2")&&o("#dtDynamicVerticalScrollExample2").DataTable().clear().destroy(),o("#dtDynamicVerticalScrollExample2").html(e).DataTable({bLengthChange:!1,lengthMenu:[[12,24,36,48,60,2e13],[10,15,25,50,100,"All"]]})},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("body #pointage").on("click",(function(){l.forEach((function(e){1==e.statut&&o.ajax({type:"POST",url:"/api/Etud_pointage",data:{promo:o("#promotion").val(),date:o("#datetime").val(),hd:e.hd},success:function(e){o.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample4")&&o("#dtDynamicVerticalScrollExample4").DataTable().clear().destroy(),o("#dtDynamicVerticalScrollExample4").html(e).DataTable({bLengthChange:!1,lengthMenu:[[16,32,48,64,74,2e13],[10,15,25,50,100,"All"]]}),o(".loader2").hide()},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("body #traite_epreuve").on("click",(function(){l.forEach((function(t){""===t.groupe&&(t.groupe="empty"),"1"!=t.statut?o.ajax({type:"POST",url:"/api/traitement_assiduite",data:{seance:t.seance,date:o("#datetime").val(),type:"traite"},success:function(t){o(".loader2").hide(),e(o("#promotion").val(),o("#datetime").val(),"CR"),a.fire({icon:"success",title:"seance traité avec succes"}),o(".grid").html(t),o("#traite_epreuve").hide(),o("#retraiter_seance").hide(),o("#deverouiller-modal").hide(),o("#verouiller-modal").hide(),o("#assiduite_print").hide(),o("#retraiter_seance").show(),o("#verouiller-modal").show(),o("#assiduite_print").show()},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}}):(o(".loader2").hide(),a.fire({icon:"error",title:"seance deja traité"}))}))})),o("body #retraiter_seance").on("click",(function(){l.forEach((function(t){""===t.groupe&&(t.groupe="empty"),o.ajax({type:"POST",url:"/api/traitement_assiduite",data:{seance:t.seance,date:o("#datetime").val(),type:"retraite"},success:function(t){o(".loader2").hide(),e(o("#promotion").val(),o("#datetime").val(),"CR"),o(".grid").html(t),o("#traite_epreuve").hide(),o("#retraiter_seance").hide(),o("#deverouiller-modal").hide(),o("#verouiller-modal").hide(),o("#assiduite_print").hide(),o("#retraiter_seance").show(),o("#verouiller-modal").show(),o("#assiduite_print").show()},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("body #assiduite_print").on("click",(function(){l.forEach((function(e){window.open("/assiduite/assiduites/pdf/"+e.seance,"_blank")}))})),o("body #remove").on("click",(function(){l.forEach((function(t){o.ajax({type:"POST",url:"/api/remove_seance/"+t.seance,data:{seance:t.seance},success:function(t){o(".loader2").hide(),e(o("#promotion").val(),o("#datetime").val(),"CR")},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("body #existe").on("click",(function(){l.forEach((function(t){o.ajax({type:"POST",url:"/api/exist_seance/"+t.seance,data:{seance:t.seance},success:function(t){o(".loader2").hide(),e(o("#promotion").val(),o("#datetime").val(),"CR")},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("body #sign").on("click",(function(){l.forEach((function(t){o.ajax({type:"POST",url:"/api/sign_seance/"+t.seance,data:{seance:t.seance},success:function(t){o(".loader2").hide(),a.fire({icon:"success",title:"seance signé"}),e(o("#promotion").val(),o("#datetime").val(),"CR")},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("body #cancel").on("click",(function(){l.forEach((function(t){o.ajax({type:"POST",url:"/api/cancel_seance/"+t.seance,data:{seance:t.seance},success:function(t){e(o("#promotion").val(),o("#datetime").val(),"CR"),o(".loader2").hide()},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("body #deverouiller-modal").on("click",(function(){l.forEach((function(t){o.ajax({type:"POST",url:"/api/dever_seance/"+t.seance,data:{seance:t.seance},success:function(t){e(o("#promotion").val(),o("#datetime").val(),"CR"),o(".loader2").hide()},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("body #modisalle").on("click",(function(){var t=o("#salle").val();l.forEach((function(r){o.ajax({type:"POST",url:"/api/modifier_salle/"+r.seance+"/"+t,data:{seance:r.seance},success:function(t){o(".loader2").hide(),e(o("#promotion").val(),o("#datetime").val(),"CR")},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("body #verouiller-modal").on("click",(function(){l.forEach((function(t){o.ajax({type:"POST",url:"/api/lock_seance/"+t.seance,data:{seance:t.seance},success:function(t){e(o("#promotion").val(),o("#datetime").val(),"CR"),o(".loader2").hide()},error:function(){o(".loader2").hide(),a.fire({icon:"error",title:"Probleme  !"})}})}))})),o("button").on("click",(function(){o(".loader2").fadeIn()})),o(".close").on("click",(function(){o(".loader2").fadeOut()}))}))},1223:(e,t,r)=>{var o=r(5112),a=r(30),i=r(3070),n=o("unscopables"),c=Array.prototype;null==c[n]&&i.f(c,n,{configurable:!0,value:a(null)}),e.exports=function(e){c[n][e]=!0}},8533:(e,t,r)=>{"use strict";var o=r(2092).forEach,a=r(9341)("forEach");e.exports=a?[].forEach:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}},2092:(e,t,r)=>{var o=r(9974),a=r(1702),i=r(8361),n=r(7908),c=r(6244),l=r(5417),s=a([].push),d=function(e){var t=1==e,r=2==e,a=3==e,d=4==e,u=6==e,f=7==e,p=5==e||u;return function(m,h,v,y){for(var g,b,x=n(m),S=i(x),T=o(h,v),_=c(S),E=0,P=y||l,D=t?P(m,_):r||f?P(m,0):void 0;_>E;E++)if((p||E in S)&&(b=T(g=S[E],E,x),e))if(t)D[E]=b;else if(b)switch(e){case 3:return!0;case 5:return g;case 6:return E;case 2:s(D,g)}else switch(e){case 4:return!1;case 7:s(D,g)}return u?-1:a||d?d:D}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterReject:d(7)}},1194:(e,t,r)=>{var o=r(7293),a=r(5112),i=r(7392),n=a("species");e.exports=function(e){return i>=51||!o((function(){var t=[];return(t.constructor={})[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},9341:(e,t,r)=>{"use strict";var o=r(7293);e.exports=function(e,t){var r=[][e];return!!r&&o((function(){r.call(null,t||function(){throw 1},1)}))}},206:(e,t,r)=>{var o=r(1702);e.exports=o([].slice)},7475:(e,t,r)=>{var o=r(7854),a=r(3157),i=r(4411),n=r(111),c=r(5112)("species"),l=o.Array;e.exports=function(e){var t;return a(e)&&(t=e.constructor,(i(t)&&(t===l||a(t.prototype))||n(t)&&null===(t=t[c]))&&(t=void 0)),void 0===t?l:t}},5417:(e,t,r)=>{var o=r(7475);e.exports=function(e,t){return new(o(e))(0===t?0:t)}},6135:(e,t,r)=>{"use strict";var o=r(4948),a=r(3070),i=r(9114);e.exports=function(e,t,r){var n=o(t);n in e?a.f(e,n,i(0,r)):e[n]=r}},8324:e=>{e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(e,t,r)=>{var o=r(317)("span").classList,a=o&&o.constructor&&o.constructor.prototype;e.exports=a===Object.prototype?void 0:a},9974:(e,t,r)=>{var o=r(1702),a=r(9662),i=o(o.bind);e.exports=function(e,t){return a(e),void 0===t?e:i?i(e,t):function(){return e.apply(t,arguments)}}},3157:(e,t,r)=>{var o=r(4326);e.exports=Array.isArray||function(e){return"Array"==o(e)}},4411:(e,t,r)=>{var o=r(1702),a=r(7293),i=r(614),n=r(648),c=r(5005),l=r(2788),s=function(){},d=[],u=c("Reflect","construct"),f=/^\s*(?:class|function)\b/,p=o(f.exec),m=!f.exec(s),h=function(e){if(!i(e))return!1;try{return u(s,d,e),!0}catch(e){return!1}},v=function(e){if(!i(e))return!1;switch(n(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return m||!!p(f,l(e))}catch(e){return!0}};v.sham=!0,e.exports=!u||a((function(){var e;return h(h.call)||!h(Object)||!h((function(){e=!0}))||e}))?v:h},30:(e,t,r)=>{var o,a=r(9670),i=r(6048),n=r(748),c=r(3501),l=r(490),s=r(317),d=r(6200),u=d("IE_PROTO"),f=function(){},p=function(e){return"<script>"+e+"</"+"script>"},m=function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t},h=function(){try{o=new ActiveXObject("htmlfile")}catch(e){}var e,t;h="undefined"!=typeof document?document.domain&&o?m(o):((t=s("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F):m(o);for(var r=n.length;r--;)delete h.prototype[n[r]];return h()};c[u]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(f.prototype=a(e),r=new f,f.prototype=null,r[u]=e):r=h(),void 0===t?r:i(r,t)}},6048:(e,t,r)=>{var o=r(9781),a=r(3070),i=r(9670),n=r(5656),c=r(1956);e.exports=o?Object.defineProperties:function(e,t){i(e);for(var r,o=n(t),l=c(t),s=l.length,d=0;s>d;)a.f(e,r=l[d++],o[r]);return e}},1956:(e,t,r)=>{var o=r(6324),a=r(748);e.exports=Object.keys||function(e){return o(e,a)}},288:(e,t,r)=>{"use strict";var o=r(1694),a=r(648);e.exports=o?{}.toString:function(){return"[object "+a(this)+"]"}},9826:(e,t,r)=>{"use strict";var o=r(2109),a=r(2092).find,i=r(1223),n="find",c=!0;n in[]&&Array(1).find((function(){c=!1})),o({target:"Array",proto:!0,forced:c},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i(n)},9554:(e,t,r)=>{"use strict";var o=r(2109),a=r(8533);o({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},7042:(e,t,r)=>{"use strict";var o=r(2109),a=r(7854),i=r(3157),n=r(4411),c=r(111),l=r(1400),s=r(6244),d=r(5656),u=r(6135),f=r(5112),p=r(1194),m=r(206),h=p("slice"),v=f("species"),y=a.Array,g=Math.max;o({target:"Array",proto:!0,forced:!h},{slice:function(e,t){var r,o,a,f=d(this),p=s(f),h=l(e,p),b=l(void 0===t?p:t,p);if(i(f)&&(r=f.constructor,(n(r)&&(r===y||i(r.prototype))||c(r)&&null===(r=r[v]))&&(r=void 0),r===y||void 0===r))return m(f,h,b);for(o=new(void 0===r?y:r)(g(b-h,0)),a=0;h<b;h++,a++)h in f&&u(o,a,f[h]);return o.length=a,o}})},3710:(e,t,r)=>{var o=r(1702),a=r(1320),i=Date.prototype,n="Invalid Date",c="toString",l=o(i.toString),s=o(i.getTime);String(new Date(NaN))!=n&&a(i,c,(function(){var e=s(this);return e==e?l(this):n}))},1539:(e,t,r)=>{var o=r(1694),a=r(1320),i=r(288);o||a(Object.prototype,"toString",i,{unsafe:!0})},4747:(e,t,r)=>{var o=r(7854),a=r(8324),i=r(8509),n=r(8533),c=r(8880),l=function(e){if(e&&e.forEach!==n)try{c(e,"forEach",n)}catch(t){e.forEach=n}};for(var s in a)a[s]&&l(o[s]&&o[s].prototype);l(i)}},e=>{e.O(0,[9755,9983],(()=>{return t=8471,e(e.s=t);var t}));e.O()}]);