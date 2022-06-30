import React from 'react';
import Layout from '../components/Layout';
import { BsCart } from 'react-icons/bs';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, CardLoading } from '../components/Card';
import { useParams } from 'react-router-dom';

function Detail(props) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = () => {
    console.log(params);
    const { detail_id } = params;

    axios
      .get(`http://3.83.173.201:80/products/${detail_id}`)
      .then((response) => {
        // handle success

        console.log(response);
        const product = response.data.data;
        setProduct(product);
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
        <div className="w-full h-screen flex justify-center items-center  ">
          <div className=" flex flex-col md:flex-row w-full md:w-[80vw] lg:w-[90vw] md:border-black md:border md:shadow-xl md:p-20">
            <div className="flex justify-center align-center w-full ">
              <img src={product.image} alt="gambar" />
            </div>
            <div className="text-lg ml-10">
              <p className="text-2xl mt-3 font-semibold">{product.name}</p>
              <p className="text-xl font-semibold">Rp. {product.price}</p>
              <p>{product.description}</p>

              <button className="bg-teal-400 justify-center items-center h-16 lg:h-10 hover:bg-teal-500 rounded-md  flex flex-col lg:flex-row mt-2 p-3 ">
                <p className="text-lg font-semibold mr-2">Add to Chart</p>

                <p className="text-xl">
                  <BsCart />
                </p>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Detail;
