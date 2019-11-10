import React from 'react';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount
        };
    }

    incriment = () => {

        this.setState({
            count: this.state.count + 1
        });

    }

    decriment = () => {

        this.setState({
            count: this.state.count - 1
        });

    }

    render() {
        return (
            <div>
                <div>
                    Count: {this.state.count}
                </div>
                <button onClick={this.incriment}>Incriment</button>
                <button onClick={this.decriment}>Decriment</button>
            </div>
        );
    }
}