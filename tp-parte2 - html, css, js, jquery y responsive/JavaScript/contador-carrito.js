var cont = 0;

$(document).ready(function(){
	console.log(localStorage.getItem("comprados"));

	if(!localStorage.getItem("comprados")){
		localStorage.setItem("comprados", cont);
		$("#contador-compra").text(cont);
	}
	else{
		cont = localStorage.getItem("comprados")
		$("#contador-compra").text(cont);
	}

	$(".boton-comprar").click(function(){
		cont++;
		$("#contador-compra").text(cont);
		console.log(cont);
		localStorage.setItem("comprados", cont);
	});
});