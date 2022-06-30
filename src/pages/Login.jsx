import React from 'react';
import Layout from '../components/Layout';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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

        localStorage.setItem('token', response.data.data.token);
        console.log(response.data.data.token);
        swal('Good job!', 'Succecss Login', 'success');
        navigate('/', { replace: true });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <h1 className="font-roboto font-semibold text-3xl absolute top-64 md:top-40 left-[42%] md:left-[45%]">Scarva</h1>
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
