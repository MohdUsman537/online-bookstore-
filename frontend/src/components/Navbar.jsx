import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoSearchCircle } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import iconImage from "../assets/avatar.png";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Checkout", href: "/checkout" }, // Fixed the typo in "checkout"
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const cartItems = useSelector(state => state.cart.cartItems);

  const {currentUser, logout} = useAuth()
  const token = localStorage.getItem('token');

  const handleLogOut = () => {
    logout();
  }

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Left Side */}
        <div className="flex items-center md-gap-16 gap-4">
          <Link to="/">
            <RiBarChartHorizontalLine className="size-6" />
          </Link>

          {/* Search Input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchCircle className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={iconImage}
                    alt="User Avatar"
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                          <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : token ? (
              <Link to="/dashboard" className="border-b-2 border-primary">
                Dashboard
              </Link>
            ) : (
              <Link to="/login">
                <FaUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <CiHeart className="size-6" />
          </button>

          <Link to="/cart" className="bg-yellow-400 p-1 sm:px-6 px-2 flex items-center rounded-sm">
            <CiShoppingCart className="size-4" />
            {
               cartItems.length > 0  ?  <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> :
               <span className="text-sm font-semibold sm:ml-1"></span>
              }
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
