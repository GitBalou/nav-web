const {Provider} = ReactRedux;
//const {Router, Route} = ReactRouter;
//import { Router, Route, Link } from 'react-router';
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link

store.subscribe(()=> console.log(store.getState()));

//Component App
const App = () => (
	<Provider store={store}>
		<Router>
    		<Route path="/" component={NavList} />
    	</Router>
  	</Provider>
);

// Rendering
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

