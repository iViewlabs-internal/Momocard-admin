import React from 'react';
import "./home.css";
const Home = () => {
    return (

        <div class="wrap">
            <nav class="navbar bg-light">

                <div class="container-fluid">
                    
                    {/* <a class="navbar-brand">Navbar</a> */}
                    {/* <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form> */}
                </div>
            </nav>

            <form class="login-form" action="">
{/* <h1>hello</h1> */}
                <div class="form-header">
                    <nav class="navbar navbar-expand-lg ">
                        {/* <div class="container-fluid"> */}

                        {/* </div> */}
                    </nav>
                    {/* <h3>Login Form</h3> */}
                    {/* <p>Login to access your dashboard</p> */}
                    <div class="text-center">

                        <img src={require('../images/momo.png')} class="rounded" alt="..."></img>
                    </div>
                </div>
                <div class="form-group">

                    <h2>ADMIN LOGIN</h2>
                    <input type="text" class="form-input col-sm-5 col-form-label border border-top-0  border-start-0 border-end-0 inp" placeholder="Enter Email ID / Mobile No."></input>
                </div>
                <div class="form-group">
                    <input type="password" class="form-input col-sm-3 col-form-label border border-top-0  border-start-0 border-end-0 psw" placeholder="Enter Password"></input>
                </div>
                <div>
                    <a href='...' class="forgotpsw" >Forgot Password?</a>
                </div>
                {/* <div class="form-check">
                    <input class="form-check-input col-sm-5" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label class="form-check-label col-sm-5 " for="flexCheckDefault">
                        Default checkbox
                    </label>
                </div> */}
                <input class="form-check-input mt-1" type="checkbox" value="" aria-label="Checkbox for following text input"></input>Remember Password

                <div class="form-group">
                    <button class="form-button" type="submit">Login</button>
                </div>
                <div class="text-center">

<img src={require('../images/login-design.png')} class="rounded rounder2" alt="..."></img>
</div>
            </form>
        </div>
);
}


export default Home;
