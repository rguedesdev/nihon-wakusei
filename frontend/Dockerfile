# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Builda o Next.js para produção
RUN npm run build

# Stage 2: Produção
FROM node:18-alpine

WORKDIR /app

# Copia só os arquivos essenciais da build do stage anterior
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Define a variável de ambiente para rodar em produção
ENV NODE_ENV=production

# Expõe a porta que o Next.js roda
EXPOSE 3000

# Comando para iniciar o app
CMD ["npm", "start"]
