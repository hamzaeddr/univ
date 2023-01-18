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
        hf: currentRow.find("td:eq(9)").html(),
        module: currentRow.find("td:eq(14)").html(),
        sale: currentRow.find("td:eq(15)").html(),
        salle: currentRow.find("td:eq(5)").html(),
        nature: currentRow.find("td:eq(4)").html(),
        element: currentRow.find("td:eq(6)").html(),
        enseignant: currentRow.find("td:eq(7)").html(),
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
    $("#etudiant-modal").modal("show"); // promotion: currentRow.find("td:eq(2)").html(),
    // seance: currentRow.find("td:eq(3)").html(),
    // groupe: currentRow.find("td:eq(10)").html(),
    // hd: currentRow.find("td:eq(8)").html(),
    // hf: currentRow.find("td:eq(9)").html(),
    // module: currentRow.find("td:eq(14)").html(),
    // sale: currentRow.find("td:eq(15)").html(),
    // salle: currentRow.find("td:eq(5)").html(),
    // nature: currentRow.find("td:eq(4)").html(),
    // element: currentRow.find("td:eq(6)").html(),
    // existe: currentRow.find("td:eq(11)").html(),
    // statut: currentRow.find("td:eq(1)").html(),

    list.forEach(function (obj) {
      $("#Seance_etud").val(obj.seance);
      $("#salle_etud").val(obj.nature + ' / ' + obj.salle);
      $("#element_etud").val(obj.element);
      $("#Enseignant_etud").val(obj.enseignant);
      $("#Hd_etud").val(obj.hd);
      $("#Hf_etud").val(obj.hf);
      $("#group_etud").val(obj.groupe);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxFQUFFVyxHQUFHLENBQUNYO0FBSEosV0FIRDtBQVFMdkMsVUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxJQUFWLEVBQWdCO0FBQ3ZCLGdCQUFJZCxDQUFDLENBQUNlLEVBQUYsQ0FBS0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCLGtDQUEzQixDQUFKLEVBQW9FO0FBQ2xFakIsY0FBQUEsQ0FBQyxDQUFDLGtDQUFELENBQUQsQ0FBc0NnQixTQUF0QyxHQUFrREUsS0FBbEQsR0FBMERDLE9BQTFEO0FBQ0Q7O0FBQ0RuQixZQUFBQSxDQUFDLENBQUMsa0NBQUQsQ0FBRCxDQUNHYyxJQURILENBQ1FBLElBRFIsRUFFR0UsU0FGSCxDQUVhO0FBQ1RJLGNBQUFBLGFBQWEsRUFBRSxLQUROO0FBRVRDLGNBQUFBLFVBQVUsRUFBRSxDQUNWLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixjQUF2QixDQURVLEVBRVYsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEtBQXRCLENBRlU7QUFGSCxhQUZiO0FBU0Q7QUFyQkksU0FBUDtBQXVCQztBQUNFLEtBM0JIO0FBNEJHLEdBOUJELEVBNzFCNEIsQ0E4M0I1Qjs7QUFFRnJCLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JtRyxPQUFsQjtBQUNBbkcsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQm1HLE9BQWxCO0FBQ0FuRyxFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCbUcsT0FBbEI7QUFDQW5HLEVBQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJtRyxPQUFuQjtBQUNDLENBcDRCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2Fzc2lkdWl0ZS9hc3NpZHVpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVG9hc3QgPSBTd2FsLm1peGluKHtcclxuICB0b2FzdDogdHJ1ZSxcclxuICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXHJcbiAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gIHRpbWVyOiAzMDAwLFxyXG4gIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXHJcbiAgZGlkT3BlbjogKHRvYXN0KSA9PiB7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBTd2FsLnN0b3BUaW1lcik7XHJcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcclxuICB9LFxyXG59KTtcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICBcclxuICAkKFwiLmxvYWRlclwiKS5oaWRlKCk7XHJcbiAgLy8gJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikuaGlkZSgpO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBkYXRhdGFibGUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgdmFyIHRhYmxlRGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZWFuY2VhZmZpY2hhZ2UodmFyMSwgdmFyMiwgdmFyMykge1xyXG4gICAgICAgICQoXCIubG9hZGVyXCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvU2VhbmNlX2FmZi9cIiArIHZhcjEgKyBcIi9cIiArIHZhcjIgKyBcIi9cIiArIHZhcjMsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIi5sb2FkZXJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKVxyXG4gICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gdmFyMTtcclxuICAgICAgICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duLWV0ZGlhbnRzLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKHZhcjEpIHtcclxuXHJcbiAgICAgICAgICAkKFwiLmxvYWRlclwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvZXR1ZF9hZmZfc2l0dWF0aW9uL1wiICsgdmFyMSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgICQoXCIubG9hZGVyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAkKFwiI0V0X3NpdHVhdGlvblwiKS5odG1sKGh0bWwpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhcjE7XHJcbiAgICAgICAgICB9XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICBmdW5jdGlvbiBoaWdobGlnaHQoKSB7fVxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlMlwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsxMywgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9zaXR1YXRpb25cIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICQoXCIuZGF0YVRhYmxlc19sZW5ndGhcIikuYWRkQ2xhc3MoXCJicy1zZWxlY3RcIik7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLyAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZHJvcGRvd24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNldGFibGlzc2VtZW50XCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICQoXCIjZm9ybWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICQoXCIjcHJvbW90aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd24tc2l0dWF0aW9uLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICQoXCIjRV9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgJChcIiNGX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAkKFwiI1Bfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZXRhYmxpc3NlbWVudC8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGV0YWJsaXNzZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL0Zvcm1hdGlvbl9hZmYvXCIgKyBldGFibGlzc2VtZW50LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgJChcIiNmb3JtYXRpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgICAgICAgJChcIiNmb3JtYXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyAkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9tb3Rpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vRm9tYXRpb24vLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjZm9ybWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmb3JtYXRpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyBmb3JtYXRpb24sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIiNwcm9tb3Rpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vUHJvbW90aW9uLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHByb21vdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgIHNlYW5jZWFmZmljaGFnZShwcm9tb3Rpb24sICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICB9KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vRGF0ZS8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNkYXRldGltZVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGF0ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksIGRhdGUsJ0NSJyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBkYXRlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciBkYXkgPSAoXCIwXCIgKyBub3cuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XHJcbiAgdmFyIG1vbnRoID0gKFwiMFwiICsgKG5vdy5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcclxuICB2YXIgdG9kYXkgPSBub3cuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuXHJcbiAgJChcIiNkYXRldGltZVwiKS52YWwodG9kYXkpO1xyXG4gIHZhciBwcm9tb3Rpb24gPSAkKFwiI3Byb21vdGlvblwiKS52YWwoKTtcclxuICBsZXQgbGlzdCA9IFtdO1xyXG4gIHNlYW5jZWFmZmljaGFnZShwcm9tb3Rpb24sIHRvZGF5LCdDUicpO1xyXG5cclxuXHJcbiAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5vbihcImNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS5oYXNDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlIHRyXCIpLnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUgdHJcIikucmVtb3ZlQ2xhc3MoXCJvZGRcIik7XHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlIHRyXCIpLnJlbW92ZUNsYXNzKFwiZXZlblwiKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgICB2YXIgY3VycmVudFJvdyA9ICQodGhpcykuY2xvc2VzdChcInRyXCIpO1xyXG4gICAgICB2YXIgc3RhdHV0ID0gY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMSlcIikuaHRtbCgpO1xyXG4gICAgICBsaXN0ID0gW107XHJcbiAgICAgIGxpc3QucHVzaCh7XHJcbiAgICAgICAgcHJvbW90aW9uOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgyKVwiKS5odG1sKCksXHJcbiAgICAgICAgc2VhbmNlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgzKVwiKS5odG1sKCksXHJcbiAgICAgICAgZ3JvdXBlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxMClcIikuaHRtbCgpLFxyXG4gICAgICAgIGhkOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg4KVwiKS5odG1sKCksXHJcbiAgICAgICAgaGY6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDkpXCIpLmh0bWwoKSxcclxuICAgICAgICBtb2R1bGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDE0KVwiKS5odG1sKCksXHJcbiAgICAgICAgc2FsZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTUpXCIpLmh0bWwoKSxcclxuICAgICAgICBzYWxsZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoNSlcIikuaHRtbCgpLFxyXG4gICAgICAgIG5hdHVyZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoNClcIikuaHRtbCgpLFxyXG4gICAgICAgIGVsZW1lbnQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDYpXCIpLmh0bWwoKSxcclxuICAgICAgICBlbnNlaWduYW50OiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg3KVwiKS5odG1sKCksXHJcbiAgICAgICAgZXhpc3RlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxMSlcIikuaHRtbCgpLFxyXG4gICAgICAgIHN0YXR1dDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMSlcIikuaHRtbCgpLFxyXG4gICAgICB9KTtcclxuICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuaGlkZSgpO1xyXG4gICAgICBpZiAoc3RhdHV0ID09ICcxJykge1xyXG4gICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwibm9uZVwiIH0pO1xyXG4gICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXR1dCA9PSAnMicpIHtcclxuICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihzdGF0dXQgPT0gJzEnIHx8IHN0YXR1dCA9PSAnMicpe1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvY291bnRfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgIFxyXG4gICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiLmdyaWRcIikuaHRtbChodG1sKTtcclxuXHJcbiAgICAgIH1cclxuICB9KTtcclxuICB9KTtcclxufVxyXG5jb25zb2xlLmxvZyhsaXN0KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogcG9wIHVwIGV0dWRpYW50IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLm9uKFwiZGJsY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2V0dWRpYW50LW1vZGFsXCIpLm1vZGFsKFwidG9nZ2xlXCIpO1xyXG4gICAgJChcIiNldHVkaWFudC1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcblxyXG4gICAgLy8gcHJvbW90aW9uOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgyKVwiKS5odG1sKCksXHJcbiAgICAvLyBzZWFuY2U6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDMpXCIpLmh0bWwoKSxcclxuICAgIC8vIGdyb3VwZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTApXCIpLmh0bWwoKSxcclxuICAgIC8vIGhkOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg4KVwiKS5odG1sKCksXHJcbiAgICAvLyBoZjogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoOSlcIikuaHRtbCgpLFxyXG4gICAgLy8gbW9kdWxlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxNClcIikuaHRtbCgpLFxyXG4gICAgLy8gc2FsZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTUpXCIpLmh0bWwoKSxcclxuICAgIC8vIHNhbGxlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg1KVwiKS5odG1sKCksXHJcbiAgICAvLyBuYXR1cmU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDQpXCIpLmh0bWwoKSxcclxuICAgIC8vIGVsZW1lbnQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDYpXCIpLmh0bWwoKSxcclxuICAgIC8vIGV4aXN0ZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTEpXCIpLmh0bWwoKSxcclxuICAgIC8vIHN0YXR1dDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMSlcIikuaHRtbCgpLFxyXG5cclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAkKFwiI1NlYW5jZV9ldHVkXCIpLnZhbChvYmouc2VhbmNlKTtcclxuICAgICQoXCIjc2FsbGVfZXR1ZFwiKS52YWwob2JqLm5hdHVyZSArICcgLyAnICsgb2JqLnNhbGxlKTtcclxuICAgICQoXCIjZWxlbWVudF9ldHVkXCIpLnZhbChvYmouZWxlbWVudCk7XHJcbiAgICAkKFwiI0Vuc2VpZ25hbnRfZXR1ZFwiKS52YWwob2JqLmVuc2VpZ25hbnQpO1xyXG4gICAgJChcIiNIZF9ldHVkXCIpLnZhbChvYmouaGQpO1xyXG4gICAgJChcIiNIZl9ldHVkXCIpLnZhbChvYmouaGYpO1xyXG4gICAgJChcIiNncm91cF9ldHVkXCIpLnZhbChvYmouZ3JvdXBlKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvRXR1ZF9hZmZcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwcm9tb3Rpb246IG9iai5wcm9tb3Rpb24sXHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgICBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICBleGlzdGU6IG9iai5leGlzdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikpIHtcclxuICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpXHJcbiAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsyNSwgNTAsIDc1LCAxMDAsIDEyNSwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogdHJhaXRlbWVudCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3RyYWl0ZV9lcHJldXZlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgIGlmIChvYmouZ3JvdXBlID09PSBcIlwiKSB7XHJcbiAgICAgICAgb2JqLmdyb3VwZSA9IFwiZW1wdHlcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIG9iai5zdGF0dXQgIT0gJzEnKXtcclxuICAgICAgJChcIi5sb2FkZXJcIikuc2hvdygpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS90cmFpdGVtZW50X2Fzc2lkdWl0ZVwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC8vIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgICAgICAvLyBoZDogb2JqLmhkLFxyXG4gICAgICAgICAgLy8gbW9kdWxlOiBvYmoubW9kdWxlLFxyXG4gICAgICAgICAgLy8gZ3JvdXBlOiBvYmouZ3JvdXBlLFxyXG4gICAgICAgICAgLy8gc2FsZTogb2JqLnNhbGUsXHJcbiAgICAgICAgICB0eXBlIDogJ3RyYWl0ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIubG9hZGVyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ3NlYW5jZSB0cmFpdMOpIGF2ZWMgc3VjY2VzJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgIHRpdGxlOiAnc2VhbmNlIGRlamEgdHJhaXTDqScsXHJcbiAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHJldHJhaXRlciAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG5cclxuICAkKFwiYm9keSAjcmV0cmFpdGVyX3NlYW5jZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgIGlmIChvYmouZ3JvdXBlID09PSBcIlwiKSB7XHJcbiAgICAgICAgb2JqLmdyb3VwZSA9IFwiZW1wdHlcIjtcclxuICAgICAgfVxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLy8gcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIC8vIGhkOiBvYmouaGQsXHJcbiAgICAgICAgICAvLyBtb2R1bGU6IG9iai5tb2R1bGUsXHJcbiAgICAgICAgICAvLyBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICAvLyBzYWxlOiBvYmouc2FsZSxcclxuICAgICAgICAgIHR5cGUgOiAncmV0cmFpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICQoXCIuZ3JpZFwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZmV1aWxlIHBkZiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNhc3NpZHVpdGVfcHJpbnRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmLycrb2JqLnNlYW5jZSwgJ19ibGFuaycpO1xyXG5cclxufSk7XHJcbn0pO1xyXG5cclxuLy8gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbi8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBzaXR1YXRpb24gcHJlc2VudGlsIHBkZiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLyAgICQoXCJib2R5ICNzaXR1YXRpb25fcHJlc2VudGllbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIC8vIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbi8vICAgICAgIHZhciBldHVkaWFudCA9ICQoXCIjRXRfc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyAgICAgICAvLyB2YXIgZGF0ZV9kZWJ1dCA9ICQoXCIjZGF0ZXRpbWVEc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyAgICAgICAvLyB2YXIgZGF0ZV9maW4gPSAkKFwiI2RhdGV0aW1lRnNpdHVhdGlvblwiKS52YWwoKTtcclxuXHJcbi8vICAgICB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZl9wcmVzZW50aWVsLycrZXR1ZGlhbnQsICdfYmxhbmsnKTtcclxuXHJcbi8vIC8vIH0pO1xyXG4vLyB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogcmVtb3ZlIHNlYW5jZSAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjcmVtb3ZlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvcmVtb3ZlX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZXhpc3RlICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNleGlzdGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9leGlzdF9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHNpZ24gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3NpZ25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9zaWduX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzZWFuY2Ugc2lnbsOpJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBjYW5jZWwgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2NhbmNlbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2NhbmNlbF9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBkZXZlcm91ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2RldmVyb3VpbGxlci1tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2RldmVyX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBtb2RpZmllcl9zYWxsZSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNtb2Rpc2FsbGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2FsbGUgPSAkKFwiI3NhbGxlXCIpLnZhbCgpO1xyXG4gICAgXHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9tb2RpZmllcl9zYWxsZS9cIitvYmouc2VhbmNlK1wiL1wiK3NhbGxlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBtb2RpZmllcl9zYWxsZSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICN2ZXJvdWlsbGVyLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9sb2NrX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJsb3QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNlbGVjdHMoKXsgIFxyXG4gIHZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXHJcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxyXG4gICAgICAgICAgZWxlW2ldLmNoZWNrZWQ9dHJ1ZTsgIFxyXG4gIH0gIFxyXG59ICBcclxuZnVuY3Rpb24gZGVTZWxlY3QoKXsgIFxyXG4gIHZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXHJcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxyXG4gICAgICAgICAgZWxlW2ldLmNoZWNrZWQ9ZmFsc2U7ICBcclxuICAgICAgICBcclxuICB9ICBcclxufSAgICAgICAgICBcclxuJChcImJvZHkgI2NoZWNrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5hbGVydCgnb2snKTtcclxuc2VsZWN0cygpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xyXG4gXHJcbn0pO1xyXG4kKFwiYm9keSAjdW5jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuYWxlcnQoJ29rJyk7XHJcbmRlU2VsZWN0KCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XHJcbiBcclxufSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJsb3RfaGQtZiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiQoXCJib2R5ICNwYXJsb3Rfc2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgdmFyIGhkID0gJChcIiNoZFwiKS52YWwoKTtcclxuICB2YXIgaGYgPSAkKFwiI2hmXCIpLnZhbCgpO1xyXG4gIHZhciBkYXRlID0gJChcIiNkYXRldGltZVwiKS52YWwoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFwiL2FwaS9wYXJsb3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgaGQ6IGhkLFxyXG4gICAgICBoZjogaGYsXHJcbiAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI3BhcmxvdF9kYXRhdGFibGVcIikpIHtcclxuICAgICAgICAkKFwiI3BhcmxvdF9kYXRhdGFibGVcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgICAgJChcIiNwYXJsb3RfZGF0YXRhYmxlXCIpXHJcbiAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gXHJcbn0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJsb3RfdHJhaXRlbWVudCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiQoXCJib2R5ICNwYXJsb3RfdHJhaXRlclwiKS5vbihcImNsaWNrXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuIFxyXG4gIGxldCByZXN1bHQ7XHJcbiAgICAgIHZhciB2YWwgPSBbXTtcclxuICAgICAgJCgnOmNoZWNrYm94OmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uKGkpe1xyXG4gICAgICAgIHZhbFtpXSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IobGV0IHZhbHVlIG9mIHZhbCl7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zdCByZXF1ZXN0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FkbWluaXN0cmF0aW9uL2VwcmV1dmUvaW1wb3J0Jywge1xyXG4gICAgICAvLyAgIHNlYW5jZTogdmFsdWUsXHJcbiAgICAgIC8vICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgLy8gICB0eXBlIDogJ3RyYWl0ZScsXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgcmVzdWx0ID0gYXdhaXQgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS90cmFpdGVtZW50X2Fzc2lkdWl0ZVwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogdmFsdWUsXHJcbiAgICAgICAgICBkYXRlOiAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLFxyXG4gICAgICAgICAgdHlwZSA6ICd0cmFpdGUnLFxyXG4gICAgICAgIH0sXHJcbi8vICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuLy8gYWxlcnQoaHRtbCk7XHJcbi8vICAgICAvLyB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZi8nK2h0bWwsICdfYmxhbmsnKTtcclxuLy8gICB9LFxyXG5cclxuICAgICAgfSk7XHJcbiB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZi8nK3Jlc3VsdCwgJ19ibGFuaycpO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbiAgICAgIH1cclxuICBcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxufSk7XHJcblxyXG5cclxuXHJcbi8vICQoXCJib2R5ICNzaXR1YXRpb25fc2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyBldHVkaWFudCA9ICQoXCIjRXRfc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyBkYXRlZCA9ICQoXCIjZGF0ZXRpbWVEc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyBkYXRlZiA9ICQoXCIjZGF0ZXRpbWVGc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyAkLmFqYXgoe1xyXG4vLyAgIHR5cGU6IFwiUE9TVFwiLFxyXG4vLyAgIHVybDogXCIvYXBpL2FmZl9zaXR1YXRpb25cIixcclxuLy8gICBkYXRhOiB7XHJcbi8vICAgICBldHVkaWFudCA6IGV0dWRpYW50LFxyXG4vLyAgICAgZGF0ZWQgOiBkYXRlZCxcclxuLy8gICAgIGRhdGVmIDogZGF0ZWYgLFxyXG4vLyAgIH0sXHJcbi8vICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuLy8gICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfc2l0dWF0aW9uXCIpKSB7XHJcbi8vICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuLy8gICAgIH1cclxuLy8gICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKVxyXG4vLyAgICAgICAuaHRtbChodG1sKVxyXG4vLyAgICAgICAuRGF0YVRhYmxlKHtcclxuLy8gICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuLy8gICAgICAgICBsZW5ndGhNZW51OiBbXHJcbi8vICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4vLyAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcbi8vIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy9ldGFibGlzc2VtZW50Ly8vLy8vLy8vL1xyXG5cclxuICAkKFwiI0Vfc2l0dWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBldGFibGlzc2VtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Gb3JtYXRpb25fYWZmL1wiICsgZXRhYmxpc3NlbWVudCxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiI0Zfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgJChcIiNGX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hcGkvUHJvbW90aW9uX2FmZi9cIiArICQoXCIjRl9zaXR1YXRpb25cIikudmFsKCksXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgICAgIGV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UoJChcIiNQX3NpdHVhdGlvblwiKS52YWwoKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9Gb21hdGlvbi8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNGX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgZm9ybWF0aW9uLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgIGV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UoJChcIiNQX3NpdHVhdGlvblwiKS52YWwoKSk7XHJcblxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vUHJvbW90aW9uLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI1Bfc2l0dWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZShwcm9tb3Rpb24pO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG4gXHJcbiAgICAgICAgICAgIFxyXG4vLyAgLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmFjdGlvbi8vLy8vLy8vLy8vLy8vLy86XHJcbi8vICAkKCcjY3JlYXRlX2V4dHJhY3Rpb24nKS5jbGljayhmdW5jdGlvbigpeyBcclxuXHJcbi8vICAgdmFyIHRvID0gJCgnI2RhdGV0aW1lRnNpdHVhdGlvbicpLnZhbCgpO1xyXG4vLyAgIHZhciBmcm9tID0gJCgnI2RhdGV0aW1lRHNpdHVhdGlvbicpLnZhbCgpO1xyXG4vLyAgIHZhciBzZXJ2aWNlID0gJCgnI0Vfc2l0dWF0aW9uJykudmFsKCk7XHJcbi8vICAgdmFyIGZvcm1hdGlvbiA9ICQoJyNGX3NpdHVhdGlvbicpLnZhbCgpO1xyXG4vLyAgIHZhciBwcm9tb3Rpb24gPSAkKCcjUF9zaXR1YXRpb24nKS52YWwoKTtcclxuXHJcblxyXG4vLyAgIHZhciB0b3UgPSAgJCgnaW5wdXRbbmFtZT1cInRvdXNcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gIFxyXG4vLyAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInt7IHBhdGgoJ2V4dHJhY3Rpb24nKSB9fT9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb207XHJcbi8vICAgICAgICAgIHVybCA9IFwiL2FwaS9nZW5lcmF0ZV9leHRyYWN0aW9uP1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbStcIiZmb3JtYXRpb249XCIrZm9ybWF0aW9uK1wiJnByb21vdGlvbj1cIitwcm9tb3Rpb24rXCImU2VydmljZT1cIitzZXJ2aWNlK1wiJlRvdT1cIit0b3UrXCImdHlwZT1ub3JtYWxcIjs7XHJcbi8vICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICAgICAgICAgXHJcblxyXG4vLyAgICAgICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuIC8vLy8vLy8vLy8vLy8vLy8vL2V4dHJhY3Rpb24gc3RhZ2UvLy8vLy8vLy8vLy8vLy8vOlxyXG4gJCgnI2NyZWF0ZV9leHRyYWN0aW9uX3N0YWdlJykuY2xpY2soZnVuY3Rpb24oKXsgXHJcblxyXG4gIHZhciB0byA9ICQoJyNkYXRldGltZUZzaXR1YXRpb24nKS52YWwoKTtcclxuICB2YXIgZnJvbSA9ICQoJyNkYXRldGltZURzaXR1YXRpb24nKS52YWwoKTtcclxuICB2YXIgc2VydmljZSA9ICQoJyNFX3NpdHVhdGlvbicpLnZhbCgpO1xyXG4gIHZhciBmb3JtYXRpb24gPSAkKCcjRl9zaXR1YXRpb24nKS52YWwoKTtcclxuICB2YXIgcHJvbW90aW9uID0gJCgnI1Bfc2l0dWF0aW9uJykudmFsKCk7XHJcblxyXG5cclxuICB2YXIgdG91ID0gICQoJ2lucHV0W25hbWU9XCJ0b3VzXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICBcclxuICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJ7eyBwYXRoKCdleHRyYWN0aW9uJykgfX0/VG89XCIrdG8rXCImRnJvbT1cIitmcm9tO1xyXG4gICAgICAgICB1cmwgPSBcIi9hcGkvZ2VuZXJhdGVfZXh0cmFjdGlvbj9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb20rXCImZm9ybWF0aW9uPVwiK2Zvcm1hdGlvbitcIiZwcm9tb3Rpb249XCIrcHJvbW90aW9uK1wiJlNlcnZpY2U9XCIrc2VydmljZStcIiZUb3U9XCIrdG91K1wiJnR5cGU9c3RhZ2VcIjtcclxuICAgICAgICAgc2VydmljZTtcclxuICAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9ldHVkaWFudCBkZXRhaWxzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLm9uKFwiZGJsY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgIFxyXG4gICAgLy8gYWxlcnQoc3RhdHV0KTtcclxuICAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgXHJcbiAgICAgICBpZiAob2JqLnN0YXR1dCA9PSAxKSB7XHJcbiAgICAgICAgJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikubW9kYWwoXCJ0b2dnbGVcIik7XHJcbiAgICAgICAgJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgIHZhciByb3dfZXR1ZGlhbnQgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKTtcclxuICAgICAgICB2YXIgaWRfZXR1ZGlhbnQgPSByb3dfZXR1ZGlhbnQuZmluZChcInRkOmVxKDApXCIpLmh0bWwoKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFwiL2FwaS9FdHVkX2RldGFpbHNcIixcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZXR1ZGlhbnQ6IGlkX2V0dWRpYW50LFxyXG4gICAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgJCgnI21vZGFsX2V0dWRfZGV0JykuaHRtbChodG1sKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgIH1cclxuXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vdmFsaWRlciBldHVkaWFudCBkZXRhaWxzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoXCJib2R5ICNzYXZlX2V0dWRfZGV0XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGp1c3RpZiA9IDA7XHJcbiAgICBpZiAoJCgnaW5wdXQuanVzdGlmaWVyJykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAganVzdGlmID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL0V0dWRfZGV0YWlsc192YWxpZGVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGV0dWRpYW50OiAkKCcjSURfQWRtaXNzaW9uJykudmFsKCksXHJcbiAgICAgICAgc2VhbmNlOiAkKCcjSWRfU2VhbmNlJykudmFsKCksXHJcbiAgICAgICAgY2F0X2VuczogJCgnI0NhdGVnb3JpZV9lbnMnKS52YWwoKSxcclxuICAgICAgICBtb3RpZl9hYnM6ICQoJyNtb3RpZl9hYnMnKS52YWwoKSxcclxuICAgICAgICBvYnM6ICQoJyNvYnMnKS52YWwoKSxcclxuICAgICAgICBqdXN0aWY6IGp1c3RpZixcclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvYXBpL0V0dWRfYWZmXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBwcm9tb3Rpb246IG9iai5wcm9tb3Rpb24sXHJcbiAgICAgICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgICAgIGdyb3VwZTogb2JqLmdyb3VwZSxcclxuICAgICAgICAgICAgICBleGlzdGU6IG9iai5leGlzdGUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgWzI1LCA1MCwgNzUsIDEwMCwgMTI1LCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2V0dWRpYW50X2RldF9tb2RhbFwiKS5tb2RhbChcInRvZ2dsZVwiKTtcclxuICAgICAgICAkKFwiI2V0dWRpYW50X2RldF9tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vUG9pbnRhZ2UgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJChcImJvZHkgI3BvaW50YWdlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxubGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICBpZiAob2JqLnN0YXR1dCA9PSAxKSB7XHJcblxyXG4kLmFqYXgoe1xyXG4gIHR5cGU6IFwiUE9TVFwiLFxyXG4gIHVybDogXCIvYXBpL0V0dWRfcG9pbnRhZ2VcIixcclxuICBkYXRhOiB7XHJcbiAgICBwcm9tbzogJCgnI3Byb21vdGlvbicpLnZhbCgpLFxyXG4gICAgZGF0ZTogJCgnI2RhdGV0aW1lJykudmFsKCksXHJcbiAgICBoZDogb2JqLmhkLFxyXG4gIH0sXHJcbiAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGU0XCIpKSB7XHJcbiAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKVxyXG4gICAgICAuaHRtbChodG1sKVxyXG4gICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICBbMjUsIDUwLCA3NSwgMTAwLCAxMjUsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KTtcclxuICB9LFxyXG59KTtcclxufVxyXG4gIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKCcjRV9zaXR1YXRpb24nKS5zZWxlY3QyKCk7XHJcbiQoJyNGX3NpdHVhdGlvbicpLnNlbGVjdDIoKTtcclxuJCgnI1Bfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xyXG4kKCcjRXRfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaGlkZSIsInRhYmxlRGF0YSIsInNlYW5jZWFmZmljaGFnZSIsInZhcjEiLCJ2YXIyIiwidmFyMyIsInNob3ciLCJhamF4IiwidHlwZSIsInVybCIsInN1Y2Nlc3MiLCJodG1sIiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImJMZW5ndGhDaGFuZ2UiLCJsZW5ndGhNZW51IiwiZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSIsImhpZ2hsaWdodCIsImFkZENsYXNzIiwicHJvcCIsIm9uIiwiZXRhYmxpc3NlbWVudCIsInZhbCIsImZvcm1hdGlvbiIsInByb21vdGlvbiIsImRhdGUiLCJub3ciLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInNsaWNlIiwibW9udGgiLCJnZXRNb250aCIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJsaXN0Iiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiY3VycmVudFJvdyIsImNsb3Nlc3QiLCJzdGF0dXQiLCJmaW5kIiwicHVzaCIsInNlYW5jZSIsImdyb3VwZSIsImhkIiwiaGYiLCJtb2R1bGUiLCJzYWxlIiwic2FsbGUiLCJuYXR1cmUiLCJlbGVtZW50IiwiZW5zZWlnbmFudCIsImV4aXN0ZSIsImNzcyIsImZvckVhY2giLCJvYmoiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1vZGFsIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsIndpbmRvdyIsIm9wZW4iLCJzZWxlY3RzIiwiZWxlIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJpIiwibGVuZ3RoIiwiY2hlY2tlZCIsImRlU2VsZWN0IiwiYWxlcnQiLCJlYWNoIiwidmFsdWUiLCJyZXN1bHQiLCJlcnJvciIsImNsaWNrIiwidG8iLCJmcm9tIiwic2VydmljZSIsInRvdSIsInJvd19ldHVkaWFudCIsImlkX2V0dWRpYW50IiwiZXR1ZGlhbnQiLCJqdXN0aWYiLCJpcyIsImNhdF9lbnMiLCJtb3RpZl9hYnMiLCJvYnMiLCJwcm9tbyIsInNlbGVjdDIiXSwic291cmNlUm9vdCI6IiJ9