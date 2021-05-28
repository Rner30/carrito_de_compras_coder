const gondola = document.getElementById("productos")

//------CREAR LOS PRODUCTOS------- 
class Producto{
  constructor(id,nombre,precio,imagen) {
    this.id = parseInt(id)
    this.nombre = nombre.toLowerCase()
    this.precio = parseFloat(precio)
    this.imagen = imagen.toLowerCase()
    this.hablar = () => console.log("Hola soy "+ this.nombre)
  }

}
let productos = []

const cebolla = new Producto(1,"cebolla",2.99,"img/cebolla.svg")
const frutillas = new Producto(2,"frutillas",4.99,"img/fresa.svg")
const lechuga = new Producto(3,"lechuga",2.30,"img/lechuga.svg")
const limon = new Producto(4,"limon",4.10,"img/limon.svg")
const papas = new Producto(5,"papas",3.80,"img/patata.svg")
const banana = new Producto(6,"banana",3.95,"img/platanos.svg")
const sandia = new Producto(7,"sandia",12,"img/sandia.svg")
const zanahoria = new Producto(9,"zanahoria",5,"img/zanahoria.svg")

productos.push(cebolla,frutillas,lechuga,limon,papas,banana,sandia,zanahoria)

const enJSON = JSON.stringify(productos)


//----INSERTAR LOS PRODUCTOS EN EL HTML-----
for (const producto of productos) {
  let container = document.createElement('div')
  container.setAttribute("class", "col-md-3");
  container.innerHTML = `
    <div class="item shadow mb-4">
        <h3 class="item-title">${producto.nombre}</h3>
        <img class="item-image" src="${producto.imagen}">
        <div class="item-details">
          <span>USD <h4 class="precio">${producto.precio}</h4></span>
          <a href="#" class="item-button btn btn-primary agregar-carrito " itemid="${producto.id}">AÑADIR AL CARRITO</a>
          
        </div>
  </div>
  `
  gondola.appendChild(container)
}











