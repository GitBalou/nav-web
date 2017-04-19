// User duck : actions, state pattern & reducers

// ACTIONS

// Receiving data for user
const USER_RECEIVE = "USER_RECEIVE";
function receive(user) {
    return {type:USER_RECEIVE, user};
}

// Log out
const USER_LOGOUT = "USER_LOGOUT";
function logout(){
    return {type:USER_LOGOUT};
}

// STATE
const initialState = {
  email:"",
  fbid: 0,
  id_user: 0,
  picture: "",
  pseudo: "",
  rang: "",
  token_connection: "",
  token_session: "",
  url: ""
};

// REDUCER
function reducer(state = initialState, action) {
    console.log(action);

    switch (action.type){
        case USER_RECEIVE:
            return {
                ...state,
                ...action.user,
                id_user: parseInt(action.user.id_user),
                fbid: parseInt(action.user.fbid),
            };

        default:
            return state;
    }
}

// EXPORT
export default {
    USER_LOGOUT,
    logout,
    receive,
    reducer,
};