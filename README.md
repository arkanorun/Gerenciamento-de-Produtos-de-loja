# 🛍️ Projeto Loja AgilStore

Bem-vindo ao *AgilStore, um projeto simples e ágil para gerenciar sua loja com eficiência utilizando **Node.js* e *Express*! 🚀

---

## 📝 Sumário
- [💡 Sobre o Projeto](#-sobre-o-projeto)
- [📋 Pré-requisitos](#-pré-requisitos)
- [⚙️ Instalação e Execução](#%EF%B8%8F-instalação-e-execução)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
-  [🧪 Testando as APIs](#-testando-as-apis)
- [📜 Licença](#-licença)

---

## 💡 Sobre o Projeto
O *AgilStore* é uma aplicação backend de crud desenvolvida em Node.js usando o framework Express para facilitar o gerenciamento de uma loja. Ideal para quem busca aprender ou construir uma aplicação inicial usando estas tecnologias. Foram utilizadas ainda as bibliotecas nodemon, para facilitar a execução do projeto no desenvolvimento e a biblioteca nativa fs para persistência dos dados em um arquivo json.

---

## 📋 Pré-requisitos
Antes de começar, certifique-se de que seu ambiente atenda aos seguintes requisitos:

1. *Node.js* versão 16 ou superior. [Baixe aqui](https://nodejs.org/)
2. *npm* (gerenciador de pacotes do Node.js) já incluído no Node.js.
3. Editor de código de sua preferência, como *VS Code*. [Baixe aqui](https://code.visualstudio.com/)

---

## ⚙️ Instalação e Execução
Siga os passos abaixo para configurar e rodar o projeto localmente:

1. Clone o repositório:
   bash
   git clone https://github.com/arkanorun/Gerenciamento-de-Produtos-de-loja.git
2. Acesse o diretório do projeto:
   bash
   cd Gerenciamento-de-Produtos-de-loja
 3. Clone o repositório:
       bash
    npm install   
   4. Inicie o servidor em modo de desenvolvimento:
	   bash
	   npm run dev
  5. O servidor será iniciado em http://localhost:3000 (por padrão). 🎉


## 📂 Estrutura do Projeto

Uma visão geral da estrutura do diretório:
projeto-loja_agilstore/
projeto-loja_agilstore/
│
├── src/
│   ├── controllers/       # Controladores da aplicação (lógica de negócios)
│   ├── dataBase/          # Configurações e manipulações de banco de dados
│   ├── middleware/        # Middlewares para validações ou manipulações
│   ├── utils/             # Funções utilitárias
│   ├── index.js           # Arquivo principal do servidor
│   └── router.js          # Arquivo com as rotas da aplicação
│
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── package.json           # Configurações do projeto e dependências
├── package-lock.json      # Controle de versão das dependências instaladas
└── README.md              # Documentação do projeto

----------

## 🧪 Testando as APIs

Para facilitar o teste das APIs do projeto, incluímos uma *collection do Insomnia*. Siga os passos abaixo para importar e usar:

1.  Certifique-se de que o servidor está rodando (npm run dev).
2.  Abra o Insomnia e importe a collection que está na raiz do projeto.
4.  Selecione a opção *"Import Data"* e clique em *"From File"*.
5.  Escolha o arquivo Insomnia_2025-01-08.json que se encontra na raiz do projeto.
6.  Após a importação, você verá uma lista de rotas configuradas. Clique em qualquer rota para testá-la.
7.  Certifique-se de ajustar a URL base, se necessário, para o endereço padrão: http://localhost:3000.

Pronto! Agora você pode testar todas as rotas da API de forma prática. 🚀

## 📜 Licença

Este projeto está sob a licença *ISC*.


💻 **Feito com ❤️ por [Ton](https://github.com/arkanorun)**. Divirta-se e bons códigos! 🚀
