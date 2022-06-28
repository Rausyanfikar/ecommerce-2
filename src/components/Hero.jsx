import React from 'react';

const Hero = () => {
  return (
    <div class="bg-gray-200 ">
      <div class="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
        <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div class="max-w-lg">
            <h1 class="text-xl font-bold tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">Scarva</h1>
            <p class="mt-4 text-gray-300 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
            <div class="mt-6">
              <a href="#" class="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
          <img class="object-cover w-full max-w-2xl rounded-md lg:h-full" src="https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" alt="sepatu" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
