import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
    <nav className="flex justify-between items-center">
         {/* leftside*/}
         <div>
          <Link to="/">Logo</Link>
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