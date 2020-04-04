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
        if (this.props.multiplier !== prevProps.multiplier) {
            this.convert(this.props.amount, this.props.multiplier);
        }
    }

    // need to call the convert method with the props

    render() {
        // console.log(this.props)
        return (
            <div>
                <div>
                    {this.state.convertedAmount} {this.props.currencyTo}
                </div>
            </div>
        );
    }
}

export default Result;
