/* ======================================================== 
==         VIDEO Nro.7                                   ==
== ========================================================*/
let año = 1997;
let mes = 4;
let dia = 29;
let nacimiento = new Date(año,mes-1,dia);

let hoy = new Date();

let tiempo = hoy-nacimiento;

let proxCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(),nacimiento.getDate());

let dias =[
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
];

console.log(`Día de la semana de mi cumpleaños del año ${proxCumple.getFullYear()} es el ${dias[proxCumple.getDay()]}`);
