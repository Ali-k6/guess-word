import { shallow } from 'enzyme';
import { exact } from 'prop-types';
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
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('render the component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('render the input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    test('render the component without error', () => {});

    test('does not render the input box', () => {});

    test('does not render submit button', () => {});
  });
});

describe('update state', () => {});
