/* ======================================================== 
==         VIDEO Nro. 14                                 ==
==      Declarando funciones, nuevos metodos javascript  ==
== ========================================================*/


// Spread operator  ó Operador de propagación "..."

function sumaTradicional(...numeros) {
    let resultado = 0;
    // Forma tradicional de sumar números de un array
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }
    console.log(`La suma de los números de forma tradicional  es ${resultado}`);
}

// Todos los arrays tienen un metodo que se llama "Reduce"
// Y lo que va hacer es ir acumulando en un elemento el valor de los demás elementos pertenecientes a un array

function sumarReduce(...numeros) {
    // Forma de sumar los números de un array con el metodo reduce
    resultado = numeros.reduce(function (acumulador, numero) {
        acumulador += numero;
        return acumulador;
    }, 0);

    console.log(`La suma de los números con reduce es ${resultado}`);
}

sumaTradicional(10, 20, 30, 40, 50, 60);
sumarReduce(10, 20, 30, 40, 50, 60);


// Forma tradicional de doblar un número 2 -> 4...
function doblarTradicional(...numeros) {
    let arreglo = [];
    for (let i = 0; i < numeros.length; i++) {
        arreglo.push(numeros[i] * 2);
    }
    console.log(arreglo);
}
doblarTradicional(3, 6, 12, 20, 50);


// Función map, es una función perteneciente a los arrays
// map() recibe una función que se ejecuta por cada uno de los elementos

function doblarMap(...numeros) {
    // Arrow function sin {} debido que es solo una instrucción
    let resultado = numeros.map((numero) => numero * 2);
    console.log(numeros)
    console.log(resultado);
};
doblarMap(3, 6, 12, 20, 50);


// Encontrar los elementos pares de un array
// Forma tradicional

function pares(...numeros) {
    let resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            resultado.push(numeros[i])
        }
    }
}

// Usando filter()

function paresfilter(...numeros){
    let resultado = [];
    resultado = numeros.filter((numero) => numero %2 ==0);
    console.log(resultado);
}

paresfilter(10,20,30,15,23,213,61);