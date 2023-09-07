/*-----------------------*/
/* VARIABLES GLOBALES    */
/*-----------------------*/

//Array que almacena los productos agregados al carrito de compras
//- Si hay productos en LS los obtiene
//- Si no hay productos en LS se define vacío
const carrito = JSON.parse(localStorage.getItem("Carrito")) || [];

//Elementos del DOM a modificar
const contenedorCarrito = document.getElementById("contenedor-carrito");
const contenedorPrecioTotal = document.querySelector(".contenedor-precio-total");
const cantidadEnCarritoHeader = document.getElementById("cantidad-en-carrito");

/*-----------------------*/
/* FUNCIONES             */
/*-----------------------*/

//Función que crea las cards de los productos que hay en el carrito y llama a las demás funciones
const mostrarProductos = () => {
    let innerHTML = "";
    for(let producto of carrito) {
        innerHTML += `  <div class="card-producto" data-producto-id="${producto.identificador}">
                            <img src="${producto.imagen}" alt="Producto ${producto.identificador}">
                            <div class="informacion-producto">
                                <h2>${producto.nombre}</h2>
                                <p>$ ${(producto.precio * producto.cantidadEnCarrito).toLocaleString()}</p>
                            </div>
                            <div class="seccion-agregar-quitar">
                                <div class="contenedor-botones">
                                    <button class="restar-producto">-</button>
                                    <p class="cantidad-producto">${producto.cantidadEnCarrito}</p>
                                    <button class="sumar-producto">+</button>
                                </div>
                                <button class="eliminar-producto"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    `;
    };
    mostrarProductosyPrecioTotal(innerHTML);
    obtenerYagregarEventosBtns();
    actualizarCantidadEnCarritoHeader(true);
};

//Función que obtiene los botones de los productos actuales del carrito y agrega los eventos
const obtenerYagregarEventosBtns = () => {
    const btnsSumar = document.querySelectorAll(".sumar-producto");
    const btnsRestar = document.querySelectorAll(".restar-producto");
    const btnsEliminar = document.querySelectorAll(".eliminar-producto");
    //Eventos para todos los botones de SUMAR
    btnsSumar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const productoId = parseInt(e.target.closest(".card-producto").getAttribute("data-producto-id"));
            const productoSeleccionado = carrito.find(producto => producto.identificador === productoId);
            if(productoSeleccionado.cantidadEnCarrito < 5) {
                productoSeleccionado.cantidadEnCarrito++;
                productoSeleccionado.stock--;
                guardarCarritoEnLs("Carrito",JSON.stringify(carrito));
                mostrarProductos();
            };
        });
    });
    //Eventos para todos los botones de RESTAR
    btnsRestar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const productoId = parseInt(e.target.closest(".card-producto").getAttribute("data-producto-id"));
            const productoSeleccionado = carrito.find(producto => producto.identificador === productoId);
            if(productoSeleccionado.cantidadEnCarrito > 1) {
                productoSeleccionado.cantidadEnCarrito--;
                productoSeleccionado.stock++;
                guardarCarritoEnLs("Carrito",JSON.stringify(carrito));
                mostrarProductos();
            };
        });
    })
    //Eventos para todos los botones de ELIMINAR
    btnsEliminar.forEach(boton => {
        boton.addEventListener("click", (e) => {

            const productoId = parseInt(e.target.closest(".card-producto").getAttribute("data-producto-id"));
            const indiceProductoSeleccionado = carrito.findIndex(producto => producto.identificador === productoId);
            carrito.splice(indiceProductoSeleccionado,1);
            guardarCarritoEnLs("Carrito",JSON.stringify(carrito));
            if(carrito.length === 0) {
                contenedorCarrito.innerText = "No hay productos en el carrito.";
                contenedorPrecioTotal.classList.add("ocultar");
                actualizarCantidadEnCarritoHeader(false);
            } else {
                mostrarProductos();
            }
        });
    });
};

//Funcion que guarda cosas en LocalStorage
const guardarCarritoEnLs = (clave, valor) => {
    localStorage.setItem(clave,valor);
};

//Función que recibe las cards creadas en mostrarProductos y las muestra junto a su precio total
const mostrarProductosyPrecioTotal = innerHTML => {
    contenedorCarrito.innerHTML = innerHTML;
    let precioTotal = calcularPrecioTotal();
    console.log(precioTotal);
    contenedorPrecioTotal.innerHTML = `<div class="flex">
                                            <p>PRECIO TOTAL: <span>$ ${precioTotal.toLocaleString()}</span></p>
                                            <button id="btn-comprar">Comprar</button>
                                       </div>
                                      `;
    agregarEventoBtnCompra(precioTotal);
};

//Función que calcula el precio total de los productos que hay en el carrito actualmente
const calcularPrecioTotal = () => {
    return carrito.reduce((acc,producto) => acc + (producto.precio * producto.cantidadEnCarrito), 0);
};

//Función que agrega evento al botón de compra
const agregarEventoBtnCompra = precioTotal => {
    const btnComprar = document.getElementById("btn-comprar");
    btnComprar.addEventListener("click", () => {
        alert(`Compra realizada! Gracias por confiar!\n\nPrecio total: $ ${precioTotal.toLocaleString()}`);
        resetearCarrito();
        redireccionarAInicio();
    })
};

//Función que borra todo el carrito del LS
const resetearCarrito = () => {
    localStorage.removeItem("Carrito");
}

//Función que redirecciona al inicio si el usuario toca el botón comprar
const redireccionarAInicio = () => {
    window.location.href = "../index.html";
};

//Función que actualiza la cantidad de elementos totales en el carrito del header.
//Recibe una flag por parámetro
//-Si es TRUE lo actualiza y lo muestra
//-Si es FALSE lo oculta (cuándo no hay elementos en el carrito) 
const actualizarCantidadEnCarritoHeader = (mostrar) => {
    if(mostrar) {
        cantidadEnCarritoHeader.classList.replace("ocultar", "mostrar");
        let cantidadActual= carrito.reduce((acc,producto) => producto.cantidadEnCarrito + acc, 0);
        cantidadEnCarritoHeader.innerText = cantidadActual;
    } else {
        if(cantidadEnCarritoHeader.classList.contains("mostrar")){
            cantidadEnCarritoHeader.classList.replace("mostrar","ocultar");
        }
    }
};

/*-----------------------*/
/* CÓDIGO PRINCIPAL      */
/*-----------------------*/

//-En caso de SI haber productos en el carrito del LS, los muestro
//-En caso de NO haber productos en el carrito del LS, indico
//que no hay y muestro el carrito visual del header sin nada
if(carrito.length !== 0) {
    mostrarProductos();
} else {
    contenedorCarrito.innerText = "No hay productos en el carrito.";
    contenedorPrecioTotal.classList.add("ocultar");
};