import { useEffect, useState } from "react";
import "../styles/home.css";
import "../styles/myproducts.css";
import PageLayout from "../components/PageLayout";
import trashIcon from "../assets/trash-icon.png";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function MeusProdutos() {
  const [products, setProducts] = useState<Product[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/api/products/mine", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => alert("Erro ao carregar produtos"));
  }, [refresh]);

  const scrollRight = () => {
    const container = document.querySelector(".featured-products");
    if (container) {
      container.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    const container = document.querySelector(".featured-products");
    if (container) {
      container.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

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
            <h2 className="featured-title">Anunciados por mim</h2>
            <p className="featured-update" onClick={() => setRefresh(!refresh)}>
              Atualizar
            </p>
          </div>

          <div className="scroll-wrapper">
            {products.length > 3 && (
              <button className="scroll-arrow scroll-left" onClick={scrollLeft}>
                ←
              </button>
            )}
            <div className="featured-products">
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <span>
                    R$ {parseFloat(product.price.toString()).toFixed(2)}
                  </span>
                  <button>
                    <img className="trash-icon" src={trashIcon} alt="Remover" />
                  </button>
                </div>
              ))}
            </div>
            {products.length > 3 && (
              <button className="scroll-arrow" onClick={scrollRight}>
                →
              </button>
            )}
          </div>

          {}
          <div className="create-product">
            <button onClick={() => (window.location.href = "/criarproduto")}>
              Anunciar outros produtos
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
