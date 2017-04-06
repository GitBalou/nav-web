import  {
    NAVHISTORY_ISFETCHING,
    NAVHISTORY_RECEIVING,
    NAVHISTORY_HASERROR
} from '../actions/actions';

// initial state
const initialState= {
    isFetching: false, // to know if we are waiting for data
    error: {
    	hasError: false, // to know if we have an error
    	msg: '' // error message
    },
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

		case NAVHISTORY_HASERROR:
			return {
				...state,
				error: action.error
			};

		default:
			return state;
	}
}

export default navHistory;