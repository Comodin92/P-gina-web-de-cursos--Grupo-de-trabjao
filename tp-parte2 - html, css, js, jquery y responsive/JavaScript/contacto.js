$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        console.log(e);
        validar(e);

    });

});
function cantidadLetras(){

     mensaje = document.getElementById('consulta');
     contador = document.getElementById('cantLetras');
    
    mensaje.addEventListener('input', function(e) {
         target = e.target;
         longitudMax = target.getAttribute('maxlength');
         longitudAct = target.value.length;
        contador.innerHTML = `${longitudAct}/ ${longitudMax - longitudAct } `;

    });
}

function validar(e){
       
    var error=false;
    var mensajeError="";
    var regexCampoNumerico = /^\d{4}-\d{4}$/;
    //var regexCampoNumerico= /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; //expresion regular para emails validos

    $("#mensaje").empty();

    if($("#nomyApe").val()==""){ 

        error=true;
        mensajeError+="<p>El campo nombre y apellido es obligatorio</p>";
    }
    
     if(!$("#mail").val().match(regexemail)){
        mensajeError+= "<p>Debe ser un email valido</p>";
        error=true;
        $("#mail").addClass('error');
     }

     if(!$("#edad").val().match(regexCampoNumerico)){
        error =true;
        if($("#edad").val().lenght >= 9){
            mensajeError+="<p>No puede tener mas de 8 numeros</p>";
        }
        else
        mensajeError += "<p>El campo edad solo adminte num</p>"
     }

     if(!$("#numero").val().match(regexCampoNumerico) ){

        error = true;
        mensajeError += "<p>El campo número solo adminte num</p>"
     }

     if(error){
        $("#mensaje").append(mensajeError);
    }
    

}


