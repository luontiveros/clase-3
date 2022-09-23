import React from 'react';
import Form from './Form.jsx';
import Dropdown from './Dropdown.jsx';
import Secciones from './Secciones.jsx';

const Navbar = () => {
  const listDropdown = ["Item1", "Item2", "Item3", "Item4"]
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
        <Secciones/>
        <Dropdown lista={listDropdown}/>
      </ul>
      <Form busqueda="Buscar Producto"/>
      </div>
      </div>
      </nav>        
      </>
    );
}

export default Navbar;
