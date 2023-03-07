///////////////bord_aff//////////
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
$("#No_tr").on("click", function () {
  $(".loader2").show();
    var action = $(this).val();
      $.ajax({
        type: "POST",
        url: "/api/bordaff/" + action,
        success: function (html) {
          $(".loader2").hide();
          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_bord")) {
            $("#dtDynamicVerticalScrollExample_bord").DataTable().clear().destroy();
          }
          $("#dtDynamicVerticalScrollExample_bord")
            .html(html)
            .DataTable({
              bLengthChange: false,
              lengthMenu: [
                [11, 25, 35, 50, 100, 20000000000000],
                [10, 15, 25, 50, 100, "All"],
              ],
              "font-size": "3rem",
            });
        },
        error:function(){
          $(".loader2").hide();
            Toast.fire({
              icon: 'error',
              title: 'Probleme Technique !',
            });
        }
    });

  });
  ///////////////bord_aff//////////

  $("#No_vr").on("click", function () {
    $(".loader2").show();
    var action = $(this).val();
      $.ajax({
        type: "POST",
        url: "/api/bordaff/" + action,
        success: function (html) {
          $(".loader2").hide();
          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_bord")) {
            $("#dtDynamicVerticalScrollExample_bord").DataTable().clear().destroy();
          }
          $("#dtDynamicVerticalScrollExample_bord")
            .html(html)
            .DataTable({
              bLengthChange: false,
              lengthMenu: [
                [11, 25, 35, 50, 100, 20000000000000],
                [10, 15, 25, 50, 100, "All"],
              ],
              "font-size": "3rem",
            });
 
        },
        error:function(){
          $(".loader2").hide();
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !',
            });
        }
    });

  });

  ///////////////bord_aff//////////

  $("#No_sc").on("click", function () {
    $(".loader2").show();
    var action = $(this).val();
      $.ajax({
        type: "POST",
        url: "/api/bordaff/" + action,
        success: function (html) {
          
          $(".loader2").hide();
          if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_bord")) {
            $("#dtDynamicVerticalScrollExample_bord").DataTable().clear().destroy();
          }
          $("#dtDynamicVerticalScrollExample_bord")
            .html(html)
            .DataTable({
              bLengthChange: false,
              lengthMenu: [
                [11, 25, 35, 50, 100, 20000000000000],
                [10, 15, 25, 50, 100, "All"],
              ],
              "font-size": "3rem",
            });
 
        },
        error:function(){
          $(".loader2").hide();
            Toast.fire({
              icon: 'error',
              title: 'Probleme  !',
            });
        }
    });

  });

  ///////////////bord_aff//////////

  // $("#No_sc").on("click", function () {
  //   var action = $(this).val();
  //     $.ajax({
  //       type: "POST",
  //       url: "/api/bordaff/" + action,
  //       success: function (html) {
  //         if ($.fn.DataTable.isDataTable("#dtDynamicVerticalScrollExample_bord")) {
  //           $("#dtDynamicVerticalScrollExample_bord").DataTable().clear().destroy();
  //         }
  //         $("#dtDynamicVerticalScrollExample_bord")
  //           .html(html)
  //           .DataTable({
  //             bLengthChange: false,
  //             lengthMenu: [
  //               [11, 25, 35, 50, 100, 20000000000000],
  //               [10, 15, 25, 50, 100, "All"],
  //             ],
  //             "font-size": "3rem",
  //           });
 
  //       },
  //   });

  // });