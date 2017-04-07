import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga'
import mainReducer from '../reducers/reducers';
import navListSaga from '../sagas/navList.js';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store with saga
const store = createStore(
    mainReducer,
    applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(navListSaga)

export default store;