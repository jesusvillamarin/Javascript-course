/* ======================================================== 
==      Continuación video 10                            ==
==  2da forma de definir clases con Object.create        ==
== ========================================================*/


// Creamos el objeto Punto, en vez de dejarlo como function
const Punto = {
    init: function (x, y) {
        this.x = x;
        this.y = y;
    },
    moverEnX: function (x) {
        this.x += x;
    },
    moverEnY: function (y) {
        this.y += y;
    },
    //Metodo que calcula la distancia apartir del punto que invoca el metodo hasta el punto que se le pasa como argumento
    calcularDistancia: function (punto) {
        this.x -= punto.x;
        this.y -= punto.y;
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

//Creamos los objetos de tipo Punto
const punto1 = Object.create(Punto);
const punto2 = Object.create(Punto);
// Inicializamos los puntos con el metodo init()
punto1.init(0,4);
punto2.init(3,0);

