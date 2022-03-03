/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ProductoCards from '../components/ProductoCards';
import '../styles/Productos.css';

function Productos() {
  const productos = useSelector((state) => state.shop.products);
  const [elegido, setElegido] = useState(productos);
  const [selectedCategory, setSelectedCategory] = useState('Sin categorizar');
  const [selectedPrice, setSelectedPrice] = useState('asc');
  const history = useHistory();
  const categories = [
    { name: 'Sin categorizar', value: 'Sin categorizar' },
    { name: 'Electronicos', value: 'electronics' },
    { name: 'Bijouterie', value: 'jewelery' },
    { name: 'Ropa de hombre', value: "men's clothing" },
    { name: 'Ropa de mujer', value: "women's clothing" },
  ];
  const priceSort = [
    { name: 'Menor a mayor', value: 'asc' },
    { name: 'Mayor a menor', value: 'desc' },
  ];

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handlePrice = (e) => {
    setSelectedPrice(e.target.value);
  };
  const handleSubmit = (e) => {
    filtrando(selectedCategory, selectedPrice);
  };
  const filtrando = (category, price) => {
    if (!category || category === 'Sin categorizar') {
      setElegido(productos);
    } else {
      const filtrado = productos.filter((item) => item.category === selectedCategory);
      if (price) {
        const filtrado2 = filtrado.sort((a, b) => {
          if (selectedPrice === 'asc') {
            return a.price - b.price;
          } else if (selectedPrice === 'desc') {
            return b.price - a.price;
          }
          return a.price - b.price;
        });
        return setElegido(filtrado2);
      } else {
        return setElegido(filtrado);
      }
    }
  };

  useEffect(() => {
    if (!productos) {
      history.push('/home');
    }
  }, [elegido]);
  return (
    <div className="cont-page-prod">
      <form className="form-container">
        <select className="form-filter" name="select" defaultValue={selectedCategory} onChange={handleCategory}>
          {categories.map((category) => (
            <option key={category.name} value={category.value}>
              {category.name}
            </option>
          ))}
        </select>
        <select className="form-filter" name="select" defaultValue={selectedCategory} onChange={handlePrice}>
          {priceSort.map((sort) => (
            <option key={sort.name} value={sort.value}>
              {sort.name}
            </option>
          ))}
        </select>
        <button className="form-button" type="button" onClick={handleSubmit}>
          Filtrar
        </button>
      </form>
      <section className="text-gray-600 body-font">
        <div className="px-5 py-24 mx-auto">
          <div className="container-productos">
            {elegido?.map((info) => (
              <ProductoCards producto={info} key={info.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productos;
