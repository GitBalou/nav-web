// Toggle loading
export const LOADING = 'LOADING';

export function loading(loading) {
  return {type: LOADING, loading};
}

// Toggle error display
export const ERROR = "ERROR";

export function error(hasError, msg) {
    return {type: ERROR, error: { hasError: hasError, msg: msg}};
}

// Receiving navigation history data
export const NAVHISTORY_RECEIVING = 'NAVHISTORY_RECEIVING';

export function navHistory_receive(navigations) {
	return {type: NAVHISTORY_RECEIVING, navigations};
}

// Fetching data from remote url
export const NAVHISTORY_FETCH = "NAVHISTORY_FETCH";
export function navHistory_fetch(url) {
	return {type:NAVHISTORY_FETCH, url};
}