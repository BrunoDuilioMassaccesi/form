
function validarnombre() 
{
    
    let name = document.getElementById("name").value; 
    let mensajeError = document.getElementById("mensajeError"); 
    

    if (name.length < 3)
    {        
        mensajeError.innerHTML = "El nombre debe tener 3 caracteres o mas";
        return false;
    }
    else{
        mensajeError.innerHTML="";
        return true;
    }
}


function validarEmail() {
    let email = document.getElementById("email").value; 
    let mensajeErrorEmail = document.getElementById("mensajeErrorEmail"); 
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(regex)) 
    {
        mensajeErrorEmail.innerHTML = "El correo electrónico ingresado no es valido";
        return false;
    }
    else
    {
        mensajeErrorEmail.innerHTML = "";
       return true;
    }
     
}


function validarContraseña() 
{
    
    let contraseña = document.getElementById("contraseña").value; 
    let mensajeErrorContraseña = document.getElementById("mensajeErrorContraseña"); 
    let regex = /\d/;
    let regexLetra = /[a-zA-Z]/;

    if (contraseña.length < 8 || !regex.test(contraseña) || !regexLetra.test(contraseña) )
    {
        mensajeErrorContraseña.innerHTML = "La contraseña no es valida";;
        return false;
    }
    else{
        mensajeErrorContraseña.innerHTML="";
        return true;
    }
}

function repiteContraseña()
{
    let contraseña = document.getElementById("contraseña").value;
    let validoContraseña= document.getElementById("validoContraseña").value;
    let mensajeErrorRepite = document.getElementById("mensajeErrorRepite"); 
   
    if(validoContraseña != contraseña)
    {
        mensajeErrorRepite.innerHTML = "La contraseña debe ser igual a la ingresada previamente";
        return false;
    }
    else
    {
        mensajeErrorRepite.innerHTML = "";
        return true;
    }

}

let mensajFinal = document.getElementById("mensajFinal");

document.getElementById("envio").addEventListener("submit", function(event) {
    event.preventDefault(); 

    if(!validarnombre() || !validarEmail() || !validarContraseña() || !repiteContraseña()) {
        mensajFinal.innerHTML = "Por favor complete todos los campos correctamente";
    }
    else 
    {
        mensajFinal.innerHTML = "Formulario enviado correctamente";
    }
});











