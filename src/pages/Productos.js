import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { getProducts } from '../functions/apiServices';
import '../styles/Productos.css';

function Productos() {
  const [cargando, setCargando] = useState(false);
  const [productos, setProductos] = useState([]);
  // const mandarAlCarrito = (producto) => {
  //   const productoNoDuplicado = noDuplicado(carrito, producto);
  //   if (productoNoDuplicado) {
  //     agregarAlCarrito(producto);
  //   }
  //   const inCart = carrito.find((productos) => productos.id === producto.id);
  //   if (!productoNoDuplicado) {
  //     if (inCart.amount < 10) {
  //       sumarProducto(producto);
  //     }
  //   }
  // };

  const effProducts = async () => {
    setCargando(true);
    const res = await getProducts();
    if (res) {
      setProductos(res);
      setCargando(false);
    } else {
      setCargando(false);
    }
  };
  console.log(cargando);

  useEffect(() => {
    effProducts();
  }, []);

  return (
    <div className="cont-page-prod">
      {cargando && <Loader />}
      <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto">
          <div className="container-productos">
            {productos?.map((producto) => (
              <div className="producto" key={producto.id}>
                <Link to={'/product/' + producto.id} className="producto-header" href="/">
                  <img alt="ecommerce" className="producto-img" src={producto.image} />
                </Link>
                <div className="producto-textos">
                  <div className="producto-categoria">{producto.category.toUpperCase()}</div>
                  <Link to={'/product/' + producto.id} className="producto-title">
                    {producto.title}
                  </Link>
                  <p className="producto-precio">${producto.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productos;
