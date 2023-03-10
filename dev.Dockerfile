FROM node:18-alpine AS dependencies

WORKDIR /app
COPY package.json yarn.lock prisma ./
RUN yarn

FROM node:18-alpine AS build

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

CMD yarn dev