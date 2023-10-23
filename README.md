# Real Estate Web App (MERN Stack)

This project is a full-stack Real Estate web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, browse and search for properties, view property details, and contact the listing agent. Users can also sign up, log in, and save their favorite properties.

## Technologies Used

- **MongoDB**: A NoSQL database used to store property and user data.
- **Express.js**: A web application framework for Node.js, used to build the backend server.
- **React**: A JavaScript library for building user interfaces, used for the client-side of the application.
- **Node.js**: A JavaScript runtime environment, used for server-side scripting.
- **JWT (JSON Web Tokens)**: Used for user authentication and authorization.
- **React Router**: Used for handling routes in the client-side application.
- **Redux Toolkit**: Used for efficient state management in the client-side.
- **Firebase**: An authentication service used for user authentication (can be configured as needed).

## Installation

1. Clone the repository:

```bash
git clone https://github.com/luckidubi/mern-estate.git
cd mern-estate
```

2. Install dependencies for the server:

```bash
npm install
```

3. Install dependencies for the client:

```bash
cd client
npm install
```

4. Create a `.env` file in the root directory with the following variables:

```env
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
```

5. Start the development server:

```bash
npm run dev
```

## Project Structure

- `backend`: Contains the server-side code using Express.js and MongoDB.
- `client`: Contains the client-side code using React.

## Available Scripts

### Server (backend)

- `npm start`: Start the server.
- `npm run dev`: Start the server with nodemon for development.
- `npm run build`: Install dependencies and build the client.

### Client

- `npm run dev`: Start the Vite development server.
- `npm run build`: Build the client for production.
- `npm run lint`: Lint the project using ESLint.
