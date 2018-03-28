import React from 'react'

class App extends React.Component {
    constructor() {
        super();
    }
    //Callbacks

    render() {
        return(
            <div className="container">
                {/*<Controls />*/}
                <Counter />
                {/*<Records />*/}
            </div>
        )
    }
}