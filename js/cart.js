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
                        <td name="moneda">`+producto.currency+`</td>
                        <td name="subtotal"></td>
                        <td name="stUSD"></td>
                    </tr>
        `
        document.getElementById("Funca! Carajo!").innerHTML = htmlContentToAppend;
    }
}



function subtotalporART(){
    var arrayCantidades = document.getElementsByName("cantidad");
    var arrayPrecio = document.getElementsByName("costo");
    var subtotal = document.getElementsByName("subtotal");
    var moneda = document.getElementsByName("moneda");
    for (let i=0; i<arrayCantidades.length; i++){
        let subtotalcalculo = parseInt(arrayPrecio[i].innerText)*arrayCantidades[i].value;
        subtotal[i].innerHTML = String(subtotalcalculo);
        if(moneda[i].textContent === "UYU"){
            let stUSDcal = subtotalcalculo / 40
            document.getElementsByName("stUSD")[i].innerHTML = stUSDcal
        }else{
            document.getElementsByName("stUSD")[i].innerHTML = subtotalcalculo
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