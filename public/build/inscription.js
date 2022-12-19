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

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ ((module) => {

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $findIndex = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-3e9a6d","vendors-node_modules_core-js_modules_es_promise_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_internals_fix-regexp-well-known-symbol-logic_js-node_modules_cor-b8bfb8","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_i-c7a83c"], () => (__webpack_exec__("./assets/components/inscription/gestioninscription.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3Q0FBd0M7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2luc2NyaXB0aW9uL2dlc3Rpb25pbnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gIHRvYXN0OiB0cnVlLFxyXG4gIHBvc2l0aW9uOiBcInRvcC1lbmRcIixcclxuICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgdGltZXI6IDMwMDAsXHJcbiAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIFN3YWwucmVzdW1lVGltZXIpO1xyXG4gIH0sXHJcbn0pO1xyXG5sZXQgaWRfaW5zY3JpcHRpb24gPSBmYWxzZTtcclxubGV0IGlkSW5zY3JpcHRpb24gPSBbXTtcclxubGV0IGZyYWlzID0gW107XHJcbmxldCBmYWN0dXJlX2V4aXN0ID0gZmFsc2U7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICB2YXIgdGFibGUgPSAkKFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvblwiKS5EYXRhVGFibGUoe1xyXG4gICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICBdLFxyXG4gICAgb3JkZXI6IFtbMCwgXCJkZXNjXCJdXSxcclxuICAgIGFqYXg6IFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vbGlzdFwiLFxyXG4gICAgcHJvY2Vzc2luZzogdHJ1ZSxcclxuICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICBkZWZlclJlbmRlcjogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICBzY3JvbGxYOiB0cnVlLFxyXG4gICAgZHJhd0NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlkSW5zY3JpcHRpb24uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICQoXCJib2R5IHRyI1wiICsgZSlcclxuICAgICAgICAgIC5maW5kKFwiaW5wdXRcIilcclxuICAgICAgICAgIC5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCJib2R5IHRyI1wiICsgaWRfaW5zY3JpcHRpb24pLmFkZENsYXNzKFwiYWN0aXZlX2RhdGFiYWxlc1wiKTtcclxuICAgIH0sXHJcbiAgICBsYW5ndWFnZToge1xyXG4gICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0U3RhdHV0SW5zY3JpcHRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNzdGF0dXQtbW9kYWwgaVwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1jaGVja1wiKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2dldHN0YXR1dC9cIiArIGlkX2luc2NyaXB0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjc3RhdHV0X2luc2NyaXB0aW9uXCIpLmh0bWwoZGF0YSkuc2VsZWN0MigpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJTb21lIEVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gIH07XHJcbiAgJChcIiNmcmFpc1wiKS5vbihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAkKFwiI21vbnRhbnRcIikudmFsKCQoXCIjZnJhaXNcIikuZmluZChcIjpzZWxlY3RlZFwiKS5kYXRhKFwiZnJhaXNcIikpO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGdldE9yZ2FuaXNtZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL29yZ2FuaXNtZVwiKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3QuZGF0YTtcclxuICAgICAgJChcIiNvcmdhbmlzbWVcIikuaHRtbChkYXRhKS5zZWxlY3QyKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsIGVycm9yLnJlc3BvbnNlKTtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlNvbWUgRXJyb3JcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBnZXRPcmdhbmlzbWUoKTtcclxuICAkKFwiI2V0YWJsaXNzZW1lbnRcIikuc2VsZWN0MigpO1xyXG4gICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbihcImNoYW5nZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpZF9ldGFiID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHRhYmxlLmNvbHVtbnMoKS5zZWFyY2goXCJcIik7XHJcbiAgICB0YWJsZS5jb2x1bW5zKDApLnNlYXJjaChpZF9ldGFiKS5kcmF3KCk7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBcIlwiO1xyXG4gICAgaWYgKGlkX2V0YWIgIT0gXCJcIikge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9mb3JtYXRpb24vXCIgKyBpZF9ldGFiKTtcclxuICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiI2FubmVlXCIpLmh0bWwoXCJcIikuc2VsZWN0MigpO1xyXG4gICAgICAkKFwiI3Byb21vdGlvblwiKS5odG1sKFwiXCIpLnNlbGVjdDIoKTtcclxuICAgIH1cclxuICAgICQoXCIjZm9ybWF0aW9uXCIpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICB9KTtcclxuICAkKFwiI2Zvcm1hdGlvblwiKS5vbihcImNoYW5nZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgIGxldCByZXNwb25zZUFubmVlID0gXCJcIjtcclxuICAgIGxldCByZXNwb25zZVByb21vdGlvbiA9IFwiXCI7XHJcbiAgICBpZiAoaWRfZm9ybWF0aW9uICE9IFwiXCIpIHtcclxuICAgICAgdGFibGUuY29sdW1ucygxKS5zZWFyY2goaWRfZm9ybWF0aW9uKS5kcmF3KCk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3RQcm9tb3Rpb24gPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgXCIvYXBpL3Byb21vdGlvbi9cIiArIGlkX2Zvcm1hdGlvblxyXG4gICAgICApO1xyXG4gICAgICByZXNwb25zZVByb21vdGlvbiA9IHJlcXVlc3RQcm9tb3Rpb24uZGF0YTtcclxuICAgICAgY29uc3QgcmVxdWVzdEFubmVlID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9hbm5lZS9cIiArIGlkX2Zvcm1hdGlvbik7XHJcbiAgICAgIHJlc3BvbnNlQW5uZWUgPSByZXF1ZXN0QW5uZWUuZGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhYmxlLmNvbHVtbnMoMCkuc2VhcmNoKCQoXCIjZXRhYmxpc3NlbWVudFwiKS52YWwoKSkuZHJhdygpO1xyXG4gICAgfVxyXG4gICAgJChcIiNhbm5lZVwiKS5odG1sKHJlc3BvbnNlQW5uZWUpLnNlbGVjdDIoKTtcclxuICAgICQoXCIjcHJvbW90aW9uXCIpLmh0bWwocmVzcG9uc2VQcm9tb3Rpb24pLnNlbGVjdDIoKTtcclxuICB9KTtcclxuXHJcbiAgJChcIiNwcm9tb3Rpb25cIikub24oXCJjaGFuZ2VcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgdGFibGUuY29sdW1ucygpLnNlYXJjaChcIlwiKTtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpICE9IFwiXCIpIHtcclxuICAgICAgaWYgKCQoXCIjYW5uZWVcIikudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICAgIHRhYmxlLmNvbHVtbnMoMykuc2VhcmNoKCQoXCIjYW5uZWVcIikudmFsKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKCQodGhpcykudmFsKCkpLmRyYXcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhYmxlLmNvbHVtbnMoMSkuc2VhcmNoKCQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcIiNhbm5lZVwiKS5vbihcImNoYW5nZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICB0YWJsZS5jb2x1bW5zKCkuc2VhcmNoKFwiXCIpO1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkgIT0gXCJcIikge1xyXG4gICAgICB0YWJsZS5jb2x1bW5zKDMpLnNlYXJjaCgkKHRoaXMpLnZhbCgpKTtcclxuICAgIH1cclxuICAgIHRhYmxlLmNvbHVtbnMoMikuc2VhcmNoKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpKS5kcmF3KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJib2R5XCIpLm9uKFxyXG4gICAgXCJjbGlja1wiLFxyXG4gICAgXCIjZGF0YXRhYmxlc19nZXN0aW9uX2luc2NyaXB0aW9uIHRib2R5IHRyXCIsXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5maW5kKFwiaW5wdXRcIik7XHJcbiAgICAgIGlmIChpbnB1dC5pcyhcIjpjaGVja2VkXCIpKSB7XHJcbiAgICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaWRJbnNjcmlwdGlvbi5pbmRleE9mKGlucHV0LmF0dHIoXCJpZFwiKSk7XHJcbiAgICAgICAgaWRJbnNjcmlwdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgIGlkSW5zY3JpcHRpb24ucHVzaChpbnB1dC5hdHRyKFwiaWRcIikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuICAkKFwiYm9keVwiKS5vbihcclxuICAgIFwiZGJsY2xpY2tcIixcclxuICAgIFwiI2RhdGF0YWJsZXNfZ2VzdGlvbl9pbnNjcmlwdGlvbiB0Ym9keSB0clwiLFxyXG4gICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBjb25zdCBpbnB1dCA9ICQodGhpcykuZmluZChcImlucHV0XCIpO1xyXG5cclxuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJhY3RpdmVfZGF0YWJhbGVzXCIpKSB7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImFjdGl2ZV9kYXRhYmFsZXNcIik7XHJcbiAgICAgICAgaWRfaW5zY3JpcHRpb24gPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjZGF0YXRhYmxlc19nZXN0aW9uX2luc2NyaXB0aW9uIHRib2R5IHRyXCIpLnJlbW92ZUNsYXNzKFxyXG4gICAgICAgICAgXCJhY3RpdmVfZGF0YWJhbGVzXCJcclxuICAgICAgICApO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVfZGF0YWJhbGVzXCIpO1xyXG4gICAgICAgIGlkX2luc2NyaXB0aW9uID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgICAgZ2V0U3RhdHV0SW5zY3JpcHRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29uc3QgZ2V0RnJhaXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vZnJhaXMvXCIgKyBpZF9pbnNjcmlwdGlvblxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5kYXRhO1xyXG4gICAgICBmYWN0dXJlX2V4aXN0ID0gMTtcclxuICAgICAgJChcIiNmcmFpc1wiKS5odG1sKGRhdGEubGlzdCkuc2VsZWN0MigpO1xyXG4gICAgICAkKFwiI2NvZGUtZmFjdHVyZVwiKS5odG1sKGRhdGEuY29kZWZhY3R1cmUpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGZhY3R1cmVfZXhpc3QgPSBmYWxzZTtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkZhY3R1cmUgSW50cm91dmFibGUhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogbWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBnZXRJbnNjcmlwdGlvbkluZm9zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWNvbiA9ICQoXCIjZnJhaXMtbW9kYWwgaVwiKTtcclxuICAgICAgaWNvbi5yZW1vdmVDbGFzcyhcImZhLW1vbmV5LWJpbGwtYWx0XCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgIFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vaW5mby9cIiArIGlkX2luc2NyaXB0aW9uXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIuZXR1ZGlhbnRfaW5mb1wiKS5odG1sKGRhdGEpO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtbW9uZXktYmlsbC1hbHRcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICAgICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBlcnJvci5yZXNwb25zZSk7XHJcbiAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICB0aXRsZTogXCJTb21lIEVycm9yXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtbW9uZXktYmlsbC1hbHRcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICAkKFwiI2ZyYWlzLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKCFpZF9pbnNjcmlwdGlvbikge1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiVmV1aWxsZXogc2VsZWN0aW9uIHVuZSBsaWduZSFcIixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGlmKCFmYWN0dXJlX2V4aXN0KXtcclxuICAgIC8vICAgICBUb2FzdC5maXJlKHtcclxuICAgIC8vICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAvLyAgICAgICB0aXRsZTogJ0ZhY3R1cmUgSW50cm91dmFibGUhJyxcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICAgIHJldHVybjtcclxuICAgIC8vIH1cclxuICAgIGdldEZyYWlzKCk7XHJcbiAgICBnZXRJbnNjcmlwdGlvbkluZm9zKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCJpbnB1dFt0eXBlPXJhZGlvXVtuYW1lPW9yZ2FuXVwiKS5vbihcImNoYW5nZVwiLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMudmFsdWUgPT0gMCkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9nZXRvcmdhbmlzbWVwYXNQYXlhbnRcIik7XHJcbiAgICAgIHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiLnNlbGVjdC1vcmdhbiAjb3JnXCIpLmh0bWwocmVzcG9uc2UpLnNlbGVjdDIoKTtcclxuICAgICAgJChcIi5zZWxlY3Qtb3JnYW5cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5zZWxlY3Qtb3JnYW4gI29yZ1wiKS5odG1sKFwiXCIpO1xyXG4gICAgICAkKFwiLnNlbGVjdC1vcmdhblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiNhZGRfZnJhaXNfZ2VzdGlvblwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGxldCBmcmFpc0lkID0gJChcIiNmcmFpc1wiKS5maW5kKFwiOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG4gICAgaWYgKGZyYWlzSWQgIT0gXCJcIikge1xyXG4gICAgICBsZXQgZnJhaXNUZXh0ID0gJChcIiNmcmFpc1wiKS5maW5kKFwiOnNlbGVjdGVkXCIpLnRleHQoKTtcclxuICAgICAgbGV0IHByaXggPSAkKFwiI21vbnRhbnRcIikudmFsKCk7XHJcbiAgICAgIGxldCBpY2UgPSAkKFwiI2ljZVwiKS52YWwoKTtcclxuICAgICAgbGV0IG9yZ2FuID0gJChcIi5zZWxlY3Qtb3JnYW4gI29yZ1wiKS5maW5kKFwiOnNlbGVjdGVkXCIpLnRleHQoKTtcclxuICAgICAgbGV0IG9yZ2FuaXNtZV9pZCA9ICQoXCIuc2VsZWN0LW9yZ2FuICNvcmdcIikudmFsKCk7XHJcbiAgICAgIGlmICghJC5pc051bWVyaWMoZnJhaXNJZCkgfHwgcHJpeCA9PSBcIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgkKFwiaW5wdXRbbmFtZT0nb3JnYW4nXTpjaGVja2VkXCIpLnZhbCgpID09IDEpIHtcclxuICAgICAgICBvcmdhbmlzbWVfaWQgPSA3O1xyXG4gICAgICAgIG9yZ2FuID0gXCJQYXlhbnRcIjtcclxuICAgICAgfSBlbHNlIGlmIChvcmdhbmlzbWVfaWQgPT0gXCJcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBmcmFpcy5wdXNoKHtcclxuICAgICAgICBpbmRleDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCArIDEpLFxyXG4gICAgICAgIGlkOiBmcmFpc0lkLFxyXG4gICAgICAgIGRlc2lnbmF0aW9uOiBmcmFpc1RleHQsXHJcbiAgICAgICAgbW9udGFudDogcHJpeCxcclxuICAgICAgICBpY2U6IGljZSxcclxuICAgICAgICBvcmdhbmlzbWVfaWQ6IG9yZ2FuaXNtZV9pZCxcclxuICAgICAgICBvcmdhbmlzbWU6IG9yZ2FuLFxyXG4gICAgICB9KTtcclxuICAgICAgcmF3RnJhaXMoKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmRlbGV0ZV9mcmFpc1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IGZyYWlzLmZpbmRJbmRleCgoZnJhaXMpID0+IGZyYWlzLmluZGV4ID09ICQodGhpcykuYXR0cihcImlkXCIpKTtcclxuICAgIGZyYWlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICByYXdGcmFpcygpO1xyXG4gIH0pO1xyXG4gIGNvbnN0IHJhd0ZyYWlzID0gKCkgPT4ge1xyXG4gICAgbGV0IGh0bWwgPSBcIlwiO1xyXG4gICAgZnJhaXMubWFwKChmLCBpKSA9PiB7XHJcbiAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtpICsgMX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5kZXNpZ25hdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5tb250YW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHtmLmljZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7Zi5vcmdhbmlzbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPSdkZWxldGVfZnJhaXMgYnRuIGJ0bi1kYW5nZXInICBpZD0nJHtcclxuICAgICAgICAgICAgICAgICAgZi5pbmRleFxyXG4gICAgICAgICAgICAgICAgfSc+PGkgY2xhc3M9J2ZhIGZhLXRyYXNoJyA+PC9pPjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgYDtcclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coaHRtbCk7XHJcbiAgICAkKFwiLnRhYmxlX2ZyYWlzX2luc2NyaXB0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgfTtcclxuXHJcbiAgJChcIiNzYXZlX2ZyYWlzX2dlc3Rpb25cIikub24oXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZyYWlzXCIsIEpTT04uc3RyaW5naWZ5KGZyYWlzKSk7XHJcbiAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJvcmdhbmlzbWVcIiwgJChcIiNvcmdhbmlzbWVcIikudmFsKCkpXHJcbiAgICBsZXQgbW9kYWxBbGVydCA9ICQoXCIjZnJhaXNfaW5zY3JpcHRpb24tbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG5cclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNzYXZlX2ZyYWlzX2dlc3Rpb24gaVwiKTtcclxuICAgIGljb24ucmVtb3ZlQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCIvaW5zY3JpcHRpb24vZ2VzdGlvbi9hZGRmcmFpcy9cIiArIGlkX2luc2NyaXB0aW9uLFxyXG4gICAgICAgIGZvcm1EYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhO1xyXG4gICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5CaWVuIEVucmVnaXN0cmU8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgICAgJChcIi50YWJsZV9mcmFpc19pbnNjcmlwdGlvblwiKS5lbXB0eSgpO1xyXG4gICAgICBmcmFpcyA9IFtdO1xyXG4gICAgICB3aW5kb3cub3BlbihcIi9pbnNjcmlwdGlvbi9nZXN0aW9uL2ZhY3R1cmUvXCIgKyByZXNwb25zZSwgXCJfYmxhbmtcIik7XHJcbiAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YFxyXG4gICAgICApO1xyXG4gICAgICBpY29uLmFkZENsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluIFwiKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiI2ZyYWlzX2luc2NyaXB0aW9uLW1vZGFsIC5tb2RhbC1ib2R5IC5hbGVydFwiKS5yZW1vdmUoKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiI3N0YXR1dC1tb2RhbFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmICghaWRfaW5zY3JpcHRpb24pIHtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogXCJlcnJvclwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlZldWlsbGV6IHNlbGVjdGlvbiB1bmUgbGlnbmUhXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAkKFwiI3N0YXR1dF9tb2RhbCAubW9kYWwtYm9keSAuYWxlcnRcIikucmVtb3ZlKCk7XHJcbiAgICAkKFwiI3N0YXR1dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjc3RhdHV0X3NhdmVcIikub24oXCJzdWJtaXRcIiwgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgkKHRoaXMpWzBdKTtcclxuICAgIGxldCBtb2RhbEFsZXJ0ID0gJChcIiNzdGF0dXRfbW9kYWwgLm1vZGFsLWJvZHkgLmFsZXJ0XCIpO1xyXG5cclxuICAgIG1vZGFsQWxlcnQucmVtb3ZlKCk7XHJcbiAgICBjb25zdCBpY29uID0gJChcIiNzdGF0dXRfc2F2ZSAuYnRuIGlcIik7XHJcbiAgICBpY29uLnJlbW92ZUNsYXNzKFwiZmEtY2hlY2stY2lyY2xlXCIpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vdXBkYXRlc3RhdHV0L1wiICsgaWRfaW5zY3JpcHRpb24sXHJcbiAgICAgICAgZm9ybURhdGFcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGE7XHJcbiAgICAgICQoXCIjc3RhdHV0X21vZGFsIC5tb2RhbC1ib2R5XCIpLnByZXBlbmQoXHJcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3Jlc3BvbnNlfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICk7XHJcbiAgICAgIGljb24uYWRkQ2xhc3MoXCJmYS1jaGVjay1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW4gXCIpO1xyXG4gICAgICAkKFwiI2FubmVlX2luc2NyaXB0aW9uLCAjcHJvbW90aW9uX2luc2NyaXB0aW9uXCIpLmVtcHR5KCk7XHJcbiAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgZXJyb3IucmVzcG9uc2UpO1xyXG4gICAgICBtb2RhbEFsZXJ0LnJlbW92ZSgpO1xyXG4gICAgICAkKFwiI3N0YXR1dF9tb2RhbCAubW9kYWwtYm9keVwiKS5wcmVwZW5kKFxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JHttZXNzYWdlfTwvZGl2PmBcclxuICAgICAgKTtcclxuICAgICAgaWNvbi5hZGRDbGFzcyhcImZhLWNoZWNrLWNpcmNsZVwiKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpbiBcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIiNleHRyYWN0aW9uXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5vcGVuKFwiL2luc2NyaXB0aW9uL2dlc3Rpb24vZXh0cmFjdGlvbl9pbnNcIiwgXCJfYmxhbmtcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiLy8gYFNhbWVWYWx1ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNhbWV2YWx1ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1pcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoRSk7XG4gICAgICAgIGlmIChuICsgbGVuID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuID49IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmRJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kSW5kZXg7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxudmFyIEZJTkRfSU5ERVggPSAnZmluZEluZGV4JztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORF9JTkRFWCBpbiBbXSkgQXJyYXkoMSlbRklORF9JTkRFWF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZGluZGV4XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmRJbmRleDogZnVuY3Rpb24gZmluZEluZGV4KGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kSW5kZXgodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EX0lOREVYKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc2FtZVZhbHVlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NhbWUtdmFsdWUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBzZWFyY2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzZWFyY2gnLCBmdW5jdGlvbiAoU0VBUkNILCBuYXRpdmVTZWFyY2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNlYXJjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNlYXJjaFxuICAgIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzZWFyY2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBnZXRNZXRob2QocmVnZXhwLCBTRUFSQ0gpO1xuICAgICAgcmV0dXJuIHNlYXJjaGVyID8gY2FsbChzZWFyY2hlciwgcmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKHRvU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc2VhcmNoXG4gICAgZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVNlYXJjaCwgcngsIFMpO1xuXG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciBwcmV2aW91c0xhc3RJbmRleCA9IHJ4Lmxhc3RJbmRleDtcbiAgICAgIGlmICghc2FtZVZhbHVlKHByZXZpb3VzTGFzdEluZGV4LCAwKSkgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgIGlmICghc2FtZVZhbHVlKHJ4Lmxhc3RJbmRleCwgcHJldmlvdXNMYXN0SW5kZXgpKSByeC5sYXN0SW5kZXggPSBwcmV2aW91c0xhc3RJbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAtMSA6IHJlc3VsdC5pbmRleDtcbiAgICB9XG4gIF07XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBhcnJheVNsaWNlKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShpc0NhbGxhYmxlKGhhbmRsZXIpID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpLCB0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCJpZF9pbnNjcmlwdGlvbiIsImlkSW5zY3JpcHRpb24iLCJmcmFpcyIsImZhY3R1cmVfZXhpc3QiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwibGVuZ3RoTWVudSIsIm9yZGVyIiwiYWpheCIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwiZGVmZXJSZW5kZXIiLCJyZXNwb25zaXZlIiwic2Nyb2xsWCIsImRyYXdDYWxsYmFjayIsImZvckVhY2giLCJlIiwiZmluZCIsInByb3AiLCJhZGRDbGFzcyIsImxhbmd1YWdlIiwidXJsIiwiZ2V0U3RhdHV0SW5zY3JpcHRpb24iLCJpY29uIiwicmVtb3ZlQ2xhc3MiLCJheGlvcyIsImdldCIsInJlcXVlc3QiLCJkYXRhIiwiaHRtbCIsInNlbGVjdDIiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZmlyZSIsInRpdGxlIiwib24iLCJ2YWwiLCJnZXRPcmdhbmlzbWUiLCJpZF9ldGFiIiwiY29sdW1ucyIsInNlYXJjaCIsImRyYXciLCJpZF9mb3JtYXRpb24iLCJyZXNwb25zZUFubmVlIiwicmVzcG9uc2VQcm9tb3Rpb24iLCJyZXF1ZXN0UHJvbW90aW9uIiwicmVxdWVzdEFubmVlIiwiaW5wdXQiLCJpcyIsImluZGV4IiwiaW5kZXhPZiIsImF0dHIiLCJzcGxpY2UiLCJwdXNoIiwiaGFzQ2xhc3MiLCJnZXRGcmFpcyIsImxpc3QiLCJjb2RlZmFjdHVyZSIsImdldEluc2NyaXB0aW9uSW5mb3MiLCJtb2RhbCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJjc3MiLCJmcmFpc0lkIiwiZnJhaXNUZXh0IiwidGV4dCIsInByaXgiLCJpY2UiLCJvcmdhbiIsIm9yZ2FuaXNtZV9pZCIsImlzTnVtZXJpYyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlkIiwiZGVzaWduYXRpb24iLCJtb250YW50Iiwib3JnYW5pc21lIiwicmF3RnJhaXMiLCJmaW5kSW5kZXgiLCJtYXAiLCJmIiwiaSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kYWxBbGVydCIsInJlbW92ZSIsInBvc3QiLCJwcmVwZW5kIiwiZW1wdHkiLCJ3aW5kb3ciLCJvcGVuIiwicmVsb2FkIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=