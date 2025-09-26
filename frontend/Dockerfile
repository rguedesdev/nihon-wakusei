# # Stage 1: Build
# FROM node:18-alpine AS builder

# WORKDIR /app

# # Copia package.json e package-lock.json (ou yarn.lock)
# COPY package*.json ./

# # Instala dependências
# RUN npm install

# # Copia o restante do código
# COPY . .

# # Builda o Next.js para produção
# RUN npm run build

# # Stage 2: Produção
# FROM node:18-alpine

# WORKDIR /app

# # Copia só os arquivos essenciais da build do stage anterior
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public

# # Define a variável de ambiente para rodar em produção
# ENV NODE_ENV=production

# # Expõe a porta que o Next.js roda
# EXPOSE 3000

# # Comando para iniciar o app
# CMD ["npm", "start"]

# 1️⃣ Imagem base
FROM node:20-alpine

# 2️⃣ Diretório de trabalho dentro do container
WORKDIR /app

# 3️⃣ Copiar apenas package.json e package-lock.json/yarn.lock primeiro (para cache)
COPY package*.json ./ 

# 4️⃣ Instalar dependências
RUN npm install

# 5️⃣ Copiar o restante do projeto
COPY . .      

# 6️⃣ Expõe a porta que o Next.js vai usar
EXPOSE 3000

# 7️⃣ Comando padrão para desenvolvimento
CMD ["npm", "run", "dev"]