// ACTIONS & REDUCERS : for friends list

// Initial state
const initialState = {
    friends: [] // array of friends
};

// Fetching data for friends list
export const FRIENDSLIST_FETCH = "FRIENDSLIST_FETCH";
export function friendsList_fetch(url) {
    return {type:FRIENDSLIST_FETCH, url};
}

// Receiving data for friends list
export const FRIENDSLIST_RECEIVE = "FRIENDSLIST_RECEIVE";
export function friendsList_receive(friends) {
    return {type:FRIENDSLIST_RECEIVE, friends};
}

// reducer for friends list
export default function friendsList(state = initialState, action) {
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
