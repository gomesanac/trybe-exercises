import { NEW_FORM } from '../reducers/formReducer';

const formAction = (state) => {
  return {
    type: NEW_FORM,
    ...state,
  }
}

export default formAction;
