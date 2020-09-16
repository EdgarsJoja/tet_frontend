FROM node:14

WORKDIR /var/www/frontend

# At first, copy just packages.json for node_modules installation
COPY package.json .

# Install packages
RUN npm i

# Copy rest of the source code
COPY . .

EXPOSE 4200

CMD npm start
