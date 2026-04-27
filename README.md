# Task Managment API

This API was built to assign tasks to users. There are two roles - Admin, Employee

## Permissions:

### Admin:

- Create & Assign Tasks
- Delete Tasks
- View ALL Tasks

### Employee:

- View tasks assigned to THEM ONLY
- Mark those tasks as pending/completed (Default: pending)

## Setup Instructions:

### Run the following commands

`git clone [repo-url]`
`cd taskmanagerapi`
`npm install`

### Create a new file called `.env` at the project root

#### ENV File Contents:

`MONGO_URI=[Place the mongoDB Connection URL Here]`
`JWT_SECRET=[Place your json web token secret key here]`
`PORT=[Place the production PORT here]`

## Running in development mode:

Run the command: `npm run dev`

## Running in production mode:

Run the command: `npm start`

## Route Information:

(http://localhost:5000) has been included in all route demo's. In a real condition, you will replace them with your actual production/localhost URL

### Route to Check API is working or not:

http://localhost:5000/api

### Create a user (ADMIN)

POST http://localhost:5000/api/auth/register
Req body:

````{
  "name": "Arjun Agnihotri",
  "email": "arjun@gmail.com",
  "password": "admin",
  "role": "admin"
}```

````

Req Response:

`````{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZWZkYmJjOWUwY2Y5OWRkMmVlMDRjNSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3NzMyNzAzNiwiZXhwIjoxNzc3OTMxODM2fQ.MI2IJUlKTd5QReKz49CgD5j3t6PX6ixCyR-hQiiYIXo"
}```


### Create a user (EMPLOYEE)

POST http://localhost:5000/api/auth/register
Req body:

````{
  "name": "Keshav Pandey",
  "email": "keshav@gmail.com",
  "password": "employee",
  "role": "employee"
}```

`````

Req Response:

````{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZWZkYzEzOWUwY2Y5OWRkMmVlMDRjNiIsInJvbGUiOiJlbXBsb3llZSIsImlhdCI6MTc3NzMyNzEyMywiZXhwIjoxNzc3OTMxOTIzfQ.7cd2qz8rKK_Pw0jhCdLmVYGZLoSATKrPQ3bMU65P0xI"
}```
````
