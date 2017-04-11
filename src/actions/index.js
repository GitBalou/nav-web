// Toggle loading
export const LOADING = 'nav/loading/LOADING';

export function loading(loading) {
    return {type: LOADING, loading};
}

// Receiving navigation history data
export const NAVLIST_RECEIVE = 'NAVLIST_RECEIVE';

export function navList_receive(navigations) {
    return {type: NAVLIST_RECEIVE, navigations};
}

// Fetching data from remote url
export const NAVLIST_FETCH = "NAVLIST_FETCH";
export function navList_fetch(url) {
    return {type:NAVLIST_FETCH, url};
}

// Fetching data from