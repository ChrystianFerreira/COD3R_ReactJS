import React, { useState } from 'react';
import "./Input.css";

export default props => {

  const [valor, setValor] = useState('Inicial');

  function handleInput(event, setValueFunction) {
    setValueFunction(event.target.value);
  }

  return (
    <div className='Input'>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <input value={valor} onChange={event => handleInput(event, setValor)}/>
        <span>Read-only input field: </span>
        <input value={valor} readOnly />
      </div>
    </div>
  )
}