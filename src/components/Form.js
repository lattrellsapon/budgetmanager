import React, { Component } from 'react';

export class Form extends Component {
  state = {
    initialBudget: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.initialBudget);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    this.props.changeInitialBudget(this.state.initialBudget);
    this.setState({
      initialBudget: ''
    });
  };

  lockForm = () => {
    if (this.props.initialBudget > 0) {
      return {
        display: 'none'
      };
    }
  };

  render() {
    return (
      <div className='set-budget-form' style={this.lockForm()}>
        <form onSubmit={this.onSubmit}>
          Starting Budget:{' '}
          <input
            type='text'
            name='initialBudget'
            value={this.state.initialBudget}
            onChange={this.onChange}
          />
          <button type='submit' id='submit-button'>
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
