# IU Marketplace

Sistema **fullstack** para um **marketplace de itens usados**
O objetivo é oferecer uma plataforma simples, funcional e de fácil manutenção, permitindo o cadastro de usuários, gerenciamento de produtos e funcionalidades essenciais para um marketplace.

---

## 📜 Sumário

- [Resumo](#-resumo)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura do Sistema](#-arquitetura-do-sistema)
- [Funcionalidades](#-funcionalidades)
- [Rotas da API](#-rotas-da-api)
- [Como Executar](#-como-executar)
- [Referências](#-referências)

---

## 📌 Resumo

O backend, desenvolvido com **TypeScript**, **Node.js**, **Express**, **TypeORM** e **PostgreSQL**, oferece endpoints para gerenciamento de usuários e produtos, autenticação baseada em **JWT** e integração com serviços via **Docker**.  
O frontend, desenvolvido separadamente com **React**, consome essas APIs e fornece uma interface intuitiva para interação dos usuários.

O projeto segue um **design modular e escalável**, abordando desde o desenvolvimento do lado do servidor até a interface do cliente.

---

## 🛠 Tecnologias Utilizadas

### **Backend**
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática
- **Node.js** – Ambiente de execução JavaScript no servidor
- **Express** – Framework para criação de APIs
- **TypeORM** – Mapeamento objeto-relacional
- **PostgreSQL** – Banco de dados relacional
- **JWT** – Autenticação segura por tokens
- **Docker** – Contêinerização do ambiente
- **Adminer** – Interface web para gerenciar banco de dados
- **Insomnia** – Testes de API

### **Frontend**
- **React** – Biblioteca para construção de interfaces dinâmicas
- **HTML** e **CSS** – Estrutura e estilo

---

## 🏗 Arquitetura do Sistema

O sistema é dividido em dois módulos:

- **Backend**: expõe uma API RESTful com endpoints para autenticação, gerenciamento de produtos e carrinho de compras.
- **Frontend**: consome a API e oferece uma interface interativa e responsiva para os usuários.

A comunicação é feita por requisições **HTTP** no formato **JSON**.

---

## ✨ Funcionalidades

- **Cadastro e autenticação de usuários** com JWT
- **Gerenciamento de produtos** (CRUD)
- **Carrinho de compras** com adição, edição e remoção de itens
- **Arquitetura modular** baseada no padrão **MVC**
- **Banco de dados relacional** com integração via TypeORM
- **Ambiente containerizado** com Docker

---

## 🔗 Rotas da API

### **Usuário**
- `POST /api/users/register` – Cadastro de usuários
- `POST /api/users/login` – Login e geração de token JWT
- `GET /api/users/auth` – Validação de token

### **Produto**
- `POST /api/products/register` – Cadastrar produto
- `PUT /api/products/:id` – Editar produto
- `DELETE /api/products/:id` – Remover produto
- `GET /api/products/all` – Listar produtos
- `GET /api/products/:id` – Detalhes de um produto

### **Carrinho**
- `POST /api/cart/add` – Adicionar item ao carrinho
- `GET /api/cart/all` – Listar itens do carrinho
- `PUT /api/cart/:id` – Editar item do carrinho
- `GET /api/cart/:id` – Detalhar item do carrinho
- `DELETE /api/cart/:id` – Remover item do carrinho

---

## 🚀 Como Executar

### **Pré-requisitos**
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

### **Passos**
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/IU-Marketplace.git
   cd IU-Marketplace
2. Configure as variáveis de ambiente (.env).

3. Suba os containers:
   ```bash
    docker-compose up -d
4. Instale as dependências do backend e frontend:
    ```bash
    Copiar
    Editar
    cd backend && npm install
    cd ../frontend && npm install
5. Inicie o backend e frontend:
    ```bash
    cd backend && npm run dev
    cd ../frontend && npm start

### 📚 **Referências**: 
VIEIRA, Rosângela da Silva; AMARAL, Hellen Fernanda. Plataformas de marketplace e o impacto no comportamento do consumidor: estudo de caso da OLX. Revista de Gestão e Negócios, v. 13, n. 1, p. 78-95, 2021. Disponível em: link.

KOTLER, Philip; KELLER, Kevin Lane. Administração de marketing. 15. ed. São Paulo: Pearson, 2016.

CHRISTENSEN, Clayton. O Dilema da Inovação. São Paulo: MBooks, 2011.

PostgreSQL Documentation