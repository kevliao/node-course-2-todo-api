// var MongoClient = require('mongodb').MongoClient;   // do 'npm install mongodb@2.2.5 --save' first
// var {MongoClient, ObjectID} = require('mongodb');  // ES6 destructuring: creates var called MongoClient, setting it to MongoClient property of require object, same as above
const {MongoClient, ObjectID} = require('mongodb');
// MongoClient allows to connect to Mongo server and issue commands to db

// var obj = new ObjectID();
// console.log(obj);  // use this to generate objectids

// var user = {name: 'kevin', age: 41};  // ES6 destructuring, make new variables from object properties
// var {name} = user;  // variable name to pull out, and object to destructure
// console.log(name);

// don't need to have existing db before using it, but won't create it until docs added
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {  // ES7 arrow cb fx will fire after connection success or fail, err may or may not exist, use db obj to read/write data
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
    // don't need to create collection before using it 
    // db.collection('Todos').insertOne({  // insert new doc, 2 arguments - object to insert and cbfx
    //     text: 'Something to do',
    //     completed: false
    //   }, (err, result) => {  // cb fx
    //     if (err) {
    //       return console.log('Unable to insert todo', err);
    //     }
      
    //     // success code
    //     console.log(JSON.stringify(result.ops, undefined, 2));  // .ops is array that stores all docs inserted
    //   });


      // Insert new doc into Users (name, age, location)
    //   db.collection('Users').insertOne({
    //     name: 'Andrew',
    //     age: 25,
    //     location: 'Philadelphia'
    //   }, (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert user', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    //   });
    db.close();
});
