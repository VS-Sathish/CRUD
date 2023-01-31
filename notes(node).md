## node js does not support DOM, because there is no web page in node

## NO webpage => no document and no window(global variables)

instead of that there is a global variable called "global" in node.js

## node.js command line tool

1. console.log(process.argv) // argv => argument values

## const os = require("os"); => inbuilt package => to view the specs of the system

## Rest api methods to perform CRUD operation

1. Create => Post

2. Read => Get
   =====> these are the HTTP methods
3. Update => Put

4. Delete => Delete

## To establish the connection between node and mongodb :-

1.  we need to create a client => inbuild package (MongoClient)

## client.connect() establishes the TCP connection

const MONGO_URL = "mongodb://127.0.0.1";
const client = new MongoClient(MONGO_URL);

await client.connect();

## in order to the urls while deploying in any external applications, we use (. env ) method

1.  npm install dotenv
2.  cut all the urls and make a seperate folder named (.env)
3.  import the (.env) folder in any wrokspace desired folder. => (import \* as dotenv from dotenv)
4.  call the function => dotenv.config()
5.  ## Url's which are under the seperate folder comes into the desired folder through the "Global variable called (process.env)"
