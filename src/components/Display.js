import React from 'react';
import Form from './Form.js'


class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
          }
    }

    componentDidMount() {
        this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response;
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      console.log(body)
      return body;
    };

    render() {
        return (
            <div>
                <Form/>
                {this.state.data}
            </div>
        )
    }
}

export default Display;