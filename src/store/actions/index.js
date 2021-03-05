export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * Return Redux RThunk function that dispatched GUESS_WORD action
 *   and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessWord - Guessed word
 * @returns {function} -Redux Thunk action
 */
export const guessWord = (guessWord) => {
  return (dispatch, getState) => {
    //
  };
};
