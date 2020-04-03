import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          convertedAmount: 0
        };
      }
    
    convert(amount, multiplier) {
      this.setState({
          convertedAmount: amount * multiplier
      });
    }

    render() {     
        // this.convert(this.props.amount, this.props.multiplier)
        return (
          <div>
            <div>
             {this.state.convertedAmount} {this.props.currencyTo}
            </div>
          </div>
        );
    }        
}

export default Result;
