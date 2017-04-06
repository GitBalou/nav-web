import {combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import navHistory from '../reducers/reducers';

// main reducer
const mainReducer = combineReducers({
	navHistory // gestion de l'historique des navigations
});

const store = createStore(mainReducer, applyMiddleware(
    thunkMiddleware
));

export default store;