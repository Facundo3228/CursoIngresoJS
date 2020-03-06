/*
Debemos realizar la carga de 5 (cinco) productos de prevencion de contagio, de cada uno debo obtener
los siguientes datos:
El tipo (Validar "barbijo", "jabon" o "alcohol")
El precio (validar entre 100 y 300)
La cantidad de unidades (no puede ser 0 o negativo y no puede superar las 1000 unidades)
La marca
El fabricante
Se debe informar al usuario lo siguiente:
a) Del mas caro de los barbijos, la cantidad de unidades y el fabricante.
b) Del item con mas unidades el fabricante.
c) Cuantas unidades de jabones hay en total.
*/
function mostrar()
{
    //variables y inicio
    var tipoIngresado;
    var precioIngresado;
    var unidadesIngresadas;
    var marcaIngresado;
    var fabricanteIngresado;

    //a) Del mas caro de los barbijos, la cantidad de unidades y el fabricante.
    var precioBarbijoMasCaro;
    var precioBarbijoTipoMasCaro;
    var precioBarbijoUnidadesMasCaro;
    var precioBarbijoFabricanteMasCaro;

    //b) Del item con mas unidades el fabricante.
    var unidadesMasItem;
    var unidadesFabricanteMasItem;
    var unidadesTipoMasItem;

    //c) Cuantas unidades de jabones hay en total.
    var contaUnidadesJabon = 0;

    //variables de control
    var contador = 0;
    var primeraIteracion = true;
    var mensaje;

    while (contador < 5) {
        contador++;
        
        //validaciones
        do {
            tipoIngresado = prompt("Ingrese el tipo de producto Barbijo, Jabon o Alcohol");
        } while (tipoIngresado.toLowerCase() != "barbijo" && tipoIngresado.toLowerCase() != "jabon" && tipoIngresado.toLowerCase() != "alcohol");

        do {
            precioIngresado = prompt("Ingres el precio del producto");
            precioIngresado = parseFloat(precioIngresado);
        } while (isNaN(precioIngresado) || precioIngresado < 100 || precioIngresado > 300);

        do {
            unidadesIngresadas = prompt("Ingrese la cantidad de unidades del producto");
            unidadesIngresadas = parseInt(unidadesIngresadas);
        } while (isNaN(unidadesIngresadas) || unidadesIngresadas < 1 || unidadesIngresadas > 1000);

        do {
            marcaIngresado = prompt("Ingrese la marca del producto");
        } while (marcaIngresado.toLowerCase() == "");

        do {
            fabricanteIngresado = prompt("Ingrese el fabricante del producto");
        } while (fabricanteIngresado.toLowerCase() == "");

        //bandera
        if (primeraIteracion) {
            precioBarbijoMasCaro = precioIngresado;
            precioBarbijoTipoMasCaro = tipoIngresado;
            precioBarbijoUnidadesMasCaro = unidadesIngresadas;
            precioBarbijoFabricanteMasCaro = fabricanteIngresado;

            unidadesMasItem = unidadesIngresadas;
            unidadesFabricanteMasItem = fabricanteIngresado;
            unidadesTipoMasItem = tipoIngresado;

            primeraIteracion = false;
        } else {
            //a) Del mas caro de los barbijos, la cantidad de unidades y el fabricante.
            if (precioIngresado > precioBarbijoMasCaro && tipoIngresado == "barbijo") {
                precioBarbijoMasCaro = precioIngresado;
                precioBarbijoTipoMasCaro = tipoIngresado;
                precioBarbijoUnidadesMasCaro = unidadesIngresadas;
                precioBarbijoFabricanteMasCaro = fabricanteIngresado;
            }
            //b) Del item con mas unidades el fabricante.
            if (unidadesIngresadas > unidadesMasItem) {
                unidadesMasItem = unidadesIngresadas;
                unidadesFabricanteMasItem = fabricanteIngresado;
                unidadesTipoMasItem = tipoIngresado;
            }
        }
        //c) Cuantas unidades de jabones hay en total.
        if (tipoIngresado == "jabon") {
            contaUnidadesJabon++;
        }
    }
    //informe
    document.write("a) Del mas caro de los barbijos, la cantidad de unidades es, " + precioBarbijoUnidadesMasCaro + " y el fabricante es, " + precioBarbijoFabricanteMasCaro + "<br>");
    document.write("b) Del item que es, " + unidadesTipoMasItem + " con mas unidades las cuales son, " + unidadesMasItem + " el fabricante es." + unidadesFabricanteMasItem + "<br>");
    document.write("c) Cuantas unidades de jabones hay en total. " + contaUnidadesJabon + "<br>");
    document.write("FIN DEL INFORME");

}