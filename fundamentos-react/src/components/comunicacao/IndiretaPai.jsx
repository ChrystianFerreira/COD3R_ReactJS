import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default props => {
  let [nome, setNome] = useState('?');
  let [idade, setIdade] = useState('0');
  let [nerd, setNerd] = useState(false);

  function fornecerInformacoes(newNomeVal, newIdadeVal, newNerdVal) {
    setNome(newNomeVal);
    setIdade(newIdadeVal);
    setNerd(newNerdVal);
  }

  return (
    <div>
      <div>
        <span>{nome} - </span>
        <span>{idade} - </span>
        <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
        <IndiretaFilho 
          quandoClicar={fornecerInformacoes}
        />
      </div>
    </div>
  )
}