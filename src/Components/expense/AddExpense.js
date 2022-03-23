import React, { Component } from "react";
import ExpenseService from "../service";
import './addexpense.css';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
export default class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveExpense = this.saveExpense.bind(this);
    this.newExpense = this.newExpense.bind(this);
    this.state = {
      name: "",
      amount: "",
      description: "",
      submitted: false,
    };
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
  saveExpense() {
    let data = {
      name: this.state.name,
      amount: this.state.amount,
      description: this.state.description,
    };
    ExpenseService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  newExpense() {
    this.setState({
      name: "",
      amount: "",
      description: "",
    });
  }
  
  render() { 
      return (
    <div className="submit-form">
      {this.state.submitted ? (
        <div>
          <h4>Your expense has been submitted successfully!</h4>
          <button onClick={this.newExpense} className="submitbtn">
            Add More
          </button>
          <p> or </p>
          <Link to={`/home`}>Go Back to Expense List page</Link>
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