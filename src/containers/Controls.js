import React from 'react';

class Controls extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="controls">
                <button id="start" className="controls__btn controls__btn--start" onClick={() => this.props.start()}>Start</button>
                <button id="stop" className="controls__btn controls__btn--stop" onClick={() => this.props.stop()}>Stop</button>
                <button id="reset" className="controls__btn controls__btn--record" onClick={() => this.props.record()}>Record</button>
            </div>
        )
    }
}

export default Controls;