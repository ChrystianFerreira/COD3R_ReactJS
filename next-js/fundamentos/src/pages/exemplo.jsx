import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo () {
  return (
    <Layout titulo="Usando componentes">
      <h1>Exemplo</h1>
      <Cabecalho title="Fundamentos Next.JS & React.JS" />
    </Layout>
  )
}