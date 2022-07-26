# Desafio Frontend

# Desafio

Criar um aplicação react, que possua 5 telas, login, listagem de usuários, criação de post, feed de posts e detalhe do post.

### Faça fork desse projeto para realização do exercício.

# Requisitos de negócio

## Login
- O usuário só poderá entrar na aplicação caso o email exista no endpoint de login ( nos requisitos tecnicos ).
- Caso usuário não possua email cadastrado, deverá exibir uma mensagem de feedback.

## Permissões
- Apenas usuários com o email com final ".tv" terão acesso a listagem de usuários.

## Listagem de usuários
- A listagem deve conter uma paginação.
- Deve ser possível filtrar os dados da listagem por qualquer campo.
- Ao clicar em um usuário da listagem, deve redirecionar para o feed de posts mostrando somente os dados referentes ao usuário selecionado.

## Tela de posts
- Deve listar todos os posts dos usuarios.
- Deve exibir o nome do usuario de cada post.

## Tela de detalhe do post.
- Deve exibir as informações gerais do post.
- Deve exibir todos os comentarios referentes aquele post.

## Tela de criação de post
- Deve conter todos os campos de um post.
- Deverá ter validação pra que todos os campos sejam preenchidos.
- Feedback de sucesso e falha para o usuário.

## Bonus
- Ser possível adicionar comentários aos posts.

# Requisitos Tecnicos
- Endpoint de listagem de usuários - https://jsonplaceholder.typicode.com/users (Usar para o login e para a tela de listagem).
- Endpoint de listagem de posts - https://jsonplaceholder.typicode.com/posts.
- Endpoint de detalhe do post - https://jsonplaceholder.typicode.com/posts/{idPost}.
- Endpoint para filtro de posts por usuário - https://jsonplaceholder.typicode.com/posts?userId={idUsuario}.
- Endpoint para listagem de comentários de um post - https://jsonplaceholder.typicode.com/posts/{idPost}/comments.
- Endpoint para criação de um post - https://jsonplaceholder.typicode.com/posts.
- Consultar documentação para bonus - https://jsonplaceholder.typicode.com/guide/.
