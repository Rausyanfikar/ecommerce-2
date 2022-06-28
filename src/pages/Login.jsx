import React from 'react';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://3.83.173.201:80/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <form className="flex flex-col justify-center text-black border w-full md:w-[45vw] lg:w-[40vw]  p-10 h-80 bg-teal-400 rounded-lg " onSubmit={(e) => handleSubmit(e)}>
          <div className="text-xl font-semibold mb-3 pl-3">Login</div>
          <input className="text-lg font-bold m-3 border p-3" type="email" id="email" value={email} placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
          <input className="text-lg font-bold m-3 border p-3" type="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-white rounded-lg p-3 w-28 mx-auto mb-5 font-bold" type="submit">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
