$(document).ready(function(){
    console.log("Bienvenido al curso de javascript - Platzi");
    console.log(`Concatenando String con llaves sin usar el "+"`);
    console.log(`El área del triangulo con base 5 y altura 7 es: ${5*7/2}`);

    //Usando el mismo codigo pero con variables
    var base = 5;
    var altura = 7;
    console.log("#### USANDO VARIABLES ####");
    console.log(`El área del triangulo con base 5 y altura 7 es: ${base*altura/2}`);
    
    console.log("### USANDO Y CREANDO METODOS");
    
    base = prompt('Introuzca la base');
    altura = prompt('Introduzca la altura');
    console.log(`El área del triangulo con base ${base} y altura ${altura} es: ${areaTriangulo(base,altura)}`);

    /*$('#cold').click(()=>{
        $('#cold').toggle(1000);
        $('#hot').toggle(1000);
    });*/
});

function areaTriangulo(base, altura){
    
    return base*altura/2;

};