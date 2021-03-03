import React from 'react';
import PropType from 'prop-types';

const GuessWords = ({ guessWords }) => {
  return (
    <div data-test='component-guessed-words'>
      {guessWords.length === 0 && (
        <span data-test='guess-instructions'>Try to guess the secret word</span>
      )}
    </div>
  );
};

GuessWords.prototype = {
  guessWords: PropType.arrayOf(
    PropType.shape({
      guessWord: PropType.string.isRequired,
      letterMatchCount: PropType.number.isRequired,
    })
  ).isRequired,
};

export default GuessWords;
