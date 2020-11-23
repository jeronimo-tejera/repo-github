//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function  guardar(){
    var nombre = document.getElementById("Nombre");
    var apellido = document.getElementById("Apellido");
    var mail = document.getElementById("mail");
    var telefono = document.getElementById("Telefono");
    var edad = document.getElementById("Edad");
    var persona = {
        Nombre: nombre.value,
        Apellido: apellido.value,
        Mail: mail.value,
        Edad: edad.value,
        Telefono: telefono.value,
    }

    localStorage.setItem("persona", JSON.stringify(persona)); 
    mostrar()
    
}
 function mostrar(){
    var persona = JSON.parse(localStorage.getItem("persona"))
    document.getElementById("Nombre").value = persona.Nombre;
    document.getElementById("Apellido").value = persona.Apellido;
    document.getElementById("mail").value = persona.Mail;
    document.getElementById("Telefono").value = persona.Telefono;
    document.getElementById("Edad").value = persona.Edad;
 }

document.addEventListener("DOMContentLoaded", function (e) {
    mostrar();
});

