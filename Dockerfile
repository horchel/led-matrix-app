# Verwende das Node.js Image für die ARM-Architektur
FROM arm32v7/node:16-buster-slim

# Installiere Abhängigkeiten für rpi-rgb-led-matrix
RUN apt-get update && apt-get install -y \
  git \
  build-essential \
  python3 \
  python3-dev \
  cmake \
  libgraphicsmagick++-dev \
  libwebp-dev \
  curl

# Erstelle das Arbeitsverzeichnis
WORKDIR /app

# Kopiere package.json und package-lock.json und installiere Abhängigkeiten
COPY package.json package-lock.json ./
RUN npm install

# Kopiere den restlichen Code
COPY . .

# Starte die Node.js-Anwendung
CMD ["node", "index.js"]
