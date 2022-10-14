import React from 'react'
import navbar from "./navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {
        function updatedname(){
            const newname=document.getElementById("recipient-name").value
            document.getElementById("admin-name").innerHTML=newname;
            document.getElementById("recipient-name").value="";
        }
    return (
        <div className='navbar  container'>
            <div className='navbar-logo-text mx-4 row'>
                <div className='col-1'>
                    <img src={require("../images/momo_big_old.png")} className='navbar-imgs' alt="Logo" />
                </div>
                <div className='col-5 navbar-text '><h5>ADMIN</h5></div>
            </div>
            <div className='navbar-menu row'>
                <div className='col'><Link to="/Dashboard" className='now'>DASHBOARD</Link></div>
                <div className='col mx-1 '><Link to="/AdminMerchantAll" className='now'  >MERCHANTS</Link></div>
                <div className='col mx-1 '><Link to="/AdminCustomerAll" className='now' >CUSTOMERS</Link></div>

            </div>
            <div className='navbar-admin-img'>
                <div className=''>
                    <img src={require("../images/admin_profile_img.png")} className='navbar-imgs' alt="Logo" />

                </div>
                {/* <div className=' navbar-text admin-acc'>ADMINNAME
                </div> */}
                <div class="dropdown navbar-text admin-acc ">
                    <button class="dropbtn admnname"id="admin-name">ADMINNAME</button>
                    <div class="dropdown-content">
                        <a href="#"type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit Profile</a>
                        <a href="/"type="button" class="btn">Logout</a>
                    </div>
                </div>
            </div>
            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content ">
                        <div class="modal-header ">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label mb-3">Update your name :</label>
                                    <input type="text" class="form-control" id="recipient-name"/>
                                </div>
                                {/* <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div> */}
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close&nbsp;</button>
                            <button type="button" class="btn btn-primary "data-bs-dismiss="modal" onClick={updatedname}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
