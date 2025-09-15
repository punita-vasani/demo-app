# Demo App - React.js + Node.js + MongoDB

A simple demo application with a form submission feature using React.js frontend, Node.js backend, and MongoDB database.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn

## Setup Instructions

### 1. Install MongoDB
Make sure MongoDB is installed and running on your system on port 27017.

### 2. Backend Setup
```bash
cd backend
npm install
npm start
```

The backend will run on http://localhost:5001

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

The frontend will run on http://localhost:3000

## Features

- Submit form with name, email, and message
- Data is stored in MongoDB
- View all submitted entries
- Real-time form validation
- Responsive design

## API Endpoints

- `POST /api/submit` - Submit form data
- `GET /api/users` - Get all submitted entries

## Project Structure

```
demo-app/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md
```

## Usage

1. Start MongoDB service
2. Run backend server: `cd backend && npm start`
3. Run frontend app: `cd frontend && npm start`
4. Open http://localhost:3000 in your browser
5. Fill out the form and submit
6. View submitted entries below the form