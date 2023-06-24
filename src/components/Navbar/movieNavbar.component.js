import React from "react";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu,BiChevronLeft, BiShareAlt } from "react-icons/bi";

//For small Screen
const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          
        </div>
        <div className="w-8 h-7 flex items-center">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
//For Medium Screen


//For Large screen
const NavLg = () => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center w-1/2">
        <div className="w-35 h-10 ">
        
          <img
            src= "https://upload.wikimedia.org/wikipedia/commons/7/75/Bookmyshow-logoid.png"
            alt="logo"
            className="w-full h-full bg-white rounded-l-sm pl-2 "
          />
        </div>
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-r-sm">
          <BiSearch className="fill-slate-500 flex items-center" />
          <input
            type="search"
            className="w-full focus:outline-none"
            placeholder="Search for Movies,Events,Plays,Sports and Activities"
          ></input>
        </div>
      </div>




      <div className="flex items-center gap-3">
      <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
            Raipur <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
      </div>
    </div>
  );
};

const MovieNavbar = () => {
  return (
    <>
      <nav className="absolute  inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-800 px-4 py-3">
        <div className="md:hidden">
          {
            //Mobile Screen
            <NavSm />
          }
        </div>
        <div className="hidden lg:hidden md:block ">
          {
            //Tablet Screen
            <NavSm />
          }
        </div>
        <div className="hidden lg:flex">
          {
            //Desktop and larger screen
            <NavLg />
          }
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
