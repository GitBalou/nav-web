// Friends list duck : actions, state pattern & reducers

// ACTIONS

// Receiving data for friends list
const FRIENDSLIST_RECEIVE = "FRIENDSLIST_RECEIVE";
function receive(friends) {
    return {type:FRIENDSLIST_RECEIVE, friends};
}

// STATE
const initialState = {
  friends: []
};

// REDUCER
function reducer(state = initialState, action) {
    switch (action.type){

        case FRIENDSLIST_RECEIVE:
            return {
                ...state,
                friends: action.friends
            };

        default:
            return state;
    }
}

// EXPORT
export default {
    FRIENDSLIST_RECEIVE,
    receive,
    reducer,
};