/* ======================================================== 
==         VIDEO Nro. 26                                 ==
==      Mejorando los callbacks con las promesas         ==
==          continuación del anterior --- usando fetch   ==
== ========================================================*/


const API_URL = 'https:/swapi.co/api/people/1';


function handleError(error) {
    console.error(`Error: ${error.message}`);
}

// Con fetch seria asi, sin crear el metodo getPersonas()
var luke;
fetch(API_URL)
    .then(res => res.json())
    .then((resjson) => {
        luke = resjson;
        return fetch(luke.homeworld);
    }).then(res => res.json())
    .then(lukecasa => {
        luke.homeworld = lukecasa;
        console.log(`El tipo se llama ${luke.name} y vive en ${luke.homeworld.name}`)
    }).catch(err => handleError(err));