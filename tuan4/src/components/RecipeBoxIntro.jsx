import React from "react";
import "./RecipeBoxIntro.css";

const RecipeBoxIntro = () => {
  return (
    <div className="recipe-box">
      <nav className="breadcrumb">
        Home &gt; <span className="active">Your Recipe Box</span>
      </nav>

      <div className="profile">
        <img src="https://res.cloudinary.com/dzljgccna/image/upload/v1741178326/ptgd/lhei5dfduzmypnoprbd9.png" alt="Emma Gonzalez" />
        <div>
          <h1>Emma Gonzalez’s Recipe Box</h1>
          <p>
            Emma Gonzalez is a deputy editor at Cheffly, bringing her expertise
            as a former cooking editor at The Los Angeles Times...
          </p>
          <div className="buttons">
            <span className="subscribe">6.5k Subscribers</span>
            <button className="share-btn">Share</button>
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
