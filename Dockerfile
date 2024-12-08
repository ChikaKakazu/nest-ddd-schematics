FROM node:22.8.0-bullseye-slim

RUN apt-get update

WORKDIR /usr/src/app

COPY package*.json ./

# 依存関係をインストール
RUN npm install

COPY . .