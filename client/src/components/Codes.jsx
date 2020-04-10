import React from 'react';

class Codes extends React.Component {

    getTableData(){
        var cc = require('currency-codes/data');
        return cc.map((item, index) => {
            const { currency, code } = item
            return (
                <tr key={index}>
                   <td>{currency}</td>
                   <td>{code}</td>
                </tr>
             )
        })
    }

    render() {
        return (
            <div>
                List of currency codes
                <table id='currencies'>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Code</th> 
                        </tr>    
                    </thead>
                    <tbody>
                        {this.getTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}
  export default Codes;