# node-mongoose-starter

Node-Express-Mongoose boilerplate

## Usage

Click "Use this template" to copy the setup and clone the repo. Click here for more info on github templates.

## Running

[MongoDB](https://docs.mongodb.com/manual/installation/) needs to be installed.

On Windows, the `mongo-win` script creates a mongo-db path inside the project. Edit the path to point to the correct mongodb location.

Run `yarn mongo-win` to then start a locally hosted mongodb database.

`yarn serve` will build and start the server while also watching for changes. 

Once served, go to `http://localhost:3000` and you should see an empty response object.

To quickly add some data you can use the `mongo` command or use a mongoDB GUI (e.g. [Robo 3T](https://robomongo.org/)). Connect to the local mongodb instance and create a database named `node-starter-test`. Add a collection named `User` and add a document containing a name field. Now restart the server. When visiting `http://localhost:3000` you should now see the document that was added.

## Dependencies

This boilerplate uses typescript, eslint and prettier.
