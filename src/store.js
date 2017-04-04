const {combineReducers, createStore, applyMiddleware } = Redux;

// main reducer
const mainReducer = combineReducers({
	navHistory // gestion de l'historique des navigations
});

const store = createStore(mainReducer, applyMiddleware(
	thunk
));