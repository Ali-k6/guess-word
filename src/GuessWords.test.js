import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessWords from './GuessWords';

const defaultProps = {
  guessWords: [{ guessWord: 'Train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for GuessWords component
 * @function setup
 * @param {object} props- components props specific to this setup
 * @return {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  checkProps(GuessWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessWords: [] });
  });

  test('Render without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('render instruction to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  let wrapper;
  const guessWords = [
    { guessWord: 'Train', letterMatchCount: 3 },
    { guessWord: 'agile', letterMatchCount: 1 },
    { guessWord: 'lucky', letterMatchCount: 5 },
  ];

  beforeEach(() => {
    wrapper = setup({ guessWords });
  });

  test('render without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('render `guessed words` section', () => {
    const guessWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessWordsNode.length).toBe(1);
  });

  test('correct number of guessed words', () => {
    const guessWordNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessWordNodes.length).toBe(guessWordNodes.length);
  });
});
