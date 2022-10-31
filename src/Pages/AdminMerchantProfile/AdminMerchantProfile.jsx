import React from 'react'
import adminMerchantProfile from './adminMerchantProfile.css'
import mysvg from '../../images/check-circle.svg';
import mysvg2 from '../../images/check-circle-fill.svg';
import mysvgcross from "../../images/x-circle.svg";
import mysvgstar from "../../images/star.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export const AdminMerchantProfile = () => {
    return (
        <>
            <Navbar/>
            <div class="background">
           
                <div class="container">
                    <div class="linespacingg">

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item "><a href="#" className='now'>Home</a></li>
                                <li class="breadcrumb-item "><a href="#" className='now'>Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                        <br />
                        <div class="merchntimg">
                            <img src={require("../../images/merchant_icn.png")} className="storeimg mb-1 mx-2 col-2" alt="store_img" />
                            <span className='mx-1'>Merchant Profile</span>
                        </div>
                        <br />
                    </div>

                        <div class="accounthld  my-3">
                            <div>
                                <h4 className='mx-2 my-2 faid'>Adepa shoes Ghana limited</h4>
                            </div>
                            <div class="subact">
                                <div>
                                    <p className='my-3 mx-3'> Added 2hrs ago </p>
                                </div>
                                <div>
                                    <div className='twobtn '>
                                    <div > <button className="rounded-pill bg-white mx-2 p-2 blwnavbtn">  Activate</button></div>
                                    <div> <button className="rounded-pill bg-dark txtcol  p-2" data-bs-toggle="modal" data-bs-whatever="@mdo" data-bs-dismiss="modal" data-bs-target="#exampleModal"> Update</button></div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    <div class="card ">
                        <div class="card-header blockquote mb-0 ">
                            PROFILE
                        </div>
                        <div class="card-body mx-3">
                            <blockquote class="blockquote mb-0">
                                <p>Profile Photo</p>
                                <img src={require("../../images/profile_pic.png")} class="img1" alt="Merchants_img" />
                                <p className='faid'>Full Name</p>
                                <p>Jabe Cooper</p><br />
                                <p className='faid'>Email Address</p>
                                <p>jane@gmail.com</p><br />
                                <p className='faid'>Mobile No.</p>
                                <p>+233 7589 5689 56</p><br />
                                <p className='faid'>Profile Status</p>
                                <div class="col-1   newworddd"><img src={mysvgstar} /><span>New</span></div>

                            </blockquote>
                        </div>
                    </div>
                    <div class="card my-4 pb-3">
                        <div class="card-header blockquote mb-0 ">
                            BUSINESS DETAILS
                        </div>
                        <div class="cards mx-4">
                            <div>
                                <p className='my-2'>INFO</p>
                                <hr />
                                <p className='faid'>Name of Business</p>
                                <p>Adepa shoes Ghana limited</p><br />
                                <p className='faid'>Type of Business</p>
                                <p>Retail</p><br />
                                <p className='faid'>Business Sub Category:</p>
                                <p>Fashion</p>
                            </div>
                            <div>
                                <p className=' my-2'>LOCATION</p>
                                <hr />
                                <p className='faid'>Building Name</p>
                                <p>Aviation Highway A wing</p><br />
                                <p className='faid'>Shop No.</p>
                                <p>Shop No. 250</p><br />
                                <p className='faid'>Street Name</p>
                                <p>Spintex Road</p>
                            </div>
                        </div>
                        <div>
                            <p class="mx-4 my-5">LOCATION ON MAP</p>
                            <div class=" mx-4 ">
                                <img src={require("../../images/map.png")} className='map' alt="map" />

                            </div>
                        </div>

                    </div>
                    <div>

                        <div className='twobtn'>
                        <div > <button className="rounded-pill bg-white mx-2 p-2 blwnavbtn">  Activate</button></div>
                                    <div> <button className="rounded-pill bg-dark txtcol  p-2" data-bs-toggle="modal" data-bs-whatever="@mdo" data-bs-dismiss="modal" data-bs-target="#exampleModal"> Update</button></div>

                        </div>
                    </div>
                    <div class="card my-4 ">
                        <div class="card-header ">
                            <div class="headings ">
                                <p className='my-1'>OFFER 1</p>
                                <p className='my-1'>ADDED ON NOV 20 2020</p>
                            </div>
                        </div>
                        <div class="offers">
                            <div>
                                <img src={require("../../images/activate_offer_shoe.png")} class="img sandel" alt="Pineapple" />
                                {/* <!-- style="width:170px;height:170px;margin-right:15px;" --> */}
                                <div className='offerstext'>

                                    <p >
                                        <h3>BUY ONE GET ONE FREE! <br /> STOCK CLEARANCE</h3>
                                        <p>
                                            Offer Untill Stock Lasts <br />Buy any 1 pair of shoes under Gh1000 and Get the other for Free
                                            <br /> <p className='faid my-2'>
                                                Start 12 Nov 2020 End 20 Nov 2020 </p>
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">

                        </div>
                    </div>
                    <div class="card my-4 ">
                        <div class="card-header ">
                            <div class="headings">
                                <p className='my-1'>OFFER 1</p>
                                <p className='my-1'>ADDED ON NOV 20 2020</p>
                            </div>
                        </div>
                        <div class="offers">
                            <div>
                                <img src={require("../../images/offer2_img.png")} class="img sandel" alt="Pineapple" />

                                {/* <!-- style="width:170px;height:170px;margin-right:15px;" --> */}
                                <div className='offerstext'>

                                    <p >
                                        <h3>BUY ONE GET ONE FREE! <br /> STOCK CLEARANCE</h3>
                                        <p>
                                            Offer Untill Stock Lasts <br />Buy any 1 pair of shoes under Gh1000 and Get the other for Free
                                            <br />  <p className='faid my-2'>
                                                Start 12 Nov 2020 End 20 Nov 2020 </p>
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">

                        </div>
                    </div>

                    <div class="smalll">
                        <p>&lt; Pervious Customer Profile</p>
                        <p>Next Customer Profile &gt;</p>
                    </div>
                </div>
                <Footer/>
                {/* <div class="Footer">
                    Copyright &copy; 2019 Company Name.All Rights Reserved
                </div> */}
            </div>
        </>
    )
}
