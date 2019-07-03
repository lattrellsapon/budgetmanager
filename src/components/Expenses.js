import React, { Component } from 'react';
import Expense from './Expense';

export class Expenses extends Component {
  render() {
    return this.props.expenses.map(expense => (
      <Expense key={expense.id} expense={expense} />
    ));
  }
}

export default Expenses;
