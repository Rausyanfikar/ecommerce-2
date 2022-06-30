import React from 'react';
import { BsCart } from 'react-icons/bs';

function Card(props) {
  return (
    <>
      <div className="container grow p-7   flex flex-col bg-white max-w-sm mx-auto rounded-md  text-black border-2 shadow-lg border-black">
        <div className="cursor-pointer h-full flex flex-col justify-between " onClick={props.onClickItem}>
          <img className="max-w-full  h-auto" width="500" height="750" src={props.image} alt={props.image} />
          <div className="">
            <p className="mt-2">{props.title}</p>
            <div className="text-center text-lg font-semibold  ">
              <p className="">{props.product}</p>
              <p className="">Rp. {props.price}</p>
            </div>
          </div>
        </div>
        <button className="bg-teal-400 justify-center items-center h-16 lg:h-10 hover:bg-teal-500 rounded-md  flex flex-col lg:flex-row mt-2 ">
          <p className="text-lg font-semibold mr-2">Add to Cart</p>

          <p className="text-xl">
            <BsCart />
          </p>
        </button>
      </div>
    </>
  );
}

function CardLoading(props) {
  return (
    <>
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    </>
  );
}

export { Card, CardLoading };
