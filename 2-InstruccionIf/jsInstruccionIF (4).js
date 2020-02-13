/*
* Enunciado:
* Al ingresar una edad debemos informar
* si la persona es adolescente,
* edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
    //variables
    var edadIngresada;
    var edadParceada;
    var mensaje;

    //tomo la edad  
    edadIngresada = document.getElementById("edad").value;

    //parceo
    edadParceada = parseInt(edadIngresada);

    //condicional if/else
    if (edadParceada >= 13 && edadParceada <= 17) {
        mensaje = "Es adolecente";
        alert(mensaje + " " + edadParceada);
    }
}//FIN DE LA FUNCIÓN