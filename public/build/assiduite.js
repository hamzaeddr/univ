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
$(document).ready(function () {
  /////////////////function loader hide////////////
  $(".loader2").hide();

  function loader_hide() {
    $(".loader2").hide();
  } // $(".loader").hide();
  // $("#etudiant_det_modal").hide();
  /////////////////////////////////// datatable //////////////////////////


  var tableData = [];

  function seanceaffichage(var1, var2, var3) {
    $(".loader2").show();
    $.ajax({
      type: "POST",
      url: "/api/Seance_aff/" + var1 + "/" + var2 + "/" + var3,
      success: function success(html) {
        if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample")) {
          $("#dtDynamicVerticalScrollExample").DataTable().clear().destroy();
        }

        $("#dtDynamicVerticalScrollExample").html(html).DataTable({
          bLengthChange: false,
          lengthMenu: [[10, 20, 30, 40, 50, 20000000000000], [10, 15, 25, 50, 100, "All"]],
          "font-size": "3rem"
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
    return var1;
  } /////////////////dropdown-etdiants////////////////////////////


  function etudiant_situation_affichage(var1) {
    $(".loader2").show();
    $.ajax({
      type: "POST",
      url: "/api/etud_aff_situation/" + var1,
      success: function success(html) {
        // $(".loader2").hide();
        loader_hide();
        $("#Et_situation").html(html);
      },
      error: function error() {
        //  $(".loader2").hide();
        loader_hide();
        Toast.fire({
          icon: 'error',
          title: 'Probleme  !'
        });
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
      },
      error: function error() {
        $(".loader2").hide();
        Toast.fire({
          icon: 'error',
          title: 'Probleme  !'
        });
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
            $(".grid").html(html); // $(".grid").clear().destroy();
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
        $(".loader2").show();
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
            icon.removeClass('fa-spinner fa-spin').addClass("fa-clock");
            button.attr("disabled", false);
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
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !'
            });
            $(".loader2").hide();
          }
        });
      } else {
        $(".loader2").fadeOut();
        Toast.fire({
          icon: 'error',
          title: 'seance deja traité'
        }); // $(".loader2").hide();
      }

      ;
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
          setInterval(function () {
            loader_hide();
          }, 1000);
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
    setInterval(function () {
      loader_hide();
    }, 1000);
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
    $('.loader2').fadeIn();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/remove_seance/" + obj.seance,
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
            title: 'Probleme technique  !'
          });
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
  }); ////////////////////////////////:: cancel   ////////////////////////////////////:

  $("body #cancel").on("click", function () {
    $(".loader2").hide();
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
    $(".loader2").hide();
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
    $(".loader2").hide();
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
    // alert('ok');
    selects(); // $("#parlot_modal").show();

    $(".loader2").hide();
  });
  $("body #uncheck").on("click", function () {
    // alert('ok');
    deSelect(); // $("#parlot_modal").show();

    $(".loader2").hide();
  }); //////////////////////////////// pointeuse check /uncheck ////////////////////////////////////

  $("body #p_check").click(function () {
    alert('ok');
    selects(); // $("#parlot_modal").show();
  });
  $("body #p_uncheck").on("click", function () {
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
            }

            $(".loader2").hide(); ////////////////////////////////////////////////////////////////////:

          case 19:
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
        $(".loader2").hide();
        $("#F_situation").html(html);
        $("#F_situation").prop("selectedIndex", 1);
        $.ajax({
          type: "POST",
          url: "/api/Promotion_aff/" + $("#F_situation").val(),
          success: function success(html) {
            $("#P_situation").html(html);
            $("#P_situation").prop("selectedIndex", 1);
            etudiant_situation_affichage($("#P_situation").val());
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

  $("#F_situation").on("change", function () {
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function success(html) {
        $(".loader2").hide();
        $("#P_situation").html(html);
        $("#P_situation").prop("selectedIndex", 1);
        etudiant_situation_affichage($("#P_situation").val());
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
                lengthMenu: [[15, 30, 45, 60, 75, 20000000000000], [10, 15, 25, 50, 100, "All"]]
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
  }); ///////////////////////////////////////////////////////////////////////////////////////

  $('#E_situation').select2();
  $('#F_situation').select2();
  $('#P_situation').select2();
  $('#Et_situation').select2();
  $("button").on("click", function () {
    $('.loader2').fadeIn();
  });
  $(".close").on("click", function () {
    $('.loader2').fadeOut();
  });
}); /////////////////////////////////////////////////soufiane ///////////////////////////////////////////////////////////////

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-3e9a6d","vendors-node_modules_core-js_modules_es_promise_js-node_modules_regenerator-runtime_runtime_js","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-e8b614"], () => (__webpack_exec__("./assets/components/assiduite/assiduite.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJ3RyxPQUFuQjtBQUlBeEcsRUFBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZK0IsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBWTtBQUNqQy9CLElBQUFBLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBYzZFLE1BQWQ7QUFDRixHQUZEO0FBSUE3RSxFQUFBQSxDQUFDLENBQUMsUUFBRCxDQUFELENBQVkrQixFQUFaLENBQWUsT0FBZixFQUF3QixZQUFZO0FBQ2xDL0IsSUFBQUEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjeUUsT0FBZDtBQUNELEdBRkQ7QUFLQyxDQTNsQ0QsR0E0bENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYXNzaWR1aXRlL2Fzc2lkdWl0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUb2FzdCA9IFN3YWwubWl4aW4oe1xyXG4gIHRvYXN0OiB0cnVlLFxyXG4gIHBvc2l0aW9uOiBcInRvcC1lbmRcIixcclxuICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXHJcbiAgdGltZXI6IDMwMDAsXHJcbiAgdGltZXJQcm9ncmVzc0JhcjogdHJ1ZSxcclxuICBkaWRPcGVuOiAodG9hc3QpID0+IHtcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcclxuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIFN3YWwucmVzdW1lVGltZXIpO1xyXG4gIH0sXHJcbn0pO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy9mdW5jdGlvbiBsb2FkZXIgaGlkZS8vLy8vLy8vLy8vL1xyXG4gICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG5mdW5jdGlvbiBsb2FkZXJfaGlkZSgpIHtcclxuICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG59XHJcbiAgLy8gJChcIi5sb2FkZXJcIikuaGlkZSgpO1xyXG4gIC8vICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLmhpZGUoKTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZGF0YXRhYmxlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgdmFyIHRhYmxlRGF0YSA9IFtdO1xyXG4gICAgZnVuY3Rpb24gc2VhbmNlYWZmaWNoYWdlKHZhcjEsIHZhcjIsIHZhcjMpIHtcclxuICAgICAgICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICB1cmw6IFwiL2FwaS9TZWFuY2VfYWZmL1wiICsgdmFyMSArIFwiL1wiICsgdmFyMiArIFwiL1wiICsgdmFyMyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICBbMTAsIDIwLCAzMCwgNDAsNTAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHZhcjE7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd24tZXRkaWFudHMvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UodmFyMSkge1xyXG5cclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvZXR1ZF9hZmZfc2l0dWF0aW9uL1wiICsgdmFyMSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgIC8vICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgbG9hZGVyX2hpZGUoKTtcclxuICAgICAgICAgICAgICAkKFwiI0V0X3NpdHVhdGlvblwiKS5odG1sKGh0bWwpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAvLyAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgIGxvYWRlcl9oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFyMTtcclxuICAgICAgICAgIH1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAgIGZ1bmN0aW9uIGhpZ2hsaWdodCgpIHt9XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsxMywgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZVwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsxMywgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2UyXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgICAgWzEzLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICAgIFsxMywgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgJChcIi5kYXRhVGFibGVzX2xlbmd0aFwiKS5hZGRDbGFzcyhcImJzLXNlbGVjdFwiKTtcclxuICAvLy8vLy8vLy8vLy8vLy8vICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBkcm9wZG93biAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiI2V0YWJsaXNzZW1lbnRcIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgJChcIiNmb3JtYXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgJChcIiNwcm9tb3Rpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bi1zaXR1YXRpb24vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgJChcIiNFX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuICAkKFwiI0Zfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICQoXCIjUF9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9ldGFibGlzc2VtZW50Ly8vLy8vLy8vL1xyXG5cclxuICAgICAgICAgICAgJChcIiNldGFibGlzc2VtZW50XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB2YXIgZXRhYmxpc3NlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvRm9ybWF0aW9uX2FmZi9cIiArIGV0YWJsaXNzZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAgICAgICAkKFwiI2Zvcm1hdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiI2Zvcm1hdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvUHJvbW90aW9uX2FmZi9cIiArICQoXCIjZm9ybWF0aW9uXCIpLnZhbCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9tb3Rpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9Gb21hdGlvbi8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNmb3JtYXRpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZvcm1hdGlvbiA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvUHJvbW90aW9uX2FmZi9cIiArIGZvcm1hdGlvbixcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICQoXCIjcHJvbW90aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xyXG4gICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgfSxcclxuICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Byb21vdGlvbi8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICAkKFwiI3Byb21vdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UocHJvbW90aW9uLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgfSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0RhdGUvLy8vLy8vLy8vXHJcblxyXG4gICQoXCIjZGF0ZXRpbWVcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGRhdGUgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCBkYXRlLCdDUicpO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZGF0ZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICB2YXIgZGF5ID0gKFwiMFwiICsgbm93LmdldERhdGUoKSkuc2xpY2UoLTIpO1xyXG4gIHZhciBtb250aCA9IChcIjBcIiArIChub3cuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7XHJcbiAgdmFyIHRvZGF5ID0gbm93LmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXk7XHJcblxyXG4gICQoXCIjZGF0ZXRpbWVcIikudmFsKHRvZGF5KTtcclxuICB2YXIgcHJvbW90aW9uID0gJChcIiNwcm9tb3Rpb25cIikudmFsKCk7XHJcbiAgbGV0IGxpc3QgPSBbXTtcclxuICBzZWFuY2VhZmZpY2hhZ2UocHJvbW90aW9uLCB0b2RheSwnQ1InKTtcclxuXHJcblxyXG4gICQoXCJib2R5ICNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVcIikub24oXCJjbGlja1wiLCBcInRyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZWxlY3RlZCA9ICQodGhpcykuaGFzQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xyXG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodHlcIik7XHJcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlIHRyXCIpLnJlbW92ZUNsYXNzKFwib2RkXCIpO1xyXG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcImV2ZW5cIik7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZCkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwiaGlnaGxpZ2h0eVwiKTtcclxuICAgICAgdmFyIGN1cnJlbnRSb3cgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKTtcclxuICAgICAgdmFyIHN0YXR1dCA9IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEpXCIpLmh0bWwoKTtcclxuICAgICAgbGlzdCA9IFtdO1xyXG4gICAgICBsaXN0LnB1c2goe1xyXG4gICAgICAgIHByb21vdGlvbjogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMilcIikuaHRtbCgpLFxyXG4gICAgICAgIHNlYW5jZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMylcIikuaHRtbCgpLFxyXG4gICAgICAgIGdyb3VwZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTApXCIpLmh0bWwoKSxcclxuICAgICAgICBoZDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoOClcIikuaHRtbCgpLFxyXG4gICAgICAgIGhmOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg5KVwiKS5odG1sKCksXHJcbiAgICAgICAgbW9kdWxlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxNClcIikuaHRtbCgpLFxyXG4gICAgICAgIHNhbGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDE1KVwiKS5odG1sKCksXHJcbiAgICAgICAgc2FsbGU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDUpXCIpLmh0bWwoKSxcclxuICAgICAgICBuYXR1cmU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDQpXCIpLmh0bWwoKSxcclxuICAgICAgICBlbGVtZW50OiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg2KVwiKS5odG1sKCksXHJcbiAgICAgICAgZW5zZWlnbmFudDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoNylcIikuaHRtbCgpLFxyXG4gICAgICAgIGV4aXN0ZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTEpXCIpLmh0bWwoKSxcclxuICAgICAgICBzdGF0dXQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDEpXCIpLmh0bWwoKSxcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcclxuICAgICAgaWYgKHN0YXR1dCA9PSAnMScpIHtcclxuICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTtcclxuICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdGF0dXQgPT0gJzInKSB7XHJcbiAgICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLnNob3coKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoc3RhdHV0ID09ICcxJyB8fCBzdGF0dXQgPT0gJzInKXtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIHVybDogXCIvYXBpL2NvdW50X3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICBcclxuICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gJChcIi5ncmlkXCIpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuICB9KTtcclxufVxyXG4vLyBjb25zb2xlLmxvZyhsaXN0KTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogcG9wIHVwIGV0dWRpYW50IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLm9uKFwiZGJsY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI2V0dWRpYW50LW1vZGFsXCIpLm1vZGFsKFwidG9nZ2xlXCIpO1xyXG4gICAgJChcIiNldHVkaWFudC1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgJChcIiNTZWFuY2VfZXR1ZFwiKS52YWwob2JqLnNlYW5jZSk7XHJcbiAgICAkKFwiI3NhbGxlX2V0dWRcIikudmFsKG9iai5uYXR1cmUgKyAnIC8gJyArIG9iai5zYWxsZSk7XHJcbiAgICAkKFwiI2VsZW1lbnRfZXR1ZFwiKS52YWwob2JqLmVsZW1lbnQpO1xyXG4gICAgJChcIiNFbnNlaWduYW50X2V0dWRcIikudmFsKG9iai5lbnNlaWduYW50KTtcclxuICAgICQoXCIjSGRfZXR1ZFwiKS52YWwob2JqLmhkKTtcclxuICAgICQoXCIjSGZfZXR1ZFwiKS52YWwob2JqLmhmKTtcclxuICAgICQoXCIjZ3JvdXBfZXR1ZFwiKS52YWwob2JqLmdyb3VwZSk7XHJcbiAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9FdHVkX2FmZlwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgIGdyb3VwZTogb2JqLmdyb3VwZSxcclxuICAgICAgICAgIGV4aXN0ZTogb2JqLmV4aXN0ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAvLyAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikpIHtcclxuICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpXHJcbiAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgIFsxMiwgMjQsIDM2LCA0OCwgNjAsIDIwMDAwMDAwMDAwMDAwXSxcclxuICAgICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHRyYWl0ZW1lbnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICN0cmFpdGVfZXByZXV2ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpY29uID0gJCh0aGlzKS5maW5kKCdpJyk7XHJcbiAgICB2YXIgYnV0dG9uID0gJCh0aGlzKTtcclxuICAgIGJ1dHRvbi5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcblxyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgICAgaWYgKG9iai5ncm91cGUgPT09IFwiXCIpIHtcclxuICAgICAgICBvYmouZ3JvdXBlID0gXCJlbXB0eVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICggb2JqLnN0YXR1dCAhPSAnMScpe1xyXG4gICAgICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xyXG4gICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1jbG9jaycpLmFkZENsYXNzKFwiZmEtc3Bpbm5lciBmYS1zcGluXCIpO1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIHR5cGUgOiAndHJhaXRlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBpY29uLnJlbW92ZUNsYXNzKCdmYS1zcGlubmVyIGZhLXNwaW4nKS5hZGRDbGFzcyhcImZhLWNsb2NrXCIpO1xyXG4gICAgICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnc2VhbmNlIHRyYWl0w6kgYXZlYyBzdWNjZXMnLFxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkKFwiLmdyaWRcIikuaHRtbChodG1sKTtcclxuICAgICAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcclxuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgJChcIi5sb2FkZXIyXCIpLmZhZGVPdXQoKTtcclxuICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICB0aXRsZTogJ3NlYW5jZSBkZWphIHRyYWl0w6knLFxyXG5cclxuICAgICAgfSlcclxuICAgICAgLy8gJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgIH07XHJcbiAgICBcclxuICB9KTtcclxuICAgICAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHJldHJhaXRlciAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG5cclxuICAkKFwiYm9keSAjcmV0cmFpdGVyX3NlYW5jZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgIGlmIChvYmouZ3JvdXBlID09PSBcIlwiKSB7XHJcbiAgICAgICAgb2JqLmdyb3VwZSA9IFwiZW1wdHlcIjtcclxuICAgICAgfVxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLy8gcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcclxuICAgICAgICAgIC8vIGhkOiBvYmouaGQsXHJcbiAgICAgICAgICAvLyBtb2R1bGU6IG9iai5tb2R1bGUsXHJcbiAgICAgICAgICAvLyBncm91cGU6IG9iai5ncm91cGUsXHJcbiAgICAgICAgICAvLyBzYWxlOiBvYmouc2FsZSxcclxuICAgICAgICAgIHR5cGUgOiAncmV0cmFpdGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICQoXCIuZ3JpZFwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAkKFwiI3JldHJhaXRlcl9zZWFuY2VcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuaGlkZSgpO1xyXG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLmhpZGUoKTtcclxuICAgICAgICAgICQoXCIjcmV0cmFpdGVyX3NlYW5jZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xyXG4gICAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xyXG4gICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsb2FkZXJfaGlkZSgpO1xyXG4gICAgICAgIH0sMTAwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBmZXVpbGUgcGRmICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2Fzc2lkdWl0ZV9wcmludFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgbG9hZGVyX2hpZGUoKTtcclxuICB9LDEwMDApO1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZi8nK29iai5zZWFuY2UsICdfYmxhbmsnKTtcclxuXHJcbn0pO1xyXG59KTtcclxuXHJcbi8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLyAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogc2l0dWF0aW9uIHByZXNlbnRpbCBwZGYgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuLy8gICAkKFwiYm9keSAjc2l0dWF0aW9uX3ByZXNlbnRpZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAvLyBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG4vLyAgICAgICB2YXIgZXR1ZGlhbnQgPSAkKFwiI0V0X3NpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gICAgICAgLy8gdmFyIGRhdGVfZGVidXQgPSAkKFwiI2RhdGV0aW1lRHNpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gICAgICAgLy8gdmFyIGRhdGVfZmluID0gJChcIiNkYXRldGltZUZzaXR1YXRpb25cIikudmFsKCk7XHJcblxyXG4vLyAgICAgd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGZfcHJlc2VudGllbC8nK2V0dWRpYW50LCAnX2JsYW5rJyk7XHJcblxyXG4vLyAvLyB9KTtcclxuLy8gfSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHJlbW92ZSBzZWFuY2UgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI3JlbW92ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5sb2FkZXIyJykuZmFkZUluKCk7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9yZW1vdmVfc2VhbmNlL1wiK29iai5zZWFuY2UsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSB0ZWNobmlxdWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZXhpc3RlICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNleGlzdGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9leGlzdF9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgfSk7XHJcbiAgIFxyXG59KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBzaWduICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNzaWduXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9zaWduX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdzZWFuY2Ugc2lnbsOpJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICBcclxufSk7XHJcblxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogY2FuY2VsICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICNjYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgdXJsOiBcIi9hcGkvY2FuY2VsX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBkZXZlcm91ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbiAgJChcImJvZHkgI2RldmVyb3VpbGxlci1tb2RhbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9kZXZlcl9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICB9KTtcclxuICAgXHJcbn0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogbW9kaWZpZXJfc2FsbGUgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcclxuICAkKFwiYm9keSAjbW9kaXNhbGxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgIHZhciBzYWxsZSA9ICQoXCIjc2FsbGVcIikudmFsKCk7XHJcbiAgICBcclxuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcblxyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL21vZGlmaWVyX3NhbGxlL1wiK29iai5zZWFuY2UrXCIvXCIrc2FsbGUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxyXG4gICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XHJcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBtb2RpZmllcl9zYWxsZSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4gICQoXCJib2R5ICN2ZXJvdWlsbGVyLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xyXG5cclxuICAgICAgJC5hamF4KHtcclxuICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9sb2NrX3NlYW5jZS9cIitvYmouc2VhbmNlLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcclxuICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gIH0pO1xyXG4gICBcclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJsb3QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNlbGVjdHMoKXsgIFxyXG4gIHZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXHJcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxyXG4gICAgICAgICAgZWxlW2ldLmNoZWNrZWQ9dHJ1ZTsgIFxyXG4gIH0gIFxyXG59ICBcclxuZnVuY3Rpb24gZGVTZWxlY3QoKXsgIFxyXG4gIHZhciBlbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2NoaycpOyAgXHJcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxyXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxyXG4gICAgICAgICAgZWxlW2ldLmNoZWNrZWQ9ZmFsc2U7ICBcclxuICAgICAgICBcclxuICB9ICBcclxufSAgICAgICAgICBcclxuJChcImJvZHkgI2NoZWNrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyBhbGVydCgnb2snKTtcclxuc2VsZWN0cygpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xyXG4kKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG59KTtcclxuJChcImJvZHkgI3VuY2hlY2tcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vIGFsZXJ0KCdvaycpO1xyXG5kZVNlbGVjdCgpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xyXG4kKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcG9pbnRldXNlIGNoZWNrIC91bmNoZWNrIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJChcImJvZHkgI3BfY2hlY2tcIikuY2xpY2soZnVuY3Rpb24gKCkgIHtcclxuYWxlcnQoJ29rJyk7XHJcbnNlbGVjdHMoKTsgIC8vICQoXCIjcGFybG90X21vZGFsXCIpLnNob3coKTtcclxuIFxyXG59KTtcclxuJChcImJvZHkgI3BfdW5jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuYWxlcnQoJ29rJyk7XHJcbmRlU2VsZWN0KCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XHJcbiBcclxufSk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJsb3RfaGQtZiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiQoXCJib2R5ICNwYXJsb3Rfc2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgdmFyIGhkID0gJChcIiNoZFwiKS52YWwoKTtcclxuICB2YXIgaGYgPSAkKFwiI2hmXCIpLnZhbCgpO1xyXG4gIHZhciBkYXRlID0gJChcIiNkYXRldGltZVwiKS52YWwoKTtcclxuICAkLmFqYXgoe1xyXG4gICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFwiL2FwaS9wYXJsb3RcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgaGQ6IGhkLFxyXG4gICAgICBoZjogaGYsXHJcbiAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgXHJcbiAgICB9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI3BhcmxvdF9kYXRhdGFibGVcIikpIHtcclxuICAgICAgICAgICQoXCIjcGFybG90X2RhdGF0YWJsZVwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgICAkKFwiI3BhcmxvdF9kYXRhdGFibGVcIilcclxuICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgIC5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xyXG5cclxuICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgIH0pO1xyXG4gIH0sXHJcbiAgfSk7XHJcbiBcclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBhcmxvdF90cmFpdGVtZW50IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuJChcImJvZHkgI3BhcmxvdF90cmFpdGVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gXHJcbiAgbGV0IHJlc3VsdDtcclxuICAgICAgdmFyIHZhbCA9IFtdO1xyXG4gICAgICAkKCc6Y2hlY2tib3g6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oaSl7XHJcbiAgICAgICAgdmFsW2ldID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZvcihsZXQgdmFsdWUgb2YgdmFsKXtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBheGlvcy5wb3N0KCcvYWRtaW5pc3RyYXRpb24vZXByZXV2ZS9pbXBvcnQnLCB7XHJcbiAgICAgIC8vICAgc2VhbmNlOiB2YWx1ZSxcclxuICAgICAgLy8gICBkYXRlOiAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLFxyXG4gICAgICAvLyAgIHR5cGUgOiAndHJhaXRlJyxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICByZXN1bHQgPSBhd2FpdCAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL3RyYWl0ZW1lbnRfYXNzaWR1aXRlXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgc2VhbmNlOiB2YWx1ZSxcclxuICAgICAgICAgIGRhdGU6ICQoXCIjZGF0ZXRpbWVcIikudmFsKCksXHJcbiAgICAgICAgICB0eXBlIDogJ3RyYWl0ZScsXHJcbiAgICAgICAgfSxcclxuLy8gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4vLyBhbGVydChodG1sKTtcclxuLy8gICAgIC8vIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmLycraHRtbCwgJ19ibGFuaycpO1xyXG4vLyAgIH0sXHJcblxyXG4gICAgICB9KTtcclxufSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgdmFsdWUgb2YgdmFsKXtcclxuXHJcbiB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZi8nK3ZhbHVlLCAnX2JsYW5rJyk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XHJcbn0pO1xyXG5cclxuXHJcblxyXG4vLyAkKFwiYm9keSAjc2l0dWF0aW9uX3NlYXJjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gZXR1ZGlhbnQgPSAkKFwiI0V0X3NpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gZGF0ZWQgPSAkKFwiI2RhdGV0aW1lRHNpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gZGF0ZWYgPSAkKFwiI2RhdGV0aW1lRnNpdHVhdGlvblwiKS52YWwoKTtcclxuLy8gJC5hamF4KHtcclxuLy8gICB0eXBlOiBcIlBPU1RcIixcclxuLy8gICB1cmw6IFwiL2FwaS9hZmZfc2l0dWF0aW9uXCIsXHJcbi8vICAgZGF0YToge1xyXG4vLyAgICAgZXR1ZGlhbnQgOiBldHVkaWFudCxcclxuLy8gICAgIGRhdGVkIDogZGF0ZWQsXHJcbi8vICAgICBkYXRlZiA6IGRhdGVmICxcclxuLy8gICB9LFxyXG4vLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbi8vICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKSkge1xyXG4vLyAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9zaXR1YXRpb25cIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XHJcbi8vICAgICB9XHJcbi8vICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9zaXR1YXRpb25cIilcclxuLy8gICAgICAgLmh0bWwoaHRtbClcclxuLy8gICAgICAgLkRhdGFUYWJsZSh7XHJcbi8vICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbi8vICAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4vLyAgICAgICAgICAgWzExLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcclxuLy8gICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcclxuLy8gICAgICAgICBdLFxyXG4vLyAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxyXG4vLyAgICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH0pO1xyXG4vLyB9KTtcclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vZXRhYmxpc3NlbWVudC8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNFX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXRhYmxpc3NlbWVudCA9ICQodGhpcykudmFsKCk7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvRm9ybWF0aW9uX2FmZi9cIiArIGV0YWJsaXNzZW1lbnQsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI0Zfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgJChcIiNGX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hcGkvUHJvbW90aW9uX2FmZi9cIiArICQoXCIjRl9zaXR1YXRpb25cIikudmFsKCksXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgICAgIGV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UoJChcIiNQX3NpdHVhdGlvblwiKS52YWwoKSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLy8vLy8vLy8vLy8vLy9Gb21hdGlvbi8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNGX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgZm9ybWF0aW9uLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNQX3NpdHVhdGlvblwiKS5odG1sKGh0bWwpO1xyXG4gICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XHJcbiAgICAgICAgZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSgkKFwiI1Bfc2l0dWF0aW9uXCIpLnZhbCgpKTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xyXG4gICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIC8vLy8vLy8vLy8vLy8vL1Byb21vdGlvbi8vLy8vLy8vLy9cclxuXHJcbiAgJChcIiNQX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcclxuICAgIGV0dWRpYW50X3NpdHVhdGlvbl9hZmZpY2hhZ2UocHJvbW90aW9uKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuIFxyXG4gICAgICAgICAgICBcclxuLy8gIC8vLy8vLy8vLy8vLy8vLy8vL2V4dHJhY3Rpb24vLy8vLy8vLy8vLy8vLy8vOlxyXG4vLyAgJCgnI2NyZWF0ZV9leHRyYWN0aW9uJykuY2xpY2soZnVuY3Rpb24oKXsgXHJcblxyXG4vLyAgIHZhciB0byA9ICQoJyNkYXRldGltZUZzaXR1YXRpb24nKS52YWwoKTtcclxuLy8gICB2YXIgZnJvbSA9ICQoJyNkYXRldGltZURzaXR1YXRpb24nKS52YWwoKTtcclxuLy8gICB2YXIgc2VydmljZSA9ICQoJyNFX3NpdHVhdGlvbicpLnZhbCgpO1xyXG4vLyAgIHZhciBmb3JtYXRpb24gPSAkKCcjRl9zaXR1YXRpb24nKS52YWwoKTtcclxuLy8gICB2YXIgcHJvbW90aW9uID0gJCgnI1Bfc2l0dWF0aW9uJykudmFsKCk7XHJcblxyXG5cclxuLy8gICB2YXIgdG91ID0gICQoJ2lucHV0W25hbWU9XCJ0b3VzXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICBcclxuLy8gICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJ7eyBwYXRoKCdleHRyYWN0aW9uJykgfX0/VG89XCIrdG8rXCImRnJvbT1cIitmcm9tO1xyXG4vLyAgICAgICAgICB1cmwgPSBcIi9hcGkvZ2VuZXJhdGVfZXh0cmFjdGlvbj9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb20rXCImZm9ybWF0aW9uPVwiK2Zvcm1hdGlvbitcIiZwcm9tb3Rpb249XCIrcHJvbW90aW9uK1wiJlNlcnZpY2U9XCIrc2VydmljZStcIiZUb3U9XCIrdG91K1wiJnR5cGU9bm9ybWFsXCI7O1xyXG4vLyAgICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICAgICAgIFxyXG5cclxuLy8gICAgICAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAvLy8vLy8vLy8vLy8vLy8vLy9leHRyYWN0aW9uIHN0YWdlLy8vLy8vLy8vLy8vLy8vLzpcclxuICQoJyNjcmVhdGVfZXh0cmFjdGlvbl9zdGFnZScpLmNsaWNrKGZ1bmN0aW9uKCl7IFxyXG5cclxuICB2YXIgdG8gPSAkKCcjZGF0ZXRpbWVGc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgdmFyIGZyb20gPSAkKCcjZGF0ZXRpbWVEc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgdmFyIHNlcnZpY2UgPSAkKCcjRV9zaXR1YXRpb24nKS52YWwoKTtcclxuICB2YXIgZm9ybWF0aW9uID0gJCgnI0Zfc2l0dWF0aW9uJykudmFsKCk7XHJcbiAgdmFyIHByb21vdGlvbiA9ICQoJyNQX3NpdHVhdGlvbicpLnZhbCgpO1xyXG5cclxuXHJcbiAgdmFyIHRvdSA9ICAkKCdpbnB1dFtuYW1lPVwidG91c1wiXTpjaGVja2VkJykudmFsKCk7XHJcbiAgXHJcbiAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwie3sgcGF0aCgnZXh0cmFjdGlvbicpIH19P1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbTtcclxuICAgICAgICAgdXJsID0gXCIvYXBpL2dlbmVyYXRlX2V4dHJhY3Rpb24/VG89XCIrdG8rXCImRnJvbT1cIitmcm9tK1wiJmZvcm1hdGlvbj1cIitmb3JtYXRpb24rXCImcHJvbW90aW9uPVwiK3Byb21vdGlvbitcIiZTZXJ2aWNlPVwiK3NlcnZpY2UrXCImVG91PVwiK3RvdStcIiZ0eXBlPXN0YWdlXCI7XHJcbiAgICAgICAgIHNlcnZpY2U7XHJcbiAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9KTsgICAgICAgIFxyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZXR1ZGlhbnQgZGV0YWlscyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5vbihcImRibGNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICBcclxuICAgIC8vIGFsZXJ0KHN0YXR1dCk7XHJcbiAgICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIFxyXG4gICAgICAgaWYgKG9iai5zdGF0dXQgPT0gMSkge1xyXG4gICAgICAgICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLm1vZGFsKFwidG9nZ2xlXCIpO1xyXG4gICAgICAgICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICB2YXIgcm93X2V0dWRpYW50ID0gJCh0aGlzKS5jbG9zZXN0KFwidHJcIik7XHJcbiAgICAgICAgdmFyIGlkX2V0dWRpYW50ID0gcm93X2V0dWRpYW50LmZpbmQoXCJ0ZDplcSgwKVwiKS5odG1sKCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hcGkvRXR1ZF9kZXRhaWxzXCIsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGV0dWRpYW50OiBpZF9ldHVkaWFudCxcclxuICAgICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XHJcbiAgICAgICAgICAgICQoJyNtb2RhbF9ldHVkX2RldCcpLmh0bWwoaHRtbCk7XHJcbiAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgfVxyXG5cclxuICAgICBcclxuICAgICBcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy92YWxpZGVyIGV0dWRpYW50IGRldGFpbHMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgJChcImJvZHkgI3NhdmVfZXR1ZF9kZXRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQganVzdGlmID0gMDtcclxuICAgIGlmICgkKCdpbnB1dC5qdXN0aWZpZXInKS5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICBqdXN0aWYgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIi9hcGkvRXR1ZF9kZXRhaWxzX3ZhbGlkZVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZXR1ZGlhbnQ6ICQoJyNJRF9BZG1pc3Npb24nKS52YWwoKSxcclxuICAgICAgICBzZWFuY2U6ICQoJyNJZF9TZWFuY2UnKS52YWwoKSxcclxuICAgICAgICBjYXRfZW5zOiAkKCcjQ2F0ZWdvcmllX2VucycpLnZhbCgpLFxyXG4gICAgICAgIG1vdGlmX2FiczogJCgnI21vdGlmX2FicycpLnZhbCgpLFxyXG4gICAgICAgIG9iczogJCgnI29icycpLnZhbCgpLFxyXG4gICAgICAgIGp1c3RpZjoganVzdGlmLFxyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvRXR1ZF9hZmZcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcclxuICAgICAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXHJcbiAgICAgICAgICAgICAgZ3JvdXBlOiBvYmouZ3JvdXBlLFxyXG4gICAgICAgICAgICAgIGV4aXN0ZTogb2JqLmV4aXN0ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIilcclxuICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXHJcbiAgICAgICAgICAgICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgICAgICAgICBbMTUsIDMwLCA0NSwgNjAsIDc1LCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgVG9hc3QuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikubW9kYWwoXCJ0b2dnbGVcIik7XHJcbiAgICAgICAgJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICBcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1BvaW50YWdlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICQoXCJib2R5ICNwb2ludGFnZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG5cclxubGlzdC5mb3JFYWNoKChvYmopID0+IHtcclxuICBpZiAob2JqLnN0YXR1dCA9PSAxKSB7XHJcblxyXG4kLmFqYXgoe1xyXG4gIHR5cGU6IFwiUE9TVFwiLFxyXG4gIHVybDogXCIvYXBpL0V0dWRfcG9pbnRhZ2VcIixcclxuICBkYXRhOiB7XHJcbiAgICBwcm9tbzogJCgnI3Byb21vdGlvbicpLnZhbCgpLFxyXG4gICAgZGF0ZTogJCgnI2RhdGV0aW1lJykudmFsKCksXHJcbiAgICBoZDogb2JqLmhkLFxyXG4gIH0sXHJcbiAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGU0XCIpKSB7XHJcbiAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKVxyXG4gICAgICAuaHRtbChodG1sKVxyXG4gICAgICAuRGF0YVRhYmxlKHtcclxuICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICBbMTYsIDMyLCA0OCwgNjQsIDc0LCAyMDAwMDAwMDAwMDAwMF0sXHJcbiAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSk7XHJcbiAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XHJcbiAgfSxcclxuICBlcnJvcjpmdW5jdGlvbigpe1xyXG4gICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcclxuICAgICBUb2FzdC5maXJlKHtcclxuICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcclxuICAgICAgICB9KTtcclxufSxcclxuXHJcbn0pO1xyXG59XHJcbiAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiQoJyNFX3NpdHVhdGlvbicpLnNlbGVjdDIoKTtcclxuJCgnI0Zfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xyXG4kKCcjUF9zaXR1YXRpb24nKS5zZWxlY3QyKCk7XHJcbiQoJyNFdF9zaXR1YXRpb24nKS5zZWxlY3QyKCk7XHJcblxyXG5cclxuXHJcbiQoXCJidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICQoJy5sb2FkZXIyJykuZmFkZUluKCk7XHJcbn0pO1xyXG5cclxuJChcIi5jbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcubG9hZGVyMicpLmZhZGVPdXQoKTtcclxufSk7XHJcblxyXG5cclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9zb3VmaWFuZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhpZGUiLCJsb2FkZXJfaGlkZSIsInRhYmxlRGF0YSIsInNlYW5jZWFmZmljaGFnZSIsInZhcjEiLCJ2YXIyIiwidmFyMyIsInNob3ciLCJhamF4IiwidHlwZSIsInVybCIsInN1Y2Nlc3MiLCJodG1sIiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImJMZW5ndGhDaGFuZ2UiLCJsZW5ndGhNZW51IiwiZXJyb3IiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSIsImhpZ2hsaWdodCIsImFkZENsYXNzIiwicHJvcCIsIm9uIiwiZXRhYmxpc3NlbWVudCIsInZhbCIsImZvcm1hdGlvbiIsInByb21vdGlvbiIsImRhdGUiLCJub3ciLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInNsaWNlIiwibW9udGgiLCJnZXRNb250aCIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJsaXN0Iiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiY3VycmVudFJvdyIsImNsb3Nlc3QiLCJzdGF0dXQiLCJmaW5kIiwicHVzaCIsInNlYW5jZSIsImdyb3VwZSIsImhkIiwiaGYiLCJtb2R1bGUiLCJzYWxlIiwic2FsbGUiLCJuYXR1cmUiLCJlbGVtZW50IiwiZW5zZWlnbmFudCIsImV4aXN0ZSIsImNzcyIsImZvckVhY2giLCJvYmoiLCJkYXRhIiwibW9kYWwiLCJidXR0b24iLCJhdHRyIiwiZmFkZU91dCIsInNldEludGVydmFsIiwid2luZG93Iiwib3BlbiIsImZhZGVJbiIsInNlbGVjdHMiLCJlbGUiLCJnZXRFbGVtZW50c0J5TmFtZSIsImkiLCJsZW5ndGgiLCJjaGVja2VkIiwiZGVTZWxlY3QiLCJjbGljayIsImFsZXJ0IiwiZWFjaCIsInZhbHVlIiwicmVzdWx0IiwiY29uc29sZSIsInRvIiwiZnJvbSIsInNlcnZpY2UiLCJ0b3UiLCJyb3dfZXR1ZGlhbnQiLCJpZF9ldHVkaWFudCIsImV0dWRpYW50IiwianVzdGlmIiwiaXMiLCJjYXRfZW5zIiwibW90aWZfYWJzIiwib2JzIiwicHJvbW8iLCJzZWxlY3QyIl0sInNvdXJjZVJvb3QiOiIifQ==