import React from 'react';

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} render component (or null if success props is false)
 */

const Congrats = ({ success }) => {
  return (
    <div data-test='component-congrats'>
      {success ? (
        <span data-test='congrats-message'>
          congratulations! you guessed the word!
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

export default Congrats;
