import { createStore } from 'redux';
import { formReducer } from '../reducers/formReducer';

const store = createStore(formReducer);

export default store;
