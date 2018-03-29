import React from 'react';

class Records extends React.Component {
    item() {
        return this.props.record.map(function(data) {
            return <li className="records__record">{data}</li>
        });
    }
    render() {
        return(
            <ul className="records">
                {this.item()}
            </ul>
        );
    }
}

export default Records