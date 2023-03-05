FROM node:18-alpine AS dependencies

WORKDIR /app
COPY package.json yarn.lock prisma ./
RUN yarn

FROM node:18-alpine AS build

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM node:18-alpine AS deploy

WORKDIR /app


COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
 
CMD ["node", "server.js"]