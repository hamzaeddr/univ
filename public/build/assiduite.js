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
        $(".loader2").hide();

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
        $(".loader2").hide(); // loader_hide();

        $("#Et_situation").html(html);
      },
      error: function error() {
        $(".loader2").hide(); //  loader_hide();

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
  // /////////////////////////////////dropdown-situation////////////////////////////
  //   $("#E_situation").prop("selectedIndex", 1);
  //   $("#F_situation").prop("selectedIndex", 1);
  //   $("#P_situation").prop("selectedIndex", 1);
  /////////////////////////////////////////////etablissement//////////

  $("#etablissement").on("change", function () {
    $(".loader2").show();
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
    $(".loader2").show();
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function success(html) {
        $(".loader2").hide();
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
    $(".loader2").show();
    var icon = $(this).find('i');
    var button = $(this);
    list.forEach(function (obj) {
      if (obj.groupe === "") {
        obj.groupe = "empty";
      }

      if (obj.statut != '1') {
        button.attr("disabled", true); // $(".loader2").show();

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
            $(".loader2").hide();
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
        $(".loader2").hide();
        Toast.fire({
          icon: 'error',
          title: 'seance deja traité'
        }); // $(".loader2").hide();
      }

      ;
    });
  }); ////////////////////////////////:: retraiter  ////////////////////////////////////:

  $("body #retraiter_seance").on("click", function () {
    $(".loader2").show();
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
    $(".loader2").show();
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
    // $('.loader2').fadeIn();
    $(".loader2").show();
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
    $(".loader2").show();
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
    $(".loader2").show();
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
    $(".loader2").show();
    list.forEach(function (obj) {
      $.ajax({
        type: "POST",
        url: "/api/lock_seance/" + obj.seance,
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
    // alert('ok');
    selects(); // $("#parlot_modal").show();
  });
  $("body #p_uncheck").on("click", function () {
    // alert('ok');
    deSelect(); // $("#parlot_modal").show();
  }); ////////////////////////////////::  ////////////////////////////////////:
  //////////////////////////////// parlot_hd-f ////////////////////////////////////

  $("body #parlot_search").on("click", function () {
    $(".loader2").show();
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
            }

            $(".loader2").hide(); ////////////////////////////////////////////////////////////////////:

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9, 15]]);
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
    $(".loader2").show();
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
    $(".loader2").show();
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
    $(".loader2").show();
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
    $(".loader2").show();
    var to = $('#datetimeFsituation').val();
    var from = $('#datetimeDsituation').val();
    var service = $('#E_situation').val();
    var formation = $('#F_situation').val();
    var promotion = $('#P_situation').val();
    var tou = $('input[name="tous"]:checked').val();
    $(".loader2").hide(); // window.location.href = "{{ path('extraction') }}?To="+to+"&From="+from;

    url = "/api/generate_extraction?To=" + to + "&From=" + from + "&formation=" + formation + "&promotion=" + promotion + "&Service=" + service + "&Tou=" + tou + "&type=stage";
    service;
    window.open(url);
  }); //////////////////////////etudiant details ////////////////////////////////////////////

  $("body #dtDynamicVerticalScrollExample2").on("dblclick", "tr", function () {
    var _this = this;

    $(".loader2").show(); // alert(statut);

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
            $(".loader2").hide();
            $('#modal_etud_det').html(html);
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
    $(".loader2").show();
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
        $(".loader2").hide();
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
              $(".loader2").hide();

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
  }); ////////////////////////// PDF _ Synthese /////////////////////////////////////////////////////////////

  $("body #synthese_seance").on("click", function () {
    $(".loader2").show();
    setInterval(function () {
      loader_hide();
    }, 1000);
    var date = $("#datetime").val();
    window.open('/assiduite/assiduites/pdfsynthese/' + date, '_blank');
  }); ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js-no-88c317","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-2de272","vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_f-e8b614"], () => (__webpack_exec__("./assets/components/assiduite/assiduite.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUQsQ0FBWStCLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQVk7QUFDbEMvQixJQUFBQSxDQUFDLENBQUMsVUFBRCxDQUFELENBQWN1RyxPQUFkO0FBQ0QsR0FGRDtBQUtDLENBdm9DRCxHQXdvQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hc3NpZHVpdGUvYXNzaWR1aXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvYXN0ID0gU3dhbC5taXhpbih7XG4gIHRvYXN0OiB0cnVlLFxuICBwb3NpdGlvbjogXCJ0b3AtZW5kXCIsXG4gIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcbiAgdGltZXI6IDMwMDAsXG4gIHRpbWVyUHJvZ3Jlc3NCYXI6IHRydWUsXG4gIGRpZE9wZW46ICh0b2FzdCkgPT4ge1xuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcbiAgfSxcbn0pO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvLy8vLy8vLy8vLy8vLy8vL2Z1bmN0aW9uIGxvYWRlciBoaWRlLy8vLy8vLy8vLy8vXG4gICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG5cbmZ1bmN0aW9uIGxvYWRlcl9oaWRlKCkge1xuICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xufVxuICAvLyAkKFwiLmxvYWRlclwiKS5oaWRlKCk7XG4gIC8vICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLmhpZGUoKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGRhdGF0YWJsZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICB2YXIgdGFibGVEYXRhID0gW107XG4gICAgZnVuY3Rpb24gc2VhbmNlYWZmaWNoYWdlKHZhcjEsIHZhcjIsIHZhcjMpIHtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcblxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogXCIvYXBpL1NlYW5jZV9hZmYvXCIgKyB2YXIxICsgXCIvXCIgKyB2YXIyICsgXCIvXCIgKyB2YXIzLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZVwiKSkge1xuICAgICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpXG4gICAgICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgICAgICAuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgICAgICAgICBbMTAsIDIwLCAzMCwgNDAsNTAsIDIwMDAwMDAwMDAwMDAwXSxcbiAgICAgICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiM3JlbVwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxuICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdmFyMTtcbiAgICAgICAgfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd24tZXRkaWFudHMvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgZnVuY3Rpb24gZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSh2YXIxKSB7XG4gICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IFwiL2FwaS9ldHVkX2FmZl9zaXR1YXRpb24vXCIgKyB2YXIxLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAvLyBsb2FkZXJfaGlkZSgpO1xuICAgICAgICAkKFwiI0V0X3NpdHVhdGlvblwiKS5odG1sKGh0bWwpOyAgIFxuICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgIC8vICBsb2FkZXJfaGlkZSgpO1xuICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdmFyMTtcbiAgICB9XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgICBmdW5jdGlvbiBoaWdobGlnaHQoKSB7fVxuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgICAgWzEzLCAyNSwgMzUsIDUwLCAxMDAsIDIwMDAwMDAwMDAwMDAwXSxcbiAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9wb2ludGV1c2VcIikuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxuICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3BvaW50ZXVzZTJcIikuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgICBbMTMsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxuICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICBsZW5ndGhNZW51OiBbXG4gICAgICAgICAgICAgIFsxMywgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIikuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJChcIi5kYXRhVGFibGVzX2xlbmd0aFwiKS5hZGRDbGFzcyhcImJzLXNlbGVjdFwiKTtcbiAgLy8vLy8vLy8vLy8vLy8vLyAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGRyb3Bkb3duIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgJChcIiNldGFibGlzc2VtZW50XCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xuICAkKFwiI2Zvcm1hdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcbiAgJChcIiNwcm9tb3Rpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duLXNpdHVhdGlvbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgJChcIiNFX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcbi8vICAgJChcIiNGX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcbi8vICAgJChcIiNQX3NpdHVhdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZXRhYmxpc3NlbWVudC8vLy8vLy8vLy9cblxuICAgICQoXCIjZXRhYmxpc3NlbWVudFwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xuICAgICAgdmFyIGV0YWJsaXNzZW1lbnQgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHVybDogXCIvYXBpL0Zvcm1hdGlvbl9hZmYvXCIgKyBldGFibGlzc2VtZW50LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgJChcIiNmb3JtYXRpb25cIikuaHRtbChodG1sKTtcbiAgICAgICAgICAkKFwiI2Zvcm1hdGlvblwiKS5wcm9wKFwic2VsZWN0ZWRJbmRleFwiLCAxKTtcblxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogXCIvYXBpL1Byb21vdGlvbl9hZmYvXCIgKyAkKFwiI2Zvcm1hdGlvblwiKS52YWwoKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICAgICQoXCIjcHJvbW90aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xuICAgICAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9Gb21hdGlvbi8vLy8vLy8vLy9cblxuICAkKFwiI2Zvcm1hdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgICB2YXIgZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgZm9ybWF0aW9uLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNwcm9tb3Rpb25cIikuaHRtbChodG1sKTtcbiAgICAgICAgJChcIiNwcm9tb3Rpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XG4gICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcbiAgICAgIH0sXG4gICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxuICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9Qcm9tb3Rpb24vLy8vLy8vLy8vXG5cbiAgJChcIiNwcm9tb3Rpb25cIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9tb3Rpb24gPSAkKHRoaXMpLnZhbCgpO1xuICAgIHNlYW5jZWFmZmljaGFnZShwcm9tb3Rpb24sICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XG4gIH0pO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vRGF0ZS8vLy8vLy8vLy9cblxuICAkKFwiI2RhdGV0aW1lXCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGF0ZSA9ICQodGhpcykudmFsKCk7XG4gICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCBkYXRlLCdDUicpO1xuICB9KTtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gZGF0ZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICB2YXIgZGF5ID0gKFwiMFwiICsgbm93LmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICB2YXIgbW9udGggPSAoXCIwXCIgKyAobm93LmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xuICB2YXIgdG9kYXkgPSBub3cuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcblxuICAkKFwiI2RhdGV0aW1lXCIpLnZhbCh0b2RheSk7XG4gIHZhciBwcm9tb3Rpb24gPSAkKFwiI3Byb21vdGlvblwiKS52YWwoKTtcbiAgbGV0IGxpc3QgPSBbXTtcbiAgc2VhbmNlYWZmaWNoYWdlKHByb21vdGlvbiwgdG9kYXksJ0NSJyk7XG5cblxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLm9uKFwiY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGVjdGVkID0gJCh0aGlzKS5oYXNDbGFzcyhcImhpZ2hsaWdodHlcIik7XG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcImhpZ2hsaWdodHlcIik7XG4gICAgJChcImJvZHkgI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZSB0clwiKS5yZW1vdmVDbGFzcyhcIm9kZFwiKTtcbiAgICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlIHRyXCIpLnJlbW92ZUNsYXNzKFwiZXZlblwiKTtcblxuICAgIGlmICghc2VsZWN0ZWQpIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJoaWdobGlnaHR5XCIpO1xuICAgICAgdmFyIGN1cnJlbnRSb3cgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKTtcbiAgICAgIHZhciBzdGF0dXQgPSBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxKVwiKS5odG1sKCk7XG4gICAgICBsaXN0ID0gW107XG4gICAgICBsaXN0LnB1c2goe1xuICAgICAgICBwcm9tb3Rpb246IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDIpXCIpLmh0bWwoKSxcbiAgICAgICAgc2VhbmNlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgzKVwiKS5odG1sKCksXG4gICAgICAgIGdyb3VwZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTApXCIpLmh0bWwoKSxcbiAgICAgICAgaGQ6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDgpXCIpLmh0bWwoKSxcbiAgICAgICAgaGY6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDkpXCIpLmh0bWwoKSxcbiAgICAgICAgbW9kdWxlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxNClcIikuaHRtbCgpLFxuICAgICAgICBzYWxlOiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxNSlcIikuaHRtbCgpLFxuICAgICAgICBzYWxsZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoNSlcIikuaHRtbCgpLFxuICAgICAgICBuYXR1cmU6IGN1cnJlbnRSb3cuZmluZChcInRkOmVxKDQpXCIpLmh0bWwoKSxcbiAgICAgICAgZWxlbWVudDogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoNilcIikuaHRtbCgpLFxuICAgICAgICBlbnNlaWduYW50OiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSg3KVwiKS5odG1sKCksXG4gICAgICAgIGV4aXN0ZTogY3VycmVudFJvdy5maW5kKFwidGQ6ZXEoMTEpXCIpLmh0bWwoKSxcbiAgICAgICAgc3RhdHV0OiBjdXJyZW50Um93LmZpbmQoXCJ0ZDplcSgxKVwiKS5odG1sKCksXG4gICAgICB9KTtcbiAgICAgICQoXCIjdHJhaXRlX2VwcmV1dmVcIikuaGlkZSgpO1xuICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLmhpZGUoKTtcbiAgICAgICQoXCIjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcbiAgICAgICQoXCIjdmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XG4gICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5oaWRlKCk7XG4gICAgICBpZiAoc3RhdHV0ID09ICcxJykge1xuICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTtcbiAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcbiAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLnNob3coKTtcbiAgICAgICAgJChcIiNhc3NpZHVpdGVfcHJpbnRcIikuc2hvdygpO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXR1dCA9PSAnMicpIHtcbiAgICAgICAgJChcIiNkZXZlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI3RyYWl0ZV9lcHJldXZlXCIpLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoc3RhdHV0ID09ICcxJyB8fCBzdGF0dXQgPT0gJzInKXtcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvY291bnRfc2VhbmNlL1wiK29iai5zZWFuY2UsXG4gICAgICBkYXRhOiB7XG4gICAgICAgXG4gICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcbiAgICAgICAgXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XG4gICAgICAgIFxuICAgICAgICAvLyAkKFwiLmdyaWRcIikuY2xlYXIoKS5kZXN0cm95KCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIH0pO1xufVxuLy8gY29uc29sZS5sb2cobGlzdCk7XG5cbiAgfSk7XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBwb3AgdXAgZXR1ZGlhbnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlXCIpLm9uKFwiZGJsY2xpY2tcIiwgXCJ0clwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAkKFwiI2V0dWRpYW50LW1vZGFsXCIpLm1vZGFsKFwidG9nZ2xlXCIpO1xuICAgICQoXCIjZXR1ZGlhbnQtbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgJChcIiNTZWFuY2VfZXR1ZFwiKS52YWwob2JqLnNlYW5jZSk7XG4gICAgJChcIiNzYWxsZV9ldHVkXCIpLnZhbChvYmoubmF0dXJlICsgJyAvICcgKyBvYmouc2FsbGUpO1xuICAgICQoXCIjZWxlbWVudF9ldHVkXCIpLnZhbChvYmouZWxlbWVudCk7XG4gICAgJChcIiNFbnNlaWduYW50X2V0dWRcIikudmFsKG9iai5lbnNlaWduYW50KTtcbiAgICAkKFwiI0hkX2V0dWRcIikudmFsKG9iai5oZCk7XG4gICAgJChcIiNIZl9ldHVkXCIpLnZhbChvYmouaGYpO1xuICAgICQoXCIjZ3JvdXBfZXR1ZFwiKS52YWwob2JqLmdyb3VwZSk7XG4gICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHVybDogXCIvYXBpL0V0dWRfYWZmXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwcm9tb3Rpb246IG9iai5wcm9tb3Rpb24sXG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxuICAgICAgICAgIGdyb3VwZTogb2JqLmdyb3VwZSxcbiAgICAgICAgICBleGlzdGU6IG9iai5leGlzdGUsXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgLy8gJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKSkge1xuICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTJcIilcbiAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgICAgYkxlbmd0aENoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgICAgICBbMTIsIDI0LCAzNiwgNDgsIDYwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHRyYWl0ZW1lbnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxuICAkKFwiYm9keSAjdHJhaXRlX2VwcmV1dmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgICB2YXIgaWNvbiA9ICQodGhpcykuZmluZCgnaScpO1xuICAgIHZhciBidXR0b24gPSAkKHRoaXMpO1xuXG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGlmIChvYmouZ3JvdXBlID09PSBcIlwiKSB7XG4gICAgICAgIG9iai5ncm91cGUgPSBcImVtcHR5XCI7XG4gICAgICB9XG4gICAgICBpZiAoIG9iai5zdGF0dXQgIT0gJzEnKXtcbiAgICBidXR0b24uYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgLy8gJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLWNsb2NrJykuYWRkQ2xhc3MoXCJmYS1zcGlubmVyIGZhLXNwaW5cIik7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcIi9hcGkvdHJhaXRlbWVudF9hc3NpZHVpdGVcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcbiAgICAgICAgICBkYXRlOiAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLFxuICAgICAgICAgIHR5cGUgOiAndHJhaXRlJyxcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgIGljb24ucmVtb3ZlQ2xhc3MoJ2ZhLXNwaW5uZXIgZmEtc3BpbicpLmFkZENsYXNzKFwiZmEtY2xvY2tcIik7XG4gICAgICAgICAgYnV0dG9uLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xuICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgdGl0bGU6ICdzZWFuY2UgdHJhaXTDqSBhdmVjIHN1Y2NlcycsXG4gICAgICAgICAgICAgfSk7XG4gICAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XG4gICAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLmhpZGUoKTtcbiAgICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5oaWRlKCk7XG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgICBcbiAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgIHRpdGxlOiAnc2VhbmNlIGRlamEgdHJhaXTDqScsXG5cbiAgICAgIH0pXG4gICAgICAvLyAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgIH07XG4gICAgXG4gIH0pO1xuICAgICAgXG59KTtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHJldHJhaXRlciAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxuXG4gICQoXCJib2R5ICNyZXRyYWl0ZXJfc2VhbmNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGlmIChvYmouZ3JvdXBlID09PSBcIlwiKSB7XG4gICAgICAgIG9iai5ncm91cGUgPSBcImVtcHR5XCI7XG4gICAgICB9XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcIi9hcGkvdHJhaXRlbWVudF9hc3NpZHVpdGVcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC8vIHByb21vdGlvbjogb2JqLnByb21vdGlvbixcbiAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXG4gICAgICAgICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcbiAgICAgICAgICAvLyBoZDogb2JqLmhkLFxuICAgICAgICAgIC8vIG1vZHVsZTogb2JqLm1vZHVsZSxcbiAgICAgICAgICAvLyBncm91cGU6IG9iai5ncm91cGUsXG4gICAgICAgICAgLy8gc2FsZTogb2JqLnNhbGUsXG4gICAgICAgICAgdHlwZSA6ICdyZXRyYWl0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XG4gICAgICAgICAgJChcIi5ncmlkXCIpLmh0bWwoaHRtbCk7XG4gICAgICAgICAgJChcIiN0cmFpdGVfZXByZXV2ZVwiKS5oaWRlKCk7XG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLmhpZGUoKTtcbiAgICAgICAgICAkKFwiI2RldmVyb3VpbGxlci1tb2RhbFwiKS5oaWRlKCk7XG4gICAgICAgICAgJChcIiN2ZXJvdWlsbGVyLW1vZGFsXCIpLmhpZGUoKTtcbiAgICAgICAgICAkKFwiI2Fzc2lkdWl0ZV9wcmludFwiKS5oaWRlKCk7XG4gICAgICAgICAgJChcIiNyZXRyYWl0ZXJfc2VhbmNlXCIpLnNob3coKTtcbiAgICAgICAgICAkKFwiI3Zlcm91aWxsZXItbW9kYWxcIikuc2hvdygpO1xuICAgICAgICAgICQoXCIjYXNzaWR1aXRlX3ByaW50XCIpLnNob3coKTtcbiAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2FkZXJfaGlkZSgpO1xuICAgICAgICB9LDEwMDApO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZmV1aWxlIHBkZiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxuICAkKFwiYm9keSAjYXNzaWR1aXRlX3ByaW50XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgbG9hZGVyX2hpZGUoKTtcbiAgfSwxMDAwKTtcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xuXG4gICAgd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGYvJytvYmouc2VhbmNlLCAnX2JsYW5rJyk7XG5cbn0pO1xufSk7XG5cbi8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxuLy8gICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IHNpdHVhdGlvbiBwcmVzZW50aWwgcGRmICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XG4vLyAgICQoXCJib2R5ICNzaXR1YXRpb25fcHJlc2VudGllbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAvLyBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xuLy8gICAgICAgdmFyIGV0dWRpYW50ID0gJChcIiNFdF9zaXR1YXRpb25cIikudmFsKCk7XG4vLyAgICAgICAvLyB2YXIgZGF0ZV9kZWJ1dCA9ICQoXCIjZGF0ZXRpbWVEc2l0dWF0aW9uXCIpLnZhbCgpO1xuLy8gICAgICAgLy8gdmFyIGRhdGVfZmluID0gJChcIiNkYXRldGltZUZzaXR1YXRpb25cIikudmFsKCk7XG5cbi8vICAgICB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZl9wcmVzZW50aWVsLycrZXR1ZGlhbnQsICdfYmxhbmsnKTtcblxuLy8gLy8gfSk7XG4vLyB9KTtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogcmVtb3ZlIHNlYW5jZSAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcbiAgJChcImJvZHkgI3JlbW92ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAkKCcubG9hZGVyMicpLmZhZGVJbigpO1xuICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHVybDogXCIvYXBpL3JlbW92ZV9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcbiAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgIHNlYW5jZWFmZmljaGFnZSgkKFwiI3Byb21vdGlvblwiKS52YWwoKSwgJChcIiNkYXRldGltZVwiKS52YWwoKSwnQ1InKTtcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgdGVjaG5pcXVlICAhJyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB9KTtcbiAgXG4gIH0pO1xuICAgXG59KTtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IGV4aXN0ZSAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcbiAgJChcImJvZHkgI2V4aXN0ZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xuICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcIi9hcGkvZXhpc3Rfc2VhbmNlL1wiK29iai5zZWFuY2UsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLCBcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIH0pO1xuICBcbiAgfSk7XG4gICBcbn0pO1xuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogc2lnbiAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcbiAgJChcImJvZHkgI3NpZ25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xuXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcIi9hcGkvc2lnbl9zZWFuY2UvXCIrb2JqLnNlYW5jZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcbiAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgdGl0bGU6ICdzZWFuY2Ugc2lnbsOpJyxcbiAgICAgICAgfSlcbiAgICAgICAgICBzZWFuY2VhZmZpY2hhZ2UoJChcIiNwcm9tb3Rpb25cIikudmFsKCksICQoXCIjZGF0ZXRpbWVcIikudmFsKCksJ0NSJyk7XG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIH0pO1xuICBcbiAgfSk7XG4gIFxufSk7XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBjYW5jZWwgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XG4gICQoXCJib2R5ICNjYW5jZWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xuXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcIi9hcGkvY2FuY2VsX3NlYW5jZS9cIitvYmouc2VhbmNlLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxuICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB9KTtcbiAgXG4gIH0pO1xuICAgXG59KTtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6ICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogZGV2ZXJvdSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxuICAkKFwiYm9keSAjZGV2ZXJvdWlsbGVyLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHVybDogXCIvYXBpL2RldmVyX3NlYW5jZS9cIitvYmouc2VhbmNlLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxuICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB9KTtcbiAgXG4gIH0pO1xuICAgXG59KTtcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86OiBtb2RpZmllcl9zYWxsZSAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOlxuICAkKFwiYm9keSAjbW9kaXNhbGxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gICAgdmFyIHNhbGxlID0gJChcIiNzYWxsZVwiKS52YWwoKTtcbiAgICBcbiAgICBsaXN0LmZvckVhY2goKG9iaikgPT4ge1xuXG4gICAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcIi9hcGkvbW9kaWZpZXJfc2FsbGUvXCIrb2JqLnNlYW5jZStcIi9cIitzYWxsZSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNlYW5jZTogb2JqLnNlYW5jZSxcbiAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcblxuICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIH0pO1xuICBcbiAgfSk7XG4gICBcbn0pO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzo6IG1vZGlmaWVyX3NhbGxlICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86XG4gICQoXCJib2R5ICN2ZXJvdWlsbGVyLW1vZGFsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcblxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHVybDogXCIvYXBpL2xvY2tfc2VhbmNlL1wiK29iai5zZWFuY2UsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlLFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgc2VhbmNlYWZmaWNoYWdlKCQoXCIjcHJvbW90aW9uXCIpLnZhbCgpLCAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLCdDUicpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgfSk7XG4gIFxuICB9KTtcbiAgIFxufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBhcmxvdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmZ1bmN0aW9uIHNlbGVjdHMoKXsgIFxuICB2YXIgZWxlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdjaGsnKTsgIFxuICBmb3IodmFyIGk9MDsgaTxlbGUubGVuZ3RoOyBpKyspeyAgXG4gICAgICBpZihlbGVbaV0udHlwZT09J2NoZWNrYm94JykgIFxuICAgICAgICAgIGVsZVtpXS5jaGVja2VkPXRydWU7ICBcbiAgfSAgXG59ICBcbmZ1bmN0aW9uIGRlU2VsZWN0KCl7ICBcbiAgdmFyIGVsZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnY2hrJyk7ICBcbiAgZm9yKHZhciBpPTA7IGk8ZWxlLmxlbmd0aDsgaSsrKXsgIFxuICAgICAgaWYoZWxlW2ldLnR5cGU9PSdjaGVja2JveCcpICBcbiAgICAgICAgICBlbGVbaV0uY2hlY2tlZD1mYWxzZTsgIFxuICAgICAgICBcbiAgfSAgXG59ICAgICAgICAgIFxuJChcImJvZHkgI2NoZWNrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gYWxlcnQoJ29rJyk7XG5zZWxlY3RzKCk7ICAvLyAkKFwiI3BhcmxvdF9tb2RhbFwiKS5zaG93KCk7XG4kKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xufSk7XG4kKFwiYm9keSAjdW5jaGVja1wiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vIGFsZXJ0KCdvaycpO1xuZGVTZWxlY3QoKTsgIC8vICQoXCIjcGFybG90X21vZGFsXCIpLnNob3coKTtcbiQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG59KTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBvaW50ZXVzZSBjaGVjayAvdW5jaGVjayAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuJChcImJvZHkgI3BfY2hlY2tcIikuY2xpY2soZnVuY3Rpb24gKCkgIHtcbi8vIGFsZXJ0KCdvaycpO1xuc2VsZWN0cygpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xuIFxufSk7XG4kKFwiYm9keSAjcF91bmNoZWNrXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gYWxlcnQoJ29rJyk7XG5kZVNlbGVjdCgpOyAgLy8gJChcIiNwYXJsb3RfbW9kYWxcIikuc2hvdygpO1xuIFxufSk7XG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vOjogIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBhcmxvdF9oZC1mIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4kKFwiYm9keSAjcGFybG90X3NlYXJjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgdmFyIGhkID0gJChcIiNoZFwiKS52YWwoKTtcbiAgdmFyIGhmID0gJChcIiNoZlwiKS52YWwoKTtcbiAgdmFyIGRhdGUgPSAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpO1xuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgIHVybDogXCIvYXBpL3BhcmxvdFwiLFxuICAgIGRhdGE6IHtcbiAgICAgIGhkOiBoZCxcbiAgICAgIGhmOiBoZixcbiAgICAgIGRhdGU6IGRhdGUsXG4gICAgIFxuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjcGFybG90X2RhdGF0YWJsZVwiKSkge1xuICAgICAgICAgICQoXCIjcGFybG90X2RhdGF0YWJsZVwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgICQoXCIjcGFybG90X2RhdGF0YWJsZVwiKVxuICAgICAgICAuaHRtbChodG1sKVxuICAgICAgICAuRGF0YVRhYmxlKHtcbiAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICBsZW5ndGhNZW51OiBbXG4gICAgICAgICAgICBbMTEsIDI1LCAzNSwgNTAsIDEwMCwgMjAwMDAwMDAwMDAwMDBdLFxuICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJmb250LXNpemVcIjogXCIzcmVtXCIsXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgfSk7XG4gIH0sXG4gIH0pO1xuIFxufSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBwYXJsb3RfdHJhaXRlbWVudCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuJChcImJvZHkgI3BhcmxvdF90cmFpdGVyXCIpLm9uKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xuICB2YXIgaGQgPSAkKFwiI2hkXCIpLnZhbCgpO1xuICB2YXIgaGYgPSAkKFwiI2hmXCIpLnZhbCgpO1xuICB2YXIgZGF0ZSA9ICQoXCIjZGF0ZXRpbWVcIikudmFsKCk7XG4gIGxldCByZXN1bHQ7XG4gICAgICB2YXIgdmFsID0gW107XG4gICAgICAkKCc6Y2hlY2tib3g6Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24oaSl7XG4gICAgICAgIHZhbFtpXSA9ICQodGhpcykudmFsKCk7XG4gICAgICB9KTtcbiAgICAgIGZvcihsZXQgdmFsdWUgb2YgdmFsKXtcbiAgICB0cnkge1xuICAgICAgLy8gY29uc3QgcmVxdWVzdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hZG1pbmlzdHJhdGlvbi9lcHJldXZlL2ltcG9ydCcsIHtcbiAgICAgIC8vICAgc2VhbmNlOiB2YWx1ZSxcbiAgICAgIC8vICAgZGF0ZTogJChcIiNkYXRldGltZVwiKS52YWwoKSxcbiAgICAgIC8vICAgdHlwZSA6ICd0cmFpdGUnLFxuICAgICAgLy8gfSk7XG5cbiAgICAgIHJlc3VsdCA9IGF3YWl0ICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IFwiL2FwaS90cmFpdGVtZW50X2Fzc2lkdWl0ZVwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc2VhbmNlOiB2YWx1ZSxcbiAgICAgICAgICBkYXRlOiAkKFwiI2RhdGV0aW1lXCIpLnZhbCgpLFxuICAgICAgICAgIHR5cGUgOiAndHJhaXRlJyxcbiAgICAgICAgfSxcbi8vICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbi8vIGFsZXJ0KGh0bWwpO1xuLy8gICAgIC8vIHdpbmRvdy5vcGVuKCcvYXNzaWR1aXRlL2Fzc2lkdWl0ZXMvcGRmLycraHRtbCwgJ19ibGFuaycpO1xuLy8gICB9LFxuXG4gICAgICB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxuICAgICAgfVxuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgIHVybDogXCIvYXBpL3BhcmxvdFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaGQ6IGhkLFxuICAgICAgICAgIGhmOiBoZixcbiAgICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICBpZiAoJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoXCIjcGFybG90X2RhdGF0YWJsZVwiKSkge1xuICAgICAgICAgICAgICAkKFwiI3BhcmxvdF9kYXRhdGFibGVcIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICQoXCIjcGFybG90X2RhdGF0YWJsZVwiKVxuICAgICAgICAgICAgLmh0bWwoaHRtbClcbiAgICAgICAgICAgIC5EYXRhVGFibGUoe1xuICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgbGVuZ3RoTWVudTogW1xuICAgICAgICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4gICAgICAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjpmdW5jdGlvbigpe1xuICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgZm9yKGxldCB2YWx1ZSBvZiB2YWwpe1xuXG4gd2luZG93Lm9wZW4oJy9hc3NpZHVpdGUvYXNzaWR1aXRlcy9wZGYvJyt2YWx1ZSwgJ19ibGFuaycpO1xuXG4gICAgICB9XG4gICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLzpcbn0pO1xuXG5cblxuLy8gJChcImJvZHkgI3NpdHVhdGlvbl9zZWFyY2hcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyBldHVkaWFudCA9ICQoXCIjRXRfc2l0dWF0aW9uXCIpLnZhbCgpO1xuLy8gZGF0ZWQgPSAkKFwiI2RhdGV0aW1lRHNpdHVhdGlvblwiKS52YWwoKTtcbi8vIGRhdGVmID0gJChcIiNkYXRldGltZUZzaXR1YXRpb25cIikudmFsKCk7XG4vLyAkLmFqYXgoe1xuLy8gICB0eXBlOiBcIlBPU1RcIixcbi8vICAgdXJsOiBcIi9hcGkvYWZmX3NpdHVhdGlvblwiLFxuLy8gICBkYXRhOiB7XG4vLyAgICAgZXR1ZGlhbnQgOiBldHVkaWFudCxcbi8vICAgICBkYXRlZCA6IGRhdGVkLFxuLy8gICAgIGRhdGVmIDogZGF0ZWYgLFxuLy8gICB9LFxuLy8gICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuLy8gICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGVfc2l0dWF0aW9uXCIpKSB7XG4vLyAgICAgICAkKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZV9zaXR1YXRpb25cIikuRGF0YVRhYmxlKCkuY2xlYXIoKS5kZXN0cm95KCk7XG4vLyAgICAgfVxuLy8gICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlX3NpdHVhdGlvblwiKVxuLy8gICAgICAgLmh0bWwoaHRtbClcbi8vICAgICAgIC5EYXRhVGFibGUoe1xuLy8gICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcbi8vICAgICAgICAgbGVuZ3RoTWVudTogW1xuLy8gICAgICAgICAgIFsxMSwgMjUsIDM1LCA1MCwgMTAwLCAyMDAwMDAwMDAwMDAwMF0sXG4vLyAgICAgICAgICAgWzEwLCAxNSwgMjUsIDUwLCAxMDAsIFwiQWxsXCJdLFxuLy8gICAgICAgICBdLFxuLy8gICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjNyZW1cIixcbi8vICAgICAgIH0pO1xuLy8gICB9XG4vLyB9KTtcbi8vIH0pO1xuXG4gIC8vLy8vLy8vLy8vLy8vL2V0YWJsaXNzZW1lbnQvLy8vLy8vLy8vXG5cbiAgJChcIiNFX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgICB2YXIgZXRhYmxpc3NlbWVudCA9ICQodGhpcykudmFsKCk7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvRm9ybWF0aW9uX2FmZi9cIiArIGV0YWJsaXNzZW1lbnQsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI0Zfc2l0dWF0aW9uXCIpLmh0bWwoaHRtbCk7XG4gICAgICAgICQoXCIjRl9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgJChcIiNGX3NpdHVhdGlvblwiKS52YWwoKSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikuaHRtbChodG1sKTtcbiAgICAgICAgICAgICQoXCIjUF9zaXR1YXRpb25cIikucHJvcChcInNlbGVjdGVkSW5kZXhcIiwgMSk7XG4gICAgICAgICAgICBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKCQoXCIjUF9zaXR1YXRpb25cIikudmFsKCkpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgVG9hc3QuZmlyZSh7XG4gICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIH0pO1xuICB9KTtcbiAgLy8vLy8vLy8vLy8vLy8vRm9tYXRpb24vLy8vLy8vLy8vXG5cbiAgJChcIiNGX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgICB2YXIgZm9ybWF0aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6IFwiL2FwaS9Qcm9tb3Rpb25fYWZmL1wiICsgZm9ybWF0aW9uLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNQX3NpdHVhdGlvblwiKS5odG1sKGh0bWwpO1xuICAgICAgICAkKFwiI1Bfc2l0dWF0aW9uXCIpLnByb3AoXCJzZWxlY3RlZEluZGV4XCIsIDEpO1xuICAgICAgICBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKCQoXCIjUF9zaXR1YXRpb25cIikudmFsKCkpO1xuXG4gICAgICB9LFxuICAgICAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICB0aXRsZTogJ1Byb2JsZW1lICAhJyxcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuICAvLy8vLy8vLy8vLy8vLy9Qcm9tb3Rpb24vLy8vLy8vLy8vXG5cbiAgJChcIiNQX3NpdHVhdGlvblwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgICB2YXIgcHJvbW90aW9uID0gJCh0aGlzKS52YWwoKTtcbiAgICBldHVkaWFudF9zaXR1YXRpb25fYWZmaWNoYWdlKHByb21vdGlvbik7XG5cbiAgfSk7XG5cblxuIFxuICAgICAgICAgICAgXG4vLyAgLy8vLy8vLy8vLy8vLy8vLy8vZXh0cmFjdGlvbi8vLy8vLy8vLy8vLy8vLy86XG4vLyAgJCgnI2NyZWF0ZV9leHRyYWN0aW9uJykuY2xpY2soZnVuY3Rpb24oKXsgXG5cbi8vICAgdmFyIHRvID0gJCgnI2RhdGV0aW1lRnNpdHVhdGlvbicpLnZhbCgpO1xuLy8gICB2YXIgZnJvbSA9ICQoJyNkYXRldGltZURzaXR1YXRpb24nKS52YWwoKTtcbi8vICAgdmFyIHNlcnZpY2UgPSAkKCcjRV9zaXR1YXRpb24nKS52YWwoKTtcbi8vICAgdmFyIGZvcm1hdGlvbiA9ICQoJyNGX3NpdHVhdGlvbicpLnZhbCgpO1xuLy8gICB2YXIgcHJvbW90aW9uID0gJCgnI1Bfc2l0dWF0aW9uJykudmFsKCk7XG5cblxuLy8gICB2YXIgdG91ID0gICQoJ2lucHV0W25hbWU9XCJ0b3VzXCJdOmNoZWNrZWQnKS52YWwoKTtcbiAgXG4vLyAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInt7IHBhdGgoJ2V4dHJhY3Rpb24nKSB9fT9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb207XG4vLyAgICAgICAgICB1cmwgPSBcIi9hcGkvZ2VuZXJhdGVfZXh0cmFjdGlvbj9Ubz1cIit0bytcIiZGcm9tPVwiK2Zyb20rXCImZm9ybWF0aW9uPVwiK2Zvcm1hdGlvbitcIiZwcm9tb3Rpb249XCIrcHJvbW90aW9uK1wiJlNlcnZpY2U9XCIrc2VydmljZStcIiZUb3U9XCIrdG91K1wiJnR5cGU9bm9ybWFsXCI7O1xuLy8gICAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcbiAgICAgICAgICAgXG5cbi8vICAgICAgICAgICAgIH0pOyAgICAgICAgXG4gICAgICAgICAgICBcbiAvLy8vLy8vLy8vLy8vLy8vLy9leHRyYWN0aW9uIHN0YWdlLy8vLy8vLy8vLy8vLy8vLzpcbiAkKCcjY3JlYXRlX2V4dHJhY3Rpb25fc3RhZ2UnKS5jbGljayhmdW5jdGlvbigpeyBcbiAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgdmFyIHRvID0gJCgnI2RhdGV0aW1lRnNpdHVhdGlvbicpLnZhbCgpO1xuICB2YXIgZnJvbSA9ICQoJyNkYXRldGltZURzaXR1YXRpb24nKS52YWwoKTtcbiAgdmFyIHNlcnZpY2UgPSAkKCcjRV9zaXR1YXRpb24nKS52YWwoKTtcbiAgdmFyIGZvcm1hdGlvbiA9ICQoJyNGX3NpdHVhdGlvbicpLnZhbCgpO1xuICB2YXIgcHJvbW90aW9uID0gJCgnI1Bfc2l0dWF0aW9uJykudmFsKCk7XG5cblxuICB2YXIgdG91ID0gICQoJ2lucHV0W25hbWU9XCJ0b3VzXCJdOmNoZWNrZWQnKS52YWwoKTtcbiAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwie3sgcGF0aCgnZXh0cmFjdGlvbicpIH19P1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbTtcbiAgICAgICAgIHVybCA9IFwiL2FwaS9nZW5lcmF0ZV9leHRyYWN0aW9uP1RvPVwiK3RvK1wiJkZyb209XCIrZnJvbStcIiZmb3JtYXRpb249XCIrZm9ybWF0aW9uK1wiJnByb21vdGlvbj1cIitwcm9tb3Rpb24rXCImU2VydmljZT1cIitzZXJ2aWNlK1wiJlRvdT1cIit0b3UrXCImdHlwZT1zdGFnZVwiO1xuICAgICAgICAgc2VydmljZTtcbiAgICAgICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgICB9KTsgICAgICAgIFxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2V0dWRpYW50IGRldGFpbHMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAkKFwiYm9keSAjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKS5vbihcImRibGNsaWNrXCIsIFwidHJcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gICAgLy8gYWxlcnQoc3RhdHV0KTtcbiAgICAgbGlzdC5mb3JFYWNoKChvYmopID0+IHtcbiAgICBcbiAgICAgICBpZiAob2JqLnN0YXR1dCA9PSAxKSB7XG4gICAgICAgICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLm1vZGFsKFwidG9nZ2xlXCIpO1xuICAgICAgICAkKFwiI2V0dWRpYW50X2RldF9tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XG4gICAgICAgIHZhciByb3dfZXR1ZGlhbnQgPSAkKHRoaXMpLmNsb3Nlc3QoXCJ0clwiKTtcbiAgICAgICAgdmFyIGlkX2V0dWRpYW50ID0gcm93X2V0dWRpYW50LmZpbmQoXCJ0ZDplcSgwKVwiKS5odG1sKCk7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgdXJsOiBcIi9hcGkvRXR1ZF9kZXRhaWxzXCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZXR1ZGlhbnQ6IGlkX2V0dWRpYW50LFxuICAgICAgICAgICAgc2VhbmNlOiBvYmouc2VhbmNlXG4gICAgICAgICAgICBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgICAgJCgnI21vZGFsX2V0dWRfZGV0JykuaHRtbChodG1sKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICAgICAgICAgIFRvYXN0LmZpcmUoe1xuICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICB9XG5cbiAgICAgXG4gICAgIFxuICAgIH0pO1xuICB9KTtcblxuXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vdmFsaWRlciBldHVkaWFudCBkZXRhaWxzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgJChcImJvZHkgI3NhdmVfZXR1ZF9kZXRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5sb2FkZXIyXCIpLnNob3coKTtcbiAgICBsZXQganVzdGlmID0gMDtcbiAgICBpZiAoJCgnaW5wdXQuanVzdGlmaWVyJykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgIGp1c3RpZiA9IDE7XG4gICAgfVxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL0V0dWRfZGV0YWlsc192YWxpZGVcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZXR1ZGlhbnQ6ICQoJyNJRF9BZG1pc3Npb24nKS52YWwoKSxcbiAgICAgICAgc2VhbmNlOiAkKCcjSWRfU2VhbmNlJykudmFsKCksXG4gICAgICAgIGNhdF9lbnM6ICQoJyNDYXRlZ29yaWVfZW5zJykudmFsKCksXG4gICAgICAgIG1vdGlmX2FiczogJCgnI21vdGlmX2FicycpLnZhbCgpLFxuICAgICAgICBvYnM6ICQoJyNvYnMnKS52YWwoKSxcbiAgICAgICAganVzdGlmOiBqdXN0aWYsXG4gICAgICAgIFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvRXR1ZF9hZmZcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgcHJvbW90aW9uOiBvYmoucHJvbW90aW9uLFxuICAgICAgICAgICAgICBzZWFuY2U6IG9iai5zZWFuY2UsXG4gICAgICAgICAgICAgIGdyb3VwZTogb2JqLmdyb3VwZSxcbiAgICAgICAgICAgICAgZXhpc3RlOiBvYmouZXhpc3RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgIGlmICgkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZShcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpKSB7XG4gICAgICAgICAgICAgICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGUyXCIpLkRhdGFUYWJsZSgpLmNsZWFyKCkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlMlwiKVxuICAgICAgICAgICAgICAgIC5odG1sKGh0bWwpXG4gICAgICAgICAgICAgICAgLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICAgICAgICBiTGVuZ3RoQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGxlbmd0aE1lbnU6IFtcbiAgICAgICAgICAgICAgICAgICAgWzE1LCAzMCwgNDUsIDYwLCA3NSwgMjAwMDAwMDAwMDAwMDBdLFxuICAgICAgICAgICAgICAgICAgICBbMTAsIDE1LCAyNSwgNTAsIDEwMCwgXCJBbGxcIl0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICBUb2FzdC5maXJlKHtcbiAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgdGl0bGU6ICdQcm9ibGVtZSAgIScsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJChcIiNldHVkaWFudF9kZXRfbW9kYWxcIikubW9kYWwoXCJ0b2dnbGVcIik7XG4gICAgICAgICQoXCIjZXR1ZGlhbnRfZGV0X21vZGFsXCIpLm1vZGFsKFwiaGlkZVwiKTtcbiAgICAgIFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9Qb2ludGFnZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICQoXCJib2R5ICNwb2ludGFnZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmxvYWRlcjJcIikuc2hvdygpO1xubGlzdC5mb3JFYWNoKChvYmopID0+IHtcbiAgaWYgKG9iai5zdGF0dXQgPT0gMSkge1xuXG4kLmFqYXgoe1xuICB0eXBlOiBcIlBPU1RcIixcbiAgdXJsOiBcIi9hcGkvRXR1ZF9wb2ludGFnZVwiLFxuICBkYXRhOiB7XG4gICAgcHJvbW86ICQoJyNwcm9tb3Rpb24nKS52YWwoKSxcbiAgICBkYXRlOiAkKCcjZGF0ZXRpbWUnKS52YWwoKSxcbiAgICBoZDogb2JqLmhkLFxuICB9LFxuICBzdWNjZXNzOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICQoXCIubG9hZGVyMlwiKS5oaWRlKCk7XG4gICAgaWYgKCQuZm4uRGF0YVRhYmxlLmlzRGF0YVRhYmxlKFwiI2R0RHluYW1pY1ZlcnRpY2FsU2Nyb2xsRXhhbXBsZTRcIikpIHtcbiAgICAgICQoXCIjZHREeW5hbWljVmVydGljYWxTY3JvbGxFeGFtcGxlNFwiKS5EYXRhVGFibGUoKS5jbGVhcigpLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgJChcIiNkdER5bmFtaWNWZXJ0aWNhbFNjcm9sbEV4YW1wbGU0XCIpXG4gICAgICAuaHRtbChodG1sKVxuICAgICAgLkRhdGFUYWJsZSh7XG4gICAgICAgIGJMZW5ndGhDaGFuZ2U6IGZhbHNlLFxuICAgICAgICBsZW5ndGhNZW51OiBbXG4gICAgICAgICAgWzE2LCAzMiwgNDgsIDY0LCA3NCwgMjAwMDAwMDAwMDAwMDBdLFxuICAgICAgICAgIFsxMCwgMTUsIDI1LCA1MCwgMTAwLCBcIkFsbFwiXSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgICAgJChcIi5sb2FkZXIyXCIpLmhpZGUoKTtcbiAgfSxcbiAgZXJyb3I6ZnVuY3Rpb24oKXtcbiAgICAkKFwiLmxvYWRlcjJcIikuaGlkZSgpO1xuICAgICBUb2FzdC5maXJlKHtcbiAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgIHRpdGxlOiAnUHJvYmxlbWUgICEnLFxuICAgICAgICB9KTtcbn0sXG5cbn0pO1xufVxuICB9KTtcbiAgfSk7XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUERGIF8gU3ludGhlc2UgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAkKFwiYm9keSAjc3ludGhlc2Vfc2VhbmNlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubG9hZGVyMlwiKS5zaG93KCk7XG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgbG9hZGVyX2hpZGUoKTtcbiAgfSwxMDAwKTtcblxuICAgIHZhciBkYXRlID0gJChcIiNkYXRldGltZVwiKS52YWwoKTtcbiAgICB3aW5kb3cub3BlbignL2Fzc2lkdWl0ZS9hc3NpZHVpdGVzL3BkZnN5bnRoZXNlLycrZGF0ZSwgJ19ibGFuaycpO1xuICB9KTtcblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuJCgnI0Vfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xuJCgnI0Zfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xuJCgnI1Bfc2l0dWF0aW9uJykuc2VsZWN0MigpO1xuJCgnI0V0X3NpdHVhdGlvbicpLnNlbGVjdDIoKTtcblxuXG5cbiQoXCJidXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAkKCcubG9hZGVyMicpLmZhZGVJbigpO1xufSk7XG5cbiQoXCIuY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICQoJy5sb2FkZXIyJykuZmFkZU91dCgpO1xufSk7XG5cblxufSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vc291ZmlhbmUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiJdLCJuYW1lcyI6WyJUb2FzdCIsIlN3YWwiLCJtaXhpbiIsInRvYXN0IiwicG9zaXRpb24iLCJzaG93Q29uZmlybUJ1dHRvbiIsInRpbWVyIiwidGltZXJQcm9ncmVzc0JhciIsImRpZE9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RvcFRpbWVyIiwicmVzdW1lVGltZXIiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhpZGUiLCJsb2FkZXJfaGlkZSIsInRhYmxlRGF0YSIsInNlYW5jZWFmZmljaGFnZSIsInZhcjEiLCJ2YXIyIiwidmFyMyIsInNob3ciLCJhamF4IiwidHlwZSIsInVybCIsInN1Y2Nlc3MiLCJodG1sIiwiZm4iLCJEYXRhVGFibGUiLCJpc0RhdGFUYWJsZSIsImNsZWFyIiwiZGVzdHJveSIsImJMZW5ndGhDaGFuZ2UiLCJsZW5ndGhNZW51IiwiZXJyb3IiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwiZXR1ZGlhbnRfc2l0dWF0aW9uX2FmZmljaGFnZSIsImhpZ2hsaWdodCIsImFkZENsYXNzIiwicHJvcCIsIm9uIiwiZXRhYmxpc3NlbWVudCIsInZhbCIsImZvcm1hdGlvbiIsInByb21vdGlvbiIsImRhdGUiLCJub3ciLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInNsaWNlIiwibW9udGgiLCJnZXRNb250aCIsInRvZGF5IiwiZ2V0RnVsbFllYXIiLCJsaXN0Iiwic2VsZWN0ZWQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiY3VycmVudFJvdyIsImNsb3Nlc3QiLCJzdGF0dXQiLCJmaW5kIiwicHVzaCIsInNlYW5jZSIsImdyb3VwZSIsImhkIiwiaGYiLCJtb2R1bGUiLCJzYWxlIiwic2FsbGUiLCJuYXR1cmUiLCJlbGVtZW50IiwiZW5zZWlnbmFudCIsImV4aXN0ZSIsImNzcyIsImZvckVhY2giLCJvYmoiLCJkYXRhIiwibW9kYWwiLCJidXR0b24iLCJhdHRyIiwic2V0SW50ZXJ2YWwiLCJ3aW5kb3ciLCJvcGVuIiwic2VsZWN0cyIsImVsZSIsImdldEVsZW1lbnRzQnlOYW1lIiwiaSIsImxlbmd0aCIsImNoZWNrZWQiLCJkZVNlbGVjdCIsImNsaWNrIiwiZWFjaCIsInZhbHVlIiwicmVzdWx0IiwiY29uc29sZSIsInRvIiwiZnJvbSIsInNlcnZpY2UiLCJ0b3UiLCJyb3dfZXR1ZGlhbnQiLCJpZF9ldHVkaWFudCIsImV0dWRpYW50IiwianVzdGlmIiwiaXMiLCJjYXRfZW5zIiwibW90aWZfYWJzIiwib2JzIiwicHJvbW8iLCJzZWxlY3QyIiwiZmFkZUluIiwiZmFkZU91dCJdLCJzb3VyY2VSb290IjoiIn0=