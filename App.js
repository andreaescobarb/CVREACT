import React, { Component } from 'react';
import imgcurriculum from "./imgcurriculum.jpeg";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={imgcurriculum} alt="hola" align="center"/>
          <h1>Andrea Escobar</h1>
          <p>Dirección: Lomas Del Guijarro Sur, Calle Barcelona, Segunda Etapa</p>
          <p>Correo: andreaescobarb@unitec.edu, andreajaninaescobar@gmail.com</p>
          <p>Número de tel: 22357030</p>
          <p>Número de cel: 32275581</p>

          <h2>Datos Generales:</h2>
          
            <li>Educación primaria:</li>
            <li>Dowal School</li>
            <li>Educación secundaria:</li>
            <li>Dowal School</li>
          
          <h2>Títulos y certificados:</h2>
          
            <li>Bachiller en Ciencias y Letras</li>
            <li>Técnico en computación</li>
            <li>Título de High School</li>
          <h2>Idiomas:</h2>
            <li>Español: nivel alto</li>
            <li>Inglés: nivel alto</li>
            <li>Portugués: nivel intermedio</li>
          <h2>Aptitudes:</h2>
            <li>Proactiva</li>
            <li>Social</li>
            <li>Manejo de términos</li>
            <li>Responsable</li>
     </div>
        );
      }
    }
    
    export default App;
