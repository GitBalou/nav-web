import Immutable from 'immutable';
import {createStore } from 'redux';
import {combineReducers} from 'redux-immutable';
import navList from './navList.duck';
import friendsList from './friendsList.duck';

// initial state & store pattern
const initialState = Immutable.Map({

    //historique des navigations
    navList: navList.initialState,

    // liste des amis
    friendsList: friendsList.initialState,
});

// main reducer
const mainReducer = combineReducers({
        navList: navList.reducer,
        friendsList: friendsList.reducer,
    }, initialState
);

// create store with saga & reducers
const store = createStore(
    mainReducer,
    initialState
);

export default store;