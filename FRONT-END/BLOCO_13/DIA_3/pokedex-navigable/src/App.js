import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import pokemons from './data';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <h3><Link to="/" className="link">HOME</Link></h3>
          <h3><Link to="/about" className="link">ABOUT</Link></h3>
        </div>
        <Switch>
          <Route exact path="/" render={(props) => <Pokedex {...props} data={pokemons} />} />
          <Route path="/about" component={About} />
          <Route path="/pokemons/:id" render={(props) => <PokemonDetails {...props} data={pokemons} />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
