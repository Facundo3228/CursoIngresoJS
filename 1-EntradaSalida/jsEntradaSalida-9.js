/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    //variables
    var importeIngresado;
    var importeParseado;
    var porsentajeIngresado
    var porcentajeParsedo;
    var resultadoPorcentaje;
    var importeAumentado;

    //recupero el sueldo
    importeIngresado = document.getElementById("sueldo").value;

    //parseo
    importeParseado = parseFloat(importeIngresado);

    //ingreso el porcentaje del aumento
    porcentajeIngresado = prompt("Ingrese el porcentaje: ");

    //Parseo de porcentaje
    porcentajeParsedo = parseFloat(porcentajeIngresado);

    /*
    * nota mental: prestar atencion a las variables y su comportamiento
    *              no cometas errores gracias....
    */

    //operatoria
    resultadoPorcentaje  = (porcentajeParsedo * importeParseado) / 100; //saco el porcentaje del importe.
    //le sumo el importe inicial al porcentaje sacado en la linea de codigo 33
    importeAumentado = resultadoPorcentaje + importeParseado;

    //muestro
    document.getElementById("resultado").value = importeAumentado;
}
