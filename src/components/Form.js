import React from 'react';
import './Form.css'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valueFrom: '',
        valueTo: ''
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
      console.log('FROM value: ' + this.state.valueFrom);
      console.log('TO value: ' + this.state.valueTo);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="inputForm">
          <form onSubmit={this.handleSubmit}>
            <label>
              Converting from:
              <input type="text" name="valueFrom" value={this.state.valueFrom} onChange={this.handleChange} />
              <br />
              to:
              <input type="text" name="valueTo" value={this.state.valueTo} onChange={this.handleChange} />
            </label>
              <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }

export default Form;