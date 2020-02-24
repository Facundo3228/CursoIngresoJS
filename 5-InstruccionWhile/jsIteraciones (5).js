/**
 * Enunciado:
 * Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.
 */

/* function mostrar()
{
    //variables inicialisadas
    var sexo = prompt("ingrese f ó m .");

    /**
     * Nota personal: El metodo .toLowerCase() inive las mayusculas y minusculas.
     *                Atencion al alidar String con operadores logicos.
     */

    /* //while <-----
    while (sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m") {
        /**
		 * Nota personal: En las validaciones de datos con los ciclos al usar los operadores logicos
		 * tenr cuidado, recordar que siempre validamos lo que no es verdad, ya que si es correcto
		 * que prosiga su curso delocontrario queremos que entre al ciclo para poder validarlo.
		 */

    /*     //ingreso de datos erroneos, pedimos otra ves el dato   <----
        sexo = prompt("Error... Ingrese f ó m .");
    }

    //muestro.
    document.getElementById('Sexo').value = sexo;
}//FIN DE LA FUNCIÓN */

function mostrar()
{
    //variables inicialisadas
    var sexo;
    var contador = 0;

    /**
     * Nota personal: El metodo .toLowerCase() inive las mayusculas y minusculas.
     *                Atencion al utilisar String con operadores logicos.
     */

    //do/while
    do {
        /**
		 * Nota personal: En las validaciones de datos con los ciclos al usar los operadores logicos
		 * tenr cuidado, recordar que siempre validamos lo que no es verdad, ya que si es correcto
		 * que prosiga su curso delocontrario queremos que entre al ciclo para poder validarlo.
		 */
        
        //si contador es igual a 3 termina el ciclo sin mostrar el resto del bloque de codigo.
        if (contador == 3) {
            break;            
        }
                
        //ingreso de datos erroneos, pedimos otra ves el dato
        sexo = prompt("ingrese f ó m .");

        contador++;

    } while (sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m"); //error ¿lo arregle?

    /**
     * Nota personal: 1: ¿Por que sucede este error (Mostrar el error F12)?
     *                Respuesta:
     * 
     *                2: ¿por que corta los intentos?
     *                Respuesta:
     */

    //Le informo al usuario el comportamiento del programa
	if (contador == 3) {
		alert(contador + " Intentos maximos letras incorrectas");		
	} else {
		//muestro.
        document.getElementById('Sexo').value = "Usted ingreso una letra correcta " + sexo;
	}
}//FIN DE LA FUNCIÓN