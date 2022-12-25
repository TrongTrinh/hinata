FROM node:18-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
    else echo "Lockfile not found." && exit 1; \
    fi

COPY assets ./assets
COPY components ./components
COPY lib ./lib
COPY pages ./pages
COPY public ./public
COPY .env .
COPY .babelrc .
COPY tailwind.config.js .
COPY next.config.js .
# COPY .eslintrc.json .
# COPY .prettierrc.js .
# COPY .prettierignore .
COPY postcss.config.js .
COPY tailwind.config.js .
COPY tsconfig.json .


CMD yarn dev