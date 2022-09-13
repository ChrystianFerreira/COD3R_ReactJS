import Navegador from "../components/Navegador";

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexWrap: 'wrap'
    }}>
      <Navegador cor="crimson" texto="Estiloso" destino="/estiloso" />
      <Navegador cor="#687CEA" texto="Exemplo" destino="/exemplo" />
      <Navegador texto="Jsx" destino="/jsx" />
      <Navegador texto="Nav #01" destino="/navegacao" cor="green" />
      <Navegador texto="Nav #02" destino="/cliente/SP/123" cor="blue" />
      <Navegador texto="Estado" destino="/estado" cor="pink" />
      <Navegador texto="Integração com API" destino="/integracao1" cor="yellow" />
      <Navegador texto="Conteúdo estático" destino="/estatico" cor="#fa054a" />
    </div>
  )
}