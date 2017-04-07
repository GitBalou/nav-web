import {combineReducers} from 'redux';
import * as actions from '../actions/actions.js';

// I.S : initial states

// I.S for navigations list
const navIS= {
    navigations: [] // navigations list
};


// I.S for User Interface
const uiIS = {
    loading: false // display a loading component
};


// reducer for User Interface
function ui(state = uiIS, action) {
	switch (action.type){

        case actions.LOADING:
            return {
                ...state,
                loading: action.loading
            };

		default:
			return state;
	}
}

// reducer for navHistory
function navHistory(state= navIS, action){
	console.log(action);
	switch (action.type) {

		// case NAVHISTORY_ISFETCHING:
		// 	return {
		// 		...state,
		// 		isFetching: !state.isFetching
		// 	};

		case actions.NAVHISTORY_RECEIVING:
			return {
				...state,
				navigations: action.navigations
			};

		// case NAVHISTORY_HASERROR:
		// 	return {
		// 		...state,
		// 		error: action.error
		// 	};

		default:
			return state;
	}
}

// main reducer
const mainReducer = combineReducers({
    navHistory, // gestion de l'historique des navigations
    ui // état de chargement de l'application
});

export default mainReducer;