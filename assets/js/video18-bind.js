/* ======================================================== 
==         VIDEO Nro. 18                                 ==
==      Función bind de javascript                       ==
== ========================================================*/


$(document).ready(() => {
    const boton = $('button');
    let bandera = true;
    boton.click(function (e) { 
        boton.text((bandera) ? "Off" : "On" );
        bandera = !bandera;
    });

    const encabezado = $('h2');
    
    encabezado.bind('click',()=>{
        alert("Me haz tocado puñeta");
    })
   
});