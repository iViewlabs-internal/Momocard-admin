import React from 'react'
import adminMerchantNew from './adminMerchantNew.css'
import mysvg from '../../images/check-circle.svg';
import mysvg2 from '../../images/check-circle-fill.svg';
import mysvgcross from "../../images/x-circle.svg";
import mysvgstar from "../../images/star.svg";
import { Link } from "react-router-dom";

export const AdminMerchantNew = () => {
    return (
        <>
        <div className='navbar'>
            <ul>
                <li className='col-1 logo'>
                    <img src={require("../../images/momo.png")} alt="" srcset="" />
                </li>
                <li className='col-3 fs-4 mx-4'>ADMIN</li>
                <div className='subnav'>

                    <li className='col-3'>DASHBOARD</li>
                    <li className='mx-3 underline'>MERCHANTS</li>
                    <li className='col-1 '>CUSTOMERS</li>
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
                        <li class="breadcrumb-item " aria-current="page">NEW</li>
                    </ol>
                </nav>

                <div className='merchant-search-tab mb-3'>
                    <img src={require("../../images/merchant_icn.png")} className="storeimg  mb-1 mx-3 col-2" alt="" />
                    <p className='col-3 mb-2'><h3 className=' fw-light'>MERCHANTS</h3></p>
                    <input className='col-5 mb-2' type="Search" placeholder='Search' />
                </div>
                <div class="bg-white rounder">

                <div class="row mx-3 py-3 pb-1">
                            <div class="col-1">
                                <p>
                                    <Link to="/AdminMerchantAll">All(25)</Link>
                                </p>
                            </div>
                            <div class="col-1">
                                <p>
                                    <Link to="/AdminMerchantNew">New(25)</Link>
                                </p>
                            </div>
                            <div class="col-1 px-2 ">
                                <p>
                                    <Link to="/AdminMerchantActive">Activated(25)</Link>
                                </p>
                            </div>
                            <div class="col-7 px-5">
                                <p>
                                    <Link to="/AdminMerchantDeactivated">Deactivated(25)</Link>
                                </p>
                            </div>
                            <div class="col-1">
                                <div class="col-1 pb-1"> <button class="rounded-pill bg-dark update"> Update</button></div>

                            </div>
                            <div class="col-1 ">
                                <select name="" id="">
                                    <option value="">Sort by &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                </select>
                            </div>
                        </div>
                    <div className='details'>


                        <div class="row color py-3 pb-1">
                            <div class="col-1  "><p> PROFILE </p></div>
                            <div class="col-2  "><p> BUSINESS NAME </p></div>
                            <div class="col-2  "><p> BUSINESS TYPE </p></div>
                            <div class="col-2 mx-1 px-5"><p> ADDED ON </p></div>
                            <div class="col-1 mx-2 "><p> VERIFICATION </p></div>
                            <div class="col-1 mx-1 px-3"><p> STATUS </p></div>
                            <div class="col-1 mx-1 px-5"><p> VIEW </p></div>
                            <div class="col-1 mx-1 px-5"><p> ACTION </p></div>
                        </div>


                        <div class="row new mb-1">
                            <div class="col-1 "><p><img src={require("../../images/profile_pic.png")} className="rounded-circle boxshadow" alt="" /></p></div>
                            <div class="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                            <div class="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>                            <div class="col-2  my-2 px-5"><p>Added 2hrs ago</p></div>
                            <div class="col-1 my-2 "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                            <div class="col-1  my-2  px-5 newwordd"><img src={mysvgstar} /><span>New</span></div>
                            <div class="col-1 my-2  px-5"><p>View</p></div>
                            <div class="col-1 px-5"> <button class="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            
                        </div> <hr class="container" />
                        <div class="row new mb-1">
                            <div class="col-1 "><p><img src={require("../../images/pure-joy.png")} className="rounded-circle boxshadow" alt="" /></p></div>
                            <div class="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                            <div class="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                            <div class="col-2  my-2  px-5"><p>Added 2hrs ago</p></div>
                            <div class="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                            <div class="col-1  my-2  px-5 newwordd"><img src={mysvgstar} /><span>New</span></div>
                            <div class="col-1  my-2  px-5"><p>View</p></div>
                            <div class="col-1 px-5"> <button class="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                        </div> <hr class="container" />
                        <div class="row new mb-1">
                            <div class="col-1 "><p><img src={require("../../images/grill-king.png")} className="rounded-circle boxshadow" alt="" /></p></div>
                            <div class="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                            <div class="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                            <div class="col-2  my-2  px-5"><p>Added 2hrs ago</p></div>
                            <div class="col-1 my-1  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                            <div class="col-1  my-2  px-5 newwordd"><img src={mysvgstar} /><span>New</span></div>
                            <div class="col-1 my-2   px-5"><p>View</p></div>
                            <div class="col-1 px-5"> <button class="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                        </div> <hr class="container" />
                        <div class="row new mb-1">
                            <div class="col-1 "><p><img src={require("../../images/hydraform-estate.png")} className="rounded-circle boxshadow" alt="" /></p></div>
                            <div class="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                            <div class="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>                            <div class="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                            <div class="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                            <div class="col-1  my-2  px-5 newwordd"><img src={mysvgstar} /><span>New</span></div>
                            <div class="col-1  my-2  px-5"><p>View</p></div>
                            <div class="col-1 px-5"> <button class="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                        </div> <hr class="container" />
                        <div class="row new mb-1">
                            <div class="col-1 "><p><img src={require("../../images/belle-mode.png")} className="rounded-circle boxshadow" alt="" /></p></div>
                            <div class="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                            <div class="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                            <div class="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                            <div class="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                            <div class="col-1  my-2  px-5 newwordd"><img src={mysvgstar} /><span>New</span></div>
                            <div class="col-1 my-2   px-5"><p>View</p></div>
                            <div class="col-1 px-5"> <button class="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                        </div> <hr class="container" />
                        <div class="row new mb-1">
                            <div class="col-1 "><p><img src={require("../../images/vende.png")} className="rounded-circle boxshadow" alt=" " /></p></div>
                            <div class="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                            <div class="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                            <div class="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                            <div class="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                            <div class="col-1  my-2  px-5 newwordd"><img src={mysvgstar} /><span>New</span></div>
                            <div class="col-1  my-2  px-5"><p>View</p></div>
                            <div class="col-1 px-5"> <button class="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                        </div> <hr class="container" />
                        <div class="row new mb-1">
                            <div class="col-1 "><p><img src={require("../../images/grill-king.png")} className="rounded-circle boxshadow" alt="" /></p></div>
                            <div class="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                            <div class="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                            <div class="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                            <div class="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                            <div class="col-1  my-2  px-5 newwordd"><img src={mysvgstar} /><span>New</span></div>
                            <div class="col-1  my-2  px-5"><p>View</p></div>
                            <div class="col-1 px-5"> <button class="bg-white rounded-pill px-3 py-2 mx-2"> ADeativated </button></div>
                        </div> <hr />
                        <div class="row new mb-1">
                            <div class="col-1 "><p><img src={require("../../images/kfc.png")} className="rounded-circle boxshadow" alt="" /></p></div>
                            <div class="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                            <div class="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                            <div class="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                            <div class="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                            <div class="col-1  my-2  px-5 newwordd"><img src={mysvgstar} /><span>New</span></div>
                            <div class="col-1 my-2   px-5"><p>View</p></div>
                            <div class="col-1 px-5"> <button class="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                        </div> <hr class="container" />
                        <div class="row new mb-1">
                            <div class="col-1 "><p><img src={require("../../images/ghana-shoes.png")} className="rounded-circle pb-3" alt="" /></p></div>
                            <div class="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                            <div class="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                            <div class="col-2 my-2   px-5"><p>Added 2hrs ago</p></div>
                            <div class="col-1 my-2  "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                            <div class="col-1  my-2  px-5 newwordd"><img src={mysvgstar} /><span>New</span></div>
                            <div class="col-1  my-2  px-5"><p>View</p></div>
                            <div class="col-1 px-5"> <button class="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="mt-5">
                <nav aria-label="Page navigation example ">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
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


            <div class="Footer">
                Copyright &copy; 2019 Company Name.All Rights Reserved
            </div>
        </div>
    </>
    )
}