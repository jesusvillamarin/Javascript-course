/* ======================================================== 
==         VIDEO Nro. 2                                  ==
==                                                       ==
== ========================================================*/
$(document).ready(function () {
    console.log("Bienvenido al curso de javascript - Platzi");
    console.log(`Concatenando String con llaves sin usar el "+"`);
    console.log(`El área del triangulo con base 5 y altura 7 es: ${5 * 7 / 2}`);

    //Usando el mismo codigo pero con variables
    var base = 5;
    var altura = 7;
    console.log("#### USANDO VARIABLES ####");
    console.log(`El área del triangulo con base 5 y altura 7 es: ${base * altura / 2}`);

    console.log("### USANDO Y CREANDO METODOS");

    base = prompt('Introuzca la base');
    altura = prompt('Introduzca la altura');
    console.log(`El área del triangulo con base ${base} y altura ${altura} es: ${areaTrian(base, altura)}`);

    /*$('#cold').click(()=>{
        $('#cold').toggle(1000);
        $('#hot').toggle(1000);
    });*/
});

let areaTrian = (base, altura) => base * altura / 2;

let areaTrin = function (base, altura) {
    return base * altura / 2;
}

function areaTriangulo(base, altura) {

    return base * altura / 2;

};


/* ======================================================== 
==         VIDEO Nro. 3 y 4                              ==
==                                                       ==
== ========================================================*/

let platzom = function (str) {
    // Si la palabra termina en "ar", se le quitan esos dos caracteres
    let trans = str.toLowerCase();
    if (trans.endsWith('ar')) {
        trans = str.slice(0, -2);
        console.log(trans);
    }

    // Si la palabra inicia con Z, se le añade "pe" al final
    if (trans.startsWith('z')) {
        trans += "pe";
        console.log(trans);
    }

    // Si la palabra tiene 10 o mas letras, se debe partir a la mitad y unir con un guión
    if (trans.length >= 10) {
        trans = trans.slice(0, (trans.length / 2)) + "-" + trans.slice(trans.length / 2);
        console.log(trans);
    }

    // Si la palabra original es un palíndromo, ningnuna regla anterior cuenta y se devuelve la misma palabra intercalando máyusculas y minúsculas
    if (trans == reverse(trans)) {
        trans = capitalize(trans);
        console.log(trans);
    }

    return;
};


/**
 * Función que convierte una cadena de caracters en mayúsculas y minúsculas 
  */
function capitalize(palabra) {

    let resultado = '';
    let bandera = true;
    for (i = 0; i < palabra.length; i++) {
        let carac = palabra.charAt(i);
        // USO DE IF TERNARIO 
        // (?)--> IF
        // (:)--> ELSE
        
        resultado += bandera ? carac.toUpperCase() : carac.toLowerCase();
        bandera = !bandera;
    }
    return resultado;
}

/**
 * FUNCIÓN QUE INVERTE UNA CADENA USANDO EL METODO SPLIT, REVERSE, JOIN
 * split('') ---> separa los caracteres cuando
 * reverse() --> Invierte la cadena
 * join('') ---> une la cadena una vez separada, hay que pasarle las comillas simples (''), si no devuelve la cadena como un arreglo
 */
let reverse = (palabra) => {
    palabra = palabra.split('').reverse().join('');
    return palabra;
};


platzom('sometemos');


/* ==================================================================================
==         VIDEO Nro. 4 y 5                                                        ==
==        Math.floor(3.9) //rendondea hacia abajo 3.9 = 3 (Valor mas bajo posible) ==
==        Math.ceil(3.1) //redondea para arriba 3.1 = 4 (Valor mas alto posible)   ==
==        Math.round(3.1) // redondea al entero mas cercano 3.1 = 3, 3.5 = 4       ==
==       Math.pow(4,3) // Elevar un número a x potencia                            ==
==       .toFixed(2) // Devuelve n decimales despues de la (,) 10.34050 = 10.34    ==
== =================================================================================*/
 const nombre = "Monique";
const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
];

//
function correr(){
    const min = 5 ;
    const max = 10;
    return Math.round(Math.random() * (max-min)) + min;
}

let totalkms=0;


for (let i = 0; i < dias.length; i++) {
    const kms = correr();
    totalkms += kms;
    console.log(`El día ${dias[i]}, ${nombre} corrio ${kms} kms`);

}

console.log(`${nombre} corrio en la semana un total de ${totalkms}kms, en promedio corre ${Math.round(totalkms/dias.length)}`);