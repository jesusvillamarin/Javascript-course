/* ======================================================== 
==         VIDEO Nro. 25                                 ==
==      Mejorando los callbacks con las promesas         ==
== ========================================================*/

// Se modifica el código de los callbacks usando promesas y reduciendo el codigo


// Las promesas son básicamente objetos y pueden estar en 3 estados
// Estan asociados a una tarea asincronica
//     --> Estado 1. Pending  --- estara asociada a una tarea asincronica
//     --> Estado 1. Fullfield --- se completo exitosamente
//     --> Estado 1. Rejected  --- Se produjo un error y no se pudo completar 


// como funcionan las promesas?
// En el constructor se le pasa una función con dos parametros 
// * Resolve 
// * Reject

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(new Error('Se produjo un error'));
    }, 1000);
});

promise.then(function () {
    console.log("Todo OK");
}).catch(function (err) {
    console.log("Surgio un error", err);
})



const API_URL = 'https://swapi.co/api/people/1';

function getPersonas(url) {
    return new Promise(function (resolve, reject) {

        const peticion = new XMLHttpRequest();

        peticion.onreadystatechange = function()  {
            const DONE = 4;
            const OK = 200;
            if (this.readyState == DONE) {
                if (this.status == OK) {
                    resolve(
                        JSON.parse(this.responseText)
                    )
                } else {
                    reject(new Error(`Se produjo un error de estado ${this.status}`));
                }
            }
        }
        peticion.open('GET', url);
        peticion.send(null);
    });
}

function handleError(err) {
    console.error(`[Error] ${err.message}`)
}

var luke ;
getPersonas(API_URL)
    .then(function (res) {
        console.log(res)
       luke = res;
       return getPersonas(luke.homeworld);
    }).then(res =>{
        luke.homeworld = res;
        console.log(`El nombre del tipo es ${luke.name} y vive en ${luke.homeworld.name}`)
    })
    .catch(err => handleError(err));