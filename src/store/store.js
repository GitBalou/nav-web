import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga'
import mainReducer from '../reducers/reducers';
import navHistorySaga from '../sagas/navHistory.js';


// Saga middleware
const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);

// creating store
const store = createStoreWithMiddleware(mainReducer);

// Starting sagas
sagaMiddleware.run(navHistorySaga);

export default store;