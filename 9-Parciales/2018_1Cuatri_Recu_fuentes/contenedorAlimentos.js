/**
c)Se pide la carga de datos de un contenedor  de alimento canino con un máximo de carga de 1000kg,
cargar hasta que el cliente quiera o se llene el contenedor.
se pide:

marca
kilos por bolsa
cantidad de bolsa
importe por bolsa

que marca tiene más kilos en el contenedor
que marca tiene más bolsas de alimento en el contenedor
que marca tiene el mayor importe por bolsa de alimento
el importe y la marca de la bolsa de alimento menos pesada.
 */

function mostrar() {
    //variables y inicio
    var marcaIngresada;
    var kilosIngresados;
    var bolsasIngresada;
    var importeIngresado;

    //variables de desarrollo
    var acumContenedor = 0;

    //1 que marca tiene más kilos en el contenedor.
    var kilosMaximo;
    var marcaKiloMaximo;

    //2 que marca tiene más bolsas de alimento en el contenedor.
    var bolsasMaximo;
    var marcaBolsasMaximo;

    //3 que marca tiene el mayor importe por bolsa de alimento.
    var importeMayor;
    var importeMarcaMayor;
    var importeBolsaMayor;
    var totalInporteBolsaMayor;

    //4 el importe y la marca de la bolsa de alimento menos pesada.
    var kilosMenor;
    var kilosImporteMenor;
    var kilosMarcaMenor;
    var kilosBolsaMenor;

    //variables de control
    var respuesta = true;
    var primeraIteracion = true;
    //var mensaje;

    while (respuesta) {
        //validacion y pedido de datos

        if (acumContenedor <= 1000) {

            do {
                marcaIngresada = prompt("Ingrese la marca: ");
            } while (! isNaN(marcaIngresada.toLowerCase()));

            do {
                kilosIngresados = prompt("Ingrese los kilos: ");
                kilosIngresados = parseInt(kilosIngresados);
            } while (isNaN(kilosIngresados) || kilosIngresados < 1 || kilosIngresados > 1000);

            do {
                bolsasIngresada = prompt("Ingrese la cantidad de bolsas: ");
                bolsasIngresada = parseInt(bolsasIngresada);
            } while (isNaN(bolsasIngresada));

            do {
                importeIngresado = prompt("Ingrese el importe: ");
                importeIngresado = parseInt(importeIngresado);
            } while (isNaN(importeIngresado));

            acumContenedor += (kilosIngresados*bolsasIngresada);

        } else {
            alert("EL CONTENEDOR ESTA LLENO " + acumContenedor);
            break;
        }

        //bandera
        if (primeraIteracion) {
            primeraIteracion = false;

            kilosMaximo = kilosIngresados;
            marcaKiloMaximo = marcaIngresada;

            bolsasMaximo = bolsasIngresada;
            marcaBolsasMaximo = marcaIngresada;

            importeMayor = importeIngresado;
            importeMarcaMayor = marcaIngresada;
            importeBolsaMayor = bolsasIngresada;

            kilosMenor = kilosIngresados;
            kilosImporteMenor = importeIngresado;
            kilosMarcaMenor = marcaIngresada;
            kilosBolsaMenor = bolsasIngresada;
            
        } else {
            //1 que marca tiene más kilos en el contenedor.
            if (kilosIngresados > kilosMaximo) {
                kilosMaximo = kilosIngresados;
                marcaKiloMaximo = marcaIngresada;
            } else {
                //4 el importe y la marca de la bolsa de alimento menos pesada.
                if (kilosIngresados < kilosMenor) {
                    kilosMenor = kilosIngresados;
                    kilosImporteMenor = importeIngresado;
                    kilosMarcaMenor = marcaIngresada;
                    kilosBolsaMenor = bolsasIngresada;
            } 
            }
            //2 que marca tiene más bolsas de alimento en el contenedor.
            if (bolsasIngresada > bolsasMaximo) {
                bolsasMaximo = bolsasIngresada;
                marcaBolsasMaximo = marcaIngresada;
            }
            //3 que marca tiene el mayor importe por bolsa de alimento.
            if (importeIngresado > importeMayor) {
                importeMayor = importeIngresado;
                importeMarcaMayor = marcaIngresada;
                importeBolsaMayor = bolsasIngresada;
                totalInporteBolsaMayor = importeBolsaMayor * importeMayor;
            }
        }

        respuesta = confirm("¡¡¡DESEA CONTINUAR!!!");

    }

    document.write("1 La marca: " + marcaKiloMaximo + " tiene más kilos en el contenedor, sus kilos son: " + kilosMaximo + "<br>");
    document.write("2 La marca: " + marcaBolsasMaximo + " tiene más bolsas de alimento en el contenedor, la cantidad de bolsas son: " + bolsasMaximo + "<br>");
    document.write("3 La marca mayor: " + importeMarcaMayor + " y su importe mayor es: $" + importeMayor + " la cantidad de bolsas es: " + importeBolsaMayor + " y su importe por bolsa de alimento en total es: $" + totalInporteBolsaMayor + "<br>");
    document.write("4 El importe es: " + kilosImporteMenor + " y la marca es: " + kilosMarcaMenor + " de las: " + kilosBolsaMenor + " bolsa de alimento menos pesada: " + kilosMenor);
    document.write("El peso total del contenedor es: " + acumContenedor + "<br>");
   
}