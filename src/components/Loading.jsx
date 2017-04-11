// COMPONENT : displaying loading spinner
import React, {PropTypes} from 'react';

let Loading = ({loading}) => {

    if( loading) {
        return (
            <div>
                ...Chargement
            </div>
        );
    }

    return <div></div>;
};

// required :
Loading.propTypes = {
    loading:  PropTypes.bool.isRequired
};


export default Loading;