import { useEffect, useState } from "react";
import "../styles/home.css";
import "../styles/myproducts.css";
import PageLayout from "../components/PageLayout";
import trashIcon from "../assets/trash-icon.png";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export default function MeusProdutos() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleCategoryClick = (cat: string) => {
    setCategory(cat === category ? "" : cat);
  };

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
  }, []);

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

  const handleDelete = async (id: number) => {
    const confirmar = window.confirm(
      "Tem certeza que deseja remover este produto?"
    );
    if (!confirmar) return;

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erro ao remover produto");
      } else {
        alert("Produto removido com sucesso!");
        setProducts((prev) => prev.filter((p) => p.id !== id));
      }
    } catch (error) {
      alert("Erro de conexão com o servidor.");
      console.error(error);
    }
  };

  // Aplica os filtros
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search);
    const matchCategory = category ? product.category === category : true;
    return matchSearch && matchCategory;
  });

  return (
    <PageLayout title="">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Busque por um produto..."
          className="search-input"
          value={search}
          onChange={handleSearchChange}
        />
        <button className="search-button">Buscar</button>
      </div>

      <div className="product-list">
        <div className="category">
          <h2>Categorias</h2>
          <div className="category-buttons">
            <button onClick={() => setCategory("")}>Todos</button>
            <button onClick={() => handleCategoryClick("Celulares")}>
              Celulares
            </button>
            <button onClick={() => handleCategoryClick("Computadores")}>
              Computadores
            </button>
            <button onClick={() => handleCategoryClick("Utensílios")}>
              Utensílios
            </button>
            <button onClick={() => handleCategoryClick("Roupas")}>
              Roupas
            </button>
            <button onClick={() => handleCategoryClick("Eletrodomésticos")}>
              Eletrodomésticos
            </button>
          </div>
        </div>

        <div className="featured-products-container">
          <div className="featured-header">
            <h2 className="featured-title">Anunciados por mim</h2>
          </div>

          <div className="scroll-wrapper">
            {filteredProducts.length > 3 && (
              <button className="scroll-arrow scroll-left" onClick={scrollLeft}>
                ←
              </button>
            )}

            <div className="scroll-wrapper">

              <div className="featured-products">
                {filteredProducts.map((product) => (
                  <Link
                    to={`/produto/${product.id}`}
                    key={product.id}
                    className="product-item"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <span>
                      R$ {parseFloat(product.price.toString()).toFixed(2)}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(product.id);
                      }}
                    >
                      <img
                        className="trash-icon"
                        src={trashIcon}
                        alt="Remover"
                      />
                    </button>
                  </Link>
                ))}
              </div>

              {filteredProducts.length > 3 && (
                <button className="scroll-arrow" onClick={scrollRight}>
                  →
                </button>
              )}
            </div>
          </div>

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
