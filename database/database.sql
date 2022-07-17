create database games ;
use games;

create table game(
id int not null auto_increment primary key,
title varchar(100),
descripcion varchar(180),
image varchar(200),
create_game timestamp default current_timestamp
);
