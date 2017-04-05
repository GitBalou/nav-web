import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import NavList from './navHistory/components/NavList';

//Component App
const App = () => (
	<Provider store={store}>
        <NavList />
  	</Provider>
);

// Rendering
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
