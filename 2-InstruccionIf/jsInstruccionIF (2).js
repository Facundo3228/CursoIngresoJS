/*
* Enunciado:
* Al ingresar una edad debemos informar
* solo si la persona es mayor de edad
*/

function mostrar()
{
    //variables
    var edadIngresada;
    var edadParceada;
    var mensaje;

    //tomo la edad  
    edadIngresada = document.getElementById("edad").value;
    mensaje = "es mayor";

    //parceo
    edadParceada = parseInt(edadIngresada);

    //condicional if
    if (edadParceada >= 18) {
        alert(mensaje);
    }
}//FIN DE LA FUNCIÓN