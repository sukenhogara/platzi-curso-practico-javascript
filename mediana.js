console.log("Soy mediana.js");
const lista = [3,6,15,4,13,16,18,1,8,6,14,5,15,9];

function parImpar(numero){
    if(numero%2===0){
        return "par";
    }else{return "impar";}
}
function calcularMediana(lista){

    const listaOrdenada = lista.sort();
    if (listaOrdenada.length%2===0){
        const mitadpar = Math.trunc((listaOrdenada.length)/2);
         const medianapar =(listaOrdenada[mitadpar]+listaOrdenada[mitadpar-1])/2;
         console.log("par");
         console.log(listaOrdenada);
         return medianapar;     
    }else{
        console.log(listaOrdenada);
        const mitadImpar = Math.trunc((listaOrdenada.length)/2);
        const medianaImpar = listaOrdenada[mitadImpar];
        console.log("impar");
        console.log(listaOrdenada);
        return medianaImpar;
        }
}