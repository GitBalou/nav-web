// API for navigation history
export default function fetchNavigations(url){

    // fetching
    return fetch('erer')

    // conversion de la réponse en json
    .then(response => response.json())

    // test de la réponse
    .then(response => {

        // erreur
        if( response.answer_code != 'listerRoutes_end_code_0') {
            throw Error();
        }

        // retour ok
        return response.answer_data;
    })

    // analyse de la réponse
    .then(data => {

        // conversion en array
        let navigations = [];

        for( let i in data) {

            navigations.push({
                id_route: parseInt(data[i].id_route),
                nom_route: data[i].nom_route
            });
        }

        // retour de l'array
        return navigations;
    })

    // erreur : retransmise
    .catch( (e) => {
        throw new Error(e.message);
    });
}