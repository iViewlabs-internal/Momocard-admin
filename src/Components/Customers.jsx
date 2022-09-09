import React from 'react';
import "./customers.css";
import { Link } from "react-router-dom";
const Customers = () => {
  return (
    <>
      {/* <div class="navigation">
        <ul class="nav nav-justified">
          <img src={require('../images/momo.png')} class="rounded admin_img" alt="..."></img>
          <li class="nav-item admin_nav">
            <a class="nav-link disable" href="#">ADMIN</a>
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
            <img src={require('../images/admin_profile_img.png')} class="rounded" alt="..."></img>

          </li>
          <li class="nav-item active">
            <a class="nav-link active">ADMIN NAME</a>
          </li>
        </ul>
      </div> */}
      <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center w-50 header-auth">
            <img
              src={require("../images/momo.png")}
              className="logo-img-main"
              alt="momo-logo"
            />
            <p className="navbar-brand fs-3 fw-light ms-2 mt-3" href="#">
              MERCHANT
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center w-50 mt-3">
            <p className="text-decoration-underline hover-para">OFFERS</p>
            <p className="hover-para">ADD NEW OFFER</p>
            <p className="hover-para">BUSINESS</p>
            <img
              src={require("../images/admin_profile_img.png")}
              alt="profile-user"
             className="img-profile-picture"
            />
            <p className="align-self-center">
              ADEPA SHOES <span className="ps-2">|</span>{" "}
              <span className="fw-bold"> EN</span>{" "}
              <span className="ps-2">FR</span>
            </p>
          </div>
        </div>
      <div class="details">
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
              <img src={require('../images/cust1.png')} class="rounded" alt="..."></img>
              <td>Jose Hill</td>
              <td>MNT Money</td>
              <td>Added 2hrs ago</td>
              <td>Both<img src={require('../images/tick.jpg')} class="rounded tick" alt="..."></img></td>
              <td class="green">Activated</td>
              <td>View</td>
              <button><select>Activate
                <option>Activated</option><option>Deactivated</option></select></button>
            </tr>
            <tr>
              <img src={require('../images/cust2.png')} class="rounded" alt="..."></img>
              <td>Eugene Weber</td>
              <td>MNT Money</td>
              <td>Added 2hrs ago</td>
              <td>Both<img src={require('../images/tick.jpg')} class="rounded tick" alt="..."></img></td>

              <td class="green">Activated</td>
              <td>View</td>
              <button><select>Activate
                <option>Activated</option><option>Deactivated</option></select></button>
            </tr>
            <tr>
              <img src={require('../images/cust3.png')} class="rounded" alt="..."></img>
              <td>Patrick Fisher</td>
              <td>MNT Money</td>
              <td>Added 2hrs ago</td>
              <td>Both<img src={require('../images/tick.jpg')} class="rounded tick" alt="..."></img></td>

              <td class="green">Activated</td>
              <td>View</td>
              <button><select>Activate
                <option>Activated</option><option>Deactivated</option></select></button>
            </tr>
            <tr>
              <img src={require('../images/cust4.png')} class="rounded" alt="..."></img>
              <td>Dorothy Fox</td>
              <td>MNT Money</td>
              <td>Added 2hrs ago</td>
              <td>Both<img src={require('../images/tick.jpg')} class="rounded tick" alt="..."></img></td>

              <td class="green">Activated</td>
              <td>View</td>
              <button><select>Activate
                <option>Activated</option><option>Deactivated</option></select></button>
            </tr>
            <tr>
              <img src={require('../images/cust5.png')} class="rounded" alt="..."></img>
              <td>Terry Oliver</td>
              <td>MNT Money</td>
              <td>Added 2hrs ago</td>
              <td>Both<img src={require('../images/tick.jpg')} class="rounded tick" alt="..."></img></td>

              <td class="green">Activated</td>
              <td>View</td>
              <button><select>Activate
                <option>Activated</option><option>Deactivated</option></select></button>
            </tr>
            <tr>
              <img src={require('../images/cust6.png')} class="rounded" alt="..."></img>
              <td>Keanu Adams</td>
              <td>MNT Money</td>
              <td>Added 2hrs ago</td>
              <td>Both<img src={require('../images/tick.jpg')} class="rounded tick" alt="..."></img></td>

              <td class="green">Activated</td>
              <td>View</td>
              <button><select>Activate
                <option>Activated</option><option>Deactivated</option></select></button>
            </tr>
            <tr>
              <img src={require('../images/cust7.png')} class="rounded seven" alt="..."></img>
              <td>Marle Stanley</td>
              <td>MNT Money</td>
              <td>Added 2hrs ago</td>
              <td>Both<img src={require('../images/tick.jpg')} class="rounded tick" alt="..."></img></td>

              <td class="green">Activated</td>
              <td>View</td>
              <button><select>Activate
                <option>Activated</option><option>Deactivated</option></select></button>
            </tr>
            <tr>
              <img src={require('../images/cust8.png')} class="rounded" alt="..."></img>
              <td>Ethan Hayes</td>
              <td>MNT Money</td>
              <td>Added 2hrs ago</td>
              <td>Both<img src={require('../images/tick.jpg')} class="rounded tick" alt="..."></img></td>

              <td class="green">Activated</td>
              <td>View</td>
              <button><select>Activate
                <option>Activated</option><option>Deactivated</option></select></button>
            </tr>
            <tr>
              <img src={require('../images/cust9.png')} class="rounded nine" alt="..."></img>
              <td>Brandon Bradley</td>
              <td>MNT Money</td>
              <td>Added 2hrs ago</td>
              <td>Both<img src={require('../images/tick.jpg')} class="rounded tick" alt="..."></img></td>

              <td class="green">Activated</td>
              <td>View</td>
              <button><select>Activate
                <option>Activated</option><option>Deactivated</option></select></button>
            </tr>
          </tbody>
        </table>
      </div>
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
    </>
  );
}

export default Customers;
