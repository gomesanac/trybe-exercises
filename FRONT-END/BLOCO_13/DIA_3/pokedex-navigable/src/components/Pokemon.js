import React from "react";
import { Link } from "react-router-dom";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, id } = this.props.data;
    return (
      <div className="pokemon-card">
        <img src={image} alt={name}></img>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>
          Weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
        <p>
          <Link to={`/pokemons/${id}`} className="link">See more</Link>
        </p>
      </div>
    );
  }
}

export default Pokemon;
