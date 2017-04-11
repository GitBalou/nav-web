import {combineReducers} from 'redux';
import navList from './NavList';
import loading from './Loading';

// main reducer
const mainReducer = combineReducers({
    navList, // gestion de l'historique des navigations
    loading // état de chargement de l'application
});

export default mainReducer;