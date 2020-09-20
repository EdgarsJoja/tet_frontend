# Remove existing node_modules
rm -rf /var/www/frontend/node_modules

# Install packages
npm ci

# Serve angular
npm start
