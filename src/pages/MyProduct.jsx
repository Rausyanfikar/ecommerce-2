import { useState, useEffect } from 'react';
import axios from 'axios';

function MyProduct() {
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    axios
      .get(`http://3.83.173.201:80/products/me`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((response) => {
        // handle success

        const results = response.data.data;
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return <div>MyProduct</div>;
}

export default MyProduct;
