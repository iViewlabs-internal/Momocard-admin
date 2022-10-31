import React from 'react'
import recreationpages from './recreationpages.css'
import mysvg from '../../images/check-circle.svg';
import mysvg2 from '../../images/check-circle-fill.svg';
import mysvgcross from "../../images/x-circle.svg";
import mysvgstar from "../../images/star.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Recreationpages = () => {
    return (
        <>

            
                
                <Navbar />
                <div className='background'>
                <div className="container">
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
                    <div className="row mx-3 py-3 table-border pb-1">
                        <div className="col-1 data">
                            <p>
                                <Link to="/AdminCustomerAll" className='now ' >All(25)</Link>
                            </p>
                        </div>
                        <div className="col-1  data">
                            <p>
                                <Link to="/AdminCustomerNew" className='now' >New(25)</Link>
                            </p>
                        </div>
                        <div className="col-1 px-2 data">
                            <p>
                                <Link to="/AdminCustomerActive" className='present'>Activated(25)</Link>
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
                                <thead class="background menu">
                                    <tr >
                                        <th scope="col">PROFILE</th>
                                        <th scope="col"> BUSINESS NAME</th>
                                        <th scope="col">MOBILE PROVIDER </th>
                                        <th scope="col">ADDED ON</th>
                                        <th scope="col">VERIFICATION</th>
                                        <th scope="col">STATUS</th>
                                        <th scope="col">VIEW</th>
                                        <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTION</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    <tr className="">
                                        <td className="col"><img src={require("../../images/ghana-shoes.png")} className="rounded-circle boxshadow merchant-img " alt="store_logo" /></td>
                                        <td className="col">Adepa Shoes Ghana limited</td>
                                        <td className="col">Retail, Fashion, Footwear</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></td>
                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/grill-king.png")} className="rounded-circle boxshadow merchant-img " alt="store_logo" /></td>
                                        <td className="col">Adepa Shoes Ghana limited</td>
                                        <td className="col">Retail, Fashion, Footwear</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></td>
                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/pure-joy.png")} className="rounded-circle boxshadow merchant-img " alt="store_logo" /></td>
                                        <td className="col">Adepa Shoes Ghana limited</td>
                                        <td className="col">Retail, Fashion, Footwear</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></td>
                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/grill-king.png")} className="rounded-circle boxshadow merchant-img " alt="store_logo" /></td>
                                        <td className="col">Adepa Shoes Ghana limited</td>
                                        <td className="col">Retail, Fashion, Footwear</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></td>
                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/profile_pic.png")} className="rounded-circle boxshadow merchant-img " alt="store_logo" /></td>
                                        <td className="col">Adepa Shoes Ghana limited</td>
                                        <td className="col">Retail, Fashion, Footwear</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></td>
                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/vende.png")} className="rounded-circle boxshadow merchant-img " alt="store_logo" /></td>
                                        <td className="col">Adepa Shoes Ghana limited</td>
                                        <td className="col">Retail, Fashion, Footwear</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></td>
                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/grill-king.png")} className="rounded-circle boxshadow merchant-img " alt="store_logo" /></td>
                                        <td className="col">Adepa Shoes Ghana limited</td>
                                        <td className="col">Retail, Fashion, Footwear</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></td>
                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/kfc.png")} className="rounded-circle boxshadow  merchant-img" alt="store_logo" /></td>
                                        <td className="col">Adepa Shoes Ghana limited</td>
                                        <td className="col">Retail, Fashion, Footwear</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></td>
                                        <td className="col">View</td>
                                        <td className="col"> <button className="bg-white rounded-pill px-3 py-2 mx-2"> Activated</button></td>
                                    </tr>
                                    <tr className="">
                                        <td className="col"><img src={require("../../images/ghana-shoes.png")} className="rounded-circle boxshadow merchant-img" alt="store_logo" /></td>
                                        <td className="col">Adepa Shoes Ghana limited</td>
                                        <td className="col">Retail, Fashion, Footwear</td>
                                        <td className="col">Added 2hrs ago</td>
                                        <td className="col"><img src={mysvg2} className="icon2 mx-2" /><span>Both</span></td>
                                        <td className="col"><img src={mysvg} className="icon2 mx-1" /><span>Activated</span></td>
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
