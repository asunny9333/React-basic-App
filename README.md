**My E-Commerce Site (ShopEase)**
This project is a full-stack e-commerce website built using React for the frontend and Node.js with Express for the backend. The database is managed with MongoDB.

**Table of Contents**
*Features
*Prerequisites
*Running the Application
*Folder Structure
*API Endpoints

**Features**
User Authentication (Sign Up, Sign In)
Product Listing
Shopping Cart
Checkout and Order Placement
Receipt Page after Checkout

**Prerequisites**
Before you begin, ensure you have met the following requirements:

Node.js (version 14 or higher) installed on your machine.

1. Install Dependencies
Backend
Navigate to the backend directory and install the necessary packages:

cd backend
npm install

Frontend
Navigate to the frontend directory and install the necessary packages:

cd ../frontend
npm install

2. Setup Environment Variables
Update .env file in the backend directory and add the following:


MONGO_URI=<Your MongoDB URI>


******Running the Application*****
1. Start the Backend Server
In the backend directory, run:

npm start
This starts the backend server on http://localhost:5000.

2. Start the Frontend Server
In the frontend directory, run:

npm start
This starts the frontend on http://localhost:3000.

3. Open Your Browser
Navigate to http://localhost:3000 to use the application.


**Folder Structure**

Final PRoject/
│
├── backend/               # Backend code
│   ├── controllers/       # will be used in the future
│   ├── models/            # Mongoose models / database schema
│   ├── routes/            # Express routes
│   ├── server.js          # Entry point for the backend
│   └── package.json       # Backend dependencies and scripts
│
├── frontend/              # Frontend code
│   ├── public/            # Static assets
│   ├── src/               # React components and pages
│   ├── App.js             # Main App component
│   └── package.json       # Frontend dependencies and scripts
│
└── README.md              # Project documentation


**API Endpoints**

**POST** /api/auth/signup: User registration
**POST** /api/auth/signin: User login
**GET**  /api/products: Get list of products
**POST** /api/orders: Place an order (currently there is no option to add the products from UI, new products can be added directly through database using this API)