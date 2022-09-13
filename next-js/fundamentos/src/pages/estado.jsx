import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
  const [numero, setNumero] = useState(0);

  function increment() {
    setNumero(numero + 1);
  }


  return (
    <Layout titulo="Componente com estado">
      <h1>{numero}</h1>
      <button onClick={increment}>Increment</button>
    </Layout>
  )
}