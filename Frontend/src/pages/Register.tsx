import React, { useState } from "react";
import "../styles/register.css";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    console.log("Formulário enviado:", form);
  };

  return (
    <>
      <div className="register-page">
        <div className="header">
          <header>
            <h2>Bem-vindo ao IU</h2>
            <h2>Crie sua conta!</h2>
          </header>
        </div>

        <main className="register-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h3>Nome de usuário</h3>
              <input
                type="text"
                name="username"
                placeholder="Ex: Gabriel123"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <h3>E-mail</h3>
              <input
                type="email"
                name="email"
                placeholder="gabriel@exemplo.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <h3>Senha</h3>
              <input
                type="password"
                name="password"
                placeholder="1*2&3$4"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <h3>Confirmar senha</h3>
              <input
                type="password"
                name="confirmPassword"
                placeholder="1*2&3$4"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Registrar</button>

            <div className="login-link">
              <h3>OU</h3>
              <a href="/login">faça login</a>
            </div>
          </form>
        </main>
        <footer>
          <p>Entre em contato conosco: 103574@aluno.uricer.edu.br</p>
        </footer>
      </div>
    </>
  );
}
