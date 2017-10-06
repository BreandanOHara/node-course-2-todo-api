const { MongoClient, ObjectID } = require('mongodb')
//const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


    // //deleteMany
    // db.collection('Todos').deleteMany({ text: 'eat lunch' }).then((res) => {
    //     console.log(result);
    // })


    //deleteOne
    // db.collection('Todos').deleteOne({text:'eat lunch'}).then((res)=>{
    //     console.log(result);
    // })

    //FindOnenddelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((res) =>{
    //     console.log(res)
    // })

    // //deleteMany
    // db.collection('Users').deleteMany({ name: 'Breandan' }).then((res) => {
    //     console.log(result);
    // })

        //FindOnenddelete
     db.collection('Users').findOneAndDelete({_id:new ObjectID('59d7656f56978f6974fef784')}).then((res) =>{
        console.log(res)
    })


    //db.close();
});