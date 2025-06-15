import PageLayout from "../components/PageLayout";
import "../styles/home.css";

export default function Home() {
  return (
    <PageLayout title="">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Busque por um produto..."
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </div>
      <div className="product-list">
        <div className="category">
          <h2>Categorias</h2>
          <div className="category-buttons">
            <button>Todos</button>
            <button>Celulares</button>
            <button>Computadores</button>
          </div>
        </div>

        <div className="featured-products-container">
          <div className="featured-header">
            <h2 className="featured-title">Produtos em destaque</h2>
            <p className="featured-update">Atualizar</p>
          </div>
          <div className="featured-products">
            <div className="product-item">
              <h3>Produto 1</h3>
              <p>Descrição do produto 1.</p>
              <span>R$ 100,00</span>
            </div>
            <div className="product-item">
              <h3>Produto 2</h3>
              <p>Descrição do produto 2.</p>
              <span>R$ 200,00</span>
            </div>
            <div className="product-item">
              <h3>Produto 3</h3>
              <p>Descrição do produto 3.</p>
              <span>R$ 300,00</span>
            </div>
          </div>
          <div className="featured-products">
            <div className="product-item">
              <h3>Produto 1</h3>
              <p>Descrição do produto 1.</p>
              <span>R$ 100,00</span>
            </div>
            <div className="product-item">
              <h3>Produto 2</h3>
              <p>Descrição do produto 2.</p>
              <span>R$ 200,00</span>
            </div>
            <div className="product-item">
              <h3>Produto 3</h3>
              <p>Descrição do produto 3.</p>
              <span>R$ 300,00</span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
