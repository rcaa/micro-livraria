# Usar a imagem do Node.js
FROM node:18

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar o package.json e package-lock.json
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta do serviço
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
