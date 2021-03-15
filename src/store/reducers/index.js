import { combineReducers } from "redux";
import successReducer from "./successReducer";
import guessWordReducer from "./guessWordReducer";
import secreteWordReducer from "./secreteWordReducer";

export default combineReducers({
  success: successReducer,
  guessedWord: guessWordReducer,
  secretWord: secreteWordReducer,
});
