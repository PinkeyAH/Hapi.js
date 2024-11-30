# Hapi.js - RESTful API Example

This is a RESTful API example built with Node.js and MySQL, following the MVC (Model-View-Controller) design pattern.

Getting Started
1. Clone the Repository

git clone https://github.com/PinkeyAH/Hapi.js.git

2. Install Dependencies
Navigate to the project directory and install the necessary dependencies:

cd Hapi.js
npm install

3. Configure Environment Variables
Create a .env file in the root directory and add your database and JWT credentials:

 
PORT=3000
DB_HOST=192.168.35.60
DB_USER=root
DB_PASSWORD=password
DB_NAME=database_development
DB_DIALECT=mysql
NODE_ENV=development
JWT_SECRET=your_jwt_secret


4. Start the API
Run the following command to start the API in development mode:
                                                                                       
npm start

# Running Tests

1. Run the Tests
To execute the tests, run the following command:
npm test

2. Check if the users Table Exists
Log in to your database and verify that the users table exists in the database_test:

sql
Copy code
USE database_test;
SHOW TABLES;

3. Re-run Migrations for Tests
If necessary, recreate and migrate the database using the Sequelize CLI:


npx sequelize-cli db:drop --env test
npx sequelize-cli db:create --env test
npx sequelize-cli db:migrate --env test


4. Add Test Seeders (Optional)
If your tests depend on initial data, set up the seeders:

npx sequelize-cli db:seed:all --env test


5. Re-run Tests
Once the database is properly set up and migrations have been applied, rerun the tests:

npm test


# Test and Deploy
1. Start the Server Locally
To run the server locally:

npm start

2. Build the Docker Image
Build a Docker image for your application:

docker build -t networth-tracker-backend .

3. Run the Docker Container
Run the Docker container with the following command:

 docker run -p 3000:3000 networth-tracker-backend

4. Push to GitHub & CI/CD Pipeline
Push the code to GitHub, and your CI/CD pipeline will handle the build and deployment process.


