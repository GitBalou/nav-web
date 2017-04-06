import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {navHistory_fetch} from '../actions/actions';

// component : render navigation history list
class NavList extends React.Component {
    
    // fetch data on mounting
    componentDidMount() {
      this.props.fetchData('http://seame.alwaysdata.net/ajax/userRoute.php?mode=listerRoutes&id=2');
    }

    render() {

      // Render loading
      if( this.props.isFetching) {
        return <div><p>...loading</p></div>;
      }

      // render error
      if(this.props.error.hasError) {
        return <div><p>Erreur {this.props.error.msg} </p></div>;
      }

      // Render navigation list
      return (
        <ul>
          {this.props.navigations.map(nav =>
              <li>{nav.nom_route}</li>
          )}
        </ul>
      );
    }
}

// required properties
NavList.propTypes = {
  navigations: PropTypes.arrayOf(PropTypes.shape({
      id_route: PropTypes.number.isRequired,
      nom_route: PropTypes.string.isRequired
  }))
};

// this component needs navHistory from store
const mapStateToProps = (state) => {
    return {
        isFetching: state.navHistory.isFetching,
        error: state.navHistory.error,
        navigations: state.navHistory.navigations
    };
};

// this component needs 
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(navHistory_fetch(url))
  };
};

// connection du composant à redux
NavList = connect(mapStateToProps, mapDispatchToProps)(NavList);

export default NavList;