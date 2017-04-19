// API : navigations history
import conf from '../conf';

export default {

    // fetch navigation history
    fetch: idUser => {

        // url
        let url = conf.serverUrl+'userRoute.php';
        url += '?mode=listerRoutes';
        url += '&id='+idUser;

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
}