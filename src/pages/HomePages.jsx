import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import { Card, CardLoading } from '../components/Card';
import Hero from '../components/Hero';
import axios from 'axios';

const HomePages = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProduct = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d06c4019966aa719f29e61a7c4ad76a8&language=en-US&page=1`)
      .then((response) => {
        // handle success

        const { results } = response.data;
        setProduct(results);
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
          {state.products.map((item) => (
            <Card key={item.id} title={item.title} image={item.img} price={item.price} product={item.name} />
          ))}
        </div>
      </Layout>
    );
  }
};
export default HomePages;
