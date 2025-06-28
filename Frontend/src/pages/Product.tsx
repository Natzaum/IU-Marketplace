import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import "../styles/product.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.product) {
          setProduct(data.product);
        } else {
          alert("Produto não encontrado");
        }
      })
      .catch(() => alert("Erro ao carregar produto"));
  }, [id]);

  const handleAddToCart = async () => {
    if (!product) return;

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Você precisa estar logado para adicionar ao carrinho.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product.id,
          quantity: 1,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Erro ao adicionar ao carrinho");
      }

      alert("Produto adicionado ao carrinho!");
    } catch (error: any) {
      alert(error.message || "Erro ao adicionar ao carrinho");
    }
  };

  return (
    <PageLayout title="">
      <div className="scrollable-page">
<<<<<<< HEAD
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
=======
        <div className="product-header-container">
          <h1>Detalhes do Produto</h1>

          {product ? (
            <div className="product-content">
              <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
              </div>

              <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Preço: R$ {parseFloat(product.price.toString()).toFixed(2)}</p>
                <button className="action-button" onClick={handleAddToCart}>
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ) : (
            <p>Carregando produto...</p>
          )}
>>>>>>> abbcffdcc97d545a3f107e175abfe3ca5b6ede11
        </div>
      </div>
      </div>
    </PageLayout>
  );
}
