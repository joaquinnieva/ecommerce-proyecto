export default function obtenerTotal(state) {
  const totalPrice = state.map( producto => producto.price * producto.amount);

  const total = totalPrice.reduce(
    (prev, next) => prev + next,
    0
  );
  
  return total
  
}
