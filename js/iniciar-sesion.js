/*-----------------------*/
/* VARIABLES GLOBALES    */
/*-----------------------*/
//Array que recupera los productos agregados al carrito de compras
const carrito = JSON.parse(localStorage.getItem("Carrito"));

//Array que recupera los usuarios de LS.
//-En caso de no haber, es un array vacío
const usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];

//Elementos del DOM a modificar
const cantidadEnCarritoHeader = document.getElementById("cantidad-en-carrito");
const carritoHeader = document.querySelector(".carrito");
const formulario = document.getElementById("formulario-iniciar-sesion");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const inputRecordarme = document.getElementById("recordarme");
const contenedorError = document.querySelector(".mostrar-error");
const error = document.querySelector(".error");

/*-----------------------*/
/* FUNCIONES             */
/*-----------------------*/

//Función que muestra la cantidad de objetos en el carrito, en el header
const mostrarCantidadEnCarritoHeader = () => {
    const cantidadEnCarrito = carrito.reduce((acc,producto)=> producto.cantidadEnCarrito + acc,0);
    cantidadEnCarritoHeader.innerText = cantidadEnCarrito;
};

//Función que muestra los errores
const mostrarError = (mensaje) => {
    if(contenedorError.hasAttribute("hidden")){
        contenedorError.removeAttribute("hidden");
    }
    error.innerText = mensaje;
};

//Función que obtiene valores ingresados y verifica que hacer
obtenerYverificarFormulario = () => {
    let usuarioIngresado = inputUsername.value.trim();
    let passwordIngresada = inputPassword.value.trim();

    if((usuarioIngresado != "" && passwordIngresada != "") && (usuarios.length != 0)) {
        for(let usuario of usuarios) {
            if(usuario.usuario === usuarioIngresado && usuario.contrasena === passwordIngresada) {
                guardarEnLS("UsuarioActual",JSON.stringify(usuario));
                window.location.href = "finalizar-pago.html";
            }
        }
        mostrarError("Usuario o contraseña incorrecta");
    } else {
        mostrarError("Los campos están vacíos");
    }
};

//Función que guarda en LS
const guardarEnLS = (clave,valor)=> {
    localStorage.setItem(clave,valor);
};

/*-----------------------*/
/* CÓDIGO PRINCIPAL      */
/*-----------------------*/
mostrarCantidadEnCarritoHeader();

/*-----------------------*/
/* EVENTOS               */
/*-----------------------*/
carritoHeader.addEventListener("click", ()=>{
    window.location.href = "seccion-carrito-de-compras.html";
});

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    obtenerYverificarFormulario();
});