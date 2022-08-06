import React, { cloneElement } from 'react';
import FamiliaMembro from './FamiliaMembro'

export default (props) => {

  const { sobrenome } = props;

  return (
    <div>
      {
        props.children.map((childElement, index) => {
          return cloneElement(childElement, { ...props, key: index });
        })
      }
    </div>
  )
  
}