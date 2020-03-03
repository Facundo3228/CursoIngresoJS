/**
 * mas temperatura mas alta, el nombre, el sexo
   
   si tiene mas de 38 y es niño(menor a 12) o tercera edad(mayor a 60), mostrar mensaje que diga
   Riesgo y "nombre"
   
   mostrar la temperatura del mas joven y del mas viejo
   
   promedio de edad->total
   
   promedo de edad->por mujeres
 */

function mostrar()
{
    //variables y inicio
    var temperaturaIngresada;
    var nombreIngresado;
    var sexoIngresado;
    var edadIngresada;

    //mas temperatura mas alta, el nombre, el sexo
    var temperaturaMaxima;
    var temperaturaNombreMaxima;
    var temperaturaSexoMaxima;

    //si tiene mas de 38 y es niño(menor a 12) o tercera edad(mayor a 60), mostrar mensaje que diga
    //Riesgo y "nombre"
    var mensaje;

    //mostrar la temperatura del mas joven y del mas viejo
    var edadJoven;
    var edadViejo;
    var temperaturaEdadJoven;
    var temperaturaEdadViejo;

    //promedio de edad->total (variables de operacion)
    var contadorEdad = 0;
    var acumuladorEdad = 0;
    var promedioEdad;

    //promedo de edad->por mujeres (variables de operacion)
    var contadorEdadMujeres = 0;
    var acumuladorEdadMujeres = 0;
    var promedioEdadMujeres;

    //variables de control
    var respuesta = true;
    var primeraIteracion = true;
    

    while (respuesta) {

        do {
            temperaturaIngresada = prompt("Ingrese la temperatura del paciente: ");
            temperaturaIngresada = parseFloat(temperaturaIngresada);
        } while (isNaN(temperaturaIngresada) || temperaturaIngresada < 0);

        do {
            nombreIngresado = prompt("Ingrese el nombre del paciente: ");
        } while (! isNaN(nombreIngresado.toLowerCase()));

        do {
            sexoIngresado = prompt("Ingrese el sexo del paciente: ");
        } while (sexoIngresado.toLowerCase() != "f" && sexoIngresado.toLowerCase() != "m");

        do {
            edadIngresada = prompt("Ingrese la edad del paciente: ");
            edadIngresada = parseInt(edadIngresada);
        } while (isNaN(edadIngresada) || edadIngresada < 1);

        //1 mas temperatura mas alta, el nombre, el sexo
        //2 si tiene mas de 38 y es niño(menor a 12) o tercera edad(mayor a 60),
        //mostrar mensaje que diga Riesgo y "nombre"
        //3 mostrar la temperatura del mas joven y del mas viejo
        //4 promedio de edad->total
        //5 promedo de edad->por mujeres

        if (primeraIteracion) {
            temperaturaMaxima = temperaturaIngresada;
            temperaturaNombreMaxima = nombreIngresado;
            temperaturaSexoMaxima = sexoIngresado;

            edadJoven = edadIngresada;
            edadViejo = edadIngresada;
            temperaturaEdadJoven = temperaturaIngresada;
            temperaturaEdadViejo = temperaturaIngresada;

            primeraIteracion = false;
        } else {
            //1 mas temperatura mas alta, el nombre, el sexo
            if (temperaturaIngresada > temperaturaMaxima) {
                temperaturaMaxima = temperaturaIngresada;
                temperaturaNombreMaxima = nombreIngresado;
                temperaturaSexoMaxima = sexoIngresado;
            } else {
                //3 mostrar la temperatura del mas joven y del mas viejo
                if (edadIngresada < edadJoven) {
                    edadJoven = edadIngresada;
                    temperaturaEdadJoven = temperaturaIngresada;
                } else {
                    //3 mostrar la temperatura del mas joven y del mas viejo
                    if (edadIngresada > edadViejo) {
                        edadViejo = edadIngresada;
                        temperaturaEdadViejo = temperaturaIngresada;
                    }
                }
            }
        }

        //2 si tiene mas de 38 y es niño(menor a 12) o tercera edad(mayor a 60),
        //mostrar mensaje que diga Riesgo y "nombre"
        if (temperaturaIngresada > 37 && (edadIngresada < 13 || edadIngresada > 59)) {
            mensaje = "La temperatura es " + temperaturaIngresada + "º El paciente de nombre " + nombreIngresado + " esta en RIESGO";
            alert(mensaje);
        }

        //parte 4
        contadorEdad++;
        acumuladorEdad += edadIngresada;

        //parte 5
        if (sexoIngresado.toLowerCase() === "f") {
            contadorEdadMujeres++;
            acumuladorEdadMujeres += edadIngresada;            
        }

        respuesta = confirm("¿DESEA CONTINUAR?");
    }

    //4 promedio de edad -->total
    if (contadorEdad != 0) {
        promedioEdad = acumuladorEdad / contadorEdad;
    } else {
        promedioEdad = "¡¡¡NO SE PUEDE DIVIDIR POR CERO!!!";
    }

    //5 promedo de edad -->por mujeres
    if (contadorEdadMujeres != 0) {
        promedioEdadMujeres = acumuladorEdadMujeres / contadorEdadMujeres;
    } else {
        promedioEdadMujeres = "¡¡¡NO SE PUEDE DIVIDIR POR CERO!!!";      
    }
    
    document.write("1 La temperatura mas alta es: " + temperaturaMaxima + "º , el nombre del paciente es: " + temperaturaNombreMaxima + ", el sexo del paciente es: " + temperaturaSexoMaxima + "<br>");
    document.write("2 RIESGO: " + mensaje + "<br>");
    document.write("3 La temperatura del mas joven es: " + temperaturaEdadJoven + " y la del mas viejo es: " + temperaturaEdadViejo + "<br>");
    document.write("4 promedio de las edades --> total: " + acumuladorEdad + "/" + contadorEdad + "=" + promedioEdad + "<br>");
    document.write("5 promedo de las edades --> por mujeres: " + acumuladorEdadMujeres + "/" + contadorEdadMujeres + "=" + promedioEdadMujeres);

}
