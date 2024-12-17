FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie apenas os arquivos de dependências primeiro
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie todo o código-fonte para dentro do container
COPY . .

# Exponha a porta onde o Shipping Service está rodando
EXPOSE 3001

# Comando para iniciar o serviço
CMD ["node", "services/shipping/index.js"]
