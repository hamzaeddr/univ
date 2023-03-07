(self["webpackChunk"] = self["webpackChunk"] || []).push([["ResidanatImp"],{

/***/ "./assets/components/assiduite/importresidanat.js":
/*!********************************************************!*\
  !*** ./assets/components/assiduite/importresidanat.js ***!
  \********************************************************/
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
  //////////////////////////////////////change salle /////////////////////////////////////////////////////////////
  // $("#salle_pointeuse").on("change", function () {
  //     $(".loader2").show();
  //     var salle = $(this).val();
  //     pointeuse_afResidanat(salle);
  //   });
  // ///////////////////////////////////////////afficher les pointeuse du salle///////////////////////////////////////////////////////////////////////////
  // function pointeuse_afResidanat(var1) {
  //     $.ajax({
  //       type: "POST",
  //       url: "/api/pointeuse_aff/" + var1,
  //       success: function (html) {
  //     $(".loader2").hide();
  //         if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_pointeuse")) {
  //           $("#dtDynamicVerticalScrollExample_pointeuse").DataTable().clear().destroy();
  //         }
  //         $("#dtDynamicVerticalScrollExample_pointeuse")
  //           .html(html)
  //           .DataTable({
  //             bLengthChange: false,
  //             lengthMenu: [
  //               [11, 25, 35, 50, 100, 20000000000000],
  //               [10, 15, 25, 50, 100, "All"],
  //             ],
  //             "font-size": "3rem",
  //           });
  //       }
  //     });
  //     return var1;
  //     };
  // //////////////////////////////////////////check////uncheck////////////////////////////////////////////////
  function selects() {
    var ele = document.getElementsByName('chk');

    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == 'checkbox') ele[i].checked = true;
    }
  }

  ;

  function deSelect() {
    var ele = document.getElementsByName('chk');

    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == 'checkbox') ele[i].checked = false;
    }
  }

  ;
  $("body #p_check").on("click", function () {
    selects(); // $("#parlot_modal").show();
  });
  $("body #p_uncheck").on("click", function () {
    deSelect(); // $("#parlot_modal").show();
  }); /////////////////////////////////////////////////select pointeuse//////////////////////////////////////////////////////////////////////

  $("body #dtDynamicVerticalScrollresidanat_pointeuse").on("click", "tr", function () {
    var selected = $(this).hasClass("highlighty");
    $("body #dtDynamicVerticalScrollresidanat_pointeuse tr").removeClass("highlighty");
    $("body #dtDynamicVerticalScrollresidanat_pointeuse tr").removeClass("odd");
    $("body #dtDynamicVerticalScrollresidanat_pointeuse tr").removeClass("even");

    if (!selected) {
      $(this).addClass("highlighty");
      var currentRow = $(this).closest("tr");
      list_pointeuse = [];
      list_pointeuse.push({
        sn: currentRow.find("td:eq(2)").html(),
        ip: currentRow.find("td:eq(3)").html()
      });
    }
  }); ////////////////////////////////////connect pointeuse///////////////////////////////////////////////////////////////
  // $("body #connect_pointeuse_residanat").on("click",  function () 

  $(document).ready(function () {
    $("#connect_pointeuse_residanat").click(function () {
      $(".loader2").show(); // alert('ok');

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
    });
  }); ////////////////////////////////////download_pointeuse/////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  // $("#download_pointeuse").on("click", function () {   
  // $.ajax({
  //         url: '/api/ResidanatImporte',
  //         type: 'GET',
  //         dataType: 'json',
  //         success: function(html) {
  //             console.log(html)
  //         },
  //         error: function() {
  //             $(".loader2").hide();
  //            Toast.fire({
  //              icon: 'error',
  //              title: 'Probleme technique  !',
  //               });
  //         }
  //     });
  // });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_string_iterator_js-node_modules_core-js_modules_es_sy-0eab75","vendors-node_modules_core-js_internals_object-set-prototype-of_js-node_modules_core-js_intern-cfdade"], () => (__webpack_exec__("./assets/components/assiduite/importresidanat.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBM0Isa0JBQUFBLEtBQUssQ0FBQzhDLElBQU4sQ0FBVztBQUNQQyxvQkFBQUEsSUFBSSxFQUFFLFNBREM7QUFFUEMsb0JBQUFBLEtBQUssRUFBRTtBQUZBLG1CQUFYO0FBSUgsaUJBTkQsTUFPSTtBQUNJcEMsa0JBQUFBLENBQUMsQ0FBQyxNQUFJcUMsS0FBTCxDQUFELENBQWF2QixXQUFiLENBQXlCLGNBQXpCLEVBQXlDQSxXQUF6QyxDQUFxRCxXQUFyRCxFQUFrRUMsUUFBbEUsQ0FBMkUsY0FBM0U7QUFFQTNCLGtCQUFBQSxLQUFLLENBQUM4QyxJQUFOLENBQVc7QUFDUEMsb0JBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLG9CQUFBQSxLQUFLLEVBQUU7QUFGQSxtQkFBWDtBQUlIO0FBQ1IsZUFyQkU7QUFzQkhFLGNBQUFBLEtBQUssRUFBQyxpQkFBVSxDQUNmLENBdkJFLENBd0JDOztBQXhCRCxhQUFQO0FBRko7O0FBQ0EsOERBQXFCO0FBQUE7QUEyQnBCO0FBNUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2Qkg7QUFDSixLQTdERDtBQThESCxHQS9ERCxFQWxGZ0MsQ0FvSmhDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUMsQ0F6S0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hc3NpZHVpdGUvaW1wb3J0cmVzaWRhbmF0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9wb2ludGV1c2UtLUludGVyZmFjZS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgICB0aW1lcjogMzAwMCxcclxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgU3dhbC5zdG9wVGltZXIpO1xyXG4gICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2NoYW5nZSBzYWxsZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vICQoXCIjc2FsbGVfcG9pbnRldXNlXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XHJcbi8vICAgICB2YXIgc2FsbGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gIFxyXG4vLyAgICAgcG9pbnRldXNlX2FmUmVzaWRhbmF0KHNhbGxlKTtcclxuLy8gICB9KTtcclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2FmZmljaGVyIGxlcyBwb2ludGV1c2UgZHUgc2FsbGUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gZnVuY3Rpb24gcG9pbnRldXNlX2FmUmVzaWRhbmF0KHZhcjEpIHtcclxuLy8gICAgICQuYWpheCh7XHJcbi8vICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4vLyAgICAgICB1cmw6IFwiL2FwaS9wb2ludGV1c2VfYWZmL1wiICsgdmFyMSxcclxuLy8gICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuLy8gICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICBcclxuLy8gICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZVwiKSkge1xyXG4vLyAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIilcclxuLy8gICAgICAgICAgIC5odG1sKGh0bWwpXHJcbi8vICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuLy8gICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbi8vICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuLy8gICAgICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4vLyAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuLy8gICAgICAgICAgICAgXSxcclxuLy8gICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbi8vICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgIFxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gICAgIHJldHVybiB2YXIxO1xyXG4vLyAgICAgfTtcclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vY2hlY2svLy8vdW5jaGVjay8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNlbGVjdHMoKXsgIFxyXG4gICAgICAgICAgICB2YXIgZWxlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjaGsnKTsgIFxyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTxlbGUubGVuZ3RoOyBpKyspeyAgXHJcbiAgICAgICAgICAgICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZVtpXS5jaGVja2VkPXRydWU7ICBcclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH07IFxyXG4gICAgICAgIGZ1bmN0aW9uIGRlU2VsZWN0KCl7ICBcclxuICAgICAgICAgICAgdmFyIGVsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnY2hrJyk7ICBcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICAgICAgICAgICAgaWYoZWxlW2ldLnR5cGU9PSdjaGVja2JveCcpICBcclxuICAgICAgICAgICAgICAgICAgICBlbGVbaV0uY2hlY2tlZD1mYWxzZTsgIFxyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfTsgXHJcblxyXG4gICAgICAgICAgICAkKFwiYm9keSAjcF9jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdHMoKTsgIC8vICQoXCIjcGFybG90X21vZGFsXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJChcImJvZHkgI3BfdW5jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRlU2VsZWN0KCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vc2VsZWN0IHBvaW50ZXVzZS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xscmVzaWRhbmF0X3BvaW50ZXVzZVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS5oYXNDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxyZXNpZGFuYXRfcG9pbnRldXNlIHRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbHJlc2lkYW5hdF9wb2ludGV1c2UgdHJcIikucmVtb3ZlQ2xhc3MoXCJvZGRcIik7XHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxyZXNpZGFuYXRfcG9pbnRldXNlIHRyXCIpLnJlbW92ZUNsYXNzKFwiZXZlblwiKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgIHZhciBjdXJyZW50Um93ID0gJCh0aGlzKS5jbG9zZXN0KFwidHJcIik7XHJcbiAgICBsaXN0X3BvaW50ZXVzZSA9IFtdO1xyXG4gICAgbGlzdF9wb2ludGV1c2UucHVzaCh7XHJcbiAgICAgICAgc246IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDIpXCIpLmh0bWwoKSxcclxuICAgICAgICBpcDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMylcIikuaHRtbCgpLFxyXG4gICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbn0pO1xyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Nvbm5lY3QgcG9pbnRldXNlLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vICQoXCJib2R5ICNjb25uZWN0X3BvaW50ZXVzZV9yZXNpZGFuYXRcIikub24oXCJjbGlja1wiLCAgZnVuY3Rpb24gKCkgXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7ICAgIFxyXG4gICAgJChcIiNjb25uZWN0X3BvaW50ZXVzZV9yZXNpZGFuYXRcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xyXG4gICAgICAgIC8vIGFsZXJ0KCdvaycpO1xyXG4gICAgICAgIHZhciB2YWwgPSBbXTtcclxuICAgICAgICAkKCc6Y2hlY2tib3g6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgdmFsW2ldID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBhbGVydCh2YWwpO1xyXG4gICAgICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGxpc3RfcG9pbnRldXNlLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9wb2ludGV1c2VfY29ubmVjdC9cIiArIG9iai5pcCArXCIvaXBcIixcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGh0bWwgPT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUG9pbnRldXNlIGNvbm5lY3RlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAncG9pbnRldXNlIG5vdCBjb25uZWN0ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZm9yKGxldCB2YWx1ZSBvZiB2YWwpe1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL3BvaW50ZXVzZV9jb25uZWN0L1wiICsgdmFsdWUgK1wiL3NuXCIsXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihodG1sID09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuJyt2YWx1ZSkucmVtb3ZlQ2xhc3MoXCJkZXNjb25uZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJjb25uZWN0ZWRcIikuYWRkQ2xhc3MoXCJjb25uZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQb2ludGV1c2UgY29ubmVjdGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuJyt2YWx1ZSkucmVtb3ZlQ2xhc3MoXCJkZXNjb25uZWN0ZWRcIikucmVtb3ZlQ2xhc3MoXCJjb25uZWN0ZWRcIikuYWRkQ2xhc3MoXCJkZXNjb25uZWN0ZWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ3BvaW50ZXVzZSBub3QgY29ubmVjdGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aW1lb3V0OiAxNTAwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTsgICBcclxufSk7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZG93bmxvYWRfcG9pbnRldXNlLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gJChcIiNkb3dubG9hZF9wb2ludGV1c2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7ICAgXHJcbi8vICQuYWpheCh7XHJcbi8vICAgICAgICAgdXJsOiAnL2FwaS9SZXNpZGFuYXRJbXBvcnRlJyxcclxuLy8gICAgICAgICB0eXBlOiAnR0VUJyxcclxuLy8gICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4vLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGh0bWwpIHtcclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coaHRtbClcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGVycm9yOiBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuLy8gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuLy8gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbi8vICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lIHRlY2huaXF1ZSAgIScsXHJcbi8vICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdHMiLCJlbGUiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJsZW5ndGgiLCJ0eXBlIiwiY2hlY2tlZCIsImRlU2VsZWN0Iiwib24iLCJzZWxlY3RlZCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImN1cnJlbnRSb3ciLCJjbG9zZXN0IiwibGlzdF9wb2ludGV1c2UiLCJwdXNoIiwic24iLCJmaW5kIiwiaHRtbCIsImlwIiwiY2xpY2siLCJzaG93IiwidmFsIiwiZWFjaCIsImZvckVhY2giLCJvYmoiLCJhamF4IiwidXJsIiwic3VjY2VzcyIsImhpZGUiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwidmFsdWUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=