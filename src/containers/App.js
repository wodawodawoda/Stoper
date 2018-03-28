import React from 'react';
import Counter from './Counter';
import Controls from './Controls';
import Records from './Records';
import '../app.sass';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 0,
            run: false,
            record: []
        }
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.record = this.record.bind(this);
        this.updateTime = this.updateTime.bind(this);
    }
    //Callbacks
    start() {
        this.setState({run: true});
    }
    stop() {
        this.setState({run: false});
    }
    record() {
        this.setState({
            record: [this.state.time, ...this.state.record]
        })
    }
    getTime(time) {
        this.setState({time: time})
    }
    // Run
    interval() {
        if(!this.state.run) {this.int = setInterval(this.updateTime, 1000)}; // runs when new props/state is recived but not yet upadted
        console.log('interval')
    }
    updateTime() {
        console.log('before')
        this.setState({time: this.state.time + 1})
        console.log(this.state.time)
    }
    // Stop
    stopInterval() {
        clearInterval(this.int)
    }
    componentWillUpdate(nextProps, nextState) {
        console.log(nextState);
        if(nextState.run === true) {
            this.interval()
        } else if (nextState.run === false) {
            this.stopInterval()
        }

    }
    render() {
        return(
            <div className="stoper container">
                <Controls run={this.state.run} start={this.start} stop={this.stop} record={this.record} />
                <Counter time={this.state.time} run={this.state.run} getTime={this.getTime}/>
                <Records record={this.state.record}/>
            </div>
        )
    }
}

export default App;