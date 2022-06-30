import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import { Card, CardLoading } from '../components/Card';
import Hero from '../components/Hero';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePages = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = () => {
    axios
      .get(`http://3.83.173.201:80/products`)
      .then((response) => {
        // handle success

        const results = response.data.data;
        setProduct(results);
        console.log(results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <CardLoading />;
  } else {
    return (
      <Layout>
        <Hero />
        <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-4 m-2 gap-3">
          {product.map((item) => (
            <Card key={item.id} title={item.name} image={item.image} price={item.price} product={item.name} onClickItem={() => navigate(`detail/${item.id}`)} />
          ))}
        </div>
      </Layout>
    );
  }
};
export default HomePages;
