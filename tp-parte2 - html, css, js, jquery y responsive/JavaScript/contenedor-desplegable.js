$(document).ready(function(){
	
	$("#unidad0").hide();
	$("#unidad1").hide();
	$("#unidad2").hide();

	$("#boton-unidad0").click(function(){
		if($("#unidad0").is(":hidden")){
			$("#unidad0").slideDown();
			$(this).attr("class", "fas fa-chevron-up");
		}		
		else{
			$("#unidad0").slideUp();
			$(this).attr("class", "fas fa-chevron-down");
		}
	});

	$("#boton-unidad1").click(function(){
		if($("#unidad1").is(":hidden")){
			$("#unidad1").slideDown();
			$(this).attr("class", "fas fa-chevron-up");
		}
		else{
			$("#unidad1").slideUp();
			$(this).attr("class", "fas fa-chevron-down");
		}
	});

	$("#boton-unidad2").click(function(){
		if($("#unidad2").is(":hidden")){
			$("#unidad2").slideDown();
			$(this).attr("class", "fas fa-chevron-up");
		}
		else{
			$("#unidad2").slideUp();
			$(this).attr("class", "fas fa-chevron-down");
		}
	});

	$(".checked").click(function(){
		if($(this).hasClass("far fa-check-circle")){ //si no esta checkeado
			$(this).removeClass("far fa-check-circle").addClass("fas fa-check-circle checkeado");
		}
		else{
			$(this).removeClass("fas fa-check-circle checkeado").addClass("far fa-check-circle");
		}
	});
});