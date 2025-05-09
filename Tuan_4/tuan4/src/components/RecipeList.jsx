import React, { useEffect, useState } from "react";
import './RecipeList.css'

const RecipeList = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch("https://67c83cc50acf98d070858a6f.mockapi.io/Item")
        .then(r => r.json())
        .then(data => {
            setRecipes(data)
            console.log(data)
        })
    }, [])



  return (
    <div id="recipe-list__container">
        {
            recipes.map((item) => (
                <div  className="recipe-item">
                    <img class='recipe-item__img' src={item.image} id={item.id}/>
                    <div className="recipe-item__text">
                        <b class='recipe-item__title'>{item.name}</b> <br />
                        <span class='recipe-item__time'>{item.time} minutes</span>
                    </div>
                </div>
                ))
        }
    </div>
  );
};

export default RecipeList;
