CineSamuraiAPI-v2 ✔️
Bem-vindo ao CineSamuraiAPI versão 2! Uma nova versão para a API que alimenta o site CineSamurai, com operações básicas de CRUD para os recursos de usuários, autenticação, filmes e salas.

Tabela de Conteúdo
CineSamuraiAPI-v2 ✔️
Tabela de Conteúdo
Instruções para Rodar o Projeto
Rotas
Autenticação
Exemplo de Uso
Realiza o login para obter um token de autenticação
Lista todos os filmes
Obtém informações de um filme específico
Instruções para Rodar o Projeto
Siga os passos abaixo para executar a API localmente em seu ambiente de desenvolvimento:

Clone o Repositório: Clone o repositório para o seu ambiente local:

git clone https://github.com/samuelkutz/CineSamuraiAPI-v2
Instale as Dependências: Navegue até o diretório do projeto e instale as dependências usando npm:

cd CineSamuraiAPI-v2
npm install
Configure o Arquivo .env:

Certifique-se de configurar o arquivo .env na raiz do projeto com as variáveis de ambiente necessárias, conforme mencionado no README. Como tivemos dificuldade no deploy, aqui está o .env que você terá que criar.

OBS: Estamos cientes dos problemas de segurança desta ação.

PORT="3000"
 DATABASE_URI="mongodb+srv://admin:sup9rXRwTPkppoLu@cinesamurai.hsmeuxb.mongodb.net/?retryWrites=true&w=majority"
 SECRET_JWT="64cd760a6f1b8327b9f9d8e262dd7a69"
Inicie o Servidor: Inicie o servidor da API executando o seguinte comando:

npm start
O servidor será iniciado na porta definida em seu arquivo .env (por padrão, na porta 3000).

Rotas
/auth - Rota para autenticação de usuários.

POST /login - Rota para fazer login.
//exemplo de body
{
    "email": "seu_email@example.com",
    "senha": "sua_senha"
}
/usuarios - Rota para gerenciamento de usuários.

POST / - Cria um novo usuário.

//exemplo de body
{
    "nome": "Nome do Usuário",
    "email": "email@example.com",
    "cpf": "12345678900",
    "senha": "senha_segura",
    "telefone": "123-456-7890"
}
GET / - Retorna a lista de todos os usuários.

GET /:id - Retorna um usuário específico com base em seu ID.

PATCH /:id - Atualiza um usuário específico com base em seu ID.

//exemplo de body
{
    "nome": "Novo Nome do Usuário",
    "email": "novo_email@example.com",
    "cpf": "98765432100",
    "senha": "nova_senha_segura",
    "telefone": "987-654-3210"
}
DELETE /:id - Exclui um usuário específico com base em seu ID.

/filmes - Rota para gerenciamento de filmes.

POST / - Cria um novo filme.

//exemplo de body
{
    "nome": "Nome do Filme",
    "sinopse": "Sinopse do Filme",
    "url_imagem_capa": "URL da Imagem de Capa",
    "linguagem_original": "Linguagem Original",
    "classificacao_indicativa": "12",
    "duracao": "Duração do Filme"
}
GET / - Retorna a lista de todos os filmes.

GET /:id - Retorna um filme específico com base em seu ID.

PATCH /:id - Atualiza um filme específico com base em seu ID.

//exemplo de body
{
    "nome": "Novo Nome do Filme",
    "sinopse": "Nova Sinopse do Filme",
    "url_imagem_capa": "Nova URL da Imagem de Capa",
    "linguagem_original": "Nova Linguagem Original",
    "classificacao_indicativa": "Livre",
    "duracao": "Nova Duração do Filme"
}
DELETE /:id - Exclui um filme específico com base em seu ID.

/salas - Rota para gerenciamento de salas.

POST / - Cria uma nova sala.

//exemplo de body
{
    "nome": "Nome da Sala",
    "poltronas": [Array de Poltronas] 
}
OBS: as Poltronas devem seguir esse esquema

GET / - Retorna a lista de todas as salas.

GET /:id - Retorna uma sala específica com base em seu ID.

PATCH /:id - Atualiza uma sala específica com base em seu ID.

//exemplo de body
{
    "nome": "Novo Nome da Sala",
    "poltronas": [Novo Array de Poltronas] 
}
OBS: as Poltronas devem seguir esse esquema

DELETE /:id - Exclui uma sala específica com base em seu ID.

Autenticação
Para acessar as rotas que exigem autenticação, você deve fornecer um token de autenticação válido no cabeçalho da solicitação. Recomenda-se usar o endpoint /auth/login para obter um token de autenticação válido.

Exemplo de Uso
Aqui está um exemplo de como fazer uma solicitação usando curl:

# Realiza o login para obter um token de autenticação
curl -X POST http://localhost:3000/auth/login -d "usuario=seu_usuario&senha=sua_senha"

# Lista todos os filmes
curl http://localhost:3000/filmes

# Obtém informações de um filme específico
curl http://localhost:3000/filmes/1
