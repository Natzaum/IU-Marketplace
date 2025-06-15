import React from "react";
import profileIcon from "../assets/profile-icon-png-910.png";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="home-page">
      <div className="header-content">
        <h1>IU Marketplace</h1>
        <h3>
          Natã{" "}
          <div className="profile-icon">
            <img src={profileIcon} alt="Ícone" />
            <div className="hover-menu">
              <ul>
                <li>
                  <a href="/perfil">Ver perfil</a>
                </li>
                <li>
                  <a href="/home">Página inicial</a>
                </li>
                <li>
                  <a href="/meusprodutos">Anunciar produto</a>
                </li>
                <li>
                  <a href="/carrinho">Carrinho</a>
                </li>
                <li>
                  <a href="/login">
                    <strong>Sair</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </h3>
      </div>

      <main className="home-content">{children}</main>

      <footer>
        <p>© 2023 IU Marketplace. Todos os direitos reservados.</p>
        <p>Contato: 103574@aluno.uricer.edu.br</p>
      </footer>
    </div>
  );
}
