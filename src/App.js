import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import Customers from "./Components/Customers";
function App() {
  return (
    <>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Customers' element={<Customers/>}></Route>
</Routes>
</BrowserRouter>
 
    </>
  );
}

export default App;
