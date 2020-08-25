var usuario= document.getElementById("usuario");
var password= document.getElementById("password");

function validar(){
    if(usuario === '' || password===''){
        return false
    }else{
        guardarDatos();
        return true;
    }
}

function guardarDatos(){
    var user = usuario.value;
    var pass = password.value;
    sessionStorage.setItem("user", user);
    sessionStorage.setItem('pass', pass);

}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});