import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://3.83.173.201:80/users`, {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        // handle success
        console.log(response);
        swal("Good job!", "Succecss Sign Up", "success");
        navigate("/", { replace: true });
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
          <div className="text-xl font-semibold mb-3">Register</div>
          <div className="mb-4">
            <label className="block mb-1"></label>
            <input type="text" className="w-full form-input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="mb-4">
            <label className="block mb-1"></label>
            <input type="email" className="w-full form-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block mb-1"></label>
            <input type="password" className="w-full form-input" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="bg-white rounded-lg p-3 w-28 mx-auto mb-5 font-bold" type="submit">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
