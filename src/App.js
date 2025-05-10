import React, { useState } from 'react';
import './App.css';
import logo from './images/images.png'
import UserInput from './components/UserInput'
import UserList from './components/UserList'

function App() {
  const [usuarios, setUsuarios] = useState(['Marta', 'Maria', 'João'])

  const adicionarUsuario = (novoUsuario) => {
    if (usuarios.includes(novoUsuario)) {
      alert('Usuário já existe na lista.');
      return;
    }
    setUsuarios([...usuarios, novoUsuario]);
  }


  return(
    <div className='App'>
      <img src={logo} alt='Logo da empresa' className='logo'/>
     <hr/>
     <UserInput onAdduser={adicionarUsuario} />
     <UserList usuarios={usuarios}/>
    </div>
  );

}

export default App;
