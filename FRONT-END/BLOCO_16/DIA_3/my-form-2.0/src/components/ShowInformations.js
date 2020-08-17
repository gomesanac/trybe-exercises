import React from 'react';
import { connect } from 'react-redux';

function ShowInformations(props) {
  const {
    name,
    email,
    cpf,
    address,
    city,
    state,
    house,
    resume,
    role,
    roleDescription,
  } = props.informations;

  return (
    <div>
      <h2>Informações:</h2>
      <p>{name}</p>
      <p>{email}</p>
      <p>{cpf}</p>
      <p>{address}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{house}</p>
      <p>{resume}</p>
      <p>{role}</p>
      <p>{roleDescription}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  informations: state,
});

export default connect(mapStateToProps)(ShowInformations);
