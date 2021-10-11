export default function sumarProductos(state) {
  const totalProductos = state.reduce((prev, next) => prev + next.amount, 0);

  return totalProductos;
}
