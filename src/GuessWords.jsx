import React from 'react';
import PropType from 'prop-types';

const GuessWords = ({ guessWords }) => {
  return (
    <div data-test='component-guessed-words'>
      {guessWords.length === 0 ? (
        <span data-test='guess-instructions'>Try to guess the secret word</span>
      ) : (
        <div data-test='guessed-words'>
          <h3>Guessed Words</h3>
          <table className='table table-striped table-hover'>
            <thead className='table-light'>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessWords.map((word, i) => (
                <tr key={i} data-test='guessed-word'>
                  <td>{word.guessWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
