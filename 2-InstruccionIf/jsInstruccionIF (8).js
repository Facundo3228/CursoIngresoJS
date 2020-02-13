/*
* Enunciado:
* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
* NO HACER NADA, pero si no es asi, y es soltero y no es menor,
* mostrar el siguiente mensaje: 'Es soltero y no es menor.'
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
    if (edadParceada >= 18 && estadoCivil == "Soltero") {
        mensaje = "Es soltero y no es menor.";
        alert(mensaje + " su edad es: " + edadParceada + " estado civil: " + estadoCivil);
    }

    //Nota personal: Prestar atencion a los enunciados separando los terminos
    //de este. 


}//FIN DE LA FUNCIÓN