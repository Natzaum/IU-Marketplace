export default function ForgotPassword() {
  return (
    <div>
      <h1>Recuperar Senha</h1>
      <p>Insira seu e-mail para receber instruções de recuperação de senha.</p>
      <input type="email" placeholder="seu-email@exemplo.com" />
      <button>Enviar</button>
        <div style={{ marginTop: "20px" }}>
            <a href="/login">Voltar para o login</a>
        </div>
    </div>
  );
}
