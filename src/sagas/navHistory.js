import { actionChannel, call, take, put, race } from 'redux-saga/effects';
import fetchNavigations from '../api/navHistory';
import * as actions from '../actions/actions';

// Saga : fetch nav history
function *navHistorySaga(){

    // waiting for navhistory fetch
    const {url} = yield take('NAVHISTORY_FETCH');

    // display loading
    yield put(actions.loading(true));

    try {
        // fetch navigations list
        const navigations = yield call(fetchNavigations, url);

        // store navigations in state
        yield put( actions.navHistory_receive(navigations));

        // hide loading
        yield put(actions.loading(false));
    }
    catch(e){
        console.log(e.message);

        // hide loading
        yield put(actions.loading(false));
    }
}

export default navHistorySaga;
