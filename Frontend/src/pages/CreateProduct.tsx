export default function CreateProduct() {
    return (
        <div>
            <h1>Criar Produto</h1>
            <p>Preencha os detalhes do produto que deseja criar.</p>
            <form>
                <input type="text" placeholder="Nome do Produto" required />
                <textarea placeholder="Descrição do Produto" required></textarea>
                <input type="number" placeholder="Preço" required />
                <button type="submit">Criar Produto</button>
            </form>
            <div style={{ marginTop: "20px" }}>
                <a href="/meusprodutos">Voltar para Meus Produtos</a>
            </div>
        </div>
    );
}