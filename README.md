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
node index.js
Si todo está correcto, verás:
Server is running on port 3000.
Backend disponible en:
➡️ http://localhost:3000

El backend permite peticiones desde Ionic:
app.use(cors({ origin: "http://localhost:8100" }));


Este backend incluye dos tipos de autenticación:

Basic Auth
Ruta de login:
POST /login-basic
En Bruno → Auth → Basic Auth
Enviar:
    • Username: email del usuario
    • Password: contraseña en texto plano
Respuesta:
{
  "message": "Autenticación básica exitosa",
  "usuario": "correo@ejemplo.com"
}
Ruta protegida por Basic Auth:
GET /ruta-protegida-basic

 JWT (Token)
Registro de usuario
POST /register
Body:
{
  "email": "test@test.com",
  "password": "123"
}

Login con token
POST /login-token
Body:
{
  "email": "test@test.com",
  "password": "123"
}
Respuesta:
{
  "message": "Token generado correctamente",
  "token": "eyJh..."
}

Ruta protegida con token
GET /ruta-protegida-token
En Bruno → Auth → Bearer Token
Pegar el token.
Respuesta:
{
  "message": "Acceso permitido mediante Token",
  "userId": 3
}




