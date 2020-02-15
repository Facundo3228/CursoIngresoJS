/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //Variables
    var cantidadLamparaIngresada; //valor ingresado String
    var cantidadLamparaParseo; //valor parseado de la variable cantidadLamparaIngresada.
    var precioLampara; //valor fijo de cada lampara.
    var descuento; //descuento fijo por lampara.
    var IIBB; //valor fijo de ingresos brutos.
    var totalConDescuento; //valor resultante de la resta del total de las lamparas 
    var totalDescuentoLamparas; //valor del descuento del total de las lamparas por el descuento.
    var totalConIIBB;
    var totalSumaIIBB; //valor de decuento de
    var totalFinal;
    var totalLamparas; //valor total de la suma de lamparas por  el valor de cada una.

    var mensaje;
    var marcaLampara;

    //asignacion de variables
    cantidadLamparaIngresada = document.getElementById("Cantidad").value;
    precioLampara = 35; //modificar para que en el futuro el cliente pueda cambiar el precio.
    marcaLampara = document.getElementById("Marca").value;
    IIBB = 10;


    //parseo
    cantidadLamparaParseo = parseInt(cantidadLamparaIngresada);


    //codigo if/else

    //punto A
    if (cantidadLamparaParseo >= 6) {
        descuento = 50;
    } else {
        //punto B
        if (cantidadLamparaParseo == 5 && marcaLampara == "ArgentinaLuz") {
            descuento = 40;
        } else {
            descuento = 30;
            //punto C
            if (cantidadLamparaParseo == 4 && (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")) {
                descuento = 25;
            } else {
                descuento = 20;
                //punto D
                if (cantidadLamparaParseo == 3 && marcaLampara == "ArgentinaLuz") {
                    descuento = 15;
                } else {
                    if (cantidadLamparaParseo == 3 && marcaLampara == "FelipeLamparas") {
                        descuento = 10;
                    } else {
                        descuento = 5;
                        //Si es 2 o 1
                        if (cantidadLamparaParseo <= 2) {
                            totalLamparas = precioLampara * cantidadLamparaParseo;
                        }
                    }
                }
            }
        }        
    }

    //calculos
    totalLamparas = precioLampara * cantidadLamparaParseo; //total de las lamparas compradas a valor de $35
    totalDescuentoLamparas = (totalLamparas * descuento) / 100; //total del porcentaje de descuento del total de lamparas
    totalConDescuento = totalLamparas - totalDescuentoLamparas; //total del descuento 
    //document.getElementById("precioDescuento").value = totalConDescuento; // muestro el total con descuento

    if (totalConDescuento >= 120) {
        totalDescuentoIIBB = (totalConDescuento * IIBB) / 100; //total del porcentaje de descuento del total con descuento de las lamparas.
        totalFinal = totalConDescuento + totalDescuentoIIBB // total final del valor de la suma del ingreso bruto.
        document.getElementById("precioDescuento").value = totalFinal;
    }

    //muestro datos
    document.getElementById("precioDescuento").value = totalConDescuento
    //document.getElementById("precioDescuento").value = totalFinal;
     alert("Usted pago de IIBB " + totalDescuentoIIBB + " el valor total a pagar es: " + totalFinal);

     /**
      * Nota personal: Realizar una tabla de valores para comparar errores.
      */
     
}
