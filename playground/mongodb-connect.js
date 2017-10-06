const {MongoClient, ObjectID} = require('mongodb')
//const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text:'Somthing to do',
    //     completed:false

    // }, (err,res) =>{
    //     if (err){
    //         return console.log('Unable to insert todo')
    //     }
    //     console.log(JSON.stringify(res.ops, undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Breandan',
    //     age: 25,
    //     location: 'Limavady'

    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));
    // });


    db.close();
});