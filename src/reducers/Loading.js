// COMPONENT : LOADING
import * as actions from '../actions';

// Initial state
const initialState = {
    loading: false // display a loading component
};

// reducer for toggle loading
export default function loading(state = initialState, action) {
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
