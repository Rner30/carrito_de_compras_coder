//------CREAR LOS PRODUCTOS-------
class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = parseInt(id);
    this.nombre = nombre.toLowerCase();
    this.precio = parseFloat(precio);
    this.imagen = imagen.toLowerCase();
  }
}
let productos = [];

const cebolla = new Producto(1, "cebolla", 2.9, "img/cebolla.svg");
const frutillas = new Producto(2, "frutillas", 4.9, "img/fresa.svg");
const lechuga = new Producto(3, "lechuga", 2.3, "img/lechuga.svg");
const limon = new Producto(4, "limon", 4.1, "img/limon.svg");
const papas = new Producto(5, "papas", 3.8, "img/patata.svg");
const banana = new Producto(6, "banana", 3.5, "img/platanos.svg");
const sandia = new Producto(7, "sandia", 12, "img/sandia.svg");
const zanahoria = new Producto(8, "zanahoria", 5, "img/zanahoria.svg");
const brocoli = new Producto(9, "Brocoli", 2, "img/brocoli.svg");
const espinaca = new Producto(10, "Espinaca", 2.7, "img/espinacas.svg");
const choclo = new Producto(11, "Choclo", 4.2, "img/maiz.svg");
const berenjena = new Producto(12, "berenjena", 6.8, "img/berenjena.svg");

productos.push(
  cebolla,
  frutillas,
  lechuga,
  limon,
  papas,
  banana,
  sandia,
  zanahoria,
  brocoli,
  espinaca,
  choclo,
  berenjena
);

//----INSERTAR LOS PRODUCTOS EN EL HTML-----

for (const producto of productos) {
  $("#productos").append(`
    <div class="col-lg-2">
      <div class="item shadow mb-4">
        <h3 class="item-title">${producto.nombre}</h3>
        <img class="item-image" src="${producto.imagen}">
        <div class="item-details">
          <span>USD <h4 class="precio">${producto.precio}</h4></span>
          <a href="#" class="item-button btn btn-sm btn-dark agregar-carrito " itemid="${producto.id}">AÑADIR AL CARRITO</a>   
        </div>
      </div>
    </div>`);
}
