// COMPONENT : NavList
import * as actions from '../actions';

// initial state
const initialState= {
    navigations: [] // navigations list
};

// reducer for navList
export default function navList(state= initialState, action){
	console.log(action);
	switch (action.type) {

		case actions.NAVLIST_RECEIVE:
			return {
				...state,
				navigations: action.navigations
			};

		default:
			return state;
	}
}