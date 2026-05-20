#!/bin/bash

sudo chown -R ubuntu:ubuntu /var/www/html/demo-app

echo "Installing backend dependencies..."
cd /var/www/html/demo-app/backend
npm install

echo "Installing frontend dependencies..."
cd /var/www/html/demo-app/frontend
npm install
npm run build
