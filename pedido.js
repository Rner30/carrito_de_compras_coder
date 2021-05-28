const carro = new carritoDeCompras()
const carrito = document.getElementById("carrito")
const productosListados = document.getElementById("productos")
const vaciarCarritoBtn = document.getElementById("vaciar-todo")
const procesarPedidoBtn = document.getElementById("procesarCompraBtn")


cargarEventos()

function cargarEventos() {
    productosListados.onclick = (e) =>{
        carro.comprarProducto(e)
    }
    carrito.onclick = (e) => {
        carro.eliminarProducto(e)
    }
    
    $('#vaciar-todo').click((e)=>{
        carro.vaciarCarrito(e)
    })
    
    $(document).ready(carro.leerLocalStorage())
    
    procesarPedidoBtn.onclick = (e) =>{
        carro.procesarPedido(e)
    }
    
}