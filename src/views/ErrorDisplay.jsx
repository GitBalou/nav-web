import React, {PropTypes} from 'react';

// Component : render an error displayer
const ErrorDisplay = ({show, msg}) => {

    if( show && msg.length > 0) {
        return (
            <p>
                {msg}
            </p>
        );
    }

    return null;
};

// Required properties
ErrorDisplay.propTypes = {
    show: PropTypes.bool.isRequired,
    msg: PropTypes.string.isRequired
};

export default ErrorDisplay;
