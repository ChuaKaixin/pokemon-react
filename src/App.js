import React, { Component } from "react";
import Card from "./Card";
import {getPokemons} from './pokemonData';

class App extends Component {
  state = {
    pokemons: getPokemons()
  }

  render() {
    let {pokemons} = this.state;
    return (
      <div className="wrapper filterInput">
        <input type="text" placeholder="Search your Pokedex!" onChange={this.handleChange}/>
        <div className="list">
          {pokemons.length > 0 && 
              pokemons.map(pokemon => 
              <Card key={pokemon.name} pokemon={pokemon} />
              )
          }
          {pokemons.length === 0 &&  (<div>Oops. No pokemon found.</div>)}
        </div>
      </div>
    );
    
}

  handleChange = (event) => {
    //let duplicatePokemon = [...getPokemons()];
    let {value} = event.target; 
    let filteredPokemons = getPokemons().filter( (pokemon) => {
        return pokemon.name.toLowerCase().includes(value.toLowerCase())
      }
    );
    this.setState({pokemons : filteredPokemons});
  }
}

export default App;
