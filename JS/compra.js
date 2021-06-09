const compra = new carritoDeCompras();
const carrito = document.getElementById("carrito");
const realizarCompraBtn = document.getElementById("procesar-compra");
const cliente = document.getElementById("nombreYApellido");
const correo = document.getElementById("email");

cargarEventos();
function cargarEventos() {
  //CARGAR LOCALSTORAGE

  document.onload = compra.leerLocalStorageCompra();

  carrito.onclick = (e) => {
    compra.eliminarProducto(e);
  };

  compra.calcularTotal();

  realizarCompraBtn.onclick = procesarCompra;

  carrito.onchange = (e) => {
    compra.obtenerEvento(e);
  };

  carrito.onkeyup = (e) => {
    compra.obtenerEvento(e);
  };
}

//--VOLVER AL INDEX SI YA SE REALIZO LA COMPRA O NO HAY PRODUCTOS
function procesarCompra(e) {
  e.preventDefault();

  if (compra.obtenerProductosLocalStorage().length === 0) {
    alertify.alert("Carrito", "No hay ningun producto para realizar la compra");
    window.location = "index.html";
  }
  if (correo.value !== "" && cliente.value !== "") {
    alertify.alert(
      "COMPLETADO",
      "Compra completada!, Se envio su comprobante al Email"
    );
    setTimeout(function () {
      localStorage.clear("productos");
      window.location = "index.html";
    }, 3000);
  } else {
    alertify.alert("Carrito", "COMPLETE TODOS LOS CAMPOS");
  }
}
