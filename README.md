## 📚 README: Exemplo de Configuração CORS em Aplicação Node.js (Express)

Este projeto demonstra a diferença entre um servidor **Backend (Porta 8080)** que **bloqueia (Etapa A)** e outro que **permite (Etapa B)** requisições de um **Frontend (Porta 3000)** de origem cruzada usando o middleware `cors`.

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

### ❓ Análise Detalhada (Etapas A e B)

#### 1. Qual cabeçalho HTTP de resposta o middleware `cors` adicionou na **Etapa B** para que o navegador permitisse a requisição?

O cabeçalho HTTP de resposta essencial adicionado na **Etapa B** pelo middleware `cors` é:

$$\text{Access-Control-Allow-Origin: http://localhost:3000}$$

Quando o navegador (em `http://localhost:3000`) recebe a resposta do servidor (em `http://localhost:8080`), ele verifica este cabeçalho. Como o valor corresponde exatamente à origem do cliente, o navegador entende que o acesso é permitido e libera o código JavaScript do frontend para processar a resposta.

---

#### 2. Se você mudasse o backend para a porta 8081 sem mudar o frontend, o CORS ainda bloquearia? Por quê?

**Não, a alteração da porta do backend de 8080 para 8081 por si só não causaria um novo bloqueio de CORS**, *contanto que você também atualizasse a URL no arquivo `index.html` para apontar para a porta 8081.*

* **A Origem do Cliente permanece a mesma:** O frontend continua sendo `http://localhost:3000`.
* **O Servidor (Porta 8081) enviaria o cabeçalho permitido:** Na Etapa B, o middleware `cors` está configurado para permitir `origin: 'http://localhost:3000'`. O novo servidor na porta 8081 enviaria o cabeçalho `Access-Control-Allow-Origin: http://localhost:3000`, e o acesso seria permitido.

O bloqueio de CORS na Etapa A ocorre por diferença de Origem (diferença de porta já é uma diferença de Origem). A regra de permissão do CORS deve ser configurada corretamente no servidor para lidar com essa diferença de Origem. A mudança de 8080 para 8081 no servidor não altera o fato de que a **Origem do Cliente** (`3000`) ainda é a única permitida pela regra.

---

#### 3. O que aconteceria se você usasse `origin: '*'` no `corsOptions`?

Se o `corsOptions` fosse alterado para `origin: '*'`:

```javascript
const corsOptions = {
    origin: '*', // Permite QUALQUER origem
    // ...
};
```
---

## 👨‍💻 Autor

Projeto desenvolvido por **Luis**.

---
