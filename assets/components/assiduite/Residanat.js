
$("#E_residanat").on("change", function () {
  var Residanat = $('#E_residanat option:selected').val();;
  $.ajax({
    type: "POST",
    url: "/api/residanat-etud/" + Residanat,
    success: function (html) {
      $("#P_residanat_etudiant").html(html);
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

$("body #create_extractionRESIDANT").on("click", function () {
  var hd = $("#datetimeDsituation").val();
  var hf = $("#datetimeFsituation").val();
  var choixresidant = $('#E_residanat option:selected').val();

  window.open('/excely/'+element,+hd,+hf, '_blank');


});
// $('#E_residanat').select2();
$('#P_residanat_etudiant').select2();



///////test checkbox////
if($('input[name="details"]:checked'))
{
  // checked
}else{
// unchecked
}