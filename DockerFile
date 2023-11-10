# Use a imagem oficial do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install

# Instale o CORS
RUN npm install cors

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação Node.js vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
