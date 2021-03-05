import { combineReducers } from 'redux';
import successReducer from './successReducer';
import guessWordReducer from './guessWordReducer';

export default combineReducers({
  success: successReducer,
  guessedWord: guessWordReducer,
});
