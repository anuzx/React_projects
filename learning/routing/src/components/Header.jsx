import React from "react";
import { Link, NavLink } from "react-router-dom";

//Link we use in place of a tag , because when we use a tag our page fully refreshes

function Header() {
  return (
    <div className="flex gap-6">
      Header :
          <NavLink
              to=""
        className={({ isActive }) =>
          `${isActive ? "text-orange-700" : "text-gray-700"}`
        }
      >
        Home 
          </NavLink>|
          
          <NavLink
              to="/about"
        className={({ isActive }) =>
          `${isActive ? "text-orange-700" : "text-gray-700"}`
        }
      >
        About
      </NavLink>
    </div>
  );
}

export default Header;

/*Link

“Go to another route”

NavLink

“Go to another route and tell me if I’m active”
*/