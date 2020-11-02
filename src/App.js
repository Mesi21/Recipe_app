import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(()=>{
    getRecepies();
  }, [])

  const getRecepies = async () => {
    const response = await fetch(`search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = response.json();
    console.log(data);
  }

  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
