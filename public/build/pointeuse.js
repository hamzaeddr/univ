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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxFQWpNNEIsQ0E2TjVCOztBQUVBeEIsRUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJ5QixFQUF6QixDQUE0QixPQUE1QixFQUFxQyxZQUFZO0FBQy9DLFFBQUl1QixJQUFJLEdBQUdoRCxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjJCLEdBQXpCLEVBQVg7QUFDQVEsSUFBQUEsY0FBYyxDQUFDTSxPQUFmLENBQXVCLFVBQUNDLEdBQUQsRUFBUztBQUM5QjFDLE1BQUFBLENBQUMsQ0FBQ2EsSUFBRixDQUFPO0FBQ0xMLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxNLFFBQUFBLEdBQUcsRUFBRSw2QkFBNkI0QixHQUFHLENBQUNILEVBQWpDLEdBQXNDLEdBQXRDLEdBQTRDUyxJQUY1QztBQUdMakMsUUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBRXZCNUIsVUFBQUEsS0FBSyxDQUFDdUQsSUFBTixDQUFXO0FBQ1RDLFlBQUFBLElBQUksRUFBRSxTQURHO0FBRVRDLFlBQUFBLEtBQUssRUFBRTtBQUZFLFdBQVg7QUFPRDtBQVpJLE9BQVA7QUFjRCxLQWZEO0FBbUJELEdBckJEO0FBc0JDLENBclBIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXNzaWR1aXRlL3BvaW50ZXVzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vcG9pbnRldXNlLS1JbnRlcmZhY2UvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICAgIHRvYXN0OiB0cnVlLFxyXG4gICAgcG9zaXRpb246IFwidG9wLWVuZFwiLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcclxuICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgU3dhbC5yZXN1bWVUaW1lcik7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBzZWxlY3QgYWxsIC8gdW5zZWxlY3QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNlbGVjdHMoKXsgIFxyXG4gIHZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXHJcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxyXG4gICAgICAgICAgZWxlW2ldLmNoZWNrZWQ9dHJ1ZTsgIFxyXG4gIH0gIFxyXG59ICBcclxuZnVuY3Rpb24gZGVTZWxlY3QoKXsgIFxyXG4gIHZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXHJcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxyXG4gICAgICAgICAgZWxlW2ldLmNoZWNrZWQ9ZmFsc2U7ICBcclxuICAgICAgICBcclxuICB9ICBcclxufSAgICBcclxuXHJcbmZ1bmN0aW9uIHBvaW50ZXVzZV9hZih2YXIxKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX2FmZi9cIiArIHZhcjEsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICQoXCIubG9hZGVyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlXCIpKSB7XHJcbiAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZVwiKVxyXG4gICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHZhcjE7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBvaW50ZXVzZSBjaGVjayAvdW5jaGVjayAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiQoXCJib2R5ICNwX2NoZWNrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5zZWxlY3RzKCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XHJcbiBcclxufSk7XHJcbiQoXCJib2R5ICNwX3VuY2hlY2tcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbmRlU2VsZWN0KCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XHJcbiBcclxufSk7XHJcbiAgJChcIiNzYWxsZV9wb2ludGV1c2VcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNhbGxlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQoXCIubG9hZGVyXCIpLnNob3coKTtcclxuICBcclxuICAgIHBvaW50ZXVzZV9hZihzYWxsZSk7XHJcbiAgfSk7XHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIFxyXG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBcInRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS5oYXNDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlIHRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UgdHJcIikucmVtb3ZlQ2xhc3MoXCJvZGRcIik7XHJcbiAgICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlIHRyXCIpLnJlbW92ZUNsYXNzKFwiZXZlblwiKTtcclxuICBcclxuICAgICAgaWYgKCFzZWxlY3RlZCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgICAgIHZhciBjdXJyZW50Um93ID0gJCh0aGlzKS5jbG9zZXN0KFwidHJcIik7XHJcbiAgICAgICAgbGlzdF9wb2ludGV1c2UgPSBbXTtcclxuICAgICAgICBsaXN0X3BvaW50ZXVzZS5wdXNoKHtcclxuICAgICAgICAgIHNuOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgyKVwiKS5odG1sKCksXHJcbiAgICAgICAgICBpcDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMylcIikuaHRtbCgpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgJChcImJvZHkgI2Nvbm5lY3RfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgdmFsID0gW107XHJcbiAgICAgICQoJzpjaGVja2JveDpjaGVja2VkJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICB2YWxbaV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gYWxlcnQodmFsKTtcclxuICAgICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBsaXN0X3BvaW50ZXVzZS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL2FwaS9wb2ludGV1c2VfY29ubmVjdC9cIiArIG9iai5pcCArXCIvaXBcIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZihodG1sID09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ1BvaW50ZXVzZSBjb25uZWN0ZWQnLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ3BvaW50ZXVzZSBub3QgY29ubmVjdGVkJyxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgZm9yKGxldCB2YWx1ZSBvZiB2YWwpe1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogXCIvYXBpL3BvaW50ZXVzZV9jb25uZWN0L1wiICsgdmFsdWUgK1wiL3NuXCIsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihodG1sID09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgICAgJCgnLicrdmFsdWUpLnJlbW92ZUNsYXNzKFwiZGVzY29ubmVjdGVkXCIpLnJlbW92ZUNsYXNzKFwiY29ubmVjdGVkXCIpLmFkZENsYXNzKFwiY29ubmVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUG9pbnRldXNlIGNvbm5lY3RlZCcsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAkKCcuJyt2YWx1ZSkucmVtb3ZlQ2xhc3MoXCJkZXNjb25uZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJjb25uZWN0ZWRcIikuYWRkQ2xhc3MoXCJkZXNjb25uZWN0ZWRcIik7XHJcblxyXG4gICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAncG9pbnRldXNlIG5vdCBjb25uZWN0ZWQnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy8gdGltZW91dDogMTUwMDBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgIFxyXG4gIFxyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vL2F0dF9wb2ludGV1c2UvLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjYXR0X3BvaW50ZXVzZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkYXRlID0gJChcIiNkYXRldGltZV9wb2ludGV1c2VcIikudmFsKCk7XHJcbiAgICBsaXN0X3BvaW50ZXVzZS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9wb2ludGV1c2VfYXR0L1wiICsgb2JqLmlwICsgXCIvXCIgKyBkYXRlICxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpXHJcbiAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vdXNlcl9wb2ludGV1c2UvLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjdXNlcl9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0X3BvaW50ZXVzZS5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9wb2ludGV1c2VfdXNlci9cIiArIG9iai5pcCxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIikpIHtcclxuICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIilcclxuICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vL2Rvd25sb2FkX3BvaW50ZXVzZS8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNkb3dubG9hZF9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQoXCIjZGF0ZXRpbWVfcG9pbnRldXNlXCIpLnZhbCgpO1xyXG4gICAgbGlzdF9wb2ludGV1c2UuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX2Rvd25sb2FkL1wiICsgb2JqLmlwICsgXCIvXCIgKyBkYXRlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnUG9pbnRldXNlIGNvbm5lY3RlZCcsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gXHJcblxyXG4gIH0pO1xyXG4gIH0pOyJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdHMiLCJlbGUiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJsZW5ndGgiLCJ0eXBlIiwiY2hlY2tlZCIsImRlU2VsZWN0IiwicG9pbnRldXNlX2FmIiwidmFyMSIsImFqYXgiLCJ1cmwiLCJzdWNjZXNzIiwiaHRtbCIsImhpZGUiLCJmbiIsIkRhdGFUYWJsZSIsImlzRGF0YVRhYmxlIiwiY2xlYXIiLCJkZXN0cm95IiwiYkxlbmd0aENoYW5nZSIsImxlbmd0aE1lbnUiLCJvbiIsInNhbGxlIiwidmFsIiwic2hvdyIsInNlbGVjdGVkIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY3VycmVudFJvdyIsImNsb3Nlc3QiLCJsaXN0X3BvaW50ZXVzZSIsInB1c2giLCJzbiIsImZpbmQiLCJpcCIsImVhY2giLCJmb3JFYWNoIiwib2JqIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInZhbHVlIiwiZXJyb3IiLCJkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==