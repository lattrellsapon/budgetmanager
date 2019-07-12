import React, { Component } from 'react';

export class BudgetWatch extends Component {
  state = {
    budgetWatcher: ''
  };


  render() {

    return (
      <div >
        <h1>{this.state.budgetWatcher}</h1>
      </div>
    );
  }
}

export default BudgetWatch;
