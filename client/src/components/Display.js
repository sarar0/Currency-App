import React from 'react';
import Form from './Form.js'
import Codes from './Codes.jsx'

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="display">
                <Form/>
                <Codes/>
            </div>
        )
    }
}

export default Display;