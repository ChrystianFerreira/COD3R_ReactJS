import { useState } from "react";
import Layout from "../components/Layout"

export default function Integracao () {

  const [codigo, setCodigo] = useState(1);
  const [cliente, setCliente] = useState({});

  function obterCliente() {
    fetch(`http://localhost:3000/api/clientes/${codigo}`)
      .then(resp => resp.json())
      .then(dados => setCliente(dados))
      .then(() => console.log(cliente))
  }


  return (
    <Layout>
      <div>
        <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
        <button onClick={obterCliente}>Obter cliente</button>
      </div>
      <ul>
        <li>Código: {cliente.id}</li>
        <li>Nome: {cliente.nome}</li>
        <li>E-mail: {cliente.email}</li>
      </ul>
    </Layout>
  )

 
}