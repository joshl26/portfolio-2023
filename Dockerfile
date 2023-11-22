FROM node:18-alpine
WORKDIR /portfolio-2023
COPY public/ /portfolio-2023/public
COPY src/ /portfolio-2023/src
COPY package.json /portfolio-2023/
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3052