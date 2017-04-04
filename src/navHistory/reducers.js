const {combineReducers} = Redux;

// initial state
const initialState= {
    isFetching: false, // to know if we are waiting for data
    didInvalidate: false, // needs to refresh ?
    navigations: [] // navigations list
};

// reducer
function navHistory(state= initialState, action){

}
