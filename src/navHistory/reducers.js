// initial state
const initialState= {
    isFetching: false, // to know if we are waiting for data
    didInvalidate: false, // needs to refresh ?
    navigations: [] // navigations list
};

// reducer
function navHistory(state= initialState, action){
	console.log(action);
	switch (action.type) {

		case NAVHISTORY_ISFETCHING:
			return {
				...state,
				isFetching: !state.isFetching
			};

		case NAVHISTORY_RECEIVING:
			return {
				...state,
				navigations: action.navigations
			};

		default:
			return state;
	}
}
