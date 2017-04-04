// Toggle navhistory loading
const NAVHISTORY_ISFETCHING = 'NAVHISTORY_ISFETCHING';

function navHistory_isfetching(isFetching) {
  return {type: NAVHISTORY_ISFETCHING, isFetching};
};

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
		.then(response => response.answer_data)
		// traitement de la réponse
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

		// enregistrement des navigations dans le store
		.then(navigations => dispatch(navHistory_receive(navigations)))

		// fin du loading
		.then( () => dispatch(navHistory_isfetching(false)));

		// gestion des erreurs
	}
}

// Receiving navigation history data 
const NAVHISTORY_RECEIVING = 'NAVHISTORY_RECEIVING';

function navHistory_receive(navigations) {
	return {type: NAVHISTORY_RECEIVING, navigations};
}