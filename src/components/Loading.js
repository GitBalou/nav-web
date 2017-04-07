import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

// component : displaying loading spinner
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

// map state to props
const mapStateToProps = (state) => {
    return {
        loading: state.ui.loading
    };
};

// connection du composant à redux
Loading = connect(mapStateToProps)(Loading);

export default Loading;