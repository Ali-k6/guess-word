import checkPropTypes from 'check-prop-types';

import { createStore } from 'redux';

import rootReducer from '../src/store/reducers';

/**
 * Create a testing store with imported reducer, middleware, and initial state
 * global: rootReducer.
 * @function storeFactory
 * @param {object}initialState - initialState state for store.
 * @return {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

/**
 * return a node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {String} val - Value of data-test attribute for search
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingProps) => {
  const propsError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);

  expect(propsError).toBeUndefined();
};
