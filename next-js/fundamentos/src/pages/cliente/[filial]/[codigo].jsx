import Layout from "../../../components/Layout";
import { useRouter } from 'next/router'

export default function ClientePorCodigo () {

  const { codigo, filial } = useRouter().query;

  return (
    <Layout titulo="Navegação dinâmica">
      <p>Código - {codigo}</p>
      <p>Filial - {filial}</p>
    </Layout>
  )
}