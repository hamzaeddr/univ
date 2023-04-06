(self["webpackChunk"] = self["webpackChunk"] || []).push([["centreappel"],{

/***/ "./assets/components/etudiant/centre_appel.js":
/*!****************************************************!*\
  !*** ./assets/components/etudiant/centre_appel.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: function didOpen(toast) {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});
$(document).ready(function () {
  var table = $("#datables_etudiant").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/etudiant/appel/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      if (id_etudiant) {
        $("body tr#" + id_etudiant).addClass('active_databales');
      }
    },
    preDrawCallback: function preDrawCallback(settings) {
      if ($.fn.DataTable.isDataTable('#datables_etudiant')) {
        var dt = $('#datables_etudiant').DataTable(); //Abort previous ajax request if it is still in process.

        var settings = dt.settings();

        if (settings[0].jqXHR) {
          settings[0].jqXHR.abort();
        }
      }
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  var id_etudiant = false;
  $('select').select2();

  var getAppelRdv = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var icon, request, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $('#rdv1').val("");
              $('#rdv2').val("");
              $('#statut_appel').val("");
              $('#Observation').val("");
              icon = $("#date-d-appel i");
              icon.removeClass('fa-edit').addClass("fa-spinner fa-spin");
              _context.prev = 6;
              _context.next = 9;
              return axios.get('/etudiant/appel/getAppelRdv_appel/' + id_etudiant);

            case 9:
              request = _context.sent;
              data = request.data;
              $('#rdv1').val(data['rdv1']);
              $('#rdv2').val(data['rdv2']);
              icon.addClass('fa-edit').removeClass("fa-spinner fa-spin");
              _context.next = 18;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](6);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 16]]);
    }));

    return function getAppelRdv() {
      return _ref.apply(this, arguments);
    };
  }();

  $('body').on('click', '#datables_etudiant tbody tr', function () {
    if ($(this).hasClass('active_databales')) {
      id_etudiant = null, $('#datables_etudiant tr').removeClass('active_databales');
      return;
    }

    $('#datables_etudiant tr').removeClass('active_databales');
    $(this).addClass('active_databales');
    id_etudiant = $(this).attr('id');
    getAppelRdv();
  });
  $("#date-d-appel").on("click", function () {
    if (!id_etudiant) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez selection une ligne!'
      });
      return;
    }

    $("#date-d-appel-modal").modal("show");
  });
  $("body").on('submit', "#date_appele_save", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#date_appele_save")[0]);
              modalAlert = $("#date-d-appel-modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#date_appele_save .btn i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context2.prev = 6;
              _context2.next = 9;
              return axios.post('/etudiant/appel/rdvappel/' + id_etudiant, formData);

            case 9:
              request = _context2.sent;
              response = request.data;
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-success\">\n            <p>".concat(response, "</p>\n            </div>"));
              document.getElementById("date_appele_save").reset();
              $('select').val("");
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload(null, false);
              _context2.next = 24;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](6);
              message = _context2.t0.response.data; // console.log(error, error.response);

              modalAlert.remove();
              $("#date-d-appel-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
              setTimeout(function () {
                $(".modal-body .alert").remove();
              }, 2500);

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 18]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  $('body').on('click', '#extraction', function () {
    window.open('/etudiant/appel/extraction_appels', '_blank');
  });
});

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(isCallable(handler) ? handler : Function(handler), this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/etudiant/centre_appel.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVa0MsRUFBVixDQUFhLE9BQWIsRUFBcUIsYUFBckIsRUFBb0MsWUFBVztBQUN6Q29CLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLG1DQUFaLEVBQWlELFFBQWpEO0FBQ0wsR0FGRDtBQUdILENBbkhEOzs7Ozs7Ozs7O0FDWEEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLFlBQVksbUJBQU8sQ0FBQyx1RkFBNkI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQztBQUN4RCxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRW5ELHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3Q0FBd0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2V0dWRpYW50L2NlbnRyZV9hcHBlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbiAgICB0b2FzdDogdHJ1ZSxcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxuICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgICB0aW1lcjogMzAwMCxcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxuICAgIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgU3dhbC5zdG9wVGltZXIpXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxuICAgIH0sXG59KVxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcbiAgICB2YXIgdGFibGUgPSAkKFwiI2RhdGFibGVzX2V0dWRpYW50XCIpLkRhdGFUYWJsZSh7XG4gICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXG4gICAgICAgIGFqYXg6IFwiL2V0dWRpYW50L2FwcGVsL2xpc3RcIixcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIHNjcm9sbFg6IHRydWUsXG4gICAgICAgIGRyYXdDYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYoaWRfZXR1ZGlhbnQpIHtcbiAgICAgICAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfZXR1ZGlhbnQpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByZURyYXdDYWxsYmFjazogZnVuY3Rpb24oc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2RhdGFibGVzX2V0dWRpYW50JykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZHQgPSAkKCcjZGF0YWJsZXNfZXR1ZGlhbnQnKS5EYXRhVGFibGUoKTtcblxuICAgICAgICAgICAgICAgIC8vQWJvcnQgcHJldmlvdXMgYWpheCByZXF1ZXN0IGlmIGl0IGlzIHN0aWxsIGluIHByb2Nlc3MuXG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0gZHQuc2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3NbMF0uanFYSFIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NbMF0uanFYSFIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGxldCBpZF9ldHVkaWFudCA9IGZhbHNlO1xuICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoKTtcblxuICAgIGNvbnN0IGdldEFwcGVsUmR2ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAkKCcjcmR2MScpLnZhbChcIlwiKTtcbiAgICAgICAgJCgnI3JkdjInKS52YWwoXCJcIik7XG4gICAgICAgICQoJyNzdGF0dXRfYXBwZWwnKS52YWwoXCJcIik7XG4gICAgICAgICQoJyNPYnNlcnZhdGlvbicpLnZhbChcIlwiKTtcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZGF0ZS1kLWFwcGVsIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9ldHVkaWFudC9hcHBlbC9nZXRBcHBlbFJkdl9hcHBlbC8nK2lkX2V0dWRpYW50KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICAkKCcjcmR2MScpLnZhbChkYXRhWydyZHYxJ10pO1xuICAgICAgICAgICAgJCgnI3JkdjInKS52YWwoZGF0YVsncmR2MiddKTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0gIFxuICAgIH1cblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YWJsZXNfZXR1ZGlhbnQgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XG4gICAgICAgICAgICBpZF9ldHVkaWFudCA9IG51bGwsXG4gICAgICAgICAgICAkKCcjZGF0YWJsZXNfZXR1ZGlhbnQgdHInKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICQoJyNkYXRhYmxlc19ldHVkaWFudCB0cicpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcbiAgICAgICAgaWRfZXR1ZGlhbnQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgIGdldEFwcGVsUmR2KClcbiAgICB9KVxuXG4gICAgJChcIiNkYXRlLWQtYXBwZWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmKCFpZF9ldHVkaWFudCl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgJChcIiNkYXRlLWQtYXBwZWwtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXG4gICAgfSlcblxuICAgICQoXCJib2R5XCIpLm9uKCdzdWJtaXQnLCBcIiNkYXRlX2FwcGVsZV9zYXZlXCIsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI2RhdGVfYXBwZWxlX3NhdmVcIilbMF0pO1xuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXG4gICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICBjb25zdCBpY29uID0gJChcIiNkYXRlX2FwcGVsZV9zYXZlIC5idG4gaVwiKTtcbiAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXR1ZGlhbnQvYXBwZWwvcmR2YXBwZWwvJytpZF9ldHVkaWFudCwgZm9ybURhdGEpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlX2FwcGVsZV9zYXZlXCIpLnJlc2V0KCk7XG4gICAgICAgICQoJ3NlbGVjdCcpLnZhbChcIlwiKTtcbiAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICAgJChcIiNkYXRlLWQtYXBwZWwtbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxuICAgICAgICApO1xuICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkKFwiLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xuICAgIH0sIDI1MDApIFxuXG4gICAgfSlcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2V4dHJhY3Rpb24nLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgICB3aW5kb3cub3BlbignL2V0dWRpYW50L2FwcGVsL2V4dHJhY3Rpb25fYXBwZWxzJywgJ19ibGFuaycpO1xuICAgIH0pXG59KSIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJyZXNwb25zaXZlIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImlkX2V0dWRpYW50IiwiYWRkQ2xhc3MiLCJwcmVEcmF3Q2FsbGJhY2siLCJzZXR0aW5ncyIsImZuIiwiaXNEYXRhVGFibGUiLCJkdCIsImpxWEhSIiwiYWJvcnQiLCJsYW5ndWFnZSIsInVybCIsInNlbGVjdDIiLCJnZXRBcHBlbFJkdiIsInZhbCIsImljb24iLCJyZW1vdmVDbGFzcyIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJvbiIsImhhc0NsYXNzIiwiYXR0ciIsImZpcmUiLCJ0aXRsZSIsIm1vZGFsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm1vZGFsQWxlcnQiLCJyZW1vdmUiLCJwb3N0IiwicmVzcG9uc2UiLCJwcmVwZW5kIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXNldCIsInJlbG9hZCIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0Iiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=