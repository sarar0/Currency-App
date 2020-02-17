import React from 'react';

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
      this.setState({value: event.target.valueFrom});
    }
  
    handleSubmit(event) {
      console.log('FROM value: ' + this.state.valueFrom);
      console.log('TO value: ' + this.state.valueTo);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            From:
            <input type="text" value={this.state.valueFrom} onChange={this.handleChange} />
            To:
            <input type="text" value={this.state.valueTo} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default Form;