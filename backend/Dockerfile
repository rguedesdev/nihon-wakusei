# Base oficial Deno
FROM denoland/deno:latest

# Diretório de trabalho
WORKDIR /app

# Copia arquivos de configuração do Deno
COPY deno.json deno.lock ./

# Copia todo o backend
COPY . .

# Expõe a porta
EXPOSE 5000

# Comando de dev (hot reload)
CMD ["deno", "task", "dev"]
