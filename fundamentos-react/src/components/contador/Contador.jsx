import './Contador.css'
import React, { Component } from 'react';
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

export default class Contador extends Component {

  state = {
    numero: this.props.numeroInicial || 0,
    step: this.props.passoInicial || 5,
  }

  increment = () => {
    this.setState({
      numero: this.state.numero + this.state.step
    });
  }

  decrement = () => {
    this.setState({
      numero: this.state.numero - this.state.step 
    });
  }

  setStep = newStep =>
    this.setState({
      step: newStep
    })

  render() {
    return (
      <div className='Contador'>
        <h2>Contador</h2>

        <Display numero={this.state.numero}/>

        <PassoForm
          setStep={this.setStep}
          step={this.state.step}
        />

        <Botoes 
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    )
  }
}