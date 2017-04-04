// Toggle navhistory loading
const NAVHISTORY_ISFETCHING = 'NAVHISTORY_ISFETCHING';

function navHistory_isfetching(isFetching) {
  return {type: NAVHISTORY_ISFETCHING, isFetching};
};

// Receiving navigation history data 
const NAVHISTORY_RECEIVING = 'NAVHISTORY_RECEIVING';

function navHistory_receive(navigations) {
	return {type: NAVHISTORY_RECEIVING, navigations};
}

// Toggle error display
const NAVHISTORY_HASERROR = "NAVHISTORY_HASERROR";

function navHistory_hasError(hasError, msg) {
	return {type: NAVHISTORY_HASERROR, error: { hasError: hasError, msg: msg}};
}

// Fetching data from remote url
function navHistory_fetch(url) {
	return (dispatch) => {

		// loading
		dispatch(navHistory_isfetching(true));

		// fetching
		fetch(url)

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

		// retour ok
		.then(navigations => {
			
			// enregistrement des navigations dans le store
			dispatch(navHistory_receive(navigations));

			// reset de l'erreur 
			dispatch( navHistory_hasError(false, ''));

			// fin du chargement
			dispatch(navHistory_isfetching(false));
		})

		// gestion des erreurs
		.catch( () => {
			
			// Enregistrement de l'erreur dans le store
			dispatch(navHistory_hasError(true, "Erreur lors du chargement des routes"));

			// Fin du chargement
			dispatch(navHistory_isfetching(false));
		});
	}
}

