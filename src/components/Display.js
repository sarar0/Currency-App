import React from 'react';
import Form from './Form.js'

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          convertedAmount: ''
        }
    }

    convertAmount(from, to, amount) {

        
    }

    render() {
        let displayText = '';
        if (this.state.convertedAmount) {
          displayText = <p>Converted amount = {this.convertedAmount} {this.props.to}</p>
        }

        return (
            <div>
                <Form/>
                {displayText}
            </div>
        )
    }
}

export default Display;