export default function Thanks() {
  return (
    <div>
      <h1>Obrigado pela sua compra!</h1>
      <p>Seu pedido foi recebido e está sendo processado.</p>
      <button onClick={() => window.location.href="/home"}>Voltar para a página inicial</button>
    </div>
  );
}
