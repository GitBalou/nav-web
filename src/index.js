const {Provider} = ReactRedux;

store.getState();
store.subscribe(()=> console.log(store.getState()));
//store.dispatch(addNavigationToHistory({id_route:1, nom_route:"navigation 1"}));
//store.dispatch(addNavigationToHistory({id_route:2, nom_route:"navigation 55"}));

//Component App
const App = () => (
	<Provider store={store}>
  		<NavList />
  	</Provider>
);

// Rendering
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

