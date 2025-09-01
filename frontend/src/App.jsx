import React, { useEffect, useState } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tarefas')
      .then(res => res.json())
      .then(data => setTarefas(data))
      .catch(err => console.error('Erro ao carregar tarefas:', err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-16">
      <h1>Lista de Tarefas Teste</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            {tarefa.titulo} - {tarefa.concluida ? 'Concluída' : 'Pendente'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
