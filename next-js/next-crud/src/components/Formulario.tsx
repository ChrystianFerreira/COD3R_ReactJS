import Entrada from "./Entrada";
import Cliente from '../core/Cliente';
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente
  cancelado?: () => void
  clienteMudou?: (cliente: Cliente) => void
};

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id ?? null;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {
        id ? (
          <Entrada 
            texto="Código" 
            valor={id}
            somenteLeitura
            className="mb-4"
          />
        ) : false
      }

      <Entrada 
        texto="Nome" 
        valor={nome} 
        valorMudou={setNome}
        className="mb-4"
      />

      <Entrada 
        texto="Idade" 
        tipo="number" 
        valor={idade}
        valorMudou={setIdade}
      />

      <div className="flex justify-end mt-7">
        <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))} className="mr-2" cor="blue">{ id ? "Alterar" : "Salvar"}</Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  )
}