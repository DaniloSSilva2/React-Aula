import { useState } from 'react';
import './App.css';
import logo from './logotonnho.png';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

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
    setTarefa('');
  };

  const removerTarefa = (index) => {
    const novaLista = tarefas.filter((_, i) => i !== index);
    setTarefas(novaLista);
  };

  return (
    <div className="App">
      <div className="overlay">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Lista de Tarefas</h1>
        <UserInput tarefa={tarefa} setTarefa={setTarefa} adicionarTarefa={adicionarTarefa} />
        <UserList tarefas={tarefas} removerTarefa={removerTarefa} />
      </div>
    </div>
  );
}

export default App;