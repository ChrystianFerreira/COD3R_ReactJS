import Layout from "../components/Layout";

export default function Jsx() {

  const a = 4;
  const b = 3;

  const title = <h1>JSX is a main concept</h1>

  function subtitle() {
    return <h2>{ a * b }</h2>
  }

  return (
    <Layout title="Entendendo o JSX">
      { title }
      { subtitle() }
      <p>
        { JSON.stringify({ name: "Chrystian", age: "21" }) }
      </p>
    </Layout>
  )
}