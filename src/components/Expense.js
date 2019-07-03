import React, { Component } from 'react';

export class Expense extends Component {
  render() {
    const { expensesDescription, costOfExpense } = this.props.expense;

    return (
      <div>
        <h3>{expensesDescription}</h3>
        <p>$ {costOfExpense}</p>
      </div>
    );
  }
}

export default Expense;
