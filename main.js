alert("Bienvenido a Wally-Padel");

//Clases
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

//array de objetos
const catalogoDisponible = [
  new Producto(1, "paleta siux carbon", 75000 ),
  new Producto(2, "paleta magnus carbon", 150000 ),
  new Producto(3, "paleta royal", 64000 ),
  new Producto(4, "paleta steel", 95000 ),
];

alert("Catalogo Completo:");
    for (const mostrarCatalogo of catalogoDisponible) {
     alert(mostrarCatalogo.nombre);
}

const peletaFiltro = parseInt(
  prompt("Por favor ingrese el tipo de paleta a filtrar o 0 para continuar")
);

if (peletaFiltro != 0) {
  const filtro = catalogoDisponible.filter((producto) => producto.nombre.includes("carbon"));
  for (const productosFiltrados of filtro) {
    alert(productosFiltrados.nombre);
  }
} else {
  alert("No se filtrara por tipo de paleta");
}

//Carrito
const carrito = [];

do {
  elijaproducto();
  const productoSeleccionado = catalogoDisponible.find((p) => p.id == producto1);
  carrito.push(productoSeleccionado);
} while (producto1 != 0);

//borro el último registro vacio
carrito.pop();

  alert("Gracias vuelva cuando quiera a Wally-Padel")


alert("Carrito Seleccionado:");
for (const mostrarCarrito of carrito) {
  alert(mostrarCarrito.nombre);
}

//Suma
const Total = carrito.reduce((accum, prod) => {
  return accum + prod.precio;
}, 0);

alert("Total:");
alert(String(Total));

montoTotal(Total);


// Funcion
function elijaproducto() {
  producto1 =
    prompt(`Ingrese el número del producto que desea comprar o 0 para terminar: 
1 - paleta siux carbon;
2 - paleta magnus carbon;
3 - paleta royal;
4 - paleta steel;
`);
  return producto1;
}