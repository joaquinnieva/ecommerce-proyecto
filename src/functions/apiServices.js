import axios from 'axios';

export const getProducts = async (id) => {
  if (id) {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  } else {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    return res.data;
  }
};

export const getCategorie = async (category) => {
  const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
  return res.data;
};
