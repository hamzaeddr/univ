(self["webpackChunk"] = self["webpackChunk"] || []).push([["inscription"],{

/***/ "./assets/components/inscription/gestioninscription.js":
/*!*************************************************************!*\
  !*** ./assets/components/inscription/gestioninscription.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

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
});
var id_inscription = false;
var idInscription = [];
var frais = [];
var facture_exist = false;
$(document).ready(function () {
  var table = $("#datatables_gestion_inscription").DataTable({
    lengthMenu: [[10, 15, 25, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
    order: [[0, "desc"]],
    ajax: "/inscription/gestion/list",
    processing: true,
    serverSide: true,
    deferRender: true,
    responsive: true,
    scrollX: true,
    drawCallback: function drawCallback() {
      idInscription.forEach(function (e) {
        $("body tr#" + e).find("input").prop("checked", true);
      });
      $("body tr#" + id_inscription).addClass("active_databales");
    },
    language: {
      url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
  });

  var getStatutInscription = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var icon, request, data, message;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              icon = $("#statut-modal i");
              _context.prev = 1;
              icon.removeClass("fa-check").addClass("fa-spinner fa-spin");
              _context.next = 5;
              return axios.get("/inscription/gestion/getstatut/" + id_inscription);

            case 5:
              request = _context.sent;
              _context.next = 8;
              return request.data;

            case 8:
              data = _context.sent;
              $("#statut_inscription").html(data).select2();
              _context.next = 17;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              message = _context.t0.response.data;
              console.log(_context.t0, _context.t0.response);
              Toast.fire({
                icon: "error",
                title: "Some Error"
              });

            case 17:
              icon.addClass("fa-check").removeClass("fa-spinner fa-spin");

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function getStatutInscription() {
      return _ref.apply(this, arguments);
    };
  }();

  $("#frais").on("change", function () {
    $("#montant").val($("#frais").find(":selected").data("frais"));
  });

  var getOrganisme = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios.get("/api/organisme");

            case 3:
              request = _context2.sent;
              _context2.next = 6;
              return request.data;

            case 6:
              data = _context2.sent;
              $("#organisme").html(data).select2();
              _context2.next = 15;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              message = _context2.t0.response.data;
              console.log(_context2.t0, _context2.t0.response);
              Toast.fire({
                icon: "error",
                title: "Some Error"
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function getOrganisme() {
      return _ref2.apply(this, arguments);
    };
  }();

  getOrganisme();
  $("#etablissement").select2();
  $("#etablissement").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var id_etab, response, request;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_etab = $(this).val();
            table.columns().search("");
            table.columns(0).search(id_etab).draw();
            response = "";

            if (!(id_etab != "")) {
              _context3.next = 11;
              break;
            }

            _context3.next = 7;
            return axios.get("/api/formation/" + id_etab);

          case 7:
            request = _context3.sent;
            response = request.data;
            _context3.next = 13;
            break;

          case 11:
            $("#annee").html("").select2();
            $("#promotion").html("").select2();

          case 13:
            $("#formation").html(response).select2();

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
  $("#formation").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_formation, responseAnnee, responsePromotion, requestPromotion, requestAnnee;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_formation = $(this).val();
            table.columns().search("");
            responseAnnee = "";
            responsePromotion = "";

            if (!(id_formation != "")) {
              _context4.next = 16;
              break;
            }

            table.columns(1).search(id_formation).draw();
            _context4.next = 8;
            return axios.get("/api/promotion/" + id_formation);

          case 8:
            requestPromotion = _context4.sent;
            responsePromotion = requestPromotion.data;
            _context4.next = 12;
            return axios.get("/api/annee/" + id_formation);

          case 12:
            requestAnnee = _context4.sent;
            responseAnnee = requestAnnee.data;
            _context4.next = 17;
            break;

          case 16:
            table.columns(0).search($("#etablissement").val()).draw();

          case 17:
            $("#annee").html(responseAnnee).select2();
            $("#promotion").html(responsePromotion).select2();

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#promotion").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            table.columns().search("");

            if ($(this).val() != "") {
              if ($("#annee").val() != "") {
                table.columns(3).search($("#annee").val());
              }

              table.columns(2).search($(this).val()).draw();
            } else {
              table.columns(1).search($("#formation").val()).draw();
            }

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  })));
  $("#annee").on("change", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            table.columns().search("");

            if ($(this).val() != "") {
              table.columns(3).search($(this).val());
            }

            table.columns(2).search($("#promotion").val()).draw();

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  })));
  $("body").on("click", "#datatables_gestion_inscription tbody tr", function () {
    var input = $(this).find("input");

    if (input.is(":checked")) {
      input.prop("checked", false);
      var index = idInscription.indexOf(input.attr("id"));
      idInscription.splice(index, 1);
    } else {
      input.prop("checked", true);
      idInscription.push(input.attr("id"));
    }
  });
  $("body").on("dblclick", "#datatables_gestion_inscription tbody tr", function () {
    // const input = $(this).find("input");
    if ($(this).hasClass("active_databales")) {
      $(this).removeClass("active_databales");
      id_inscription = null;
    } else {
      $("#datatables_gestion_inscription tbody tr").removeClass("active_databales");
      $(this).addClass("active_databales");
      id_inscription = $(this).attr("id");
      getStatutInscription();
    }
  });

  var getFrais = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var request, data, message;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios.get("/inscription/gestion/frais/" + id_inscription);

            case 3:
              request = _context7.sent;
              _context7.next = 6;
              return request.data;

            case 6:
              data = _context7.sent;
              facture_exist = 1;
              $("#frais").html(data.list).select2();
              $("#code-facture").html(data.codefacture);
              _context7.next = 19;
              break;

            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](0);
              message = _context7.t0.response.data;
              facture_exist = false;
              Toast.fire({
                icon: "error",
                title: "Facture Introuvable!"
              });
              return _context7.abrupt("return");

            case 19:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 12]]);
    }));

    return function getFrais() {
      return _ref7.apply(this, arguments);
    };
  }();

  var getInscriptionInfos = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      var _icon, request, data, message;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _icon = $("#frais-modal i");

              _icon.removeClass("fa-money-bill-alt").addClass("fa-spinner fa-spin");

              _context8.next = 5;
              return axios.get("/inscription/gestion/info/" + id_inscription);

            case 5:
              request = _context8.sent;
              _context8.next = 8;
              return request.data;

            case 8:
              data = _context8.sent;
              $(".etudiant_info").html(data);

              _icon.addClass("fa-money-bill-alt").removeClass("fa-spinner fa-spin");

              $("#frais_inscription-modal").modal("show");
              _context8.next = 20;
              break;

            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8["catch"](0);
              message = _context8.t0.response.data;
              console.log(_context8.t0, _context8.t0.response);
              Toast.fire({
                icon: "error",
                title: "Some Error"
              });
              icon.addClass("fa-money-bill-alt").removeClass("fa-spinner fa-spin");

            case 20:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 14]]);
    }));

    return function getInscriptionInfos() {
      return _ref8.apply(this, arguments);
    };
  }();

  $("#frais-modal").on("click", function () {
    if (!id_inscription) {
      Toast.fire({
        icon: "error",
        title: "Veuillez selection une ligne!"
      });
      return;
    } // if(!facture_exist){
    //     Toast.fire({
    //       icon: 'error',
    //       title: 'Facture Introuvable!',
    //     })
    //     return;
    // }


    getFrais();
    getInscriptionInfos();
  });
  $("input[type=radio][name=organ]").on("change", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(e) {
      var request;
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              e.preventDefault();

              if (!(this.value == 0)) {
                _context9.next = 10;
                break;
              }

              _context9.next = 4;
              return axios.get("/api/getorganismepasPayant");

            case 4:
              request = _context9.sent;
              response = request.data;
              $(".select-organ #org").html(response).select2();
              $(".select-organ").css("display", "block");
              _context9.next = 12;
              break;

            case 10:
              $(".select-organ #org").html("");
              $(".select-organ").css("display", "none");

            case 12:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));

    return function (_x) {
      return _ref9.apply(this, arguments);
    };
  }());
  $("#add_frais_gestion").on("click", function () {
    var fraisId = $("#frais").find(":selected").val();

    if (fraisId != "") {
      var fraisText = $("#frais").find(":selected").text();
      var prix = $("#montant").val();
      var ice = $("#ice").val();
      var organ = $(".select-organ #org").find(":selected").text();
      var organisme_id = $(".select-organ #org").val();

      if (!$.isNumeric(fraisId) || prix == "") {
        return;
      }

      if ($("input[name='organ']:checked").val() == 1) {
        organisme_id = 7;
        organ = "Payant";
      } else if (organisme_id == "") {
        return;
      }

      frais.push({
        index: Math.floor(Math.random() * 1000 + 1),
        id: fraisId,
        designation: fraisText,
        montant: prix,
        ice: ice,
        organisme_id: organisme_id,
        organisme: organ
      });
      rawFrais();
    }
  });
  $("body").on("click", ".delete_frais", function () {
    var _this = this;

    var index = frais.findIndex(function (frais) {
      return frais.index == $(_this).attr("id");
    });
    frais.splice(index, 1);
    rawFrais();
  });

  var rawFrais = function rawFrais() {
    var html = "";
    frais.map(function (f, i) {
      html += "\n            <tr>\n                <td>".concat(i + 1, "</td>\n                <td>").concat(f.designation, "</td>\n                <td>").concat(f.montant, "</td>\n                <td>").concat(f.ice, "</td>\n                <td>").concat(f.organisme, "</td>\n                <td><button class='delete_frais btn btn-danger'  id='").concat(f.index, "'><i class='fa fa-trash' ></i></button></td>\n            </tr>\n        ");
    }); // console.log(html);

    $(".table_frais_inscription").html(html);
  };

  $("#save_frais_gestion").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var formData, modalAlert, icon, request, _response, message;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            formData = new FormData();
            formData.append("frais", JSON.stringify(frais)); // formData.append("organisme", $("#organisme").val())

            modalAlert = $("#frais_inscription-modal .modal-body .alert");
            modalAlert.remove();
            icon = $("#save_frais_gestion i");
            icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
            _context10.prev = 6;
            _context10.next = 9;
            return axios.post("/inscription/gestion/addfrais/" + id_inscription, formData);

          case 9:
            request = _context10.sent;
            _response = request.data;
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>Bien Enregistre</p>\n              </div>");
            icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
            $(".table_frais_inscription").empty();
            frais = [];
            window.open("/inscription/gestion/facture/" + _response, "_blank");
            table.ajax.reload(null, false);
            _context10.next = 26;
            break;

          case 19:
            _context10.prev = 19;
            _context10.t0 = _context10["catch"](6);
            message = _context10.t0.response.data;
            console.log(_context10.t0, _context10.t0.response);
            modalAlert.remove();
            $("#frais_inscription-modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
            icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");

          case 26:
            setTimeout(function () {
              $("#frais_inscription-modal .modal-body .alert").remove();
            }, 3000);

          case 27:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[6, 19]]);
  })));
  $("#statut-modal").on("click", function () {
    if (!id_inscription) {
      Toast.fire({
        icon: "error",
        title: "Veuillez selection une ligne!"
      });
      return;
    }

    $("#statut_modal .modal-body .alert").remove();
    $("#statut_modal").modal("show");
  });
  $("#statut_save").on("submit", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(e) {
      var formData, modalAlert, icon, request, _response2, message;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              e.preventDefault();
              formData = new FormData($(this)[0]);
              modalAlert = $("#statut_modal .modal-body .alert");
              modalAlert.remove();
              icon = $("#statut_save .btn i");
              icon.removeClass("fa-check-circle").addClass("fa-spinner fa-spin");
              _context11.prev = 6;
              _context11.next = 9;
              return axios.post("/inscription/gestion/updatestatut/" + id_inscription, formData);

            case 9:
              request = _context11.sent;
              _response2 = request.data;
              $("#statut_modal .modal-body").prepend("<div class=\"alert alert-success\">\n                <p>".concat(_response2, "</p>\n              </div>"));
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");
              $("#annee_inscription, #promotion_inscription").empty();
              table.ajax.reload(null, false);
              _context11.next = 24;
              break;

            case 17:
              _context11.prev = 17;
              _context11.t0 = _context11["catch"](6);
              message = _context11.t0.response.data;
              console.log(_context11.t0, _context11.t0.response);
              modalAlert.remove();
              $("#statut_modal .modal-body").prepend("<div class=\"alert alert-danger\">".concat(message, "</div>"));
              icon.addClass("fa-check-circle").removeClass("fa-spinner fa-spin ");

            case 24:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this, [[6, 17]]);
    }));

    return function (_x2) {
      return _ref11.apply(this, arguments);
    };
  }());
  $("body").on("click", "#extraction", function () {
    window.open("/inscription/gestion/extraction_ins", "_blank");
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_regexp_exec_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-c22831"], () => (__webpack_exec__("./assets/components/inscription/gestioninscription.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWNyQkssY0FBQUEsVUFkcUIsR0FjVkwsT0FBTyxDQUFDQyxJQWRFO0FBZTNCM0IsY0FBQUEsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0RixPQUEvQixtRUFFZTdELFVBRmY7QUFLQVQsY0FBQUEsSUFBSSxDQUFDSixRQUFMLENBQWMsaUJBQWQsRUFBaUNLLFdBQWpDLENBQTZDLHFCQUE3QztBQUNBdkIsY0FBQUEsQ0FBQyxDQUFDLDRDQUFELENBQUQsQ0FBZ0Q2RixLQUFoRDtBQUNBMUYsY0FBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVd5RixNQUFYLENBQWtCLElBQWxCLEVBQXdCLEtBQXhCO0FBdEIyQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXdCckJsRSxjQUFBQSxPQXhCcUIsR0F3QlgsY0FBTUMsUUFBTixDQUFlSixJQXhCSjtBQXlCM0JLLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBbUIsY0FBTUYsUUFBekI7QUFDQTBELGNBQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNBMUYsY0FBQUEsQ0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0I0RixPQUEvQiw2Q0FDcUM5RCxPQURyQztBQUdBUixjQUFBQSxJQUFJLENBQUNKLFFBQUwsQ0FBYyxpQkFBZCxFQUFpQ0ssV0FBakMsQ0FBNkMscUJBQTdDOztBQTlCMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBL0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQ0F2QixFQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVvQyxFQUFWLENBQWEsT0FBYixFQUFzQixhQUF0QixFQUFxQyxZQUFZO0FBQy9DMEQsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVkscUNBQVosRUFBbUQsUUFBbkQ7QUFDRCxHQUZEO0FBR0QsQ0FsWEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9pbnNjcmlwdGlvbi9nZXN0aW9uaW5zY3JpcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcbiAgdG9hc3Q6IHRydWUsXG4gIHBvc2l0aW9uOiBcInRvcC1lbmRcIixcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxuICB0aW1lcjogMzAwMCxcbiAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgU3dhbC5zdG9wVGltZXIpO1xuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIFN3YWwucmVzdW1lVGltZXIpO1xuICB9LFxufSk7XG5sZXQgaWRfaW5zY3JpcHRpb24gPSBmYWxzZTtcbmxldCBpZEluc2NyaXB0aW9uID0gW107XG5sZXQgZnJhaXMgPSBbXTtcbmxldCBmYWN0dXJlX2V4aXN0ID0gZmFsc2U7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHZhciB0YWJsZSA9ICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2luc2NyaXB0aW9uXCIpLkRhdGFUYWJsZSh7XG4gICAgbGVuZ3RoTWVudTogW1xuICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcbiAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcbiAgICBdLFxuICAgIG9yZGVyOiBbWzAsIFwiZGVzY1wiXV0sXG4gICAgYWpheDogXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9saXN0XCIsXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgIGRlZmVyUmVuZGVyOiB0cnVlLFxuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgc2Nyb2xsWDogdHJ1ZSxcbiAgICBkcmF3Q2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlkSW5zY3JpcHRpb24uZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAkKFwiYm9keSB0ciNcIiArIGUpXG4gICAgICAgICAgLmZpbmQoXCJpbnB1dFwiKVxuICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgICAgJChcImJvZHkgdHIjXCIgKyBpZF9pbnNjcmlwdGlvbikuYWRkQ2xhc3MoXCJhY3RpdmVfZGF0YWJhbGVzXCIpO1xuICAgIH0sXG4gICAgbGFuZ3VhZ2U6IHtcbiAgICAgIHVybDogXCIvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy85ZGNiZWNkNDJhZC9pMThuL0ZyZW5jaC5qc29uXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZ2V0U3RhdHV0SW5zY3JpcHRpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaWNvbiA9ICQoXCIjc3RhdHV0LW1vZGFsIGlcIik7XG4gICAgdHJ5IHtcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1jaGVja1wiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vZ2V0c3RhdHV0L1wiICsgaWRfaW5zY3JpcHRpb25cbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xuICAgICAgJChcIiNzdGF0dXRfaW5zY3JpcHRpb25cIikuaHRtbChkYXRhKS5zZWxlY3QyKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcbiAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgIHRpdGxlOiBcIlNvbWUgRXJyb3JcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2tcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gIH07XG4gICQoXCIjZnJhaXNcIikub24oXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICQoXCIjbW9udGFudFwiKS52YWwoJChcIiNmcmFpc1wiKS5maW5kKFwiOnNlbGVjdGVkXCIpLmRhdGEoXCJmcmFpc1wiKSk7XG4gIH0pO1xuICBjb25zdCBnZXRPcmdhbmlzbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL29yZ2FuaXNtZVwiKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XG4gICAgICAkKFwiI29yZ2FuaXNtZVwiKS5odG1sKGRhdGEpLnNlbGVjdDIoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgdGl0bGU6IFwiU29tZSBFcnJvclwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBnZXRPcmdhbmlzbWUoKTtcbiAgJChcIiNldGFibGlzc2VtZW50XCIpLnNlbGVjdDIoKTtcbiAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcbiAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xuICAgIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKGlkX2V0YWIpLmRyYXcoKTtcbiAgICBsZXQgcmVzcG9uc2UgPSBcIlwiO1xuICAgIGlmIChpZF9ldGFiICE9IFwiXCIpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2Zvcm1hdGlvbi9cIiArIGlkX2V0YWIpO1xuICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIjYW5uZWVcIikuaHRtbChcIlwiKS5zZWxlY3QyKCk7XG4gICAgICAkKFwiI3Byb21vdGlvblwiKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcbiAgICB9XG4gICAgJChcIiNmb3JtYXRpb25cIikuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICB9KTtcbiAgJChcIiNmb3JtYXRpb25cIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGlkX2Zvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcbiAgICBsZXQgcmVzcG9uc2VBbm5lZSA9IFwiXCI7XG4gICAgbGV0IHJlc3BvbnNlUHJvbW90aW9uID0gXCJcIjtcbiAgICBpZiAoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcbiAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKGlkX2Zvcm1hdGlvbikuZHJhdygpO1xuICAgICAgY29uc3QgcmVxdWVzdFByb21vdGlvbiA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgXCIvYXBpL3Byb21vdGlvbi9cIiArIGlkX2Zvcm1hdGlvblxuICAgICAgKTtcbiAgICAgIHJlc3BvbnNlUHJvbW90aW9uID0gcmVxdWVzdFByb21vdGlvbi5kYXRhO1xuICAgICAgY29uc3QgcmVxdWVzdEFubmVlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9hbm5lZS9cIiArIGlkX2Zvcm1hdGlvbik7XG4gICAgICByZXNwb25zZUFubmVlID0gcmVxdWVzdEFubmVlLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xuICAgIH1cbiAgICAkKFwiI2FubmVlXCIpLmh0bWwocmVzcG9uc2VBbm5lZSkuc2VsZWN0MigpO1xuICAgICQoXCIjcHJvbW90aW9uXCIpLmh0bWwocmVzcG9uc2VQcm9tb3Rpb24pLnNlbGVjdDIoKTtcbiAgfSk7XG5cbiAgJChcIiNwcm9tb3Rpb25cIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XG4gICAgaWYgKCQodGhpcykudmFsKCkgIT0gXCJcIikge1xuICAgICAgaWYgKCQoXCIjYW5uZWVcIikudmFsKCkgIT0gXCJcIikge1xuICAgICAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaCgkKFwiI2FubmVlXCIpLnZhbCgpKTtcbiAgICAgIH1cbiAgICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKCQodGhpcykudmFsKCkpLmRyYXcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goJChcIiNmb3JtYXRpb25cIikudmFsKCkpLmRyYXcoKTtcbiAgICB9XG4gIH0pO1xuICAkKFwiI2FubmVlXCIpLm9uKFwiY2hhbmdlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xuICAgIGlmICgkKHRoaXMpLnZhbCgpICE9IFwiXCIpIHtcbiAgICAgIHRhYmxlLmNvbHVtbnMoMykuc2VhcmNoKCQodGhpcykudmFsKCkpO1xuICAgIH1cbiAgICB0YWJsZS5jb2x1bW5zKDIpLnNlYXJjaCgkKFwiI3Byb21vdGlvblwiKS52YWwoKSkuZHJhdygpO1xuICB9KTtcblxuICAkKFwiYm9keVwiKS5vbihcbiAgICBcImNsaWNrXCIsXG4gICAgXCIjZGF0YXRhYmxlc19nZXN0aW9uX2luc2NyaXB0aW9uIHRib2R5IHRyXCIsXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKTtcbiAgICAgIGlmIChpbnB1dC5pcyhcIjpjaGVja2VkXCIpKSB7XG4gICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpZEluc2NyaXB0aW9uLmluZGV4T2YoaW5wdXQuYXR0cihcImlkXCIpKTtcbiAgICAgICAgaWRJbnNjcmlwdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgIGlkSW5zY3JpcHRpb24ucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbiAgJChcImJvZHlcIikub24oXG4gICAgXCJkYmxjbGlja1wiLFxuICAgIFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbiB0Ym9keSB0clwiLFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XG5cbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiYWN0aXZlX2RhdGFiYWxlc1wiKSkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiYWN0aXZlX2RhdGFiYWxlc1wiKTtcbiAgICAgICAgaWRfaW5zY3JpcHRpb24gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNkYXRhdGFibGVzX2dlc3Rpb25faW5zY3JpcHRpb24gdGJvZHkgdHJcIikucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgXCJhY3RpdmVfZGF0YWJhbGVzXCJcbiAgICAgICAgKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZV9kYXRhYmFsZXNcIik7XG4gICAgICAgIGlkX2luc2NyaXB0aW9uID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XG4gICAgICAgIGdldFN0YXR1dEluc2NyaXB0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICApO1xuICBjb25zdCBnZXRGcmFpcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9mcmFpcy9cIiArIGlkX2luc2NyaXB0aW9uXG4gICAgICApO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcbiAgICAgIGZhY3R1cmVfZXhpc3QgPSAxO1xuICAgICAgJChcIiNmcmFpc1wiKS5odG1sKGRhdGEubGlzdCkuc2VsZWN0MigpO1xuICAgICAgJChcIiNjb2RlLWZhY3R1cmVcIikuaHRtbChkYXRhLmNvZGVmYWN0dXJlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICBmYWN0dXJlX2V4aXN0ID0gZmFsc2U7XG4gICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICB0aXRsZTogXCJGYWN0dXJlIEludHJvdXZhYmxlIVwiLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgICAvLyBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldEluc2NyaXB0aW9uSW5mb3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGljb24gPSAkKFwiI2ZyYWlzLW1vZGFsIGlcIik7XG4gICAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtbW9uZXktYmlsbC1hbHRcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2luZm8vXCIgKyBpZF9pbnNjcmlwdGlvblxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XG4gICAgICAkKFwiLmV0dWRpYW50X2luZm9cIikuaHRtbChkYXRhKTtcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1tb25leS1iaWxsLWFsdFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICB0aXRsZTogXCJTb21lIEVycm9yXCIsXG4gICAgICB9KTtcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1tb25leS1iaWxsLWFsdFwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICB9XG4gIH07XG4gICQoXCIjZnJhaXMtbW9kYWxcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKCFpZF9pbnNjcmlwdGlvbikge1xuICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgdGl0bGU6IFwiVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSFcIixcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZighZmFjdHVyZV9leGlzdCl7XG4gICAgLy8gICAgIFRvYXN0LmZpcmUoe1xuICAgIC8vICAgICAgIGljb246ICdlcnJvcicsXG4gICAgLy8gICAgICAgdGl0bGU6ICdGYWN0dXJlIEludHJvdXZhYmxlIScsXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgZ2V0RnJhaXMoKTtcbiAgICBnZXRJbnNjcmlwdGlvbkluZm9zKCk7XG4gIH0pO1xuXG4gICQoXCJpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPW9yZ2FuXVwiKS5vbihcImNoYW5nZVwiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy52YWx1ZSA9PSAwKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9nZXRvcmdhbmlzbWVwYXNQYXlhbnRcIik7XG4gICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICQoXCIuc2VsZWN0LW9yZ2FuICNvcmdcIikuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgICAgJChcIi5zZWxlY3Qtb3JnYW5cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiLnNlbGVjdC1vcmdhbiAjb3JnXCIpLmh0bWwoXCJcIik7XG4gICAgICAkKFwiLnNlbGVjdC1vcmdhblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoXCIjYWRkX2ZyYWlzX2dlc3Rpb25cIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGZyYWlzSWQgPSAkKFwiI2ZyYWlzXCIpLmZpbmQoXCI6c2VsZWN0ZWRcIikudmFsKCk7XG4gICAgaWYgKGZyYWlzSWQgIT0gXCJcIikge1xuICAgICAgbGV0IGZyYWlzVGV4dCA9ICQoXCIjZnJhaXNcIikuZmluZChcIjpzZWxlY3RlZFwiKS50ZXh0KCk7XG4gICAgICBsZXQgcHJpeCA9ICQoXCIjbW9udGFudFwiKS52YWwoKTtcbiAgICAgIGxldCBpY2UgPSAkKFwiI2ljZVwiKS52YWwoKTtcbiAgICAgIGxldCBvcmdhbiA9ICQoXCIuc2VsZWN0LW9yZ2FuICNvcmdcIikuZmluZChcIjpzZWxlY3RlZFwiKS50ZXh0KCk7XG4gICAgICBsZXQgb3JnYW5pc21lX2lkID0gJChcIi5zZWxlY3Qtb3JnYW4gI29yZ1wiKS52YWwoKTtcbiAgICAgIGlmICghJC5pc051bWVyaWMoZnJhaXNJZCkgfHwgcHJpeCA9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICgkKFwiaW5wdXRbbmFtZT0nb3JnYW4nXTpjaGVja2VkXCIpLnZhbCgpID09IDEpIHtcbiAgICAgICAgb3JnYW5pc21lX2lkID0gNztcbiAgICAgICAgb3JnYW4gPSBcIlBheWFudFwiO1xuICAgICAgfSBlbHNlIGlmIChvcmdhbmlzbWVfaWQgPT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmcmFpcy5wdXNoKHtcbiAgICAgICAgaW5kZXg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAgKyAxKSxcbiAgICAgICAgaWQ6IGZyYWlzSWQsXG4gICAgICAgIGRlc2lnbmF0aW9uOiBmcmFpc1RleHQsXG4gICAgICAgIG1vbnRhbnQ6IHByaXgsXG4gICAgICAgIGljZTogaWNlLFxuICAgICAgICBvcmdhbmlzbWVfaWQ6IG9yZ2FuaXNtZV9pZCxcbiAgICAgICAgb3JnYW5pc21lOiBvcmdhbixcbiAgICAgIH0pO1xuICAgICAgcmF3RnJhaXMoKTtcbiAgICB9XG4gIH0pO1xuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZV9mcmFpc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaW5kZXggPSBmcmFpcy5maW5kSW5kZXgoKGZyYWlzKSA9PiBmcmFpcy5pbmRleCA9PSAkKHRoaXMpLmF0dHIoXCJpZFwiKSk7XG4gICAgZnJhaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByYXdGcmFpcygpO1xuICB9KTtcbiAgY29uc3QgcmF3RnJhaXMgPSAoKSA9PiB7XG4gICAgbGV0IGh0bWwgPSBcIlwiO1xuICAgIGZyYWlzLm1hcCgoZiwgaSkgPT4ge1xuICAgICAgaHRtbCArPSBgXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPiR7aSArIDF9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHtmLmRlc2lnbmF0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5tb250YW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5pY2V9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHtmLm9yZ2FuaXNtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPSdkZWxldGVfZnJhaXMgYnRuIGJ0bi1kYW5nZXInICBpZD0nJHtcbiAgICAgICAgICAgICAgICAgIGYuaW5kZXhcbiAgICAgICAgICAgICAgICB9Jz48aSBjbGFzcz0nZmEgZmEtdHJhc2gnID48L2k+PC9idXR0b24+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIGA7XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coaHRtbCk7XG4gICAgJChcIi50YWJsZV9mcmFpc19pbnNjcmlwdGlvblwiKS5odG1sKGh0bWwpO1xuICB9O1xuXG4gICQoXCIjc2F2ZV9mcmFpc19nZXN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZyYWlzXCIsIEpTT04uc3RyaW5naWZ5KGZyYWlzKSk7XG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwib3JnYW5pc21lXCIsICQoXCIjb3JnYW5pc21lXCIpLnZhbCgpKVxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XG5cbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xuICAgIGNvbnN0IGljb24gPSAkKFwiI3NhdmVfZnJhaXNfZ2VzdGlvbiBpXCIpO1xuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vYWRkZnJhaXMvXCIgKyBpZF9pbnNjcmlwdGlvbixcbiAgICAgICAgZm9ybURhdGFcbiAgICAgICk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YTtcbiAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgPHA+QmllbiBFbnJlZ2lzdHJlPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICApO1xuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgICAkKFwiLnRhYmxlX2ZyYWlzX2luc2NyaXB0aW9uXCIpLmVtcHR5KCk7XG4gICAgICBmcmFpcyA9IFtdO1xuICAgICAgd2luZG93Lm9wZW4oXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9mYWN0dXJlL1wiICsgcmVzcG9uc2UsIFwiX2JsYW5rXCIpO1xuICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xuICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxuICAgICAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gXG4gICAgICApO1xuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJChcIiNmcmFpc19pbnNjcmlwdGlvbi1tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XG4gICAgfSwgMzAwMCk7XG4gIH0pO1xuXG4gICQoXCIjc3RhdHV0LW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICghaWRfaW5zY3JpcHRpb24pIHtcbiAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhXCIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJChcIiNzdGF0dXRfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpLnJlbW92ZSgpO1xuICAgICQoXCIjc3RhdHV0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcbiAgfSk7XG5cbiAgJChcIiNzdGF0dXRfc2F2ZVwiKS5vbihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKVswXSk7XG4gICAgbGV0IG1vZGFsQWxlcnQgPSAkKFwiI3N0YXR1dF9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIik7XG5cbiAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xuICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9zYXZlIC5idG4gaVwiKTtcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL3VwZGF0ZXN0YXR1dC9cIiArIGlkX2luc2NyaXB0aW9uLFxuICAgICAgICBmb3JtRGF0YVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xuICAgICAgJChcIiNzdGF0dXRfbW9kYWwgLm1vZGFsLWJvZHlcIikucHJlcGVuZChcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgPHA+JHtyZXNwb25zZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICk7XG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICAgICQoXCIjYW5uZWVfaW5zY3JpcHRpb24sICNwcm9tb3Rpb25faW5zY3JpcHRpb25cIikuZW1wdHkoKTtcbiAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xuICAgICAgbW9kYWxBbGVydC5yZW1vdmUoKTtcbiAgICAgICQoXCIjc3RhdHV0X21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcbiAgICAgICk7XG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcbiAgICB9XG4gIH0pO1xuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiI2V4dHJhY3Rpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5vcGVuKFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vZXh0cmFjdGlvbl9pbnNcIiwgXCJfYmxhbmtcIik7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiaWRfaW5zY3JpcHRpb24iLCJpZEluc2NyaXB0aW9uIiwiZnJhaXMiLCJmYWN0dXJlX2V4aXN0IiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ0YWJsZSIsIkRhdGFUYWJsZSIsImxlbmd0aE1lbnUiLCJvcmRlciIsImFqYXgiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsImRlZmVyUmVuZGVyIiwicmVzcG9uc2l2ZSIsInNjcm9sbFgiLCJkcmF3Q2FsbGJhY2siLCJmb3JFYWNoIiwiZSIsImZpbmQiLCJwcm9wIiwiYWRkQ2xhc3MiLCJsYW5ndWFnZSIsInVybCIsImdldFN0YXR1dEluc2NyaXB0aW9uIiwiaWNvbiIsInJlbW92ZUNsYXNzIiwiYXhpb3MiLCJnZXQiLCJyZXF1ZXN0IiwiZGF0YSIsImh0bWwiLCJzZWxlY3QyIiwibWVzc2FnZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImZpcmUiLCJ0aXRsZSIsIm9uIiwidmFsIiwiZ2V0T3JnYW5pc21lIiwiaWRfZXRhYiIsImNvbHVtbnMiLCJzZWFyY2giLCJkcmF3IiwiaWRfZm9ybWF0aW9uIiwicmVzcG9uc2VBbm5lZSIsInJlc3BvbnNlUHJvbW90aW9uIiwicmVxdWVzdFByb21vdGlvbiIsInJlcXVlc3RBbm5lZSIsImlucHV0IiwiaXMiLCJpbmRleCIsImluZGV4T2YiLCJhdHRyIiwic3BsaWNlIiwicHVzaCIsImhhc0NsYXNzIiwiZ2V0RnJhaXMiLCJsaXN0IiwiY29kZWZhY3R1cmUiLCJnZXRJbnNjcmlwdGlvbkluZm9zIiwibW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiY3NzIiwiZnJhaXNJZCIsImZyYWlzVGV4dCIsInRleHQiLCJwcml4IiwiaWNlIiwib3JnYW4iLCJvcmdhbmlzbWVfaWQiLCJpc051bWVyaWMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpZCIsImRlc2lnbmF0aW9uIiwibW9udGFudCIsIm9yZ2FuaXNtZSIsInJhd0ZyYWlzIiwiZmluZEluZGV4IiwibWFwIiwiZiIsImkiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGFsQWxlcnQiLCJyZW1vdmUiLCJwb3N0IiwicHJlcGVuZCIsImVtcHR5Iiwid2luZG93Iiwib3BlbiIsInJlbG9hZCIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9