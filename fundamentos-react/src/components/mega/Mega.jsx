

import React, { useState } from 'react';

export default props => {

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [numerosMegasena, setNumerosMegasena] = useState(null);

  const gerarNumeros = () => {
    let numerosGerados = [];
    while(numerosGerados.length < 7) {
      const novoNumero = gerarNumerosComIntervalo();
      
      if(!numerosGerados.includes(novoNumero))
        numerosGerados.push(novoNumero);
    }

    setNumerosMegasena(numerosGerados);
  }

  const gerarNumerosComIntervalo = () => {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil; 
  }

  return (
    <>
      <div>
        <label htmlFor="minInput">Mínimo: </label>

        <input
          id="minInput"
          type="number"
          value={min}
          onChange={e => setMin(e.target.value)}
        />
      </div>
      
      <div>
        <label htmlFor="maxInput">Máximo: </label> 

        <input
          id="maxInput"
          type="number"
          value={max}
          onChange={e => setMax(e.target.value)}
        />
      </div>

      <button onClick={gerarNumeros}>Gerar números</button>

      { 
        numerosMegasena 
          ? <p>Números gerados: { numerosMegasena.toString() }</p> 
          : <p>Defina um intervalo e clique no botão para gerar!</p>}
    </>
  )
}