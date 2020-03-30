import React from 'react';
import Result from './Result.js'
import './Form.css'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valueFrom: '',
        valueTo: '',
        amount: '',
        convertedAmount: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      // need to submit only on submit - not on change
    }

    apiCall() {
      const data = { from: this.state.valueFrom, to: this.state.valueTo };
      return fetch("/express_backend", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(data => data.json())
        .then(body => {
          this.setState({
            options: body,
            loading: false
          });
          return body;
        });
    }

    render() {
      return (
        <div>
          <div className="Input-form">
            <form onSubmit={this.handleSubmit}>
              <label>
                Enter amount you wish to convert:
                <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
                <br />
                converting from:
                <input type="text" name="valueFrom" value={this.state.valueFrom} onChange={this.handleChange} />
                <br />
                to:
                <input type="text" name="valueTo" value={this.state.valueTo} onChange={this.handleChange} />
              </label>
                <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="Result">     
            <Result amount={this.state.amount} currencyFrom={this.state.valueFrom} currencyTo={this.state.valueTo}/>
          </div>
        </div>
      );
    }
  }

export default Form;
