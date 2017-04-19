import Immutable from 'immutable';
import {createStore } from 'redux';
import {combineReducers} from 'redux-immutable';
import navList from './navList.duck';
import friendsList from './friendsList.duck';
import user from './user.duck';

// initial state & store pattern
const initialState = Immutable.Map({

    //historique des navigations
    navList: navList.initialState,

    // liste des amis
    friendsList: friendsList.initialState,

    // données de l'utilisateur
    user: user.initialState,
});

// main reducer
const mainReducer = combineReducers({
        navList: navList.reducer,
        friendsList: friendsList.reducer,
        user: user.reducer,
    }, initialState
);

// root reducer = mainReducer + reinitializing state on logout
// http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const rootReducer = (state, action) => {

    if(action.type == user.USER_LOGOUT) {
        state = initialState;
    }

    return mainReducer(state, action);
};

// create store with saga & reducers
const store = createStore(
    rootReducer,
    initialState
);

export default store;