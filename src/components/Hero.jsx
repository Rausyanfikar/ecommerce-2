import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div class="bg-gray-200 ">
      <div class="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
        <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div class="max-w-lg">
            <h1 class="text-xl font-roboto font-bold tracking-wide  text-gray-800  lg:text-4xl">Scarva</h1>
            <p class="mt-4  text-gray-600">Scarva merupakan platform jual dan beli sepatu terbaik dan terpercaya di indonesia. Kami menjamin keaslian semua Sneakers yang anda beli atau uang anda kembali.</p>
            <div class="mt-6">
              <Link to="/testimoni" className="text-lg  text-gray-600  inline-block px-3 py-2  text-center  transition-colors duration-200 transform bg-teal-400 rounded-md">
                Testimoni
              </Link>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
          <img class="object-cover w-full max-w-2xl rounded-md lg:h-full" src="https://s0.bukalapak.com/uploads/content_attachment/fb91fb2b037ee71dacef78b5/w-740/puma-thunder-spectra-burgundy-black-release-1.jpg" alt="sepatu" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
