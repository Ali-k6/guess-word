import React, { Component } from 'react';
import { connect } from 'react-redux';
import {guessWord} from './store/actions'

class Input extends Component {
  render() {
    return (
      <div data-test='component-input'>
        {this.props.success ? null : (
          <form className='form-inline'>
            <input
              type='text'
              data-test='input-box'
              className='mb-2 mx-sm-3'
              placeholder='Enter guess'
            />
            <button type='submit' data-test='submit-button' className='btn btn-primary mb-2'>
              submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps,{guessWord})(Input);
