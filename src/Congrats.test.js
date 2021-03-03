import React from 'react';

import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtils';

/**
 * Factory function to create a ShallowWrapper for Congrats component
 * @function setup
 * @param {object} props- components props specific to this setup
 * @return {ShallowWrapper}
 */
const setup = (props = {}) => shallow(<Congrats {...props} />);

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
