/* ======================================================== 
==         VIDEO Nro.8                                   ==
==      CALCULAR LA DISTANCIA ENTRE 2 PUNTOS             ==
== ========================================================*/

let punto1 =  new Puntos(0,4);

let punto2 = new Puntos(3,0);

function distancia(punto1,punto2){
    const x = punto1.x- punto2.x;
    const y = punto1.y - punto2.y;
    return Math.sqrt(x*x+y*y).toFixed(2);

    //Math.sqrt() Es la función que calcula la raiz cuadrada de x
    // toFixed(2) tomar 2 decimales despues de la (,)
}


// en Javascript no existen las clases como tales pero si los prototipos

function Puntos(x,y){
    this.x = x;
    this.y = y;
}
Puntos.prototype.moverEnX = function(x){
    this.x += x;
}
Puntos.prototype.moverEnY =function (y){
    this.y += y;
}