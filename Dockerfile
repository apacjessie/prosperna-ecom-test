FROM node:21-bookworm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 5173 3000

CMD ["pnpm", "run", "dev"]