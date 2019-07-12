import React, { Component } from 'react';

export class Expense extends Component {
  render() {
    const { expensesDescription, costOfExpense, id } = this.props.expense;

    return (
      <div id='expense'>
        <div className='text-center'>
          <h3>{expensesDescription}</h3>
        </div>
        <p className='flex-container'>
          $ {costOfExpense}.00{' '}
          <button
            id='delete-expense-button'
            onClick={this.props.deleteExpense.bind(this, id, costOfExpense)}
          >
            X
          </button>{' '}
        </p>
      </div>
    );
  }
}

export default Expense;
