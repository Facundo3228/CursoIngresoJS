/**
 * b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

1 informar el huésped que trajo más personas en una sola reserva.
2 la cantidad de personas que se quedaron más días
3 la forma de pago más utilizada.
4 el promedio de cantidad de días por reserva
 */

function mostrar()
{
    //variables y inicio
    var huespedIngresado;
    var personasIngresado;
    var diasIngresados;
    var formaPagoIngresados;

    //variables de desarrollo
    var contadordias = 0; // punto 2

    //1 informar el huésped que trajo más personas en una sola reserva.
    var huespedMayor; //<----
    var personasMayor; //<----
    
    //2 la cantidad de personas que se quedaron más días
    var diasMayor; //<----
    var personasDias; //<----
    var huespedDias; //<----

    //3 la forma de pago más utilizada.
    var formaPagoMayor; //<----
    var contadorEfectivo = 0; //<----
    var contadortarjeta = 0; //<----
    var contadorQR = 0; //<----

    //4 el promedio de cantidad de días por reserva
    var contadorDiasIngresados = 0; //<----
    var acumuladorDias = 0; //<----
    var promedioDias; //<----

    //variables de control
    var respuesta = true;
    var primeraIteracion = true;
    //var mensaje;


    while (respuesta) {

        //validacion y pedido de datos

        do {
            huespedIngresado = prompt("Ingrese el nombre del huésped: ");
        } while (! isNaN(huespedIngresado.toLowerCase()));

        do {
            personasIngresado = prompt("Ingrese la cantidad de personas: ");
            personasIngresado = parseInt(personasIngresado);
        } while (isNaN(personasIngresado));

        do {
            diasIngresados = prompt("Ingrese la cantidad de dias de estadia: ");
            diasIngresados = parseInt(diasIngresados);
        } while (isNaN(diasIngresados));

        contadorDiasIngresados++; //parte 4

        do {
            formaPagoIngresados = prompt("Ingrese una de las 3 formas de pago validas EFECTIVO, TARJETA O QR: ");
        } while (formaPagoIngresados.toLowerCase() != "efectivo" && formaPagoIngresados.toLowerCase() != "tarjeta" && formaPagoIngresados.toLowerCase() != "qr");

        //1 informar el huésped que trajo más personas en una sola reserva.
        //2 la cantidad de personas que se quedaron más días
        //3 la forma de pago más utilizada.
        if(primeraIteracion) {
            huespedMayor = huespedIngresado;
            personasMayor = personasIngresado;

            diasMayor = diasIngresados;
            personasDias = personasIngresado;
            huespedDias = huespedIngresado;

            primeraIteracion = false;
        } else {
            //1 informar el huésped que trajo más personas en una sola reserva.
            if (personasIngresado > personasMayor) {
                personasMayor = personasIngresado;
                huespedMayor = huespedIngresado;
                
            } else {
                //2 la cantidad de personas que se quedaron más días
                if (diasIngresados > diasMayor) {
                    diasMayor = diasIngresados;
                    personasDias = personasIngresado;
                    huespedDias = huespedIngresado;
                    contadordias++; 
                }
            }
        }

        //3 la forma de pago más utilizada.
        switch (formaPagoIngresados) {
            case "efectivo":
                contadorEfectivo++;
                formaPagoMayor = formaPagoIngresados;
                break;
            case "tarjeta":
                contadortarjeta++;
                formaPagoMayor = formaPagoIngresados;
                break;
            case "qr":
                contadorQR++;
                formaPagoMayor = formaPagoIngresados;
                break;
            default:
                formaPagoMayor = "NO ES UNA FORMA DE PAGO VALIDA"
                break;
        }        

        //parte 4
        acumuladorDias += diasIngresados; 

        respuesta = confirm("¿DESEA CONTINUAR?");
    }

    //parte 3 la forma de pago más utilizada.
    if (contadorEfectivo > contadortarjeta && contadorEfectivo > contadorQR) {
        formaPagoMayor = "efectivo";
    } else {
        if (contadortarjeta > contadorQR) {
            formaPagoMayor = "tarjeta";
        } else {
            formaPagoMayor = "QR";
        }
    }

    //4 el promedio de cantidad de días por reserva
    if (contadorDiasIngresados != 0) {
        promedioDias = acumuladorDias / contadorDiasIngresados;
    } else {
        promedioDias = "¡¡¡NO SE PUEDE DIVIDIR POR CERO!!!";
    }
    
    //muestro
    document.write("1 El huésped: " + huespedMayor + " que trajo más personas en una sola reserva es: " + personasMayor + "<br>");
    document.write("2 Solo hay: " + contadordias + " huesped que ingreso: " + personasDias + " personas, que se quedaron: " + diasMayor + " dias, su nombre es: " + huespedDias + "<br>");
    document.write("3 La forma de pago más utilizada es:" + formaPagoMayor + "<br>");
    document.write("4 el promedio de cantidad de días por reserva es: " + acumuladorDias + "/" + contadorDiasIngresados + "=" + promedioDias);
}