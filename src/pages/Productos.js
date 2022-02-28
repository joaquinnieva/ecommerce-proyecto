/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ProductoCards from '../components/ProductoCards';
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
            {productos?.map((info) => (
              <ProductoCards producto={info} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productos;
