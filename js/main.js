//Función para pedir el código del producto
const pedirCodigoProducto = () => {
    let codigoProducto = prompt(`Ingrese el código del producto que desea agregar a su carrito,
según el listado de precios o presione "0" para finalizar.
Recuerde que el máximo por producto es de ${cantidadMaxima} UNIDADES.

PROCESADORES
1- Procesador AMD Ryzen 3 3200G ($${precio1})
2- Procesador AMD Ryzen 5 3600 ($${precio2})
MOTHERBOARDS
3- Mother Asrock B550M-HDV DDR4 AM4 ($${precio3})
4- Mother Asrock A620M-HDV DDR5 AM5 ($${precio4})
PLACAS DE VIDEO
5- Placa de video ASUS GeForce RTX 2060 6GB ($${precio5})
6- Placa de video ASUS GeForce RTX 3060 TI 8GB ($${precio6})
MEMORIAS RAM
7- Memoria Corsair DDR4 8GB 2666Mhz ($${precio7})
8- Memoria Patriot Viper DDR4 8GB 3200Mhz ($${precio8})
GABINETES
9- Gabinete Deepcool MATREXX 55 V3($${precio9})
10- Gabinete Kolink Observatory Lite Mesh ($${precio10})
FUENTES
11- Fuente Corsair 650W 80 Plus Bronze CV650 ($${precio11})
12- Fuente Gigabyte 550W 80 Plus Bronze P550B ($${precio12})`);
    return parseInt(codigoProducto);
};

//Función para pedir la cantidad de productos a agregar al carrito de compras
const pedirCantidadProductos = (cantidadActual) => {
    let cantidadProductos;
    do{
        cantidadProductos = parseInt(prompt("Ingrese la cantidad del producto que quiere añadir:\nCantidad actual: " + cantidadActual + " unidades."));
        if(isNaN(cantidadProductos) || cantidadProductos <= 0) {
            alert("Ingrese un número válido.");
        }
        console.log(cantidadProductos);
    }while(isNaN(cantidadProductos) || cantidadProductos <= 0);
    return cantidadProductos;
};

//Función que pide la verificación de la compra
const verificarCompra = () => {
    let confirmacionCompra = confirm(`Presione "ACEPTAR" para confirmar o "CANCELAR" para cancelar su compra.

RESUMEN DE LA COMPRA:

PROCESADORES
1- Procesador AMD Ryzen 3 3200G ($${precio1})(x${cantidad1})
2- Procesador AMD Ryzen 5 3600 ($${precio2})(x${cantidad2})
MOTHERBOARDS
3- Mother Asrock B550M-HDV DDR4 AM4 ($${precio3})(x${cantidad3})
4- Mother Asrock A620M-HDV DDR5 AM5 ($${precio4})(x${cantidad4})
PLACAS DE VIDEO
5- Placa de video ASUS GeForce RTX 2060 6GB GDDR6 ($${precio5})(x${cantidad5})
6- Placa de video ASUS GeForce RTX 3060 TI 8GB ($${precio6})(x${cantidad6})
MEMORIAS RAM
7- Memoria Corsair DDR4 8GB 2666Mhz ($${precio7})(x${cantidad7})
8- Memoria Patriot Viper DDR4 8GB 3200Mhz Steel ($${precio8})(x${cantidad8})
GABINETES
9- Gabinete Deepcool MATREXX 55 V3 ($${precio9})(x${cantidad9})
10- Gabinete Kolink Observatory Lite Mesh ($${precio10})(x${cantidad10})
FUENTES
11- Fuente Corsair 650W 80 Plus Bronze CV650 ($${precio11})(x${cantidad11})
12- Fuente Gigabyte 550W 80 Plus Bronze P550B ($${precio12})(x${cantidad12})

Precio total: $${precioTotal}.`);
    return confirmacionCompra;
}

//Variables globales
let codigoProducto;
let cantidadProductos;
const precio1 = 70900, precio2 = 102550, precio3 = 74450, precio4 = 84400, precio5 = 213500, precio6 = 299550, precio7 = 20900, precio8 = 23850, precio9 = 41700, precio10 = 42600, precio11 = 44800, precio12 = 36400;
let cantidad1 = 0, cantidad2 = 0, cantidad3 = 0, cantidad4 = 0, cantidad5 = 0, cantidad6 = 0, cantidad7 = 0, cantidad8 = 0, cantidad9 = 0, cantidad10 = 0, cantidad11 = 0, cantidad12 = 0;
const cantidadMaxima = 5;
let precioTotal = 0;
let confirmacionCompra;

//Código principal
//Bienvenida al usuario
alert("Bienvenido a INSATECH!");
//Permito que el cliente agregue productos al carro hasta presionar "0"
do {
    codigoProducto = pedirCodigoProducto();
    switch(codigoProducto){
        case 0:
            if(precioTotal != 0) {
                confirmacionCompra = verificarCompra();
            }
            else {
                alert("No compró nada. Puede volver más tarde!");
            }
            break;
        case 1:
            if(!(cantidad1 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad1);
                if(!((cantidad1 + cantidadProductos) > cantidadMaxima)) {
                    cantidad1 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio1);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        case 2:
            if(!(cantidad2 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad2);
                if(!((cantidad2 + cantidadProductos) > cantidadMaxima)) {
                    cantidad2 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio2);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        case 3:
            if(!(cantidad3 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad3);
                if(!((cantidad3 + cantidadProductos) > cantidadMaxima)) {
                    cantidad3 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio3);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        case 4:
            if(!(cantidad4 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad4);
                if(!((cantidad4 + cantidadProductos) > cantidadMaxima)) {
                    cantidad4 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio4);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        case 5:
            if(!(cantidad5 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad5);
                if(!((cantidad5 + cantidadProductos) > cantidadMaxima)) {
                    cantidad5 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio5);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        case 6:
            if(!(cantidad6 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad6);
                if(!((cantidad6 + cantidadProductos) > cantidadMaxima)) {
                    cantidad6 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio6);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        case 7:
            if(!(cantidad7 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad7);
                if(!((cantidad7 + cantidadProductos) > cantidadMaxima)) {
                    cantidad7 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio7);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        case 8:
            if(!(cantidad8 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad8);
                if(!((cantidad8 + cantidadProductos) > cantidadMaxima)) {
                    cantidad8 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio8);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        case 9:
            if(!(cantidad9 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad9);
                if(!((cantidad9 + cantidadProductos) > cantidadMaxima)) {
                    cantidad9 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio9);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        case 10:
            if(!(cantidad10 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad10);
                if(!((cantidad10 + cantidadProductos) > cantidadMaxima)) {
                    cantidad10 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio10);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        case 11:
            if(!(cantidad11 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad11);
                if(!((cantidad11 + cantidadProductos) > cantidadMaxima)) {
                    cantidad11 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio11);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        case 12:
            if(!(cantidad12 == cantidadMaxima)) {
                cantidadProductos = pedirCantidadProductos(cantidad12);
                if(!((cantidad12 + cantidadProductos) > cantidadMaxima)) {
                    cantidad12 += cantidadProductos;
                    precioTotal += (cantidadProductos * precio12);
                }
                else {
                    alert(`El límite de unidades de este producto es de (${cantidadMaxima} UNIDADES).`);
                }
            }
            else {
                alert(`Usted ha llegado al límite de unidades de este producto (${cantidadMaxima} UNIDADES).`);
            }
            break;
        default:
            alert("Ingrese una opción válida.");
            break;
    }
}while(codigoProducto != 0);

//En caso de haber agregado productos al carrito de compras, muestro si el usuario confirmó la compra o no.
if(confirmacionCompra === true) {
    alert("La compra fue realizada con éxito. Gracias por confiar!");
}
else if(confirmacionCompra === false) {
    alert("Tu compra se canceló correctamente. Puede volver más tarde!");
}




