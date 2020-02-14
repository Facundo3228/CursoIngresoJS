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
    var cantidadLamparaIngresada;
    var cantidadLamparaParseo;
    var precioLampara;
    var descuento;
    var IIBB;
    var totalConDescuento;
    var totalDescuento;
    var totalConIIBB;
    var totalFinal;
    var totalLamparas;
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
                        if (cantidadLamparaParseo >= 2) {
                            totalFinal = precioLampara * cantidadLamparaParseo;
                        }
                    }
                }
            }
        }
        
        
    }

    //calculos
    totalLamparas = precioLampara * cantidadLamparaParseo; //total de las lamparas compradas a valor de $35
    totalDescuento = (totalLamparas * descuento) / 100; //total del porcentaje de descuento del total de lamparas
    totalConDescuento = totalLamparas - totalDescuento; //total del descuento 
    document.getElementById("precioDescuento").value = totalConDescuento;

    if (totalConDescuento >= 120) {
        totalConIIBB = (totalConDescuento * IIBB) / 100;
        totalFinal = totalConIIBB + totalConDescuento;
    }

    //muestro datos
    //document.getElementById("precioDescuento").value = totalConDescuento
    document.getElementById("precioDescuento").value = totalFinal;
 	
}
