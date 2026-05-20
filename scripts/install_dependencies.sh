#!/bin/bash

echo "Installing backend dependencies..."

cd /home/ubuntu/demo-app/backend

npm install

echo "Installing frontend dependencies..."

cd ../frontend

npm install
