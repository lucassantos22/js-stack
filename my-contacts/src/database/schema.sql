/* docker exec -it pg bash */
/* \l -> Listar databases */
/* \c NOME_TABELA -> Entrar em uma tabela */
/* \dt -> Listar tabelas */

CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL
);
