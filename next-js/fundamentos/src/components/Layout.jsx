import styles from "../styles/Layout.module.css"
import Navegador from "./Navegador"

export default function Layout (props) { 
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        <h1>{props.titulo ?? 'Título'}</h1>
        <Navegador destino="/" />
      </div>

      <div className={styles.conteudo}>
      { props.children }
      </div>
    </div>
  )
}