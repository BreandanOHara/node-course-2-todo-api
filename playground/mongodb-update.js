const { MongoClient, ObjectID } = require('mongodb')
//const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // //findoneandupdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59d782b3732c3c75988a042f')
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOrigional: false
    //     }).then((res)=>{
    //         console.log(res)
    //     })

        db.collection('Users').findOneAndUpdate({
        name: 'Joe'
    }, {
            $set: {
                name: 'Breandan'
            },
            $inc:{age:1}
        },
        {
            returnOrigional: false
        }).then((res)=>{
            console.log(res)
        })

    //db.close();
});