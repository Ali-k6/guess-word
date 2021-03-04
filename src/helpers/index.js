/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word
 * @param {string} secreteWord - Secrete word
 * @return {number} - Number of letters matched between guessed word and secrete word
 */

export const getLetterMatchCount = (guessedWord, secreteWord) => {
  const secreteLettersSet = new Set(secreteWord.split(''));
  const guessedWordSet = new Set(guessedWord.split(''));

  return [...secreteLettersSet].filter((letter) => guessedWordSet.has(letter))
    .length;
};
