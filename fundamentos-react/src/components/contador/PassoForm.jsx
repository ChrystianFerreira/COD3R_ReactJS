import React from 'react';

export default props => {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={props.step}
        onChange={e => props.setStep(+e.target.value)}
      />
    </div>
  )
}