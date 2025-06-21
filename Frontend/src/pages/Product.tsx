import PageLayout from "../components/PageLayout";
import "../styles/product.css";

export default function Product() {
  return (
    <PageLayout title="">
      <div className="scrollable-page">
      <div className="product-header-container">
        <h1>Detalhes do Produto</h1>
        <div className="product-content">
          <div className="product-image">
            <img/>
          </div>
          <div className="product-info">
            <h2>Nome do Produto</h2>
            <p>Descrição do produto...</p>
            <p>Preço: R$ 100,00</p>
            <button className="action-button">Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
      </div>
    </PageLayout>
  );
}
