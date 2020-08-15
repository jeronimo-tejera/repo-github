var usuario= document.getElementById("usuario");
var password= document.getElementById("password");

function validar(){
    if(usuario === '' || password===''){
        return false
    }else{
        return true
    }
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});