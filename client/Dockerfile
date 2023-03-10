FROM node:12

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
RUN npm install ts-node --save-dev
RUN npm install typescript -g 
RUN npm install typescript --save-dev

RUN npm rebuild --target=8.1.0 --target_platform=linux --target_arch=x64 --target_libc=glibc --update-binary


# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 7777
RUN npm run build
CMD [ "npm", "start" ]