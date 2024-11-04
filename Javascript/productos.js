// Contenedor de productos
const contenedorProductos = document.querySelector(".products");

// Cargar productos del localStorage
const productosGuardados = JSON.parse(localStorage.getItem("productos")) || [];

// Función para crear la tarjeta del producto
function crearTarjetaProducto(producto) {
  const tarjeta = document.createElement("a");
  tarjeta.href = `detalledelproducto.html?id=${producto.id}`;
  tarjeta.innerHTML = `
    <div class="product">
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h5>${producto.nombre}</h5>
      <p>Stock: ${producto.stock}</p>
    </div>
  `;
  contenedorProductos.appendChild(tarjeta);
}

// Renderizar todos los productos guardados
productosGuardados.forEach(crearTarjetaProducto);
