import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);

  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/") && "!text-black !border-b-red-500"
              }`}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
               ${pathMathRoute("/offers") && "!text-black !border-b-red-500"}`}
            >
              <NavLink to="/offers">Offers</NavLink>
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent  
              ${pathMathRoute("/sign-in") && "!text-black !border-b-red-500"}`}
            >
              <NavLink to="/sign-in">Sign in</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}