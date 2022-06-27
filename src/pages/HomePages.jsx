import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import { Card, CardLoading } from '../components/Card';

const HomePages = () => {
  const state = {
    products: [
      {
        id: 1,
        img: 'https://image.tmdb.org/t/p/w500/rkpLvPDe0ZE62buUS32exdNr7zD.jpg',
        name: 'Vans',
        price: 5000,
      },
      {
        id: 2,
        img: 'https://image.tmdb.org/t/p/w500/rkpLvPDe0ZE62buUS32exdNr7zD.jpg',
        name: 'Yeezy',
        price: 2000,
      },
      {
        id: 3,
        img: 'https://image.tmdb.org/t/p/w500/rkpLvPDe0ZE62buUS32exdNr7zD.jpg',
        name: 'Air Jordan',
        price: 10.0,
      },
      {
        id: 4,
        img: 'https://image.tmdb.org/t/p/w500/rkpLvPDe0ZE62buUS32exdNr7zD.jpg',
        name: 'sepatu',
        price: 10.0,
      },
      {
        id: 5,
        img: 'https://image.tmdb.org/t/p/w500/rkpLvPDe0ZE62buUS32exdNr7zD.jpg',
        name: 'sepatu',
        price: 10.0,
      },
      {
        id: 6,
        img: 'https://image.tmdb.org/t/p/w500/rkpLvPDe0ZE62buUS32exdNr7zD.jpg',
        name: 'sepatu',
        price: 10.0,
      },
      {
        id: 7,
        img: 'https://image.tmdb.org/t/p/w500/rkpLvPDe0ZE62buUS32exdNr7zD.jpg',
        name: 'sepatu',
        price: 10.0,
      },
      {
        id: 8,
        img: 'https://image.tmdb.org/t/p/w500/rkpLvPDe0ZE62buUS32exdNr7zD.jpg',
        name: 'sepatu',
        price: 10.0,
      },
    ],
  };

  //   if (loading) {
  //     return <CardLoading />;
  //   } else {
  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-4 lg:grid-cols-4 m-2 gap-3">
        {state.products.map((item) => (
          <Card key={item.id} title={item.title} image={item.img} price={item.price} product={item.name} />
        ))}
      </div>
    </Layout>
  );
};
export default HomePages;
