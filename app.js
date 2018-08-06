
$(function() {
$( "#add" ).click(function() {

    let tags = $( "#tags" ).val();
    tags   = JSON.parse(tags)
    let texto = $( "#texto" ).val();

    Object.keys(tags).forEach(function(k){
        texto = texto.replace(k,tags[k])
    });
    $( "#texto" ).val(texto);
  });

  $( "#render" ).click(function() {

    let texto = $( "#texto" ).val();
    $("#rendered").empty()
    let $texto  =$("<div>"+texto+"</div>")
    $("#rendered").append($texto)

 
  });

})
