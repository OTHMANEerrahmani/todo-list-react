FROM ubuntu:latest
LABEL authors="MAC"
# Étape 1 : Construire l'application React
FROM node:16 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Construire l'application React
RUN npm run build

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine

# Copier les fichiers générés par React (build) dans le répertoire nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copier le fichier de configuration par défaut de Nginx (facultatif, si besoin de modifications)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80 pour servir l'application
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT ["top", "-b"]