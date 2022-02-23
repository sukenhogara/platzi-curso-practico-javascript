
// Codigo del cuadrado
console.group("Cuadrado");

console.log("hola Mundo");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:"+ladoCuadrado+"cm");

const perimetroCuadrado = 4*ladoCuadrado; 
console.log("Perimetro Cuadrado:"+ perimetroCuadrado+"cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("Area Cuadrado:"+ areaCuadrado+"cm^2");

console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const ladobasetriangulo = 4;
const alturaTriangulo = 5;

console.log(
    "los lados del triangulo miden : "
    +ladotriangulo1+"cm "
    +ladotriangulo2+"cm "
    +ladobasetriangulo+"cm"
    );

console.log("la Altura del triangulo:"+ alturaTriangulo +"cm");

const perimetroTriangulo = ladotriangulo1+ladotriangulo2+ladobasetriangulo;
console.log("El perimetro del triangulo es:"+ perimetroTriangulo +"cm");

const areaTriangulo = (ladobasetriangulo*alturaTriangulo)/2;
console.log("El area del triangulo es:"+ areaTriangulo+"cm");


console.groupEnd();


// Codigo del circulo
console.group("Circulo");

// radio
const radioCirculo = 4;
console.log("radio del circulo:"+ radioCirculo+"cm");

//Diametro

const diametroCirculo = radioCirculo*2;
console.log("diametro del circulo:"+ diametroCirculo+"cm");
//pi
const pi =Math.PI;
console.log("constante pi:"+ pi);

//Circunferencia
perimetroCircunferencia = 2*pi*radioCirculo;
console.log("Perimetro Circunferencia:"+ perimetroCircunferencia+"cm");

//Area Circulo
AreaCirculo = pi*(radioCirculo*radioCirculo);
console.log("Area del circulo:"+ AreaCirculo+"cm^2");


console.groupEnd();

console.log(3**3)


