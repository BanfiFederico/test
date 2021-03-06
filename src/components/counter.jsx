import React, { Component } from 'react';
class Counter extends React.Component {
    state = {
        count: 1     
    };

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    render() { 
        return (
            <React.Fragment>
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;