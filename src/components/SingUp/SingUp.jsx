import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
 /*  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    if (password === confirmPassword) {
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
    } else {
      alert("Passwords do not match!");
    }
  }; */

  const navigate = useNavigate();
  const handelLogin = ()=>{
    navigate("/");
  }
  const handelLogPage =()=>{
    navigate("/logout");
  
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form >
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
            
            />
          </div>

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

          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-lg"
              
            />
          </div>

          <button
            type="submit"
            onClick={handelLogin}  className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <button onClick={handelLogPage} className="text-blue-500 hover:underline">
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
