import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import ProfileIcon from "../assets/profile-icon-png-910.png";
import "../styles/profile.css";

export default function Perfil() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    password?: string;
  } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/api/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({
          name: data.user.name,
          email: data.user.email,
          password: data.user.password,
        });
      })
      .catch(() => {
        alert("Erro ao carregar perfil");
      });
  }, []);

  return (
    <PageLayout title="">
      <div className="perfil-header-container">
        <h1>Meu perfil</h1>
        <div className="perfil-icon">
          <img
            src={ProfileIcon}
            alt="Ícone de perfil"
            className="perfil-image"
          />
        </div>
      </div>

      <div className="perfil-content">
        <div className="perfil-info">
          <h2>Informações do Usuário</h2>
          <div className="perfil-details">
            <p>
              <strong>Nome:</strong> {user?.name || "Carregando..."}
            </p>
            <p>
              <strong>Email:</strong> {user?.email || "Carregando..."}
            </p>

            <p>
              <strong>Senha:</strong>{" "}
              {user?.password ? user.password : "*******"}
            </p>

            <a href="/ajuda" className="help-link">
              Precisa de ajuda?
            </a>
          </div>
        </div>

        <div className="actions">
          <button
            className="action-button"
            onClick={() => (window.location.href = "/meusprodutos")}
          >
            Meus produtos
          </button>
          <button
            className="action-button"
            onClick={() => (window.location.href = "/criarproduto")}
          >
            Anunciar produtos
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
