import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user: (state = {}) => state,
  formReducer
});

export default rootReducer;
