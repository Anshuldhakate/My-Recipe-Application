import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(
          `https://recipe-backend-fy1o.onrender.com/api/recipes/favorites`
        );
        setFavorites(response.data);
      } catch (error) {
        console.error("Error fetching favorites", error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Favorite Recipes</h2>
      <div className="favorites-grid">
        {favorites.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
