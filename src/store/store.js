import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga'
import mainReducer from '../reducers';
import rootSaga from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store with saga
const store = createStore(
    mainReducer,
    applyMiddleware(sagaMiddleware)
);

// then run the root saga
sagaMiddleware.run(rootSaga);

export default store;