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
const productos = [];

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
//Función asíncrona que ejecuta el código de la página
const ejecutarCodigo = async() => {
    //Espero a que se pidan los productos a la api
    await pedirProductosApi("./data/data.json");
    //Si hay productos en el carrito del LS, actualizo el stock y cantidad en carrito 
    //de los productos que se encentran allí.
    carrito.length !== 0 && recuperarProductos();
    // Muestra por defecto los productos destacados
    const productosDestacados = productos.filter(producto => producto.destacado === true);
    informarYmostrarProductos(productosDestacados,"Destacados","destacados");
};

//Función asíncrona que obtiene los datos de data.json y crea los productos en el array productos[]
const pedirProductosApi = async(url) => {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    data.forEach(dato=>productos.push(new Producto(dato.identificador,dato.nombre,dato.precio,dato.categoria,dato.imagen,dato.destacado)));
};

//Función que recupera productos presentes en el carrito de LS.
const recuperarProductos = () => {
    for(let productoEnCarrito of carrito) {
        const productoEnStock = productos.find(producto=> producto.identificador === productoEnCarrito.identificador);
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
};

//Funcion para definir card del producto (Agrega o no el carrito a la derecha del respectivo botón)
//- Si la cantidad de ese producto es 0, se muestra simplemente la card con BOTÓN
//- Si la cantidad de ese producto es 1,2,3 o 4, se muestra BOTÓN + CARRITO CON CANTIDAD ACTUAL
//- Si la cantidad de ese producto es 5, se muestra BOTÓN DESHABILITADO + CARRITO CON 5 PRODUCTOS
const definirCardProducto = producto => {
    const {cantidadEnCarrito, identificador, imagen, nombre,precio} = producto;
    if(cantidadEnCarrito === 0) {
        return `<div class="card-producto" data-producto-id="${identificador}">
                    <img src="${imagen}" alt="Producto ${identificador}">
                    <div class="informacion-producto">
                        <h2>${nombre}</h2>
                        <p>$ ${precio.toLocaleString()}</p>
                        <div class="div-btn-agregar">
                            <button class="btn-agregar-al-carrito">SUMAR AL CARRITO</button>
                        </div>
                    </div>
                </div>
               `;
    } else if(cantidadEnCarrito === 5) {
        return ` <div class="card-producto" data-producto-id="${identificador}">
                    <img src="${imagen}" alt="Producto ${identificador}">
                    <div class="informacion-producto">
                        <h2>${nombre}</h2>
                        <p>$ ${precio.toLocaleString()}</p>
                        <div class="div-btn-agregar mostrar-flex">
                            <button class="btn-agregar-al-carrito" disabled>SUMAR AL CARRITO</button>
                            <div class="contenedor-icono">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>${cantidadEnCarrito}</span>
                            </div>
                        </div>
                    </div>
                </div>
               `;
    } else {
        return `<div class="card-producto" data-producto-id="${identificador}">
                    <img src="${imagen}" alt="Producto ${identificador}">
                    <div class="informacion-producto">
                        <h2>${nombre}</h2>
                        <p>$ ${precio.toLocaleString()}</p>
                        <div class="div-btn-agregar mostrar-flex">
                            <button class="btn-agregar-al-carrito">SUMAR AL CARRITO</button>
                            <div class="contenedor-icono">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>${cantidadEnCarrito}</span>
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
    notificarAgregado();
    actualizarCarritoVisual();
    guardarEnLs("Carrito",JSON.stringify(carrito));
};

//Función que notifica mediante mensaje flotante (Toastify JS) que se agregó un producto
const notificarAgregado = () => {
    Toastify({
        text: "PRODUCTO AGREGADO",
        duration: 1500,
        gravity: "bottom",
        style: {
            background: "#5f5be8",
            borderRadius: "10px",
            cursor: "default"
        }
    }).showToast();
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

// Código principal
ejecutarCodigo();

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
    const productosDestacados = productos.filter((producto) => producto.destacado === true);
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