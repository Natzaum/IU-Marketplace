import PageLayout from "../components/PageLayout";
import "../styles/create.css";

import React, { useState } from "react";
export default function CreateProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id === "nome"
        ? "name"
        : id === "descricao"
        ? "description"
        : id === "preco"
        ? "price"
        : id === "categoria"
        ? "category"
        : id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:3000/api/products/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: form.name,
            description: form.description,
            price: parseFloat(form.price),
            imageUrl: form.imageUrl,
            category: form.category,
          }),
        }
      );

      if (!response.ok) {
        alert("Erro ao criar produto");
      } else {
        alert("Produto criado com sucesso!");
      }
    } catch (error) {
      alert("Erro ao criar produto");
      console.error(error);
    }
  };

  return (
    <PageLayout title="Criar Produto">
      <div className="scrollable-page">
        <div className="create-product-container">
          <div className="create-product-header">
            <h1>Criar Produto</h1>
            <p>Preencha os detalhes do produto que deseja criar.</p>
            <div className="product-image">
              <img src={form.imageUrl} alt="Imagem do Produto" />
            </div>
          </div>
          <div className="create-product-card">
            <h2 className="create-product-title">Cadastrar Produto</h2>
            <form className="create-product-form" onSubmit={handleSubmit}>
              <div className="form-left">
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Nome do produto"
                  value={form.name}
                  onChange={handleChange}
                />
                <label htmlFor="descricao">Descrição</label>
                <textarea
                  id="descricao"
                  placeholder="Descreva seu produto..."
                  rows={5}
                  value={form.description}
                  onChange={handleChange}
                />
              </div>
              <div className="form-right">
                <label htmlFor="preco">Preço</label>
                <input
                  id="preco"
                  type="number"
                  placeholder="R$"
                  value={form.price}
                  onChange={handleChange}
                />
                <label htmlFor="categoria">Categoria</label>
                <input
                  id="categoria"
                  type="text"
                  placeholder="Categoria do produto"
                  value={form.category}
                  onChange={handleChange}
                />
                <label htmlFor="imageUrl">Imagem (URL)</label>
                <input
                  id="imageUrl"
                  type="text"
                  placeholder="URL da imagem do produto"
                  value={form.imageUrl}
                  onChange={handleChange}
                />
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
