import React from 'react';
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
      this.setState({
          convertedAmount: this.state.amount * 4
      })
    }

    render() {
      let displayText = '';
      if (this.state.convertedAmount) {
        displayText = <p>Converted amount = {this.state.convertedAmount} {this.state.valueTo}</p>
      }
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
            {displayText}
          </div>
        </div>
      );
    }
  }

export default Form;
