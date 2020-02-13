/*
* Enunciado:
* Al ingresar una edad menor a 18 años
* y un estado civil distinto a "Soltero",
* mostrar el siguiente mensaje:
* 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
    //variables
    var edadIngresada;
    var edadParceada;
    var estadoCivil;
    var mensaje;

    //tomo la edad y el estado civil 
    edadIngresada = document.getElementById("edad").value;
    estadoCivil = document.getElementById("estadoCivil").value;

    //parceo
    edadParceada = parseInt(edadIngresada);

    //condicional if/else
    if (edadParceada < 18 && estadoCivil != "Soltero") {
        mensaje = "Es muy pequeño para NO ser soltero.";
        alert(mensaje + " su edad es: " + edadParceada + " estado civil: " + estadoCivil);
    }

}//FIN DE LA FUNCIÓN