// ACTIONS & REDUCERS : NavList
// Receiving navigation list data
export const NAVLIST_RECEIVE = 'NAVLIST_RECEIVE';

export function navList_receive(navigations) {
    return {type: NAVLIST_RECEIVE, navigations};
}

// Fetching navigations list from remote url
export const NAVLIST_FETCH = "NAVLIST_FETCH";
export function navList_fetch(url) {
    return {type:NAVLIST_FETCH, url};
}

// initial state
const initialState= {
    navigations: [] // navigations list
};

// reducer for navList
export default function navList(state= initialState, action){
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