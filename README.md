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
