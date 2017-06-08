// var MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');  // creates var called MongoClient, setting it to MongoClient property of require object, same as above
// var obj = new ObjectID();
// console.log(obj);  // use this to generate objectids

// var user = {name: 'kevin', age: 41};  // ES6 destructuring, make new variables from object properties
// var {name} = user;
// console.log(name);

// don't need to have existing db before using it, but won't create it until docs added
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {  // cb fx, err may or may not exist, use db obj to read/write data
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  
    // don't need to create collection before using it 
    // db.collection('Todos').insertOne({  // insert new doc
    //     text: 'Something to do',
    //     completed: false
    //   }, (err, result) => {  // cb fx
    //     if (err) {
    //       return console.log('Unable to insert todo', err);
    //     }
      
    //     // success code
    //     console.log(JSON.stringify(result.ops, undefined, 2));  // .ops store all docs inserted
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
