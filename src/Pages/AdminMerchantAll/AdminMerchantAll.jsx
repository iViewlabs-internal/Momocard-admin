import React from 'react'
import adminMerchantAll from './adminMerchantAll.css'
import mysvg from '../../images/check-circle.svg';
import mysvg2 from '../../images/check-circle-fill.svg';
import mysvgcross from "../../images/x-circle.svg";
import mysvgstar from "../../images/star.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const AdminMerchantAll = () => {
    function clickme(e) {
            const first=document.getElementById("first");
            first.innerHTML="Activate.";
            first.style.color='green';
             const replace=document.getElementById("replace");
            // replace.style.background({mysvgcross})
            e.target.setAttribute( {replace},"../../images/x-circle.svg" );
            <Navigate to="../AdminMerchantActive/AdminMerchantActive" replace={true} />

    }
    return (
        <>
          <Navbar/>
            <div className='backcolor'>

                <div className='container'>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Home</li>
                            <li className="breadcrumb-item active">MERCHANTS</li>
                            <li className="breadcrumb-item " aria-current="page">ALL</li>
                        </ol>
                    </nav>

                    <div className='merchant-search-tab mb-3'>
                        <img src={require("../../images/merchant_icn.png")} className="storeimg mb-1 mx-3 col-2" alt="store_img" />
                        <p className='col-3 mb-2'><h3 className=' fw-light'>MERCHANTS</h3></p>
                        <input className='col-5 mb-2 searchbar' type="Search" placeholder='Search' />
                    </div>
                    <div className="bg-white rounder">

                        <div className="row mx-3 py-3 pb-1">
                            <div className="col-1">
                                <p>
                                    <Link to="/AdminMerchantAll" className='present'>All(25)</Link>
                                </p>
                            </div>
                            <div className="col-1">
                                <p>
                                    <Link to="/AdminMerchantNew" className='now' >New(25)</Link>
                                </p>
                            </div>
                            <div className="col-1 px-2 ">
                                <p>
                                    <Link to="/AdminMerchantActive" className='now' >Activated(25)</Link>
                                </p>
                            </div>
                            <div className="col-7 px-5">
                                <p>
                                    <Link to="/AdminMerchantDeactivated" className='now' >Deactivated(25)</Link>
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
                                <div className="col-2 mx-1 px-4"><p> ADDED ON </p></div>
                                <div className="col-1 shift"><p> VERIFICATION </p></div>
                                <div className="col-1 mx-1 shiftt px-5 "><p> STATUS </p></div>
                                <div className="col-1 mx-1 px-5"><p> VIEW </p></div>
                                <div className="col-1 mx-1 px-5"><p> ACTION </p></div>
                            </div>

                            <div className="row new mb-1 pt-2">
                                <div className="col-1 "><p><img src={require("../../images/ghana-shoes.png")} className="rounded-circle boxshadow merchant-img" alt="store_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift px-5 svg-alignn currentcolor"><img src={mysvgcross} id="replace" className="icon2  mx-1"/><span id="first">Deactivated</span></div>
                                <div className="col-1 my-2   px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> 
                                <button className="bg-white rounded-pill px-3 py-2 mx-2" onClick={() => {clickme()}}> Deactivated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/grill-king.png")} className="rounded-circle boxshadow merchant-img" alt="store_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2 shift "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift  px-5 svg-alignn newwordd"><img src={mysvgstar} className="icon2 mx-1"/><span>new</span></div>
                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/pure-joy.png")} className="rounded-circle boxshadow merchant-img" alt="store_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift px-5 svg-alignn textcolor"><img src={mysvg} className="icon2 mx-1"/><span>Activated</span></div>
                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/grill-king.png")} className="rounded-circle boxshadow merchant-img" alt="store_logo" /></p></div>

                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-1  shift"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift px-5 svg-alignn currentcolor"><img src={mysvgcross} className="icon2 mx-1"/><span>Deactivated</span></div>
                                <div className="col-1 my-2   px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            </div> <hr className="container" />

                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/profile_pic.png")} className="rounded-circle boxshadow merchant-img" alt="store_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift px-5 svg-alignn currentcolor"><img src={mysvgcross} className="icon2 mx-1"/><span>Deactivated</span></div>
                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated </button></div>
                            </div> <hr className="container" />

                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/vende.png")} className="rounded-circle boxshadow merchant-img" alt=" store_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift px-5 svg-alignn textcolor"><img src={mysvg} className="icon2 mx-1"/><span>Activated</span></div>
                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/grill-king.png")} className="rounded-circle boxshadow merchant-img" alt="store_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift px-5 svg-alignn newwordd"><img src={mysvgstar} className="icon2 mx-1"/><span>New</span></div>
                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated </button></div>
                            </div> <hr className='container'/>
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/kfc.png")} className="rounded-circle boxshadow merchant-img" alt="store_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift px-5 svg-alignn  newwordd"><img src={mysvgstar} className="icon2 mx-1"/><span>New</span></div>
                                <div className="col-1 my-2   px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1 "><p><img src={require("../../images/ghana-shoes.png")} className="rounded-circle boxshadow  merchant-img" alt="store_logo" /></p></div>
                                <div className="col-2 my-2 "><p>Adepa Shoes Ghana limited</p></div>
                                <div className="col-2 my-2 "><p>Retail, Fashion, Footwear</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift px-5 svg-alignn textcolor"><img src={mysvg} className="icon2 mx-1"/><span>Activated</span></div>
                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Deactivated </button></div>
                            </div><hr className="container" />
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
               <Footer/>

         
            </div>
        </>
    )
}
