import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import navListSaga from './navList';

// SAGAS : root sagas
export default function *rootSaga(){

    // fetch data for navigation history
    try {
        yield takeEvery(actions.NAVLIST_FETCH, navListSaga);
    }
    catch(e){
        console.log(e.message);
    }
}
