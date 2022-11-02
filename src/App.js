import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import pokemonList from './data';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={ () => <Pokedex pokemonList={ pokemonList } /> } />
        <Route
          path="/pokemon/:id"
          render={ (props) => (<PokemonDetails
            { ...props }
            pokemonList={ pokemonList }
          />) }
        />
        <Route path="/about" render={ () => <About /> } />
      </Switch>
    </div>
  );
}

export default App;
