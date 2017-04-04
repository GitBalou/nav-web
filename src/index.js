
const list = [
    {id_route:1, nom_route:"navigation 1"},
    {id_route:2, nom_route:"navigation 2"}
];

//Component App
const App = () => (
  <NavList navigations={list} />
);

// Rendering
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

