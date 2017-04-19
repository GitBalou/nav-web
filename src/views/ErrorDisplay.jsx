import React, {PropTypes} from 'react';

// Component : render an error displayer
const ErrorDisplay = ({msg}) => {

    if( msg.length > 0) {
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
    msg: PropTypes.string.isRequired
};

export default ErrorDisplay;
