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
    
    $('.title-carrito').fadeIn(2500)
    
    const URLGET = "https://jsonplaceholder.typicode.com/users"
    $('#btn1').click(()=>{
        $.get(URLGET,function(respuesta,estado){
            if (estado === "success" ) {
                let misDatos = respuesta
                for (const dato of misDatos) {
                    $("#llamadaAJAX").prepend(`
                        <div class="ajax">
                            <h6>${dato.username}</h6>
                            <h6>${dato.email}</h6>
                        </div>
                    `)
                }     
            }
        })
    })
    
}