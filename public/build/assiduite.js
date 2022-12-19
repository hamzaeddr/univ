(self["webpackChunk"] = self["webpackChunk"] || []).push([["assiduite"],{

/***/ "./assets/components/assiduite/assiduite.js":
/*!**************************************************!*\
  !*** ./assets/components/assiduite/assiduite.js ***!
  \**************************************************/
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
  $(".loader").hide(); // $("#etudiant_det_modal").hide();
  /////////////////////////////////// datatable //////////////////////////

  var tableData = [];

  function seanceaffichage(var1, var2, var3) {
    $(".loader").show();
    $.ajax({
      type: "POST",
      url: "/api/Seance_aff/" + var1 + "/" + var2 + "/" + var3,
      success: function success(html) {
        $(".loader").hide();

        if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample")) {
          $("#dtDynamicVerticalScrollExample").DataTable().clear().destroy();
        }

        $("#dtDynamicVerticalScrollExample").html(html).DataTable({
          bLengthChange: false,
          lengthMenu: [[11, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
          "font-size": "3rem"
        });
      }
    });
    return var1;
  } /////////////////dropdown-etdiants////////////////////////////


  function etudiant_situation_affichage(var1) {
    $(".loader").show();
    $.ajax({
      type: "POST",
      url: "/api/etud_aff_situation/" + var1,
      success: function success(html) {
        $(".loader").hide();
        $("#Et_situation").html(html);
      }
    });
    return var1;
  } ////////////////////////////////////////////////////////////////


  function highlight() {}

  $("#dtDynamicVerticalScrollExample").DataTable({
    bLengthChange: false,
    lengthMenu: [[13, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
  });
  $("#dtDynamicVerticalScrollExample_pointeuse").DataTable({
    bLengthChange: false,
    lengthMenu: [[13, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
  });
  $("#dtDynamicVerticalScrollExample_pointeuse2").DataTable({
    bLengthChange: false,
    lengthMenu: [[13, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
  });
  $("#dtDynamicVerticalScrollExample_situation").DataTable({
    bLengthChange: false,
    lengthMenu: [[13, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]]
  });
  $("#dtDynamicVerticalScrollExample2").DataTable({
    bLengthChange: false
  });
  $(".dataTables_length").addClass("bs-select"); ////////////////  //////////////////////////
  //////////////////////////////// dropdown //////////////////////////

  $("#etablissement").prop("selectedIndex", 1);
  $("#formation").prop("selectedIndex", 1);
  $("#promotion").prop("selectedIndex", 1); // -------------------------------------------------
  /////////////////////////////////dropdown-situation////////////////////////////

  $("#E_situation").prop("selectedIndex", 1);
  $("#F_situation").prop("selectedIndex", 1);
  $("#P_situation").prop("selectedIndex", 1); /////////////////////////////////////////////etablissement//////////

  $("#etablissement").on("change", function () {
    var etablissement = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Formation_aff/" + etablissement,
      success: function success(html) {
        $("#formation").html(html);
        $("#formation").prop("selectedIndex", 1);
        $.ajax({
          type: "POST",
          url: "/api/Promotion_aff/" + $("#formation").val(),
          success: function success(html) {
            $("#promotion").html(html);
            $("#promotion").prop("selectedIndex", 1);
            seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
          }
        });
      }
    });
  }); ///////////////////////////////////////////////Fomation//////////

  $("#formation").on("change", function () {
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function success(html) {
        $("#promotion").html(html);
        $("#promotion").prop("selectedIndex", 1);
        seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
      }
    });
  }); ////////////////////////////////////////////////Promotion//////////

  $("#promotion").on("change", function () {
    var promotion = $(this).val();
    seanceaffichage(promotion, $("#datetime").val(), 'CR');
  }); ////////////////////////////////////////////////Date//////////

  $("#datetime").on("change", function () {
    var date = $(this).val();
    seanceaffichage($("#promotion").val(), date, 'CR');
  }); ///////////////////////////////////////////// date //////////////////////////

  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var today = now.getFullYear() + "-" + month + "-" + day;
  $("#datetime").val(today);
  var promotion = $("#promotion").val();
  var list = [];
  seanceaffichage(promotion, today, 'CR');
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
            $(".grid").html(html);
          }
        });
      });
    }

    console.log(list);
  }); ////////////////////////////////:: pop up etudiant ////////////////////////////////////:

  $("body #dtDynamicVerticalScrollExample").on("dblclick", "tr", function () {
    $("#etudiant-modal").modal("toggle");
    $("#etudiant-modal").modal("show");
    list.forEach(function (obj) {
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
          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample2")) {
            $("#dtDynamicVerticalScrollExample2").DataTable().clear().destroy();
          }

          $("#dtDynamicVerticalScrollExample2").html(html).DataTable({
            bLengthChange: false,
            lengthMenu: [[25, 50, 75, 100, 125, 20000000000000], [10, 15, 25, 50, 100, "All"]]
          });
        }
      });
    });
  }); ////////////////////////////////:: traitement ////////////////////////////////////:

  $("body #traite_epreuve").on("click", function () {
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
          }
        });
      } else {
        Toast.fire({
          icon: 'error',
          title: 'seance deja traité'
        });
      }
    });
  }); ////////////////////////////////:: retraiter  ////////////////////////////////////:

  $("body #retraiter_seance").on("click", function () {
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
        }
      });
    });
  }); ////////////////////////////////:: feuile pdf  ////////////////////////////////////:

  $("body #assiduite_print").on("click", function () {
    list.forEach(function (obj) {
      window.open('/assiduite/assiduites/pdf/' + obj.seance, '_blank');
    });
  }); //   ////////////////////////////////::  ////////////////////////////////////:
  //   ////////////////////////////////:: situation presentil pdf  ////////////////////////////////////:
  //   $("body #situation_presentiel").on("click", function () {
  //     // list.forEach((obj) => {
  //       var etudiant = $("#Et_situation").val();
  //       // var date_debut = $("#datetimeDsituation").val();
  //       // var date_fin = $("#datetimeFsituation").val();
  //     window.open('/assiduite/assiduites/pdf_presentiel/'+etudiant, '_blank');
  // // });
  // });
  ////////////////////////////////::  ////////////////////////////////////:
  ////////////////////////////////:: remove seance   ////////////////////////////////////:

  $("body #remove").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/remove_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////:: existe   ////////////////////////////////////:

  $("body #existe").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/exist_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////:: sign   ////////////////////////////////////:

  $("body #sign").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/sign_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          Toast.fire({
            icon: 'success',
            title: 'seance signé'
          });
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////:: cancel   ////////////////////////////////////:

  $("body #cancel").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/cancel_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////::  ////////////////////////////////////:
  ////////////////////////////////:: deverou  ////////////////////////////////////:

  $("body #deverouiller-modal").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/dever_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////:: modifier_salle  ////////////////////////////////////:

  $("body #modisalle").on("click", function () {
    var salle = $("#salle").val();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/modifier_salle/" + obj.seance + "/" + salle,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); ////////////////////////////////:: modifier_salle  ////////////////////////////////////:

  $("body #verouiller-modal").on("click", function () {
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/lock_seance/" + obj.seance,
        data: {
          seance: obj.seance
        },
        success: function success(html) {
          seanceaffichage($("#promotion").val(), $("#datetime").val(), 'CR');
        }
      });
    });
  }); //////////////////////////////// parlot ////////////////////////////////////

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
    alert('ok');
    selects(); // $("#parlot_modal").show();
  });
  $("body #uncheck").on("click", function () {
    alert('ok');
    deSelect(); // $("#parlot_modal").show();
  }); ////////////////////////////////::  ////////////////////////////////////:
  //////////////////////////////// parlot_hd-f ////////////////////////////////////

  $("body #parlot_search").on("click", function () {
    var hd = $("#hd").val();
    var hf = $("#hf").val();
    $.ajax({
      type: "POST",
      url: "/api/parlot",
      data: {
        hd: hd,
        hf: hf
      },
      success: function success(html) {
        if ($.fn.DataTable.isDataTable("#parlot_datatable")) {
          $("#parlot_datatable").DataTable().clear().destroy();
        }

        $("#parlot_datatable").html(html).DataTable({
          bLengthChange: false,
          lengthMenu: [[11, 25, 35, 50, 100, 20000000000000], [10, 15, 25, 50, 100, "All"]],
          "font-size": "3rem"
        });
      }
    });
  }); //////////////////////////////// parlot_traitement ////////////////////////////////////

  $("body #parlot_traiter").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result, val, _i, _val, value;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            val = [];
            $(':checkbox:checked').each(function (i) {
              val[i] = $(this).val();
            });
            _i = 0, _val = val;

          case 3:
            if (!(_i < _val.length)) {
              _context.next = 18;
              break;
            }

            value = _val[_i];
            _context.prev = 5;
            _context.next = 8;
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

          case 8:
            result = _context.sent;
            window.open('/assiduite/assiduites/pdf/' + result, '_blank');
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](5);
            console.error(_context.t0);

          case 15:
            _i++;
            _context.next = 3;
            break;

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 12]]);
  }))); // $("body #situation_search").on("click", function () {
  // etudiant = $("#Et_situation").val();
  // dated = $("#datetimeDsituation").val();
  // datef = $("#datetimeFsituation").val();
  // $.ajax({
  //   type: "POST",
  //   url: "/api/aff_situation",
  //   data: {
  //     etudiant : etudiant,
  //     dated : dated,
  //     datef : datef ,
  //   },
  //   success: function (html) {
  //     if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_situation")) {
  //       $("#dtDynamicVerticalScrollExample_situation").DataTable().clear().destroy();
  //     }
  //     $("#dtDynamicVerticalScrollExample_situation")
  //       .html(html)
  //       .DataTable({
  //         bLengthChange: false,
  //         lengthMenu: [
  //           [11, 25, 35, 50, 100, 20000000000000],
  //           [10, 15, 25, 50, 100, "All"],
  //         ],
  //         "font-size": "3rem",
  //       });
  //   }
  // });
  // });
  ///////////////etablissement//////////

  $("#E_situation").on("change", function () {
    var etablissement = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Formation_aff/" + etablissement,
      success: function success(html) {
        $("#F_situation").html(html);
        $("#F_situation").prop("selectedIndex", 1);
        $.ajax({
          type: "POST",
          url: "/api/Promotion_aff/" + $("#F_situation").val(),
          success: function success(html) {
            $("#P_situation").html(html);
            $("#P_situation").prop("selectedIndex", 1);
            etudiant_situation_affichage($("#P_situation").val());
          }
        });
      }
    });
  }); ///////////////Fomation//////////

  $("#F_situation").on("change", function () {
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function success(html) {
        $("#P_situation").html(html);
        $("#P_situation").prop("selectedIndex", 1);
        etudiant_situation_affichage($("#P_situation").val());
      }
    });
  }); ///////////////Promotion//////////

  $("#P_situation").on("change", function () {
    var promotion = $(this).val();
    etudiant_situation_affichage(promotion);
  }); //  //////////////////extraction////////////////:
  //  $('#create_extraction').click(function(){ 
  //   var to = $('#datetimeFsituation').val();
  //   var from = $('#datetimeDsituation').val();
  //   var service = $('#E_situation').val();
  //   var formation = $('#F_situation').val();
  //   var promotion = $('#P_situation').val();
  //   var tou =  $('input[name="tous"]:checked').val();
  //           // window.location.href = "{{ path('extraction') }}?To="+to+"&From="+from;
  //          url = "/api/generate_extraction?To="+to+"&From="+from+"&formation="+formation+"&promotion="+promotion+"&Service="+service+"&Tou="+tou+"&type=normal";;
  //          window.open(url);
  //             });        
  //////////////////extraction stage////////////////:

  $('#create_extraction_stage').click(function () {
    var to = $('#datetimeFsituation').val();
    var from = $('#datetimeDsituation').val();
    var service = $('#E_situation').val();
    var formation = $('#F_situation').val();
    var promotion = $('#P_situation').val();
    var tou = $('input[name="tous"]:checked').val(); // window.location.href = "{{ path('extraction') }}?To="+to+"&From="+from;

    url = "/api/generate_extraction?To=" + to + "&From=" + from + "&formation=" + formation + "&promotion=" + promotion + "&Service=" + service + "&Tou=" + tou + "&type=stage";
    service;
    window.open(url);
  }); // 

  $('#E_situation').select2();
  $('#F_situation').select2();
  $('#P_situation').select2();
  $('#Et_situation').select2();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-3e9a6d","vendors-node_modules_core-js_modules_es_promise_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-f373fb1"], () => (__webpack_exec__("./assets/components/assiduite/assiduite.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaWR1aXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVztBQUN2QkMsRUFBQUEsS0FBSyxFQUFFLElBRGdCO0FBRXZCQyxFQUFBQSxRQUFRLEVBQUUsU0FGYTtBQUd2QkMsRUFBQUEsaUJBQWlCLEVBQUUsS0FISTtBQUl2QkMsRUFBQUEsS0FBSyxFQUFFLElBSmdCO0FBS3ZCQyxFQUFBQSxnQkFBZ0IsRUFBRSxJQUxLO0FBTXZCQyxFQUFBQSxPQUFPLEVBQUUsaUJBQUNMLEtBQUQsRUFBVztBQUNsQkEsSUFBQUEsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixZQUF2QixFQUFxQ1IsSUFBSSxDQUFDUyxTQUExQztBQUNBUCxJQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDUixJQUFJLENBQUNVLFdBQTFDO0FBQ0Q7QUFUc0IsQ0FBWCxDQUFkO0FBV0FDLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUc1QkYsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhRyxJQUFiLEdBSDRCLENBSTVCO0FBQ0Y7O0FBRVEsTUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUVBLFdBQVNDLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCQyxJQUEvQixFQUFxQ0MsSUFBckMsRUFBMkM7QUFDM0NSLElBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVMsSUFBYjtBQUVFVCxJQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxNQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxNQUFBQSxHQUFHLEVBQUUscUJBQXFCTixJQUFyQixHQUE0QixHQUE1QixHQUFrQ0MsSUFBbEMsR0FBeUMsR0FBekMsR0FBK0NDLElBRi9DO0FBR0xLLE1BQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUM3QmQsUUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhRyxJQUFiOztBQUVNLFlBQUlILENBQUMsQ0FBQ2UsRUFBRixDQUFLQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkIsaUNBQTNCLENBQUosRUFBbUU7QUFDakVqQixVQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ2dCLFNBQXJDLEdBQWlERSxLQUFqRCxHQUF5REMsT0FBekQ7QUFDRDs7QUFDRG5CLFFBQUFBLENBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQ0djLElBREgsQ0FDUUEsSUFEUixFQUVHRSxTQUZILENBRWE7QUFDVEksVUFBQUEsYUFBYSxFQUFFLEtBRE47QUFFVEMsVUFBQUEsVUFBVSxFQUFFLENBQ1YsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLGNBQXRCLENBRFUsRUFFVixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsS0FBdEIsQ0FGVSxDQUZIO0FBTVQsdUJBQWE7QUFOSixTQUZiO0FBVUQ7QUFuQkksS0FBUDtBQXFCQSxXQUFPZixJQUFQO0FBQ0QsR0FsQ3FCLENBb0M5Qjs7O0FBRVEsV0FBU2dCLDRCQUFULENBQXNDaEIsSUFBdEMsRUFBNEM7QUFFMUNOLElBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVMsSUFBYjtBQUNFVCxJQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxNQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxNQUFBQSxHQUFHLEVBQUUsNkJBQTZCTixJQUY3QjtBQUdMTyxNQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDN0JkLFFBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUcsSUFBYjtBQUNBSCxRQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CYyxJQUFuQixDQUF3QkEsSUFBeEI7QUFFSztBQVBJLEtBQVA7QUFTQSxXQUFPUixJQUFQO0FBQ0QsR0FuRG1CLENBb0Q5Qjs7O0FBRVUsV0FBU2lCLFNBQVQsR0FBcUIsQ0FBRTs7QUFDdkJ2QixFQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ2dCLFNBQXJDLENBQStDO0FBQzdDSSxJQUFBQSxhQUFhLEVBQUUsS0FEOEI7QUFFN0NDLElBQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlU7QUFGaUMsR0FBL0M7QUFRQXJCLEVBQUFBLENBQUMsQ0FBQywyQ0FBRCxDQUFELENBQStDZ0IsU0FBL0MsQ0FBeUQ7QUFDdkRJLElBQUFBLGFBQWEsRUFBRSxLQUR3QztBQUV2REMsSUFBQUEsVUFBVSxFQUFFLENBQ1YsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLGNBQXRCLENBRFUsRUFFVixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsS0FBdEIsQ0FGVTtBQUYyQyxHQUF6RDtBQU9BckIsRUFBQUEsQ0FBQyxDQUFDLDRDQUFELENBQUQsQ0FBZ0RnQixTQUFoRCxDQUEwRDtBQUN4REksSUFBQUEsYUFBYSxFQUFFLEtBRHlDO0FBRXhEQyxJQUFBQSxVQUFVLEVBQUUsQ0FDVixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsY0FBdEIsQ0FEVSxFQUVWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixLQUF0QixDQUZVO0FBRjRDLEdBQTFEO0FBT0FyQixFQUFBQSxDQUFDLENBQUMsMkNBQUQsQ0FBRCxDQUErQ2dCLFNBQS9DLENBQXlEO0FBQ3ZESSxJQUFBQSxhQUFhLEVBQUUsS0FEd0M7QUFFdkRDLElBQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlU7QUFGMkMsR0FBekQ7QUFRQXJCLEVBQUFBLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDZ0IsU0FBdEMsQ0FBZ0Q7QUFDOUNJLElBQUFBLGFBQWEsRUFBRTtBQUQrQixHQUFoRDtBQUlBcEIsRUFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0J3QixRQUF4QixDQUFpQyxXQUFqQyxFQXpGb0IsQ0EwRjVCO0FBQ0Y7O0FBRUV4QixFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQnlCLElBQXBCLENBQXlCLGVBQXpCLEVBQTBDLENBQTFDO0FBQ0F6QixFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCeUIsSUFBaEIsQ0FBcUIsZUFBckIsRUFBc0MsQ0FBdEM7QUFDQXpCLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J5QixJQUFoQixDQUFxQixlQUFyQixFQUFzQyxDQUF0QyxFQS9GNEIsQ0FnRzVCO0FBQ0Y7O0FBQ0V6QixFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCeUIsSUFBbEIsQ0FBdUIsZUFBdkIsRUFBd0MsQ0FBeEM7QUFDQXpCLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J5QixJQUFsQixDQUF1QixlQUF2QixFQUF3QyxDQUF4QztBQUNBekIsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnlCLElBQWxCLENBQXVCLGVBQXZCLEVBQXdDLENBQXhDLEVBcEc0QixDQXNHOUI7O0FBRVl6QixFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjBCLEVBQXBCLENBQXVCLFFBQXZCLEVBQWlDLFlBQVk7QUFDM0MsUUFBSUMsYUFBYSxHQUFHM0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEIsR0FBUixFQUFwQjtBQUNBNUIsSUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsTUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsTUFBQUEsR0FBRyxFQUFFLHdCQUF3QmUsYUFGeEI7QUFHTGQsTUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCZCxRQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCYyxJQUFoQixDQUFxQkEsSUFBckI7QUFDQWQsUUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnlCLElBQWhCLENBQXFCLGVBQXJCLEVBQXNDLENBQXRDO0FBRUF6QixRQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxVQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxVQUFBQSxHQUFHLEVBQUUsd0JBQXdCWixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEIsR0FBaEIsRUFGeEI7QUFHTGYsVUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCZCxZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCYyxJQUFoQixDQUFxQkEsSUFBckI7QUFDQWQsWUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnlCLElBQWhCLENBQXFCLGVBQXJCLEVBQXNDLENBQXRDO0FBQ0FwQixZQUFBQSxlQUFlLENBQUNMLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0QixHQUFoQixFQUFELEVBQXdCNUIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixFQUF4QixFQUE2QyxJQUE3QyxDQUFmO0FBQ0Q7QUFQSSxTQUFQO0FBU0Q7QUFoQkksS0FBUDtBQWtCRCxHQXBCRCxFQXhHa0IsQ0E2SDlCOztBQUVFNUIsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjBCLEVBQWhCLENBQW1CLFFBQW5CLEVBQTZCLFlBQVk7QUFDdkMsUUFBSUcsU0FBUyxHQUFHN0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEIsR0FBUixFQUFoQjtBQUNBNUIsSUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsTUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsTUFBQUEsR0FBRyxFQUFFLHdCQUF3QmlCLFNBRnhCO0FBR0xoQixNQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJkLFFBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JjLElBQWhCLENBQXFCQSxJQUFyQjtBQUNBZCxRQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCeUIsSUFBaEIsQ0FBcUIsZUFBckIsRUFBc0MsQ0FBdEM7QUFDQXBCLFFBQUFBLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBQUQsRUFBd0I1QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBQXhCLEVBQTZDLElBQTdDLENBQWY7QUFDRDtBQVBJLEtBQVA7QUFTRCxHQVhELEVBL0g0QixDQTJJOUI7O0FBRVU1QixFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEIsRUFBaEIsQ0FBbUIsUUFBbkIsRUFBNkIsWUFBWTtBQUN2QyxRQUFJSSxTQUFTLEdBQUc5QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QixHQUFSLEVBQWhCO0FBQ0F2QixJQUFBQSxlQUFlLENBQUN5QixTQUFELEVBQVk5QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBQVosRUFBaUMsSUFBakMsQ0FBZjtBQUNELEdBSEQsRUE3SW9CLENBaUo5Qjs7QUFFRTVCLEVBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBCLEVBQWYsQ0FBa0IsUUFBbEIsRUFBNEIsWUFBWTtBQUN0QyxRQUFJSyxJQUFJLEdBQUcvQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QixHQUFSLEVBQVg7QUFDQXZCLElBQUFBLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBQUQsRUFBd0JHLElBQXhCLEVBQTZCLElBQTdCLENBQWY7QUFDRCxHQUhELEVBbko0QixDQXdKNUI7O0FBRUEsTUFBSUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxDQUFDLE1BQU1GLEdBQUcsQ0FBQ0csT0FBSixFQUFQLEVBQXNCQyxLQUF0QixDQUE0QixDQUFDLENBQTdCLENBQVY7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FBQyxPQUFPTCxHQUFHLENBQUNNLFFBQUosS0FBaUIsQ0FBeEIsQ0FBRCxFQUE2QkYsS0FBN0IsQ0FBbUMsQ0FBQyxDQUFwQyxDQUFaO0FBQ0EsTUFBSUcsS0FBSyxHQUFHUCxHQUFHLENBQUNRLFdBQUosS0FBb0IsR0FBcEIsR0FBMEJILEtBQTFCLEdBQWtDLEdBQWxDLEdBQXdDSCxHQUFwRDtBQUVBbEMsRUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixDQUFtQlcsS0FBbkI7QUFDQSxNQUFJVCxTQUFTLEdBQUc5QixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEIsR0FBaEIsRUFBaEI7QUFDQSxNQUFJYSxJQUFJLEdBQUcsRUFBWDtBQUNBcEMsRUFBQUEsZUFBZSxDQUFDeUIsU0FBRCxFQUFZUyxLQUFaLEVBQWtCLElBQWxCLENBQWY7QUFHQXZDLEVBQUFBLENBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDMEIsRUFBMUMsQ0FBNkMsT0FBN0MsRUFBc0QsSUFBdEQsRUFBNEQsWUFBWTtBQUN0RSxRQUFJZ0IsUUFBUSxHQUFHMUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkMsUUFBUixDQUFpQixZQUFqQixDQUFmO0FBQ0EzQyxJQUFBQSxDQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2QzRDLFdBQTdDLENBQXlELFlBQXpEO0FBQ0E1QyxJQUFBQSxDQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2QzRDLFdBQTdDLENBQXlELEtBQXpEO0FBQ0E1QyxJQUFBQSxDQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2QzRDLFdBQTdDLENBQXlELE1BQXpEOztBQUVBLFFBQUksQ0FBQ0YsUUFBTCxFQUFlO0FBQ2IxQyxNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF3QixRQUFSLENBQWlCLFlBQWpCO0FBQ0EsVUFBSXFCLFVBQVUsR0FBRzdDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUThDLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBakI7QUFDQSxVQUFJQyxNQUFNLEdBQUdGLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQixVQUFoQixFQUE0QmxDLElBQTVCLEVBQWI7QUFDQTJCLE1BQUFBLElBQUksR0FBRyxFQUFQO0FBQ0FBLE1BQUFBLElBQUksQ0FBQ1EsSUFBTCxDQUFVO0FBQ1JuQixRQUFBQSxTQUFTLEVBQUVlLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQixVQUFoQixFQUE0QmxDLElBQTVCLEVBREg7QUFFUm9DLFFBQUFBLE1BQU0sRUFBRUwsVUFBVSxDQUFDRyxJQUFYLENBQWdCLFVBQWhCLEVBQTRCbEMsSUFBNUIsRUFGQTtBQUdScUMsUUFBQUEsTUFBTSxFQUFFTixVQUFVLENBQUNHLElBQVgsQ0FBZ0IsV0FBaEIsRUFBNkJsQyxJQUE3QixFQUhBO0FBSVJzQyxRQUFBQSxFQUFFLEVBQUVQLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQixVQUFoQixFQUE0QmxDLElBQTVCLEVBSkk7QUFLUnVDLFFBQUFBLE1BQU0sRUFBRVIsVUFBVSxDQUFDRyxJQUFYLENBQWdCLFdBQWhCLEVBQTZCbEMsSUFBN0IsRUFMQTtBQU1Sd0MsUUFBQUEsSUFBSSxFQUFFVCxVQUFVLENBQUNHLElBQVgsQ0FBZ0IsV0FBaEIsRUFBNkJsQyxJQUE3QixFQU5FO0FBT1J5QyxRQUFBQSxNQUFNLEVBQUVWLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQixXQUFoQixFQUE2QmxDLElBQTdCLEVBUEE7QUFRUmlDLFFBQUFBLE1BQU0sRUFBRUYsVUFBVSxDQUFDRyxJQUFYLENBQWdCLFVBQWhCLEVBQTRCbEMsSUFBNUI7QUFSQSxPQUFWO0FBVUFkLE1BQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCRyxJQUFyQjtBQUNBSCxNQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkcsSUFBdkI7QUFDQUgsTUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJHLElBQXpCO0FBQ0FILE1BQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCRyxJQUF2QjtBQUNBSCxNQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsSUFBdEI7O0FBQ0EsVUFBSTRDLE1BQU0sSUFBSSxHQUFkLEVBQW1CO0FBQ2pCL0MsUUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJ3RCxHQUFyQixDQUF5QjtBQUFFLHFCQUFXO0FBQWIsU0FBekI7QUFDQXhELFFBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCUyxJQUF2QjtBQUNBVCxRQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QlMsSUFBdkI7QUFDQVQsUUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JTLElBQXRCO0FBQ0Q7O0FBQ0QsVUFBSXNDLE1BQU0sSUFBSSxHQUFkLEVBQW1CO0FBQ2pCL0MsUUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJTLElBQXpCO0FBQ0FULFFBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCUyxJQUF0QjtBQUNELE9BSEQsTUFHTztBQUNMVCxRQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlMsSUFBckI7QUFDRDtBQUNGOztBQUNELFFBQUdzQyxNQUFNLElBQUksR0FBVixJQUFpQkEsTUFBTSxJQUFJLEdBQTlCLEVBQWtDO0FBQ2xDTixNQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBRXRCMUQsUUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsVUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsVUFBQUEsR0FBRyxFQUFFLHVCQUFxQjhDLEdBQUcsQ0FBQ1IsTUFGekI7QUFHTFMsVUFBQUEsSUFBSSxFQUFFO0FBRUpULFlBQUFBLE1BQU0sRUFBRVEsR0FBRyxDQUFDUjtBQUZSLFdBSEQ7QUFRTHJDLFVBQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QmQsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXYyxJQUFYLENBQWdCQSxJQUFoQjtBQUVEO0FBWEksU0FBUDtBQWFELE9BZkM7QUFnQkg7O0FBQ0Q4QyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXBCLElBQVo7QUFFRyxHQTNERCxFQXJLNEIsQ0FrTzVCOztBQUNBekMsRUFBQUEsQ0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMEMwQixFQUExQyxDQUE2QyxVQUE3QyxFQUF5RCxJQUF6RCxFQUErRCxZQUFZO0FBQ3pFMUIsSUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI4RCxLQUFyQixDQUEyQixRQUEzQjtBQUNBOUQsSUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI4RCxLQUFyQixDQUEyQixNQUEzQjtBQUNBckIsSUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUNwQjFELE1BQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLFFBQUFBLEdBQUcsRUFBRSxlQUZBO0FBR0wrQyxRQUFBQSxJQUFJLEVBQUU7QUFDSjdCLFVBQUFBLFNBQVMsRUFBRTRCLEdBQUcsQ0FBQzVCLFNBRFg7QUFFSm9CLFVBQUFBLE1BQU0sRUFBRVEsR0FBRyxDQUFDUixNQUZSO0FBR0pDLFVBQUFBLE1BQU0sRUFBRU8sR0FBRyxDQUFDUCxNQUhSO0FBSUpJLFVBQUFBLE1BQU0sRUFBRUcsR0FBRyxDQUFDSDtBQUpSLFNBSEQ7QUFTTDFDLFFBQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QixjQUFJZCxDQUFDLENBQUNlLEVBQUYsQ0FBS0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLGtDQUEzQixDQUFKLEVBQW9FO0FBQ2xFakIsWUFBQUEsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NnQixTQUF0QyxHQUFrREUsS0FBbEQsR0FBMERDLE9BQTFEO0FBQ0Q7O0FBQ0RuQixVQUFBQSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUNHYyxJQURILENBQ1FBLElBRFIsRUFFR0UsU0FGSCxDQUVhO0FBQ1RJLFlBQUFBLGFBQWEsRUFBRSxLQUROO0FBRVRDLFlBQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixjQUF2QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlU7QUFGSCxXQUZiO0FBU0Q7QUF0QkksT0FBUDtBQXdCRCxLQXpCRDtBQTBCRCxHQTdCRCxFQW5PNEIsQ0FpUTlCOztBQUNFckIsRUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEIwQixFQUExQixDQUE2QixPQUE3QixFQUFzQyxZQUFZO0FBQ2hEZSxJQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BCLFVBQUlBLEdBQUcsQ0FBQ1AsTUFBSixLQUFlLEVBQW5CLEVBQXVCO0FBQ3JCTyxRQUFBQSxHQUFHLENBQUNQLE1BQUosR0FBYSxPQUFiO0FBQ0Q7O0FBQ0QsVUFBS08sR0FBRyxDQUFDWCxNQUFKLElBQWMsR0FBbkIsRUFBdUI7QUFDdkIvQyxRQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxVQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxVQUFBQSxHQUFHLEVBQUUsMkJBRkE7QUFHTCtDLFVBQUFBLElBQUksRUFBRTtBQUNKO0FBQ0FULFlBQUFBLE1BQU0sRUFBRVEsR0FBRyxDQUFDUixNQUZSO0FBR0puQixZQUFBQSxJQUFJLEVBQUUvQixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBSEY7QUFJSjtBQUNBO0FBQ0E7QUFDQTtBQUNBakIsWUFBQUEsSUFBSSxFQUFHO0FBUkgsV0FIRDtBQWFMRSxVQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJULFlBQUFBLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBQUQsRUFBd0I1QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBQXhCLEVBQTZDLElBQTdDLENBQWY7QUFDQXhDLFlBQUFBLEtBQUssQ0FBQzJFLElBQU4sQ0FBVztBQUNUQyxjQUFBQSxJQUFJLEVBQUUsU0FERztBQUVUQyxjQUFBQSxLQUFLLEVBQUU7QUFGRSxhQUFYO0FBSUFqRSxZQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdjLElBQVgsQ0FBZ0JBLElBQWhCO0FBQ0FkLFlBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCRyxJQUFyQjtBQUNBSCxZQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkcsSUFBdkI7QUFDQUgsWUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJHLElBQXpCO0FBQ0FILFlBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCRyxJQUF2QjtBQUNBSCxZQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsSUFBdEI7QUFDQUgsWUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJTLElBQXZCO0FBQ0FULFlBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCUyxJQUF2QjtBQUNBVCxZQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlMsSUFBdEI7QUFDRDtBQTVCSSxTQUFQO0FBOEJELE9BL0JDLE1BZ0NFO0FBQ0ZyQixRQUFBQSxLQUFLLENBQUMyRSxJQUFOLENBQVc7QUFDVEMsVUFBQUEsSUFBSSxFQUFFLE9BREc7QUFFVEMsVUFBQUEsS0FBSyxFQUFFO0FBRkUsU0FBWDtBQUlEO0FBRUEsS0EzQ0Q7QUE0Q0QsR0E3Q0QsRUFsUTRCLENBaVQ1Qjs7QUFFQWpFLEVBQUFBLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCMEIsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBWTtBQUNsRGUsSUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUNwQixVQUFJQSxHQUFHLENBQUNQLE1BQUosS0FBZSxFQUFuQixFQUF1QjtBQUNyQk8sUUFBQUEsR0FBRyxDQUFDUCxNQUFKLEdBQWEsT0FBYjtBQUNEOztBQUNEbkQsTUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsUUFBQUEsR0FBRyxFQUFFLDJCQUZBO0FBR0wrQyxRQUFBQSxJQUFJLEVBQUU7QUFDSjtBQUNBVCxVQUFBQSxNQUFNLEVBQUVRLEdBQUcsQ0FBQ1IsTUFGUjtBQUdKbkIsVUFBQUEsSUFBSSxFQUFFL0IsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixFQUhGO0FBSUo7QUFDQTtBQUNBO0FBQ0E7QUFDQWpCLFVBQUFBLElBQUksRUFBRztBQVJILFNBSEQ7QUFhTEUsUUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCVCxVQUFBQSxlQUFlLENBQUNMLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0QixHQUFoQixFQUFELEVBQXdCNUIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixFQUF4QixFQUE2QyxJQUE3QyxDQUFmO0FBQ0E1QixVQUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVdjLElBQVgsQ0FBZ0JBLElBQWhCO0FBQ0FkLFVBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCRyxJQUFyQjtBQUNBSCxVQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkcsSUFBdkI7QUFDQUgsVUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJHLElBQXpCO0FBQ0FILFVBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCRyxJQUF2QjtBQUNBSCxVQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsSUFBdEI7QUFDQUgsVUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJTLElBQXZCO0FBQ0FULFVBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCUyxJQUF2QjtBQUNBVCxVQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlMsSUFBdEI7QUFDRDtBQXhCSSxPQUFQO0FBMEJELEtBOUJEO0FBK0JELEdBaENELEVBblQ0QixDQXFWNUI7O0FBQ0FULEVBQUFBLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCMEIsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBWTtBQUNqRGUsSUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUV0QlEsTUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVksK0JBQTZCVCxHQUFHLENBQUNSLE1BQTdDLEVBQXFELFFBQXJEO0FBRUgsS0FKRztBQUtILEdBTkMsRUF0VjRCLENBOFY5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVFO0FBQ0E7O0FBQ0FsRCxFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCMEIsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN4Q2UsSUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUVwQjFELE1BQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLFFBQUFBLEdBQUcsRUFBRSx3QkFBc0I4QyxHQUFHLENBQUNSLE1BRjFCO0FBR0xTLFFBQUFBLElBQUksRUFBRTtBQUNKVCxVQUFBQSxNQUFNLEVBQUVRLEdBQUcsQ0FBQ1I7QUFEUixTQUhEO0FBT0xyQyxRQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJULFVBQUFBLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBQUQsRUFBd0I1QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBQXhCLEVBQTZDLElBQTdDLENBQWY7QUFFRDtBQVZJLE9BQVA7QUFhSCxLQWZDO0FBaUJILEdBbEJDLEVBN1c0QixDQWlZNUI7O0FBQ0E1QixFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCMEIsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN4Q2UsSUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUVwQjFELE1BQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLFFBQUFBLEdBQUcsRUFBRSx1QkFBcUI4QyxHQUFHLENBQUNSLE1BRnpCO0FBR0xTLFFBQUFBLElBQUksRUFBRTtBQUNKVCxVQUFBQSxNQUFNLEVBQUVRLEdBQUcsQ0FBQ1I7QUFEUixTQUhEO0FBT0xyQyxRQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJULFVBQUFBLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBQUQsRUFBd0I1QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBQXhCLEVBQTZDLElBQTdDLENBQWY7QUFFRDtBQVZJLE9BQVA7QUFhSCxLQWZDO0FBaUJILEdBbEJDLEVBbFk0QixDQXNaNUI7O0FBQ0E1QixFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEIsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUN0Q2UsSUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUVwQjFELE1BQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLFFBQUFBLEdBQUcsRUFBRSxzQkFBb0I4QyxHQUFHLENBQUNSLE1BRnhCO0FBR0xTLFFBQUFBLElBQUksRUFBRTtBQUNKVCxVQUFBQSxNQUFNLEVBQUVRLEdBQUcsQ0FBQ1I7QUFEUixTQUhEO0FBT0xyQyxRQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkIxQixVQUFBQSxLQUFLLENBQUMyRSxJQUFOLENBQVc7QUFDVEMsWUFBQUEsSUFBSSxFQUFFLFNBREc7QUFFVEMsWUFBQUEsS0FBSyxFQUFFO0FBRkUsV0FBWDtBQUlBNUQsVUFBQUEsZUFBZSxDQUFDTCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEIsR0FBaEIsRUFBRCxFQUF3QjVCLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTRCLEdBQWYsRUFBeEIsRUFBNkMsSUFBN0MsQ0FBZjtBQUVEO0FBZEksT0FBUDtBQWlCSCxLQW5CQztBQXFCSCxHQXRCQyxFQXZaNEIsQ0ErYTVCOztBQUNBNUIsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjBCLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7QUFDeENlLElBQUFBLElBQUksQ0FBQ2dCLE9BQUwsQ0FBYSxVQUFDQyxHQUFELEVBQVM7QUFFcEIxRCxNQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxRQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxRQUFBQSxHQUFHLEVBQUUsd0JBQXNCOEMsR0FBRyxDQUFDUixNQUYxQjtBQUdMUyxRQUFBQSxJQUFJLEVBQUU7QUFDSlQsVUFBQUEsTUFBTSxFQUFFUSxHQUFHLENBQUNSO0FBRFIsU0FIRDtBQU9MckMsUUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCVCxVQUFBQSxlQUFlLENBQUNMLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0QixHQUFoQixFQUFELEVBQXdCNUIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixFQUF4QixFQUE2QyxJQUE3QyxDQUFmO0FBRUQ7QUFWSSxPQUFQO0FBYUgsS0FmQztBQWlCSCxHQWxCQyxFQWhiNEIsQ0FvYzVCO0FBQ0E7O0FBQ0E1QixFQUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QjBCLEVBQTlCLENBQWlDLE9BQWpDLEVBQTBDLFlBQVk7QUFDcERlLElBQUFBLElBQUksQ0FBQ2dCLE9BQUwsQ0FBYSxVQUFDQyxHQUFELEVBQVM7QUFFcEIxRCxNQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxRQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxRQUFBQSxHQUFHLEVBQUUsdUJBQXFCOEMsR0FBRyxDQUFDUixNQUZ6QjtBQUdMUyxRQUFBQSxJQUFJLEVBQUU7QUFDSlQsVUFBQUEsTUFBTSxFQUFFUSxHQUFHLENBQUNSO0FBRFIsU0FIRDtBQU9MckMsUUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCVCxVQUFBQSxlQUFlLENBQUNMLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0QixHQUFoQixFQUFELEVBQXdCNUIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixFQUF4QixFQUE2QyxJQUE3QyxDQUFmO0FBRUQ7QUFWSSxPQUFQO0FBYUgsS0FmQztBQWlCSCxHQWxCQyxFQXRjNEIsQ0F5ZDVCOztBQUNBNUIsRUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIwQixFQUFyQixDQUF3QixPQUF4QixFQUFpQyxZQUFZO0FBQzNDLFFBQUkwQyxLQUFLLEdBQUdwRSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVk0QixHQUFaLEVBQVo7QUFFQWEsSUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUVwQjFELE1BQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLFFBQUFBLEdBQUcsRUFBRSx5QkFBdUI4QyxHQUFHLENBQUNSLE1BQTNCLEdBQWtDLEdBQWxDLEdBQXNDa0IsS0FGdEM7QUFHTFQsUUFBQUEsSUFBSSxFQUFFO0FBQ0pULFVBQUFBLE1BQU0sRUFBRVEsR0FBRyxDQUFDUjtBQURSLFNBSEQ7QUFPTHJDLFFBQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QlQsVUFBQUEsZUFBZSxDQUFDTCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEIsR0FBaEIsRUFBRCxFQUF3QjVCLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTRCLEdBQWYsRUFBeEIsRUFBNkMsSUFBN0MsQ0FBZjtBQUVEO0FBVkksT0FBUDtBQWFILEtBZkM7QUFpQkgsR0FwQkMsRUExZDRCLENBK2U1Qjs7QUFDQTVCLEVBQUFBLENBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCMEIsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBWTtBQUVsRGUsSUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUVwQjFELE1BQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLFFBQUFBLEdBQUcsRUFBRSxzQkFBb0I4QyxHQUFHLENBQUNSLE1BRnhCO0FBR0xTLFFBQUFBLElBQUksRUFBRTtBQUNKVCxVQUFBQSxNQUFNLEVBQUVRLEdBQUcsQ0FBQ1I7QUFEUixTQUhEO0FBT0xyQyxRQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJULFVBQUFBLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBQUQsRUFBd0I1QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBQXhCLEVBQTZDLElBQTdDLENBQWY7QUFFRDtBQVZJLE9BQVA7QUFhSCxLQWZDO0FBaUJILEdBbkJDLEVBaGY0QixDQXFnQjlCOztBQUNBLFdBQVN5QyxPQUFULEdBQWtCO0FBQ2hCLFFBQUlDLEdBQUcsR0FBQ3JFLFFBQVEsQ0FBQ3NFLGlCQUFULENBQTJCLEtBQTNCLENBQVI7O0FBQ0EsU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNGLEdBQUcsQ0FBQ0csTUFBbkIsRUFBMkJELENBQUMsRUFBNUIsRUFBK0I7QUFDM0IsVUFBR0YsR0FBRyxDQUFDRSxDQUFELENBQUgsQ0FBTzdELElBQVAsSUFBYSxVQUFoQixFQUNJMkQsR0FBRyxDQUFDRSxDQUFELENBQUgsQ0FBT0UsT0FBUCxHQUFlLElBQWY7QUFDUDtBQUNGOztBQUNELFdBQVNDLFFBQVQsR0FBbUI7QUFDakIsUUFBSUwsR0FBRyxHQUFDckUsUUFBUSxDQUFDc0UsaUJBQVQsQ0FBMkIsS0FBM0IsQ0FBUjs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0YsR0FBRyxDQUFDRyxNQUFuQixFQUEyQkQsQ0FBQyxFQUE1QixFQUErQjtBQUMzQixVQUFHRixHQUFHLENBQUNFLENBQUQsQ0FBSCxDQUFPN0QsSUFBUCxJQUFhLFVBQWhCLEVBQ0kyRCxHQUFHLENBQUNFLENBQUQsQ0FBSCxDQUFPRSxPQUFQLEdBQWUsS0FBZjtBQUVQO0FBQ0Y7O0FBQ0QxRSxFQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCMEIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBWTtBQUN6Q2tELElBQUFBLEtBQUssQ0FBQyxJQUFELENBQUw7QUFDQVAsSUFBQUEsT0FBTyxHQUZrQyxDQUU3QjtBQUVYLEdBSkQ7QUFLQXJFLEVBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIwQixFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFZO0FBQzNDa0QsSUFBQUEsS0FBSyxDQUFDLElBQUQsQ0FBTDtBQUNBRCxJQUFBQSxRQUFRLEdBRm1DLENBRTlCO0FBRVosR0FKRCxFQTFoQjhCLENBK2hCNUI7QUFDRjs7QUFFQTNFLEVBQUFBLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCMEIsRUFBekIsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBWTtBQUUvQyxRQUFJMEIsRUFBRSxHQUFHcEQsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFTNEIsR0FBVCxFQUFUO0FBQ0EsUUFBSWlELEVBQUUsR0FBRzdFLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUzRCLEdBQVQsRUFBVDtBQUNBNUIsSUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsTUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsTUFBQUEsR0FBRyxFQUFFLGFBRkE7QUFHTCtDLE1BQUFBLElBQUksRUFBRTtBQUNKUCxRQUFBQSxFQUFFLEVBQUVBLEVBREE7QUFFSnlCLFFBQUFBLEVBQUUsRUFBRUE7QUFGQSxPQUhEO0FBUUxoRSxNQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkIsWUFBSWQsQ0FBQyxDQUFDZSxFQUFGLENBQUtDLFNBQUwsQ0FBZUMsV0FBZixDQUEyQixtQkFBM0IsQ0FBSixFQUFxRDtBQUNuRGpCLFVBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCZ0IsU0FBdkIsR0FBbUNFLEtBQW5DLEdBQTJDQyxPQUEzQztBQUNEOztBQUNEbkIsUUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FDR2MsSUFESCxDQUNRQSxJQURSLEVBRUdFLFNBRkgsQ0FFYTtBQUNUSSxVQUFBQSxhQUFhLEVBQUUsS0FETjtBQUVUQyxVQUFBQSxVQUFVLEVBQUUsQ0FDVixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsY0FBdEIsQ0FEVSxFQUVWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixLQUF0QixDQUZVLENBRkg7QUFNVCx1QkFBYTtBQU5KLFNBRmI7QUFVRDtBQXRCSSxLQUFQO0FBeUJELEdBN0JELEVBbGlCOEIsQ0Fna0I5Qjs7QUFFQXJCLEVBQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCMEIsRUFBMUIsQ0FBNkIsT0FBN0IsdUVBQXNDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHNUJFLFlBQUFBLEdBSDRCLEdBR3RCLEVBSHNCO0FBSWhDNUIsWUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUI4RSxJQUF2QixDQUE0QixVQUFTTixDQUFULEVBQVc7QUFDckM1QyxjQUFBQSxHQUFHLENBQUM0QyxDQUFELENBQUgsR0FBU3hFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRCLEdBQVIsRUFBVDtBQUNELGFBRkQ7QUFKZ0MsMkJBT2ZBLEdBUGU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPeEJtRCxZQUFBQSxLQVB3QjtBQUFBO0FBQUE7QUFBQSxtQkFlakIvRSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNwQkMsY0FBQUEsSUFBSSxFQUFFLE1BRGM7QUFFcEJDLGNBQUFBLEdBQUcsRUFBRSwyQkFGZTtBQUdwQitDLGNBQUFBLElBQUksRUFBRTtBQUNKVCxnQkFBQUEsTUFBTSxFQUFFNkIsS0FESjtBQUVKaEQsZ0JBQUFBLElBQUksRUFBRS9CLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTRCLEdBQWYsRUFGRjtBQUdKakIsZ0JBQUFBLElBQUksRUFBRztBQUhILGVBSGMsQ0FRNUI7QUFDQTtBQUNBO0FBQ0E7O0FBWDRCLGFBQVAsQ0FmaUI7O0FBQUE7QUFlaENxRSxZQUFBQSxNQWZnQztBQTZCckNkLFlBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLCtCQUE2QmEsTUFBekMsRUFBaUQsUUFBakQ7QUE3QnFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBK0JoQ3BCLFlBQUFBLE9BQU8sQ0FBQ3FCLEtBQVI7O0FBL0JnQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF0QyxJQWxrQjhCLENBMG1COUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVFOztBQUVBakYsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjBCLEVBQWxCLENBQXFCLFFBQXJCLEVBQStCLFlBQVk7QUFDekMsUUFBSUMsYUFBYSxHQUFHM0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEIsR0FBUixFQUFwQjtBQUNBNUIsSUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsTUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsTUFBQUEsR0FBRyxFQUFFLHdCQUF3QmUsYUFGeEI7QUFHTGQsTUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCZCxRQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCYyxJQUFsQixDQUF1QkEsSUFBdkI7QUFDQWQsUUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnlCLElBQWxCLENBQXVCLGVBQXZCLEVBQXdDLENBQXhDO0FBRUF6QixRQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxVQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxVQUFBQSxHQUFHLEVBQUUsd0JBQXdCWixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCNEIsR0FBbEIsRUFGeEI7QUFHTGYsVUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCZCxZQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCYyxJQUFsQixDQUF1QkEsSUFBdkI7QUFDQWQsWUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnlCLElBQWxCLENBQXVCLGVBQXZCLEVBQXdDLENBQXhDO0FBQ0FILFlBQUFBLDRCQUE0QixDQUFDdEIsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjRCLEdBQWxCLEVBQUQsQ0FBNUI7QUFHRDtBQVRJLFNBQVA7QUFXRDtBQWxCSSxLQUFQO0FBb0JELEdBdEJELEVBMW9CNEIsQ0FpcUI1Qjs7QUFFQTVCLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IwQixFQUFsQixDQUFxQixRQUFyQixFQUErQixZQUFZO0FBQ3pDLFFBQUlHLFNBQVMsR0FBRzdCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRCLEdBQVIsRUFBaEI7QUFDQTVCLElBQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLE1BQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLE1BQUFBLEdBQUcsRUFBRSx3QkFBd0JpQixTQUZ4QjtBQUdMaEIsTUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCZCxRQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCYyxJQUFsQixDQUF1QkEsSUFBdkI7QUFDQWQsUUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnlCLElBQWxCLENBQXVCLGVBQXZCLEVBQXdDLENBQXhDO0FBQ0FILFFBQUFBLDRCQUE0QixDQUFDdEIsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjRCLEdBQWxCLEVBQUQsQ0FBNUI7QUFFRDtBQVJJLEtBQVA7QUFVRCxHQVpELEVBbnFCNEIsQ0FnckI1Qjs7QUFFQTVCLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IwQixFQUFsQixDQUFxQixRQUFyQixFQUErQixZQUFZO0FBQ3pDLFFBQUlJLFNBQVMsR0FBRzlCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRCLEdBQVIsRUFBaEI7QUFDQU4sSUFBQUEsNEJBQTRCLENBQUNRLFNBQUQsQ0FBNUI7QUFFRCxHQUpELEVBbHJCNEIsQ0EyckI5QjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQzs7QUFDQTlCLEVBQUFBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCa0YsS0FBOUIsQ0FBb0MsWUFBVTtBQUU3QyxRQUFJQyxFQUFFLEdBQUduRixDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjRCLEdBQXpCLEVBQVQ7QUFDQSxRQUFJd0QsSUFBSSxHQUFHcEYsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUI0QixHQUF6QixFQUFYO0FBQ0EsUUFBSXlELE9BQU8sR0FBR3JGLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0I0QixHQUFsQixFQUFkO0FBQ0EsUUFBSUMsU0FBUyxHQUFHN0IsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjRCLEdBQWxCLEVBQWhCO0FBQ0EsUUFBSUUsU0FBUyxHQUFHOUIsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjRCLEdBQWxCLEVBQWhCO0FBR0EsUUFBSTBELEdBQUcsR0FBSXRGLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDNEIsR0FBaEMsRUFBWCxDQVQ2QyxDQVdyQzs7QUFDRGhCLElBQUFBLEdBQUcsR0FBRyxpQ0FBK0J1RSxFQUEvQixHQUFrQyxRQUFsQyxHQUEyQ0MsSUFBM0MsR0FBZ0QsYUFBaEQsR0FBOER2RCxTQUE5RCxHQUF3RSxhQUF4RSxHQUFzRkMsU0FBdEYsR0FBZ0csV0FBaEcsR0FBNEd1RCxPQUE1RyxHQUFvSCxPQUFwSCxHQUE0SEMsR0FBNUgsR0FBZ0ksYUFBdEk7QUFDQUQsSUFBQUEsT0FBTztBQUNQbkIsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVl2RCxHQUFaO0FBR0ksR0FqQlosRUEvc0I2QixDQWl1QjVCOztBQUdGWixFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCdUYsT0FBbEI7QUFDQXZGLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J1RixPQUFsQjtBQUNBdkYsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnVGLE9BQWxCO0FBQ0F2RixFQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CdUYsT0FBbkI7QUFDQyxDQXh1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hc3NpZHVpdGUvYXNzaWR1aXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgdG9hc3Q6IHRydWUsXHJcbiAgcG9zaXRpb246IFwidG9wLWVuZFwiLFxyXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICB0aW1lcjogMzAwMCxcclxuICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgU3dhbC5zdG9wVGltZXIpO1xyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgU3dhbC5yZXN1bWVUaW1lcik7XHJcbiAgfSxcclxufSk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgXHJcbiAgJChcIi5sb2FkZXJcIikuaGlkZSgpO1xyXG4gIC8vICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLmhpZGUoKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZGF0YXRhYmxlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIHZhciB0YWJsZURhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2VhbmNlYWZmaWNoYWdlKHZhcjEsIHZhcjIsIHZhcjMpIHtcclxuICAgICAgICAkKFwiLmxvYWRlclwiKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvYXBpL1NlYW5jZV9hZmYvXCIgKyB2YXIxICsgXCIvXCIgKyB2YXIyICsgXCIvXCIgKyB2YXIzLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIubG9hZGVyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHZhcjE7XHJcbiAgICAgICAgfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bi1ldGRpYW50cy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSh2YXIxKSB7XHJcblxyXG4gICAgICAgICAgJChcIi5sb2FkZXJcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgIHVybDogXCIvYXBpL2V0dWRfYWZmX3NpdHVhdGlvbi9cIiArIHZhcjEsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICQoXCIubG9hZGVyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjRXRfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFyMTtcclxuICAgICAgICAgIH1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIGhpZ2hsaWdodCgpIHt9XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsxMywgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsxMywgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgWzEzLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsxMywgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJChcIi5kYXRhVGFibGVzX2xlbmd0aFwiKS5hZGRDbGFzcyhcImJzLXNlbGVjdFwiKTtcclxuICAvLy8vLy8vLy8vLy8vLy8vICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBkcm9wZG93biAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2V0YWJsaXNzZW1lbnRcIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgJChcIiNmb3JtYXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgJChcIiNwcm9tb3Rpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bi1zaXR1YXRpb24vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgJChcIiNFX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAkKFwiI0Zfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICQoXCIjUF9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9ldGFibGlzc2VtZW50Ly8vLy8vLy8vL1xyXG5cclxuICAgICAgICAgICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB2YXIgZXRhYmxpc3NlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvRm9ybWF0aW9uX2FmZi9cIiArIGV0YWJsaXNzZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAkKFwiI2Zvcm1hdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiI2Zvcm1hdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvUHJvbW90aW9uX2FmZi9cIiArICQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9tb3Rpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9Gb21hdGlvbi8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNmb3JtYXRpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvUHJvbW90aW9uX2FmZi9cIiArIGZvcm1hdGlvbixcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICQoXCIjcHJvbW90aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9Qcm9tb3Rpb24vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgICAgJChcIiNwcm9tb3Rpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKHByb21vdGlvbiwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgIH0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9EYXRlLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2RhdGV0aW1lXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBkYXRlID0gJCh0aGlzKS52YWwoKTtcclxuICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgZGF0ZSwnQ1InKTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGRhdGUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgdmFyIGRheSA9IChcIjBcIiArIG5vdy5nZXREYXRlKCkpLnNsaWNlKC0yKTtcclxuICB2YXIgbW9udGggPSAoXCIwXCIgKyAobm93LmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xyXG4gIHZhciB0b2RheSA9IG5vdy5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5O1xyXG5cclxuICAkKFwiI2RhdGV0aW1lXCIpLnZhbCh0b2RheSk7XHJcbiAgdmFyIHByb21vdGlvbiA9ICQoXCIjcHJvbW90aW9uXCIpLnZhbCgpO1xyXG4gIGxldCBsaXN0ID0gW107XHJcbiAgc2VhbmNlYWZmaWNoYWdlKHByb21vdGlvbiwgdG9kYXksJ0NSJyk7XHJcblxyXG5cclxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLm9uKFwiY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZWN0ZWQgPSAkKHRoaXMpLmhhc0NsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUgdHJcIikucmVtb3ZlQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcIm9kZFwiKTtcclxuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUgdHJcIikucmVtb3ZlQ2xhc3MoXCJldmVuXCIpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWQpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAgIHZhciBjdXJyZW50Um93ID0gJCh0aGlzKS5jbG9zZXN0KFwidHJcIik7XHJcbiAgICAgIHZhciBzdGF0dXQgPSBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxKVwiKS5odG1sKCk7XHJcbiAgICAgIGxpc3QgPSBbXTtcclxuICAgICAgbGlzdC5wdXNoKHtcclxuICAgICAgICBwcm9tb3Rpb246IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDIpXCIpLmh0bWwoKSxcclxuICAgICAgICBzZWFuY2U6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDMpXCIpLmh0bWwoKSxcclxuICAgICAgICBncm91cGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEwKVwiKS5odG1sKCksXHJcbiAgICAgICAgaGQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDgpXCIpLmh0bWwoKSxcclxuICAgICAgICBtb2R1bGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDE0KVwiKS5odG1sKCksXHJcbiAgICAgICAgc2FsZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTUpXCIpLmh0bWwoKSxcclxuICAgICAgICBleGlzdGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDExKVwiKS5odG1sKCksXHJcbiAgICAgICAgc3RhdHV0OiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxKVwiKS5odG1sKCksXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5oaWRlKCk7XHJcbiAgICAgIGlmIChzdGF0dXQgPT0gJzEnKSB7XHJcbiAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7XHJcbiAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3RhdHV0ID09ICcyJykge1xyXG4gICAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKHN0YXR1dCA9PSAnMScgfHwgc3RhdHV0ID09ICcyJyl7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9jb3VudF9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgXHJcbiAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIuZ3JpZFwiKS5odG1sKGh0bWwpO1xyXG5cclxuICAgICAgfVxyXG4gIH0pO1xyXG4gIH0pO1xyXG59XHJcbmNvbnNvbGUubG9nKGxpc3QpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBwb3AgdXAgZXR1ZGlhbnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikub24oXCJkYmxjbGlja1wiLCBcInRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjZXR1ZGlhbnQtbW9kYWxcIikubW9kYWwoXCJ0b2dnbGVcIik7XHJcbiAgICAkKFwiI2V0dWRpYW50LW1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvRXR1ZF9hZmZcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwcm9tb3Rpb246IG9iai5wcm9tb3Rpb24sXHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgICBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICBleGlzdGU6IG9iai5leGlzdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikpIHtcclxuICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpXHJcbiAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsyNSwgNTAsIDc1LCAxMDAsIDEyNSwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogdHJhaXRlbWVudCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3RyYWl0ZV9lcHJldXZlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgaWYgKG9iai5ncm91cGUgPT09IFwiXCIpIHtcclxuICAgICAgICBvYmouZ3JvdXBlID0gXCJlbXB0eVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICggb2JqLnN0YXR1dCAhPSAnMScpe1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLy8gcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIC8vIGhkOiBvYmouaGQsXHJcbiAgICAgICAgICAvLyBtb2R1bGU6IG9iai5tb2R1bGUsXHJcbiAgICAgICAgICAvLyBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICAvLyBzYWxlOiBvYmouc2FsZSxcclxuICAgICAgICAgIHR5cGUgOiAndHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NlYW5jZSB0cmFpdMOpIGF2ZWMgc3VjY2VzJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnc2VhbmNlIGRlamEgdHJhaXTDqScsXHJcbiAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHJldHJhaXRlciAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG5cclxuICAkKFwiYm9keSAjcmV0cmFpdGVyX3NlYW5jZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgIGlmIChvYmouZ3JvdXBlID09PSBcIlwiKSB7XHJcbiAgICAgICAgb2JqLmdyb3VwZSA9IFwiZW1wdHlcIjtcclxuICAgICAgfVxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLy8gcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIC8vIGhkOiBvYmouaGQsXHJcbiAgICAgICAgICAvLyBtb2R1bGU6IG9iai5tb2R1bGUsXHJcbiAgICAgICAgICAvLyBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICAvLyBzYWxlOiBvYmouc2FsZSxcclxuICAgICAgICAgIHR5cGUgOiAncmV0cmFpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICQoXCIuZ3JpZFwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZmV1aWxlIHBkZiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNhc3NpZHVpdGVfcHJpbnRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmLycrb2JqLnNlYW5jZSwgJ19ibGFuaycpO1xyXG5cclxufSk7XHJcbn0pO1xyXG5cclxuLy8gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbi8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBzaXR1YXRpb24gcHJlc2VudGlsIHBkZiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLyAgICQoXCJib2R5ICNzaXR1YXRpb25fcHJlc2VudGllbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIC8vIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbi8vICAgICAgIHZhciBldHVkaWFudCA9ICQoXCIjRXRfc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyAgICAgICAvLyB2YXIgZGF0ZV9kZWJ1dCA9ICQoXCIjZGF0ZXRpbWVEc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyAgICAgICAvLyB2YXIgZGF0ZV9maW4gPSAkKFwiI2RhdGV0aW1lRnNpdHVhdGlvblwiKS52YWwoKTtcclxuXHJcbi8vICAgICB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZl9wcmVzZW50aWVsLycrZXR1ZGlhbnQsICdfYmxhbmsnKTtcclxuXHJcbi8vIC8vIH0pO1xyXG4vLyB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogcmVtb3ZlIHNlYW5jZSAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjcmVtb3ZlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvcmVtb3ZlX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZXhpc3RlICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNleGlzdGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9leGlzdF9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHNpZ24gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3NpZ25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9zaWduX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzZWFuY2Ugc2lnbsOpJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBjYW5jZWwgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2NhbmNlbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2NhbmNlbF9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBkZXZlcm91ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2RldmVyb3VpbGxlci1tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2RldmVyX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBtb2RpZmllcl9zYWxsZSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNtb2Rpc2FsbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2FsbGUgPSAkKFwiI3NhbGxlXCIpLnZhbCgpO1xyXG4gICAgXHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9tb2RpZmllcl9zYWxsZS9cIitvYmouc2VhbmNlK1wiL1wiK3NhbGxlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBtb2RpZmllcl9zYWxsZSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICN2ZXJvdWlsbGVyLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9sb2NrX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJsb3QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNlbGVjdHMoKXsgIFxyXG4gIHZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXHJcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxyXG4gICAgICAgICAgZWxlW2ldLmNoZWNrZWQ9dHJ1ZTsgIFxyXG4gIH0gIFxyXG59ICBcclxuZnVuY3Rpb24gZGVTZWxlY3QoKXsgIFxyXG4gIHZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXHJcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxyXG4gICAgICAgICAgZWxlW2ldLmNoZWNrZWQ9ZmFsc2U7ICBcclxuICAgICAgICBcclxuICB9ICBcclxufSAgICAgICAgICBcclxuJChcImJvZHkgI2NoZWNrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5hbGVydCgnb2snKTtcclxuc2VsZWN0cygpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xyXG4gXHJcbn0pO1xyXG4kKFwiYm9keSAjdW5jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuYWxlcnQoJ29rJyk7XHJcbmRlU2VsZWN0KCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XHJcbiBcclxufSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJsb3RfaGQtZiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiQoXCJib2R5ICNwYXJsb3Rfc2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgdmFyIGhkID0gJChcIiNoZFwiKS52YWwoKTtcclxuICB2YXIgaGYgPSAkKFwiI2hmXCIpLnZhbCgpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogXCIvYXBpL3BhcmxvdFwiLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBoZDogaGQsXHJcbiAgICAgIGhmOiBoZixcclxuICAgICBcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjcGFybG90X2RhdGF0YWJsZVwiKSkge1xyXG4gICAgICAgICQoXCIjcGFybG90X2RhdGF0YWJsZVwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgICAkKFwiI3BhcmxvdF9kYXRhdGFibGVcIilcclxuICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbiBcclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBhcmxvdF90cmFpdGVtZW50IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJChcImJvZHkgI3BhcmxvdF90cmFpdGVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gXHJcbiAgbGV0IHJlc3VsdDtcclxuICAgICAgdmFyIHZhbCA9IFtdO1xyXG4gICAgICAkKCc6Y2hlY2tib3g6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgdmFsW2ldID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZvcihsZXQgdmFsdWUgb2YgdmFsKXtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXBvcnQnLCB7XHJcbiAgICAgIC8vICAgc2VhbmNlOiB2YWx1ZSxcclxuICAgICAgLy8gICBkYXRlOiAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLFxyXG4gICAgICAvLyAgIHR5cGUgOiAndHJhaXRlJyxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICByZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiB2YWx1ZSxcclxuICAgICAgICAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgICAgICB0eXBlIDogJ3RyYWl0ZScsXHJcbiAgICAgICAgfSxcclxuLy8gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4vLyBhbGVydChodG1sKTtcclxuLy8gICAgIC8vIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmLycraHRtbCwgJ19ibGFuaycpO1xyXG4vLyAgIH0sXHJcblxyXG4gICAgICB9KTtcclxuIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmLycrcmVzdWx0LCAnX2JsYW5rJyk7XHJcbn0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gIH1cclxuICAgICAgfVxyXG4gIFxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG59KTtcclxuXHJcblxyXG5cclxuLy8gJChcImJvZHkgI3NpdHVhdGlvbl9zZWFyY2hcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vIGV0dWRpYW50ID0gJChcIiNFdF9zaXR1YXRpb25cIikudmFsKCk7XHJcbi8vIGRhdGVkID0gJChcIiNkYXRldGltZURzaXR1YXRpb25cIikudmFsKCk7XHJcbi8vIGRhdGVmID0gJChcIiNkYXRldGltZUZzaXR1YXRpb25cIikudmFsKCk7XHJcbi8vICQuYWpheCh7XHJcbi8vICAgdHlwZTogXCJQT1NUXCIsXHJcbi8vICAgdXJsOiBcIi9hcGkvYWZmX3NpdHVhdGlvblwiLFxyXG4vLyAgIGRhdGE6IHtcclxuLy8gICAgIGV0dWRpYW50IDogZXR1ZGlhbnQsXHJcbi8vICAgICBkYXRlZCA6IGRhdGVkLFxyXG4vLyAgICAgZGF0ZWYgOiBkYXRlZiAsXHJcbi8vICAgfSxcclxuLy8gICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4vLyAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9zaXR1YXRpb25cIikpIHtcclxuLy8gICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfc2l0dWF0aW9uXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfc2l0dWF0aW9uXCIpXHJcbi8vICAgICAgIC5odG1sKGh0bWwpXHJcbi8vICAgICAgIC5EYXRhVGFibGUoe1xyXG4vLyAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4vLyAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuLy8gICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbi8vICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbi8vICAgICAgICAgXSxcclxuLy8gICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuLy8gICAgICAgfSk7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuLy8gfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vL2V0YWJsaXNzZW1lbnQvLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjRV9zaXR1YXRpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV0YWJsaXNzZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL0Zvcm1hdGlvbl9hZmYvXCIgKyBldGFibGlzc2VtZW50LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIjRl9zaXR1YXRpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAkKFwiI0Zfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgJChcIiNGX3NpdHVhdGlvblwiKS52YWwoKSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgJChcIiNQX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAgICAgICAgICAgZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSgkKFwiI1Bfc2l0dWF0aW9uXCIpLnZhbCgpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vL0ZvbWF0aW9uLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI0Zfc2l0dWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyBmb3JtYXRpb24sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIiNQX3NpdHVhdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSgkKFwiI1Bfc2l0dWF0aW9uXCIpLnZhbCgpKTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9Qcm9tb3Rpb24vLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjUF9zaXR1YXRpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKHByb21vdGlvbik7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiBcclxuICAgICAgICAgICAgXHJcbi8vICAvLy8vLy8vLy8vLy8vLy8vLy9leHRyYWN0aW9uLy8vLy8vLy8vLy8vLy8vLzpcclxuLy8gICQoJyNjcmVhdGVfZXh0cmFjdGlvbicpLmNsaWNrKGZ1bmN0aW9uKCl7IFxyXG5cclxuLy8gICB2YXIgdG8gPSAkKCcjZGF0ZXRpbWVGc2l0dWF0aW9uJykudmFsKCk7XHJcbi8vICAgdmFyIGZyb20gPSAkKCcjZGF0ZXRpbWVEc2l0dWF0aW9uJykudmFsKCk7XHJcbi8vICAgdmFyIHNlcnZpY2UgPSAkKCcjRV9zaXR1YXRpb24nKS52YWwoKTtcclxuLy8gICB2YXIgZm9ybWF0aW9uID0gJCgnI0Zfc2l0dWF0aW9uJykudmFsKCk7XHJcbi8vICAgdmFyIHByb21vdGlvbiA9ICQoJyNQX3NpdHVhdGlvbicpLnZhbCgpO1xyXG5cclxuXHJcbi8vICAgdmFyIHRvdSA9ICAkKCdpbnB1dFtuYW1lPVwidG91c1wiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgXHJcbi8vICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwie3sgcGF0aCgnZXh0cmFjdGlvbicpIH19P1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbTtcclxuLy8gICAgICAgICAgdXJsID0gXCIvYXBpL2dlbmVyYXRlX2V4dHJhY3Rpb24/VG89XCIrdG8rXCImRnJvbT1cIitmcm9tK1wiJmZvcm1hdGlvbj1cIitmb3JtYXRpb24rXCImcHJvbW90aW9uPVwiK3Byb21vdGlvbitcIiZTZXJ2aWNlPVwiK3NlcnZpY2UrXCImVG91PVwiK3RvdStcIiZ0eXBlPW5vcm1hbFwiOztcclxuLy8gICAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcclxuICAgICAgICAgICBcclxuXHJcbi8vICAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmFjdGlvbiBzdGFnZS8vLy8vLy8vLy8vLy8vLy86XHJcbiAkKCcjY3JlYXRlX2V4dHJhY3Rpb25fc3RhZ2UnKS5jbGljayhmdW5jdGlvbigpeyBcclxuXHJcbiAgdmFyIHRvID0gJCgnI2RhdGV0aW1lRnNpdHVhdGlvbicpLnZhbCgpO1xyXG4gIHZhciBmcm9tID0gJCgnI2RhdGV0aW1lRHNpdHVhdGlvbicpLnZhbCgpO1xyXG4gIHZhciBzZXJ2aWNlID0gJCgnI0Vfc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgdmFyIGZvcm1hdGlvbiA9ICQoJyNGX3NpdHVhdGlvbicpLnZhbCgpO1xyXG4gIHZhciBwcm9tb3Rpb24gPSAkKCcjUF9zaXR1YXRpb24nKS52YWwoKTtcclxuXHJcblxyXG4gIHZhciB0b3UgPSAgJCgnaW5wdXRbbmFtZT1cInRvdXNcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gIFxyXG4gICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInt7IHBhdGgoJ2V4dHJhY3Rpb24nKSB9fT9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb207XHJcbiAgICAgICAgIHVybCA9IFwiL2FwaS9nZW5lcmF0ZV9leHRyYWN0aW9uP1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbStcIiZmb3JtYXRpb249XCIrZm9ybWF0aW9uK1wiJnByb21vdGlvbj1cIitwcm9tb3Rpb24rXCImU2VydmljZT1cIitzZXJ2aWNlK1wiJlRvdT1cIit0b3UrXCImdHlwZT1zdGFnZVwiO1xyXG4gICAgICAgICBzZXJ2aWNlO1xyXG4gICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSk7ICAgICAgICBcclxuICAvLyBcclxuXHJcblxyXG4kKCcjRV9zaXR1YXRpb24nKS5zZWxlY3QyKCk7XHJcbiQoJyNGX3NpdHVhdGlvbicpLnNlbGVjdDIoKTtcclxuJCgnI1Bfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xyXG4kKCcjRXRfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaGlkZSIsInRhYmxlRGF0YSIsInNlYW5jZWFmZmljaGFnZSIsInZhcjEiLCJ2YXIyIiwidmFyMyIsInNob3ciLCJhamF4IiwidHlwZSIsInVybCIsInN1Y2Nlc3MiLCJodG1sIiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImJMZW5ndGhDaGFuZ2UiLCJsZW5ndGhNZW51IiwiZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSIsImhpZ2hsaWdodCIsImFkZENsYXNzIiwicHJvcCIsIm9uIiwiZXRhYmxpc3NlbWVudCIsInZhbCIsImZvcm1hdGlvbiIsInByb21vdGlvbiIsImRhdGUiLCJub3ciLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInNsaWNlIiwibW9udGgiLCJnZXRNb250aCIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJsaXN0Iiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiY3VycmVudFJvdyIsImNsb3Nlc3QiLCJzdGF0dXQiLCJmaW5kIiwicHVzaCIsInNlYW5jZSIsImdyb3VwZSIsImhkIiwibW9kdWxlIiwic2FsZSIsImV4aXN0ZSIsImNzcyIsImZvckVhY2giLCJvYmoiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1vZGFsIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsIndpbmRvdyIsIm9wZW4iLCJzYWxsZSIsInNlbGVjdHMiLCJlbGUiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJsZW5ndGgiLCJjaGVja2VkIiwiZGVTZWxlY3QiLCJhbGVydCIsImhmIiwiZWFjaCIsInZhbHVlIiwicmVzdWx0IiwiZXJyb3IiLCJjbGljayIsInRvIiwiZnJvbSIsInNlcnZpY2UiLCJ0b3UiLCJzZWxlY3QyIl0sInNvdXJjZVJvb3QiOiIifQ==