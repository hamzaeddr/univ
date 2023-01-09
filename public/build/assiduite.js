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
        $(".loader").show();
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
            $(".loader").hide();
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
    var date = $("#datetime").val();
    $.ajax({
      type: "POST",
      url: "/api/parlot",
      data: {
        hd: hd,
        hf: hf,
        date: date
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
  }); //////////////////////////etudiant details ////////////////////////////////////////////

  $("body #dtDynamicVerticalScrollExample2").on("dblclick", "tr", function () {
    var _this = this;

    // alert(statut);
    list.forEach(function (obj) {
      if (obj.statut == 1) {
        $("#etudiant_det_modal").modal("toggle");
        $("#etudiant_det_modal").modal("show");
        var row_etudiant = $(_this).closest("tr");
        var id_etudiant = row_etudiant.find("td:eq(0)").html();
        $.ajax({
          type: "POST",
          url: "/api/Etud_details",
          data: {
            etudiant: id_etudiant,
            seance: obj.seance
          },
          success: function success(html) {
            $('#modal_etud_det').html(html);
          }
        });
      }
    });
  }); //////////////////////////valider etudiant details ////////////////////////////////////////////

  $("body #save_etud_det").on("click", function () {
    var justif = 0;

    if ($('input.justifier').is(':checked')) {
      justif = 1;
    }

    $.ajax({
      type: "POST",
      url: "/api/Etud_details_valide",
      data: {
        etudiant: $('#ID_Admission').val(),
        seance: $('#Id_Seance').val(),
        cat_ens: $('#Categorie_ens').val(),
        motif_abs: $('#motif_abs').val(),
        obs: $('#obs').val(),
        justif: justif
      },
      success: function success(html) {
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
        $("#etudiant_det_modal").modal("toggle");
        $("#etudiant_det_modal").modal("hide");
      }
    });
  }); //////////////////////////Pointage ////////////////////////////////////////////

  $("body #pointage").on("click", function () {
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
            if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample4")) {
              $("#dtDynamicVerticalScrollExample4").DataTable().clear().destroy();
            }

            $("#dtDynamicVerticalScrollExample4").html(html).DataTable({
              bLengthChange: false,
              lengthMenu: [[25, 50, 75, 100, 125, 20000000000000], [10, 15, 25, 50, 100, "All"]]
            });
          }
        });
      }
    });
  }); ///////////////////////////////////////////////////////////////////////////////////////

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaWR1aXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVztBQUN2QkMsRUFBQUEsS0FBSyxFQUFFLElBRGdCO0FBRXZCQyxFQUFBQSxRQUFRLEVBQUUsU0FGYTtBQUd2QkMsRUFBQUEsaUJBQWlCLEVBQUUsS0FISTtBQUl2QkMsRUFBQUEsS0FBSyxFQUFFLElBSmdCO0FBS3ZCQyxFQUFBQSxnQkFBZ0IsRUFBRSxJQUxLO0FBTXZCQyxFQUFBQSxPQUFPLEVBQUUsaUJBQUNMLEtBQUQsRUFBVztBQUNsQkEsSUFBQUEsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixZQUF2QixFQUFxQ1IsSUFBSSxDQUFDUyxTQUExQztBQUNBUCxJQUFBQSxLQUFLLENBQUNNLGdCQUFOLENBQXVCLFlBQXZCLEVBQXFDUixJQUFJLENBQUNVLFdBQTFDO0FBQ0Q7QUFUc0IsQ0FBWCxDQUFkO0FBV0FDLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUc1QkYsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhRyxJQUFiLEdBSDRCLENBSTVCO0FBQ0Y7O0FBRVEsTUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUVBLFdBQVNDLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCQyxJQUEvQixFQUFxQ0MsSUFBckMsRUFBMkM7QUFDM0NSLElBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVMsSUFBYjtBQUVFVCxJQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxNQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxNQUFBQSxHQUFHLEVBQUUscUJBQXFCTixJQUFyQixHQUE0QixHQUE1QixHQUFrQ0MsSUFBbEMsR0FBeUMsR0FBekMsR0FBK0NDLElBRi9DO0FBR0xLLE1BQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUM3QmQsUUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhRyxJQUFiOztBQUVNLFlBQUlILENBQUMsQ0FBQ2UsRUFBRixDQUFLQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkIsaUNBQTNCLENBQUosRUFBbUU7QUFDakVqQixVQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ2dCLFNBQXJDLEdBQWlERSxLQUFqRCxHQUF5REMsT0FBekQ7QUFDRDs7QUFDRG5CLFFBQUFBLENBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQ0djLElBREgsQ0FDUUEsSUFEUixFQUVHRSxTQUZILENBRWE7QUFDVEksVUFBQUEsYUFBYSxFQUFFLEtBRE47QUFFVEMsVUFBQUEsVUFBVSxFQUFFLENBQ1YsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLGNBQXRCLENBRFUsRUFFVixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsS0FBdEIsQ0FGVSxDQUZIO0FBTVQsdUJBQWE7QUFOSixTQUZiO0FBVUQ7QUFuQkksS0FBUDtBQXFCQSxXQUFPZixJQUFQO0FBQ0QsR0FsQ3FCLENBb0M5Qjs7O0FBRVEsV0FBU2dCLDRCQUFULENBQXNDaEIsSUFBdEMsRUFBNEM7QUFFMUNOLElBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVMsSUFBYjtBQUNFVCxJQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxNQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxNQUFBQSxHQUFHLEVBQUUsNkJBQTZCTixJQUY3QjtBQUdMTyxNQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDekJkLFFBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUcsSUFBYjtBQUNBSCxRQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CYyxJQUFuQixDQUF3QkEsSUFBeEI7QUFFQztBQVBJLEtBQVA7QUFTQSxXQUFPUixJQUFQO0FBQ0QsR0FuRG1CLENBb0Q5Qjs7O0FBRVUsV0FBU2lCLFNBQVQsR0FBcUIsQ0FBRTs7QUFDdkJ2QixFQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ2dCLFNBQXJDLENBQStDO0FBQzdDSSxJQUFBQSxhQUFhLEVBQUUsS0FEOEI7QUFFN0NDLElBQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlU7QUFGaUMsR0FBL0M7QUFRQXJCLEVBQUFBLENBQUMsQ0FBQywyQ0FBRCxDQUFELENBQStDZ0IsU0FBL0MsQ0FBeUQ7QUFDdkRJLElBQUFBLGFBQWEsRUFBRSxLQUR3QztBQUV2REMsSUFBQUEsVUFBVSxFQUFFLENBQ1YsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLGNBQXRCLENBRFUsRUFFVixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsS0FBdEIsQ0FGVTtBQUYyQyxHQUF6RDtBQU9BckIsRUFBQUEsQ0FBQyxDQUFDLDRDQUFELENBQUQsQ0FBZ0RnQixTQUFoRCxDQUEwRDtBQUN4REksSUFBQUEsYUFBYSxFQUFFLEtBRHlDO0FBRXhEQyxJQUFBQSxVQUFVLEVBQUUsQ0FDVixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsY0FBdEIsQ0FEVSxFQUVWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixLQUF0QixDQUZVO0FBRjRDLEdBQTFEO0FBT0FyQixFQUFBQSxDQUFDLENBQUMsMkNBQUQsQ0FBRCxDQUErQ2dCLFNBQS9DLENBQXlEO0FBQ3ZESSxJQUFBQSxhQUFhLEVBQUUsS0FEd0M7QUFFdkRDLElBQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixHQUFqQixFQUFzQixjQUF0QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlU7QUFGMkMsR0FBekQ7QUFRQXJCLEVBQUFBLENBQUMsQ0FBQyxrQ0FBRCxDQUFELENBQXNDZ0IsU0FBdEMsQ0FBZ0Q7QUFDOUNJLElBQUFBLGFBQWEsRUFBRTtBQUQrQixHQUFoRDtBQUlBcEIsRUFBQUEsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0J3QixRQUF4QixDQUFpQyxXQUFqQyxFQXpGb0IsQ0EwRjVCO0FBQ0Y7O0FBRUV4QixFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQnlCLElBQXBCLENBQXlCLGVBQXpCLEVBQTBDLENBQTFDO0FBQ0F6QixFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCeUIsSUFBaEIsQ0FBcUIsZUFBckIsRUFBc0MsQ0FBdEM7QUFDQXpCLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0J5QixJQUFoQixDQUFxQixlQUFyQixFQUFzQyxDQUF0QyxFQS9GNEIsQ0FnRzVCO0FBQ0Y7O0FBQ0V6QixFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCeUIsSUFBbEIsQ0FBdUIsZUFBdkIsRUFBd0MsQ0FBeEM7QUFDQXpCLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J5QixJQUFsQixDQUF1QixlQUF2QixFQUF3QyxDQUF4QztBQUNBekIsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnlCLElBQWxCLENBQXVCLGVBQXZCLEVBQXdDLENBQXhDLEVBcEc0QixDQXNHOUI7O0FBRVl6QixFQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQjBCLEVBQXBCLENBQXVCLFFBQXZCLEVBQWlDLFlBQVk7QUFDM0MsUUFBSUMsYUFBYSxHQUFHM0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEIsR0FBUixFQUFwQjtBQUNBNUIsSUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsTUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsTUFBQUEsR0FBRyxFQUFFLHdCQUF3QmUsYUFGeEI7QUFHTGQsTUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCZCxRQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCYyxJQUFoQixDQUFxQkEsSUFBckI7QUFDQWQsUUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnlCLElBQWhCLENBQXFCLGVBQXJCLEVBQXNDLENBQXRDO0FBRUF6QixRQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxVQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxVQUFBQSxHQUFHLEVBQUUsd0JBQXdCWixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEIsR0FBaEIsRUFGeEI7QUFHTGYsVUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCZCxZQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCYyxJQUFoQixDQUFxQkEsSUFBckI7QUFDQWQsWUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnlCLElBQWhCLENBQXFCLGVBQXJCLEVBQXNDLENBQXRDO0FBQ0FwQixZQUFBQSxlQUFlLENBQUNMLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0QixHQUFoQixFQUFELEVBQXdCNUIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixFQUF4QixFQUE2QyxJQUE3QyxDQUFmO0FBQ0Q7QUFQSSxTQUFQO0FBU0Q7QUFoQkksS0FBUDtBQWtCRCxHQXBCRCxFQXhHa0IsQ0E2SDlCOztBQUVFNUIsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjBCLEVBQWhCLENBQW1CLFFBQW5CLEVBQTZCLFlBQVk7QUFDdkMsUUFBSUcsU0FBUyxHQUFHN0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEIsR0FBUixFQUFoQjtBQUNBNUIsSUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsTUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsTUFBQUEsR0FBRyxFQUFFLHdCQUF3QmlCLFNBRnhCO0FBR0xoQixNQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJkLFFBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JjLElBQWhCLENBQXFCQSxJQUFyQjtBQUNBZCxRQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCeUIsSUFBaEIsQ0FBcUIsZUFBckIsRUFBc0MsQ0FBdEM7QUFDQXBCLFFBQUFBLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBQUQsRUFBd0I1QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBQXhCLEVBQTZDLElBQTdDLENBQWY7QUFDRDtBQVBJLEtBQVA7QUFTRCxHQVhELEVBL0g0QixDQTJJOUI7O0FBRVU1QixFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCMEIsRUFBaEIsQ0FBbUIsUUFBbkIsRUFBNkIsWUFBWTtBQUN2QyxRQUFJSSxTQUFTLEdBQUc5QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QixHQUFSLEVBQWhCO0FBQ0F2QixJQUFBQSxlQUFlLENBQUN5QixTQUFELEVBQVk5QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBQVosRUFBaUMsSUFBakMsQ0FBZjtBQUNELEdBSEQsRUE3SW9CLENBaUo5Qjs7QUFFRTVCLEVBQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTBCLEVBQWYsQ0FBa0IsUUFBbEIsRUFBNEIsWUFBWTtBQUN0QyxRQUFJSyxJQUFJLEdBQUcvQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QixHQUFSLEVBQVg7QUFDQXZCLElBQUFBLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBQUQsRUFBd0JHLElBQXhCLEVBQTZCLElBQTdCLENBQWY7QUFDRCxHQUhELEVBbko0QixDQXdKNUI7O0FBRUEsTUFBSUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxDQUFDLE1BQU1GLEdBQUcsQ0FBQ0csT0FBSixFQUFQLEVBQXNCQyxLQUF0QixDQUE0QixDQUFDLENBQTdCLENBQVY7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FBQyxPQUFPTCxHQUFHLENBQUNNLFFBQUosS0FBaUIsQ0FBeEIsQ0FBRCxFQUE2QkYsS0FBN0IsQ0FBbUMsQ0FBQyxDQUFwQyxDQUFaO0FBQ0EsTUFBSUcsS0FBSyxHQUFHUCxHQUFHLENBQUNRLFdBQUosS0FBb0IsR0FBcEIsR0FBMEJILEtBQTFCLEdBQWtDLEdBQWxDLEdBQXdDSCxHQUFwRDtBQUVBbEMsRUFBQUEsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixDQUFtQlcsS0FBbkI7QUFDQSxNQUFJVCxTQUFTLEdBQUc5QixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEIsR0FBaEIsRUFBaEI7QUFDQSxNQUFJYSxJQUFJLEdBQUcsRUFBWDtBQUNBcEMsRUFBQUEsZUFBZSxDQUFDeUIsU0FBRCxFQUFZUyxLQUFaLEVBQWtCLElBQWxCLENBQWY7QUFHQXZDLEVBQUFBLENBQUMsQ0FBQyxzQ0FBRCxDQUFELENBQTBDMEIsRUFBMUMsQ0FBNkMsT0FBN0MsRUFBc0QsSUFBdEQsRUFBNEQsWUFBWTtBQUN0RSxRQUFJZ0IsUUFBUSxHQUFHMUMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkMsUUFBUixDQUFpQixZQUFqQixDQUFmO0FBQ0EzQyxJQUFBQSxDQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2QzRDLFdBQTdDLENBQXlELFlBQXpEO0FBQ0E1QyxJQUFBQSxDQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2QzRDLFdBQTdDLENBQXlELEtBQXpEO0FBQ0E1QyxJQUFBQSxDQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2QzRDLFdBQTdDLENBQXlELE1BQXpEOztBQUVBLFFBQUksQ0FBQ0YsUUFBTCxFQUFlO0FBQ2IxQyxNQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF3QixRQUFSLENBQWlCLFlBQWpCO0FBQ0EsVUFBSXFCLFVBQVUsR0FBRzdDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUThDLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBakI7QUFDQSxVQUFJQyxNQUFNLEdBQUdGLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQixVQUFoQixFQUE0QmxDLElBQTVCLEVBQWI7QUFDQTJCLE1BQUFBLElBQUksR0FBRyxFQUFQO0FBQ0FBLE1BQUFBLElBQUksQ0FBQ1EsSUFBTCxDQUFVO0FBQ1JuQixRQUFBQSxTQUFTLEVBQUVlLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQixVQUFoQixFQUE0QmxDLElBQTVCLEVBREg7QUFFUm9DLFFBQUFBLE1BQU0sRUFBRUwsVUFBVSxDQUFDRyxJQUFYLENBQWdCLFVBQWhCLEVBQTRCbEMsSUFBNUIsRUFGQTtBQUdScUMsUUFBQUEsTUFBTSxFQUFFTixVQUFVLENBQUNHLElBQVgsQ0FBZ0IsV0FBaEIsRUFBNkJsQyxJQUE3QixFQUhBO0FBSVJzQyxRQUFBQSxFQUFFLEVBQUVQLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQixVQUFoQixFQUE0QmxDLElBQTVCLEVBSkk7QUFLUnVDLFFBQUFBLE1BQU0sRUFBRVIsVUFBVSxDQUFDRyxJQUFYLENBQWdCLFdBQWhCLEVBQTZCbEMsSUFBN0IsRUFMQTtBQU1Sd0MsUUFBQUEsSUFBSSxFQUFFVCxVQUFVLENBQUNHLElBQVgsQ0FBZ0IsV0FBaEIsRUFBNkJsQyxJQUE3QixFQU5FO0FBT1J5QyxRQUFBQSxNQUFNLEVBQUVWLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQixXQUFoQixFQUE2QmxDLElBQTdCLEVBUEE7QUFRUmlDLFFBQUFBLE1BQU0sRUFBRUYsVUFBVSxDQUFDRyxJQUFYLENBQWdCLFVBQWhCLEVBQTRCbEMsSUFBNUI7QUFSQSxPQUFWO0FBVUFkLE1BQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCRyxJQUFyQjtBQUNBSCxNQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkcsSUFBdkI7QUFDQUgsTUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJHLElBQXpCO0FBQ0FILE1BQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCRyxJQUF2QjtBQUNBSCxNQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkcsSUFBdEI7O0FBQ0EsVUFBSTRDLE1BQU0sSUFBSSxHQUFkLEVBQW1CO0FBQ2pCL0MsUUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJ3RCxHQUFyQixDQUF5QjtBQUFFLHFCQUFXO0FBQWIsU0FBekI7QUFDQXhELFFBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCUyxJQUF2QjtBQUNBVCxRQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QlMsSUFBdkI7QUFDQVQsUUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JTLElBQXRCO0FBQ0Q7O0FBQ0QsVUFBSXNDLE1BQU0sSUFBSSxHQUFkLEVBQW1CO0FBQ2pCL0MsUUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJTLElBQXpCO0FBQ0FULFFBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCUyxJQUF0QjtBQUNELE9BSEQsTUFHTztBQUNMVCxRQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlMsSUFBckI7QUFDRDtBQUNGOztBQUNELFFBQUdzQyxNQUFNLElBQUksR0FBVixJQUFpQkEsTUFBTSxJQUFJLEdBQTlCLEVBQWtDO0FBQ2xDTixNQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBRXRCMUQsUUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsVUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsVUFBQUEsR0FBRyxFQUFFLHVCQUFxQjhDLEdBQUcsQ0FBQ1IsTUFGekI7QUFHTFMsVUFBQUEsSUFBSSxFQUFFO0FBRUpULFlBQUFBLE1BQU0sRUFBRVEsR0FBRyxDQUFDUjtBQUZSLFdBSEQ7QUFRTHJDLFVBQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QmQsWUFBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXYyxJQUFYLENBQWdCQSxJQUFoQjtBQUVEO0FBWEksU0FBUDtBQWFELE9BZkM7QUFnQkg7O0FBQ0Q4QyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXBCLElBQVo7QUFFRyxHQTNERCxFQXJLNEIsQ0FrTzVCOztBQUNBekMsRUFBQUEsQ0FBQyxDQUFDLHNDQUFELENBQUQsQ0FBMEMwQixFQUExQyxDQUE2QyxVQUE3QyxFQUF5RCxJQUF6RCxFQUErRCxZQUFZO0FBQ3pFMUIsSUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI4RCxLQUFyQixDQUEyQixRQUEzQjtBQUNBOUQsSUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI4RCxLQUFyQixDQUEyQixNQUEzQjtBQUNBckIsSUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUNwQjFELE1BQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLFFBQUFBLEdBQUcsRUFBRSxlQUZBO0FBR0wrQyxRQUFBQSxJQUFJLEVBQUU7QUFDSjdCLFVBQUFBLFNBQVMsRUFBRTRCLEdBQUcsQ0FBQzVCLFNBRFg7QUFFSm9CLFVBQUFBLE1BQU0sRUFBRVEsR0FBRyxDQUFDUixNQUZSO0FBR0pDLFVBQUFBLE1BQU0sRUFBRU8sR0FBRyxDQUFDUCxNQUhSO0FBSUpJLFVBQUFBLE1BQU0sRUFBRUcsR0FBRyxDQUFDSDtBQUpSLFNBSEQ7QUFTTDFDLFFBQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QixjQUFJZCxDQUFDLENBQUNlLEVBQUYsQ0FBS0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLGtDQUEzQixDQUFKLEVBQW9FO0FBQ2xFakIsWUFBQUEsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NnQixTQUF0QyxHQUFrREUsS0FBbEQsR0FBMERDLE9BQTFEO0FBQ0Q7O0FBQ0RuQixVQUFBQSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUNHYyxJQURILENBQ1FBLElBRFIsRUFFR0UsU0FGSCxDQUVhO0FBQ1RJLFlBQUFBLGFBQWEsRUFBRSxLQUROO0FBRVRDLFlBQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixjQUF2QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlU7QUFGSCxXQUZiO0FBU0Q7QUF0QkksT0FBUDtBQXdCRCxLQXpCRDtBQTBCRCxHQTdCRCxFQW5PNEIsQ0FpUTlCOztBQUNFckIsRUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEIwQixFQUExQixDQUE2QixPQUE3QixFQUFzQyxZQUFZO0FBRWhEZSxJQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BCLFVBQUlBLEdBQUcsQ0FBQ1AsTUFBSixLQUFlLEVBQW5CLEVBQXVCO0FBQ3JCTyxRQUFBQSxHQUFHLENBQUNQLE1BQUosR0FBYSxPQUFiO0FBQ0Q7O0FBQ0QsVUFBS08sR0FBRyxDQUFDWCxNQUFKLElBQWMsR0FBbkIsRUFBdUI7QUFDdkIvQyxRQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFTLElBQWI7QUFFQVQsUUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsVUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsVUFBQUEsR0FBRyxFQUFFLDJCQUZBO0FBR0wrQyxVQUFBQSxJQUFJLEVBQUU7QUFDSjtBQUNBVCxZQUFBQSxNQUFNLEVBQUVRLEdBQUcsQ0FBQ1IsTUFGUjtBQUdKbkIsWUFBQUEsSUFBSSxFQUFFL0IsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixFQUhGO0FBSUo7QUFDQTtBQUNBO0FBQ0E7QUFDQWpCLFlBQUFBLElBQUksRUFBRztBQVJILFdBSEQ7QUFhTEUsVUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3pCZCxZQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFHLElBQWI7QUFFRUUsWUFBQUEsZUFBZSxDQUFDTCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEIsR0FBaEIsRUFBRCxFQUF3QjVCLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTRCLEdBQWYsRUFBeEIsRUFBNkMsSUFBN0MsQ0FBZjtBQUNBeEMsWUFBQUEsS0FBSyxDQUFDMkUsSUFBTixDQUFXO0FBQ1RDLGNBQUFBLElBQUksRUFBRSxTQURHO0FBRVRDLGNBQUFBLEtBQUssRUFBRTtBQUZFLGFBQVg7QUFJQWpFLFlBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2MsSUFBWCxDQUFnQkEsSUFBaEI7QUFDQWQsWUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJHLElBQXJCO0FBQ0FILFlBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCRyxJQUF2QjtBQUNBSCxZQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkcsSUFBekI7QUFDQUgsWUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJHLElBQXZCO0FBQ0FILFlBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCRyxJQUF0QjtBQUNBSCxZQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QlMsSUFBdkI7QUFDQVQsWUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJTLElBQXZCO0FBQ0FULFlBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCUyxJQUF0QjtBQUNEO0FBOUJJLFNBQVA7QUFnQ0QsT0FuQ0MsTUFvQ0U7QUFDRnJCLFFBQUFBLEtBQUssQ0FBQzJFLElBQU4sQ0FBVztBQUNUQyxVQUFBQSxJQUFJLEVBQUUsT0FERztBQUVUQyxVQUFBQSxLQUFLLEVBQUU7QUFGRSxTQUFYO0FBSUQ7QUFFQSxLQS9DRDtBQWdERCxHQWxERCxFQWxRNEIsQ0FzVDVCOztBQUVBakUsRUFBQUEsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEIwQixFQUE1QixDQUErQixPQUEvQixFQUF3QyxZQUFZO0FBQ2xEZSxJQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BCLFVBQUlBLEdBQUcsQ0FBQ1AsTUFBSixLQUFlLEVBQW5CLEVBQXVCO0FBQ3JCTyxRQUFBQSxHQUFHLENBQUNQLE1BQUosR0FBYSxPQUFiO0FBQ0Q7O0FBQ0RuRCxNQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxRQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxRQUFBQSxHQUFHLEVBQUUsMkJBRkE7QUFHTCtDLFFBQUFBLElBQUksRUFBRTtBQUNKO0FBQ0FULFVBQUFBLE1BQU0sRUFBRVEsR0FBRyxDQUFDUixNQUZSO0FBR0puQixVQUFBQSxJQUFJLEVBQUUvQixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBSEY7QUFJSjtBQUNBO0FBQ0E7QUFDQTtBQUNBakIsVUFBQUEsSUFBSSxFQUFHO0FBUkgsU0FIRDtBQWFMRSxRQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJULFVBQUFBLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBQUQsRUFBd0I1QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBQXhCLEVBQTZDLElBQTdDLENBQWY7QUFDQTVCLFVBQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2MsSUFBWCxDQUFnQkEsSUFBaEI7QUFDQWQsVUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJHLElBQXJCO0FBQ0FILFVBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCRyxJQUF2QjtBQUNBSCxVQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkcsSUFBekI7QUFDQUgsVUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJHLElBQXZCO0FBQ0FILFVBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCRyxJQUF0QjtBQUNBSCxVQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QlMsSUFBdkI7QUFDQVQsVUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJTLElBQXZCO0FBQ0FULFVBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCUyxJQUF0QjtBQUNEO0FBeEJJLE9BQVA7QUEwQkQsS0E5QkQ7QUErQkQsR0FoQ0QsRUF4VDRCLENBMFY1Qjs7QUFDQVQsRUFBQUEsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkIwQixFQUEzQixDQUE4QixPQUE5QixFQUF1QyxZQUFZO0FBQ2pEZSxJQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBRXRCUSxNQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSwrQkFBNkJULEdBQUcsQ0FBQ1IsTUFBN0MsRUFBcUQsUUFBckQ7QUFFSCxLQUpHO0FBS0gsR0FOQyxFQTNWNEIsQ0FtVzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUU7QUFDQTs7QUFDQWxELEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IwQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFZO0FBQ3hDZSxJQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBRXBCMUQsTUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsUUFBQUEsR0FBRyxFQUFFLHdCQUFzQjhDLEdBQUcsQ0FBQ1IsTUFGMUI7QUFHTFMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pULFVBQUFBLE1BQU0sRUFBRVEsR0FBRyxDQUFDUjtBQURSLFNBSEQ7QUFPTHJDLFFBQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QlQsVUFBQUEsZUFBZSxDQUFDTCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEIsR0FBaEIsRUFBRCxFQUF3QjVCLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTRCLEdBQWYsRUFBeEIsRUFBNkMsSUFBN0MsQ0FBZjtBQUVEO0FBVkksT0FBUDtBQWFILEtBZkM7QUFpQkgsR0FsQkMsRUFsWDRCLENBc1k1Qjs7QUFDQTVCLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IwQixFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFZO0FBQ3hDZSxJQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBRXBCMUQsTUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsUUFBQUEsR0FBRyxFQUFFLHVCQUFxQjhDLEdBQUcsQ0FBQ1IsTUFGekI7QUFHTFMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pULFVBQUFBLE1BQU0sRUFBRVEsR0FBRyxDQUFDUjtBQURSLFNBSEQ7QUFPTHJDLFFBQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QlQsVUFBQUEsZUFBZSxDQUFDTCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEIsR0FBaEIsRUFBRCxFQUF3QjVCLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTRCLEdBQWYsRUFBeEIsRUFBNkMsSUFBN0MsQ0FBZjtBQUVEO0FBVkksT0FBUDtBQWFILEtBZkM7QUFpQkgsR0FsQkMsRUF2WTRCLENBMlo1Qjs7QUFDQTVCLEVBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IwQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFZO0FBQ3RDZSxJQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBRXBCMUQsTUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsUUFBQUEsR0FBRyxFQUFFLHNCQUFvQjhDLEdBQUcsQ0FBQ1IsTUFGeEI7QUFHTFMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pULFVBQUFBLE1BQU0sRUFBRVEsR0FBRyxDQUFDUjtBQURSLFNBSEQ7QUFPTHJDLFFBQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QjFCLFVBQUFBLEtBQUssQ0FBQzJFLElBQU4sQ0FBVztBQUNUQyxZQUFBQSxJQUFJLEVBQUUsU0FERztBQUVUQyxZQUFBQSxLQUFLLEVBQUU7QUFGRSxXQUFYO0FBSUE1RCxVQUFBQSxlQUFlLENBQUNMLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0QixHQUFoQixFQUFELEVBQXdCNUIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixFQUF4QixFQUE2QyxJQUE3QyxDQUFmO0FBRUQ7QUFkSSxPQUFQO0FBaUJILEtBbkJDO0FBcUJILEdBdEJDLEVBNVo0QixDQW9iNUI7O0FBQ0E1QixFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCMEIsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN4Q2UsSUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUVwQjFELE1BQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLFFBQUFBLEdBQUcsRUFBRSx3QkFBc0I4QyxHQUFHLENBQUNSLE1BRjFCO0FBR0xTLFFBQUFBLElBQUksRUFBRTtBQUNKVCxVQUFBQSxNQUFNLEVBQUVRLEdBQUcsQ0FBQ1I7QUFEUixTQUhEO0FBT0xyQyxRQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJULFVBQUFBLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBQUQsRUFBd0I1QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBQXhCLEVBQTZDLElBQTdDLENBQWY7QUFFRDtBQVZJLE9BQVA7QUFhSCxLQWZDO0FBaUJILEdBbEJDLEVBcmI0QixDQXljNUI7QUFDQTs7QUFDQTVCLEVBQUFBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCMEIsRUFBOUIsQ0FBaUMsT0FBakMsRUFBMEMsWUFBWTtBQUNwRGUsSUFBQUEsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUVwQjFELE1BQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLFFBQUFBLEdBQUcsRUFBRSx1QkFBcUI4QyxHQUFHLENBQUNSLE1BRnpCO0FBR0xTLFFBQUFBLElBQUksRUFBRTtBQUNKVCxVQUFBQSxNQUFNLEVBQUVRLEdBQUcsQ0FBQ1I7QUFEUixTQUhEO0FBT0xyQyxRQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkJULFVBQUFBLGVBQWUsQ0FBQ0wsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBQUQsRUFBd0I1QixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBQXhCLEVBQTZDLElBQTdDLENBQWY7QUFFRDtBQVZJLE9BQVA7QUFhSCxLQWZDO0FBaUJILEdBbEJDLEVBM2M0QixDQThkNUI7O0FBQ0E1QixFQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQjBCLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFlBQVk7QUFDM0MsUUFBSTBDLEtBQUssR0FBR3BFLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWTRCLEdBQVosRUFBWjtBQUVBYSxJQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBRXBCMUQsTUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsUUFBQUEsR0FBRyxFQUFFLHlCQUF1QjhDLEdBQUcsQ0FBQ1IsTUFBM0IsR0FBa0MsR0FBbEMsR0FBc0NrQixLQUZ0QztBQUdMVCxRQUFBQSxJQUFJLEVBQUU7QUFDSlQsVUFBQUEsTUFBTSxFQUFFUSxHQUFHLENBQUNSO0FBRFIsU0FIRDtBQU9MckMsUUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCVCxVQUFBQSxlQUFlLENBQUNMLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0QixHQUFoQixFQUFELEVBQXdCNUIsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixFQUF4QixFQUE2QyxJQUE3QyxDQUFmO0FBRUQ7QUFWSSxPQUFQO0FBYUgsS0FmQztBQWlCSCxHQXBCQyxFQS9kNEIsQ0FvZjVCOztBQUNBNUIsRUFBQUEsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEIwQixFQUE1QixDQUErQixPQUEvQixFQUF3QyxZQUFZO0FBRWxEZSxJQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBRXBCMUQsTUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsUUFBQUEsR0FBRyxFQUFFLHNCQUFvQjhDLEdBQUcsQ0FBQ1IsTUFGeEI7QUFHTFMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pULFVBQUFBLE1BQU0sRUFBRVEsR0FBRyxDQUFDUjtBQURSLFNBSEQ7QUFPTHJDLFFBQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QlQsVUFBQUEsZUFBZSxDQUFDTCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEIsR0FBaEIsRUFBRCxFQUF3QjVCLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTRCLEdBQWYsRUFBeEIsRUFBNkMsSUFBN0MsQ0FBZjtBQUVEO0FBVkksT0FBUDtBQWFILEtBZkM7QUFpQkgsR0FuQkMsRUFyZjRCLENBMGdCOUI7O0FBQ0EsV0FBU3lDLE9BQVQsR0FBa0I7QUFDaEIsUUFBSUMsR0FBRyxHQUFDckUsUUFBUSxDQUFDc0UsaUJBQVQsQ0FBMkIsS0FBM0IsQ0FBUjs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0YsR0FBRyxDQUFDRyxNQUFuQixFQUEyQkQsQ0FBQyxFQUE1QixFQUErQjtBQUMzQixVQUFHRixHQUFHLENBQUNFLENBQUQsQ0FBSCxDQUFPN0QsSUFBUCxJQUFhLFVBQWhCLEVBQ0kyRCxHQUFHLENBQUNFLENBQUQsQ0FBSCxDQUFPRSxPQUFQLEdBQWUsSUFBZjtBQUNQO0FBQ0Y7O0FBQ0QsV0FBU0MsUUFBVCxHQUFtQjtBQUNqQixRQUFJTCxHQUFHLEdBQUNyRSxRQUFRLENBQUNzRSxpQkFBVCxDQUEyQixLQUEzQixDQUFSOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDRixHQUFHLENBQUNHLE1BQW5CLEVBQTJCRCxDQUFDLEVBQTVCLEVBQStCO0FBQzNCLFVBQUdGLEdBQUcsQ0FBQ0UsQ0FBRCxDQUFILENBQU83RCxJQUFQLElBQWEsVUFBaEIsRUFDSTJELEdBQUcsQ0FBQ0UsQ0FBRCxDQUFILENBQU9FLE9BQVAsR0FBZSxLQUFmO0FBRVA7QUFDRjs7QUFDRDFFLEVBQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIwQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFZO0FBQ3pDa0QsSUFBQUEsS0FBSyxDQUFDLElBQUQsQ0FBTDtBQUNBUCxJQUFBQSxPQUFPLEdBRmtDLENBRTdCO0FBRVgsR0FKRDtBQUtBckUsRUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQjBCLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDM0NrRCxJQUFBQSxLQUFLLENBQUMsSUFBRCxDQUFMO0FBQ0FELElBQUFBLFFBQVEsR0FGbUMsQ0FFOUI7QUFFWixHQUpELEVBL2hCOEIsQ0FvaUI1QjtBQUNGOztBQUVBM0UsRUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUIwQixFQUF6QixDQUE0QixPQUE1QixFQUFxQyxZQUFZO0FBRS9DLFFBQUkwQixFQUFFLEdBQUdwRCxDQUFDLENBQUMsS0FBRCxDQUFELENBQVM0QixHQUFULEVBQVQ7QUFDQSxRQUFJaUQsRUFBRSxHQUFHN0UsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFTNEIsR0FBVCxFQUFUO0FBQ0EsUUFBSUcsSUFBSSxHQUFHL0IsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFlNEIsR0FBZixFQUFYO0FBQ0E1QixJQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxNQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxNQUFBQSxHQUFHLEVBQUUsYUFGQTtBQUdMK0MsTUFBQUEsSUFBSSxFQUFFO0FBQ0pQLFFBQUFBLEVBQUUsRUFBRUEsRUFEQTtBQUVKeUIsUUFBQUEsRUFBRSxFQUFFQSxFQUZBO0FBR0o5QyxRQUFBQSxJQUFJLEVBQUVBO0FBSEYsT0FIRDtBQVNMbEIsTUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCLFlBQUlkLENBQUMsQ0FBQ2UsRUFBRixDQUFLQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkIsbUJBQTNCLENBQUosRUFBcUQ7QUFDbkRqQixVQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QmdCLFNBQXZCLEdBQW1DRSxLQUFuQyxHQUEyQ0MsT0FBM0M7QUFDRDs7QUFDRG5CLFFBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQ0djLElBREgsQ0FDUUEsSUFEUixFQUVHRSxTQUZILENBRWE7QUFDVEksVUFBQUEsYUFBYSxFQUFFLEtBRE47QUFFVEMsVUFBQUEsVUFBVSxFQUFFLENBQ1YsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLGNBQXRCLENBRFUsRUFFVixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsS0FBdEIsQ0FGVSxDQUZIO0FBTVQsdUJBQWE7QUFOSixTQUZiO0FBVUQ7QUF2QkksS0FBUDtBQTBCRCxHQS9CRCxFQXZpQjhCLENBdWtCOUI7O0FBRUFyQixFQUFBQSxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQjBCLEVBQTFCLENBQTZCLE9BQTdCLHVFQUFzQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRzVCRSxZQUFBQSxHQUg0QixHQUd0QixFQUhzQjtBQUloQzVCLFlBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCOEUsSUFBdkIsQ0FBNEIsVUFBU04sQ0FBVCxFQUFXO0FBQ3JDNUMsY0FBQUEsR0FBRyxDQUFDNEMsQ0FBRCxDQUFILEdBQVN4RSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QixHQUFSLEVBQVQ7QUFDRCxhQUZEO0FBSmdDLDJCQU9mQSxHQVBlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT3hCbUQsWUFBQUEsS0FQd0I7QUFBQTtBQUFBO0FBQUEsbUJBZWpCL0UsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDcEJDLGNBQUFBLElBQUksRUFBRSxNQURjO0FBRXBCQyxjQUFBQSxHQUFHLEVBQUUsMkJBRmU7QUFHcEIrQyxjQUFBQSxJQUFJLEVBQUU7QUFDSlQsZ0JBQUFBLE1BQU0sRUFBRTZCLEtBREo7QUFFSmhELGdCQUFBQSxJQUFJLEVBQUUvQixDQUFDLENBQUMsV0FBRCxDQUFELENBQWU0QixHQUFmLEVBRkY7QUFHSmpCLGdCQUFBQSxJQUFJLEVBQUc7QUFISCxlQUhjLENBUTVCO0FBQ0E7QUFDQTtBQUNBOztBQVg0QixhQUFQLENBZmlCOztBQUFBO0FBZWhDcUUsWUFBQUEsTUFmZ0M7QUE2QnJDZCxZQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSwrQkFBNkJhLE1BQXpDLEVBQWlELFFBQWpEO0FBN0JxQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQStCaENwQixZQUFBQSxPQUFPLENBQUNxQixLQUFSOztBQS9CZ0M7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdEMsSUF6a0I4QixDQWluQjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRTs7QUFFQWpGLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IwQixFQUFsQixDQUFxQixRQUFyQixFQUErQixZQUFZO0FBQ3pDLFFBQUlDLGFBQWEsR0FBRzNCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRCLEdBQVIsRUFBcEI7QUFDQTVCLElBQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLE1BQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLE1BQUFBLEdBQUcsRUFBRSx3QkFBd0JlLGFBRnhCO0FBR0xkLE1BQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QmQsUUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmMsSUFBbEIsQ0FBdUJBLElBQXZCO0FBQ0FkLFFBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J5QixJQUFsQixDQUF1QixlQUF2QixFQUF3QyxDQUF4QztBQUVBekIsUUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsVUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsVUFBQUEsR0FBRyxFQUFFLHdCQUF3QlosQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQjRCLEdBQWxCLEVBRnhCO0FBR0xmLFVBQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QmQsWUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmMsSUFBbEIsQ0FBdUJBLElBQXZCO0FBQ0FkLFlBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J5QixJQUFsQixDQUF1QixlQUF2QixFQUF3QyxDQUF4QztBQUNBSCxZQUFBQSw0QkFBNEIsQ0FBQ3RCLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0I0QixHQUFsQixFQUFELENBQTVCO0FBR0Q7QUFUSSxTQUFQO0FBV0Q7QUFsQkksS0FBUDtBQW9CRCxHQXRCRCxFQWpwQjRCLENBd3FCNUI7O0FBRUE1QixFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCMEIsRUFBbEIsQ0FBcUIsUUFBckIsRUFBK0IsWUFBWTtBQUN6QyxRQUFJRyxTQUFTLEdBQUc3QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QixHQUFSLEVBQWhCO0FBQ0E1QixJQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxNQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxNQUFBQSxHQUFHLEVBQUUsd0JBQXdCaUIsU0FGeEI7QUFHTGhCLE1BQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QmQsUUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmMsSUFBbEIsQ0FBdUJBLElBQXZCO0FBQ0FkLFFBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0J5QixJQUFsQixDQUF1QixlQUF2QixFQUF3QyxDQUF4QztBQUNBSCxRQUFBQSw0QkFBNEIsQ0FBQ3RCLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0I0QixHQUFsQixFQUFELENBQTVCO0FBRUQ7QUFSSSxLQUFQO0FBVUQsR0FaRCxFQTFxQjRCLENBdXJCNUI7O0FBRUE1QixFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCMEIsRUFBbEIsQ0FBcUIsUUFBckIsRUFBK0IsWUFBWTtBQUN6QyxRQUFJSSxTQUFTLEdBQUc5QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE0QixHQUFSLEVBQWhCO0FBQ0FOLElBQUFBLDRCQUE0QixDQUFDUSxTQUFELENBQTVCO0FBRUQsR0FKRCxFQXpyQjRCLENBa3NCOUI7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUM7O0FBQ0E5QixFQUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QmtGLEtBQTlCLENBQW9DLFlBQVU7QUFFN0MsUUFBSUMsRUFBRSxHQUFHbkYsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUI0QixHQUF6QixFQUFUO0FBQ0EsUUFBSXdELElBQUksR0FBR3BGLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCNEIsR0FBekIsRUFBWDtBQUNBLFFBQUl5RCxPQUFPLEdBQUdyRixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCNEIsR0FBbEIsRUFBZDtBQUNBLFFBQUlDLFNBQVMsR0FBRzdCLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0I0QixHQUFsQixFQUFoQjtBQUNBLFFBQUlFLFNBQVMsR0FBRzlCLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0I0QixHQUFsQixFQUFoQjtBQUdBLFFBQUkwRCxHQUFHLEdBQUl0RixDQUFDLENBQUMsNEJBQUQsQ0FBRCxDQUFnQzRCLEdBQWhDLEVBQVgsQ0FUNkMsQ0FXckM7O0FBQ0RoQixJQUFBQSxHQUFHLEdBQUcsaUNBQStCdUUsRUFBL0IsR0FBa0MsUUFBbEMsR0FBMkNDLElBQTNDLEdBQWdELGFBQWhELEdBQThEdkQsU0FBOUQsR0FBd0UsYUFBeEUsR0FBc0ZDLFNBQXRGLEdBQWdHLFdBQWhHLEdBQTRHdUQsT0FBNUcsR0FBb0gsT0FBcEgsR0FBNEhDLEdBQTVILEdBQWdJLGFBQXRJO0FBQ0FELElBQUFBLE9BQU87QUFDUG5CLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZdkQsR0FBWjtBQUdJLEdBakJaLEVBdHRCNkIsQ0F3dUI1Qjs7QUFFQVosRUFBQUEsQ0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkMwQixFQUEzQyxDQUE4QyxVQUE5QyxFQUEwRCxJQUExRCxFQUFnRSxZQUFZO0FBQUE7O0FBRTFFO0FBQ0NlLElBQUFBLElBQUksQ0FBQ2dCLE9BQUwsQ0FBYSxVQUFDQyxHQUFELEVBQVM7QUFFcEIsVUFBSUEsR0FBRyxDQUFDWCxNQUFKLElBQWMsQ0FBbEIsRUFBcUI7QUFDcEIvQyxRQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjhELEtBQXpCLENBQStCLFFBQS9CO0FBQ0E5RCxRQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjhELEtBQXpCLENBQStCLE1BQS9CO0FBQ0EsWUFBSXlCLFlBQVksR0FBR3ZGLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBUThDLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBbkI7QUFDQSxZQUFJMEMsV0FBVyxHQUFHRCxZQUFZLENBQUN2QyxJQUFiLENBQWtCLFVBQWxCLEVBQThCbEMsSUFBOUIsRUFBbEI7QUFDQWQsUUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsVUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsVUFBQUEsR0FBRyxFQUFFLG1CQUZBO0FBR0wrQyxVQUFBQSxJQUFJLEVBQUU7QUFDSjhCLFlBQUFBLFFBQVEsRUFBRUQsV0FETjtBQUVKdEMsWUFBQUEsTUFBTSxFQUFFUSxHQUFHLENBQUNSO0FBRlIsV0FIRDtBQVFMckMsVUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCZCxZQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmMsSUFBckIsQ0FBMEJBLElBQTFCO0FBRUQ7QUFYSSxTQUFQO0FBYUE7QUFJSCxLQXhCQTtBQXlCRixHQTVCRCxFQTF1QjRCLENBeXdCNUI7O0FBRUFkLEVBQUFBLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCMEIsRUFBekIsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBWTtBQUMvQyxRQUFJZ0UsTUFBTSxHQUFHLENBQWI7O0FBQ0EsUUFBSTFGLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCMkYsRUFBckIsQ0FBd0IsVUFBeEIsQ0FBSixFQUF5QztBQUN2Q0QsTUFBQUEsTUFBTSxHQUFHLENBQVQ7QUFFRDs7QUFFRDFGLElBQUFBLENBQUMsQ0FBQ1UsSUFBRixDQUFPO0FBQ0xDLE1BQUFBLElBQUksRUFBRSxNQUREO0FBRUxDLE1BQUFBLEdBQUcsRUFBRSwwQkFGQTtBQUdMK0MsTUFBQUEsSUFBSSxFQUFFO0FBQ0o4QixRQUFBQSxRQUFRLEVBQUV6RixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CNEIsR0FBbkIsRUFETjtBQUVKc0IsUUFBQUEsTUFBTSxFQUFFbEQsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBRko7QUFHSmdFLFFBQUFBLE9BQU8sRUFBRTVGLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CNEIsR0FBcEIsRUFITDtBQUlKaUUsUUFBQUEsU0FBUyxFQUFFN0YsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjRCLEdBQWhCLEVBSlA7QUFLSmtFLFFBQUFBLEdBQUcsRUFBRTlGLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTRCLEdBQVYsRUFMRDtBQU1KOEQsUUFBQUEsTUFBTSxFQUFFQTtBQU5KLE9BSEQ7QUFZTDdFLE1BQUFBLE9BQU8sRUFBRSxpQkFBVUMsSUFBVixFQUFnQjtBQUN2QjJCLFFBQUFBLElBQUksQ0FBQ2dCLE9BQUwsQ0FBYSxVQUFDQyxHQUFELEVBQVM7QUFDcEIxRCxVQUFBQSxDQUFDLENBQUNVLElBQUYsQ0FBTztBQUNMQyxZQUFBQSxJQUFJLEVBQUUsTUFERDtBQUVMQyxZQUFBQSxHQUFHLEVBQUUsZUFGQTtBQUdMK0MsWUFBQUEsSUFBSSxFQUFFO0FBQ0o3QixjQUFBQSxTQUFTLEVBQUU0QixHQUFHLENBQUM1QixTQURYO0FBRUpvQixjQUFBQSxNQUFNLEVBQUVRLEdBQUcsQ0FBQ1IsTUFGUjtBQUdKQyxjQUFBQSxNQUFNLEVBQUVPLEdBQUcsQ0FBQ1AsTUFIUjtBQUlKSSxjQUFBQSxNQUFNLEVBQUVHLEdBQUcsQ0FBQ0g7QUFKUixhQUhEO0FBU0wxQyxZQUFBQSxPQUFPLEVBQUUsaUJBQVVDLElBQVYsRUFBZ0I7QUFDdkIsa0JBQUlkLENBQUMsQ0FBQ2UsRUFBRixDQUFLQyxTQUFMLENBQWVDLFdBQWYsQ0FBMkIsa0NBQTNCLENBQUosRUFBb0U7QUFDbEVqQixnQkFBQUEsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NnQixTQUF0QyxHQUFrREUsS0FBbEQsR0FBMERDLE9BQTFEO0FBQ0Q7O0FBQ0RuQixjQUFBQSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUNHYyxJQURILENBQ1FBLElBRFIsRUFFR0UsU0FGSCxDQUVhO0FBQ1RJLGdCQUFBQSxhQUFhLEVBQUUsS0FETjtBQUVUQyxnQkFBQUEsVUFBVSxFQUFFLENBQ1YsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxHQUFiLEVBQWtCLEdBQWxCLEVBQXVCLGNBQXZCLENBRFUsRUFFVixDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsR0FBakIsRUFBc0IsS0FBdEIsQ0FGVTtBQUZILGVBRmI7QUFTRDtBQXRCSSxXQUFQO0FBd0JELFNBekJEO0FBMEJBckIsUUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUI4RCxLQUF6QixDQUErQixRQUEvQjtBQUNBOUQsUUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUI4RCxLQUF6QixDQUErQixNQUEvQjtBQUVEO0FBMUNJLEtBQVA7QUE0Q0QsR0FuREQsRUEzd0I0QixDQWcwQjVCOztBQUVBOUQsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IwQixFQUFwQixDQUF1QixPQUF2QixFQUFnQyxZQUFZO0FBRTlDZSxJQUFBQSxJQUFJLENBQUNnQixPQUFMLENBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BCLFVBQUlBLEdBQUcsQ0FBQ1gsTUFBSixJQUFjLENBQWxCLEVBQXFCO0FBRXZCL0MsUUFBQUEsQ0FBQyxDQUFDVSxJQUFGLENBQU87QUFDTEMsVUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTEMsVUFBQUEsR0FBRyxFQUFFLG9CQUZBO0FBR0wrQyxVQUFBQSxJQUFJLEVBQUU7QUFDSm9DLFlBQUFBLEtBQUssRUFBRS9GLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0QixHQUFoQixFQURIO0FBRUpHLFlBQUFBLElBQUksRUFBRS9CLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZTRCLEdBQWYsRUFGRjtBQUdKd0IsWUFBQUEsRUFBRSxFQUFFTSxHQUFHLENBQUNOO0FBSEosV0FIRDtBQVFMdkMsVUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCLGdCQUFJZCxDQUFDLENBQUNlLEVBQUYsQ0FBS0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLGtDQUEzQixDQUFKLEVBQW9FO0FBQ2xFakIsY0FBQUEsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NnQixTQUF0QyxHQUFrREUsS0FBbEQsR0FBMERDLE9BQTFEO0FBQ0Q7O0FBQ0RuQixZQUFBQSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUNHYyxJQURILENBQ1FBLElBRFIsRUFFR0UsU0FGSCxDQUVhO0FBQ1RJLGNBQUFBLGFBQWEsRUFBRSxLQUROO0FBRVRDLGNBQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixjQUF2QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlU7QUFGSCxhQUZiO0FBU0Q7QUFyQkksU0FBUDtBQXVCQztBQUNFLEtBM0JIO0FBNEJHLEdBOUJELEVBbDBCNEIsQ0FtMkI1Qjs7QUFFRnJCLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JnRyxPQUFsQjtBQUNBaEcsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmdHLE9BQWxCO0FBQ0FoRyxFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCZ0csT0FBbEI7QUFDQWhHLEVBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJnRyxPQUFuQjtBQUNDLENBejJCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Fzc2lkdWl0ZS9hc3NpZHVpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICB0b2FzdDogdHJ1ZSxcclxuICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXHJcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gIHRpbWVyOiAzMDAwLFxyXG4gIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBTd2FsLnN0b3BUaW1lcik7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcclxuICB9LFxyXG59KTtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICBcclxuICAkKFwiLmxvYWRlclwiKS5oaWRlKCk7XHJcbiAgLy8gJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikuaGlkZSgpO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBkYXRhdGFibGUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgdmFyIHRhYmxlRGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZWFuY2VhZmZpY2hhZ2UodmFyMSwgdmFyMiwgdmFyMykge1xyXG4gICAgICAgICQoXCIubG9hZGVyXCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvU2VhbmNlX2FmZi9cIiArIHZhcjEgKyBcIi9cIiArIHZhcjIgKyBcIi9cIiArIHZhcjMsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIi5sb2FkZXJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gdmFyMTtcclxuICAgICAgICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duLWV0ZGlhbnRzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKHZhcjEpIHtcclxuXHJcbiAgICAgICAgICAkKFwiLmxvYWRlclwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvZXR1ZF9hZmZfc2l0dWF0aW9uL1wiICsgdmFyMSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgICQoXCIubG9hZGVyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAkKFwiI0V0X3NpdHVhdGlvblwiKS5odG1sKGh0bWwpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhcjE7XHJcbiAgICAgICAgICB9XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBoaWdobGlnaHQoKSB7fVxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsxMywgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9zaXR1YXRpb25cIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIuZGF0YVRhYmxlc19sZW5ndGhcIikuYWRkQ2xhc3MoXCJicy1zZWxlY3RcIik7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLyAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZHJvcGRvd24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNldGFibGlzc2VtZW50XCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICQoXCIjZm9ybWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICQoXCIjcHJvbW90aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd24tc2l0dWF0aW9uLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICQoXCIjRV9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgJChcIiNGX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAkKFwiI1Bfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZXRhYmxpc3NlbWVudC8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGV0YWJsaXNzZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL0Zvcm1hdGlvbl9hZmYvXCIgKyBldGFibGlzc2VtZW50LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgJChcIiNmb3JtYXRpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgICAgICAgJChcIiNmb3JtYXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyAkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9tb3Rpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vRm9tYXRpb24vLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjZm9ybWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyBmb3JtYXRpb24sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIiNwcm9tb3Rpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vUHJvbW90aW9uLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHByb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIHNlYW5jZWFmZmljaGFnZShwcm9tb3Rpb24sICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICB9KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vRGF0ZS8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNkYXRldGltZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksIGRhdGUsJ0NSJyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBkYXRlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciBkYXkgPSAoXCIwXCIgKyBub3cuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XHJcbiAgdmFyIG1vbnRoID0gKFwiMFwiICsgKG5vdy5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcclxuICB2YXIgdG9kYXkgPSBub3cuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuXHJcbiAgJChcIiNkYXRldGltZVwiKS52YWwodG9kYXkpO1xyXG4gIHZhciBwcm9tb3Rpb24gPSAkKFwiI3Byb21vdGlvblwiKS52YWwoKTtcclxuICBsZXQgbGlzdCA9IFtdO1xyXG4gIHNlYW5jZWFmZmljaGFnZShwcm9tb3Rpb24sIHRvZGF5LCdDUicpO1xyXG5cclxuXHJcbiAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS5oYXNDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlIHRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUgdHJcIikucmVtb3ZlQ2xhc3MoXCJvZGRcIik7XHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlIHRyXCIpLnJlbW92ZUNsYXNzKFwiZXZlblwiKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgICB2YXIgY3VycmVudFJvdyA9ICQodGhpcykuY2xvc2VzdChcInRyXCIpO1xyXG4gICAgICB2YXIgc3RhdHV0ID0gY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMSlcIikuaHRtbCgpO1xyXG4gICAgICBsaXN0ID0gW107XHJcbiAgICAgIGxpc3QucHVzaCh7XHJcbiAgICAgICAgcHJvbW90aW9uOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgyKVwiKS5odG1sKCksXHJcbiAgICAgICAgc2VhbmNlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgzKVwiKS5odG1sKCksXHJcbiAgICAgICAgZ3JvdXBlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxMClcIikuaHRtbCgpLFxyXG4gICAgICAgIGhkOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg4KVwiKS5odG1sKCksXHJcbiAgICAgICAgbW9kdWxlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxNClcIikuaHRtbCgpLFxyXG4gICAgICAgIHNhbGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDE1KVwiKS5odG1sKCksXHJcbiAgICAgICAgZXhpc3RlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxMSlcIikuaHRtbCgpLFxyXG4gICAgICAgIHN0YXR1dDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMSlcIikuaHRtbCgpLFxyXG4gICAgICB9KTtcclxuICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuaGlkZSgpO1xyXG4gICAgICBpZiAoc3RhdHV0ID09ICcxJykge1xyXG4gICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwibm9uZVwiIH0pO1xyXG4gICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXR1dCA9PSAnMicpIHtcclxuICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihzdGF0dXQgPT0gJzEnIHx8IHN0YXR1dCA9PSAnMicpe1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvY291bnRfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgIFxyXG4gICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiLmdyaWRcIikuaHRtbChodG1sKTtcclxuXHJcbiAgICAgIH1cclxuICB9KTtcclxuICB9KTtcclxufVxyXG5jb25zb2xlLmxvZyhsaXN0KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogcG9wIHVwIGV0dWRpYW50IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLm9uKFwiZGJsY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2V0dWRpYW50LW1vZGFsXCIpLm1vZGFsKFwidG9nZ2xlXCIpO1xyXG4gICAgJChcIiNldHVkaWFudC1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL0V0dWRfYWZmXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZ3JvdXBlOiBvYmouZ3JvdXBlLFxyXG4gICAgICAgICAgZXhpc3RlOiBvYmouZXhpc3RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKVxyXG4gICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICBbMjUsIDUwLCA3NSwgMTAwLCAxMjUsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHRyYWl0ZW1lbnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICN0cmFpdGVfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICBpZiAob2JqLmdyb3VwZSA9PT0gXCJcIikge1xyXG4gICAgICAgIG9iai5ncm91cGUgPSBcImVtcHR5XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCBvYmouc3RhdHV0ICE9ICcxJyl7XHJcbiAgICAgICQoXCIubG9hZGVyXCIpLnNob3coKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvdHJhaXRlbWVudF9hc3NpZHVpdGVcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAvLyBwcm9tb3Rpb246IG9iai5wcm9tb3Rpb24sXHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgICBkYXRlOiAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLFxyXG4gICAgICAgICAgLy8gaGQ6IG9iai5oZCxcclxuICAgICAgICAgIC8vIG1vZHVsZTogb2JqLm1vZHVsZSxcclxuICAgICAgICAgIC8vIGdyb3VwZTogb2JqLmdyb3VwZSxcclxuICAgICAgICAgIC8vIHNhbGU6IG9iai5zYWxlLFxyXG4gICAgICAgICAgdHlwZSA6ICd0cmFpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiLmxvYWRlclwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzZWFuY2UgdHJhaXTDqSBhdmVjIHN1Y2NlcycsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICQoXCIuZ3JpZFwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICB0aXRsZTogJ3NlYW5jZSBkZWphIHRyYWl0w6knLFxyXG4gICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiByZXRyYWl0ZXIgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuXHJcbiAgJChcImJvZHkgI3JldHJhaXRlcl9zZWFuY2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICBpZiAob2JqLmdyb3VwZSA9PT0gXCJcIikge1xyXG4gICAgICAgIG9iai5ncm91cGUgPSBcImVtcHR5XCI7XHJcbiAgICAgIH1cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS90cmFpdGVtZW50X2Fzc2lkdWl0ZVwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC8vIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgICAgICAvLyBoZDogb2JqLmhkLFxyXG4gICAgICAgICAgLy8gbW9kdWxlOiBvYmoubW9kdWxlLFxyXG4gICAgICAgICAgLy8gZ3JvdXBlOiBvYmouZ3JvdXBlLFxyXG4gICAgICAgICAgLy8gc2FsZTogb2JqLnNhbGUsXHJcbiAgICAgICAgICB0eXBlIDogJ3JldHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAkKFwiLmdyaWRcIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGZldWlsZSBwZGYgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjYXNzaWR1aXRlX3ByaW50XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZi8nK29iai5zZWFuY2UsICdfYmxhbmsnKTtcclxuXHJcbn0pO1xyXG59KTtcclxuXHJcbi8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLyAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogc2l0dWF0aW9uIHByZXNlbnRpbCBwZGYgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuLy8gICAkKFwiYm9keSAjc2l0dWF0aW9uX3ByZXNlbnRpZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAvLyBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4vLyAgICAgICB2YXIgZXR1ZGlhbnQgPSAkKFwiI0V0X3NpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gICAgICAgLy8gdmFyIGRhdGVfZGVidXQgPSAkKFwiI2RhdGV0aW1lRHNpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gICAgICAgLy8gdmFyIGRhdGVfZmluID0gJChcIiNkYXRldGltZUZzaXR1YXRpb25cIikudmFsKCk7XHJcblxyXG4vLyAgICAgd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGZfcHJlc2VudGllbC8nK2V0dWRpYW50LCAnX2JsYW5rJyk7XHJcblxyXG4vLyAvLyB9KTtcclxuLy8gfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHJlbW92ZSBzZWFuY2UgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3JlbW92ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3JlbW92ZV9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGV4aXN0ZSAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjZXhpc3RlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvZXhpc3Rfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBzaWduICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNzaWduXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvc2lnbl9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnc2VhbmNlIHNpZ27DqScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogY2FuY2VsICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNjYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9jYW5jZWxfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZGV2ZXJvdSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNkZXZlcm91aWxsZXItbW9kYWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9kZXZlcl9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogbW9kaWZpZXJfc2FsbGUgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjbW9kaXNhbGxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNhbGxlID0gJChcIiNzYWxsZVwiKS52YWwoKTtcclxuICAgIFxyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvbW9kaWZpZXJfc2FsbGUvXCIrb2JqLnNlYW5jZStcIi9cIitzYWxsZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogbW9kaWZpZXJfc2FsbGUgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjdmVyb3VpbGxlci1tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvbG9ja19zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFybG90IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiBzZWxlY3RzKCl7ICBcclxuICB2YXIgZWxlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjaGsnKTsgIFxyXG4gIGZvcih2YXIgaT0wOyBpPGVsZS5sZW5ndGg7IGkrKyl7ICBcclxuICAgICAgaWYoZWxlW2ldLnR5cGU9PSdjaGVja2JveCcpICBcclxuICAgICAgICAgIGVsZVtpXS5jaGVja2VkPXRydWU7ICBcclxuICB9ICBcclxufSAgXHJcbmZ1bmN0aW9uIGRlU2VsZWN0KCl7ICBcclxuICB2YXIgZWxlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjaGsnKTsgIFxyXG4gIGZvcih2YXIgaT0wOyBpPGVsZS5sZW5ndGg7IGkrKyl7ICBcclxuICAgICAgaWYoZWxlW2ldLnR5cGU9PSdjaGVja2JveCcpICBcclxuICAgICAgICAgIGVsZVtpXS5jaGVja2VkPWZhbHNlOyAgXHJcbiAgICAgICAgXHJcbiAgfSAgXHJcbn0gICAgICAgICAgXHJcbiQoXCJib2R5ICNjaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuYWxlcnQoJ29rJyk7XHJcbnNlbGVjdHMoKTsgIC8vICQoXCIjcGFybG90X21vZGFsXCIpLnNob3coKTtcclxuIFxyXG59KTtcclxuJChcImJvZHkgI3VuY2hlY2tcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbmFsZXJ0KCdvaycpO1xyXG5kZVNlbGVjdCgpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xyXG4gXHJcbn0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFybG90X2hkLWYgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKFwiYm9keSAjcGFybG90X3NlYXJjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gIHZhciBoZCA9ICQoXCIjaGRcIikudmFsKCk7XHJcbiAgdmFyIGhmID0gJChcIiNoZlwiKS52YWwoKTtcclxuICB2YXIgZGF0ZSA9ICQoXCIjZGF0ZXRpbWVcIikudmFsKCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBcIi9hcGkvcGFybG90XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGhkOiBoZCxcclxuICAgICAgaGY6IGhmLFxyXG4gICAgICBkYXRlOiBkYXRlLFxyXG4gICAgIFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNwYXJsb3RfZGF0YXRhYmxlXCIpKSB7XHJcbiAgICAgICAgJChcIiNwYXJsb3RfZGF0YXRhYmxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCIjcGFybG90X2RhdGF0YWJsZVwiKVxyXG4gICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuIFxyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFybG90X3RyYWl0ZW1lbnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKFwiYm9keSAjcGFybG90X3RyYWl0ZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiBcclxuICBsZXQgcmVzdWx0O1xyXG4gICAgICB2YXIgdmFsID0gW107XHJcbiAgICAgICQoJzpjaGVja2JveDpjaGVja2VkJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICB2YWxbaV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgZm9yKGxldCB2YWx1ZSBvZiB2YWwpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2ltcG9ydCcsIHtcclxuICAgICAgLy8gICBzZWFuY2U6IHZhbHVlLFxyXG4gICAgICAvLyAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgIC8vICAgdHlwZSA6ICd0cmFpdGUnLFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIHJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvdHJhaXRlbWVudF9hc3NpZHVpdGVcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IHZhbHVlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIHR5cGUgOiAndHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4vLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbi8vIGFsZXJ0KGh0bWwpO1xyXG4vLyAgICAgLy8gd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGYvJytodG1sLCAnX2JsYW5rJyk7XHJcbi8vICAgfSxcclxuXHJcbiAgICAgIH0pO1xyXG4gd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGYvJytyZXN1bHQsICdfYmxhbmsnKTtcclxufSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vLyAkKFwiYm9keSAjc2l0dWF0aW9uX3NlYXJjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gZXR1ZGlhbnQgPSAkKFwiI0V0X3NpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gZGF0ZWQgPSAkKFwiI2RhdGV0aW1lRHNpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gZGF0ZWYgPSAkKFwiI2RhdGV0aW1lRnNpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gJC5hamF4KHtcclxuLy8gICB0eXBlOiBcIlBPU1RcIixcclxuLy8gICB1cmw6IFwiL2FwaS9hZmZfc2l0dWF0aW9uXCIsXHJcbi8vICAgZGF0YToge1xyXG4vLyAgICAgZXR1ZGlhbnQgOiBldHVkaWFudCxcclxuLy8gICAgIGRhdGVkIDogZGF0ZWQsXHJcbi8vICAgICBkYXRlZiA6IGRhdGVmICxcclxuLy8gICB9LFxyXG4vLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbi8vICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKSkge1xyXG4vLyAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9zaXR1YXRpb25cIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbi8vICAgICB9XHJcbi8vICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9zaXR1YXRpb25cIilcclxuLy8gICAgICAgLmh0bWwoaHRtbClcclxuLy8gICAgICAgLkRhdGFUYWJsZSh7XHJcbi8vICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbi8vICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4vLyAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuLy8gICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4vLyAgICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH0pO1xyXG4vLyB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vZXRhYmxpc3NlbWVudC8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNFX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXRhYmxpc3NlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvRm9ybWF0aW9uX2FmZi9cIiArIGV0YWJsaXNzZW1lbnQsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIiNGX3NpdHVhdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICQoXCIjRl9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyAkKFwiI0Zfc2l0dWF0aW9uXCIpLnZhbCgpLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgJChcIiNQX3NpdHVhdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgICAgICBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKCQoXCIjUF9zaXR1YXRpb25cIikudmFsKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vRm9tYXRpb24vLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjRl9zaXR1YXRpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvUHJvbW90aW9uX2FmZi9cIiArIGZvcm1hdGlvbixcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgJChcIiNQX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAgICAgICBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKCQoXCIjUF9zaXR1YXRpb25cIikudmFsKCkpO1xyXG5cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vL1Byb21vdGlvbi8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNQX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UocHJvbW90aW9uKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuIFxyXG4gICAgICAgICAgICBcclxuLy8gIC8vLy8vLy8vLy8vLy8vLy8vL2V4dHJhY3Rpb24vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLyAgJCgnI2NyZWF0ZV9leHRyYWN0aW9uJykuY2xpY2soZnVuY3Rpb24oKXsgXHJcblxyXG4vLyAgIHZhciB0byA9ICQoJyNkYXRldGltZUZzaXR1YXRpb24nKS52YWwoKTtcclxuLy8gICB2YXIgZnJvbSA9ICQoJyNkYXRldGltZURzaXR1YXRpb24nKS52YWwoKTtcclxuLy8gICB2YXIgc2VydmljZSA9ICQoJyNFX3NpdHVhdGlvbicpLnZhbCgpO1xyXG4vLyAgIHZhciBmb3JtYXRpb24gPSAkKCcjRl9zaXR1YXRpb24nKS52YWwoKTtcclxuLy8gICB2YXIgcHJvbW90aW9uID0gJCgnI1Bfc2l0dWF0aW9uJykudmFsKCk7XHJcblxyXG5cclxuLy8gICB2YXIgdG91ID0gICQoJ2lucHV0W25hbWU9XCJ0b3VzXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICBcclxuLy8gICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJ7eyBwYXRoKCdleHRyYWN0aW9uJykgfX0/VG89XCIrdG8rXCImRnJvbT1cIitmcm9tO1xyXG4vLyAgICAgICAgICB1cmwgPSBcIi9hcGkvZ2VuZXJhdGVfZXh0cmFjdGlvbj9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb20rXCImZm9ybWF0aW9uPVwiK2Zvcm1hdGlvbitcIiZwcm9tb3Rpb249XCIrcHJvbW90aW9uK1wiJlNlcnZpY2U9XCIrc2VydmljZStcIiZUb3U9XCIrdG91K1wiJnR5cGU9bm9ybWFsXCI7O1xyXG4vLyAgICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICAgICAgIFxyXG5cclxuLy8gICAgICAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAvLy8vLy8vLy8vLy8vLy8vLy9leHRyYWN0aW9uIHN0YWdlLy8vLy8vLy8vLy8vLy8vLzpcclxuICQoJyNjcmVhdGVfZXh0cmFjdGlvbl9zdGFnZScpLmNsaWNrKGZ1bmN0aW9uKCl7IFxyXG5cclxuICB2YXIgdG8gPSAkKCcjZGF0ZXRpbWVGc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgdmFyIGZyb20gPSAkKCcjZGF0ZXRpbWVEc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgdmFyIHNlcnZpY2UgPSAkKCcjRV9zaXR1YXRpb24nKS52YWwoKTtcclxuICB2YXIgZm9ybWF0aW9uID0gJCgnI0Zfc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgdmFyIHByb21vdGlvbiA9ICQoJyNQX3NpdHVhdGlvbicpLnZhbCgpO1xyXG5cclxuXHJcbiAgdmFyIHRvdSA9ICAkKCdpbnB1dFtuYW1lPVwidG91c1wiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgXHJcbiAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwie3sgcGF0aCgnZXh0cmFjdGlvbicpIH19P1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbTtcclxuICAgICAgICAgdXJsID0gXCIvYXBpL2dlbmVyYXRlX2V4dHJhY3Rpb24/VG89XCIrdG8rXCImRnJvbT1cIitmcm9tK1wiJmZvcm1hdGlvbj1cIitmb3JtYXRpb24rXCImcHJvbW90aW9uPVwiK3Byb21vdGlvbitcIiZTZXJ2aWNlPVwiK3NlcnZpY2UrXCImVG91PVwiK3RvdStcIiZ0eXBlPXN0YWdlXCI7XHJcbiAgICAgICAgIHNlcnZpY2U7XHJcbiAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9KTsgICAgICAgIFxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZXR1ZGlhbnQgZGV0YWlscyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5vbihcImRibGNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICBcclxuICAgIC8vIGFsZXJ0KHN0YXR1dCk7XHJcbiAgICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIFxyXG4gICAgICAgaWYgKG9iai5zdGF0dXQgPT0gMSkge1xyXG4gICAgICAgICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLm1vZGFsKFwidG9nZ2xlXCIpO1xyXG4gICAgICAgICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICB2YXIgcm93X2V0dWRpYW50ID0gJCh0aGlzKS5jbG9zZXN0KFwidHJcIik7XHJcbiAgICAgICAgdmFyIGlkX2V0dWRpYW50ID0gcm93X2V0dWRpYW50LmZpbmQoXCJ0ZDplcSgwKVwiKS5odG1sKCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hcGkvRXR1ZF9kZXRhaWxzXCIsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGV0dWRpYW50OiBpZF9ldHVkaWFudCxcclxuICAgICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9ldHVkX2RldCcpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICB9XHJcblxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL3ZhbGlkZXIgZXR1ZGlhbnQgZGV0YWlscyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiYm9keSAjc2F2ZV9ldHVkX2RldFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBqdXN0aWYgPSAwO1xyXG4gICAgaWYgKCQoJ2lucHV0Lmp1c3RpZmllcicpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgIGp1c3RpZiA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9FdHVkX2RldGFpbHNfdmFsaWRlXCIsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBldHVkaWFudDogJCgnI0lEX0FkbWlzc2lvbicpLnZhbCgpLFxyXG4gICAgICAgIHNlYW5jZTogJCgnI0lkX1NlYW5jZScpLnZhbCgpLFxyXG4gICAgICAgIGNhdF9lbnM6ICQoJyNDYXRlZ29yaWVfZW5zJykudmFsKCksXHJcbiAgICAgICAgbW90aWZfYWJzOiAkKCcjbW90aWZfYWJzJykudmFsKCksXHJcbiAgICAgICAgb2JzOiAkKCcjb2JzJykudmFsKCksXHJcbiAgICAgICAganVzdGlmOiBqdXN0aWYsXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL2FwaS9FdHVkX2FmZlwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgICAgICBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICAgICAgZXhpc3RlOiBvYmouZXhpc3RlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgIFsyNSwgNTAsIDc1LCAxMDAsIDEyNSwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikubW9kYWwoXCJ0b2dnbGVcIik7XHJcbiAgICAgICAgJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICBcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1BvaW50YWdlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoXCJib2R5ICNwb2ludGFnZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbmxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgaWYgKG9iai5zdGF0dXQgPT0gMSkge1xyXG5cclxuJC5hamF4KHtcclxuICB0eXBlOiBcIlBPU1RcIixcclxuICB1cmw6IFwiL2FwaS9FdHVkX3BvaW50YWdlXCIsXHJcbiAgZGF0YToge1xyXG4gICAgcHJvbW86ICQoJyNwcm9tb3Rpb24nKS52YWwoKSxcclxuICAgIGRhdGU6ICQoJyNkYXRldGltZScpLnZhbCgpLFxyXG4gICAgaGQ6IG9iai5oZCxcclxuICB9LFxyXG4gIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKSkge1xyXG4gICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTRcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTRcIilcclxuICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgWzI1LCA1MCwgNzUsIDEwMCwgMTI1LCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSk7XHJcbiAgfSxcclxufSk7XHJcbn1cclxuICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJCgnI0Vfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xyXG4kKCcjRl9zaXR1YXRpb24nKS5zZWxlY3QyKCk7XHJcbiQoJyNQX3NpdHVhdGlvbicpLnNlbGVjdDIoKTtcclxuJCgnI0V0X3NpdHVhdGlvbicpLnNlbGVjdDIoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhpZGUiLCJ0YWJsZURhdGEiLCJzZWFuY2VhZmZpY2hhZ2UiLCJ2YXIxIiwidmFyMiIsInZhcjMiLCJzaG93IiwiYWpheCIsInR5cGUiLCJ1cmwiLCJzdWNjZXNzIiwiaHRtbCIsImZuIiwiRGF0YVRhYmxlIiwiaXNEYXRhVGFibGUiLCJjbGVhciIsImRlc3Ryb3kiLCJiTGVuZ3RoQ2hhbmdlIiwibGVuZ3RoTWVudSIsImV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UiLCJoaWdobGlnaHQiLCJhZGRDbGFzcyIsInByb3AiLCJvbiIsImV0YWJsaXNzZW1lbnQiLCJ2YWwiLCJmb3JtYXRpb24iLCJwcm9tb3Rpb24iLCJkYXRlIiwibm93IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJzbGljZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ0b2RheSIsImdldEZ1bGxZZWFyIiwibGlzdCIsInNlbGVjdGVkIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImN1cnJlbnRSb3ciLCJjbG9zZXN0Iiwic3RhdHV0IiwiZmluZCIsInB1c2giLCJzZWFuY2UiLCJncm91cGUiLCJoZCIsIm1vZHVsZSIsInNhbGUiLCJleGlzdGUiLCJjc3MiLCJmb3JFYWNoIiwib2JqIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtb2RhbCIsImZpcmUiLCJpY29uIiwidGl0bGUiLCJ3aW5kb3ciLCJvcGVuIiwic2FsbGUiLCJzZWxlY3RzIiwiZWxlIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwiY2hlY2tlZCIsImRlU2VsZWN0IiwiYWxlcnQiLCJoZiIsImVhY2giLCJ2YWx1ZSIsInJlc3VsdCIsImVycm9yIiwiY2xpY2siLCJ0byIsImZyb20iLCJzZXJ2aWNlIiwidG91Iiwicm93X2V0dWRpYW50IiwiaWRfZXR1ZGlhbnQiLCJldHVkaWFudCIsImp1c3RpZiIsImlzIiwiY2F0X2VucyIsIm1vdGlmX2FicyIsIm9icyIsInByb21vIiwic2VsZWN0MiJdLCJzb3VyY2VSb290IjoiIn0=