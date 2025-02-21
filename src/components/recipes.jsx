import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("lastSearch") || "");
  const [error, setError] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!searchQuery) {
        setRecipes([]);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
        setRecipes(response.data.meals || []);
      } catch (error) {
        setError("Hiba történt a receptek betöltésekor: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      localStorage.setItem("lastSearch", searchQuery);
      const timeout = setTimeout(() => {
        fetchRecipes();
      }, 2000);
      setTypingTimeout(timeout);
    }
    return () => clearTimeout(typingTimeout);
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToSearch = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="p-6 min-h-screen flex flex-col" style={{ minHeight: "1080px" }}>
      {!selectedRecipe ? (
        <>
          <div className="mb-4 flex-grow">
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Keress egy receptet..." className="p-2 border border-gray-300 rounded-md w-full text-white" />
          </div>
          {loading && <div className="text-white">Betöltés...</div>}
          {error && <div className="text-red-500">{error}</div>}
          {!loading && !error && recipes.length === 0 && searchQuery && <div className="text-center text-gray-500">Nincs találat!</div>}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 flex-grow">
            {recipes.map((recipe) => (
              <div key={recipe.idMeal} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200 cursor-pointer" onClick={() => handleRecipeClick(recipe)}>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover rounded-lg" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{recipe.strMeal}</h3>
                <p className="text-gray-600 mt-2">
                  <strong>Hozzávalók:</strong> {recipe.strIngredient1}, {recipe.strIngredient2}
                </p>
                <p className="text-gray-700 mt-2">{recipe.strInstructions.length > 50 ? recipe.strInstructions.substring(0, 50) + "... tovább" : recipe.strInstructions}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto flex flex-col min-h-screen">
          <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} className="w-full h-64 object-cover rounded-lg" />
          <h2 className="text-2xl font-bold mt-4">{selectedRecipe.strMeal}</h2>
          <p className="text-gray-700 mt-2">
            <strong>Hozzávalók:</strong> {selectedRecipe.strIngredient1}, {selectedRecipe.strIngredient2}, ...
          </p>
          <p className="text-gray-700 mt-2 flex-grow">
            <strong>Elkészítés:</strong> {selectedRecipe.strInstructions}
          </p>
          {selectedRecipe.strCookTime && (
            <p className="text-gray-700 mt-2">
              <strong>Elkészítési idő:</strong> {selectedRecipe.strCookTime} perc
            </p>
          )}
          <button onClick={handleBackToSearch} className="mt-5 p-2 text-black rounded self-center w-full max-w-xs">
            Vissza
          </button>
        </div>
      )}
    </div>
  );
};

export default Recipes;
