import React from "react";
import "./RecipeBoxIntro.css";

const RecipeBoxIntro = () => {
  return (
    <div className="recipe-box">
      <nav className="breadcrumb">
        Home &gt; <span className="active">Your Recipe Box</span>
      </nav>

      <div className="profile">
        <img className="profileimg" src="https://res.cloudinary.com/dtk18zlgn/image/upload/v1741176504/react/rwtzijlvdig5axf2gf6g.png" alt="Emma Gonzalez" />
        <div>
          <h1>Emma Gonzalez’s Recipe Box</h1>
          <p>
          Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
          </p>
          <div className="buttons">
            <span className="subscribe">6.5k Subscribers</span>
            <button className="share-btn">Share <img className="iconshare" src="https://res.cloudinary.com/dtk18zlgn/image/upload/v1741176507/react/vwaxgzsawv2e0pxkb0zs.png" alt="" /></button>
          </div>
        </div>
      </div>

      <div className="nav-tabs">
        <button className="active">Saved Recipes</button>
        <button>Folders</button>
        <button>Recipes by Genevieve</button>
      </div>
    </div>
  );
};

export default RecipeBoxIntro;
