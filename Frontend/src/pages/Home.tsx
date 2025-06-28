import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import { Link } from "react-router-dom";
import "../styles/home.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleCategoryClick = (cat: string) => {
    setCategory(cat === category ? "" : cat);
  };

  const scrollRight = () => {
    const container = document.querySelector(".scroll-track");
    if (container) container.scrollBy({ left: 600, behavior: "smooth" });
  };

  const scrollLeft = () => {
    const container = document.querySelector(".scroll-track");
    if (container) container.scrollBy({ left: -600, behavior: "smooth" });
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/products/all")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.warn("Resposta inesperada:", data);
          setProducts([]);
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar produtos:", error);
        alert("Erro ao carregar produtos");
      });
  }, []);

  const filtered = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search);
    const matchCategory = category ? product.category === category : true;
    return matchSearch && matchCategory;
  });

  const firstLine = filtered.filter((_, index) => index % 2 === 0);
  const secondLine = filtered.filter((_, index) => index % 2 !== 0);

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
            <h2 className="featured-title">Produtos em destaque</h2>
          </div>

          <div className="scroll-wrapper">
            <button className="scroll-arrow scroll-left" onClick={scrollLeft}>
              ←
            </button>

            <div className="scroll-track two-line">
              <div className="scroll-line">
                {firstLine.map((product) => (
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
                  </Link>
                ))}
              </div>

              <div className="scroll-line">
                {secondLine.map((product) => (
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
                  </Link>
                ))}
              </div>
            </div>

            <button className="scroll-arrow scroll-right" onClick={scrollRight}>
              →
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
