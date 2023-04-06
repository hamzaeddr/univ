(self["webpackChunk"] = self["webpackChunk"] || []).push([["enseignant"],{

/***/ "./assets/components/parametre/enseignant.js":
/*!***************************************************!*\
  !*** ./assets/components/parametre/enseignant.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
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
  $('select').select2();
  var id_enseignant;
  var table = $("#datatables_gestion_enseignant").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/enseignant/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $('body').on('click', '#datatables_gestion_enseignant tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_enseignant = null;
    } else {
      $("#datatables_gestion_enseignant tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_enseignant = $(this).attr('id');
    }
  });
  $("#ajouter").on("click", function () {
    $("#ajout_modal").modal("show");
  }); // 

  $("#save").on("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var formData, icon, request, response, _message;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#save")[0]);
              icon = $("#save i");
              _context.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context.next = 7;
              return axios.post('/parametre/enseignant/new', formData);

            case 7:
              request = _context.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              $("#ajout_modal").modal("hide");
              Toast.fire({
                icon: 'succees',
                title: message
              });
              _context.next = 22;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](3);
              console.log(_context.t0, _context.t0.response);
              _message = _context.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: _message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 16]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  $("#modifier").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var icon, request, response, _message2;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (id_enseignant) {
              _context2.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!'
            });
            return _context2.abrupt("return");

          case 3:
            icon = $("#modifier i");
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            _context2.prev = 5;
            _context2.next = 8;
            return axios.get('/parametre/enseignant/details/' + id_enseignant);

          case 8:
            request = _context2.sent;
            response = request.data;
            console.log(response);
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("body #modifier_modal #udpate").html(response);
            $('select').select2();
            $("#modifier_modal").modal("show");
            _context2.next = 23;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](5);
            console.log(_context2.t0, _context2.t0.response);
            _message2 = _context2.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: _message2
            });
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[5, 17]]);
  })));
  $("#udpate").on("submit", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var formData, icon, request, response, _message3;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($("#udpate")[0]);
              icon = $("#udpate i");
              _context3.prev = 3;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context3.next = 7;
              return axios.post('/parametre/enseignant/update/' + id_enseignant, formData);

            case 7:
              request = _context3.sent;
              response = request.data;
              $('#udpate')[0].reset();
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload();
              $("#modifier_modal").modal("hide");
              Toast.fire({
                icon: 'success',
                title: response
              });
              _context3.next = 22;
              break;

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](3);
              console.log(_context3.t0, _context3.t0.response);
              _message3 = _context3.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: _message3
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 22:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 16]]);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }());
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/parametre/enseignant.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRCxDQUFxQm9CLEtBQXJCLENBQTJCLE1BQTNCO0FBQ0FoQyxjQUFBQSxLQUFLLENBQUM4QyxJQUFOLENBQVc7QUFDUFQsZ0JBQUFBLElBQUksRUFBRSxTQURDO0FBRVBVLGdCQUFBQSxLQUFLLEVBQUVMO0FBRkEsZUFBWDtBQWJrQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCbEJPLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQixhQUFNUixRQUF6QjtBQUNNTSxjQUFBQSxTQW5CWSxHQW1CRixhQUFNTixRQUFOLENBQWVDLElBbkJiO0FBb0JsQjNDLGNBQUFBLEtBQUssQ0FBQzhDLElBQU4sQ0FBVztBQUNQVCxnQkFBQUEsSUFBSSxFQUFFLE9BREM7QUFFUFUsZ0JBQUFBLEtBQUssRUFBRUM7QUFGQSxlQUFYO0FBSUFYLGNBQUFBLElBQUksQ0FBQ1AsUUFBTCxDQUFjLGlCQUFkLEVBQWlDRCxXQUFqQyxDQUE2QyxxQkFBN0M7O0FBeEJrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUExQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZCSCxDQXpIRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhcmFtZXRyZS9lbnNlaWduYW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gICAgdG9hc3Q6IHRydWUsXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgdGltZXI6IDMwMDAsXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcbiAgICB9LFxuICAgIH0pXG4gICAgXG4gICAgXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcbiAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKClcbiAgICBsZXQgaWRfZW5zZWlnbmFudDtcbiAgICB2YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9lbnNlaWduYW50XCIpLkRhdGFUYWJsZSh7XG4gICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXG4gICAgICAgIGFqYXg6IFwiL3BhcmFtZXRyZS9lbnNlaWduYW50L2xpc3RcIixcbiAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcbiAgICAgICAgZGVmZXJSZW5kZXI6IHRydWUsXG4gICAgICAgIGxhbmd1YWdlOiB7XG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcjZGF0YXRhYmxlc19nZXN0aW9uX2Vuc2VpZ25hbnQgdGJvZHkgdHInLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgaWRfZW5zZWlnbmFudCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9lbnNlaWduYW50IHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XG4gICAgICAgICAgICBpZF9lbnNlaWduYW50ID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgJChcIiNham91dGVyXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAkKFwiI2Fqb3V0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxuICAgIH0pXG4gICAgLy8gXG4gICAgJChcIiNzYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjc2F2ZVwiKVswXSlcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc2F2ZSBpXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL2Vuc2VpZ25hbnQvbmV3JywgZm9ybURhdGEpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICAkKCcjc2F2ZScpWzBdLnJlc2V0KCk7XG4gICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xuICAgICAgICAgICAgJChcIiNham91dF9tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZWVzJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuICAgICQoXCIjbW9kaWZpZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICBpZighaWRfZW5zZWlnbmFudCl7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb25lciB1bmUgbGlnbmUhJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjbW9kaWZpZXIgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWVkaXQnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvcGFyYW1ldHJlL2Vuc2VpZ25hbnQvZGV0YWlscy8nK2lkX2Vuc2VpZ25hbnQpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWVkaXQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgICAkKFwiYm9keSAjbW9kaWZpZXJfbW9kYWwgI3VkcGF0ZVwiKS5odG1sKHJlc3BvbnNlKVxuICAgICAgICAgICAgJCgnc2VsZWN0Jykuc2VsZWN0MigpO1xuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICB9XG5cbiAgICB9KVxuICAgICQoXCIjdWRwYXRlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCQoXCIjdWRwYXRlXCIpWzBdKVxuICAgICAgICBjb25zdCBpY29uID0gJChcIiN1ZHBhdGUgaVwiKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvcGFyYW1ldHJlL2Vuc2VpZ25hbnQvdXBkYXRlLycraWRfZW5zZWlnbmFudCwgZm9ybURhdGEpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgICAgICAgICAkKCcjdWRwYXRlJylbMF0ucmVzZXQoKTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuICAgXG59KVxuXG5cbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdDIiLCJpZF9lbnNlaWduYW50IiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImxhbmd1YWdlIiwidXJsIiwib24iLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJhdHRyIiwibW9kYWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaWNvbiIsInJlbW92ZSIsImF4aW9zIiwicG9zdCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRhdGEiLCJyZXNldCIsInJlbG9hZCIsImZpcmUiLCJ0aXRsZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiaHRtbCJdLCJzb3VyY2VSb290IjoiIn0=