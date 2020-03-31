import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          convertedAmount: ''
        };
      }
    
    convert() {
      let multiplier = 4;
      this.setState({
          convertedAmount: this.props.amount * multiplier
      });
    }

    render() {     
        // need to add conversion  
        return (
          <div>
            <div>
              XX {this.props.currencyTo}
            </div>
          </div>
        );
    }        
}

export default Result;
