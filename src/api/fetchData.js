// API : fetch data from url
export default function fetchData(url) {

    // fetch from url
    return fetch(url)

    // transform to json
    .then(response => response.json());
}