# WordSmith Backend

WordSmith backend is responsible for handling the server-side logic and API for the WordSmith blogging web application.

## Overview

The WordSmith backend manages user authentication, blog post creation, retrieval, and search functionality. It interacts with the frontend to provide a seamless experience for users.

## Features

- **User Authentication:** Secure user authentication for creating and managing accounts.
- **Blog Post Management:** CRUD operations for creating, editing, and retrieving blog posts.
- **Search API:** API endpoint for searching blog posts based on titles, keywords, or content.
- **Data Storage:** Integration with a database to store user information and blog posts.

## Tech Stack

- **Node.js:** The backend is built using Node.js for server-side JavaScript.
- **Express.js:** Express is used as the web application framework for Node.js.
- **MongoDB:** MongoDB serves as the database for storing user information and blog posts.
- **Mongoose:** Mongoose is used as an ODM (Object Data Modeling) library for MongoDB.
- **bcrypt:** bcrypt is used for hashing and salting passwords for secure storage.
- **imgbb.com:** imgbb.com is used for hosting the cloud platform.


## Getting Started

1. Install Mongodb Compass . Create and Connect in Mongodb Compass to the default url : "mongodb://0.0.0.0:27017"


2. Clone the repository:

   ```bash
   git clone https://github.com/your-username/WordSmith-backend.git

3. npm install

4. Download the existing .env file or create with following content
   ```bash
   PORT=8080
   KEY=8fe77e6b1255326cd57bd02d28ad003f
   BASE_URL=mongodb://0.0.0.0:27017/testdb

5. node server.js

6. Backend will be running in the port 8080