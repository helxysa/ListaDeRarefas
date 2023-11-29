// ListaTarefas.js
import React, { useState } from 'react';
import Tarefa from './Tarefa';

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas([...tarefas, { id: Date.now(), descricao: novaTarefa, concluida: false }]);
      setNovaTarefa('');
    }
  };

  const marcarConcluida = (id) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.length === 0 ? (
          <p>Nenhuma tarefa disponível.</p>
        ) : (
          tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <Tarefa {...tarefa} onMarcarConcluida={marcarConcluida} />
            </li>
          ))
        )}
      </ul>
      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova Tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      </div>
    </div>
  );
};

export default ListaTarefas;
