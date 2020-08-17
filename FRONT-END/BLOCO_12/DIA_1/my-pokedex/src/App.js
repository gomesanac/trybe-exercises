import React from "react";
import "./App.css";
import pokemons from "./data";
import Pokedex from "./Pokedex";

function App() {
  return (
    <div className="App">
      <h1>Pokédex</h1>
      <Pokedex data={pokemons} />
    </div>
  )
}

export default App;
