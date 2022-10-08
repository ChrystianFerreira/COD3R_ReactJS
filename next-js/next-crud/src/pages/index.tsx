import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import Cliente from '../core/Cliente';
import { useState } from 'react';
export default function Home() {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Chrystian', 21, '2'),
    new Cliente('Kailany', 19, '3'),
    new Cliente('Kate', 1, '4'),
    new Cliente('Amora', 2, '5'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form');
  }

  function clienteExcluido(cliente: Cliente) {
    console.log("Excluir", cliente.nome)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel('form')
  }


  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro simples">
        { visivel === 'tabela' ? 
          (
            <>
              <div className="justify-end">
                <Botao 
                  cor='green' 
                  className="mb-4"
                  onClick={novoCliente}
                >
                  Novo cliente
                </Botao>
              </div>
              <Tabela 
                clientes={clientes} 
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
              ></Tabela>
            </>
          ) : (
            <Formulario 
              cliente={cliente} 
              cancelado={() => setVisivel('tabela')}
              clienteMudou={salvarCliente}
            />
          )
        }

      </Layout>
    </div>
  )
}
