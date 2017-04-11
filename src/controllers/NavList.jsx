// CONNECTOR : Navigations list
import React from 'react';
import {connect} from 'react-redux';
import {navList_receive} from '../redux/navList.duck';
import fetchNavs from '../api/fetchNavs';
import Loading from '../views/Loading.jsx';
import FetchingList from '../views/FetchingList.jsx';

// Controller component
class NavList extends React.Component {

    // constructor
    constructor(){
        super();

        // handling loading
        this.state= {
            loading: false
        }
    }

    // fetch data on mounting
    componentDidMount() {

        // display loading
        this.setState({loading:true});

        try {
            // url
            const url = 'http://seame.alwaysdata.net/ajax/userRoute.php?mode=listerRoutes&id=2';

            // fetch navigations list (fetch library)
            fetchNavs(url)

            // handle server response
            .then(data => {

                // store navigations in redux store
                this.props.saveData(data);

                // hide loading
                this.setState({loading: false})
            });
        }
        catch(e){
            // hide loading
            this.setState({loading: false});
        }
    }

    // render
    render(){

        // show loading
        if( this.state.loading) {
            return <Loading />;
        }

        // render list
        return(
            <FetchingList datas={this.props.datas} />
        );
    }
}

// connect data from store
const mapStateToProps = (state) => {
    return {
        datas: state.navList.navigations
    };
};

// connect dispatch to store
const mapDispatchToProps = (dispatch) => {
    return {
        saveData: (data) => dispatch(navList_receive(data))
    };
};

// connection du composant à redux
export default connect(mapStateToProps, mapDispatchToProps)(NavList);