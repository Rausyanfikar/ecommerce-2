import React from 'react';
import { Link } from 'react-router-dom';

function Footer(porps) {
  return (
    <footer class="bg-gray-200 text-center lg:text-left">
      <div class="container p-6">
        <div class="">
          <p class="flex justify-center items-center">
            <span class="mr-4 font-roboto font-semibold">Register for free</span>
            <button
              type="button"
              class="inline-block px-6 py-2 border-2 border-black text-black font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Sign up!
            </button>
          </p>
        </div>
      </div>

      <div class="text-black font-bold text-lg text-center p-4 bg-teal-400">
        © 2022 Copyright:
        <Link to="/" className="text-lg font-roboto text-black font-bold">
          Scarva
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
