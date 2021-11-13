# docker-cadastro-simples

SISTEMA SIMPLES CRIADO PARA ENSINO DE DOCKER

# PASSOS PARA CRIAR IMAGEM E EXECUTAR O CONTAINER, TODOS OS PASSOS ABAIXO PRECISAM SER EXECUTADOS
NA PASTA RAIZ DO PROJETO, ONDE ESTÁ LOCALIZADO o Dockerfile e docker-compose

#1 - build a imagem:
docker image build -t "nome-image" .

#2 - execute o docker compose
docker-compose up

# ENCERRAR O CONTAINER
docker-compose down
