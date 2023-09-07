/*-----------------------*/
/* CLASES                */
/*-----------------------*/

// CLase para los productos
class Producto {
    constructor(identificador,nombre,precio,categoria,imagen,destacado){
        this.identificador = identificador;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.imagen = imagen;
        this.destacado = destacado;
        this.stock = 5;
        this.cantidadEnCarrito = 0;
    }
}

/*-----------------------*/
/* VARIABLES GLOBALES    */
/*-----------------------*/

//Array que almacena todos los productos
const productos = [
    //--Procesadores--//
    new Producto(1, "Procesador AMD Ryzen 3 4100 Sin cooler OEM", 48050, "Procesadores AMD", "./images/productos/producto-1.jpg", false),
    new Producto(2, "Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler", 84900, "Procesadores AMD", "./images/productos/producto-2.jpg", false),
    new Producto(3, "Procesador AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler", 123500, "Procesadores AMD", "./images/productos/producto-3.jpg", false),
    new Producto(4, "Procesador AMD Ryzen 5 5500 4.2GHz Turbo + Wraith Stealth Cooler", 134900, "Procesadores AMD", "./images/productos/producto-4.jpg", false),
    new Producto(5, "Procesador AMD Ryzen 5 5600G 4.4GHz Turbo + Wraith Stealth Cooler", 158000, "Procesadores AMD", "./images/productos/producto-5.jpg", false),
    new Producto(6, "Procesador Intel Celeron G5925 3.6GHz Socket 1200 Comet Lake", 48900, "Procesadores Intel", "./images/productos/producto-6.jpg", false),
    new Producto(7, "Procesador Intel Core i3 10100F 4.3GHz Turbo Socket 1200 Comet Lake", 61950, "Procesadores Intel", "./images/productos/producto-7.jpg", false),
    new Producto(8, "Procesador Intel Core i5 10400 4.3GHz Turbo Socket 1200 Comet Lake", 146500, "Procesadores Intel", "./images/productos/producto-8.jpg", false),
    new Producto(9, "Procesador Intel Core i5 11400F 4.40GHz Turbo S1200 Rocket Lake", 156350, "Procesadores Intel", "./images/productos/producto-9.jpg", false),  
    new Producto(10, "Procesador Intel Core i5 11600K 4.9GHz Turbo Socket 1200 Rocket Lake", 185350, "Procesadores Intel", "./images/productos/producto-10.jpg", true),
    new Producto(11, "Procesador Intel Core i5 13600KF 5.1GHz Turbo Socket 1700", 255150, "Procesadores Intel", "./images/productos/producto-11.jpg", true),
    new Producto(12, "Procesador Intel Core i7 11700K 5.0GHz Turbo Socket 1200 Rocket Lake", 346100, "Procesadores Intel", "./images/productos/producto-12.jpg", true),
    //--Motherboards--//
    new Producto(13, "Mother Biostar B450M HP DDR4 M4", 55850, "Motherboards AMD", "./images/productos/producto-13.jpg",false),
    new Producto(14, "Mother ASUS PRIME A520M-K DDR4 AM4", 76910, "Motherboards AMD ", "./images/productos/producto-14.jpg", false),
    new Producto(15, "Mother MSI A520M-A PRO DDR4 AM4", 77000, "Motherboards AMD", "./images/productos/producto-15.jpg", false),
    new Producto(16, "Mother MSI A320M-A PRO AM4", 83600, "Motherboards AMD", "./images/productos/producto-16.jpg", false),
    new Producto(17, "Mother Gigabyte A520M-K V2 DDR4 AM4", 87000, "Motherboards AMD", "./images/productos/producto-17.jpg", false),
    new Producto(18, "Mother MSI B450M-A PRO MAX", 90930, "Motherboards AMD", "./images/productos/producto-18.jpg", false),
    new Producto(19, "Mother ASUS PRIME H510M-K R2.0 Socket 1200", 89500, "Motherboards Intel", "./images/productos/producto-19.jpg", false),
    new Producto(20, "Mother ASUS PRIME H610M-K DDR4", 94360, "Motherboards Intel", "./images/productos/producto-20.jpg", false),
    new Producto(21, "Mother ASUS PRIME B660M-K D4", 99500, "Motherboards Intel", "./images/productos/producto-21.jpg", false),
    new Producto(22, "Mother MSI PRO B660M-A DDR4 s1700", 102700, "Motherboards Intel", "./images/productos/producto-22.jpg", true),
    new Producto(23, "Mother MSI MAG B660M BAZOOKA DDR4 S1700", 110900, "Motherboards Intel", "./images/productos/producto-23.jpg", true),
    new Producto(24, "Mother ASUS TUF GAMING B660M-PLUS WIFI D4", 159000, "Motherboards Intel", "./images/productos/producto-24.jpg", true),
    //--Placas de video--//
    new Producto(25, "Placa de Video ASUS GeForce GTX 1650 4GB GDDR6 Phoenix EVO OC", 159290, "Placas de video Geforce", "./images/productos/producto-25.jpg", false),
    new Producto(26, "Placa de Video ASUS Phoenix GeForce GTX 1630 4GB GDDR6", 212450, "Placas de video Geforce", "./images/productos/producto-26.jpg", false),
    new Producto(27, "Placa de Video ASUS GeForce GTX 1650 4GB GDDR6 DUAL V2", 258000, "Placas de video Geforce", "./images/productos/producto-27.jpg", false),
    new Producto(28, "Placa de Video ASUS GeForce RTX 2060 6GB GDDR6 DUAL EVO OC", 300000, "Placas de video Geforce", "./images/productos/producto-28.jpg", false),
    new Producto(29, "Placa de Video ASUS GeForce GTX 1660 SUPER 6GB GDDR6 TUF", 335000, "Placas de video Geforce", "./images/productos/producto-29.jpg", false),
    new Producto(30, "Placa de Video ASUS GeForce RTX 3070 8GB GDDR6 ROG STRIX GAMING OC V2", 500000, "Placas de video Geforce" , "./images/productos/producto-30.jpg", false),
    new Producto(31, "Placa de Video Asrock Radeon RX 550 2GB GDDR5 Phantom Gaming", 97600, "Placas de video Radeon AMD", "./images/productos/producto-31.jpg", false),
    new Producto(32, "Placa de Video Asrock Radeon RX 6500 XT 4GB GDDR6 PHANTOM GAMING D OC", 228000, "Placas de video Radeon AMD", "./images/productos/producto-32.jpg", false),
    new Producto(33, "Placa de Video XFX RX 580 8GB XXX OC RX-580P8DFD6", 245000, "Placas de video Radeon AMD", "./images/productos/producto-33.jpg", false),
    new Producto(34, "Placa de Video XFX Radeon RX 6650 XT ULTRA 8GB GDDR6 SPEEDSTER QICK 308", 327000, "Placas de video Radeon AMD", "./images/productos/producto-34.jpg", true),
    new Producto(35, "Placa de Video XFX Radeon RX 6650 XT 8GB GDDR6 Speedster SWFT 210", 330000, "Placas de video Radeon AMD", "./images/productos/producto-35.jpg", true),
    new Producto(36, "Placa de Video Asrock Radeon RX 6700 XT 12GB GDDR6 Challenger D OC", 363000, "Placas de video Radeon AMD", "./images/productos/producto-36.jpg", true),
    //--Memorias--//
    new Producto(37, "Memoria Adata DDR4 16GB (2x8GB) 4133MHz XPG Spectrix D60G RGB", 65000, "Memorias", "./images/productos/producto-37.jpg", false),
    new Producto(38, "Memoria Corsair DDR4 8GB 2666Mhz Vengeance LPX Black", 24300, "Memorias", "./images/productos/producto-38.jpg", false),
    new Producto(39, "Memoria Corsair DDR4 8GB 3000MHz Vengeance LPX Black", 25300, "Memorias", "./images/productos/producto-39.jpg", false),
    new Producto(40, "Memoria Adata DDR4 4GB 2666MHz Value", 14400, "Memorias", "./images/productos/producto-40.jpg", false),
    new Producto(41, "Memoria Corsair DDR4 16GB (2x8GB) 2666MHz Vengeance RGB PRO White", 56000, "Memorias", "./images/productos/producto-41.jpg", false),
    new Producto(42, "Memoria Crucial DDR4 8GB 2666MHz Basics", 20200, "Memorias", "./images/productos/producto-42.jpg", false),
    new Producto(43, "Memoria Adata DDR4 8GB 3600Mhz XPG Spectrix D45G RGB", 29000, "Memorias", "./images/productos/producto-43.jpg", false),
    new Producto(44, "Memoria Adata DDR4 8GB 2666MHz Value Sodimm Notebook", 26400, "Memorias notebook", "./images/productos/producto-44.jpg", false),
    new Producto(45, "Memoria Hikvision DDR4 16GB 2666MHz CL19 SODIMM", 48800, "Memorias notebook", "./images/productos/producto-45.jpg", false),
    new Producto(46, "Memoria Hikvision DDR4 16GB 3200MHz CL22 SODIMM", 51000, "Memorias notebook", "./images/productos/producto-46.jpg", true),
    new Producto(47, "Memoria Adata DDR4 16GB 2666MHz SODIMM Notebook", 56000, "Memorias notebook", "./images/productos/producto-47.jpg", true),
    new Producto(48, "Memoria KingDian DDR4 32GB 2666MHz SODIMM Notebook", 64800, "Memorias notebook", "./images/productos/producto-48.jpg", true),
    //--Monitores--//
    new Producto(49, `Monitor Philips 19" HDMI VGA`, 59500, "Monitores", "./images/productos/producto-49.jpg", false),
    new Producto(50, `Monitor LG LED 19'' 19M38A-B VGA`, 65800, "Monitores", "./images/productos/producto-50.jpg", false),
    new Producto(51, `Monitor Samsung 19" A330N HDMI`, 75650, "Monitores", "./images/productos/producto-51.jpg", false),
    new Producto(52, "Monitor Hikvision 22'' DS-D5022QE-E VGA HDMI", 78000, "Monitores", "./images/productos/producto-52.jpg", false),
    new Producto(53, `Monitor ASUS 21.5" VP228HE-J Full HD 1ms HDMI VGA`, 88900, "Monitores", "./images/productos/producto-53.jpg", false),
    new Producto(54, `Monitor Samsung 22" T350 75Hz IPS FHD FreeSync`, 90000, "Monitores", "./images/productos/producto-54.jpg", false),
    new Producto(55, `Monitor Samsung 24" T350 75Hz IPS Full HD FreeSync`, 102000, "Monitores", "./images/productos/producto-55.jpg", false),
    new Producto(56, "Monitor LG LED 24'' 24MP400-B 75Hz IPS FHD FreeSync HDMI", 104000, "Monitores", "./images/productos/producto-56.jpg", false),
    new Producto(57, `Monitor Philips 27" Full HD VGA HDMI DPORT Parlantes`, 118900, "Monitores", "./images/productos/producto-57.jpg", false),
    new Producto(58, `Monitor LG 24" 24MK600M IPS Full HD Bordes Ultra Finos`, 127000, "Monitores", "./images/productos/producto-58.jpg", true),
    new Producto(59, `Monitor Gamer Samsung 24" G50 Curvo 144Hz Full HD VA FreeSync`, 130000, "Monitores", "./images/productos/producto-59.jpg", true),
    new Producto(60, `Monitor ASUS 24" VA24EHE-J Full HD`, 131700, "Monitores", "./images/productos/producto-60.jpg", true)
];

//Array que almacena los productos agregados al carrito de compras
//- Si hay productos en LS los obtiene
//- Si no hay productos en LS se define vacío
const carrito = JSON.parse(localStorage.getItem("Carrito")) || [];

//Elementos del DOM a modificar
const formBuscador = document.getElementById("form-buscador");
const inputTextBuscador = document.getElementById("input-text-buscador");
const iconoBorrarBusqueda = document.getElementById("icono-borrar-busqueda");
const iconoBusqueda = document.getElementById("icono-busqueda");
const imagenCategoria = document.getElementById("imagen-categoria");
const resultadosBusqueda = document.getElementById("resultados-busqueda");
const contenedorProductos = document.querySelector(".contenedor-productos");
const ordenProductos = document.getElementById("orden-productos");
const botonDisplayGrid = document.getElementById("productos-display-grid");
const botonDisplayFlex = document.getElementById("productos-display-flex");
const btnCatProcesadoresAmd = document.getElementById("btn-cat-procesadores-amd");
const btnCatProcesadoresIntel = document.getElementById("btn-cat-procesadores-intel");
const btnCatMothersAmd = document.getElementById("btn-cat-mothers-amd");
const btnCatMothersIntel = document.getElementById("btn-cat-mothers-intel");
const btnCatPlacasGeforce = document.getElementById("btn-cat-placas-geforce");
const btnCatPlacasAmd = document.getElementById("btn-cat-placas-amd");
const btnCatMemorias = document.getElementById("btn-cat-memorias");
const btnCatMemoriasNotebook = document.getElementById("btn-cat-memorias-notebook");
const btnCatMonitores = document.getElementById("btn-cat-monitores");
const carritoHeader = document.getElementById("cantidad-en-carrito");
const irAconfirmarCompra = document.getElementById("ir-a-confirmar-compra");


//Variables donde se guardan los prodctos actualmente mostrándose (array y nombre)
let productosAmostrar;
let mostrando;

/*-----------------------*/
/* FUNCIONES             */
/*-----------------------*/

//Función que recupera productos presentes en el carrito de LS.
const recuperarProductos = () => {
    for(let productoEnCarrito of carrito) {
        const productoEnStock = productos.find((producto) => producto.identificador === productoEnCarrito.identificador);
        if(productoEnStock) {
            productoEnStock.stock = productoEnCarrito.stock;
            productoEnStock.cantidadEnCarrito = productoEnCarrito.cantidadEnCarrito;
        }
    }
    actualizarCarritoVisual();
};

//Funcion que muestra la informacion de la categoria actual
const informarYmostrarProductos = (productos, categoria, imagen) => {
    productosAmostrar = productos;
    mostrando = categoria;
    imagenCategoria.src = `./images/busqueda/${imagen}.jpg`;
    imagenCategoria.alt = categoria;
    mostrarProductos();
}

//Función que muestra los productos actualmente seleccionados e indica qué productos se están mostrando
const mostrarProductos = () => {
    let innerHtmlContedor = "";
    resultadosBusqueda.innerText = mostrando;
    if(productosAmostrar.length === 0) {
        contenedorProductos.innerHTML = `<p>No se encontraron productos.</p>`;
    } else {
        productosAmostrar.forEach((producto) => innerHtmlContedor += definirCardProducto(producto));
        contenedorProductos.innerHTML = innerHtmlContedor;
        agregarEventosBotones();
    }
}

//Funcion para definir card del producto (Agrega o no el carrito a la derecha del respectivo botón)
//- Si la cantidad de ese producto es 0, se muestra simplemente la card con BOTÓN
//- Si la cantidad de ese producto es 1,2,3 o 4, se muestra BOTÓN + CARRITO CON CANTIDAD ACTUAL
//- Si la cantidad de ese producto es 5, se muestra BOTÓN DESHABILITADO + CARRITO CON 5 PRODUCTOS
const definirCardProducto = producto => {
    if(producto.cantidadEnCarrito === 0) {
        return `<div class="card-producto" data-producto-id="${producto.identificador}">
                    <img src="${producto.imagen}" alt="Producto ${producto.identificador}">
                    <div class="informacion-producto">
                        <h2>${producto.nombre}</h2>
                        <p>$ ${producto.precio.toLocaleString()}</p>
                        <div class="div-btn-agregar">
                            <button class="btn-agregar-al-carrito">SUMAR AL CARRITO</button>
                        </div>
                    </div>
                </div>
               `;
    } else if(producto.cantidadEnCarrito === 5) {
        return ` <div class="card-producto" data-producto-id="${producto.identificador}">
                    <img src="${producto.imagen}" alt="Producto ${producto.identificador}">
                    <div class="informacion-producto">
                        <h2>${producto.nombre}</h2>
                        <p>$ ${producto.precio.toLocaleString()}</p>
                        <div class="div-btn-agregar mostrar-flex">
                            <button class="btn-agregar-al-carrito" disabled>SUMAR AL CARRITO</button>
                            <div class="contenedor-icono">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>${producto.cantidadEnCarrito}</span>
                            </div>
                        </div>
                    </div>
                </div>
               `;
    } else {
        return `<div class="card-producto" data-producto-id="${producto.identificador}">
                    <img src="${producto.imagen}" alt="Producto ${producto.identificador}">
                    <div class="informacion-producto">
                        <h2>${producto.nombre}</h2>
                        <p>$ ${producto.precio.toLocaleString()}</p>
                        <div class="div-btn-agregar mostrar-flex">
                            <button class="btn-agregar-al-carrito">SUMAR AL CARRITO</button>
                            <div class="contenedor-icono">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>${producto.cantidadEnCarrito}</span>
                            </div>
                        </div>
                    </div>
                </div>
               `;
    };
};

//Funcion que agrega eventos a los botones "Agregar al producto"
const agregarEventosBotones = () => {
    const btnsAgregarAlCarrito = document.querySelectorAll(".btn-agregar-al-carrito");
    btnsAgregarAlCarrito.forEach((btnAgregarAlCarrito) => btnAgregarAlCarrito.addEventListener("click", (e) => {
        const btnPresionado = e.target;
        const idProductoSeleccionado = parseInt(btnPresionado.closest(".card-producto").getAttribute("data-producto-id"));
        const productoAagregar = productos.find((producto) => producto.identificador === idProductoSeleccionado);
        agregarAlCarrito(productoAagregar);
        mostrarProductos();
    }));
};

//Funcion que guarda producto solicitado en el carrito
//-Si no existe en el carrito lo pushea (agrega)
//-Si existe, actualiza el stock y la cantidad en carrito del producto,
//tanto en el carrito como en el array productos.
const agregarAlCarrito = productoAagregar => {
    if(productoAagregar.cantidadEnCarrito === 0) {
        productoAagregar.cantidadEnCarrito++;
        productoAagregar.stock--;
        carrito.push(productoAagregar);
    } else if(productoAagregar.cantidadEnCarrito !== 5) {
        productoAagregar.cantidadEnCarrito++;
        productoAagregar.stock--;
        const productoEncarrito = carrito.find((producto) => producto.identificador === productoAagregar.identificador);
        productoEncarrito.cantidadEnCarrito = productoAagregar.cantidadEnCarrito;
        productoEncarrito.stock = productoAagregar.stock;
    }
    actualizarCarritoVisual();
    guardarEnLs("Carrito",JSON.stringify(carrito));
};

//Funcion que actualiza la cantidad visual del carrito del header
const actualizarCarritoVisual = () => {
    const totalEnCarrito = carrito.reduce((acc,producto)=> acc + producto.cantidadEnCarrito, 0);
    carritoHeader.innerText = totalEnCarrito; 
    carritoHeader.classList.remove("ocultar");
}

//Funcion que guarda cosas en LocalStorage
const guardarEnLs = (clave, valor) => {
    localStorage.setItem(clave,valor);
};

//Funcion para filtrar por categoria y llamar a la función que muestra esa categoria actual
//y su información en pantalla
const filtrarPorCategoria = (categoria, imagen) => {
    const categoriaSeleccionada = productos.filter(producto => producto.categoria === categoria);
    informarYmostrarProductos(categoriaSeleccionada,categoria,imagen);
    ordenProductos.value = "";
}

/*-----------------------*/
/* CÓDIGO PRINCIPAL      */
/*-----------------------*/

//Si hay productos en el carrito del LS, actualizo el stock y cantidad en el carrito 
//de los productos que se encentran allí.
carrito.length !== 0 && recuperarProductos();

//Muestro por default los productos destacados
const productosDestacados = productos.filter((producto) => producto.destacado === true);
informarYmostrarProductos(productosDestacados,"Destacados","destacados");

/*-------------------------------------------------------------------------------------------*/
/* EVENTOS  (excepto los de los botones "Agregar producto" agregados por función)            */
/*-------------------------------------------------------------------------------------------*/

//Barra de búsqueda

//--Form del buscador--//
formBuscador.addEventListener("submit", (e) => {
    e.preventDefault();
});

//--Input del buscador--//
inputTextBuscador.addEventListener("input",() => {
    let valorIngresado = inputTextBuscador.value.trim();
    if(valorIngresado.length === 0) {
        iconoBorrarBusqueda.classList.replace("mostrar", "ocultar");
        iconoBusqueda.classList.remove("ocultar");
    } else {
        iconoBorrarBusqueda.classList.replace("ocultar", "mostrar");
        iconoBusqueda.classList.add("ocultar");
    }
});

inputTextBuscador.addEventListener("keydown", (e) => {
    let valorIngresado = inputTextBuscador.value.trim().toLowerCase();
    if(e.key === "Enter" && valorIngresado.length !== 0) {
        const productosBuscados = productos.filter((producto) => producto.nombre.toLowerCase().includes(valorIngresado));
        informarYmostrarProductos(productosBuscados,valorIngresado,"busqueda");
        ordenProductos.value = "";
    }
});

//--Icono X para borrar búsqueda--//
iconoBorrarBusqueda.addEventListener("click", () => {
    inputTextBuscador.value = "";
    iconoBorrarBusqueda.classList.replace("mostrar", "ocultar");
    iconoBusqueda.classList.remove("ocultar");
    informarYmostrarProductos(productosDestacados,"Destacados","destacados");
    ordenProductos.value = "";
});

//Select de orden
ordenProductos.addEventListener("change", () => {
    switch(ordenProductos.value) {
        case "Nombre":
            productosAmostrar.sort((a,b) => {
                const nombreA = a.nombre.toLowerCase();
                const nombreB = b.nombre.toLowerCase();
                if(nombreA < nombreB) {
                    return -1;
                }
                if(nombreA > nombreB) {
                    return 1;
                }
                return 0;
            });
            break;
        case "Mayor precio":
            productosAmostrar.sort((a,b) => b.precio - a.precio);
            break;
        case "Menor precio":
            productosAmostrar.sort((a,b) => a.precio - b.precio);
            break;
    }
    mostrarProductos();
});

//Botones de disposición de los productos (GRID O FLEX)
botonDisplayFlex.addEventListener("click", () => {
    contenedorProductos.classList.replace("contenedor-display-grid", "contenedor-display-flex");
    botonDisplayGrid.classList.replace("disposicion-seleccionada","disposicion-no-seleccionada");
    botonDisplayFlex.classList.replace("disposicion-no-seleccionada","disposicion-seleccionada");
});

botonDisplayGrid.addEventListener("click", () => {
    contenedorProductos.classList.replace("contenedor-display-flex", "contenedor-display-grid");
    botonDisplayGrid.classList.replace("disposicion-no-seleccionada","disposicion-seleccionada");
    botonDisplayFlex.classList.replace("disposicion-seleccionada","disposicion-no-seleccionada");
});

//Botones para elegir categoría a mostrar
btnCatProcesadoresAmd.addEventListener("click", () => {
    filtrarPorCategoria("Procesadores AMD", "procesadores-amd");
});

btnCatProcesadoresIntel.addEventListener("click", () => {
    filtrarPorCategoria("Procesadores Intel", "procesadores-intel");
});

btnCatMothersAmd.addEventListener("click", () => {
    filtrarPorCategoria("Motherboards AMD", "motherboards-amd");
});

btnCatMothersIntel.addEventListener("click", () => {
    filtrarPorCategoria("Motherboards Intel", "motherboards-intel");
});

btnCatPlacasGeforce.addEventListener("click", ()=> {
    filtrarPorCategoria("Placas de video Geforce", "placas-de-video-gforce");
});

btnCatPlacasAmd.addEventListener("click", () => {
    filtrarPorCategoria("Placas de video Radeon AMD", "placas-de-video-radeon-amd");
});

btnCatMemorias.addEventListener("click", () => {
    filtrarPorCategoria("Memorias", "memorias", "Memorias");
});

btnCatMemoriasNotebook.addEventListener("click", () => {
    filtrarPorCategoria("Memorias notebook", "memorias-notebook");
});

btnCatMonitores.addEventListener("click", () => {
    filtrarPorCategoria("Monitores", "monitores");
});

//Botón para ir a la página del carrito
irAconfirmarCompra.addEventListener("click",() => {
    window.location.href = "./pages/seccion-carrito-de-compras.html";
});