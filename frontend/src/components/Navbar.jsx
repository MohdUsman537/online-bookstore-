import React from 'react';
import { Link } from 'react-router-dom';
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoSearchCircle } from "react-icons/io5";


const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
    <nav className="flex justify-between items-center">
         {/* leftside*/}
         <div className="flex items-center md-gap-16 gap-4">
          <Link to="/">
             <RiBarChartHorizontalLine className="size-6"/>
          </Link>

          {/*search input*/}
          <div className="relative sm:w-72 w-40 space-x-2">
          <IoSearchCircle className="absolute inline-block left-3 inset-y-2"/>
          <input type="text" placeholder='Search here' className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
          </div>
         </div>
         {/*rightside*/}
         <div>
          nav items
         </div>
    </nav>
    </header>

  );
};

export default Navbar;