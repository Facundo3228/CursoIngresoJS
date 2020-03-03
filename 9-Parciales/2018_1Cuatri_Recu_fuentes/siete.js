/**
 * Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:

a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
 */

function mostrar()
{
    //variables y inicio
    var nombreIngresado;
    var sexoIngresado;
    var notaIngresada;

    //variables de operacion
    var acumuladorNotas = 0;
    var promedioNotas;
    var contadorNotasVarones = 0;

    //mayor y menor  nota, su sexo y nombre
    var notaBaja;
    var notaAlta;
    var sexoBajo;
    var sexoAlto;
    var nombreAlto;
    var nombreBajo;

    //variables de control
    var contador = 0;
    var primeraIteracion = true;

    //desarrollo

    while (contador < 5) {
        contador++;

        do {
            nombreIngresado = prompt("Ingrese el " + contador + " nombre: ");
        } while ((! isNaN(nombreIngresado.toLowerCase())) && nombreIngresado.toLowerCase != "");

        do {
            sexoIngresado = prompt("Ingrese el " + contador + " sexo F o M ");
        } while (sexoIngresado.toLowerCase() != "f" && sexoIngresado.toLowerCase() != "m");

        do {
            notaIngresada = prompt("Ingrese la " + contador + " nota: ");
            notaIngresada = parseFloat(notaIngresada);
        } while (isNaN(notaIngresada) || notaIngresada < 0 || notaIngresada > 10);

        
        //b) La nota más baja y el sexo de esa persona
        if (primeraIteracion) {
            notaAlta = notaIngresada;
            notaBaja = notaIngresada;
            sexoAlto = sexoIngresado
            sexoBajo = sexoIngresado;
            primeraIteracion = false;
        } else {
            if (notaIngresada > notaAlta) {
                notaAlta = notaIngresada;
                sexoAlto = sexoAlto;
                nombreAlto = nombreIngresado;                
            } else if (notaIngresada < notaBaja) {
                notaBaja = notaIngresada;
                sexoBajo = sexoIngresado; 
                nombreBajo = nombreIngresado;               
            }
        }

        //c) La cantidad de varones que su nota haya sido mayor o igual a 6
        if (notaIngresada > 6 && sexoIngresado == "m") {
            contadorNotasVarones++;
        }

        //suma de las notas ingresadas parte punto A
        acumuladorNotas += notaIngresada;
    }

    //operaciones

    

    //a) El promedio de las notas totales y validacion
    if (contador != 0) {
        promedioNotas = acumuladorNotas / contador;
    } else {
        promedioNotas = "NO SE PUEDE DIVIDIR POR 0";
    }

    //muestro
    document.write("a) El promedio de las notas totales: " + acumuladorNotas + "/" + contador + "=" + promedioNotas + "<br>" +
                   "b1) La nota más baja, el sexo de esa persona y su nombre: " + nombreBajo + " " + notaBaja + " " + sexoBajo + "<br>" +
                   "b2) La nota más alta, el sexo de esa persona y su nombre: " + nombreAlto + " " + notaAlta + " " + sexoAlto + "<br>" +
                   "c) La cantidad de varones que su nota haya sido mayor o igual a 6: " + contadorNotasVarones);
    
}
