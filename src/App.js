import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const getRecipes = async () => {
    const response = await fetch(`search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search); 
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button" type="submit" value={search} onChange={updateSearch}>Search</button>
      </form>
      <div className="recepies">
        {recipes.map(rp => (
          <Recipe
            key={rp.recipe.label}
            title={rp.recipe.label}
            calories={Math.round(rp.recipe.calories)}
            image={rp.recipe.image}
            ingredients={rp.recipe.ingredients}
          />
        )) }
      </div>
    </div>
  );
}

export default App;
