const {PropTypes} = React;

// component : navigation history <ul>
const NavList = ({navigations}) => (
    <ul>
        {navigations.map(nav =>
            <NavElement
                key={nav.id_route}
                {...nav}
            />
        )}
    </ul>
);

// required properties
NavList.propTypes = {
  navigations: PropTypes.arrayOf(PropTypes.shape({
      id_route: PropTypes.number.isRequired,
      nom_route: PropTypes.string.isRequired
  }))
};

