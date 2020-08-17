import React from "react";
import Pokemon from "./Pokemon";
import "./Pokedex.css"

class Pokedex extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="pokedex">
        {data.map((pokemon) => (
          <Pokemon key={pokemon.name} data={pokemon} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
