// COMPONENT : render a logout button & logic
import React from 'react';
import {connect} from 'react-redux';
import userRedux from '../redux/user.duck';

class LogoutCtrl extends React.Component {

    constructor(props) {
        super(props);

        // message
        this.state = {
            msg: ''
        };

        //bind methods to this
        this.handleClick = this.handleClick.bind(this);
        this.renderMsg = this.renderMsg.bind(this);
    }

    // handle click event
    handleClick(event) {

        event.preventDefault();

        // dispatch logout
        this.props.logout();

        // message
        this.setState({msg:'Vous avez été déconnecté'});
    }

    // conditionnal rendering for message
    renderMsg(){
        if(this.state.msg != '') {
            return <p>{this.state.msg}</p>;
        }

        return null;
    }

    // render a logout button
    render(){

        return (
            <div>
                {this.renderMsg()}
                <a href="#" onClick={this.handleClick}>Déconnection</a>
            </div>
        );
    }
}

// connect data from store
const mapStateToProps = (state) => {
    return {};
};

// connect dispatch to store
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(userRedux.logout())
    };
};

// connection du composant à redux
export default connect(mapStateToProps, mapDispatchToProps)(LogoutCtrl);
