#!/bin/bash

cd /var/www/html/demo-app/backend
pm2 restart backend || pm2 start server.js --name backend

cd /var/www/html/demo-app/frontend

pm2 restart frontend || pm2 start "npx serve -s build -l 3000" --name frontend
