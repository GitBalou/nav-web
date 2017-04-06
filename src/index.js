import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter  as Router, Route, Link} from 'react-router-dom';
import store from './store.js';
import NavList from './navHistory/components/NavList';

//Component App
const App = () => (
	<Provider store={store}>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="routes/2">Mes routes</Link></li>
                    <li><Link to="cercle/2">Cercle de navigateurs</Link></li>
                </ul>
                <Route path="/" />
                <Route path="/routes/:idUser" component={NavList} />
                <Route path="/cercle/:idUser" />
            </div>
        </Router>
  	</Provider>
);

// Rendering
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
