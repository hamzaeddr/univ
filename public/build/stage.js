(self["webpackChunk"] = self["webpackChunk"] || []).push([["stage"],{

/***/ "./assets/components/assiduite/stage.js":
/*!**********************************************!*\
  !*** ./assets/components/assiduite/stage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

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
$(document).ready(function () {
  // $(".loader2").hide();
  var tableData = [];

  function seanceaffichage(var1, var2, var3) {
    $(".loader2").show();
    $.ajax({
      type: "POST",
      url: "/api/Seance_aff/" + var1 + "/" + var2 + "/" + var3,
      success: function success(html) {
        $(".loader2").hide();

        if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample")) {
          $("#dtDynamicVerticalScrollExample").DataTable().clear().destroy();
        }

        $("#dtDynamicVerticalScrollExample").html(html).DataTable({
          bLengthChange: false,
          lengthMenu: [[10, 20, 30, 40, 50, 20000000000000], [10, 15, 25, 50, 100, "All"]],
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
    return var1;
  } ///////////:datatable///////////////:


  function highlight() {}

  $("#dtDynamicVerticalScrollExample").DataTable({
    bLengthChange: false,
    lengthMenu: [[13, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
  }); //////dropdown select first //////////////////////////////   

  $("#etablissement").prop("selectedIndex", 1);
  $("#formation").prop("selectedIndex", 1);
  $("#promotion").prop("selectedIndex", 1); //////Affich Seance first //////////////////////////////   

  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear() + "-" + month + "-" + day;
  $("#datetime").val(today);
  var promotion = $("#promotion").val();
  var list = [];
  seanceaffichage(promotion, today, 'stage');
  $("#parlot").on("click", function () {
    $(".loader2").hide();
  }); ///////////////etablissement//////////

  $("#etablissement").on("change", function () {
    var etablissement = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Formation_aff/" + etablissement,
      success: function success(html) {
        $(".loader2").hide();
        $("#formation").html(html);
        $("#formation").prop("selectedIndex", 1);
        $.ajax({
          type: "POST",
          url: "/api/Promotion_aff/" + $("#formation").val(),
          success: function success(html) {
            $(".loader2").hide();
            $("#promotion").html(html);
            $("#promotion").prop("selectedIndex", 1);
            seanceaffichage($("#promotion").val(), $("#datetime").val(), 'stage');
          },
          error: function error() {
            $(".loader2").hide();
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !'
            });
          }
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
  }); ///////////////Fomation//////////

  $("#formation").on("change", function () {
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function success(html) {
        $(".loader2").hide();
        $("#promotion").html(html);
        $("#promotion").prop("selectedIndex", 1);
        seanceaffichage($("#promotion").val(), $("#datetime").val(), 'stage');
      },
      error: function error() {
        $(".loader2").hide();
        Toast.fire({
          icon: 'error',
          title: 'Probleme  !'
        });
      }
    });
  }); ///////////////Promotion//////////

  $("#promotion").on("change", function () {
    var promotion = $(this).val();
    seanceaffichage(promotion, $("#datetime").val(), 'stage');
  }); ///////////////Date//////////

  $("#datetime").on("change", function () {
    var date = $(this).val();
    seanceaffichage($("#promotion").val(), date, 'stage');
  });
  $("body #dtDynamicVerticalScrollExample").on("click", "tr", function () {
    var selected = $(this).hasClass("highlighty");
    $("body #dtDynamicVerticalScrollExample tr").removeClass("highlighty");
    $("body #dtDynamicVerticalScrollExample tr").removeClass("odd");
    $("body #dtDynamicVerticalScrollExample tr").removeClass("even");

    if (!selected) {
      $(this).addClass("highlighty");
      var currentRow = $(this).closest("tr");
      var statut = currentRow.find("td:eq(1)").html();
      list = [];
      list.push({
        promotion: currentRow.find("td:eq(2)").html(),
        seance: currentRow.find("td:eq(3)").html(),
        groupe: currentRow.find("td:eq(10)").html(),
        hd: currentRow.find("td:eq(8)").html(),
        module: currentRow.find("td:eq(14)").html(),
        sale: currentRow.find("td:eq(15)").html(),
        existe: currentRow.find("td:eq(11)").html(),
        statut: currentRow.find("td:eq(1)").html()
      });
      $("#traite_epreuve").hide();
      $("#retraiter_seance").hide();
      $("#deverouiller-modal").hide();
      $("#verouiller-modal").hide();
      $("#assiduite_print").hide();

      if (statut == '1') {
        $("#traite_epreuve").css({
          "display": "none"
        });
        $("#retraiter_seance").show();
        $("#verouiller-modal").show();
        $("#assiduite_print").show();
      }

      if (statut == '2') {
        $("#deverouiller-modal").show();
        $("#assiduite_print").show();
      } else {
        $("#traite_epreuve").show();
      }
    }

    if (statut == '1' || statut == '2') {
      list.forEach(function (obj) {
        $.ajax({
          type: "POST",
          url: "/api/count_seance/" + obj.seance,
          data: {
            seance: obj.seance
          },
          success: function success(html) {
            $(".loader2").hide();
            $(".grid").html(html);
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
    } // console.log(list);

  }); ////////////////////////////////:: pop up etudiant ////////////////////////////////////:
  // $("body #dtDynamicVerticalScrollExample").on("dblclick", "tr", function () {
  //   // $(".loader2").show();
  //   $("#etudiant-modal").modal("toggle");
  //   $("#etudiant-modal").modal("show");
  //   list.forEach((obj) => {
  //     $.ajax({
  //       type: "POST",
  //       url: "/api/Etud_aff",
  //       data: {
  //         promotion: obj.promotion,
  //         seance: obj.seance,
  //         groupe: obj.groupe,
  //         existe: obj.existe,
  //       },
  //       success: function (html) {
  //         $(".loader2").hide();
  //         if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample2")) {
  //           $("#dtDynamicVerticalScrollExample2").DataTable().clear().destroy();
  //         }
  //         $("#dtDynamicVerticalScrollExample2")
  //           .html(html)
  //           .DataTable({
  //             bLengthChange: false,
  //             lengthMenu: [
  //               [25, 50, 75, 100, 125, 20000000000000],
  //               [10, 15, 25, 50, 100, "All"],
  //             ],
  //           });
  //       },error:function(){
  //         $(".loader2").hide();
  //          Toast.fire({
  //            icon: 'error',
  //            title: 'Probleme  !',
  //             });
  //     },
  //     });
  //   });
  // });

  $("body #dtDynamicVerticalScrollExample").on("dblclick", "tr", function () {
    $("#etudiant-modal").modal("toggle");
    $("#etudiant-modal").modal("show"); // console.log(obj);

    list.forEach(function (obj) {
      $("#Seance_etud").val(obj.seance);
      $("#salle_etud").val(obj.nature + ' / ' + obj.salle);
      $("#element_etud").val(obj.element);
      $("#Enseignant_etud").val(obj.enseignant);
      $("#Hd_etud").val(obj.hd);
      $("#Hf_etud").val(obj.hf);
      $("#group_etud").val(obj.groupe);
      $(".loader2").hide();
      $.ajax({
        type: "POST",
        url: "/api/Etud_aff",
        data: {
          promotion: obj.promotion,
          seance: obj.seance,
          groupe: obj.groupe,
          existe: obj.existe
        },
        success: function success(html) {
          // $(".loader2").hide();
          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample2")) {
            $("#dtDynamicVerticalScrollExample2").DataTable().clear().destroy();
          }

          $("#dtDynamicVerticalScrollExample2").html(html).DataTable({
            bLengthChange: false,
            lengthMenu: [[12, 24, 36, 48, 60, 20000000000000], [10, 15, 25, 50, 100, "All"]]
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
  }); //////////////////////////Pointage ////////////////////////////////////////////

  $("body #pointage").on("click", function () {
    $(".loader2").show();
    list.forEach(function (obj) {
      if (obj.statut == 1) {
        $.ajax({
          type: "POST",
          url: "/api/Etud_pointage",
          data: {
            promo: $('#promotion').val(),
            date: $('#datetime').val(),
            hd: obj.hd
          },
          success: function success(html) {
            $(".loader2").hide();

            if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample4")) {
              $("#dtDynamicVerticalScrollExample4").DataTable().clear().destroy();
            }

            $("#dtDynamicVerticalScrollExample4").html(html).DataTable({
              bLengthChange: false,
              lengthMenu: [[16, 32, 48, 64, 74, 20000000000000], [10, 15, 25, 50, 100, "All"]]
            });
            $(".loader2").hide();
          },
          error: function error() {
            $(".loader2").hide();
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !'
            });
          }
        });
      }
    });
  }); ////////////////////////////////:: traitement ////////////////////////////////////:

  $("body #traite_epreuve").on("click", function () {
    $(".loader2").show();
    list.forEach(function (obj) {
      if (obj.groupe === "") {
        obj.groupe = "empty";
      }

      if (obj.statut != '1') {
        $.ajax({
          type: "POST",
          url: "/api/traitement_assiduite",
          data: {
            // promotion: obj.promotion,
            seance: obj.seance,
            date: $("#datetime").val(),
            // hd: obj.hd,
            // module: obj.module,
            // groupe: obj.groupe,
            // sale: obj.sale,
            type: 'traite'
          },
          success: function success(html) {
            $(".loader2").hide();
            seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
            Toast.fire({
              icon: 'success',
              title: 'seance traité avec succes'
            });
            $(".grid").html(html);
            $("#traite_epreuve").hide();
            $("#retraiter_seance").hide();
            $("#deverouiller-modal").hide();
            $("#verouiller-modal").hide();
            $("#assiduite_print").hide();
            $("#retraiter_seance").show();
            $("#verouiller-modal").show();
            $("#assiduite_print").show();
          },
          error: function error() {
            $(".loader2").hide();
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !'
            });
          }
        });
      } else {
        $(".loader2").hide();
        Toast.fire({
          icon: 'error',
          title: 'seance deja traité'
        });
      }
    });
  }); ////////////////////////////////:: retraiter  ////////////////////////////////////:

  $("body #retraiter_seance").on("click", function () {
    $(".loader2").show(); // $(".loader2").hide();

    list.forEach(function (obj) {
      if (obj.groupe === "") {
        obj.groupe = "empty";
      }

      $.ajax({
        type: "POST",
        url: "/api/traitement_assiduite",
        data: {
          // promotion: obj.promotion,
          seance: obj.seance,
          date: $("#datetime").val(),
          // hd: obj.hd,
          // module: obj.module,
          // groupe: obj.groupe,
          // sale: obj.sale,
          type: 'retraite'
        },
        success: function success(html) {
          $(".loader2").hide();
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
          $(".grid").html(html);
          $("#traite_epreuve").hide();
          $("#retraiter_seance").hide();
          $("#deverouiller-modal").hide();
          $("#verouiller-modal").hide();
          $("#assiduite_print").hide();
          $("#retraiter_seance").show();
          $("#verouiller-modal").show();
          $("#assiduite_print").show();
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
  }); ////////////////////////////////:: feuile pdf  ////////////////////////////////////:

  $("body #assiduite_print").on("click", function () {
    list.forEach(function (obj) {
      window.open('/assiduite/assiduites/pdf/' + obj.seance, '_blank');
    });
  }); ////////////////////////////////::  ////////////////////////////////////:
  ////////////////////////////////:: remove seance   ////////////////////////////////////:

  $("body #remove").on("click", function () {
    $(".loader2").show();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/remove_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          $(".loader2").hide();
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
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
  }); ////////////////////////////////:: existe   ////////////////////////////////////:

  $("body #existe").on("click", function () {
    $(".loader2").show();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/exist_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          $(".loader2").hide();
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
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
  }); ////////////////////////////////:: sign   ////////////////////////////////////:

  $("body #sign").on("click", function () {
    $(".loader2").show();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/sign_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          $(".loader2").hide();
          Toast.fire({
            icon: 'success',
            title: 'seance signé'
          });
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
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
  }); ////////////////////////////////:: cancel   ////////////////////////////////////:

  $("body #cancel").on("click", function () {
    $(".loader2").show();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/cancel_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
          $(".loader2").hide();
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
  }); ////////////////////////////////::  ////////////////////////////////////:
  ////////////////////////////////:: deverou  ////////////////////////////////////:

  $("body #deverouiller-modal").on("click", function () {
    $(".loader2").show();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/dever_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
          $(".loader2").hide();
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
  }); ////////////////////////////////:: modifier_salle  ////////////////////////////////////:

  $("body #modisalle").on("click", function () {
    $(".loader2").show();
    var salle = $("#salle").val();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/modifier_salle/" + obj.seance + "/" + salle,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          $(".loader2").hide();
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
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
  }); ////////////////////////////////:: modifier_salle  ////////////////////////////////////:

  $("body #verouiller-modal").on("click", function () {
    $(".loader2").show();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/lock_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
          $(".loader2").hide();
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
  }); // $("button").on("click", function () {
  // $('.loader2').fadeIn();
  // });
  // $(".close").on("click", function () {
  // $('.loader2').fadeOut();
  // });

  $("button").on("click", function () {
    $('.loader2').show();
  });
  $(".close").on("click", function () {
    $('.loader2').hide();
  }); /////////////////////////////// parlot_hd-f ////////////////////////////////////

  $("body #parlot_search").on("click", function () {
    $(".loader2").show();
    var hd = $("#hd").val();
    var hf = $("#hf").val();
    var date = $("#datetime").val();
    var type = "stage";
    $.ajax({
      type: "POST",
      url: "/api/parlot",
      data: {
        hd: hd,
        hf: hf,
        date: date,
        type: type
      },
      success: function success(html) {
        $(".loader2").hide();

        if ($.fn.DataTable.isDataTable("#parlot_datatable")) {
          $("#parlot_datatable").DataTable().clear().destroy();
        }

        $("#parlot_datatable").html(html).DataTable({
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
  }); //////////////////////////////// parlot_traitement ////////////////////////////////////

  $("body #parlot_traiter").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var hd, hf, date, result, val, _i, _val, value, _i2, _val2, _value;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $(".loader2").show();
            hd = $("#hd").val();
            hf = $("#hf").val();
            date = $("#datetime").val();
            val = [];
            $(':checkbox:checked').each(function (i) {
              val[i] = $(this).val();
            });
            _i = 0, _val = val;

          case 7:
            if (!(_i < _val.length)) {
              _context.next = 21;
              break;
            }

            value = _val[_i];
            _context.prev = 9;
            _context.next = 12;
            return $.ajax({
              type: "POST",
              url: "/api/traitement_assiduite",
              data: {
                seance: value,
                date: $("#datetime").val(),
                type: 'traite'
              } //         success: function (html) {
              // alert(html);
              //     // window.open('/assiduite/assiduites/pdf/'+html, '_blank');
              //   },

            });

          case 12:
            result = _context.sent;
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](9);
            console.error(_context.t0);

          case 18:
            _i++;
            _context.next = 7;
            break;

          case 21:
            $.ajax({
              type: "POST",
              url: "/api/parlot",
              data: {
                hd: hd,
                hf: hf,
                date: date
              },
              success: function success(html) {
                $(".loader2").hide();

                if ($.fn.DataTable.isDataTable("#parlot_datatable")) {
                  $("#parlot_datatable").DataTable().clear().destroy();
                }

                $("#parlot_datatable").html(html).DataTable({
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

            for (_i2 = 0, _val2 = val; _i2 < _val2.length; _i2++) {
              _value = _val2[_i2];
              window.open('/assiduite/assiduites/pdf/' + _value, '_blank');
            } ////////////////////////////////////////////////////////////////////:


          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9, 15]]);
  }))); /////////////////////////////// parlot ////////////////////////////////////

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

  $("body #check").on("click", function () {
    // alert('ok');
    selects(); // $("#parlot_modal").show();

    $(".loader2").hide();
  });
  $("body #uncheck").on("click", function () {
    // alert('ok');
    deSelect(); // $("#parlot_modal").show();

    $(".loader2").hide();
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-832146"], () => (__webpack_exec__("./assets/components/assiduite/stage.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDOEUsaUJBQVQsQ0FBMkIsS0FBM0IsQ0FBUjs7QUFDQSxTQUFJLElBQUlOLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0ssR0FBRyxDQUFDRSxNQUFuQixFQUEyQlAsQ0FBQyxFQUE1QixFQUErQjtBQUMzQixVQUFHSyxHQUFHLENBQUNMLENBQUQsQ0FBSCxDQUFPL0QsSUFBUCxJQUFhLFVBQWhCLEVBQ0lvRSxHQUFHLENBQUNMLENBQUQsQ0FBSCxDQUFPUSxPQUFQLEdBQWUsS0FBZjtBQUVQO0FBQ0Y7O0FBQ0RqRixFQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCd0MsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBWTtBQUN6QztBQUNBcUMsSUFBQUEsT0FBTyxHQUZrQyxDQUU3Qjs7QUFDWjdFLElBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY2MsSUFBZDtBQUNDLEdBSkQ7QUFLQWQsRUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQndDLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDM0M7QUFDQTBDLElBQUFBLFFBQVEsR0FGbUMsQ0FFOUI7O0FBQ2JsRixJQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNjLElBQWQ7QUFDQyxHQUpEO0FBS0MsQ0E3MEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXNzaWR1aXRlL3N0YWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gIHRvYXN0OiB0cnVlLFxuICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgdGltZXI6IDMwMDAsXG4gIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXG4gIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcbiAgfSxcbn0pO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvLyAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICB2YXIgdGFibGVEYXRhID0gW107XG5cbiAgXG5mdW5jdGlvbiBzZWFuY2VhZmZpY2hhZ2UodmFyMSwgdmFyMiwgdmFyMykge1xuICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvU2VhbmNlX2FmZi9cIiArIHZhcjEgKyBcIi9cIiArIHZhcjIgKyBcIi9cIiArIHZhcjMsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKSkge1xuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpXG4gICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgICBbMTAsIDIwLCAzMCwgNDAsIDUwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxuICAgICAgICAgICAgfSk7XG4gICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gdmFyMTtcbiAgfVxuXG4vLy8vLy8vLy8vLzpkYXRhdGFibGUvLy8vLy8vLy8vLy8vLy86XG5cbmZ1bmN0aW9uIGhpZ2hsaWdodCgpIHt9XG4kKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5EYXRhVGFibGUoe1xuIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxuIGxlbmd0aE1lbnU6IFtcbiAgIFsxMywgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gXSxcbn0pO1xuLy8vLy8vZHJvcGRvd24gc2VsZWN0IGZpcnN0IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgIFxuICAkKFwiI2V0YWJsaXNzZW1lbnRcIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XG4gICQoXCIjZm9ybWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xuICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcblxuLy8vLy8vQWZmaWNoIFNlYW5jZSBmaXJzdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICBcblxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgdmFyIGRheSA9IChcIjBcIiArIG5vdy5nZXREYXRlKCkpLnNsaWNlKC0yKTtcbiAgdmFyIG1vbnRoID0gKFwiMFwiICsgKG5vdy5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcbiAgdmFyIHRvZGF5ID0gbm93LmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XG5cbiAgJChcIiNkYXRldGltZVwiKS52YWwodG9kYXkpO1xuICB2YXIgcHJvbW90aW9uID0gJChcIiNwcm9tb3Rpb25cIikudmFsKCk7XG4gIGxldCBsaXN0ID0gW107XG4gIHNlYW5jZWFmZmljaGFnZShwcm9tb3Rpb24sIHRvZGF5LCdzdGFnZScpO1xuXG5cblxuIFxuICAkKFwiI3BhcmxvdFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgIFxuICAgIH0pO1xuLy8vLy8vLy8vLy8vLy8vZXRhYmxpc3NlbWVudC8vLy8vLy8vLy9cblxuJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGV0YWJsaXNzZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgIHVybDogXCIvYXBpL0Zvcm1hdGlvbl9hZmYvXCIgKyBldGFibGlzc2VtZW50LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgJChcIiNmb3JtYXRpb25cIikuaHRtbChodG1sKTtcbiAgICAgICQoXCIjZm9ybWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xuXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcIi9hcGkvUHJvbW90aW9uX2FmZi9cIiArICQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgJChcIiNwcm9tb3Rpb25cIikuaHRtbChodG1sKTtcbiAgICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ3N0YWdlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICB9KTtcbiAgfSxcbiAgfSk7XG59KTtcbi8vLy8vLy8vLy8vLy8vL0ZvbWF0aW9uLy8vLy8vLy8vL1xuXG4kKFwiI2Zvcm1hdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBmb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyBmb3JtYXRpb24sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAkKFwiI3Byb21vdGlvblwiKS5odG1sKGh0bWwpO1xuICAgICAgJChcIiNwcm9tb3Rpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XG4gICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ3N0YWdlJyk7XG4gICAgfSxcbiAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICB9KTtcbiAgfSxcbiAgfSk7XG59KTtcbi8vLy8vLy8vLy8vLy8vL1Byb21vdGlvbi8vLy8vLy8vLy9cblxuJChcIiNwcm9tb3Rpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgc2VhbmNlYWZmaWNoYWdlKHByb21vdGlvbiwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnc3RhZ2UnKTtcbn0pO1xuLy8vLy8vLy8vLy8vLy8vRGF0ZS8vLy8vLy8vLy9cblxuJChcIiNkYXRldGltZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBkYXRlID0gJCh0aGlzKS52YWwoKTtcbiAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCBkYXRlLCdzdGFnZScpO1xufSk7XG5cblxuJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLmhhc0NsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcbiAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodHlcIik7XG4gICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUgdHJcIikucmVtb3ZlQ2xhc3MoXCJvZGRcIik7XG4gICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUgdHJcIikucmVtb3ZlQ2xhc3MoXCJldmVuXCIpO1xuXG4gIGlmICghc2VsZWN0ZWQpIHtcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcbiAgICB2YXIgY3VycmVudFJvdyA9ICQodGhpcykuY2xvc2VzdChcInRyXCIpO1xuICAgIHZhciBzdGF0dXQgPSBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxKVwiKS5odG1sKCk7XG4gICAgbGlzdCA9IFtdO1xuICAgIGxpc3QucHVzaCh7XG4gICAgICBwcm9tb3Rpb246IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDIpXCIpLmh0bWwoKSxcbiAgICAgIHNlYW5jZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMylcIikuaHRtbCgpLFxuICAgICAgZ3JvdXBlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxMClcIikuaHRtbCgpLFxuICAgICAgaGQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDgpXCIpLmh0bWwoKSxcbiAgICAgIG1vZHVsZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTQpXCIpLmh0bWwoKSxcbiAgICAgIHNhbGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDE1KVwiKS5odG1sKCksXG4gICAgICBleGlzdGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDExKVwiKS5odG1sKCksXG4gICAgICBzdGF0dXQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEpXCIpLmh0bWwoKSxcbiAgICB9KTtcbiAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmhpZGUoKTtcbiAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xuICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcbiAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xuICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcbiAgICBpZiAoc3RhdHV0ID09ICcxJykge1xuICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7XG4gICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuc2hvdygpO1xuICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcbiAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1dCA9PSAnMicpIHtcbiAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcbiAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5zaG93KCk7XG4gICAgfVxuICB9XG4gIGlmKHN0YXR1dCA9PSAnMScgfHwgc3RhdHV0ID09ICcyJyl7XG4gIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG5cbiAgJC5hamF4KHtcbiAgICB0eXBlOiBcIlBPU1RcIixcbiAgICB1cmw6IFwiL2FwaS9jb3VudF9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcbiAgICBkYXRhOiB7XG4gICAgIFxuICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxuICAgICAgXG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICQoXCIuZ3JpZFwiKS5odG1sKGh0bWwpO1xuXG4gICAgfSxlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICB9KTtcbiAgfSxcbiAgICBcbn0pO1xufSk7XG59XG4vLyBjb25zb2xlLmxvZyhsaXN0KTtcblxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBwb3AgdXAgZXR1ZGlhbnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxuLy8gJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5vbihcImRibGNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAvLyAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xuLy8gICAkKFwiI2V0dWRpYW50LW1vZGFsXCIpLm1vZGFsKFwidG9nZ2xlXCIpO1xuLy8gICAkKFwiI2V0dWRpYW50LW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcbi8vICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcbi8vICAgICAkLmFqYXgoe1xuLy8gICAgICAgdHlwZTogXCJQT1NUXCIsXG4vLyAgICAgICB1cmw6IFwiL2FwaS9FdHVkX2FmZlwiLFxuLy8gICAgICAgZGF0YToge1xuLy8gICAgICAgICBwcm9tb3Rpb246IG9iai5wcm9tb3Rpb24sXG4vLyAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcbi8vICAgICAgICAgZ3JvdXBlOiBvYmouZ3JvdXBlLFxuLy8gICAgICAgICBleGlzdGU6IG9iai5leGlzdGUsXG4vLyAgICAgICB9LFxuLy8gICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbi8vICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbi8vICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikpIHtcbi8vICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpXG4vLyAgICAgICAgICAgLmh0bWwoaHRtbClcbi8vICAgICAgICAgICAuRGF0YVRhYmxlKHtcbi8vICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxuLy8gICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xuLy8gICAgICAgICAgICAgICBbMjUsIDUwLCA3NSwgMTAwLCAxMjUsIDIwMDAwMDAwMDAwMDAwXSxcbi8vICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuLy8gICAgICAgICAgICAgXSxcbi8vICAgICAgICAgICB9KTtcbi8vICAgICAgIH0sZXJyb3I6ZnVuY3Rpb24oKXtcbi8vICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbi8vICAgICAgICAgIFRvYXN0LmZpcmUoe1xuLy8gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuLy8gICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgIH0sXG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfSk7XG4kKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLm9uKFwiZGJsY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XG4gICQoXCIjZXR1ZGlhbnQtbW9kYWxcIikubW9kYWwoXCJ0b2dnbGVcIik7XG4gICQoXCIjZXR1ZGlhbnQtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xuICAvLyBjb25zb2xlLmxvZyhvYmopO1xuICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xuICAkKFwiI1NlYW5jZV9ldHVkXCIpLnZhbChvYmouc2VhbmNlKTtcbiAgJChcIiNzYWxsZV9ldHVkXCIpLnZhbChvYmoubmF0dXJlICsgJyAvICcgKyBvYmouc2FsbGUpO1xuICAkKFwiI2VsZW1lbnRfZXR1ZFwiKS52YWwob2JqLmVsZW1lbnQpO1xuICAkKFwiI0Vuc2VpZ25hbnRfZXR1ZFwiKS52YWwob2JqLmVuc2VpZ25hbnQpO1xuICAkKFwiI0hkX2V0dWRcIikudmFsKG9iai5oZCk7XG4gICQoXCIjSGZfZXR1ZFwiKS52YWwob2JqLmhmKTtcbiAgJChcIiNncm91cF9ldHVkXCIpLnZhbChvYmouZ3JvdXBlKTtcbiAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL0V0dWRfYWZmXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcbiAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxuICAgICAgICBncm91cGU6IG9iai5ncm91cGUsXG4gICAgICAgIGV4aXN0ZTogb2JqLmV4aXN0ZSxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAvLyAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKSkge1xuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIilcbiAgICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAgIC5EYXRhVGFibGUoe1xuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXG4gICAgICAgICAgICAgIFsxMiwgMjQsIDM2LCA0OCwgNjAsIDIwMDAwMDAwMDAwMDAwXSxcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuXG4gICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgfSk7XG4gIH0pO1xufSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1BvaW50YWdlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiQoXCJib2R5ICNwb2ludGFnZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbmxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gIGlmIChvYmouc3RhdHV0ID09IDEpIHtcblxuJC5hamF4KHtcbiAgdHlwZTogXCJQT1NUXCIsXG4gIHVybDogXCIvYXBpL0V0dWRfcG9pbnRhZ2VcIixcbiAgZGF0YToge1xuICAgIHByb21vOiAkKCcjcHJvbW90aW9uJykudmFsKCksXG4gICAgZGF0ZTogJCgnI2RhdGV0aW1lJykudmFsKCksXG4gICAgaGQ6IG9iai5oZCxcbiAgfSxcbiAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGU0XCIpKSB7XG4gICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTRcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XG4gICAgfVxuICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKVxuICAgICAgLmh0bWwoaHRtbClcbiAgICAgIC5EYXRhVGFibGUoe1xuICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgIFsxNiwgMzIsIDQ4LCA2NCwgNzQsIDIwMDAwMDAwMDAwMDAwXSxcbiAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcbiAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gIH0sXG4gIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgfSk7XG59LFxuXG59KTtcbn1cbiAgfSk7XG4gIH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogdHJhaXRlbWVudCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XG4kKFwiYm9keSAjdHJhaXRlX2VwcmV1dmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgaWYgKG9iai5ncm91cGUgPT09IFwiXCIpIHtcbiAgICAgIG9iai5ncm91cGUgPSBcImVtcHR5XCI7XG4gICAgfVxuICAgIGlmICggb2JqLnN0YXR1dCAhPSAnMScpe1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC8vIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcbiAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxuICAgICAgICBkYXRlOiAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLFxuICAgICAgICAvLyBoZDogb2JqLmhkLFxuICAgICAgICAvLyBtb2R1bGU6IG9iai5tb2R1bGUsXG4gICAgICAgIC8vIGdyb3VwZTogb2JqLmdyb3VwZSxcbiAgICAgICAgLy8gc2FsZTogb2JqLnNhbGUsXG4gICAgICAgIHR5cGUgOiAndHJhaXRlJyxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XG4gICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICB0aXRsZTogJ3NlYW5jZSB0cmFpdMOpIGF2ZWMgc3VjY2VzJyxcbiAgICAgICAgfSlcbiAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XG4gICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcbiAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIH0pO1xuICB9XG4gIGVsc2V7XG4gICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICBUb2FzdC5maXJlKHtcbiAgICAgIGljb246ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ3NlYW5jZSBkZWphIHRyYWl0w6knLFxuICB9KVxuICB9XG5cbiAgfSk7XG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiByZXRyYWl0ZXIgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcblxuJChcImJvZHkgI3JldHJhaXRlcl9zZWFuY2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gIC8vICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgaWYgKG9iai5ncm91cGUgPT09IFwiXCIpIHtcbiAgICAgIG9iai5ncm91cGUgPSBcImVtcHR5XCI7XG4gICAgfVxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC8vIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcbiAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxuICAgICAgICBkYXRlOiAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLFxuICAgICAgICAvLyBoZDogb2JqLmhkLFxuICAgICAgICAvLyBtb2R1bGU6IG9iai5tb2R1bGUsXG4gICAgICAgIC8vIGdyb3VwZTogb2JqLmdyb3VwZSxcbiAgICAgICAgLy8gc2FsZTogb2JqLnNhbGUsXG4gICAgICAgIHR5cGUgOiAncmV0cmFpdGUnLFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcbiAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XG4gICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcbiAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGZldWlsZSBwZGYgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcbiQoXCJib2R5ICNhc3NpZHVpdGVfcHJpbnRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG5cbiAgd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGYvJytvYmouc2VhbmNlLCAnX2JsYW5rJyk7XG5cbn0pO1xufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogcmVtb3ZlIHNlYW5jZSAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcbiQoXCJib2R5ICNyZW1vdmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IFwiL2FwaS9yZW1vdmVfc2VhbmNlL1wiK29iai5zZWFuY2UsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcbiAgICAgICBcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgfSk7XG5cbn0pO1xuIFxufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZXhpc3RlICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxuJChcImJvZHkgI2V4aXN0ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL2V4aXN0X3NlYW5jZS9cIitvYmouc2VhbmNlLFxuICAgICAgZGF0YToge1xuICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXG4gICAgICAgXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xuICAgICAgXG4gICAgICB9LFxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgfSk7XG5cbn0pO1xuIFxufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogc2lnbiAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcbiQoXCJib2R5ICNzaWduXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xuICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvc2lnbl9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxuICAgICAgIFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICB0aXRsZTogJ3NlYW5jZSBzaWduw6knLFxuICAgICAgfSlcbiAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xuICAgICAgXG4gICAgICB9LFxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgfSk7XG5cbn0pO1xuXG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBjYW5jZWwgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XG4kKFwiYm9keSAjY2FuY2VsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xuICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvY2FuY2VsX3NlYW5jZS9cIitvYmouc2VhbmNlLFxuICAgICAgZGF0YToge1xuICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXG4gICAgICAgXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgXG4gICAgICB9LFxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgfSk7XG5cbn0pO1xuIFxufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZGV2ZXJvdSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxuJChcImJvZHkgI2RldmVyb3VpbGxlci1tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL2RldmVyX3NlYW5jZS9cIitvYmouc2VhbmNlLFxuICAgICAgZGF0YToge1xuICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXG4gICAgICAgXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgXG4gICAgICB9LFxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgfSk7XG5cbn0pO1xuIFxufSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IG1vZGlmaWVyX3NhbGxlICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XG4kKFwiYm9keSAjbW9kaXNhbGxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xuICB2YXIgc2FsbGUgPSAkKFwiI3NhbGxlXCIpLnZhbCgpO1xuICBcbiAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL21vZGlmaWVyX3NhbGxlL1wiK29iai5zZWFuY2UrXCIvXCIrc2FsbGUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcbiAgICAgICBcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgfSk7XG5cbn0pO1xuIFxufSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IG1vZGlmaWVyX3NhbGxlICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XG4kKFwiYm9keSAjdmVyb3VpbGxlci1tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL2xvY2tfc2VhbmNlL1wiK29iai5zZWFuY2UsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcbiAgICAgICBcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgfSk7XG5cbn0pO1xuIFxufSk7XG4gXG4vLyAkKFwiYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gJCgnLmxvYWRlcjInKS5mYWRlSW4oKTtcbi8vIH0pO1xuXG4vLyAkKFwiLmNsb3NlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gJCgnLmxvYWRlcjInKS5mYWRlT3V0KCk7XG4vLyB9KTtcbiQoXCJidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQoJy5sb2FkZXIyJykuc2hvdygpO1xuICB9KTtcbiAgXG4gICQoXCIuY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQoJy5sb2FkZXIyJykuaGlkZSgpO1xuICB9KTtcbiAgXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFybG90X2hkLWYgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiQoXCJib2R5ICNwYXJsb3Rfc2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xudmFyIGhkID0gJChcIiNoZFwiKS52YWwoKTtcbnZhciBoZiA9ICQoXCIjaGZcIikudmFsKCk7XG52YXIgZGF0ZSA9ICQoXCIjZGF0ZXRpbWVcIikudmFsKCk7XG52YXIgdHlwZSA9IFwic3RhZ2VcIjtcbiQuYWpheCh7XG4gIHR5cGU6IFwiUE9TVFwiLFxuICB1cmw6IFwiL2FwaS9wYXJsb3RcIixcbiAgZGF0YToge1xuICAgIGhkOiBoZCxcbiAgICBoZjogaGYsXG4gICAgZGF0ZTogZGF0ZSxcbiAgICB0eXBlOiB0eXBlLFxuICAgXG4gIH0sXG4gIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjcGFybG90X2RhdGF0YWJsZVwiKSkge1xuICAgICAgICAkKFwiI3BhcmxvdF9kYXRhdGFibGVcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XG4gICAgfVxuICAgICQoXCIjcGFybG90X2RhdGF0YWJsZVwiKVxuICAgICAgLmh0bWwoaHRtbClcbiAgICAgIC5EYXRhVGFibGUoe1xuICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICBdLFxuICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcbiAgICAgIH0pO1xuICB9LFxuICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgIFRvYXN0LmZpcmUoe1xuICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgIH0pO1xufSxcbn0pO1xuXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJsb3RfdHJhaXRlbWVudCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuJChcImJvZHkgI3BhcmxvdF90cmFpdGVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xudmFyIGhkID0gJChcIiNoZFwiKS52YWwoKTtcbnZhciBoZiA9ICQoXCIjaGZcIikudmFsKCk7XG52YXIgZGF0ZSA9ICQoXCIjZGF0ZXRpbWVcIikudmFsKCk7XG5sZXQgcmVzdWx0O1xuICAgIHZhciB2YWwgPSBbXTtcbiAgICAkKCc6Y2hlY2tib3g6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oaSl7XG4gICAgICB2YWxbaV0gPSAkKHRoaXMpLnZhbCgpO1xuICAgIH0pO1xuICAgIGZvcihsZXQgdmFsdWUgb2YgdmFsKXtcbiAgdHJ5IHtcbiAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvaW1wb3J0Jywge1xuICAgIC8vICAgc2VhbmNlOiB2YWx1ZSxcbiAgICAvLyAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXG4gICAgLy8gICB0eXBlIDogJ3RyYWl0ZScsXG4gICAgLy8gfSk7XG5cbiAgICByZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IFwiL2FwaS90cmFpdGVtZW50X2Fzc2lkdWl0ZVwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBzZWFuY2U6IHZhbHVlLFxuICAgICAgICBkYXRlOiAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLFxuICAgICAgICB0eXBlIDogJ3RyYWl0ZScsXG4gICAgICB9LFxuLy8gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuLy8gYWxlcnQoaHRtbCk7XG4vLyAgICAgLy8gd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGYvJytodG1sLCAnX2JsYW5rJyk7XG4vLyAgIH0sXG5cbiAgICB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG59XG4gICAgfVxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL3BhcmxvdFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBoZDogaGQsXG4gICAgICAgIGhmOiBoZixcbiAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICBcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjcGFybG90X2RhdGF0YWJsZVwiKSkge1xuICAgICAgICAgICAgJChcIiNwYXJsb3RfZGF0YXRhYmxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgICQoXCIjcGFybG90X2RhdGF0YWJsZVwiKVxuICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIH0pO1xuICAgIGZvcihsZXQgdmFsdWUgb2YgdmFsKXtcbiAgICAgIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmLycrdmFsdWUsICdfYmxhbmsnKTtcbiAgICB9XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcbn0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBhcmxvdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmZ1bmN0aW9uIHNlbGVjdHMoKXsgIFxuICB2YXIgZWxlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjaGsnKTsgIFxuICBmb3IodmFyIGk9MDsgaTxlbGUubGVuZ3RoOyBpKyspeyAgXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxuICAgICAgICAgIGVsZVtpXS5jaGVja2VkPXRydWU7ICBcbiAgfSAgXG59ICBcbmZ1bmN0aW9uIGRlU2VsZWN0KCl7ICBcbiAgdmFyIGVsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnY2hrJyk7ICBcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxuICAgICAgaWYoZWxlW2ldLnR5cGU9PSdjaGVja2JveCcpICBcbiAgICAgICAgICBlbGVbaV0uY2hlY2tlZD1mYWxzZTsgIFxuICAgICAgICBcbiAgfSAgXG59ICAgICAgICAgIFxuJChcImJvZHkgI2NoZWNrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gYWxlcnQoJ29rJyk7XG5zZWxlY3RzKCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XG4kKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xufSk7XG4kKFwiYm9keSAjdW5jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vIGFsZXJ0KCdvaycpO1xuZGVTZWxlY3QoKTsgIC8vICQoXCIjcGFybG90X21vZGFsXCIpLnNob3coKTtcbiQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG59KTtcbn0pO1xuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGVEYXRhIiwic2VhbmNlYWZmaWNoYWdlIiwidmFyMSIsInZhcjIiLCJ2YXIzIiwic2hvdyIsImFqYXgiLCJ0eXBlIiwidXJsIiwic3VjY2VzcyIsImh0bWwiLCJoaWRlIiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImJMZW5ndGhDaGFuZ2UiLCJsZW5ndGhNZW51IiwiZXJyb3IiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiaGlnaGxpZ2h0IiwicHJvcCIsIm5vdyIsIkRhdGUiLCJkYXkiLCJnZXREYXRlIiwic2xpY2UiLCJtb250aCIsImdldE1vbnRoIiwidG9kYXkiLCJnZXRGdWxsWWVhciIsInZhbCIsInByb21vdGlvbiIsImxpc3QiLCJvbiIsImV0YWJsaXNzZW1lbnQiLCJmb3JtYXRpb24iLCJkYXRlIiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjdXJyZW50Um93IiwiY2xvc2VzdCIsInN0YXR1dCIsImZpbmQiLCJwdXNoIiwic2VhbmNlIiwiZ3JvdXBlIiwiaGQiLCJtb2R1bGUiLCJzYWxlIiwiZXhpc3RlIiwiY3NzIiwiZm9yRWFjaCIsIm9iaiIsImRhdGEiLCJtb2RhbCIsIm5hdHVyZSIsInNhbGxlIiwiZWxlbWVudCIsImVuc2VpZ25hbnQiLCJoZiIsInByb21vIiwid2luZG93Iiwib3BlbiIsImVhY2giLCJpIiwidmFsdWUiLCJyZXN1bHQiLCJjb25zb2xlIiwic2VsZWN0cyIsImVsZSIsImdldEVsZW1lbnRzQnlOYW1lIiwibGVuZ3RoIiwiY2hlY2tlZCIsImRlU2VsZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==