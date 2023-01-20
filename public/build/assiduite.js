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
    $("#etudiant-modal").modal("show");
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
    var icon = $(this).find('i');
    var button = $(this);
    button.attr("disabled", true);
    list.forEach(function (obj) {
      if (obj.groupe === "") {
        obj.groupe = "empty";
      }

      if (obj.statut != '1') {
        $(".loader").show();
        icon.removeClass('fa-clock').addClass("fa-spinner fa-spin");
        $.ajax({
          type: "POST",
          url: "/api/traitement_assiduite",
          data: {
            seance: obj.seance,
            date: $("#datetime").val(),
            type: 'traite'
          },
          success: function success(html) {
            $(".loader").hide();
            icon.removeClass('fa-spinner fa-spin').addClass("fa-clock");
            button.attr("disabled", false);
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
    var result, val, _i, _val, value, _i2, _val2, _value;

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
              _context.next = 17;
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
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](5);
            console.error(_context.t0);

          case 14:
            _i++;
            _context.next = 3;
            break;

          case 17:
            for (_i2 = 0, _val2 = val; _i2 < _val2.length; _i2++) {
              _value = _val2[_i2];
              window.open('/assiduite/assiduites/pdf/' + _value, '_blank');
            } ////////////////////////////////////////////////////////////////////:


          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 11]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bzNCNUI7O0FBRUZyQixFQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCcUcsT0FBbEI7QUFDQXJHLEVBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JxRyxPQUFsQjtBQUNBckcsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQnFHLE9BQWxCO0FBQ0FyRyxFQUFBQSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CcUcsT0FBbkI7QUFDQyxDQTEzQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hc3NpZHVpdGUvYXNzaWR1aXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XHJcbiAgdG9hc3Q6IHRydWUsXHJcbiAgcG9zaXRpb246IFwidG9wLWVuZFwiLFxyXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICB0aW1lcjogMzAwMCxcclxuICB0aW1lclByb2dyZXNzQmFyOiB0cnVlLFxyXG4gIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgU3dhbC5zdG9wVGltZXIpO1xyXG4gICAgdG9hc3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgU3dhbC5yZXN1bWVUaW1lcik7XHJcbiAgfSxcclxufSk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgXHJcbiAgJChcIi5sb2FkZXJcIikuaGlkZSgpO1xyXG4gIC8vICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLmhpZGUoKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZGF0YXRhYmxlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIHZhciB0YWJsZURhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2VhbmNlYWZmaWNoYWdlKHZhcjEsIHZhcjIsIHZhcjMpIHtcclxuICAgICAgICAkKFwiLmxvYWRlclwiKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvYXBpL1NlYW5jZV9hZmYvXCIgKyB2YXIxICsgXCIvXCIgKyB2YXIyICsgXCIvXCIgKyB2YXIzLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIubG9hZGVyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHZhcjE7XHJcbiAgICAgICAgfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bi1ldGRpYW50cy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSh2YXIxKSB7XHJcblxyXG4gICAgICAgICAgJChcIi5sb2FkZXJcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgIHVybDogXCIvYXBpL2V0dWRfYWZmX3NpdHVhdGlvbi9cIiArIHZhcjEsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAkKFwiLmxvYWRlclwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgJChcIiNFdF9zaXR1YXRpb25cIikuaHRtbChodG1sKTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YXIxO1xyXG4gICAgICAgICAgfVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gaGlnaGxpZ2h0KCkge31cclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgWzEzLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfcG9pbnRldXNlXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgWzEzLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfc2l0dWF0aW9uXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgWzEzLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAkKFwiLmRhdGFUYWJsZXNfbGVuZ3RoXCIpLmFkZENsYXNzKFwiYnMtc2VsZWN0XCIpO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGRyb3Bkb3duIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjZXRhYmxpc3NlbWVudFwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAkKFwiI2Zvcm1hdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duLXNpdHVhdGlvbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAkKFwiI0Vfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICQoXCIjRl9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgJChcIiNQX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2V0YWJsaXNzZW1lbnQvLy8vLy8vLy8vXHJcblxyXG4gICAgICAgICAgICAkKFwiI2V0YWJsaXNzZW1lbnRcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHZhciBldGFibGlzc2VtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9Gb3JtYXRpb25fYWZmL1wiICsgZXRhYmxpc3NlbWVudCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjZm9ybWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjZm9ybWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgJChcIiNmb3JtYXRpb25cIikudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0ZvbWF0aW9uLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2Zvcm1hdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgZm9ybWF0aW9uLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIjcHJvbW90aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgJChcIiNwcm9tb3Rpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Byb21vdGlvbi8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UocHJvbW90aW9uLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgfSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0RhdGUvLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjZGF0ZXRpbWVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRhdGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCBkYXRlLCdDUicpO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZGF0ZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICB2YXIgZGF5ID0gKFwiMFwiICsgbm93LmdldERhdGUoKSkuc2xpY2UoLTIpO1xyXG4gIHZhciBtb250aCA9IChcIjBcIiArIChub3cuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7XHJcbiAgdmFyIHRvZGF5ID0gbm93LmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XHJcblxyXG4gICQoXCIjZGF0ZXRpbWVcIikudmFsKHRvZGF5KTtcclxuICB2YXIgcHJvbW90aW9uID0gJChcIiNwcm9tb3Rpb25cIikudmFsKCk7XHJcbiAgbGV0IGxpc3QgPSBbXTtcclxuICBzZWFuY2VhZmZpY2hhZ2UocHJvbW90aW9uLCB0b2RheSwnQ1InKTtcclxuXHJcblxyXG4gICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikub24oXCJjbGlja1wiLCBcInRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxlY3RlZCA9ICQodGhpcykuaGFzQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlIHRyXCIpLnJlbW92ZUNsYXNzKFwib2RkXCIpO1xyXG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcImV2ZW5cIik7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICAgdmFyIGN1cnJlbnRSb3cgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKTtcclxuICAgICAgdmFyIHN0YXR1dCA9IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEpXCIpLmh0bWwoKTtcclxuICAgICAgbGlzdCA9IFtdO1xyXG4gICAgICBsaXN0LnB1c2goe1xyXG4gICAgICAgIHByb21vdGlvbjogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMilcIikuaHRtbCgpLFxyXG4gICAgICAgIHNlYW5jZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMylcIikuaHRtbCgpLFxyXG4gICAgICAgIGdyb3VwZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTApXCIpLmh0bWwoKSxcclxuICAgICAgICBoZDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoOClcIikuaHRtbCgpLFxyXG4gICAgICAgIGhmOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg5KVwiKS5odG1sKCksXHJcbiAgICAgICAgbW9kdWxlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxNClcIikuaHRtbCgpLFxyXG4gICAgICAgIHNhbGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDE1KVwiKS5odG1sKCksXHJcbiAgICAgICAgc2FsbGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDUpXCIpLmh0bWwoKSxcclxuICAgICAgICBuYXR1cmU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDQpXCIpLmh0bWwoKSxcclxuICAgICAgICBlbGVtZW50OiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg2KVwiKS5odG1sKCksXHJcbiAgICAgICAgZW5zZWlnbmFudDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoNylcIikuaHRtbCgpLFxyXG4gICAgICAgIGV4aXN0ZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTEpXCIpLmh0bWwoKSxcclxuICAgICAgICBzdGF0dXQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEpXCIpLmh0bWwoKSxcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcclxuICAgICAgaWYgKHN0YXR1dCA9PSAnMScpIHtcclxuICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTtcclxuICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdGF0dXQgPT0gJzInKSB7XHJcbiAgICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoc3RhdHV0ID09ICcxJyB8fCBzdGF0dXQgPT0gJzInKXtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2NvdW50X3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICBcclxuICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XHJcblxyXG4gICAgICB9XHJcbiAgfSk7XHJcbiAgfSk7XHJcbn1cclxuY29uc29sZS5sb2cobGlzdCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHBvcCB1cCBldHVkaWFudCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5vbihcImRibGNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNldHVkaWFudC1tb2RhbFwiKS5tb2RhbChcInRvZ2dsZVwiKTtcclxuICAgICQoXCIjZXR1ZGlhbnQtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICQoXCIjU2VhbmNlX2V0dWRcIikudmFsKG9iai5zZWFuY2UpO1xyXG4gICAgJChcIiNzYWxsZV9ldHVkXCIpLnZhbChvYmoubmF0dXJlICsgJyAvICcgKyBvYmouc2FsbGUpO1xyXG4gICAgJChcIiNlbGVtZW50X2V0dWRcIikudmFsKG9iai5lbGVtZW50KTtcclxuICAgICQoXCIjRW5zZWlnbmFudF9ldHVkXCIpLnZhbChvYmouZW5zZWlnbmFudCk7XHJcbiAgICAkKFwiI0hkX2V0dWRcIikudmFsKG9iai5oZCk7XHJcbiAgICAkKFwiI0hmX2V0dWRcIikudmFsKG9iai5oZik7XHJcbiAgICAkKFwiI2dyb3VwX2V0dWRcIikudmFsKG9iai5ncm91cGUpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9FdHVkX2FmZlwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgIGdyb3VwZTogb2JqLmdyb3VwZSxcclxuICAgICAgICAgIGV4aXN0ZTogb2JqLmV4aXN0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKSkge1xyXG4gICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIilcclxuICAgICAgICAgICAgLmh0bWwoaHRtbClcclxuICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgICAgWzI1LCA1MCwgNzUsIDEwMCwgMTI1LCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiB0cmFpdGVtZW50IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjdHJhaXRlX2VwcmV1dmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaWNvbiA9ICQodGhpcykuZmluZCgnaScpO1xyXG4gICAgdmFyIGJ1dHRvbiA9ICQodGhpcyk7XHJcbiAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgIGlmIChvYmouZ3JvdXBlID09PSBcIlwiKSB7XHJcbiAgICAgICAgb2JqLmdyb3VwZSA9IFwiZW1wdHlcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIG9iai5zdGF0dXQgIT0gJzEnKXtcclxuICAgICAgJChcIi5sb2FkZXJcIikuc2hvdygpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jbG9jaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIHR5cGUgOiAndHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIi5sb2FkZXJcIikuaGlkZSgpO1xyXG4gICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtY2xvY2tcIik7XHJcbiAgICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzZWFuY2UgdHJhaXTDqSBhdmVjIHN1Y2NlcycsXHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIuZ3JpZFwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICB0aXRsZTogJ3NlYW5jZSBkZWphIHRyYWl0w6knLFxyXG4gICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiByZXRyYWl0ZXIgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuXHJcbiAgJChcImJvZHkgI3JldHJhaXRlcl9zZWFuY2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICBpZiAob2JqLmdyb3VwZSA9PT0gXCJcIikge1xyXG4gICAgICAgIG9iai5ncm91cGUgPSBcImVtcHR5XCI7XHJcbiAgICAgIH1cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS90cmFpdGVtZW50X2Fzc2lkdWl0ZVwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIC8vIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgICAgICAvLyBoZDogb2JqLmhkLFxyXG4gICAgICAgICAgLy8gbW9kdWxlOiBvYmoubW9kdWxlLFxyXG4gICAgICAgICAgLy8gZ3JvdXBlOiBvYmouZ3JvdXBlLFxyXG4gICAgICAgICAgLy8gc2FsZTogb2JqLnNhbGUsXHJcbiAgICAgICAgICB0eXBlIDogJ3JldHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAkKFwiLmdyaWRcIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGZldWlsZSBwZGYgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjYXNzaWR1aXRlX3ByaW50XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZi8nK29iai5zZWFuY2UsICdfYmxhbmsnKTtcclxuXHJcbn0pO1xyXG59KTtcclxuXHJcbi8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLyAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogc2l0dWF0aW9uIHByZXNlbnRpbCBwZGYgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuLy8gICAkKFwiYm9keSAjc2l0dWF0aW9uX3ByZXNlbnRpZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAvLyBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4vLyAgICAgICB2YXIgZXR1ZGlhbnQgPSAkKFwiI0V0X3NpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gICAgICAgLy8gdmFyIGRhdGVfZGVidXQgPSAkKFwiI2RhdGV0aW1lRHNpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gICAgICAgLy8gdmFyIGRhdGVfZmluID0gJChcIiNkYXRldGltZUZzaXR1YXRpb25cIikudmFsKCk7XHJcblxyXG4vLyAgICAgd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGZfcHJlc2VudGllbC8nK2V0dWRpYW50LCAnX2JsYW5rJyk7XHJcblxyXG4vLyAvLyB9KTtcclxuLy8gfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHJlbW92ZSBzZWFuY2UgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3JlbW92ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3JlbW92ZV9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGV4aXN0ZSAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjZXhpc3RlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvZXhpc3Rfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBzaWduICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNzaWduXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvc2lnbl9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnc2VhbmNlIHNpZ27DqScsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogY2FuY2VsICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNjYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9jYW5jZWxfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZGV2ZXJvdSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNkZXZlcm91aWxsZXItbW9kYWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9kZXZlcl9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogbW9kaWZpZXJfc2FsbGUgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjbW9kaXNhbGxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNhbGxlID0gJChcIiNzYWxsZVwiKS52YWwoKTtcclxuICAgIFxyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvbW9kaWZpZXJfc2FsbGUvXCIrb2JqLnNlYW5jZStcIi9cIitzYWxsZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogbW9kaWZpZXJfc2FsbGUgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjdmVyb3VpbGxlci1tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvbG9ja19zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFybG90IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiBzZWxlY3RzKCl7ICBcclxuICB2YXIgZWxlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjaGsnKTsgIFxyXG4gIGZvcih2YXIgaT0wOyBpPGVsZS5sZW5ndGg7IGkrKyl7ICBcclxuICAgICAgaWYoZWxlW2ldLnR5cGU9PSdjaGVja2JveCcpICBcclxuICAgICAgICAgIGVsZVtpXS5jaGVja2VkPXRydWU7ICBcclxuICB9ICBcclxufSAgXHJcbmZ1bmN0aW9uIGRlU2VsZWN0KCl7ICBcclxuICB2YXIgZWxlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjaGsnKTsgIFxyXG4gIGZvcih2YXIgaT0wOyBpPGVsZS5sZW5ndGg7IGkrKyl7ICBcclxuICAgICAgaWYoZWxlW2ldLnR5cGU9PSdjaGVja2JveCcpICBcclxuICAgICAgICAgIGVsZVtpXS5jaGVja2VkPWZhbHNlOyAgXHJcbiAgICAgICAgXHJcbiAgfSAgXHJcbn0gICAgICAgICAgXHJcbiQoXCJib2R5ICNjaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuYWxlcnQoJ29rJyk7XHJcbnNlbGVjdHMoKTsgIC8vICQoXCIjcGFybG90X21vZGFsXCIpLnNob3coKTtcclxuIFxyXG59KTtcclxuJChcImJvZHkgI3VuY2hlY2tcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbmFsZXJ0KCdvaycpO1xyXG5kZVNlbGVjdCgpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xyXG4gXHJcbn0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFybG90X2hkLWYgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKFwiYm9keSAjcGFybG90X3NlYXJjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gIHZhciBoZCA9ICQoXCIjaGRcIikudmFsKCk7XHJcbiAgdmFyIGhmID0gJChcIiNoZlwiKS52YWwoKTtcclxuICB2YXIgZGF0ZSA9ICQoXCIjZGF0ZXRpbWVcIikudmFsKCk7XHJcbiAgJC5hamF4KHtcclxuICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBcIi9hcGkvcGFybG90XCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGhkOiBoZCxcclxuICAgICAgaGY6IGhmLFxyXG4gICAgICBkYXRlOiBkYXRlLFxyXG4gICAgIFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNwYXJsb3RfZGF0YXRhYmxlXCIpKSB7XHJcbiAgICAgICAgJChcIiNwYXJsb3RfZGF0YXRhYmxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICAgICQoXCIjcGFybG90X2RhdGF0YWJsZVwiKVxyXG4gICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9KTtcclxuIFxyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcGFybG90X3RyYWl0ZW1lbnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKFwiYm9keSAjcGFybG90X3RyYWl0ZXJcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiBcclxuICBsZXQgcmVzdWx0O1xyXG4gICAgICB2YXIgdmFsID0gW107XHJcbiAgICAgICQoJzpjaGVja2JveDpjaGVja2VkJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICB2YWxbaV0gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICB9KTtcclxuICAgICAgZm9yKGxldCB2YWx1ZSBvZiB2YWwpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2ltcG9ydCcsIHtcclxuICAgICAgLy8gICBzZWFuY2U6IHZhbHVlLFxyXG4gICAgICAvLyAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgIC8vICAgdHlwZSA6ICd0cmFpdGUnLFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIHJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvdHJhaXRlbWVudF9hc3NpZHVpdGVcIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IHZhbHVlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIHR5cGUgOiAndHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4vLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbi8vIGFsZXJ0KGh0bWwpO1xyXG4vLyAgICAgLy8gd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGYvJytodG1sLCAnX2JsYW5rJyk7XHJcbi8vICAgfSxcclxuXHJcbiAgICAgIH0pO1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCB2YWx1ZSBvZiB2YWwpe1xyXG5cclxuIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmLycrdmFsdWUsICdfYmxhbmsnKTtcclxuXHJcbiAgICAgIH1cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxufSk7XHJcblxyXG5cclxuXHJcbi8vICQoXCJib2R5ICNzaXR1YXRpb25fc2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyBldHVkaWFudCA9ICQoXCIjRXRfc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyBkYXRlZCA9ICQoXCIjZGF0ZXRpbWVEc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyBkYXRlZiA9ICQoXCIjZGF0ZXRpbWVGc2l0dWF0aW9uXCIpLnZhbCgpO1xyXG4vLyAkLmFqYXgoe1xyXG4vLyAgIHR5cGU6IFwiUE9TVFwiLFxyXG4vLyAgIHVybDogXCIvYXBpL2FmZl9zaXR1YXRpb25cIixcclxuLy8gICBkYXRhOiB7XHJcbi8vICAgICBldHVkaWFudCA6IGV0dWRpYW50LFxyXG4vLyAgICAgZGF0ZWQgOiBkYXRlZCxcclxuLy8gICAgIGRhdGVmIDogZGF0ZWYgLFxyXG4vLyAgIH0sXHJcbi8vICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuLy8gICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfc2l0dWF0aW9uXCIpKSB7XHJcbi8vICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuLy8gICAgIH1cclxuLy8gICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKVxyXG4vLyAgICAgICAuaHRtbChodG1sKVxyXG4vLyAgICAgICAuRGF0YVRhYmxlKHtcclxuLy8gICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuLy8gICAgICAgICBsZW5ndGhNZW51OiBbXHJcbi8vICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxyXG4vLyAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4vLyAgICAgICAgIF0sXHJcbi8vICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXHJcbi8vICAgICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcbi8vIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy9ldGFibGlzc2VtZW50Ly8vLy8vLy8vL1xyXG5cclxuICAkKFwiI0Vfc2l0dWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBldGFibGlzc2VtZW50ID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Gb3JtYXRpb25fYWZmL1wiICsgZXRhYmxpc3NlbWVudCxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiI0Zfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgJChcIiNGX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hcGkvUHJvbW90aW9uX2FmZi9cIiArICQoXCIjRl9zaXR1YXRpb25cIikudmFsKCksXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgICAgIGV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UoJChcIiNQX3NpdHVhdGlvblwiKS52YWwoKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9Gb21hdGlvbi8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNGX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgZm9ybWF0aW9uLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikuaHRtbChodG1sKTtcclxuICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgIGV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UoJChcIiNQX3NpdHVhdGlvblwiKS52YWwoKSk7XHJcblxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vUHJvbW90aW9uLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI1Bfc2l0dWF0aW9uXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZShwcm9tb3Rpb24pO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG4gXHJcbiAgICAgICAgICAgIFxyXG4vLyAgLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmFjdGlvbi8vLy8vLy8vLy8vLy8vLy86XHJcbi8vICAkKCcjY3JlYXRlX2V4dHJhY3Rpb24nKS5jbGljayhmdW5jdGlvbigpeyBcclxuXHJcbi8vICAgdmFyIHRvID0gJCgnI2RhdGV0aW1lRnNpdHVhdGlvbicpLnZhbCgpO1xyXG4vLyAgIHZhciBmcm9tID0gJCgnI2RhdGV0aW1lRHNpdHVhdGlvbicpLnZhbCgpO1xyXG4vLyAgIHZhciBzZXJ2aWNlID0gJCgnI0Vfc2l0dWF0aW9uJykudmFsKCk7XHJcbi8vICAgdmFyIGZvcm1hdGlvbiA9ICQoJyNGX3NpdHVhdGlvbicpLnZhbCgpO1xyXG4vLyAgIHZhciBwcm9tb3Rpb24gPSAkKCcjUF9zaXR1YXRpb24nKS52YWwoKTtcclxuXHJcblxyXG4vLyAgIHZhciB0b3UgPSAgJCgnaW5wdXRbbmFtZT1cInRvdXNcIl06Y2hlY2tlZCcpLnZhbCgpO1xyXG4gIFxyXG4vLyAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInt7IHBhdGgoJ2V4dHJhY3Rpb24nKSB9fT9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb207XHJcbi8vICAgICAgICAgIHVybCA9IFwiL2FwaS9nZW5lcmF0ZV9leHRyYWN0aW9uP1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbStcIiZmb3JtYXRpb249XCIrZm9ybWF0aW9uK1wiJnByb21vdGlvbj1cIitwcm9tb3Rpb24rXCImU2VydmljZT1cIitzZXJ2aWNlK1wiJlRvdT1cIit0b3UrXCImdHlwZT1ub3JtYWxcIjs7XHJcbi8vICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICAgICAgICAgXHJcblxyXG4vLyAgICAgICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuIC8vLy8vLy8vLy8vLy8vLy8vL2V4dHJhY3Rpb24gc3RhZ2UvLy8vLy8vLy8vLy8vLy8vOlxyXG4gJCgnI2NyZWF0ZV9leHRyYWN0aW9uX3N0YWdlJykuY2xpY2soZnVuY3Rpb24oKXsgXHJcblxyXG4gIHZhciB0byA9ICQoJyNkYXRldGltZUZzaXR1YXRpb24nKS52YWwoKTtcclxuICB2YXIgZnJvbSA9ICQoJyNkYXRldGltZURzaXR1YXRpb24nKS52YWwoKTtcclxuICB2YXIgc2VydmljZSA9ICQoJyNFX3NpdHVhdGlvbicpLnZhbCgpO1xyXG4gIHZhciBmb3JtYXRpb24gPSAkKCcjRl9zaXR1YXRpb24nKS52YWwoKTtcclxuICB2YXIgcHJvbW90aW9uID0gJCgnI1Bfc2l0dWF0aW9uJykudmFsKCk7XHJcblxyXG5cclxuICB2YXIgdG91ID0gICQoJ2lucHV0W25hbWU9XCJ0b3VzXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICBcclxuICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJ7eyBwYXRoKCdleHRyYWN0aW9uJykgfX0/VG89XCIrdG8rXCImRnJvbT1cIitmcm9tO1xyXG4gICAgICAgICB1cmwgPSBcIi9hcGkvZ2VuZXJhdGVfZXh0cmFjdGlvbj9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb20rXCImZm9ybWF0aW9uPVwiK2Zvcm1hdGlvbitcIiZwcm9tb3Rpb249XCIrcHJvbW90aW9uK1wiJlNlcnZpY2U9XCIrc2VydmljZStcIiZUb3U9XCIrdG91K1wiJnR5cGU9c3RhZ2VcIjtcclxuICAgICAgICAgc2VydmljZTtcclxuICAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9ldHVkaWFudCBkZXRhaWxzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLm9uKFwiZGJsY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgIFxyXG4gICAgLy8gYWxlcnQoc3RhdHV0KTtcclxuICAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgXHJcbiAgICAgICBpZiAob2JqLnN0YXR1dCA9PSAxKSB7XHJcbiAgICAgICAgJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikubW9kYWwoXCJ0b2dnbGVcIik7XHJcbiAgICAgICAgJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgIHZhciByb3dfZXR1ZGlhbnQgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKTtcclxuICAgICAgICB2YXIgaWRfZXR1ZGlhbnQgPSByb3dfZXR1ZGlhbnQuZmluZChcInRkOmVxKDApXCIpLmh0bWwoKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICB1cmw6IFwiL2FwaS9FdHVkX2RldGFpbHNcIixcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZXR1ZGlhbnQ6IGlkX2V0dWRpYW50LFxyXG4gICAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgJCgnI21vZGFsX2V0dWRfZGV0JykuaHRtbChodG1sKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgIH1cclxuXHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vdmFsaWRlciBldHVkaWFudCBkZXRhaWxzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoXCJib2R5ICNzYXZlX2V0dWRfZGV0XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGp1c3RpZiA9IDA7XHJcbiAgICBpZiAoJCgnaW5wdXQuanVzdGlmaWVyJykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAganVzdGlmID0gMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL0V0dWRfZGV0YWlsc192YWxpZGVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGV0dWRpYW50OiAkKCcjSURfQWRtaXNzaW9uJykudmFsKCksXHJcbiAgICAgICAgc2VhbmNlOiAkKCcjSWRfU2VhbmNlJykudmFsKCksXHJcbiAgICAgICAgY2F0X2VuczogJCgnI0NhdGVnb3JpZV9lbnMnKS52YWwoKSxcclxuICAgICAgICBtb3RpZl9hYnM6ICQoJyNtb3RpZl9hYnMnKS52YWwoKSxcclxuICAgICAgICBvYnM6ICQoJyNvYnMnKS52YWwoKSxcclxuICAgICAgICBqdXN0aWY6IGp1c3RpZixcclxuICAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIHVybDogXCIvYXBpL0V0dWRfYWZmXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBwcm9tb3Rpb246IG9iai5wcm9tb3Rpb24sXHJcbiAgICAgICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgICAgIGdyb3VwZTogb2JqLmdyb3VwZSxcclxuICAgICAgICAgICAgICBleGlzdGU6IG9iai5leGlzdGUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAgICAgLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgWzI1LCA1MCwgNzUsIDEwMCwgMTI1LCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKFwiI2V0dWRpYW50X2RldF9tb2RhbFwiKS5tb2RhbChcInRvZ2dsZVwiKTtcclxuICAgICAgICAkKFwiI2V0dWRpYW50X2RldF9tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vUG9pbnRhZ2UgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJChcImJvZHkgI3BvaW50YWdlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxubGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICBpZiAob2JqLnN0YXR1dCA9PSAxKSB7XHJcblxyXG4kLmFqYXgoe1xyXG4gIHR5cGU6IFwiUE9TVFwiLFxyXG4gIHVybDogXCIvYXBpL0V0dWRfcG9pbnRhZ2VcIixcclxuICBkYXRhOiB7XHJcbiAgICBwcm9tbzogJCgnI3Byb21vdGlvbicpLnZhbCgpLFxyXG4gICAgZGF0ZTogJCgnI2RhdGV0aW1lJykudmFsKCksXHJcbiAgICBoZDogb2JqLmhkLFxyXG4gIH0sXHJcbiAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGU0XCIpKSB7XHJcbiAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKVxyXG4gICAgICAuaHRtbChodG1sKVxyXG4gICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICBbMjUsIDUwLCA3NSwgMTAwLCAxMjUsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KTtcclxuICB9LFxyXG59KTtcclxufVxyXG4gIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKCcjRV9zaXR1YXRpb24nKS5zZWxlY3QyKCk7XHJcbiQoJyNGX3NpdHVhdGlvbicpLnNlbGVjdDIoKTtcclxuJCgnI1Bfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xyXG4kKCcjRXRfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIlRvYXN0IiwiU3dhbCIsIm1peGluIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJ0aW1lclByb2dyZXNzQmFyIiwiZGlkT3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wVGltZXIiLCJyZXN1bWVUaW1lciIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiaGlkZSIsInRhYmxlRGF0YSIsInNlYW5jZWFmZmljaGFnZSIsInZhcjEiLCJ2YXIyIiwidmFyMyIsInNob3ciLCJhamF4IiwidHlwZSIsInVybCIsInN1Y2Nlc3MiLCJodG1sIiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImJMZW5ndGhDaGFuZ2UiLCJsZW5ndGhNZW51IiwiZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSIsImhpZ2hsaWdodCIsImFkZENsYXNzIiwicHJvcCIsIm9uIiwiZXRhYmxpc3NlbWVudCIsInZhbCIsImZvcm1hdGlvbiIsInByb21vdGlvbiIsImRhdGUiLCJub3ciLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInNsaWNlIiwibW9udGgiLCJnZXRNb250aCIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJsaXN0Iiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiY3VycmVudFJvdyIsImNsb3Nlc3QiLCJzdGF0dXQiLCJmaW5kIiwicHVzaCIsInNlYW5jZSIsImdyb3VwZSIsImhkIiwiaGYiLCJtb2R1bGUiLCJzYWxlIiwic2FsbGUiLCJuYXR1cmUiLCJlbGVtZW50IiwiZW5zZWlnbmFudCIsImV4aXN0ZSIsImNzcyIsImZvckVhY2giLCJvYmoiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1vZGFsIiwiaWNvbiIsImJ1dHRvbiIsImF0dHIiLCJmaXJlIiwidGl0bGUiLCJ3aW5kb3ciLCJvcGVuIiwic2VsZWN0cyIsImVsZSIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsImNoZWNrZWQiLCJkZVNlbGVjdCIsImFsZXJ0IiwiZWFjaCIsInZhbHVlIiwicmVzdWx0IiwiZXJyb3IiLCJjbGljayIsInRvIiwiZnJvbSIsInNlcnZpY2UiLCJ0b3UiLCJyb3dfZXR1ZGlhbnQiLCJpZF9ldHVkaWFudCIsImV0dWRpYW50IiwianVzdGlmIiwiaXMiLCJjYXRfZW5zIiwibW90aWZfYWJzIiwib2JzIiwicHJvbW8iLCJzZWxlY3QyIl0sInNvdXJjZVJvb3QiOiIifQ==