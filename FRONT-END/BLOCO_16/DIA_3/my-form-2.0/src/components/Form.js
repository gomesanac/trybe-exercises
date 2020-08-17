import React from "react";
import { connect } from 'react-redux';
import formAction from './actions/formAction';

const states = [
  "Selecione",
  "Rio de Janeiro",
  "Minas Gerais",
  "Amapá",
  "Amazonas",
  "São Paulo",
  "Ceará",
  "Distrito Federal",
];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
      state: "",
      house: "",
      resume: "",
      role: "",
      roleDescription: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  validateAddress(address) {
    return address.replace(/[^\w\s]/gi, "");
  }

  changeHandler(event) {
    let { name, value } = event.target;

    if (name === "name") value = value.toUpperCase();

    if (name === "address") value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler(event) {
    let { name, value } = event.target;

    if (name === "city") value = value.match(/^\d/) ? "" : value;

    if (name === "email")
      value = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? value : "";

    this.updateState(name, value);
  }

  updateState(chave, value) {
    this.setState({ [chave]: value });
  }

  clearState() {
    this.setState({
      name: "",
      email: "",
      cpf: "",
      address: "",
      city: "",
      state: "",
      house: "",
      resume: "",
      role: "",
      roleDescription: "",
    });
  }

  render() {
    return (
      <div>
        <fieldset>
          <legend>Dados pessoais:</legend>
          <div>
            Nome Completo:
            <input
              type="text"
              name="name"
              value={this.state.name}
              maxLength="40"
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              maxLength="50"
              onBlur={this.onBlurHandler}
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            CPF:
            <input
              type="text"
              name="cpf"
              value={this.state.cpf}
              maxLength="11"
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            Endereço:
            <input
              type="text"
              name="address"
              value={this.state.address}
              maxLength="200"
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            Cidade:
            <input
              type="text"
              name="city"
              value={this.state.city}
              maxLength="200"
              onBlur={this.onBlurHandler}
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            Estado:
            <select
              name="state"
              value={this.state.state}
              onChange={this.changeHandler}
            >
              {states.map((state) => (
                <option key={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            Tipo de residência:
            <input
              type="radio"
              id="type1"
              name="house"
              value="Casa"
              onChange={this.changeHandler}
              required
            />
            <label htmlFor="type1">Casa</label>
            <input
              type="radio"
              id="type2"
              name="house"
              value="Apartamento"
              onChange={this.changeHandler}
              required
            />
            <label htmlFor="type2">Apartamento</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Dados profissionais:</legend>
          <div>
            Resumo do Currículo:
            <textarea
              name="resume"
              maxLength="1000"
              value={this.state.resume}
              onChange={this.changeHandler}
              required
            />
          </div>
          <div>
            Cargo:
            <input
              type="text"
              name="role"
              maxLength="40"
              required
              value={this.state.role}
              onChange={this.changeHandler}
              onMouseEnter={() => {
                alert("Preencha com cuidado esta informação.");
              }}
            />
          </div>
          <div>
            Descrição do cargo:
            <textarea
              name="roleDescription"
              maxLength="500"
              value={this.state.roleDescription}
              onChange={this.changeHandler}
            />
          </div>
        </fieldset>
        <button type="button" onClick={() => this.props.send(this.state)}>
          Enviar
        </button>
        <button type="button" onClick={this.clearState}>
          Limpar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispacth) => ({
  send: (state) => dispacth(formAction(state)),
});

export default connect(null, mapDispatchToProps)(Form);
