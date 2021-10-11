export default function noDuplicado(state, producto) {
  let productoFiltrado = state.find((item) => item.id === producto.id);
  
  if (!productoFiltrado) {
    return producto
  }
}
