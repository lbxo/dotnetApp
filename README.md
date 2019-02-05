# FSJS MEVN Web App

> Welcome to Melvin (MEVN): a web application to house and instruct information similar to a distilled down version of a wiki.  This project utilizes Mongo, Express, Vue, and Node for it's build structure.  This app has been built for a local direct marketing firm to build an online SOP housing platform for their internal production team.  The app is secured using JWT Token and passportjs, where the app will register new users, and also allow a simple login for current users to access the data.  Once logged in, the user can create, read, update, delete, and list the docs in the mongo database. Vue.js gives the frontend a responsive design and works in conjunction with Bootstrap for a clean and clear design.

## To run the web app

``` bash
# install dependencies
npm install

# to run on localhost:3000
npm start
```

## To access the test Mlab db

``` bash
# .env file structure (copy structure into a '.env' file and insert proper credentials)
DB_HOST=""
DB_NAME=""
DB_USERNAME=""
DB_PASSWORD=""

```


## For future dev and testing development
``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# dotnet backend
dotnet build
dotnet run
http://localhost:5000/api/values

```

