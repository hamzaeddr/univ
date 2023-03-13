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
  $(document).ready(function () {
/////////////////////////////////dropdown-situation////////////////////////////
 $("#E_situation").prop("selectedIndex", 1);
 $("#F_situation").prop("selectedIndex", 1);
 $("#P_situation").prop("selectedIndex", 1);

 ///////////////etablissement//////////

 $("#E_situation").on("change", function () {
  $(".loader2").show();
    var etablissement = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Formation_aff/" + etablissement,
      success: function (html) {
        $(".loader2").hide();
        $("#F_situation").html(html);
        $("#F_situation").prop("selectedIndex", 1);

        $.ajax({
          type: "POST",
          url: "/api/Promotion_aff/" + $("#F_situation").val(),
          success: function (html) {
            $("#P_situation").html(html);
            $("#P_situation").prop("selectedIndex", 1);
            etudiant_situation_affichage($("#P_situation").val());
          },
          error:function(){
            $(".loader2").hide();

             Toast.fire({
               icon: 'error',
               title: 'Probleme  !',
                });
        },
        });
      },
      error:function(){
        $(".loader2").hide();

         Toast.fire({
           icon: 'error',
           title: 'Probleme Technique!',
            });
    },
    });
  });
  ///////////////Fomation//////////

  $("#F_situation").on("change", function () {
    $(".loader2").show();
    var formation = $(this).val();
    $.ajax({
      type: "POST",
      url: "/api/Promotion_aff/" + formation,
      success: function (html) {
        $(".loader2").hide();
        $("#P_situation").html(html);
        $("#P_situation").prop("selectedIndex", 1);
        etudiant_situation_affichage($("#P_situation").val());

      },
      error:function(){
        $(".loader2").hide();

         Toast.fire({
           icon: 'error',
           title: 'Probleme  !',
            });
    },
    });
  });
  ///////////////Promotion//////////

  $("#P_situation").on("change", function () {
    var promotion = $(this).val();
    etudiant_situation_affichage(promotion);

  });
   //////////////////extraction stage////////////////:
 $('#create_extraction_stage').click(function(){ 
    var to = $('#datetimeFsituation').val();
    var from = $('#datetimeDsituation').val();
    var service = $('#E_situation').val();
    var formation = $('#F_situation').val();
    var promotion = $('#P_situation').val();
    var tou =  $('input[name="tous"]:checked').val();
    if (!to || !from || !service || !formation || !promotion || !tou) {
      Toast.fire({
        icon: 'error',
        title: 'Veuillez remplire les champs !',
        });
          $(".loader2").hide();
      return;
    }
            // window.location.href = "{{ path('extraction') }}?To="+to+"&From="+from;
      url = "/api/generate_extraction?To="+to+"&From="+from+"&formation="+formation+"&promotion="+promotion+"&Service="+service+"&Tou="+tou+"&type=stage";
      // service;
      window.open(url);
             
  
  });  
$('#E_situation').select2();
$('#F_situation').select2();
$('#P_situation').select2();
$('#Et_situation').select2();
});  
