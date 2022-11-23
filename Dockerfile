FROM node:10

ARG BROWSER_URL

RUN mkdir -p /usr/src/opex
WORKDIR /usr/src/opex

COPY . /usr/src/opex
RUN npm install
RUN npm rebuild node-sass
RUN npm run build

ENV PORT=8085
ENV HOST=0.0.0.0

EXPOSE ${PORT}

# CMD [ "npm", "start" ]
