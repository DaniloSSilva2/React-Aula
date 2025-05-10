import React from 'react';
import './styles.css';

const UserList = ({ tarefas, removerTarefa }) => {
  return (
    <ul className="task-list">
      {tarefas.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => removerTarefa(index)} style={{ marginLeft: '10px' }}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;