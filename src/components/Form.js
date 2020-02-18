import React from 'react';
import './Form.css'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valueFrom: '',
        valueTo: '',
        amount: ''
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
      return (
        <div>
          <div className="inputForm">
            <form onSubmit={this.handleSubmit}>
              <label>
                Enter amount:
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
        </div>
      );
    }
  }

export default Form;