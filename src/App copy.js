import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      console.log(response.data);
    })
  })

  const enviar = () => {
    Axios.post('http://localhost:3001/api/insert',
      {
        nombre: nombre,
        apellido: apellido,
        contrasenia: contrasenia,
        correo: correo,
        telefono: telefono
      }).then(() => {
        alert("Se logró mijo");
      });
  };

  return (
    <div className="App">
      Hello
      <h1>CRUD APPLICATION</h1>

      <div className="formulario">
        <label>Nombre:</label>
        <input type="text" name="Nombre" onChange={(e) => {
          setNombre(e.target.value)
        }} />
        <label>Apellido:</label>
        <input type="text" name="Apellido" onChange={(e) => {
          setApellido(e.target.value)
        }} />
        <label>Contraseña:</label>
        <input type="password" name="Contrasenia" onChange={(e) => {
          setContrasenia(e.target.value)
        }} />
        <label>Correo:</label>
        <input type="email" name="Nombre" onChange={(e) => {
          setCorreo(e.target.value)
        }} />
        <label>Teléfono:</label>
        <input type="tel" name="Nombre" onChange={(e) => {
          setTelefono(e.target.value)
        }} />
        <button onClick={enviar}>Enviar</button>
      </div>
    </div>
  );
}

export default App;