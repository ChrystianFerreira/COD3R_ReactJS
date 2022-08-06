import React from 'react';
import produtos from '../../data/produtos'

export default () => {
  
  const tableData = produtos.map(produto => 
    <tr key={produto.id}>
      <td>{produto.id}</td>
      <td>{produto.nome}</td>
      <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
    </tr>
  )
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
  )
}