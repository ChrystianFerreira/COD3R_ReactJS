import React from 'react';
import alunos from '../../data/alunos'

export default props => {
  
  const listItems = alunos.map(aluno => 
      <li key={aluno.id}>ID: {aluno.id} - {aluno.nome} - {aluno.nota}</li>
    )
  

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        { listItems }
      </ul>
    </div>
  )
}