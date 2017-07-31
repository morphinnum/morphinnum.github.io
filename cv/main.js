$(document).ready(function(e) {

$('.header_menu_icon').click(
	function() {
		$('.my-header_aside').show(200);
	}
);

$('.my-header-close').click(
	function(){
		$('.my-header_aside').hide(200);
	}
);

$('.my-header-list-menu li').click(
function() {
	$('.my-header_aside').hide();
}
);

$('.button-position').mouseenter(
function() {
	$('.tooltip').show(300);
	console.log(event.type);
	console.log(event.target);
}
	);
	
$('.button-position').mouseout(
function() {
	$('.tooltip').hide(300);
}
	);




$('#pic1').mouseenter(
function() {
	$('.tooltip').show(300);
}
	);
	
$('#pic1').mouseout(
function() {
	$('.tooltip').hide(300);
}
	);

	
$(".my-header_aside").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);
	});

$('#pic1').click(
	function(){
		$('.popup-wrap').fadeIn(300);
	}
	);
$('#close').click(
	function(){
		$('.popup-wrap').fadeOut(300);
	}
	);


});