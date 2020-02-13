/*
* Enunciado:
* Al ingresar una edad solo debemos informar
* si la persona NO es adolescente.
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
    if (edadParceada < 13 || edadParceada > 17) {
        mensaje = "No es adolecente";
        alert(mensaje + " " + edadParceada);
    }

    //Nota personal: recordar que los operadores logicos se pueden
    //combinar. 

}//FIN DE LA FUNCIÓN