import React from 'react';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#ED7474] shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="container-fluid">
          <Link to="/" className="text-xl text-black font-bold">
            Scarva
          </Link>
        </div>
        <ul className="ml-auto flex flex-row space-x-4 text-xl font-bold ">
          <li className="text-2xl font-bold ">
            <BsCart />
          </li>
          <li>
            <div>Register</div>
          </li>
          <li>
            <div>Login</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
