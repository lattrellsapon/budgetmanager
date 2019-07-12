import React, { Component } from 'react';
import Form from './Form';
import Expenses from './Expenses';
import AddExpense from './AddExpense';
import BudgetWatch from './BudgetWatch';

export class BudgetCalculator extends Component {
  showAlert = () => {
    if (
      this.props.userAlert === 'Please put in a starting budget.' ||
      this.props.userAlert === 'Please put in a correct starting budget.' ||
      this.props.userAlert === 'Please choose an approprite budget.'
    ) {
      return {
        background: 'red',
        color: '#fff',
        padding: '5px',
        marginBottom: '10px',
        borderRadius: '4px'
      };
    } else {
      return {
        display: 'none'
      };
    }
  };

  render() {
    return (
      <div className='grid-2'>
        <div className='main-content'>
          <h2 id='current-budget'>
            Current Budget: ${this.props.initialBudget}.00
          </h2>
          <div style={this.showAlert()}>
            <h3>{this.props.userAlert}</h3>
          </div>
          <Form
            changeInitialBudget={this.props.changeInitialBudget}
            initialBudget={this.props.initialBudget}
          />
          <Expenses
            expenses={this.props.expenses}
            deleteExpense={this.props.deleteExpense}
          />
        </div>
        <div>
          <AddExpense
            addNewExpense={this.props.addNewExpense}
            userAlert={this.props.userAlert}
          />
          <BudgetWatch initialBudget={this.props.initialBudget} />
        </div>
      </div>
    );
  }
}

export default BudgetCalculator;
