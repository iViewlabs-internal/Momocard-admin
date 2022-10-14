import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import home from './home.css'

export const Home = () => {
  function login() {
    const username = document.getElementById("username").value;
    username.style.border="none";
    const password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
      setTimeout(() => {
        window.location.href = "/Dashboard";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
      }, 3000);
      toast.success(' Login Succesfull', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    }
    else {
      toast.error('Incorrect credentials', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      setTimeout(() => {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
      }, 2000);
    }

  }


  return (
    <>


      <p className='mx-5 my-2'>Back to MOMO Merchants</p>
      <a href="#" className='mx-5 '>Home</a>

      <div className='container div'>

        <img src={require("../../images/momo.png")} className="loginlogo" alt="logo" />
        <h3 className='mx-4'>ADMIN LOGIN</h3>
        <input type="text" className="input my-4" id="username" placeholder='Enter Email ID / Mobile No. ' />
        <br />
        <input type="password" className="input my-1" id="password" placeholder='Enter Password ' />
        <p className='fpsw'>Forgot Password?</p>
        <input type="checkbox" />Remember Password
        <br />
        <button className='loginbtn' onClick={login}>Login
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          /></button>
        <br />
        <img src={require("../../images/login-design.png")} className="btmdsign" alt="design_img" />

      </div>
    </>
  )
}
