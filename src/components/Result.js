import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          convertedAmount: 5
        }
    }

    render() {
        let displayText = '';
        if (this.state.convertedAmount) {
          displayText = <p>Converted amount = {this.state.convertedAmount} {this.props.to}</p>
        }
    
        return (
            <div>
                {displayText}
            </div>
        )
    }
}

export default Result;