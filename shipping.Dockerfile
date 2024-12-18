# Imagem base derivada do Node.js
FROM node

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar todos os arquivos do projeto para o container
COPY . /app

# Instalar dependências do projeto
RUN npm install

# Comando para inicializar o microsserviço Shipping
CMD ["node", "/app/services/shipping/index.js"]
