import React from 'react';
import './styles.css';

const UserInput = ({ tarefa, setTarefa, adicionarTarefa }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
};

export default UserInput;