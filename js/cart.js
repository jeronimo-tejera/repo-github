articulos = {}
function showCart(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let producto = array[i];
        htmlContentToAppend += `
                    <tr id="`+i+`art">
                        <td><img class="img-fluid img-thumbnail" src="` +producto.src+ `" width="100"</td>
                        <td>`+producto.name+`</td>
                        <td name="costo">`+producto.unitCost+`</td>
                        <td><input type="number" name="cantidad" min="1" max="100" onchange="subtotalporART()"></td>
                        <td>`+producto.currency+`</td>
                        <td id="subtotal`+i+`"></td>
                    </tr>
        `
        document.getElementById("Funca! Carajo!").innerHTML = htmlContentToAppend;
    }
}



function subtotalporART(){
    let html = "";
    var arrayCantidades = document.getElementsByName("cantidad");
    var arrayPrecio = document.getElementsByName("costo");
    for(let i=0; i<arrayCantidades.length; i++){
        var costo = parseInt(arrayPrecio[i].innerHTML)
        html +=``+arrayCantidades[i].value*costo+``;
        if(i<i+1){
            document.getElementById("subtotal"+i+"").innerHTML = html;
        }

    }

}







//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            articulos = resultObj.data;
            showCart(articulos.articles);
        }
    })
});