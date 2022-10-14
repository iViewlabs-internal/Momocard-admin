import React from 'react'
import adminCustomerNew from './adminCustomerNew.css'
import mysvg from '../../images/check-circle.svg';
import mysvg2 from '../../images/check-circle-fill.svg';
import mysvgcross from "../../images/x-circle.svg";
import mysvgstar from "../../images/star.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { Thead } from '../../components/Thead';
export const AdminCustomerNew = () => {
    return (
        <>




            <Navbar />
            <div className='background'>
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Home</li>
                            <li className="breadcrumb-item active">CUSTOMER</li>
                            <li className="breadcrumb-item " aria-current="page">NEW</li>
                        </ol>
                    </nav>
                    <div className='merchant-search-tab mb-3'>
                        <img src={require("../../images/customer_icn.png")} className="storeimg mb-1 mx-3 col-2" alt="customer_emoji" />

                        <p className='col-3 mx-2 mb-2'><h3 className=' fw-light'>Customers</h3></p>
                        <input className='col-5 mb-2 searchbar' type="Search" placeholder='Search' />
                    </div>
                    <div className="row mx-3 py-3 table-border pb-1">
                        <div className="col-1 data">
                            <p>
                                <Link to="/AdminCustomerAll" className='now mx-4 ' >All(25)</Link>
                            </p>
                        </div>
                        <div className="col-1  data">
                            <p>
                                <Link to="/AdminCustomerNew" className='present' >New(25)</Link>
                            </p>
                        </div>
                        <div className="col-1 px-2 data">
                            <p>
                                <Link to="/AdminCustomerActive" className='now'>Activated(25)</Link>
                            </p>
                        </div>
                        <div className="col-6 px-5  data">
                            <p>
                                <Link to="/AdminCustomerDeactivated" className='now' >Deactivated(25)</Link>
                            </p>
                        </div>
                        <div className="col-1 end data">
                            <div className="col-1 pb-1"> <button className="rounded-pill bg-dark update"> Update</button></div>

                        </div>
                        <div className="col-1 end ">
                            <select name="" id="">
                                <option value="">Sort by &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                <option value="">Sort by &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                <option value="">Sort by &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                                <option value="">Sort by &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
                            </select>
                        </div>





                        <div class="table-responsive-sm ">
                            <table className="table">
                                <Thead />
                                <tbody>

                                    <tr className="">
                                        <td className="col"><img src={require("../../images/cust1.png")} className="customerimage" alt="customer_pic" /></td>
                                        <td className="col">Keanu Adams</td>
                                        <td className="col">MNT MONEY</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvgstar} className="icon2 mx-1" /><span className='align'>New</span></td>

                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/cust5.png")} className="customerimage" alt="customer_pic" /></td>
                                        <td className="col">Dorothy Fox</td>
                                        <td className="col">MNT MONEY</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvgstar} className="icon2 mx-1" /><span className='align'>New</span></td>

                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/cust3.png")} className="customerimage" alt="customer_pic" /></td>
                                        <td className="col">Patrick Fisher</td>
                                        <td className="col">MNT MONEY</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvgstar} className="icon2 mx-1" /><span className='align'>New</span></td>

                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/cust1.png")} className="customerimage" alt="customer_pic" /></td>
                                        <td className="col">Jose Hill</td>
                                        <td className="col">MNT MONEY</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvgstar} className="icon2 mx-1" /><span className='align'>New</span></td>

                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/cust5.png")} className="customerimage" alt="customer_pic" /></td>
                                        <td className="col">Terry Oliver</td>
                                        <td className="col">MNT MONEY</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvgstar} className="icon2 mx-1" /><span className='align'>New</span></td>

                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/cust2.png")} className="customerimage" alt="customer_pic" /></td>
                                        <td className="col">Ethan Hayes</td>
                                        <td className="col">MNT MONEY</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvgstar} className="icon2 mx-1" /><span className='align'>New</span></td>

                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/cust5.png")} className="customerimage" alt="customer_pic" /></td>
                                        <td className="col">Brandon Bradley</td>
                                        <td className="col">MNT MONEY</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvgstar} className="icon2 mx-1" /><span className='align'>New</span></td>

                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-5 mb-5">
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
                </div>

                <Footer />
            </div>

        </>
    )
}
