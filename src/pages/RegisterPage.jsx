import React from "react";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-4xl mx-auto lg:shadow-2xl ">
      {/* Left Side - Welcome */}
      <div
        className="hidden lg:flex relative w-1/2 bg-cover bg-center items-center justify-center p-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        {/* Black overlay with gradient */}
        <div className="absolute inset-0  bg-gradient-to-b from-black/60 to-black/30 z-0"></div>

        {/* Content above the overlay */}
        <div className="text-center z-10 text-white space-y-6">
          <h1 className="text-2xl font-bold">Already Have an Account?</h1>
          <Link
            type="button"
            className="px-8 py-2 border border-white text-white rounded-full hover:bg-amber-600 transition"
         to={'/login'}
         >
            Login
          </Link>

          {/* Social Icons */}
          {/* <div className="flex justify-center gap-4 mt-8">
            <button className="bg-white p-2 rounded-full text-blue-500">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="bg-white p-2 rounded-full text-red-500">
              <i className="fab fa-google"></i>
            </button>
            <button className="bg-white p-2 rounded-full text-blue-800">
              <i className="fab fa-facebook-f"></i>
            </button>
          </div> */}
        </div>
      </div>

      {/* Right Side - Register */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-10 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

          <form className="space-y-2">
            <InputField label="Full Name" name="firstName" />
            <InputField label="Email" name="email" />
            <InputField label="Password" name="password" />
           

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" id="terms" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to all Terms & Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-800 text-white py-3 rounded-full hover:bg-amber-600 transition"
            >
              Sign Up
            </button>
            <p>Already have a account? <Link className="text-amber-700 font-semibold " to={'/login'}>Login</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
