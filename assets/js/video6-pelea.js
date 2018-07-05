/* ======================================================== 
==         VIDEO Nro.6                                  ==
== ========================================================*/

let pj1 = {
    nombre: '',
    vida: 100,
};

let pj2 = {
    nombre: '',
    vida: 100,
};

pj1.nombre = prompt("Nombre del Jugador 1");
pj2.nombre = prompt("Nombr del Jugador 2");

const min_power = 5;
const max_power = 12;
let round = 1;

let flag = 0;
// Arrow fuction con una variable constante
const voladoStart = () => flag = Math.round(Math.random());
const changeTurn = () => (flag) ? flag = 0 : flag = 1;
const siguenVivos = () => pj1.vida > 0 && pj2.vida > 0;
const calcularGolpe = () => Math.round(Math.random() * (max_power - min_power) + min_power);

while (siguenVivos()) {
    if (round == 1) {
        voladoStart();
    } else {
        changeTurn();
    }

    if (flag) {
        console.log(`Round ${round}`);
        const golpePj2 = calcularGolpe();
        pj1.vida -= golpePj2;
        console.log(`${pj2.nombre} ataca con un golpe de ${golpePj2} a ${pj1.nombre} y lo deja en ${pj1.vida} de vida`);

        
    } else {
        const golpePj1 = calcularGolpe();
        pj2.vida -= golpePj1;
        console.log(`${pj1.nombre} ataca con un golpe de ${golpePj1} a ${pj2.nombre} y lo deja en ${pj2.vida} de vida`);
    }
    round++;

}

if(pj1.vida <= 0){
    console.log(`${pj2.nombre} gano la pelea!!`);
}else if (pj2.vida <= 0) {
    console.log(`${pj1.nombre} gano la pelea!!`);
}