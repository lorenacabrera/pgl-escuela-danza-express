# PGL Escuela Danza - Express

![Modelo de datos](https://github.com/lorenacabrera/pgl-escuela-danza-express/blob/main/images/pgl-escuela-danza.jpg?raw=true)

Lanzar el servicio web

```bash
$ docker create volume pgl-escuela-danza-data
$ ./launch-docker-compose
$ ./yarn install
$ yarn sequelize-cli db:migrate
$ ./node index.js
```
Ejecutar cliente MySQL

```bash
$ ./launch-mysql-client.sh
```