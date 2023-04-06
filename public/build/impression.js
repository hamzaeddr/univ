(self["webpackChunk"] = self["webpackChunk"] || []).push([["impression"],{

/***/ "./assets/components/administration/impression.js":
/*!********************************************************!*\
  !*** ./assets/components/administration/impression.js ***!
  \********************************************************/
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
var check = 0;
var inscription_id = null;
$(document).ready(function () {
  // $("#valider, #import, #simuler").attr('disabled', true)
  var enableButtons = function enableButtons() {
    if (check == 0) {
      // $("#valider").removeClass('btn-secondary').addClass('btn-danger').attr('disabled', false)
      // $("#import").addClass('btn-secondary').removeClass('btn-success').attr('disabled', true)
      $("#imprimer").addClass('btn-secondary').removeClass('btn-info').attr('disabled', true);
    } else {
      // $("#valider").addClass('btn-secondary').removeClass('btn-danger').attr('disabled', true)
      // $("#import").removeClass('btn-secondary').addClass('btn-success').attr('disabled', false)
      $("#imprimer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false);
    }
  };

  enableButtons();
  $("#etablissement").select2();
  $("#order").select2();
  $("#etablissement").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context.next = 7;
              break;
            }

            _context.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context.sent;
            response = request.data;

          case 7:
            $('#formation').html(response).select2();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation, response, request;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();
            response = "";

            if (!(id_formation != "")) {
              _context2.next = 7;
              break;
            }

            _context2.next = 5;
            return axios.get('/api/promotion/' + id_formation);

          case 5:
            request = _context2.sent;
            response = request.data;

          case 7:
            $('#promotion').html(response).select2();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#promotion").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_promotion, response, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_promotion = $(this).val();
            response = "";

            if (!(id_promotion != "")) {
              _context3.next = 7;
              break;
            }

            _context3.next = 5;
            return axios.get('/api/salle/' + id_promotion);

          case 5:
            request = _context3.sent;
            response = request.data;

          case 7:
            $('#salle').html(response).select2();

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#get_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var promotion_id, salle, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              $("#list_etudiants").empty();
              promotion_id = $('#promotion').val();

              if (!(promotion_id == "" || !promotion_id)) {
                _context4.next = 6;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection promotion!'
              });
              return _context4.abrupt("return");

            case 6:
              salle = $('#salle').val();

              if (!(salle == "" || !salle)) {
                _context4.next = 10;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection une salle!'
              });
              return _context4.abrupt("return");

            case 10:
              icon = $("#get_list_etudiant i");
              icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
              _context4.prev = 12;
              formData = new FormData();
              formData.append("order", $("#order").val());
              _context4.next = 17;
              return axios.post('/administration/impression/list/' + promotion_id + "/" + salle, formData);

            case 17:
              request = _context4.sent;
              response = request.data; // $("#list_epreuve_normal").DataTable().destroy()

              if ($.fn.DataTable.isDataTable("#list_etudiants")) {
                $('#list_etudiants').DataTable().clear().destroy();
              }

              $("#list_etudiants").html(response).DataTable({
                scrollX: true,
                scrollY: true,
                language: {
                  url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                }
              });
              check = 1;
              enableButtons();
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              _context4.next = 32;
              break;

            case 26:
              _context4.prev = 26;
              _context4.t0 = _context4["catch"](12);
              console.log(_context4.t0);
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              message = _context4.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 32:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[12, 26]]);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  $("#import").on('click', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              $('#import_en_masse').modal("show");

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }());
  $("#impression_canvas").on('click', function () {
    window.open("/administration/impression/canvas", '_blank');
  });
  $("#import_impression_save").on("submit", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var formData, modalAlert, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#import_en_masse .modal-body .alert");
              modalAlert.remove();
              icon = $("#impression_enregistre i");
              icon.removeClass('fa-check-circle').addClass("fa-spinner fa-spin");
              _context6.prev = 6;
              _context6.next = 9;
              return axios.post('/administration/impression/import', formData);

            case 9:
              request = _context6.sent;
              response = request.data;
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(response, "</p>\n              </div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $("#get_list_etudiant").trigger("click");
              _context6.next = 23;
              break;

            case 16:
              _context6.prev = 16;
              _context6.t0 = _context6["catch"](6);
              message = _context6.t0.response.data;
              console.log(_context6.t0, _context6.t0.response);
              modalAlert.remove();
              $("#import_en_masse .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[6, 16]]);
    }));

    return function (_x3) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#imprimer").on('click', function () {
    window.open("/administration/impression/imprimer", '_blank');
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/administration/impression.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBTCxjQUFBQSxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QmlELE9BQXhCLENBQWdDLE9BQWhDO0FBbEJvQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCOUJQLGNBQUFBLE9BckI4QixHQXFCcEIsYUFBTS9CLFFBQU4sQ0FBZUksSUFyQks7QUFzQnBDeUIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLGVBQW1CLGFBQU05QixRQUF6QjtBQUNBbUMsY0FBQUEsVUFBVSxDQUFDQyxNQUFYO0FBQ0EvQyxjQUFBQSxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ2dELE9BQWxDLDZDQUNxQ04sT0FEckM7QUFHQWxCLGNBQUFBLElBQUksQ0FBQ3BCLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0MsV0FBakMsQ0FBNkMscUJBQTdDOztBQTNCb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErQkFMLEVBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZVEsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFZO0FBQ25Db0MsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVkscUNBQVosRUFBbUQsUUFBbkQ7QUFDSCxHQUZEO0FBR0gsQ0EzSUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbmlzdHJhdGlvbi9pbXByZXNzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gICAgdG9hc3Q6IHRydWUsXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgdGltZXI6IDMwMDAsXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcbiAgICB9LFxufSlcblxubGV0IGNoZWNrID0gMDtcbmxldCBpbnNjcmlwdGlvbl9pZCA9IG51bGw7XG4gICAgXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xuICAgIC8vICQoXCIjdmFsaWRlciwgI2ltcG9ydCwgI3NpbXVsZXJcIikuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxuICAgIGNvbnN0IGVuYWJsZUJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgIGlmKGNoZWNrID09IDApIHtcbiAgICAgICAgICAgIC8vICQoXCIjdmFsaWRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tZGFuZ2VyJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcbiAgICAgICAgICAgIC8vICQoXCIjaW1wb3J0XCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi1zdWNjZXNzJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxuICAgICAgICAgICAgJChcIiNpbXByaW1lclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4taW5mbycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICQoXCIjdmFsaWRlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tZGFuZ2VyJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxuICAgICAgICAgICAgLy8gJChcIiNpbXBvcnRcIikucmVtb3ZlQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hZGRDbGFzcygnYnRuLXN1Y2Nlc3MnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxuICAgICAgICAgICAgJChcIiNpbXByaW1lclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4taW5mbycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKCk7XG4gICAgJChcIiNvcmRlclwiKS5zZWxlY3QyKCk7XG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfVxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9XG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2FsbGUvJytpZF9wcm9tb3Rpb24pO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfVxuICAgICAgICAkKCcjc2FsbGUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICBcblxuICAgICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnRcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcIiNsaXN0X2V0dWRpYW50c1wiKS5lbXB0eSgpXG4gICAgICAgIGxldCBwcm9tb3Rpb25faWQgPSAkKCcjcHJvbW90aW9uJykudmFsKCk7XG4gICAgICAgIGlmKHByb21vdGlvbl9pZCA9PSBcIlwiIHx8ICFwcm9tb3Rpb25faWQpIHtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gcHJvbW90aW9uIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzYWxsZSA9ICQoJyNzYWxsZScpLnZhbCgpO1xuICAgICAgICBpZihzYWxsZSA9PSBcIlwiIHx8ICFzYWxsZSkge1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbiB1bmUgc2FsbGUhJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnQgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc2VhcmNoJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm9yZGVyXCIsICQoXCIjb3JkZXJcIikudmFsKCkpXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2ltcHJlc3Npb24vbGlzdC8nK3Byb21vdGlvbl9pZCtcIi9cIitzYWxsZSwgZm9ybURhdGEpO1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgICAgICAvLyAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuRGF0YVRhYmxlKCkuZGVzdHJveSgpXG4gICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjbGlzdF9ldHVkaWFudHNcIikpIHtcbiAgICAgICAgICAgICAgICAkKCcjbGlzdF9ldHVkaWFudHMnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgJChcIiNsaXN0X2V0dWRpYW50c1wiKS5odG1sKHJlc3BvbnNlKS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFg6IHRydWUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsWTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNoZWNrID0gMTtcbiAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zZWFyY2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9XG5cbiAgICB9KVxuICAgIFxuXG4gICAgJChcIiNpbXBvcnRcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJyNpbXBvcnRfZW5fbWFzc2UnKS5tb2RhbChcInNob3dcIik7XG4gICAgfSlcbiAgICAkKFwiI2ltcHJlc3Npb25fY2FudmFzXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oXCIvYWRtaW5pc3RyYXRpb24vaW1wcmVzc2lvbi9jYW52YXNcIiwgJ19ibGFuaycpO1xuICAgIH0pXG4gICAgJChcIiNpbXBvcnRfaW1wcmVzc2lvbl9zYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XG4gICAgICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNpbXBvcnRfZW5fbWFzc2UgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpXG4gICAgXG4gICAgICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2ltcHJlc3Npb25fZW5yZWdpc3RyZSBpXCIpO1xuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9pbXByZXNzaW9uL2ltcG9ydCcsIGZvcm1EYXRhKTtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICAgICAkKFwiI2ltcG9ydF9lbl9tYXNzZSAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICApO1xuICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICAgICAkKFwiI2dldF9saXN0X2V0dWRpYW50XCIpLnRyaWdnZXIoXCJjbGlja1wiKVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xuICAgICAgICAgICQoXCIjaW1wb3J0X2VuX21hc3NlIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjay1jaXJjbGUnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuICAgICQoXCIjaW1wcmltZXJcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cub3BlbihcIi9hZG1pbmlzdHJhdGlvbi9pbXByZXNzaW9uL2ltcHJpbWVyXCIsICdfYmxhbmsnKTtcbiAgICB9KVxufSlcblxuXG4gICAgXG5cblxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsImNoZWNrIiwiaW5zY3JpcHRpb25faWQiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVuYWJsZUJ1dHRvbnMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiYXR0ciIsInNlbGVjdDIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1wdHkiLCJwcm9tb3Rpb25faWQiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwic2FsbGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsImZuIiwiRGF0YVRhYmxlIiwiaXNEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJzY3JvbGxYIiwic2Nyb2xsWSIsImxhbmd1YWdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJtb2RhbCIsIndpbmRvdyIsIm9wZW4iLCJtb2RhbEFsZXJ0IiwicmVtb3ZlIiwicHJlcGVuZCIsInRyaWdnZXIiXSwic291cmNlUm9vdCI6IiJ9