// CONNECTOR : friends list
import React from 'react';
import {connect} from 'react-redux';
import friendsList from '../redux/friendsList.duck';
import friendsApi from '../api/friends.api';
import Loading from '../views/Loading.jsx';
import List from '../views/List.jsx';

// Controller component
class FriendsList extends React.Component {

    // constructor
    constructor(props){
        super(props);

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

        return(
            <div>
                <Loading show={this.state.loading} />
                <List datas={this.props.friends} />
            </div>
        );
    }
}

// connect data from store
const mapStateToProps = (state) => {
    return {
        friends: state.get('friendsList').friends
    };
};

// connect dispatch to store
const mapDispatchToProps = (dispatch) => {
    return {
        saveData: (data) => dispatch(friendsList.receive(data))
    };
};

// connection du composant à redux
export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
