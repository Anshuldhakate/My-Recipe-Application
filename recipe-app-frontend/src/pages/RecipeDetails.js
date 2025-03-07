import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RecipeDetails.css"; 

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=c0c1477541a64d03b15ef0fff765e2ea`
        );
        setRecipe(response.data);
      } catch (error) {
        setError("Error fetching recipe details.");
        console.error("Error fetching recipe details", error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!recipe) return <p className="loading">Loading...</p>;

  return (
    <div className="recipe-details">
      <h2 className="recipe-title">{recipe.title}</h2>
      <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      
      <h3>Ingredients:</h3>
      <ul className="ingredient-list">
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <p className="recipe-instructions" dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
    </div>
  );
}

export default RecipeDetails;
