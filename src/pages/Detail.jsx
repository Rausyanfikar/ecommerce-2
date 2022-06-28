import React from 'react';
import Layout from '../components/Layout';
import { BsCart } from 'react-icons/bs';

function Detail() {
  return (
    <Layout>
      <div className="w-full h-screen flex justify-center items-center">
        <div className=" flex flex-col md:flex-row w-full md:w-[80vw] lg:w-[60vw]">
          <div className="flex justify-center align-center w-full ">
            <img src="https://image.tmdb.org/t/p/w500/fVf4YHHkRfo1uuljpWBViEGmaUQ.jpg" alt="gambar" />
          </div>
          <div className="text-lg ml-10">
            <p className="text-2xl mt-3 font-semibold">Nike Air</p>
            <p className="text-xl font-semibold">Rp.5000.000</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eaque quasi id iste, quaerat voluptates dolore laboriosam, repudiandae asperiores alias officiis ducimus natus at cum! Consectetur illum tempore rem dolorum?
            </p>

            <button className="bg-[#ED7474] justify-center items-center h-16 lg:h-10 hover:bg-pink-900 rounded-md  flex flex-col lg:flex-row mt-2 p-3 ">
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

export default Detail;
