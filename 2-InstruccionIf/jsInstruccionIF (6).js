/*
* Enunciado:
* Al ingresar una edad debemos informar
* si la persona es mayor de edad (mas de 18 años)
* o adolescente (entre 13 y 17 años)
* o niño (menor a 13 años).
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

    //condicional if/else if anidados

    //de aca va de 18 a mas infinito
    if (edadParceada >= 18) {
        mensaje = "Es mayor de edad";
        alert(mensaje + " " + edadParceada);        
    } else {
        //de aca va de 13 a 17
        if ( edadParceada >= 13) {
            mensaje = "Es adolecente";
            alert(mensaje + " " + edadParceada);
        } else {
            //de aca va de 12 a menos infinito
            mensaje = "Es un niño";
            alert(mensaje + " " + edadParceada);
        }
    }

    /**
     * Nota personal: Estructurar correctamente la logica de los IF/ELSE.
     * Modo de testeo con prueba de escritorio 7, 15 y 21.
     */

    /*
    * Nota:por mas que funciona, estoy ejecuta 3 veces el codigo.
    */

    /*
    if (edadParceada < 13) {
        mensaje = "Es un niño";
        alert(mensaje + " " + edadParceada);
    }

    if (edadParceada >= 13 && edadParceada <= 17) {

        mensaje = "Es adolecente";
        alert(mensaje + " " + edadParceada);
    }

    if (edadParceada >= 18) {
        mensaje = "Es mayor de edad";
        alert(mensaje + " " + edadParceada);
    }
    */
}//FIN DE LA FUNCIÓN