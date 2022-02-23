//ejercicio descuento con cupon de descuentos


// funcion que calcula un descuento de 15 ,20,25 ó 30%
function selectorCupon (){
    var selector = Math.random();
    var selectorEntero = Math.trunc(selector*100)%4; 
    
    switch(selectorEntero){
           case 0:
               return 15;
               break;
           case 1:
               return 20;
               break;
           case 2:
               return 25;
               break;
           case 3:
               return 30;
               break;
           default:
               console.log("");
       }
}

var cuponObtenido = selectorCupon();


//funcion que aplica el descuento al cliente
function calcularPrecioConDescuento (precio,descuento){
    const porcetajeConDescento = 100 - descuento;
    const precioConDescuento = precio*porcetajeConDescento/100;
    return precioConDescuento;
}


function onclickCalcularPrecioDescuento(){
    
    //getElementById("inputPrice") recorre el html buscando el id llamado inputPrice y captura la etiqueta
    const inputprice = document.getElementById("inputPrice");
    //.value extrae el valor de la etiqueta inputprice  y la guarda en una constante
    const priceValue = inputprice.value;
    // parseInt(priceValue) permite convertir un string a un numero entero
    const numpriceValue= parseInt(priceValue);

    // const inputDiscount = document.getElementById("inputDiscount");
    // const discountValue = inputDiscount.value;

    const precioConDescuentofinal = calcularPrecioConDescuento(priceValue,cuponObtenido)
    
    // este codigo permite imprimir en html
    //document.getElementById("resultPrice") devuelve la etiqueta del parrafo en html, 
    //para luego ser guardada en una constante
    
    const bonoCalculado = document.getElementById("suma");
    //resultPrice.innerText se comporta como atributo, signandole el texto que se quiere enviar al parrafo de HTML
    bonoCalculado.innerText = "Tu Bono descuento es de :  " + cuponObtenido + "%";
    
    const resultPrice = document.getElementById("resultPrice");
    //resultPrice.innerText se comporta como atributo, signandole el texto que se quiere enviar al parrafo de HTML
    resultPrice.innerText = "Felicidades, solo debes pagar: $ " + precioConDescuentofinal

    cuponObtenido = selectorCupon();

}



