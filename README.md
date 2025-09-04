# 🐹 Guia de Cuidados com Hamsters

Um projeto web completo dedicado a ensinar tudo sobre o cuidado adequado com hamsters.

## 📋 Sobre o Projeto

Este é um guia digital interativo que reúne informações essenciais sobre diferentes raças de hamsters, cuidados básicos, habitat ideal e dicas práticas para quem quer ser o melhor tutor de hamster possível.

## 🌟 Funcionalidades

- **Raças**: Cards informativos com características de cada raça
- **Cuidados**: Guia completo de alimentação, higiene e saúde
- **Habitat**: Como criar o ambiente perfeito

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js
- **Banco de Dados**: MySQL

## 🎯 Objetivo

Centralizar informações confiáveis sobre cuidados com hamsters em um lugar acessível e bem organizado, ajudando tutores a proporcionarem o melhor cuidado para seus pequenos companheiros.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado
- MySQL instalado
- Git

### Backend
```bash
# Clone o repositório
git clone [https://github.com/gabriela-fernanda14/HamsterGuide-Back.git]

# Entre na pasta do backend
cd HamsterGuide-Back

# Instale as dependências
npm install

# Configure o banco de dados no arquivo .env
PORT=
DATABASE_URL=

# Execute as migrations (se houver)
npx prisma migrate dev

# Inicie o servidor
npm run dev
