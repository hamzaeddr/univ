(self["webpackChunk"] = self["webpackChunk"] || []).push([["evaluationSimulationDeliberation"],{

/***/ "./assets/components/evaluation/simulationdeliberation.js":
/*!****************************************************************!*\
  !*** ./assets/components/evaluation/simulationdeliberation.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

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
var check;
var inscription_id = null;
$(document).ready(function () {
  $("#valider, #devalider, #simuler").attr('disabled', true);

  var enableButtons = function enableButtons() {
    if (check == 0) {
      $("#valider").removeClass('btn-secondary').addClass('btn-danger').attr('disabled', false);
      $("#simuler").removeClass('btn-secondary').addClass('btn-primary').attr('disabled', false);
      $("#devalider").addClass('btn-secondary').removeClass('btn-success').attr('disabled', true);
    } else {
      $("#valider").addClass('btn-secondary').removeClass('btn-danger').attr('disabled', true);
      $("#simuler").addClass('btn-secondary').removeClass('btn-primary').attr('disabled', true);
      $("#devalider").removeClass('btn-secondary').addClass('btn-success').attr('disabled', false);
    }
  };

  $("#etablissement").select2();
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
            return axios.get('/api/semestre/' + id_promotion);

          case 5:
            request = _context3.sent;
            response = request.data;

          case 7:
            $('#semestre').html(response).select2();

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#get_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
      var semestre_id, icon, request, response, message;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              $("#list_epreuve_normal").empty();
              semestre_id = $('#semestre').val();

              if (!(semestre_id == "" || !semestre_id)) {
                _context4.next = 6;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection semestre!'
              });
              return _context4.abrupt("return");

            case 6:
              icon = $("#get_list_etudiant i");
              icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
              _context4.prev = 8;
              _context4.next = 11;
              return axios.post('/evaluation/simulationdeliberation/list/' + semestre_id);

            case 11:
              request = _context4.sent;
              response = request.data; // $("#list_epreuve_normal").DataTable().destroy()

              if ($.fn.DataTable.isDataTable("#list_epreuve_normal")) {
                $('#list_epreuve_normal').DataTable().clear().destroy();
              }

              $("#list_epreuve_normal").html(response.html).DataTable({
                scrollX: true,
                scrollY: true,
                language: {
                  url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                }
              });
              check = response.check;

              if (check == 1) {
                Toast.fire({
                  icon: 'info',
                  title: "Operation déja valider"
                });
              }

              enableButtons();
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              _context4.next = 27;
              break;

            case 21:
              _context4.prev = 21;
              _context4.t0 = _context4["catch"](8);
              console.log(_context4.t0);
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              message = _context4.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 27:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[8, 21]]);
    }));

    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  $('body').on('click', '#list_epreuve_normal tbody tr', function () {
    if ($(this).hasClass('active_databales')) {
      $(this).removeClass('active_databales'); // $('#inscription-modal').attr('disabled', true);

      inscription_id = null;
    } else {
      $("#list_epreuve_normal tbody tr").removeClass('active_databales');
      $(this).addClass('active_databales');
      inscription_id = $(this).attr("id");
    }
  });
  $("#simuler").on("click", function () {
    $("#note_modal").modal("show");
    getSimulerDetails();
  });

  var getSimulerDetails = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var request, response, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return axios.post('/evaluation/simulationdeliberation/simuler/' + inscription_id + "/" + $("#semestre").val());

            case 3:
              request = _context5.sent;
              response = request.data;
              $("#note_modal .modal-body").html(response); // Toast.fire({
              //     icon: 'success',
              //     title: response,
              // });

              setColorRed();
              _context5.next = 14;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);
              message = _context5.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 9]]);
    }));

    return function getSimulerDetails() {
      return _ref5.apply(this, arguments);
    };
  }();

  $("body").on("click", ".open h3", function () {
    $(this).parent().find(".elements").slideToggle("slow");
  });
  $("body").on("keyup change", ".KU3", function () {
    var value = $(this).attr('id'); // var elementCount = $(this).parent().parent().parent().parent().parent().parent().find(".elements_container");

    var elements = $(this).parent().parent().parent().parent().parent().parent().find(".elements_container");
    var modulex = $(this).parent().parent().parent().parent().parent().parent();
    var modules = $(this).parent().parent().parent().parent().parent().parent().parent().parent().find(".modules");
    var rachat = $(this).parent().parent();
    var cc_rachat = rachat.find(".cc_rachat").val();
    var tp_rachat = rachat.find(".tp_rachat").val();
    var ef_rachat = rachat.find(".ef_rachat").val();
    var element = rachat.find(".element_rachat");
    var coeff_module = Number($(this).parent().parent().parent().parent().parent().parent().find(".coefficcient_module").val());
    var coeff_exams = $(this).parent().parent().parent().parent().parent().find(".coefficcient_element_epreuve").val();
    var coefficcient_element_epreuve = coeff_exams.split(" ");
    var coeff_cc = Number(coefficcient_element_epreuve[0]);
    var coeff_tp = Number(coefficcient_element_epreuve[1]);
    var coeff_ef = Number(coefficcient_element_epreuve[2]);
    console.log(elements);
    var calculeNrachatElement = (Number(cc_rachat) * coeff_cc + Number(tp_rachat) * coeff_tp + Number(ef_rachat) * coeff_ef) / (coeff_cc + coeff_tp + coeff_ef);
    element.val(Number(calculeNrachatElement.toFixed(2)));
    var calculeNrachatModule = 0;
    var elementSomme = 0;
    elements.map(function () {
      // console.log($(this).find(".element_rachat").val(), $(this).find(".coefficcient_element").val());
      calculeNrachatModule += Number($(this).find(".element_rachat").val()) * Number($(this).find(".coefficcient_element").val());
      elementSomme += Number($(this).find(".coefficcient_element").val());
    });
    var calculeNrachatModulex = calculeNrachatModule / elementSomme;
    modulex.find(".module_rachat").val(Number(calculeNrachatModulex.toFixed(2))); // console.log(Number(modulex.find(".noteModuleOG").val()) + Number((calculeNrachatModulex).toFixed(2)));

    if (Number(modulex.find(".noteModuleOG").val()) + Number(calculeNrachatModulex.toFixed(2)) > 20) {
      // console.log(Number(modulex.find(".noteModuleOG").val()))
      modulex.find(".noteModule").val(Number(modulex.find(".noteModuleOG").val()));
    } else {
      // console.log(Number(modulex.find(".noteModuleOG").val()) + Number((calculeNrachatModulex)))
      modulex.find(".noteModule").val((Number(modulex.find(".noteModuleOG").val()) + Number(calculeNrachatModulex)).toFixed(2));
    }

    var calculeNrachatSemestre = 0;
    var moduleSomme = 0;
    modules.map(function () {
      // console.log($(this).find(".module_rachat").val(), $(this).find(".coefficcient_module").val());
      calculeNrachatSemestre += Number($(this).find(".module_rachat").val()) * Number($(this).find(".coefficcient_module").val());
      moduleSomme += Number($(this).find(".coefficcient_module").val());
    });
    var calculeNrachatSemestrex = Number((calculeNrachatSemestre / moduleSomme).toFixed(2));
    $('.semestre_rachat').val(Number(calculeNrachatSemestrex.toFixed(2)));

    if (Number($('.semestre_note').val()) + calculeNrachatSemestrex > 20) {
      $('.semestre_note').val(Number($('.semestre_noteOG').val()));
    } else {
      $('.semestre_note').val(Number($('.semestre_noteOG').val()) + Number(calculeNrachatSemestrex.toFixed(2)));
    }
  });

  var setColorRed = function setColorRed() {
    $("body .colorRed").map(function () {
      // console.log(this, this.value, $(this), $(this).val())
      if ($(this).val() == 1) {
        // console.log($(this).parent().parent())
        $(this).parent().find(".titleModule").css("color", "red");
      }
    });
  };

  $("body").on("click", "#save_rachat", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
      var icon, data, noteSemestreRachat, noteModules, modules, noteElements, elements, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              e.preventDefault();
              icon = $("#save_rachat i");
              icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
              data = [];
              noteSemestreRachat = {
                'id': $(".semestre_rachat").attr("data-id"),
                'note_rachat': $(".semestre_rachat").val()
              };
              data.push({
                'semestre': noteSemestreRachat
              });
              noteModules = [];
              modules = $(".modules");
              modules.map(function () {
                noteModules.push({
                  'id': $(this).attr('data-id'),
                  'note_rachat': $(this).find(".module_rachat").val()
                });
              });
              data.push({
                'modules': noteModules
              });
              noteElements = [];
              elements = $(".elements_container");
              elements.map(function () {
                noteElements.push({
                  'id': $(this).attr('data-id'),
                  'note_rachat': $(this).find(".element_rachat").val(),
                  'cc_rachat': $(this).find(".cc_rachat").val(),
                  'tp_rachat': $(this).find(".tp_rachat").val(),
                  'ef_rachat': $(this).find(".ef_rachat").val()
                });
              });
              data.push({
                'elements': noteElements
              });
              _context6.prev = 14;
              formData = new FormData();
              formData.append("data", JSON.stringify(data));
              _context6.next = 19;
              return axios.post('/evaluation/simulationdeliberation/saverachat', formData);

            case 19:
              request = _context6.sent;
              response = request.data;
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              Toast.fire({
                icon: 'success',
                title: response
              });
              $("#note_modal").modal("hide");
              _context6.next = 32;
              break;

            case 26:
              _context6.prev = 26;
              _context6.t0 = _context6["catch"](14);
              console.log(_context6.t0);
              icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
              message = _context6.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 32:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[14, 26]]);
    }));

    return function (_x2) {
      return _ref6.apply(this, arguments);
    };
  }());
  $("#valider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            icon = $("#valider i");
            icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
            _context7.prev = 2;
            _context7.next = 5;
            return axios.post('/evaluation/simulationdeliberation/valider');

          case 5:
            request = _context7.sent;
            response = request.data;
            check = 1;
            enableButtons();
            Toast.fire({
              icon: 'success',
              title: response
            });
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            _context7.next = 19;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            message = _context7.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 19:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 13]]);
  })));
  $("#devalider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            icon = $("#devalider i");
            icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
            _context8.prev = 2;
            _context8.next = 5;
            return axios.post('/evaluation/simulationdeliberation/devalider');

          case 5:
            request = _context8.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context8.next = 19;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](2);
            console.log(_context8.t0);
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            message = _context8.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 19:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[2, 13]]);
  })));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_internals_inherit-if-required_js-node_modules_core-js_internals_-d805d8","vendors-node_modules_core-js_internals_array-method-has-species-support_js-node_modules_core--0c063b"], () => (__webpack_exec__("./assets/components/evaluation/simulationdeliberation.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJLENBQUNuQixXQUFMLENBQWlCLGNBQWpCLEVBQWlDQyxRQUFqQyxDQUEwQyxvQkFBMUM7QUFGd0I7QUFBQTtBQUFBLG1CQUlFTSxLQUFLLENBQUNjLElBQU4sQ0FBVyw4Q0FBWCxDQUpGOztBQUFBO0FBSWRaLFlBQUFBLE9BSmM7QUFLaEJILFlBQUFBLFFBTGdCLEdBS0xHLE9BQU8sQ0FBQ0MsSUFMSDtBQU1wQmpCLFlBQUFBLEtBQUssR0FBRyxDQUFSO0FBQ0FNLFlBQUFBLGFBQWE7QUFDYm9CLFlBQUFBLElBQUksQ0FBQ2xCLFFBQUwsQ0FBYyxjQUFkLEVBQThCRCxXQUE5QixDQUEwQyxvQkFBMUM7QUFDQW5CLFlBQUFBLEtBQUssQ0FBQ3FDLElBQU4sQ0FBVztBQUNQQyxjQUFBQSxJQUFJLEVBQUUsU0FEQztBQUVQQyxjQUFBQSxLQUFLLEVBQUVkO0FBRkEsYUFBWDtBQVRvQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNwQnlCLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUjtBQUNBYixZQUFBQSxJQUFJLENBQUNsQixRQUFMLENBQWMsY0FBZCxFQUE4QkQsV0FBOUIsQ0FBMEMsb0JBQTFDO0FBQ01pQyxZQUFBQSxPQWhCYyxHQWdCSixhQUFNM0IsUUFBTixDQUFlSSxJQWhCWDtBQWlCcEI3QixZQUFBQSxLQUFLLENBQUNxQyxJQUFOLENBQVc7QUFDUEMsY0FBQUEsSUFBSSxFQUFFLE9BREM7QUFFUEMsY0FBQUEsS0FBSyxFQUFFYTtBQUZBLGFBQVg7O0FBakJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE1QjtBQXVCSCxDQTdURCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2V2YWx1YXRpb24vc2ltdWxhdGlvbmRlbGliZXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xuICAgIHRvYXN0OiB0cnVlLFxuICAgIHBvc2l0aW9uOiAndG9wLWVuZCcsXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICAgIHRpbWVyOiAzMDAwLFxuICAgIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXG4gICAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XG4gICAgICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBTd2FsLnN0b3BUaW1lcilcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIFN3YWwucmVzdW1lVGltZXIpXG4gICAgfSxcbn0pXG5cbmxldCBjaGVjaztcbmxldCBpbnNjcmlwdGlvbl9pZCA9IG51bGw7XG4gICAgXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAgKCkge1xuICAgICQoXCIjdmFsaWRlciwgI2RldmFsaWRlciwgI3NpbXVsZXJcIikuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxuICAgIGNvbnN0IGVuYWJsZUJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgICAgIGlmKGNoZWNrID09IDApIHtcbiAgICAgICAgICAgICQoXCIjdmFsaWRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tZGFuZ2VyJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICQoXCIjc2ltdWxlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tcHJpbWFyeScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXG4gICAgICAgICAgICAkKFwiI2RldmFsaWRlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tc3VjY2VzcycpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjdmFsaWRlclwiKS5hZGRDbGFzcygnYnRuLXNlY29uZGFyeScpLnJlbW92ZUNsYXNzKCdidG4tZGFuZ2VyJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxuICAgICAgICAgICAgJChcIiNzaW11bGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxuICAgICAgICAgICAgJChcIiNkZXZhbGlkZXJcIikucmVtb3ZlQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hZGRDbGFzcygnYnRuLXN1Y2Nlc3MnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKCk7XG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfVxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9XG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfVxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICBcblxuICAgICQoXCIjZ2V0X2xpc3RfZXR1ZGlhbnRcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLmVtcHR5KClcbiAgICAgICAgbGV0IHNlbWVzdHJlX2lkID0gJCgnI3NlbWVzdHJlJykudmFsKCk7XG4gICAgICAgIGlmKHNlbWVzdHJlX2lkID09IFwiXCIgfHwgIXNlbWVzdHJlX2lkKSB7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmV1aWxsZXogc2VsZWN0aW9uIHNlbWVzdHJlIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2dldF9saXN0X2V0dWRpYW50IGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNlYXJjaCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL3NpbXVsYXRpb25kZWxpYmVyYXRpb24vbGlzdC8nK3NlbWVzdHJlX2lkKTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICAgICAgLy8gJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLkRhdGFUYWJsZSgpLmRlc3Ryb3koKVxuICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikpIHtcbiAgICAgICAgICAgICAgICAkKCcjbGlzdF9lcHJldXZlX25vcm1hbCcpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAkKFwiI2xpc3RfZXByZXV2ZV9ub3JtYWxcIikuaHRtbChyZXNwb25zZS5odG1sKS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFg6IHRydWUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsWTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNoZWNrID0gcmVzcG9uc2UuY2hlY2s7XG4gICAgICAgICAgICBpZihjaGVjayA9PSAxKXtcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJPcGVyYXRpb24gZMOpamEgdmFsaWRlclwiLFxuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc2VhcmNoJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsJyNsaXN0X2VwcmV1dmVfbm9ybWFsIHRib2R5IHRyJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZV9kYXRhYmFsZXMnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgLy8gJCgnI2luc2NyaXB0aW9uLW1vZGFsJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIGluc2NyaXB0aW9uX2lkID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbCB0Ym9keSB0clwiKS5yZW1vdmVDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlX2RhdGFiYWxlcycpOyAgXG4gICAgICAgICAgICBpbnNjcmlwdGlvbl9pZCA9ICQodGhpcykuYXR0cihcImlkXCIpICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KVxuICAgXG5cblxuICAgIFxuICAgIFxuICAgICQoXCIjc2ltdWxlclwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxuICAgICAgICAkKFwiI25vdGVfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpXG4gICAgICAgIGdldFNpbXVsZXJEZXRhaWxzKCk7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBnZXRTaW11bGVyRGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9zaW11bGF0aW9uZGVsaWJlcmF0aW9uL3NpbXVsZXIvJytpbnNjcmlwdGlvbl9pZCtcIi9cIiskKFwiI3NlbWVzdHJlXCIpLnZhbCgpKTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICAgICAgJChcIiNub3RlX21vZGFsIC5tb2RhbC1ib2R5XCIpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgLy8gVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAvLyAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgc2V0Q29sb3JSZWQoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5vcGVuIGgzXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcIi5lbGVtZW50c1wiKS5zbGlkZVRvZ2dsZShcInNsb3dcIik7XG4gICAgfSlcbiAgICBcbiAgICBcbiAgICAkKFwiYm9keVwiKS5vbihcImtleXVwIGNoYW5nZVwiLCBcIi5LVTNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgIC8vIHZhciBlbGVtZW50Q291bnQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIuZWxlbWVudHNfY29udGFpbmVyXCIpO1xuICAgICAgICB2YXIgZWxlbWVudHMgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIuZWxlbWVudHNfY29udGFpbmVyXCIpO1xuICAgICAgICB2YXIgbW9kdWxleCA9ICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KClcbiAgICAgICAgdmFyIG1vZHVsZXMgPSAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLm1vZHVsZXNcIik7XG4gICAgICAgIFxuICAgICAgICB2YXIgcmFjaGF0ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcbiAgICAgICAgdmFyIGNjX3JhY2hhdCA9ICByYWNoYXQuZmluZChcIi5jY19yYWNoYXRcIikudmFsKCkgXG4gICAgICAgIHZhciB0cF9yYWNoYXQgPSAgcmFjaGF0LmZpbmQoXCIudHBfcmFjaGF0XCIpLnZhbCgpIFxuICAgICAgICB2YXIgZWZfcmFjaGF0ID0gIHJhY2hhdC5maW5kKFwiLmVmX3JhY2hhdFwiKS52YWwoKSBcbiAgICAgICAgdmFyIGVsZW1lbnQgPSByYWNoYXQuZmluZChcIi5lbGVtZW50X3JhY2hhdFwiKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB2YXIgY29lZmZfbW9kdWxlID0gIE51bWJlcigkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoXCIuY29lZmZpY2NpZW50X21vZHVsZVwiKS52YWwoKSkgO1xuICAgICAgICB2YXIgY29lZmZfZXhhbXMgPSAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKFwiLmNvZWZmaWNjaWVudF9lbGVtZW50X2VwcmV1dmVcIikudmFsKCkgO1xuICAgICAgICB2YXIgY29lZmZpY2NpZW50X2VsZW1lbnRfZXByZXV2ZSA9IGNvZWZmX2V4YW1zLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdmFyIGNvZWZmX2NjID0gIE51bWJlcihjb2VmZmljY2llbnRfZWxlbWVudF9lcHJldXZlWzBdKTtcbiAgICAgICAgdmFyIGNvZWZmX3RwID0gIE51bWJlcihjb2VmZmljY2llbnRfZWxlbWVudF9lcHJldXZlWzFdKTtcbiAgICAgICAgdmFyIGNvZWZmX2VmID0gIE51bWJlcihjb2VmZmljY2llbnRfZWxlbWVudF9lcHJldXZlWzJdKTtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudHMpXG5cbiAgICAgICAgdmFyIGNhbGN1bGVOcmFjaGF0RWxlbWVudCA9ICggKCBOdW1iZXIoY2NfcmFjaGF0KSAqIGNvZWZmX2NjICkgKyAoIE51bWJlcih0cF9yYWNoYXQpICogY29lZmZfdHAgKSArICggTnVtYmVyKGVmX3JhY2hhdCkgKiBjb2VmZl9lZiApICkgLyAoIGNvZWZmX2NjICsgY29lZmZfdHAgKyBjb2VmZl9lZiApO1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC52YWwoTnVtYmVyKChjYWxjdWxlTnJhY2hhdEVsZW1lbnQpLnRvRml4ZWQoMikpKTtcbiAgXG4gIFxuICAgICAgICB2YXIgY2FsY3VsZU5yYWNoYXRNb2R1bGU9MDtcbiAgICAgICAgdmFyIGVsZW1lbnRTb21tZT0wO1xuICAgICAgICBlbGVtZW50cy5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygkKHRoaXMpLmZpbmQoXCIuZWxlbWVudF9yYWNoYXRcIikudmFsKCksICQodGhpcykuZmluZChcIi5jb2VmZmljY2llbnRfZWxlbWVudFwiKS52YWwoKSk7XG4gICAgICAgICAgICBjYWxjdWxlTnJhY2hhdE1vZHVsZSArPSBOdW1iZXIoJCh0aGlzKS5maW5kKFwiLmVsZW1lbnRfcmFjaGF0XCIpLnZhbCgpKSAqIE51bWJlcigkKHRoaXMpLmZpbmQoXCIuY29lZmZpY2NpZW50X2VsZW1lbnRcIikudmFsKCkpO1xuICAgICAgICAgICAgZWxlbWVudFNvbW1lICs9IE51bWJlcigkKHRoaXMpLmZpbmQoXCIuY29lZmZpY2NpZW50X2VsZW1lbnRcIikudmFsKCkpXG4gICAgICAgIH0pXG4gICAgICAgIHZhciAgY2FsY3VsZU5yYWNoYXRNb2R1bGV4ID0gY2FsY3VsZU5yYWNoYXRNb2R1bGUgLyBlbGVtZW50U29tbWUgO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIG1vZHVsZXguZmluZChcIi5tb2R1bGVfcmFjaGF0XCIpLnZhbChOdW1iZXIoKGNhbGN1bGVOcmFjaGF0TW9kdWxleCkudG9GaXhlZCgyKSkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhOdW1iZXIobW9kdWxleC5maW5kKFwiLm5vdGVNb2R1bGVPR1wiKS52YWwoKSkgKyBOdW1iZXIoKGNhbGN1bGVOcmFjaGF0TW9kdWxleCkudG9GaXhlZCgyKSkpO1xuICAgICAgICBpZigoTnVtYmVyKG1vZHVsZXguZmluZChcIi5ub3RlTW9kdWxlT0dcIikudmFsKCkpICsgTnVtYmVyKChjYWxjdWxlTnJhY2hhdE1vZHVsZXgpLnRvRml4ZWQoMikpKSA+IDIwKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKE51bWJlcihtb2R1bGV4LmZpbmQoXCIubm90ZU1vZHVsZU9HXCIpLnZhbCgpKSlcbiAgICAgICAgICAgIG1vZHVsZXguZmluZChcIi5ub3RlTW9kdWxlXCIpLnZhbChOdW1iZXIobW9kdWxleC5maW5kKFwiLm5vdGVNb2R1bGVPR1wiKS52YWwoKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coTnVtYmVyKG1vZHVsZXguZmluZChcIi5ub3RlTW9kdWxlT0dcIikudmFsKCkpICsgTnVtYmVyKChjYWxjdWxlTnJhY2hhdE1vZHVsZXgpKSlcbiAgICAgICAgICAgIG1vZHVsZXguZmluZChcIi5ub3RlTW9kdWxlXCIpLnZhbCggKE51bWJlcihtb2R1bGV4LmZpbmQoXCIubm90ZU1vZHVsZU9HXCIpLnZhbCgpKSArIE51bWJlcigoY2FsY3VsZU5yYWNoYXRNb2R1bGV4KSkpLnRvRml4ZWQoMikpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdmFyIGNhbGN1bGVOcmFjaGF0U2VtZXN0cmU9MDtcbiAgICAgICAgdmFyIG1vZHVsZVNvbW1lPTA7XG4gICAgICAgIG1vZHVsZXMubWFwKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJCh0aGlzKS5maW5kKFwiLm1vZHVsZV9yYWNoYXRcIikudmFsKCksICQodGhpcykuZmluZChcIi5jb2VmZmljY2llbnRfbW9kdWxlXCIpLnZhbCgpKTtcbiAgICAgICAgICAgIGNhbGN1bGVOcmFjaGF0U2VtZXN0cmUgKz0gTnVtYmVyKCQodGhpcykuZmluZChcIi5tb2R1bGVfcmFjaGF0XCIpLnZhbCgpKSAqIE51bWJlcigkKHRoaXMpLmZpbmQoXCIuY29lZmZpY2NpZW50X21vZHVsZVwiKS52YWwoKSk7XG4gICAgICAgICAgICBtb2R1bGVTb21tZSArPSBOdW1iZXIoJCh0aGlzKS5maW5kKFwiLmNvZWZmaWNjaWVudF9tb2R1bGVcIikudmFsKCkpXG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgIHZhciAgY2FsY3VsZU5yYWNoYXRTZW1lc3RyZXggPSBOdW1iZXIoKGNhbGN1bGVOcmFjaGF0U2VtZXN0cmUgLyBtb2R1bGVTb21tZSkudG9GaXhlZCgyKSk7XG4gIFxuICBcbiAgICAgICAgJCgnLnNlbWVzdHJlX3JhY2hhdCcpLnZhbChOdW1iZXIoKGNhbGN1bGVOcmFjaGF0U2VtZXN0cmV4KS50b0ZpeGVkKDIpKSk7XG4gICAgICAgIGlmKE51bWJlcigkKCcuc2VtZXN0cmVfbm90ZScpLnZhbCgpKSArIGNhbGN1bGVOcmFjaGF0U2VtZXN0cmV4ID4gMjApe1xuICAgICAgICAkKCcuc2VtZXN0cmVfbm90ZScpLnZhbCggTnVtYmVyKCQoJy5zZW1lc3RyZV9ub3RlT0cnKS52YWwoKSkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgJCgnLnNlbWVzdHJlX25vdGUnKS52YWwoIE51bWJlcigkKCcuc2VtZXN0cmVfbm90ZU9HJykudmFsKCkpICsgTnVtYmVyKChjYWxjdWxlTnJhY2hhdFNlbWVzdHJleCkudG9GaXhlZCgyKSkpO1xuICAgICAgICB9XG4gIFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2V0Q29sb3JSZWQgPSAoKSA9PiB7XG4gICAgICAgICQoXCJib2R5IC5jb2xvclJlZFwiKS5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLCB0aGlzLnZhbHVlLCAkKHRoaXMpLCAkKHRoaXMpLnZhbCgpKVxuICAgICAgICAgICAgaWYoJCh0aGlzKS52YWwoKSA9PSAxKXtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpKVxuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcIi50aXRsZU1vZHVsZVwiKS5jc3MoXCJjb2xvclwiLCBcInJlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgIH1cblxuICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIjc2F2ZV9yYWNoYXRcIiwgYXN5bmMgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmVfcmFjaGF0IGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNoZWNrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgIHZhciBub3RlU2VtZXN0cmVSYWNoYXQgPSB7XG4gICAgICAgICAgICAnaWQnOiAkKFwiLnNlbWVzdHJlX3JhY2hhdFwiKS5hdHRyKFwiZGF0YS1pZFwiKSxcbiAgICAgICAgICAgICdub3RlX3JhY2hhdCc6ICQoXCIuc2VtZXN0cmVfcmFjaGF0XCIpLnZhbCgpLFxuICAgICAgICB9XG4gICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgJ3NlbWVzdHJlJzogbm90ZVNlbWVzdHJlUmFjaGF0XG4gICAgICAgIH0pXG4gICAgICAgIHZhciBub3RlTW9kdWxlcyA9IFtdO1xuICAgICAgICB2YXIgbW9kdWxlcyA9ICQoXCIubW9kdWxlc1wiKTtcbiAgICAgICAgbW9kdWxlcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG5vdGVNb2R1bGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICdpZCc6ICQodGhpcykuYXR0cignZGF0YS1pZCcpLFxuICAgICAgICAgICAgICAgICdub3RlX3JhY2hhdCc6ICQodGhpcykuZmluZChcIi5tb2R1bGVfcmFjaGF0XCIpLnZhbCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgICAgJ21vZHVsZXMnOiBub3RlTW9kdWxlc1xuICAgICAgICB9KVxuICAgICAgICB2YXIgbm90ZUVsZW1lbnRzID0gW107XG4gICAgICAgIHZhciBlbGVtZW50cyA9ICQoXCIuZWxlbWVudHNfY29udGFpbmVyXCIpO1xuICAgICAgICBlbGVtZW50cy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG5vdGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAnaWQnOiAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSxcbiAgICAgICAgICAgICAgICAnbm90ZV9yYWNoYXQnOiAkKHRoaXMpLmZpbmQoXCIuZWxlbWVudF9yYWNoYXRcIikudmFsKCksXG4gICAgICAgICAgICAgICAgJ2NjX3JhY2hhdCc6ICQodGhpcykuZmluZChcIi5jY19yYWNoYXRcIikudmFsKCksXG4gICAgICAgICAgICAgICAgJ3RwX3JhY2hhdCc6ICQodGhpcykuZmluZChcIi50cF9yYWNoYXRcIikudmFsKCksXG4gICAgICAgICAgICAgICAgJ2VmX3JhY2hhdCc6ICQodGhpcykuZmluZChcIi5lZl9yYWNoYXRcIikudmFsKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgICAnZWxlbWVudHMnOiBub3RlRWxlbWVudHNcbiAgICAgICAgfSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZGF0YVwiLCAgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vc2ltdWxhdGlvbmRlbGliZXJhdGlvbi9zYXZlcmFjaGF0Jyxmb3JtRGF0YSk7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKFwiI25vdGVfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWNoZWNrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pIFxuICAgICQoXCIjdmFsaWRlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBpY29uID0gJChcIiN2YWxpZGVyIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9zaW11bGF0aW9uZGVsaWJlcmF0aW9uL3ZhbGlkZXInKTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICAgICAgY2hlY2sgPSAxO1xuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcIiNkZXZhbGlkZXJcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZGV2YWxpZGVyIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL3NpbXVsYXRpb25kZWxpYmVyYXRpb24vZGV2YWxpZGVyJyk7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgICAgIGNoZWNrID0gMDtcbiAgICAgICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2stb3BlbicpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cblxuICAgIFxuXG5cbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJjaGVjayIsImluc2NyaXB0aW9uX2lkIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhdHRyIiwiZW5hYmxlQnV0dG9ucyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzZWxlY3QyIiwib24iLCJpZF9ldGFiIiwidmFsIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsImlkX2Zvcm1hdGlvbiIsImlkX3Byb21vdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtcHR5Iiwic2VtZXN0cmVfaWQiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwicG9zdCIsImZuIiwiRGF0YVRhYmxlIiwiaXNEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJzY3JvbGxYIiwic2Nyb2xsWSIsImxhbmd1YWdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJoYXNDbGFzcyIsIm1vZGFsIiwiZ2V0U2ltdWxlckRldGFpbHMiLCJzZXRDb2xvclJlZCIsInBhcmVudCIsImZpbmQiLCJzbGlkZVRvZ2dsZSIsInZhbHVlIiwiZWxlbWVudHMiLCJtb2R1bGV4IiwibW9kdWxlcyIsInJhY2hhdCIsImNjX3JhY2hhdCIsInRwX3JhY2hhdCIsImVmX3JhY2hhdCIsImVsZW1lbnQiLCJjb2VmZl9tb2R1bGUiLCJOdW1iZXIiLCJjb2VmZl9leGFtcyIsImNvZWZmaWNjaWVudF9lbGVtZW50X2VwcmV1dmUiLCJzcGxpdCIsImNvZWZmX2NjIiwiY29lZmZfdHAiLCJjb2VmZl9lZiIsImNhbGN1bGVOcmFjaGF0RWxlbWVudCIsInRvRml4ZWQiLCJjYWxjdWxlTnJhY2hhdE1vZHVsZSIsImVsZW1lbnRTb21tZSIsIm1hcCIsImNhbGN1bGVOcmFjaGF0TW9kdWxleCIsImNhbGN1bGVOcmFjaGF0U2VtZXN0cmUiLCJtb2R1bGVTb21tZSIsImNhbGN1bGVOcmFjaGF0U2VtZXN0cmV4IiwiY3NzIiwibm90ZVNlbWVzdHJlUmFjaGF0IiwicHVzaCIsIm5vdGVNb2R1bGVzIiwibm90ZUVsZW1lbnRzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9