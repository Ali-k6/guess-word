import React, { Component } from "react";
import "./App.css";
import GuessWords from "./GuessWords";
import Congrats from "./Congrats";
import { connect } from "react-redux";
import { getSecretWord } from "./store/actions";
import Input from "./Input";

export class UnconnectedApp extends Component {
  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    //get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessWords guessWords={this.props.guessedWord} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, secretWord, guessedWord } = state;
  return { success, secretWord, guessedWord };
};
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
