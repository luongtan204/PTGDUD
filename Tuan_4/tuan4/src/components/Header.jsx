import React from "react";
import "./header.css"; // Import file CSS

const Header = () => {
  return (
    <header>
      {/* Logo + Search */}
      <div className="header-left">
        <h1>
          <img src="https://res.cloudinary.com/dtk18zlgn/image/upload/v1741176503/react/iumiywcchnkcfzkddjup.png" alt="" />
        </h1>
        <input type="text" placeholder="🍳What would you like to cook?" />
      </div>

      {/* Navigation */}
      <nav>
        <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a>
      </nav>

      {/* Profile Button */}
      <div className="header-right">
        <button><img  src="https://res.cloudinary.com/dtk18zlgn/image/upload/v1741176503/react/ecb95efolvdvv5bax4vo.png" alt="" />Your Recipe Box</button>
        <img className="icon12" src="https://res.cloudinary.com/dtk18zlgn/image/upload/v1741176504/react/rwtzijlvdig5axf2gf6g.png" alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
