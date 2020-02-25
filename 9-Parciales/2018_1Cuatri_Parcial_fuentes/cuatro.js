/**
 * Enunciado:
 * Bienvenidos (IF).
 * Pedir dos números y mostrar el resultado:
 * Si son iguales los muestro concatenados.
 * Si el primero es mayor, los resto,
 * de lo contrario los sumo.
 * Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
 * "la suma es xxx y supero el 10".
 */

function mostrar()
{
    //variavles
    var numeroA;
    var numeroB;
    var totalSuma;
    var totalResta;
    var mensaje;

    //inicio de variables
    numeroA = prompt("Ingrese numero 1: ");
    numeroB = prompt("Ingrese numero 2: ");

    //desarrollo
    if (numeroA == numeroB) {
        //Nota estoy comparando cadena de texto aun no estan parseados
        mensaje = "Son iguales concatenacion en marcha: ";
        alert(mensaje + numeroA + numeroB);
    } else {
        //parseo
        numeroA = parseInt(numeroA);
        numeroB = parseInt(numeroB);

        //operatoria mayor o menor
        if (numeroA > numeroB) {
            mensaje = "Primer numero es mayor que el segundo la resta es: ";
            totalResta = numeroA - numeroB;
            alert(mensaje + numeroA + " - " + numeroB +  " = " + totalResta);
        } else {
            mensaje = "Primer numero es menor que el segundo la suma es: ";
            totalSuma = numeroA + numeroB;
            alert(mensaje + numeroA + " + " + numeroB +  " = " + totalSuma);
        }
    }

    //si supera el 10... solo controlo la suma.
    if (totalSuma > 10) {
        mensaje = "La suma es: " + totalSuma + " y supero el 10";
        alert(mensaje);      
    }
}
