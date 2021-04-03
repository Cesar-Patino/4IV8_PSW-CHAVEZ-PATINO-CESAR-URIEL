  
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);


}

function calificaciones(){
    var valor = document.formulario.promedio.value;
    var valor2 = document.formulario.trabajo.value;
    var valor3 = document.formulario.examen.value;
    var uno = parseInt(valor);
    var dos = parseInt(valor2);
    var tres = parseInt(valor3);
    var final = (uno*.3)+(dos*.15)+(tres*.55);

    document.formulario.calificacion.value = ""+final;
}

function borrar(){
    document.formulario.promedio.value = "";
    document.formulario.trabajo.value = "";
    document.formulario.examen.value = "";
    document.formulario.calificacion.value = "";
}