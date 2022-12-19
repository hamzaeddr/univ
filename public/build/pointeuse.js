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

$("#salle_pointeuse").on("change", function () {
  var salle = $(this).val();
  $(".loader").show();
  $.ajax({
    type: "POST",
    url: "/api/pointeuse_aff/" + salle,
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
  list_pointeuse.forEach(function (obj) {
    $.ajax({
      type: "POST",
      url: "/api/pointeuse_download/" + obj.ip,
      success: function success(html) {
        Toast.fire({
          icon: 'success',
          title: 'Pointeuse connected'
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsS0FBSyxFQUFFO0FBRkUsU0FBWDtBQU9EO0FBWkksS0FBUDtBQWNELEdBZkQ7QUFpQkQsQ0FsQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hc3NpZHVpdGUvcG9pbnRldXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9wb2ludGV1c2UtLUludGVyZmFjZS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgU3dhbC5zdG9wVGltZXIpO1xyXG4gICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcblxyXG4gICQoXCIjc2FsbGVfcG9pbnRldXNlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzYWxsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKFwiLmxvYWRlclwiKS5zaG93KCk7XHJcbiAgXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX2FmZi9cIiArIHNhbGxlLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgJChcIi5sb2FkZXJcIikuaGlkZSgpO1xyXG4gIFxyXG4gICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlXCIpKSB7XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZVwiKVxyXG4gICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgIFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgXHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLmhhc0NsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UgdHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZSB0clwiKS5yZW1vdmVDbGFzcyhcIm9kZFwiKTtcclxuICAgICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UgdHJcIikucmVtb3ZlQ2xhc3MoXCJldmVuXCIpO1xyXG4gIFxyXG4gICAgICBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRSb3cgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKTtcclxuICAgICAgICBsaXN0X3BvaW50ZXVzZSA9IFtdO1xyXG4gICAgICAgIGxpc3RfcG9pbnRldXNlLnB1c2goe1xyXG4gICAgICAgICAgc246IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEpXCIpLmh0bWwoKSxcclxuICAgICAgICAgIGlwOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgyKVwiKS5odG1sKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICBcclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAkKFwiYm9keSAjY29ubmVjdF9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxpc3RfcG9pbnRldXNlLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFwiL2FwaS9wb2ludGV1c2VfY29ubmVjdC9cIiArIG9iai5pcCxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgIFxyXG4gICAgICBpZihodG1sID09ICd0cnVlJyl7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICB0aXRsZTogJ1BvaW50ZXVzZSBjb25uZWN0ZWQnLFxyXG4gICAgICB9KVxyXG4gIFxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgdGl0bGU6ICdwb2ludGV1c2Ugbm90IGNvbm5lY3RlZCcsXHJcbiAgICAgIH0pXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgICAgIH1cclxuICBcclxuICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9hdHRfcG9pbnRldXNlLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2F0dF9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQoXCIjZGF0ZXRpbWVfcG9pbnRldXNlXCIpLnZhbCgpO1xyXG4gICAgbGlzdF9wb2ludGV1c2UuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX2F0dC9cIiArIG9iai5pcCArIFwiL1wiICsgZGF0ZSAsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKSkge1xyXG4gICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKVxyXG4gICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vL3VzZXJfcG9pbnRldXNlLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI3VzZXJfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdF9wb2ludGV1c2UuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX3VzZXIvXCIgKyBvYmouaXAsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpXHJcbiAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9kb3dubG9hZF9wb2ludGV1c2UvLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjZG93bmxvYWRfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdF9wb2ludGV1c2UuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX2Rvd25sb2FkL1wiICsgb2JqLmlwLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUG9pbnRldXNlIGNvbm5lY3RlZCcsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pOyJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwib24iLCJzYWxsZSIsInZhbCIsInNob3ciLCJhamF4IiwidHlwZSIsInVybCIsInN1Y2Nlc3MiLCJodG1sIiwiaGlkZSIsImZuIiwiRGF0YVRhYmxlIiwiaXNEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJiTGVuZ3RoQ2hhbmdlIiwibGVuZ3RoTWVudSIsInNlbGVjdGVkIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY3VycmVudFJvdyIsImNsb3Nlc3QiLCJsaXN0X3BvaW50ZXVzZSIsInB1c2giLCJzbiIsImZpbmQiLCJpcCIsImZvckVhY2giLCJvYmoiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=