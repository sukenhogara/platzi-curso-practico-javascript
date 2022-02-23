console.log("Hola, soy figuras con funciones");

function perimetroCuadradoFuncion(lado){
    return lado*4;
}

function areaCuadradoFuncion(lado){
    return lado*lado;
}

function perimetrotrianguloFuncion(lado1, lado2,base){
    return lado1+lado2+base;
}

function areatrianguloFuncion(base,altura){
    return base*altura/2;
}
function diametroCircunferencia(radio){
    return radio*2;
}

const PI = Math.PI;

function perimetroCircunferenciaFuncion(radio){
    const diametro = diametroCircunferencia(radio);//Llamado de una funcion dentro de otra funcion
    return diametro*PI;
}

function areaCircunferenciaFuncion(radio){
    const diametro= diametroCircunferencia(radio);
    return PI*(diametro/2)**2;
}

//Aqui interactuamos con el HTML

function calcularperimetroCuadrado(){
const input = document.getElementById("inputCuadrado");
const value = input.value;
const perimetro = perimetroCuadradoFuncion(value);
alert(perimetro);

}

function calcularAreaCuadrado(){
const input = document.getElementById("inputCuadrado");
const value = input.value;
const area = areaCuadradoFuncion(value);
alert(area);   
}

function calcularPerimetroCircunferencia(){
const input = document.getElementById("inputCircunferencia");
const value = input.value;
const perimetro = perimetroCircunferenciaFuncion(value);
alert(perimetro);   
}

function calcularAreaCircunferencia(){
    const input = document.getElementById("inputCircunferencia");
    const value = input.value;
    const perimetro = areaCircunferenciaFuncion(value);
    alert(perimetro);   
    }

function esTrianguloEquilatero(){

}

//Ejercicio triangulo Isoceles

//Encuentra cual es la base del triangulo
function baseTriangulo(lado1,lado2,lado3){
    if(lado1===lado2){
       return lado3;
    }else if(lado1===lado3){
        return lado2;
        }else{
            return lado1;
        }
}
//Determina lados iguales
function ladosIgualesTriangulo(lado1,lado2,lado3){
    if(lado1===lado2){
       return lado1;
    }else if(lado1===lado3){
        return lado1;
        }else{
            return lado2;
        }
}
//Determina la altura
function alturaTrianguloIsoceles(lado1,lado2,lado3)
{
    if(lado1+lado2 > lado3 && lado1+lado3 > lado2 && lado3+lado2 > lado1){
        if(lado1===lado2||lado1===lado3||lado2===lado3){
            const base = baseTriangulo(lado1,lado2,lado3);
            const ladoIgual = ladosIgualesTriangulo (lado1,lado2,lado3);
            var alturaTriangulo =(ladoIgual**2+(base/2)**2)**0.5;
        }
    }  
    
    return alturaTriangulo;
}


function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputlado1");
    const value1 = input1.value;
    //parseInt(value1) permite cambiar un string a numero
    const value1num = parseInt(value1);

    const input2 = document.getElementById("inputlado2");
    const value2 = input2.value;
    const value2num = parseInt(value2);

    const input3 = document.getElementById("inputlado3");
    const value3 = input3.value;
    const value3num = parseInt(value3);

    var altura = alturaTrianguloIsoceles(value1num,value2num,value3num);
    console.log(altura);
    alert(altura);
}
