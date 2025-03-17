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
    }
}
