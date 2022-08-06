import React from "react";

export default (props) => {

  const { min, max } = props;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;;

  return (
    <span>
      Número aleatório entre <strong>{ props.min }</strong> e <strong>{ props.max }</strong>: <strong>{ randomNumber }</strong>
    </span>
  )
}