import React from 'react';
import Result from './Result.jsx'
import './Form.css'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valueFrom: '',
        valueTo: '',
        amount: '',
        exchangeRate:'',
        convertedAmount: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
        .then(body =>
          this.setState({
            exchangeRate: body.result,
            loading: false
          })
          // return body;

        );
    }

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.apiCall()
    }

    render() {
      return (
        <div>
          <div className="Input-form">
            <div className="Instructions">
            Please use currency codes
            </div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Amount:
                <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
                From:
                <input type="text" name="valueFrom" value={this.state.valueFrom} onChange={this.handleChange} maxLength={3} />
                To:
                <input type="text" name="valueTo" value={this.state.valueTo} onChange={this.handleChange} maxLength={3} />
              </label>
                <br />
              <input class="btn btn-primary" type="submit" value="Convert"/>
            </form>
          </div>
          <div className="Result">     
            <Result multiplier={this.state.exchangeRate} amount={this.state.amount} currencyFrom={this.state.valueFrom} currencyTo={this.state.valueTo}/>
          </div>
        </div>
      );
    }
  }

export default Form;
