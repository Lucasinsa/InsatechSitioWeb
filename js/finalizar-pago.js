/*-----------------------*/
/* VARIABLES GLOBALES    */
/*-----------------------*/
//Array que recupera los productos agregados al carrito de compras
const carrito = JSON.parse(localStorage.getItem("Carrito"));

//Constante que recupera el usuario en sesión
const usuarioActual = JSON.parse(localStorage.getItem("UsuarioActual"));

//Elementos del DOM a modificar
const seccionDatos = document.querySelector(".seccion-datos");
const seccionTarjeta = document.querySelector(".seccion-tarjeta");
const listaResumen = document.querySelector(".lista-resumen");
const precioTotalVisual = document.getElementById("precio-total");
const formularioTarjeta = document.getElementById("formulario-tarjeta");
const inputTarjeta = document.getElementById("numero-tarjeta");
const inputNombreTarjeta = document.getElementById("nombre-tarjeta");
const inputVigencia = document.getElementById("vigencia");
const inputVencimiento = document.getElementById("vencimiento");
const inputCvc = document.getElementById("cvc");
const contenedorError = document.querySelector(".mostrar-error");
const error = document.querySelector(".error");

//Desestructuracion del objeto usuario
const {nombre,usuario,numero,email} = usuarioActual;

//Constante para acceder 
const DateTime = luxon.DateTime;

/*-----------------------*/
/* FUNCIONES             */
/*-----------------------*/

//Función que completa la información de la seccion Resumen y Datos
const completarInformacion = () => {
    completarListaResumen();
    completarSeccionDatos();
};

//Función que completa la lista de resumen
const completarListaResumen = () => {
    let innerHTML = "";
    for(let producto of carrito) {
        let {cantidadEnCarrito,nombre,precio} = producto;
        innerHTML += `<li>${cantidadEnCarrito} X ${nombre} --- $${(precio * cantidadEnCarrito).toLocaleString()}</li>`;
    };
    listaResumen.innerHTML = innerHTML;
    let precio = carrito.reduce((acc,producto) => acc + (producto.precio * producto.cantidadEnCarrito),0);
    precioTotalVisual.textContent = `${precio.toLocaleString()}`;
};

//Función que completa la sección de datos personales
const completarSeccionDatos = () => {
    let innerHTML = ` 
                     <h2>Datos personales</h2>
                     <p>Nombre: ${nombre}</p>
                     <p>Nombre de usuario: ${usuario}</p>
                     <p>Número: ${numero}</p>
                     <p>Email: ${email}</p>
                    `;
    seccionDatos.innerHTML = innerHTML;
};

//Función que obtiene datos ingresados en el formulario
const obtenerYevaluarDatos = () => {
    let numeroTarjeta = inputTarjeta.value.trim();
    let nombreTarjeta = inputNombreTarjeta.value.trim();
    let vigenciaTarjeta = inputVigencia.value.trim() ? interpretarFecha(inputVigencia.value.trim()) : "";
    let vencimientoTarjeta = inputVencimiento.value.trim() ? interpretarFecha(inputVencimiento.value.trim()) : "";
    let cvcTarjeta = inputCvc.value.trim();
    evaluarDatos(numeroTarjeta,nombreTarjeta,vigenciaTarjeta,vencimientoTarjeta,cvcTarjeta);
};

//Función que interpreta las fechas
const interpretarFecha = fecha => {
    let array = fecha.split("-");
    let ano = parseInt(array[0]);
    let mes = parseInt(array[1]);
    let dia = parseInt(array[2]);
    let fechaInterpretada = DateTime.fromObject({year:ano,month:mes,day:dia},{zone: 'America/Buenos_Aires'});
    return parseInt(fechaInterpretada.ts);
};

//Función que evalua los datos ingresados
const evaluarDatos = (numero, nombre, vigencia, vencimiento, cvc) => {
    let seMostroError = false;
    if(cvc.length === 0) {
        mostrarError("El cvc está vacio.");
        seMostroError = true;
    } else if(cvc.length > 4) {
        mostrarError("El cvc debe tener menos de 5 dígitos.");
        seMostroError = true;
    }
    if(vencimiento === ""|| vigencia === "") {
        mostrarError("Las fechas están incompletas.");
        seMostroError = true;
    } else if(vencimiento <= vigencia) {
        mostrarError("La fecha de vecimiento no puede ser menor o igual a la de vigencia.");
        seMostroError = true;
    }
    if(nombre.length < 1) {
        mostrarError("El nombre debe tener al menos 2 dígitos.");
        seMostroError = true;
    }
    if(numero.length < 14) {
        mostrarError("La tarjeta debe tener al menos 14 dígitos.");
        seMostroError = true;
    }
    if(!seMostroError) {
        ocultarError();
        desplegarAlerta();
    }
};

//Función que muestra los errores
const mostrarError = mensaje => {
    if(contenedorError.hasAttribute("hidden")){
        contenedorError.removeAttribute("hidden");
    }
    error.innerText = mensaje;
};

//Función que elimina el error
const ocultarError = () => {
    contenedorError.setAttribute("hidden", "");
};

//Función que muestra la alerta
const desplegarAlerta = () => {
    Swal.fire({
        title: 'Confirmar compra?',
        text: "No podrás volver atrás!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, realizar compra!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Compra realizada!',
            `Recibirás un email a : 
            ${email} 
            en unos segundos.
            Redirigiendo...`,
            'success',
          )
          setTimeout(()=> {
            borrarKeyLS("Carrito");
            borrarKeyLS("UsuarioActual");
            window.location.href = "../index.html";
          },5000)
        }
      })
};

//Función que elimina una key del LS
const borrarKeyLS = (key) => {
    localStorage.removeItem(key);
};

/*-----------------------*/
/* CÓDIGO PRINCIPAL      */
/*-----------------------*/
completarInformacion();

/*-----------------------*/
/* EVENTOS               */
/*-----------------------*/
formularioTarjeta.addEventListener("submit",(e)=>{
    e.preventDefault();
    obtenerYevaluarDatos();
});