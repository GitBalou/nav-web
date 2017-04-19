import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter  as Router, Route, Link} from 'react-router-dom';
import store from './redux';
import NavList from './controllers/NavList.jsx';
import FriendsList from './controllers/FriendsList.jsx';
import LoginCtrl from './controllers/LoginCtrl.jsx';
import LogoutCtrl from './controllers/LogoutCtrl.jsx';

//Component App
const App = () => (
	<Provider store={store}>
        <Router>
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/routes/2">Mes routes</Link></li>
                    <li><Link to="/cercle/2">Cercle de navigateurs</Link></li>
                    <li><Link to="/logout">Déconnection</Link></li>

                </ul>
                <Route path="/home" component={LoginCtrl}/>
                <Route path="/routes/:idUser" component={NavList} />
                <Route path="/cercle/:idUser" component={FriendsList}/>
                <Route path="/logout" component={LogoutCtrl}/>
            </div>
        </Router>
  	</Provider>
);

// Rendering
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
