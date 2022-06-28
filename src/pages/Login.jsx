import React from 'react';
import Layout from '../components/Layout';

function Login() {
  return (
    <Layout>
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <form className="flex flex-col justify-center text-black border w-full md:w-[45vw] lg:w-[40vw]  p-10 h-80 bg-teal-400 rounded-lg">
          <div className="text-xl font-semibold mb-3 pl-3">Login</div>
          <input className="text-lg font-bold m-3 border p-3" type="text" placeholder="Email address" />
          <input className="text-lg font-bold m-3 border p-3" type="password" placeholder="Password" />
          <button className="bg-white rounded-lg p-3 w-28 mx-auto mb-5 font-bold">Login</button>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
