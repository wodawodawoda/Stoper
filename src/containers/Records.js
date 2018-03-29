import React from 'react';
import PropTypes from 'prop-types';


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

Records.propTypes = {
  record: PropTypes.array
}

export default Records