import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditProduct() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = () => {
    console.log(params);
    const { product_id } = params;

    axios
      .get(`http://3.83.173.201:80/products/${product_id}`)
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

  return (
    <Layout>
      <div className=" w-full h-screen flex flex-col justify-center items-center">
        <div class="block w-full p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Name"
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="number"
                class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="harga"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="number"
                class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="quantity"
              />
            </div>
            <div className=" form-group mb-6 ">
              <input
                type="text"
                className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white"
                placeholder="image"
              />
            </div>
            <div class="form-group mb-6">
              <textarea
                class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="description"
              ></textarea>
            </div>

            <button
              type="submit"
              class="
          w-full
          px-6
          py-2.5
          bg-teal-400
          text-black
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          
          transition
          duration-150
          ease-in-out"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default EditProduct;
