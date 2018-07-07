/* ======================================================== 
==         VIDEO Nro. 22                                 ==
==      Creando Modulos con javascript                   ==
== ========================================================*/

/* Que es un modulo?
    --> Es un fragmento de código encapsulado que se encarga de resolver un problema especifica
        un modulo debe ser pequeño y debe ser responsable de una sola cosa

    --> Tambien se crean modulos para resolver dependencias, Esto quiere decir que si tengo dos clases con el mismo código, para eso puedo crear un modulo el cual va ser usado por las dos clases, evitando tener código duplicado

    --> commonJS nos permite escribir modulos y exportarlos  ---- es sincrono
            --> module.exports = { función, constante, variables, clases , etc}
            --> const modulo = require('assets/js/modulo.js');

    --> AMD otra forma de escribir modulos --- es asincrona

    --> Modulos de Ecmascript 2015 
        ---> export function calcularDias(){...};
        ---> import 'modulo' from 'assets/js/modulo.js';

    --> SystemJS utilzado por angular y es universal, su lenguaje es mas complejo


*/
