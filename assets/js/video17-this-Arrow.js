/* ======================================================== 
==         VIDEO Nro. 17                                 ==
==      This, this y arrow function                      ==
== ========================================================*/

class Persona {
    constructor (nombre, amigos=[]){
        this.nombre = nombre;
        this.amigos=amigos;

    }

    SaludarAmigos(obje){
        const _this = this;
        this.amigos.forEach(element => {
            console.log(`Hola soy ${_this.nombre}, como estas ${element} ?`);
        });
    }
    
    SaludarAmigo1(){
        const _this = this;
        this.amigos.forEach(function(element){
            console.log(`Hola soy ${_this.nombre}, como estas ${element} ?`);
        });
    }

    SaludarAmigos2(){
        this.amigos.forEach(function(element){
            console.log(`Hola soy ${this.nombre}, como estas ${element} ?`);
        }.bind(this));
    }
}

const p1 = new Persona("Jesús", ['Karla','Gael','Monique','Edwin']);