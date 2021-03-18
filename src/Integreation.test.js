import { storeFactory } from "../test/testUtils";
import { guessWord } from "./store/actions";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulGuess = "train";
  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("update state correctly for unsuccessfully guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        success: false,
        guessedWord: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          },
        ],
        ...initialState,
      };

      expect(newState).toEqual(expectedState);
    });
    test("update state correctly for successfully guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWord: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe("some guessed words", () => {
    const guessedWord = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = { guessedWord, secretWord };

    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test("update state correctly for unsuccessfully guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWord: [
          ...guessedWord,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test("update state correctly for successfully guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWord: [
          ...guessedWord,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
