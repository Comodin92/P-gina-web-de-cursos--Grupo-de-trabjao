$(document).ready(function(){
	$("#menu-header-abre").click(function(){
		$(".menu-desplegable-header").animate({
			left: '0'
		});
		$("#fondo-transparente-costado-menu").show();
	});
	$("#menu-header-cierra").click(function(){
		$(".menu-desplegable-header").animate({
			left: '-100%'
		});
		$("#fondo-transparente-costado-menu").hide();
	})
});