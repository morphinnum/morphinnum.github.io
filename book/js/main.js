$(document).ready(function($) {


$('.postpixar-script a').click(function(){
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
     $('html, body').animate({
         scrollTop: destination
     }, 500);
});
var ind = 1;
$('#open' + ind).click(function(){
    var hBlock = $('#hidd' + ind);
    $(this).text(hBlock.is(':visible') ? 'Більше' : 'Менше');
    hBlock.toggle('slow');
});



})(jQuery);