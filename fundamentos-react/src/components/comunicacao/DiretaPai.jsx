import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props => {
  return (
    <div>
      <DiretaFilho 
        nome="Chrystian" idade={20} nerd={true}
      />

      <DiretaFilho 
        nome="Gilberto" idade={28} nerd={true}
      />
    </div>
  )
}