let validarnombreT = false;
let validarEmailT = false;
let validarcontraseñaT = false;
let repitecontraseñaT = false;

function validarnombre() 
{
    
    let name = document.getElementById("name").value; 
    let mensajeError = document.getElementById("mensajeError"); 
    

    if (name.length < 3)
    {
        mensajeError.innerHTML = "El nombre debe tener 3 caracteres o mas";
    }
    else{
        mensajeError.innerHTML="";
        validarnombreT = true;
        console.log(validarnombreT)
    }
}


function validarEmail() {
    let email = document.getElementById("email").value; 
    let mensajeErrorEmail = document.getElementById("mensajeErrorEmail"); 
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(regex)) 
    {
        mensajeErrorEmail.innerHTML = "El correo electrónico ingresado no es valido";
        
    }
    else
    {
        mensajeErrorEmail.innerHTML = "";
        validarEmailT = true;
        console.log(validarEmailT)
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
        mensajeErrorContraseña.innerHTML = "La contraseña no es valida";
    }
    else{
        mensajeErrorContraseña.innerHTML="";
        validarcontraseñaT = true;
        console.log(validarcontraseñaT)
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

    }
    else
    {
        mensajeErrorRepite.innerHTML = "";
        repitecontraseñaT = true;
        console.log(repitecontraseñaT)
    }

}

document.getElementById("envio").addEventListener("click", validarEnvio(validarnombreT , validarEmailT , validarcontraseñaT , repitecontraseñaT));
function validarEnvio(event , validarnombreT , validarEmailT , validarcontraseñaT , repitecontraseñaT)
{
    console.log(validarnombreT)

    if(!(validarnombreT == true && validarEmailT == true && validarcontraseñaT == true && repitecontraseñaT == true))
    {
        alert("Por favor, complete todos los campos correctamente.");   
    }
    else
    {
        alert("Se envio el formulario correctamente.");
    }
}






