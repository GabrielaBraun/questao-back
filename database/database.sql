drop table if exists produtos;

create table if not exists produtos(
	id serial primary key,
 	nome varchar(30) not null,
	preco integer not null
);

drop table if exists usuario;

create table if not exists usuario(
	id serial primary key,
 	nome varchar(30) not null
);

drop table if exists compras;

create table if not exists compras(
	id serial primary key,
 	id_usuario integer references usuario(id) not null,
    data_compra date not null
);

drop table if exists item_compra;

create table if not exists item_compra(
	id serial primary key,
 	id_compra integer references compras(id) not null,
    id_produto integer references produtos(id) not null
);