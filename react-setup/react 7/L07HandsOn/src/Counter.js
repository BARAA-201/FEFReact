import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({
            type: 'Increment'
        });
    };

    decrement = () => {
        this.props.dispatch({
            type: 'Decrement'
        });
    };
    reset = () => {
        this.props.dispatch({
            type: 'Reset'
        });
    };


    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>
                    <span>{this.props.count}</span>
                    <br />
                    <button onClick={this.increment}>Increment by 5</button>
                    <br />
                    <button onClick={this.decrement}>Decrement by 10</button>
                    <br />
                    <button onClick={this.reset}>  Reset  </button>
                    <br />
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);