$(document).ready(function(e) {


$('.post-script a').click(function(){
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
     $('html, body').animate({
         scrollTop: destination
     }, 500);
 });
$('#hideImg1').click(function(){
  $('#hideImg').hide();
}); 
 

$('#showImg1').click(function(){
  $('#hideImg').show();
});

});