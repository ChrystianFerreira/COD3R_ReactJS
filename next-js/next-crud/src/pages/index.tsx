import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';
export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Chrystian', 21, '2'),
    new Cliente('Kailany', 19, '3'),
    new Cliente('Kate', 1, '4'),
    new Cliente('Amora', 2, '5'),
  ]

  return (
    <div className={`
      flex h-screen justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro simples">
        <Tabela clientes={clientes}></Tabela>>
      </Layout>
    </div>
  )
}
