(self["webpackChunk"] = self["webpackChunk"] || []).push([["evaluationModule"],{

/***/ "./assets/components/evaluation/module.js":
/*!************************************************!*\
  !*** ./assets/components/evaluation/module.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

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
var check;
$(document).ready(function () {
  $("#enregister, #valider, #devalider, #recalculer, #imprimer, #statut").attr('disabled', true);

  var enableButtons = function enableButtons() {
    $("#imprimer").removeClass('btn-secondary').addClass('btn-info').attr('disabled', false);
    $("#statut").removeClass('btn-secondary').addClass('btn-primary').attr('disabled', false);

    if (check == 0) {
      $("#enregister").removeClass('btn-secondary').addClass('btn-primary').attr('disabled', false);
      $("#valider").removeClass('btn-secondary').addClass('btn-danger').attr('disabled', false);
      $("#devalider").addClass('btn-secondary').removeClass('btn-success').attr('disabled', true);
      $("#recalculer").addClass('btn-secondary').removeClass('btn-warning').attr('disabled', true);
    } else {
      $("#enregister").addClass('btn-secondary').removeClass('btn-primary').attr('disabled', true);
      $("#valider").addClass('btn-secondary').removeClass('btn-danger').attr('disabled', true);
      $("#devalider").removeClass('btn-secondary').addClass('btn-success').attr('disabled', false);
      $("#recalculer").removeClass('btn-secondary').addClass('btn-warning').attr('disabled', false);
    }
  };

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
  $("#semestre").on('change', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var id_semestre, response, request;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_semestre = $(this).val();
            response = "";

            if (!(id_semestre != "")) {
              _context4.next = 7;
              break;
            }

            _context4.next = 5;
            return axios.get('/api/module/' + id_semestre);

          case 5:
            request = _context4.sent;
            response = request.data;

          case 7:
            $('#module').html(response).select2();

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  })));
  $("#get_list_etudiant").on('click', /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
      var module_id, icon, formData, request, response, message;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              $("#list_epreuve_normal").empty();
              module_id = $('#module').val();

              if (!(module_id == "" || !module_id)) {
                _context5.next = 6;
                break;
              }

              Toast.fire({
                icon: 'error',
                title: 'Veuillez selection module!'
              });
              return _context5.abrupt("return");

            case 6:
              icon = $("#get_list_etudiant i");
              icon.removeClass('fa-search').addClass("fa-spinner fa-spin");
              _context5.prev = 8;
              formData = new FormData();
              formData.append("order", $("#order").val());
              _context5.next = 13;
              return axios.post('/evaluation/module/list/' + module_id, formData);

            case 13:
              request = _context5.sent;
              response = request.data; // $("#list_epreuve_normal").DataTable().destroy()

              if ($.fn.DataTable.isDataTable("#list_epreuve_normal")) {
                $('#list_epreuve_normal').DataTable().clear().destroy();
              }

              $("#list_epreuve_normal").html(response.html).DataTable({
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
              _context5.next = 29;
              break;

            case 23:
              _context5.prev = 23;
              _context5.t0 = _context5["catch"](8);
              console.log(_context5.t0);
              icon.addClass('fa-search').removeClass("fa-spinner fa-spin");
              message = _context5.t0.response.data;
              Toast.fire({
                icon: 'error',
                title: message
              });

            case 29:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[8, 23]]);
    }));

    return function (_x) {
      return _ref5.apply(this, arguments);
    };
  }());
  $("#imprimer").on("click", function () {
    $("#imprimer_list").modal("show");
  });
  $("#valider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            icon = $("#valider i");
            icon.removeClass('fa-lock').addClass("fa-spinner fa-spin");
            _context6.prev = 2;
            _context6.next = 5;
            return axios.post('/evaluation/module/valider');

          case 5:
            request = _context6.sent;
            response = request.data;
            check = 1;
            enableButtons();
            Toast.fire({
              icon: 'success',
              title: response
            });
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            _context6.next = 19;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);
            icon.addClass('fa-lock').removeClass("fa-spinner fa-spin");
            message = _context6.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 19:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 13]]);
  })));
  $("#devalider").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            icon = $("#devalider i");
            icon.removeClass('fa-lock-open').addClass("fa-spinner fa-spin");
            _context7.prev = 2;
            _context7.next = 5;
            return axios.post('/evaluation/module/devalider');

          case 5:
            request = _context7.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context7.next = 19;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);
            icon.addClass('fa-lock-open').removeClass("fa-spinner fa-spin");
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
  $("#enregister").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            icon = $("#enregister i");
            icon.removeClass('fa-check').addClass("fa-spinner fa-spin");
            _context8.prev = 2;
            _context8.next = 5;
            return axios.post('/evaluation/module/enregistre');

          case 5:
            request = _context8.sent;
            response = request.data;
            check = 0;
            enableButtons();
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
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
            icon.addClass('fa-check').removeClass("fa-spinner fa-spin");
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
  $("#imprimer").on("click", function () {
    $("#imprimer_list").modal("show");
  });
  $("#affichage").on('change', function () {
    var affichage = $(this).val();
    $("#impression_list").attr("href", $("#impression_list").attr("href").slice(0, -1) + affichage);
    $("#impression_clair").attr("href", $("#impression_clair").attr("href").slice(0, -1) + affichage);
    $("#impression_anonymat").attr("href", $("#impression_anonymat").attr("href").slice(0, -1) + affichage);
    $("#impression_rat").attr("href", $("#impression_rat").attr("href").slice(0, -1) + affichage);
  });
  $("#recalculer").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            icon = $("#recalculer i");
            icon.removeClass('fa-redo-alt').addClass("fa-spinner fa-spin");
            _context9.prev = 2;
            _context9.next = 5;
            return axios.post('/evaluation/module/recalculer');

          case 5:
            request = _context9.sent;
            response = request.data;
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context9.next = 17;
            break;

          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](2);
            console.log(_context9.t0);
            icon.addClass('fa-redo-alt').removeClass("fa-spinner fa-spin");
            message = _context9.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[2, 11]]);
  })));
  $("#statut").on("click", function () {
    $("#statut_modal").modal("show");
  });
  $("#statut_avant_rachat").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            icon = $("#statut_avant_rachat i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context10.prev = 2;
            _context10.next = 5;
            return axios.post('/evaluation/module/statut/avantrachat');

          case 5:
            request = _context10.sent;
            response = request.data;
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context10.next = 17;
            break;

          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](2);
            console.log(_context10.t0);
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            message = _context10.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 17:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[2, 11]]);
  })));
  $("#statut_apres_rachat").on('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    var icon, request, response, message;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            icon = $("#statut_apres_rachat i");
            icon.removeClass('fa-sync').addClass("fa-spinner fa-spin");
            _context11.prev = 2;
            _context11.next = 5;
            return axios.post('/evaluation/module/statut/apresrachat');

          case 5:
            request = _context11.sent;
            response = request.data;
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            Toast.fire({
              icon: 'success',
              title: response
            });
            _context11.next = 17;
            break;

          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](2);
            console.log(_context11.t0);
            icon.addClass('fa-sync').removeClass("fa-spinner fa-spin");
            message = _context11.t0.response.data;
            Toast.fire({
              icon: 'error',
              title: message
            });

          case 17:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[2, 11]]);
  })));
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var un$Slice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272"], () => (__webpack_exec__("./assets/components/evaluation/module.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2V2YWx1YXRpb24vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gICAgdG9hc3Q6IHRydWUsXG4gICAgcG9zaXRpb246ICd0b3AtZW5kJyxcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gICAgdGltZXI6IDMwMDAsXG4gICAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICBkaWRPcGVuOiAodG9hc3QpID0+IHtcbiAgICAgICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIFN3YWwuc3RvcFRpbWVyKVxuICAgICAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgU3dhbC5yZXN1bWVUaW1lcilcbiAgICB9LFxufSlcblxubGV0IGNoZWNrO1xuICAgIFxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gICgpIHtcbiAgICAkKFwiI2VucmVnaXN0ZXIsICN2YWxpZGVyLCAjZGV2YWxpZGVyLCAjcmVjYWxjdWxlciwgI2ltcHJpbWVyLCAjc3RhdHV0XCIpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSlcbiAgICBjb25zdCBlbmFibGVCdXR0b25zID0gKCkgPT4ge1xuICAgICAgICAkKFwiI2ltcHJpbWVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1pbmZvJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcbiAgICAgICAgJChcIiNzdGF0dXRcIikucmVtb3ZlQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hZGRDbGFzcygnYnRuLXByaW1hcnknKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxuICAgICAgICBcbiAgICAgICAgaWYoY2hlY2sgPT0gMCkge1xuICAgICAgICAgICAgJChcIiNlbnJlZ2lzdGVyXCIpLnJlbW92ZUNsYXNzKCdidG4tc2Vjb25kYXJ5JykuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5JykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICQoXCIjdmFsaWRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tZGFuZ2VyJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICQoXCIjZGV2YWxpZGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi1zdWNjZXNzJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxuICAgICAgICAgICAgJChcIiNyZWNhbGN1bGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi13YXJuaW5nJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIiNlbnJlZ2lzdGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5JykuYXR0cignZGlzYWJsZWQnLCB0cnVlKVxuICAgICAgICAgICAgJChcIiN2YWxpZGVyXCIpLmFkZENsYXNzKCdidG4tc2Vjb25kYXJ5JykucmVtb3ZlQ2xhc3MoJ2J0bi1kYW5nZXInKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpXG4gICAgICAgICAgICAkKFwiI2RldmFsaWRlclwiKS5yZW1vdmVDbGFzcygnYnRuLXNlY29uZGFyeScpLmFkZENsYXNzKCdidG4tc3VjY2VzcycpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpXG4gICAgICAgICAgICAkKFwiI3JlY2FsY3VsZXJcIikucmVtb3ZlQ2xhc3MoJ2J0bi1zZWNvbmRhcnknKS5hZGRDbGFzcygnYnRuLXdhcm5pbmcnKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5zZWxlY3QyKCk7XG4gICAgJChcIiNvcmRlclwiKS5zZWxlY3QyKCk7XG4gICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfZXRhYiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfZXRhYiAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1hdGlvbi8nK2lkX2V0YWIpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfVxuICAgICAgICAkKCcjZm9ybWF0aW9uJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG4gICAgJChcIiNmb3JtYXRpb25cIikub24oJ2NoYW5nZScsIGFzeW5jIGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCBpZF9mb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX2Zvcm1hdGlvbiAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbi8nK2lkX2Zvcm1hdGlvbik7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICB9XG4gICAgICAgICQoJyNwcm9tb3Rpb24nKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI3Byb21vdGlvblwiKS5vbignY2hhbmdlJywgYXN5bmMgZnVuY3Rpb24gKCl7XG4gICAgICAgIGNvbnN0IGlkX3Byb21vdGlvbiA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCJcbiAgICAgICAgaWYoaWRfcHJvbW90aW9uICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvc2VtZXN0cmUvJytpZF9wcm9tb3Rpb24pO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfVxuICAgICAgICAkKCcjc2VtZXN0cmUnKS5odG1sKHJlc3BvbnNlKS5zZWxlY3QyKCk7XG4gICAgfSlcbiAgICAkKFwiI3NlbWVzdHJlXCIpLm9uKCdjaGFuZ2UnLCBhc3luYyBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgaWRfc2VtZXN0cmUgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBcIlwiXG4gICAgICAgIGlmKGlkX3NlbWVzdHJlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbW9kdWxlLycraWRfc2VtZXN0cmUpO1xuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgfVxuICAgICAgICAkKCcjbW9kdWxlJykuaHRtbChyZXNwb25zZSkuc2VsZWN0MigpO1xuICAgIH0pXG5cbiAgICAkKFwiI2dldF9saXN0X2V0dWRpYW50XCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKS5lbXB0eSgpXG4gICAgICAgIGxldCBtb2R1bGVfaWQgPSAkKCcjbW9kdWxlJykudmFsKCk7XG4gICAgICAgIGlmKG1vZHVsZV9pZCA9PSBcIlwiIHx8ICFtb2R1bGVfaWQpIHtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdWZXVpbGxleiBzZWxlY3Rpb24gbW9kdWxlIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2dldF9saXN0X2V0dWRpYW50IGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNlYXJjaCcpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJvcmRlclwiLCAkKFwiI29yZGVyXCIpLnZhbCgpKVxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL21vZHVsZS9saXN0LycrbW9kdWxlX2lkLCBmb3JtRGF0YSk7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSByZXF1ZXN0LmRhdGFcbiAgICAgICAgICAgIC8vICQoXCIjbGlzdF9lcHJldXZlX25vcm1hbFwiKS5EYXRhVGFibGUoKS5kZXN0cm95KClcbiAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpKSB7XG4gICAgICAgICAgICAgICAgJCgnI2xpc3RfZXByZXV2ZV9ub3JtYWwnKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgJChcIiNsaXN0X2VwcmV1dmVfbm9ybWFsXCIpLmh0bWwocmVzcG9uc2UuaHRtbCkuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZToge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvOWRjYmVjZDQyYWQvaTE4bi9GcmVuY2guanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNoZWNrID0gcmVzcG9uc2UuY2hlY2s7XG4gICAgICAgICAgICBpZihjaGVjayA9PSAxKXtcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2luZm8nLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJPcGVyYXRpb24gZMOpamEgdmFsaWRlclwiLFxuICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc2VhcmNoJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXNlYXJjaCcpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSkgXG4gICAgICAgIH1cblxuICAgIH0pXG4gICAgJChcIiNpbXByaW1lclwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxuICAgICAgICAkKFwiI2ltcHJpbWVyX2xpc3RcIikubW9kYWwoXCJzaG93XCIpXG4gICAgfSlcblxuICAgICQoXCIjdmFsaWRlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBpY29uID0gJChcIiN2YWxpZGVyIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWxvY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9tb2R1bGUvdmFsaWRlcicpO1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgICAgICBjaGVjayA9IDE7XG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLWxvY2snKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwiI2RldmFsaWRlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBpY29uID0gJChcIiNkZXZhbGlkZXIgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtbG9jay1vcGVuJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vbW9kdWxlL2RldmFsaWRlcicpO1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgICAgICBjaGVjayA9IDA7XG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1sb2NrLW9wZW4nKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtbG9jay1vcGVuJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgJChcIiNlbnJlZ2lzdGVyXCIpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI2VucmVnaXN0ZXIgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtY2hlY2snKS5hZGRDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvZXZhbHVhdGlvbi9tb2R1bGUvZW5yZWdpc3RyZScpO1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgICAgICBjaGVjayA9IDA7XG4gICAgICAgICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1jaGVjaycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICQoXCIjaW1wcmltZXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7ICBcbiAgICAgICAgJChcIiNpbXByaW1lcl9saXN0XCIpLm1vZGFsKFwic2hvd1wiKVxuICAgIH0pXG4gICAgJChcIiNhZmZpY2hhZ2VcIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWZmaWNoYWdlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgJChcIiNpbXByZXNzaW9uX2xpc3RcIikuYXR0cihcImhyZWZcIiwgICQoXCIjaW1wcmVzc2lvbl9saXN0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsLTEpK2FmZmljaGFnZSkgXG4gICAgICAgICQoXCIjaW1wcmVzc2lvbl9jbGFpclwiKS5hdHRyKFwiaHJlZlwiLCAgJChcIiNpbXByZXNzaW9uX2NsYWlyXCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsLTEpK2FmZmljaGFnZSkgXG4gICAgICAgICQoXCIjaW1wcmVzc2lvbl9hbm9ueW1hdFwiKS5hdHRyKFwiaHJlZlwiLCAgJChcIiNpbXByZXNzaW9uX2Fub255bWF0XCIpLmF0dHIoXCJocmVmXCIpLnNsaWNlKDAsLTEpK2FmZmljaGFnZSkgXG4gICAgICAgICQoXCIjaW1wcmVzc2lvbl9yYXRcIikuYXR0cihcImhyZWZcIiwgICQoXCIjaW1wcmVzc2lvbl9yYXRcIikuYXR0cihcImhyZWZcIikuc2xpY2UoMCwtMSkrYWZmaWNoYWdlKSBcbiAgICAgICAgICAgICBcbiAgICB9KVxuICAgICQoXCIjcmVjYWxjdWxlclwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBpY29uID0gJChcIiNyZWNhbGN1bGVyIGlcIik7XG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXJlZG8tYWx0JykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vbW9kdWxlL3JlY2FsY3VsZXInKTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtcmVkby1hbHQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtcmVkby1hbHQnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwiI3N0YXR1dFwiKS5vbihcImNsaWNrXCIsICgpID0+IHsgIFxuICAgICAgICAkKFwiI3N0YXR1dF9tb2RhbFwiKS5tb2RhbChcInNob3dcIilcbiAgICB9KVxuICAgICQoXCIjc3RhdHV0X2F2YW50X3JhY2hhdFwiKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgaWNvbiA9ICQoXCIjc3RhdHV0X2F2YW50X3JhY2hhdCBpXCIpO1xuICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zeW5jJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2V2YWx1YXRpb24vbW9kdWxlL3N0YXR1dC9hdmFudHJhY2hhdCcpO1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gcmVxdWVzdC5kYXRhXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zeW5jJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3BvbnNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIGljb24uYWRkQ2xhc3MoJ2ZhLXN5bmMnKS5yZW1vdmVDbGFzcyhcImZhLXNwaW5uZXIgZmEtc3BpblwiKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAkKFwiI3N0YXR1dF9hcHJlc19yYWNoYXRcIikub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSAkKFwiI3N0YXR1dF9hcHJlc19yYWNoYXQgaVwiKTtcbiAgICAgICAgaWNvbi5yZW1vdmVDbGFzcygnZmEtc3luYycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9ldmFsdWF0aW9uL21vZHVsZS9zdGF0dXQvYXByZXNyYWNoYXQnKTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHJlcXVlc3QuZGF0YVxuICAgICAgICAgICAgaWNvbi5hZGRDbGFzcygnZmEtc3luYycpLnJlbW92ZUNsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xuICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXNwb25zZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICBpY29uLmFkZENsYXNzKCdmYS1zeW5jJykucmVtb3ZlQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pXG4gICBcbn0pXG5cblxuICAgIFxuXG5cbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PSAnQXJyYXknO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jb25zdHJ1Y3RvcicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHVuJFNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc2xpY2UnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBBcnJheSA9IGdsb2JhbC5BcnJheTtcbnZhciBtYXggPSBNYXRoLm1heDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zbGljZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfSwge1xuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcbiAgICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kLCBsZW5ndGgpO1xuICAgIC8vIGlubGluZSBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBmb3IgdXNhZ2UgbmF0aXZlIGBBcnJheSNzbGljZWAgd2hlcmUgaXQncyBwb3NzaWJsZVxuICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xuICAgIGlmIChpc0FycmF5KE8pKSB7XG4gICAgICBDb25zdHJ1Y3RvciA9IE8uY29uc3RydWN0b3I7XG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgaWYgKGlzQ29uc3RydWN0b3IoQ29uc3RydWN0b3IpICYmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuJFNsaWNlKE8sIGssIGZpbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCA9IG5ldyAoQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQ29uc3RydWN0b3IpKG1heChmaW4gLSBrLCAwKSk7XG4gICAgZm9yIChuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGlmIChrIGluIE8pIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XG4gICAgcmVzdWx0Lmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiVG9hc3QiLCJTd2FsIiwibWl4aW4iLCJ0b2FzdCIsInBvc2l0aW9uIiwic2hvd0NvbmZpcm1CdXR0b24iLCJ0aW1lciIsInRpbWVyUHJvZ3Jlc3NCYXIiLCJkaWRPcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BUaW1lciIsInJlc3VtZVRpbWVyIiwiY2hlY2siLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImF0dHIiLCJlbmFibGVCdXR0b25zIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNlbGVjdDIiLCJvbiIsImlkX2V0YWIiLCJ2YWwiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwicmVxdWVzdCIsImRhdGEiLCJodG1sIiwiaWRfZm9ybWF0aW9uIiwiaWRfcHJvbW90aW9uIiwiaWRfc2VtZXN0cmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbXB0eSIsIm1vZHVsZV9pZCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsImZuIiwiRGF0YVRhYmxlIiwiaXNEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJsYW5ndWFnZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwibW9kYWwiLCJhZmZpY2hhZ2UiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=