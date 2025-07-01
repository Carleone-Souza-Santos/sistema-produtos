// Header.jsx
import "./App.css";

export default function Header({ filtro, setFiltro }) {
  return (
    <header className="header">
      <h2>Catálogo de Produtos</h2>
      <input
        type="text"
        placeholder="Buscar produto..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
    </header>
  );
}
