// COMPONENT : displaying loading spinner
import React, {PropTypes} from 'react';

let Loading = ({show}) => {

    if( show) {
        return (<div>Chargement...</div>);
    }
    else {
        return null;
    }

};

// required :
Loading.propTypes = {
    show: PropTypes.bool.isRequired
};


export default Loading;