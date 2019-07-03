import React, { Component } from 'react';
import Form from './Form';
import Expenses from './Expenses';

export class BudgetCalculator extends Component {
  render() {
    return (
      <div>
        <h1>Calculate my budget.</h1>
        <h2>Current Budget: $ {this.props.initialBudget}</h2>
        <Form changeInitialBudget={this.props.changeInitialBudget} />
        <Expenses expenses={this.props.expenses} />
      </div>
    );
  }
}

export default BudgetCalculator;
