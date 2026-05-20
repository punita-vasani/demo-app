#!/bin/bash

echo "Starting deployment..."

# Backend
cd /home/ubuntu/demo-app/backend

echo "Installing backend dependencies..."
npm install

echo "Restarting backend..."
pm2 restart demo-backend || pm2 start server.js --name demo-backend

# Frontend
cd /home/ubuntu/demo-app/frontend

echo "Installing frontend dependencies..."
npm install

echo "Building frontend..."
npm run build

echo "Restarting Apache..."
sudo systemctl restart apache2

echo "Deployment completed successfully."
