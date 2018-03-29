import React from 'react';

class Controls extends React.Component {
    render() {
        return(
            <div className="controls">
                <button id="start" className="controls__btn controls__btn--start" onClick={() => this.props.start()}>Start</button>
                {this.props.run ? (
                  <button id="stop" className="controls__btn controls__btn--stop" onClick={() => this.props.stop()}>Stop</button>
                ) : (
                  <button id="reset" className="controls__btn controls__btn--reset" onClick={() => this.props.reset()}>Reset</button>
                )}
                <button id="record" className="controls__btn controls__btn--record" onClick={() => this.props.record()}>Record</button>
            </div>
        );
    }
}

export default Controls;