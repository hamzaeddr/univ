(self["webpackChunk"] = self["webpackChunk"] || []).push([["pointeuse"],{

/***/ "./assets/components/assiduite/pointeuse.js":
/*!**************************************************!*\
  !*** ./assets/components/assiduite/pointeuse.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

//////////////////////////////////////////////pointeuse--Interface////////////////////////////////////
var Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: function didOpen(toast) {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
}); ////////////////////////////////////////////////////////////////////:

$(document).ready(function () {
  //////////////////////////////// select all / unselect ////////////////////////////////////
  function selects() {
    var ele = document.getElementsByName('chk');

    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == 'checkbox') ele[i].checked = true;
    }
  }

  function deSelect() {
    var ele = document.getElementsByName('chk');

    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == 'checkbox') ele[i].checked = false;
    }
  }

  function pointeuse_af(var1) {
    $.ajax({
      type: "POST",
      url: "/api/pointeuse_aff/" + var1,
      success: function success(html) {
        $(".loader").hide();

        if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse")) {
          $("#dtDynamicVerticalScrollExample_pointeuse").DataTable().clear().destroy();
        }

        $("#dtDynamicVerticalScrollExample_pointeuse").html(html).DataTable({
          bLengthChange: false,
          lengthMenu: [[11, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
          "font-size": "3rem"
        });
      }
    });
    return var1;
  } //////////////////////////////// pointeuse check /uncheck ////////////////////////////////////


  $("body #p_check").on("click", function () {
    selects(); // $("#parlot_modal").show();
  });
  $("body #p_uncheck").on("click", function () {
    deSelect(); // $("#parlot_modal").show();
  });
  $("#salle_pointeuse").on("change", function () {
    var salle = $(this).val();
    $(".loader").show();
    pointeuse_af(salle);
  }); ////////////////////////////////////////////////////////////////////

  $("body #dtDynamicVerticalScrollExample_pointeuse").on("click", "tr", function () {
    var selected = $(this).hasClass("highlighty");
    $("body #dtDynamicVerticalScrollExample_pointeuse tr").removeClass("highlighty");
    $("body #dtDynamicVerticalScrollExample_pointeuse tr").removeClass("odd");
    $("body #dtDynamicVerticalScrollExample_pointeuse tr").removeClass("even");

    if (!selected) {
      $(this).addClass("highlighty");
      var currentRow = $(this).closest("tr");
      list_pointeuse = [];
      list_pointeuse.push({
        sn: currentRow.find("td:eq(1)").html(),
        ip: currentRow.find("td:eq(2)").html()
      });
    }
  });
  $("body #connect_pointeuse").on("click", function () {
    list_pointeuse.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/pointeuse_connect/" + obj.ip,
        success: function success(html) {
          if (html == 'true') {
            Toast.fire({
              icon: 'success',
              title: 'Pointeuse connected'
            });
          } else {
            Toast.fire({
              icon: 'error',
              title: 'pointeuse not connected'
            });
          }
        }
      });
    });
  }); ///////////////att_pointeuse//////////

  $("#att_pointeuse").on("click", function () {
    var date = $("#datetime_pointeuse").val();
    list_pointeuse.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/pointeuse_att/" + obj.ip + "/" + date,
        success: function success(html) {
          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse2")) {
            $("#dtDynamicVerticalScrollExample_pointeuse2").DataTable().clear().destroy();
          }

          $("#dtDynamicVerticalScrollExample_pointeuse2").html(html).DataTable({
            bLengthChange: false,
            lengthMenu: [[11, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
            "font-size": "3rem"
          });
        }
      });
    });
  }); ///////////////user_pointeuse//////////

  $("#user_pointeuse").on("click", function () {
    list_pointeuse.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/pointeuse_user/" + obj.ip,
        success: function success(html) {
          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse2")) {
            $("#dtDynamicVerticalScrollExample_pointeuse2").DataTable().clear().destroy();
          }

          $("#dtDynamicVerticalScrollExample_pointeuse2").html(html).DataTable({
            bLengthChange: false,
            lengthMenu: [[11, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
            "font-size": "3rem"
          });
        }
      });
    });
  }); ///////////////download_pointeuse//////////

  $("#download_pointeuse").on("click", function () {
    var date = $("#datetime_pointeuse").val();
    list_pointeuse.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/pointeuse_download/" + obj.ip + "/" + date,
        success: function success(html) {
          Toast.fire({
            icon: 'success',
            title: 'Pointeuse connected'
          });
        }
      });
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-3e9a6d","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-815e89"], () => (__webpack_exec__("./assets/components/assiduite/pointeuse.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDYSxJQUFGLENBQU87QUFDTEwsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTE0sUUFBQUEsR0FBRyxFQUFFLDZCQUE2QjJCLEdBQUcsQ0FBQ0YsRUFBakMsR0FBc0MsR0FBdEMsR0FBNENNLElBRjVDO0FBR0w5QixRQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFFdkI1QixVQUFBQSxLQUFLLENBQUNzRCxJQUFOLENBQVc7QUFDVEMsWUFBQUEsSUFBSSxFQUFFLFNBREc7QUFFVEMsWUFBQUEsS0FBSyxFQUFFO0FBRkUsV0FBWDtBQU9EO0FBWkksT0FBUDtBQWNELEtBZkQ7QUFtQkQsR0FyQkQ7QUFzQkMsQ0F4TUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hc3NpZHVpdGUvcG9pbnRldXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9wb2ludGV1c2UtLUludGVyZmFjZS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgU3dhbC5zdG9wVGltZXIpO1xyXG4gICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHNlbGVjdCBhbGwgLyB1bnNlbGVjdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gc2VsZWN0cygpeyAgXHJcbiAgdmFyIGVsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnY2hrJyk7ICBcclxuICBmb3IodmFyIGk9MDsgaTxlbGUubGVuZ3RoOyBpKyspeyAgXHJcbiAgICAgIGlmKGVsZVtpXS50eXBlPT0nY2hlY2tib3gnKSAgXHJcbiAgICAgICAgICBlbGVbaV0uY2hlY2tlZD10cnVlOyAgXHJcbiAgfSAgXHJcbn0gIFxyXG5mdW5jdGlvbiBkZVNlbGVjdCgpeyAgXHJcbiAgdmFyIGVsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnY2hrJyk7ICBcclxuICBmb3IodmFyIGk9MDsgaTxlbGUubGVuZ3RoOyBpKyspeyAgXHJcbiAgICAgIGlmKGVsZVtpXS50eXBlPT0nY2hlY2tib3gnKSAgXHJcbiAgICAgICAgICBlbGVbaV0uY2hlY2tlZD1mYWxzZTsgIFxyXG4gICAgICAgIFxyXG4gIH0gIFxyXG59ICAgIFxyXG5cclxuZnVuY3Rpb24gcG9pbnRldXNlX2FmKHZhcjEpIHtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFwiL2FwaS9wb2ludGV1c2VfYWZmL1wiICsgdmFyMSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgJChcIi5sb2FkZXJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIikpIHtcclxuICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlXCIpXHJcbiAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICBcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gdmFyMTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcG9pbnRldXNlIGNoZWNrIC91bmNoZWNrIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJChcImJvZHkgI3BfY2hlY2tcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbnNlbGVjdHMoKTsgIC8vICQoXCIjcGFybG90X21vZGFsXCIpLnNob3coKTtcclxuIFxyXG59KTtcclxuJChcImJvZHkgI3BfdW5jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuZGVTZWxlY3QoKTsgIC8vICQoXCIjcGFybG90X21vZGFsXCIpLnNob3coKTtcclxuIFxyXG59KTtcclxuICAkKFwiI3NhbGxlX3BvaW50ZXVzZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2FsbGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChcIi5sb2FkZXJcIikuc2hvdygpO1xyXG4gIFxyXG4gICAgcG9pbnRldXNlX2FmKHNhbGxlKTtcclxuICB9KTtcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgXHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLmhhc0NsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UgdHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZSB0clwiKS5yZW1vdmVDbGFzcyhcIm9kZFwiKTtcclxuICAgICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UgdHJcIikucmVtb3ZlQ2xhc3MoXCJldmVuXCIpO1xyXG4gIFxyXG4gICAgICBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRSb3cgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKTtcclxuICAgICAgICBsaXN0X3BvaW50ZXVzZSA9IFtdO1xyXG4gICAgICAgIGxpc3RfcG9pbnRldXNlLnB1c2goe1xyXG4gICAgICAgICAgc246IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEpXCIpLmh0bWwoKSxcclxuICAgICAgICAgIGlwOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgyKVwiKS5odG1sKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICBcclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAkKFwiYm9keSAjY29ubmVjdF9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxpc3RfcG9pbnRldXNlLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFwiL2FwaS9wb2ludGV1c2VfY29ubmVjdC9cIiArIG9iai5pcCxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgIFxyXG4gICAgICBpZihodG1sID09ICd0cnVlJyl7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICB0aXRsZTogJ1BvaW50ZXVzZSBjb25uZWN0ZWQnLFxyXG4gICAgICB9KVxyXG4gIFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdwb2ludGV1c2Ugbm90IGNvbm5lY3RlZCcsXHJcbiAgICAgIH0pXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgICAgIH1cclxuICBcclxuICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9hdHRfcG9pbnRldXNlLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2F0dF9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQoXCIjZGF0ZXRpbWVfcG9pbnRldXNlXCIpLnZhbCgpO1xyXG4gICAgbGlzdF9wb2ludGV1c2UuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX2F0dC9cIiArIG9iai5pcCArIFwiL1wiICsgZGF0ZSAsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKSkge1xyXG4gICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKVxyXG4gICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vL3VzZXJfcG9pbnRldXNlLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI3VzZXJfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdF9wb2ludGV1c2UuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX3VzZXIvXCIgKyBvYmouaXAsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpXHJcbiAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9kb3dubG9hZF9wb2ludGV1c2UvLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjZG93bmxvYWRfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRhdGUgPSAkKFwiI2RhdGV0aW1lX3BvaW50ZXVzZVwiKS52YWwoKTtcclxuICAgIGxpc3RfcG9pbnRldXNlLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3BvaW50ZXVzZV9kb3dubG9hZC9cIiArIG9iai5pcCArIFwiL1wiICsgZGF0ZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1BvaW50ZXVzZSBjb25uZWN0ZWQnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuIFxyXG5cclxuICB9KTtcclxuICB9KTsiXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3RzIiwiZWxlIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwidHlwZSIsImNoZWNrZWQiLCJkZVNlbGVjdCIsInBvaW50ZXVzZV9hZiIsInZhcjEiLCJhamF4IiwidXJsIiwic3VjY2VzcyIsImh0bWwiLCJoaWRlIiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImJMZW5ndGhDaGFuZ2UiLCJsZW5ndGhNZW51Iiwib24iLCJzYWxsZSIsInZhbCIsInNob3ciLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImN1cnJlbnRSb3ciLCJjbG9zZXN0IiwibGlzdF9wb2ludGV1c2UiLCJwdXNoIiwic24iLCJmaW5kIiwiaXAiLCJmb3JFYWNoIiwib2JqIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9