/**
 * Enunciado:
 * Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.
 */

function mostrar()
{
    //variables inicialisadas
    var sexo = prompt("ingrese f ó m .");

    /**
     * Nota personal: El metodo .toLowerCase() inive las mayusculas y minusculas.
     *                Atencion al alidar String con operadores logicos.
     */

    //while
    while (sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m") {
        /**
		 * Nota personal: En las validaciones de datos con los ciclos al usar los operadores logicos
		 * tenr cuidado, recordar que siempre validamos lo que no es verdad, ya que si es correcto
		 * que prosiga su curso delocontrario queremos que entre al ciclo para poder validarlo.
		 */

        //ingreso de datos erroneos, pedimos otra ves el dato
        sexo = prompt("Error... Ingrese f ó m .");
    }

    //muestro.
    document.getElementById('Sexo').value = sexo;
}//FIN DE LA FUNCIÓN