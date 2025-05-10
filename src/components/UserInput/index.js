import React, { useState } from 'react';
import './styles.css'
import App from '../../App';

const UserInput = ({ onAdduser }) => {
    const [usuario, setUsuario] = useState('');

    const handlerChange = (event) => {
        setUsuario(event.target.value);
    };

    const handlerSubmit = () => {
        if (usuario.trim) {
            onAdduser(usuario);
            setUsuario('')
        } else {
            alert('Digite o nome do usuário.')
        }
    };
    return (
        <div className='user-input'>
            <h2>Adicionar usuário</h2>
            <input
              type='text'
              placeholder='Digite o nome do usuário'
              value={usuario}
              onChange={handlerChange}
              />

              <button onClick={handlerSubmit}>Adicionar</button>
        </div>

    );

};

export default UserInput;