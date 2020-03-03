/**
 * Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y
un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:

a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
 */

function mostrar()
{
    //variables y inicio
    var numeroIngresado;
    var letraIngresada;

    //variables de operacion
    var contadorPar = 0;
    var contadorImpar = 0;
    var contadorCeros = 0;

    //promedio total de numeros
    var acumuladorTotal = 0;
    var contadorTotal = 0;
    var promedioTotal;
    
    //promedio de numeros negativos
    var acumuladorNegativos = 0;
    var contadorNegativos = 0;
    var promedioNegativos;
    
    //promedio de numeros positivos
    var acumuladorPositivos = 0;
    var contadorPositivos = 0;
    var promedioPositivos;

    //numero maximo, minimo y sus letras
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMinimo;

    //variables de control
    var respuesta = true;
    var primeraIteracion = true;

    //desarrollo

    while (respuesta) {

        do {
            letraIngresada = prompt("Ingrese una letra: ");
        } while ((! isNaN(letraIngresada.toLowerCase())) || letraIngresada.toLowerCase().length-1 != 0);
        
        do {
            numeroIngresado = prompt("Ingrese un numero entre -100 y 100: ");
            numeroIngresado = parseInt(numeroIngresado);
        } while (isNaN(numeroIngresado) || numeroIngresado < -100 || numeroIngresado > 100);

        //a) La cantidad de números pares.
        if (numeroIngresado %2 == 0) {
            contadorPar++;
        } else {
            //b) La cantidad de números impares.
            contadorImpar++;
        }
        //c) La cantidad de ceros.
        if (numeroIngresado == 0) {
            contadorCeros++;
        }
        //e) La suma de todos los números negativos y positivos. Parte D
        if (numeroIngresado > 0) {
            acumuladorPositivos += numeroIngresado;
            contadorPositivos++;
        } else {
            acumuladorNegativos += numeroIngresado;
            contadorNegativos++;            
        }
        //f) El número y la letra del máximo y el mínimo.
        if (primeraIteracion) {
            primeraIteracion = false;
            numeroMaximo = numeroIngresado;
            numeroMinimo = numeroIngresado;
            letraMaximo = letraIngresada;
            letraMinimo = letraIngresada;
        } else {
            if (numeroIngresado > numeroMaximo) {
                numeroMaximo = numeroIngresado;
                letraMaximo = letraIngresada;
            } else if (numeroIngresado < numeroMinimo) {
                numeroMinimo = numeroIngresado;
                letraMinimo = letraIngresada;                
            }
        }
        //Punto extra: La suma de todos los numeros y su cantidad y su promedio.
        contadorTotal++;
        acumuladorTotal += numeroIngresado;

        respuesta = confirm("¿DESEA CONTINUAR?");
    }

    var mensaje = "¡¡¡NO SE PUEDE DIVIDIR POR CERO!!!"

    //d) El promedio de todos los números positivos, negativos y total ingresados.
    if (contadorPositivos != 0) {
        promedioPositivos = acumuladorPositivos / contadorPositivos;
    } else {
        promedioPositivos = mensaje;
        
        if (contadorNegativos != 0) {
            promedioNegativos = acumuladorNegativos / contadorNegativos;
        } else {
            promedioNegativos = mensaje;
            if (contadorTotal != 0) {
                promedioTotal = acumuladorTotal / contadorTotal;
            } else {
                promedioTotal = mensaje;
            }
        }
    }

    //informe
    document.write("a) La cantidad de números pares: " + contadorPar + "<br>" +
                   "b) La cantidad de números impares: " + contadorImpar + "<br>" +
                   "c) La cantidad de ceros: " + contadorCeros + "<br>" +
                   "d) El promedio de números positivos ingresados: " + acumuladorPositivos + "/" + contadorPositivos + "=" + promedioPositivos + "<br>" +
                   "d) El promedio de números negativos ingresados: " + acumuladorNegativos + "/" + contadorNegativos + "=" + promedioNegativos + "<br>" +
                   "d) El promedio de números totales ingresados: " + acumuladorTotal + "/" + contadorTotal + "=" + promedioTotal + "<br>" +
                   "e) La suma de todos los números negativos: " + acumuladorNegativos + "<br>" +
                   "e) La suma de todos los números positivos: " + acumuladorPositivos + "<br>" +
                   "e) La suma de todos los números totales: " + acumuladorTotal + "<br>" +
                   "f) El número y la letra del máximo y el mínimo: " + "<br>" +
                        "El numero maximo y su letra es: " + numeroMaximo + " = " + letraMaximo + "<br>" +
                        "El numero minimo y su letra es: " + numeroMinimo + " = " + letraMinimo + "<br>");
}