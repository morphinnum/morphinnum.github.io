$(document).ready(function(e) {


$('.post-script a').click(function(){
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
     $('html, body').animate({
         scrollTop: destination
     }, 500);
 });
});