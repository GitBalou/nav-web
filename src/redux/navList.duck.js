// nav list duck : actions, state pattern & reducers

// ACTIONS

// Receiving navigation list data
const NAVLIST_RECEIVE = 'NAVLIST_RECEIVE';
function receive(navigations) {
    return {type: NAVLIST_RECEIVE, navigations};
}

// STATE
const initialState = {
    navigations: []
};

// reducer for navList
function reducer(state = initialState, action){
	console.log(action);
	switch (action.type) {

		case NAVLIST_RECEIVE:
			return {
				...state,
				navigations: action.navigations
			};

		default:
			return state;
	}
}

// EXPORT
export default {
	NAVLIST_RECEIVE,
    receive,
	initialState,
    reducer,
}