import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => {

  const keyHandler = e => {
    if(e.key === 'Enter')
      return e.shiftKey ? props.handleSearch() : props.handleAdd();
    
    if(e.key === "Escape") return props.handleClear();
  }

  return (
    <div className='todoForm'>
      <Grid cols="12 9 10">
        <input 
          type="text" 
          className="form-control" 
          id="description"
          placeholder="Adicione uma tarefa"
          value={props.description}
          onChange={props.handleChange}
          onKeyUp={keyHandler}
        />
      </Grid>
  
      <Grid cols="12 3 2">
        <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
  
        <IconButton style="info" icon="search" onClick={props.handleSearch} />
  
        <IconButton style="default" icon="close" onClick={props.handleClear} />
      </Grid>
    </div>
  );
}