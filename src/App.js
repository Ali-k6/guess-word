import React, { Component } from 'react';
import './App.css';
import GuessWords from './GuessWords';
import Congrats from './Congrats';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessWords
          guessWords={[{ guessWord: 'Train', letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
