import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Users from "./pages/Users.jsx";
import ShowRoom from "./pages/ShowRoom.jsx";
import { useEffect } from "react";
import Brands from "./pages/Brands.jsx";
import Sneakers from "./components/Sneakers.jsx";
import Hats from "./components/Hats.jsx";
import Womens from "./components/Womens.jsx";
import Jackets from "./components/Jackets.jsx";
import Mens from "./components/Mens.jsx";

function App() {
  useEffect(() => {
    document.title = `CozyHub`;
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home />} /> */}

          <Route index element={<Users />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            {/* <Route path="hats" element={<Hats />} /> */}
            <Route index element={<Hats />} />
            <Route path="sneakers" element={<Sneakers />} />
            <Route path="womens" element={<Womens />} />
            <Route path="jackets" element={<Jackets />} />
            <Route path="mens" element={<Mens />} />
          </Route>

          {/* <Route path='/users' element={<Users />}/> */}

          <Route path="/showroom" element={<ShowRoom />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="*" element={<Users />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
