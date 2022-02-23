console.log("Soy moda.js");
const lista1 = [1,2,3,1,2,3,4,2,2,2,1,3,3,3];

// // crear un objeto donde 

const lista1Count = {};

// el metodo map ayuda a recorrer el array. El método map() crea un nuevo array con los resultados 
//de la llamada a la función indicada aplicados a cada uno de sus elementos. 


// a cada elemento sin repetr le agrega 1
// lista1.map(
//     function(elemento){
//         lista1Count[elemento]=1;
//     }
// );


// estamos sumando la cantidad de veces que aparce un elemento en una lista, convirtiendolo en objeto
lista1.map(
    function(elemento){
       if(lista1Count[elemento]){
        lista1Count[elemento]= lista1Count[elemento]+1;
        //tambien se puede escribir como lista1Count[elemento] += 1
       }else{lista1Count[elemento]=1;}
    }
);

//convertimos el objeto en un array nuevamente
//Object.entries(lista1Count) convierte el objeto en un array
const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA,elementoB){
        // console.log(elementoA);
        // console.log(elementoB);
        return elementoA[1]-elementoB[1];
    }
);

// console.log(lista1);

// console.log("Objeto:sumando la cantidad de veces que aparce un elemento en una lista");
// console.log(lista1Count);

// console.log("Array: convertimos el objeto en un array nuevamente");
// console.log(lista1Array);


const arreglo =[3,5,2,9,6];
console.log(arreglo);
arreglo.sort(
    function(a,b){
        console.log(a+"-"+b)
        console.log(a-b)
        return a-b;
    }
);

console.log(arreglo);



const moda = lista1Array[lista1Array.length-1];