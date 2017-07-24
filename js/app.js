$(document).foundation();

//jquery for minimal fields
$(document).ready(function() {
  $("input, textarea, select").focus(function(){
    $(this).parent().addClass("is-focused");
    $(this).focusout(function(){
      $(this).parent().removeClass("is-focused");
      if ($(this).val().length > 0){
        $(this).parent().addClass("is-dirty");
      }
      if ($(this).val().length == 0){
        $(this).parent().removeClass("is-dirty");
      }
    });
  });
});