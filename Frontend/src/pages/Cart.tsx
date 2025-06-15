import PageLayout from "../components/PageLayout";
import "../styles/cart.css";
import trashIcon from '../assets/trash-icon.png';

export default function Cart() {
  return (
    <PageLayout title="">
      <div className="cart-header-container">
        <div className="cart-header">
          <h1>Carrinho de Compras</h1>
        </div>
      </div>
      <div className="product-list">
        <div className="cart-summary">
          <div className="cart-texts">
            <h2>Total</h2>
            <p>Total: R$ 0,00</p>
          </div>
          <div className="final-summary">
            <button className="checkout-button" onClick={() => window.location.href="/obrigado"}>Finalizar Compra</button>
            <a>Continuar Comprando</a>
          </div>
        </div>

        <div className="featured-products-container">
          <div className="featured-products">
            <div className="product-item">
              <h3>Produto 1</h3>
              <p>Descrição do produto 1.</p>
              <span>R$ 100,00</span>
              <button>
                <img className="trash-icon" src={trashIcon} alt="Remover" />
              </button>
            </div>
            <div className="product-item">
              <h3>Produto 2</h3>
              <p>Descrição do produto 2.</p>
              <span>R$ 200,00</span>
              <button>
                <img className="trash-icon" src={trashIcon} alt="Remover" />
              </button>
            </div>
            <div className="product-item">
              <h3>Produto 3</h3>
              <p>Descrição do produto 3.</p>
              <span>R$ 300,00</span>
              <button>
                <img className="trash-icon" src={trashIcon} alt="Remover" />
              </button>
            </div>
          </div>
          <div className="featured-products">
            <div className="product-item">
              <h3>Produto 1</h3>
              <p>Descrição do produto 1.</p>
              <span>R$ 100,00</span>
              <button>
                <img className="trash-icon" src={trashIcon} alt="Remover" />
              </button>
            </div>
            <div className="product-item">
              <h3>Produto 2</h3>
              <p>Descrição do produto 2.</p>
              <span>R$ 200,00</span>
              <button>
                <img className="trash-icon" src={trashIcon} alt="Remover" />
              </button>
            </div>
            <div className="product-item">
              <h3>Produto 3</h3>
              <p>Descrição do produto 3.</p>
              <span>R$ 300,00</span>
              <button>
                <img className="trash-icon" src={trashIcon} alt="Remover" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
