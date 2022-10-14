import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { AdminCustomerActive } from "./Pages/AdminCustomerActive/AdminCustomerActive";
import {Customerprofile} from "./Pages/Customerprofile/Customerprofile";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import {Home} from "./Pages/Home/Home";
import {AdminCustomerAll} from "./Pages/AdminCustomerAll/AdminCustomerAll";
import { AdminCustomerAll2 } from "./Pages/AdminCustomerAll/AdminCustomerAll2";
import {AdminCustomerDeactivated} from "./Pages/AdminCustomerDeactivated/AdminCustomerDeactivated";
import {AdminMerchantNew} from "./Pages/AdminMerchantNew/AdminMerchantNew";
import {AdminCustomerNew} from "./Pages/AdminCustomerNew/AdminCustomerNew";
import {AdminMerchantProfile} from "./Pages/AdminMerchantProfile/AdminMerchantProfile";
import {AdminMerchantActive} from "./Pages/AdminMerchantActive/AdminMerchantActive";
import {AdminMerchantsDeactivated} from "./Pages/AdminMerchantDeactivated/AdminMerchantsDeactivated";
import {AdminMerchantAll} from "./Pages/AdminMerchantAll/AdminMerchantAll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {

  return (
    <>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/AdminCustomerActive' element={<AdminCustomerActive/>}></Route>
  <Route path='/Customerprofile' element={<Customerprofile/>}></Route>
  <Route path='/Dashboard' element={<Dashboard/>}></Route>
  <Route path='/AdminCustomerAll' element={<AdminCustomerAll/>}></Route>
  <Route path="/AdminCustomerAll2" element={<AdminCustomerAll2/>}></Route>
  <Route path='/AdminCustomerDeactivated' element={<AdminCustomerDeactivated/>}></Route>
  <Route path='/AdminMerchantNew' element={<AdminMerchantNew/>}></Route>
  <Route path='/AdminCustomerNew' element={<AdminCustomerNew/>}></Route>
  <Route path='/AdminMerchantProfile' element={<AdminMerchantProfile/>}></Route>
  <Route path='/AdminMerchantActive' element={<AdminMerchantActive/>}></Route>
  <Route path='/AdminMerchantDeactivated' element={<AdminMerchantsDeactivated/>}></Route>
  <Route path='/AdminMerchantAll' element={<AdminMerchantAll/>}></Route>
</Routes>
</BrowserRouter>
 
    </>
  );
}

export default App;
