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
Api Bruno:
<img width="428" height="255" alt="image" src="https://github.com/user-attachments/assets/e7027d0f-5e36-44f5-95d7-8a4a1e090739" />

