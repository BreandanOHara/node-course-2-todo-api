const {mongoose} =require('./../server/db/mongoose')
const {Todo} = require ('./../server/models/todo')

var id ='59db346bac879f886f302628'

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('todos', todos)
// })

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('todo', todo)
// })

// todo.findById(id).then((todo)=>{
//     console.log('todo by id', todo)
// });

User.findById('59db346bac879f886f302628').then((user)=>{
    if(!user)
        {
            return console.log('Unable to find user')
        }
        console/log(JSON.stringify(user,undefined,2));
}, (e) =>{
    console.log(e)
})