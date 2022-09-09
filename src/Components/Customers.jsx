import React from 'react';
import "./Customers.css";
import { Link } from "react-router-dom";
const Customers = () => {
  return (
   <>
<div>
   <ul class="nav nav-justified">
   <img src={require('../logo/momo.png')} class="rounded admin_img" alt="..."></img>
  <li class="nav-item">
    <a class="nav-link disable"href="#">ADMIN</a>
  </li>
  <li class="nav-item active">
    <a class="nav-link" href="#">DASHBOARD</a>
  </li>
  <li class="nav-item active">
    <a class="nav-link" href="#">MERCHANTS</a>
  </li>
  <li class="nav-item active">
    <a class="nav-link" href="#">CUSTOMERS</a>
  </li>
  <li class="nav-item active">
   <img src={require('../logo/admin_profile_img.png')} class="rounded" alt="..."></img>

  </li>
  <li class="nav-item active">
    <a class="nav-link active">ADMIN NAME</a>
  </li>
</ul>
</div>
<div class="search_tab">
<img src={require('../logo/customer_icn.png')} alt="..."></img>
<h3>Customers</h3>
<input type="text" placeholder='Search'/>
<img src={require('../logo/admin-bg.png')} alt="..."></img>
</div>
<table class="table">
   
  <thead>

    <tr>
      <th scope="col">PROFILE</th>
      <th scope="col">BUSINESS NAME</th>
      <th scope="col">MOBILE PROVIDER</th>
      <th scope="col">ADDED ON</th>
      <th scope="col">VERIFICATION</th>
      <th scope="col">STATUS</th>
      <th scope="col">VIEW</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
   <img src={require('../logo/cust1.png')} class="rounded" alt="..."></img>
      <td>Jose Hill</td>
      <td>MNT Money</td>
      <td>Added 2hrs ago</td>
      <td>Both<img src={require('../logo/tick.jpg')} class="rounded tick" alt="..."></img></td>
      <td class="green">Activated</td>
      <td>View</td>
      <button><select>Activate
      <option>Activated</option><option>Deactivated</option></select></button>
    </tr>
    <tr>
   <img src={require('../logo/cust2.png')} class="rounded" alt="..."></img>
      <td>Eugene Weber</td>
      <td>MNT Money</td>
      <td>Added 2hrs ago</td>
      <td>Both<img src={require('../logo/tick.jpg')} class="rounded tick" alt="..."></img></td>

      <td class="green">Activated</td>
      <td>View</td>
      <button><select>Activate
      <option>Activated</option><option>Deactivated</option></select></button>
    </tr>
    <tr>
   <img src={require('../logo/cust3.png')} class="rounded" alt="..."></img>
      <td>Patrick Fisher</td>
      <td>MNT Money</td>
      <td>Added 2hrs ago</td>
      <td>Both<img src={require('../logo/tick.jpg')} class="rounded tick" alt="..."></img></td>

      <td class="green">Activated</td>
      <td>View</td>
      <button><select>Activate
      <option>Activated</option><option>Deactivated</option></select></button>
    </tr> 
      <tr>
   <img src={require('../logo/cust4.png')} class="rounded" alt="..."></img>
      <td>Dorothy Fox</td>
      <td>MNT Money</td>
      <td>Added 2hrs ago</td>
      <td>Both<img src={require('../logo/tick.jpg')} class="rounded tick" alt="..."></img></td>

      <td class="green">Activated</td>
      <td>View</td>
      <button><select>Activate
      <option>Activated</option><option>Deactivated</option></select></button>
    </tr>
    <tr>
   <img src={require('../logo/cust5.png')} class="rounded" alt="..."></img>
      <td>Terry Oliver</td>
      <td>MNT Money</td>
      <td>Added 2hrs ago</td>
      <td>Both<img src={require('../logo/tick.jpg')} class="rounded tick" alt="..."></img></td>

      <td class="green">Activated</td>
      <td>View</td>
      <button><select>Activate
      <option>Activated</option><option>Deactivated</option></select></button>
    </tr>
    <tr>
   <img src={require('../logo/cust6.png')} class="rounded" alt="..."></img>
      <td>Keanu Adams</td>
      <td>MNT Money</td>
      <td>Added 2hrs ago</td>
      <td>Both<img src={require('../logo/tick.jpg')} class="rounded tick" alt="..."></img></td>

      <td class="green">Activated</td>
      <td>View</td>
      <button><select>Activate
      <option>Activated</option><option>Deactivated</option></select></button>
    </tr>
    <tr>
   <img src={require('../logo/cust7.png')} class="rounded seven" alt="..."></img>
      <td>Marle Stanley</td>
      <td>MNT Money</td>
      <td>Added 2hrs ago</td>
      <td>Both<img src={require('../logo/tick.jpg')} class="rounded tick" alt="..."></img></td>

      <td class="green">Activated</td>
      <td>View</td>
      <button><select>Activate
      <option>Activated</option><option>Deactivated</option></select></button>
    </tr>
    <tr>
   <img src={require('../logo/cust8.png')} class="rounded" alt="..."></img>
      <td>Ethan Hayes</td>
      <td>MNT Money</td>
      <td>Added 2hrs ago</td>
      <td>Both<img src={require('../logo/tick.jpg')} class="rounded tick" alt="..."></img></td>

      <td class="green">Activated</td>
      <td>View</td>
      <button><select>Activate
      <option>Activated</option><option>Deactivated</option></select></button>
    </tr>
    <tr>
   <img src={require('../logo/cust9.png')} class="rounded nine" alt="..."></img>
      <td>Brandon Bradley</td>
      <td>MNT Money</td>
      <td>Added 2hrs ago</td>
      <td>Both<img src={require('../logo/tick.jpg')} class="rounded tick" alt="..."></img></td>

      <td class="green">Activated</td>
      <td>View</td>
      <button><select>Activate
      <option>Activated</option><option>Deactivated</option></select></button>
    </tr>
  </tbody>
</table>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>














{/* <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  <img src={require('../logo/momo.png')} class="rounded" alt="..."></img>

    <div class="" id="navbarNav">
      <ul class="navbar-nav  navbar-collapse">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">ADMIN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active one" href="#">DASHBOARD</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active two" href="#">MERCHANTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active three">CUSTOMERS</a>
        </li>
        <li class="nav-item">
        <img src={require('../logo/admin_profile_img.png')} class="rounded four" alt="..."></img>

        </li>
        <li class="nav-item ">
          <a class="nav-link active five">ADMIN NAME</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}

   </>
  );
}

export default Customers;
