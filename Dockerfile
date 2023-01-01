FROM node
WORKDIR /app
COPY packege.json /app
RUN . /app
CMD node server.js
EXPOSE 4000
