// console.log("Estoy en descuentos");
// const precioOriginal= 500;
// const descuento = 15;

// console.log({precioOriginal,descuento,porcetajeCondescento,precioConDescuento})

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

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuentofinal = calcularPrecioConDescuento(priceValue,discountValue)
    
    // este codigo permite imprimir en html
    //document.getElementById("resultPrice") devuelve la etiqueta del parrafo en html, 
    //para luego ser guardada en una constante
    const resultPrice = document.getElementById("resultPrice");
    //resultPrice.innerText se comporta como atributo, signandole el texto que se quiere enviar al parrafo de HTML
    resultPrice.innerText = "El precio con descuento son: $ " + precioConDescuentofinal

}


