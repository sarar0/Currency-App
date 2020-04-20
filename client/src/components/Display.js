import React from 'react';
import Form from './Form.jsx'
import Codes from './Codes.jsx'

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayCodes: false
        }
    }

    displayTable(){
        this.setState({
            displayCodes: !this.state.displayCodes
        })
    }

    render() {
        var table = ''
        if (this.state.displayCodes){
            table = <Codes/>
        }
        return (
            <div id="display">
                <Form/>
                <div>
                    <button class="btn btn-secondary" onClick={() => this.displayTable()} >Display/hide list of currency codes</button>
                    {table}
                </div>
            </div>
        )
    }
}

export default Display;