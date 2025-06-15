import React, { useState } from "react";
import "../styles/register.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tentativa de login:", form);
  };

  return (
    <>
      <div className="register-page">
        <div className="header">
          <header>
            <h2>Bem-vindo de volta</h2>
            <h2>faça seu login</h2>
          </header>
        </div>

        <main className="register-container">
          <form onSubmit={handleSubmit}>
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
                placeholder="********"
                value={form.password}
                onChange={handleChange}
                required
              />
              <div
                style={{
                  textAlign: "right",
                  fontSize: "13px",
                  marginTop: "4px",
                }}
              >
                <a href="/esqueciasenha">Esqueceu a senha?</a>
              </div>
            </div>

            <button type="submit">Entrar</button>

            <div className="login-link">
              <h3>OU</h3>
              <a href="/registrar">criar uma conta</a>
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
