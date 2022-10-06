import React from 'react'
import dashboard from "./dashboard.css";
import mysvg from '../../images/check-circle.svg';
import mysvg2 from '../../images/check-circle-fill.svg';
import mysvgcross from "../../images/x-circle.svg";
import mysvgstar from "../../images/star.svg";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <>

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
                        <li className='mx-2 col-2 '>
                            <Link to="/AdminMerchantAll" className='now'>MERCHANTS</Link>
                        </li>
                        <li className='col-1 '>
                            <Link to="/AdminCustomerAll" className='now'>CUSTOMERS</Link>
                        </li>
                    </div>
                    <li className='col-1 adminimg'>
                        <img src={require("../../images/admin_profile_img.png")} alt="" srcset="" />
                    </li>
                    <li className='col-2 adminimg Adn'>ADMIN NAME</li>
                </ul>
            </div>
            <div className='backcolor'>

                <div className='container'>

                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item mx-0  active">Home</li>
                            <li class="breadcrumb-item mx-0" aria-current="page">DASHBOARD</li>
                        </ol>
                    </nav>
                    <div className='dashboardselections'>
                        <div className='linespacing'>
                            <p className='col-3 mb-2 '><h3 className='faid'>Dashboard</h3></p> <br />
                            <p className='faid'>No of Customers Added Each Month</p>
                        </div>
                        <div className='mx-5'>
                            <p>View</p>
                            <select name="" id="" className='select'>
                                <option value="" className='faid'>Customers</option>
                                <option value="" className='faid'>Merchants</option>
                                <option value="" className='faid'>NewMerchants</option>
                                <option value="" className='faid'>NewCustomers</option>
                            </select>
                        </div>
                        <div className='mx-1'>
                            <p>Timeline</p>
                            <select name="" id=""  className='select'>
                                <option value="" className='faid'>Yearly</option>
                                <option value="" className='faid'>Monthly</option>
                                <option value="" className='faid'>Daily</option>
                            </select>
                        </div>
                    </div>
                    <div class="bargraph">
                        <img src={require("../../images/bargraph.png")} class="w-100" alt="" />
                    </div>
                    <div className='maincard my-4'>

                        <div class="card" >
                            <div class="card-header heading">
                                <div>
                                    New Merchants (75)
                                </div>
                                <div>
                                    View All
                                </div>
                            </div>
                            <div className="dashmerchantcard ">
                                <div className='dashMerchantimg  mx-3 col-2'><img src={require("../../images/profile_pic.png")}
                                    className="rounded-circle boxshadow" alt="" /></div>
                                <div className='dashmerchantdetails my-3 col-5'>
                                    <p className='faid'>Added 2hrs ago</p>
                                    <p>Adepa Shoes Ghana limited</p>
                                    <p className='faid'>Business</p>
                                    <p>Retail, Fashion, Footwear</p></div>
                                <div className='dashmerchantcardbtn'> <button class="txtcoll border-0 rounded-pill px-3 py-2 mx-2"> Deactivated</button>
                                </div>
                            </div>
                            <hr className='hr' />

                            <div className="dashmerchantcard ">
                                <div className='dashMerchantimg  mx-3 col-2'><img src={require("../../images/pure-joy.png")}
                                    className="rounded-circle boxshadow" alt="" /></div>
                                <div className='dashmerchantdetails my-3 mx-2 col-5'>
                                    <p className='faid'>Added 2hrs ago</p>
                                    <p>Adepa Shoes Ghana limited</p>
                                    <p className='faid'>Business</p>
                                    <p>Retail, Fashion, Footwear</p></div>
                                <div className='dashmerchantcardbtn'> <button class="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button>
                                </div>
                            </div>
                            <hr className='hr' />


                            <div className="dashmerchantcard ">
                                <div className='dashMerchantimg  mx-3 col-2'><img src={require("../../images/hydraform-estate.png")}
                                    className="rounded-circle boxshadow" alt="" /></div>
                                <div className='dashmerchantdetails my-3 mx-2 col-5'>
                                    <p className='faid'>Added 2hrs ago</p>
                                    <p>Adepa Shoes Ghana limited</p>
                                    <p className='faid'>Business</p>
                                    <p>Retail, Fashion, Footwear</p></div>
                                <div className='dashmerchantcardbtn'> <button class="bg-dark border-0 txtcol rounded-pill px-3 py-2 mx-2"> Deactivated</button>
                                </div>
                            </div>
                            <hr className='hr' />


                            <div className="dashmerchantcard ">
                                <div className='dashMerchantimg  mx-3 col-2'><img src={require("../../images/belle-mode.png")}
                                    className="rounded-circle boxshadow" alt="" /></div>
                                <div className='dashmerchantdetails my-3 mx-2 col-5'>
                                    <p className='faid'>Added 2hrs ago</p>
                                    <p>Adepa Shoes Ghana limited</p>
                                    <p className='faid'>Business</p>
                                    <p>Retail, Fashion, Footwear</p></div>
                                <div className='dashmerchantcardbtn'> <button class="bg-dark border-0 txtcol rounded-pill px-3 py-2 mx-2"> Deactivated</button>
                                </div>
                            </div>
                            <hr className='hr' />


                            <div className="dashmerchantcard ">
                                <div className='dashMerchantimg  mx-3 col-2'><img src={require("../../images/pure-joy.png")}

                                    className="rounded-circle boxshadow" alt="" /></div>
                                <div className='dashmerchantdetails my-3 mx-2 col-5'>
                                    <p className='faid'>Added 2hrs ago</p>
                                    <p>Adepa Shoes Ghana limited</p>
                                    <p className='faid'>Business</p>
                                    <p>Retail, Fashion, Footwear</p></div>
                                <div className='dashmerchantcardbtn'> <button class="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button>
                                </div>
                            </div>
                            <hr className='hr' />


                            <div className="dashmerchantcard ">
                                <div className='dashMerchantimg  mx-3 col-2'><img src={require("../../images/profile_pic.png")}
                                    className="rounded-circle boxshadow" alt="" /></div>
                                <div className='dashmerchantdetails my-3 mx-2 col-5'>
                                    <p className='faid'>Added 2hrs ago</p>
                                    <p>Adepa Shoes Ghana limited</p>
                                    <p className='faid'>Business</p>
                                    <p>Retail, Fashion, Footwear</p></div>
                                <div className='dashmerchantcardbtn '> <button class="bg-dark border-0 txtcol rounded-pill px-3 py-2 mx-2"> Deactivated</button>
                                </div>
                            </div>
                            <hr className='hr' />

                        </div>
                        <div class="card" >
                            <div class="card-header heading">
                                <div>
                                    New Customer (25)
                                </div>
                                <div>
                                    View All
                                </div>
                            </div>
                            <div className='custdetails  mx-3'>
                                <div>
                                    <img src={require("../../images/cust1.png")} alt="" />
                                </div>
                                <div class="my-3 mx-3 linespacing">
                                    <p className='faid'>Added 2hrs ago </p><p> Jane Cooper</p>
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className='custdetails mx-3'>
                                <div>
                                    <img src={require("../../images/cust2.png")} alt="" />
                                </div>
                                <div className='my-3 mx-3 linespacing'>
                                    <p className='faid'>Added 2hrs ago </p><p>Ronald Hayes</p>
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className='custdetails mx-3'>
                                <div>
                                    <img src={require("../../images/cust3.png")} alt="" />
                                </div>
                                <div className='my-3 mx-3 linespacing'>
                                    <p className='faid'>Added 2hrs ago </p><p>Philip Ross</p>
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className='custdetails mx-3'>
                                <div>
                                    <img src={require("../../images/cust4.png")} alt="" />
                                </div>
                                <div className='my-3 mx-3 linespacing'>
                                    <p className='faid'>Added 2hrs ago </p><p>Patricia Roberts</p>
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className='custdetails mx-3'>
                                <div>
                                    <img src={require("../../images/cust5.png")} alt="" />
                                </div>
                                <div className='my-3 mx-3 linespacing'>
                                    <p className='faid'>Added 2hrs ago </p><p>Richard Wagner</p>
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className='custdetails mx-3'>
                                <div>
                                    <img src={require("../../images/cust6.png")} alt="" />
                                </div>
                                <div className='my-3 mx-3 linespacing'>
                                    <p className='faid'>Added 2hrs ago </p><p>Alex Green</p>
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className='custdetails mx-3'>
                                <div>
                                    <img src={require("../../images/cust1.png")} alt="" />
                                </div>
                                <div className='my-3 mx-3 linespacing'>
                                    <p className='faid'>Added 2hrs ago </p><p> Philip Ross</p>
                                </div>
                            </div>
                            <hr className='hr' />
                            <div className='custdetails mx-3'>
                                <div>
                                    <img src={require("../../images/cust2.png")} alt="" />
                                </div>
                                <div className='my-3 mx-3 linespacing'>
                                    <p className='faid'>Added 2hrs ago </p><p> Jane Cooper</p>
                                </div>
                            </div>


                        </div>
                        <div>


                        </div>

                    </div>
                </div>
                <div class="Footer">
                    Copyright &copy; 2019 Company Name.All Rights Reserved
                </div>
            </div>




        </>
    )
}
