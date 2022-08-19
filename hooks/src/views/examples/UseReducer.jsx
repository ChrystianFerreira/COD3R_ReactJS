import React, { useReducer } from 'react'
import { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store';
import { numberAdd2 } from '../../store/actions';

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [numberToAdd, setNumberToAdd] = useState(0)

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        { state.user 
          ? <span className="text">Bem-vindo, { state.user.name }</span>
          : <span className="text">Usuário não logado</span>
        }
        

        <span className="text">
          {state.number}
        </span>
        
        <div>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
        </div>
        
        <div>
          <button className="btn" onClick={() => dispatch({ type: 'login', payload: 'Chrystian' })}>Logar</button>
        </div>
      </div>

      <PageTitle
        title="Desafio useReducer"
        subtitle="Resultados do desafio!"
      />

      <div className="center">
        <div>
          <button className="btn" onClick={() => dispatch({ type: 'multiply'})}>times 7</button>
        </div>

        <div>
          <button className="btn" onClick={() => dispatch({ type: 'divide'})}>divide by 25</button>
        </div>

        <div>
          <input type="text" className="text" value={numberToAdd} onChange={e => setNumberToAdd(e.target.value)} />
          <button className="btn" onClick={() => dispatch({ type: 'add', payload: numberToAdd })}>Add this value</button>
        </div>

        <div>
          <button className="btn" onClick={() => dispatch({ type: 'toInt'})}>parse to integer</button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer
