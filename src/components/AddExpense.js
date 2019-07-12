import React, { Component } from 'react';

export class AddExpense extends Component {
  state = {
    expensesDescription: '',
    costOfExpense: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addNewExpense(
      this.state.expensesDescription,
      this.state.costOfExpense
    );
    this.setState({
      expensesDescription: '',
      costOfExpense: ''
    });
  };

  showAlert = () => {
    if (this.props.userAlert === 'Please fill in the form correctly.') {
      return {
        background: 'red',
        color: '#fff',
        padding: '5px',
        marginTop: '20px',
        borderRadius: '4px',
        fontWeight: 'bold'
      };
    } else if (this.props.userAlert === 'Please set a budget.') {
      return {
        background: 'red',
        color: '#fff',
        padding: '5px',
        marginTop: '20px',
        borderRadius: '4px',
        fontWeight: 'bold'
      };
    } else if (
      this.props.userAlert ===
      'Please put in an expense that is within the current budget.'
    ) {
      return {
        background: 'red',
        color: '#fff',
        padding: '5px',
        marginTop: '20px',
        borderRadius: '4px',
        fontWeight: 'bold'
      };
    } else if (
      this.props.userAlert === 'Please set the Expense Cost to a number.'
    ) {
      return {
        background: 'red',
        color: '#fff',
        padding: '5px',
        marginTop: '20px',
        borderRadius: '4px',
        fontWeight: 'bold'
      };
    } else {
      return {
        display: 'none'
      };
    }
  };
  render() {
    return (
      <div className='expense-form'>
        <form onSubmit={this.onSubmit} id='form-container'>
          <div className='text-center main-header'>
            <label>Add a new expense</label> <br />
          </div>
          <label>Expense Name:</label>{' '}
          <input
            type='text'
            name='expensesDescription'
            value={this.state.expensesDescription}
            onChange={this.onChange}
          />
          <br />
          <label>Expense Cost:</label>{' '}
          <input
            type='text'
            name='costOfExpense'
            value={this.state.costOfExpense}
            onChange={this.onChange}
          />
          <br />
          <button id='add-button'>+</button>
        </form>
        <div style={this.showAlert()}>
          <p>{this.props.userAlert}</p>
        </div>
      </div>
    );
  }
}

export default AddExpense;
