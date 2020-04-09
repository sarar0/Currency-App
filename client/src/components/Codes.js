import React from 'react';

class Codes extends React.Component {

    getCodes(){
        var cc = require('currency-codes');
        var string = ''
        console.log(cc.code('EUR').currency)
        return string
    }

    render() {
        return (
            <div>
                List of currency codes
                {this.getCodes()}
            </div>
        )
    }
}
  export default Codes;