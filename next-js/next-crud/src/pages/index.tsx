import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';

import useClientes from '../hooks/useClientes';

export default function Home() {

  const { 
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela
  } = useClientes();

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro simples">
        { tabelaVisivel ? 
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
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente}
              ></Tabela>
            </>
          ) : (
            <Formulario 
              cliente={cliente} 
              cancelado={exibirTabela}
              clienteMudou={salvarCliente}
            />
          )
        }

      </Layout>
    </div>
  );
}
