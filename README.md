# Nihon Wakusei - Site de Notícias

![Docker](https://img.shields.io/badge/docker-066da5?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Deno](https://img.shields.io/badge/Deno-ffffff?style=for-the-badge&logo=deno&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

Este é um site de notícias de anime, mangás, games e cultura pop japonesa em geral.

## Features:

- **⌚ Horário atual:** "Que horas são?"<br>
- **🔎 Pesquisa no Google:** "Pesquisar objeto no Google"<br>
- **🪙 Cotação de dólar, euro e bitcoin:** "Qual a cotação do dólar no momento?"<br>
- **📰 Últimas 5 notícias do momento:** "Quais as últimas notícias?"<br>
- **📽️ 5 filmes mais populares do momento:** "Quais os filmes mais populares no momento?"<br>
- **🎧 Abrir a melhor música, banda e álbum do mundo no Spotify:** "Qual a melhor música do mundo?"<br>
- **⛅ Clima/tempo:** "Clima em São Paulo"<br>
- **🔃 Tradutor para inglês e português:** "Traduzir para o inglês"<br>
- **📒 Criar e visualizar lembretes:** "Criar novo lembrete" ou "Visualizar lembretes"<br>
- **💻 Abrir programar na sua máquina:** "Abrir Discord"<br>
- **💤 Desligar computador em 1 hora ou meia hora:** "Desligar computador em uma hora"<br>
- **❌ Cancelar desligamento do computador:** "Cancelar desligamento"<br>
- **🙋🏽‍♀️ Fechar a assistente:** "Fechar assistente"

## Tecnologias utilizadas:

- [Deno](https://www.python.org/): Runtime Javascript
- [Next.js](https://www.python.org/): Framework React
- Outras: os, sys, webbrowser, urllib.request, json, datetime, requests

## Como executar:

### **1. Instale `Deno` na sua máquina, por meio [deste link](https://www.python.org/)**

### **2. Faça um clone [desse repositório](https://github.com/rafaballerini/AssistentePessoal.git) na sua máquina:**

- Crie uma pasta no seu computador para esse programa, recomendo colocar o nome **Assistente Pessoal**
- Abra o `git bash` ou `terminal` dentro dessa pasta
- Copie a [URL](https://github.com/rafaballerini/AssistentePessoal.git) do repositório
- Digite `git clone <URL copiada>` e pressione `enter`

### **3. Instale as bibliotecas necessárias pelo terminal, dentro dessa pasta criada:**

- gTTS: `pip install gTTS`
- playsound: `pip install playsound`
- beautiful soup 4: `pip install beautifulsoup4`
- speech recognition: `pip install SpeechRecognition`
- translate: `pip install translate`
  caso apareça algum erro referente a alguma das bibliotecas importadas no programa, jogue o nome dela no Google e faça a instalação e passo a passo necessários

### **4. Baixe a ferramenta de lembretes:**

- Acesse o [Notezilla](https://www.conceptworld.com/Notezilla) e faça o download
- Utilize o caminho `C:\Program Files\Conceptworld\Notezilla` para instalação

### **5. Crie sua chave para as APIs:**

**API de filmes:**

- Acesse o [The Movie DataBase](https://www.themoviedb.org/) e faça seu cadastro
- Em configurações, acesse API e crie uma nova chave
- Copie a chave e cole no `token` da função `filmes()`, substituindo a frase `<suachaveapi>`

**API de clima:**

- Acesse o [Open Wheather Map](https://openweathermap.org/) e faça seu cadastro
- Confirme o email recebido e em configurações, acesse suas API Keys
- Copie a chave e cole no `token` da função `clima()`, substituindo a frase `<suachaveapi>`

### **6. Preencha os caminhos dos programas na sua máquina:**

- Pesquise os caminhos dos seguintes programas executáveis na sua máquina: Google Chrome, Visual Studio, Visual Studio Code, Discord e Notion
- Abaixo do comentário `abrir programas do computador`, cole o respectivo caminho em cada chamada de função
- Exemplo: `os.startfile("C:\Program Files\Google\Chrome\Application\chrome.exe")`
- Caso queira adicionar ou deletar algum programa, faça isso utilizando o padrão do código

### **7. Execute o programa pelo terminal:**

- Digite `python assistente.py`

## Estudos:

Na pasta `estudos` você escontra alguns códigos simples, que eu utilizei para aprender sobre as ferramentas, inclusive utilizando outras como [espeak](https://espeak.sourceforge.net/) e [pyttsx3](https://pypi.org/project/pyttsx3/)
