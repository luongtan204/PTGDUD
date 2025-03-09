import React from "react";
import "./header.css"; // Import file CSS

const Header = () => {
  return (
    <header>
      {/* Logo + Search */}
      <div className="header-left">
        <h1>
          <span>🍳</span> Cheffly
        </h1>
        <input type="text" placeholder="What would you like to cook?" />
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
        <button>Your Recipe Box</button>
        <img src="https://res.cloudinary.com/dzljgccna/image/upload/v1741178326/ptgd/lhei5dfduzmypnoprbd9.png" alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
