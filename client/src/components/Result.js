import React from 'react';

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            convertedAmount: 0
        };
    }

    convert(amount, multiplier) {
        this.setState({
            convertedAmount: amount * multiplier
        });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.multiplier !== prevProps.multiplier || (prevProps !== this.props)) {
            this.convert(this.props.amount, this.props.multiplier);
        }
    }

    render() {
      var string = ''
      if (this.props.multiplier !== '' ){
        string = this.props.amount + " " + this.props.currencyFrom.toUpperCase() + " = " + this.state.convertedAmount.toFixed(4) + " " + this.props.currencyTo.toUpperCase()
      }
        return (
                <div>
                    {string}
                </div>
        );
    }
}

export default Result;
