# Base image
FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

RUN mkdir -p /etc/ssl/certs
RUN wget https://truststore.pki.rds.amazonaws.com/ap-south-1/ap-south-1-bundle.pem -O /etc/ssl/certs/rds-combined-ca-bundle.pem

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
