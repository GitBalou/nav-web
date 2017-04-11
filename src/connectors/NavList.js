// CONNECTOR : Navigations list
import {connect} from 'react-redux';
import FetchingList from '../components/FetchingList.jsx';
import * as actions from '../actions';

// this component needs navHistory from store
const mapStateToProps = (state) => {
    return {
        navigations: state.navList.navigations
    };
};

// this component needs
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(actions.navList_fetch(url))
    };
};

// connection du composant à redux
export default connect(mapStateToProps, mapDispatchToProps)(FetchingList);