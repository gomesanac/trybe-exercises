import React from 'react';

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pokemon: null,
    };
  }

  componentDidMount() {
    const { match, data } = this.props;
    const pokemon = data.find(({ id }) => id === Number(match.params.id));
    this.setState({ isLoading: false, pokemon });
  }

  render() {
    const { isLoading, pokemon } = this.state;

    if (isLoading) return <h1>Loading...</h1>;

    const { name, type, averageWeight, image, foundAt, summary } = pokemon;

    return (
      <div>
        <h1>{`${name} Details`}</h1>
        <img src={image} alt={name}></img>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>
          Weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
        <h1>Summary</h1>
        <p>{summary}</p>
        <h1>{`Game Locations of ${name}`}</h1>
        <div className="location">
          {foundAt.map(({ location, map }) => (
            <div key={location}>
              <img src={map} alt={location} />
              <p>{location}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
