/*
* Enunciado:
* Al ingresar una edad debemos informar
* si la persona es mayor de edad,
* sino informar que es un menor de edad.
*/

function mostrar()
{
    //variables
    var edadIngresada;
    var edadParceada;

    //tomo la edad  
    edadIngresada = document.getElementById("edad").value;

    //parceo
    edadParceada = parseInt(edadIngresada);

    //condicional if/else
    if (edadParceada >= 18) {
        alert("es mayor de edad " + edadParceada);
    } else {
        alert("no es mayor de edad " + edadParceada);
    }
}//FIN DE LA FUNCIÓN