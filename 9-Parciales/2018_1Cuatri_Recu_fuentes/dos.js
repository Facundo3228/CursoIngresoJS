/**
En el ingreso a un viaje en crucero se nos solicita, nombre, edad (mayores de 18), sexo ("f" o "m") y
estado civil ("soltero", "casado" o "viudo");

a) El nombre del hombre casado mas joven.
b) El sexo y nombre del pasajero/a mas viejo.
c) La cantidad de mujeres que hay casdas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre las hombres solteros.
 */

function mostrar()
{
    //variables de inicio
    var nombreIngresado;
    var edadIngresada;
    var sexoIngresado;
    var estadoCivilIngresado;

    //a) El nombre del hombre casado mas joven.
    var edadMasJoven;
    var edadSexoMasJoven;
    var edadNombreMasJoven;
    var edadCasadoMasJoven;

    //b) El sexo y nombre del pasajero/a mas viejo.
    var edadMasViejo;
    var edadSexoMasViejo;
    var edadNombreMasViejo;
    var edadCasadoMasViejo;

    //c) La cantidad de mujeres que hay casdas o viudas.
    var contaMujerCasadaViuda = 0;

    //d) El promedio de edad entre las mujeres.
    var contaMujer = 0;
    var acumMujeres = 0;
    var promedioMujeres;

    //e) El promedio de edad entre las hombres solteros.
    var contaHombreSoltero = 0;
    var acumHombreSoltero = 0;
    var promedioHombreSoltero;

    //variables de control
    var respuesta = true;
    var bandera = true;

    while (respuesta) {
        //validaciones
        do {
            nombreIngresado = prompt("Ingrese el nombre");
        } while (! isNaN(nombreIngresado.toLowerCase()));

        do {
            edadIngresada = prompt("Ingrese la edad");
            edadIngresada = parseInt(edadIngresada);
        } while (isNaN(edadIngresada) || edadIngresada < 18);

        do {
            sexoIngresado = prompt("Ingrese el sexo f / m");
        } while (sexoIngresado.toLowerCase() != "f" && sexoIngresado.toLowerCase() != "m");

        do {
            estadoCivilIngresado = prompt("Ingrese el estado civil Soltero, Casado o Viudo");
        } while (estadoCivilIngresado.toLowerCase() != "soltero" && estadoCivilIngresado.toLowerCase() != "casado" && estadoCivilIngresado.toLowerCase() != "viudo");

        //bandera
        if (bandera) {
            edadMasJoven = edadIngresada;
            edadSexoMasJoven = sexoIngresado;
            edadNombreMasJoven = nombreIngresado;
            edadCasadoMasJoven = estadoCivilIngresado;

            edadMasViejo = edadIngresada;
            edadSexoMasViejo = sexoIngresado;
            edadNombreMasViejo = nombreIngresado;
            edadCasadoMasViejo = estadoCivilIngresado;

            bandera = false;
        } else {
            //a) El nombre del hombre casado mas joven.
            if (edadIngresada < edadMasJoven && sexoIngresado == "m") {
                edadMasJoven = edadIngresada;
                edadSexoMasJoven = sexoIngresado;
                edadNombreMasJoven = nombreIngresado;
                edadCasadoMasJoven = estadoCivilIngresado;
            } else {
                //b) El sexo y nombre del pasajero/a mas viejo.
                if (edadIngresada > edadMasViejo) {
                    edadMasViejo = edadIngresada;
                    edadSexoMasViejo = sexoIngresado;
                    edadNombreMasViejo = nombreIngresado;
                    edadCasadoMasViejo = estadoCivilIngresado;
                }
            }
        }
        //c) La cantidad de mujeres que hay casdas o viudas.
        if (sexoIngresado == "f" && (estadoCivilIngresado == "casado" || estadoCivilIngresado == "viudo")) {
            contaMujerCasadaViuda++;
        }
        //d) El promedio de edad entre las mujeres.
        if (sexoIngresado == "f") {
            contaMujer++;
            acumMujeres += edadIngresada;
        }
        //e) El promedio de edad entre las hombres solteros.
        if (sexoIngresado == "m" && estadoCivilIngresado == "soltero") {
            contaHombreSoltero++;
            acumHombreSoltero += edadIngresada;
        }

        respuesta = confirm("DESEA CONTUNUAR");
    }

    //promedo d
    if (contaMujer != 0) {
        promedioMujeres = acumMujeres / contaMujer;
    } else {
        promedioMujeres = "NO SE PUEDE DIVIDIR POR CERO";        
    }

    //promedio e
    if (contaHombreSoltero != 0) {
        promedioHombreSoltero = acumHombreSoltero / contaHombreSoltero;
    } else {
        promedioHombreSoltero = "NO SE PUEDE DIVIDIR POR CERO";        
    }

    //muestro
    document.write("a) El nombre del hombre casado mas joven." + edadNombreMasJoven + "<br>");
    document.write("b) El sexo y nombre del pasajero/a mas viejo. El sexo es: " + edadSexoMasViejo + " Su nombre es: " + edadNombreMasViejo + "<br>");
    document.write("c) La cantidad de mujeres que hay casdas o viudas." + contaMujerCasadaViuda +"<br>");
    document.write("d) El promedio de edad entre las mujeres." + acumMujeres + "/" + contaMujer + "=" + promedioMujeres + "<br>");
    document.write("e) El promedio de edad entre las hombres solteros." + acumHombreSoltero + "/" + contaHombreSoltero + "=" + promedioHombreSoltero + "<br>");
    document.write("FIN DEL INFORME");
}