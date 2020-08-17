export const NEW_FORM = 'NEW_FORM';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  house: '',
  resume: '',
  role: '',
  roleDescription: '',
};

export const formReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NEW_FORM:
      return {
        name: action.name,
        email: action.email,
        cpf: action.cpf,
        address: action.address,
        city: action.city,
        state: action.state,
        house: action.house,
        resume: action.resume,
        role: action.role,
        roleDescription: action.roleDescription,
      };
    default:
      return state;
  }
};
