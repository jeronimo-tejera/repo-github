var product = []
var comments = []
var rat1 = document.getElementById('1').value;
var rat2 = document.getElementById('2').value;
var rat3 = document.getElementById('3').value;
var rat4 = document.getElementById('4').value;
var rat5 = document.getElementById('5').value;



function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let images = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <td>
                <img class="img-fluid img-thumbnail" src="` + images + `" alt="">
                </td>
            </div>
        </div>
        `

        document.getElementById("imageesproducto").innerHTML = htmlContentToAppend;
    }
}

function showComments(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let comment = array[i];
        htmlContentToAppend +=`
        <h5>`+comment.user+`</h5>
        <small style="text align:right"> Fecha:`+comment.dateTime+`</small>
        <div>
           <p>`+ comment.description+`</p>
           <small>Rate: `+` ` + comment.score+`</small> 
        </div>
        <hr/>
        `
        document.getElementById("Comentarios").innerHTML = htmlContentToAppend;
    }
}

function comentarA(){
    var use = sessionStorage.getItem("user");
    var d = new Date();
    var scores = sessionStorage.getItem('rate');
    var descriptio = document.getElementById('comentar').value;
    var nuevoComentario = {
        score : scores,
        description : descriptio,
        user : use,
        dateTime : d.getFullYear()+`-`+(d.getUTCMonth()+1)+`-`+d.getDate()+` `+``+``+d.getHours()+`:`+d.getMinutes()+`:`+d.getSeconds(),
    }
    comments.push(nuevoComentario);
    showComments(comments);
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let categoryNameHTML  = document.getElementById("productName");
            let categoryDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("categoriaaa");
            let productCoast = document.getElementById("precio");
            
            categoryNameHTML.innerHTML = product.name;
            categoryDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.soldCount;
            productCriteriaHTML.innerHTML = product.category;
            productCoast.innerHTML = product.cost +" "+ 'USD';

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
});
document.addEventListener("DOMContentLoaded", function (e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            comments = resultObj.data;
            showComments(comments);
        }
    })
})