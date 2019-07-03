import React, { Component } from 'react';
import BudgetCalculator from './BudgetCalculator';

export class Home extends Component {
  state = {
    initialBudget: 0,
    errorMessage: undefined,
    expenses: [
      {
        id: 1,
        expensesDescription: 'Savings',
        costOfExpense: 5
      },
      {
        id: 2,
        expensesDescription: 'Automatic Payment',
        costOfExpense: 5
      },
      {
        id: 3,
        expensesDescription: 'Weekly Payment',
        costOfExpense: 5
      },
      {
        id: 4,
        expensesDescription: 'Cash Money Babyyyyyyyy',
        costOfExpense: 5
      }
    ]
  };

  changeInitialBudget = e => {
    e.preventDefault();

    const initialBudget = e.target.elements.initialBudget.value;

    console.log(initialBudget);

    if (initialBudget === '') {
      console.log('Please put in a starting budget');
      this.setState({
        errorMessage: 'Please put in a starting budget.'
      });
    } else {
      let sum = 0;

      this.state.expenses.forEach(expense => {
        sum += expense.costOfExpense;
      });

      console.log(sum);

      this.setState({
        initialBudget: initialBudget - sum
      });
    }
  };

  render() {
    return (
      <div>
        <BudgetCalculator
          initialBudget={this.state.initialBudget}
          changeInitialBudget={this.changeInitialBudget}
          expenses={this.state.expenses}
          errorMessage={this.state.errorMessage}
        />
      </div>
    );
  }
}

export default Home;
