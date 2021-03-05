import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Input extends Component {
  render() {
    return (
      <div>
        <input type='text' />
        <button></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Input);
