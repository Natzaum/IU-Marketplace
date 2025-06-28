import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import "../styles/cart.css";
import trashIcon from "../assets/trash-icon.png";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Você precisa estar logado para acessar o carrinho.");
      return;
    }

    fetch("http://localhost:3000/api/cart/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("🔍 Resposta da API:", data);

        if (Array.isArray(data)) {
          setCartItems(data);
        } else {
          alert("Erro: a resposta do carrinho não é uma lista.");
          setCartItems([]);
        }
      })
      .catch(() => alert("Erro ao carregar carrinho"));
  }, []);

  const token = localStorage.getItem("token");

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  const firstLine = cartItems.filter((_, i) => i % 2 === 0);
  const secondLine = cartItems.filter((_, i) => i % 2 !== 0);

  const handleDelete = async (id: number) => {
    const confirmar = window.confirm("Deseja remover este item do carrinho?");
    if (!confirmar) return;

    try {
      const res = await fetch(`http://localhost:3000/api/cart/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Erro ao remover");
      }

      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Erro ao remover item do carrinho");
    }
  };

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
            <p>Total: R$ {total.toFixed(2)}</p>
          </div>
          <div className="final-summary">
            <button
              className="checkout-button"
              onClick={() => (window.location.href = "/obrigado")}
            >
              Finalizar Compra
            </button>
            <a href="/home">Continuar Comprando</a>
          </div>
        </div>

        <div className="featured-products-container">
          <div className="scroll-wrapper">
            <div className="scroll-track two-line">
              <div className="scroll-line">
                {firstLine.map((item) => (
                  <Link
                    to={`/produto/${item.product.id}`}
                    key={item.id}
                    className="product-item"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h3>{item.product.name}</h3>
                    <p>{item.product.description}</p>
                    <span>
                      R$ {parseFloat(item.product.price.toString()).toFixed(2)}
                    </span>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(item.id);
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

              <div className="scroll-line">
                {secondLine.map((item) => (
                  <Link
                    to={`/produto/${item.product.id}`}
                    key={item.id}
                    className="product-item"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h3>{item.product.name}</h3>
                    <p>{item.product.description}</p>
                    <span>
                      R$ {parseFloat(item.product.price.toString()).toFixed(2)}
                    </span>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(item.id);
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
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
