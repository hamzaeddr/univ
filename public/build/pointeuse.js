(self["webpackChunk"] = self["webpackChunk"] || []).push([["pointeuse"],{

/***/ "./assets/components/assiduite/pointeuse.js":
/*!**************************************************!*\
  !*** ./assets/components/assiduite/pointeuse.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

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
        sn: currentRow.find("td:eq(2)").html(),
        ip: currentRow.find("td:eq(3)").html()
      });
    }
  });
  $("body #connect_pointeuse").on("click", function () {
    var val = [];
    $(':checkbox:checked').each(function (i) {
      val[i] = $(this).val();
    }); // alert(val);

    if (val.length === 0) {
      list_pointeuse.forEach(function (obj) {
        $.ajax({
          type: "POST",
          url: "/api/pointeuse_connect/" + obj.ip + "/ip",
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
    } else {
      var _iterator = _createForOfIteratorHelper(val),
          _step;

      try {
        var _loop = function _loop() {
          var value = _step.value;
          $.ajax({
            type: "POST",
            url: "/api/pointeuse_connect/" + value + "/sn",
            success: function success(html) {
              if (html == 'true') {
                $('.' + value).removeClass("desconnected").removeClass("connected").addClass("connected");
                Toast.fire({
                  icon: 'success',
                  title: 'Pointeuse connected'
                });
              } else {
                $('.' + value).removeClass("desconnected").removeClass("connected").addClass("desconnected");
                Toast.fire({
                  icon: 'error',
                  title: 'pointeuse not connected'
                });
              }
            },
            error: function error() {} // timeout: 15000

          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-9e73f9","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-0eab75","vendors-node_modules_core-js_internals_function-apply_js-node_modules_core-js_internals_objec-c46689"], () => (__webpack_exec__("./assets/components/assiduite/pointeuse.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxFQWxNNEIsQ0E4TjVCOztBQUVBeEIsRUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJ5QixFQUF6QixDQUE0QixPQUE1QixFQUFxQyxZQUFZO0FBQy9DLFFBQUl1QixJQUFJLEdBQUdoRCxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjJCLEdBQXpCLEVBQVg7QUFDQVEsSUFBQUEsY0FBYyxDQUFDTSxPQUFmLENBQXVCLFVBQUNDLEdBQUQsRUFBUztBQUM5QjFDLE1BQUFBLENBQUMsQ0FBQ2EsSUFBRixDQUFPO0FBQ0xMLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxNLFFBQUFBLEdBQUcsRUFBRSw2QkFBNkI0QixHQUFHLENBQUNILEVBQWpDLEdBQXNDLEdBQXRDLEdBQTRDUyxJQUY1QztBQUdMakMsUUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBRXZCNUIsVUFBQUEsS0FBSyxDQUFDdUQsSUFBTixDQUFXO0FBQ1RDLFlBQUFBLElBQUksRUFBRSxTQURHO0FBRVRDLFlBQUFBLEtBQUssRUFBRTtBQUZFLFdBQVg7QUFPRDtBQVpJLE9BQVA7QUFjRCxLQWZEO0FBbUJELEdBckJEO0FBc0JDLENBdFBIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXNzaWR1aXRlL3BvaW50ZXVzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vcG9pbnRldXNlLS1JbnRlcmZhY2UvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246IFwidG9wLWVuZFwiLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcclxuICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgU3dhbC5yZXN1bWVUaW1lcik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBzZWxlY3QgYWxsIC8gdW5zZWxlY3QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBzZWxlY3RzKCl7ICBcclxuICB2YXIgZWxlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjaGsnKTsgIFxyXG4gIGZvcih2YXIgaT0wOyBpPGVsZS5sZW5ndGg7IGkrKyl7ICBcclxuICAgICAgaWYoZWxlW2ldLnR5cGU9PSdjaGVja2JveCcpICBcclxuICAgICAgICAgIGVsZVtpXS5jaGVja2VkPXRydWU7ICBcclxuICB9ICBcclxufSAgXHJcbmZ1bmN0aW9uIGRlU2VsZWN0KCl7ICBcclxuICB2YXIgZWxlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjaGsnKTsgIFxyXG4gIGZvcih2YXIgaT0wOyBpPGVsZS5sZW5ndGg7IGkrKyl7ICBcclxuICAgICAgaWYoZWxlW2ldLnR5cGU9PSdjaGVja2JveCcpICBcclxuICAgICAgICAgIGVsZVtpXS5jaGVja2VkPWZhbHNlOyAgXHJcbiAgICAgICAgXHJcbiAgfSAgXHJcbn0gICAgXHJcblxyXG5mdW5jdGlvbiBwb2ludGV1c2VfYWYodmFyMSkge1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogXCIvYXBpL3BvaW50ZXVzZV9hZmYvXCIgKyB2YXIxLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAkKFwiLmxvYWRlclwiKS5oaWRlKCk7XHJcblxyXG4gICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZVwiKSkge1xyXG4gICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZVwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIilcclxuICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuICAgICAgICB9KTtcclxuXHJcbiAgIFxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB2YXIxO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwb2ludGV1c2UgY2hlY2sgL3VuY2hlY2sgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKFwiYm9keSAjcF9jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuc2VsZWN0cygpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xyXG4gXHJcbn0pO1xyXG4kKFwiYm9keSAjcF91bmNoZWNrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5kZVNlbGVjdCgpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xyXG4gXHJcbn0pO1xyXG4gICQoXCIjc2FsbGVfcG9pbnRldXNlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzYWxsZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkKFwiLmxvYWRlclwiKS5zaG93KCk7XHJcbiAgXHJcbiAgICBwb2ludGV1c2VfYWYoc2FsbGUpO1xyXG4gIH0pO1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBcclxuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBzZWxlY3RlZCA9ICQodGhpcykuaGFzQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZSB0clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlIHRyXCIpLnJlbW92ZUNsYXNzKFwib2RkXCIpO1xyXG4gICAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZSB0clwiKS5yZW1vdmVDbGFzcyhcImV2ZW5cIik7XHJcbiAgXHJcbiAgICAgIGlmICghc2VsZWN0ZWQpIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICAgICB2YXIgY3VycmVudFJvdyA9ICQodGhpcykuY2xvc2VzdChcInRyXCIpO1xyXG4gICAgICAgIGxpc3RfcG9pbnRldXNlID0gW107XHJcbiAgICAgICAgbGlzdF9wb2ludGV1c2UucHVzaCh7XHJcbiAgICAgICAgICBzbjogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMilcIikuaHRtbCgpLFxyXG4gICAgICAgICAgaXA6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDMpXCIpLmh0bWwoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICB9KTtcclxuICBcclxuICAgICQoXCJib2R5ICNjb25uZWN0X3BvaW50ZXVzZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHZhbCA9IFtdO1xyXG4gICAgICAkKCc6Y2hlY2tib3g6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgdmFsW2ldID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGFsZXJ0KHZhbCk7XHJcbiAgICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgbGlzdF9wb2ludGV1c2UuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX2Nvbm5lY3QvXCIgKyBvYmouaXAgK1wiL2lwXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYoaHRtbCA9PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQb2ludGV1c2UgY29ubmVjdGVkJyxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdwb2ludGV1c2Ugbm90IGNvbm5lY3RlZCcsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgIGZvcihsZXQgdmFsdWUgb2YgdmFsKXtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFwiL2FwaS9wb2ludGV1c2VfY29ubmVjdC9cIiArIHZhbHVlICtcIi9zblwiLFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoaHRtbCA9PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICAgICQoJy4nK3ZhbHVlKS5yZW1vdmVDbGFzcyhcImRlc2Nvbm5lY3RlZFwiKS5yZW1vdmVDbGFzcyhcImNvbm5lY3RlZFwiKS5hZGRDbGFzcyhcImNvbm5lY3RlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BvaW50ZXVzZSBjb25uZWN0ZWQnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgJCgnLicrdmFsdWUpLnJlbW92ZUNsYXNzKFwiZGVzY29ubmVjdGVkXCIpLnJlbW92ZUNsYXNzKFwiY29ubmVjdGVkXCIpLmFkZENsYXNzKFwiZGVzY29ubmVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ3BvaW50ZXVzZSBub3QgY29ubmVjdGVkJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIHRpbWVvdXQ6IDE1MDAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgICBcclxuICBcclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9hdHRfcG9pbnRldXNlLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2F0dF9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQoXCIjZGF0ZXRpbWVfcG9pbnRldXNlXCIpLnZhbCgpO1xyXG4gICAgbGlzdF9wb2ludGV1c2UuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX2F0dC9cIiArIG9iai5pcCArIFwiL1wiICsgZGF0ZSAsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKSkge1xyXG4gICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKVxyXG4gICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vL3VzZXJfcG9pbnRldXNlLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI3VzZXJfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdF9wb2ludGV1c2UuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX3VzZXIvXCIgKyBvYmouaXAsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpXHJcbiAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9kb3dubG9hZF9wb2ludGV1c2UvLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjZG93bmxvYWRfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRhdGUgPSAkKFwiI2RhdGV0aW1lX3BvaW50ZXVzZVwiKS52YWwoKTtcclxuICAgIGxpc3RfcG9pbnRldXNlLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3BvaW50ZXVzZV9kb3dubG9hZC9cIiArIG9iai5pcCArIFwiL1wiICsgZGF0ZSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1BvaW50ZXVzZSBjb25uZWN0ZWQnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuIFxyXG5cclxuICB9KTtcclxuICB9KTsiXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3RzIiwiZWxlIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwidHlwZSIsImNoZWNrZWQiLCJkZVNlbGVjdCIsInBvaW50ZXVzZV9hZiIsInZhcjEiLCJhamF4IiwidXJsIiwic3VjY2VzcyIsImh0bWwiLCJoaWRlIiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImJMZW5ndGhDaGFuZ2UiLCJsZW5ndGhNZW51Iiwib24iLCJzYWxsZSIsInZhbCIsInNob3ciLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImN1cnJlbnRSb3ciLCJjbG9zZXN0IiwibGlzdF9wb2ludGV1c2UiLCJwdXNoIiwic24iLCJmaW5kIiwiaXAiLCJlYWNoIiwiZm9yRWFjaCIsIm9iaiIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ2YWx1ZSIsImVycm9yIiwiZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=