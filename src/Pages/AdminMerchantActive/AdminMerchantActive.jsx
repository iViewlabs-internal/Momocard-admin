import React from 'react'
import adminMerchantActive from './adminMerchantActive.css'
import mysvg from '../../images/check-circle.svg';
import mysvg2 from '../../images/check-circle-fill.svg';
import mysvgcross from "../../images/x-circle.svg";
import mysvgstar from "../../images/star.svg";
import { Link } from "react-router-dom";

export const AdminMerchantActive = () => {
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
                            <Link to="/Dashboard" className='now'>DASHBOARD</Link>
                        </li>
                        <li className='mx-2 col-2'>
                            <Link to="/AdminMerchantAll">MERCHANTS</Link>
                        </li>
                        <li className='col-1  '>
                            <Link to="/AdminCustomerAll" className='now'>CUSTOMERS</Link>
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
                            <li className="breadcrumb-item active">MERCHANTS</li>
                            <li className="breadcrumb-item " aria-current="page">ACTIVETED</li>
                        </ol>
                    </nav>

                    <div className='merchant-search-tab mb-3'>
                        <img src={require("../../images/merchant_icn.png")} className="storeimg mb-1 mx-3 col-2" alt="store_img" />
                        <p className='col-3 mb-2'><h3 className=' fw-light'>MERCHANTS</h3></p>
                        <input className='col-5 mb-2' type="Search" placeholder='Search' />
                    </div>
                    <div className="bg-white rounder">

                        <div className="row mx-3 py-3 pb-1">
                            <div className="col-1">
                                <p>
                                    <Link to="/AdminMerchantAll"className='now' >All(25)</Link>
                                </p>
                            </div>
                            <div className="col-1">
                                <p>
                                    <Link to="/AdminMerchantNew"className='now' >New(25)</Link>
                                </p>
                            </div>
                            <div className="col-1 px-2 ">
                                <p>
                                    <Link to="/AdminMerchantActive">Activated(25)</Link>
                                </p>
                            </div>
                            <div className="col-7 px-5">
                                <p>
                                    <Link to="/AdminMerchantDeactivated"className='now' >Deactivated(25)</Link>
                                </p>
                            </div>
                            <div className="col-1">
                                <div className="col-1 pb-1"> <button className="rounded-pill bg-dark update"> Update</button></div>

                            </div>
                            <div className="col-1 ">
                                <select name="" id="">
                                    <option value="">Sort by &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                </select>
                            </div>
                        </div>
                        <div className='details'>

                        <div className="row color py-3 pb-1">
                                <div className="col-1  "><p> PROFILE </p></div>
                                <div className="col-2  "><p> BUSINESS NAME </p></div>
                                <div className="col-2  "><p> MOBILE PROVIDER </p></div>
                                <div className="col-2 mx-1 px-5"><p> ADDED ON </p></div>
                                <div className="col-1 mx-1 "><p> VERIFICATION </p></div>
                                <div className="col-1 mx-1 px-5"><p> STATUS </p></div>
                                <div className="col-1 mx-1 px-5"><p> VIEW </p></div>
                                <div className="col-1 mx-1 px-5"><p> ACTION </p></div>
                            </div>
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/kfc.png")} className="rounded-circle boxshadow" alt="merchant_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 px-5  textcolor"><img src={mysvg} /><span>Activated</span></div>

                                <div className="col-1 my-2   px-5"><p>View</p></div>
                                <div className="col-1 px-5"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            </div> <hr className="container" />
                           
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/pure-joy.png")} className="rounded-circle boxshadow" alt="merchant_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2  my-2  px-5"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 px-5  textcolor"><img src={mysvg} /><span>Activated</span></div>

                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/vende.png")} className="rounded-circle boxshadow" alt=" merchant_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 px-5  textcolor"><img src={mysvg} /><span>Activated</span></div>

                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/grill-king.png")} className="rounded-circle boxshadow" alt="merchant_logo" /></p></div>

                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2  my-2  px-5"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-1  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 px-5  textcolor"><img src={mysvg} /><span>Activated</span></div>

                                <div className="col-1 my-2   px-5"><p>View</p></div>
                                <div className="col-1 px-5"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/hydraform-estate.png")} className="rounded-circle boxshadow" alt="merchant_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>                            <div className="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 px-5  textcolor"><img src={mysvg} /><span>Activated</span></div>

                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/profile_pic.png")} className="rounded-circle boxshadow" alt="merchant_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 px-5  textcolor"><img src={mysvg} /><span>Activated</span></div>

                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deativated </button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/belle-mode.png")} className="rounded-circle boxshadow" alt="merchant_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 px-5  textcolor"><img src={mysvg} /><span>Activated</span></div>

                                <div className="col-1 my-2   px-5"><p>View</p></div>
                                <div className="col-1 px-5"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            </div> <hr className="container" />
                            
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/grill-king.png")} className="rounded-circle boxshadow" alt="merchant_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 px-5  textcolor"><img src={mysvg} /><span>Activated</span></div>

                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deativated </button></div>
                            </div> <hr />
                            
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/ghana-shoes.png")} className="rounded-circle pb-3" alt="merchant_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 px-5  textcolor"><img src={mysvg} /><span>Activated</span></div>

                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated </button></div>
                            </div>
                        </div>

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


                <div className="Footer">
                    Copyright &copy; 2019 Company Name.All Rights Reserved
                </div>
            </div>
        </>
    )
}
