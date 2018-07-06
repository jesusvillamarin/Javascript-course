/* ======================================================== 
==         VIDEO Nro.8, 9 y 10                           ==
==      1era forma de definir clases en Javascript       ==
==      CALCULAR LA DISTANCIA ENTRE 2 PUNTOS             ==
== ========================================================*/

// en Javascript no existen las clases como tales pero si los prototipos
// La mejor forma de agregarle metodos a un prototipo es de la siguiente forma
// NombrePrototipo.prototype.nombreMetodo = function (parametros){};

/* PROTOTIPO */
function Puntos(x,y){
    this.x = x;
    this.y = y;
}
Puntos.prototype.moverEnX = function(x){
    this.x += x;
}
Puntos.prototype.moverEnY = function (y){
    this.y += y;
}
Puntos.prototype.distancia = function(otroPunto){
    this.x -= otroPunto.x;
    this.y -= otroPunto.y;
    return Math.sqrt(this.x*this.x+this.y*this.y);
}

let punto1 =  new Puntos(0,4);

let punto2 = new Puntos(3,0);

function distancia(punto1,punto2){
    const x = punto1.x- punto2.x;
    const y = punto1.y - punto2.y;
    return Math.sqrt(x*x+y*y).toFixed(2);
    //Math.sqrt() Es la función que calcula la raiz cuadrada de x
    // toFixed(2) tomar 2 decimales despues de la (,)
}

console.log(distancia(punto1,punto2));
console.log(distancia(punto2,punto1));
console.log(distancia(punto1,{x:10, y:20}));
punto1.moverEnX(10);
punto2.moverEnY(-4);

console.log(punto1.distancia(punto2));
console.log(punto2.distancia(punto1));
console.log(distancia(punto1,punto2));

