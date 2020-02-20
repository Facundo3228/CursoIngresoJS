/**
 * Enunciado:
 * al presionar el botón pedir la CLAVE (ayuda: es utn750)
 */

function mostrar()
{
    var clave = prompt("ingrese el número clave.");
    var contador = 0;

    while (clave.toLowerCase() != "utn750") {
        contador++;

        if (contador == 3) {
            break;
        }

        clave = prompt("ingrese el número clave.");
        
    }

    if (contador == 3) {
        alert("Intentos maximos");
    } else {
        alert("Bienvenido");
    }


}//FIN DE LA FUNCIÓN
