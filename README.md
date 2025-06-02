Este projeto é um backend pra uso de autenticação de 2 fatores.

O usuário irá realizar o cadastro e login normal com email e senha.
Será gerado um segredo único (TOTP) para o usuário; um Qrcode para ser escaneado pelo Google Authenticator e salvo no banco.
Após o login, se o 2FA estiver ativo, será pedido o código derado no app.


### 🔑 Fluxo de autenticação com 2FA:

* ✅ **Login:** email + senha → retorna se o 2FA está ativo
* 🔐 **Se tiver 2FA ativo:** pedir o código → verificar → gerar token JWT
* 🚫 **Se não tiver 2FA:** gerar token JWT direto


### 📦 Estrutura (MVC)

├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/ (ou prisma/)
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── .env
├── package.json
