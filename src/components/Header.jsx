import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../features/CartManager.jsx";
import Cart from "../components/Cart.jsx";

function Header() {
  const { dispatch, cartItem, handleToggle } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);

  function handleCart() {
    dispatch({ type: "toCart" });
    dispatch({ type: "closeCart" });
  }

  function handleMobileNav() {
    setIsVisible((set) => !set);
  }

  return (
    <>
      <Cart />

      <div className="bg-red-900 sticky top-0 z-50">
        {/* <span className="bg-[#91a4ad] w-full inline-block py-5 text-center text-white">Black Fridays discount - Take advantage of them!</span> */}
        <span className="bg-[#EFF0D1] w-full inline-block py-5 text-center text-red-900">
          Black Friday&apos;s discount - Take advantage of them!
        </span>
        <div className="lg:flex justify-between md:flex lg:mx-20 mx-9 px-9 py-5 hidden md:px-0 md:mx-3">
          <Link to="/home" className="flex text-xl md:text-1xl text-white">
            <p className="font-bold">Cozy</p> Hub
          </Link>
          <span className="flex justify-around space-x-10 md:text-[1rem] ml-36 md:ml-32 md:space-x-5 text-white text-lg">
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/showroom">SHOWROOM</NavLink>
            <NavLink to="/brands">BRANDS</NavLink>
            {/* <NavLink to='/users'>USER</NavLink>  */}
          </span>

          <span className="flex justify-between items-center space-x-5">
            <select
              className="bg-red-900 outline-none text-white"
              name=""
              id=""
            >
              <option value="">NIG</option>
              <option value="">EGY</option>
              <option value="">UK</option>
              <option value="">JP</option>
              <option value="">GER</option>
            </select>

            <span className="flex justify-between items-center text-white space-x-5">
              <CiSearch className="size-6 cursor-pointer" />
              <FaRegUser />
              <Link>
                <p
                  onClick={handleToggle}
                  className="text-sm border-white border px-[6px] lg:px-[12px] py-2 rounded-full"
                >
                  Cart {cartItem}
                </p>
              </Link>
            </span>
          </span>
        </div>
      </div>

      {/* Navigation Button */}

      <Link
        onClick={handleMobileNav}
        className="lg:hidden md:hidden visible fixed right-0 top-20 mx-4 z-50 cursor-pointer '"
      >
        <div className="w-6 bg-red-600 h-[3px] mb-[2px]"></div>
        <div className="w-4 bg-red-600 h-[3px] mb-[2px]"></div>
        <div className="w-2 bg-red-600 h-[3px]"></div>
      </Link>
      {/* <CiMenuBurger className='size-6 lg:hidden md:hidden visible fixed right-0 top-10 z-50 bg-white p-4 mx-3  text-red-900 rounded-full cursor-pointer' onClick={handleMobileNav}/> */}

      <div
        className={`bg-red-900 fixed h-full right-0 top-0 z-50 ${
          isVisible ? "toggle" : "untoggle"
        }`}
      >
        <div className=" flex gap-9 mx-3 px-3 lg:px-10 py-14 space-x-7">
          <span className="grid text-white text-lg gap-3">
            <Link to="/" className="flex text-xl text-1xl text-white">
              <p className="font-bold">Cozy</p> Hub
            </Link>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/showroom">SHOWROOM</NavLink>
            <NavLink to="/brands">BRANDS</NavLink>
            {/* <NavLink to='/users'>USER</NavLink>  */}
          </span>
          <Link to="#">
            <p
              onClick={handleMobileNav}
              className="text-2xl border border-white text-white px-2.5 py-[1px] rounded-full border-spacing-1 cursor-pointer"
            >
              &times;
            </p>
          </Link>
        </div>
        <span className="flex items-center text-white mx-6 lg:px-9 px-2 space-x-5">
          <FaRegUser />
          <Link>
            <p
              onClick={handleCart}
              className="text-sm border-white border px-3 py-2 rounded-full"
            >
              Cart {cartItem}
            </p>
          </Link>
        </span>
      </div>
    </>
  );
}

export default Header;
