// CONNECTOR : Loading component
import {connect} from 'react-redux';
import Loading from '../components/Loading.jsx';

// map state to props
const mapStateToProps = (state) => {
    return {
        loading: state.loading.loading
    };
};

// connection du composant à redux
export default connect(mapStateToProps)(Loading);

