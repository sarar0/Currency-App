import React from 'react';
import Form from './Form.js'
import Codes from './Codes.js'

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Codes/>
                <Form/>
            </div>
        )
    }
}

export default Display;