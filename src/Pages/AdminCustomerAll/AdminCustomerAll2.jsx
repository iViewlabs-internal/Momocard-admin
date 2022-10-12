import React from 'react'
import adminCustomerAll from './adminCustomerAll.css'
import mysvg from '../../images/check-circle.svg';
import mysvg2 from '../../images/check-circle-fill.svg';
import mysvgcross from "../../images/x-circle.svg";
import mysvgstar from "../../images/star.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export const AdminCustomerAll2 = () => {
    return (
        <>
            <Navbar />
            <div className='backcolor'>

                <div className='container'>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Home</li>
                            <li className="breadcrumb-item active">CUSTOMER</li>
                            <li className="breadcrumb-item " aria-current="page">ALL</li>
                        </ol>
                    </nav>

                    <div className='merchant-search-tab mb-3'>
                        <img src={require("../../images/customer_icn.png")} className="storeimg mb-1 mx-3 col-2" alt="customer_emoji" />
                        <p className='col-3 mb-2'><h3 className=' fw-light'>Customers</h3></p>
                        <input className='col-5 mb-2 searchbar' type="Search" placeholder='Search' />
                    </div>
                    <div className="bg-white rounder">

                        <div className="row mx-3 py-3 pb-1">
                            <div className="col-1">
                                <p>
                                    <Link to="/AdminCustomerAll" className='present'>All(25)</Link>
                                </p>
                            </div>
                            <div className="col-1">
                                <p>
                                    <Link to="/AdminCustomerNew" className='now' >New(25)</Link>
                                </p>
                            </div>
                            <div className="col-1 px-2 ">
                                <p>
                                    <Link to="/AdminCustomerActive" className='now' >Activated(25)</Link>
                                </p>
                            </div>
                            <div className="col-7 px-5">
                                <p>
                                    <Link to="/AdminCustomerDeactivated" className='now' >Deactivated(25)</Link>
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
                            <div className="row new pt-2 mb-1">
                                <div className="col-1"><p><img src={require("../../images/cust1.png")} className="custimg" alt="customer_pic" /></p></div>
                                <div className="col-2 my-2 "><p>Jose Hill</p></div>
                                <div className="col-2 my-2 "><p>MNT MONEY</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2 shift "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift px-4  svg-alig currentcolor"><img src={mysvgcross} className="icon2 mx-1" /><span>Deactivated</span></div>
                                <div className="col-1 my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1"><p><img src={require("../../images/cust2.png")} className="custimg" alt="customer_pic" /></p></div>
                                <div className="col-2 my-2  "><p>Eugene Weber</p></div>
                                <div className="col-2 my-2  "><p>MNT MONEY</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift  px-4 svg-alig textcolor"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></div>
                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1"><p><img src={require("../../images/cust3.png")} className="custimg" alt="customer_pic" /></p></div>
                                <div className="col-2"><p>Patrick Fisher</p></div>
                                <div className="col-2"><p>MNT MONEY</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift  px-5 svg-alig  newwordd"><img src={mysvgstar} className="icon2 mx-1" /><span>New</span></div>
                                <div className="col-1 my-2   px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1"><p><img src={require("../../images/cust4.png")} className="custimg" alt="customer_pic" /></p></div>
                                <div className="col-2 my-2  "><p>Dorothy Fox</p></div>
                                <div className="col-2 my-2  "><p>MNT MONEY</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift px-4  svg-alig currentcolor"><img src={mysvgcross} className="icon2 mx-1" /><span>Deactivated</span></div>
                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1"><p><img src={require("../../images/cust5.png")} className="custimg" alt="customer_pic" /></p></div>
                                <div className="col-2 my-2  "><p>Terry Oliver</p></div>
                                <div className="col-2 my-2  "><p>MNT MONEY</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift  px-5 svg-alig newwordd"><img src={mysvgstar} className="icon2 mx-1" /><span>New</span></div>
                                <div className="col-1 my-2   px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1"><p><img src={require("../../images/cust6.png")} className="custimg" alt="customer_pic" /></p></div>
                                <div className="col-2 my-2  "><p>Keanu Adams</p></div>
                                <div className="col-2 my-2  "><p>MNT MONEY</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1 my-2  shift  px-4 svg-alig textcolor"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></div>
                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1"><p><img src={require("../../images/cust1.png")} className="custimg" alt="customer_pic" /></p></div>
                                <div className="col-2 my-2  "><p>Marie Stanley</p></div>
                                <div className="col-2 my-2  "><p>MNT MONEY</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1 my-2  shift  px-4 svg-alig textcolor"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></div>
                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated </button></div>
                            </div> <hr className="container" />
                            <div className="row new mb-1">
                                <div className="col-1"><p><img src={require("../../images/cust2.png")} className="custimg" alt="customer_pic" /></p></div>
                                <div className="col-2 my-2  "><p>Ethan Hayes</p></div>
                                <div className="col-2 my-2  "><p>MNT MONEY</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1  my-2 shift  px-5 svg-alig newwordd"><img src={mysvgstar} className="icon2 mx-1" /><span>New</span></div>
                                <div className="col-1 my-2   px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></div>
                            </div> <hr className="container" />
                            <div className="row new pb-1">
                                <div className="col-1"><p><img src={require("../../images/cust5.png")} className="custimg" alt="customer_pic" /></p></div>
                                <div className="col-2 my-2  "><p>Brandon Bradley</p></div>
                                <div className="col-2 my-2  "><p>MNT MONEY</p></div>
                                <div className="col-2 my-2   px-2"><p>Added 2hrs ago</p></div>
                                <div className="col-1 my-2  shift "><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></div>
                                <div className="col-1 my-2  shift  px-4 svg-alig textcolor"><img src={mysvg} className="icon2 mx-1" /><span> Activated</span></div>
                                <div className="col-1  my-2  px-5"><p>View</p></div>
                                <div className="col-1 px-5 shiftt"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></div>
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
                            <li className='now' ><Link to="/AdminCustomerAll" className='now'>1</Link></li>
                            <li className='page'><a >2</a></li>
                            <li ><a className='now'>3</a></li>
                            <li ><a className='now'>4</a></li>
                            <li>
                                <a >&gt;</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Footer />
                {/* <div className="Footer">
                    Copyright &copy; 2019 Company Name.All Rights Reserved
                </div> */}
            </div>
        </>
    )
}
