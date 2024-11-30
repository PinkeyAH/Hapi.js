FROM node:18

WORKDIR /src/app

COPY . . 

# RUN rm .env
# RUN rm -rf node_modules
# RUN chmod 775 /src/app/migrate.sh
RUN npm install
# RUN apt-get update && apt-get install -y vim

EXPOSE 3000

CMD ["npm", "start"]

