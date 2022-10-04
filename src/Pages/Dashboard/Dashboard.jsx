import React from 'react'
import dashboard from "./dashboard.css";
import mysvg from '../../images/check-circle.svg';
import mysvg2 from '../../images/check-circle-fill.svg';
import mysvgcross from "../../images/x-circle.svg";
import mysvgstar from "../../images/star.svg";
export const Dashboard = () => {
    return (
        <>

            <div className='navbar'>
                <ul>
                    <li className='col-1 logo'>
                        <img src={require("../../images/momo.png")} alt="" srcset="" />
                    </li>
                    <li className='col-3 mx-4'>ADMIN</li>
                    <div className='subnav'>

                        <li className='col-1'>DASHBOARD</li>
                        <li className='col-1'>MERCHANTS</li>
                        <li className='col-1 underline'>CUSTOMERS</li>
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
                            <li class="breadcrumb-item active">Home</li>
                            <li class="breadcrumb-item active">MERCHANTS</li>
                            <li class="breadcrumb-item " aria-current="page">ACTIVATED</li>
                        </ol>
                    </nav>

                    <div className='merchant-search-tab mb-3'>
                        <img src={require("../../images/merchant_icn.png")} className="storeimg mb-1 mx-3 col-2" alt="" />
                        <p className='col-3 mb-2'><h3>Merchants</h3></p>
                    </div>
                    <div class="bargraph">
                        <img src={require("../../images/bargraph.png")} class="w-100" alt="" />
                    </div>

                    <div class="cards container my-5">

                        <div class="card borderr widthh "  >
                            <ul class="list-group list-group-flush">
                                <li class="card-footer">
                                    <div class="headerr">
                                        <p>New Merchants(75)</p>
                                        <p> View All</p>
                                    </div>

                                </li>
                                <li class="list-group-item">
                                    <div class="details">
                                        <div><img src={require("../../images/profile_pic.png")} class="my-4 mx-2" alt="" /> </div>
                                        <div class="mx-5 data">
                                            <p>Added 2hrs ago</p>
                                            <p>Adepa Shoes Ghana limited</p>
                                            <p>Business</p>
                                            <p>Retail, Fashion, Footwear</p>
                                        </div>
                                        <div> <button class="btn1 btn3 my-5"
                                        >Activate</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="details">
                                        <div><img src={require("../../images/profile_pic.png")} class="my-4 mx-2" alt="" /> </div>
                                        <div class="mx-5">
                                            <p>Added 2hrs ago</p>
                                            <p>Adepa Shoes Ghana limited</p>
                                            <p>Business</p>
                                            <p>Retail, Fashion, Footwear</p>
                                        </div>
                                        <div> <button class="btn1 btn3 my-5 bg-dark"
                                        >Activate</button></div>
                                    </div>

                                </li>
                                <li class="list-group-item">
                                    <div class="details">
                                        <div><img src={require("../../images/profile_pic.png")} class="my-4 mx-2" alt="" /> </div>
                                        <div class="mx-5">
                                            <p>Added 2hrs ago</p>
                                            <p>Adepa Shoes Ghana limited</p>
                                            <p>Business</p>
                                            <p>Retail, Fashion, Footwear</p>
                                        </div>
                                        <div> <button class="btn1 btn3 my-5"
                                        >Activate</button>
                                        </div>
                                    </div>

                                </li>
                                <li class="list-group-item">
                                    <div class="details">
                                        <div><img src={require("../../images/profile_pic.png")} class="my-4 mx-2" alt="" /> </div>
                                        <div class="mx-5">
                                            <p>Added 2hrs ago</p>
                                            <p>Adepa Shoes Ghana limited</p>
                                            <p>Business</p>
                                            <p>Retail, Fashion, Footwear</p>
                                        </div>
                                        <div> <button class="btn1 btn3 my-5 bg-dark"
                                        >Activate</button></div>
                                    </div>

                                </li>
                                <li class="list-group-item">
                                    <div class="details">
                                        <div><img src={require("../../images/profile_pic.png")} class="my-4 mx-2" alt="" /> </div>
                                        <div class="mx-5">
                                            <p>Added 2hrs ago</p>
                                            <p>Adepa Shoes Ghana limited</p>
                                            <p>Business</p>
                                            <p>Retail, Fashion, Footwear</p>
                                        </div>
                                        <div> <button class="btn1 btn3 my-5 bg-dark"
                                        >Activate</button></div>
                                    </div>

                                </li>

                            </ul>

                        </div>
                        <div class="card borderr widthh mx-5" >
                            <ul class="list-group list-group-flush">
                                <li class=" card-footer">
                                    <div class="headerr">
                                        <p> New Customer(25)</p>
                                        <p> View All</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custdts">
                                        <img src={require("../../images/cust1.png")} alt="" />
                                        <p class="my-3 mx-3">Added 2hrs ago <br /> Jane Cooper</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custdts">
                                        <img src={require("../../images/cust2.png")} alt="" />
                                        <p class="my-3 mx-3">Added 2hrs ago <br /> Ronald Hayes</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custdts">
                                        <img src={require("../../images/cust3.png")} alt="" />
                                        <p class="my-3 mx-3">Added 2hrs ago <br /> Philip Ross</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custdts">
                                        <img src={require("../../images/cust4.png")} alt="" />
                                        <p class="my-3 mx-3">Added 2hrs ago <br />Patricia Roberts</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custdts">
                                        <img src={require("../../images/cust5.png")} alt="" />
                                        <p class="my-3 mx-3">Added 2hrs ago <br />Richard Wagner</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custdts">
                                        <img src={require("../../images/cust6.png")} alt="" />
                                        <p class="my-3 mx-3">Added 2hrs ago <br />Alex Green</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custdts">
                                        <img src={require("../../images/cust2.png")} alt="" />
                                        <p class="my-3 mx-3">Added 2hrs ago <br /> Philip Ross</p>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="custdts">
                                        <img src={require("../../images/cust1.png")} alt="" />
                                        <p class="my-3 mx-3">Added 2hrs ago <br /> Jane Cooper</p>
                                    </div>
                                </li>

                            </ul>

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
