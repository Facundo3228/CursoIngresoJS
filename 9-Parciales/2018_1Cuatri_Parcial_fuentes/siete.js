/** 
 * Enunciado:
 * Bienvenidos.
 * Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
 * el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
 * a) El promedio de las notas totales.
 * b) La nota más baja y el sexo de esa persona.
 * c) La cantidad de varones que su nota haya sido mayor o igual a 6.
 */

function mostrar()
{
    //variables y inicio de variables
    var contador = 0; //cuenta las veses que ingresara al while = 5
    var notaAlumno; //ingreso de nota
    var sexoAlumno; //ingreso de sexo "f" o "m"
    var notaMenor; //comparaciones
    var notaMayor; //comparaciones
    var sexoNotaMenor; //sexo de la nota menor
    var sexoNotaMayor; //sexo de la nota mayor
    var contadorVaronesNotaMayor = 0; //La cantidad de varones que su nota haya sido mayor o igual a 6.
    var promedioNotas; //promedio de las notas totales 
    var acumuladorNotas = 0; //sum de cada nota ingresada
    var primeraIteracion = true; //bandera 
    //var mensaje; //mensajes

    //while de 5 alumnos
    while (contador < 5) {
        contador++;

        //validacion para las notas
        do {
            //solisito la nota
            notaAlumno = prompt("Ingrese la nota del alumno: " + contador);
            //parseo la variable
            notaAlumno = parseFloat(notaAlumno);
        } while (isNaN(notaAlumno) || notaAlumno < 0 || notaAlumno > 10);

        do {
            //solisito el sexo
            sexoAlumno = prompt("Ingrese el sexo de la nota del alumno: " + contador);
        } while (sexoAlumno.toLowerCase() != "f" && sexoAlumno.toLowerCase() != "m");

        if (primeraIteracion) {
            primeraIteracion = false;

            notaMayor = notaAlumno;
            notaMenor = notaAlumno;
            sexoNotaMenor = sexoAlumno;
            sexoNotaMayor = sexoAlumno;
        }

        if (notaMayor < notaAlumno) {
            notaMayor = notaAlumno;
            sexoNotaMayor = sexoAlumno;
        } else if (notaMenor > notaAlumno) {
            notaMenor = notaAlumno;
            sexoNotaMenor = sexoAlumno;
        }
            
        if (notaAlumno >= 6 && sexoAlumno.toLowerCase() == "m") {
            contadorVaronesNotaMayor++;
        }

        //acumulador notas
        acumuladorNotas += notaAlumno; 
    }
    
    //operacion promedio
    promedioNotas = acumuladorNotas / contador;

    //mostrar
    document.write(" A) El promedio de las notas totales: " + promedioNotas + "<br>" + 
                   " B) La nota más baja y el sexo de esa persona: " + notaMenor + " " + sexoNotaMenor + "<br>" +
                   "    La nota más alta y el sexo de esa persona: " + notaMayor + " " + sexoNotaMayor + "<br>" +
                   " C) La cantidad de varones que su nota haya sido mayor o igual a 6: " + contadorVaronesNotaMayor);
}