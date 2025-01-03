# Course Selling App

This project is a Course Selling Application that allows users to browse, purchase, and manage online courses.

## Features

- Browse available courses
- Purchase courses
- User authentication and authorization
- Course management for administrators

## Technologies Used

- Frontend: React, Redux
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/course-selling-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd course-selling-app
    ```
3. Install dependencies for both frontend and backend:
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

### Running the Application

1. Open backend file:
    ```bash
    cd backend
    ```
2. Setup .env file:
    ```bash
    PORT = 3000
    MONGO_URI = '<--ur mongodb server-->'    
    JWT_SECRET = 'some_secret_key' 
    ```

3. Start the backend server:
    ```bash    
    npm start
    ```
4. Start the frontend development server:
    ```bash
    cd frontend
    npm start
    ```

### Usage

- Open your browser and navigate to `http://localhost:3000` to access the application.
- Register or log in to start browsing and purchasing courses.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.
