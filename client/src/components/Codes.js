import React from 'react';

class Codes extends React.Component {

    getCodes(){
        const {Dataset} = require('data.js')

        const path = 'https://datahub.io/core/currency-codes/datapackage.json'

        ;(async () => {
            const dataset = await Dataset.load(path)
            // get list of all resources:
            for (const id in dataset.resources) {
                console.log(dataset.resources[id]._descriptor.name)
            }
        })()

    }

    render() {
        return (
            <div>
                List of codes
                {this.getCodes()}
            </div>
        )
    }
}
  export default Codes;