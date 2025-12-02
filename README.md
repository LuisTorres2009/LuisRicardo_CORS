## 📚 README: Exemplo de Configuração CORS em Aplicação Node.js (Express)

Este projeto demonstra a diferença entre um servidor **Backend (Porta 8080)** que **bloqueia (Etapa A)** e outro que **permite (Etapa B)** requisições de um **Frontend (Porta 3000)** de origem cruzada usando o middleware `cors`.

Link do Vídeo: https://drive.google.com/file/d/1A0gJT7viiXAGI54tIW2rPc1qqrtebho8/view?usp=drive_link

---

### 📂 Estrutura do Projeto
```text
LuisRicardo_CORS
│── backend/
│   └── server.js
│── frontend/
│   └── index.html
└── README.md

```
---
### 🛠️ Execução do projeto

#### Clone o Repositório
   
   ```bash
    git clone https://github.com/LuisTorres2009/LuisRicardo_CORS
    cd LuisRicardo_CORS
   ```

####  Instalação das Dependências


1.  **Instalação do Backend:**
    ```bash
    cd backend
    npm install
    ```

2.  **Instalação do Frontend:**
    ```bash
    cd ../frontend
    npm install
    ```

---

### 🚀 Cenários de Execução

Você pode alternar entre os cenários A e B comentando/descomentando o código no arquivo `server.js` e reiniciando o backend.

#### 1. Iniciar o Backend (Porta 8080)

1.  **Navegue até a pasta `backend`:**
    ```bash
    cd backend
    ```
2.  **Inicie o Servidor Backend:**
    ```bash
    node server.js
    ```

#### 2. Iniciar o Frontend (Porta 3000)

1.  **Navegue até a pasta `frontend`:**
    ```bash
    cd ../frontend
    ```
2.  **Inicie o Servidor Frontend:**
    ```bash
    npx serve -l 3000
    ```
    Acesse **http://localhost:3000** no navegador.

---

### 💻 Resultados por Etapa

| Etapa | Configuração do `server.js` | Comportamento no Navegador (http://localhost:3000) |
| :---: | :--- | :--- |
| **A** | **Sem** middleware `cors`. | **Bloqueio de CORS.** O navegador exibe erro no console e o frontend não consegue ler a resposta. |
| **B** | **Com** `cors` configurado para `http://localhost:3000`. | **Permitido.** A requisição é bem-sucedida e a mensagem da API é exibida. |

---

### ❓Respostas das Perguntas Feitas

#### 1. Qual cabeçalho HTTP de resposta o middleware `cors` adicionou na **Etapa B** para que o navegador permitisse a requisição?

O cabeçalho de resposta crucial adicionado pelo servidor (porta 8080) é o **`Access-Control-Allow-Origin`**.

O valor exato que ele envia é: **Access-Control-Allow-Origin: http://localhost:3000**

* **Função:** Este cabeçalho informa ao navegador que a **Origem do Cliente** (`http://localhost:3000`) tem permissão explícita para ler o conteúdo da resposta da API, validando a regra de CORS. Sem ele, a requisição seria bloqueada.

---

#### 2. Se você mudasse o backend para a porta 8081 **sem mudar o frontend**, o CORS ainda bloquearia? Por quê?

**Não, a requisição não seria bloqueada pelo CORS, mas sim por um erro de conexão.**

* **Problema:** O frontend (`index.html`) ainda está configurado para tentar acessar a porta **8080**.
* **Resultado:** Se o servidor for movido para a porta **8081**, nada estará escutando na porta 8080. A requisição falhará imediatamente no nível da rede, resultando em um erro de **Conexão Recusada** (`ERR_CONNECTION_REFUSED`).
* **Conclusão:** O CORS só atua se o servidor receber a requisição; neste caso, a requisição nem sequer alcançaria o servidor na porta 8081.

---

#### 3. O que aconteceria se você usasse `origin: '*'` no `corsOptions`?

Se o `corsOptions` fosse alterado para `origin: '*'`, o servidor enviaria o cabeçalho `Access-Control-Allow-Origin: *`.

* **Resultado:** **Permissão Universal.** Qualquer domínio, protocolo ou porta seria permitido a acessar a API.
* **Comportamento**: A requisição do seu frontend (3000) funcionaria, assim como funcionaria se o cliente estivesse em um domínio diferente (https://exemplo.com) ou em outra porta (http://localhost:5000).
* **Atenção:** Isso é uma **prática insegura** para APIs não públicas, pois remove a proteção de origem. Além disso, **impede o uso de credenciais** (cookies) nas requisições, pois `Access-Control-Allow-Origin: *` é incompatível com a opção de envio de credenciais do navegador.
---

## 👨‍💻 Autor

Projeto desenvolvido por **Luis**.

---
