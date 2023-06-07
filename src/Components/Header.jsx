import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [pageState, setPageState] = useState("Sign In");
  const location = useLocation();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign In");
      }
    });
  }, [auth]);

  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
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
              ${
                (pathMathRoute("/sign-in") || pathMathRoute("/profile")) &&
                "!text-black !border-b-red-500"
              }`}
            >
              <NavLink to="/profile">{pageState}</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
