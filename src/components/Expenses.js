import React, { Component } from 'react';
import Expense from './Expense';

export class Expenses extends Component {
  render() {
    return this.props.expenses.map(expense => (
      <Expense
        key={expense.id}
        expense={expense}
        deleteExpense={this.props.deleteExpense}
      />
    ));
  }
}

export default Expenses;
