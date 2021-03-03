import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';
import { checkProps, findByTestAttr } from '../test/testUtils';

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @function setup
 * @param {object} props- components props specific to this setup
 * @return {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test('render without error', () => {
  const wrapper = setup();
  const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
  expect(congratsComponent.length).toBe(1);
});

test('render no text when success prop is false', () => {
  const wrapper = setup({ success: false });
  const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
  expect(congratsComponent.text()).toBe('');
});

test('render non-empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: true };

  checkProps(Congrats, expectedProps);
});
