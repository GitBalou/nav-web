import {createStore, combineReducers } from 'redux';
import navList from './navList.duck';
import friendsList from './friendsList.duck';

// main reducer
const mainReducer = combineReducers({
    navList, //historique des navigations
    friendsList // liste des amis
});

// create store with saga & reducers
const store = createStore(
    mainReducer
);

export default store;