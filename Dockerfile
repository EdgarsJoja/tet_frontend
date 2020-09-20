FROM node:14


WORKDIR /var/www/frontend
RUN chown node:node . -R

USER node

# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#global-npm-dependencies
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
# optionally, to run npm global bin without specifying path
ENV PATH=$PATH:/home/node/.npm-global/bin

# Install angular CLI globally
RUN npm i -g @angular/cli

# Copy rest of the source code
COPY --chown=node:node . .

EXPOSE 4200

CMD /bin/sh docker/start.sh
