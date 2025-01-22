/* docker exec -it pg bash */
/* psql -U root -> Rodar postgres */
/* \l -> Listar databases */
/* \c NOME_TABELA -> Entrar em uma database */
/* \dt -> Listar tabelas */

CREATE DATABASE mycontacts;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE,
    phone VARCHAR,
    category_id UUID,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
