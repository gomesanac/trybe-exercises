import React from 'react';

const About = () => (
  <section>
    <h2> About Pokédex </h2>
    <section>
      <p> This application simulates a Pokédex, a digital encliclopedia containing all Pokémons </p>
      <p> One can filter Pokémons by type, and see more details for each one of them </p>
      <img
        className="pokedex-image"
        src="https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png"
        alt="Pokédex"
      />
    </section>
  </section>
);

export default About;
