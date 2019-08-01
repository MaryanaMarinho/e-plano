# e-Plano

[![GitHub issues](https://img.shields.io/github/issues/MaryanaMarinho/e-plano.svg)](https://github.com/MaryanaMarinho/e-plano/issues) [![GitHub forks](https://img.shields.io/github/forks/MaryanaMarinho/e-plano.svg)](https://github.com/MaryanaMarinho/e-plano/network) [![GitHub stars](https://img.shields.io/github/stars/MaryanaMarinho/e-plano.svg)](https://github.com/MaryanaMarinho/e-plano/stargazers) ![](https://img.shields.io/badge/version-v1.0-blueviolet.svg)

Trabalho de Conclusão de Curso - TADS - Instituto Federal de Goiás.
Sistema para criação do Plano Semestral de Trabalho Docente do IFG - Formosa

## [Back-end](https://github.com/MaryanaMarinho/e-plano/tree/master/e-plano-back)

- Java
- Spring Boot
- MongoDB
- REST

## [Front-end](https://github.com/MaryanaMarinho/e-plano/tree/master/e-Plano)

- Angular
- HTML
- CSS
- Bootstrap

## [TCC](https://github.com/MaryanaMarinho/e-plano/tree/master/texto-tcc)

### E-PLANO: PLANO SEMESTRAL DE TRABALHO DOCENTE

Trabalho de Conclusão de Curso apresentado ao Departamento
de Áreas Acadêmicas da Instituto Federal de Goiás
campus Formosa, como requisito parcial para obtenção do
grau de Tecnólogo em Análise e Desenvolvimento de Sistemas.

Orientador: [Waldeyr Mendes Cordeiro da Silva](https://github.com/waldeyr)

[Apresentação](https://prezi.com/p/i7trvwq9copt/).

## Interface

As imagens da interface do sistema estão disponíveis [aqui](https://github.com/MaryanaMarinho/e-plano/tree/master/resultado).

## Instalação no linux

```sh
$ sudo apt-get update

$ sudo apt-get install git

$ sudo apt-get install nodejs

$ sudo apt-get install build-essential

$ sudo apt-get install oracle-java8-installer

$ sudo apt-get install maven
```
Mongodb no Ubuntu:
> Outros [linux](https://docs.mongodb.com/manual/administration/install-on-linux/)

```sh
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

$ echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

$ sudo apt-get update

$ sudo apt-get install -y mongodb-org

$ sudo service mongod start
```
Crie uma base de dados com o nome plano_semestral_trabalho
Você pode criar atravez do shell do mongo com o comando:

```sh
$ mongo

$ use plano_semestral_trabalho

$ db.formulario.insertOne( { x: 1 } )
```
Em caso de duvida acesse:
>https://docs.mongodb.com/manual/reference/program/mongo/#bin.mongo
https://www.shellhacks.com/mongodb-create-database-and-user-mongo-shell/
https://docs.mongodb.com/manual/core/databases-and-collections/#collections

```sh
$ git clone https://github.com/MaryanaMarinho/e-plano/tree/master/e-Plano/dist/e-Plano.git

$ git clone https://github.com/MaryanaMarinho/e-plano/tree/master/e-plano-back.git
```

No arquivo application-dev.properties deve ser adicionado o usuario e a senha do email para o serviço de email funcionar.
caminho: `e-plano-back/src/main/resources/application-dev.properties`
Nos seguintes atributos:
`spring.mail.username=`
`spring.mail.password=`

Na raiz do projeto back:
```sh
$ mvn clean install

$ mvn spring-boot:run
```
```
$ npm install http-server -g
```
Na raiz do projeto front:
```
$ http-server
```
