$(document).ready(function() {
  $('.spin').click(function() {
    $(".spinner").animate({rotate: $(".spinner").css("rotate")%360 + Math.floor(Math.random() * 600 + 120)}, 2000);
  });
});
