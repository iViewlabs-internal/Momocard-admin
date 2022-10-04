import React from 'react'
import home from './home.css'

export const Home = () => {
  return (
    <>
    

    <p className='mx-5 my-2'>Back to MOMO Merchants</p>
    <a href="#"className='mx-5 '>Home</a>
    
    <div className='container div'>

    <img src={require("../../images/momo.png")} className="loginlogo" alt="" />
    <h3 className='mx-4'>ADMIN LOGIN</h3>
    <input type="text" className="input my-4" placeholder='Enter Email ID / Mobile No. ' />
    <br />
    <input type="password"  className="input my-1" placeholder='Enter Password ' />
    <p className='fpsw'>Forgot Password?</p>
    <input type="checkbox" />Remember Password
    <br />
    <button className='loginbtn'>Login</button>
    <br />
    <img src={require("../../images/login-design.png")} className="btmdsign" alt="" />    
    
    </div>
    </>
  )
}
