// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5998a6843a4aaf019c760ce5')
  // }, {
  //   $set: {  // mongodb update operator, $set sets the value of a field in a doc
  //     completed: true
  //   }
  // }, {  // options: 3rd parameter for findOneAndUpdate
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // challenge Q
  db.collection('Users').findOneAndUpdate({
    name: 'Mike'
  }, {
    $set: {  // mongodb update operator, $set sets the value of a field in a doc
      name: 'Kevin'
    },
    $inc: {
      age: 5
    }
  }, {  // options: 3rd parameter for findOneAndUpdate
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // db.close();
});
