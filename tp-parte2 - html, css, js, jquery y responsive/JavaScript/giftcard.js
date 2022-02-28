
function colorTexto(color){


    if(document.getElementById("red").checked){
        document.getElementById("nombreDestiId").style.color = color;
    }

    if(document.getElementById("green").checked){
        document.getElementById("nombreDestiId").style.color = color;
    }
    if(document.getElementById("blue").checked){
        document.getElementById("nombreDestiId").style.color = color;
    }
    if(document.getElementById("black").checked){
        document.getElementById("nombreDestiId").style.color = color;
    }
    if(document.getElementById("white").checked){
        document.getElementById("nombreDestiId").style.color = color;
    }
}

function colorFondo(color){


    if(document.getElementById("cuad-red").checked){
        document.getElementById("cajaColorida").style.background=color;
    }
    if(document.getElementById("sup-izq").checked){
        document.getElementById("cajaColorida").style.background=color;
    }

    if(document.getElementById("sup-der").checked){
        document.getElementById("cajaColorida").style.background = color;
    }
    if(document.getElementById("sup-der").checked){
        document.getElementById("cajaColorida").style.background = color;
    }
    if(document.getElementById("sup-izq").checked){
        document.getElementById("cajaColorida").style.backgroundC= color;
    } 
}

function mostrarTamFuente(tam){


    if(document.getElementById("20px").checked){
        document.getElementById("nombreDestiId").style.fontSize=tam;
    }
    if(document.getElementById("28px").checked){
        document.getElementById("nombreDestiId").style.fontSize=tam;
    }

    if(document.getElementById("32px").checked){
        document.getElementById("nombreDestiId").style.fontSize=tam;
    }
    if(document.getElementById("48px").checked){
        document.getElementById("nombreDestiId").style.fontSize=tam;
    }
    if(document.getElementById("60px").checked){
        document.getElementById("nombreDestiId").style.fontSize= tam;
    } 
}


function cambiarPosiPrecio(){

    if(document.getElementById("inf-der").checked){
        document.getElementById("caja-miniatura").positio
    }
    if(document.getElementById("sup-izq").checked){
        document.getElementById("caja-miniatura").style.fontSize=tam;
    }
    if(document.getElementById("sup-der").checked){
        document.getElementById("caja-miniatura").style.fontSize= tam;
    } 
}



function mostrarNombreDest(){

    var nombreDes = document.getElementById("nombreyapellido").value;
    document.getElementById("nombreDestiId").innerHTML = nombreDes;
}


function mostrarNombreDest(){

    var nombreDes = document.getElementById("nombreyapellido").value;
    document.getElementById("nombreDestiId").innerHTML = nombreDes;
}

function mostrarPrecio(){

    var nombrePrecio = document.getElementById("monto").value;
    document.getElementById("precioId").innerHTML ="$" + nombrePrecio;
}

/*
Jquery

*/
$(document).ready(function(){

    $("#red").click(function(){
        $("#nombreDestiId").addClass("rojo");
    });
});