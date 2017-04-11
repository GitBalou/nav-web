import { actionChannel, call, take, put, race } from 'redux-saga/effects';
import * as actions from '../actions';
import fetchData from '../api/fetchData';

// Saga : fetch nav history
export default function *navListSaga({url}){

    // display loading
    yield put(actions.loading(true));

    try {

        // fetch navigations list (fetch library)
        let response = yield call(fetchData, url);

        // Server error
        if( response.answer_code != 'listerRoutes_end_code_0') {
            throw Error();
        }

        // convert response data
        let navigations = [];
        const data = response.answer_data;
        for( let i in data) {

            navigations.push({
                id_route: parseInt(data[i].id_route),
                nom_route: data[i].nom_route
            });
        }

        // store navigations in state
        yield put( actions.navList_receive(navigations));

        // hide loading
        yield put(actions.loading(false));
    }
    catch(e){
        // hide loading
        yield put(actions.loading(false));
    }
}

