/**
 * Enunciado:
 * al presionar el botón pedir la CLAVE (ayuda: es utn750)
 */

/* 
function mostrar()
{
    //variables inicialisadas
    var clave = prompt("ingrese el número clave.");
    var contador = 0;

    /**
     * Nota personal: El metodo .toLowerCase() inive las mayusculas y minusculas.
     */

     //while
    while (clave.toLowerCase() != "utn750") {
        contador++;

        //si contador es igual a 3 termina el ciclo sin mostrar el resto del bloque de codigo.
        if (contador == 3) {
            break;
        }

        //ingreso de datos erroneos pedimos otra ves el dato
        clave = prompt("Error.... Ingrese el número clave.");
    }

    //Le informo al usuario el comportamiento del programa
    if (contador == 3) {
        alert("Intentos maximos");
    } else {
        alert("Bienvenido");
    }
}//FIN DE LA FUNCIÓN 
*/

function mostrar()
{
    //variables inicialisadas
    var clave;
    var contador = 0;

    /**
     * Nota personal: El metodo .toLowerCase() inive las mayusculas y minusculas.
     */

    //do/while
    do {
        contador++;
        
        //si contador es igual a 3 termina el ciclo sin mostrar el resto del bloque de codigo.
        if (contador == 3) {
            break;
        }

        //ingreso de dato
        clave = prompt("ingrese el número clave.");
    }
    while (clave.toLowerCase() != "utn750");

    //Le informo al usuario el comportamiento del programa
    if (contador == 3) {
        alert("Intentos maximos");
    } else {
        alert("Bienvenido");
    }
}//FIN DE LA FUNCIÓN
