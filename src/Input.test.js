import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';
import { Input } from './Input';

/**
 * Factory function to create a ShallowWrapper for GuessWords component
 * @function setup
 * @param {object} initialState- components props specific to this setup
 * @return {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  return wrapper;
};

setup();
describe('render', () => {
  describe('word has not been guessed', () => {
    test('render the component without error', () => {});

    test('render the input box', () => {});

    test('render submit button', () => {});
  });

  describe('word has been guessed', () => {
    test('render the component without error', () => {});

    test('does not render the input box', () => {});

    test('does not render submit button', () => {});
  });
});

describe('update state', () => {});
