
import { useState } from 'react';
import './App.css';
import logo from './logo3.png';

function App() {
  const [usuario, setUsuario] = useState ('');
  const [usuarios, setUsuarios] = useState (['Maria', 'Lucas', 'jose']);

  const adicionarUsuario = () => {
    if (usuarios.includes (usuario)) {
      alert ('Usuario já existe na lista.');
      return;
    }
    //Adicionar novo usuario na lista, mantendo os anteriores.
    setUsuarios ([...usuarios, usuario]) 
    setUsuario (''); //Limpar campo de entrada
  }

  return (
  <div className='App'>
    <img className='logo' src={logo} alt='Logo'/>
    <br></br>
    <h2> Adicionar usuario</h2>
    <input type='text'placeholder='Digite o seu nome' value={usuario} onChange={(e) => setUsuario(e.target.value)}
    /> 
    <button onClick={adicionarUsuario}> Adicionar</button>
    <hr/>
    <h2>Lista de usuarios</h2>
    <ol>
      {usuarios.map((usuario, index) => (
        <li key={index}> {usuario}</li>
    ))}</ol>
  </div>
  );
}

export default App;
