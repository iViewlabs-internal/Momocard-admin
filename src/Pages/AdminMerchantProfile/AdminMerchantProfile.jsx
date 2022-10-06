import React from 'react'
import adminMerchantProfile from './adminMerchantProfile.css'
import mysvg from '../../images/check-circle.svg';
import mysvg2 from '../../images/check-circle-fill.svg';
import mysvgcross from "../../images/x-circle.svg";
import mysvgstar from "../../images/star.svg";
import { Link } from "react-router-dom";

export const AdminMerchantProfile = () => {
    return (
        <>
            <div class="bgcolor  bgcol">

            <div className='navbar'>
                <ul>
                    <li className='col-1 logo'>
                        <img src={require("../../images/momo.png")} alt="" srcset="" />
                    </li>
                    <li className='col-3 fs-4 mx-4'>ADMIN</li>
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
                        <img src={require("../../images/admin_profile_img.png")} alt="" srcset="" />
                    </li>
                    <li className='col-2 adminimg Adn'>ADMIN NAME</li>
                </ul>
            </div>
                <div class="container">
                    <div class="">

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                        <br />
                        <div class="merchntimg">
                            <img src={require("../../images/merchant_icn.png")} className="storeimg mb-1 col-2" alt="" />
                            <span className='mx-3'>Merchant Profile</span>
                        </div>
                        <br />
                        <div class="accounthld">
                            <div>
                                <h4>Adepa shoes Ghana limited</h4>
                            </div>
                            <div class="subact">
                                <div>
                                    <p className='my-3 mx-3'> Added 2hrs ago </p>
                                </div>
                                <div>
                                    <div className='twobtn'>
                                        <div > <button class="rounded-pill bg-white btnbtn mb-3 py-3 blwnavbtn"> Activate</button></div>
                                        <div> <button class="rounded-pill bg-dark txtcol btnbtn py-3"> Update</button></div>
                                    </div>
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
                                <img src={require("../../images/profile_pic.png")} class="img1" alt="" />
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
                                <p className='my-2'>LOCATION</p>
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
                                <img src={require("../../images/map.png")} className='map' alt="" />

                            </div>
                        </div>

                    </div>
                    <div>

                        <div className='twobtn'>
                            <div > <button class="rounded-pill bg-white mx-2 btnbtn  py-3 blwnavbtn"> Activate</button></div>
                            <div> <button class="rounded-pill bg-dark txtcol btnbtn  py-3"> Update</button></div>
                        </div>
                    </div>
                    <div class="card my-4 ">
                        <div class="card-header ">
                            <div class="headings">
                                <p>OFFER 1</p>
                                <p>ADDED ON NOV 20 2020</p>
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
                                <p>OFFER 1</p>
                                <p>ADDED ON NOV 20 2020</p>
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
                <div class="Footer">
                    Copyright &copy; 2019 Company Name.All Rights Reserved
                </div>
            </div>
        </>
    )
}
