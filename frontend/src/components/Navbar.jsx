import React from "react";
import { Link } from "react-router-dom";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoSearchCircle } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  
  const currentuser = true;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* leftside*/}
        <div className="flex items-center md-gap-16 gap-4">
          <Link to="/">
            <RiBarChartHorizontalLine className="size-6" />
          </Link>

          {/*search input*/}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchCircle className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/*rightside*/}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {
               currentuser ? <>
               <button>
                
               </button>
               </> : 
               <Link to="/login">
                <FaUser className="size-6"/>
              </Link>
            }
          </div>
          <FaUser className="size-6" />
          <button className="hidden sm:block">
            <CiHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-yellow-400 p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <CiShoppingCart className="size-4" />
            <span className="text-sm font-semibold sm:ml-1"></span>
          </Link>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
