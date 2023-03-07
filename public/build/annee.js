(self["webpackChunk"] = self["webpackChunk"] || []).push([["annee"],{

/***/ "./assets/components/parametre/annee.js":
/*!**********************************************!*\
  !*** ./assets/components/parametre/annee.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

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
  var id_annee;
  var table = $("#datatables_gestion_annee").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/parametre/annee/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });
  $("#etablissement").select2();
  $('body').on('click', '#datatables_gestion_annee tbody tr', function () {
    // const input = $(this).find("input");
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales');
      id_annee = null;
    } else {
      $("#datatables_gestion_annee tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      id_annee = $(this).attr('id');
    }
  });
  $("#etablissement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_etab = $(this).val();
            response = "";

            if (!(id_etab != "")) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return axios.get('/api/formation/' + id_etab);

          case 5:
            request = _context.sent;
            response = request.data;
            table.columns(0).search($(this).val()).draw();
            _context.next = 11;
            break;

          case 10:
            table.columns(0).search("").draw();

          case 11:
            $('#formation').html(response).select2();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#formation").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var id_formation;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_formation = $(this).val();

            if (id_formation != "") {
              table.columns(1).search(id_formation).draw();
            } else {
              table.columns(1).search("").draw();
            }

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));
  $("#ajouter").on("click", function () {
    // alert($("#formation").val())
    if (!$("#formation").val() || $("#formation").val() == "") {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez choissir une formation!'
      });
      return;
    }

    $("#ajout_modal").modal("show");
  });
  $("#modifier").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (id_annee) {
              _context3.next = 3;
              break;
            }

            Toast.fire({
              icon: 'error',
              title: 'Veuillez selectioner une ligne!'
            });
            return _context3.abrupt("return");

          case 3:
            icon = $("#modifier i");
            _context3.prev = 4;
            icon.remove('fa-edit').addClass("fa-spinner fa-spin ");
            _context3.next = 8;
            return axios.get('/parametre/annee/details/' + id_annee);

          case 8:
            request = _context3.sent;
            response = request.data;
            console.log(response);
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");
            $("#modifier_modal #designation").val(response.designation);
            $("#modifier_modal").modal("show");
            _context3.next = 22;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](4);
            console.log(_context3.t0, _context3.t0.response);
            message = _context3.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });
            icon.addClass('fa-edit').removeClass("fa-spinner fa-spin ");

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 16]]);
  })));
  $("#save").on("submit", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();

              if (!($("#formation").val() == "")) {
                _context4.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selectioner une formation!'
              });
              return _context4.abrupt("return");

            case 4:
              formData = new FormData($("#save")[0]);
              formData.append("formation_id", $("#formation").val());
              icon = $("#save i");
              _context4.prev = 7;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context4.next = 11;
              return axios.post('/parametre/annee/new', formData);

            case 11:
              request = _context4.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              $('#save')[0].reset();
              table.ajax.reload();
              $("#ajout_modal").modal("hide");
              _context4.next = 24;
              break;

            case 19:
              _context4.prev = 19;
              _context4.t0 = _context4["catch"](7);
              // console.log(error, error.response);
              message = _context4.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[7, 19]]);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  $("#udpate").on("submit", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var formData, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();

              if (id_annee) {
                _context5.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selectioner une ligne!'
              });
              return _context5.abrupt("return");

            case 4:
              formData = new FormData($("#udpate")[0]);
              icon = $("#udpate i");
              _context5.prev = 6;
              icon.remove('fa-check-circle').addClass("fa-spinner fa-spin ");
              _context5.next = 10;
              return axios.post('/parametre/annee/update/' + id_annee, formData);

            case 10:
              request = _context5.sent;
              response = request.data;
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");
              table.ajax.reload();
              $("#modifier_modal").modal("hide");
              _context5.next = 23;
              break;

            case 17:
              _context5.prev = 17;
              _context5.t0 = _context5["catch"](6);
              console.log(_context5.t0, _context5.t0.response);
              message = _context5.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-check-circle').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[6, 17]]);
    }));

    return function (_x2) {
      return _ref5.apply(this, arguments);
    };
  }());
  $('body').on('click', '#supprimer', /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();

              if (id_annee) {
                _context6.next = 4;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selectioner une ligne!'
              });
              return _context6.abrupt("return");

            case 4:
              icon = $("#udpate i");
              _context6.prev = 5;
              icon.remove('fa-trash').addClass("fa-spinner fa-spin ");
              _context6.next = 9;
              return axios.post('/parametre/annee/delete/' + id_annee);

            case 9:
              request = _context6.sent;
              response = request.data;
              icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");
              table.ajax.reload();
              Toast.fire({
                icon: 'success',
                title: response
              });
              $("#modifier_modal").modal("hide");
              _context6.next = 23;
              break;

            case 17:
              _context6.prev = 17;
              _context6.t0 = _context6["catch"](5);
              console.log(_context6.t0, _context6.t0.response);
              message = _context6.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });
              icon.addClass('fa-trash').removeClass("fa-spinner fa-spin ");

            case 23:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[5, 17]]);
    }));

    return function (_x3) {
      return _ref6.apply(this, arguments);
    };
  }());
  $('body').on('click', '.btn_active', /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e) {
      var icon, annee, request, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              e.preventDefault();
              icon = $(this).find('i');
              icon.removeClass('fa-power-off').addClass("fa-spinner fa-spin");
              annee = $(this).attr('id');
              _context7.prev = 4;
              _context7.next = 7;
              return axios.post('/parametre/annee/active_annee/' + annee);

            case 7:
              request = _context7.sent;
              table.ajax.reload(null, false);
              icon.removeClass('fa-spinner fa-spin').addClass("fa-power-off");
              _context7.next = 16;
              break;

            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](4);
              message = _context7.t0.response.data;
              icon.removeClass('fa-spinner fa-spin').addClass("fa-power-off");

            case 16:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[4, 12]]);
    }));

    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }());
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_string_-e339bc"], () => (__webpack_exec__("./assets/components/parametre/annee.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5uZWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVc7QUFDckJDLEVBQUFBLEtBQUssRUFBRSxJQURjO0FBRXJCQyxFQUFBQSxRQUFRLEVBQUUsU0FGVztBQUdyQkMsRUFBQUEsaUJBQWlCLEVBQUUsS0FIRTtBQUlyQkMsRUFBQUEsS0FBSyxFQUFFLElBSmM7QUFLckJDLEVBQUFBLGdCQUFnQixFQUFFLElBTEc7QUFNckJDLEVBQUFBLE9BQU8sRUFBRSxpQkFBQ0wsS0FBRCxFQUFXO0FBQ2hCQSxJQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDUixJQUFJLENBQUNTLFNBQTFDO0FBQ0FQLElBQUFBLEtBQUssQ0FBQ00sZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNSLElBQUksQ0FBQ1UsV0FBMUM7QUFDSDtBQVRvQixDQUFYLENBQWQ7QUFhSUMsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFhO0FBQy9CLE1BQUlDLFFBQUo7QUFFQSxNQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCSyxTQUEvQixDQUF5QztBQUNqREMsSUFBQUEsVUFBVSxFQUFFLENBQ1IsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLGNBQXRCLENBRFEsRUFFUixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsS0FBdEIsQ0FGUSxDQURxQztBQUtqREMsSUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksTUFBSixDQUFELENBTDBDO0FBTWpEQyxJQUFBQSxJQUFJLEVBQUUsdUJBTjJDO0FBT2pEQyxJQUFBQSxVQUFVLEVBQUUsSUFQcUM7QUFRakRDLElBQUFBLFVBQVUsRUFBRSxJQVJxQztBQVNqREMsSUFBQUEsV0FBVyxFQUFFLElBVG9DO0FBVWpEQyxJQUFBQSxRQUFRLEVBQUU7QUFDTkMsTUFBQUEsR0FBRyxFQUFFO0FBREM7QUFWdUMsR0FBekMsQ0FBWjtBQWNBYixFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmMsT0FBcEI7QUFDQWQsRUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVZSxFQUFWLENBQWEsT0FBYixFQUFxQixvQ0FBckIsRUFBMEQsWUFBWTtBQUNsRTtBQUVBLFFBQUdmLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdCLFFBQVIsQ0FBaUIsa0JBQWpCLENBQUgsRUFBeUM7QUFDckNoQixNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpQixXQUFSLENBQW9CLGtCQUFwQjtBQUNBZCxNQUFBQSxRQUFRLEdBQUcsSUFBWDtBQUNILEtBSEQsTUFHTztBQUNISCxNQUFBQSxDQUFDLENBQUMsb0NBQUQsQ0FBRCxDQUF3Q2lCLFdBQXhDLENBQW9ELGtCQUFwRDtBQUNBakIsTUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsUUFBUixDQUFpQixrQkFBakI7QUFDQWYsTUFBQUEsUUFBUSxHQUFHSCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtQixJQUFSLENBQWEsSUFBYixDQUFYO0FBQ0g7QUFFSixHQVpEO0FBYUFuQixFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmUsRUFBcEIsQ0FBdUIsUUFBdkIsdUVBQWdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkssWUFBQUEsT0FEc0IsR0FDWnBCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLEdBQVIsRUFEWTtBQUV4QkMsWUFBQUEsUUFGd0IsR0FFYixFQUZhOztBQUFBLGtCQUd6QkYsT0FBTyxJQUFJLEVBSGM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJRkcsS0FBSyxDQUFDQyxHQUFOLENBQVUsb0JBQWtCSixPQUE1QixDQUpFOztBQUFBO0FBSWxCSyxZQUFBQSxPQUprQjtBQUt4QkgsWUFBQUEsUUFBUSxHQUFHRyxPQUFPLENBQUNDLElBQW5CO0FBQ0F0QixZQUFBQSxLQUFLLENBQUN1QixPQUFOLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsQ0FBd0I1QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQixHQUFSLEVBQXhCLEVBQXVDUSxJQUF2QztBQU53QjtBQUFBOztBQUFBO0FBUXhCekIsWUFBQUEsS0FBSyxDQUFDdUIsT0FBTixDQUFjLENBQWQsRUFBaUJDLE1BQWpCLENBQXdCLEVBQXhCLEVBQTRCQyxJQUE1Qjs7QUFSd0I7QUFVNUI3QixZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCOEIsSUFBaEIsQ0FBcUJSLFFBQXJCLEVBQStCUixPQUEvQjs7QUFWNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaEM7QUFZQWQsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmUsRUFBaEIsQ0FBbUIsUUFBbkIsdUVBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQmdCLFlBQUFBLFlBRG1CLEdBQ0ovQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxQixHQUFSLEVBREk7O0FBRXpCLGdCQUFHVSxZQUFZLElBQUksRUFBbkIsRUFBdUI7QUFDbkIzQixjQUFBQSxLQUFLLENBQUN1QixPQUFOLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsQ0FBd0JHLFlBQXhCLEVBQXNDRixJQUF0QztBQUNILGFBRkQsTUFFTztBQUNIekIsY0FBQUEsS0FBSyxDQUFDdUIsT0FBTixDQUFjLENBQWQsRUFBaUJDLE1BQWpCLENBQXdCLEVBQXhCLEVBQTRCQyxJQUE1QjtBQUNIOztBQU53QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE3QjtBQVNBN0IsRUFBQUEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZSxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQU07QUFDNUI7QUFDQSxRQUFHLENBQUNmLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JxQixHQUFoQixFQUFELElBQTBCckIsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnFCLEdBQWhCLE1BQXlCLEVBQXRELEVBQXlEO0FBQ3JEakMsTUFBQUEsS0FBSyxDQUFDNEMsSUFBTixDQUFXO0FBQ1RDLFFBQUFBLElBQUksRUFBRSxPQURHO0FBRVRDLFFBQUFBLEtBQUssRUFBRTtBQUZFLE9BQVg7QUFJQTtBQUNIOztBQUNEbEMsSUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm1DLEtBQWxCLENBQXdCLE1BQXhCO0FBRUgsR0FYRDtBQVlBbkMsRUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlZSxFQUFmLENBQWtCLE9BQWxCLHVFQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFDbkJaLFFBRG1CO0FBQUE7QUFBQTtBQUFBOztBQUVuQmYsWUFBQUEsS0FBSyxDQUFDNEMsSUFBTixDQUFXO0FBQ1RDLGNBQUFBLElBQUksRUFBRSxPQURHO0FBRVRDLGNBQUFBLEtBQUssRUFBRTtBQUZFLGFBQVg7QUFGbUI7O0FBQUE7QUFRakJELFlBQUFBLElBUmlCLEdBUVZqQyxDQUFDLENBQUMsYUFBRCxDQVJTO0FBQUE7QUFVbkJpQyxZQUFBQSxJQUFJLENBQUNHLE1BQUwsQ0FBWSxTQUFaLEVBQXVCbEIsUUFBdkIsQ0FBZ0MscUJBQWhDO0FBVm1CO0FBQUEsbUJBV0dLLEtBQUssQ0FBQ0MsR0FBTixDQUFVLDhCQUE0QnJCLFFBQXRDLENBWEg7O0FBQUE7QUFXYnNCLFlBQUFBLE9BWGE7QUFZYkgsWUFBQUEsUUFaYSxHQVlGRyxPQUFPLENBQUNDLElBWk47QUFhbkJXLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaEIsUUFBWjtBQUNBVyxZQUFBQSxJQUFJLENBQUNmLFFBQUwsQ0FBYyxTQUFkLEVBQXlCRCxXQUF6QixDQUFxQyxxQkFBckM7QUFDQWpCLFlBQUFBLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDcUIsR0FBbEMsQ0FBc0NDLFFBQVEsQ0FBQ2lCLFdBQS9DO0FBQ0F2QyxZQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQm1DLEtBQXJCLENBQTJCLE1BQTNCO0FBaEJtQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCbkJFLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixlQUFtQixhQUFNaEIsUUFBekI7QUFDTWtCLFlBQUFBLE9BbkJhLEdBbUJILGFBQU1sQixRQUFOLENBQWVJLElBbkJaO0FBb0JuQnRDLFlBQUFBLEtBQUssQ0FBQzRDLElBQU4sQ0FBVztBQUNQQyxjQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxjQUFBQSxLQUFLLEVBQUVNO0FBRkEsYUFBWDtBQUlBUCxZQUFBQSxJQUFJLENBQUNmLFFBQUwsQ0FBYyxTQUFkLEVBQXlCRCxXQUF6QixDQUFxQyxxQkFBckM7O0FBeEJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjtBQTRCQWpCLEVBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2UsRUFBWCxDQUFjLFFBQWQ7QUFBQSx3RUFBd0Isa0JBQU8wQixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNwQkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQURvQixvQkFFakIxQyxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCcUIsR0FBaEIsTUFBeUIsRUFGUjtBQUFBO0FBQUE7QUFBQTs7QUFHaEJqQyxjQUFBQSxLQUFLLENBQUM0QyxJQUFOLENBQVc7QUFDVEMsZ0JBQUFBLElBQUksRUFBRSxPQURHO0FBRVRDLGdCQUFBQSxLQUFLLEVBQUU7QUFGRSxlQUFYO0FBSGdCOztBQUFBO0FBU2hCUyxjQUFBQSxRQVRnQixHQVNMLElBQUlDLFFBQUosQ0FBYTVDLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVyxDQUFYLENBQWIsQ0FUSztBQVVwQjJDLGNBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixjQUFoQixFQUFnQzdDLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JxQixHQUFoQixFQUFoQztBQUNNWSxjQUFBQSxJQVhjLEdBV1BqQyxDQUFDLENBQUMsU0FBRCxDQVhNO0FBQUE7QUFhaEJpQyxjQUFBQSxJQUFJLENBQUNHLE1BQUwsQ0FBWSxpQkFBWixFQUErQmxCLFFBQS9CLENBQXdDLHFCQUF4QztBQWJnQjtBQUFBLHFCQWNNSyxLQUFLLENBQUN1QixJQUFOLENBQVcsc0JBQVgsRUFBbUNILFFBQW5DLENBZE47O0FBQUE7QUFjVmxCLGNBQUFBLE9BZFU7QUFlVkgsY0FBQUEsUUFmVSxHQWVDRyxPQUFPLENBQUNDLElBZlQ7QUFnQmhCTyxjQUFBQSxJQUFJLENBQUNmLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDO0FBQ0FqQixjQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcsQ0FBWCxFQUFjK0MsS0FBZDtBQUNBM0MsY0FBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVd3QyxNQUFYO0FBQ0FoRCxjQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCbUMsS0FBbEIsQ0FBd0IsTUFBeEI7QUFuQmdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBcUJoQjtBQUNNSyxjQUFBQSxPQXRCVSxHQXNCQSxhQUFNbEIsUUFBTixDQUFlSSxJQXRCZjtBQXVCaEJ0QyxjQUFBQSxLQUFLLENBQUM0QyxJQUFOLENBQVc7QUFDUEMsZ0JBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGdCQUFBQSxLQUFLLEVBQUVNO0FBRkEsZUFBWDtBQUlBUCxjQUFBQSxJQUFJLENBQUNmLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDOztBQTNCZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4QkFqQixFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFlLEVBQWIsQ0FBZ0IsUUFBaEI7QUFBQSx3RUFBMEIsa0JBQU8wQixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQURzQixrQkFFbEJ2QyxRQUZrQjtBQUFBO0FBQUE7QUFBQTs7QUFHbEJmLGNBQUFBLEtBQUssQ0FBQzRDLElBQU4sQ0FBVztBQUNUQyxnQkFBQUEsSUFBSSxFQUFFLE9BREc7QUFFVEMsZ0JBQUFBLEtBQUssRUFBRTtBQUZFLGVBQVg7QUFIa0I7O0FBQUE7QUFTbEJTLGNBQUFBLFFBVGtCLEdBU1AsSUFBSUMsUUFBSixDQUFhNUMsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLENBQWIsQ0FBYixDQVRPO0FBVWhCaUMsY0FBQUEsSUFWZ0IsR0FVVGpDLENBQUMsQ0FBQyxXQUFELENBVlE7QUFBQTtBQWFsQmlDLGNBQUFBLElBQUksQ0FBQ0csTUFBTCxDQUFZLGlCQUFaLEVBQStCbEIsUUFBL0IsQ0FBd0MscUJBQXhDO0FBYmtCO0FBQUEscUJBY0lLLEtBQUssQ0FBQ3VCLElBQU4sQ0FBVyw2QkFBMkIzQyxRQUF0QyxFQUFnRHdDLFFBQWhELENBZEo7O0FBQUE7QUFjWmxCLGNBQUFBLE9BZFk7QUFlWkgsY0FBQUEsUUFmWSxHQWVERyxPQUFPLENBQUNDLElBZlA7QUFnQmxCTyxjQUFBQSxJQUFJLENBQUNmLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDO0FBQ0FiLGNBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXd0MsTUFBWDtBQUNBaEQsY0FBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJtQyxLQUFyQixDQUEyQixNQUEzQjtBQWxCa0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFvQmxCRSxjQUFBQSxPQUFPLENBQUNDLEdBQVIsZUFBbUIsYUFBTWhCLFFBQXpCO0FBQ01rQixjQUFBQSxPQXJCWSxHQXFCRixhQUFNbEIsUUFBTixDQUFlSSxJQXJCYjtBQXNCbEJ0QyxjQUFBQSxLQUFLLENBQUM0QyxJQUFOLENBQVc7QUFDUEMsZ0JBQUFBLElBQUksRUFBRSxPQURDO0FBRVBDLGdCQUFBQSxLQUFLLEVBQUVNO0FBRkEsZUFBWDtBQUlBUCxjQUFBQSxJQUFJLENBQUNmLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0QsV0FBakMsQ0FBNkMscUJBQTdDOztBQTFCa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUErQkFqQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLFlBQXJCO0FBQUEsd0VBQWtDLGtCQUFnQjBCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM5QkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUQ4QixrQkFFMUJ2QyxRQUYwQjtBQUFBO0FBQUE7QUFBQTs7QUFHMUJmLGNBQUFBLEtBQUssQ0FBQzRDLElBQU4sQ0FBVztBQUNUQyxnQkFBQUEsSUFBSSxFQUFFLE9BREc7QUFFVEMsZ0JBQUFBLEtBQUssRUFBRTtBQUZFLGVBQVg7QUFIMEI7O0FBQUE7QUFTeEJELGNBQUFBLElBVHdCLEdBU2pCakMsQ0FBQyxDQUFDLFdBQUQsQ0FUZ0I7QUFBQTtBQVcxQmlDLGNBQUFBLElBQUksQ0FBQ0csTUFBTCxDQUFZLFVBQVosRUFBd0JsQixRQUF4QixDQUFpQyxxQkFBakM7QUFYMEI7QUFBQSxxQkFZSkssS0FBSyxDQUFDdUIsSUFBTixDQUFXLDZCQUEyQjNDLFFBQXRDLENBWkk7O0FBQUE7QUFZcEJzQixjQUFBQSxPQVpvQjtBQWFwQkgsY0FBQUEsUUFib0IsR0FhVEcsT0FBTyxDQUFDQyxJQWJDO0FBYzFCTyxjQUFBQSxJQUFJLENBQUNmLFFBQUwsQ0FBYyxVQUFkLEVBQTBCRCxXQUExQixDQUFzQyxxQkFBdEM7QUFDQWIsY0FBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVd3QyxNQUFYO0FBQ0E1RCxjQUFBQSxLQUFLLENBQUM0QyxJQUFOLENBQVc7QUFDUEMsZ0JBQUFBLElBQUksRUFBRSxTQURDO0FBRVBDLGdCQUFBQSxLQUFLLEVBQUVaO0FBRkEsZUFBWDtBQUlBdEIsY0FBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJtQyxLQUFyQixDQUEyQixNQUEzQjtBQXBCMEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFzQjFCRSxjQUFBQSxPQUFPLENBQUNDLEdBQVIsZUFBbUIsYUFBTWhCLFFBQXpCO0FBQ01rQixjQUFBQSxPQXZCb0IsR0F1QlYsYUFBTWxCLFFBQU4sQ0FBZUksSUF2Qkw7QUF3QjFCdEMsY0FBQUEsS0FBSyxDQUFDNEMsSUFBTixDQUFXO0FBQ1BDLGdCQUFBQSxJQUFJLEVBQUUsT0FEQztBQUVQQyxnQkFBQUEsS0FBSyxFQUFFTTtBQUZBLGVBQVg7QUFJQVAsY0FBQUEsSUFBSSxDQUFDZixRQUFMLENBQWMsVUFBZCxFQUEwQkQsV0FBMUIsQ0FBc0MscUJBQXRDOztBQTVCMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQ0FqQixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVlLEVBQVYsQ0FBYSxPQUFiLEVBQXFCLGFBQXJCO0FBQUEsd0VBQW1DLGtCQUFnQjBCLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMvQkEsY0FBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ01ULGNBQUFBLElBRnlCLEdBRWxCakMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUQsSUFBUixDQUFhLEdBQWIsQ0FGa0I7QUFHL0JoQixjQUFBQSxJQUFJLENBQUNoQixXQUFMLENBQWlCLGNBQWpCLEVBQWlDQyxRQUFqQyxDQUEwQyxvQkFBMUM7QUFDSWdDLGNBQUFBLEtBSjJCLEdBSW5CbEQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUIsSUFBUixDQUFhLElBQWIsQ0FKbUI7QUFBQTtBQUFBO0FBQUEscUJBTUpJLEtBQUssQ0FBQ3VCLElBQU4sQ0FBVyxtQ0FBaUNJLEtBQTVDLENBTkk7O0FBQUE7QUFNckJ6QixjQUFBQSxPQU5xQjtBQU8zQnJCLGNBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXd0MsTUFBWCxDQUFrQixJQUFsQixFQUF3QixLQUF4QjtBQUNBZixjQUFBQSxJQUFJLENBQUNoQixXQUFMLENBQWlCLG9CQUFqQixFQUF1Q0MsUUFBdkMsQ0FBZ0QsY0FBaEQ7QUFSMkI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVckJzQixjQUFBQSxPQVZxQixHQVVYLGFBQU1sQixRQUFOLENBQWVJLElBVko7QUFXM0JPLGNBQUFBLElBQUksQ0FBQ2hCLFdBQUwsQ0FBaUIsb0JBQWpCLEVBQXVDQyxRQUF2QyxDQUFnRCxjQUFoRDs7QUFYMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbkM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlSCxDQXpNRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3BhcmFtZXRyZS9hbm5lZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gICAgdG9hc3Q6IHRydWUsXHJcbiAgICBwb3NpdGlvbjogJ3RvcC1lbmQnLFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgdGltZXI6IDMwMDAsXHJcbiAgICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxyXG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBTd2FsLnJlc3VtZVRpbWVyKVxyXG4gICAgfSxcclxuICAgIH0pXHJcbiAgICBcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcclxuICAgIGxldCBpZF9hbm5lZTtcclxuICAgXHJcbiAgICB2YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9hbm5lZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgICAgICBhamF4OiBcIi9wYXJhbWV0cmUvYW5uZWUvbGlzdFwiLFxyXG4gICAgICAgIHByb2Nlc3Npbmc6IHRydWUsXHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKCk7XHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI2RhdGF0YWJsZXNfZ2VzdGlvbl9hbm5lZSB0Ym9keSB0cicsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfYW5uZWUgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2FubmVlIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmVfZGF0YWJhbGVzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKTtcclxuICAgICAgICAgICAgaWRfYW5uZWUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbihcImNoYW5nZVwiLGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIlxyXG4gICAgICAgIGlmKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxyXG4gICAgICAgICAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaCgkKHRoaXMpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFibGUuY29sdW1ucygwKS5zZWFyY2goXCJcIikuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xyXG4gICAgfSlcclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKFwiXCIpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH0pXHJcbiAgICAkKFwiI2Fqb3V0ZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gYWxlcnQoJChcIiNmb3JtYXRpb25cIikudmFsKCkpXHJcbiAgICAgICAgaWYoISQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpIHx8ICQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpID09IFwiXCIpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogY2hvaXNzaXIgdW5lIGZvcm1hdGlvbiEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjYWpvdXRfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXHJcblxyXG4gICAgfSlcclxuICAgICQoXCIjbW9kaWZpZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKCFpZF9hbm5lZSl7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb25lciB1bmUgbGlnbmUhJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNtb2RpZmllciBpXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS1lZGl0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvcGFyYW1ldHJlL2FubmVlL2RldGFpbHMvJytpZF9hbm5lZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtZWRpdCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbCAjZGVzaWduYXRpb25cIikudmFsKHJlc3BvbnNlLmRlc2lnbmF0aW9uKVxyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1lZGl0JykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgJChcIiNzYXZlXCIpLm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpID09IFwiXCIpe1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uZXIgdW5lIGZvcm1hdGlvbiEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3NhdmVcIilbMF0pXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZm9ybWF0aW9uX2lkXCIsICQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKTtcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiNzYXZlIGlcIik7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvYW5uZWUvbmV3JywgZm9ybURhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICAkKCcjc2F2ZScpWzBdLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICQoXCIjYWpvdXRfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChcIiN1ZHBhdGVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2FubmVlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbmVyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKFwiI3VkcGF0ZVwiKVswXSlcclxuICAgICAgICBjb25zdCBpY29uID0gJChcIiN1ZHBhdGUgaVwiKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmUoJ2ZhLWNoZWNrLWNpcmNsZScpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvYW5uZWUvdXBkYXRlLycraWRfYW5uZWUsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrLWNpcmNsZScpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgJChcIiNtb2RpZmllcl9tb2RhbFwiKS5tb2RhbChcImhpZGVcIilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtY2hlY2stY2lyY2xlJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywnI3N1cHByaW1lcicsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoIWlkX2FubmVlKXtcclxuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICB0aXRsZTogJ1ZldWlsbGV6IHNlbGVjdGlvbmVyIHVuZSBsaWduZSEnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3VkcGF0ZSBpXCIpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGljb24ucmVtb3ZlKCdmYS10cmFzaCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9wYXJhbWV0cmUvYW5uZWUvZGVsZXRlLycraWRfYW5uZWUpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdHJhc2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKFwiI21vZGlmaWVyX21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtdHJhc2gnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBcclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcuYnRuX2FjdGl2ZScsYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9ICQodGhpcykuZmluZCgnaScpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXBvd2VyLW9mZicpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAgIGxldCBhbm5lZSA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCAgYXhpb3MucG9zdCgnL3BhcmFtZXRyZS9hbm5lZS9hY3RpdmVfYW5uZWUvJythbm5lZSlcclxuICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLXBvd2VyLW9mZlwiKTtcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3Bpbm5lciBmYS1zcGluJykuYWRkQ2xhc3MoXCJmYS1wb3dlci1vZmZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgIFxyXG59KVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImlkX2FubmVlIiwidGFibGUiLCJEYXRhVGFibGUiLCJsZW5ndGhNZW51Iiwib3JkZXIiLCJhamF4IiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJkZWZlclJlbmRlciIsImxhbmd1YWdlIiwidXJsIiwic2VsZWN0MiIsIm9uIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiYXR0ciIsImlkX2V0YWIiLCJ2YWwiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJjb2x1bW5zIiwic2VhcmNoIiwiZHJhdyIsImh0bWwiLCJpZF9mb3JtYXRpb24iLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwibW9kYWwiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiZGVzaWduYXRpb24iLCJtZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJyZXNldCIsInJlbG9hZCIsImZpbmQiLCJhbm5lZSJdLCJzb3VyY2VSb290IjoiIn0=