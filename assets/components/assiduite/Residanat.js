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
$("#E_residanat").on("change", function () {
  $(".loader2").show();
var Residanat = $('#E_residanat option:selected').val();;
$.ajax({
  type: "POST",
  url: "/api/residanat-etud/" + Residanat,
  success: function (html) {
    $(".loader2").hide();
    $("#P_residanat_etudiant").html(html).select2();
  //   console.log(html);
  //   $("#P_residanat_etudiant").prop("selectedIndex", 1);
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
$('select').select2();
$("body #create_extractionRESIDANT").on("click", function () {
  $(".loader2").show();
var hd = $("#datetimeDsituation").val();
var hf = $("#datetimeFsituation").val();
var choixresidant = $('#P_residanat_etudiant option:selected').val();

if($('input[name="details"]:checked'))
    {
      $(".loader2").hide();
      window.open('excelyr/'+choixresidant+"/"+hd+"/"+hf, '_blank');
    }
else
    {
      $(".loader2").hide();
      window.open('excely/'+choixresidant+"/"+hd+"/"+hf, '_blank');
    }



});
// $('#E_residanat').select2();
// $('#P_residanat_etudiant').select2();

});

