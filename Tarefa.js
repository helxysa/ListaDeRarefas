
import React from 'react';

const Tarefa = (props) => {
  const { id, descricao, concluida, onMarcarConcluida } = props;

  return (
    <div>
      <span style={{ textDecoration: concluida ? 'line-through' : 'none' }}>
        {descricao}
      </span>
      <button onClick={() => onMarcarConcluida(id)}>
        Marcar como {concluida ? 'Não Concluída' : 'Concluída'}
      </button>
    </div>
  );
};

export default Tarefa;