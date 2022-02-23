//utilizaremos el metodo map para recorrer el arrray y extraer la informacion de objeto salario
//
const salariosCol = colombia.map(
    function(personita){
        //personita el el nombre que le da la funcion internamente a la lista colombia
        // crea un array con este atributo
        return personita.salary;
    }
) 

const salarioColOrdenado = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;
    }
);

function esPar(numerito){
    // the funcion return false or true, is not necesaty a condicinal 
    return (numerito%2==0);
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if(esPar(lista.length)){
        // const personitamitad1 = lista[mitad-1];
        // const personitamitad2 = lista[mitad];
        const promediopersonita12= (lista[mitad-1]+lista[mitad])/2;
        return promediopersonita12;
    }else{
        const personitamitad = lista[mitad]
        return personitamitad;
    }

}

//Mediana del top 10%

const spliceStar= salarioColOrdenado.length*(100-10)/100;
const spliceCount= salarioColOrdenado.length-spliceStar;


const salariosColTop10 = salarioColOrdenado.splice(spliceStar,spliceCount);