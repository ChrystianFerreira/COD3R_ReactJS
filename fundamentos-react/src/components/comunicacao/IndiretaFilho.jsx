import React from 'react';

export default props => {
  const emitInfoForFather = props.quandoClicar;
  const gerarIdade = () => parseInt(Math.random() * (20)) + 50
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>
        <span>Filho</span>
        <button onClick={(_) => emitInfoForFather('João', gerarIdade(), gerarNerd())}>
          Fornecer informações
        </button>
      </div>
    </div>
  )
}