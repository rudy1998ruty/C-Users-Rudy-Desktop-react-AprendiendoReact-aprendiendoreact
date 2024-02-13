import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registrando usuario:', { username, email, password });
    // Puedes agregar aquí la lógica de registro, como enviar datos al backend.
  };

  return (
    <div className="App" style={{ backgroundColor: 'blue', color: 'white', textAlign: 'center' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Proyecto de Gestión de Bienestar Canino</h1>
        <p>
          proyecto realizado con react
        </p>
        <p>
        Bienvenido a nuestro Proyecto de Gestión de Bienestar Canino. En nuestra dedicación a mejorar la calidad de vida de nuestros amigos peludos, nos enorgullece presentar una plataforma centrada en el bienestar de los perros. Con un enfoque integral que abarca desde la nutrición hasta la actividad física y la atención médica, nuestro proyecto tiene como objetivo principal fomentar la felicidad y salud de los caninos. ¡Acompáñanos en este viaje para crear un entorno donde cada cola esté en constante movimiento de alegría y vitalidad!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Formulario de Registro */}
        <div>
          <h2>Registro</h2>
          <form>
            <label>
              Nombre de usuario:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
              Correo electrónico:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              Contraseña:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="button" onClick={handleRegister}>
              Registrarse
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
