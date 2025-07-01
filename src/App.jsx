import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import "./App.css";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    axios.get("https://ap-store.vercel.app/api/produtos")
      .then(response => setProdutos(response.data))
      .catch(error => console.error("Erro ao buscar produtos:", error));
  }, []);

  const produtosFiltrados = produtos.filter((prod) =>
    prod.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <Header filtro={filtro} setFiltro={setFiltro} />
      <div className="container">
        <div className="grid">
          {produtosFiltrados.map((prod) => (
            <div className="card" key={prod.id}>
              <img src={prod.imagem} alt={prod.nome} />
              <h2>{prod.nome}</h2>
              <p><strong>R$</strong> {prod.preco.toFixed(2)}</p>
              <small>{prod.categoria}</small>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
