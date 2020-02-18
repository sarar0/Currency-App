import React from 'react';
import Form from './Form.js'


class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            convertedAmount: "hello"
          }
    }

    convertAmount(from, to, amount) {
   
    }

    render() {
        return (
            <div>
                <Form/>
            </div>
        )
    }
}

export default Display;