/*-----------------------*/
/* CLASES                */
/*-----------------------*/

// CLase para los productos
class Producto {
    constructor(identificador,nombre,precio,categoria){
        this.identificador = identificador;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.stock = 5;
        this.cantidadEnCarrito = 0;
    }
}

/*-----------------------*/
/* VARIABLES GLOBALES    */
/*-----------------------*/

//Array que almacena todos los productos
const productos = [
    new Producto(1, "Procesador AMD Ryzen 3 3200G", 70900, "Procesadores"),
    new Producto(2, "Procesador AMD Ryzen 5 3600", 102550, "Procesadores"),
    new Producto(3, "Mother Asrock B550M-HDV DDR4 AM4", 74450, "Motherboards"),
    new Producto(4, "Mother Asrock A620M-HDV DDR5 AM5", 84400, "Motherboards"),
    new Producto(5, "Placa de video ASUS GeForce RTX 2060 6GB", 213500, "Placas de video"),
    new Producto(6, "Placa de video ASUS GeForce RTX 3060 TI 8GB", 299550, "Placas de video"),
    new Producto(7, "Memoria Corsair DDR4 8GB 2666Mhz", 20900, "Memorias RAM"),
    new Producto(8, "Memoria Patriot Viper DDR4 8GB 3200Mhz", 23850, "Memorias RAM"),
    new Producto(9, "Gabinete Deepcool MATREXX 55 V3", 41700, "Gabinetes"),
    new Producto(10, "Gabinete Kolink Observatory Lite Mesh", 42600, "Gabinetes"),
    new Producto(11, "Fuente Corsair 650W 80 Plus Bronze CV650", 44800, "Fuentes"),
    new Producto(12, "Fuente Gigabyte 550W 80 Plus Bronze P550B", 36400, "Fuentes")
];

//Array que almacena los productos agregados al carrito de compras
const carrito = [];

/*-----------------------*/
/* FUNCIONES             */
/*-----------------------*/

//Función para dar bienvenida al usuario
const darBienvenida = () => alert("Bienvenido a INSATECH!");

//Función que permite al usuario agregar productos al carrito hasta presionar "0".
const ejecutarBucle = () => {
    let codigoProducto;

    do {
        codigoProducto = pedirCodigoProducto();
        evaluarCodigoProducto(codigoProducto);
    }while(codigoProducto != 0);
}

//Función que pide y retorna el código de producto ingresado por el usuario
const pedirCodigoProducto = () => {
    let codigoProducto = prompt(`Ingrese el código del producto que desea agregar a su carrito,
según el listado de precios o presione "0" para finalizar.
Recuerde que el máximo por producto es de 5 UNIDADES.

PROCESADORES
${productos[0].identificador}- ${productos[0].nombre} ($${productos[0].precio})
${productos[1].identificador}- ${productos[1].nombre} ($${productos[1].precio})
MOTHERBOARDS
${productos[2].identificador}- ${productos[2].nombre} ($${productos[2].precio})
${productos[3].identificador}- ${productos[3].nombre} ($${productos[3].precio})
PLACAS DE VIDEO
${productos[4].identificador}- ${productos[4].nombre} ($${productos[4].precio})
${productos[5].identificador}- ${productos[5].nombre} ($${productos[5].precio})
MEMORIAS RAM
${productos[6].identificador}- ${productos[6].nombre} ($${productos[6].precio})
${productos[7].identificador}- ${productos[7].nombre} ($${productos[7].precio})
GABINETES
${productos[8].identificador}- ${productos[8].nombre} ($${productos[8].precio})
${productos[9].identificador}- ${productos[9].nombre} ($${productos[9].precio})
FUENTES
${productos[10].identificador}- ${productos[10].nombre} ($${productos[10].precio})
${productos[11].identificador}- ${productos[11].nombre} ($${productos[11].precio})`);
    return parseInt(codigoProducto);
};

//Función que evalua el código de producto ingresado por el usuario:
//-En caso de ser 0 no se realiza ninguna acción
//-En caso de NO coincidir con ningún identificador vuelve a pedir el ingreso
//-En caso de SI coincidir con un identificador, se entra en la función agregarAlCarrito para el producto seleccionado.
const evaluarCodigoProducto = (codigoProducto) => {
    let productoSeleccionado = productos.find((producto) => producto.identificador === codigoProducto);
    if(codigoProducto !== 0 && productoSeleccionado === undefined) {
        alert("Opción inválida, ingrese una correcta.");
    } else if(codigoProducto !== 0){
        agregarAlCarrito(productoSeleccionado);
    }
}

//Función que agrega un producto al carrito:
//-Solo si hay menos de 5 unidades de ese producto
const agregarAlCarrito = (productoSeleccionado) => {
    if(productoSeleccionado.cantidadEnCarrito < 5) {
        let cantidadSeleccionada = parseInt(prompt("Ingrese la cantidad del producto que quiere añadir:\nCantidad actual: " + productoSeleccionado.cantidadEnCarrito  + " unidades."));
        if((productoSeleccionado.stock - cantidadSeleccionada >= 0) && cantidadSeleccionada != 0){
            productoSeleccionado.cantidadEnCarrito += cantidadSeleccionada;
            productoSeleccionado.stock -= cantidadSeleccionada;
            if(!(carrito.some((producto) => producto.identificador === productoSeleccionado.identificador))) {
                carrito.push(productoSeleccionado);
            }
        } else if(cantidadSeleccionada === 0){
            alert(`Debe agregar mínimo 1 producto.`);
        } else {
            alert(`El máximo de unidades que puede agregar del producto es de \n(5 UNIDADES).`);
        }
    } else {
        alert(`Usted ha llegado al límite de unidades en carrito de este producto \n(${productoSeleccionado.cantidadEnCarrito} UNIDADES).`);
    }    
}

//Función que confirma/cancela compra y muestra resumen y total de la compra
const confirmarCompra = () => {
    if(carrito.length === 0) {
        alert("No agregó productos al carrito.\n\nGracias por su visita, vuelva más tarde.");
    } else {
        let resumen = carrito.map((producto) => {
            return `${producto.identificador}- ${producto.nombre} ($${producto.precio}) (x${producto.cantidadEnCarrito})`
        }).join("\n");
        let precioTotal = carrito.reduce((acumulador,producto) => acumulador += (producto.precio * producto.cantidadEnCarrito), 0);
        let confirmar = confirm(`RESUMEN DE SU COMPRA:\n\n${resumen}\n\nPrecio total: $${precioTotal}\n\nDesea confirmar la compra?`);
        if(confirmar) {
            alert("COMPRA REALIZADA CON ÉXITO! Gracias por confiar.");
        } else{
            alert("Compra cancelada con éxito. Vuelva más tarde.");
        }
    }
}

/*-----------------------*/
/* CÓDIGO PRINCIPAL      */
/*-----------------------*/

darBienvenida();
ejecutarBucle();
confirmarCompra();


