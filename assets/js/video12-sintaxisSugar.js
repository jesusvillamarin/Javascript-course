/* ======================================================== 
==         VIDEO Nro. 12                                 ==
==      3er forma de definir clases en Javascrpt         ==
== ========================================================*/

// Sintaxis Sugar manera mas amigable de escribir un código muy largo

// En vez de escribir la palabra function la cambiamos por class

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    moverEnX(x) {
        this.x += x;
    }

    moverEnY(y) {
        this.y += y;
    }

    distancia(punto) {
        let x = this.x - punto.x;
        let y = this.y - punto.y;
        return Math.sqrt(x * x + y * y);
    }
}

const punto1 = new Punto(0, 4);
const punto2 = new Punto(3, 0);