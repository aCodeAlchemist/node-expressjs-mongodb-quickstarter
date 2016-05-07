A light weight architecture to quickly start developing your web services using NodeJS and MongoDB.

Before using this stack please make sure you have followings installed:

- MongoDB
- NodeJS
- nodemon

Run `npm install` to install dependencies.

Add MongoDB installation binaries path into environment variable. To start the app:

Start `mongod` in separate window. This willl start mongodb instance. Then Run `nodemon` in separate window.

By default server will run on http://localhost:3000.

SWAGGER UI is pre-installed. To access go to http://localhost:3000/api/swagger-ui Swagger is a powerful interface for your APIs. Find out more about swagger here: http://swagger.io/

To configure database `Database/database.js:3`

````javascript
mongoose.connect('mongodb://localhost/test'); // test is the name of the database
````

More documentation is available at http://shreejibawa.github.io/node-expressjs-mongodb-quickstarter as well as under your app http://localhost:3000 as well.
