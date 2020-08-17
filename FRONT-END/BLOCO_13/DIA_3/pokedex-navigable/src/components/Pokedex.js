import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      type: 'All',
    };
    this.setType = this.setType.bind(this);
  }

  setType(type) {
    this.setState({ index: 0, type });
  }

  nextPokemon(limit) {
    this.setState((state) => ({
      index: (state.index + 1) % limit,
    }));
  }

  filterPokemons() {
    const { data } = this.props;
    const { type } = this.state;

    return data.filter((pokemon) => {
      if (type === 'All') return true;
      return pokemon.type === type;
    });
  }

  getTypes() {
    const { data } = this.props;

    return [...new Set(data.reduce((types, { type }) => [...types, type], []))];
  }

  render() {
    const types = this.getTypes();
    const filteredPokemons = this.filterPokemons();
    const pokemon = filteredPokemons[this.state.index];

    return (
      <div>
        <h1 className="pokedex-title">Pokédex</h1>
        <div className="pokedex">
          {<Pokemon key={pokemon.id} data={pokemon} />}
        </div>
        <div className="pokedex-type-buttons">
          <button
            className="button-text filter-button"
            type="button"
            name="All"
            key="All"
            onClick={(event) => this.setType(event.target.name)}
          >
            All
          </button>
          {types.map((type) => (
            <button
              className="button-text filter-button"
              type="button"
              name={type}
              key={type}
              onClick={(event) => this.setType(event.target.name)}
            >
              {type}
            </button>
          ))}
        </div>
        <div>
          <button
            className="button-text nextpokemon-button"
            type="button"
            name="next-pokemon"
            onClick={() => this.nextPokemon(filteredPokemons.length)}
            disabled={filteredPokemons.length <= 1}
          >
            Próximo Pokémon
          </button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
