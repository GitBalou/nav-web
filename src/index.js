const {Provider} = ReactRedux;

store.subscribe(()=> console.log(store.getState()));

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

