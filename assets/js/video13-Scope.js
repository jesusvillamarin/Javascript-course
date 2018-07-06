/* ======================================================== 
==         VIDEO Nro. 13                                 ==
==      Entendiendo el scope de las variables            ==
== ========================================================*/

// Scope --> Conjunto de variables  y funciones que podemos acceder en una determinada linea de codigo, Scope global, Scope Local

// Closure ---> son aquellas funciones que son creadas dentro de otra función, recuerdan el scope y pueden acceder a todas esas variables y funciones con los datos que tienen en el momento que se invoco la función

//  SCOPE GLOBAL
var nombre = "jesus";

// SCOPE LOCALES
const nombre = "Jesús"

function saludar(nombre){
    // El parametro "nombre" de esta función pertenece al scope local
    console.log(nombre);
}
var nombre= "chicharo";
function saludar2(){
    let  nombre = "CR7";
    console.log(nombre);

    if(true){
        const nombre = "Messi";
        console.log(nombre);
    }
}
saludar2();


function saludarFamilia(nombre){
    console.log(`Hola ${nombre} Villamarín`);
}

saludarFamilia("Sara");
saludarFamilia("Humberto");
saludarFamilia("Jesús");

// Funcion que sirva para saludar a miembros de una familia
// con  CLOSURES

function saludarFamilia2(apellido){
    return (nombre) => console.log(`Hola ${nombre} ${apellido}`)
}
// Ese metodo se puede llamar de dos maneras
// Primera
const saludo = saludarFamilia2("Villamarín")("Jesús");

// Segundo 
const saludo = saludarFamilia2("Villamarin");
saludo("jesús");
