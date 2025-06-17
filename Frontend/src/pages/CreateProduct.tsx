import PageLayout from "../components/PageLayout";
import "../styles/create.css";

export default function CreateProduct() {
  return (
    <PageLayout title="Criar Produto">      
    <div className="scrollable-page">
      <div className="create-product-container">
        <div className="create-product-header">
          <h1>Criar Produto</h1>
          <p>Preencha os detalhes do produto que deseja criar.</p>
          <div className="product-image">
            <img src="" alt="Imagem do Produto" />
          </div>
        </div>
        <div className="create-product-card">
          <h2 className="create-product-title">Cadastrar Produto</h2>
          <form className="create-product-form">
            <div className="form-left">
              <label htmlFor="nome">Nome</label>
              <input id="nome" type="text" placeholder="Nome do produto" />
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                placeholder="Descreva seu produto..."
                rows={5}
              />
            </div>
            <div className="form-right">
              <label htmlFor="preco">Preço</label>
              <input id="preco" type="number" placeholder="R$" />
              <label htmlFor="categoria">Categoria</label>
              <input id="categoria" type="text" placeholder="Categoria do produto" />
              <button className="create-product-btn" type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
        <div className="create-product-footer">
          <div style={{ marginTop: "20px" }}>
            <a href="/meusprodutos">Voltar para Meus Produtos</a>
          </div>
        </div>
      </div>

      </div>
    </PageLayout>
  );
}
