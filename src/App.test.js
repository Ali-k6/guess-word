import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "../test/testUtils";
import App, { UnconnectedApp } from "./App";

/**
 * @function setup
 * @param {object} initialState- components props specific to this setup
 * @return {ShallowWrapper}
 */
const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();

  return wrapper;
};

describe("redux properties", () => {
  test("has access to  `success` state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  });

  test("has access to  `secretWord` state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProps = wrapper.instance().props.secretWord;
    expect(secretWordProps).toBe(secretWord);
  });

  test("has access to  `guessWords` state", () => {
    const guessedWord = [{ guessedWord: "Train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWord });
    const guessWordsProps = wrapper.instance().props.guessedWord;
    expect(guessWordsProps).toBe(guessedWord);
  });

  test("`getSecretWord` action creator is function prop", () => {
    const wrapper = setup();
    const guessWordsProps = wrapper.instance().props.getSecretWord;
    expect(guessWordsProps).toBeInstanceOf(Function);
  });
});

test("`getSecretWord` runs on App Mount", () => {
  const getSecretWordMock = jest.fn();

  //setup app component with getSecretWordMock as the getSecretWord prop

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWord: [],
  };
  const wrapper = shallow(<UnconnectedApp {...props} />);

  //running lifecycle method
  wrapper.instance().componentDidMount();

  ///checking to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
});
