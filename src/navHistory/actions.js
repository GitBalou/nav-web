// Request for navigations history
const NAVHISTORY_REQUEST = 'NAVHISTORY_REQUEST';

function requestNavigationHistory(idUser) {
  return {type: NAVHISTORY_REQUEST, idUser};
};

// receiving navigations history data
const NAVHISTORY_RECEIVE = 'NAVHISTORY_RECEIVE';

function receiveNavigationHistory(json) {
    console.log(json);
    return {type: NAVHISTORY_RECEIVE, json};
}

