// COMPONENT : render a loggin form
import React from 'react';
import userApi from '../api/user.api';
import Loading from '../views/Loading.jsx';
import ErrorDisplay from '../views/ErrorDisplay.jsx';
import InputManager from '../views/InputManager.jsx';
import FormManager from '../views/FormManager.jsx';

class LoginCtrl extends React.Component {

    constructor(props) {
        super(props);

        // handle email & pwd value
        this.state = {
            loading:false,
            showError:false,
            errorMsg: '',
            email: '',
            pwd: '',
        };

        //bind methods to this
        this.handleSubmit = this.handleSubmit.bind(this);
        this.bindEmailValue = this.bindEmailValue.bind(this);
        this.bindPwdValue = this.bindPwdValue.bind(this);
    }

    // bind email value
    bindEmailValue(value){
        this.setState({email: value});
    }

    // bind password value
    bindPwdValue(value) {
        this.setState({pwd: value});
    }

    // handle submit event
    handleSubmit(event) {

        event.preventDefault();

        // toggle loading
        this.setState({loading: true});

        // login request
        userApi.login(this.state.email, this.state.pwd)

        // handle response
        .then( data => {

            // toggle loading
            this.setState({loading: false});
        })

        // handle exception
        .catch( error => {
            console.log(error.message);

            // toggle loading
            this.setState({loading: false});
        });


    }

    // render a form
    render(){

        return (
        <div>
            <Loading show={this.state.loading} />

            <ErrorDisplay show={this.state.showError} msg={this.state.errorMsg} />

            <FormManager onSubmit={this.handleSubmit}>

                <InputManager
                    type="text"
                    name="email"
                    regexp={/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i}
                    errorMsg="mail non valide"
                    errorEvent="onBlur"
                    bindValue={this.bindEmailValue}
                />

                <InputManager
                    type="password"
                    name="pwd"
                    min={3}
                    errorMsg="Trop court"
                    errorEvent="onBlur"
                    bindValue={this.bindPwdValue}
                />

                <InputManager
                    type="submit"
                    value="connection"
                    disabledIfFormInvalid={true}
                />

            </FormManager>
        </div>
        );
    }
}

// export
export default LoginCtrl;