/* ======================================================== 
==         VIDEO Nro. 24                                 ==
==      Callbacks en javascript                          ==
== ========================================================*/

console.log("Esto se ejecuta primero");
setTimeout(function callback() {
    console.log("Y este de tercero");
}, 1000);

console.log("Esto se ejecuta de segundo");

// Eso pasa debido a que la pila de ejecución al encontrar el callback lo envia a la pila de tareas, para asi continuar con la siguiente
// la cual sería console.log("Esto se ejecuta de segundo"); y cuando porfin este libre la pila se ejecutara el callback

// Acá abajo crearemos un callback a un servidor externo
const API_URL = "https://swapi.co/api/people/1";

function getPersona(url, callback) {
    const peticion = new XMLHttpRequest();

    peticion.onreadystatechange = function () {
        const DONE = 4;
        const OK = 200;

        if (this.readyState == DONE) {
            if (this.status == OK) {
                callback(null, JSON.parse(this.responseText));
                console.log("Todo OK");
            } else {
                callback(new Error(`Se produjo un error al request ${this.status}`));
                console.log("Hubo un error");
            }
        }
    }

    peticion.open('GET', url);
    peticion.send(null);
};

function handleError(err){
    console.log(`Error: ${err}`);
}

var luke;

getPersona(`${API_URL}`, function response(err, res) {
    if (err) return handleError(err);
     luke = res;

    getPersona(res.homeworld, function(err,res){
        if(err) return handleError(err);
        luke.homeworld = res;
        console.log(`El tipo se llama ${luke.name} y vive en ${luke.homeworld.name}`);
    })
});

// Existen callbacks de callbacks de callbacks, y son conocidos tambien como callbacks hell
// Y esto se resuelve con Promesos
