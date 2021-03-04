/**
 * @function successReducer
 * @param {array} state -array of guessed words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */

const successReducer = (state = [], action) => {
  switch (action.type) {
    case 'value':
      break;

    default:
      return state;
  }
};
export default successReducer;
