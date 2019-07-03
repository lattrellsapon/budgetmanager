import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.changeInitialBudget}>
          Starting Budget: <input type='text' name='initialBudget' />
          <input type='submit' value='Update' id='submit-button' />
        </form>
      </div>
    );
  }
}

export default Form;
