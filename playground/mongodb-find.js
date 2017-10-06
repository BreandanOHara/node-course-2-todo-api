const { MongoClient, ObjectID } = require('mongodb')
//const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({ _id: new ObjectID('59d76743732c3c759889fe75') }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to find todos,', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`)
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to find todos,', err);
    // });

    db.collection('Users').find({name :'Breandan'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to find todos,', err);
    });
    
    //db.close();
});