import PageLayout from "../components/PageLayout";
import ProfileIcon from "../assets/profile-icon-png-910.png";
import "../styles/profile.css";

export default function Perfil() {
  return (
    <PageLayout title="">
      <div className="perfil-header-container">
        <h1>Meu perfil</h1>
        <div className="perfil-icon">
            <img src={ProfileIcon} alt="Ícone de perfil" className="perfil-image" />
        </div>
      </div>
      <div className="perfil-content">
        <div className="perfil-info">
            <h2>Informações do Usuário</h2>
            <div className="perfil-details">
                <p><strong>Nome:</strong> Natã</p>
                <p><strong>Email:</strong> natã@example.com</p>
                <p><strong>Senha:</strong> ***********</p>          
                <a href="/ajuda" className="help-link">Precisa de ajuda?</a>
            </div>
        </div>
        <div className="actions">
          <button className="action-button" onClick={() => window.location.href="/meusprodutos"}>Meus produtos</button>
          <button className="action-button" onClick={() => window.location.href="/criarproduto"}>
            Anunciar produtos
          </button>

        </div>
      </div>
    </PageLayout>
  );
}
