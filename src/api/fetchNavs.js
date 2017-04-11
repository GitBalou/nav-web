// API : fetch navigations list
export default function fetchNavs(url) {

    // fetch from url
    return fetch(url)

    // transform to json
    .then(response => response.json())

    // handle server response
    .then(response => {

        // Server error
        if (response.answer_code != 'listerRoutes_end_code_0') {
            throw Error();
        }

        // convert response data
        let navigations = [];
        const data = response.answer_data;
        for( let i in data) {

            navigations.push({
                id: parseInt(data[i].id_route),
                name: data[i].nom_route
            });
        }


        return navigations;
    });
}