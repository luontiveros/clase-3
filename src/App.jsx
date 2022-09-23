import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Form from './Components/Form.jsx';
import './App.css'

const App = () => {
    return (
        <>
          <Navbar/>
          <Form busqueda="Buscar Usuario"/>
        </>
    );
}

export default App;
