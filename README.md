# Podcastr
Ideia do projeto foi oferecida no bootcamp da [Rocketseat](https://blog.rocketseat.com.br/) com o intuito de funcionar como uma plataforma para se ouvir podcasts, foi feito utilizando [Next.js](https://nextjs.org/) e seus conceitos de SSR e SSG juntamente com [Typescript](https://www.typescriptlang.org/).

Para que a aplicação funcione em sua totalidade e acessar os podcasts necessário rodar juntamente com o esse projeto um outro projeto que foi feito em node por mim utilizando um banco de dados não relacional, você pode escolher a forma que vai rodar esse backend, a primeira opção é criando um container via uma imagem [docker](https://hub.docker.com/repository/docker/gildofj/podcastr-backend/general) que fiz a partir de meu backend, a outra forma é clonando o [repositório](https://github.com/Gildofj/NLW5-Podcastr-backend) do backend  e rodando ele em sua máquina local, dessa segunda forma é necessário você configurar um banco para armazenar os podcasts.

## Rodando o projeto
```bash
  npm run dev
  # or
  yarn dev
```

Em seguida basta acessar http://localhost:3000 e escutar os podcasts e customizar as paginas a sua maneira.
