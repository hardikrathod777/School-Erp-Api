## SchoolERP API


## Overview

The SchoolERP API is a robust backend application tailored to streamline school management operations. Designed with efficiency in mind, it supports:

 1. User Authentication: Secure login and session management.
 2. Role-Based Access Control (RBAC): Differentiated access levels for roles such as Master Admin, Principal, and Teacher.
 3. Custom Functionalities: Features adapted to specific user roles, ensuring smooth and effective operations.
  
The API is developed using Node.js for scalable and high-performance backend logic and MongoDB for reliable and seamless data management.


## Project Stack
- **Backend**: Node.js
- **Web Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Password Hashing**: bcrypt
- **Environment Variables**: dotenv


## Features

### User Authentication
- **SignUp**: Users can create an account with their details.
- **login**: Users can log in and receive a JWT for secure access.
- **Role-Based Access**: Different access levels for Master, Principal, and Teacher roles.

### User Management

- **Login Logs**: Track and store user login attempts.
- **Password Encryption**: Secure user passwords with bcrypt.

### MongoDB Integration

Store user data in MongoDB using Mongoose for schema management.

## Installation and Setup

### Prerequisites

- **Node.js**: Install the latest version of Node.js from [here](https://nodejs.org/).
- **MongoDB**: Ensure you have access to a MongoDB instance, either locally or using MongoDB Atlas.

### Steps to Install

1. Clone the repository:
   
```bash
git clone https://github.com/hardikrathod777/School-Erp-Api.git
```


2. Install dependencies:

```bash
npm install
```

3. Set up environment variables: Create a .env file in the root of the project and add the following details:

```plaintext
PORT=3000
MONGODB_URL=your_mongo_db_url
JWT_SECRET=your_jwt_secret
```
4. Run the server:

```bash
npm start
```
5. Open the app in your browser:
```bash
http://localhost:3008
```

### Environment 

The project requires the following environment variables:

- **PORT**: The port on which the server will run (e.g., 3000).
- **MONGODB_URL**: MongoDB connection string, provided by MongoDB Atlas or local MongoDB instance.
- **JWT_SECRET**: A secret key for signing JWT tokens.

### Usage
Once the server is running, you can interact with the API using tools like Postman. Here are the main steps to use the API:

- **Signup** : Register users with their name, email, password, and role (Master, Principal, or Teacher).
- **login** : Authenticate users and retrieve a JWT token.
- **Role-Based Actions**: Access restricted routes based on user roles after authentication.

### API Endpoints

## Authentication

# Signup

- **Endpoint**: /auth/signup : Create a new user account.
- **Method**: POST
- **Payload**:
```bash
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "your_password",
  "role": "Master"  // or "Principal" or "Teacher"
}
```

# login
- **Endpoint**: /auth/login : Login with username and password to get a JWT token.
- **Method**: POST
- **Payload**:

```bash
{
  "email": "johndoe@example.com",
  "password": "your_password"
}
```

# Response:

```bash
{
  "message": "Login Successful",
  "token": "JWT_TOKEN_HERE",
  "role": "Master"
}
```

### Role-Based Endpoints

## Master Routes

- **Endpoint**: /admin/master/:id :  Get details of a master by ID."
- **Endpoint**:  /admin/master: Get all masters.
- **Method**: GET

## Principal Routes

- **Endpoint**: /admin/principal/:id :  Get details of a principal by ID."
- **Endpoint**:  /admin/principal: Get all principals.
- **Method**: GET

## Teacher Routes

- **Endpoint**: /admin/teacher/:id :  Get details of a teacher by ID.
- **Endpoint**:  /admin/teacher: Get all teachers.
- **Method**: GET

## student Routes

- **Endpoint**: /admin/student/:id :  Get details of a student by ID.
- **Endpoint**:  /admin/student: Get all students.
- **Method**: GET

## Folder Structure
``` bash
/SchoolERP-API
 ├── /config // Configuration files
 ├── /controllers // Logic for handling requests
 ├── /models // Mongoose models
 ├── /routes // Express.js routes for authentication and user management
 ├── index.js // Main entry point of the application
 └── package.json // Project dependencies and scripts
 ```

