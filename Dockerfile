FROM node:22.17-slim
LABEL maintainer  = "Fred Lackey <fred.lackey@gmail.com>"
LABEL build-date  = "2025-07-11T00:15:33-07:00"
LABEL name        = "api-baseline"
LABEL version     = "0.0.1"
LABEL description = "Baseline API used in POCs and sandbox applications."
LABEL url         = "https://github.com/FredLackey/api-baseline"

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

ENV NODE_ENV production

WORKDIR /home/node/app

COPY --chown=node:node . /home/node/app

RUN npm ci --only=production

USER node

EXPOSE 3000

CMD [ "dumb-init", "node", "./src/server.js" ]