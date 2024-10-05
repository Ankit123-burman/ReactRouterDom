import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
 /*  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  }; */
  
  const navigate = useNavigate();
  const handelLogin = () =>{
    navigate('/')
  }
  const  handelRegister = () =>{
    navigate('/signup')
  }


  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form >
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-lg"
             
            />
          </div>

          <button
            type="submit"
            onClick={handelLogin } className="w-full  bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <button className="text-blue-500 hover:underline " onClick={ handelRegister }>
            Don't have an account? Sign up 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
