import React, {PropTypes} from 'react';

// Component : navigation history <li>
const NavElement = ({nom_route}) => (
  <li>
      {nom_route}
  </li>
);

// required properties
NavElement.propTypes = {
    nom_route: PropTypes.string.isRequired
};

export default NavElement;