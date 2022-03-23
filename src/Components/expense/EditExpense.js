import React, { Component } from "react";
import ExpenseService from "../service";
import './addexpense.css';
import TextField from '@mui/material/TextField';
export default class EditExpense extends Component {
  constructor(props) {
    super(props);
    this.onDataChange = this.onDataChange.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
    this.state = {
      name: "",
      amount: "",
      description: "",
      submitted: false,
    };

    this.unsubscribe = undefined;
    this.selectedExpenseId = new URLSearchParams(window.location.search).get('id');
  }
  
  componentDidMount() {
    this.unsubscribe = ExpenseService.getSelectedExpenseById(this.selectedExpenseId).onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    //this.unsubscribe();
  }
  onDataChange(items) {
    items.forEach((item) => {
      if(item.id === this.selectedExpenseId){
        this.selectedExpenseId = item.id;
        this.setState({ name: item.data()['name'] });
        this.setState({ amount: item.data()['amount'] });
        this.setState({ description: item.data()['description'] });
      }
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeAmount(e) {
    this.setState({
      amount: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  getSelectedExpenseById(id) {
    ExpenseService.getSelectedExpenseById(id)
      .then(response => {
        this.setState({
          selectedExpense: response.data
        });
        console.log("getting_expense_data: "+response.data.name);
      })
      .catch(e => {
        console.log(e);
      });
  }
  saveExpense() {
    let data = {
      id: this.selectedExpenseId,
      name: this.state.name,
      amount: this.state.amount,
      description: this.state.description,
    };
    ExpenseService.update(this.selectedExpenseId, data)
      .then(() => {
        console.log("Successfully Updated Expense!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  
  render() { 
      return (
    <div className="submit-form">
      {this.state.submitted ? (
        <div>
          <h4>You Updated the Expense successfully!</h4>
        </div>
      ) : (
        <div>
          

          <div className="form-group">
            <TextField
              type="text"
              id="exp_title"
              label="Expense Title"
              required
              value={this.state.name}
              onChange={this.onChangeName}
              name="exp_title"
            />
          </div>
          <div className="form-group">
            <TextField
              type="text"
              label="Amount"
              id="amount"
              required
              value={this.state.amount}
              onChange={this.onChangeAmount}
              name="amount"
            />
          </div>
          <div className="form-group">
            <TextField
              label="Description"
              variant="outlined"
              id="description"
              required  
              value={this.state.description}
              onChange={this.onChangeDescription}
              name="description"
            />
          </div>


          <button onClick={this.saveExpense} className="submitbtn">
            Submit
          </button>
        </div>
      )}
        </div>);
    }
}