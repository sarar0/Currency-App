import React from 'react';

class Codes extends React.Component {

    getCodes(){
        var cc = require('currency-codes/data');
        var string = ''
        for (var i in cc) {
            string = string + cc[i].code + ":" + cc[i].currency + "\n"
        }
        console.log(string)
        return string
    }

    render() {
        return (
            <div>
                List of currency codes
                <br></br>
                {this.getCodes()}
            </div>
        )
    }
}
  export default Codes;