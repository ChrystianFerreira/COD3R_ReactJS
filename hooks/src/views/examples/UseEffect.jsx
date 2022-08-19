import React, { useState } from 'react'
import { useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num) {
  const n = parseInt(num)

  if(n < 0) return -1;

  if(n === 0) return 1;
  return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [evenOrOddNumber, setEvenOrOddNumber] = useState("Olá!");
  const [fatorial, setFatorial] = useState(1);

  useEffect(() => {
    setFatorial(calcFatorial(number));
    setEvenOrOddNumber(number % 2 == 0 ? "Par" : "Ímpar");
  }, [number])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #1" />

      <div className="center">
        <div>
        <span className="text">Fatorial: </span>
        <span className="text red">{ fatorial >= 0 ? fatorial : 'Não existe' }</span>
        </div>
        
        <input 
          type="number" 
          className="input" 
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #2" />
      <div className="center">
        <span className="text">Status: </span>
        <span className="text red">{ evenOrOddNumber }</span>
      </div>
    </div>
  )
}

export default UseEffect
