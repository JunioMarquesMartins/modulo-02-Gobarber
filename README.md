# Gobarber
Aplicação para agendamento de serviços de beleza.

## Tecnologias:
- nodejs, express
- sequelize
- postgres
- mongoDB
- moongose
- docker

## Funcionalidades da primeira versão.
- Criar usuario generando um token de autentificação
- Editar dados do usuario e mudar o password
- Login para usuarios autentificados
- Validação de campos em backend

## Comandos sequelize
```javascript
- yarn sequelize migration:create --name=create-{nome tabela} = (crear migration)
- yarn sequelize db:migrate = (gravar tabela em base de datos)
- yarn sequelize db:migrate:undo = (deletar migrate)
```

## Comandos Docker
```javascript
- docker run --name mongobarber -p 27017:27017 -d -t mongo = (crear container com imagen de mogoDB)
- docker ps = (listar containers activos)
- docker ps -a = (listar todos containers activos/desativos)
- docker stop [nome container]
- docker estart ou start [nome container]
- docker log [nome ou id do container]
```

bootcamp de Rocketseat
