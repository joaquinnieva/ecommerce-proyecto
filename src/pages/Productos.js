/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../styles/Productos.css';

function Productos() {
  const productos = useSelector((state) => state.shop.products);
  const history = useHistory();

  useEffect(() => {
    if (!productos) {
      history.push('/home');
    }
  }, []);

  return (
    <div className="cont-page-prod">
      {/* {cargando && <Loader />} */}
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
