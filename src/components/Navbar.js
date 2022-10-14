import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    if(window.location.href.includes('/Dashboard'))
    {
    }
    else if(window.location.href.includes('/AdminMerchantAll')){
    }else{
    };
  return (
  
    <div className='navbar'>
                <ul>
                    <li className='col-1 logo'>
                        <img src={require("../images/momo.png")} alt="logo" srcset="" />
                    </li>
                    <li className='col-3 admin_text fs-4 mx-4'>ADMIN</li>

                    <div className='subnav'>

                        <li className='col-2 activea'>
                            <Link to="/Dashboard" className={ `${window.location.href.includes('/Dashboard')}` && 'activeNav'}>DASHBOARD</Link>
                        </li>
                        <li className='mx-2 col-2 activeb'>
                            <Link to="/AdminMerchantAll"className={`${window.location.href.includes('/AdminMerchantAll')}`&& 'activeNav'}>MERCHANTS</Link>
                        </li>
                        <li className='col-1 activec'>
                            <Link to="/AdminCustomerAll" className={`${window.location.href.includes('/AdminCustomerAll')}`&&'activeNav'}>CUSTOMERS</Link>
                        </li>
                    </div>
                    <li className='col-1  mx-2'>
                        <img src={require("../images/admin_profile_img.png")} alt="admin_img " className='adminimgg'/>
                    </li>
                    <li className='col-2 adminimg Adn mx-2'>ADMIN NAME</li>
                </ul>
            </div>
  
  )
}

export default Navbar
