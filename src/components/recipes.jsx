import React, { useState, useEffect } from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import "../App.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]); // Az API-ból jövő receptek
  const [loading, setLoading] = useState(true); // Betöltés állapot
  const [searchQuery, setSearchQuery] = useState(""); // Keresési lekérdezés
  const [error, setError] = useState(null); // Hiba kezelése

  // API lekérés kereséshez
  useEffect(() => {
    const fetchRecipes = async () => {
      if (searchQuery === "") {
        setRecipes([]); // Ha üres a keresési mező, töröljük a listát
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);

        if (response.data.meals) {
          setRecipes(response.data.meals); // A válaszban található receptek beállítása
        } else {
          setRecipes([]); // Ha nincs találat, üres listát jelenítünk meg
        }
        setLoading(false);
      } catch (error) {
        setError("Hiba történt a receptek betöltésekor: " + error.message);
        setLoading(false); // Hiba esetén is befejezzük a betöltést
      }
    };

    // Debounce függvény alkalmazása: vár 500 ms-t, mielőtt lekérné az adatokat
    const debouncedFetch = debounce(fetchRecipes, 500);

    debouncedFetch(); // Keresés indítása

    return () => {
      debouncedFetch.cancel(); // Debounced függvény törlése, ha a komponens unmountolódik
    };
  }, [searchQuery]); // A `searchQuery` változása triggereli a lekérést

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Beírva a keresési kifejezés
  };

  if (loading) {
    return <div className="text-white">Betöltés...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Hibát jelenít meg, ha van
  }

  return (
    <div className="p-6  min-h-screen">
      {/* Kereső mező */}
      <div className="mb-4">
        <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Keress egy receptet..." className="p-2 border border-gray-300 rounded-md w-full text-white" />
      </div>

      {/* Ha nincs találat */}
      {recipes.length === 0 && searchQuery && <div className="text-center text-gray-500">Nincs találat!</div>}

      {/* A találatok listája */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200">
            <img
              src={recipe.strMealThumb} // Kép URL-jét adja vissza az API
              alt={recipe.strMeal}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{recipe.strMeal}</h3>
            <p className="text-gray-600 mt-2">
              <strong>Hozzávalók:</strong> {recipe.strIngredient1}, {recipe.strIngredient2}
            </p>
            <p className="text-gray-700 mt-2">{recipe.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
