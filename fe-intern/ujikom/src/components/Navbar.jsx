import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-[#120C34] shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-26 items-center py-4">
          <div className="flex items-center">
            <img
              src="https://i0.wp.com/toy-exchange.co.uk/wp-content/uploads/2022/05/Toy-Exchange_logo125.png?fit=125%2C125&ssl=1"
              alt="logo"
              className="h-16 w-auto object-cover transform hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="flex space-x-4 justify-center flex-grow font-poppins text-2xl ml-9">
            <a
              href="#home"
              className="text-[#FFFFFF] hover:text-[#6EC1E4] px-3 py-2 rounded-md font-medium transition duration-300"
            >
              <Link to="/Home">Home</Link>
            </a>
            <a
              href="/toysx`"
              className="text-[#FFFFFF] hover:text-[#6EC1E4] px-3 py-2 rounded-md font-medium transition duration-300"
            >
               <Link to="/toys">Toys</Link>
            </a>
            <a
              href="#help"
              className="text-[#FFFFFF] hover:text-[#6EC1E4] px-3 py-2 rounded-md font-medium transition duration-300"
            >
               <Link to="/help">Help and Support</Link>
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="/login"
              className="text-[#FFFFFF] bg-[#2C3E89] hover:bg-[#27315e] px-6 py-2 rounded-full font-medium transition duration-300"
            >
               <Link to="/login">Login</Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
