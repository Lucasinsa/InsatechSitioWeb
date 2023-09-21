/*-----------------------*/
/* CLASES                */
/*-----------------------*/

// CLase para los usuarios
class Usuario {
    constructor(nombre, usuario, numero, email, contrasena){
        this.nombre = nombre;
        this.usuario = usuario;
        this.numero = parseInt(numero);
        this.email = email;
        this.contrasena = contrasena;
    }
}

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
const formulario = document.getElementById("formulario-registro");
const inputNombre = document.getElementById("nombre");
const inputUsername = document.getElementById("username");
const inputNumero = document.getElementById("numero");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const contenedorError = document.querySelector(".mostrar-error");
const error = document.querySelector(".error");

/*-----------------------*/
/* FUNCIONES             */
/*-----------------------*/

//Función que muestra en el carrito del header la cantidad actual allí
const mostrarCantidadEnCarritoHeader = () => {
    const cantidadEnCarrito = carrito.reduce((acc,producto)=> producto.cantidadEnCarrito + acc,0);
    cantidadEnCarritoHeader.innerText = cantidadEnCarrito;
};

//Función que obtiene datos ingresados en el formulario
const obtenerYevaluarDatos = () => {
    let nombreIngresado = inputNombre.value.trim();
    let userIngresado = inputUsername.value.trim();
    let numeroIngresado = inputNumero.value.trim();
    let emailIngresado = inputEmail.value.trim();
    let passwordIngresada = inputPassword.value.trim();
    evaluarDatos(nombreIngresado,userIngresado,numeroIngresado,emailIngresado,passwordIngresada);
};

//Función que evalua los datos ingresados
const evaluarDatos = (nombre, username, numero, email, password) => {
    let seMostroError = false;
    if(nombre.length < 2) {
        mostrarError("El nombre debe tener al menos dos dígitos.");
        seMostroError = true; 
    }
    if (usuarios.length !== 0) {
        for(let usuario of usuarios) {
            if (usuario.usuario === username) {
                mostrarError("El nombre de usuario ya está registrado.");
                seMostroError = true; 
                break;
            }
        }
    }
    if (!seMostroError) { 
        if (username.length < 4) {
            mostrarError("El usuario debe tener al menos 4 caracteres");
            seMostroError = true;
        } else if (numero.length < 10) {
            mostrarError("Ingrese un número válido.");
            seMostroError = true;
        } else if (!(email.includes("@") && email.includes("."))) {
            mostrarError("El email no es válido");
            seMostroError = true;
        } else if (password.length < 6) {
            mostrarError("La contraseña debe tener al menos 6 caracteres.");
            seMostroError = true;
        }
    }
    if (!seMostroError) {
        usuarios.push(new Usuario(nombre,username,numero,email,password));
        guardarEnLS("Usuarios",JSON.stringify(usuarios));
        confirmarRegistro();
        redireccionarAiniciarSesion();
    }
};

//Función que muestra los errores
const mostrarError = (mensaje) => {
    if(contenedorError.hasAttribute("hidden")){
        contenedorError.removeAttribute("hidden");
    }
    error.innerText = mensaje;
};

//Función que guarda en LS
const guardarEnLS = (clave,valor)=> {
    localStorage.setItem(clave,valor);
};

//Función que muestra el alert de confirmación
const confirmarRegistro = () => {
    Swal.fire(
        '¡Te registraste con éxito!',
        'Serás redirigido a INICIAR SESIÓN',
        'success'
      )
};

//Función que redirecciona al inicio de sesión
const redireccionarAiniciarSesion = () => {
    setTimeout(()=>{
        window.location.href = "iniciar-sesion.html";
    },2000);
};

/*-----------------------*/
/* CÓDIGO PRINCIPAL      */
/*-----------------------*/
mostrarCantidadEnCarritoHeader();

/*-----------------------*/
/* EVENTOS               */
/*-----------------------*/
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    obtenerYevaluarDatos();
});