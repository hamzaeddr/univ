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
    $(".loader2").show();
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
            $(".loader2").hide();

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
          },
          error: function error() {
            $(".loader2").hide();
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !'
            });
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
              $(".loader2").hide();

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
            error: function error() {
              $(".loader2").hide();
              Toast.fire({
                icon: 'error',
                title: 'Probleme  !'
              });
            } // timeout: 15000

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
    $(".loader2").show();
    var date = $("#datetime_pointeuse").val();
    list_pointeuse.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/pointeuse_att/" + obj.ip + "/" + date,
        success: function success(html) {
          $(".loader2").hide();

          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse2")) {
            $("#dtDynamicVerticalScrollExample_pointeuse2").DataTable().clear().destroy();
          }

          $("#dtDynamicVerticalScrollExample_pointeuse2").html(html).DataTable({
            bLengthChange: false,
            lengthMenu: [[11, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
            "font-size": "3rem"
          });
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme technique  !'
          });
        }
      });
    });
  }); ///////////////user_pointeuse//////////

  $("#user_pointeuse").on("click", function () {
    $(".loader2").show();
    list_pointeuse.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/pointeuse_user/" + obj.ip,
        success: function success(html) {
          $(".loader2").hide();

          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse2")) {
            $("#dtDynamicVerticalScrollExample_pointeuse2").DataTable().clear().destroy();
          }

          $("#dtDynamicVerticalScrollExample_pointeuse2").html(html).DataTable({
            bLengthChange: false,
            lengthMenu: [[11, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
            "font-size": "3rem"
          });
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme  !'
          });
        }
      });
    });
  }); ///////////////download_pointeuse//////////

  $("#download_pointeuse").on("click", function () {
    $(".loader2").show();
    var date = $("#datetime_pointeuse").val();
    list_pointeuse.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/pointeuse_download/" + obj.ip + "/" + date,
        success: function success(html) {
          $(".loader2").hide();
          Toast.fire({
            icon: 'success',
            title: 'la pointeuse bien importée.'
          });
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme technique  !'
          });
        }
      });
    });
  }); // alert("aaa");

  $("#residanat_Importe").on("click", function () {
    $(".loader2").show(); // alert('ok')

    var date = $("#datetime_pointeuse").val();

    if (!date) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez remplir la date  !'
      }); // alert("Veuillez remplir la date");

      $(".loader2").hide();
      return;
    }

    list_pointeuse.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/pointeuse_download/" + obj.ip + "/" + date,
        success: function success(html) {
          $(".loader2").hide();
          Toast.fire({
            icon: 'success',
            title: 'la pointeuse bien importée.'
          });
        },
        error: function error() {
          $(".loader2").hide();
          Toast.fire({
            icon: 'error',
            title: 'Probleme technique  !'
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-0eab75","vendors-node_modules_core-js_internals_object-set-prototype-of_js-node_modules_core-js_intern-cfdade"], () => (__webpack_exec__("./assets/components/assiduite/pointeuse.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJDLEtBcEJEO0FBcUJELEdBbENEO0FBbUNDLENBdlREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXNzaWR1aXRlL3BvaW50ZXVzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vcG9pbnRldXNlLS1JbnRlcmZhY2UvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gIHRvYXN0OiB0cnVlLFxuICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgdGltZXI6IDMwMDAsXG4gIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXG4gIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcbiAgfSxcbn0pO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBzZWxlY3QgYWxsIC8gdW5zZWxlY3QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5mdW5jdGlvbiBzZWxlY3RzKCl7ICBcbnZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXG5mb3IodmFyIGk9MDsgaTxlbGUubGVuZ3RoOyBpKyspeyAgXG4gICAgaWYoZWxlW2ldLnR5cGU9PSdjaGVja2JveCcpICBcbiAgICAgICAgZWxlW2ldLmNoZWNrZWQ9dHJ1ZTsgIFxufSAgXG59ICBcbmZ1bmN0aW9uIGRlU2VsZWN0KCl7ICBcbnZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXG5mb3IodmFyIGk9MDsgaTxlbGUubGVuZ3RoOyBpKyspeyAgXG4gICAgaWYoZWxlW2ldLnR5cGU9PSdjaGVja2JveCcpICBcbiAgICAgICAgZWxlW2ldLmNoZWNrZWQ9ZmFsc2U7ICBcbiAgICAgIFxufSAgXG59ICAgIFxuXG5mdW5jdGlvbiBwb2ludGV1c2VfYWYodmFyMSkge1xuJC5hamF4KHtcbiAgdHlwZTogXCJQT1NUXCIsXG4gIHVybDogXCIvYXBpL3BvaW50ZXVzZV9hZmYvXCIgKyB2YXIxLFxuICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlXCIpKSB7XG4gICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XG4gICAgfVxuICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZVwiKVxuICAgICAgLmh0bWwoaHRtbClcbiAgICAgIC5EYXRhVGFibGUoe1xuICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICBdLFxuICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcbiAgICAgIH0pO1xuXG4gXG4gIH1cbn0pO1xucmV0dXJuIHZhcjE7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBvaW50ZXVzZSBjaGVjayAvdW5jaGVjayAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuJChcImJvZHkgI3BfY2hlY2tcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5zZWxlY3RzKCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XG5cbn0pO1xuJChcImJvZHkgI3BfdW5jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbmRlU2VsZWN0KCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XG5cbn0pO1xuJChcIiNzYWxsZV9wb2ludGV1c2VcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgc2FsbGUgPSAkKHRoaXMpLnZhbCgpO1xuICAkKFwiLmxvYWRlclwiKS5zaG93KCk7XG5cbiAgcG9pbnRldXNlX2FmKHNhbGxlKTtcbn0pO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS5oYXNDbGFzcyhcImhpZ2hsaWdodHlcIik7XG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UgdHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlIHRyXCIpLnJlbW92ZUNsYXNzKFwib2RkXCIpO1xuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlIHRyXCIpLnJlbW92ZUNsYXNzKFwiZXZlblwiKTtcblxuICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xuICAgICAgdmFyIGN1cnJlbnRSb3cgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKTtcbiAgICAgIGxpc3RfcG9pbnRldXNlID0gW107XG4gICAgICBsaXN0X3BvaW50ZXVzZS5wdXNoKHtcbiAgICAgICAgc246IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDIpXCIpLmh0bWwoKSxcbiAgICAgICAgaXA6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDMpXCIpLmh0bWwoKSxcbiAgICAgIH0pO1xuICAgICBcbiAgICAgXG4gICAgXG4gICAgfVxuXG5cbiAgfSk7XG5cbiAgJChcImJvZHkgI2Nvbm5lY3RfcG9pbnRldXNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gICAgdmFyIHZhbCA9IFtdO1xuICAgICQoJzpjaGVja2JveDpjaGVja2VkJykuZWFjaChmdW5jdGlvbihpKXtcbiAgICAgIHZhbFtpXSA9ICQodGhpcykudmFsKCk7XG4gICAgfSk7XG4gICAgLy8gYWxlcnQodmFsKTtcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbGlzdF9wb2ludGV1c2UuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX2Nvbm5lY3QvXCIgKyBvYmouaXAgK1wiL2lwXCIsXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgICBpZihodG1sID09ICd0cnVlJyl7XG4gICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BvaW50ZXVzZSBjb25uZWN0ZWQnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAncG9pbnRldXNlIG5vdCBjb25uZWN0ZWQnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICBmb3IobGV0IHZhbHVlIG9mIHZhbCl7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX2Nvbm5lY3QvXCIgKyB2YWx1ZSArXCIvc25cIixcbiAgICAgICAgXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICBpZihodG1sID09ICd0cnVlJyl7XG4gICAgICAgICAgICAkKCcuJyt2YWx1ZSkucmVtb3ZlQ2xhc3MoXCJkZXNjb25uZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJjb25uZWN0ZWRcIikuYWRkQ2xhc3MoXCJjb25uZWN0ZWRcIik7XG5cbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIHRpdGxlOiAnUG9pbnRldXNlIGNvbm5lY3RlZCcsXG4gICAgICAgICAgfSlcbiAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAkKCcuJyt2YWx1ZSkucmVtb3ZlQ2xhc3MoXCJkZXNjb25uZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJjb25uZWN0ZWRcIikuYWRkQ2xhc3MoXCJkZXNjb25uZWN0ZWRcIik7XG5cbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICB0aXRsZTogJ3BvaW50ZXVzZSBub3QgY29ubmVjdGVkJyxcbiAgICAgICAgICB9KVxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aW1lb3V0OiAxNTAwMFxuICAgICAgICAgIH0pO1xuICAgIH1cbiAgICB9XG4gICBcblxufSk7XG4vLy8vLy8vLy8vLy8vLy9hdHRfcG9pbnRldXNlLy8vLy8vLy8vL1xuXG4kKFwiI2F0dF9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gIHZhciBkYXRlID0gJChcIiNkYXRldGltZV9wb2ludGV1c2VcIikudmFsKCk7XG4gIGxpc3RfcG9pbnRldXNlLmZvckVhY2goKG9iaikgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL3BvaW50ZXVzZV9hdHQvXCIgKyBvYmouaXAgKyBcIi9cIiArIGRhdGUgLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpKSB7XG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpXG4gICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxuICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXG4gICAgICAgICAgfSk7ICBcbiAgICAgIH0sXG4gICAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgdGVjaG5pcXVlICAhJyxcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbn0pO1xuXG4vLy8vLy8vLy8vLy8vLy91c2VyX3BvaW50ZXVzZS8vLy8vLy8vLy9cblxuJChcIiN1c2VyX3BvaW50ZXVzZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgbGlzdF9wb2ludGV1c2UuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvcG9pbnRldXNlX3VzZXIvXCIgKyBvYmouaXAsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIikpIHtcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIilcbiAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgIC5EYXRhVGFibGUoe1xuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXG4gICAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICBcblxuICAgICAgfSxlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxuICAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH0pO1xuXG59KTtcbi8vLy8vLy8vLy8vLy8vL2Rvd25sb2FkX3BvaW50ZXVzZS8vLy8vLy8vLy9cblxuJChcIiNkb3dubG9hZF9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gIHZhciBkYXRlID0gJChcIiNkYXRldGltZV9wb2ludGV1c2VcIikudmFsKCk7XG4gIGxpc3RfcG9pbnRldXNlLmZvckVhY2goKG9iaikgPT4ge1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL3BvaW50ZXVzZV9kb3dubG9hZC9cIiArIG9iai5pcCArIFwiL1wiICsgZGF0ZSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICB0aXRsZTogJ2xhIHBvaW50ZXVzZSBiaWVuIGltcG9ydMOpZS4nLFxuICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgdGVjaG5pcXVlICAhJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgXG4gICAgfSk7XG4gIH0pO1xuXG5cblxufSk7XG4vLyBhbGVydChcImFhYVwiKTtcbiQoXCIjcmVzaWRhbmF0X0ltcG9ydGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xuICAvLyBhbGVydCgnb2snKVxuICB2YXIgZGF0ZSA9ICQoXCIjZGF0ZXRpbWVfcG9pbnRldXNlXCIpLnZhbCgpO1xuICBpZiAoIWRhdGUpIHtcbiAgICBUb2FzdC5maXJlKHtcbiAgICAgIGljb246ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ1ZldWlsbGV6IHJlbXBsaXIgbGEgZGF0ZSAgIScsXG4gICAgICB9KTtcbiAgICAgICAgLy8gYWxlcnQoXCJWZXVpbGxleiByZW1wbGlyIGxhIGRhdGVcIik7XG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxpc3RfcG9pbnRldXNlLmZvckVhY2goKG9iaikgPT4ge1xuICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IFwiL2FwaS9wb2ludGV1c2VfZG93bmxvYWQvXCIgKyBvYmouaXAgKyBcIi9cIiArIGRhdGUsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICB0aXRsZTogJ2xhIHBvaW50ZXVzZSBiaWVuIGltcG9ydMOpZS4nLFxuICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lIHRlY2huaXF1ZSAgIScsXG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIFxuICB9KTtcbiAgfSk7ICBcbn0pO1xufSk7Il0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwic2VsZWN0cyIsImVsZSIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsInR5cGUiLCJjaGVja2VkIiwiZGVTZWxlY3QiLCJwb2ludGV1c2VfYWYiLCJ2YXIxIiwiYWpheCIsInVybCIsInN1Y2Nlc3MiLCJodG1sIiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImJMZW5ndGhDaGFuZ2UiLCJsZW5ndGhNZW51Iiwib24iLCJzYWxsZSIsInZhbCIsInNob3ciLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImN1cnJlbnRSb3ciLCJjbG9zZXN0IiwibGlzdF9wb2ludGV1c2UiLCJwdXNoIiwic24iLCJmaW5kIiwiaXAiLCJlYWNoIiwiZm9yRWFjaCIsIm9iaiIsImhpZGUiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZXJyb3IiLCJ2YWx1ZSIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9