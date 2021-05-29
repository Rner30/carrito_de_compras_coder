const carro = new carritoDeCompras()
const carrito = document.getElementById("carrito")


cargarEventos()

function cargarEventos() {
    
    $('#productos').click((e)=>{
        carro.comprarProducto(e)
    })
     
    carrito.onclick = (e) => {
        carro.eliminarProducto(e)
    }
    
    $('#vaciar-todo').click((e)=>{
        carro.vaciarCarrito(e)
    })
    
    document.onload = carro.leerLocalStorage()
    
    $('#procesarCompraBtn').click((e)=>{
        carro.procesarPedido(e)
    })
    
    
}