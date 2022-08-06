import './App.css'
import React from "react";

import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import DesafioNumeroAleatorio from "./components/basicos/DesafioNumeroAleatorio";
import Card from "./components/layout/Card";
import Mega from './components/mega/Mega';

export default (props) => {
  return (
    <div className="App">
      <h1>Fundamentos react</h1>
      <div className="Cards">
        <Card title="#13 - Gerador mega-sena" color="#687CEA">
          <Mega />
        </Card>

        <Card title="#12 - Contador" color="#424242">
          <Contador numeroInicial={10} />
        </Card>

        <Card title="#11 - Componente controlado" color="#E45F56">
          <Input />
        </Card>

        <Card title="#10 - Comunicação indireta" color="#8BAD39">
          <IndiretaPai />
        </Card>

        <Card title="#09 - Comunicação direta" color="#59323C">
          <DiretaPai />
        </Card>

        <Card title="#08 - Renderização condicional - Par ou ímpar" color="#00C8F8">
          <ParOuImpar number={10}/>
          <UsuarioInfo usuario={{ nome: 'Fernando' }} />
        </Card>

        <Card title="#07 - Repetição - Desafio" color="#00C8F8">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card title="#06 - Repetição " color="#00C8F8">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card title="#05 - Componente com filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira da Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>

        <Card title="#04 - Desafio número aleatório" color="#080">
          <DesafioNumeroAleatorio
            min={1}
            max={5}
          />L
        </Card>

        <Card title="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card title="#02 - Com Parametro" color="#E8B71A">
        <ComParametro
          titulo="Situação do aluno(a)"
          subtitulo="Muito legal! (prop subtitulo)"
          aluno="Chrystian"
          nota={9.3}
        />
        </Card>

        <Card title="#01 - Primeiro" color="#588C73">
          <Primeiro />
        </Card>
      </div>
    </div>
  )
}