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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-3e9a6d","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-815e89"], () => (__webpack_exec__("./assets/components/assiduite/pointeuse.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVQyxJQUFWLEVBQWdCO0FBRXZCckIsUUFBQUEsS0FBSyxDQUFDMkMsSUFBTixDQUFXO0FBQ1RDLFVBQUFBLElBQUksRUFBRSxTQURHO0FBRVRDLFVBQUFBLEtBQUssRUFBRTtBQUZFLFNBQVg7QUFPRDtBQVpJLEtBQVA7QUFjRCxHQWZEO0FBaUJELENBbkJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXNzaWR1aXRlL3BvaW50ZXVzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vcG9pbnRldXNlLS1JbnRlcmZhY2UvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246IFwidG9wLWVuZFwiLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcclxuICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgU3dhbC5yZXN1bWVUaW1lcik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG5cclxuICAkKFwiI3NhbGxlX3BvaW50ZXVzZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2FsbGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJChcIi5sb2FkZXJcIikuc2hvdygpO1xyXG4gIFxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL3BvaW50ZXVzZV9hZmYvXCIgKyBzYWxsZSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICQoXCIubG9hZGVyXCIpLmhpZGUoKTtcclxuICBcclxuICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZVwiKSkge1xyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIilcclxuICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbiAgICAgICAgICB9KTtcclxuICBcclxuICAgICBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIFxyXG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBcInRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS5oYXNDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlIHRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UgdHJcIikucmVtb3ZlQ2xhc3MoXCJvZGRcIik7XHJcbiAgICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlIHRyXCIpLnJlbW92ZUNsYXNzKFwiZXZlblwiKTtcclxuICBcclxuICAgICAgaWYgKCFzZWxlY3RlZCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgICAgIHZhciBjdXJyZW50Um93ID0gJCh0aGlzKS5jbG9zZXN0KFwidHJcIik7XHJcbiAgICAgICAgbGlzdF9wb2ludGV1c2UgPSBbXTtcclxuICAgICAgICBsaXN0X3BvaW50ZXVzZS5wdXNoKHtcclxuICAgICAgICAgIHNuOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxKVwiKS5odG1sKCksXHJcbiAgICAgICAgICBpcDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMilcIikuaHRtbCgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgJChcImJvZHkgI2Nvbm5lY3RfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBsaXN0X3BvaW50ZXVzZS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX2Nvbm5lY3QvXCIgKyBvYmouaXAsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICBcclxuICAgICAgaWYoaHRtbCA9PSAndHJ1ZScpe1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgdGl0bGU6ICdQb2ludGV1c2UgY29ubmVjdGVkJyxcclxuICAgICAgfSlcclxuICBcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgIHRpdGxlOiAncG9pbnRldXNlIG5vdCBjb25uZWN0ZWQnLFxyXG4gICAgICB9KVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vYXR0X3BvaW50ZXVzZS8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNhdHRfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRhdGUgPSAkKFwiI2RhdGV0aW1lX3BvaW50ZXVzZVwiKS52YWwoKTtcclxuICAgIGxpc3RfcG9pbnRldXNlLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3BvaW50ZXVzZV9hdHQvXCIgKyBvYmouaXAgKyBcIi9cIiArIGRhdGUgLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIikpIHtcclxuICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIilcclxuICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy91c2VyX3BvaW50ZXVzZS8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiN1c2VyX3BvaW50ZXVzZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3RfcG9pbnRldXNlLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3BvaW50ZXVzZV91c2VyL1wiICsgb2JqLmlwLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKSkge1xyXG4gICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKVxyXG4gICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vZG93bmxvYWRfcG9pbnRldXNlLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2Rvd25sb2FkX3BvaW50ZXVzZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkYXRlID0gJChcIiNkYXRldGltZV9wb2ludGV1c2VcIikudmFsKCk7XHJcbiAgICBsaXN0X3BvaW50ZXVzZS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9wb2ludGV1c2VfZG93bmxvYWQvXCIgKyBvYmouaXAgKyBcIi9cIiArIGRhdGUsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdQb2ludGV1c2UgY29ubmVjdGVkJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7Il0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJvbiIsInNhbGxlIiwidmFsIiwic2hvdyIsImFqYXgiLCJ0eXBlIiwidXJsIiwic3VjY2VzcyIsImh0bWwiLCJoaWRlIiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImJMZW5ndGhDaGFuZ2UiLCJsZW5ndGhNZW51Iiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjdXJyZW50Um93IiwiY2xvc2VzdCIsImxpc3RfcG9pbnRldXNlIiwicHVzaCIsInNuIiwiZmluZCIsImlwIiwiZm9yRWFjaCIsIm9iaiIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==