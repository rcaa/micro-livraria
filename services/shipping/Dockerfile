# Usa a imagem oficial do Node.js como base
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência do Node.js para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do serviço para o container
COPY . .

# Expõe a porta 3001 para o serviço
EXPOSE 3001

# Comando para iniciar o serviço
CMD ["node", "index.js"]
