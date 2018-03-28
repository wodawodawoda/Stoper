import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="counter">
                <span id="counter" className="counter__time">{this.props.time}</span>
            </div>
        )
    }
}

export default Counter;