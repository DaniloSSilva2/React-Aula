import { useState } from 'react';
import './App.css';
import logo from './logotonnho.png'; // Certifique-se que a imagem está na pasta src

function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    const novaTarefa = tarefa.trim();
    if (!novaTarefa) {
      alert('Digite uma tarefa válida.');
      return;
    }
    setTarefas([...tarefas, novaTarefa]);
    setTarefa(''); // limpa o campo
  };

  return (
    <div className="App">
      <div className="overlay">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Lista de Tarefas</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Digite uma tarefa"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
          />
          <button onClick={adicionarTarefa}>Adicionar</button>
        </div>
        <ul>
          {tarefas.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
