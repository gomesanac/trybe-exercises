import React from "react";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.data;
    return (
      <div className="pokemon-card">
        <img src={image} alt={name}></img>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
      </div>
    );
  }
}

export default Pokemon;
