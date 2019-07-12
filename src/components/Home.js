import React, { Component } from 'react';
import BudgetCalculator from './BudgetCalculator';
import uuid from 'uuid';

export class Home extends Component {
  state = {
    initialBudget: 0,
    userAlert: '',
    newExpense: false,
    expenses: []
  };

  // This will set the initial budget for the user
  changeInitialBudget = initialBudget => {
    // e.preventDefault();

    // const initialBudget = e.target.elements.initialBudget.value;

    if (initialBudget === '') {
      this.setState({
        userAlert: 'Please put in a starting budget.'
      });
    } else if (initialBudget <= 0) {
      this.setState({
        userAlert: 'Please put in a correct starting budget.'
      });
    } else if (!parseInt(initialBudget)) {
      this.setState({
        userAlert: 'Please choose an approprite budget.'
      });
    } else {
      this.setState({
        initialBudget: parseInt(initialBudget),
        userAlert: ''
      });
    }
  };

  // This will add a new expense and take it away from the starting budget
  addNewExpense = (expensesDescription, costOfExpense) => {
    if (expensesDescription === '' || costOfExpense === '') {
      this.setState({
        userAlert: 'Please fill in the form correctly.'
      });
    } else if (this.state.initialBudget === 0) {
      console.log('User cannot add an expense with the budget set to 0.');
      this.setState({
        userAlert: 'Please set a budget.'
      });
    } else if (costOfExpense > this.state.initialBudget) {
      console.log('The added expense is more than the current budget.');
      this.setState({
        userAlert: 'Please put in an expense that is within the current budget.'
      });
    } else if (!parseInt(costOfExpense)) {
      console.log('Cost is not a number.');
      this.setState({
        userAlert: 'Please set the Expense Cost to a number.'
      });
    } else {
      const newExpense = {
        id: uuid.v4(),
        expensesDescription: expensesDescription,
        costOfExpense: parseInt(costOfExpense)
      };

      this.setState({
        expenses: [...this.state.expenses, newExpense],
        initialBudget: this.state.initialBudget - newExpense.costOfExpense,
        userAlert: ''
      });
    }
  };

  deleteExpense = (id, costOfExpense) => {
    console.log(id.costOfExpense);
    this.setState({
      expenses: [...this.state.expenses.filter(expense => expense.id !== id)],
      initialBudget: this.state.initialBudget + costOfExpense
    });
  };

  render() {
    return (
      <div className='container'>
        <BudgetCalculator
          initialBudget={this.state.initialBudget}
          changeInitialBudget={this.changeInitialBudget}
          expenses={this.state.expenses}
          errorMessage={this.state.errorMessage}
          addNewExpense={this.addNewExpense}
          newExpense={this.newExpense}
          userAlert={this.state.userAlert}
          deleteExpense={this.deleteExpense}
        />
      </div>
    );
  }
}

export default Home;
