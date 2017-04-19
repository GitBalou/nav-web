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
        };

        // bind methods
        this.renderList = this.renderList.bind(this);
    }

    // fetch data on mounting
    componentDidMount() {

        // current user id
        const idUser = this.props.idUser;

        // return if no user
        if( !idUser || idUser == 0) {
            return;
        }

        // display loading
        this.setState({loading:true});

        try {

            // fetch navigations list (fetch library)
            friendsApi.fetch(idUser)

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

    // list rendering
    renderList(){
        if(this.props.friends.length == 0) {
            return <p>Pas de données</p>;
        }

        return <List datas={this.props.friends} />;
    }

    // render
    render(){

        return(
            <div>
                <Loading show={this.state.loading} />

                {/* render a list or a message if empty*/}
                {this.renderList()}
            </div>
        );
    }
}

// connect data from store
const mapStateToProps = (state) => {
    return {
        friends: state.get('friendsList').friends,
        idUser: state.get('user').id_user,
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
