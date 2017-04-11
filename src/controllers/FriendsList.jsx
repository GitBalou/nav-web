// CONNECTOR : friends list
import React from 'react';
import {connect} from 'react-redux';
import {friendsList_receive} from '../redux/friendsList.duck';
import friendsApi from '../api/friends.api';
import Loading from '../views/Loading.jsx';
import List from '../views/List.jsx';

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

            // fetch navigations list (fetch library)
            friendsApi.fetch(2)

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
          <List datas={this.props.friends} />
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
