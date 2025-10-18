FROM node:22-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY . .

RUN pnpm install
RUN pnpm run build

EXPOSE 3000 3001 3002

CMD ["pnpm", "run", "dev"]