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
    var contadorVaronesNotaMayor = 0; //La cantidad de varones que su nota haya sido mayor o igual a 6.
    var promedioNotas; //promedio de las notas totales 
    var acumuladorNotas = 0; //sum de cada nota ingresada
    var primeraIteracion = true; //bandera 
    var mensaje; //mensajes

    //while de 5 alumnos
    while (contdor < 5) {
        contador++;

        do {
            notaAlumno = prompt("Ingrese la nota del alumno: " + contador);
            notaAlumno = parseFloat(notaAlumno);
        } while (isNaN(notaAlumno) || notaAlumno < -1 || notaAlumno > 11);
        
    }


}
