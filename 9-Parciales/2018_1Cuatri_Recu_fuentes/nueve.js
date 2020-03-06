/**
 * Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico,
el peso el cual debe ser entre 1 y 1000 y la temperatura del hábitat (entre -30 y 30)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
e) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean sobre cero mostar la temperatura.
Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )
 */

function mostrar()
{
    //variables de inicio
    var animalIngresado;
    var pesoIngresado;
    var temperaturaIngresada;

    //a) La cantidad de temperaturas pares. Variables de operacion.
    var contadorTempPares = 0;

    //b) El nombre y temperatura del animal más pesado.
    var pesoMaximo;
    var pesoTempMaximo;
    var pesoAnimalMaximo;

    //c) La cantidad de animales que viven a menos de 0 grados. Variables de operacion.
    var contadorAnimalesCongelados = 0;

    //d) El promedio del peso de todos los animales.
    var acumuladorPesoAnimales = 0;
    var contadorPeso = 0;
    var promedioPeso;

    //e) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
    var pesoTempCongeladoMaximo;
    var pesoTempCongeladoMinimo;

    //f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean sobre cero mostar la temperatura.
    var pesoTempCalienteMaximo;
    var pesoTempCalienteMinimo;
    var temperaturaCalienteMaximo;
    var temperaturaCalienteMinimo;

    //variables de control
    var respuesta = true;
    var bandera = true;

    while (respuesta) {

        do {
            animalIngresado = prompt("ingrese el nombre del animal: ");
        } while (! isNaN(animalIngresado.toLowerCase()));

        do {
            pesoIngresado = prompt("Ingrese el peso del animal: ");
            pesoIngresado = parseFloat(pesoIngresado);
        } while (isNaN(pesoIngresado) || pesoIngresado < 1 || pesoIngresado > 1000);

        do {
            temperaturaIngresada = prompt("Ingrese la temperatura del habitad del animal: ");
            temperaturaIngresada = parseFloat(temperaturaIngresada);
        } while (isNaN(temperaturaIngresada) || temperaturaIngresada < -30 || temperaturaIngresada > 30);

        //a) La cantidad de temperaturas pares.
        if (temperaturaIngresada %2 == 2) {
            contadorTempPares++;
        } 
        
        //bandera
        if (bandera) {
            pesoMaximo = pesoIngresado;
            pesoTempMaximo = temperaturaIngresada;
            pesoAnimalMaximo = animalIngresado;
            
            pesoTempCongeladoMaximo = pesoIngresado;
            pesoTempCongeladoMinimo = pesoIngresado;

            pesoTempCalienteMaximo = pesoIngresado;
            pesoTempCalienteMinimo = pesoIngresado;
            temperaturaCalienteMaximo = temperaturaIngresada;
            temperaturaCalienteMinimo = temperaturaIngresada;

            bandera = false;
        } else {
            //b) El nombre y temperatura del animal más pesado
            if (pesoIngresado > pesoMaximo) {
                pesoMaximo = pesoIngresado;
                pesoTempMaximo = temperaturaIngresada;
                pesoAnimalMaximo = animalIngresado;
            } else {
                //e) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
                if (temperaturaIngresada < 0) {
                    if (pesoIngresado > pesoTempCongeladoMaximo) {
                        pesoTempCongeladoMaximo = pesoIngresado;
                    } else {
                        if (pesoIngresado < pesoTempCongeladoMinimo) {
                            pesoTempCongeladoMinimo = pesoIngresado;
                        }
                    }  
                } else {
                    //f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean sobre cero mostar la temperatura.
                    if (temperaturaIngresada > 0) {
                        if (pesoIngresado > pesoTempCalienteMaximo) {
                            pesoTempCalienteMaximo = pesoIngresado;
                            temperaturaCalienteMaximo = temperaturaIngresada;
                        } else {
                            if (pesoIngresado < pesoTempCalienteMinimo) {
                                pesoTempCalienteMinimo = pesoIngresado;
                                temperaturaCalienteMinimo = temperaturaIngresada;
                            }
                        }     
                    }
                }
            }   
        }

        //c) La cantidad de animales que viven a menos de 0 grados.
        if (temperaturaIngresada < 0) {
            contadorAnimalesCongelados++;
        }

        //d) El promedio del peso de todos los animales.
        acumuladorPesoAnimales += pesoIngresado;
        contadorPeso++;

        respuesta = confirm("¿DESEA CONTINUAR?");
    }

    //validacion de promedio
    if (contadorPeso != 0) {
        promedioPeso = acumuladorPesoAnimales / contadorPeso;
    } else {
        promedioPeso = "¡¡¡NO SE PUEDE DIVIDIR POR CERO!!!"        
    }

    //Muestro
    document.write("a) La cantidad de temperaturas pares: " + contadorTempPares + "<br>");
    document.write("b) El animal, " + pesoAnimalMaximo + " con temperatura de, " + pesoTempMaximo + "º del animal más pesado es, " + pesoMaximo + " kg <br>");
    document.write("c) La cantidad de animales que viven a menos de 0 grados: " + contadorAnimalesCongelados + "<br>");
    document.write("d) El promedio del peso de todos los animales es: " + acumuladorPesoAnimales + "/" + contadorPeso + "=" + promedioPeso + "<br>");
    document.write("e) El peso máximo, " + pesoTempCongeladoMaximo + " kg y el mínimo, " + pesoTempCongeladoMinimo + " kg de todos los animales, cuyas temperaturas sean bajo cero grados <br>");
    document.write("f) El peso máximo, " + pesoTempCalienteMaximo + " kg y su temperatura es " + temperaturaCalienteMaximo + "º <br>");
    document.write("f) El peso máximo, " + pesoTempCalienteMinimo + " kg y su temperatura es " + temperaturaCalienteMinimo + "º <br>");
    document.write("FIN DEL INFORME...");   
    
}
