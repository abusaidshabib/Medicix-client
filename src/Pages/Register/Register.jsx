import React, { useState } from 'react';
import image from "../../assets/register.jpg"
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/auth/authSlice';
import useTitle from '../../Hooks/UseTitle/UseTitle';

const Register = () => {

  useTitle("Register");

  const [status, setStatus] = useState(true);
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  function handleCheck(confirm){
    if(password === confirm){
      setStatus(false);
    }
    else{
      setStatus(true)
    }
  }

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(createUser({email, password}))
  }

  return (
    <div
      className="flex items-center justify-center bg-primary-400 bg-blend-multiply"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="flex items-center justify-center text-center bg-tra w-2/5 h-3/4 border-2 border-neural-500 rounded-xl back-trans p-32 backdrop-blur ">
        <form onSubmit={handleRegister}>
          <h1 className="text-4xl uppercase text-neural-300 text-center font-semibold tracking-wider">
            Register Now
          </h1>
          <div className="pt-8">
            <input
              className="w-full h-10 border-b border-neural-400 outline-none text-lg back-trans text-neural-300 placeholder:text-neural-300"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="py-5">
            <input
              className="w-full h-10 border-b border-neural-400 outline-none text-lg back-trans text-neural-300 placeholder:text-neural-300"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              onBlur={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full h-10 border-b border-neural-400 outline-none text-lg back-trans text-neural-300 placeholder:text-neural-300"
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="Confirm Your Password"
              onChange={(e) => handleCheck(e.target.value)}
            />

            {status && (
              <p className="text-warning">
                Please check your password and confirm password. Otherwise
                button will disabled
              </p>
            )}
          </div>

          <div className="py-3"></div>

          <input
            className="bg-accent-600 disabled:bg-primary-600 w-full py-3 rounded-sm text-neural-400 uppercase text-lg tracking-wider font-semibold hover:bg-primary-600"
            type="submit"
            value="Login"
            disabled={status}
          />

          <div className='py-3'></div>

          <Link className="flex justify-between bg-primary-600 w-full py-3 px-5 items-center rounded-sm text-neural-400 uppercase text-lg tracking-wider font-semibold">
            <FcGoogle className="text-2xl" />
            <span>Sign in with google</span>
          </Link>

          <p className="py-5 text-neural-400 text-lg">
            Already have an account
            <Link to="/login" className="text-accent-400 underline">
              {" "}
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;