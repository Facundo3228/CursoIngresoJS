/**
 * Enunciado:
 * Bienvenidos.
 * mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx". */

function mostrar()
{
    //variable
    var nombre;
    var localidad;
    var mensaje;

    //inicio de variables
    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    //desarrollo
    mensaje = "usted es " + nombre  + " y vive en la localidad de " + localidad;

    //muestro
    alert(mensaje);
}
