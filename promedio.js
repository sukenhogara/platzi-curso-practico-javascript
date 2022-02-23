// console.log("Soy promedio.js");

// const lista1 = [100,200,300,400,500];


// console.log(promedio);

function calcularMediaAritmetica(lista){
        let sumalista=0;
    for(let i=0; i<lista.length; i++){
        sumalista = sumalista+lista[i];
}

let promedio=sumalista/lista.length;
return promedio;

}