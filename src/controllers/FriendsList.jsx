// CONNECTOR : friends list
import React from 'react';
import {connect} from 'react-redux';
import {friendsList_receive} from '../redux/friendsList.duck';
import fetchFriends from '../api/fetchFriends';
import Loading from '../views/Loading.jsx';
import FetchingList from '../views/FetchingList.jsx';

// Controller component
class FriendsList extends React.Component {

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
            const url = 'http://seame.alwaysdata.net/ajax/cercle.php?mode=getCercle&user=2';

            // fetch navigations list (fetch library)
            fetchFriends(url)

            // save data
            .then( data => {
                // store friends in state
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
          <FetchingList datas={this.props.friends} />
        );
    }
}

// connect data from store
const mapStateToProps = (state) => {
    return {
        friends: state.friendsList.friends
    };
};

// connect dispatch to store
const mapDispatchToProps = (dispatch) => {
    return {
        saveData: (data) => dispatch(friendsList_receive(data))
    };
};

// connection du composant à redux
export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
