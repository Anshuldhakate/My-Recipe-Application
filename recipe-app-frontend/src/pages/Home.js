import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRecipes = async () => {
    setLoading(true);
    try {
      console.log("Fetching data from:", `https://recipe-backend-fy1o.onrender.com/api/recipes/search?query=${query}`);
  
      const response = await axios.get(
        `https://recipe-backend-fy1o.onrender.com/api/recipes/search?query=${query}`,
        { headers: { "Content-Type": "application/json" } }
      );
  
      console.log("API Response:", response.data);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  // Predefined keywords
  const keywords = [
    "Breakfast", "Lunch", "Dinner", "Snacks", "Desserts", "Drinks",
    "Italian", "Mexican", "Indian", "Chinese", "Japanese", "Mediterranean",
    "Vegetarian", "Vegan", "Keto", "Gluten-Free", "High-Protein", "Low-Carb",
    "Chicken", "Beef", "Salmon", "Eggs", "Mushroom", "Avocado"
  ];

  return (
    <div className="home-container">
      <h2 className="home-title">Search Recipes</h2>
      
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        {/* Dropdown for selecting predefined keywords */}
        <select onChange={(e) => setQuery(e.target.value)} value={query}>
          <option value="">-- Select a Keyword --</option>
          {keywords.map((keyword, index) => (
            <option key={index} value={keyword}>{keyword}</option>
          ))}
        </select>

        <button onClick={searchRecipes} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {loading ? (
        <div className="loader">Loading recipes...</div>
      ) : (
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
              <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
