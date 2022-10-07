import React from 'react'
import mysvg from '../../images/check-circle.svg';
import mysvg2 from '../../images/check-circle-fill.svg';
import mysvgcross from "../../images/x-circle.svg";
import mysvgstar from "../../images/star.svg";
import customerprofile from './customerprofile.css';
import { Link } from "react-router-dom";

export const Customerprofile = () => {
    function update() {
        const fullname = document.getElementById("fullname");
        const gmail = document.getElementById("gmail");
        const Phone = document.getElementById("phone");
        const DOB = document.getElementById("DOB");
        const Nationality = document.getElementById("nationality");
        //    ...........................
        const recipientname = document.getElementById("recipientname");
        const recipientAddress = document.getElementById("recipientAddress");
        const recipientPhone = document.getElementById("recipientPhone");
        const recipientDOB = document.getElementById("recipientDOB");
        const recipientNationality = document.getElementById("recipientNationality");
        const modalbody = document.getElementById("modalbody");
        console.log(modalbody);
        if (recipientname.value == "") {
            return;
        } else {
            fullname.innerHTML = recipientname.value;
            recipientname.value = " ";
            gmail.innerHTML = recipientAddress.value;
            recipientAddress.value = " ";
            Phone.innerHTML = recipientPhone.value;
            recipientPhone.value = " ";
            DOB.innerHTML = recipientDOB.value;
            recipientDOB.value = " ";
            Nationality.innerHTML = recipientNationality.value;
            recipientNationality.value = " ";
    

        }

    }

    return (
        <>
            <div className='navbar'>
                <ul>
                    <li className='col-1 logo'>
                        <img src={require("../../images/momo.png")} alt="logo" srcset="" />
                    </li>
                    <li className='col-3 admin_text fs-4 mx-4'>ADMIN</li>

                    <div className='subnav'>

                        <li className='col-2'>
                            <Link to="/Dashboard">DASHBOARD</Link>
                        </li>
                        <li className='mx-2 col-2'>
                            <Link to="/AdminMerchantAll">MERCHANTS</Link>
                        </li>
                        <li className='col-1  '>
                            <Link to="/AdminCustomerAll">CUSTOMERS</Link>
                        </li>
                    </div>
                    <li className='col-1 adminimg'>
                        <img src={require("../../images/admin_profile_img.png")} alt="admin_img" srcset="" />
                    </li>
                    <li className='col-2 adminimg Adn'>ADMIN NAME</li>
                </ul>
            </div>
            <div className='backcolor'>

                <div className='container'>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Home</li>
                            <li className="breadcrumb-item active">CUSTOMER</li>
                            <li className="breadcrumb-item " aria-current="page">PROFILE</li>
                        </ol>
                    </nav>

                    <div className='merchant-search-tab'>
                        <img src={require("../../images/customer.png")} className="storeimg mb-1 col-2" alt="customer_img" />
                        <p className='col-3 mb-2 '><h3 className='faid'> Customer Profile</h3></p> <br />
                        {/* <div className="col-1">
                            <div className="col-1 pb-1"> <button className="rounded-pill bg-dark update"> Update</button></div>
                            <div className="col-1 pb-1"> <button className="rounded-pill bg-dark update"> Update</button></div>
                            
                        </div> */}

                    </div>
                    <div className='cnbtn'>
                        <h3>Jane Cooper</h3>
                        <div className='updatee '>
                            <p className='blwnavbtn my-2'>Added 2hrs ago</p>
                            <div > <button className="rounded-pill bg-white mx-2  p-2 blwnavbtn"> Activate</button></div>
                            <div> <button className="rounded-pill bg-dark txtcol  p-2" data-bs-toggle="modal" data-bs-whatever="@mdo" data-bs-dismiss="modal" data-bs-target="#exampleModal"> Update</button></div>
                        </div>
                    </div>
                    <div className="bg-white rounder">

                        <div className="row color py-3 pb-1 b-1">
                            <div className="col-1">
                                <p>PROFILE</p>
                            </div>
                        </div>
                        <div className='maindiv'>


                            <div className='sidebyside'>
                                <div>
                                    <p>Profile Photo</p>
                                    <img src={require("../../images/cust_profile_img.png")} alt="Profile_photo" srcset="" />
                                </div>
                            </div>
                            <div className='sidebyside'>


                                <div>
                                    <p className="breadcrumb-item active  faid">Full Name</p>
                                    <p className="fs-5" id="fullname"> Jane Cooper</p>
                                </div>
                                <br />
                                <div>
                                    <p className="breadcrumb-item active faid">Email Address</p>
                                    <span className="fs-5" id="gmail">jane@gmail.com</span><img src={mysvg2} className='svgimg' />
                                </div>
                                <br />

                                <div>
                                    <p className="breadcrumb-item active faid"> Mobile No.</p>
                                    <span className="fs-5" id="phone">+233 7589 5689 56</span><img src={mysvg2} className='svgimg' />
                                </div>
                                <br />

                                <div>
                                    <p className="breadcrumb-item active faid">Date of Birth</p>
                                    <p className="fs-5" id="DOB">14 . 08 . 1980</p>
                                </div>
                                <br />

                                <div>
                                    <p className="breadcrumb-item active faid">Nationality</p>
                                    <p className="fs-5" id="nationality">Ethopian</p>
                                </div>
                                <br />

                                <div>
                                    <p className="breadcrumb-item active faid">Profile Status</p>
                                    <div className="bank">
                                        <img src={require("../../images/new.png")} className='newimg' alt="star_img" />
                                        <span className='newword'>New</span>
                                    </div>

                                </div>
                                <br />

                                <div>
                                    <p className="breadcrumb-item active faid">ID CARD PROOD</p>
                                </div>
                                <hr />
                                <div>
                                    <p className="breadcrumb-item active ">Driving Licence</p>
                                    <span className="fs-5">KF 9450 38593 <span className="breadcrumb-item active">Verified</span><img src={mysvg2} className='svgimg' /></span>
                                </div>
                                <br />

                                <div>
                                    <p className="breadcrumb-item active faid">MOBILE PROVIDER</p>
                                    <div>
                                        <hr />
                                        <img src={require("../../images/mnt_money.png")} className='svgimg' alt="bank_logo" />

                                        <span className="fs-5">MNT Mobile</span>
                                    </div>
                                </div>
                                <br />

                                <div>
                                    <p className="breadcrumb-item active faid">BANK CARD PROVIDER</p>
                                    <div >
                                        <hr />
                                        <img src={require("../../images/bank_img.png")} className='svgimg' alt="bank_logo" />

                                        <span className="fs-5">UBA Bank</span>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className='updatee'>
                                    <div > <button className="rounded-pill bg-white mx-2 p-2 blwnavbtn">  Activate</button></div>
                                    <div> <button className="rounded-pill bg-dark txtcol  p-2" data-bs-toggle="modal" data-bs-whatever="@mdo" data-bs-dismiss="modal" data-bs-target="#exampleModal"> Update</button></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card my-5">
                        <div className="card-header">
                            REQUEST DETAILS
                        </div>
                        <div className="card-body">
                            <p>
                                No Current Request Found!
                            </p>
                        </div>
                    </div>
                    <div className='pervinext'>
                        <p>&lt; Pervious Customer Profile</p>
                        <p>Next Customer Profile &gt;</p>
                    </div>

                </div>
                <div className="mt-5">
                    <nav aria-label="Page navigation example ">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a tabindex="-1" aria-disabled="true">&lt;</a>
                            </li>
                            <li className='page'> 1</li>
                            <li ><a >2</a></li>
                            <li ><a >3</a></li>
                            <li ><a >4</a></li>
                            <li>
                                <a >&gt;</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="modal fade" id="exampleModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body" id="modalbody">
                                <form>
                                    <div className="mb-3">
                                        <label for="recipient-name" className="col-form-label">Full Name:</label>
                                        <input type="text" className="form-control fc" id="recipientname" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="recipient-name" className="col-form-label">Address:</label>
                                        <input type="text" className="form-control fc" id="recipientAddress" />
                                    </div> <div className="mb-3">
                                        <label for="recipient-name" className="col-form-label">Phone number:</label>
                                        <input type="text" className="form-control fc" id="recipientPhone" />
                                    </div> <div className="mb-3">
                                        <label for="recipient-name" className="col-form-label">Date of Birth</label>
                                        <input type="text" className="form-control fc" id="recipientDOB" />
                                    </div> <div className="mb-3">
                                        <label for="recipient-name" className="col-form-label">Nationality</label>
                                        <input type="text" className="form-control fc" id="recipientNationality" />
                                    </div>


                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn w-100 btn-primary update" data-bs-dismiss="modal" onClick={update}>Send message</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Footer">
                    Copyright &copy; 2019 Company Name.All Rights Reserved
                </div>
            </div>

        </>
    )
}

